
import React from 'react'
import HeroSection from '@/components/screens/Home/HeroSection'
import MainFeature from '@/components/screens/Home/MainFeature'
import ServiceSection from '@/components/screens/Home/ServiceSection'
import RenownedSection from '@/components/screens/Home/RenownedSection'
import IndustrySection from '@/components/screens/Home/IndustrySection'
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import WorkDetailSection from '@/components/screens/Home/WorkDetailSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import { animationPortfolio, logoDesigns, marketingPortfolio, websitePortfolio } from '@/components/hooks/Portfolio'


export const metadata = {
  title: { absolute: "Web Design Spectrum | Small Business Web Design" },

  description:
    "Web Design Spectrum builds websites, ecommerce stores, and web applications for small businesses. Explore our services and discuss your project.",

  openGraph: {
    type: "website",
    siteName: "Web Design Spectrum",
    url: "https://webdesignspectrum.com/",
    title: "Web Design Spectrum | Small Business Web Design",
    description: "Web design, ecommerce, and web application development for small businesses.",
  },
  keywords: [
    "affordable web design services",
    "affordable web design for small businesses",
    "cheap web design small business",
    "budget website design",
    "small business web design company",
  ],
  alternates: {
    canonical: "https://webdesignspectrum.com/",
  },
};

const portfolioData = {
  website: websitePortfolio,
  marketing: marketingPortfolio,
  animation: logoDesigns,
};


const portfolioTabs = [
  {
    id: "website",
    label: "WEBSITE DESIGN",
  },
  {
    id: "marketing",
    label: "DIGITAL MARKETING",
  },
  {
    id: "animation",
    label: "Logo Design",
  },
];

const Home = () => {


  return (
    <>
      <script
        id="brand-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://webdesignspectrum.com/#organization",
                name: "Web Design Spectrum",
                url: "https://webdesignspectrum.com/",
                description: "Web design and development services for small businesses.",
                telephone: "+13072183240",
              },
              {
                "@type": "WebSite",
                "@id": "https://webdesignspectrum.com/#website",
                name: "Web Design Spectrum",
                url: "https://webdesignspectrum.com/",
                publisher: {
                  "@id": "https://webdesignspectrum.com/#organization",
                },
              },
            ],
          }).replace(/</g, "\\u003c"),
        }}
      />



      <div className=''>

        <HeroSection></HeroSection>
        <MainFeature></MainFeature>

        <PortfolioSection title="Enhancing Visibility with Smart, Affordable Design"
          heading={
            <>
              User-Focused Website Layouts Built for <span>Small Business Brands</span>
            </>
          }
          description={
            <>
              Crafting unique small business brands with captivating design and copywriting. Explore our work in
              <br />
              website design, digital marketing, and video animation.
            </>
          } tabs={portfolioTabs}
          data={portfolioData}></PortfolioSection>
        <RenownedSection></RenownedSection>

        <ServiceSection></ServiceSection>

        <WorkDetailSection
          title="A Distinctive Fusion of Creativity, Innovation,"
          subtitle={
            <>
              <span>Relentless Effort, and Passion Defines</span> Web Design Spectrum
            </>
          }
          description="Contact us today for the most competitive small business web design pricing and truly exceptional service."
        />

        <IndustrySection></IndustrySection>

        <BeginYourJourneySection />


      </div >
    </>
  )
}

export default Home
