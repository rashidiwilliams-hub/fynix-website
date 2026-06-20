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
const BG      = "#FAF7F2";
const GREEN   = "#2B5F20";
const GREEN2  = "#3A7A2A";
const LIME    = "#7CB518";
const INK     = "#1A1A1A";
const MUTED   = "#777";
const CARD    = "#FFFFFF";

/* ─── images ─── */
const IMG = {
  hero:       px(1640777, 1000),
  dish1:      px(1640777),
  dish2:      px(1640768),
  dish3:      px(3763847),
  dish4:      px(291528),
  promo:      px(1279330),
  blog1:      px(1640772),
  blog2:      px(1640774),
  blog3:      px(291528),
  avatar1:    px(1036623, 120),
  avatar2:    px(1043474, 120),
  avatar3:    px(762020,  120),
};

/* ─── responsive styles ─── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

  .th-pad { padding-left: 52px; padding-right: 52px; }
  .th-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: 520px; align-items: center; gap: 40px; }
  .th-trust { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .th-dishes { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
  .th-reviews { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .th-blog { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .th-footer-grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr 1.4fr; gap: 48px; }
  .th-newsletter { display: flex; align-items: center; gap: 40px; flex-wrap: wrap; }

  @media (max-width: 1024px) {
    .th-pad { padding-left: 32px; padding-right: 32px; }
    .th-hero { grid-template-columns: 1fr; min-height: unset; }
    .th-hero-img { display: none; }
    .th-dishes { grid-template-columns: 1fr 1fr; }
    .th-trust { grid-template-columns: 1fr 1fr; }
    .th-reviews { grid-template-columns: 1fr 1fr; }
    .th-blog { grid-template-columns: 1fr 1fr; }
    .th-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  }

  @media (max-width: 768px) {
    .th-pad { padding-left: 20px; padding-right: 20px; }
    .th-dishes { grid-template-columns: 1fr; }
    .th-trust { grid-template-columns: 1fr 1fr; }
    .th-reviews { grid-template-columns: 1fr; }
    .th-blog { grid-template-columns: 1fr; }
    .th-footer-grid { grid-template-columns: 1fr; gap: 28px; }
  }
`;

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <ion-icon key={i} name={i <= n ? "star" : "star-outline"}
          style={{ fontSize: 13, color: "#F5A623" }} />
      ))}
    </div>
  );
}

export default function TasteHaven() {
  const [cartCount] = useState(0);

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: BG, color: INK, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{CSS}</style>

      {/* ══ NAVBAR ══ */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "14px 52px", background: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        position: "sticky", top: 0, zIndex: 200,
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, background: GREEN, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ion-icon name="leaf-outline" style={{ fontSize: 20, color: "#fff" }} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800, color: INK, lineHeight: 1.1 }}>TasteHaven</div>
            <div style={{ fontSize: 9, color: MUTED, letterSpacing: "0.04em" }}>Good Food, Good Mood</div>
          </div>
        </div>

        {/* Nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {["Home","Menu","Catering","About Us","Blog","Contact"].map((l, i) => (
            <div key={l} style={{ position: "relative" }}>
              <a href="#" style={{ fontSize: 14, fontWeight: i === 0 ? 700 : 500, color: i === 0 ? INK : MUTED, textDecoration: "none" }}>{l}</a>
              {i === 0 && <div style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 2, background: GREEN, borderRadius: 1 }} />}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ion-icon name="person-outline" style={{ fontSize: 22, color: INK, cursor: "pointer" }} />
          <div style={{ position: "relative", cursor: "pointer" }}>
            <ion-icon name="bag-outline" style={{ fontSize: 22, color: INK }} />
            <span style={{ position: "absolute", top: -6, right: -6, background: GREEN, color: "#fff", fontSize: 9, fontWeight: 800, borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>{cartCount}</span>
          </div>
          <a href="#" style={{ background: GREEN, color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: 8, padding: "10px 20px", textDecoration: "none", whiteSpace: "nowrap" }}>
            Order Now
          </a>
        </div>
      </nav>

      {/* ══ HERO ══ */}
      <section className="th-pad" style={{ paddingTop: 64, paddingBottom: 64, background: BG }}>
        <div className="th-hero">
          {/* Left */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: GREEN, marginBottom: 20 }}>
              Delicious. Fresh. Made For You.
            </p>
            <h1 style={{ fontSize: "clamp(2.6rem,4vw,3.8rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 6 }}>
              Good Food
            </h1>
            <h1 style={{ fontSize: "clamp(2.6rem,4vw,3.8rem)", fontWeight: 900, lineHeight: 1.08, letterSpacing: "-0.02em", color: LIME, fontFamily: "'Dancing Script', cursive", marginBottom: 24 }}>
              Great Mood
            </h1>
            <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, maxWidth: 380, marginBottom: 36 }}>
              Experience a delightful journey of flavors made with fresh ingredients and a passion for perfection.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 52, flexWrap: "wrap" }}>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: GREEN, color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: 8, padding: "13px 26px", textDecoration: "none" }}>
                Explore Menu <ion-icon name="arrow-forward-outline" style={{ fontSize: 15 }} />
              </a>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: INK, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
                <div style={{ width: 34, height: 34, borderRadius: "50%", border: `1.5px solid ${INK}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ion-icon name="play-outline" style={{ fontSize: 13, marginLeft: 2, color: INK }} />
                </div>
                Watch Video
              </a>
            </div>

            {/* Trust icons */}
            <div className="th-trust">
              {[
                { icon: "nutrition-outline",   label: "Fresh Ingredients", sub: "Sourced Daily"       },
                { icon: "restaurant-outline",  label: "Expert Chefs",      sub: "Passionate & Skilled" },
                { icon: "bicycle-outline",     label: "Fast Delivery",     sub: "On Time, Every Time" },
                { icon: "shield-checkmark-outline", label: "100% Quality", sub: "You Can Trust"       },
              ].map(({ icon, label, sub }) => (
                <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 6 }}>
                  <ion-icon name={icon} style={{ fontSize: 28, color: GREEN }} />
                  <div style={{ fontSize: 12, fontWeight: 700, color: INK, lineHeight: 1.3 }}>{label}</div>
                  <div style={{ fontSize: 11, color: MUTED }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — food photo + review badge */}
          <div className="th-hero-img" style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", height: 440 }}>
              <img src={IMG.hero} alt="Delicious food" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
            </div>
            {/* Review badge */}
            <div style={{
              position: "absolute", bottom: 24, right: -16,
              background: "#fff", borderRadius: 14, padding: "14px 18px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
              display: "flex", alignItems: "center", gap: 12,
              minWidth: 200,
            }}>
              <div style={{ display: "flex" }}>
                {[IMG.avatar1, IMG.avatar2, IMG.avatar3].map((src, i) => (
                  <img key={i} src={src} alt="" style={{ width: 32, height: 32, borderRadius: "50%", objectFit: "cover", border: "2px solid #fff", marginLeft: i > 0 ? -10 : 0 }} />
                ))}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: INK }}>4.8k+</div>
                <div style={{ fontSize: 11, color: MUTED, marginBottom: 4 }}>Happy Customers</div>
                <Stars />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ MOST LOVED DISHES ══ */}
      <section className="th-pad" style={{ paddingTop: 72, paddingBottom: 72 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: GREEN, marginBottom: 10 }}>Popular Dishes</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Our Most Loved Dishes</h2>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: GREEN, textDecoration: "none" }}>
            View Full Menu <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
          </a>
        </div>

        <div className="th-dishes">
          {[
            { name: "Creamy Alfredo Pasta",  desc: "Rich and creamy pasta with parmesan and grilled chicken.", price: "$14.99", img: IMG.dish1 },
            { name: "Avocado Power Bowl",    desc: "Healthy bowl with quinoa, avocado, veggies & lemon dressing.", price: "$13.99", img: IMG.dish2 },
            { name: "Grilled Salmon",        desc: "Perfectly grilled salmon with garlic butter and roasted veggies.", price: "$18.99", img: IMG.dish3 },
            { name: "Choco Lava Cake",       desc: "Warm chocolate cake with a rich, gooey center.", price: "$8.99", img: IMG.dish4 },
          ].map(({ name, desc, price, img }) => (
            <div key={name} style={{ background: CARD, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                <button style={{ position: "absolute", top: 12, right: 12, background: "#fff", border: "none", borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: 0 }}>
                  <ion-icon name="heart-outline" style={{ fontSize: 15, color: INK }} />
                </button>
              </div>
              <div style={{ padding: "16px 16px 20px" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: INK, marginBottom: 6 }}>{name}</div>
                <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.6, marginBottom: 14 }}>{desc}</div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 16, fontWeight: 800, color: INK }}>{price}</span>
                  <button style={{ width: 32, height: 32, borderRadius: "50%", background: GREEN, border: "none", color: "#fff", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: 0, lineHeight: 1 }}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PROMO BANNER ══ */}
      <section className="th-pad" style={{ paddingBottom: 72 }}>
        <div style={{
          background: `linear-gradient(135deg, #1E4A14 0%, ${GREEN} 60%, #3A7A2A 100%)`,
          borderRadius: 20, overflow: "hidden",
          display: "grid", gridTemplateColumns: "220px 1fr 160px",
          alignItems: "center", gap: 0, minHeight: 180,
          position: "relative",
        }}>
          {/* Food photo left */}
          <div style={{ height: 200, overflow: "hidden", borderRadius: "0 50% 50% 0" }}>
            <img src={IMG.promo} alt="Promo dish" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>

          {/* Text center */}
          <div style={{ padding: "36px 40px" }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.12)", borderRadius: 4, padding: "4px 10px" }}>
              Special Offer
            </span>
            <h3 style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", fontWeight: 900, color: "#fff", lineHeight: 1.2, letterSpacing: "-0.02em", margin: "14px 0 10px" }}>
              Get 20% Off On Your First Order!
            </h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>
              Join TasteHaven and enjoy delicious food at a special welcome price.
            </p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: GREEN, fontWeight: 700, fontSize: 13, borderRadius: 7, padding: "10px 22px", textDecoration: "none" }}>
              Order Now <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
            </a>
          </div>

          {/* 20% badge */}
          <div style={{ display: "flex", justifyContent: "center", paddingRight: 36 }}>
            <div style={{ width: 110, height: 110, borderRadius: "50%", border: "2px dashed rgba(255,255,255,0.4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1 }}>20%</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.8)", letterSpacing: "0.06em" }}>OFF</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section className="th-pad" style={{ paddingBottom: 72 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: GREEN, marginBottom: 10 }}>What Our Customers Say</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Loved By Thousands</h2>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: GREEN, textDecoration: "none" }}>
            View All Reviews <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
          </a>
        </div>

        <div style={{ position: "relative" }}>
          {/* Arrows */}
          {["chevron-back-outline","chevron-forward-outline"].map((icon, i) => (
            <button key={icon} style={{
              position: "absolute", top: "50%", transform: "translateY(-50%)",
              [i === 0 ? "left" : "right"]: -20,
              width: 36, height: 36, borderRadius: "50%",
              background: "#fff", border: "1px solid rgba(0,0,0,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", zIndex: 2, boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}>
              <ion-icon name={icon} style={{ fontSize: 16, color: INK }} />
            </button>
          ))}

          <div className="th-reviews">
            {[
              { text: "The food is absolutely amazing! Every bite is full of taste and freshness. Highly recommended!", name: "Sophia Martinez", loc: "Los Angeles, CA", img: IMG.avatar1 },
              { text: "Great variety, excellent service, and super fast delivery. TasteHaven is my go-to for every meal.", name: "James Anderson",  loc: "New York, NY",    img: IMG.avatar2 },
              { text: "Fresh ingredients, perfect portions, and beautifully packed. I love their attention to detail!", name: "Olivia Bennett",  loc: "Chicago, IL",     img: IMG.avatar3 },
            ].map(({ text, name, loc, img }) => (
              <div key={name} style={{ background: CARD, borderRadius: 16, padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <ion-icon name="chatbubble-ellipses-outline" style={{ fontSize: 32, color: GREEN, opacity: 0.3, marginBottom: 16, display: "block" }} />
                <p style={{ fontSize: 14, color: INK, lineHeight: 1.75, marginBottom: 24 }}>{text}</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <img src={img} alt={name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: INK }}>{name}</div>
                    <div style={{ fontSize: 11, color: MUTED, marginBottom: 4 }}>{loc}</div>
                    <Stars />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BLOG ══ */}
      <section className="th-pad" style={{ paddingBottom: 72 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: GREEN, marginBottom: 10 }}>From Our Blog</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>Latest Recipes & Tips</h2>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: GREEN, textDecoration: "none" }}>
            View All Articles <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
          </a>
        </div>

        <div className="th-blog">
          {[
            { date: "June 10, 2024", tag: "Healthy Eating", title: "10 Healthy Lunch Ideas You'll Love",        img: IMG.blog1 },
            { date: "June 5, 2024",  tag: "Cooking Tips",   title: "5 Cooking Tips From Our Chefs",             img: IMG.blog2 },
            { date: "June 1, 2024",  tag: "Desserts",        title: "Delicious Desserts You Can Make At Home",   img: IMG.blog3 },
          ].map(({ date, tag, title, img }) => (
            <div key={title} style={{ background: CARD, borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <div style={{ height: 180, overflow: "hidden" }}>
                <img src={img} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "20px 20px 24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 11, color: MUTED }}>{date}</span>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: MUTED, display: "inline-block" }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: GREEN }}>{tag}</span>
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: INK, lineHeight: 1.4, marginBottom: 14 }}>{title}</h4>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: GREEN, textDecoration: "none" }}>
                  Read More <ion-icon name="arrow-forward-outline" style={{ fontSize: 13 }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ NEWSLETTER ══ */}
      <section className="th-pad" style={{ paddingTop: 40, paddingBottom: 40, background: "#fff" }}>
        <div className="th-newsletter">
          <div style={{ display: "flex", alignItems: "center", gap: 20, flex: 1 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: `${GREEN}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <ion-icon name="mail-outline" style={{ fontSize: 26, color: GREEN }} />
            </div>
            <div>
              <div style={{ fontSize: 17, fontWeight: 800, color: INK, marginBottom: 4 }}>Stay Updated</div>
              <div style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}>Subscribe to get special offers, new menu updates, and cooking tips.</div>
            </div>
          </div>
          <div style={{ display: "flex", flex: 1, maxWidth: 480 }}>
            <input type="email" placeholder="Enter your email"
              style={{ flex: 1, padding: "13px 18px", fontSize: 14, border: "1px solid rgba(0,0,0,0.12)", borderRight: "none", borderRadius: "8px 0 0 8px", outline: "none", background: BG, color: INK }} />
            <button style={{ background: GREEN, color: "#fff", border: "none", borderRadius: "0 8px 8px 0", padding: "13px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: "#111", padding: "56px 52px 28px" }}>
        <div className="th-footer-grid" style={{ marginBottom: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: GREEN, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ion-icon name="leaf-outline" style={{ fontSize: 18, color: "#fff" }} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#fff" }}>TasteHaven</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}>Good Food, Good Mood</div>
              </div>
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

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Home","Menu","Catering","About Us","Contact"].map(l => (
                <a key={l} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>Support</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["FAQ","Shipping & Delivery","Returns","Privacy Policy","Terms & Conditions"].map(l => (
                <a key={l} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Information */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>Information</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Our Story","Careers","Blog","Press","Franchise"].map(l => (
                <a key={l} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l}</a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>Contact Us</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { icon: "location-outline",  text: "123 Foodie Lane, Los Angeles, CA 90001" },
                { icon: "call-outline",      text: "(213) 555-7890"                          },
                { icon: "mail-outline",      text: "hello@tastehaven.com"                    },
                { icon: "time-outline",      text: "Mon – Sun: 9:00 AM – 10:00 PM"          },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <ion-icon name={icon} style={{ fontSize: 15, color: GREEN2, marginTop: 1, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 22, textAlign: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© 2024 TasteHaven. All Rights Reserved.</span>
        </div>
      </footer>
    </div>
  );
}
