import React from 'react'
import BannerSection from '@/components/sections/BannerSection'
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import {   application,  logoDesigns, marketingPortfolio, websitePortfolio } from '@/components/hooks/Portfolio';


const portfolioData = {
    website: websitePortfolio,
    marketing: marketingPortfolio,
    logo: logoDesigns,
    app: application,
};


const portfolioTabs = [
    {
        id: "website",
        label: "Website Design",
    },
    {
        id: "marketing",
        label: "DIGITAL MARKETING",
    },
    {
        id: "logo",
        label: "Logo",
    },
    {
        id: "app",
        label: "Application",
    },
];


const portfolio = () => {
    return (
        <div>

            <BannerSection title={'Complemented by Strategic Advertising'} description={"In our pursuit of the title of best quality design, we strive to provide an excellent initial impression."} minititle={'User-Centric Website Layouts'}></BannerSection>
            <PortfolioSection
                title={"Enhancing Local Visibility with Targeted Advertising"}
                heading={
                    <>
                        Complemented
                        <span style={{marginLeft: 10}}>
                            by Strategic Advertising
                        </span>
                    </>
                }
                description={"We build distinctive brands with a unique flair for design and compelling copywriting that truly resonates with your target audience."}
                button={false} tabs={portfolioTabs}
                data={portfolioData}></PortfolioSection>
            <BeginYourJourneySection />

        </div>
    )
}

export default portfolio
