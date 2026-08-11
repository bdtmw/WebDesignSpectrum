"use client";

import { packageCategories } from "@/components/hooks/packageData";
import PackageModal from "@/components/Modal/PackageModal";
import PackageGrid from "@/components/screens/Package/PackageGrid";
import PortfolioTab from "@/components/ui/PortfolioTab";
import { useEffect, useMemo, useState } from "react";

const PackageSection = () => {
    const [activeTab, setActiveTab] = useState(
        packageCategories[0]?.id || ""
    );

    const [selectedPackage, setSelectedPackage] = useState(null);
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);

    const activeCategory = useMemo(() => {
        return (
            packageCategories.find(
                (category) => category.id === activeTab
            ) || packageCategories[0]
        );
    }, [activeTab]);

    const tabs = useMemo(() => {
        return packageCategories.map((category) => ({
            id: category.id,
            label: category.label,
        }));
    }, []);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const handleViewDetails = (packageItem) => {
        setSelectedPackage(packageItem);
        setIsDetailsOpen(true);
    };

    const handleCloseDetails = () => {
        setIsDetailsOpen(false);
        setSelectedPackage(null);
    };

    const handleBuyNow = (packageItem) => {
        console.log("Buy package:", packageItem);

        /*
        Yahan modal open kar sakte ho:
    
        setSelectedPackage(packageItem);
        setIsOrderModalOpen(true);
    
        Ya checkout page:
    
        router.push(`/checkout?package=${packageItem.sku}`);
        */
    };

    const handleLiveChat = (packageItem) => {
        console.log("Open live chat for:", packageItem);

        /*
        Tawk, LiveChat ya custom chat function:
    
        window.Tawk_API?.maximize();
        */
    };

    useEffect(() => {
        if (!isDetailsOpen) {
            return undefined;
        }

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                handleCloseDetails();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscapeKey);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isDetailsOpen]);

    return (
        <>

        
            <section className="main-package" data-aos="fade-down" data-aos-duration="1500" id="package__sec">
                <div className="container">
                    <div className="heading">
                        <h2>Our All-Inclusive
                        </h2>
                        <h3>Digital Bundles  <span></span> </h3>
                        <p>Discover our budget-friendly, comprehensive packages that cover every aspect of your online presence. Whether you need</p>
                    </div>

                    <div className="packages-tab">
                        <ul
                            className="nav nav-tabs justify-content-center"
                            role="tablist"
                        >
                            {tabs.map((tab) => (
                                <PortfolioTab
                                    key={tab.id}
                                    tab={tab}
                                    isActive={activeTab === tab.id}
                                    onClick={handleTabChange}
                                />
                            ))}
                        </ul>
                    </div>

                    <div className="tab-content container">
                        <PackageGrid
                            packages={activeCategory?.packages || []}
                            activeTab={activeTab}
                            onViewDetails={handleViewDetails}
                            onBuyNow={handleBuyNow}
                            onLiveChat={handleLiveChat}
                        />
                    </div>
                </div>
            </section>

            <PackageModal
                packageItem={selectedPackage}
                isOpen={isDetailsOpen}
                onClose={handleCloseDetails}
            />
        </>
    );
};

export default PackageSection;