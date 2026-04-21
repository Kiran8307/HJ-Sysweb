"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SubServiceStack({ items, palette, serviceId }) {
  const [hovered, setHovered] = useState(-1);

  // // sync hash when hovering
  useEffect(() => {
    if (hovered < 0 || !items[hovered]) return;
    // const id = items[hovered].id;
    //     history.replaceState(null, "", `#${id}`);
  }, [hovered, items]);

  return (
    <div className="ss-stack" role="list">
      {items.map((it, i) => {
        const isOpen = i === hovered;
        const col = palette[i % palette.length];
        return (
          <section
            key={it.id}
            className={`ss-item ${isOpen ? "open" : ""}`}
            style={{ "--bg": col.bg, "--edge": col.edge }}
            onClick={() => setHovered(isOpen ? -1 : i)}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
          >
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

            <div id={`panel-${it.id}`} role="tabpanel" className="ss-body">
              <div className="ss-body-inner">
                <div className="ss-copy">
                  {it.points?.length ? (
                    <ul className="ss-list">
                      {it.points.map((p, idx) => {
                        const colonIndex = p.indexOf(':');
                        if (colonIndex !== -1) {
                          const boldPart = p.slice(0, colonIndex + 1);
                          const rest = p.slice(colonIndex + 1);
                          return (
                            <li key={idx}><strong>{boldPart}</strong>{rest}</li>
                          );
                        }
                        return <li key={idx}>{p}</li>;
                      })}
                    </ul>
                  ) : null}
                  {it.desc ? <p className="ss-desc">{it.desc}</p> : null}
                </div>

                <div className="ss-art">
                  {it.image ? <img src={it.image} alt={it.title} /> : null}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
