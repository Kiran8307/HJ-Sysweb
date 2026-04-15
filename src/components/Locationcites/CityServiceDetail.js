"use client";

import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import Seo from "../Seo";
import BreadcrumbHero from "../BreadcrumbHero";
import HangingBoard from "../BreadCrumb/HangingBoard";
import MarketsSection from "../MarketsSection";
import CtaBanner from "../CtaBanner";
import LogoSlider from "../LogoSlider";
import WorkTogetherSection from "../service/WorkTogetherSection";
import Testimonials from "../Testimonials";

// Styles
import "./../service/service-inner.css";

// Data Imports
import cityData from "./citymain.json";
import rawClientLogos from "../client-logo.json";

export default function CityServiceDetail() {
  const { cityId, serviceId } = useParams();

  // 1. City find karo, phir uske andar ki specific service
  const data = useMemo(() => {
    const city = cityData.find((c) => c.id === cityId);
    if (!city) return null;
    return city.services.find((s) => s.id === serviceId);
  }, [cityId, serviceId]);

  // City ya Service nahi mili toh 404/Home par bhej do
  if (!data) {
    return <Navigate to="/" replace />;
  }

  // Logos mapping
  const logos = (rawClientLogos || []).map((item) => ({
    src: item.logo,
    alt: item.title || "",
  }));

  return (
    <div >
      <Seo
        title={`${data.title || data.name} | HJ Sysweb`}
        description={data.desc || ""}
        canonical={`/location/${cityId}/${serviceId}`}
      />

      <BreadcrumbHero
        title={data.title || data.name}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: `/location/${cityId}` },
          { label: data.title || data.name },
        ]}
        bgImage="/Breadcrum/two-owl.png"
      />

      <HangingBoard text={data.hangingBoard || data.desc} typingSpeed={25} />

      <section className="service-inner mt">
        <header className="inner-hero">
          <div className="inner-hero-text section-top" style={{ textAlign: 'center', padding: '60px 20px' }}>
            {/* Main Title */}
            <h1 className="inner-title h2" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '30px', color: '#fff' }}>
                {data.title || data.name}
            </h1>

            {/* Deliverables & Outcome Section (Exactly like your screenshot) */}
            <div style={{ marginBottom: '30px' }}>
                <p style={{ fontSize: '20px', marginBottom: '15px' }}>
                    <strong style={{ color: '#fff' }}>Deliverables :</strong> 
                    <span style={{ color: '#ccc', marginLeft: '10px' }}>
                        {data.points?.[0]?.replace('Deliverables:', '') || "Custom strategies and full execution."}
                    </span>
                </p>
                <p style={{ fontSize: '20px' }}>
                    <strong style={{ color: '#fff' }}>Outcome :</strong> 
                    <span style={{ color: '#ccc', marginLeft: '10px' }}>
                        {data.points?.[1]?.replace('Outcome:', '') || "Measurable growth and brand authority."}
                    </span>
                </p>
            </div>

            {/* General Description */}
            {data.desc ? (
                <p className="inner-lead p" style={{ maxWidth: '800px', margin: '0 auto', color: '#aaa', lineHeight: '1.8' }}>
                    {data.desc}
                </p>
            ) : null}
          </div>
        </header>
      </section>

      <MarketsSection />
      
      <CtaBanner
        headingSmall="Want to Grow your Business?"
        headingLarge="Turn Traffic Into Revenue"
        description="Share your website and monthly goal, we’ll reply with a short action plan."
        buttonText="Send Details"
        buttonLink="/contact-us"
      />

      <LogoSlider speed={100} logos={logos} />

      <WorkTogetherSection
        paras={data.desc ? [data.desc] : ["Let's build something great together."]}
      />
      
      <Testimonials />
    </div>
  );
}