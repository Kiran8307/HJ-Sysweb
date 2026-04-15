import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ React Router
import "./work-together.css";

/* Optional: centralize content per page/variant */
const PRESETS = {
  default: {
    bgImage: "/Service-page/stars-noise.png",
    title: "Expertise that drives",
    highlight: "Digital Success",
    stats: [
      { value: "250+", label: "Delivered" },
      { value: "98%", label: "Client Happiness" },
    ],
    paras: [
      "Branding is storytelling done right. We transform concepts into captivating brand experiences that speak directly to your audience. From defining tone and visuals to shaping perception, we ensure every touchpoint reflects authenticity, evokes emotion, and builds recognition that fuels sustainable digital growth.",
      
    ],
    ctaHref: "/contact-us",
    ctaLabel: "Get In Touch",
  },
  home: {
    title: "Let’s build",
    highlight: "what matters",
    stats: [
      { value: "250+", label: "Delivered" },
      { value: "98%", label: "Client Happiness" },
    ],
  },
  seo: {
    title: "Own your",
    highlight: "organic growth",
    stats: [
      { value: "120%", label: "Avg. Traffic Lift" },
      { value: "40+", label: "Audits / Month" },
    ],
    ctaHref: "/audit",
    ctaLabel: "Get Free SEO Audit",
  },
  branding: {
    title: "Craft a brand",
    highlight: "people remember",
    stats: [
      { value: "70+", label: "Brand Kits" },
      { value: "30d", label: "Avg. Turnaround" },
    ],
  },
};

export default function WorkTogetherSection({
  /* direct props (override presets) */
  bgImage,
  title,
  highlight,
  stats,
  paras,
  ctaHref = "/contact-us",
  ctaLabel = "Get In Touch",

  /* backward-compat props */
  statLeft,
  statRight,
  para1,
  para2,

  /* behavior */
  preset,              // e.g. "seo", "branding", "home"
  autoByRoute = false, // if true, picks preset from current pathname
  className = "",
}) {
  const location = useLocation();
  const pathname = autoByRoute ? location.pathname : null;

  const routeKey = useMemo(() => {
    if (!autoByRoute || !pathname) return null;
    const clean = pathname.replace(/^\/+|\/+$/g, ""); // "services/seo"
    if (PRESETS[clean]) return clean;
    if (clean.includes("seo")) return "seo";
    if (clean.includes("branding")) return "branding";
    if (clean === "" || clean === "home") return "home";
    return null;
  }, [autoByRoute, pathname]);

  const base = PRESETS.default;
  const fromPreset = preset ? PRESETS[preset] : routeKey ? PRESETS[routeKey] : {};

  const normalizedStats =
    (Array.isArray(stats) && stats.length && stats) ||
    [statLeft, statRight].filter(Boolean).map((s) => ({ ...s }));

  const normalizedParas =
    (Array.isArray(paras) && paras.length && paras) ||
    [para1, para2].filter(Boolean);

  const data = {
    ...base,
    ...fromPreset,
    ...(bgImage ? { bgImage } : {}),
    ...(title ? { title } : {}),
    ...(highlight ? { highlight } : {}),
    ...(normalizedStats.length ? { stats: normalizedStats } : {}),
    ...(normalizedParas.length ? { paras: normalizedParas } : {}),
    ctaHref: ctaHref ?? fromPreset.ctaHref ?? base.ctaHref,
    ctaLabel: ctaLabel ?? fromPreset.ctaLabel ?? base.ctaLabel,
  };

  return (
    <section className={`wt-wrap mt ${className}`}>
      {/* background image */}
      <div className="wt-bg">
        <img src={data.bgImage} alt="" className="wt-bg-img" />
      </div>

      {/* top info */}
      <div className="wt-top">
        <div className="wt-top-col wt-top-left">
          <h3 className="wt-heading">
            {data.title} <br />
            <span className="wt-highlight">{data.highlight}</span>
          </h3>

          <div className="wt-stats">
            {(data.stats || []).map((s, i) => (
              <div className="wt-stat" key={`${s.label}-${i}`}>
                <div className="wt-num">{s.value}</div>
                <div className="wt-lab">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="wt-top-col wt-top-right">
          {(data.paras || []).map((p, i) => (
            <div key={i}>
              <p className="wt-para">{p}</p>
              {i < data.paras.length - 1 && <hr className="wt-sep" />}
            </div>
          ))}
        </div>
      </div>

      {/* big callout */}
      <div className="wt-callout">
        <div className="wt-line wt-line-1">LET’S WORK</div>

        {/* ✅ React Router Link */}
        <Link to={data.ctaHref} className="wt-fab" aria-label={data.ctaLabel}>
          <span className="wt-fab-txt">
            {data.ctaLabel}
            {/* <span className="wt-fab-arrow">
              <img src="/Service-page/black-arrow.svg" alt="arrow" className="arrow-img" />
            </span> */}
          </span>
        </Link>

        <div className="wt-line wt-line-2">TOGETHER</div>
      </div>
    </section>
  );
}
