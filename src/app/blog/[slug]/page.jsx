import Link from "next/link";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/blog/MarkdownContent";
import {
  getArticleBySlug,
  getArticles,
  getArticleDescription,
} from "@/lib/articles";

export const dynamicParams = true;

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };

  return {
    title: article.meta_title || article.title,
    description: getArticleDescription(article),
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.meta_title || article.title,
      description: getArticleDescription(article),
      publishedTime: article.created_at || undefined,
      images: article.featured_image_url ? [{
        url: article.featured_image_url,
        alt: article.featured_image_alt || article.title,
      }] : undefined,
    },
  };
}

function formatDate(value) {
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return null;
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const date = formatDate(article.created_at);

  return (
    <article className="article-page">
      <div className="article-container">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link href="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{article.title}</span>
        </nav>

        <header className="article-header">
          <span className="blog-eyebrow">Web Design Spectrum Journal</span>
          <h1>{article.title}</h1>
          {date ? <time dateTime={article.created_at}>{date}</time> : null}
        </header>

        {article.featured_image_url ? (
          <figure className="article-hero-image">
            <img
              src={article.featured_image_url}
              alt={article.featured_image_alt || article.title}
              fetchPriority="high"
            />
          </figure>
        ) : null}

        <MarkdownContent content={article.body} />

        {article.keyword ? (
          <p className="article-keyword"><span>Topic:</span> {article.keyword}</p>
        ) : null}

        <footer className="article-footer">
          <Link href="/blog">← Back to all articles</Link>
        </footer>
      </div>
    </article>
  );
}
