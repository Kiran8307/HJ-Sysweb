import React, { useEffect, useRef, useState, Suspense, lazy } from "react";
import "./../components/style/stats.css";
import "odometer/themes/odometer-theme-default.css";

// ⬇️ Replace next/dynamic with React.lazy
const Odometer = lazy(() => import("react-odometerjs"));

const items = [
  { value: 178, label: "Organic Growth", prefix: "+", suffix: "%" },
  { value: 92, label: "Core Web Vitals Pass", suffix: "%" },
  { value: 312, label: "Leads/Mo", prefix: "+" },
  { value: 34, label: "To First SEO Wins", suffix: " Days" },
];

function StatCard({ value, label, prefix = "", suffix = "" }) {
  const triggerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const el = triggerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setCurrent(value), 140);
    return () => clearTimeout(t);
  }, [visible, value]);

  return (
    <div className="stat-card">
      <svg className="ring" viewBox="0 0 250 200" aria-hidden="true">
        <rect className="ring-track" x="1" y="1" width="248" height="198" rx="20" ry="20" />
        <rect className="ring-runner" x="1" y="1" width="248" height="198" rx="20" ry="20" pathLength="100" />
      </svg>

      <div className="stat-content" ref={triggerRef}>
        <div className="stat-value">
          {prefix ? <span className="stat-prefix">{prefix}</span> : null}

          {/* ⬇️ Lazy-loaded Odometer; shows plain number while loading */}
          <Suspense fallback={<span>{current.toLocaleString()}</span>}>
            <Odometer value={current} duration={5000} format="(,ddd)" />
          </Suspense>

          {suffix ? <span className="stat-suffix">{suffix}</span> : null}
        </div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="stats mt">
      <div className="stats-grid">
        {items.map((it, i) => (
          <StatCard
            key={i}
            value={it.value}
            label={it.label}
            prefix={it.prefix}
            suffix={it.suffix}
          />
        ))}
      </div>
    </section>
  );
}
