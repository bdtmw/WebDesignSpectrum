const aboutSections = [
    {
        id: 1,
        title: "Always Up-To-Date",
        description:
            "At Web Design Spectrum, we empower you to boost brand recognition and drive online traffic with our digitally-driven strategic and tactical solutions that seamlessly integrate marketing and sales operations. We synchronize cutting-edge marketing campaigns with emerging digital techniques and authentic strategies to ensure a robust conversion rate.",
        className:
            "about-text-right about-text-color d-flex flex-column align-items-end",
        animation: "fade-right",
        titleStyle: { color: "white" },
    },
    {
        id: 2,
        title: "Our Passion Drives Us",
        description:
            "At Web Design Spectrum, our passion fuels every step we take. We deliver fast, efficient, and innovative digital solutions, fully understanding that impactful digital impressions are essential in today's competitive landscape. With lead generation as our top priority, we are dedicated to enhancing your online presence and crafting designs that captivate. We empower companies to achieve measurable success and drive tangible outcomes.",
        className: "about-text-right d-flex flex-column",
        animation: "fade-left",
    },
];

const InnerAboutSection = () => {
    return (
        <section className="inner-about-wrap">
            <div className="container">
                <div className="row">
                    {aboutSections.map((section) => (
                        <div
                            key={section.id}
                            className="col-lg-6 col-md-12"
                        >
                            <div
                                className={section.className}
                                data-aos={section.animation}
                                data-aos-duration="1500"
                            >
                                <h3 style={section.titleStyle}>{section.title}</h3>

                                <p>{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InnerAboutSection;