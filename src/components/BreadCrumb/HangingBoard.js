"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import "./../style/hangingboard.css";

/**
 * HangingBoard (two-stick)
 * props:
 *  - text: string (use \n for line breaks)
 *  - maxWidth: css width (default "80%")
 *  - typingSpeed: ms per character (default 14)
 *  - stickOffsets: array of % for stick x positions (default ["22%", "78%"])
 */
export default function HangingBoard({
  text,
  maxWidth = "80%",
  typingSpeed = 14,
  stickOffsets = ["22%", "78%"],
  className = "",
}) {
  const wrapRef = useRef(null);
  const tickRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  // Normalize to a definite string (prevents 'undefined')
  const source = useMemo(() => (text ?? "").toString().replace(/\r/g, ""), [text]);

  // Unicode-safe units (handles emoji/combined glyphs)
  const units = useMemo(() => Array.from(source), [source]);

  // Observe when the component enters the viewport
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // (Re)start typing whenever we animate or text changes
  useEffect(() => {
    if (!inView) return;

    if (tickRef.current) clearInterval(tickRef.current);
    setTyped("");
    setDone(false);

    let i = 0;
    if (units.length === 0) {
      setDone(true);
      return;
    }

    tickRef.current = setInterval(() => {
      setTyped(units.slice(0, i + 1).join(""));
      i += 1;

      if (i >= units.length) {
        clearInterval(tickRef.current);
        tickRef.current = null;
        setDone(true);
      }
    }, Math.max(typingSpeed, 1));

    return () => {
      if (tickRef.current) {
        clearInterval(tickRef.current);
        tickRef.current = null;
      }
    };
  }, [inView, units, typingSpeed]);

  // Optional: add 'done' class after your intro animation time
  useEffect(() => {
    if (!inView) return;
    const t = setTimeout(() => {
      wrapRef.current?.classList.add("hb2-done");
    }, 17000);
    return () => clearTimeout(t);
  }, [inView]);

  const rendered = useMemo(
    () =>
      typed.split("\n").map((line, idx, arr) => (
        <span key={idx}>
          {line}
          {idx < arr.length - 1 && <br />}
        </span>
      )),
    [typed]
  );

  return (
    <div className="handing-board mt">
      <div
        ref={wrapRef}
        className={`hb2-wrap ${className} ${inView ? "hb2-in" : ""} ${done ? "hb2-done" : ""}`}
        style={{ maxWidth }}
      >
        {/* Sticks + knobs */}
        {stickOffsets.map((x, i) => (
          <div key={`s${i}`} className="hb2-stick-group" style={{ left: x }}>
            <div className="hb2-stick" />
            <div className="hb2-knob" />
          </div>
        ))}

        {/* Board */}
        <div className="hb2-board">
          <p className="hb2-text">
            {rendered}
            {!done && units.length > 0 && <span className="hb2-caret" />}
          </p>
        </div>
      </div>
    </div>
  );
}
