
import ServiceCard from "@/components/Cards/ServiceCard";

const services = [
    {
        id: 1,
        title: "Static",
        subtitle: "Websites",
        desc: 'Fast, secure sites for small businesses',
        href: "/static-website",
        delay: 200,
    },
    {
        id: 2,
        title: "Ecommerce",
        subtitle: "Websites",
        desc: 'Sell online without breaking the bank',
        href: "/ecommerce-solution",
        delay: 400,
    },
    {
        id: 3,
        title: "Web",
        subtitle: "Application",
        desc: 'web application development',
        href: "/web-application",
        delay: 600,
    },
    {
        id: 4,
        title: "Mobile ",
        subtitle: "Application",
        desc: 'iOS & Android development',
        href: "/cms-website-development",
        delay: 800,
    },
    {
        id: 5,
        title: "Logo",
        subtitle: "Design",
         desc: 'Sell online without breaking the bank',
        href: "/logo-design",
        delay: 1000,
    },
    {
        id: 6,
        title: "Seo Media",
        subtitle: "Marketing",
         desc: 'Grow your audience affordably',
        href: "/smm-services",
        delay: 1200,
    },
    {
        id: 7,
        title: "Search Engine",
        subtitle: "Optimization",
         desc: 'Get found by more local customers',
        href: "/seo-services",
        delay: 1400,
    },
];


const ServiceSection = () => {
    return (
        <section className="main-service">
            <div
                className="heading"
                data-aos="fade-down"
                data-aos-duration="1500"
            >
                <h2>Web Design Spectrum Services
                </h2>

                <h3>
                    Affordable Web Design
                    <span style={{ marginLeft: 10 }}>Services</span> for Small Businesses
                </h3>

                <h5 style={{ margin: 15 }}>Delivering excellence through a range of premium services

                </h5>

                <p>
                    As the affordable web design company small businesses rely on, we're dedicated to exceeding client expectations. Our expertise in website design is unmatched, ensuring seamless, high-quality solutions tailored to your business needs, from custom development to SEO that helps you get found online.
                </p>
            </div>

            <div className="main-service-wrap">
                <div className="row no-gutters service-responsive-slider">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;