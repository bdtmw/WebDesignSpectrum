import JSZip from 'jszip';
import nodemailer from 'nodemailer';

export const BRIEF_FIELDS = {
  input_22_3: 'Name',
  input_23: 'Email',
  input_24: 'Contact Number',
  input_10: 'Exact name of your business/organization?',
  input_21: 'Kindly state the purpose of your website:',
  input_12: 'State the target audience of your website',
  input_18: 'Please list some of your competitors and their websites (if any)',
  input_25: 'As per the navigation of your website, kindly state the title of your WebPages',
  input_26: 'Do you have any specific design, preferences?',
  input_27: 'Reference Link',
  input_28: 'What type of overall feeling would you like to project with your new Website Domain?',
  input_19: 'When would you like your website to go live?',
  input_29: 'Do you have any additional comments?',
  input_31: 'Do you have a Domain Name?',
  input_32: 'Do you want us to provide server hosting for your website?',
  input_33: 'Would you like to have mobile application of this business in future?',
};

/** Errors whose message is safe to show the visitor (HTTP 422). */
export class BriefInputError extends Error {}

const FIELD_ENTRIES = Object.entries(BRIEF_FIELDS);
const REQUIRED = ['input_24', 'input_10', 'input_21', 'input_26', 'input_31', 'input_32', 'input_33'];
const YES_NO = ['input_26', 'input_31', 'input_32', 'input_33'];
const CONTROL_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F]/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function briefValidate(form) {
  const data = {};
  for (const [key, question] of FIELD_ENTRIES) {
    let v = form.get(key);
    if (v === null && key === 'input_22_3') v = form.get('input_22.3');
    if (v === null) v = '';
    if (typeof v !== 'string' || Buffer.byteLength(v, 'utf8') > 12000 || CONTROL_CHARS.test(v)) {
      throw new BriefInputError('Please check: ' + question);
    }
    data[key] = v.replace(/\r\n?/g, '\n').trim();
  }
  for (const key of REQUIRED) if (data[key] === '') throw new BriefInputError('Please complete: ' + BRIEF_FIELDS[key]);
  if (data.input_23 !== '' && !EMAIL.test(data.input_23)) throw new BriefInputError('Please enter a valid email.');
  for (const key of YES_NO) if (data[key] !== 'YES' && data[key] !== 'NO') throw new BriefInputError('Please select Yes or No.');
  if (data.input_26 === 'YES' && data.input_27 === '') throw new BriefInputError('Please enter a reference link.');
  if (data.input_26 === 'NO') {
    data.input_27 = '';
    data.input_28 = '';
  }
  return data;
}

const xml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');

function p(text, style = 'Normal') {
  const runs = text
    .split('\n')
    .map((line, i) => (i ? '<w:r><w:br/></w:r>' : '') + '<w:r><w:t xml:space="preserve">' + xml(line) + '</w:t></w:r>')
    .join('');
  return '<w:p><w:pPr><w:pStyle w:val="' + style + '"/></w:pPr>' + runs + '</w:p>';
}

export async function briefDocx(data, id, attachment = 'None') {
  const received = new Date().toISOString().slice(0, 16).replace('T', ' ');
  let body =
    p('Website Brief', 'Title') +
    p('Web Design Spectrum') +
    p('Client responses for website planning') +
    p('Reference: ' + id + ' | Received: ' + received + ' UTC') +
    p('Website Design Questionnaire', 'Heading1');

  for (const [key, question] of FIELD_ENTRIES) {
    if (key === 'input_31') {
      body +=
        p('Do you have any images, sketches or documents that might be helpful?', 'Question') +
        p('Answer: ' + (attachment === 'None' ? 'Not provided' : attachment + ' (attached separately to this email)')) +
        p('Domain and Web Hosting Details', 'Heading1');
    }
    let answer = data[key] ?? '';
    if ((key === 'input_27' || key === 'input_28') && data.input_26 === 'NO') answer = 'Not applicable';
    body += p(question, 'Question') + p('Answer: ' + (answer === '' ? 'Not provided' : answer));
  }

  const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';
  const document =
    '<?xml version="1.0" encoding="UTF-8"?><w:document xmlns:w="' + W + '"><w:body>' + body +
    '<w:sectPr><w:pgSz w:w="11906" w:h="16838"/><w:pgMar w:top="1134" w:right="1134" w:bottom="1134" w:left="1134"/></w:sectPr></w:body></w:document>';
  const styles =
    '<?xml version="1.0"?><w:styles xmlns:w="' + W + '"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial" w:cs="Arial"/><w:sz w:val="22"/><w:color w:val="000000"/></w:rPr></w:rPrDefault><w:pPrDefault><w:pPr><w:spacing w:after="160" w:line="276" w:lineRule="auto"/><w:widowControl/></w:pPr></w:pPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style><w:style w:type="paragraph" w:styleId="Title"><w:name w:val="Title"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/></w:pPr><w:rPr><w:b/><w:sz w:val="44"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Heading1"><w:name w:val="heading 1"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="280" w:after="160"/><w:outlineLvl w:val="0"/></w:pPr><w:rPr><w:b/><w:sz w:val="28"/></w:rPr></w:style><w:style w:type="paragraph" w:styleId="Question"><w:name w:val="Question"/><w:basedOn w:val="Normal"/><w:pPr><w:keepNext/><w:spacing w:before="120" w:after="60"/></w:pPr><w:rPr><w:b/></w:rPr></w:style></w:styles>';

  const zip = new JSZip();
  zip.file(
    '[Content_Types].xml',
    '<?xml version="1.0"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/></Types>'
  );
  zip.file(
    '_rels/.rels',
    '<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>'
  );
  zip.file(
    'word/_rels/document.xml.rels',
    '<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>'
  );
  zip.file('word/document.xml', document);
  zip.file('word/styles.xml', styles);
  return zip.generateAsync({ type: 'nodebuffer', compression: 'DEFLATE' });
}

export async function briefSendMail(data, id, docx, upload) {
  if (!process.env.SMTP_HOST) throw new Error('SMTP_HOST is not configured.');
  const port = Number(process.env.SMTP_PORT || 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS } : undefined,
  });

  const attachments = [
    {
      filename: 'Website-Brief-' + id + '.docx',
      content: docx,
      contentType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    },
  ];
  if (upload) attachments.push({ filename: upload.name, content: upload.bytes, contentType: upload.type });

  await transport.sendMail({
    from: process.env.MAIL_FROM || 'Web Design Spectrum <info@webdesignspectrum.com>',
    to: process.env.MAIL_TO || 'info@webdesignspectrum.com',
    replyTo: data.input_23 || undefined,
    subject: 'Website Brief ' + id,
    text:
      'New website brief\r\nReference: ' + id +
      '\r\nBusiness: ' + data.input_10 +
      '\r\nName: ' + data.input_22_3 +
      '\r\nEmail: ' + data.input_23 +
      '\r\n\r\nThe Word attachment contains every question and answer.',
    attachments,
  });
}
