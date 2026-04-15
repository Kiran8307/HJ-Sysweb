"use client";
import { useEffect, useState } from "react";


const IMAGES_A = [
  "/home/aani-system.webp",
  "/home/Akshara-beauty-&-Hair.webp",
  "/home/ayurkhyati.webp",
  "/home/clean-sure.webp",
  "/home/flowercity-pharmacy.webp",
  "/home/gokul-children-hospital.webp",
  "/home/hbk-photography.webp",
  "/home/kesarinandan.webp",
  "/home/kp-accounting.webp",
  "/home/Life-Style-Branding.webp",
  "/home/Luigis-Pizzarama.webp",
  "/home/Manhatten-Bagel.webp",
  "/home/mahavir-eye-hospitakl.webp"
];

const IMAGES_B = [
  "/home/mandurah-cafe.webp",
  "/home/maa-gayatri-orthocare.webp",
  "/home/nachiketa-school.webp",
  "/home/navya-by-nirali.webp",
  "/home/Pizza-In-Horsham.webp",
  "/home/raghubhai.webp",
  "/home/rudrika-clinic.webp",
  "/home/sangopal-hospital.webp",
  "/home/shah-and-assocaites.webp",
  "/home/social-sadhu.webp",
  "/home/tadstandoori.webp",
  "/home/vasco.webp",
  "/home/vanue.webp"
];


function Lane({ items, dir = "down", className = "" }) {
  const doubled = [...items, ...items];
  return (
    <div className={`lane ${className}`}>
      <div className={`lane-track ${dir === "down" ? "scroll-down" : "scroll-up"}`}>
        {doubled.map((src, i) => (
          <div className="card-tilt" key={`${dir}-${i}`}>
            <img src={src} alt={`work ${i}`} width={460} height={260} priority={i < 2} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroScroller() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // For mobile → merge both arrays and scroll down in one lane
  if (isMobile) {
    const merged = [...IMAGES_A, ...IMAGES_B];
    return (
      <div className="scroller mobile-single">
        <Lane items={merged} dir="down" />
      </div>
    );
  }

  // Default (desktop) → two lanes opposite directions
  return (
    <div className="scroller">
      <Lane items={IMAGES_A} dir="down" className="lane-a" />
      <Lane items={IMAGES_B} dir="up" className="lane-b" />
    </div>
  );
}
