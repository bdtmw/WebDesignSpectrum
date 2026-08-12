import AboutBanner from '@/components/screens/AboutUs/AboutBanner'
import ExpertiseSection from '@/components/screens/AboutUs/ExpertiseSection'
import InnerAboutSection from '@/components/screens/AboutUs/InnerAboutSection'
import InnerProcessSection from '@/components/screens/AboutUs/InnerProcessSection'
import ServiceSection from '@/components/screens/Home/ServiceSection'
import BannerSection from '@/components/sections/BannerSection'
import BeginYourJourneySection from '@/components/sections/BeginYourJourneySection'
import TestimonialSection from '@/components/sections/TestimonialSection'
import Link from 'next/link'
import React from 'react'

const bannerPoints = [
  "Driving lead generation is our forte.",
  "Optimize the returns on your investment.",
  "Create an instant impact on your target audience.",
];

export const metadata  = {
  title: "About Us | Web Design & Digital Solutions Experts",
  description:
    "Learn about Us Web Design Spectrum and our expert team delivering web design, development, SEO, digital marketing, and branding solutions.",
  alternates: {
    canonical: "https://webdesignspectrum.com/about-us",
  },
};


const page = () => {
  return (
    <div>

      <BannerSection title={'We Craft Designs  With Flawless Pixels'} bannerPoints={bannerPoints}  minititle={'Innovative Collective of Creative Minds'}></BannerSection>

      <InnerAboutSection></InnerAboutSection>
      <ExpertiseSection></ExpertiseSection>
      <ServiceSection></ServiceSection>

      <div
        className="service-cta"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="service-cta-para">
                <p>
                  Our company takes great pride in its innovative online branding
                  <br />
                  methods, user-friendly digital products, and captivating
                  website designs.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="contact-info">
                <ul>
                  
                  <li>
                    <Link href="tel: (307) 218-3240">
                      <i className="sprite sprite-phone"></i>
                      <h4><span>Call Us At</span><br /> (307) 218-3240</h4>
                    </Link>
                  </li>

                  <li><Link href="/contact">
                    <div className="contact-info-btn "></div>
                    <h4>Get In Touch</h4>
                  </Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <InnerProcessSection></InnerProcessSection>
      <TestimonialSection></TestimonialSection>

      <BeginYourJourneySection />

    </div>
  )
}

export default page
