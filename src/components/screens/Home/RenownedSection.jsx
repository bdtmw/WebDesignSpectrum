"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone } from "lucide-react";

const contactItems = [
    {
        id: "contact",
        type: "button",
        title: "Get In Touch",
    },
    {
        id: "phone",
        type: "link",
        href: "tel:+13072183240",
        icon: Phone,
        eyebrow: "Call Us At",
        title: "(307) 218-3240",
    },
    {
        id: "chat",
        type: "button",
        icon: MessageCircle,
        eyebrow: "Click here to",
        title: "Live Chat",
    },
];

const RenownedSection = () => {
    const handleContactClick = () => {
        console.log("Open contact modal");
    };

    const handleChatClick = () => {
        console.log("Open live chat");
    };

    return (
        <section className="main-renowned">
            <div className="container">
                <div className="row justify-content-end">

                    <div className="renowned-img">
                        <Image
                            src="/images/Mockups/homesec2.webp"
                            alt="Web design agency showcase"
                            width={100000}
                            height={100000}
                            style={{
                                objectFit: "contain",
                            }}
                        />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div
                            className="renowned-text"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                        >
                            <h6 style={{color: 'white' , textTransform:'uppercase'}}>A Legacy of Excellence</h6>
                            <h3>
                                A <span style={{ marginRight: 10 }}> Legacy of Excellence in</span>
                                Affordable Web Design
                            </h3>

                            <p>
                                Web Design Spectrum has been empowering small businesses with innovative design solutions and fresh branding ideas. Our success stems from a deep commitment to creativity and strategic execution. Based in Sheridan, Wyoming, we serve small businesses nationwide with affordable, high-quality websites, and our track record of satisfied clients is proof of our expertise.


                            </p>

                            <div className="contact-info">

                                <ul>
                                    <li>
                                        <Link href="/contact" data-toggle="modal" data-target=".bd-example-modal-lg">
                                            <div className="contact-info-btn"></div>
                                            <h4>Get In Touch</h4>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="tel: (307) 218-3240">
                                           
                                            <h4><span>Call Us At</span><br/> (307) 218-3240</h4>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#" className="chatt">
                                            <h4><span>Click here to</span><br/>Live Chat</h4>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>

                            {/* <div className="contact-info">
                                <ul>
                                    {contactItems.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <li key={item.id}>
                                                {item.type === "link" ? (
                                                    <Link href={item.href}>
                                                        {Icon && <Icon size={28} aria-hidden="true" />}

                                                        <h4>
                                                            <span>{item.eyebrow}</span>
                                                            <br />
                                                            {item.title}
                                                        </h4>
                                                    </Link>
                                                ) : (
                                                    <button
                                                        type="button"
                                                        className={
                                                            item.id === "chat"
                                                                ? "contact-action chatt"
                                                                : "contact-action"
                                                        }
                                                        onClick={
                                                            item.id === "chat"
                                                                ? handleChatClick
                                                                : handleContactClick
                                                        }
                                                    >
                                                        {item.id === "contact" && (
                                                            <div className="contact-info-btn" />
                                                        )}

                                                        {Icon && <Icon size={28} aria-hidden="true" />}

                                                        <h4>
                                                            {item.eyebrow && (
                                                                <>
                                                                    <span>{item.eyebrow}</span>
                                                                    <br />
                                                                </>
                                                            )}

                                                            {item.title}
                                                        </h4>
                                                    </button>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RenownedSection;