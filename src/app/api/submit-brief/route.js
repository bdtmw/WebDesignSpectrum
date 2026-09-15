import { NextResponse } from 'next/server';
import { randomBytes, timingSafeEqual } from 'crypto';
import { isUtf8 } from 'buffer';
import JSZip from 'jszip';
import { briefDocx, briefSendMail, briefValidate, BriefInputError } from '@/lib/brief';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const COOKIE = 'WDSBRIEF';
const MAX_UPLOAD = 2 * 1024 * 1024;
const FALLBACK =
  'We could not submit your brief. Your answers are still here. Please retry or email info@webdesignspectrum.com.';

// In-memory state (per server instance). Fine for a single `next start` server;
// on serverless/multi-instance hosting move these to Redis/KV if you need them shared.
const sent = (globalThis.wdsBriefSent ??= new Map());
const attempts = (globalThis.wdsBriefAttempts ??= new Map());

function reply(status, body, res) {
  const r = res ?? NextResponse.json(body, { status });
  r.headers.set('Cache-Control', 'no-store');
  r.headers.set('X-Content-Type-Options', 'nosniff');
  return r;
}

export async function GET(req) {
  const token = req.cookies.get(COOKIE)?.value || randomBytes(32).toString('hex');
  const res = NextResponse.json({ token });
  res.cookies.set(COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: req.nextUrl.protocol === 'https:',
    path: '/api/submit-brief',
  });
  return reply(200, {}, res);
}

function sniff(b) {
  if (b.subarray(0, 5).toString('latin1') === '%PDF-') return 'application/pdf';
  if (b.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return 'image/png';
  if (b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff) return 'image/jpeg';
  if (b.subarray(0, 4).toString('latin1') === 'RIFF' && b.subarray(8, 12).toString('latin1') === 'WEBP') return 'image/webp';
  if (b.subarray(0, 4).equals(Buffer.from([0x50, 0x4b, 0x03, 0x04]))) return 'application/zip';
  if (b.length > 0 && !b.includes(0) && isUtf8(b)) return 'text/plain';
  return 'application/octet-stream';
}

const ALLOWED = {
  pdf: 'application/pdf',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  txt: 'text/plain',
  docx: 'application/zip',
};

async function readUpload(file) {
  if (file === null || typeof file === 'string') return null;
  if (file.name === '' && file.size === 0) return null; // no file chosen
  if (file.size > MAX_UPLOAD) throw new BriefInputError('Upload failed. Please choose a file no larger than 2 MB.');

  const base = file.name.split(/[\\/]/).pop() || '';
  const dot = base.lastIndexOf('.');
  const ext = dot > 0 ? base.slice(dot + 1).toLowerCase() : '';
  const bytes = Buffer.from(await file.arrayBuffer());
  if (!ALLOWED[ext] || sniff(bytes) !== ALLOWED[ext]) {
    throw new BriefInputError('Please attach a PDF, DOCX, TXT, JPG, PNG or WebP file.');
  }

  if (ext === 'docx') {
    let valid = false;
    try {
      const zip = await JSZip.loadAsync(bytes);
      valid = zip.file('word/document.xml') !== null && zip.file('word/vbaProject.bin') === null;
    } catch {
      throw new BriefInputError('Invalid Word document.');
    }
    if (!valid) throw new BriefInputError('Please attach a standard DOCX without macros.');
  }

  const safe = base.replace(/[^A-Za-z0-9._-]/g, '_');
  const lastDot = safe.lastIndexOf('.');
  const stem = safe.slice(0, lastDot > 0 ? lastDot : safe.length).slice(0, 80);
  return {
    name: stem + '.' + ext,
    type: ext === 'docx' ? 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' : ALLOWED[ext],
    bytes,
  };
}

function throttle(ip) {
  const now = Date.now();
  const list = (attempts.get(ip) ?? []).filter((t) => t > now - 3600_000);
  if (list.length >= 5) {
    attempts.set(ip, list);
    return false;
  }
  list.push(now);
  attempts.set(ip, list);
  return true;
}

export async function POST(req) {
  if (Number(req.headers.get('content-length') || 0) > 2_400_000) {
    return reply(413, { message: 'Please keep the attachment under 2 MB.' });
  }

  let form;
  try {
    form = await req.formData();
  } catch {
    return reply(400, { message: 'Please reload this form and try again.' });
  }

  const token = form.get('csrf_token');
  const cookie = req.cookies.get(COOKIE)?.value;
  if (
    typeof token !== 'string' ||
    !cookie ||
    token.length !== cookie.length ||
    !timingSafeEqual(Buffer.from(token), Buffer.from(cookie))
  ) {
    return reply(403, { message: 'Please reload and try again. Your answers have not been sent.' });
  }

  const requestId = form.get('request_id');
  if (typeof requestId !== 'string' || !/^[a-f0-9]{32}$/.test(requestId)) {
    return reply(422, { message: 'Please reload this form and try again.' });
  }
  const previous = sent.get(requestId);
  if (previous) return reply(200, { ok: true, reference: previous, message: 'Your brief has been submitted.' });

  if ((form.get('company_website') ?? '') !== '') return reply(422, { message: 'Unable to submit this form.' });

  try {
    const data = briefValidate(form);
    const upload = await readUpload(form.get('input_20'));

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || req.headers.get('x-real-ip') || 'unknown';
    if (!throttle(ip)) {
      return reply(429, { message: 'Too many attempts. Please try again in an hour or email info@webdesignspectrum.com.' });
    }

    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace('T', '-').slice(0, 15);
    const id = stamp + '-' + randomBytes(3).toString('hex');
    const docx = await briefDocx(data, id, upload?.name ?? 'None');
    await briefSendMail(data, id, docx, upload);

    sent.set(requestId, id);
    if (sent.size > 500) sent.delete(sent.keys().next().value);

    return reply(200, { ok: true, reference: id, message: 'Thank you. Your brief has been submitted. Reference: ' + id });
  } catch (e) {
    if (e instanceof BriefInputError) return reply(422, { message: e.message });
    console.error('WDS brief failure:', e);
    return reply(503, { message: FALLBACK });
  }
}
