"use client";
import "./../components/style/home-portfolio.css";

const items = [
  { src: "/portfolio/pizza in horsham.webp", alt: "Food" }, // t1
  { src: "/portfolio/NH LOGO.webp", alt: "Agriculture" }, // t2
  { src: "/portfolio/board.webp", alt: "Food" }, // t3
  { src: "/portfolio/shah & associates.webp", alt: "Finance & Accounting" }, // t5
  { src: "/portfolio/Life Style Branding.webp", alt: "Entertainment" }, // t6
  { src: "/portfolio/Chia seeds.webp", alt: "Food" }, // t7
  { src: "/portfolio/ayur khyati.webp", alt: "Health" }, // t4
  { src: "/portfolio/mobile.webp", alt: "Social Media" }, // t8
  { src: "/portfolio/navya by nirali.webp", alt: "Fashion" }, // t9
];

export default function PortfolioSection() {
  return (
    <section className="portfolio mt">
      <div className="pf-head">
        <h2 className="h2">Our Portfolio</h2>
        {/* <span className="vector"></span> */}
        <p className="p">
          Work that looks great and moves numbers. See how design, SEO, and ads
          turned clicks into customers.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="pf-grid pf-bento4">
        {items.map((it, i) => (
          <figure key={i} className={`pf-card tile t${i + 1}`}>
            <img src={it.src} alt={it.alt} loading="lazy" />
            {/* Hover overlay (kept from your original) */}
            <div className="pf-overlay" href="#" aria-label={`Open ${it.alt}`}>
              <span className="pf-title">{it.alt}</span>
              {/* <span className="pf-btn" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 12h10M13 6l6 6-6 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span> */}
            </div>
          </figure>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a className="btn btn-primary hero-cta text-center" href="/portfolio">
          View More →
        </a>
      </div>
    </section>
  );
}
