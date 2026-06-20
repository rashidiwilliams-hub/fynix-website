"use client";

import { useState } from "react";

declare namespace JSX {
  interface IntrinsicElements {
    "ion-icon": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      name?: string; size?: string; style?: React.CSSProperties;
    }, HTMLElement>;
  }
}

const px = (id: number, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

/* ─── palette ─── */
const YELLOW = "#F5A500";
const YELLOW_DARK = "#D98F00";
const INK   = "#1A1A1A";
const DARK  = "#111111";
const BG    = "#F5F5F5";
const WHITE = "#FFFFFF";
const MUTED = "#777";

/* ─── images ─── */
const IMG = {
  hero:       px(1516481, 1200),
  work1:      px(1117452),
  work2:      px(1249611),
  work3:      px(1145434),
  plumbing:   px(1249611),
  ac:         px(1516481),
  cabinet:    px(1117452),
  carpentry:  px(1145434),
  formRight:  px(1216489),
  blog1:      px(1117452),
  blog2:      px(1516481),
  blog3:      px(1145434),
  avatar1:    px(1036623, 80),
  avatar2:    px(1043474, 80),
  avatar3:    px(762020,  80),
  cta:        px(1249611, 1200),
};

/* ─── responsive ─── */
const CSS = `
  .mz-pad { padding-left: 64px; padding-right: 64px; }
  .mz-hero-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: 560px; align-items: center; }
  .mz-services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
  .mz-cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .mz-quote-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .mz-why-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 24px; align-items: start; }
  .mz-blog-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .mz-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .mz-pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .mz-footer-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 48px; }
  .mz-form-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
  .mz-form-row2 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }

  @media (max-width: 1024px) {
    .mz-pad { padding-left: 32px; padding-right: 32px; }
    .mz-hero-grid { grid-template-columns: 1fr; }
    .mz-hero-img { display: none; }
    .mz-services-grid { grid-template-columns: 1fr; }
    .mz-cards-grid { grid-template-columns: 1fr 1fr; }
    .mz-quote-grid { grid-template-columns: 1fr; }
    .mz-quote-img { display: none; }
    .mz-why-grid { grid-template-columns: 1fr 1fr; }
    .mz-blog-grid { grid-template-columns: 1fr 1fr; }
    .mz-stats-grid { grid-template-columns: 1fr 1fr; }
    .mz-pricing-grid { grid-template-columns: 1fr; }
    .mz-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
    .mz-form-row { grid-template-columns: 1fr 1fr; }
    .mz-form-row2 { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 768px) {
    .mz-pad { padding-left: 20px; padding-right: 20px; }
    .mz-cards-grid { grid-template-columns: 1fr; }
    .mz-why-grid { grid-template-columns: 1fr; }
    .mz-blog-grid { grid-template-columns: 1fr; }
    .mz-stats-grid { grid-template-columns: 1fr 1fr; }
    .mz-footer-grid { grid-template-columns: 1fr; }
    .mz-form-row { grid-template-columns: 1fr; }
    .mz-form-row2 { grid-template-columns: 1fr; }
  }
`;

function YellowBtn({ children, outline = false }: { children: React.ReactNode; outline?: boolean }) {
  return (
    <button style={{
      background: outline ? "transparent" : YELLOW,
      color: outline ? YELLOW : INK,
      border: outline ? `2px solid ${YELLOW}` : "none",
      fontWeight: 700, fontSize: 13, borderRadius: 6,
      padding: "11px 24px", cursor: "pointer", whiteSpace: "nowrap",
    }}>
      {children}
    </button>
  );
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <ion-icon key={i} name={i <= n ? "star" : "star-outline"}
          style={{ fontSize: 12, color: YELLOW }} />
      ))}
    </div>
  );
}

