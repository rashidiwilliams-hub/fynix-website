import { ArrowRight } from "lucide-react";

const PAD = "clamp(20px, 5vw, 80px)";

const WA = `https://wa.me/5927135786?text=${encodeURIComponent("Hi Fynix Studios! I'm interested in getting a website. I'd love to learn more.")}`;

const projects = [
  { title: "QuickBite",   type: "Food Order & Delivery Platform",  image: "/stock/card1.jpg", wide: false },
  { title: "StyleVault",  type: "Fashion E-Commerce",              image: "/stock/card2.png", wide: false },
  { title: "MarketHub",   type: "Multi-Seller Marketplace",        image: "/stock/card3.png", wide: true  },
  { title: "EstateView",  type: "Real Estate Listings",            image: "/stock/card4.png", wide: false },
  { title: "MobiShop",    type: "Mobile E-Commerce Landing Page",  image: "/stock/card5.png", wide: false },
];

function ProjectCard({ title, type, image, wide }: { title: string; type: string; image: string; wide: boolean }) {
  return (
    <div>
      {/* Image card */}
      <div style={{
        background: "#EBEBEB",
        borderRadius: 20,
        overflow: "hidden",
        height: wide ? 420 : 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          style={{
            height: "90%",
            width: "auto",
            objectFit: "contain",
            display: "block",
          }}
        />
      </div>

      {/* Info row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0D0D0D", marginBottom: 2 }}>{title}</div>
          <div style={{ fontSize: 13, color: "rgba(0,0,0,0.45)", fontWeight: 400 }}>{type}</div>
        </div>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1.5px solid rgba(0,0,0,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            textDecoration: "none",
            color: "#0D0D0D",
          }}
        >
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [p1, p2, p3, p4, p5] = projects;

  return (
    <section id="portfolio" style={{ background: "#FAFAFA", paddingTop: 100, paddingBottom: 100 }}>
      <style>{`
        .portfolio-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
        .portfolio-how { display: flex; align-items: center; margin-bottom: 56px; background: #0D0D0D; border-radius: 12px; padding: 20px 24px; }
        .portfolio-how-arrow { color: #fff; font-size: 16px; padding: 0 12px; flex-shrink: 0; }
        @media (max-width: 992px) {
          .portfolio-row { grid-template-columns: 1fr; }
          .portfolio-how { flex-direction: column; align-items: flex-start; gap: 16px; }
          .portfolio-how-arrow { display: none; }
        }
      `}</style>
      <div style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD }}>

        {/* Header */}
        <div style={{ marginBottom: 20, textAlign: "center" }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F25623", marginBottom: 16 }}>Done-for-you</p>
          <h2 style={{ fontSize: "clamp(1.55rem,3.5vw,2.55rem)", fontWeight: 800, color: "#0D0D0D", lineHeight: 1.15, letterSpacing: "-0.02em", maxWidth: 720, margin: "0 auto 16px" }}>
            Professional websites, ready to launch<br /><span style={{ color: "#F25623" }}>customised to your brand.</span>
          </h2>
          <p style={{ fontSize: 13, color: "rgba(0,0,0,0.5)", maxWidth: 420, margin: "0 auto 40px", lineHeight: 1.6 }}>Pick a template. We customise it to your brand — logo, colors, fonts, images. From <strong style={{ color: "#0D0D0D" }}>GYD $120,000</strong>, fully customised.</p>
        </div>

        {/* How it works */}
        <div className="portfolio-how">
          {["Pick a template", "Send us your brand details", "We customise & launch", "Your site goes live"].map((step, i) => (
            <>
              <div key={step} style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#F25623", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: "#fff", flexShrink: 0 }}>{i + 1}</div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.75)", lineHeight: 1.3 }}>{step}</span>
              </div>
              {i < 3 && (
                <div key={`arrow-${i}`} className="portfolio-how-arrow">→</div>
              )}
            </>
          ))}
        </div>

        {/* Row 1 — 2 cards */}
        <div className="portfolio-row" style={{ marginBottom: 24 }}>
          <ProjectCard {...p1} />
          <ProjectCard {...p2} />
        </div>

        {/* Row 2 — 1 wide card */}
        <div style={{ marginBottom: 24 }}>
          <ProjectCard {...p3} />
        </div>

        {/* Row 3 — 2 cards */}
        <div className="portfolio-row">
          <ProjectCard {...p4} />
          <ProjectCard {...p5} />
        </div>

      </div>
    </section>
  );
}
