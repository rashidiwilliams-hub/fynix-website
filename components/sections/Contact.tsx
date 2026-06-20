"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const PAD = "clamp(20px, 5vw, 80px)";

const services = [
  "Website (template)",
  "Website (custom)",
  "Custom software / web app",
  "Business system (inventory, payroll, etc.)",
  "Tempo early access",
  "Ongoing support retainer",
  "Something else",
];

type FormState = {
  name: string;
  contact: string;
  service: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", contact: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  function set(k: keyof FormState, v: string) {
    setForm(f => ({ ...f, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#F5F5F5",
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: 8,
    padding: "12px 14px",
    fontSize: 14,
    color: "#0D0D0D",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 600,
    color: "rgba(0,0,0,0.5)",
    display: "block",
    marginBottom: 6,
  };

  return (
    <section id="contact" style={{ background: "#fff", paddingTop: 100, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD }}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — copy */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F25623", marginBottom: 16 }}>Get in touch</p>
            <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#0D0D0D", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 24 }}>
              Tell us what you need.<br /><span style={{ color: "#F25623" }}>We'll make it happen.</span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(0,0,0,0.55)", lineHeight: 1.75, marginBottom: 40 }}>
              Tell us what you need and we'll get back to you within one business day. No long sales calls required — just a quick chat to understand your project.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "WhatsApp", value: "+592 713 5786", href: "https://wa.me/5927135786" },
                { label: "Email", value: "core@fynixstudios.com", href: "mailto:core@fynixstudios.com" },
                { label: "Location", value: "Georgetown, Guyana", href: null },
              ].map(({ label, value, href }) => (
                <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.35)", minWidth: 80, paddingTop: 2 }}>{label}</div>
                  {href
                    ? <a href={href} style={{ fontSize: 15, fontWeight: 600, color: "#F25623", textDecoration: "none" }}>{value}</a>
                    : <span style={{ fontSize: 15, fontWeight: 600, color: "rgba(0,0,0,0.7)" }}>{value}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 16, padding: "36px 32px" }}>
            {sent ? (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 16, padding: "24px 0" }}>
                <CheckCircle size={40} style={{ color: "#22c55e" }} />
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0D0D0D" }}>Message received</h3>
                <p style={{ fontSize: 14, color: "rgba(0,0,0,0.5)", lineHeight: 1.6 }}>We'll get back to you within one business day. In the meantime, feel free to reach out on WhatsApp.</p>
                <a href="https://wa.me/5927135786" style={{ marginTop: 8, background: "#F25623", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: 8, padding: "11px 24px", textDecoration: "none" }}>
                  Open WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={labelStyle}>Your name</label>
                  <input
                    required
                    placeholder="Marcus James"
                    value={form.name}
                    onChange={e => set("name", e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email or phone</label>
                  <input
                    required
                    placeholder="name@example.com or +592 ..."
                    value={form.contact}
                    onChange={e => set("contact", e.target.value)}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>What can we help you with?</label>
                  <select
                    required
                    value={form.service}
                    onChange={e => set("service", e.target.value)}
                    style={{ ...inputStyle, appearance: "none" }}
                  >
                    <option value="" disabled>Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Tell us more (optional)</label>
                  <textarea
                    rows={4}
                    placeholder="Brief description of your project, timeline, or budget..."
                    value={form.message}
                    onChange={e => set("message", e.target.value)}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: "#F25623",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                    border: "none",
                    borderRadius: 8,
                    padding: "14px 24px",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.7 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    transition: "opacity 0.2s",
                  }}
                >
                  {loading ? "Sending..." : <>Send message <ArrowRight size={15} /></>}
                </button>

                <p style={{ fontSize: 11, color: "rgba(0,0,0,0.3)", textAlign: "center" }}>
                  We typically reply within 1 business day.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
