"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileSpreadsheet, Globe, MessageSquare, Map, LayoutDashboard, TrendingUp, CheckSquare, Heart } from "lucide-react";

const PAD = "clamp(20px, 5vw, 80px)";

const pairs = [
  {
    problem:  { icon: FileSpreadsheet, title: "Everything lives in a spreadsheet",  desc: "Version chaos, formula errors, no real-time visibility." },
    solution: { icon: LayoutDashboard,  title: "One platform for your whole operation", desc: "Tempo tracks projects, payroll, and expenses in one place." },
  },
  {
    problem:  { icon: Globe,           title: "No real web presence",               desc: "You exist offline while customers search online." },
    solution: { icon: TrendingUp,       title: "A website that actually converts",   desc: "Built to bring in leads, not just to look good." },
  },
  {
    problem:  { icon: MessageSquare,   title: "Managing jobs over WhatsApp",        desc: "Missed tasks, no accountability, nothing tracked." },
    solution: { icon: CheckSquare,      title: "Clear task and project tracking",    desc: "Every job assigned, dated, and visible to your whole team." },
  },
  {
    problem:  { icon: Map,             title: "Software built for somewhere else",  desc: "Tools designed for USD, US tax law, US workflows." },
    solution: { icon: Heart,            title: "Built for how we do business here",  desc: "GYD pricing, Caribbean workflows, Guyanese support." },
  },
];

export default function ProblemSolution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" style={{ background: "#FAFAFA", paddingTop: 60, paddingBottom: 60 }}>
      <style>{`
        .ps-split-card { display: grid; grid-template-columns: 1fr 1fr; }
        @media (max-width: 992px) {
          .ps-split-card { grid-template-columns: 1fr; }
          .ps-split-card .ps-divider { display: none; }
        }
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD }}>

        {/* Header */}
        <div style={{ marginBottom: 32, textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F25623", marginBottom: 16 }}>The problem we solve</p>
          <h2 style={{ fontSize: "clamp(1.55rem,3.5vw,2.55rem)", fontWeight: 800, color: "#0D0D0D", lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 720, margin: "0 auto" }}>
            Your business deserves software<br /><span style={{ color: "#F25623" }}>built around how you actually work.</span>
          </h2>
        </div>

        {/* 2×2 grid of split cards */}
        <div
          ref={ref}
          className="grid-2"
        >
          {pairs.map(({ problem, solution }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="ps-split-card"
              style={{
                background: "#fff",
                borderRadius: 16,
                overflow: "hidden",
                border: "1px solid #1A1A1A",
                position: "relative",
              }}
            >
              {/* Divider */}
              <div className="ps-divider" style={{ position: "absolute", left: "50%", top: "20%", height: "60%", width: 1, background: "#1A1A1A", transform: "translateX(-50%)" }} />

              {/* BEFORE */}
              <div style={{ padding: "16px 20px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(239,68,68,0.6)", marginBottom: 16 }}>Before</div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ background: "rgba(239,68,68,0.08)", borderRadius: 8, padding: 8, flexShrink: 0 }}>
                    <problem.icon size={18} style={{ color: "#ef4444" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0D0D0D", lineHeight: 1.35, marginBottom: 6 }}>{problem.title}</div>
                    <div style={{ fontSize: 12, color: "rgba(0,0,0,0.45)", lineHeight: 1.6 }}>{problem.desc}</div>
                  </div>
                </div>
              </div>

              {/* WITH FYNIX */}
              <div style={{ padding: "16px 20px" }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#F25623", marginBottom: 16 }}>With Fynix</div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ background: "rgba(242,86,35,0.08)", borderRadius: 8, padding: 8, flexShrink: 0 }}>
                    <solution.icon size={18} style={{ color: "#F25623" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0D0D0D", lineHeight: 1.35, marginBottom: 6 }}>{solution.title}</div>
                    <div style={{ fontSize: 12, color: "rgba(0,0,0,0.45)", lineHeight: 1.6 }}>{solution.desc}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, background: "#F25623", borderRadius: 16, padding: "20px 28px", marginTop: 16, flexWrap: "wrap" }}
        >
          <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", maxWidth: 480 }}>
            Ready to switch? Most businesses are up and running within a week.
          </p>
          <a href="#contact"
            style={{ background: "#fff", color: "#F25623", fontWeight: 700, fontSize: 14, borderRadius: 8, padding: "12px 24px", textDecoration: "none", flexShrink: 0 }}>
            Talk to us
          </a>
        </motion.div>

      </div>
    </section>
  );
}
