import { breadcrumbSchema } from "@/lib/seo";
import ContactBanner from '@/components/screens/ContactUs/ContactBanner'
import ContactIntroSection from '@/components/screens/ContactUs/ContactIntroSection'
import BannerSection from '@/components/sections/BannerSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import React from 'react'


export const metadata = {
  title: "Contact Us | Web Design & Digital Marketing Experts",
  description:
    "Contact Us Web Design Spectrum for professional web design, development, SEO, and digital marketing services. Get a free consultation today.",
  alternates: {
    canonical: "https://webdesignspectrum.com/contact",
  },
};


const page = () => {
  return (
    <div>
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema("Contact Us", "/contact")) }} />

      <BannerSection title={'Connect With Us'} description={"Expand your global reach and showcase your products and services with the expert support of Web Design Spectrum."} minititle={'Leading Web Design Agency'}></BannerSection>

      <ContactIntroSection></ContactIntroSection>
      <BeginYourJourneySection />
    </div>
  )
}

export default page
