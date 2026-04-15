
import { motion, useReducedMotion } from "framer-motion";
// import Image from "next/image";
import "./../../components/about-us/about-section.css";

export default function AboutSection({
  title = "About Us",
  desc = "We help businesses get more enquiries and sales from their website, Google, and ads. Our work is measured in real results, calls, forms, and orders.",
  contain1 = "We learn about your business and your customers. Then we fix the basics, make the site fast, easy to use, and properly tracked. After that, we build clear campaigns so people can find you, trust you, and buy from you.",
  contain2 = "We work in weekly steps. We try different messages and pages, keep what brings results, and stop what doesn’t. You see your numbers on a simple dashboard, so you always know what’s working and what we’ll do next.",
  bullets = [
    "Clear plan: a 90-day roadmap with goals we agree on together.",
    "Fast execution: updates every week; no long waits.",
    "Real results: more calls, more leads, lower marketing waste.",
    "Full transparency: plain-English reports you can understand at a glance.",
  ],
  imageSrc = "/about-page/about-us-section.webp",
}) {
  const prefersReduced = useReducedMotion();

  // Variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : -32 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.2, 0.9, 0.2, 1] },
    },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : 32 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.2, 0.9, 0.2, 1] },
    },
  };
  const popInUnderline = {
    hidden: {
      opacity: 0,
      y: prefersReduced ? 0 : 8,
      scaleX: prefersReduced ? 1 : 0.6,
      transformOrigin: "center",
    },
    show: {
      opacity: 1,
      y: 0,
      scaleX: 1,
      transition: { duration: 0.55, delay: 0.15 },
    },
  };
  const listParent = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };
  const listItem = {
    hidden: { opacity: 0, x: prefersReduced ? 0 : -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const decorBottomLeft = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 16 },
    show: {
      opacity: 0.8,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="about-wrap mt">
      {/* background + decorative vector */}
      <div className="about-bg" aria-hidden>
        <motion.img
          src="/testimonial/testimonial-yellow.png"
          alt=""
          className="about-decor-img"
          aria-hidden="true"
          variants={decorBottomLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        />
      </div>

      <div className="about-container">
        {/* Header */}
        <header className="about-header">
          <motion.h2
            className="about-title"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {title}
            {/* underline as image */}
            <motion.div
              variants={popInUnderline}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src="/blog/title-vector.png" // put your underline image here
                alt=""
                width={220}
                height={20}
                className="about-underline"
                priority
              />
            </motion.div>
          </motion.h2>

          <motion.p
            className="about-desc"
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {desc}
          </motion.p>
        </header>

        {/* Content */}
        <div className="about-grid">
          <motion.div
            className="about-contain"
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p>{contain1}</p>
            <p>{contain2}</p>

            <motion.ul
              className="about-list"
              variants={listParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {bullets.map((b, i) => (
                <motion.li key={i} variants={listItem}>
                  <img
                    src="/about-page/tick-circle.png"
                    alt="tick"
                    className="tick"
                    aria-hidden="true"
                  />
                  <span>{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="about-image"
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <img
              src={imageSrc}
              alt="Our team collaborating"
              className="about-img"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
