import Image from "next/image";

const bannerPoints = [
  "Driving lead generation is our forte.",
  "Optimize the returns on your investment.",
  "Create an instant impact on your target audience.",
];

const AboutBanner = () => {
  return (
    <section
      className="main-banner inner-banner about-banner"
      style={{
        backgroundImage:
          "url('/images/BgImages/InnerPagesMainBanner.jpg')",
        height: "460px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 pe-lg-0">
            <div
              className="banner-text"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <h4>Innovative Collective of Creative Minds</h4>

              <h2>
                <span>
                  We Craft Designs
                  <br />
                  With Flawless Pixels
                </span>
              </h2>

              <ul>
                {bannerPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {/* <Image
                src="/images/webp/bark-logo.webp"
                alt="Bark Logo"
                width={180}
                height={70}
                className="img-fluid"
              /> */}
            </div>
          </div>
{/* 
          <div className="col-lg-6 col-sm-12 banner-img">
            <Image
              src="/images/webp/inner-banner/banner-right/about.webp"
              alt="About Web Design Spectrum"
              width={700}
              height={500}
              className="img-fluid"
              priority
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;