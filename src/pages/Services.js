import React from "react";
import Seo from "../components/Seo";

import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import ServiceList from "../components/service/ServiceList";
import WorkTogetherSection from "../components/service/WorkTogetherSection";
import MarketsSection from "../components/MarketsSection";
import BlogSection from "../blogs/BlogSection";
import Testimonials from "../components/Testimonials";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services | SEO, Websites, Ads & Growth Marketing | HJ Sysweb"
        description="Explore our full stack: SEO, website development, performance ads, branding, creative, e-commerce, apps, and automation designed to increase leads and ROI."
        canonical="/services"
        ogImage="/hj-favicon.svg"
      />

      <BreadcrumbHero
        title="Services"
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        bgImage="/Breadcrum/two-owl.png"
      />

      <HangingBoard
        text={`We plan, build, and optimize SEO, websites, and ads so your brand gets found, chosen, and measured. Expect enquiries, lower CPL, and dashboards, with weekly sprints and a 90-day roadmap focused on quick wins and scalable growth.`}
        typingSpeed={25}
      />

      <ServiceList />

      <WorkTogetherSection
        bgImage="/bg/mesh.png"
        title="Expertise That Drives Real Results,"
        highlight="Digital success, made measurable."
        stats={[{ value: "+310", label: " Monthly Leads" }, { value: "1.9s", label: "Page Speed" }]}
        paras={[
          "We believe growth shouldn’t be complicated. That’s why we give you crystal-clear dashboards, plain-English performance reports, and a 90-day roadmap with defined priorities. No jargon. No guesswork. Just actionable insights, measurable progress, and strategies that turn data into real revenue faster, smarter, and more transparently than ever before. Backed by expert execution and continuous optimization, we make every marketing move count toward your business success.",
        ]}
        ctaHref="/contact-us"
        ctaLabel="Start a project"
      />

      <MarketsSection />
      <BlogSection />
      <Testimonials />
    </>
  );
}
