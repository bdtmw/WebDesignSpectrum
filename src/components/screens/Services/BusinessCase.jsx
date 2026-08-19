import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BusinessCase({
  eyebrow,
  title,
  subtitle,
  description,
  features = [],
  conclusion,
  image,
  buttonText = "Start Your Project",
}) {
  return (
    <section className="main-industry" style={{ height: "100%" }}>
      <div className="container">
        <div className="row justify-content-end">
          <div
  className="col-lg-6 col-md-12 d-none d-md-flex align-items-center justify-content-center industry-img px-3"
            data-aos="fade-right"
            data-aos-duration="1500"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Image
              src={image}
              alt={title}
              width={750}
              height={650}
              className="img-fluid"
              style={{ marginRight: 80 }}
            />
          </div>

          <div className="col-lg-6 col-md-12">
            <div
              className="industry-text"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              {eyebrow && <h5>{eyebrow}</h5>}

              <h2 style={{ marginTop: 16 }}>
                <span>{title}</span>
                {subtitle && (
                  <>
                    <br />
                    {subtitle}
                  </>
                )}
              </h2>

              {description && (
                <p style={{ padding: "15px 0" }}>
                  {description}
                </p>
              )}

              <ul>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      gap: 8,
                      fontSize: 14,
                    }}
                  >
                    <Check size={22} />
                    {feature}
                  </li>
                ))}
              </ul>

              {conclusion && (
                <p style={{ padding: "18px 0" }}>
                  {conclusion}
                </p>
              )}

              <Link href={'/contact'}>
                <div className="industry-btn-wrap">
                  <button
                    type="button"
                    className="home-btn left-right-mov"
                  >
                    {buttonText}
                  </button>
                </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}