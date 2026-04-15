import React from "react";
import "../index.css";
import Header from "../components/Header";
import SideRail from "../components/SideRail";
import Footer from "../components/Footer";
import MobileHeader from "../components/MobileHeader";
import StickyContacts from "../components/StickyContacts";

export default function RootLayout({ children }) {
  return (
    <div className="layout-root">
      {/* headers */}
      <Header />
      <SideRail />
      <MobileHeader />

      {/* page wrapper */}
      <div className="page">
        <main className="page-main">{children}</main>
      </div>

      <StickyContacts />
      <Footer />
    </div>
  );
}
