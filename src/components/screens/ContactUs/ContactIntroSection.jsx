const ContactIntroSection = () => {
  return (
    <section
      className="contact-img-wrap"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="heading xtra-heading">
          <h3>
            Discover the <span>Perfect Solution</span> for Your Business
          </h3>

          <p>
            Our dedicated customer support team is here around the clock to
            help you unlock the best strategies for your company. With a
            friendly, energetic, and supportive approach, we're ready to assist
            you every step of the way. Fill out the form below, drop us an
            email, or give us a call—and one of our team members will reach out
            promptly.
          </p>
        </div>

        {/*
        <div className="contact-img">
          <Image
            src="/images/webp/contact-img.webp"
            alt="Contact"
            width={1200}
            height={600}
            className="img-fluid"
          />
        </div>
        */}
      </div>
    </section>
  );
};

export default ContactIntroSection;