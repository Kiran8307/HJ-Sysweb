import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import Seo from "../Seo";

import BreadcrumbHero from "../BreadcrumbHero";
import HangingBoard from "../BreadCrumb/HangingBoard";
import MarketsSection from "../MarketsSection";
import Testimonials from "../Testimonials";
import HybridIndustryAccordion from "./HybridIndustryAccordion";
import { industriesData } from "./industriesData";
import "../../style/industry.css";

// --- New Imports from Service Layout ---
import CtaBanner from "../CtaBanner";
import LogoSlider from "../LogoSlider";
import WorkTogetherSection from "../service/WorkTogetherSection";
import rawClientLogos from "../client-logo.json";

// Map client logos JSON -> {src, alt}
const logos = (rawClientLogos || []).map((item) => ({
  src: item.logo,
  alt: item.title || "",
}));

export default function IndustriesInner() {
  const { industryId } = useParams();

  const data = useMemo(() => industriesData.find((s) => s.id === industryId), [industryId]);

  if (!data) {
    // Not found -> go back to industries
    return <Navigate to="/industries-we-serve" replace />;
  }

  const metaTitle = `${data.title} | HJ Sysweb`;
  const metaDesc = data.desc || "";
  const ogImg = data.img || "/hj-favicon.svg";

  return (
    <>
      {/* SEO Metadata */}
      <Seo
        title={metaTitle}
        description={metaDesc}
        canonical={`/industries-we-serve/${industryId}`}
        ogImage={ogImg}
      />

      {/* Page Content */}
      <BreadcrumbHero
        title={data.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries We Serve", href: "/industries-we-serve" },
          { label: data.title },
        ]}
        bgImage="/Breadcrum/two-owl.png"
      />

      <HangingBoard
        text={data.innerDesc || data.desc}
        typingSpeed={25}
      />

      <div className="spark-vector-industry">
        <img
          src="/sprak-service.gif"
          alt="Spark animation"
          className="spark-vector-image-industry"
        />
      </div>

      {/* The Animated Sub-Industry Cards */}
      <HybridIndustryAccordion items={data.subIndustries} parentImg={data.img} />

      {/* --- Newly Combined Sections from Service Inner --- */}
      <CtaBanner
        headingSmall={`Ready to transform your ${data.title} business?`}
        headingLarge="Turn Industry Challenges Into Growth"
        description="Share your project details with us, and our team will provide a tailored technical solution for your industry."
        buttonText="Get a Proposal"
        buttonLink="/contact-us"
      />

      <LogoSlider speed={100} logos={logos} />

      <WorkTogetherSection
        paras={[
          `We deeply understand the unique complexities of the ${data.title} sector.`,
          `Our specialized solutions are designed to increase operational efficiency, ensure strict compliance, and drive digital innovation within your specific market landscape.`
        ]}
      />

      {/* Standard Footers */}
      <MarketsSection />
      <Testimonials />
    </>
  );
}
