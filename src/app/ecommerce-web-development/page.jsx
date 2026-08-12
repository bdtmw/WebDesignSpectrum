import { websitePortfolio } from '@/components/hooks/Portfolio'
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import WorkDetailSection from '@/components/screens/Home/WorkDetailSection'
import AwardSection from '@/components/screens/Services/AwardSection'
import BehindStoreSection from '@/components/screens/Services/BehindStoreSection'
import BusinessCase from '@/components/screens/Services/BusinessCase'
import ProcessSection from '@/components/screens/Services/ProcessSection'
import ResourceSection from '@/components/screens/Services/ResourceSection'
import ServiceDetailSection from '@/components/screens/Services/ServiceDetailSection'
import WhySection from '@/components/screens/Services/WhySection'
import BannerSection from '@/components/sections/BannerSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import FaqSection from '@/components/sections/FaqSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import { ecommerceWebsiteDevelopment } from '@/data/ecommerceWebsiteDevelopment'
import Script from 'next/script'
import React from 'react'



export const metadata = {
    title: "Ecommerce Web Development Services | Ecommerce Development Agency",

    description:
        "Web Design Spectrum is an ecommerce web development agency offering full-service ecommerce web development services — Shopify, WooCommerce, Magento & custom builds. Call (307) 218-3240.",

    keywords: [
        "ecommerce web development",
        "ecommerce web development services",
        "ecommerce web development agency",
        "ecommerce website development company",
        "custom ecommerce development",
    ],

    alternates: {
        canonical: "https://webdesignspectrum.com/ecommerce-web-development",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Web Development",
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
        "Full-service ecommerce web development services: Shopify, WooCommerce, Magento and custom-built online stores.",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much does ecommerce web development cost?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on scope: a lean Shopify launch costs far less than a custom multi-vendor marketplace. We publish package pricing and provide fixed quotes after discovery, so you always know the number before work begins.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to build an online store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Simple stores can launch in a few weeks; complex custom builds typically run two to four months. Your project plan includes a milestone schedule from day one.",
            },
        },
        {
            "@type": "Question",
            name: "Which ecommerce platform is best for my business?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "There is no universal answer, which is why platform selection is part of our discovery phase. We recommend based on your catalog size, budget, integrations and growth plans.",
            },
        },
        {
            "@type": "Question",
            name: "Can you fix or redesign my existing store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Redesigns, rescues and replatforming projects are a core part of our ecommerce web development services, and we handle data migration and SEO preservation as standard.",
            },
        },
    ],
};


const Page = () => {
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
                    title={ecommerceWebsiteDevelopment.banner.title}
                    description={ecommerceWebsiteDevelopment.banner.description}
                    minititle={ecommerceWebsiteDevelopment.banner.minititle}
                >
                </BannerSection>
                <AwardSection
                    awards={ecommerceWebsiteDevelopment.awards.items}
                    title={ecommerceWebsiteDevelopment.awards.title}
                />

                <BehindStoreSection
                    eyebrow={ecommerceWebsiteDevelopment.behindStore.eyebrow}
                    title={ecommerceWebsiteDevelopment.behindStore.title}
                    subtitle={ecommerceWebsiteDevelopment.behindStore.subtitle}
                    description={ecommerceWebsiteDevelopment.behindStore.description}
                    description2={ecommerceWebsiteDevelopment.behindStore.description2}
                    layers={ecommerceWebsiteDevelopment.layers}
                />

                <ServiceDetailSection
                    eyebrow={ecommerceWebsiteDevelopment.servicesSection.eyebrow}
                    title={ecommerceWebsiteDevelopment.servicesSection.title}
                    description={ecommerceWebsiteDevelopment.servicesSection.description}
                    services={ecommerceWebsiteDevelopment.services}
                />

                <WhySection
                    eyebrow={ecommerceWebsiteDevelopment.whySection.eyebrow}
                    title={ecommerceWebsiteDevelopment.whySection.title}
                    description={ecommerceWebsiteDevelopment.whySection.description}
                    items={ecommerceWebsiteDevelopment.whyChooseUs}
                />


                <ProcessSection
                    eyebrow={ecommerceWebsiteDevelopment.processSection.eyebrow}
                    title={ecommerceWebsiteDevelopment.processSection.title}
                    description={ecommerceWebsiteDevelopment.processSection.description}
                    processes={ecommerceWebsiteDevelopment.process}
                />

                <PortfolioSection
                    title={ecommerceWebsiteDevelopment.portfolioSection.title}
                    heading={
                        <>
                            {ecommerceWebsiteDevelopment.portfolioSection.heading.before}{" "}
                            <span>
                                {ecommerceWebsiteDevelopment.portfolioSection.heading.highlight}
                            </span>
                        </>
                    }
                    description={ecommerceWebsiteDevelopment.portfolioSection.description}
                    showTabs={ecommerceWebsiteDevelopment.portfolioSection.showTabs}
                    data={websitePortfolio}
                />

                <ResourceSection
                    eyebrow={ecommerceWebsiteDevelopment.resourceSection.eyebrow}
                    title={ecommerceWebsiteDevelopment.resourceSection.title}
                    description={ecommerceWebsiteDevelopment.resourceSection.description}
                    resources={ecommerceWebsiteDevelopment.resources}
                />

                <BusinessCase
                    eyebrow={ecommerceWebsiteDevelopment.businessCase.eyebrow}
                    title={ecommerceWebsiteDevelopment.businessCase.title}
                    subtitle={ecommerceWebsiteDevelopment.businessCase.subtitle}
                    description={ecommerceWebsiteDevelopment.businessCase.description}
                    features={ecommerceWebsiteDevelopment.businessCase.features}
                    conclusion={ecommerceWebsiteDevelopment.businessCase.conclusion}
                    image={ecommerceWebsiteDevelopment.businessCase.image}
                    buttonText={ecommerceWebsiteDevelopment.businessCase.buttonText}
                />

                <TestimonialSection />

                <WorkDetailSection
                    title={ecommerceWebsiteDevelopment.workDetail.title}
                    subtitle={
                        <>
                            <span>{ecommerceWebsiteDevelopment.workDetail.highlight}</span>
                            {ecommerceWebsiteDevelopment.workDetail.suffix}
                        </>
                    }
                    description={ecommerceWebsiteDevelopment.workDetail.description}
                />

                <FaqSection
                    title={ecommerceWebsiteDevelopment.faqSection.title}
                    faqData={ecommerceWebsiteDevelopment.faq}
                />

                <BeginYourJourneySection />

            </div>
        </>
    );
};

export default Page;