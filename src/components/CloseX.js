"use client";
import { useState } from "react";

export default function CloseX({ onClick, size = 32, stroke = 5 }) {
  const [closing, setClosing] = useState(false);

  const handleClick = () => {
    // play the spin animation first, then trigger parent close
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClick?.();
    }, 450); // keep in sync with CSS animation duration
  };

  return (
    <button
      aria-label="Close"
      className={`closex ${closing ? "closing" : ""}`}
      onClick={handleClick}
      style={{ "--x-size": `${size}px`, "--x-stroke": `${stroke}px` }}
    >
      {/* four short rounded dashes build the X */}
      <span className="dash d1" />
      <span className="dash d2" />
      <span className="dash d3" />
      <span className="dash d4" />
    </button>
  );
}
