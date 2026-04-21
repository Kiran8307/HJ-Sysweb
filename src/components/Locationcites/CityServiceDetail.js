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

import "./../service/service-inner.css";

import cityData from "./citymain.json";
import rawClientLogos from "../client-logo.json";

export default function CityServiceDetail() {
  const { cityId, serviceId } = useParams();

  const { currentCity, currentService } = useMemo(() => {
    const city = cityData.find((c) => c.id === cityId);
    if (!city) return { currentCity: null, currentService: null };
    
    const service = city.services.find((s) => s.id === serviceId);
    return { currentCity: city, currentService: service };
  }, [cityId, serviceId]);

  if (!currentService || !currentCity) {
    return <Navigate to="/" replace />;
  }

  const logos = (rawClientLogos || []).map((item) => ({
    src: item.logo,
    alt: item.title || "",
  }));

  return (
    <div>
      <Seo
        title={`${currentService.title || currentService.name} in ${currentCity.cityName} | HJ Sysweb`}
        description={currentService.desc || ""}
        canonical={`/location/${cityId}/${serviceId}`}
      />

      {/* FIXED BREADCRUMB: Home > CityName > ServiceName */}
      <BreadcrumbHero
        title={currentService.title || currentService.name}
        crumbs={[
          { label: "Home", href: "/" },
          { label: currentCity.cityName, href: `/location/${cityId}` }, // Yahan ab "Locations" nahi, City Name aayega
          { label: currentService.title || currentService.name },
        ]}
        bgImage="/Breadcrum/two-owl.png"
      />

      <HangingBoard text={currentService.hangingBoard || currentService.desc} typingSpeed={25} />

      <section className="service-inner mt">
        <header className="inner-hero">
          <div className="inner-hero-text section-top" style={{ textAlign: 'center', padding: '60px 20px' }}>
            {/* Main Title */}
            <h1 className="inner-title h2" style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '30px', color: '#fff' }}>
                {currentService.title || currentService.name}
            </h1>

            {/* Deliverables & Outcome Section */}
            <div style={{ marginBottom: '30px' }}>
                <p style={{ fontSize: '20px', marginBottom: '15px' }}>
                    <strong style={{ color: '#fff' }}>Deliverables :</strong> 
                    <span style={{ color: '#ccc', marginLeft: '10px' }}>
                        {currentService.points?.[0]?.replace('Deliverables:', '') || "Custom strategies and full execution."}
                    </span>
                </p>
                <p style={{ fontSize: '20px' }}>
                    <strong style={{ color: '#fff' }}>Outcome :</strong> 
                    <span style={{ color: '#ccc', marginLeft: '10px' }}>
                        {currentService.points?.[1]?.replace('Outcome:', '') || "Measurable growth and brand authority."}
                    </span>
                </p>
            </div>

            {/* General Description */}
            {currentService.desc ? (
                <p className="inner-lead p" style={{ maxWidth: '800px', margin: '0 auto', color: '#aaa', lineHeight: '1.8' }}>
                    {currentService.desc}
                </p>
            ) : null}
            {currentService.innerDesc ? (
                <p className="inner-lead p" style={{ maxWidth: '800px', margin: '20px auto 0', color: '#aaa', lineHeight: '1.8' }}>
                    {currentService.innerDesc}
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
        paras={currentService.desc ? [currentService.desc] : ["Let's build something great together."]}
      />
      
      <Testimonials />
    </div>
  );
}