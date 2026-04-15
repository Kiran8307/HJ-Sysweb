import React from "react";
import { Link } from "react-router-dom";
import "./../../components/service/service-list.css";
import services from "./../../components/service/service.json";

// per-card tint list (your colors)
const TINTS = [
  "#5856D610",
  "#FF2D531A",
  "#00C7BD1A",
  "#A2855E1A",
  "#AF52DE1A",
  "#34C7591A",
  "#FF95001A",
  "#32ADE61A",
];

// eslint-disable-next-line
function Badge3() {
  return (
    <svg
      className="svc-badge3"
      viewBox="0 0 80 80"
      aria-hidden
      focusable="false"
    >
      <circle cx="46" cy="16" r="14" className="b3-outline b3-merge" />
      <circle cx="20" cy="42" r="15" className="b3-dashed b3-merge b3-spin" />
      <circle cx="54" cy="54" r="18" className="b3-solid" />
    </svg>
  );
};

export default function ServiceList() {
  return (
    <section className="svc-wrap mt">
      <div className="svc-bg" aria-hidden />

      <div className="svc-container">
        {/* left column */}
        <aside className="svc-left">
          <div className="svc-left-inner">
            <div className="svc-left-inner-top">
              <h2 className="svc-title">Stop Guessing. Start Growing.</h2>
              <p className="svc-lead">
                Honest audit, clear priorities, weekly sprints. Results you can see.
              </p>
            </div>

            <div className="svc-sticky">
              <div className="svc-cta-box">
                <Link to="/contact-us" className="svc-btn">
                  Talk to a Strategist
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* right column */}
        <div className="svc-list">
          <div className="svc-divider" aria-hidden />

          {services.map((s, i) => {
            const tint = TINTS[i % TINTS.length];
            return (
              <article
                key={s.id}
                className="svc-card"
                style={{
                  "--tint": tint,
                  "--card-image": `url(${s.image || ""})`,
                }}
              >
                <header className="svc-card-head">
                  <div className="svc-card-head-text">
                    <img src={s.icon} alt={`${s.title} icon`} className="svc-icon" />
                    <h3 className="svc-card-title">{s.title}</h3>
                    <span className="svc-arrow" aria-hidden />
                  </div>

                  <div className="svc-card-foot">

                    {/* ✅ fixed: react-router Link */}
                    
                    <Link to={`/services/${s.id}`} className="svc-card-link">
                      <span className="svc-card-link-text">View More</span>
                      <span className="svc-card-link-arrow" aria-hidden />
                    </Link>
                  </div>
                </header>

                <p className="svc-card-desc">{s.desc}</p>

                {/* hover image preview */}
                <Link
                  to={`/services/${s.id}`}   // ✅ fixed
                  className="svc-card-hover"
                  aria-label={s.title}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
