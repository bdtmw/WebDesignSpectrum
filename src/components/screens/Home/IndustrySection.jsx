"use client";

import Image from "next/image";
import Link from "next/link";


const awards = [
    'Retail & Boutiques',
    'Restaurants & Cafes',
    'Trades & Contractors',
    'Real Estate',
    'Retail & Ecommerce',
    'Healthcare & Wellness',
    'Startups',
    'Professional Services',
];


const IndustrySection = () => {
    const handleGetQuote = () => {
        // Open your quote modal here
    };

    return (
        <section className="main-industry">
            <div className="container">
                <div className="row justify-content-end">


                    <div
                        className="col-lg-6 col-md-12 industry-img"
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <Image
                            src="/images/Mockups/homesec4.webp"
                            alt="Web Design Spectrum industry solutions"
                            width={750}
                            height={650}
                            className="img-fluid"
                        />
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div
                            className="industry-text"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                        >

                            <h5> Every Small Business Industry</h5>
                            <h2 style={{ marginTop: 16 }}>
                                <span>Curious if Web Design Spectrum Is </span>
                                <br />
                                the Right Fit for Your Small Business?
                            </h2>

                            <p>
                                Absolutely. From retail and hospitality to trades, professional services, health, and ecommerce, our web design team is equipped to serve your sector. We offer affordable custom web designs, advanced search engine optimization (SEO), dynamic social media marketing, targeted digital campaigns, engaging illustrations, and captivating motion graphics tailored to your industry's standards.
                            </p>

                            <div style={{ display: 'flex', flexWrap: "wrap", gap: '13px', marginBottom: "20px", marginTop: "-10px" }} >

                                {awards.map((award, index) => (
                                    <div
                                        key={index}
                                    >
                                        <div style={{
                                            background: "#fff",
                                            border: "1px solid #e6e9f4",
                                            borderRadius: "50px",
                                            padding: "10px 16px",
                                            fontWeight: "700",
                                            fontSize: "12.5px",
                                        }}>
                                            {award}
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <Link href={"/contact"}>

                                <div className="industry-btn-wrap">
                                    <button
                                        type="button"
                                        className="home-btn left-right-mov"
                                        onClick={handleGetQuote}
                                    >
                                        Get a Quote
                                    </button>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustrySection;