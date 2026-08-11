import React from 'react'
import Script from 'next/script'
import FaqSection from '@/components/sections/FaqSection'
import { websitePortfolio } from '@/components/hooks/Portfolio'
import BannerSection from '@/components/sections/BannerSection'
import { affordableWebDesign } from '@/data/affordableWebDesign'
import WhySection from '@/components/screens/Services/WhySection'
import AwardSection from '@/components/screens/Services/AwardSection'
import BusinessCase from '@/components/screens/Services/BusinessCase'
import TestimonialSection from '@/components/sections/TestimonialSection'
import ProcessSection from '@/components/screens/Services/ProcessSection'
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import ResourceSection from '@/components/screens/Services/ResourceSection'
import WorkDetailSection from '@/components/screens/Home/WorkDetailSection'
import BehindStoreSection from '@/components/screens/Services/BehindStoreSection'
import ServiceDetailSection from '@/components/screens/Services/ServiceDetailSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'



export const metadata = {
    title: "Affordable Web Design Services for Small Businesses | Web Design Spectrum",

    description:
        "Affordable web design services for small businesses. Professional, mobile-friendly websites from Web Design Spectrum with flexible packages and no hidden fees. Call (307) 218-3240.",

    keywords: [
        "affordable web design services",
        "affordable web design for small businesses",
        "cheap web design small business",
        "budget website design",
        "small business web design company",
    ],

    alternates: {
        canonical: "https://webdesignspectrum.com/affordable-web-design",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Affordable Web Design",
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
    areaServed: ["United States"],
    description:
        "Affordable web design services and website packages for small businesses.",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much does affordable web design for a small business cost?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Our small business packages start low and scale with what you need. A clean multi-page brochure site costs far less than a store or booking system. You get a fixed quote before any work begins, with no hidden fees.",
            },
        },
        {
            "@type": "Question",
            name: "Does affordable mean low quality?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Affordable means we scope tightly to what your business actually needs and reuse a proven, efficient process. You still get a custom, mobile-friendly, SEO-ready website built by our in-house team.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a small business website take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most small business sites launch in one to three weeks depending on page count and content readiness. We give you a milestone schedule up front.",
            },
        },
        {
            "@type": "Question",
            name: "Do you offer payment in installments?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We break projects into milestones so you pay as the work progresses rather than everything up front, which keeps the investment manageable for small budgets.",
            },
        },
    ],
};


const StaticWebsite = () => {
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
                    title={affordableWebDesign.banner.title}
                    description={affordableWebDesign.banner.description}
                    minititle={affordableWebDesign.banner.minititle}
                />
                <AwardSection
                    awards={affordableWebDesign.awards.items}
                    title={affordableWebDesign.awards.title}
                />

                <BehindStoreSection
                    eyebrow={affordableWebDesign.behindStore.eyebrow}
                    title={affordableWebDesign.behindStore.title}
                    subtitle={affordableWebDesign.behindStore.subtitle}
                    description={affordableWebDesign.behindStore.description}
                    description2={affordableWebDesign.behindStore.description2}
                    layers={affordableWebDesign.layers}
                />

                <ServiceDetailSection
                    eyebrow={affordableWebDesign.servicesSection.eyebrow}
                    title={affordableWebDesign.servicesSection.title}
                    description={affordableWebDesign.servicesSection.description}
                    services={affordableWebDesign.services}
                />

                <WhySection
                    eyebrow={affordableWebDesign.whySection.eyebrow}
                    title={affordableWebDesign.whySection.title}
                    description={affordableWebDesign.whySection.description}
                    items={affordableWebDesign.whyChooseUs}
                />


                <ProcessSection
                    eyebrow={affordableWebDesign.processSection.eyebrow}
                    title={affordableWebDesign.processSection.title}
                    description={affordableWebDesign.processSection.description}
                    processes={affordableWebDesign.process}
                />

                <PortfolioSection
                    title={affordableWebDesign.portfolioSection.title}
                    heading={
                        <>
                            {affordableWebDesign.portfolioSection.heading.before}{" "}
                            <span>
                                {affordableWebDesign.portfolioSection.heading.highlight}
                            </span>
                        </>
                    }
                    description={affordableWebDesign.portfolioSection.description}
                    showTabs={affordableWebDesign.portfolioSection.showTabs}
                    data={websitePortfolio}
                />

                <ResourceSection
                    eyebrow={affordableWebDesign.resourceSection.eyebrow}
                    title={affordableWebDesign.resourceSection.title}
                    description={affordableWebDesign.resourceSection.description}
                    resources={affordableWebDesign.resources}
                />

                <BusinessCase
                    eyebrow={affordableWebDesign.businessCase.eyebrow}
                    title={affordableWebDesign.businessCase.title}
                    subtitle={affordableWebDesign.businessCase.subtitle}
                    description={affordableWebDesign.businessCase.description}
                    features={affordableWebDesign.businessCase.features}
                    conclusion={affordableWebDesign.businessCase.conclusion}
                    image={affordableWebDesign.businessCase.image}
                    buttonText={affordableWebDesign.businessCase.buttonText}
                />

                <TestimonialSection />

                <WorkDetailSection
                    title={affordableWebDesign.workDetail.title}
                    subtitle={
                        <>
                            <span>{affordableWebDesign.workDetail.highlight}</span>
                            {affordableWebDesign.workDetail.suffix}
                        </>
                    }
                    description={affordableWebDesign.workDetail.description}
                />

                <FaqSection
                    title={affordableWebDesign.faqSection.title}
                    faqData={affordableWebDesign.faq}
                />

                <BeginYourJourneySection />
            </div >
        </>
    )
}

export default StaticWebsite
