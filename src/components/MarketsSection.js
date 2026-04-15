"use client";
import "./../components/style/markets.css";

const markets = [
  { code: "IND", name: "India",    img: "/ind.webp" },
  { code: "USA", name: "United States", img: "/usa.webp" },
  { code: "UK", name: "United Kingdom", img: "/uk.webp" },
  { code: "UAE", name: "United Arab Emirates", img: "/uae.webp" },
  { code: "CAD", name: "Canada",   img: "/cad.webp" },  
  { code: "NZ",  name: "New Zealand", img: "/nz.webp" },
  { code: "AUS", name: "Australia", img: "/aus.webp" },
];

export default function MarketsSection() {
  return (
    <section className="markets mt section-top">

      <ul className="market-list" >
        {markets.map((m) => (
          <li key={m.code} className="market-item">
            <div className="flag-pill" tabIndex={0} aria-label={m.name}>
              <img className="flag-icon" src={m.img} alt={m.name} />
              <span className="flag-code">{m.code}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
