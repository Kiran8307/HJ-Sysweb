"use client";

import React from "react";
import "./portfolio-grid.css";

const PORTFOLIO_ITEMS = [
  {
    id: "pizza-in-horsham",
    title: "Pizza In Horsham",
    image:
      "/portfolio/Protfolio-main/Pizza in Horsham PA Website Development by HJ Sysweb.webp",
    logo: "/client-logo/main_street_logo.webp",
  },
  {
    id: "manhattan-bagel",
    title: "Manhattan Bagel",
    image: "/portfolio/Protfolio-main/SMO Of Manhattan.webp",
    logo: "/client-logo/manhattan_bagel_logo.webp",
  },
  {
    id: "lifestyle-branding",
    title: "Lifestyle Branding",
    image:
      "/portfolio/Protfolio-main/Woocommerce USA Website Development by HJ Sysweb.webp",
    logo: "/client-logo/lifestyle_logo.webp",
  },
  {
    id: "flowercity-pharmacy",
    title: "Flowercity Pharmacy",
    image: "/portfolio/Protfolio-main/Canada Pharmacy Website Development.webp",
    logo: "/client-logo/flowercitypharmacy_logo.webp",
  },
  {
    id: "shah-associates",
    title: "Shah & Associates",
    image:
      "/portfolio/Protfolio-main/USA Accointing Firm Website Development.webp",
    logo: "/client-logo/shah_logo.webp",
  },
  {
    id: "kp-accounting",
    title: "KP Accounting",
    image:
      "/portfolio/Protfolio-main/US Accounting form Website Development.webp",
    logo: "/client-logo/kp_logo.webp",
  },
  {
    id: "allwail",
    title: "ALLWAIL",
    image: "/portfolio/Protfolio-main/ALLWAIL Development.webp",
    logo: "/client-logo/allviall_logo.webp",
  },
  {
    id: "Ayur Khyati",
    title: "Ayur Khyati",
    image:
      "/portfolio/Protfolio-main/Ayurvedic Website Development by HJ Sysweb.webp",
    logo: "/client-logo/ayur_khyati_logo.webp",
  },
  {
    id: "bjp-mla-portfolio",
    title: "BJP MLA ",
    image: "/portfolio/Protfolio-main/BJP MLA Portfolio.webp",
    logo: "/client-logo/bjp_logo.webp",
  },
  {
    id: "navya-by-nirali",
    title: "Navya by Nirali",
    image:
      "/portfolio/Protfolio-main/Boutique Website Development by HJ Sysweb.webp",
    logo: "/client-logo/navya_logo.webp",
  },
  {
    id: "clinic-line",
    title: "Clinic Line",
    image:
      "/portfolio/Protfolio-main/Clinic Line Mobile App Development by HJ Sysweb.webp",
    logo: "/client-logo/clinic_line_logo.webp",
  },
  {
    id: "social-sadhu",
    title: "Social Sadhu",
    image: "/portfolio/Protfolio-main/Digital Agency Website Development.webp",
    logo: "/client-logo/social_sadhu_logo.webp",
  },
  {
    id: "supersee",
    title: "Supersee",
    image:
      "/portfolio/Protfolio-main/Employee Monitoring System Development.webp",
    logo: "/client-logo/supersee_logo.webp",
  },
  {
    id: "aani-system",
    title: "Aani System",
    image: "/portfolio/Protfolio-main/Website Development of aani system by HJ Sysweb.webp",
    logo: "/client-logo/aani_systems_logo.webp",
  },
  {
    id: "aradhna-bachat-sahkari-mandali",
    title: "Aradhna Bachat Sahkari Mandali Ltd",
    image:
      "/portfolio/Protfolio-main/Website Development of Aradhna Sahkari Mandali Ltd.webp",
    logo: "/client-logo/aaradhana_logo.webp",
  },
  {
    id: "advocate-jp",
    title: "Advocate JP",
    image:
      "/portfolio/Protfolio-main/Website Development of advocate jp by HJ Sysweb.webp",
    logo: "/client-logo/advocate_jp_logo.webp",
  },
  {
    id: "akshara-beauty-and-hair",
    title: "Akshara Beauty & Hair Hamilton",
    image:
      "/portfolio/Protfolio-main/Website Development of Akshara Beauty & Hair Hamilton.webp",
    logo: "/client-logo/akshara_logo.webp",
  },
  {
    id: "clean-n-sure",
    title: "Clean & Sure",
    image: "/portfolio/Protfolio-main/Website Development of clean n sure.webp",
    logo: "/client-logo/cleannsure_logo.webp",
  },
  {
    id: "cold-stone-creamery",
    title: "Cold Stone Creamery",
    image:
      "/portfolio/Protfolio-main/SOcial Media Management of Cold Stone Creamery.webp",
    logo: "/client-logo/cold_stone.webp",
  },
  {
    id: "double-pizza",
    title: "Double Pizza",
    image: "/portfolio/Protfolio-main/Mobile App Development Double Pizza.webp",
    logo: "/client-logo/doublepizza_logo.webp",
  },
  {
    id: "eye-n-u-kenya",
    title: "Eye n u Kenya",
    image:
      "/portfolio/Protfolio-main/Website Development of eye n u kenya by HJ Sysweb.webp",
    logo: "/client-logo/eyenu_logo.webp",
  },
  {
    id: "friends-culture-group",
    title: "Friends Culture Group Ahmedabad",
    image:
      "/portfolio/Protfolio-main/Friends CUlture Group Ahmedabad Designing Work.webp",
    logo: "/client-logo/Friends_culture_group_logo.webp",
  },
  {
    id: "Gokul-children-hospital",
    title: "Gokul Children Hospital",
    image: "/portfolio/Protfolio-main/website dev gokul children hospital.webp",
    logo: "/client-logo/gokul_logo.webp",
  },
  {
    id: "hbk-clicks",
    title: "HBK CLicks",
    image:
      "/portfolio/Protfolio-main/Website Development of hbk by HJ Sysweb.webp",
    logo: "/client-logo/hbk_logo.webp",
  },
  {
    id: "jalaram-clinic",
    title: "Jalaram Clinic",
    image:
      "/portfolio/Protfolio-main/Website Development of jalaram clinic by HJ Sysweb.webp",
    logo: "/client-logo/jalaram_clinic_logo.webp",
  },
  {
    id: "kiss-kross-USA",
    title: "Kiss Kross USA",
    image:
      "/portfolio/Protfolio-main/Kiss Kross US Mobile App Development.webp",
    logo: "/client-logo/kiss_kross_logo.webp",
  },
  {
    id: "luigi's-Pizzarama-II",
    title: "Luigi's Pizzarama II",
    image:
      "/portfolio/Protfolio-main/Luigi's Pizzarama II Website Development.webp",
    logo: "/client-logo/luigis_pizzarama_2_logo.webp",
  },
  {
    id: "maa-gayatri-clinic",
    title: "Maa Gayatri Clinic",
    image:
      "/portfolio/Protfolio-main/Website Development of maa gayatri by HJ Sysweb.webp",
    logo: "/client-logo/maa_gayatri_logo.webp",
  },
  {
    id: "mahavir-eye-hospital",
    title: "Mahavir Eye Hospital",
    image:
      "/portfolio/Protfolio-main/Website Development of mahavir eye by HJ Sysweb.webp",
    logo: "/client-logo/mahavir_logo.webp",
  },
  {
    id: "advocate-malvika-singh-associates",
    title: "Advocate Malvika Singh Associates",
    image:
      "/portfolio/Protfolio-main/Website Development of malvika singh by HJ Sysweb.webp",
    logo: "/client-logo/malvika_logo.webp",
  },
  {
    id: "mandurah-cafe",
    title: "Mandurah cafe",
    image:
      "/portfolio/Protfolio-main/Mandurah cafe Australia Website Development by HJ Sysweb.webp",
    logo: "/client-logo/mandurah_cafe_logo.webp",
  },
  {
    id: "gokul-montessori",
    title: "Gokul Montessori",
    image: "/portfolio/Protfolio-main/Montessori Website Dev.webp",
    logo: "/client-logo/Gokul_montessori_logo.webp",
  },
  {
    id: "nachiketa-school",
    title: "Nachiketa School",
    image: "/portfolio/Protfolio-main/School Website Development.webp",
    logo: "/client-logo/nachiketa_logo.webp",
  },
  {
    id: "nova-udyog",
    title: "Nova Udyog",
    image: "/portfolio/Protfolio-main/NOVA Udyog Mobile App Development.webp",
    logo: "/client-logo/Nova_udyog_logo.webp",
  },
  {
    id: "physio-buzz",
    title: "Physio Buzz",
    image:
      "/portfolio/Protfolio-main/Physio.Buzz Mobile app development by HJ Sysweb.webp",
    logo: "/client-logo/physio_buzz_logo.webp",
  },
  {
    id: "radhe-towing",
    title: "Radhe Towing",
    image:
      "/portfolio/Protfolio-main/Website Development of Radhe Towing by HJ Sysweb.webp",
    logo: "/client-logo/radhe_logo.webp",
  },
  {
    id: "renovise-construction",
    title: "Renovise Construction",
    image:
      "/portfolio/Protfolio-main/Website Development of rcc by HJ Sysweb.webp",
    logo: "/client-logo/rcc_construction_logo.webp",
  },
  {
    id: "venue",
    title: "Venue 1625",
    image: "/portfolio/Protfolio-main/US Party Hall Website Development.webp",
    logo: "/client-logo/Venue_logo.webp",
  },
   {
    id: "tads-tandoori",
    title: "Tads Tandoori",
    image: "/portfolio/Protfolio-main/Tads Tandoori Development.webp",
    logo: "/client-logo/tads_logo.webp",
  },
  {
    id: "sangopan-adolescent",
    title: "Sach",
    image: "/portfolio/Protfolio-main/Sach Website development.webp",
    logo: "/client-logo/sach_logo.webp",
  },
  {
    id: "spinners-table-tennis",
    title: "Spinners Table Tennis",
    image: "/portfolio/Protfolio-main/Spinners Table Website Development.webp",
    logo: "/client-logo/Spinners_logo.webp",
  },
  {
    id: "rudrika-clinic",
    title: "Rudrika Clinic",
    image: "/portfolio/Protfolio-main/Rudrika Clinic Vadodara Website Development by HJ Sysweb.webp",
    logo: "/client-logo/rudrika_logo.webp",
  },
  {
    id: "vasco-import-export",
    title: "Vasco Import Export",
    image: "/portfolio/Protfolio-main/Import Export Website Development.webp",
    logo: "/client-logo/Vasco_logo.webp",
  },
  {
    id: "welliotte",
    title: "Welliotte",
    image: "/portfolio/Protfolio-main/Welliotte Website Development.webp",
    logo: "/client-logo/Welliotte_logo.webp",
  },
   {
    id: "shree-hari-engineering",
    title: "Shree Hari Engineering",
    image: "/portfolio/Protfolio-main/Shree Hari ENgineering V.U.Nagar Website Development.webp",
    logo: "/client-logo/shreehari_logo.webp",
  },
  {
    id: "santram-accounting",
    title: "Santram Accounting",
    image: "/portfolio/Protfolio-main/Santram Accounting Anand Website Development.webp",
    logo: "/client-logo/santram_accounting.webp",
  },
  {
    id: "i-get-wap",
    title: "I Get Wap",
    image: "/portfolio/Protfolio-main/Website Development of i get wap by HJ Sysweb.webp",
    logo: "/client-logo/i get wape.webp",
  },
  {
    id: "tribhuvandas-foundation",
    title: "Tribhuvandas Foundation",
    image: "/portfolio/Protfolio-main/Tribhuvandas Foundation App Development.webp",
    logo: "/client-logo/tribhuvandas_foundation_logo.webp",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="portfolio-section mt">
      <header className="portfolio-section__head section-top">
        <h2 className="portfolio-section__title h2">Our Portfolio</h2>
        <p className="portfolio-section__subtitle p ">
          Real projects, real outcomes, more organic traffic, lower CPL, stronger ROAS. Click any tile to see the challenge, what we shipped, and the exact numbers.
        </p>
      </header>

      <ul className="portfolio-section__grid">
        {PORTFOLIO_ITEMS?.map((item) => (
          <li
            key={item?.id}
            className={`portfolio-section__card portfolio-section__card--${item?.id}`}
          >
            {/* Background image */}
            <img
              className="portfolio-section__image"
              src={item?.image}
              alt={item?.title}
              loading="lazy"
            />

            {/* Title (static + typing) behind the overlay */}
            <div className="portfolio-section__titlebar">
              <span className="portfolio-section__card-title portfolio-section__card-title--static">
                {item?.title}
              </span>
              {/* typing layer — steps animation on hover */}
              <span
                className="portfolio-section__card-title portfolio-section__card-title--type"
                style={{ "--tw-ch": item?.title.length }}
                data-portfolio-main-title={item?.title}
              />
            </div>

            {/* ONE logo element that animates from top-right to centered */}
            <img
              className="portfolio-section__logo"
              src={item?.logo}
              alt=""
              aria-hidden="true"
            />

            {/* Hover scrim that starts at top-right and expands */}
            <div className="portfolio-section__scrim" />
          </li>
        ))}
      </ul>

      <div className="portfolio-section__cta-wrap">
        <a href="/case-studies" className="portfolio-section__cta">
          <span>View Case Study →</span>
        </a>
      </div>
    </section>
  );
}
