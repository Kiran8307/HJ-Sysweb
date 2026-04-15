import React, { useMemo } from "react";
import MarketsSection from "../components/MarketsSection";
import CtaBanner from "../components/CtaBanner";
import LogoSlider from "../components/LogoSlider";

import rawClientLogos from "../components/client-logo.json";
import Testimonials from "../components/Testimonials";
import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import { useParams } from "react-router-dom";
// import subServices from "../components/service/sub-service.json";
import services from "../components/service/service.json";

const BoldFirstWord = ({ text }) => {
  const words = text.trim().split(" ");

  return (
    <span>
      <strong>{words[0]}</strong> {words.slice(1).join(" ")}
    </span>
  );
};

const logos = (rawClientLogos || []).map((item) => ({
  src: item.logo,
  alt: item.title || "",
}));

const SubService = () => {
  const { id, subId } = useParams();

  const data = useMemo(() => services.find((s) => s.id === id), [subId]);

  const subData = useMemo(
    () => data.subServices.find((d) => d.id === subId),
    [subId],
  );

  return (
    <>
      <BreadcrumbHero
        title={`${subData.title}`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: `${data.title}`, href: `/services/${data.id}` },
          { label: `${subData.title}` },
        ]}
        bgImage="/Breadcrum/two-owl.png"
      />
      <HangingBoard text={`${subData.desc}`} typingSpeed={25} />

      <section className="service-inner mt">
        <header className="inner-hero">
          <div className="inner-hero-text section-top">
            <h1 className="inner-title h2">{`${subData.title}`}</h1>

            {subData.points.map((p, idx) => (
              <p key={idx}>
                <BoldFirstWord text={p} />
              </p>
            ))}
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

      <Testimonials />
    </>
  );
};

export default SubService;
