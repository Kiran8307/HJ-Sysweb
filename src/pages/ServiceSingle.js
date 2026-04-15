import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import Seo from "../components/Seo";

import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import MarketsSection from "../components/MarketsSection";
import CtaBanner from "../components/CtaBanner";
import LogoSlider from "../components/LogoSlider";
import WorkTogetherSection from "../components/service/WorkTogetherSection";
import Testimonials from "../components/Testimonials";

import "./../components/service/service-inner.css";

// JSON data (CRA/Vite can import JSON directly)
import services from "../components/service/service.json";
import rawClientLogos from "../components/client-logo.json";
import SubServiceStack from "../components/service/SubServiceStack";

const PALETTE = [
  { bg: "#3A0B13", edge: "#861C2C" },
  { bg: "#0F2A2E", edge: "#306B75" },
  { bg: "#1B1530", edge: "#2B2752" },
  { bg: "#2A1B07", edge: "#5A3A12" },
];

// Map client logos JSON -> {src, alt}
const logos = (rawClientLogos || []).map((item) => ({
  src: item.logo,
  alt: item.title || "",
}));

export default function ServiceSinglePage() {
  const { id } = useParams();

  const data = useMemo(() => services.find((s) => s.id === id), [id]);

  if (!data) {
    // Not found -> go back to services
    return <Navigate to="/services" replace />;
  }

  const metaTitle = data["meta-title"] || data.title || "Service";
  const metaDesc = data["meta-desc"] || data.desc || "";
  const ogImg = data.ogImage || data.image || "/hj-favicon.svg";

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDesc}
        canonical={`/services/${id}`}
        ogImage={ogImg}
      />

      <BreadcrumbHero
        title={data.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: data.title },
        ]}
        bgImage="/Breadcrum/two-owl.png"
      />

      <HangingBoard text={data.hangingBoard} typingSpeed={25} />

      <section className="service-inner mt">
        <header className="inner-hero">
          <div className="inner-hero-text section-top">
            <h1 className="inner-title h2">{data.title}</h1>
            {data.desc ? <p className="inner-lead p">{data.desc}</p> : null}
          </div>
        </header>

        {/* Accordion of sub-services */}
        <SubServiceStack
          items={data.subServices || []}
          palette={PALETTE}
          serviceId={id}
        />
      </section>

      <MarketsSection />
      <CtaBanner
        headingSmall="Want to Grow your Business?"
        headingLarge="Turn Traffic Into Revenue"
        description="Share your website and monthly goal, we’ll reply with a short action plan."
        buttonText="Send Details"
        buttonLink="/contact-us"
      />

      {/* Client logos (driven by JSON) */}
      <LogoSlider speed={100} logos={logos} />

      <WorkTogetherSection
        paras={
          data.worktogether ? [data.worktogether] : data.desc ? [data.desc] : []
        }
      />
      <Testimonials />

      {/* Optional back link */}
      {/* <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <Link to="/services" className="btn btn-primary">← Back to Services</Link>
      </div> */}
    </>
  );
}
