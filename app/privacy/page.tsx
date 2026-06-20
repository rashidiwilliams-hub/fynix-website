const PAD = "clamp(20px, 5vw, 80px)";

export default function Privacy() {
  return (
    <main style={{ background: "#FAFAFA", minHeight: "100vh", paddingTop: 120, paddingBottom: 100 }}>
      <div style={{ maxWidth: 760, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F25623", marginBottom: 16 }}>Legal</p>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "#0D0D0D", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 48 }}>Privacy Policy</h1>

        <p style={{ fontSize: 13, color: "rgba(0,0,0,0.45)", marginBottom: 48 }}>Last updated: June 2026</p>

        {[
          {
            heading: "1. Information We Collect",
            body: "We collect information you provide directly to us — such as your name, email address, phone number, and project details — when you fill out our contact form or communicate with us via WhatsApp or email.",
          },
          {
            heading: "2. How We Use Your Information",
            body: "We use the information we collect to respond to your enquiries, deliver our services, send project updates, and improve our offerings. We do not sell or share your personal data with third parties for marketing purposes.",
          },
          {
            heading: "3. Data Storage",
            body: "Information submitted through our contact form is transmitted directly to our team via WhatsApp. We do not store form submissions on external servers. Project files and communications may be retained for the duration of our working relationship.",
          },
          {
            heading: "4. Cookies",
            body: "Our website may use minimal cookies for analytics purposes to understand how visitors interact with our site. No personally identifiable information is collected via cookies.",
          },
          {
            heading: "5. Third-Party Services",
            body: "We may use third-party tools (such as WhatsApp, Google Workspace, or project management platforms) in the delivery of our services. These services have their own privacy policies.",
          },
          {
            heading: "6. Your Rights",
            body: "You have the right to request access to, correction of, or deletion of any personal information we hold about you. To make a request, contact us at core@fynixstudios.com.",
          },
          {
            heading: "7. Changes to This Policy",
            body: "We may update this policy from time to time. Changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance.",
          },
          {
            heading: "8. Contact",
            body: "If you have any questions about this Privacy Policy, reach us at core@fynixstudios.com or via WhatsApp at +592 713 5786.",
          },
        ].map(({ heading, body }) => (
          <div key={heading} style={{ marginBottom: 36 }}>
            <h2 style={{ fontSize: 16, fontWeight: 700, color: "#0D0D0D", marginBottom: 10 }}>{heading}</h2>
            <p style={{ fontSize: 15, color: "rgba(0,0,0,0.6)", lineHeight: 1.75 }}>{body}</p>
          </div>
        ))}

        <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <a href="/" style={{ fontSize: 14, fontWeight: 600, color: "#F25623", textDecoration: "none" }}>← Back to Fynix Studios</a>
        </div>
      </div>
    </main>
  );
}
