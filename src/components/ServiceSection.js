"use client";
import Slider from "react-slick";
import { useEffect, useState, useMemo } from "react";
import "./../components/style/servicesection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  { title: "Branding Services", img: "/service-inner/branding-services/Branding Services.webp" },
  { title: "Creative Advertising", img: "/service-inner/creative-advertising/Creative-Advertising.webp" },
  { title: "Digital Marketing", img: "/service-inner/digital-marketing/Digital-Marketing.webp" },
  { title: "Performance Marketing", img: "/service-inner/performance-marketing/Performance-Marketing.webp" },
  { title: "Website Development", img: "/service-inner/website-development/Website Development.webp" },
  { title: "E-commerce Solutions", img: "/service-inner/ecommerce-solutions/E-commerce Solutions.webp" },
  { title: "Mobile App Development", img: "/service-inner/mobile-app-development/Mobile-App-Development.webp" },
  { title: "Growth Marketing", img: "/service-inner/growth-marketing/Growth-Marketing.webp" },
];

function ServiceCard({ title, img, index }) {
  const titleClass = index % 2 === 0 ? "title-bottom" : "title-top";
  return (
    <article className={`service-card ${titleClass}`}>
      <div className="service-body">
        <h3 className="service-title">{title}</h3>
      </div>
      <div className="service-media">
        <svg className="service-ring" viewBox="0 0 418 418" aria-hidden="true">
          <rect className="service-ring-track" x="1" y="1" width="417" height="417" rx="20" ry="20" />
          <rect className="service-ring-runner" x="1" y="1" width="417" height="417" rx="20" ry="20" pathLength="100" />
        </svg>
        <img src={img} alt={title} />
      </div>
    </article>
  );
}

export default function ServiceSection() {
  // 👇 we control slidesToShow ourselves
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const updateSlides = () => {
      const w = window.innerWidth;
      if (w < 768) {
        setSlidesToShow(1);
      } else if (w < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlides(); // run once on mount (this fixes mobile refresh)
    setReady(true);

    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = useMemo(
    () => ({
      rtl: false,
      dots: true,
      arrows: true,
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnHover: true,
      slidesToShow,
      slidesToScroll: 1,
      // we can keep responsive empty now, because we're controlling it
      responsive: [],
    }),
    [slidesToShow]
  );

  return (
    <section className="service mt">
      <div className="spider-vector">
        <img src="/service/small-vector.png" alt="" className="spider-small-image" />
        <img src="/service/big-vector.png" alt="" className="spider-big-image" />
      </div>

      <div className="service-head">
        <h2>
          What We <span className="highlight-word">Offers</span>
        </h2>
        <p>We plan, build, and scale marketing that turns traffic into leads, sales, and ROI.</p>
      </div>

      <div className="service-grid">
        {ready ? (
          <Slider className="service-slider" {...settings}>
            {services.map((s, i) => (
              <div key={i} className="slide-pad">
                <ServiceCard title={s.title} img={s.img} index={i} />
              </div>
            ))}
          </Slider>
        ) : (
          <div style={{ height: 420 }} />
        )}
      </div>

      <div className="spark-vector">
        <img src="/sprak-service.gif" alt="" className="spark-vector-image" />
      </div>
    </section>
  );
}
