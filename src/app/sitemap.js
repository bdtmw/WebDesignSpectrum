import fs from "node:fs";
import path from "node:path";
import { getArticles } from "@/lib/articles";

export const dynamic = "force-static";

const SITE_URL = "https://webdesignspectrum.com";
const APP_DIRECTORY = path.join(process.cwd(), "src", "app");
const PAGE_FILES = ["page.jsx", "page.js", "page.tsx", "page.ts"];

// Routes that never belong in the sitemap. A page can also opt out on its own
// by exporting metadata with `robots: { index: false }`.
const EXCLUDED_ROUTES = new Set(["/api"]);

const PRIORITY_OVERRIDES = {
  "/": 1.0,
  "/blog": 0.6,
  "/privacy": 0.3,
  "/terms": 0.3,
};
const DEFAULT_PRIORITY = 0.8;

function findPageFile(directory) {
  return PAGE_FILES.map((file) => path.join(directory, file)).find((file) =>
    fs.existsSync(file),
  );
}

function isNoindex(pageFile) {
  return /index\s*:\s*false/.test(fs.readFileSync(pageFile, "utf8"));
}

// Walks src/app and returns the public route of every static page.
// Skips dynamic segments ([slug]), private folders (_name), parallel routes
// (@slot), excluded routes and pages marked noindex. Route groups (group)
// do not appear in the URL.
function discoverRoutes(directory = APP_DIRECTORY, route = "") {
  if (!fs.existsSync(directory)) return [];

  const routes = [];
  const pageFile = findPageFile(directory);
  if (pageFile && !isNoindex(pageFile)) routes.push(route || "/");

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const name = entry.name;
    if (/^[[_@]/.test(name)) continue;

    const segment = /^\(.*\)$/.test(name) ? "" : `/${name}`;
    const childRoute = `${route}${segment}`;
    if (EXCLUDED_ROUTES.has(childRoute)) continue;

    routes.push(...discoverRoutes(path.join(directory, name), childRoute));
  }

  return routes;
}

export default function sitemap() {
  const pages = [...new Set(discoverRoutes())]
    .sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)))
    .map((route) => ({
      url: route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`,
      changeFrequency: "monthly",
      priority: PRIORITY_OVERRIDES[route] ?? DEFAULT_PRIORITY,
    }));

  const articles = getArticles().map((article) => ({
    url: `${SITE_URL}/blog/${article.slug}`,
    lastModified: article.created_at ? new Date(article.created_at) : undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...articles];
}
