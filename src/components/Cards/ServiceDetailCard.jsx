export default function ServiceDetailCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <div className="svc-block">
      <div className="ico" aria-hidden="true">
        <Icon size={30} strokeWidth={1.8} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}