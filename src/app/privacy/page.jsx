import React from 'react'
import BannerSection from '@/components/sections/BannerSection'
import PrivacyPolicy from '@/components/screens/Agreements/PrivacyPolicy'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'


export const metadata = {
  title: "Privacy Policy | Web Design Spectrum",
  description:
    "Read the Web Design Spectrum privacy policy to learn how we collect, use, protect, and manage your personal and technical information.",
  alternates: {
    canonical: "https://webdesignspectrum.com/privacy",
  },
};

const page = () => {
    return (
        <div>

            <BannerSection title={'Complemented by Strategic Advertising'} description={"In our pursuit of the title of best quality design, we strive to provide an excellent initial impression."} minititle={'User-Centric Website Layouts'}></BannerSection>
            <PrivacyPolicy />
            <BeginYourJourneySection />

        </div>
    )
}

export default page
