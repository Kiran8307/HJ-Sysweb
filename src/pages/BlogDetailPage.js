import { useMemo, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Helmet } from "react-helmet-async";

import { GET_POST_BY_SLUG } from "./../graphql/GET_POST_BY_SLUG";
import { GET_POSTS } from "./../graphql/GET_POSTS";
import { Spin } from "antd";
import BreadcrumbHero from "../components/BreadcrumbHero";
// import HangingBoard from "../components/BreadCrumb/HangingBoard";

import authorBios from "./../data/authorBios.json";
import "./../style/blog-single.css";

/**
 * Build a Table of Contents and inject stable IDs into headings
 * using the browser's DOMParser (cheerio is server-only).
 */
function buildTOCAndIds(html) {
  if (!html) return { updatedHTML: "", toc: [] };

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  // Remove any pre-existing TOC blocks commonly used in WP
  const selectorsToRemove = [
    ".table-of-content",
    ".table-of-contents",
    ".toc",
    "#table-of-content",
    "#table-of-contents",
  ];
  selectorsToRemove.forEach((sel) =>
    doc.querySelectorAll(sel).forEach((el) => el.remove()),
  );

  const headings = doc.querySelectorAll("h2, h3");
  const toc = [];

  headings.forEach((el) => {
    const text = (el.textContent || "").trim();
    if (!text) return;

    // generate slug id
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    // if id already exists on page, de-dupe by appending a counter
    let finalId = id;
    let n = 2;
    while (doc.getElementById(finalId)) {
      finalId = `${id}-${n++}`;
    }
    el.setAttribute("id", finalId);

    toc.push({ id: finalId, text, level: el.tagName.toLowerCase() }); // h2/h3/h4/h5
  });

  return { updatedHTML: doc.body.innerHTML, toc };
}

const SITE_URL = "https://hjsysweb.com/";

