import React from "react";
import Seo from "../components/Seo"; // ✅ reusable metadata component
import BreadcrumbHero from "../components/BreadcrumbHero";
import HangingBoard from "../components/BreadCrumb/HangingBoard";
import CareersSection from "../components/career/CareersSection";

export default function CareerPage() {
  return (
    <>
      <Seo
        title="Careers at HJ Sysweb | Digital Marketing Jobs in Gujarat"
        description="Join our growth team in Ahmedabad/Anand. Roles in SEO, ads, design, web, apps & growth marketing. Hybrid options, real impact, mentorship, and clear career paths. Apply today."
        canonical="/career"
        ogImage="/hj-favicon.svg"
      />

      <div>
        <BreadcrumbHero
          title="Career"
          crumbs={[{ label: "Home", href: "/" }, { label: "Career" }]}
          bgImage="/Breadcrum/two-owl.png"
        />

        <HangingBoard
          text={`Step into a workplace where ideas lead innovation. HJ Sysweb offers a culture of learning, collaboration, and growth. We value dedication, creativity, and technical brilliance to build future-ready solutions that drive digital transformation across industries globally.`}
          typingSpeed={25}
        />

        <CareersSection />
      </div>
    </>
  );
}
