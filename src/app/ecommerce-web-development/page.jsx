import { breadcrumbSchema, faqSchema as buildFaqSchema } from "@/lib/seo";
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
    title: "Ecommerce Web Development Services | Web Design Spectrum",

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

const faqSchema = buildFaqSchema(ecommerceWebsiteDevelopment.faq);


const Page = () => {
    return (
        <>

            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema("Ecommerce Web Development", "/ecommerce-web-development")),
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