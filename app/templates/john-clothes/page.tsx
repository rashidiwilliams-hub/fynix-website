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

const BG   = "#FAF9F7";
const INK  = "#111111";
const MUTED = "#888";
const SAND = "#F0EDE8";

const IMG = {
  heroModel:      "/stock/template151.webp",
  womenColl:      "/stock/template12.jpg",
  menColl:        "/stock/template116.jpg",
  dresses:        "/stock/template150.jpg",
  accessories:    "/stock/template18.jpg",
  springSale:     "/stock/template128.jpg",
  clothingRack:   "/stock/template139.jpg",
  newsletter:     "/stock/template137.jpg",
  catWomen:       "/stock/template112.jpg",
  catMen:         "/stock/template116.jpg",
  catDresses:     "/stock/template150.jpg",
  catTops:        "/stock/template147.jpg",
  catShoes:       "/stock/template140.jpg",
  catBags:        "/stock/template18.jpg",
  catAccessories: "/stock/template133.jpg",
  prodBlazer:     "/stock/template134.jpg",
  prodTop:        "/stock/template140.jpg",
  prodTrousers:   "/stock/template150.jpg",
  prodBag:        "/stock/template18.jpg",
  prodHeels:      "/stock/template123.jpg",
  prodSunglasses: "/stock/template147.jpg",
};

const RESPONSIVE = `
  .lf-pad { padding-left: 52px; padding-right: 52px; }
  .lf-hero { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 65px); }
  .lf-cat-strip { display: flex; align-items: center; justify-content: space-between; }
  .lf-collection-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
  .lf-promo-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .lf-promo-inner { display: grid; grid-template-columns: 1fr 1fr; min-height: 230px; }
  .lf-products-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 20px; }
  .lf-trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .lf-newsletter { display: grid; grid-template-columns: 1fr 1.6fr; }
  .lf-footer-grid { display: grid; grid-template-columns: 1.5fr 1fr 1.2fr 1fr 1.3fr; gap: 48px; }
  .lf-hero-image { position: relative; overflow: hidden; }

  @media (max-width: 1024px) {
    .lf-pad { padding-left: 32px; padding-right: 32px; }
    .lf-hero { grid-template-columns: 1fr; min-height: unset; }
    .lf-hero-image { height: 480px; }
    .lf-collection-grid { grid-template-columns: 1fr 1fr; }
    .lf-promo-grid { grid-template-columns: 1fr; }
    .lf-products-grid { grid-template-columns: repeat(3, 1fr); }
    .lf-trust-grid { grid-template-columns: 1fr 1fr; }
    .lf-newsletter { grid-template-columns: 1fr; }
    .lf-newsletter-img { display: none; }
    .lf-footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
  }

  @media (max-width: 768px) {
    .lf-pad { padding-left: 20px; padding-right: 20px; }
    .lf-hero-image { height: 360px; }
    .lf-cat-strip { flex-wrap: wrap; justify-content: center; gap: 16px; }
    .lf-collection-grid { grid-template-columns: 1fr; }
    .lf-promo-inner { grid-template-columns: 1fr; }
    .lf-promo-inner-img { display: none; }
    .lf-products-grid { grid-template-columns: 1fr 1fr; }
    .lf-trust-grid { grid-template-columns: 1fr; }
    .lf-footer-grid { grid-template-columns: 1fr; gap: 28px; }
  }
`;

function Stars({ n, count }: { n: number; count: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2, marginTop: 5 }}>
      {[1,2,3,4,5].map(i => (
        <ion-icon key={i} name={i <= n ? "star" : "star-outline"}
          style={{ fontSize: 11, color: i <= n ? "#C9942A" : "#ccc" }} />
      ))}
      <span style={{ fontSize: 11, color: MUTED, marginLeft: 4 }}>({count})</span>
    </div>
  );
}

export default function LunoraFashion() {
  const [activeSlide] = useState(1);
  const [footerEmail, setFooterEmail] = useState("");

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',sans-serif", background: BG, color: INK, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{RESPONSIVE}</style>

      {/* ── NAVBAR ── */}
      <nav style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 52px", background: BG,
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        position: "sticky", top: 0, zIndex: 200,
      }}>
        <ion-icon name="menu-outline" style={{ fontSize: 26, cursor: "pointer", color: INK }} />
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.3em", color: MUTED, fontWeight: 500, textTransform: "uppercase", marginBottom: 2 }}>Fashion</div>
          <div style={{ width: 48, height: 1, background: INK, margin: "0 auto" }} />
        </div>
        <ion-icon name="search-outline" style={{ fontSize: 24, cursor: "pointer", color: INK }} />
      </nav>

      {/* ── HERO ── */}
      <section className="lf-hero" style={{ background: BG }}>
        {/* Left — text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "64px 64px 64px 52px" }}>
          <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, marginBottom: 20 }}>
            New Collection
          </p>
          <h1 style={{ fontSize: "clamp(2.2rem,3.8vw,3.6rem)", fontWeight: 900, lineHeight: 1.06, letterSpacing: "-0.03em", color: INK, marginBottom: 20 }}>
            Elevate Your<br />Everyday Style
          </h1>
          <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.75, marginBottom: 40, maxWidth: 360 }}>
            Discover timeless pieces crafted for comfort,<br />designed for elegance, made for you.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 56, flexWrap: "wrap" }}>
            <a href="#" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: INK, color: "#fff", fontWeight: 700, fontSize: 14,
              borderRadius: 6, padding: "13px 28px", textDecoration: "none",
            }}>
              Shop Now <ion-icon name="arrow-forward-outline" style={{ fontSize: 15 }} />
            </a>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, color: INK, fontSize: 14, fontWeight: 500, textDecoration: "none" }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", border: `1.5px solid ${INK}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ion-icon name="play-outline" style={{ fontSize: 13, marginLeft: 2, color: INK }} />
              </div>
              Watch Lookbook
            </a>
          </div>

          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
            {[
              { icon: "cube-outline",            label: "Free Shipping",  sub: "On orders over $99" },
              { icon: "repeat-outline",           label: "Easy Returns",   sub: "30-day returns"     },
              { icon: "shield-checkmark-outline", label: "Secure Payment", sub: "100% protected"     },
            ].map(({ icon, label, sub }) => (
              <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <ion-icon name={icon} style={{ fontSize: 21, color: MUTED, marginTop: 1, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: INK }}>{label}</div>
                  <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — model + slide indicators */}
        <div className="lf-hero-image">
          <img src={IMG.heroModel} alt="Fashion model"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          <div style={{ position: "absolute", right: 18, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {[1,2,3].map((n, i) => (
              <div key={n} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", color: n === activeSlide ? "#fff" : "rgba(255,255,255,0.4)", padding: "6px 0" }}>0{n}</span>
                {i < 2 && <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.25)" }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORY CIRCLES ── */}
      <div className="lf-pad" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div style={{ background: "#fff", borderRadius: 18, boxShadow: "0 4px 28px rgba(0,0,0,0.07)", padding: "28px 40px" }}>
          <div className="lf-cat-strip">
            {[
              { label: "Women",       img: IMG.catWomen       },
              { label: "Men",         img: IMG.catMen         },
              { label: "Dresses",     img: IMG.catDresses     },
              { label: "Tops",        img: IMG.catTops        },
              { label: "Shoes",       img: IMG.catShoes       },
              { label: "Bags",        img: IMG.catBags        },
              { label: "Accessories", img: IMG.catAccessories },
              { label: "Sale",        sale: true              },
            ].map(({ label, img, sale }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, cursor: "pointer" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", background: sale ? INK : SAND, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {sale
                    ? <span style={{ fontSize: 11, fontWeight: 900, color: "#fff", letterSpacing: "0.05em" }}>SALE</span>
                    : <img src={img} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                  }
                </div>
                <span style={{ fontSize: 12, fontWeight: 500, color: INK }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SHOP BY CATEGORY ── */}
      <section className="lf-pad" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: MUTED, marginBottom: 10 }}>Shop By Category</p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: "2.1rem", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.025em" }}>Find Your<br />Perfect Style</h2>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: INK, textDecoration: "none" }}>
            View All Categories <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
          </a>
        </div>
        <div className="lf-collection-grid">
          {[
            { label: "Women's Collection", img: IMG.womenColl  },
            { label: "Men's Collection",   img: IMG.menColl    },
            { label: "Dresses",            img: IMG.dresses    },
            { label: "Accessories",        img: IMG.accessories },
          ].map(({ label, img }) => (
            <div key={label} style={{ position: "relative", borderRadius: 12, overflow: "hidden", height: 300, cursor: "pointer", background: SAND }}>
              <img src={img} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(to top,rgba(0,0,0,0.65) 0%,transparent 60%)", padding: "48px 18px 18px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{label}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 12, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
                  Explore Now <ion-icon name="arrow-forward-outline" style={{ fontSize: 12 }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROMO BANNERS ── */}
      <section className="lf-pad lf-promo-grid" style={{ paddingBottom: 80 }}>
        {/* Spring Sale */}
        <div className="lf-promo-inner" style={{ borderRadius: 16, overflow: "hidden", background: SAND }}>
          <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: MUTED, marginBottom: 14 }}>Limited Time Offer</p>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 24 }}>Spring Sale<br />Up to 50% Off</h3>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: INK, color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: 6, padding: "10px 20px", textDecoration: "none", alignSelf: "flex-start" }}>
              Shop The Sale <ion-icon name="arrow-forward-outline" style={{ fontSize: 13 }} />
            </a>
          </div>
          <div className="lf-promo-inner-img" style={{ overflow: "hidden" }}>
            <img src={IMG.springSale} alt="Spring sale" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
          </div>
        </div>

        {/* New Arrivals */}
        <div className="lf-promo-inner" style={{ borderRadius: 16, overflow: "hidden", background: "#1A1A1A" }}>
          <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 14 }}>New Arrivals</p>
            <h3 style={{ fontSize: "1.6rem", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#fff", marginBottom: 24 }}>Fresh Styles<br />Just Landed</h3>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: INK, fontWeight: 700, fontSize: 13, borderRadius: 6, padding: "10px 20px", textDecoration: "none", alignSelf: "flex-start" }}>
              Explore New In <ion-icon name="arrow-forward-outline" style={{ fontSize: 13 }} />
            </a>
          </div>
          <div className="lf-promo-inner-img" style={{ overflow: "hidden" }}>
            <img src={IMG.clothingRack} alt="New arrivals" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS ── */}
      <section className="lf-pad" style={{ paddingBottom: 80 }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: MUTED, marginBottom: 10 }}>Best Sellers</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.025em" }}>Our Most Loved Picks</h2>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: INK, textDecoration: "none" }}>
            View All Products <ion-icon name="arrow-forward-outline" style={{ fontSize: 14 }} />
          </a>
        </div>
        <div className="lf-products-grid">
          {[
            { name: "Linen Blend Blazer",   price: "$89.99", rating: 5, reviews: 124, img: IMG.prodBlazer     },
            { name: "Ribbed Knit Top",       price: "$29.99", rating: 5, reviews: 98,  img: IMG.prodTop        },
            { name: "Wide Leg Trousers",     price: "$59.99", rating: 4, reviews: 76,  img: IMG.prodTrousers   },
            { name: "Leather Shoulder Bag",  price: "$79.99", rating: 5, reviews: 112, img: IMG.prodBag        },
            { name: "Minimal Strappy Heels", price: "$49.99", rating: 4, reviews: 64,  img: IMG.prodHeels      },
            { name: "Oversized Sunglasses",  price: "$19.99", rating: 4, reviews: 53,  img: IMG.prodSunglasses },
          ].map(({ name, price, rating, reviews, img }) => (
            <div key={name} style={{ cursor: "pointer" }}>
              <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", background: SAND, marginBottom: 12 }}>
                <img src={img} alt={name} style={{ width: "100%", aspectRatio: "3/4", objectFit: "cover", objectPosition: "top", display: "block" }} />
                <button style={{ position: "absolute", top: 10, right: 10, background: "#fff", border: "none", borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: 0 }}>
                  <ion-icon name="heart-outline" style={{ fontSize: 14, color: INK }} />
                </button>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, color: INK, lineHeight: 1.4 }}>{name}</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginTop: 3 }}>{price}</div>
              <Stars n={rating} count={reviews} />
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="lf-pad lf-trust-grid" style={{ background: SAND, paddingTop: 36, paddingBottom: 36 }}>
        {[
          { icon: "cube-outline",            label: "Free Shipping",  sub: "On orders over $99" },
          { icon: "repeat-outline",           label: "Easy Returns",   sub: "30-day returns"     },
          { icon: "shield-checkmark-outline", label: "Secure Payment", sub: "100% protected"     },
          { icon: "headset-outline",          label: "24/7 Support",   sub: "We're here to help" },
        ].map(({ icon, label, sub }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <ion-icon name={icon} style={{ fontSize: 28, color: MUTED, flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: INK }}>{label}</div>
              <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>{sub}</div>
            </div>
          </div>
        ))}
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="lf-newsletter" style={{ minHeight: 300 }}>
        <div className="lf-newsletter-img" style={{ overflow: "hidden" }}>
          <img src={IMG.newsletter} alt="Style" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }} />
        </div>
        <div style={{ background: BG, display: "flex", flexDirection: "column", justifyContent: "center", padding: "56px 72px" }}>
          <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, marginBottom: 14 }}>Get 10% Off Your First Order</p>
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 12 }}>Join Our Style List</h2>
          <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.7, marginBottom: 32 }}>Sign up for exclusive offers, new arrivals, and style inspiration.</p>
          <div style={{ display: "flex", maxWidth: 440 }}>
            <input type="email" placeholder="Enter your email" value={footerEmail} onChange={e => setFooterEmail(e.target.value)}
              style={{ flex: 1, padding: "13px 18px", fontSize: 14, border: "1px solid rgba(0,0,0,0.15)", borderRight: "none", borderRadius: "6px 0 0 6px", outline: "none", background: "#fff", color: INK }} />
            <button style={{ background: INK, color: "#fff", border: "none", borderRadius: "0 6px 6px 0", padding: "13px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: INK, padding: "60px 52px 36px" }}>
        <div className="lf-footer-grid" style={{ marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 16, fontWeight: 900, letterSpacing: "0.15em", color: "#fff", textTransform: "uppercase" }}>LUNORA</div>
              <div style={{ fontSize: 9, letterSpacing: "0.25em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginTop: 1 }}>FASHION</div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.45)", marginBottom: 24, maxWidth: 200 }}>
              Timeless fashion for every moment. Designed with you in mind.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              {["logo-instagram","logo-facebook","logo-pinterest","logo-tiktok"].map(icon => (
                <a key={icon} href="#" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                  <ion-icon name={icon} style={{ fontSize: 18 }} />
                </a>
              ))}
            </div>
          </div>

          {[
            { heading: "Shop",          links: ["All Products","New Arrivals","Women","Men","Sale"]                              },
            { heading: "Customer Care", links: ["Contact Us","Shipping & Delivery","Returns & Exchanges","Size Guide","FAQs"]   },
            { heading: "About Us",      links: ["Our Story","Sustainability","Careers","Press","Store Locator"]                 },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>{heading}</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map(l => <a key={l} href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>{l}</a>)}
              </div>
            </div>
          ))}

          {/* Stay connected */}
          <div>
            <h4 style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fff", marginBottom: 20 }}>Stay Connected</h4>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, marginBottom: 20 }}>
              Sign up for updates and get 10% off your first order.
            </p>
            <div style={{ display: "flex" }}>
              <input type="email" placeholder="Enter your email"
                style={{ flex: 1, padding: "10px 14px", fontSize: 12, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRight: "none", borderRadius: "5px 0 0 5px", color: "#fff", outline: "none" }} />
              <button style={{ background: "#fff", color: INK, border: "none", borderRadius: "0 5px 5px 0", padding: "10px 14px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                <ion-icon name="arrow-forward-outline" style={{ fontSize: 15, color: INK }} />
              </button>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.25)" }}>© {new Date().getFullYear()} Lunora Fashion. All rights reserved.</span>
          <div style={{ display: "flex", gap: 28 }}>
            {["Privacy Policy","Terms of Service","Cookie Policy"].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
