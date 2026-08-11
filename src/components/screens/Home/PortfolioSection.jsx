"use client";
import { useState } from "react";
import Link from "next/link";
import PortfolioTab from "@/components/ui/PortfolioTab";
import PortfolioCard from "@/components/Cards/PortfolioCard";
import Fancybox from "@/components/hooks/Fancybox";
import { animationPortfolio, marketingPortfolio, websitePortfolio } from "@/components/hooks/Portfolio";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const portfolioData = {
  website: websitePortfolio,
  marketing: marketingPortfolio,
  app: animationPortfolio,
};


const portfolioTabs = [
  {
    id: "website",
    label: "WEBSITE DESIGN",
  },
  {
    id: "marketing",
    label: "DIGITAL MARKETING",
  },
  {
    id: "app",
    label: "Application",
  },
];


const PortfolioSection = ({
  title = "Enhancing Local Visibility with Targeted Advertising",
  heading = (
    <>
      User-Focused Website <span>Layouts Built for Wyoming Brands</span>
    </>
  ),
  description = (
    <>
      Crafting unique Wyoming brands with captivating design and
      copywriting. Explore our work in website design,
      <br />
      digital marketing, and video animation.
    </>
  ),
  tabs = portfolioTabs,
  data = portfolioData,
  showTabs = true,
  buttonText = "View Our Portfolio",
  buttonLink = "/portfolio",
  button = true
}) => {
  const [activeTab, setActiveTab] = useState(
    showTabs ? tabs[0]?.id : ""
  );

  return (
    <section className="main-portfolio">
      <div className="heading">
        <h2>{title}</h2>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>

      {showTabs && (
        <div className="container">
          <ul className="nav nav-tabs cust-nav-tabs justify-content-center border-0">
            {tabs.map((tab) => (
              <PortfolioTab
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={setActiveTab}
              />
            ))}
          </ul>
        </div>
      )}

      <div style={{ marginTop: !showTabs ? 50 : 0 }} className="client-reviews-wrap">
        <div className="tab-content">
          {showTabs ? (
            tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-pane fade ${activeTab === tab.id ? "show active" : ""
                  }`}
                hidden={activeTab !== tab.id}
              >
                <Fancybox>
                  {data[tab.id].length > 6 ? (
                    <Swiper
                      modules={[Autoplay, Pagination]}
                      navigation={false}
                      pagination={{
                        clickable: true,
                      }}
                      spaceBetween={24}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        576: {
                          slidesPerView: 4,
                        },
                        992: {
                          slidesPerView: 6,
                        },
                      }}
                    >
                      {data[tab.id].map((item) => (
                        <SwiperSlide key={item.id}>
                          <PortfolioCard item={item} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="row justify-content-center">
                      {data[tab.id].map((item) => (
                        <PortfolioCard styles={true} key={item.id} item={item} />
                      ))}
                    </div>
                  )}
                </Fancybox>


              </div>
            ))
          ) : (
            <Fancybox>
              {data.length > 6 ? (
                <Swiper
                  modules={[Autoplay, Pagination]}
                  navigation={false}
                  pagination={{
                    clickable: true,
                  }}
                  spaceBetween={24}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    576: {
                      slidesPerView: 4,
                    },
                    992: {
                      slidesPerView: 6,
                    },
                  }}
                >
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <PortfolioCard item={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <div className="row justify-content-center">
                  {data.map((item) => (
                    <PortfolioCard styles={true} key={item.id} item={item} />
                  ))}
                </div>
              )}
            </Fancybox>
          )}
        </div>
      </div>

      {
        button &&
        <div className="container">
          <div className="package-btn-wrap">
            <Link className="home-btn left-right-mov" href={buttonLink}>
              {buttonText}
            </Link>
          </div>
        </div>
      }


    </section>
  );
};

export default PortfolioSection;