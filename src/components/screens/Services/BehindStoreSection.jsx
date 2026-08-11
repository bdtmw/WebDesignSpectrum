import FeatureCard from '@/components/Cards/FeatureCard';
import React from 'react'

export const layerData = [
    {
        id: 1,
        number: "LAYER ONE",
        title: "The Storefront",
        description:
            "Product pages, category structure, search and navigation determine whether shoppers find what they came for. Research consistently shows shoppers decide within seconds whether a store feels trustworthy — layout, typography, image quality, page speed and mobile behavior all feed that snap judgment. Our designers and developers work together so every visual decision is also a conversion decision.",
    },
    {
        id: 2,
        number: "LAYER TWO",
        title: "The Transaction Engine",
        description:
            "Carts, checkout flows, payment gateway integration, tax calculation, shipping rules, discount logic and confirmation emails have to work flawlessly on every device. A checkout that stalls or asks for too much information is the single biggest killer of ecommerce revenue. We build checkouts that are short, fast and secure, supporting the payment methods your customers actually use.",
    },
    {
        id: 3,
        number: "LAYER THREE",
        title: "The Back Office",
        description:
            "A well-developed store is as pleasant to run as it is to shop. Inventory, orders, customer records, refunds and reporting should live in one clean dashboard. When we hand over a store, we hand over control: add products, change prices, run promotions and pull sales reports without calling a developer.",
    },
    {
        id: 4,
        number: "LAYER FOUR",
        title: "Everything Under the Hood",
        description:
            "Hosting configuration, SSL and security hardening, database optimization, backup routines and the performance tuning that keeps pages loading in under two seconds during traffic spikes. This invisible work is where an experienced ecommerce web development agency earns its keep — because it is precisely the work template stores skip.",
    },
];

const BehindStoreSection = ({
    eyebrow,
    title,
    subtitle,
    description,
    description2,
    layers = [],
}) => {
    return (
        <section
            className="main-portfolio"
            data-aos="fade-down"
            data-aos-duration="1500"
        >
            <div className="heading">

                {eyebrow && <h2>{eyebrow}</h2>}

                {title && (
                    <h3 style={{ marginTop: 14 }}>
                        {title}

                        {subtitle && (
                            <>
                                <br />
                                <span>{subtitle}</span>
                            </>
                        )}
                    </h3>
                )}

                {description && (
                    <p style={{ marginTop: 14 }}>
                        {description}
                    </p>
                )}

                {description2 && (
                    <p style={{ marginTop: 14 }}>
                        {description2}
                    </p>
                )}
            </div>

            <div className="layers" style={{ paddingLeft: 2 }}>
                {layers.map((layer) => (
                    <div className="layer" key={layer.id}>
                        <span className="num">{layer.number}</span>

                        <h3>{layer.title}</h3>

                        <p>{layer.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BehindStoreSection;
