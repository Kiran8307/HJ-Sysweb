import React from "react";
import { Helmet } from "react-helmet-async";

/**
 * <Seo /> — reusable metadata component for all pages
 * Props:
 * - title (string)               Page title
 * - description (string)         Meta description
 * - canonical (string)           Absolute or relative URL (we’ll prefix if relative)
 * - ogImage (string)             Absolute/relative URL for og:image
 * - robots (string)              e.g., "index,follow"
 * - siteName (string)            e.g., "HJ Sysweb"
 */
export default function Seo({
  title = "HJ Sysweb",
  description = "We help businesses grow with SEO, conversion-ready websites, and performance ads.",
  canonical = "/",
  ogImage = "/hj-favicon.svg",
  robots = "index,follow",
  siteName = "HJ Sysweb",
}) {
  // Prefer REACT_APP_SITE_URL if present, fallback to production domain.
  const SITE_URL =
    process.env.REACT_APP_SITE_URL?.replace(/\/$/, "") || "https://www.hjsysweb.com";

  const abs = (url) =>
    /^https?:\/\//i.test(url) ? url : `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`;

  const pageUrl = abs(canonical);
  const ogImgUrl = abs(ogImage);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={ogImgUrl} />

      {/* Twitter (optional) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImgUrl} />
    </Helmet>
  );
}
