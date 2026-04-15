"use client";
import "./sticky-contact.css"

export default function StickyContacts() {
  return (
    <div className="fab-stack" aria-label="Quick contact">
      {/* WhatsApp */}
      <a
        className="fab fab-wa"
        href="https://wa.me/919428435276" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <img src="/whatsapp.png" alt="" />
        <span className="ripples" aria-hidden="true"></span>
        <span className="ripples delay" aria-hidden="true"></span>
      </a>

      {/* Email */}
      <a
        className="fab fab-mail"
        href="mailto:marketing@hjsysweb.com"
        aria-label="Email us"
        title="Email us"
      >
        <img src="/email.png" alt="" />
        <span className="ripples" aria-hidden="true"></span>
        <span className="ripples delay" aria-hidden="true"></span>
      </a>
    </div>
  );
}
