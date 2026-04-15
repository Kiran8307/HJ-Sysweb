"use client";
import "./../../components/about-us/about-marquee.css";

export default function SlantedMarquee({
  items = [],
  speed = 28, // seconds per loop
  angle = -3, // slant angle in degrees
  className = "",
  iconSrc, // 👈 optional image above the marquee
  iconAlt = "",
  iconWidth = 28, // tweak size as needed
}) {
  const row = items.join("   •   ");
  return (
    <div className="about-marquee-main mt">
      <div className="about-marquee-image">
        <img
          src="/approach/idea.gif"
          alt={iconAlt}
          className="about-marquee__icon"
        />
      </div>
      <div
        className={`about-marquee ${className}`}
        style={{
          "--marquee-angle": `${angle}deg`,
          "--marquee-speed": `${speed}s`,
        }}
      >
        {/* optional icon above the strip */}

        <div className="about-marquee__track">
          <span className="about-marquee__item">{row}</span>
          <span className="about-marquee__item" aria-hidden>
            {row}
          </span>
          <span className="about-marquee__item" aria-hidden>
            {row}
          </span>
        </div>
      </div>
    </div>
  );
}
