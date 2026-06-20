"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";

const PAD = "clamp(20px, 5vw, 80px)";

const stats = [
  { value: "15+",   label: "Projects delivered" },
  { value: "5",     label: "Industry verticals" },
  { value: "100%",  label: "Caribbean-focused" },
  { value: "1 wk",  label: "Avg. time to launch" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" style={{ background: "#0D0D0D", paddingTop: 100, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD }}>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16,1,0.3,1] }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F25623", marginBottom: 16 }}>Who we are</p>
            <h2 style={{ fontSize: "clamp(1.55rem,3.5vw,2.55rem)", fontWeight: 800, color: "#FAFAFA", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 24 }}>
              A software studio built<br /><span style={{ color: "#F25623" }}>in the heart of Georgetown.</span>
            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              <MapPin size={14} style={{ color: "#F25623", flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Georgetown, Guyana</span>
            </div>

            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 20 }}>
              Fynix Studios was built around one observation: businesses in Guyana and the wider Caribbean were being underserved by software. Too expensive. Too complicated. Built for someone else's context.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 20 }}>
              We set out to change that — building clean, fast, and purposeful digital products that actually match how Caribbean businesses operate. From a boutique's first website to a construction firm's internal operations system, we build for the real world.
            </p>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
              Tempo is our flagship product: a full business operations suite built from the ground up for SMEs in the region — and a direct answer to the tools that were never designed with us in mind.
            </p>
          </motion.div>

          {/* Right — stat grid + values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16,1,0.3,1] }}
          >
            <div className="grid grid-cols-2 gap-4" style={{ marginBottom: 28 }}>
              {stats.map(({ value, label }) => (
                <div key={label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "24px 20px" }}>
                  <div style={{ fontSize: "clamp(2rem,3vw,2.6rem)", fontWeight: 800, color: "#F25623", lineHeight: 1, marginBottom: 8 }}>{value}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "24px 24px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 16 }}>What drives us</div>
              {[
                ["Premium quality", "We build things that hold up — technically and visually."],
                ["Local context", "We understand GYD, Caribbean workflows, and what your clients actually need."],
                ["Real partnership", "We don't disappear after launch. We grow with the businesses we build for."],
              ].map(([title, desc]) => (
                <div key={title} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F25623", marginTop: 6, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#FAFAFA", marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
