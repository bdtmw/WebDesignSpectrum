"use client";
import JourneyForm from '@/components/Forms/JourneyForm.jsx'
import DiscountModal from '@/components/Modal/DiscountModal'
import Link from 'next/link'
import React, { useState } from 'react'

const BeginYourJourneySection = () => {

    const [isDiscountOpen, setIsDiscountOpen] = useState(false);

    return (
        <section className="footer-form-wrap">
            <span className="form-before"></span>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6">
                        <div className="footer-text-sec">
                            <div className="quote">
                                <p>Let's Get the Ball Rolling
                                </p>
                            </div>
                            <h4 style={{color: 'white' , marginBottom: 10 , marginTop: '-20px'}}>Get in Touch with Our Small Business Web Design Experts
                            </h4>
                            <p>Ask us anything. We have the friendliest customer service folks in the business.
                            </p>
                            <Link href="tel: (307) 218-3240">  (307) 218-3240</Link>
                            <Link href="mailto:info@webdesignspectrum.com"> info@webdesignspectrum.com </Link>
                            <button onClick={() => setIsDiscountOpen(true)} className="btn btn-round btn-white btn-tup chatt chat" ><strong>Click now</strong>to avail this offer</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6">
                        <div className="footer-form-sec">
                            <h3>Let's begin your journey with us!</h3>
                            <p> Please fill out the form below or drop us an email.</p>
                            <div className="footer-form" data-form-type="footer_form">
                                <JourneyForm></JourneyForm>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <DiscountModal
                isOpen={isDiscountOpen}
                onClose={() => setIsDiscountOpen(false)}
            />
        </section>
    )
}

export default BeginYourJourneySection
