export const blogPosts = [
  {
    slug: "small-business-website-cost",
    title: "Small Business Website Cost Guide | Web Design Spectrum",
    heading: "How Much Does a Small Business Website Cost?",
    description:
      "Learn what drives the cost of a small business website, from design and features to hosting, and how to get a fair quote from a Wyoming web design company.",
    datePublished: "2026-10-09",
    intro: [
      "If you run a small business in Wyoming, \"how much will a website cost?\" is usually the first question. The honest answer is that it depends on what you need. This guide explains what drives the price, so you can compare quotes with confidence.",
    ],
    sections: [
      {
        heading: "What affects the cost of a website",
        list: [
          "Size: a five-page site costs less than a site with fifty pages.",
          "Design: a template-based design is cheaper than a fully custom one.",
          "Features: booking, online payments, member areas and custom tools add build time.",
          "Content: writing, photos and logo work are separate costs if you need them.",
          "Platform: WordPress, Shopify and custom builds each price differently.",
        ],
      },
      {
        heading: "Template vs custom design",
        paragraphs: [
          "A template gets you online faster and costs less, but you share the look with other sites. A custom design is built around your brand and goals. Most small businesses start with a polished semi-custom build and expand later. If you expect to edit content yourself, ask about [CMS website development](/cms-website-development).",
        ],
      },
      {
        heading: "Costs people forget",
        list: [
          "Domain name, renewed every year.",
          "Hosting.",
          "Ongoing updates, backups and security.",
          "SEO and content after launch.",
        ],
      },
      {
        heading: "How to compare quotes",
        list: [
          "Ask what pages and features are included.",
          "Ask who owns the site and the content when the project ends.",
          "Ask about revisions, timeline and support after launch.",
          "Check that the quote includes mobile design and basic SEO.",
        ],
      },
      {
        heading: "What a fair price looks like",
        paragraphs: [
          "The cheapest quote is rarely the best. Look for a clear scope, payments tied to milestones, and a team that explains its choices. You can see how we structure this on our [web design packages](/packages) page, or read about our approach as a [Wyoming web design company](/wyoming-web-design).",
        ],
      },
    ],
    faq: [
      {
        question: "How long does a small business website take?",
        answer:
          "Most small business websites take a few weeks, depending on how quickly you send content and approve designs.",
      },
      {
        question: "Can I pay for my website in stages?",
        answer:
          "Yes. Many agencies, including Web Design Spectrum, tie payments to project milestones so the cost stays manageable.",
      },
      {
        question: "Do I need a custom website?",
        answer:
          "Not always. A well-built template or semi-custom site is often enough to start. A good agency will recommend what fits your budget and goals.",
      },
    ],
    cta: "Get a free quote from Web Design Spectrum. Call (307) 218-3240 or [contact us](/contact).",
  },
];

export function getPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
