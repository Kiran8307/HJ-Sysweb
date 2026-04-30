"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./sticky-stack.module.css";
import { industriesData } from "./industriesData";

const COLORS = [
  "#0f172a", // deep slate
  "#2b1653", // purple
  "#3b0f0f", // wine
  "#053a34", // teal
  "#3a2407", // bronze
  "#162a12", // green
  "#3b1b04", // orange
  "#132b3a", // cyan
];

export default function StickyStack({ items = industriesData, isInner = false }) {
  return (
    <section className="mt section-top">
      <div
        className={styles.stack}
        style={{ "--count": items.length }}
      >
        {items.map((card, i) => {
          const isEven = i % 2 === 0;
          const tint = card.tint || COLORS[i % COLORS.length];

          const cardVariants = {
            hidden: { 
              opacity: 0, 
              y: 50
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: "easeOut"
              }
            }
          };


          const innerContent = (
            <>
              <div className={styles.media}>
                <img
                  src={card.img || "/Industry/fashion.webp"} // fallback image
                  alt={card.title}
                  className={styles.img}
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{card.title}</h3>
                <p className={styles.desc}>
                  {card.desc}
                </p>
              </div>
            </>
          );

          const innerStyle = isInner ? {
            position: 'relative',
            top: 'auto',
            marginTop: i === 0 ? '0px' : '60px',
            perspective: '1500px',
            "--tint": tint,
            "--idx": i
          } : {
            "--tint": tint,
            "--idx": i
          };

          const ArticleComponent = isInner ? motion.article : "article";
          const motionProps = isInner ? {
            initial: "hidden",
            whileInView: "visible",
            whileHover: { 
              scale: 1.05, 
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.6)",
              transition: { type: "spring", stiffness: 400, damping: 20 }
            },
            viewport: { once: false, amount: 0.15 },
            variants: cardVariants
          } : {};

          return (
            <ArticleComponent
              key={card.title}
              className={`${styles.card} ${
                isEven ? styles.left : styles.right
              }`}
              style={innerStyle}
              {...motionProps}
            >
              {!isInner && card.id ? (
                <Link 
                  to={`/industries-we-serve/${card.id}`}
                  className={`${styles.inner} stack-inner`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {innerContent}
                </Link>
              ) : (
                <div 
                  className={`${styles.inner} stack-inner`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {innerContent}
                </div>
              )}
            </ArticleComponent>
          );
        })}
      </div>
    </section>
  );
}
