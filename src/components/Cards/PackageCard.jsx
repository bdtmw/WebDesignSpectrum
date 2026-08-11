"use client";

import { ChevronRight } from "lucide-react";

const PackageCard = ({
    packageItem,
    onViewDetails,
    onBuyNow,
    onLiveChat,
}) => {
    const {
        sku,
        title,
        price,
        oldPrice,
        features,
        bestSellerImage,
    } = packageItem;

    return (



        <div className="item">
            <div className="package_box" data-package-box>
                {bestSellerImage && (
                    <div className="cnrflash">
                        <div className="cnrflash-inner">
                            <img
                                src={bestSellerImage}
                                alt="Best seller"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                )}

                <div className="pkg_top">
                    <div className="pkg_title text-center">
                        <div className="productSku" style={{ display: "none" }}>
                            {sku}
                        </div>

                        <h3>{title}</h3>
                    </div>

                    <div className="pkg_pricing_area d-flex justify-content-between align-items-center">
                        <div className="sale_price">
                            <h3>{price}</h3>
                        </div>

                        {oldPrice && (
                            <div className="cut_price">
                                <h4>
                                    <span>{oldPrice}</span>
                                </h4>
                            </div>
                        )}
                    </div>

                    <div className="short_desc text-center">
                        {packageItem.shortDescription && (
                            <p>{packageItem.shortDescription}</p>
                        )}
                    </div>
                </div>

                <div className="pkg_details">
                    <div data-package-scroll>
                        <ul className="packages-bundle-list">
                            {features.map((feature, index) => (
                                <li style={{ display: 'flex' , gap: 10}} key={`${sku}-${index}`}> <ChevronRight /> {feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>

             
                <div onClick={() => onViewDetails(packageItem)} data-toggle="modal" data-target=".bd-example-modal-lg" className="pkg_bottom d-flex justify-content-between align-items-center">
                    <div style={{cursor:'pointer'}} data-toggle="modal" data-target=".bd-example-modal-lg"
                        className="order_btn order-package btn-10">GET STARTED</div>
                </div>

                {/* <button
                    type="button"
                    className="view_detail_btn"
                    onClick={() => onViewDetails(packageItem)}
                >
                    View Details
                </button>

                <div className="pkg_bottom d-flex justify-content-between align-items-center">
                    <button
                        type="button"
                        className="order_btn order-package btn-10"
                        onClick={() => onBuyNow(packageItem)}
                    >
                        Buy Now
                    </button>

                    <button
                        type="button"
                        className="chat pkg_chat_btn chatt"
                        onClick={() => onLiveChat(packageItem)}
                    >
                        <span>Click here to</span>
                        <br />
                        Live Chat
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default PackageCard;