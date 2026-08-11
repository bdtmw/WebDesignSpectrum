import ContactForm from "@/components/Forms/ContactForm";


const BannerSection = ({ title, description, minititle, bannerPoints }) => {
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
              <h4>{minititle}</h4>

              <h2>
                <span>{title}</span>
              </h2>

              {
                description && <p>
                  {description}
                </p>
              }

              {
                bannerPoints && <ul>
                  {bannerPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              }

            </div>
          </div>




          <div className="col-lg-6 col-sm-12 banner-img">

            <ContactForm></ContactForm>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;