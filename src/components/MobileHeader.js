"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuOverlay from "./MenuOverlay";

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mobile-header">
      <div className="mobile-header-inner">
        {/* Logo */}
        <Link to="/" className="mobile-logo">
          <img src="/yellow-logo.png" alt="HJ Sysweb" />
        </Link>

        {/* Dots Button */}
        <button
          className="mobile-dots"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
        >
          <span />
          <span />
          <span />
          <span className="accent" />
        </button>
      </div>

      {/* Overlay menu */}
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
