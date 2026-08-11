
import React from 'react'
import Script from 'next/script'
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
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Web Design Spectrum",
            description:
              "Wyoming web design company offering custom websites, ecommerce, SEO and digital marketing.",
            url: "https://webdesignspectrum.com/",
            telephone: "+13072183240",
            address: {
              "@type": "PostalAddress",
              streetAddress: "1309 Coffeen Ave. STE 1200",
              addressLocality: "Sheridan",
              addressRegion: "WY",
              postalCode: "82801",
              addressCountry: "US",
            },
            areaServed: [
              "Wyoming",
              "Sheridan",
              "Cheyenne",
              "Casper",
              "Laramie",
              "Gillette",
              "Jackson",
            ],
            priceRange: "$$",
          }),
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
