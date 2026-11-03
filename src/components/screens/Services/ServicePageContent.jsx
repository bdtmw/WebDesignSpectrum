import Link from "next/link";
import MarkdownContent from "@/components/blog/MarkdownContent";

export default function ServicePageContent({ page }) {
  return (
    <section className="article-page service-page-content">
      <div className="article-container">
        <nav className="article-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Services</span>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page.title}</span>
        </nav>

        <header className="article-header">
          <span className="blog-eyebrow">Web Design Spectrum Services</span>
          <h1>{page.title}</h1>
          {page.meta_description ? <p className="service-page-summary">{page.meta_description}</p> : null}
        </header>

        {page.featured_image_url ? (
          <figure className="article-hero-image">
            <img
              src={page.featured_image_url}
              alt={page.featured_image_alt || page.title}
              fetchPriority="high"
            />
          </figure>
        ) : null}

        <MarkdownContent content={page.body} />

        {page.keyword ? (
          <p className="article-keyword"><span>Topic:</span> {page.keyword}</p>
        ) : null}

        <aside className="service-page-cta">
          <div>
            <span className="blog-eyebrow">Ready to get started?</span>
            <h2>Let’s build the right solution for your business.</h2>
            <p>Tell us what you need and our team will help you plan the next step.</p>
          </div>
          <Link href="/contact" className="service-page-cta-button">Contact our team</Link>
        </aside>
      </div>
    </section>
  );
}
