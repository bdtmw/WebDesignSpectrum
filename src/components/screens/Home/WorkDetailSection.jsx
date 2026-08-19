"use client";

import Link from "next/link";

const WorkDetailSection = ({
    title,
    subtitle,
    description,
}) => {
    const handleGetQuote = () => {
        // Open your quote modal here
    };

    return (
        <section className="main-work-detail">
            <div className="container">
                <div
                    className="work-detail"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                >
                    <h2 style={{marginTop: 10, marginBottom: 10}}>{title}</h2>

                    <h3>{subtitle}</h3>

                    <p style={{ marginTop: 10 }}>
                        {description}
                    </p>

                    <div  className="">
                        <Link  style={{minWidth: "100%"}} href={"/contact"}>
                            <span  className="package-btn-wrap">
                                <button
                                    type="button"
                                    // style={{width: '100%'}}
                                    className="home-btn left-right-mov"

                                >
                                    Get a Quote
                                </button>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkDetailSection;