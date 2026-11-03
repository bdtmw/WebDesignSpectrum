import Link from "next/link";
import { getArticles, getArticleDescription } from "@/lib/articles";

export const metadata = {
  title: "Web Design and Small Business Insights",
  description: "Practical articles on web design, SEO, website performance, and digital growth for small businesses.",
  alternates: { canonical: "/blog" },
};

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

export default function BlogIndexPage() {
  const articles = getArticles();

  return (
    <section className="blog-page">
      <div className="blog-container">
        <header className="blog-heading">
          <span className="blog-eyebrow">Web Design Spectrum Journal</span>
          <h1>Ideas for a stronger website</h1>
          <p>Practical guidance on web design, SEO, maintenance, and digital growth for small businesses.</p>
        </header>

        {articles.length ? (
          <div className="blog-grid">
            {articles.map((article) => {
              const date = formatDate(article.created_at);
              return (
                <article className="blog-card" key={article.slug}>
                  <Link className="blog-card-image" href={`/blog/${article.slug}`} aria-label={`Read ${article.title}`}>
                    {article.featured_image_url ? (
                      <img
                        src={article.featured_image_url}
                        alt={article.featured_image_alt || ""}
                        loading="lazy"
                      />
                    ) : (
                      <span className="blog-card-placeholder">Web Design Spectrum</span>
                    )}
                  </Link>
                  <div className="blog-card-body">
                    {date ? <time dateTime={article.created_at}>{date}</time> : null}
                    <h2><Link href={`/blog/${article.slug}`}>{article.title}</Link></h2>
                    <p>{getArticleDescription(article)}</p>
                    <Link className="blog-read-more" href={`/blog/${article.slug}`}>
                      Read article <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="blog-empty">
            <h2>New articles are on the way</h2>
            <p>Please check back soon for practical website and digital growth tips.</p>
          </div>
        )}
      </div>
    </section>
  );
}
