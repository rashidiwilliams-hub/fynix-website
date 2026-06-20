"use client";

import { useState, useEffect } from "react";

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
const ORANGE = "#F5A200";
const DARK   = "#1A1A1A";
const DARK2  = "#2B2B2B";
const BG     = "#FFFFFF";
const GRAY   = "#F5F5F5";
const MUTED  = "#777";
const BORDER = "#E8E8E8";

/* ─── images ─── */
const IMG = {
  heroBg:     px(3766189, 1200),
  bottle1:    px(3766189),
  bottle2:    px(3994840),
  bottle3:    px(3766189),
  catPhone:   px(788946, 300),
  catLaptop:  px(18105,  300),
  catTV:      px(4009402,300),
  catPC:      px(1779487,300),
  catHead:    px(3394658,300),
  catCamera:  px(90946,  300),
  deal1:      px(3766189, 400),
  deal2:      px(3994840, 400),
  promoHot:   px(3766189, 600),
  promoFri:   px(3994840, 600),
  promoSmart: px(3766189, 600),
  promoEco:   px(3994840, 600),
  feat1:      px(3766189, 300),
  feat2:      px(3994840, 300),
  feat3:      px(3766189, 300),
  feat4:      px(3994840, 300),
  feat5:      px(3766189, 300),
  avatar:     px(1036623, 60),
};

const CSS = `
  .bs-topbar { display: flex; align-items: center; gap: 0; }
  .bs-topbar-left { display: flex; align-items: center; gap: 20px; flex: 1; }
  .bs-topbar-right { display: flex; align-items: center; gap: 16px; }
  .bs-navbar { display: flex; align-items: center; gap: 24px; padding: 14px 40px; background: #fff; border-bottom: 1px solid #eee; }
  .bs-nav-logo { flex: 0 0 auto; }
  .bs-nav-search { flex: 1; display: flex; align-items: center; border: 1.5px solid #ddd; border-radius: 4px; overflow: hidden; max-width: 540px; }
  .bs-nav-right { display: flex; align-items: center; gap: 20px; margin-left: auto; }
  .bs-menubar { display: flex; align-items: center; padding: 0 40px; background: ${DARK}; }
  .bs-menubar-links { display: flex; align-items: center; flex: 1; }
  .bs-trust { display: grid; grid-template-columns: repeat(5, 1fr); border-bottom: 1px solid ${BORDER}; }
  .bs-cats { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
  .bs-deals { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .bs-promo-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; }
  .bs-promo-left { display: grid; grid-template-rows: 1fr 1fr; gap: 6px; }
  .bs-promo-right { display: grid; grid-template-rows: 1fr 1fr; gap: 6px; }
  .bs-featured { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
  .bs-hero-inner { display: grid; grid-template-columns: 1fr 1fr; align-items: center; padding: 40px 40px 0; min-height: 340px; }
  .bs-deal-inner { display: flex; align-items: center; gap: 20px; }
  .bs-deal-img { width: 160px; flex-shrink: 0; }

  @media (max-width: 1024px) {
    .bs-trust { grid-template-columns: repeat(3, 1fr); }
    .bs-cats { grid-template-columns: repeat(3, 1fr); }
    .bs-featured { grid-template-columns: repeat(3, 1fr); }
    .bs-promo-grid { grid-template-columns: 1fr; }
    .bs-promo-left { grid-template-rows: auto; grid-template-columns: 1fr 1fr; }
    .bs-promo-right { grid-template-rows: auto; grid-template-columns: 1fr 1fr; }
    .bs-hero-inner { grid-template-columns: 1fr; }
    .bs-hero-products { display: none; }
    .bs-topbar-left .bs-topbar-item:nth-child(n+3) { display: none; }
    .bs-menubar { padding: 0 20px; }
    .bs-navbar { padding: 14px 20px; }
  }

  @media (max-width: 768px) {
    .bs-trust { grid-template-columns: repeat(2, 1fr); }
    .bs-cats { grid-template-columns: repeat(2, 1fr); }
    .bs-deals { grid-template-columns: 1fr; }
    .bs-featured { grid-template-columns: repeat(2, 1fr); }
    .bs-promo-left { grid-template-columns: 1fr; }
    .bs-promo-right { grid-template-columns: 1fr; }
    .bs-deal-inner { flex-direction: column; align-items: flex-start; }
    .bs-deal-img { width: 100%; }
    .bs-nav-search { display: none; }
    .bs-menubar-item:nth-child(n+4) { display: none; }
  }
`;

