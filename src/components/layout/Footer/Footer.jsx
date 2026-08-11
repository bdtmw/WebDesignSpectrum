import Link from "next/link";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  User,
  X,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const contactLinks = [
  {
    label: "Phone: (307) 218-3240 (USA)",
    href: "tel:+13072183240",
    icon: Phone,
  },
  {
    label: "Email: info@webdesignspectrum.com",
    href: "mailto:info@webdesignspectrum.com",
    icon: Mail,
  },
  {
    label: "Address: 1309 Coffeen Ave. STE 1200, Sheridan, WY 82801",
    href: "https://maps.google.com/?q=1309+Coffeen+Ave+STE+1200+Sheridan+WY+82801",
    icon: MapPin,
    external: true,
  },
];

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Packages", href: "/package" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Static Websites", href: "/static-website" },
      { label: "Cms Development", href: "/cms-website-development" },
      { label: "E-Commerce", href: "/ecommerce-solution" },
      { label: "Web Application", href: "/web-application" },
      { label: "Mobile Application", href: "/mobile-application" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Logo Design", href: "/logo-design" },
      { label: "Social Media Marketing", href: "/smm-services" },
      { label: "Search Engine Optimization", href: "/seo-services" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/webdesigntech",
    icon: FaFacebook,
  },
  {
    label: "YouTube",
    href: "#",
    icon: BsYoutube,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: LiaLinkedin,
  },
];


const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-3 col-md-12">
              <div className="footer-info footer-contact">
                <h3>Contact Information</h3>
                <h2>Get in Touch</h2>

                <ul>
                  {contactLinks.map(
                    ({ label, href, icon: Icon, external }) => (
                      <li key={label}  style={{display: 'flex'}}>
                        <Link
                          href={href}
                          target={external ? "_blank" : undefined}
                          rel={
                            external
                              ? "noopener noreferrer"
                              : undefined
                          }
                          style={{display: 'flex' , gap: 10}}
                        >
                          <Icon size={18} />
                          <span>{label}</span>
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {footerColumns.map((column, columnIndex) => (
              <div
                className="col-lg-2 col-md-12"
                key={`${column.title}-${columnIndex}`}
              >
                <div className="footer-links footer-contact">
                  <h3>{column.title}</h3>

                  <ul>
                    {column.links.map((item) => (
                      <li key={item.href}>
                        <Link style={{display: 'flex' , gap: 10}} href={item.href}>
                          <ChevronRight size={16} />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>

      <section className="copy-right">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-md-12">
              <div className="copyright-text">
                <p>
                  Copyright © {new Date().getFullYear()} Web Design
                  Spectrum All Rights Reserved.
                </p>
              </div>
            </div>

            <div className="col-lg-2 col-md-12">
              <div className="footer-social">
                <ul>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
};

export default Footer;