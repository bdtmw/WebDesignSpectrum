const TestimonialCard = ({ testimonial }) => (
    <div className="item">
        <div className="testi-box-wrap">
            <p>"{testimonial.review}"</p>

            <h5>
                <span>{testimonial.name}</span>
                {testimonial.company}
            </h5>
        </div>
    </div>
);


export default TestimonialCard