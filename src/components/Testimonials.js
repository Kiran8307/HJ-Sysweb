"use client";
import { useEffect, useRef } from "react";
import "./../components/style/testimonials.css";

const TESTIMONIALS = [
  {
    name: "Jay Patel -USA",
    avatar: "/user-1.webp",
    stars: 5,
    text: `“Our online orders and walk-ins are both up.”
HJ Sysweb rebuilt our site and kicked off digital marketing that actually works. We’re seeing steady traffic, more calls, and more families in the restaurant. Super responsive team and clear reporting.
-Owner, Main Streets Pizzeria & Grille (Horsham, PA) `,
  },
  {
    name: "Jay Patel -USA",
    avatar: "/user-2.webp",
    stars: 4.5,
    text: `“They turned our website into a sales helper.”
From design to SEO and ads, HJ Sysweb made it easy. Visibility is up, and the footfall shows it. Honest advice, quick fixes, real results. - Owner, Luigi’s Pizzarama II (Elkins Park, PA)`,
  },
  {
    name: "Nirali Patel -IND",
    avatar: "/user-7.webp",
    stars: 5,
    text: `“Perfect partner for a growing fashion brand.”
They built a beautiful site for Navya and drove the right traffic. We’re getting more enquiries and sales for our handcrafted chaniya cholis, exactly the audience we wanted.-Founder, Navya by Nirali`,
  },
  {
    name: "Kirtan Shah -USA",
    avatar: "/user-4.webp",
    stars: 5,
    text: `“Professional, reliable, and ROI-focused.”
HJ Sysweb redesigned our website and executed SEO the right way. Rankings climbed, leads improved, and their updates are always clear and on time. - Managing Partner, Shah & Associates CPA`,
  },
  // duplicate a few for demo length
  {
    name: "Hetal Patel -NZ",
    avatar: "/user-5.webp",
    stars: 5,
    text: `“More calls, more bookings, happier clients.”
 They optimized our website and Google Business Profile. We now get regular calls from new clients and increased footfall at the salon. I highly recommend the team. -Owner, Akshara Beauty & Hair (Hamilton, NZ)`,
  },
  {
    name: "Nishant Patel - USA",
    avatar: "/user-6.webp",
    stars: 4.5,
    text: `“Launch done right, now scaling with marketing.”
HJ Sysweb delivered a clean, high-converting site for our Gen-1 Bluetooth speakers. Great foundation, smooth communication, and we’ve already started SEO and ads to grow faster. - Owner, Lifestyle Branding`,
  },
  {
    name: "Rushi Kothia -USA",
    avatar: "/user-3.webp",
    stars: 5,
    text: ` "Smooth launch, steady leads.
    HJ Sysweb built our website and set up digital campaigns the right way. Calls and form enquiries are consistent now, and their reporting makes it easy to see what’s working."`,
  },
  {
    name: "Ketul Patel - IND",
    avatar: "/user-8.webp",
    stars: 5,
    text: `"Design + SEO that actually moves enquiries.”
Our architecture firm needed a premium site and local visibility. HJ Sysweb delivered both faster pages, better rankings, and qualified leads from the right projects."`,
  },
  {
    name: "Nishant Patel - New Jersey",
    avatar: "/user-9.webp",
    stars: 5,
    text: ` “Social media that sells our mornings.”
 From product shoots to reels and offer creatives, the team keeps our feeds active and on-brand. Footfall and online orders reflect it.`,
  },
  {
    name: "Dr. Ruthu Oza - Vadodara",
    avatar: "/user-10.webp",
    stars: 4.5,
    text: `“More visibility, more bookings.”
With website upgrades and digital marketing, our hospital sees steady enquiries from search and Google Business Profile. The team is proactive and data-driven.,`,
  },
  {
    name: "Shailesh Patel - IND",
    avatar: "/user-11.webp",
    stars: 5,
    text: `“Great school presence online.”
They handled our website and social pages with care events, creatives, and updates are always on time. Parents engage more and enquiries have increased.,`,
  },
  {
    name: "Vishal Patel - IND",
    avatar: "/user-12.webp",
    stars: 4,
    text: `“App delivered on scope and schedule.”
HJ Sysweb built our mobile app with solid UX and reliable performance. Communication was clear, and updates rolled out smoothly. Exactly what we needed to scale.`,
  },
];

export default function Testimonials() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const setDist = () => {
      const dist = Math.max(
        0,
        track.scrollHeight / 2 - viewport.clientHeight * 0.1
      );
      track.style.setProperty("--scroll-dist", `${dist}px`);

      // ~40px/sec (comfortable reading)
      const seconds = Math.max(20, Math.round(dist / 40));
      track.style.setProperty("--scroll-duration", `${seconds}s`);
      track.style.setProperty("--has-scroll", dist > 0 ? "1" : "0");
    };

    setDist();
    const ro = new ResizeObserver(setDist);
    ro.observe(viewport);
    ro.observe(track);
    window.addEventListener("load", setDist);
    window.addEventListener("resize", setDist);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", setDist);
      window.removeEventListener("resize", setDist);
    };
  }, []);

  return (
    <section className="twrap mt">
      {/* left decorative vector */}
      <img
        src="/testimonial/testimonial-yellow.png"
        alt=""
        className="t-decor-img"
        aria-hidden="true"
      />

      <div className="thead p">
        <h2>
          What Our {""} <span className="approach-text">Clients</span>
          {""} Say
        </h2>

        <p>
          Real words from real owners - after launches, campaigns, and SEO. See
          how our work turned traffic into enquiries, sales, and ROI
        </p>
      </div>

      <div ref={viewportRef} className="tviewport">
        <div ref={trackRef} className="ttrack">
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <article className="tcard" key={i}>
              <header className="tmeta">
                <img
                  className="tavatar"
                  src={t.avatar}
                  alt={`${t.name} avatar`}
                />
                <strong>{t.name}</strong>
              </header>

              <blockquote className="ttext">“{t.text}”</blockquote>

              <div className="tstars" aria-label={`${t.stars} out of 5`}>
                {renderStars(t.stars)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function renderStars(value) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return Array.from({ length: 5 }, (_, i) => {
    if (i < full) return <span key={i}>★</span>;
    if (i === full && half) return <span key={i}>☆</span>;
    return (
      <span key={i} className="dim">
        ★
      </span>
    );
  });
}
