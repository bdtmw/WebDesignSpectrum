import React from 'react'
import Script from 'next/script'
import FaqSection from '@/components/sections/FaqSection'
import { websitePortfolio } from '@/components/hooks/Portfolio'
import BannerSection from '@/components/sections/BannerSection'
import WhySection from '@/components/screens/Services/WhySection'
import { seoFriendlyWebDesign } from '@/data/seoFriendlyWebDesign'
import BusinessCase from '@/components/screens/Services/BusinessCase'
import AwardSection from '@/components/screens/Services/AwardSection'
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import ProcessSection from '@/components/screens/Services/ProcessSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import ResourceSection from '@/components/screens/Services/ResourceSection'
import WorkDetailSection from '@/components/screens/Home/WorkDetailSection'
import BehindStoreSection from '@/components/screens/Services/BehindStoreSection'
import ServiceDetailSection from '@/components/screens/Services/ServiceDetailSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'



export const metadata = {
    title: "SEO Friendly Web Design Service | SEO Friendly Web Design Company",

    description:
        "An SEO friendly web design service from Web Design Spectrum. We build fast, search-optimized websites engineered to rank on Google from day one. Call (307) 218-3240.",

    keywords: [
        "seo friendly web design service",
        "seo friendly web design company",
        "seo optimized web design",
        "search engine friendly website design",
        "seo web design services",
    ],

    alternates: {
        canonical: "https://webdesignspectrum.com/seo-friendly-web-design",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SEO Friendly Web Design",
    provider: {
        "@type": "LocalBusiness",
        name: "Web Design Spectrum",
        telephone: "+13072183240",
        address: {
            "@type": "PostalAddress",
            streetAddress: "1309 Coffeen Ave. STE 1200",
            addressLocality: "Sheridan",
            addressRegion: "WY",
            postalCode: "82801",
            addressCountry: "US",
        },
    },
    areaServed: ["United States", "Wyoming", "Sheridan"],
    description:
        "SEO friendly web design service building fast, search-optimized websites engineered to rank.",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What makes a website SEO friendly?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "An SEO friendly website is built so search engines can easily crawl, understand and rank it: fast load times, clean semantic code, a logical structure, mobile-first design, proper heading and metadata, structured data and optimized content. We build these in from the first line of code rather than bolting them on later.",
            },
        },
        {
            "@type": "Question",
            name: "Is SEO friendly web design the same as an SEO campaign?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "They work together but are not the same. SEO friendly web design builds the technical and on-page foundation so your site can rank. An ongoing SEO campaign then adds content, links and refinement over time. A site without the foundation makes every later campaign harder and more expensive.",
            },
        },
        {
            "@type": "Question",
            name: "Will an SEO friendly website guarantee first-page rankings?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No honest company can guarantee a specific ranking, because Google controls the results. What we guarantee is a site built to every technical SEO best practice, giving you the strongest possible foundation to compete and rank for your target terms.",
            },
        },
        {
            "@type": "Question",
            name: "Can you make my existing website more SEO friendly?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We audit your current site for technical and on-page SEO issues, then fix or rebuild what is holding you back, improving speed, structure, code and content while preserving the rankings you already have.",
            },
        },
    ],
};



const page = () => {
    return (

        <>
            <Script
                id="service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(serviceSchema),
                }}
            />

            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <div>
                <BannerSection
                    title={seoFriendlyWebDesign.banner.title}
                    description={seoFriendlyWebDesign.banner.description}
                    minititle={seoFriendlyWebDesign.banner.minititle}
                />
                <AwardSection
                    awards={seoFriendlyWebDesign.awards.items}
                    title={seoFriendlyWebDesign.awards.title}
                />

                <BehindStoreSection
                    eyebrow={seoFriendlyWebDesign.behindStore.eyebrow}
                    title={seoFriendlyWebDesign.behindStore.title}
                    subtitle={seoFriendlyWebDesign.behindStore.subtitle}
                    description={seoFriendlyWebDesign.behindStore.description}
                    description2={seoFriendlyWebDesign.behindStore.description2}
                    layers={seoFriendlyWebDesign.layers}
                />

                <ServiceDetailSection
                    eyebrow={seoFriendlyWebDesign.servicesSection.eyebrow}
                    title={seoFriendlyWebDesign.servicesSection.title}
                    description={seoFriendlyWebDesign.servicesSection.description}
                    services={seoFriendlyWebDesign.services}
                />

                <WhySection
                    eyebrow={seoFriendlyWebDesign.whySection.eyebrow}
                    title={seoFriendlyWebDesign.whySection.title}
                    description={seoFriendlyWebDesign.whySection.description}
                    items={seoFriendlyWebDesign.whyChooseUs}
                />


                <ProcessSection
                    eyebrow={seoFriendlyWebDesign.processSection.eyebrow}
                    title={seoFriendlyWebDesign.processSection.title}
                    description={seoFriendlyWebDesign.processSection.description}
                    processes={seoFriendlyWebDesign.process}
                />

                <PortfolioSection
                    title={seoFriendlyWebDesign.portfolioSection.title}
                    heading={
                        <>
                            {seoFriendlyWebDesign.portfolioSection.heading.before}{" "}
                            <span>
                                {seoFriendlyWebDesign.portfolioSection.heading.highlight}
                            </span>
                        </>
                    }
                    description={seoFriendlyWebDesign.portfolioSection.description}
                    showTabs={seoFriendlyWebDesign.portfolioSection.showTabs}
                    data={websitePortfolio}
                />

                <ResourceSection
                    eyebrow={seoFriendlyWebDesign.resourceSection.eyebrow}
                    title={seoFriendlyWebDesign.resourceSection.title}
                    description={seoFriendlyWebDesign.resourceSection.description}
                    resources={seoFriendlyWebDesign.resources}
                />

                <BusinessCase
                    eyebrow={seoFriendlyWebDesign.businessCase.eyebrow}
                    title={seoFriendlyWebDesign.businessCase.title}
                    subtitle={seoFriendlyWebDesign.businessCase.subtitle}
                    description={seoFriendlyWebDesign.businessCase.description}
                    features={seoFriendlyWebDesign.businessCase.features}
                    conclusion={seoFriendlyWebDesign.businessCase.conclusion}
                    image={seoFriendlyWebDesign.businessCase.image}
                    buttonText={seoFriendlyWebDesign.businessCase.buttonText}
                />

                <TestimonialSection />

                <WorkDetailSection
                    title={seoFriendlyWebDesign.workDetail.title}
                    subtitle={
                        <>
                            <span>{seoFriendlyWebDesign.workDetail.highlight}</span>
                            {seoFriendlyWebDesign.workDetail.suffix}
                        </>
                    }
                    description={seoFriendlyWebDesign.workDetail.description}
                />

                <FaqSection
                    title={seoFriendlyWebDesign.faqSection.title}
                    faqData={seoFriendlyWebDesign.faq}
                />

                <BeginYourJourneySection />
            </div >
        </>
    )
}

export default page
