import React from 'react'
import BannerSection from '@/components/sections/BannerSection'
import PrivacyPolicy from '@/components/screens/Agreements/PrivacyPolicy'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'


export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the Web Design Spectrum privacy policy to learn how we collect, use, protect, and manage your personal and technical information.",
  alternates: {
    canonical: "https://webdesignspectrum.com/privacy",
  },
};

const page = () => {
    return (
        <div>

            <BannerSection title={'Privacy Policy'} description={"Learn how Web Design Spectrum collects, uses, and protects information when you visit our website or contact our team."} minititle={'Web Design Spectrum'}></BannerSection>
            <PrivacyPolicy />
            <BeginYourJourneySection />

        </div>
    )
}

export default page
