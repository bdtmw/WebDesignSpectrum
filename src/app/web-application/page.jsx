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
    title: "Web Application Development Services | Web App Development Company",

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

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between a website and a web application?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A website mainly presents information, while a web application lets users perform tasks: logging in, entering data, running workflows and interacting in real time. If your idea involves user accounts, dashboards or business logic, you need a web application rather than a website.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to build a web application?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on scope. A focused MVP can launch in a few weeks, while a full SaaS platform typically runs a few months. We break every project into milestones so you see working software early and often.",
            },
        },
        {
            "@type": "Question",
            name: "Which technologies do you build web applications with?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We build with modern, well-supported stacks such as React and Next.js on the front end and Laravel, Node.js or Python on the back end. We choose the stack based on your requirements, not a one-size-fits-all default.",
            },
        },
        {
            "@type": "Question",
            name: "Can you take over or fix an existing web app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We regularly take over unfinished or poorly built web applications, audit the codebase, stabilise it and continue development or rebuild the weak parts, so you can move forward without starting from scratch.",
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
