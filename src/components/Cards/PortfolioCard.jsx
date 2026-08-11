"use client";

import Image from "next/image";
import { PlayCircle, Search } from "lucide-react";
import Link from "next/link";

const PortfolioCard = ({ item , styles=false }) => {
  const Icon = item.type === "video" ? PlayCircle : Search;

  return (
    <div className={`${styles && "col-lg-2 col-md-4 col-sm-6"} mb-3 pl-lg-0}`}>
      <div className="portfolio-box">
        <Image
          src={item.image}
          alt={item.alt}
          width={500}
          height={500}
          style={{
            height: "210px",
            objectFit: "cover",
            objectPosition: "top"
          }}
          className="img-fluid"
        />

        <div className="hovereffects-det">
          <div className="btnstyles-nn">
            <Link
              data-fancybox="portfolio"
              href={item.preview}
              aria-label={item.alt}
            >
              <Icon size={28} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;