import { breadcrumbSchema, faqSchema as buildFaqSchema } from "@/lib/seo";
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
    title: "SEO Friendly Web Design Service | Web Design Spectrum",

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

const faqSchema = buildFaqSchema(seoFriendlyWebDesign.faq);



const page = () => {
    return (

        <>
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema("SEO Friendly Web Design", "/seo-friendly-web-design")),
                }}
            />

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
