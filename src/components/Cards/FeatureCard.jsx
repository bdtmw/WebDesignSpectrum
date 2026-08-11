import Link from "next/link";

const FeatureCard = ({ feature, styleOn = false }) => (
    <div style={{ width: '100%' }} className="item">
        <div style={{ alignItems: styleOn ? "flex-start" : undefined }} className="feature-box">
            <i
                className={`sprite ${feature.iconClass}`}
                aria-hidden="true"
            />

            <h3>
                {feature.title}
                <br />
                {feature.subtitle}
            </h3>

            <Link href={feature.href}>VIEW DETAILS</Link>
        </div>
    </div>
);

export default FeatureCard
