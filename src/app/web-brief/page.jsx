import WebBriefForm from '@/components/Forms/WebBriefForm'


export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

const page = () => {
  return (
    <div>

      <section
        className="main-banner inner-banner web-brief-banner"
        style={{
          backgroundImage:
            "url('/images/BgImages/InnerPagesMainBanner.jpg')",
          height: "560px",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12">
              <div
                className="banner-text"
                data-aos="fade-down"
                data-aos-duration="1500"
              >
                <h4>Let&apos;s Plan Your Website</h4>

                <h2>
                  <span>Website Brief Form</span>
                </h2>

                <p>
                  Share a few details about your business and goals, and our team
                  will use them to design a website that fits you perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="web-brief-wrap">
        <div className="container">
          <div className="web-brief-card" data-aos="fade-up" data-aos-duration="1200">
            <WebBriefForm />
          </div>
        </div>
      </section>

    </div>
  )
}

export default page
