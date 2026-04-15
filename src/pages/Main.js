import React from "react";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import ServiceSection from "../components/ServiceSection";
import MarketsSection from "../components/MarketsSection";
import PortfolioSection from "../components/PortfolioSection";
import CtaBanner from "../components/CtaBanner";
import ApproachSection from "../components/ApproachSection";
import ToolsSection from "../components/ToolsSection";
import BlogSection from "../blogs/BlogSection";
import Testimonials from "../components/Testimonials";
// Footer can live in App layout or here

import { Helmet } from "react-helmet-async";

export default function Main() {
  return (
    <>
      <Helmet>
        <title>HJ Sysweb - Digital Marketing in India: SEO, Websites, Ads</title>
        <meta
          name="description"
          content="We help businesses grow with SEO, conversion-ready websites, and performance ads. Clear plans, weekly sprints, and dashboards that tie spend to leads, sales, and ROI."
        />
      </Helmet>

      <HeroSection />
      <StatsSection />
      <ServiceSection />
      <MarketsSection />
      <PortfolioSection />
      <CtaBanner
  headingSmall="Want to Grow your Business?"
  headingLarge="Turn Traffic Into Revenue"
  description="Share your website and monthly goal, we’ll reply with a short action plan."
  buttonText="Send Details"
  buttonLink="/contact-us"
/>

      <ApproachSection />
      <ToolsSection />
     <BlogSection/>
      <Testimonials />
    </>
  );
}
