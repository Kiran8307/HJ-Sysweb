"use client";

// import Image from "next/image";
import styles from "./sticky-stack.module.css";

const COLORS = [
  "#0f172a", // deep slate
  "#2b1653", // purple
  "#3b0f0f", // wine
  "#053a34", // teal
  "#3a2407", // bronze
  "#162a12", // green
  "#3b1b04", // orange
  "#132b3a", // cyan
];

const DATA = [
  {
    title: "Fashion",
    desc: "We turn browsers into buyers with thumb-stopping creatives and conversion-ready product pages. From catalog feeds and season drops to influencer/UGC, email, and remarketing, every asset matches your brand’s voice and margin goals.",
    img: "/Industry/fashion.webp",
    tint: "#082e2a",
  },
  {
    title: "FMCG",
    desc: "Speed and scale matter. We build retail-ready packaging, drive awareness with OOH/digital, and grow marketplace share with optimized listings and profit-first ads. Trade promos, review engines, and geo-targeting ensure availability meets demand.",
    img: "/Industry/fmcg.webp",
  },
  {
    title: "Real Estate",
    desc: "Capture high-intent leads and book site visits. We pair local SEO and paid search with landing pages, WhatsApp/call routing, and marketing automation. Virtual tours, floor-plan downloads, and eligibility calculators qualify prospects before sales calls.",
    img: "/Industry/real-estate.webp",
  },
  {
    title: "Healthcare",
    desc: "Fill appointment books while protecting trust and compliance. We optimize Google Business Profiles, build fast, accessible pages, and run HIPAA-aware campaigns with call tracking and form encryption. Educational content boosts credibility.",
    img: "/Industry/healthcare.webp",
  },
    {
    title: "Education",
    desc: "Increase admissions with intent-led search, parent/student nurturing, and counsellor scheduling. We build program pages, comparison matrices, and scholarship funnels; then automate follow-ups across email/WhatsApp.",
    img: "/Industry/education.webp",
  },
      {
    title: "Hospitality",
    desc: "Own “near me” searches and direct bookings. We upgrade speed/UX, add socially-proofed menus/rooms, and deploy meta/search ads with remarketing. GMB photos, reviews, and event packs lift visibility while OTA strategy protects margin.",
    img: "/Industry/hospitality.webp",
  },
      {
    title: "Startups",
    desc: "Launch fast, learn faster. We shape positioning, design conversion-ready sites, and run lean tests across search/social to find channel-offer fit. CRM + analytics show what’s working; automation catches every lead.",
    img: "/Industry/startup.webp",
  },
];

export default function StickyStack() {
  return (
    // StickyStack.jsx
    <section className="mt section-top">
      <div
        className={styles.stack}
        style={{ "--count": DATA.length }} // ✅ add this
      >
        {DATA.map((card, i) => {
          const isEven = i % 2 === 0;
          const tint = card.tint || COLORS[i % COLORS.length];

          return (
            <article
              key={card.title}
              className={`${styles.card} ${
                isEven ? styles.left : styles.right
              }`}
              style={{ "--tint": tint, "--idx": i }}
            >
      

              <div className={`${styles.inner} stack-inner`}>
                <div className={styles.media}>
                  <img
                    src={card.img}
                    alt={card.title}
                    fill
                    className={styles.img}
                    sizes="(max-width: 900px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </div>

                <div className={styles.content}>
                  <h3 className={styles.title}>{card.title}</h3>
                  <p className={styles.desc}>{card.desc}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
