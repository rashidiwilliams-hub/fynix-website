import { Check } from "lucide-react";

const PAD = "clamp(20px, 5vw, 80px)";

const services = [
  {
    title: "Responsive Web Design",
    desc: "Good For Personal & Small Business",
    variant: "dark" as const,
    features: [
      "Custom mobile-first design",
      "Up to 5 pages",
      "SEO ready structure",
      "Contact form integration",
      "1 round of revisions",
    ],
  },
  {
    title: "Mobile & Web App Development",
    desc: "Good For Growing Companies",
    variant: "orange" as const,
    features: [
      "Full-stack web or mobile app",
      "Custom UI/UX design",
      "API & third-party integrations",
      "Admin dashboard included",
      "3 months post-launch support",
    ],
  },
  {
    title: "SaaS Platforms",
    desc: "Good For Scaling Products",
    variant: "dark" as const,
    features: [
      "Multi-tenant architecture",
      "Subscription & billing setup",
      "Role-based access control",
      "Analytics & reporting",
      "Dedicated support plan",
    ],
  },
  {
    title: "Branding & Graphic Design",
    desc: "Good For New & Rebranding Businesses",
    variant: "light" as const,
    features: [
      "Logo design (3 concepts)",
      "Brand style guide",
      "Business card & stationery",
      "Social media kit",
      "Print-ready file delivery",
    ],
  },
  {
    title: "Automation & Consultation",
    desc: "Good For Operational Efficiency",
    variant: "dark" as const,
    features: [
      "Workflow audit & planning",
      "Process automation setup",
      "Tool & software integration",
      "Staff training session",
      "30-day follow-up support",
    ],
  },
  {
    title: "Ongoing Support",
    desc: "Good For Any Business Post-Launch",
    variant: "light" as const,
    features: [
      "Monthly retainer plan",
      "Bug fixes & updates",
      "Feature additions",
      "Priority response time",
      "Monthly progress report",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#F5F5F5", paddingTop: 100, paddingBottom: 100 }}>
      <style>{`
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 1024px) { .services-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 640px) { .services-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD }}>

        <div style={{ marginBottom: 56, textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F25623", marginBottom: 16 }}>What we build</p>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 800, color: "#0D0D0D", lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 680, margin: "0 auto" }}>
            Everything your business needs<br /><span style={{ color: "#F25623" }}>to grow and operate online.</span>
          </h2>
        </div>

        <div className="services-grid">
          {services.map(({ title, desc, features, variant }) => {
            const dark   = variant === "dark";
            const orange = variant === "orange";
            const light  = variant === "light";

            const bg          = dark ? "#1A1A1A" : orange ? "#F25623" : "#fff";
            const titleColor  = dark || orange ? "#FAFAFA" : "#0D0D0D";
            const subColor    = dark ? "rgba(255,255,255,0.4)" : orange ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,0.45)";
            const featureColor= dark ? "rgba(255,255,255,0.6)" : orange ? "rgba(255,255,255,0.85)" : "rgba(0,0,0,0.7)";
            const checkBg     = dark ? "rgba(255,255,255,0.08)" : orange ? "rgba(255,255,255,0.2)" : "rgba(242,86,35,0.1)";
            const checkColor  = dark || orange ? "#fff" : "#F25623";
            const btnBg       = dark ? "rgba(255,255,255,0.08)" : orange ? "#fff" : "#F25623";
            const btnColor    = dark ? "#fff" : orange ? "#F25623" : "#fff";
            const btnBorder   = dark ? "1px solid rgba(255,255,255,0.12)" : "none";

            return (
              <div
                key={title}
                style={{
                  background: bg,
                  borderRadius: 16,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  border: light ? "2px solid #F25623" : "none",
                }}
              >
                <div style={{ marginBottom: 24 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: titleColor, marginBottom: 6, lineHeight: 1.25 }}>{title}</h3>
                  <p style={{ fontSize: 12, color: subColor, fontWeight: 500 }}>{desc}</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, flex: 1 }}>
                  {features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: checkBg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Check size={10} style={{ color: checkColor }} />
                      </div>
                      <span style={{ fontSize: 13, color: featureColor, lineHeight: 1.4 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: btnBg,
                    color: btnColor,
                    fontWeight: 700,
                    fontSize: 13,
                    borderRadius: 8,
                    padding: "12px 0",
                    textDecoration: "none",
                    border: btnBorder,
                  }}
                >
                  Get started
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
