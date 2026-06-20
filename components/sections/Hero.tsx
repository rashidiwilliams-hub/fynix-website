"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const IMAGES = [
  "/carousel-01.png",
  "/carousel-02.png",
  "/carousel-03.png",
  "/carousel-04.png",
  "/carousel-05.png",
  "/carousel-06.png",
  "/carousel-07.png",
  "/carousel-08.png",
  "/carousel-09.png",
];

const CARD_W  = 190;
const CARD_H  = 370;
const RADIUS  = 300; // translateZ — how far cards push out from center
const N       = IMAGES.length;
const STEP    = 360 / N; // degrees per card

const features = [
  { title: "Fast turnaround,\nreal results",   desc: "From brief to live product in days, not months. We move with urgency." },
  { title: "Built for your\nbusiness context", desc: "Caribbean workflows, GYD pricing, and support that speaks your language." },
  { title: "Software that\nkeeps improving",   desc: "Monthly retainers mean your product evolves as your business does." },
];

const WORDS = ["spreadsheets", "scattered tools", "pen and paper", "WhatsApp groups"];

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = WORDS[wordIdx];
      const el = typedRef.current;
      if (!el) return;

      if (deleting) {
        el.textContent = "";
        charIdx = 0;
        deleting = false;
        wordIdx = (wordIdx + 1) % WORDS.length;
        timer = setTimeout(tick, 0);
        return;
      } else {
        charIdx++;
        el.textContent = word.slice(0, charIdx);
        if (charIdx === word.length) {
          timer = setTimeout(() => { deleting = true; tick(); }, 2200);
          return;
        }
        timer = setTimeout(tick, 65);
      }
    };

    timer = setTimeout(tick, 600);
    return () => clearTimeout(timer);
  }, []);
  return (
    <section style={{ background: "#0D0D0D", minHeight: "100vh", display: "flex", flexDirection: "column", paddingTop: 72, overflow: "hidden" }}>

      <style>{`
        @keyframes carousel-spin {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(-360deg); }
        }
        .hero-carousel {
          transform-style: preserve-3d;
          animation: carousel-spin 28s infinite linear;
          position: absolute;
          width: 100%;
          height: 100%;
        }
      `}</style>

      {/* 2-COL LAYOUT */}
      <div className="hero-layout">

        {/* LEFT — text + CTAs + feature cards */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <style>{`
            @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
            .hero-cursor {
              display: inline-block;
              width: 2px;
              height: 0.85em;
              background: #F25623;
              vertical-align: middle;
              margin-left: 3px;
              animation: blink 1s infinite;
            }
          `}</style>

          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#FAFAFA", lineHeight: 1.25, letterSpacing: "-0.025em", marginBottom: 20 }}>
            Stop running your<br />business on{" "}
            <span style={{ whiteSpace: "nowrap" }}>
              <span ref={typedRef} style={{ color: "#F25623" }} />
              <span className="hero-cursor" />
            </span>
          </h1>

          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", maxWidth: "90%", lineHeight: 1.7, marginBottom: 36 }}>
            Fynix Studios builds software and web solutions for Guyanese businesses — from custom platforms to a full suite of business apps.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 56 }}>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#F25623", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: 8, padding: "13px 28px", textDecoration: "none" }}>
              Talk to us <ArrowRight size={16} />
            </a>
            <a href="#portfolio" style={{ display: "inline-flex", alignItems: "center", color: "rgba(255,255,255,0.75)", fontWeight: 600, fontSize: 15, border: "1.5px solid rgba(255,255,255,0.18)", borderRadius: 8, padding: "13px 28px", textDecoration: "none" }}>
              See our work
            </a>
          </div>

          {/* Feature cards — 3 columns */}
          <div className="hero-features">
            {features.map(({ title, desc }) => (
              <div key={title}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#FAFAFA", lineHeight: 1.3, marginBottom: 6, whiteSpace: "pre-line" }}>{title}</h3>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — 3D carousel */}
        <div className="hero-carousel-col" style={{ position: "relative", height: CARD_H + 60, perspective: 1000, perspectiveOrigin: "50% 50%" }}>
          <div className="hero-carousel">
            {IMAGES.map((src, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: CARD_W,
                  height: CARD_H,
                  top: "50%",
                  left: "50%",
                  marginTop: -(CARD_H / 2),
                  marginLeft: -(CARD_W / 2),
                  borderRadius: 14,
                  overflow: "hidden",
                  transform: `rotateY(${i * STEP}deg) translateZ(${RADIUS}px)`,
                  boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.25)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SERVICES STRIP */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "24px 64px", marginTop: 64 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 48, maxWidth: 1280, margin: "0 auto", flexWrap: "wrap" }}>
          {["Responsive Web Design", "Mobile & Web App Development", "SaaS Platforms", "Branding & Graphic Design", "Automation & Consultation", "Ongoing Support"].map(s => (
            <span key={s} style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{s}</span>
          ))}
        </div>
      </div>

    </section>
  );
}
