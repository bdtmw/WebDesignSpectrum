import React from 'react'
import BannerSection from '@/components/sections/BannerSection'
import PackageSection from '@/components/screens/Package/PackageSection'
import InnerProcessSection from '@/components/screens/AboutUs/InnerProcessSection'
import ComboPackageSection from '@/components/screens/Package/ComboPackageSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'


const page = () => {
    return (
        <>
            <div>
                <BannerSection title={'Business Owner'} description={"Our team of expert web designers has meticulously crafted cost-effective packages to suit businesses of all sizes. Whether you're a startup or an established enterprise, our affordable offerings ensure you receive high-quality web design services without breaking the bank."} minititle={'Affordable Solutions for Every'}></BannerSection>

                <PackageSection />
                <ComboPackageSection></ComboPackageSection>
                <InnerProcessSection></InnerProcessSection>
                <BeginYourJourneySection />

            </div >
        </>
    )
}

export default page
