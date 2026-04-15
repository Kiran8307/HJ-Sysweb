import { Link } from "react-router-dom";
import { Fragment } from "react";
import "./../components/style/breadcrumbhero.css";

export default function BreadcrumbHero({ title, crumbs, bgImage, className = "" }) {
  return (
    <section className={`breadcrumb-hero ${className} mt`}>
      {/* BG */}
      <div className="breadcrumb-bg">
        <img
          src={bgImage}
          alt={title}
          className="breadcrumb-bg-img"
        />
      </div>

      {/* Overlay / vector */}
      <div className="breadcrumb-overlay">
        <img src="/service/big-vector.png" alt="" className="breadcrumb-spin-image" />
      </div>

      {/* Content */}
      <div className="breadcrumb-inner">
        <h1 className="breadcrumb-title">{title}</h1>
        <nav aria-label="Breadcrumb" className="breadcrumb-nav">
          {crumbs.map((c, i) => (
            <Fragment key={c.label + i}>
              {i > 0 && <span className="breadcrumb-sep">›</span>}
              {c.href ? (
                <Link to={c.href} className="breadcrumb-link">
                  {c.label}
                </Link>
              ) : (
                <span className="breadcrumb-text">{c.label}</span>
              )}
            </Fragment>
          ))}
        </nav>
      </div>
    </section>
  );
}
