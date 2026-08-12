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
import WorkDetailSection from '@/components/screens/Home/WorkDetailSection'
import ResourceSection from '@/components/screens/Services/ResourceSection'
import BehindStoreSection from '@/components/screens/Services/BehindStoreSection'
import { mobileApplicationDevelopment } from '@/data/mobileApplicationDevelopment'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import ServiceDetailSection from '@/components/screens/Services/ServiceDetailSection'


export const metadata = {
    title: "Mobile Application Development Services | Custom & Cross-Platform App Development",

    description:
        "Mobile application development services from Web Design Spectrum. Custom, cross-platform and hybrid app development for iOS and Android, built to perform. Call (307) 218-3240.",

    keywords: [
        "mobile application development services",
        "custom mobile application development services",
        "cross-platform mobile application development services",
        "hybrid mobile application development services",
        "ios android app development",
    ],

    alternates: {
        canonical:
            "https://webdesignspectrum.com/mobile-application-development",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mobile Application Development",

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

    areaServed: [
        "United States",
        "Wyoming",
        "Sheridan",
    ],

    description:
        "Mobile application development services: custom, cross-platform and hybrid app development for iOS and Android.",
};
const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: [
        {
            "@type": "Question",
            name: "How much does mobile application development cost?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It depends on scope and platforms. A focused single-platform MVP costs far less than a feature-rich app on both iOS and Android. Cross-platform development often reduces cost by building once for both. We provide a fixed quote after discovery so you always know the number up front.",
            },
        },

        {
            "@type": "Question",
            name: "Should I build a native, cross-platform or hybrid app?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "It depends on your goals and budget. Native gives maximum performance per platform; cross-platform builds one codebase for both iOS and Android to save time and cost; hybrid is fastest for simpler apps. We recommend the right approach during discovery rather than defaulting to one.",
            },
        },

        {
            "@type": "Question",
            name: "Do you develop for both iOS and Android?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. We build for both platforms. With cross-platform and hybrid development we can deliver a single app that runs natively on iOS and Android from one codebase, or build fully native apps for each platform when performance demands it.",
            },
        },

        {
            "@type": "Question",
            name: "Do you help publish the app to the App Store and Google Play?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Yes. We handle the full submission process for both the Apple App Store and Google Play, including store listings and compliance, and support you after launch with updates and maintenance.",
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
                    title={mobileApplicationDevelopment.banner.title}
                    description={mobileApplicationDevelopment.banner.description}
                    minititle={mobileApplicationDevelopment.banner.minititle}
                ></BannerSection>
                <AwardSection
                    awards={mobileApplicationDevelopment.awards.items}
                    title={mobileApplicationDevelopment.awards.title}
                />

                <BehindStoreSection
                    eyebrow={mobileApplicationDevelopment.behindStore.eyebrow}
                    title={mobileApplicationDevelopment.behindStore.title}
                    subtitle={mobileApplicationDevelopment.behindStore.subtitle}
                    description={mobileApplicationDevelopment.behindStore.description}
                    description2={mobileApplicationDevelopment.behindStore.description2}
                    layers={mobileApplicationDevelopment.layers}
                />

                <ServiceDetailSection
                    eyebrow={mobileApplicationDevelopment.servicesSection.eyebrow}
                    title={mobileApplicationDevelopment.servicesSection.title}
                    description={mobileApplicationDevelopment.servicesSection.description}
                    services={mobileApplicationDevelopment.services}
                />

                <WhySection
                    eyebrow={mobileApplicationDevelopment.whySection.eyebrow}
                    title={mobileApplicationDevelopment.whySection.title}
                    description={mobileApplicationDevelopment.whySection.description}
                    items={mobileApplicationDevelopment.whyChooseUs}
                />


                <ProcessSection
                    eyebrow={mobileApplicationDevelopment.processSection.eyebrow}
                    title={mobileApplicationDevelopment.processSection.title}
                    description={mobileApplicationDevelopment.processSection.description}
                    processes={mobileApplicationDevelopment.process}
                />

                <PortfolioSection
                    title={mobileApplicationDevelopment.portfolioSection.title}
                    heading={
                        <>
                            {mobileApplicationDevelopment.portfolioSection.heading.before}{" "}
                            <span>
                                {mobileApplicationDevelopment.portfolioSection.heading.highlight}
                            </span>
                        </>
                    }
                    description={mobileApplicationDevelopment.portfolioSection.description}
                    showTabs={mobileApplicationDevelopment.portfolioSection.showTabs}
                    data={websitePortfolio}
                />

                <ResourceSection
                    eyebrow={mobileApplicationDevelopment.resourceSection.eyebrow}
                    title={mobileApplicationDevelopment.resourceSection.title}
                    description={mobileApplicationDevelopment.resourceSection.description}
                    resources={mobileApplicationDevelopment.resources}
                />

                <BusinessCase
                    eyebrow={mobileApplicationDevelopment.businessCase.eyebrow}
                    title={mobileApplicationDevelopment.businessCase.title}
                    subtitle={mobileApplicationDevelopment.businessCase.subtitle}
                    description={mobileApplicationDevelopment.businessCase.description}
                    features={mobileApplicationDevelopment.businessCase.features}
                    conclusion={mobileApplicationDevelopment.businessCase.conclusion}
                    image={mobileApplicationDevelopment.businessCase.image}
                    buttonText={mobileApplicationDevelopment.businessCase.buttonText}
                />

                <TestimonialSection />

                <WorkDetailSection
                    title={mobileApplicationDevelopment.workDetail.title}
                    subtitle={
                        <>
                            <span>{mobileApplicationDevelopment.workDetail.highlight}</span>
                            {mobileApplicationDevelopment.workDetail.suffix}
                        </>
                    }
                    description={mobileApplicationDevelopment.workDetail.description}
                />

                <FaqSection
                    title={mobileApplicationDevelopment.faqSection.title}
                    faqData={mobileApplicationDevelopment.faq}
                />

                <BeginYourJourneySection />

            </div>
        </>
    );
}

export default Page;