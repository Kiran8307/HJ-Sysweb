import { motion } from "framer-motion";
// import Image from "next/image";
import "./../../components/about-us/rocket.css";

export default function RocketSection({
  leftText = "Trusted by growth-minded brands across India and worldwide focused on leads, revenue, and ROI.",
  rightText = "You’ll always know what we’re doing, why it matters, and how it grows your business.",
  cards = [
    { title: "Vision", body: "Make marketing simple and profitable for every business we work with." },
    { title: "Mission", body: "Turn website visitors into enquiries and sales with clear plans and weekly action." },
    { title: "Promise", body: "No fluff, only work that lowers Cost Per Lead, lifts conversions, and shows up on your dashboard." },
    { title: "Process", body: "Research → 90-day plan → launch → test → scale winners, stop waste." },
    { title: "Proof", body: "Real case studies, live numbers, and transparent reporting you can trust." },
  ],
  rocketSrc = "/about-page/rocket.gif",
  bgArcSrc = "/roket-yellow.png",       // faint yellow arc (optional)
//   bgDotsSrc = "/vision/bg-dots.png",     // small speckle texture (optional)
 
}) {
  // variants
  const fromBottom = {
    hidden: { opacity: 0, y: 80 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.2, 0.9, 0.2, 1] } }
  };
  const fromLeft = {
    hidden: { opacity: 0, x: -40 },
    show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.2, 0.9, 0.2, 1] } }
  };
  const fromRight = {
    hidden: { opacity: 0, x: 40 },
    show:   { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.2, 0.9, 0.2, 1] } }
  };
// parent container (keeps stagger effect)
const dropParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25 // delay between cards
    }
  }
};

// child card (slow drop from top)
const dropChild = {
  hidden: { opacity: 0, y: -80 },  // start further above
  show: {
    opacity: 1,
    y:40,
    transition: {
      duration: 2,  // 👈 slower drop (1.2s)
      ease: [0.25, 0.8, 0.25, 1] // smooth easing
    }
  }
};

  return (
    <section className="rv-wrap mt">
      {/* background vectors */}
      <div className="rv-bg" aria-hidden>
        {/* <img src={bgDotsSrc} alt="" className="rv-dots" aria-hidden="true" /> */}
        {/* <img src={bgArcSrc} alt="" className="rv-arc" aria-hidden="true" />  */}
        {/* <img src={bgCircleSrc} alt="" className="rv-circle" aria-hidden="true" /> */}
      </div>

      <div className="rv-container">
        {/* top cards row */}
<motion.ul
  className="rv-cards-abs"
  variants={dropParent}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
>
  {cards.slice(0, 5).map((c, i) => (
    <motion.li key={i} className="rv-card" variants={dropChild}>
      <h4 className="rv-card-title">{c.title}</h4>
      <p className="rv-card-body">{c.body}</p>
    </motion.li>
  ))}
</motion.ul>


        {/* middle texts */}
        <div className="rv-mid">
          <motion.p
            className="rv-left-text"
            variants={fromLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {leftText}
          </motion.p>

                  {/* rocket */}
        <motion.div
          className="rv-rocket"
          variants={fromBottom}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={rocketSrc} alt="Rocket"  className="rv-rocket-img"  />
        </motion.div>

          <motion.p
            className="rv-right-text"
            variants={fromRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            {rightText}
          </motion.p>
        </div>


      </div>
    </section>
  );
}
