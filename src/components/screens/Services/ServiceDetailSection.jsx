import ServiceDetailCard from "@/components/Cards/ServiceDetailCard";

export default function ServiceDetailSection({
  eyebrow,
  title,
  description,
  services = [],
}) {
  return (
    <section className="svc-detail" id="services">
      <div className="container">
        <div className="head">
          {eyebrow && (
            <span className="eyebrow">
              {eyebrow}
            </span>
          )}

          {title && <h2>{title}</h2>}

          {description && (
            <p>{description}</p>
          )}
        </div>

        <div className="svc-list">
          {services.map((service) => (
            <ServiceDetailCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}