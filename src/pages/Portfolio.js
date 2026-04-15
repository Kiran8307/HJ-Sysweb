import React from "react";
import Seo from "../components/Seo"; // Helmet-based SEO component

import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import PortfolioGrid from "../components/portfolio/PortfolioGrid";
import MarketsSection from "../components/MarketsSection";
import Testimonials from "../components/Testimonials";

export default function PortfolioPage() {
  return (
    <>
      <Seo
        title="Portfolio & Case Studies | Results, ROAS & CPL Wins"
        description="Real projects with real numbers. See how we improved organic growth, reduced CPL, and scaled ROAS across industries."
        canonical="/portfolio"
        ogImage="/hj-favicon.svg"
      />

      <div>
        <BreadcrumbHero
          title="Portfolio"
          crumbs={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
          bgImage="/Breadcrum/two-owl.png"
        />

        <HangingBoard
          text={`See the work behind the numbers. Websites, campaigns, and brands engineered to lift traffic, conversions, and ROAS. Explore before-after snapshots, key metrics, and the plays we used so you know exactly how we’ll grow your business next, fast.`}
          typingSpeed={25}
        />

        <PortfolioGrid />

        <MarketsSection />

        <Testimonials />
      </div>
    </>
  );
}
