"use client";


const PAD = "clamp(20px, 5vw, 80px)";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services",  href: "#services"  },
  { label: "Who We Are", href: "#about"      },
  { label: "Tempo",     href: "#tempo"      },
  { label: "Contact",   href: "#contact"    },
];


const services = [
  "Responsive Web Design",
  "Mobile & Web App Development",
  "Branding & Graphic Design",
];

export default function Footer() {
  return (
    <footer style={{ background: "#0D0D0D" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD, paddingTop: 64, paddingBottom: 40 }}>

        {/* Logo */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-white.png" alt="Fynix Studios" style={{ height: 40, width: "auto" }} />
        </div>

        {/* Service strip */}
        <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", marginBottom: 28 }}>
          {services.map(s => (
            <div key={s} style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.4)", display: "inline-block" }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: 40 }} />

        {/* Nav links */}
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", marginBottom: 36 }}>
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FAFAFA")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
            >
              {label}
            </a>
          ))}
        </div>


        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", justifyContent: "center", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <a href="/terms" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Terms & Conditions</a>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>|</span>
          <a href="/privacy" style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>Privacy Policy</a>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 12 }}>|</span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>© {new Date().getFullYear()} Fynix Studios. All Rights Reserved.</span>
        </div>

      </div>
    </footer>
  );
}
