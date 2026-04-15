"use client";
import "./../components/style/tools.css";

const tools = [
  { name: "Figma", src: "/tools/figma.webp" },
  { name: "Adobe", src: "/tools/adobe.webp" },
  { name: "WordPress", src: "/tools/wordpress.webp" },
  { name: "React", src: "/tools/react.webp" },
  { name: "Shopify", src: "/tools/shopify.webp" },
  { name: "WooCommerce", src: "/tools/woo-commerce.webp" },
  { name: "Flutter", src: "/tools/flutter.webp" },
  { name: "AWS", src: "/tools/aws.webp" },
  { name: "Firebase", src: "/tools/firebase.webp" },
  { name: "Semrush", src: "/tools/semrush.webp" },
  { name: "Google Analytics", src: "/tools/ga.webp" },
];

export default function ToolsSection() {
  return (
    <section className="tools-wrap mt">
      <div className="tools-inner">
        <header className="tools-head">
          <h2 className="h2">Tools That craft your success journey</h2>
          <p className="p">
         We leverage powerful design, development, and analytics technologies to create seamless digital experiences that drive innovation, efficiency, and measurable growth.
          </p>
        </header>

        <ul className="tools-grid">
          {tools.map((t) => (
            <li className="tool-card" key={t.name}>
              <div className="tool-icon">
                <img src={t.src} alt={t.name} loading="lazy" />
              </div>
              <span className="tool-name">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
