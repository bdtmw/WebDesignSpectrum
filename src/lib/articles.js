import fs from "node:fs";
import path from "node:path";

const ARTICLES_DIRECTORY = path.join(process.cwd(), "content", "articles");

export function getArticles() {
  if (!fs.existsSync(ARTICLES_DIRECTORY)) return [];

  return fs
    .readdirSync(ARTICLES_DIRECTORY)
    .filter((filename) => filename.endsWith(".json"))
    .map((filename) => {
      try {
        const article = JSON.parse(
          fs.readFileSync(path.join(ARTICLES_DIRECTORY, filename), "utf8"),
        );
        return {
          ...article,
          slug: article.slug || filename.slice(0, -".json".length),
        };
      } catch {
        return null;
      }
    })
    .filter((article) => article && typeof article.title === "string" && typeof article.body === "string")
    .sort((a, b) => new Date(b.created_at || 0) - new Date(a.created_at || 0));
}

export function getArticleBySlug(slug) {
  if (typeof slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    return null;
  }

  const filename = path.join(ARTICLES_DIRECTORY, `${slug}.json`);
  if (!fs.existsSync(filename)) return null;

  try {
    const article = JSON.parse(fs.readFileSync(filename, "utf8"));
    if (article.slug && article.slug !== slug) return null;
    if (typeof article.title !== "string" || typeof article.body !== "string") return null;
    return { ...article, slug };
  } catch {
    return null;
  }
}

export function getArticleDescription(article) {
  if (typeof article.meta_description === "string" && article.meta_description.trim()) {
    return article.meta_description.trim();
  }

  return article.body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#>*_\x60-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 155);
}
