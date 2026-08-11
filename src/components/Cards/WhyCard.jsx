export default function WhyCard({ title, description }) {
  return (
    <div className="reason">
      <div className="tick" aria-hidden="true">
        ✓
      </div>

      <div className="reason-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}