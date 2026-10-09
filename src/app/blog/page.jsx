import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { breadcrumbSchema } from "@/lib/seo";

export const metadata = {
  title: "Web Design Blog | Web Design Spectrum",
  description:
    "Practical guides on web design, website costs, SEO and digital marketing for small businesses from the Web Design Spectrum team.",
  alternates: {
    canonical: "https://webdesignspectrum.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="container" style={{ padding: "80px 15px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema("Blog", "/blog")) }}
      />
      <h1>Web Design Blog</h1>
      <p>Practical guides for small businesses planning, building and growing a website.</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {blogPosts.map((post) => (
          <li key={post.slug} style={{ margin: "24px 0" }}>
            <h2>
              <Link href={`/blog/${post.slug}`}>{post.heading}</Link>
            </h2>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
