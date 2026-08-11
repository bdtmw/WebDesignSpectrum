import Image from "next/image";
import Link from "next/link";

import '../../../css/plugin.css'
import '../../../css/responsive.css'
import '../../../css/style.css'
import FeatureCard from "@/components/Cards/FeatureCard";

const features = [
  {
    id: 1,
    title: "Static",
    subtitle: "Website",
    href: "/static-website",
    iconClass: "sprite-feature-icon-1",
  },
  {
    id: 2,
    title: "Ecommerce",
    subtitle: "Website",
    href: "/ecommerce-solution",
    iconClass: "sprite-feature-icon-2",
  },
  {
    id: 3,
    title: "Web",
    subtitle: "Application",
    href: "/web-application",
    iconClass: "sprite-feature-icon-3",
  },
  {
    id: 4,
    title: "Logo",
    subtitle: "Design",
    href: "/logo-design",
    iconClass: "sprite-feature-icon-4",
  },
];



const MainFeature = () => {
  return (
    <>
      <section
        className="main-portfolio"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div className="heading">
          <h2>Providing Comprehensive Design</h2>
          <h3>
            Affordable Web Design That Puts
            <span> Your Small Business on the Map</span>
          </h3>
          <h5 style={{ marginBottom: 20, marginTop: 20}}>Crafting professional websites for small businesses of every kind, at a price that fits.

          </h5>
          <p>
            As an affordable web design company for small businesses, we build websites that promote, organize, and grow <br /> your brand. Whether you run a local boutique, a trades business, or a growing startup, our team delivers custom <br /> web design small businesses can count on, without the agency price tag.
          </p>
        </div>

      </section>

      <section
        className="main-feature"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <div style={{ marginTop: 70 }} className="container">
          <div className="feature-wrap">
            <div className="row no-gutters">

              <div className="col-lg-12 col-md-6">
                <div className="feature-carousel owl-carousel owl-theme">
                  {features.map((feature) => (
                    <FeatureCard
                      key={feature.id}
                      feature={feature}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default MainFeature;