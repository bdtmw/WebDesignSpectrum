"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import '../../../css/plugin.css'
import '../../../css/responsive.css'
import '../../../css/style.css'
import DiscountModal from "@/components/Modal/DiscountModal";
import { useEffect, useState } from "react";

const bannerPoints = [
  "Generating more leads for small businesses is what we do best.",
  "Get the most out of every dollar with results-driven design.",
  "Create an instant impact on your local and national audience.",
];


const HeroSection = () => {

  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsDiscountOpen(true);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);

  return (
    <section className="main-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 pr-0">
            <div
              className="banner-text"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h4>Affordable Web Design for Small Businesses</h4>

              <h1>
                Affordable  
                <span style={{marginLeft: 12}}>
                   Web Design <br />
                  Small Businesses Trust to Grow
                </span>
              </h1>

              <p>A professional website your small business can actually afford, with your brand and budget always our top priority.
              </p>


              <ul>
                {bannerPoints.map((point) => (
                  <li style={{ display: "flex", alignItems: "center", gap: 8 }} key={point}>
                    <ChevronRight size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Image
                src="/images/Mockups/social-logo.webp"
                alt="Social media platforms we market on"
                width={400}
                height={80}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 banner-img">
            <Image
              src="/images/Mockups/banner-side.webp"
              alt="Website design mockups on desktop and mobile"
              width={700}
              height={600}
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </div>


      <DiscountModal
        isOpen={isDiscountOpen}
        onClose={() => setIsDiscountOpen(false)}
      />
    </section>
  );
};

export default HeroSection;