function Stars({ n = 5, half = false }: { n?: number; half?: boolean }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <ion-icon key={i}
          name={i <= n ? "star" : (half && i === n + 1) ? "star-half-outline" : "star-outline"}
          style={{ fontSize: 12, color: ORANGE }} />
      ))}
    </div>
  );
}

function Countdown() {
  const [time, setTime] = useState({ d: 365, h: 23, m: 7, s: 49 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime(prev => {
        let { d, h, m, s } = prev;
        s--; if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; d--; }
        return { d: Math.max(0,d), h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
      {[{ v: time.d, l: "DAYS" }, { v: time.h, l: "HRS" }, { v: time.m, l: "MINS" }, { v: time.s, l: "SECS" }].map(({ v, l }) => (
        <div key={l} style={{ textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: DARK, lineHeight: 1 }}>{pad(v)}</div>
          <div style={{ fontSize: 9, color: MUTED, marginTop: 2 }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

function Section({ title }: { title: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 32 }}>
      <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: DARK, marginBottom: 8 }}>{title}</h2>
      <div style={{ width: 40, height: 3, background: ORANGE, margin: "0 auto" }} />
    </div>
  );
}

export default function BestShop() {
  const [heroSlide, setHeroSlide] = useState(0);

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: BG, color: DARK, overflowX: "hidden" }}>
      <style>{CSS}</style>

      {/* ══ TOP BAR ══ */}
      <div style={{ background: "#FFF8ED", borderBottom: `1px solid #F0E0C0`, padding: "7px 40px" }}>
        <div className="bs-topbar">
          <div className="bs-topbar-left">
            {[
              { icon: "storefront-outline",   text: "Welcome Our Online Store"     },
              { icon: "mail-outline",          text: "Email: bestshop@mail.com"     },
              { icon: "globe-outline",         text: "bestshopstore.com"            },
              { icon: "call-outline",          text: "Hotline: (086) 4144-000"      },
            ].map(({ icon, text }) => (
              <div key={text} className="bs-topbar-item" style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <ion-icon name={icon} style={{ fontSize: 13, color: MUTED }} />
                <span style={{ fontSize: 11, color: MUTED }}>{text}</span>
              </div>
            ))}
          </div>
          <div className="bs-topbar-right">
            {["USD ▾","🇺🇸 English ▾"].map(t => (
              <span key={t} style={{ fontSize: 11, color: MUTED, cursor: "pointer" }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ NAVBAR ══ */}
      <div className="bs-navbar">
        {/* Logo */}
        <div className="bs-nav-logo" style={{ marginRight: 32 }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: ORANGE, lineHeight: 1 }}>BestShop</div>
          <div style={{ fontSize: 9, color: MUTED, letterSpacing: "0.04em" }}>Shop easy, live smart!</div>
        </div>

        {/* Search */}
        <div className="bs-nav-search">
          <input type="text" placeholder="Search product..." style={{ flex: 1, padding: "9px 14px", border: "none", fontSize: 13, outline: "none", background: "#fff" }} />
          <select style={{ padding: "9px 12px", border: "none", borderLeft: "1px solid #ddd", fontSize: 12, outline: "none", background: "#f9f9f9", color: MUTED }}>
            <option>All Categories</option>
            <option>Smartphones</option>
            <option>Laptops</option>
            <option>Headphones</option>
          </select>
          <button style={{ background: ORANGE, border: "none", color: "#fff", fontWeight: 700, fontSize: 12, padding: "9px 20px", cursor: "pointer", letterSpacing: "0.05em" }}>SEARCH</button>
        </div>

        {/* Right */}
        <div className="bs-nav-right">
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: DARK }}>
            <ion-icon name="person-outline" style={{ fontSize: 22, color: MUTED }} />
            <div>
              <div style={{ fontSize: 10, color: MUTED }}>Hello, Guest</div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Login / Register</div>
            </div>
          </a>
          <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: DARK }}>
            <div style={{ position: "relative" }}>
              <ion-icon name="cart-outline" style={{ fontSize: 26, color: MUTED }} />
              <span style={{ position: "absolute", top: -4, right: -4, background: ORANGE, color: "#fff", fontSize: 9, fontWeight: 700, borderRadius: "50%", width: 16, height: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>0</span>
            </div>
            <div>
              <div style={{ fontSize: 10, color: MUTED }}>Your Cart</div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>(0) <span style={{ color: ORANGE }}>$0</span></div>
            </div>
          </a>
        </div>
      </div>

      {/* ══ MENU BAR ══ */}
      <div className="bs-menubar">
        <div className="bs-menubar-links">
          {[
            { label: "HOME",       arrow: false, active: true  },
            { label: "FEATURES",   arrow: true,  active: false },
            { label: "COLLECTION", arrow: true,  active: false },
            { label: "SHOP",       arrow: false, active: false },
            { label: "ABOUT US",   arrow: false, active: false },
            { label: "CONTACT US", arrow: false, active: false },
          ].map(({ label, arrow, active }) => (
            <a key={label} href="#" className="bs-menubar-item" style={{ display: "flex", alignItems: "center", gap: 4, padding: "12px 16px", fontSize: 12, fontWeight: 600, color: active ? ORANGE : "rgba(255,255,255,0.85)", textDecoration: "none", letterSpacing: "0.04em", borderBottom: active ? `2px solid ${ORANGE}` : "2px solid transparent" }}>
              {label}{arrow && <ion-icon name="chevron-down-outline" style={{ fontSize: 11 }} />}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 4, marginLeft: "auto" }}>
          <a href="#" style={{ padding: "12px 16px", fontSize: 12, fontWeight: 700, color: ORANGE, textDecoration: "none", letterSpacing: "0.04em" }}>SPECIAL OFFER</a>
          <a href="#" style={{ padding: "10px 16px", margin: "6px 0", fontSize: 11, fontWeight: 700, color: DARK, textDecoration: "none", background: ORANGE, borderRadius: 4, letterSpacing: "0.04em" }}>PURCHASE THEME</a>
        </div>
      </div>

      {/* ══ HERO BANNER ══ */}
      <div style={{ background: "#F5EDE0", position: "relative", overflow: "hidden" }}>
        <div className="bs-hero-inner" style={{ maxWidth: "100%" }}>
          {/* Left text */}
          <div style={{ padding: "40px 0 40px 0", zIndex: 2 }}>
            <div style={{ display: "inline-block", background: ORANGE, color: "#fff", fontSize: 11, fontWeight: 700, borderRadius: 20, padding: "5px 14px", marginBottom: 20, letterSpacing: "0.06em" }}>NEW ARRIVAL</div>
            <h1 style={{ fontSize: "clamp(2rem,3.5vw,3rem)", fontWeight: 900, color: DARK, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16, textTransform: "uppercase" }}>
              Premium<br />Thermos Bottle
            </h1>
            <p style={{ fontSize: 14, color: MUTED, marginBottom: 32, fontWeight: 500 }}>Keep Warm • Keep Cool • All Day Long</p>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: DARK, color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: 6, padding: "13px 28px", textDecoration: "none", letterSpacing: "0.05em" }}>
              SHOP NOW <ion-icon name="arrow-forward-outline" style={{ fontSize: 16 }} />
            </a>
          </div>

          {/* Right — product images */}
          <div className="bs-hero-products" style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 20, height: 340, paddingBottom: 0 }}>
            {[IMG.bottle1, IMG.bottle2, IMG.bottle3].map((src, i) => (
              <img key={i} src={src} alt="Thermos" style={{ height: [260, 310, 240][i], width: "auto", objectFit: "contain", display: "block", filter: i === 1 ? "none" : "brightness(0.92)" }} />
            ))}
          </div>
        </div>

        {/* Prev / Next arrows */}
        {[{side:"left",icon:"chevron-back-outline",dir:-1},{side:"right",icon:"chevron-forward-outline",dir:1}].map(({side,icon,dir}) => (
          <button key={side} onClick={() => setHeroSlide(s => (s + dir + 3) % 3)} style={{ position:"absolute", top:"50%", [side]: 12, transform:"translateY(-50%)", width:36, height:36, borderRadius:"50%", background:"rgba(0,0,0,0.5)", border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", zIndex:10 }}>
            <ion-icon name={icon} style={{ fontSize:18, color:"#fff" }} />
          </button>
        ))}
        {/* Dots */}
        <div style={{ position:"absolute", bottom:14, left:"50%", transform:"translateX(-50%)", display:"flex", gap:6 }}>
          {[0,1,2].map(i => <div key={i} style={{ width:i===heroSlide?22:8, height:8, borderRadius:4, background:i===heroSlide?ORANGE:"rgba(0,0,0,0.25)", transition:"width 0.25s" }} />)}
        </div>
      </div>

      {/* ══ TRUST STRIP ══ */}
      <div className="bs-trust" style={{ background: BG, padding: "0" }}>
        {[
          { icon: "airplane-outline",      title: "Free Shipping",    sub: "From $79.00"       },
          { icon: "shield-checkmark-outline", title: "Money Guarantee", sub: "30 days back"     },
          { icon: "card-outline",          title: "Secure Payment",   sub: "100% secure"       },
          { icon: "headset-outline",       title: "Online Support",   sub: "24 hours a day"    },
          { icon: "lock-closed-outline",   title: "100% Safe",        sub: "Secure Shopping"   },
        ].map(({ icon, title, sub }) => (
          <div key={title} style={{ display: "flex", alignItems: "center", gap: 12, padding: "18px 20px", borderRight: `1px solid ${BORDER}` }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", border: `1.5px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <ion-icon name={icon} style={{ fontSize: 18, color: DARK }} />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: DARK }}>{title}</div>
              <div style={{ fontSize: 11, color: MUTED }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ══ POPULAR CATEGORIES ══ */}
      <section style={{ padding: "48px 40px" }}>
        <Section title="Popular Categories" />
        <div style={{ position: "relative" }}>
          <div className="bs-cats">
            {[
              { img: IMG.catPhone,  label: "Smartphones", active: false },
              { img: IMG.catLaptop, label: "Laptops",     active: false },
              { img: IMG.catTV,     label: "TV & Audio",  active: true  },
              { img: IMG.catPC,     label: "Computers",   active: false },
              { img: IMG.catHead,   label: "Headphones",  active: false },
              { img: IMG.catCamera, label: "Cameras",     active: false },
            ].map(({ img, label, active }) => (
              <div key={label} style={{ border: `1.5px solid ${active ? ORANGE : BORDER}`, borderRadius: 8, padding: 12, textAlign: "center", cursor: "pointer", background: active ? "#FFF8ED" : BG, transition: "all 0.2s" }}>
                <div style={{ height: 100, overflow: "hidden", borderRadius: 6, marginBottom: 10, background: GRAY }}>
                  <img src={img} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ fontSize: 12, fontWeight: 600, color: active ? ORANGE : DARK }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROMO TICKER ══ */}
      <div style={{ background: ORANGE, padding: "11px 40px", display: "flex", alignItems: "center", gap: 10, overflow: "hidden" }}>
        <ion-icon name="megaphone-outline" style={{ fontSize: 16, color: "#fff", flexShrink: 0 }} />
        <span style={{ fontSize: 13, color: "#fff", fontWeight: 500, whiteSpace: "nowrap" }}>
          Welcome to BestShop! Enjoy new offers / gift every single day on Weekends — New Coupon code: <strong>BestShop2017</strong>
        </span>
      </div>

      {/* ══ DEALS OF THE DAY ══ */}
      <section style={{ padding: "48px 40px", background: GRAY }}>
        <Section title="Deals Of The Day" />
        <div className="bs-deals">
          {[
            { img: IMG.deal1, badge: "-25%", name: "Stainless Steel Thermos Bottle 500ml", was: "$39.99", now: "$29.99", avail: 18, sold: 42, pct: 70 },
            { img: IMG.deal2, badge: "-20%", name: "Vacuum Insulated Travel Mug 450ml",    was: "$34.99", now: "$27.99", avail: 12, sold: 31, pct: 72 },
          ].map(({ img, badge, name, was, now, avail, sold, pct }) => (
            <div key={name} style={{ background: BG, borderRadius: 10, padding: 20, boxShadow: "0 2px 12px rgba(0,0,0,0.06)", position: "relative" }}>
              <div style={{ position: "absolute", top: 14, left: 14, background: ORANGE, color: "#fff", fontSize: 11, fontWeight: 700, borderRadius: 4, padding: "3px 8px" }}>{badge}</div>
              <div className="bs-deal-inner">
                <div className="bs-deal-img" style={{ height: 160, overflow: "hidden", borderRadius: 8, background: "#f0f0f0" }}>
                  <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: DARK, marginBottom: 8, lineHeight: 1.4 }}>{name}</div>
                  <Stars n={5} />
                  <div style={{ marginTop: 8 }}>
                    <span style={{ fontSize: 13, color: MUTED, textDecoration: "line-through", marginRight: 8 }}>{was}</span>
                    <span style={{ fontSize: 18, fontWeight: 800, color: ORANGE }}>{now}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: MUTED, margin: "10px 0 4px" }}>
                    <span>Available: {avail}</span><span>Sold: {sold}</span>
                  </div>
                  <div style={{ height: 5, background: "#EEE", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ width: `${pct}%`, height: "100%", background: ORANGE, borderRadius: 4 }} />
                  </div>
                  <Countdown />
                </div>
              </div>
              {/* Dots */}
              <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 14 }}>
                {[0,1,2,3].map(i => <div key={i} style={{ width:i===0?18:7, height:7, borderRadius:4, background:i===0?ORANGE:"#DDD" }} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ PROMO GRID ══ */}
      <section style={{ padding: "6px 40px 48px" }}>
        <div className="bs-promo-grid">
          {/* Left col */}
          <div className="bs-promo-left">
            <div style={{ background: "#F0EDE8", borderRadius: 8, padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: DARK, lineHeight: 1.3, marginBottom: 6 }}>Keep Hot<br />Keep Cold</div>
                <div style={{ fontSize: 11, color: MUTED, marginBottom: 12 }}>Up to 24 Hours<br />Temperature Lock</div>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: ORANGE, color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 4, padding: "7px 14px", textDecoration: "none", letterSpacing: "0.05em" }}>SHOP NOW</a>
              </div>
              <img src={IMG.promoHot} alt="" style={{ width: 110, height: 120, objectFit: "cover", borderRadius: 8 }} />
            </div>
            <div style={{ background: "#F5F5F0", borderRadius: 8, padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: DARK, lineHeight: 1.3, marginBottom: 6 }}>Leak Proof<br />100% Secure<br />&amp; Safe</div>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: ORANGE, color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 4, padding: "7px 14px", textDecoration: "none", letterSpacing: "0.05em" }}>SHOP NOW</a>
              </div>
              <img src={IMG.promoEco} alt="" style={{ width: 110, height: 120, objectFit: "cover", borderRadius: 8 }} />
            </div>
          </div>

          {/* Center Black Friday */}
          <div style={{ background: DARK, borderRadius: 8, overflow: "hidden", padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative", minHeight: 280 }}>
            <div style={{ position: "absolute", top: 18, right: 18, background: ORANGE, color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 4, padding: "4px 8px" }}>UP TO<br />50%</div>
            <img src={IMG.promoFri} alt="" style={{ width: 120, height: 140, objectFit: "cover", borderRadius: 8, marginBottom: 20, opacity: 0.85 }} />
            <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.14em", marginBottom: 4 }}>SALE</div>
            <div style={{ fontSize: "2.2rem", fontWeight: 900, color: ORANGE, lineHeight: 1, letterSpacing: "-0.01em" }}>BLACK<br />FRIDAY</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", margin: "10px 0 20px", letterSpacing: "0.06em" }}>ON T THERMOS BOTTLES</div>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: ORANGE, color: "#fff", fontSize: 11, fontWeight: 700, borderRadius: 4, padding: "10px 20px", textDecoration: "none", letterSpacing: "0.06em" }}>GRAB THE BEST DEAL NOW!</a>
          </div>

          {/* Right col */}
          <div className="bs-promo-right">
            <div style={{ background: DARK2, borderRadius: 8, padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 6 }}>Smart Display<br />Temperature</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>At a Glance</div>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: ORANGE, color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 4, padding: "7px 14px", textDecoration: "none", letterSpacing: "0.05em" }}>SHOP NOW</a>
              </div>
              <img src={IMG.promoSmart} alt="" style={{ width: 110, height: 120, objectFit: "cover", borderRadius: 8 }} />
            </div>
            <div style={{ background: "#F8F6F0", borderRadius: 8, padding: 20, display: "flex", alignItems: "center", justifyContent: "space-between", overflow: "hidden" }}>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: DARK, lineHeight: 1.3, marginBottom: 6 }}>Eco Friendly<br />BPA Free</div>
                <div style={{ fontSize: 11, color: MUTED, marginBottom: 12 }}>Healthy Material</div>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, background: ORANGE, color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 4, padding: "7px 14px", textDecoration: "none", letterSpacing: "0.05em" }}>SHOP NOW</a>
              </div>
              <img src={IMG.promoHot} alt="" style={{ width: 110, height: 120, objectFit: "cover", borderRadius: 8 }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURED PRODUCTS ══ */}
      <section style={{ padding: "0 40px 64px", background: BG }}>
        <Section title="Featured Products" />
        <div style={{ position: "relative" }}>
          {/* Arrows */}
          {[{side:"left",icon:"chevron-back-outline"},{side:"right",icon:"chevron-forward-outline"}].map(({side,icon}) => (
            <button key={side} style={{ position:"absolute", top:"50%", [side]:-20, transform:"translateY(-50%)", width:34, height:34, borderRadius:"50%", background:DARK, border:"none", display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", zIndex:5 }}>
              <ion-icon name={icon} style={{ fontSize:16, color:"#fff" }} />
            </button>
          ))}
          <div className="bs-featured">
            {[
              { img: IMG.feat1, badge: "NEW",  badgeBg: "#4CAF50", name: "Stainless Steel Bottle 500ml",  was: null,    now: "$19.99", rating: 5    },
              { img: IMG.feat2, badge: "-15%", badgeBg: ORANGE,    name: "Insulated Mug 600ml",           was: "$26.99", now: "$22.99", rating: 4    },
              { img: IMG.feat3, badge: "NEW",  badgeBg: "#4CAF50", name: "Vacuum Flask 750ml",            was: null,    now: "$24.99", rating: 4    },
              { img: IMG.feat4, badge: "-10%", badgeBg: ORANGE,    name: "Travel Thermos 500ml",          was: "$19.99", now: "$17.99", rating: 4    },
              { img: IMG.feat5, badge: "NEW",  badgeBg: "#4CAF50", name: "Kids Thermos Bottle 350ml",     was: null,    now: "$15.59", rating: 5    },
            ].map(({ img, badge, badgeBg, name, was, now, rating }) => (
              <div key={name} style={{ border: `1px solid ${BORDER}`, borderRadius: 8, overflow: "hidden", background: BG, position: "relative", transition: "box-shadow 0.2s" }}>
                <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2 }}>
                  <span style={{ background: badgeBg, color: "#fff", fontSize: 10, fontWeight: 700, borderRadius: 4, padding: "3px 8px" }}>{badge}</span>
                </div>
                <div style={{ height: 180, background: GRAY, overflow: "hidden" }}>
                  <img src={img} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ padding: "14px 14px 16px" }}>
                  <Stars n={rating} />
                  <div style={{ fontSize: 12, color: DARK, fontWeight: 600, margin: "8px 0 6px", lineHeight: 1.4 }}>{name}</div>
                  <div style={{ marginBottom: 12 }}>
                    {was && <span style={{ fontSize: 11, color: MUTED, textDecoration: "line-through", marginRight: 6 }}>{was}</span>}
                    <span style={{ fontSize: 15, fontWeight: 800, color: ORANGE }}>{now}</span>
                  </div>
                  <button style={{ width: "100%", background: "transparent", border: `1.5px solid ${BORDER}`, borderRadius: 4, padding: "8px", fontSize: 11, fontWeight: 700, color: DARK, cursor: "pointer", letterSpacing: "0.06em", transition: "all 0.2s" }}
                    onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = ORANGE; (e.target as HTMLButtonElement).style.color = "#fff"; (e.target as HTMLButtonElement).style.borderColor = ORANGE; }}
                    onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = "transparent"; (e.target as HTMLButtonElement).style.color = DARK; (e.target as HTMLButtonElement).style.borderColor = BORDER; }}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: DARK, padding: "48px 40px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
          <div>
            <div style={{ fontSize: 22, fontWeight: 900, color: ORANGE, marginBottom: 4 }}>BestShop</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", marginBottom: 16, letterSpacing: "0.04em" }}>Shop easy, live smart!</div>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: 20, maxWidth: 240 }}>Your go-to destination for premium products at unbeatable prices.</p>
            <div style={{ display: "flex", gap: 10 }}>
              {["logo-facebook","logo-instagram","logo-twitter","logo-youtube"].map(icon => (
                <a key={icon} href="#" style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  <ion-icon name={icon} style={{ fontSize: 15 }} />
                </a>
              ))}
            </div>
          </div>
          {[
            { heading: "Quick Links", links: ["Home","Shop","About Us","Contact","Blog"] },
            { heading: "My Account",  links: ["Sign In","View Cart","My Wishlist","Track Order","Help"] },
            { heading: "Contact",     links: ["bestshop@mail.com","(086) 4144-000","Mon–Sat 9am–6pm","123 Commerce St, NY"] },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18 }}>{heading}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {links.map(l => <a key={l} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>{l}</a>)}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 18, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.22)" }}>© 2024 BestShop. All rights reserved.</span>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.22)" }}>Privacy Policy · Terms of Service</span>
        </div>
      </footer>
    </div>
  );
}
