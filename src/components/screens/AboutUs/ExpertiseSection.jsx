import Image from "next/image";

const expertiseStats = [
  {
    id: 1,
    value: "5",
    suffix: "",
    lineOne: "Years in",
    lineTwo: "Business",
  },
  {
    id: 2,
    value: "1000",
    suffix: "+",
    lineOne: "Projects",
    lineTwo: "Completed",
  },
  {
    id: 3,
    value: "1200",
    suffix: "+",
    lineOne: "Clients",
    lineTwo: "Served",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="inner-expertise">
      <div className="container">
        <div className="expertise-top-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-img"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <Image
                  src="/images/Mockups/homesec4.webp"
                  alt="Web Design Spectrum creative team"
                  width={700}
                  height={600}
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-text"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <h3>
                  Boundless <span>Knowledge </span>
                  Unlocks Infinite Potential!
                </h3>

                <p>
                  At Web Design Spectrum, we continually exceed expectations by
                  integrating the latest technologies and pushing the limits of
                  productivity. Our dedicated team of certified designers,
                  digital marketing specialists, and developers drives our
                  data-driven approach, ensuring robust financial growth for
                  our esteemed clients. We cultivate a hardworking culture and
                  nurture strategic partnerships that pave the way for
                  sustainable success.
                </p>

                <div className="counter-box-wrap">
                  <div className="row">
                    {expertiseStats.map((stat) => (
                      <div className="col" key={stat.id}>
                        <div className="counter-box">
                          <h2>
                            {stat.value}
                            {stat.suffix && <sup>{stat.suffix}</sup>}
                          </h2>

                          <p>
                            {stat.lineOne}
                            <br />
                            {stat.lineTwo}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="expertise-bottom-wrap">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-text"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <p>
                  Thanks to Web Design Spectrum, our confidence in our skills as
                  designers, digital marketing campaign creators, and web
                  application developers has reached new heights. One of our
                  proudest achievements is fostering an open, collaborative
                  work environment where every member feels encouraged to
                  share ideas and innovate together. We&apos;re more than just
                  tech enthusiasts—we are a vibrant, energetic, witty, and
                  creative team that&apos;s passionate about what we do.
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="expertise-img"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <Image
                  src="/images/Mockups/homesec1.webp"
                  alt="Collaborative digital design team"
                  width={700}
                  height={600}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;