export default function BlogDetailPage() {
  const { slug } = useParams();

  const {
    data: postRes,
    loading: postLoading,
    error: postError,
    refetch: refetchPost,
  } = useQuery(GET_POST_BY_SLUG, {
    variables: { slug },
    fetchPolicy: "no-cache",
  });

  const {
    data: recentRes,
    loading: recentLoading,
    error: recentError,
  } = useQuery(GET_POSTS, {
    variables: { first: 6 },
    fetchPolicy: "cache-first",
  });

  const post = postRes?.post;
  const recentPosts = recentRes?.posts?.nodes ?? [];

  // Build TOC + inject heading IDs (memoized for performance)
  const { updatedHTML, toc } = useMemo(() => {
    return buildTOCAndIds(post?.content || "");
  }, [post?.content]);

  // Optional: Smooth-scroll to hash if present after content mounts
  useEffect(() => {
    if (!updatedHTML) return;
    if (window.location.hash) {
      const id = window.location.hash.replace(/^#/, "");
      const target = document.getElementById(id);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 0);
      }
    }
  }, [updatedHTML]);

  const handleTOCClick = (e, id) => {
    e.preventDefault();

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // optional: update URL without jump
      // window.history.pushState(null, "", `#${id}`);
    }
  };

  if (postLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <Spin
          size="large"
          indicator={
            <span
              className="ant-spin-dot ant-spin-dot-spin"
              style={{
                width: "50px",
                height: "50px",
                display: "inline-block",
              }}
            >
              <span
                className="ant-spin-dot-item"
                style={{ backgroundColor: "#f4c542" }}
              />
              <span
                className="ant-spin-dot-item"
                style={{ backgroundColor: "#f4c542" }}
              />
              <span
                className="ant-spin-dot-item"
                style={{ backgroundColor: "#f4c542" }}
              />
              <span
                className="ant-spin-dot-item"
                style={{ backgroundColor: "#f4c542" }}
              />
            </span>
          }
        />
      </div>
    );
  }
  if (postError || !post) {
    return (
      <div className="container" style={{ color: "#fff", padding: 16 }}>
        Failed to load the post.{" "}
        <button onClick={() => refetchPost()}>Retry</button>
      </div>
    );
  }

  // --- Helpers ---
  const stripHtml = (html = "") =>
    html
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const truncate = (s = "", n = 160) =>
    s.length > n ? s.slice(0, n - 1) + "…" : s;

  // --- SEO values (Yoast + fallback) ---
  const yoast = post?.seo; // requires WPGraphQL Yoast SEO or Rank Math plugin bridge
  const metaTitle = yoast?.title || post?.title || "Blog"; // Yoast title → post title → fallback
  const metaDesc =
    yoast?.metaDesc ||
    truncate(stripHtml(post?.excerpt || post?.content || ""), 160); // Yoast desc → excerpt/content

  const authorNode = post?.author?.node;
  const authorSlug = authorNode?.slug || "";
  const jsonAuthor = (authorSlug && authorBios[authorSlug]) || {};

  const authorName = authorNode?.name || "Author";

  // JSON-first, then GraphQL, then placeholder
  const authorBio = jsonAuthor.description || authorNode?.description || "—";

  const authorProfileUrl =
    jsonAuthor.profileUrl ||
    `${SITE_URL}/author/${authorSlug || ""}`.replace(/\/$/, "");

  const authorAvatar =
    jsonAuthor.avatarUrl ||
    authorNode?.avatar?.url ||
    "/placeholder-avatar.png";

  return (
    <>
      {/* // --- Helmet SEO block --- */}
      <Helmet>
        {/* 🔹 Title + Meta Description */}
        <title>{metaTitle}</title>
        {metaDesc && <meta name="description" content={metaDesc} />}

        {/* 🔹 Canonical */}
        <link rel="canonical" href={`${SITE_URL}/blogs/${post.slug}`} />

        {/* 🔹 Open Graph (Facebook / LinkedIn) */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        {metaDesc && <meta property="og:description" content={metaDesc} />}
        <meta property="og:url" content={`${SITE_URL}/blogs/${post.slug}`} />
      </Helmet>

      <BreadcrumbHero
        title={
          <span style={{ fontSize: "22px" }} className="breadcrumb-title">
            {post.title}
          </span>
        }
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "/blogs" },
          { label: post.slug },
        ]}
        bgImage="/Breadcrum/two-owl.png"
      />

      {/* <HangingBoard text={post?.title || ""} typingSpeed={25} /> */}

      <section className="blog-detail-container mt">
        {/* LEFT: sticky TOC */}
        <aside className="table-of-content">
          <h3>Table of Contents</h3>
          <ul>
            {toc.length ? (
              toc.map((item, i) => (
                <li key={i} className={`toc-${item.level}`}>
                  {/* <a href={`#${item.id}`}>{item.text}</a> */}
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleTOCClick(e, item.id)}
                  >
                    {item.text}
                  </a>
                </li>
              ))
            ) : (
              <li>No sections available</li>
            )}
          </ul>
        </aside>

        {/* CENTER: blog content */}
        <div>
          <article
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: updatedHTML }}
          />
          {authorNode && (
            <section className="author-box" aria-label="About the author">
              <img
                className="author-avatar"
                src={authorProfileUrl ? authorProfileUrl : authorAvatar}
                alt={`${authorName} avatar`}
                loading="lazy"
              />
              <div className="author-meta">
                <h4 className="author-name">{authorName}</h4>
                <p className="author-bio">{authorBio}</p>
              </div>
            </section>
          )}
        </div>

        {/* RIGHT: sticky recent posts + 300px image */}
        <aside className="right-rail">
          <div className="right-sticky">
            <div className="aside-card recent-card">
              <h3 className="aside-heading">Recent Posts</h3>
              <ul className="recent-list">
                {recentLoading && <li>Loading…</li>}
                {recentError && <li>Failed to load recent posts</li>}
                {!recentLoading &&
                  !recentError &&
                  recentPosts.map((rp, i) => {
                    const href = `/blogs/${rp.slug}`;
                    return (
                      <li key={rp.slug || i} className="recent-item">
                        <Link to={href} className="recent-link">
                          <span className="recent-title">{rp?.title}</span>
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>

            {/* 300px promo/image block */}
            <a
              href="/contact-us"
              className="promo-card"
              aria-label="Contact us"
            >
              <img src="/blog/blog-single.png" alt="Get expert help" />
              <div className="promo-overlay">
                <strong>Talk to Our Strategist</strong>
              </div>
            </a>
          </div>
        </aside>
      </section>
    </>
  );
}
