// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import RootLayout from "./layouts/RootLayout";

import Main from "./pages/Main";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AuditPage from "./pages/Audit";
import IndustriesPage from "./pages/Industries";
import CareerPage from "./pages/Career";
import PortfolioPage from "./pages/Portfolio";
import CaseStudiesPage from "./pages/CaseStudies";
import CaseStudySingle from "./pages/CaseStudySingle";
import ServicesPage from "./pages/Services";
import ServiceSinglePage from "./pages/ServiceSingle";
import BlogListPage from "./pages/BlogListPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import ThankYouPage from "./pages/ThankYouPage";
import SubService from "./pages/SubService";
import LocationPage from "./components/Locationcites/LocationPage";

// BAS YAHAN EK NAYA IMPORT ADD KIYA HAI BAAKI 7 HATA DIYE
import CityServiceDetail from "./components/Locationcites/CityServiceDetail";

const SITE_URL = "https://www.hjsysweb.com";

export default function App() {
  return (
    <>
      <Helmet>
        <title>HJ Sysweb</title>
        <meta
          name="description"
          content="We help businesses grow with SEO, conversion-ready websites, and performance ads. Clear plans, weekly sprints, and dashboards that tie spend to leads, sales, and ROI."
        />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="HJ Sysweb" />
        <meta property="og:title" content="HJ Sysweb" />
        <meta
          property="og:description"
          content="We help businesses grow with SEO, conversion-ready websites, and performance ads. Clear plans, weekly sprints, and dashboards that tie spend to leads, sales, and ROI."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={`${SITE_URL}/hj-favicon.svg`} />
      </Helmet>

      <RootLayout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/audit" element={<AuditPage />} />
          <Route path="/industries-we-serve" element={<IndustriesPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:slug" element={<CaseStudySingle />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServiceSinglePage />} />
          <Route path="/services/:id/:subId" element={<SubService />} />
          <Route path="/blogs" element={<BlogListPage />} />
          <Route path="/blogs/:slug" element={<BlogDetailPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
          
          {/* CITY WALE ROUTES */}
          <Route path="/location/:cityId" element={<LocationPage />} />
        
          {/* NAYA DYNAMIC ROUTE: Yeh akela route saari cities ki saari services ko handle kar lega! */}
          <Route path="/location/:cityId/:serviceId" element={<CityServiceDetail />} />
          
        </Routes>
      </RootLayout>
    </>
  );
}