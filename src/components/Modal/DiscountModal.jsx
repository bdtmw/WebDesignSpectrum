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
                    <span className="wds-pop-badge">Limited Time</span>

                    <div style={{ 
                            lineHeight: "36px"
                    }} className="wds-pop-off"> Save 50% <br />
                        on Your First Website</div>

                    <p className="wds-pop-sub">
                        Build a website that attracts customers and grows your business.
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
                    <h3 id="wds-pop-title">Claim Your 50% Discount</h3>

                    <p className="wds-pop-lead">
                        Drop your details and we'll send your quote with the discount
                        applied. No obligation.
                    </p>

                    <DicountForm/>

                    <div id="wds-pop-thanks" hidden={true}>
                        <div className="wds-pop-check">&#10003;</div>

                        <h3>You're in!</h3>

                        <p className="wds-pop-lead">
                            Your 50% discount is reserved. We'll be in touch shortly with
                            your quote.
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