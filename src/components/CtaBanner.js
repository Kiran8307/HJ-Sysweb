"use client";
import "./../components/style/cta-banner.css";

export default function CtaBanner({
  headingSmall = "Ready to Takeoff your business",
  headingLarge = "Online With Us",
  description = "We deliver best problem-solving solutions for our clients and provide finest finishing products in the present and upcoming future.",
  buttonText = "Contact Us",
  buttonLink = "/contact-us",
  showMascot = true, // optional toggle
}) {
  return (
    <section className="cta mt">
      <div className="spider-vector-cta">
        <img
          src="/service/small-vector.png"
          alt=""
          className="spider-small-image"
        />
        <img
          src="/service/big-vector.png"
          alt=""
          className="spider-big-image"
        />
      </div>

      <div className="cta-wrap">
        <div className="cta-copy">
          <h3>{headingSmall}</h3>
          <h2>{headingLarge}</h2>
          <p>{description}</p>

          <a href={buttonLink} className="cta-btn" aria-label={buttonText}>
            <span>{buttonText}</span>
            <svg
              className="cta-arrow"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 12h10M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {showMascot && (
          <div className="cta-art" aria-hidden="true">
            <img src="/owl-mascot.webp" alt="Mascot illustration" />
          </div>
        )}
      </div>
    </section>
  );
}
