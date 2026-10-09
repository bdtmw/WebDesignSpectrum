export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/web-brief"],
    },
    sitemap: "https://webdesignspectrum.com/sitemap.xml",
    host: "https://webdesignspectrum.com",
  };
}
