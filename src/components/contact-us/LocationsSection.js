import React from "react";
import "./contact-locations.css";

export const LOCATIONS = [
  {
    city: "HJ Sysweb Anand",
    address: [
      "304, Krishna Aaron, opp. Sanket India, Anand, Gujarat – 388001",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9143.827657046828!2d72.93986908641767!3d22.564270880426577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e9da723ad89%3A0xbe2afabdbf2c2755!2sHJ%20Sysweb!5e1!3m2!1sen!2sus!4v1760691146330!5m2!1sen!2sus",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=HJ+Sysweb,+Anand,+Gujarat+388001",
    theme: "gold",
  },
  {
    city: "HJ Sysweb Ahmedabad",
    address: [
      "Karmachari Nagar – 1, Ahmedabad - 380061",
      // "Opp. Rannapark, Ghatlodia – 380061, Ahmedabad",
    ],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4555.133566582723!2d72.54186187603725!3d23.06509371473866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832b76a9480d%3A0xeb4a32930759b005!2sHJ%20Sysweb!5e1!3m2!1sen!2sus!4v1760691176073!5m2!1sen!2sus",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=HJ+Sysweb,+Ahmedabad,+Gujarat+380061",
    theme: "plum",
  },
];


export default function LocationsSection() {
  return (
    <section className="loc mt">
      <div className="loc-head">
        {/* <h2>Get Connect</h2> */}
        <p className="p">
       Find us here - we’re happy to meet in person.
        </p>
      </div>

      <div className="loc-grid">
        {LOCATIONS.map((l, i) => (
          <article className={`loc-card loc-${l.theme}`} key={i}>
            <h3 className="loc-title">{l.city}</h3>

            <div className="map-wrap">
              <iframe
                src={l.mapSrc}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`${l.city} map`}
              />
            </div>

            <div className="loc-address ">
              {l.address.map((line, idx) => (
                <a
                  key={idx}
                  href={l.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="loc-cta"
                >
                  {line}
                </a>
              ))}
            </div>

            {/* <a
              className="loc-cta"
              href={l.directions}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps →
            </a> */}
          </article>
        ))}
      </div>
    </section>
  );
}
