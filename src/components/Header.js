"use client";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./../components/header-rail.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation(); // ✅ Detect current page

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHomePage = pathname === "/"; // ✅ Check if we’re on home

  return (
    <header className={`site-header-logo ${scrolled ? "is-scrolled" : ""}`}>
      {/* Left: Logo */}
      <Link to="/" aria-label="HJ Sysweb" className="site-header-brand">
        <img className="logo light" src="/yellow-logo.png" alt="HJ Sysweb" />
      </Link>

      {/* Center: Nav only on Home + not scrolled */}
      {isHomePage && !scrolled && (
        <nav className="top-inline-nav">
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/case-studies">Case Studies</Link>
        </nav>
      )}
    </header>
  );
}
