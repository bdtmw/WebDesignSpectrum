import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/data/blogPosts";
import RichText from "@/components/screens/Blog/RichText";
import { SITE_URL, faqSchema } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.heading,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.datePublished,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: "Web Design Spectrum" },
    publisher: {
      "@type": "Organization",
      name: "Web Design Spectrum",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/Logo.png` },
    },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.heading, item: url },
    ],
  };

  return (
    <article className="container" style={{ padding: "80px 15px", maxWidth: 860 }}>
      {[articleSchema, breadcrumb, faqSchema(post.faq)].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <p>
        <Link href="/blog">&larr; Back to the blog</Link>
      </p>
      <h1>{post.heading}</h1>
      {post.intro.map((p, i) => (
        <p key={i}>
          <RichText text={p} />
        </p>
      ))}

      {post.sections.map((section) => (
        <section key={section.heading} style={{ marginTop: 32 }}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((p, i) => (
            <p key={i}>
              <RichText text={p} />
            </p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section style={{ marginTop: 32 }}>
        <h2>Frequently asked questions</h2>
        {post.faq.map((item) => (
          <div key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>

      <p style={{ marginTop: 32 }}>
        <strong>
          <RichText text={post.cta} />
        </strong>
      </p>
    </article>
  );
}
