import { breadcrumbSchema, faqSchema as buildFaqSchema } from "@/lib/seo";
import React from 'react'
import Script from 'next/script'
import FaqSection from '@/components/sections/FaqSection'
import { websitePortfolio } from '@/components/hooks/Portfolio'
import BannerSection from '@/components/sections/BannerSection'
import WhySection from '@/components/screens/Services/WhySection'
import AwardSection from '@/components/screens/Services/AwardSection'
import BusinessCase from '@/components/screens/Services/BusinessCase'
import TestimonialSection from '@/components/sections/TestimonialSection'
import ProcessSection from '@/components/screens/Services/ProcessSection'
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import ResourceSection from '@/components/screens/Services/ResourceSection'
import WorkDetailSection from '@/components/screens/Home/WorkDetailSection'
import { webApplicationDevelopment } from '@/data/webApplicationDevelopment'
import BehindStoreSection from '@/components/screens/Services/BehindStoreSection'
import ServiceDetailSection from '@/components/screens/Services/ServiceDetailSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'




export const metadata = {
    title: "Web Application Development Services | Web Design Spectrum",

    description:
        "Web application development services from Web Design Spectrum. Custom web apps, SaaS platforms, portals and dashboards built with React, Laravel and Node. Call (307) 218-3240.",

    keywords: [
        "web application development services",
        "web app development services",
        "web app development company",
        "custom web application development",
        "saas development services",
    ],

    alternates: {
        canonical: "https://webdesignspectrum.com/web-application-development",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Application Development",
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
        "Custom web application development services: SaaS platforms, portals, dashboards and progressive web apps.",
};

const faqSchema = buildFaqSchema(webApplicationDevelopment.faq);




const page = () => {
    return (
        <>

            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema("Web Application Development", "/web-application-development")),
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
                    title={webApplicationDevelopment.banner.title}
                    description={webApplicationDevelopment.banner.description}
                    minititle={webApplicationDevelopment.banner.minititle}
                />
                <AwardSection
                    awards={webApplicationDevelopment.awards.items}
                    title={webApplicationDevelopment.awards.title}
                />

                <BehindStoreSection
                    eyebrow={webApplicationDevelopment.behindStore.eyebrow}
                    title={webApplicationDevelopment.behindStore.title}
                    subtitle={webApplicationDevelopment.behindStore.subtitle}
                    description={webApplicationDevelopment.behindStore.description}
                    description2={webApplicationDevelopment.behindStore.description2}
                    layers={webApplicationDevelopment.layers}
                />

                <ServiceDetailSection
                    eyebrow={webApplicationDevelopment.servicesSection.eyebrow}
                    title={webApplicationDevelopment.servicesSection.title}
                    description={webApplicationDevelopment.servicesSection.description}
                    services={webApplicationDevelopment.services}
                />

                <WhySection
                    eyebrow={webApplicationDevelopment.whySection.eyebrow}
                    title={webApplicationDevelopment.whySection.title}
                    description={webApplicationDevelopment.whySection.description}
                    items={webApplicationDevelopment.whyChooseUs}
                />


                <ProcessSection
                    eyebrow={webApplicationDevelopment.processSection.eyebrow}
                    title={webApplicationDevelopment.processSection.title}
                    description={webApplicationDevelopment.processSection.description}
                    processes={webApplicationDevelopment.process}
                />

                <PortfolioSection
                    title={webApplicationDevelopment.portfolioSection.title}
                    heading={
                        <>
                            {webApplicationDevelopment.portfolioSection.heading.before}{" "}
                            <span>
                                {webApplicationDevelopment.portfolioSection.heading.highlight}
                            </span>
                        </>
                    }
                    description={webApplicationDevelopment.portfolioSection.description}
                    showTabs={webApplicationDevelopment.portfolioSection.showTabs}
                    data={websitePortfolio}
                />

                <ResourceSection
                    eyebrow={webApplicationDevelopment.resourceSection.eyebrow}
                    title={webApplicationDevelopment.resourceSection.title}
                    description={webApplicationDevelopment.resourceSection.description}
                    resources={webApplicationDevelopment.resources}
                />

                <BusinessCase
                    eyebrow={webApplicationDevelopment.businessCase.eyebrow}
                    title={webApplicationDevelopment.businessCase.title}
                    subtitle={webApplicationDevelopment.businessCase.subtitle}
                    description={webApplicationDevelopment.businessCase.description}
                    features={webApplicationDevelopment.businessCase.features}
                    conclusion={webApplicationDevelopment.businessCase.conclusion}
                    image={webApplicationDevelopment.businessCase.image}
                    buttonText={webApplicationDevelopment.businessCase.buttonText}
                />

                <TestimonialSection />

                <WorkDetailSection
                    title={webApplicationDevelopment.workDetail.title}
                    subtitle={
                        <>
                            <span>{webApplicationDevelopment.workDetail.highlight}</span>
                            {webApplicationDevelopment.workDetail.suffix}
                        </>
                    }
                    description={webApplicationDevelopment.workDetail.description}
                />

                <FaqSection
                    title={webApplicationDevelopment.faqSection.title}
                    faqData={webApplicationDevelopment.faq}
                />

                <BeginYourJourneySection />
            </div >
        </>
    )
}

export default page
