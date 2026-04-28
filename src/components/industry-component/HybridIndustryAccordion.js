import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./hybrid-accordion.module.css";
import { Link } from "react-router-dom";

export default function HybridIndustryAccordion({ items, parentImg }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  if (!items || items.length === 0) return null;

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {items.map((item, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <motion.div
              key={idx}
              className={`${styles.row} ${isOpen ? styles.open : ""}`}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(isOpen ? -1 : idx)}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: (idx % 8) * 0.05, type: "spring", stiffness: 100 }}
            >
              <div 
                className={styles.bgImage} 
                style={{ backgroundImage: `url(${item.img || parentImg || '/Industry/fashion.webp'})` }}
              ></div>
              <div className={styles.overlay}></div>
              
              <div className={styles.content}>
                <div className={styles.header}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <div className={styles.icon}>{isOpen ? "−" : "+"}</div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={styles.body}
                    >
                      <div className={styles.bodyInner}>
                        <p className={styles.desc}>
                          {item.desc || `We provide specialized end-to-end technical solutions and expert consulting tailored specifically for the ${item.title} sector. Elevate your operational efficiency and drive true digital transformation.`}
                        </p>
                        <Link to="/contact-us" className={styles.btn}>
                          Get Started
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
