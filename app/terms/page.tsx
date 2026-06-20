const PAD = "clamp(20px, 5vw, 80px)";

export default function Terms() {
  return (
    <main style={{ background: "#FAFAFA", minHeight: "100vh", paddingTop: 120, paddingBottom: 100 }}>
      <div style={{ maxWidth: 760, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#F25623", marginBottom: 16 }}>Legal</p>
        <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "#0D0D0D", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 48 }}>Terms & Conditions</h1>

        <p style={{ fontSize: 13, color: "rgba(0,0,0,0.45)", marginBottom: 48 }}>Last updated: June 2026</p>

        {[
          {
            heading: "1. Agreement to Terms",
            body: "By accessing or using the services of Fynix Studios, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.",
          },
          {
            heading: "2. Services",
            body: "Fynix Studios provides web design, software development, branding, and related digital services. The scope, deliverables, and timeline for each engagement are defined in a separate project agreement or proposal.",
          },
          {
            heading: "3. Payment Terms",
            body: "A 50% deposit is required before work begins. The remaining balance is due upon delivery. For monthly retainer engagements, invoices are issued at the start of each billing period. All prices are quoted in GYD unless otherwise agreed.",
          },
          {
            heading: "4. Intellectual Property",
            body: "Upon full payment, the client receives full ownership of the final deliverables. Fynix Studios retains the right to display the work in our portfolio unless the client requests otherwise in writing.",
          },
          {
            heading: "5. Revisions",
            body: "The number of revision rounds is specified per project. Additional revisions beyond the agreed scope may incur additional charges.",
          },
          {
            heading: "6. Limitation of Liability",
            body: "Fynix Studios is not liable for any indirect, incidental, or consequential damages arising from the use of our services or deliverables. Our total liability shall not exceed the amount paid for the specific project.",
          },
          {
            heading: "7. Termination",
            body: "Either party may terminate a project engagement with written notice. Deposits are non-refundable. Work completed up to the point of termination will be invoiced accordingly.",
          },
          {
            heading: "8. Governing Law",
            body: "These terms are governed by the laws of the Co-operative Republic of Guyana.",
          },
          {
            heading: "9. Contact",
            body: "For questions about these terms, contact us at core@fynixstudios.com or via WhatsApp at +592 713 5786.",
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
