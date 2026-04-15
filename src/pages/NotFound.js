"use client";
import React from "react";
import { Link } from "react-router-dom";
import "./../style/not-found.css"

export default function NotFound() {
  return (
    <section className="nf-section">
      {/* floating vectors */}
      <div className="spider-vector-nf" aria-hidden>
        <img
          src="/service/small-vector.png"
          alt=""
          className="spider-small-image"
        />
        <img
          src="/service/big-vector.png"
          alt=""
          className="spider-big-image"
        />
      </div>

      <div className="nf-wrap">
        <img
          src="/thank-you/not-found.png"
          alt="404 - Page not found"
          className="nf-hero-img"
          loading="eager"
        />

        <p className="nf-text">
          We deliver the best problem-solving solutions for our clients and
          provide a fine finishing product in the present and future.
        </p>

        <Link to="/" className="nf-btn btn btn-primary">
          Go Home →
        </Link>
      </div>
    </section>
  );
}
