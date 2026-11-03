import fs from "node:fs";
import path from "node:path";

export const SERVICE_PAGE_PATHS = [
  "/wyoming-web-design",
  "/cms-website-development",
  "/ecommerce-web-development",
  "/web-application-development",
  "/mobile-application-development",
  "/logo-and-branding",
  "/seo-friendly-web-design",
  "/social-media-marketing-services-for-small-businesses",
];

const SERVICE_PAGE_SLUGS = new Set(
  SERVICE_PAGE_PATHS.map((servicePath) => servicePath.slice(1)),
);

function normalizeServicePath(value) {
  if (typeof value !== "string" || !value.trim()) return null;

  try {
    const parsed = new URL(value.trim(), "https://webdesignspectrum.com");
    if (!["webdesignspectrum.com", "www.webdesignspectrum.com"].includes(parsed.hostname.toLowerCase())) {
      return null;
    }

    const normalized = decodeURIComponent(parsed.pathname).replace(/\/+$/, "").toLowerCase() || "/";
    return SERVICE_PAGE_PATHS.includes(normalized) ? normalized : null;
  } catch {
    return null;
  }
}

export function resolveServicePagePath(value) {
  const route = normalizeServicePath(value);
  return route ? { route, slug: route.slice(1) } : null;
}

export function getServicePageBySlug(slug) {
  if (typeof slug !== "string" || !SERVICE_PAGE_SLUGS.has(slug)) return null;

  const filename = path.join(process.cwd(), "content", "service-pages", `${slug}.json`);
  if (!fs.existsSync(filename)) return null;

  try {
    const page = JSON.parse(fs.readFileSync(filename, "utf8"));
    if (typeof page.title !== "string" || typeof page.body !== "string") return null;
    return { ...page, slug, url: `/${slug}` };
  } catch {
    return null;
  }
}
