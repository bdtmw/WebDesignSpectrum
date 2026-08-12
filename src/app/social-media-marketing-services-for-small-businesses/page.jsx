import React from 'react'
import Script from 'next/script'
import FaqSection from '@/components/sections/FaqSection'
import { websitePortfolio } from '@/components/hooks/Portfolio'
import BannerSection from '@/components/sections/BannerSection'
import WhySection from '@/components/screens/Services/WhySection'
import { socialMediaMarketing } from '@/data/socialMediaMarketing'
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
    title: "Social Media Marketing Services for Small Businesses | Web Design Spectrum",

    description:
        "Affordable social media marketing services for small businesses. Web Design Spectrum manages your content, ads and community across every platform. Call (307) 218-3240.",

    keywords: [
        "social media marketing services for small businesses",
        "small business social media marketing",
        "social media management for small business",
        "affordable social media marketing",
        "social media marketing agency",
    ],

    alternates: {
        canonical: "https://webdesignspectrum.com/social-media-marketing-services-for-small-businesses",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Social Media Marketing",
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
        "Social media marketing services for small businesses: content creation, advertising and community management across every platform.",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much does social media marketing cost for a small business?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Our small business packages start affordably and scale with the number of platforms, posts and ad management you need. You get a fixed monthly price before we start, with no long lock-in contracts and no hidden fees.",
            },
        },
        {
            "@type": "Question",
            name: "Which social media platforms should my small business be on?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "You do not need to be everywhere — you need to be where your customers are. During onboarding we identify the two or three platforms that fit your audience and goals, so your budget goes into the channels that actually bring in business.",
            },
        },
        {
            "@type": "Question",
            name: "How long before I see results from social media marketing?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "Paid ads can drive traffic and leads within days, while organic growth in followers and engagement builds over a few months of consistent posting. We report on both so you can see progress from the first month.",
            },
        },
        {
            "@type": "Question",
            name: "Do I have to sign a long-term contract?",
            acceptedAnswer: {
                "@type": "Answer",
                text:
                    "No. We work on flexible monthly plans because we would rather earn your business with results than lock you in. You can adjust or pause your package as your needs change.",
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
                    title={socialMediaMarketing.banner.title}
                    description={socialMediaMarketing.banner.description}
                    minititle={socialMediaMarketing.banner.minititle}
                />
                <AwardSection
                    awards={socialMediaMarketing.awards.items}
                    title={socialMediaMarketing.awards.title}
                />

                <BehindStoreSection
                    eyebrow={socialMediaMarketing.behindStore.eyebrow}
                    title={socialMediaMarketing.behindStore.title}
                    subtitle={socialMediaMarketing.behindStore.subtitle}
                    description={socialMediaMarketing.behindStore.description}
                    description2={socialMediaMarketing.behindStore.description2}
                    layers={socialMediaMarketing.layers}
                />

                <ServiceDetailSection
                    eyebrow={socialMediaMarketing.servicesSection.eyebrow}
                    title={socialMediaMarketing.servicesSection.title}
                    description={socialMediaMarketing.servicesSection.description}
                    services={socialMediaMarketing.services}
                />

                <WhySection
                    eyebrow={socialMediaMarketing.whySection.eyebrow}
                    title={socialMediaMarketing.whySection.title}
                    description={socialMediaMarketing.whySection.description}
                    items={socialMediaMarketing.whyChooseUs}
                />


                <ProcessSection
                    eyebrow={socialMediaMarketing.processSection.eyebrow}
                    title={socialMediaMarketing.processSection.title}
                    description={socialMediaMarketing.processSection.description}
                    processes={socialMediaMarketing.process}
                />

                <PortfolioSection
                    title={socialMediaMarketing.portfolioSection.title}
                    heading={
                        <>
                            {socialMediaMarketing.portfolioSection.heading.before}{" "}
                            <span>
                                {socialMediaMarketing.portfolioSection.heading.highlight}
                            </span>
                        </>
                    }
                    description={socialMediaMarketing.portfolioSection.description}
                    showTabs={socialMediaMarketing.portfolioSection.showTabs}
                    data={websitePortfolio}
                />

                <ResourceSection
                    eyebrow={socialMediaMarketing.resourceSection.eyebrow}
                    title={socialMediaMarketing.resourceSection.title}
                    description={socialMediaMarketing.resourceSection.description}
                    resources={socialMediaMarketing.resources}
                />

                <BusinessCase
                    eyebrow={socialMediaMarketing.businessCase.eyebrow}
                    title={socialMediaMarketing.businessCase.title}
                    subtitle={socialMediaMarketing.businessCase.subtitle}
                    description={socialMediaMarketing.businessCase.description}
                    features={socialMediaMarketing.businessCase.features}
                    conclusion={socialMediaMarketing.businessCase.conclusion}
                    image={socialMediaMarketing.businessCase.image}
                    buttonText={socialMediaMarketing.businessCase.buttonText}
                />

                <TestimonialSection />

                <WorkDetailSection
                    title={socialMediaMarketing.workDetail.title}
                    subtitle={
                        <>
                            <span>{socialMediaMarketing.workDetail.highlight}</span>
                            {socialMediaMarketing.workDetail.suffix}
                        </>
                    }
                    description={socialMediaMarketing.workDetail.description}
                />

                <FaqSection
                    title={socialMediaMarketing.faqSection.title}
                    faqData={socialMediaMarketing.faq}
                />

                <BeginYourJourneySection />
            </div >
        </>
    )
}

export default page
