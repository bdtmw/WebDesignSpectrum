"use client";

import DiscountModal from "@/components/Modal/DiscountModal";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    href: "/static-website",
    label: "Static Website",
  },
  {
    href: "/cms-website-development",
    label: "Cms Development",
  },
  {
    href: "/ecommerce-solution",
    label: "E-Commerce",
  },
  {
    href: "/web-application",
    label: "Web Application",
  },
  {
    href: "/mobile-application",
    label: "Mobile Application",
  },
  {
    href: "/logo-design",
    label: "Logo Design",
  },
  {
    href: "/seo-services",
    label: "SEO",
  },
  {
    href: "/smm-services",
    label: "SMM",
  },

];



const desktopMenuItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    type: "dropdown",
    key: "services",
    label: "Services",
    items: services,
  },
  {
    href: "/package",
    label: "Packages",
  },
  {
    // type: "dropdown",
    href: "/portfolio",
    label: "Portfolio",
    // items: portfolioItems,
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

const overlayMenuItems = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/static-website",
    label: "Services",
  },
  {
    href: "/package",
    label: "Packages",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
  // {
  //   href: "/review",
  //   label: "Reviews",
  // },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

const DropdownMenu = ({
  label,
  items,
  isOpen,
  onToggle,
  onClose,
}) => {
  return (
    <li
      className={`nav-item dropdown ${isOpen ? "open show" : ""}`}
    >
      <button
        type="button"
        className="nav-link dropdown-toggle"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span data-hover={label}>{label}</span>
      </button>

      <ul className={`dropdown-menu ${isOpen ? "show" : ""}`}>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={onClose}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const Header = () => {

  const [isDiscountOpen, setIsDiscountOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  const parentRef = useRef(null);

  const closeDropdowns = () => {
    setServicesOpen(false);
    setPortfolioOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    closeDropdowns();
  };

  const toggleMenu = () => {
    setMenuOpen((previousState) => {
      const nextState = !previousState;

      if (!nextState) {
        closeDropdowns();
      }

      return nextState;
    });
  };

  const toggleDropdown = (dropdownName) => {
    if (dropdownName === "services") {
      setServicesOpen((previousState) => !previousState);
      setPortfolioOpen(false);
      return;
    }

    if (dropdownName === "portfolio") {
      setPortfolioOpen((previousState) => !previousState);
      setServicesOpen(false);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("headerOpen", menuOpen);

    return () => {
      document.body.classList.remove("headerOpen");
    };
  }, [menuOpen]);

  useEffect(() => {
    const parent = parentRef.current;

    if (!parent) return;

    const updateScrollButtons = () => {
      const maximumScroll = parent.scrollHeight - parent.clientHeight;

      setShowUp(parent.scrollTop > 0);
      setShowDown(parent.scrollTop < maximumScroll);
    };

    updateScrollButtons();

    parent.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);

    return () => {
      parent.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [menuOpen]);

  const scrollMenu = (direction) => {
    const parent = parentRef.current;

    if (!parent) return;

    const child = parent.querySelector(".child");

    if (!child) return;

    const childHeight = child.offsetHeight;
    const maximumScroll = parent.scrollHeight - parent.clientHeight;

    const nextPosition =
      direction === "down"
        ? Math.min(parent.scrollTop + childHeight, maximumScroll)
        : Math.max(parent.scrollTop - childHeight, 0);

    parent.scrollTo({
      top: nextPosition,
      behavior: "smooth",
    });

    setShowUp(nextPosition > 0);
    setShowDown(nextPosition < maximumScroll);
  };

  const renderDesktopMenuItem = (item) => {
    if (item.type === "dropdown") {
      const isServicesDropdown = item.key === "services";

      return (
        <DropdownMenu
          key={item.key}
          label={item.label}
          items={item.items}
          isOpen={
            isServicesDropdown ? servicesOpen : portfolioOpen
          }
          onToggle={() => toggleDropdown(item.key)}
          onClose={closeMenu}
        />
      );
    }

    return (
      <li key={item.href}>
        <Link href={item.href} onClick={closeMenu}>
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <nav>
              <Link
                href="/"
                className="brand-logo"
                onClick={closeMenu}
              >
                <img
                  className="img-fluid"
                  src="/images/headerLogo.png"
                  alt="Logo"
                />
              </Link>

              <div className={`doubleMenu ${menuOpen ? "show" : ""}`}>
                <ul className="navbar">
                  {desktopMenuItems.map(renderDesktopMenuItem)}
                </ul>
              </div>




              <div className="menu-right">

                <button
                  type="button"
                  className="btn btn-default hvr-grow-shadow btn-shake"
                >
                  <Link
                    href="tel:+13072183240"
                  >
                    <span>(307) 218-3240</span>
                  </Link>
                </button>


                <button
                  type="button"
                  className="btn btn-default hvr-grow-shadow"
                  data-bs-toggle="modal"
                  onClick={() => setIsDiscountOpen(true)}
                  data-bs-target="#discountModal"
                >
                  GET <span>50% DISCOUNT</span>
                </button>

                <div className="navicon">
                  <button
                    type="button"
                    className={`nav-toggle ${menuOpen ? "active" : ""
                      }`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                  >
                    <span />
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className={`detailHeader ${menuOpen ? "active" : ""}`}>
        <div className="container">
          <Link
            href="/"
            className="brand-logo2"
            onClick={closeMenu}
          >
            <img
              className="img-fluid"
              src="/images/Logo.png"
              alt="Logo"
            />
          </Link>

          <div className="row">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <ul className="nav nav-pills innerMenu">
                {overlayMenuItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="tab-content">
                <div
                  className="main-scroll-overlay tab-pane active"
                  id="service"
                >
                  <button
                    type="button"
                    id="up"
                    className="scroll-button scroll-up"
                    onClick={() => scrollMenu("up")}
                    style={{
                      display: showUp ? "block" : "none",
                    }}
                    aria-label="Scroll menu up"
                  >
                    ↑
                  </button>

                  <ul
                    ref={parentRef}
                    id="parent"
                    className="page-overlay-inner menuBlock"
                  >
                    {services.map((item) => (
                      <li key={item.href} className="child">
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    id="down"
                    className="scroll-button scroll-down"
                    onClick={() => scrollMenu("down")}
                    style={{
                      display: showDown ? "block" : "none",
                    }}
                    aria-label="Scroll menu down"
                  >
                    ↓
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <DiscountModal
        isOpen={isDiscountOpen}
        onClose={() => setIsDiscountOpen(false)}
      />
    </header>
  );
};

export default Header;