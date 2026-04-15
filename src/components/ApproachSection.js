"use client";
import "./../components/style/approach.css";

const STEPS = [
  {
    title: "Research",
    text: "We study your market, competitors, and data to spot demand, gaps, and quick wins-then set targets for traffic and Cost Per Lead.",
    img: "/approach/research.gif", // replace with your image
  },
  {
    title: "Process",
    text: "A 90-day plan with priorities, tracking, and clear KPIs. We fix the foundations, build key pages, and line up tests.",
    img: "/approach/idea.gif", // replace with your image
  },
  {
    title: "Deliver",
    text: "Launch SEO, ads, and CRO experiments. Scale what works, cut waste, and report the impact on leads, revenue, and ROAS.",
    img: "/approach/flying-bird.gif", // replace with your image
  },
];

export default function ApproachSection() {
  return (
    <section className="approach mt">
      <div className="approach-head">
        <h2>Our Approach </h2>
         <h3>From Insight to Impact</h3> 
        <p className="p">
   Research → 90-day plan → launch & iterate. We scale what works and cut what doesn’t.
        </p>
      </div>

      <div className="approach-grid">
        {STEPS.map((s, i) => (
          <div className="approach-card" key={i}>
            <div className="approach-img">
              <img src={s.img} alt={s.title} />
            </div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
