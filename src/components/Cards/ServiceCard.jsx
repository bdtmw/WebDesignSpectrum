import Link from "next/link";
import { ChevronRight } from "lucide-react";


const ServiceCard = ({ service }) => {
    return (
        <div className="col">
            <div
                className="service-box"
                data-aos="zoom-in-right"
                data-aos-duration="1500"
                data-aos-delay={service.delay}
            >
             
                <h3 style={{ marginTop: "4%" , marginBottom: "4%"}}>
                    {service.title}
                    <br />
                    {service.subtitle}
                </h3>
                <p style={{fontSize: '13px' , padding: "0px 9px"}}>{service.desc}</p>

                <Link
                    href={service.href}
                    className="service-btn"
                    aria-label={`View ${service.title} ${service.subtitle}`} >
                   
                    <ChevronRight strokeWidth={3}  className="i" size={26} aria-hidden="true" />
                </Link>

            </div>
        </div>
    );
};


export default ServiceCard