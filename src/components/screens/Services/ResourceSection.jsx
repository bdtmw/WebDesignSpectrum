import Image from "next/image";

export default function ResourceSection({
  eyebrow,
  title,
  description,
  resources = [],
}) {
  return (
    <section className="main-resource">
      <div className="container">
        <div
          className="heading"
          data-aos="fade-down"
          data-aos-duration="1500"
          style={{ padding: "0px 40px 40px" }}
        >
          {eyebrow && (
            <h6
              style={{
                color: "white",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: 2,
                fontSize: 14,
              }}
            >
              {eyebrow}
            </h6>
          )}

          {title && (
            <h3
              style={{marginTop: 10, marginBottom: 10 }}
              dangerouslySetInnerHTML={{
                __html: title,
              }}
            />
          )}

          {description && (
            <p
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          )}
        </div>

        <div
          className="row no-gutters resource-responsive-slider"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          {resources.map((item) => (
            <div className="col-lg-3 col-md-12" key={item.id}>
              <div className="resource-box">
                <Image
                  src={item.image}
                  alt={item.title.replace(/<br\s*\/?>/gi, " ")}
                  width={90}
                  height={90}
                  className="img-fluid"
                />

                <h3
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                />

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}