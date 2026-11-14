import React from 'react'
import BannerSection from '@/components/sections/BannerSection'
import PackageSection from '@/components/screens/Package/PackageSection'
import InnerProcessSection from '@/components/screens/AboutUs/InnerProcessSection'
import ComboPackageSection from '@/components/screens/Package/ComboPackageSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'


export const metadata = {
    title: "Web Design Packages & Pricing",
    description:
        "Explore affordable web design packages for startups and businesses. Choose flexible website design plans tailored to your goals and budget.",
    alternates: {
        canonical: "https://webdesignspectrum.com/packages",
    },
};


const page = () => {
    return (
        <>
            <div>
                <BannerSection title={'Web Design Packages & Pricing'} description={"Compare our website design and development packages, review the features included, and find a starting point for your business. Contact Web Design Spectrum to discuss your pages, functionality, and project scope before choosing a package."} minititle={'Website Design and Development'}></BannerSection>

                <PackageSection />
                <ComboPackageSection></ComboPackageSection>
                <InnerProcessSection></InnerProcessSection>
                <BeginYourJourneySection />

            </div >
        </>
    )
}

export default page
