"use client";

import { useState } from "react";
import { comboPackage } from "@/components/hooks/comboPackageData";
import PackageModal from "@/components/Modal/PackageModal";
import Link from "next/link";

const ComboPackageSection = () => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);



    const handleOrder = () => {
        const features = comboPackage.sections
            .filter((section) => section.type === "lists")
            .flatMap((section) =>
                section.groups.map((group) => group.title)
            );

        const priceSection = comboPackage.sections.find(
            (section) => section.type === "price"
        );

        setSelectedPackage({
            sku: comboPackage.heading,
            title: priceSection.title,
            price: priceSection.price,
            features,
        });

        setIsDetailsOpen(true);
    };

    const handleCloseDetails = () => {
        setIsDetailsOpen(false);
        setSelectedPackage(null);
    };

    return (
        <>
            <section className="combo-pkg-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="packages-bundle-combobox">
                                <div className="packages-combobox-head">
                                    <h3>
                                        <span>{comboPackage.heading}</span>
                                        {comboPackage.title}
                                    </h3>

                                    <p>{comboPackage.subtitle}</p>
                                </div>

                                <div className="row align-items-center">
                                    {comboPackage.sections.map((column, index) => (
                                        <div
                                            key={index}
                                            className={
                                                index === 2
                                                    ? "col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12"
                                                    : "col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12"
                                            }
                                        >
                                            {column.type === "lists" ? (
                                                column.groups.map((group) => (
                                                    <div
                                                        key={group.title}
                                                        className="packages-combobox-list"
                                                    >
                                                        <h4>{group.title}</h4>

                                                        <ul className="combobox-bundle-list">
                                                            {group.items.map((item) => (
                                                                <li key={item}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="packages-combobox-price">
                                                    <h5 className="heading-two">
                                                        {column.title}
                                                    </h5>

                                                    <span>{column.price}</span>

                                                    <del>{column.oldPrice}</del>

                                                    <p>{column.offer}</p>

                                                    <Link href="/conatct">
                                                        <button
                                                            className="chat-btn"
                                                        >
                                                            Want To Discuss
                                                        </button>
                                                    </Link>

                                                    <button
                                                        className="popup-btn chatt chat"
                                                        onClick={handleOrder}
                                                    >
                                                        Order Now
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PackageModal
                isOpen={isDetailsOpen}
                onClose={handleCloseDetails}
                packageItem={selectedPackage}
            />
        </>
    );
};

export default ComboPackageSection;