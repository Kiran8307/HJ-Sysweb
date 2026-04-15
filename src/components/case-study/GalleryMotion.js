import React from "react";
import { motion } from "framer-motion";

export default function GalleryMotion({ images = [], title = "" }) {
  const fadeFrom = (dir) => ({
    hidden: { opacity: 0, x: dir === "left" ? -40 : 40 },
    show:   { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  });

  return (
    <section className="cs-gallery">
      {images.map((src, i) => {
        const dir = i % 2 === 0 ? "left" : "right";
        return (
          <motion.figure
            key={i}
            className="cs-g-item"
            variants={fadeFrom(dir)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35, margin: "0px 0px -80px 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={src} alt={`${title} gallery ${i + 1}`} />
          </motion.figure>
        );
      })}
    </section>
  );
}
