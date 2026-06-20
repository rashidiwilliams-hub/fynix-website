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
const NAVY    = "#1B3A5C";
const BLUE    = "#4A7FA5";
const BLUE_LT = "#D4E5F2";
const BG      = "#FFFFFF";
const BG_SOFT = "#F4F8FB";
const INK     = "#1A1A1A";
const MUTED   = "#777";
const TAG_BG  = "#E8F2F9";

/* ─── images ─── */
const IMG = {
  heroModel:   px(3764119, 1000),
  about:       px(3685523),
  prod1:       px(3762879),
  prod2:       px(4041392),
  prod3:       px(3997990),
  prod4:       px(3685523),
  bs1:         px(3762879),
  bs2:         px(4041392),
  bs3:         px(3997990),
  bs4:         px(3685523),
  quizWoman:   px(2736370),
  routine:     px(3997990, 1000),
  avatar1:     px(1036623, 80),
  avatar2:     px(762020,  80),
  avatar3:     px(1375736, 80),
};

/* ─── responsive ─── */
const CSS = `
  .lm-pad { padding-left: 60px; padding-right: 60px; }
  .lm-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 540px; align-items: center; gap: 32px; }
  .lm-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .lm-trust { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 48px; }
  .lm-products { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .lm-routine-grid { display: grid; grid-template-columns: 1fr 1fr; min-height: 300px; align-items: center; }
  .lm-care-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 20px; }
  .lm-bs-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .lm-reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .lm-footer-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr 1.4fr; gap: 40px; }
  .lm-promise-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
  .lm-find-grid { display: grid; grid-template-columns: 1fr 280px; gap: 32px; align-items: center; }

  @media (max-width: 1024px) {
    .lm-pad { padding-left: 32px; padding-right: 32px; }
    .lm-hero { grid-template-columns: 1fr; min-height: unset; }
    .lm-hero-right { display: none; }
    .lm-about-grid { grid-template-columns: 1fr; }
    .lm-trust { grid-template-columns: 1fr 1fr; }
    .lm-products { grid-template-columns: 1fr 1fr; }
    .lm-routine-grid { grid-template-columns: 1fr; }
    .lm-routine-img { display: none; }
    .lm-bs-grid { grid-template-columns: 1fr 1fr; }
    .lm-reviews-grid { grid-template-columns: 1fr 1fr; }
    .lm-footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
    .lm-promise-grid { grid-template-columns: 1fr; }
    .lm-find-grid { grid-template-columns: 1fr; }
    .lm-find-img { display: none; }
  }

  @media (max-width: 768px) {
    .lm-pad { padding-left: 20px; padding-right: 20px; }
    .lm-trust { grid-template-columns: 1fr 1fr; }
    .lm-products { grid-template-columns: 1fr; }
    .lm-bs-grid { grid-template-columns: 1fr; }
    .lm-reviews-grid { grid-template-columns: 1fr; }
    .lm-footer-grid { grid-template-columns: 1fr; }
    .lm-care-grid { grid-template-columns: 1fr; }
  }
`;

function Tag({ text }: { text: string }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 16 }}>
      <div style={{ width: 4, height: 4, borderRadius: "50%", background: BLUE }} />
      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: BLUE }}>{text}</span>
    </div>
  );
}

function Stars({ n = 5, size = 12 }: { n?: number; size?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <ion-icon key={i} name={i <= n ? "star" : "star-outline"}
          style={{ fontSize: size, color: "#F5A623" }} />
      ))}
    </div>
  );
}

