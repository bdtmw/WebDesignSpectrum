"use client";
import TestimonialCard from "@/components/Cards/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import DiscountModal from "@/components/Modal/DiscountModal";


const testimonials = [
    {
        id: 1,
        review:
            "Working with Web Design Spectrum was a game-changer for our business. Their innovative designs and responsive team transformed our online presence.",
        name: "John, CEO",
        company: "Tech Innovations",
    },
    {
        id: 2,
        review:
            "Our vision came to life thanks to Web Design Spectrum. The website looks fantastic and has significantly boosted our traffic.",
        name: "Sarah, Marketing",
        company: "Director at Bright Ideas",
    },
    {
        id: 3,
        review:
            "We were impressed by their thorough research and creative execution. The entire process was smooth, and the results exceeded our expectations.",
        name: "Mark",
        company: "Founder of Startup Hub",
    },
];



const TestimonialSection = () => {


    const [isDiscountOpen, setIsDiscountOpen] = useState(false);


    return (
        <>
            <section
                className="main-testi"
                data-aos="fade-down"
                data-aos-duration="1500"
            >
                <div className="container">
                    <div className="heading">
                        <h3>Reviews from Satisfied Customers</h3>

                        <p>
                            We understand how crucial it is to align with your project
                            requirements and deadlines. That's why we rely solely on our
                            in-house team of seasoned professionals, each with extensive
                            experience on projects like yours. When you partner with us, you
                            can expect seamless collaboration and timely delivery every step of
                            the way.
                        </p>
                    </div>

                    <div className="testi-wrap">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-lg-5 col-md-12">
                                <div className="testi-text">
                                    <h2>TESTIMONIALS</h2>

                                    <h3>
                                        Feedback from Our
                                        <br />
                                        Valued Clients
                                    </h3>

                                    <p>
                                        We take immense pride in delivering comprehensive design
                                        solutions to an outstanding clientele. The accolades and
                                        genuine feedback from our customers are a testament to our
                                        unwavering commitment to excellence.
                                    </p>

                                    <button
                                        type="button"
                                        className="btn btn-round btn-white btn-tup chatt"
                                        onClick={() => setIsDiscountOpen(true)}
                                    >
                                        <strong>CLICK NOW </strong>
                                        TO AVAIL THIS OFFER
                                    </button>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12 p-lg-0">
                                <div className="">
                                    <Swiper
                                        modules={[Autoplay, Pagination]}
                                        spaceBetween={20}
                                        slidesPerView={1}
                                        loop
                                        autoplay={{
                                            delay: 4000,
                                            disableOnInteraction: false,
                                        }}
                                        pagination={{ clickable: true }}
                                    >
                                        {testimonials.map((testimonial) => (
                                            <SwiperSlide key={testimonial.id}>
                                                <TestimonialCard testimonial={testimonial} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>

            <DiscountModal
                isOpen={isDiscountOpen}
                onClose={() => setIsDiscountOpen(false)}
            />
        </>
    );
};

export default TestimonialSection;