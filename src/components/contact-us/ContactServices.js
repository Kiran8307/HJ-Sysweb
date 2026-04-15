"use client";
import React, { useState } from "react";
import "./contact-services.css";

const services = [
  { id: 1, name: "Branding Services", color: "#FFCC0040", desc: "Identity, guidelines, visual systems, brand rollouts." },
  { id: 2, name: "Creative Advertising", color: "#30B0C740", desc: "Concepts, campaigns, ATL/BTL, OOH & social-first." },
  { id: 3, name: "Digital Marketing", color: "#FF2D5340", desc: "SEO, content, email, influencer & automation." },
  { id: 4, name: "Performance Marketing", color: "#00C7BD40", desc: "Paid search & social, funnels, CRO, attribution." },
  { id: 5, name: "Website Development", color: "#5856D640", desc: "WordPress, React, headless CMS, landing pages." },
  { id: 6, name: "E-commerce", color: "#AF52DE40", desc: "Shopify/Woo, product pages, checkout, subscriptions." },
  { id: 7, name: "Growth Marketing", color: "#8099B380", desc: "Lifecycle, retention, A/B tests, analytics." },
];

function Badge3() {
  return (
    <svg className="svc-badge3" viewBox="0 0 80 80" aria-hidden focusable="false">
      <circle cx="46" cy="16" r="14" className="b3-outline b3-merge" />
      <circle cx="20" cy="42" r="15" className="b3-dashed b3-merge b3-spin" />
      <circle cx="54" cy="54" r="18" className="b3-solid" />
    </svg>
  );
}

/* Mini badge for the pill top (matches your small icon) */
function Badge3Mini({ width = 60, height = 60, accent = "#F5C247" }) {
  return (
    <svg
      className="badge-mini"
      viewBox="0 0 28 28"               /* smaller viewBox so the circles fill more */
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <circle cx="8"  cy="6.5" r="4.5" fill="none" stroke={accent} strokeWidth="2"
              vectorEffect="non-scaling-stroke" />
      <circle cx="8"  cy="18"  r="4.6" fill="none" stroke={accent} strokeWidth="2" strokeDasharray="3 3"
              vectorEffect="non-scaling-stroke" />
      <circle cx="20" cy="13"  r="4.6" fill={accent} />
    </svg>
  );
}


export default function ContactServices() {
  const [active, setActive] = useState(1);

  return (
    <section className="cs-wrap mt">
      <ul className="cs-rail">
        {services.map((s) => (
          <li
            key={s.id}
            className={`cs-pill ${active === s.id ? "is-active" : ""}`}
            style={{ "--clr": s.color }}
            onMouseEnter={() => setActive(s.id)}
          >
                <div className="cs-pill-icon"><Badge3Mini /></div>
            <div className="cs-pill-inner">
              <span className="cs-pill-label">{s.name}</span>

              <div className="cs-expanded">
                {/* the black card that appears on expand */}
                <div className="cs-card">
                  <div className="cs-card-art">
                    <Badge3 />
                  </div>
                  <div className="cs-card-text">
                    <h3 className="cs-card-title">{s.name}</h3>
                    <p className="cs-card-desc">{s.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <section className="cs-wrap-bg">
  {/* background art */}
  <div className="cs-bg">
    {/* <img className="cs-yellow" src="/contact-us/contact-service-yellow.png" alt="" /> */}
    <img className="cs-spider cs-spider--big" src="/service/big-vector.png" alt="" />
    <img className="cs-spider cs-spider--small" src="/service/small-vector.png" alt="" />
  </div>


</section>

    </section>
  );
}
