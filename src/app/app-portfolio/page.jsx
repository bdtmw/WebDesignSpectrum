import { animationPortfolio, marketingPortfolio, websitePortfolio } from '@/components/hooks/Portfolio'
import PortfolioSection from '@/components/screens/Home/PortfolioSection'
import BannerSection from '@/components/sections/BannerSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import Image from 'next/image'
import React from 'react'


const portfolioData = {
    website: websitePortfolio,
    marketing: marketingPortfolio,
    animation: animationPortfolio,
    branding: animationPortfolio,
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
        id: "animation",
        label: "Logo",
    },
    {
        id: "branding",
        label: "Branding",
    },
];



const AppPortfolio = () => {
    return (
        <div>
            <BannerSection title={'Where VisionBecomes Reality!'} description={"At our company, creativity fuels our innovation. We transform imaginative ideas into robust digital experiences—be it a cutting-edge app or a captivating website. Our case studies highlight our ability to turn visionary concepts into engaging interfaces that embody your brand's essence and drive success."} minititle={'Case Studies'}></BannerSection>

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

            {/* <section className="portfolio-fixed">
                <div className="container-fluid rest">
                    <div
                        className="row"
                        style={{
                            backgroundImage: "url('/images/early-bg.jpg')",
                        }}
                    >
                        <div className="col-lg-6 right">
                            <div className="cont active" data-tab="tab-1">

                                <div className="img-hiden">
                                    <Image
                                        src="/images/Mockups/early_learning_mob.jpg"
                                        alt=""
                                        width={500}
                                        height={500}
                                    />
                                </div>

                                <span style={{ color: "black" }} className="sub-title mb-15">01.</span>

                                <h2 style={{ color: "black" }} className="mb-30">
                                    Carwow <br />
                                    <small>find your next car</small>
                                </h2>

                                <div style={{ color: "black" }} className="row justify-content-center">
                                    <div className="col-md-12">

                                        <p style={{ color: "black" }} className="mobile-port-para">
                                            Browse through 1,000s of cars from dealers across the UK,
                                            read and watch expert car reviews and get offers so you can
                                            make the best decision on your next car.
                                        </p>

                                        <ul className="rest row mt-30 app-infos">

                                            <li className="col-lg-4 col-md-4 col-12">
                                                <div>
                                                    <span className="icon">
                                                        <Image
                                                            src="/images/Mockups/dwn-icon.jpg"
                                                            alt="icon"
                                                            width={50}
                                                            height={50}
                                                            className="img-fluid"
                                                        />
                                                    </span>

                                                    <h5>4.3</h5>
                                                    <p>Rating</p>
                                                </div>
                                            </li>


                                            <li className="col-lg-4 col-md-4 col-12">
                                                <div>
                                                    <span className="icon">
                                                        <Image
                                                            src="/images/Mockups/usr-icon.jpg"
                                                            alt="icon"
                                                            width={50}
                                                            height={50}
                                                            className="img-fluid"
                                                        />
                                                    </span>

                                                    <h5>160k</h5>
                                                    <p>Fund Raised</p>
                                                </div>
                                            </li>


                                            <li className="col-lg-4 col-md-4 col-12">
                                                <div>
                                                    <span className="icon">
                                                        <Image
                                                            src="/images/Mockups/fund-icon.jpg"
                                                            alt="icon"
                                                            width={50}
                                                            height={50}
                                                            className="img-fluid"
                                                        />
                                                    </span>

                                                    <h5>1M+</h5>
                                                    <p>Download</p>
                                                </div>
                                            </li>

                                        </ul>


                                        <div className="btn-group mt-40">

                                            <div className="app-btn">
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.carwowapp"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Image
                                                        src="/images/Mockups/playstore-2.jpg"
                                                        alt="playstore"
                                                        width={200}
                                                        height={60}
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>


                                            <div className="app-btn">
                                                <a
                                                    href="https://apps.apple.com/gb/app/carwow-buy-sell-wow/id1465884851"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <Image
                                                        src="/images/Mockups/appstore-2.jpg"
                                                        alt="appstore"
                                                        width={200}
                                                        height={60}
                                                        className="img-fluid"
                                                    />
                                                </a>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-6 rest">
                            <div className="left sticky_item">

                                <div id="tab-1" className="img bg-img d-flex">
                                    <Image
                                        src="/images/Mockups/early_learning_mob.jpg"
                                        alt="early learning"
                                        width={700}
                                        height={700}
                                        className="img-xs-hide hide-md left-mobile-app"
                                    />
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </section> */}

            <BeginYourJourneySection />
        </div>
    )
}

export default AppPortfolio
