"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import clientLogos from "./client-logo.json"; // adjust path
import "./style/logo-slider.css";

export default function LogoSlider({ speed = 30, title }) {
  // convert JSON -> {src, alt}
  const items = clientLogos.map((item) => ({
    src: item.logo,
    alt: item.title,
  }));

  return (
    <section className="logo-wrap mt">
      {title ? <p className="logo-title">{title}</p> : null}

      <Marquee
        gradient={true}
        gradientWidth={80}
        gradientColor={[0, 0, 0]}
        speed={speed}
        pauseOnHover={true}
        loop={0}
      >
        {items.map((it, i) => (
          <div className="logo-cell" key={i}>
            <div className="logo-bg">
              <img loading="lazy" src={it.src} alt={it.alt} />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
