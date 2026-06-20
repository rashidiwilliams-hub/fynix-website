"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const PAD = "clamp(20px, 5vw, 80px)";
const links = [
  { href: "#services",  label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#tempo",     label: "Tempo" },
  { href: "#about",     label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(13,13,13,0.45)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <nav
          className="flex items-center justify-between"
          style={{ maxWidth: 1400, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD, height: 72 }}
        >
          <a href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="Fynix Studios" style={{ height: 48, width: "auto", display: "block" }} />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <a key={href} href={href}
                style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.65)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FAFAFA")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                {label}
              </a>
            ))}
            <a href="#contact"
              className="transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{ fontSize: 14, fontWeight: 600, color: "#FAFAFA", border: "1.5px solid rgba(255,255,255,0.3)", borderRadius: 8, padding: "9px 22px", textDecoration: "none" }}
            >
              Talk to us
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} style={{ color: "#FAFAFA" }}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col pt-20 pb-10"
          style={{ background: "rgba(13,13,13,0.95)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", paddingLeft: PAD, paddingRight: PAD }}>
          <ul className="flex flex-col gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}
                  className="block py-4 border-b font-semibold"
                  style={{ fontSize: "clamp(1.8rem,8vw,3rem)", color: "#FAFAFA", borderColor: "rgba(255,255,255,0.08)", textDecoration: "none" }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <a href="#contact" onClick={() => setOpen(false)}
              style={{ display: "inline-block", background: "#F25623", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: 8, padding: "14px 32px", textDecoration: "none" }}>
              Talk to us
            </a>
          </div>
        </div>
      )}
    </>
  );
}