export default function Mezan() {
  const [workType, setWorkType] = useState("");

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: WHITE, color: INK, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{CSS}</style>

      {/* ══ TOP BAR ══ */}
      <div style={{ background: YELLOW, padding: "8px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", gap: 14 }}>
          {["logo-facebook","logo-instagram","logo-youtube","logo-twitter"].map(icon => (
            <a key={icon} href="#" style={{ color: INK }}>
              <ion-icon name={icon} style={{ fontSize: 15 }} />
            </a>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: INK }}>
          <ion-icon name="location-outline" style={{ fontSize: 14 }} />
          376 S Brasor Oral Suite 200, Sn Y Luis, Mexico
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, fontWeight: 500, color: INK }}>
          <ion-icon name="mail-outline" style={{ fontSize: 14 }} />
          maz@example.com
        </div>
      </div>

      {/* ══ NAVBAR ══ */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 64px", background: WHITE,
        borderBottom: "1px solid rgba(0,0,0,0.07)",
        position: "sticky", top: 0, zIndex: 200,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 34, height: 34, background: YELLOW, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ion-icon name="home-outline" style={{ fontSize: 18, color: INK }} />
          </div>
          <span style={{ fontSize: 18, fontWeight: 800, color: INK }}>Mezan</span>
        </div>

        <div style={{ display: "flex", gap: 28 }}>
          {["Home","About Us","Shop","Mezan Blogs","Homepages","Contact"].map((l, i) => (
            <div key={l} style={{ position: "relative" }}>
              <a href="#" style={{ fontSize: 14, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? INK : MUTED, textDecoration: "none" }}>{l}</a>
              {i === 0 && <div style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 2, background: YELLOW, borderRadius: 1 }} />}
            </div>
          ))}
        </div>

        <button style={{ background: YELLOW, color: INK, fontWeight: 700, fontSize: 13, border: "none", borderRadius: 6, padding: "11px 22px", cursor: "pointer" }}>
          Get A Quote
        </button>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{ position: "relative", background: DARK, minHeight: 560, overflow: "hidden" }}>
        {/* BG photo */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={IMG.hero} alt="Worker" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", opacity: 0.45 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2) 100%)" }} />

        <div className="mz-pad" style={{ position: "relative", zIndex: 2, padding: "80px 64px" }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: YELLOW, marginBottom: 20 }}>
            Let's Get To Work
          </p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", fontWeight: 900, color: WHITE, lineHeight: 1.1, letterSpacing: "-0.02em", maxWidth: 560, marginBottom: 20 }}>
            Honest, Trustworthy, And Does Good Work.
          </h1>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.75, maxWidth: 460, marginBottom: 36 }}>
            Eger et ipsum lorem et libero. Egestas sed velit nulla in pellentas quam vulputate dapibus. Tincidunt nibh semper qulis dui laoreet in adipiscing lorem.
          </p>

          <div style={{ display: "flex", gap: 14, marginBottom: 48, flexWrap: "wrap" }}>
            <button style={{ background: YELLOW, color: INK, fontWeight: 700, fontSize: 13, border: "none", borderRadius: 6, padding: "12px 26px", cursor: "pointer" }}>Get a Quote</button>
            <button style={{ background: "transparent", color: WHITE, fontWeight: 600, fontSize: 13, border: "1.5px solid rgba(255,255,255,0.4)", borderRadius: 6, padding: "12px 26px", cursor: "pointer" }}>Learn More</button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex" }}>
              {[IMG.avatar1, IMG.avatar2, IMG.avatar3].map((src, i) => (
                <img key={i} src={src} alt="" style={{ width: 36, height: 36, borderRadius: "50%", objectFit: "cover", border: "2px solid #fff", marginLeft: i > 0 ? -10 : 0 }} />
              ))}
            </div>
            <div>
              <Stars n={5} />
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", marginTop: 2 }}>4.5 Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ INSTALLATION SERVICES ══ */}
      <section className="mz-pad" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="mz-services-grid">
          {/* Left — photos + stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, position: "relative" }}>
            <div style={{ borderRadius: 12, overflow: "hidden", height: 280 }}>
              <img src={IMG.work1} alt="Worker" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 40 }}>
              <div style={{ borderRadius: 12, overflow: "hidden", flex: 1 }}>
                <img src={IMG.work2} alt="Work" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              {/* Stats overlay */}
              <div style={{ background: YELLOW, borderRadius: 10, padding: "14px 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {[
                  { n: "560+", label: "Projects Done"   },
                  { n: "180+", label: "Satisfactions"   },
                  { n: "180+", label: "Technicians"     },
                ].map(({ n, label }) => (
                  <div key={label}>
                    <div style={{ fontSize: 20, fontWeight: 900, color: INK }}>{n}</div>
                    <div style={{ fontSize: 11, color: "rgba(0,0,0,0.6)", fontWeight: 500 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: YELLOW, marginBottom: 14 }}>24/7 Hassle-Free</p>
            <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 24 }}>
              Home And Businesses<br />Installation Services
            </h2>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.75, marginBottom: 32 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sint amet facilisis egestas. Achim at ot sit amet tellus, posuere adipiscing accumsan.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20, marginBottom: 32 }}>
              {[
                { icon: "time-outline",         label: "Earliest Consultation",  desc: "Felis lobortis at tristique et nisl at dia blandit ac adipiscing elit accumsan." },
                { icon: "construct-outline",    label: "Customized Solution",    desc: "Augue aliquam velit eu lobortis a dictum vulputate massa adipiscing est." },
                { icon: "pricetag-outline",     label: "Affordable Pricing",     desc: "Leo velit risus et orci nisl fermentum. Donec porta duis placerat to do." },
                { icon: "apps-outline",         label: "All-In-One Service",     desc: "Pellentesque at nisl, laoreet id. Quam at orci lorem ultrices. Lacinia et arcu." },
              ].map(({ icon, label, desc }) => (
                <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, background: `${YELLOW}20`, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <ion-icon name={icon} style={{ fontSize: 20, color: YELLOW }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: INK, marginBottom: 4 }}>{label}</div>
                    <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <button style={{ background: YELLOW, color: INK, fontWeight: 700, fontSize: 13, border: "none", borderRadius: 6, padding: "11px 24px", cursor: "pointer" }}>Read More</button>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: YELLOW, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ion-icon name="call-outline" style={{ fontSize: 18, color: INK }} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: MUTED }}>Call For Booking</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: INK }}>000 123 456 789</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OUR SERVICES ══ */}
      <section style={{ background: BG, paddingTop: 80, paddingBottom: 80 }}>
        <div className="mz-pad">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: YELLOW, marginBottom: 10 }}>Our Services</p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
            <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 400 }}>
              Ideal Solution For Time<br />Consuming Problems
            </h2>
            <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.75, maxWidth: 380 }}>
              Lorem ipsum dolor sit amet adipiscing el. Diam praesent elem tem facilisis egestas sit ami consequat praesent. Scelerisque felis sit amet lacus.
            </p>
          </div>

          <div className="mz-cards-grid" style={{ marginBottom: 36 }}>
            {[
              { label: "Sanitary Plumbing",         desc: "Lorem neque velit nulla el ullamcorper. Consequat dictum arcu tortor sit qung ac morbi.",        img: IMG.plumbing  },
              { label: "Air Condition Installation", desc: "Mh placerat nullam quis augue lorem diam est. Tincidunt ut gravida fusce a purus consectetur.",   img: IMG.ac        },
              { label: "Cabinet Making",             desc: "Diam commodo id facilisis ut conubia in condimentum sed. Mets aliquam werfend mh.",               img: IMG.cabinet   },
              { label: "Window Carpentry",           desc: "Turpis morbi augue est augue lorem arcu. Pharetra sit orem aliquam in diam lorem.",               img: IMG.carpentry },
            ].map(({ label, desc, img }) => (
              <div key={label} style={{ background: WHITE, borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ height: 200, overflow: "hidden" }}>
                  <img src={img} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "18px 18px 20px" }}>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: INK, marginBottom: 8 }}>{label}</h4>
                  <p style={{ fontSize: 12, color: MUTED, lineHeight: 1.65, marginBottom: 12 }}>{desc}</p>
                  <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: YELLOW, textDecoration: "none" }}>
                    Explore Now <ion-icon name="arrow-forward-outline" style={{ fontSize: 13 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
            <button style={{ background: YELLOW, color: INK, fontWeight: 700, fontSize: 13, border: "none", borderRadius: 6, padding: "11px 28px", cursor: "pointer" }}>Get a Quote</button>
            <button style={{ background: "transparent", color: INK, fontWeight: 600, fontSize: 13, border: `1.5px solid ${INK}`, borderRadius: 6, padding: "11px 28px", cursor: "pointer" }}>View All Services</button>
          </div>
        </div>
      </section>

      {/* ══ REQUEST A QUOTE ══ */}
      <section className="mz-pad" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="mz-quote-grid">
          {/* Form */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: YELLOW, marginBottom: 12 }}>For Free Estimate!</p>
            <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 32 }}>Request A Quote</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="mz-form-row">
                {["Your Name *","Email ID *","Office Address"].map(ph => (
                  <input key={ph} type="text" placeholder={ph} style={{ padding: "13px 16px", border: "1px solid #ddd", borderRadius: 7, fontSize: 13, outline: "none", color: INK, background: BG }} />
                ))}
              </div>
              <div className="mz-form-row2">
                <select value={workType} onChange={e => setWorkType(e.target.value)} style={{ padding: "13px 16px", border: "1px solid #ddd", borderRadius: 7, fontSize: 13, color: workType ? INK : MUTED, background: BG, outline: "none" }}>
                  <option value="">Select Day / Work Type</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Carpentry</option>
                  <option>AC Installation</option>
                </select>
                <input type="date" style={{ padding: "13px 16px", border: "1px solid #ddd", borderRadius: 7, fontSize: 13, color: MUTED, background: BG, outline: "none" }} />
                <button style={{ background: YELLOW, color: INK, fontWeight: 700, fontSize: 13, border: "none", borderRadius: 7, padding: "13px 20px", cursor: "pointer" }}>
                  Get Estimate Quote
                </button>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="mz-quote-img" style={{ borderRadius: 16, overflow: "hidden", height: 320 }}>
            <img src={IMG.formRight} alt="Worker" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ══ WHY WE ARE BEST ══ */}
      <section style={{ background: BG, paddingTop: 72, paddingBottom: 72 }}>
        <div className="mz-pad">
          <div className="mz-why-grid">
            {/* Yellow card */}
            <div style={{ background: YELLOW, borderRadius: 14, padding: "32px 28px" }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(0,0,0,0.55)", marginBottom: 12 }}>People Trust</p>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: INK, lineHeight: 1.2, marginBottom: 14 }}>Why We<br />Are Best</h3>
              <p style={{ fontSize: 13, color: "rgba(0,0,0,0.6)", lineHeight: 1.7 }}>
                Condimentum id viam velit. Sollicitudin lobortis et faucibus duis at fermentum in nullis turpis.
              </p>
            </div>

            {[
              { icon: "ribbon-outline",  label: "Licensed Technicians", desc: "Scelerisque felis sit amet faucibus duis at fermentum in nullis turpis nunc." },
              { icon: "thumbs-up-outline", label: "Top Rated Service",  desc: "Mh placerat nullam quis augue duis at fermentum in nullis turpis nunc elit." },
              { icon: "flash-outline",   label: "Timely Services",      desc: "Mh remember elit facilisis in sed duis. Lorem consectetur et faucibus turpis." },
            ].map(({ icon, label, desc }) => (
              <div key={label} style={{ background: WHITE, borderRadius: 14, padding: "28px 24px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ width: 48, height: 48, background: `${YELLOW}25`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <ion-icon name={icon} style={{ fontSize: 24, color: YELLOW }} />
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: INK, marginBottom: 10 }}>{label}</h4>
                <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <section style={{ background: DARK, padding: "48px 64px" }}>
        <div className="mz-stats-grid">
          {[
            { n: "980+", label: "Projects Completed" },
            { n: "900+", label: "Happy Customers"    },
            { n: "430+", label: "Expert Workers"     },
            { n: "220+", label: "Awards Won"         },
          ].map(({ n, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.2rem", fontWeight: 900, color: YELLOW, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 8, fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section className="mz-pad" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: YELLOW, marginBottom: 10, textAlign: "center" }}>AMC Packages</p>
        <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.1rem)", fontWeight: 800, letterSpacing: "-0.02em", textAlign: "center", marginBottom: 48 }}>
          Choose Your Package Plan
        </h2>

        <div className="mz-pricing-grid">
          {[
            { name: "Planning Plan",       price: "$49",  period: "/month", features: ["2 Service Calls","Basic Repairs","Email Support","8AM–5PM Coverage"], featured: false },
            { name: "Emergency Plan",      price: "$99",  period: "/month", features: ["Unlimited Calls","Priority Repairs","24/7 Phone Support","All Day Coverage","Parts Discount 10%"], featured: true  },
            { name: "Premium Home Plan",   price: "$149", period: "/month", features: ["Unlimited Calls","All Repairs Covered","Dedicated Manager","24/7 Coverage","Parts Discount 20%","Annual Inspection"], featured: false },
          ].map(({ name, price, period, features, featured }) => (
            <div key={name} style={{
              background: featured ? YELLOW : WHITE,
              border: featured ? "none" : "1.5px solid #E8E8E8",
              borderRadius: 16, padding: "36px 28px",
              boxShadow: featured ? "0 8px 32px rgba(245,165,0,0.3)" : "0 2px 12px rgba(0,0,0,0.04)",
              transform: featured ? "scale(1.03)" : "none",
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: featured ? "rgba(0,0,0,0.6)" : MUTED, marginBottom: 8 }}>{name}</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 24 }}>
                <span style={{ fontSize: "2.4rem", fontWeight: 900, color: INK, lineHeight: 1 }}>{price}</span>
                <span style={{ fontSize: 13, color: MUTED, marginBottom: 4 }}>{period}</span>
              </div>
              <div style={{ height: 1, background: featured ? "rgba(0,0,0,0.12)" : "#eee", marginBottom: 24 }} />
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                {features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: "50%", background: featured ? "rgba(0,0,0,0.12)" : `${YELLOW}22`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <ion-icon name="checkmark-outline" style={{ fontSize: 12, color: featured ? INK : YELLOW }} />
                    </div>
                    <span style={{ fontSize: 13, color: featured ? INK : MUTED }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                width: "100%", padding: "12px 0", borderRadius: 7, fontWeight: 700, fontSize: 13, cursor: "pointer",
                background: featured ? INK : YELLOW,
                color: featured ? WHITE : INK,
                border: "none",
              }}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ══ BLOG ══ */}
      <section style={{ background: BG, paddingTop: 72, paddingBottom: 72 }}>
        <div className="mz-pad">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: YELLOW, marginBottom: 10 }}>Read Our Latest Blogs</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontSize: "clamp(1.5rem,2.2vw,1.9rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>Expert Tips & Project Updates</h2>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: YELLOW, textDecoration: "none" }}>
              View All Articles <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
            </a>
          </div>

          <div className="mz-blog-grid">
            {[
              { date: "June 10, 2024", tag: "Plumbing",    title: "5 Signs Your Home Needs Immediate Plumbing Attention",       img: IMG.blog1 },
              { date: "June 5, 2024",  tag: "Electrical",  title: "How To Know When To Call A Licensed Electrician",             img: IMG.blog2 },
              { date: "June 1, 2024",  tag: "Carpentry",   title: "Transform Your Space With Custom Cabinet Installations",       img: IMG.blog3 },
            ].map(({ date, tag, title, img }) => (
              <div key={title} style={{ background: WHITE, borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ height: 180, overflow: "hidden" }}>
                  <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "18px 20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontSize: 11, color: MUTED }}>{date}</span>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: MUTED, display: "inline-block" }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: YELLOW }}>{tag}</span>
                  </div>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: INK, lineHeight: 1.45, marginBottom: 14 }}>{title}</h4>
                  <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 600, color: YELLOW, textDecoration: "none" }}>
                    Read More <ion-icon name="arrow-forward-outline" style={{ fontSize: 13 }} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 260 }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={IMG.cta} alt="Services" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.2 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: DARK }} />
        <div className="mz-pad" style={{ position: "relative", zIndex: 2, paddingTop: 64, paddingBottom: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: YELLOW, marginBottom: 14 }}>Friendly Services</p>
            <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 800, color: WHITE, lineHeight: 1.2, maxWidth: 500 }}>
              Safe And Secure Plumbing, Electrical And Carpenter Work
            </h2>
            <Stars n={5} />
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <button style={{ background: YELLOW, color: INK, fontWeight: 700, fontSize: 13, border: "none", borderRadius: 7, padding: "13px 28px", cursor: "pointer" }}>Get A Quote</button>
            <button style={{ background: "transparent", color: WHITE, fontWeight: 600, fontSize: 13, border: "1.5px solid rgba(255,255,255,0.35)", borderRadius: 7, padding: "13px 28px", cursor: "pointer" }}>Our Services</button>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: DARK, padding: "60px 64px 28px" }}>
        <div className="mz-footer-grid" style={{ marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 34, height: 34, background: YELLOW, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ion-icon name="home-outline" style={{ fontSize: 18, color: INK }} />
              </div>
              <span style={{ fontSize: 16, fontWeight: 800, color: WHITE }}>Mezan</span>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 24, maxWidth: 220 }}>
              Delicious food made with love. Fresh ingredients, exceptional taste.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              {["logo-facebook","logo-instagram","logo-twitter","logo-pinterest"].map(icon => (
                <a key={icon} href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  <ion-icon name={icon} style={{ fontSize: 18 }} />
                </a>
              ))}
            </div>
          </div>

          {[
            { heading: "Quick Links",  links: ["Home","About Us","Shop","Mezan Blogs","Contact"]                               },
            { heading: "Our Services", links: ["Sanitary Plumbing","AC Installation","Cabinet Making","Window Carpentry","Electrical Work"] },
            { heading: "Contact Info", links: [] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: WHITE, marginBottom: 20 }}>{heading}</h4>
              {links.length > 0
                ? <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {links.map(l => <a key={l} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l}</a>)}
                  </div>
                : <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      { icon: "location-outline", text: "376 S Brasor Oral Suite 200, Sn Y Luis, Mexico" },
                      { icon: "call-outline",     text: "000 123 456 789"                                },
                      { icon: "mail-outline",     text: "maz@example.com"                                },
                      { icon: "time-outline",     text: "Mon–Sat: 8:00 AM – 8:00 PM"                    },
                    ].map(({ icon, text }) => (
                      <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <ion-icon name={icon} style={{ fontSize: 14, color: YELLOW, marginTop: 1, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{text}</span>
                      </div>
                    ))}
                  </div>
              }
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2024 Mezan. All Rights Reserved.</span>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacy Policy","Terms of Service"].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
