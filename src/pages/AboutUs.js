import React from "react";
import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import AboutSection from "../components/about-us/AboutSection";
import SlantedMarquee from "../components/about-us/SlantedMarquee";
import RocketSection from "../components/about-us/RocketSection";
import CTASection from "../components/about-us/CTASection";
import MarketsSection from "../components/MarketsSection";
import OwlSection from "../components/about-us/OwlSection";
import ApproachSection from "../components/ApproachSection";
import CtaBanner from "../components/CtaBanner";
import Testimonials from "../components/Testimonials";
import Seo from "../components/Seo";
import BlogSection from "../blogs/BlogSection";
// import BlogSection from "../blogs/BlogSection";

export default function AboutUs() {
  return (
    <>
      <Seo
        title="About HJ Sysweb | Digital Marketing Team in India"
        description="Results-driven marketers. We turn traffic into qualified enquiries with SEO, websites, and ads measured in CPL, ROAS, and revenue."
        canonical="/about-us"
      />
      <BreadcrumbHero
        title="Who We Are"
        crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        bgImage="/Breadcrum/two-owl.png"
      />
      <HangingBoard
        text={`We believe true partnership creates progress. At HJ Sysweb, we go beyond typical agency work blending innovation, strategy, and transparency to accelerate your business journey, optimize performance, and deliver results that make a lasting impact on your revenue and reputation.`.trimStart()}
        typingSpeed={25}
      />
      <AboutSection />
      <SlantedMarquee
        items={[
          "BRANDING SERVICES",
          "CREATIVE ADVERTISING",
          "DIGITAL MARKETING",
          "PERFORMANCE MARKETING",
          "WEB DESIGN",
          "SOCIAL MEDIA",
        ]}
        speed={36}
        angle={-4}
        iconAlt="Idea"
      />
      <RocketSection />
      <CTASection />
      <MarketsSection />
      <OwlSection />
      <ApproachSection />
            <CtaBanner
        headingSmall="Want to Grow your Business?"
        headingLarge="Let’s Turn Traffic into Enquiries"
        description="Get a quick, plain-English plan for your website, SEO, and ads what to fix first and why."
        buttonText="Get Free Growth Audit"
        buttonLink="/audit"
      />
      <BlogSection />
      <Testimonials />
    </>
  );
}
