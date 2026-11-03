import Link from "next/link";
import MarkdownContent from "@/components/blog/MarkdownContent";

export default function ServicePageContent({ page }) {
  return (
    <section className="managed-service-page">
      <div className="managed-service-container">
        <nav className="managed-service-breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Services</span>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{page.title}</span>
        </nav>

        <header className="managed-service-hero">
          <div className="managed-service-hero-copy">
            <span className="managed-service-eyebrow">Web Design Spectrum Services</span>
            <h1>{page.title}</h1>
            {page.meta_description ? (
              <p className="managed-service-summary">{page.meta_description}</p>
            ) : null}
            <Link href="/contact" className="managed-service-button">
              Discuss your project
            </Link>
          </div>

          {page.featured_image_url ? (
            <figure className="managed-service-image">
              <img
                src={page.featured_image_url}
                alt={page.featured_image_alt || page.title}
                fetchPriority="high"
              />
            </figure>
          ) : (
            <div className="managed-service-visual" aria-hidden="true">
              <span>WEB DESIGN<br />SPECTRUM</span>
            </div>
          )}
        </header>

        <main className="managed-service-content">
          <div className="managed-service-content-label">Service details</div>
          <MarkdownContent content={page.body} />
          {page.keyword ? (
            <p className="managed-service-keyword"><span>Focus keyword:</span> {page.keyword}</p>
          ) : null}
        </main>

        <aside className="managed-service-cta">
          <div>
            <span className="managed-service-eyebrow">Ready to get started?</span>
            <h2>Let’s plan the right solution for your business.</h2>
            <p>Tell us what you need and our team will help you choose the next step.</p>
          </div>
          <Link href="/contact" className="managed-service-button">
            Contact our team
          </Link>
        </aside>
      </div>
    </section>
  );
}
