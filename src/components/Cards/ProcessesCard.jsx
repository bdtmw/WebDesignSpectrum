export default function ProcessesCard({
    id,
    title,
    description,
}) {
    return (
        <div className="step">

            <div className="n">
                {id}
            </div>

            <h3>{title}</h3>

            <p>{description}</p>

        </div>
    );
}