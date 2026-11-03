import { timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 1024 * 1024;
const MAX_TITLE_LENGTH = 300;
const MAX_BODY_LENGTH = 500_000;

function json(data, status = 200) {
  return Response.json(data, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function safeEqual(left, right) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

function isStringOrNull(value) {
  return value === null || typeof value === "string";
}

function isAbsoluteHttpUrl(value) {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

function validateArticle(payload) {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return { error: "Request body must be a JSON object." };
  }

  const { document_id, title, body } = payload;
  if (!Number.isSafeInteger(document_id) || document_id < 1) {
    return { error: "document_id must be a positive integer." };
  }
  if (typeof title !== "string" || !title.trim() || title.length > MAX_TITLE_LENGTH) {
    return { error: `title must be a non-empty string of at most ${MAX_TITLE_LENGTH} characters.` };
  }
  if (typeof body !== "string" || !body.trim() || body.length > MAX_BODY_LENGTH) {
    return { error: `body must be a non-empty Markdown string of at most ${MAX_BODY_LENGTH} characters.` };
  }

  for (const field of ["meta_title", "meta_description", "url", "featured_image_url", "featured_image_alt", "keyword"]) {
    if (!(field in payload) || !isStringOrNull(payload[field])) {
      return { error: `${field} must be a string or null.` };
    }
  }
  if (payload.slug !== undefined && (typeof payload.slug !== "string" || !payload.slug.trim())) {
    return { error: "slug must be a non-empty string when provided." };
  }
  if (!Array.isArray(payload.images) || !payload.images.every(isAbsoluteHttpUrl)) {
    return { error: "images must be an array of absolute HTTP or HTTPS URLs." };
  }
  if (!isAbsoluteHttpUrl(payload.featured_image_url) && payload.featured_image_url !== null) {
    return { error: "featured_image_url must be an absolute HTTP or HTTPS URL or null." };
  }
  if (typeof payload.created_at !== "string" || !Number.isFinite(Date.parse(payload.created_at))) {
    return { error: "created_at must be a valid ISO 8601 timestamp." };
  }

  const slug = slugify(payload.slug || title);
  if (!slug) return { error: "A usable slug could not be derived from the title." };

  return {
    article: {
      document_id,
      title: title.trim(),
      body,
      meta_title: payload.meta_title,
      meta_description: payload.meta_description,
      slug,
      url: payload.url,
      featured_image_url: payload.featured_image_url,
      featured_image_alt: payload.featured_image_alt,
      images: payload.images,
      keyword: payload.keyword,
      created_at: payload.created_at,
    },
  };
}

async function githubRequest(path, token, options = {}) {
  return fetch(`https://api.github.com/repos/${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
    cache: "no-store",
  });
}

export async function POST(request) {
  const expectedToken = process.env.ARTICLE_WEBHOOK_TOKEN;
  if (!expectedToken) return json({ error: "Webhook is not configured." }, 503);

  const authorization = request.headers.get("authorization") || "";
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  if (!match || !safeEqual(match[1], expectedToken)) {
    return json({ error: "Unauthorized." }, 401);
  }

  const githubToken = process.env.GITHUB_CONTENT_TOKEN;
  if (!githubToken) return json({ error: "Article storage is not configured." }, 503);

  const repository = process.env.ARTICLE_GITHUB_REPOSITORY || "bdtmw/WebDesignSpectrum";
  const branch = process.env.ARTICLE_GITHUB_BRANCH || "main";
  if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repository)) {
    return json({ error: "ARTICLE_GITHUB_REPOSITORY must use owner/repository format." }, 500);
  }

  const rawBody = await request.text();
  if (Buffer.byteLength(rawBody, "utf8") > MAX_BODY_BYTES) {
    return json({ error: "Request body exceeds the 1 MB limit." }, 413);
  }

  let payload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return json({ error: "Request body must be valid JSON." }, 400);
  }

  const validation = validateArticle(payload);
  if (validation.error) return json({ error: validation.error }, 400);
  const article = validation.article;
  const path = `content/articles/${article.slug}.json`;
  const encodedPath = path.split("/").map(encodeURIComponent).join("/");
  const base = `${repository}/contents/${encodedPath}`;
  const ref = encodeURIComponent(branch);

  let existingSha = null;
  const existing = await githubRequest(`${base}?ref=${ref}`, githubToken);
  if (existing.ok) {
    const file = await existing.json();
    existingSha = file.sha;
  } else if (existing.status !== 404) {
    return json({ error: "Could not check the existing article in GitHub." }, 502);
  }

  const content = Buffer.from(`${JSON.stringify(article, null, 2)}\n`, "utf8").toString("base64");
  const saved = await githubRequest(base, githubToken, {
    method: "PUT",
    body: JSON.stringify({
      message: `${existingSha ? "Update" : "Add"} article: ${article.title}`,
      content,
      branch,
      ...(existingSha ? { sha: existingSha } : {}),
    }),
  });

  if (!saved.ok) {
    return json({ error: "GitHub could not save the article. Please retry the request." }, saved.status === 409 ? 409 : 502);
  }

  return json({
    success: true,
    document_id: article.document_id,
    slug: article.slug,
    storage_path: path,
    action: existingSha ? "updated" : "created",
  }, existingSha ? 200 : 201);
}
