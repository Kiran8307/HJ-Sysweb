"use client";

import { Link } from "react-router-dom";
// import Image from "next/image";
import "./cta-section.css";

export default function CTASection({
  title = "Book Consultation Now",
  buttonText = "Book Now",
  href = "/contact",
//   starSrc = "/decor/stars-left.png", // optional left sparkles
}) {
  return (
    <section className="cta-wrap-about mt">
      <div className="book-now-star">
        <img src="/sprak-service.gif" alt="gif"/>
      </div>
      {/* background tint + speckle */}
      <div className="cta-bg" aria-hidden />

      <div className="cta-container">
        {/* left decorative stars (optional) */}
        {/* {starSrc && (
          <Image
            // src={starSrc}
            alt=""
            width={120}
            height={120}
            className="cta-stars"
            priority
          />
        )} */}

        <div className="cta-box">
          <h2 className="cta-title">{title}</h2>

          <Link to="/contact-us" className="cta-btn-about" aria-label={buttonText}>
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
