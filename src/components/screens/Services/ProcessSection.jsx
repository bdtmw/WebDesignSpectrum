import ProcessesCard from "@/components/Cards/ProcessesCard";

export default function ProcessSection({
  eyebrow,
  title,
  description,
  processes = [],
}) {
  return (
    <section className="process">
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

        <div className="steps">
          {processes.map((step) => (
            <ProcessesCard
              key={step.id}
              {...step}
            />
          ))}
        </div>
      </div>
    </section>
  );
}