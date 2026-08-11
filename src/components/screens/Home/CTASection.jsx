"use client";
import Image from "next/image";



const CTASection = () => {
   
    return (
        <section style={{ marginTop: '10%', marginBottom: '5%' }} className="main-cta">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-4">

                        <div style={{ textAlign: 'start', marginLeft: 20, display: 'flex', flexDirection: 'column', gap: 10 }} className="heading">
                            <h2>Avail Wyoming Web Design Packages at
                            </h2>

                            <h3>
                                Our Affordable Web
                                <span>Development Packages</span>
                            </h3>

                            <p>
                                Designed for Wyoming small businesses — streamline the creation and management of your website effortlessly, without agency-city prices.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-2">
                        <div className="cta-img">
                            <Image
                                src="/images/Mockups/homesec3.png"
                                alt="Web Design Packages"
                                width={150}
                                height={150}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default CTASection;