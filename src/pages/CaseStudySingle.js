import React, { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import Seo from "../components/Seo";
import { caseStudies } from "../components/data/caseStudies";
import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import CtaBanner from "../components/CtaBanner";
import Testimonials from "../components/Testimonials";
import GalleryMotion from "../components/case-study/GalleryMotion";
import "./../style/single-cs.css"
import {
  FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGlobe, FaYoutube
} from "react-icons/fa";

export default function CaseStudySingle() {
  const { slug } = useParams();

  const cs = useMemo(
    () => caseStudies.find((c) => c.slug === slug),
    [slug]
  );

  if (!cs) {
    // If slug not found, go back to list or show a 404 component
    return <Navigate to="/case-studies" replace />;
  }

  const platformIcons = {
    facebook: FaFacebook,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    youtube: FaYoutube,
    website: FaGlobe,
  };

  const metaTitle = cs.metaTitle || `${cs.title} | HJ Sysweb`;
  const metaDesc  = cs.metaDesc || `Discover how ${cs.title} achieved results.`;
  const canonical = `/case-studies/${cs.slug}`;

  return (
    <>
      <Seo
        title={metaTitle}
        description={metaDesc}
        canonical={canonical}
        ogImage={cs.thumbnail || "/hj-favicon.svg"}
      />

      <BreadcrumbHero
        title={cs.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: cs.title },
        ]}
        bgImage="/Breadcrum/two-owl.png"
      />

      <HangingBoard text={cs.description} typingSpeed={25} />

      <main className="cs-single mt">
        {/* HERO BANNER */}
        <section className="cs-hero">
          <img src={cs.heroImage} alt={cs.title} className="cs-hero-img" />
        </section>

        <div className="cs-content-main-img">
          <div className="cs-yellow-side">
            <img src="/testimonial/testimonial-yellow.png" alt="decorative shape" />
          </div>

          <p className="cs-longdesc">{cs.longDescription}</p>

          <div className="spark-vector-cs">
            <img alt="" className="spark-vector-image-cs" src="/sprak-service.gif" />
          </div>

          {cs.mainImage && (
            <section className="cs-mock">
              <img src={cs.mainImage} alt={`${cs.title} mockup`} />
            </section>
          )}
        </div>

        {/* OVERVIEW + PROJECT DETAILS */}
        <section className="cs-two-col">
          <div className="cs-left">
            <h2 className="cs-left-title">{cs.title}</h2>
            {cs.projectDetails?.projectDetails2 ? (
              <p className="cs-left-desc">{cs.projectDetails?.projectDetails2}</p>
            ) : (
              <p className="cs-left-desc">{cs.description}</p>
            )}

            {!!cs.capabilities?.length && (
              <ul className="cs-capabilities">
                {cs.capabilities.map((cap, i) => <li key={i}>{cap}</li>)}
              </ul>
            )}
          </div>

          <aside className="cs-right">
            <h3 className="cs-right-title">Project Details</h3>

            <dl className="cs-details">
              <div className="cs-row">
                <dt>Services :</dt>
                <dd>{cs.projectDetails.services.join(" | ")}</dd>
              </div>

              {!!cs.projectDetails.technology?.length && (
                <div className="cs-row">
                  <dt>Technology :</dt>
                  <dd>{cs.projectDetails.technology.join(", ")}</dd>
                </div>
              )}

              <div className="cs-row">
                <dt>Location :</dt>
                <dd className="cs-loc">
                  {cs.projectDetails.location?.flag ? (
                    <span className="flag-pill" aria-label={cs.projectDetails.location.country}>
                      <img src={cs.projectDetails.location.flag} alt="" className="flag-icon-cs" />
                      <span className="flag-code-cs">{cs.projectDetails.location.country}</span>
                    </span>
                  ) : (
                    cs.projectDetails.location?.country
                  )}
                </dd>
              </div>

              {!!cs.projectDetails.sector && (
                <div className="cs-row">
                  <dt>Sector :</dt>
                  <dd>{cs.projectDetails.sector}</dd>
                </div>
              )}

              {!!cs.projectDetails.digitalPlatforms?.length && (
                <div className="cs-row cs-platforms">
                  <dt>Digital Platforms :</dt>
                  <dd className="cs-platforms-list">
                    {cs.projectDetails.digitalPlatforms.map((p, i) => {
                      const Icon = platformIcons[p.name?.toLowerCase()] || FaGlobe;
                      return p.link ? (
                        <a key={i} href={p.link} target="_blank" rel="noreferrer" title={p.name} className="cs-icon">
                          <Icon size={18} />
                        </a>
                      ) : null;
                    })}
                  </dd>
                </div>
              )}
            </dl>
          </aside>
        </section>

        {/* GALLERY */}
        {cs.gallery?.length ? <GalleryMotion images={cs.gallery} title={cs.title} /> : null}

        {cs.projectDetails?.belowprojectDetails ? (
          <p className="cs-longdesc">{cs.projectDetails?.belowprojectDetails}</p>
        ) : null}
      </main>

      <CtaBanner />
      {/* You can drop a BlogSection here if desired */}
      <Testimonials />
    </>
  );
}
