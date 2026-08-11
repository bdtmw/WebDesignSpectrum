
const ProcessCard = ({ step }) => {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="inner-process-box">
                

                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
        </div>
    );
};

export default ProcessCard