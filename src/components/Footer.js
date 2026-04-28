import React from "react";
import "./style/footer.css";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/919428435276",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/hjsysweb",
  },
];

export default function Footer() {
  return (
    <footer className="hj-footer mt">
      {/* watermark */}
      <div className="hj-watermark" aria-hidden>
        <img src="/footer/hj-text.png" alt="text"></img>
      </div>

      {/* Service Location Cities  */}

      <div className="hj-location-cites">
        <nav className="location-card">
          <Link className="location-city" to="/location/ahmedabad" target="_blank">
            Ahmedabad
          </Link>
          <Link className="location-city" to="/location/anand" target="_blank">
            Anand
          </Link>
          <Link className="location-city" to="/location/jamnagar" target="_blank">
            Jamnagar
          </Link>
          <Link className="location-city" to="/location/rajkot" target="_blank">
            Rajkot
          </Link>

          <Link className="location-city" to="/location/surat" target="_blank">
            Surat
          </Link>
          <Link className="location-city" to="/location/vadodara" target="_blank">
            Vadodara
          </Link>
        </nav>
      </div>

      {/* content */}
      <div className="hj-container">
        <div className="hj-grid">
          {/* left: links */}
          <nav className="card hj-links">
            <Link to="/about-us">About Us</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/services">Services</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/contact-us">Contact Us</Link>
          </nav>

          {/* middle: phone + email + socials */}
          <div className="hj-middle">
            <div className="card hj-pill">
              <div className="contact-numbers">
                <a href="tel:+919023501339" className="phone-number hj-pill">
                  +91 90235 01339
                </a>

                <a href="tel:+919428435276" className="phone-number hj-pill">
                  +91 94284 35276
                </a>
              </div>
            </div>

            <a className="card hj-pill" href="mailto:marketing@hjsysweb.com">
              marketing@hjsysweb.com
            </a>
            <div className="hj-socials card">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  className="icon-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">{s.icon}</span>
                  <span className="label">{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* right: address + ctas */}
          <div className="hj-right">
            <address className="card hj-address">
              304, Krishna Aaron,
              <br />
              opp. Sanket India,
              <br /> Anand, Gujarat – 388001
            </address>
            <div className="card hj-ctas">
              <a
                href="https://maps.app.goo.gl/FciavpD9pihMHe1H6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/footer/get-direction.png" alt=""></img>
              </a>
              <a
                href="https://www.google.com/search?sca_esv=482a21e8193752b1&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6fYA27i5ThOHR_Pc4A61ql31mnq-RIqfIgyeqz2oqlGCqzDFotlKSa_Dl55XetMyc8rV6_T1_8wqR-L-CU30HPuLyRc&q=HJ+Sysweb+Reviews&sa=X&ved=2ahUKEwjIgPeooq2PAxUlyDgGHdP5Bb0Q0bkNegQIIBAE&biw=1920&bih=945&dpr=1#lrd=0x395e4e9da723ad89:0xbe2afabdbf2c2755,3,,,,"
                className="btn-chip"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/footer/google-map.png" alt=""></img>
              </a>
            </div>
          </div>
        </div>

        <p className="hj-copy">
          {new Date().getFullYear()} HJ Sysweb. All Rights Reserved.
        </p>
      </div>

      <div className="bg-vector"></div>
    </footer>
  );
}
