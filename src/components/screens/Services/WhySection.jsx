import WhyCard from "@/components/Cards/WhyCard";

export default function WhySection({
    eyebrow,
    title,
    description,
    items = [],
}) {
    return (
        <section className="why">
            <div className="container">
                <div className="head">
                    {eyebrow && (
                        <span className="eyebrow">
                            {eyebrow}
                        </span>
                    )}

                    {title && <h2>{title}</h2>}

                    {description && <p>{description}</p>}
                </div>

                <div className="why-grid">
                    {items.map((item) => (
                        <WhyCard
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}