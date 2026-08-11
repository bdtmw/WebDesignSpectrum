import ContactBanner from '@/components/screens/ContactUs/ContactBanner'
import ContactIntroSection from '@/components/screens/ContactUs/ContactIntroSection'
import BannerSection from '@/components/sections/BannerSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import React from 'react'

const page = () => {
  return (
    <div>

      <BannerSection title={'Connect With Us'} description={"Expand your global reach and showcase your products and services with the expert support of Web Design Spectrum."} minititle={'Leading Web Design Agency'}></BannerSection>

      <ContactIntroSection></ContactIntroSection>
      <BeginYourJourneySection />
    </div>
  )
}

export default page
