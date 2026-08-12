import Link from "next/link";
// import PackageCarousel from "./PackageCarousel";

const PackageSection = () => {
  return (
    <section
      className="main-package home-package"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="container">
        <div className="heading">
          <h2>Our Affordable</h2>

          <h3>
            Web Development <span>Packages</span>
          </h3>

          <p>
            Designed to streamline the creation and management of your website
            effortlessly.
          </p>
        </div>

        <div className="package-carousel">
          {/* <PackageCarousel /> */}
        </div>

        <div className="package-btn-wrap">
          <Link
            href="/packages"
            className="home-btn left-right-mov"
          >
            View Our Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;