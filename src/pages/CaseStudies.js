import React, { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { caseStudies } from "../components/data/caseStudies";
import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import "./../style/case-studies.css";

function CaseStudyCard({ cs }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="cs-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <figure className="cs-media">
        <img src={cs?.thumbnail} alt={cs?.title} loading="lazy" />
        <div className={`cs-overlay ${hover ? "show" : ""}`}>
          <p className="cs-industry">
            <span className="cs-industry-value">{cs?.category}</span>
          </p>
        </div>
        <div className={`cs-hover-icon ${hover ? "show" : ""}`} aria-hidden>
          ↗
        </div>
      </figure>

      <Link to={`/case-studies/${cs.slug}`} className="cs-title-link">
        {cs.title}
      </Link>
    </div>
  );
}

export default function CaseStudiesPage() {
  return (
    <>
      <Seo
        title="Case Studies | HJ Sysweb Digital Success Stories & Client Growth"
        description="Discover how HJ Sysweb drives digital transformation across industries. Explore real client success stories in web development, SEO, app design, and marketing that deliver measurable growth and long-term impact."
        canonical="/case-studies"
        ogImage="/hj-favicon.svg"
      />

      <BreadcrumbHero
        title="Case Studies"
        crumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        bgImage="/Breadcrum/two-owl.png"
      />

      <HangingBoard
        text={`Explore how HJ Sysweb transforms ideas into impactful digital success stories. From creative design to strategic marketing and technology-driven solutions, our case studies showcase real results, measurable growth, and the innovation behind every brand we help elevate.`}
        typingSpeed={25}
      />

      <section className="cs-listing mt">
        <header className="cs-head">
          <h1 className="cs-title h2">Latest Case Studies</h1>
          <p className="cs-sub p">
            Explore our recent project stories and outcomes.
          </p>
        </header>

        <div className="cs-grid">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.slug} cs={cs} />
          ))}
        </div>
      </section>
    </>
  );
}
