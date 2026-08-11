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
    title: "CMS Website Development Services | Custom CMS Development Company",

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

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is a CMS and do I need one?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A CMS, or content management system, lets you update your website's text, images, pages and blog yourself without touching code. If your content changes even occasionally, a CMS pays for itself by removing your reliance on a developer for every edit.",
            },
        },
        {
            "@type": "Question",
            name: "Which CMS platform is best for my business?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on your needs. WordPress suits most businesses, headless CMS platforms suit fast or multi-channel sites, and a custom CMS suits unusual workflows. We recommend the right fit during discovery rather than defaulting to one platform.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate my existing website to a CMS?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We migrate static or legacy sites onto a modern CMS, transferring your content and preserving your SEO with proper redirects, so you keep your rankings while gaining full control of your content.",
            },
        },
        {
            "@type": "Question",
            name: "Will I be able to update the site myself?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Absolutely. That is the whole point of a CMS. We build an intuitive admin dashboard and hand over training and documentation so you can add pages, edit content and publish posts confidently on your own.",
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