"use client";
import React from "react";
import { Link } from "react-router-dom";
import "./../style/thankyou.css"

export default function ThankYouPage() {
  return (
    <section className="thankyou-section">
      <div className="thankyou-container">
        {/* Left: Mascot */}
        <div className="thankyou-owl">
          <img
            src="/thank-you-owl.webp"
            alt="Thank You Mascot"
            className="owl-image"
            loading="eager"
          />
        </div>

        {/* Right: Message Box */}
        <div
  className="thankyou-box"
  style={{
    background: 'url("/Union.png") no-repeat center / 100% 100%',
  }}
>
          <div className="thankyou-box-inner">
            <div className="thankyou-heading">
              <img
                src="/thank-you-text.png"
                alt="Thank You Text"
                className="thankyou-heading-img"
              />
            </div>

            <p className="thankyou-text">
              We deliver the best problem-solving solutions for our clients and
              provide the finest finished products — both now and in the future.
            </p>

            <Link to="/" className="thankyou-btn btn btn-primary">
              Back to Home Page →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
