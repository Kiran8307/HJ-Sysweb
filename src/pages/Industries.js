import React from "react";
import { Link } from "react-router-dom"; // ✅ replaces next/link
import Seo from "../components/Seo";     // ✅ reusable metadata component

import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import MarketsSection from "../components/MarketsSection";
// import BlogSection from "../blogs/BlogSection";
import Testimonials from "../components/Testimonials";
import StickyStack from "../components/industry-component/StickyStack";
import "./../style/industry.css"

export default function IndustriesPage() {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Seo
        title="Industries We Serve | Fashion, FMCG, Real Estate & More"
        description="Tailored growth for fashion, FMCG, real estate, healthcare, education, hospitality, and startups — plans that increase enquiries and revenue."
        canonical="/industries-we-serve"
      
      />

      {/* ✅ Page Content */}
      <BreadcrumbHero
        title="Industries"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries We Serve" },
        ]}
        bgImage="/Breadcrum/two-owl.png"
      />

      <HangingBoard
        text={`Growth for every industry, delivered with clear plans and measurable ROI. We align strategy, websites, SEO, and ads to attract demand, convert visitors, and keep customers returning so enquiries rise, costs fall, and revenue compounds month after month.`}
        typingSpeed={25}
      />

      <div className="spark-vector-industry">
        <img
          src="/sprak-service.gif"
          alt="Spark animation"
          className="spark-vector-image-industry"
        />
      </div>

      <StickyStack />

      {/* ✅ Big callout section */}
      <div
        className="wt-callout"
        style={{
          backgroundImage: "url('/Service-page/yellow-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="wt-line wt-line-1">LET’S WORK</div>

        {/* ✅ Link converted for React Router */}
        <Link to="/contact-us" className="wt-fab" aria-label="Get in touch">
          <span className="wt-fab-txt">
            Get In Touch
            <span className="wt-fab-arrow">
              <img
                src="/Service-page/black-arrow.svg"
                alt="arrow"
                className="arrow-img"
              />
            </span>
          </span>
        </Link>

        <div className="wt-line wt-line-2">TOGETHER</div>

        <div className="spider-vector-industry">
          <img
            src="/service/small-vector.png"
            alt="small vector"
            className="spider-small-image-industry"
          />
          <img
            src="/service/big-vector.png"
            alt="big vector"
            className="spider-big-image-industry"
          />
        </div>
      </div>

      <MarketsSection />
      {/* <BlogSection /> */}
      <Testimonials />
    </>
  );
}
