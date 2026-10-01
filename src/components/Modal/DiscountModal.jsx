import DicountForm from "@/components/Forms/DicountForm";
import React from "react";

const DiscountModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            id="wds-discount"
            className="wds-pop is-open"
            role="dialog"
            aria-modal="true"
            aria-labelledby="wds-pop-title"
            aria-hidden="false"
        >
            <div className="wds-pop-overlay" onClick={onClose}></div>

            <div className="wds-pop-card">
                <button
                    className="wds-pop-x"
                    aria-label="Close"
                    onClick={onClose}
                >
                    &times;
                </button>

                <div className="wds-pop-offer">
                    <span className="wds-pop-badge">GET STARTED</span>

                    <div style={{ 
                            lineHeight: "36px"
                    }} className="wds-pop-off"> Build Your   <br />
                       First Website With Us</div>

                    <p className="wds-pop-sub">
                        Build a professional website that attracts customers and helps your business grow.
                    </p>

                    <p className="wds-pop-sub">
                        With Web Design Spectrum you'll get:
                    </p>


                    <ul className="wds-pop-list">
                        <li>Custom Design Tailored to Your Brand</li>
                        <li>Mobile Friendly on Every Device</li>
                        <li>SEO Ready for Better Rankings</li>
                        <li>Transparent Pricing with No Hidden Fees</li>
                    </ul>
                </div>

                <div className="wds-pop-form">
                    <h3 id="wds-pop-title">Get Your Free Quote</h3>

                    <p className="wds-pop-lead">
                        Tell us about your project and we'll get back to you with a personalized quote. No obligation.
                    </p>

                    <DicountForm/>

                    <div id="wds-pop-thanks" hidden={true}>
                        <div className="wds-pop-check">&#10003;</div>

                        <h3>You're in!</h3>

                        <p className="wds-pop-lead">
                            By submitting, you agree to be contacted about your project and quote. We never share your details. Reply STOP to opt out of texts.
                        </p>

                        <button className="wds-pop-btn" onClick={onClose}>
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountModal;
