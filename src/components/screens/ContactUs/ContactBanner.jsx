const ContactBanner = () => {
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
                    <div className="col-lg-12 col-sm-12 pr-0">
                        <div
                            className="banner-text"
                            data-aos="fade-down"
                            data-aos-duration="1500"
                        >
                            <h4>Leading Web Design Agency</h4>

                            <h1>
                                <span>Connect With Us</span>
                            </h1>

                            <p>
                                Expand your global reach and showcase your products and
                                services with the expert support of Web Design Spectrum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;