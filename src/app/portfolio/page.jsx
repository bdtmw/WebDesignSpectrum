import React from 'react'
import Link from 'next/link'
import BannerSection from '@/components/sections/BannerSection'
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import {   application,  logoDesigns, marketingPortfolio, websitePortfolio } from '@/components/hooks/Portfolio';



export const metadata = {
  title: "Web Design Portfolio",
  description:
    "Explore our web design portfolio featuring professional websites, digital marketing, branding, and creative design projects for businesses.",
  alternates: {
    canonical: "https://webdesignspectrum.com/portfolio",
  },
};


const portfolioData = {
    website: websitePortfolio,
    marketing: marketingPortfolio,
    logo: logoDesigns,
    app: application,
};


const portfolioTabs = [
    {
        id: "website",
        label: "Website Design",
    },
    {
        id: "marketing",
        label: "DIGITAL MARKETING",
    },
    {
        id: "logo",
        label: "Logo",
    },
    {
        id: "app",
        label: "Application",
    },
];


const portfolio = () => {
    return (
        <div>

            <BannerSection title={'Web Design & Development Portfolio'} description={"Browse website designs, branding, digital marketing creative, and application interfaces from Web Design Spectrum. Use the categories below to explore work relevant to your project."} minititle={'Explore Our Work'}></BannerSection>
            <PortfolioSection
                title={"Websites, Branding, and Applications"}
                heading={
                    <>
                        Explore Our
                        <span style={{marginLeft: 10}}>
                            Design Work
                        </span>
                    </>
                }
                description={"Explore layout, typography, visual identity, and interface ideas across our portfolio. Website and application projects have different requirements, so use these examples to discuss the design direction and functionality your business needs."}
                button={false} tabs={portfolioTabs}
                data={portfolioData}></PortfolioSection>
            <section className="container py-5" aria-labelledby="portfolio-services-heading">
                <h2 id="portfolio-services-heading">Plan Your Website or Branding Project</h2>
                <p>Start with the type of experience you want to create. A business website needs clear service pages and contact options, while an online store needs product browsing and a purchase flow. Application interfaces should make common tasks easy to find and complete.</p>
                <p>Explore our <Link href="/cms-website-development">CMS website development</Link>, <Link href="/ecommerce-web-development">ecommerce development</Link>, <Link href="/mobile-application-development">mobile application development</Link>, and <Link href="/logo-and-branding">logo and branding services</Link> to compare options.</p>
                <p>When contacting us, share the examples you like, your target audience, the pages or features you need, and any existing brand guidelines. This helps us discuss a suitable scope and design direction. You can also review our <Link href="/packages">packages and pricing</Link> before requesting a quote.</p>
            </section>
            <BeginYourJourneySection />

        </div>
    )
}

export default portfolio
