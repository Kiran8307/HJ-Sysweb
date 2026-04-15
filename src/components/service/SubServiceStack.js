"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SubServiceStack({ items = [], palette = [], serviceId }) {
  const [hovered, setHovered] = useState(-1);

  // ✅ sync hash when hovering (now properly used)
  useEffect(() => {
    if (hovered < 0 || !items[hovered]) return;

    const id = items[hovered].id;
    window.history.replaceState(null, "", `#${id}`);
  }, [hovered, items]);

  return (
    <div className="ss-stack">
      {items.map((it, i) => {
        const isOpen = i === hovered;
        const col = palette[i % palette.length] || {};

        return (
          <section
            key={it.id}
            className={`ss-item ${isOpen ? "open" : ""}`}
            style={{
              "--bg": col.bg || "#111",
              "--edge": col.edge || "#333",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
          >
            {/* HEADER */}
            <div className="ss-head">
              <h1 className="ss-title">{it.title}</h1>

              <h6>
                <Link
                  to={`/services/${serviceId}/${it.id}`}
                  className="svc-card-link"
                >
                  View More
                </Link>
              </h6>
            </div>

            {/* BODY */}
            <div id={`panel-${it.id}`} className="ss-body">
              <div className="ss-body-inner">

                {/* LEFT CONTENT */}
                <div className="ss-copy">
                  {it.points?.length > 0 && (
                    <ul className="ss-list">
                      {it.points.map((p, idx) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>
                  )}

                  {it.desc && <p className="ss-desc">{it.desc}</p>}

                  <div className="ss-descmore">
                    <p>
                      We deliver best problem solving solution for our client
                      and provide finest finishing product in present and
                      upcoming future. We deliver best problem solving solution
                      for our client and provide finest finishing product in
                      present and upcoming future.
                    </p>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="ss-art">
                  {it.image && (
                    <img
                      src={it.image}
                      alt={it.title}
                      loading="lazy"
                    />
                  )}
                </div>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}