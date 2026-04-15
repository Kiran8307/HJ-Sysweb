"use client";

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import cityData from "./citymain.json";
import BreadcrumbHero from "../BreadcrumbHero";
import HangingBoard from "../BreadCrumb/HangingBoard";
import Seo from "../Seo";
import MarketsSection from "../MarketsSection";
import CtaBanner from "../CtaBanner";
import LogoSlider from "../LogoSlider";
import WorkTogetherSection from "../service/WorkTogetherSection";
import Testimonials from "../Testimonials";
import rawClientLogos from "../client-logo.json";

// Aapki default palette
const PALETTE = [
  { bg: "#5856D610", edge: "#5856D6" },
  { bg: "#FF2D531A", edge: "#FF2D53" },
  { bg: "#00C7BD1A", edge: "#00C7BD" },
  { bg: "#A2855E1A", edge: "#A2855E" },
  { bg: "#AF52DE1A", edge: "#AF52DE" },
  { bg: "#34C7591A", edge: "#34C759" },
  { bg: "#e3ad0b1A", edge: "#e3ad0b" }, // Yellow/gold color
];

export default function LocationPage() {
  // Client Logos setup
  const logos = (rawClientLogos || []).map((item) => ({
    src: item.logo,
    alt: item.title || "",
  }));

  const { cityId } = useParams();
  const [hovered, setHovered] = useState(-1);

  // Current city ka data nikal rahe hain JSON se
  const currentCity = cityData.find((c) => c.id === cityId);

  // Agar galti se galat URL khul jaye toh crash nahi hoga
  if (!currentCity) {
    return (
      <div style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", paddingTop: "50px" }}>
        <h2 style={{ textAlign: "center", color: "white" }}>
          City not found!
        </h2>
      </div>
    );
  }

  return (
    <div>
      
      {/* 1. SEO SECTION */}
      <Seo
        title={`Top Digital Marketing & Web Services in ${currentCity.cityName} | HJ Sysweb`}
        description={`Grow your business in ${currentCity.cityName} with HJ Sysweb. We offer SEO, Branding, and Web Development to turn your traffic into revenue.`}
        canonical={`/location/${currentCity.id}`}
      />

      {/* 2. BREADCRUMB HERO */}
      <BreadcrumbHero
        title={`Services in ${currentCity.cityName}`}
        crumbs={[{ label: "Home", href: "/" }, { label: currentCity.cityName }]}
        bgImage="/Breadcrum/two-owl.png"
      />

      {/* 3. HANGING BOARD */}
      <HangingBoard
        text={`We believe true partnership creates progress in ${currentCity.cityName}. At HJ Sysweb, we go beyond typical agency work blending innovation, strategy, and transparency to accelerate your business journey, optimize performance, and deliver results that make a lasting impact on your revenue and reputation.`.trimStart()}
        typingSpeed={25}
      />

      {/* 4. INTRO TEXT */}
      <div style={{ maxWidth: "900px", margin: "40px auto", textAlign: "center" }}>
        <p style={{ color: "#ccc", fontSize: "18px" }}>
          Accelerate your business growth in <strong>{currentCity.cityName}</strong> with our full-stack digital and web solutions.
        </p>
      </div>

      {/* 5. SERVICES ACCORDION (ss-stack) */}
      <div style={{ paddingBottom: "50px" }}>
        <div className="ss-stack" role="list">
          {currentCity.services.map((it, i) => {
            const isOpen = i === hovered;
            const col = PALETTE[i % PALETTE.length];

            return (
              <section
                key={it.id}
                className={`ss-item ${isOpen ? "open" : ""}`}
                style={{ "--bg": col.bg, "--edge": col.edge, marginLeft: '10%' }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(-1)}
              >
                <div className="ss-head">
                  <h1 className="ss-title">{it.name || it.title}</h1>
                  <h6>
                    <Link
                      to={`/location/${cityId}/${it.id}`}
                      className="svc-card-link"
                    >
                      View More
                    </Link>
                  </h6>
                </div>

                <div id={`panel-${it.id}`} role="tabpanel" className="ss-body">
                  <div className="ss-body-inner">
                    <div className="ss-copy">
                      {(it.features || it.points)?.length ? (
                        <ul className="ss-list">
                          {(it.features || it.points).map((p, idx) => (
                            <li key={idx}>{p}</li>
                          ))}
                        </ul>
                      ) : null}

                      {it.description || it.desc ? (
                        <p className="ss-desc">{it.description || it.desc}</p>
                      ) : null}

                      <div className="ss-descmore">
                        <p>
                          We deliver best problem solving solution for our
                          client and provide finest finishing product in present
                          and upcoming future. We deliver best problem solving
                          solution for our client and provide finest finishing
                          product in present and upcoming future.
                        </p>
                      </div>
                    </div>

                    <div className="ss-art">
                      {it.image ? (
                        <img src={it.image} alt={it.name || it.title}  style={{height:'100%'}}/>
                      ) : null}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* 6. BOTTOM SECTIONS (Repaired Variables) */}
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

      {/* REPAIRED: data ki jagah currentCity laga diya gaya hai */}
      <WorkTogetherSection
        paras={
          currentCity.worktogether
            ? [currentCity.worktogether]
            : currentCity.desc
            ? [currentCity.desc]
            : []
        }
      />
      
      <Testimonials />

    </div>
  );
}