export default function Lumiere() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: BG, color: INK, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{CSS}</style>

      {/* ══ NAVBAR ══ */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 60px", background: BG,
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        position: "sticky", top: 0, zIndex: 200,
      }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", color: INK, lineHeight: 1 }}>LUMIÈRE</div>
          <div style={{ fontSize: 8, letterSpacing: "0.22em", textTransform: "uppercase", color: MUTED, marginTop: 1 }}>SKINCARE</div>
        </div>

        <div style={{ display: "flex", gap: 28 }}>
          {["Home","Shop ▾","Our Story","Ingredients","Blog","Contact"].map((l, i) => (
            <a key={l} href="#" style={{ fontSize: 13, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? INK : MUTED, textDecoration: "none" }}>{l}</a>
          ))}
        </div>

        <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: NAVY, color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: 7, padding: "11px 22px", textDecoration: "none" }}>
          Shop Now <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
        </a>
      </nav>

      {/* ══ HERO ══ */}
      <section style={{ background: BG_SOFT, overflow: "hidden" }}>
        <div className="lm-pad lm-hero" style={{ paddingTop: 64, paddingBottom: 0 }}>
          {/* Left */}
          <div style={{ paddingBottom: 64 }}>
            <Tag text="Clean. Effective. Radiant." />
            <h1 style={{ fontSize: "clamp(2.4rem,4vw,3.4rem)", fontWeight: 900, color: INK, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 20 }}>
              Healthy Skin<br />Starts Here.
            </h1>
            <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, maxWidth: 380, marginBottom: 36 }}>
              Science-backed skincare solutions designed to reveal your natural glow and boost your confidence.
            </p>

            <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: INK, color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: 7, padding: "12px 24px", textDecoration: "none" }}>
                Shop Bestsellers <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
              </a>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: INK, fontWeight: 600, fontSize: 13, borderRadius: 7, padding: "12px 24px", textDecoration: "none", border: "1.5px solid rgba(0,0,0,0.18)" }}>
                Explore Routine
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ display: "flex" }}>
                {[IMG.avatar1, IMG.avatar2, IMG.avatar3].map((src, i) => (
                  <img key={i} src={src} alt="" style={{ width: 34, height: 34, borderRadius: "50%", objectFit: "cover", border: "2px solid #fff", marginLeft: i > 0 ? -10 : 0 }} />
                ))}
              </div>
              <div>
                <div style={{ fontSize: 12, color: MUTED, marginBottom: 3 }}>Trusted by 25k+ customers</div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <Stars n={5} size={12} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: INK }}>4.9/5</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — model + results card */}
          <div className="lm-hero-right" style={{ position: "relative", alignSelf: "flex-end" }}>
            <img src={IMG.heroModel} alt="Model" style={{ width: "100%", maxHeight: 520, objectFit: "cover", objectPosition: "center top", display: "block", borderRadius: "16px 16px 0 0" }} />
            {/* Clinically Proven card */}
            <div style={{
              position: "absolute", bottom: 24, right: -16,
              background: "#fff", borderRadius: 14, padding: "20px 24px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              minWidth: 210,
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 14 }}>Clinically Proven<br />Results</div>
              {[
                { label: "Hydration",   pct: "+92%" },
                { label: "Smoothness",  pct: "+88%" },
                { label: "Radiance",    pct: "+85%" },
                { label: "Even Tone",   pct: "+80%" },
              ].map(({ label, pct }) => (
                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <span style={{ fontSize: 12, color: MUTED }}>{label}</span>
                  <span style={{ fontSize: 12, fontWeight: 700, color: BLUE }}>{pct}</span>
                </div>
              ))}
              <div style={{ fontSize: 10, color: MUTED, marginTop: 8 }}>*Based on 4 weeks of use</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT US ══ */}
      <section className="lm-pad" style={{ paddingTop: 80, paddingBottom: 80 }}>
        <div className="lm-about-grid">
          {/* Left — product photo */}
          <div style={{ borderRadius: 20, overflow: "hidden", height: 360, background: BG_SOFT }}>
            <img src={IMG.about} alt="Skincare products" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          {/* Right — text */}
          <div>
            <Tag text="About Us" />
            <h2 style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 20 }}>
              Skincare that loves<br />your skin and the<br />planet.
            </h2>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.8, marginBottom: 28, maxWidth: 380 }}>
              We create clean, effective, and sustainable skincare that delivers visible results — without compromise.
            </p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: INK, fontWeight: 700, fontSize: 13, textDecoration: "none", borderBottom: `2px solid ${INK}`, paddingBottom: 2 }}>
              Our Story <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="lm-trust">
          {[
            { icon: "leaf-outline",      label: "Clean Ingredients",    sub: "Safe, non-toxic & dermatologist tested." },
            { icon: "heart-outline",     label: "Cruelty Free",         sub: "Kind to animals, always."                },
            { icon: "earth-outline",     label: "Sustainable",          sub: "Eco-conscious packaging."                },
            { icon: "people-outline",    label: "For All Skin Types",   sub: "Gentle care for every skin."             },
          ].map(({ icon, label, sub }) => (
            <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "20px 0", borderTop: "1px solid rgba(0,0,0,0.07)" }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: TAG_BG, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ion-icon name={icon} style={{ fontSize: 20, color: BLUE }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 4 }}>{label}</div>
                <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.55 }}>{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ FEATURED COLLECTION ══ */}
      <section style={{ background: BG_SOFT, paddingTop: 72, paddingBottom: 72 }}>
        <div className="lm-pad">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
            <div>
              <Tag text="Featured Collection" />
              <h2 style={{ fontSize: "1.7rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Our Best Sellers</h2>
            </div>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: INK, textDecoration: "none" }}>
              View All Products <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
            </a>
          </div>

          <div className="lm-products">
            {[
              { name: "Glow Serum",        sub: "Brightening & Radiance",  price: "$48.00", img: IMG.prod1 },
              { name: "Daily Cleanser",    sub: "Gentle & Hydrating",      price: "$28.00", img: IMG.prod2 },
              { name: "Hydra Moisturizer", sub: "Deep Hydration",          price: "$42.00", img: IMG.prod3 },
              { name: "Sun Shield SPF 50", sub: "Broad Spectrum",          price: "$32.00", img: IMG.prod4 },
            ].map(({ name, sub, price, img }) => (
              <div key={name} style={{ background: BG, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                <div style={{ height: 220, background: BLUE_LT, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={img} alt={name} style={{ height: "85%", width: "auto", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ padding: "16px 16px 18px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: INK, marginBottom: 3 }}>{name}</div>
                    <div style={{ fontSize: 11, color: MUTED, marginBottom: 8 }}>{sub}</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: INK }}>{price}</div>
                  </div>
                  <button style={{ width: 34, height: 34, borderRadius: "50%", background: INK, border: "none", color: "#fff", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, padding: 0, lineHeight: 1 }}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BUILD YOUR ROUTINE ══ */}
      <section className="lm-routine-grid" style={{ background: NAVY, overflow: "hidden" }}>
        {/* Left text */}
        <div className="lm-pad" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 24 }}>
            Build your perfect<br />skincare routine
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginBottom: 28 }}>
            Personalized care for your unique skin needs.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
            {["Personalized for you","Dermatologist-approved","Backed by science"].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ion-icon name="checkmark-outline" style={{ fontSize: 12, color: "#fff" }} />
                </div>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: NAVY, fontWeight: 700, fontSize: 13, borderRadius: 7, padding: "12px 24px", textDecoration: "none" }}>
            Take Skin Quiz <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
          </a>
        </div>
        {/* Right image */}
        <div className="lm-routine-img" style={{ overflow: "hidden", height: "100%", minHeight: 320 }}>
          <img src={IMG.routine} alt="Skincare routine" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
        </div>
      </section>

      {/* ══ FIND YOUR CARE ══ */}
      <section className="lm-pad" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="lm-find-grid">
          <div>
            <Tag text="Find Your Care" />
            <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Discover the treatment<br />that's right for you.
            </h2>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: INK, color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: 7, padding: "11px 22px", textDecoration: "none", marginBottom: 28 }}>
              Take Skin Quiz <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
            </a>

            <div className="lm-care-grid">
              {[
                { icon: "water-outline",      label: "Acne Care",     sub: "Clear and calm your skin."        },
                { icon: "sparkles-outline",   label: "Anti-Aging",    sub: "Reduce fine lines and wrinkles."  },
                { icon: "sunny-outline",      label: "Brightening",   sub: "Boost radiance and even tone."    },
                { icon: "rainy-outline",      label: "Hydration",     sub: "Deep moisture for all-day glow."  },
              ].map(({ icon, label, sub }) => (
                <div key={label} style={{ background: BG_SOFT, borderRadius: 12, padding: "16px", display: "flex", gap: 12, alignItems: "flex-start", cursor: "pointer", border: "1px solid rgba(0,0,0,0.06)" }}>
                  <ion-icon name={icon} style={{ fontSize: 20, color: BLUE, flexShrink: 0, marginTop: 1 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 3 }}>{label}</div>
                    <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.5 }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lm-find-img" style={{ borderRadius: 20, overflow: "hidden", height: 380, background: BLUE_LT }}>
            <img src={IMG.quizWoman} alt="Skincare" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ══ BESTSELLERS STRIP ══ */}
      <section style={{ background: BG_SOFT, paddingTop: 64, paddingBottom: 64 }}>
        <div className="lm-pad">
          <Tag text="Bestsellers" />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Top Rated Products</h2>
            <a href="#" style={{ fontSize: 13, fontWeight: 600, color: BLUE, textDecoration: "none" }}>View All →</a>
          </div>
          <div className="lm-bs-grid">
            {[
              { name: "Vitamin C Serum",      price: "$46.00", rating: 4.9, reviews: "1.2k", img: IMG.bs1 },
              { name: "Niacinamide 10% Serum",price: "$38.00", rating: 4.9, reviews: "982",  img: IMG.bs2 },
              { name: "Hyaluronic Acid Serum",price: "$44.00", rating: 4.9, reviews: "1.9k", img: IMG.bs3 },
              { name: "Ceramide Cream",       price: "$42.00", rating: 4.8, reviews: "743",  img: IMG.bs4 },
            ].map(({ name, price, rating, reviews, img }) => (
              <div key={name} style={{ background: BG, borderRadius: 14, overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ height: 180, background: BLUE_LT, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <img src={img} alt={name} style={{ height: "80%", width: "auto", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ padding: "14px 16px 16px" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 6 }}>{name}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 6 }}>{price}</div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <Stars n={5} size={11} />
                    <span style={{ fontSize: 11, color: MUTED }}>{rating} ({reviews})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ OUR PROMISE ══ */}
      <section className="lm-pad" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <div className="lm-promise-grid">
          <div>
            <Tag text="Our Promise" />
            <h2 style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Effective skincare with<br />clean, natural ingredients.
            </h2>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: INK, color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: 7, padding: "11px 22px", textDecoration: "none" }}>
              Our Ingredients <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
            </a>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              { icon: "ban-outline",        label: "Paraben Free"  },
              { icon: "flask-outline",      label: "Sulfate Free"  },
              { icon: "shield-outline",     label: "Silicone Free" },
            ].map(({ icon, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, background: BG_SOFT, borderRadius: 14, padding: "24px 28px", flex: 1, minWidth: 100, border: "1px solid rgba(0,0,0,0.06)" }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: TAG_BG, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ion-icon name={icon} style={{ fontSize: 22, color: BLUE }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: INK, textAlign: "center" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REAL RESULTS (REVIEWS) ══ */}
      <section style={{ background: BG_SOFT, paddingTop: 72, paddingBottom: 72 }}>
        <div className="lm-pad">
          <Tag text="Real Results" />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Real People, Real Results</h2>
          </div>
          <div className="lm-reviews-grid">
            {[
              { text: "Lumière has transformed my skin! It's glowing, hydrated, and so much smoother.", name: "Jessica R.", loc: "New York, USA", img: IMG.avatar1 },
              { text: "Finally found skincare that is gentle and effective. My skin has never looked better!", name: "Amanda L.", loc: "London, UK", img: IMG.avatar2 },
              { text: "I've tried so many brands but Lumière is the only one that actually delivers results.", name: "Sarah K.", loc: "Sydney, AU", img: IMG.avatar3 },
            ].map(({ text, name, loc, img }) => (
              <div key={name} style={{ background: BG, borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                <ion-icon name="quote-outline" style={{ fontSize: 28, color: BLUE_LT, marginBottom: 16, display: "block" }} />
                <p style={{ fontSize: 14, color: INK, lineHeight: 1.75, marginBottom: 24 }}>&ldquo;{text}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img src={img} alt={name} style={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover" }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: INK }}>{name}</div>
                    <div style={{ fontSize: 11, color: MUTED, marginBottom: 4 }}>{loc}</div>
                    <Stars n={5} size={11} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 28 }}>
            {[0,1,2,3].map(i => (
              <div key={i} style={{ width: i === 0 ? 20 : 7, height: 7, borderRadius: 4, background: i === 0 ? NAVY : "#D0D8E0" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section className="lm-pad" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <Tag text="FAQ" />
        <h2 style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 36 }}>Everything You Need to Know</h2>
        <div style={{ maxWidth: 680 }}>
          {[
            { q: "Are your products suitable for sensitive skin?",   a: "Yes! All our formulas are dermatologist-tested, fragrance-free, and designed to be gentle on even the most sensitive skin types." },
            { q: "Are your products cruelty-free?",                  a: "Absolutely. We never test on animals and are certified cruelty-free by Leaping Bunny." },
            { q: "How long will it take to see results?",            a: "Most customers see visible improvements within 2–4 weeks of consistent use, with clinically significant results after 4–6 weeks." },
            { q: "Where are your products made?",                    a: "All Lumière products are formulated and manufactured in certified facilities following strict quality standards." },
          ].map(({ q, a }, i) => (
            <div key={q} style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
              >
                <span style={{ fontSize: 14, fontWeight: 600, color: INK }}>{q}</span>
                <ion-icon name={openFaq === i ? "remove-outline" : "add-outline"} style={{ fontSize: 20, color: BLUE, flexShrink: 0, marginLeft: 16 }} />
              </button>
              {openFaq === i && (
                <div style={{ paddingBottom: 18, fontSize: 13, color: MUTED, lineHeight: 1.75 }}>{a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: NAVY, padding: "56px 60px 28px" }}>
        <div className="lm-footer-grid" style={{ marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 15, fontWeight: 900, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff" }}>LUMIÈRE</div>
              <div style={{ fontSize: 8, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 1 }}>SKINCARE</div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 24, maxWidth: 200 }}>
              Clean, effective skincare backed by science.
            </p>
            <div style={{ display: "flex", gap: 14 }}>
              {["logo-instagram","logo-facebook","logo-tiktok","logo-pinterest"].map(icon => (
                <a key={icon} href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  <ion-icon name={icon} style={{ fontSize: 18 }} />
                </a>
              ))}
            </div>
          </div>

          {[
            { heading: "Shop",    links: ["All Products","Best Sellers","New Arrivals","Women","Skincare Quiz"] },
            { heading: "Company", links: ["Our Story","Ingredients","Sustainability","Careers"]                 },
            { heading: "Help",    links: ["FAQ","Shipping","Returns","Contact Us"]                              },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>{heading}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map(l => <a key={l} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l}</a>)}
              </div>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>Newsletter</h4>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: 20 }}>
              Get 10% off your first order and skincare tips.
            </p>
            <div style={{ display: "flex" }}>
              <input type="email" placeholder="Enter your email"
                style={{ flex: 1, padding: "10px 14px", fontSize: 12, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", borderRight: "none", borderRadius: "5px 0 0 5px", color: "#fff", outline: "none" }} />
              <button style={{ background: "#fff", color: NAVY, border: "none", borderRadius: "0 5px 5px 0", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <ion-icon name="arrow-forward-outline" style={{ fontSize: 15, color: NAVY }} />
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 22, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2024 Lumière Skincare. All rights reserved.</span>
          <a href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
}
