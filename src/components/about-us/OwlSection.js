import { motion } from "framer-motion";
// import Image from "next/image";
import "./owl-section.css";

export default function OwlSection({
  centerImage = "/about-page/mission-owl.png",
  cards = [
    {
      title: "RESULTS OVER HYPE",
      body: "We plan less, deliver more. Our filter is simple: will this bring enquiries or sales? If yes, it ships. If not, it waits. Clear priorities, accountable work, and growth you can measure.",
      icon: "/about-page/mission.gif",
    },
    {
      title: "SPEED & DISCIPLINE",
      body: "We keep projects moving with weekly sprints and clear priorities. You get visible deliveries each week and a transparent monthly summary of progress, learnings, and next steps - so momentum never dips and surprises stay off your calendar.",
      icon: "/about-page/vision.gif",
    },
    {
      title: "DATA YOU CAN TRUST",
      body: "We set up clean tracking and simple dashboards, so every decision starts with facts. No messy reports, no guesswork. You’ll know what’s working, what’s not, and where to put your next rupee.",
      icon: "/about-page/value.gif",
    },
    {
      title: "ALWAYS-ON SUPPORT",
      body: "You get direct access to the team - no layers. We reply fast, fix blockers, and bring proactive ideas before you ask. Regular check-ins, shared WhatsApp, and clear next steps so momentum stays up even between meetings.",
      icon: "/about-page/client.gif",
    },
  ],
}) {
  const popUp = {
    hidden: { opacity: 0, scale: 0.6 },
    show: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: i * 0.3, ease: [0.2, 0.9, 0.2, 1] },
    }),
  };

  return (
    <section className="owl-wrap mt">
      {/* background circles */}
      <div className="owl-bg" aria-hidden>
        <span className="circle c1" />
        <span className="circle c2" />
        <span className="circle c3" />
      </div>

      <div className="owl-container">
        {/* center owl */}
        <motion.div
          className="owl-center"
          initial={{ scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src={centerImage} alt="Owl mascot"  />
        </motion.div>

        {/* four cards */}
        <div className="owl-cards">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className={`owl-card pos-${i}`}
              custom={i}
              variants={popUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="owl-card-header">
                <img src={c.icon} alt="" className="owl-card-icon" />
                <h4 className="owl-card-title">{c.title}</h4>
              </div>
              <p className="owl-card-body">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
