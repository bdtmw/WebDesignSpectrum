import React from 'react'
import BannerSection from '@/components/sections/BannerSection'
import PrivacyPolicy from '@/components/screens/Agreements/PrivacyPolicy'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'

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
