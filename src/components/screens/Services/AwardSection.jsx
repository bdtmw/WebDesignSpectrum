import Image from "next/image";

const awards = [
  { id: 1, image: "/images/icons/1.png", alt: "Award 1" },
  { id: 2, image: "/images/icons/2.png", alt: "Award 2" },
  { id: 3, image: "/images/icons/React.png", alt: "React" },
  { id: 4, image: "/images/icons/Shopify.png", alt: "Shopify" },
  { id: 5, image: "/images/icons/Wix.png", alt: "Wix" },
];

export default function AwardSection({ title = "Let's join forces to reimagine and build your digital storefront" , awards }) {
  return (
    <section className="main-award">
      <div className="container">
        <h3>
          {title}
        </h3>

        <div className="row justify-content-center gap-4">

          {awards.map((award , index) => (
            <div
              key={index}
            >
              <div className="award-box">
                <div style={{
                  background: "#fff",
                  border: "1px solid #e6e9f4",
                  borderRadius: "50px",
                  padding: "10px 26px",
                  fontWeight: "700",
                  fontSize: "15px",
                }}>
                  {award}
                </div>
              </div>
            </div>
          ))}
          {/* {awards.map((award) => (
            <div
              key={award.id}
              className="col-lg-2 col-md-2 col-sm-2"
            >
              <div className="award-box">
                <Image
                  src={award.image}
                  alt={award.alt}
                  width={150}
                  height={150}
                  className="img-fluid"
                />
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}