import React from 'react'
import BannerSection from '@/components/sections/BannerSection'
import TermsCondition from '@/components/screens/Agreements/TermsConditon'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'


export const metadata = {
  title: "Terms & Conditions | Web Design Spectrum",
  description:
    "Review our terms and conditions covering website use, services, payments, responsibilities, and important policies for Web Design Spectrum clients.",
  alternates: {
    canonical: "https://webdesignspectrum.com/terms",
  },
};


const page = () => {
    return (
        <div>

            <BannerSection title={'Terms And Conditions'} description={"Expand your global reach and showcase your products and services with the expert support of Web Design Spectrum."} minititle={'Web Design Spectrum'}></BannerSection>


            <TermsCondition />

            <BeginYourJourneySection />

        </div>
    )
}

export default page
