import PackageForm from "@/components/Forms/PackageForm";
import React from "react";

const PackageModal = ({ isOpen, onClose, packageItem, }) => {
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
                    <span className="wds-pop-badge">{packageItem.sku}</span>

                    <p className="wds-pop-sub">
                        {packageItem.title}
                    </p>

                     <div style={{
                        lineHeight: "36px"
                    }} className="wds-pop-off"> {packageItem.price || "Contact Us"} </div>

                 

                    <ul className="wds-pop-list">
                        {packageItem.features.map((feature, index) => (
                            <li key={index} >
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="wds-pop-form">
                    {/* <h3 id="wds-pop-title">Claim Your 50% Discount</h3>

                    <p className="wds-pop-lead">
                        Drop your details and we'll send your quote with the discount
                        applied. No obligation.
                    </p> */}
                    <PackageForm packageTitle={packageItem.title}></PackageForm>


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

export default PackageModal;