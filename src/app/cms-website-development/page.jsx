import { breadcrumbSchema, faqSchema as buildFaqSchema } from "@/lib/seo";
import React from 'react'
import FaqSection from '@/components/sections/FaqSection'
import BannerSection from '@/components/sections/BannerSection'
import { websitePortfolio } from '@/components/hooks/Portfolio'
import WhySection from '@/components/screens/Services/WhySection'
import AwardSection from '@/components/screens/Services/AwardSection'
import BusinessCase from '@/components/screens/Services/BusinessCase'
import { cmsWebsiteDevelopment } from "@/data/cmsWebsiteDevelopment"
import TestimonialSection from '@/components/sections/TestimonialSection'
import ProcessSection from '@/components/screens/Services/ProcessSection'
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import ResourceSection from '@/components/screens/Services/ResourceSection'
import WorkDetailSection from '@/components/screens/Home/WorkDetailSection'
import BehindStoreSection from '@/components/screens/Services/BehindStoreSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import ServiceDetailSection from '@/components/screens/Services/ServiceDetailSection'
import Script from 'next/script'



export const metadata = {
    title: "CMS Website Development Services | Web Design Spectrum",

    description:
        "CMS website development services from Web Design Spectrum. Custom WordPress, headless and bespoke CMS builds that let you manage your own content. Call (307) 218-3240.",

    keywords: [
        "cms website development services",
        "cms development company",
        "custom cms development",
        "wordpress cms development",
        "headless cms development services",
    ],

    alternates: {
        canonical: "https://webdesignspectrum.com/cms-website-development",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "CMS Website Development",
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
        "CMS website development services: custom WordPress, headless and bespoke content management system builds.",
};

const faqSchema = buildFaqSchema(cmsWebsiteDevelopment.faq);


const Page = () => {
    return (

        <>
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema("CMS Website Development", "/cms-website-development")),
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
                    title={cmsWebsiteDevelopment.banner.title}
                    description={cmsWebsiteDevelopment.banner.description}
                    minititle={cmsWebsiteDevelopment.banner.minititle}
                />
                <AwardSection
                    awards={cmsWebsiteDevelopment.awards.items}
                    title={cmsWebsiteDevelopment.awards.title}
                />

                <BehindStoreSection
                    eyebrow={cmsWebsiteDevelopment.behindStore.eyebrow}
                    title={cmsWebsiteDevelopment.behindStore.title}
                    subtitle={cmsWebsiteDevelopment.behindStore.subtitle}
                    description={cmsWebsiteDevelopment.behindStore.description}
                    description2={cmsWebsiteDevelopment.behindStore.description2}
                    layers={cmsWebsiteDevelopment.layers}
                />

                <ServiceDetailSection
                    eyebrow={cmsWebsiteDevelopment.servicesSection.eyebrow}
                    title={cmsWebsiteDevelopment.servicesSection.title}
                    description={cmsWebsiteDevelopment.servicesSection.description}
                    services={cmsWebsiteDevelopment.services}
                />

                <WhySection
                    eyebrow={cmsWebsiteDevelopment.whySection.eyebrow}
                    title={cmsWebsiteDevelopment.whySection.title}
                    description={cmsWebsiteDevelopment.whySection.description}
                    items={cmsWebsiteDevelopment.whyChooseUs}
                />


                <ProcessSection
                    eyebrow={cmsWebsiteDevelopment.processSection.eyebrow}
                    title={cmsWebsiteDevelopment.processSection.title}
                    description={cmsWebsiteDevelopment.processSection.description}
                    processes={cmsWebsiteDevelopment.process}
                />

                <PortfolioSection
                    title={cmsWebsiteDevelopment.portfolioSection.title}
                    heading={
                        <>
                            {cmsWebsiteDevelopment.portfolioSection.heading.before}{" "}
                            <span>
                                {cmsWebsiteDevelopment.portfolioSection.heading.highlight}
                            </span>
                        </>
                    }
                    description={cmsWebsiteDevelopment.portfolioSection.description}
                    showTabs={cmsWebsiteDevelopment.portfolioSection.showTabs}
                    data={websitePortfolio}
                />

                <ResourceSection
                    eyebrow={cmsWebsiteDevelopment.resourceSection.eyebrow}
                    title={cmsWebsiteDevelopment.resourceSection.title}
                    description={cmsWebsiteDevelopment.resourceSection.description}
                    resources={cmsWebsiteDevelopment.resources}
                />

                <BusinessCase
                    eyebrow={cmsWebsiteDevelopment.businessCase.eyebrow}
                    title={cmsWebsiteDevelopment.businessCase.title}
                    subtitle={cmsWebsiteDevelopment.businessCase.subtitle}
                    description={cmsWebsiteDevelopment.businessCase.description}
                    features={cmsWebsiteDevelopment.businessCase.features}
                    conclusion={cmsWebsiteDevelopment.businessCase.conclusion}
                    image={cmsWebsiteDevelopment.businessCase.image}
                    buttonText={cmsWebsiteDevelopment.businessCase.buttonText}
                />

                <TestimonialSection />

                <WorkDetailSection
                    title={cmsWebsiteDevelopment.workDetail.title}
                    subtitle={
                        <>
                            <span>{cmsWebsiteDevelopment.workDetail.highlight}</span>
                            {cmsWebsiteDevelopment.workDetail.suffix}
                        </>
                    }
                    description={cmsWebsiteDevelopment.workDetail.description}
                />

                <FaqSection
                    title={cmsWebsiteDevelopment.faqSection.title}
                    faqData={cmsWebsiteDevelopment.faq}
                />

                <BeginYourJourneySection />
            </div >
        </>
    );
};

export default Page;