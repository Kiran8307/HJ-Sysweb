import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import "./../components/style/menuoverlay.css";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import CloseX from "./CloseX";

export default function MenuOverlay({ open, onClose }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { pathname } = useLocation(); // ✅ React Router version

  // mount flag for portal
  useEffect(() => setMounted(true), []);

  // close menu on route change
  useEffect(() => {
    if (!mounted || !open) return;
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // ESC to close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!mounted || !open) return null;

  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://in.linkedin.com/company/hjsysweb",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/hjsysweb/",
    },
    { name: "Twitter", icon: <FaXTwitter />, link: "https://x.com/hjsysweb" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "#" },
    {
      name: "Facebook",
      icon: <FaFacebook />,
      link: "https://www.facebook.com/hjsysweb",
    },
    {
      name: "Mail",
      icon: <IoMailOpenOutline />,
      link: "mailto:apatel@hjsysweb.com",
    },
  ];

  return createPortal(
    <div className="menu-overlay is-open" aria-hidden={false}>
      <div className="menu-backdrop" onClick={onClose} />

      <div
        className="menu-panel"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu-top">
          <div className="menu-logo" aria-label="home">
            <Link to="/" onClick={onClose}>
              <img src="/menu-logo.png" alt="HJ logo" />
            </Link>
          </div>
          <CloseX onClick={onClose} />
        </div>

        <div className="menu-grid">
          <div className="menu-left">
            <ul className="menu-list">
              <li>
                <Link to="/about-us" className="menu-link">
                  About Us
                </Link>
                <div className="menu-divider" />
              </li>
              <li>
                <Link to="/portfolio" className="menu-link">
                  Portfolio
                </Link>
                <div className="menu-divider" />
              </li>

              <li className={`has-sub ${servicesOpen ? "open" : ""}`}>
                <div className="menu-link-row">
                  <Link to="/services" className="menu-link">
                    Services
                  </Link>

                  <button
                    type="button"
                    className="caret-btn"
                    onClick={() => setServicesOpen((s) => !s)}
                    aria-expanded={servicesOpen}
                    aria-controls="services-submenu"
                    aria-label="Toggle Services submenu"
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" className="caret">
                      <path
                        d="M7 10l5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  id="services-submenu"
                  className="submenu"
                  aria-hidden={!servicesOpen}
                >
                  <Link to="/services/branding-services">Branding Services</Link>
                  <Link to="/services/creative-advertising">Creative Advertising</Link>
                  <Link to="/services/digital-marketing">Digital Marketing</Link>
                  <Link to="/services/performance-marketing">Performance Marketing</Link>
                  <Link to="/services/website-development">Website Development</Link>
                  <Link to="/services/ecommerce-solutions">E-commerce Solutions</Link>
                  <Link to="/services/mobile-app-development">Mobile App Development</Link>
                  <Link to="/services/growth-marketing">Growth Marketing</Link>
                </div>

                <div className="menu-divider" />
              </li>

              <li>
                <Link to="/blogs" className="menu-link">
                  Blogs
                </Link>
                <div className="menu-divider" />
              </li>
              <li>
                <Link to="/contact-us" className="menu-link">
                  Contact Us
                </Link>
                <div className="menu-divider" />
              </li>
              <li>
                <Link to="/case-studies" className="menu-link">
                  Case Study
                </Link>
                <div className="menu-divider" />
              </li>
              <li>
                <Link to="/career" className="menu-link">
                  Career
                </Link>
                <div className="menu-divider" />
              </li>
              <li>
                <Link to="/audit" className="menu-link">
                  Audit
                </Link>
                <div className="menu-divider" />
              </li>
              <li>
                <Link to="/industries-we-serve" className="menu-link">
                  Industries We Serve
                </Link>
                <div className="menu-divider" />
              </li>
            </ul>
          </div>

          <div className="menu-right">
            <div className="right-block">
              <a href="tel:+919023501339">+91 90235 01339</a>
              <a href="tel:+919428435276">+91 94284 35276</a>
              <a href="mailto:marketing@hjsysweb.com">marketing@hjsysweb.com</a>
            </div>

            <div className="right-social">
              {socials.map((s, i) => (
                <a key={i} href={s.link} className="icon-link-hs">
                  <span className="icon-hs">{s.icon}</span>
                  <span className="label-hs">{s.name}</span>
                </a>
              ))}
            </div>

            <address className="right-address">
              304, Krishna Aaron, opp. Sanket
              <br />
              India, Anand, Gujarat - 388001
            </address>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
