import Image from "next/image";

const PackageBanner = () => {
  return (
    <section
      className="main-banner inner-banner"
      style={{
        backgroundImage:
          "url('/images/BgImages/InnerPagesMainBanner.jpg')",
        height: "560px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 pr-0 d-flex justify-content-center">
            <div
              className="banner-text"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <h4>Affordable Solutions for Every</h4>

              <h2>
                <span>Business Owner</span>
              </h2>

              <p>
                Our team of expert web designers has meticulously crafted
                cost-effective packages to suit businesses of all sizes.
                Whether you&apos;re a startup or an established enterprise, our
                affordable offerings ensure you receive high-quality web design
                services without breaking the bank.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 banner-img">
            <Image
              src="/images/webp/inner-banner/banner-right/package.webp"
              alt="Affordable website design packages"
              width={700}
              height={600}
              className="img-fluid"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageBanner;