"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuOverlay from "./MenuOverlay";
import { FaLinkedin, FaInstagram, FaFacebook,  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const socials = [
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
  // { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/919428435276" },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/hjsysweb",
  },
];

export default function SideRail() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <aside className={`side-rail ${scrolled ? "is-scrolled" : ""}`}>
        <div className="rail-inner">
          {/* White logo shows only after scroll */}
          {scrolled && (
            <Link
              to="/"
              className="header-second-logo"
              aria-label="Go to homepage"
            >
              <img src="/white-logo-header.svg" alt="white-logo" />
            </Link>
          )}



          <button
            className="rail-dots"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
            <span className="accent" />
          </button>

                    {/* 👇 middle nav - only when scrolled */}
          {scrolled && (
            <nav className="rail-page-nav">
              <Link to="/services">Services</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/case-studies">Case Studies</Link>
            </nav>
          )}

          <nav className="rail-social">
             <ul>
              {socials.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item"
                    aria-label={s.name}
                  >
                    <span className="icon">{s.icon}</span>
                    
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
