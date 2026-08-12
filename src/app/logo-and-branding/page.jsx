import React from 'react'
import Script from 'next/script'
import FaqSection from '@/components/sections/FaqSection'
import { websitePortfolio } from '@/components/hooks/Portfolio'
import BannerSection from '@/components/sections/BannerSection'
import WhySection from '@/components/screens/Services/WhySection'
import AwardSection from '@/components/screens/Services/AwardSection'
import BusinessCase from '@/components/screens/Services/BusinessCase'
import { logoBrandingDevelopment } from "@/data/logoBrandingDevelopment"
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import ProcessSection from '@/components/screens/Services/ProcessSection'
import WorkDetailSection from '@/components/screens/Home/WorkDetailSection'
import ResourceSection from '@/components/screens/Services/ResourceSection'
import BehindStoreSection from '@/components/screens/Services/BehindStoreSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import ServiceDetailSection from '@/components/screens/Services/ServiceDetailSection'



export const metadata = {
    title: "Logo and Branding Services | Logo Design and Branding Agency",

    description:
        "Logo and branding services from Web Design Spectrum. Custom logo design, brand identity, style guides and rebrands that make your business unforgettable. Call (307) 218-3240.",

    keywords: [
        "logo and branding services",
        "branding and logo design services",
        "logo design and branding services",
        "logo and branding design services",
        "custom logo design",
    ],

    alternates: {
        canonical: "https://webdesignspectrum.com/logo-and-branding",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Logo and Branding Services",
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
        "Logo and branding services: custom logo design, brand identity systems, style guides and rebranding.",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between a logo and branding?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A logo is a single mark that identifies your business. Branding is the complete identity around it: your colours, fonts, imagery, tone and the consistent way it all comes together. A logo is one piece of your brand, and the strongest logos are designed as part of a wider identity system.",
            },
        },
        {
            "@type": "Question",
            name: "How long does logo and branding design take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A logo alone typically takes one to two weeks, while a full brand identity with a style guide runs a few weeks depending on scope. We share a clear timeline and milestones at the start so you always know what to expect.",
            },
        },
        {
            "@type": "Question",
            name: "What files do I receive with my logo?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You receive full ownership and a complete file pack: vector formats for print and scaling, web-ready versions, colour and black-and-white variations, and everything you need to use your logo anywhere. Your brand is yours to keep.",
            },
        },
        {
            "@type": "Question",
            name: "Can you rebrand or refresh my existing business?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Rebranding is a core part of what we do. Whether you need a light refresh or a complete new identity, we evolve your brand thoughtfully so it feels current while keeping the equity you have already built.",
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
                    title={logoBrandingDevelopment.banner.title}
                    description={logoBrandingDevelopment.banner.description}
                    minititle={logoBrandingDevelopment.banner.minititle}
                ></BannerSection>
                <AwardSection
                    awards={logoBrandingDevelopment.awards.items}
                    title={logoBrandingDevelopment.awards.title}
                />

                <BehindStoreSection
                    eyebrow={logoBrandingDevelopment.behindStore.eyebrow}
                    title={logoBrandingDevelopment.behindStore.title}
                    subtitle={logoBrandingDevelopment.behindStore.subtitle}
                    description={logoBrandingDevelopment.behindStore.description}
                    description2={logoBrandingDevelopment.behindStore.description2}
                    layers={logoBrandingDevelopment.layers}
                />

                <ServiceDetailSection
                    eyebrow={logoBrandingDevelopment.servicesSection.eyebrow}
                    title={logoBrandingDevelopment.servicesSection.title}
                    description={logoBrandingDevelopment.servicesSection.description}
                    services={logoBrandingDevelopment.services}
                />

                <WhySection
                    eyebrow={logoBrandingDevelopment.whySection.eyebrow}
                    title={logoBrandingDevelopment.whySection.title}
                    description={logoBrandingDevelopment.whySection.description}
                    items={logoBrandingDevelopment.whyChooseUs}
                />


                <ProcessSection
                    eyebrow={logoBrandingDevelopment.processSection.eyebrow}
                    title={logoBrandingDevelopment.processSection.title}
                    description={logoBrandingDevelopment.processSection.description}
                    processes={logoBrandingDevelopment.process}
                />

                <PortfolioSection
                    title={logoBrandingDevelopment.portfolioSection.title}
                    heading={
                        <>
                            {logoBrandingDevelopment.portfolioSection.heading.before}{" "}
                            <span>
                                {logoBrandingDevelopment.portfolioSection.heading.highlight}
                            </span>
                        </>
                    }
                    description={logoBrandingDevelopment.portfolioSection.description}
                    showTabs={logoBrandingDevelopment.portfolioSection.showTabs}
                    data={websitePortfolio}
                />

                <ResourceSection
                    eyebrow={logoBrandingDevelopment.resourceSection.eyebrow}
                    title={logoBrandingDevelopment.resourceSection.title}
                    description={logoBrandingDevelopment.resourceSection.description}
                    resources={logoBrandingDevelopment.resources}
                />

                <BusinessCase
                    eyebrow={logoBrandingDevelopment.businessCase.eyebrow}
                    title={logoBrandingDevelopment.businessCase.title}
                    subtitle={logoBrandingDevelopment.businessCase.subtitle}
                    description={logoBrandingDevelopment.businessCase.description}
                    features={logoBrandingDevelopment.businessCase.features}
                    conclusion={logoBrandingDevelopment.businessCase.conclusion}
                    image={logoBrandingDevelopment.businessCase.image}
                    buttonText={logoBrandingDevelopment.businessCase.buttonText}
                />

                <TestimonialSection />

                <WorkDetailSection
                    title={logoBrandingDevelopment.workDetail.title}
                    subtitle={
                        <>
                            <span>{logoBrandingDevelopment.workDetail.highlight}</span>
                            {logoBrandingDevelopment.workDetail.suffix}
                        </>
                    }
                    description={logoBrandingDevelopment.workDetail.description}
                />

                <FaqSection
                    title={logoBrandingDevelopment.faqSection.title}
                    faqData={logoBrandingDevelopment.faq}
                />

                <BeginYourJourneySection />

            </div>
        </>
    );
}

export default Page;