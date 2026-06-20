"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const PAD = "clamp(20px, 5vw, 80px)";

const faqs = [
  {
    q: "Where are you based?",
    a: "We're based in Georgetown, Guyana. We work with clients locally in person and remotely across the Caribbean.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Template websites are typically live within 5–7 business days once we have your brand assets. Custom websites and software projects depend on scope — we'll give you a clear timeline upfront.",
  },
  {
    q: "Do you work with businesses outside of Guyana?",
    a: "Yes. While we're built for the Caribbean market, we work with businesses across the region and internationally. All project communication is remote-friendly.",
  },
  {
    q: "What is Tempo and when will it launch?",
    a: "Tempo is our all-in-one business operations platform — combining project management, payroll, expenses, and scheduling in one app. It's built specifically for Caribbean businesses and priced accordingly. We're accepting early access sign-ups now.",
  },
  {
    q: "Can I request changes to a website template?",
    a: "Absolutely. Every template we build is fully customised to your brand — logo, colors, fonts, images, copy. You can also request structural changes. Just reach out via the contact form.",
  },
  {
    q: "What are your payment terms?",
    a: "We typically work with a 50% deposit upfront and the balance on delivery. For ongoing retainer work, we invoice monthly. Prices are quoted in GYD by default.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. We offer monthly support retainers that cover updates, content changes, bug fixes, and priority response. Think of us as your in-house tech team.",
  },
  {
    q: "I have an idea but I don't know where to start — can you help?",
    a: "That's exactly who we love working with. Send us a message on WhatsApp or fill out the contact form below and we'll help you figure out the right solution, realistic scope, and what it would cost to build.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const left  = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 === 1);

  function Item({ faq, idx }: { faq: typeof faqs[0]; idx: number }) {
    const isOpen = open === idx;
    return (
      <div
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.07)",
          paddingBottom: 0,
        }}
      >
        <button
          onClick={() => setOpen(isOpen ? null : idx)}
          style={{
            width: "100%",
            textAlign: "left",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            padding: "20px 0",
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 600, color: "#0D0D0D", lineHeight: 1.4 }}>{faq.q}</span>
          <span style={{ flexShrink: 0, color: isOpen ? "#F25623" : "rgba(0,0,0,0.35)", transition: "color 0.2s" }}>
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
          </span>
        </button>
        <div style={{
          overflow: "hidden",
          maxHeight: isOpen ? 300 : 0,
          transition: "max-height 0.3s ease",
        }}>
          <p style={{ fontSize: 14, color: "rgba(0,0,0,0.55)", lineHeight: 1.7, paddingBottom: 20 }}>{faq.a}</p>
        </div>
      </div>
    );
  }

  return (
    <section id="faq" style={{ background: "#FAFAFA", paddingTop: 100, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD }}>

        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F25623", marginBottom: 16 }}>Got questions?</p>
          <h2 style={{ fontSize: "clamp(1.55rem,3.5vw,2.55rem)", fontWeight: 800, color: "#0D0D0D", lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 720, margin: "0 auto" }}>
            Everything you need to know<br /><span style={{ color: "#F25623" }}>before we get started.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          <div>
            {left.map((faq, i) => <Item key={i} faq={faq} idx={i * 2} />)}
          </div>
          <div>
            {right.map((faq, i) => <Item key={i} faq={faq} idx={i * 2 + 1} />)}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 56, background: "#0D0D0D", borderRadius: 12, padding: "28px 32px", display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>Still have questions? We're a real team — reach out and we'll reply same day.</p>
          <a href="#contact" style={{ background: "#F25623", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: 8, padding: "11px 24px", textDecoration: "none" }}>
            Talk to us
          </a>
        </div>

      </div>
    </section>
  );
}
