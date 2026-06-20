"use client";

import { useState } from "react";
import { ArrowRight, Briefcase, DollarSign, Receipt } from "lucide-react";

const PAD = "clamp(20px, 5vw, 80px)";

const TABS = ["Projects", "Payroll", "Expenses"] as const;
type Tab = typeof TABS[number];

function ProjectsTab() {
  const rows = [
    { name: "Website redesign",     client: "Asha's Boutique",  status: "In progress", progress: 68, due: "Jun 22" },
    { name: "Payroll system",        client: "WMC Engineering",   status: "Review",       progress: 90, due: "Jun 24" },
    { name: "Inventory tracker",     client: "Guyfoods Ltd",      status: "Pending",      progress: 20, due: "Jul 3" },
    { name: "Brand & social kit",    client: "Prestige Autos",    status: "In progress",  progress: 45, due: "Jun 28" },
  ];
  const statusColor: Record<string, string> = { "In progress": "#F25623", "Review": "#6366f1", "Pending": "#6B6B6B" };
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          {["Project","Client","Status","Progress","Due"].map(h => (
            <th key={h} style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.4)", textAlign: "left", padding: "0 0 12px", letterSpacing: "0.08em", textTransform: "uppercase" }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(({ name, client, status, progress, due }) => (
          <tr key={name} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <td style={{ padding: "12px 0", fontSize: 13, fontWeight: 600, color: "#FAFAFA" }}>{name}</td>
            <td style={{ padding: "12px 0", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{client}</td>
            <td style={{ padding: "12px 0" }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: statusColor[status], background: `${statusColor[status]}18`, borderRadius: 20, padding: "3px 8px" }}>{status}</span>
            </td>
            <td style={{ padding: "12px 0" }}>
              <div style={{ width: 80, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2 }}>
                <div style={{ height: "100%", width: `${progress}%`, background: "#F25623", borderRadius: 2 }} />
              </div>
            </td>
            <td style={{ padding: "12px 0", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{due}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function PayrollTab() {
  const staff = [
    { name: "Marcus James",   role: "Site Engineer",      amount: "$420,000", status: "Paid" },
    { name: "Priya Nankishore", role: "Accountant",       amount: "$360,000", status: "Paid" },
    { name: "Deon Fredericks", role: "Project Manager",   amount: "$510,000", status: "Pending" },
    { name: "Anika Singh",    role: "Junior Developer",   amount: "$280,000", status: "Pending" },
  ];
  return (
    <div>
      {staff.map(({ name, role, amount, status }) => (
        <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(242,86,35,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#F25623" }}>
              {name[0]}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#FAFAFA" }}>{name}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{role}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: "#FAFAFA" }}>{amount}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: status === "Paid" ? "#22c55e" : "rgba(255,255,255,0.4)", background: status === "Paid" ? "rgba(34,197,94,0.12)" : "rgba(255,255,255,0.06)", borderRadius: 20, padding: "3px 10px" }}>{status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ExpensesTab() {
  const items = [
    { icon: "🏗️", desc: "Equipment rental — June",  date: "Jun 12", amount: "$215,000", status: "Approved" },
    { icon: "⛽", desc: "Fuel allowance — team",     date: "Jun 14", amount: "$32,500",  status: "Approved" },
    { icon: "🖥️", desc: "Software subscriptions",   date: "Jun 15", amount: "$18,000",  status: "Pending"  },
    { icon: "🚗", desc: "Vehicle maintenance",        date: "Jun 18", amount: "$67,000",  status: "Pending"  },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-4" style={{ marginBottom: 20 }}>
        {[["Total","$332,500"],["Approved","$247,500"],["Pending","$85,000"]].map(([l,v]) => (
          <div key={l} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 10, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#FAFAFA" }}>{v}</div>
          </div>
        ))}
      </div>
      {items.map(({ icon, desc, date, amount, status }) => (
        <div key={desc} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 18 }}>{icon}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#FAFAFA" }}>{desc}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>{date}</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#FAFAFA" }}>{amount}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: status === "Approved" ? "#22c55e" : "rgba(255,255,255,0.4)", background: status === "Approved" ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.06)", borderRadius: 20, padding: "3px 10px" }}>{status}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Tempo() {
  const [tab, setTab] = useState<Tab>("Projects");

  return (
    <section id="tempo" style={{ background: "#0D0D0D", paddingTop: 100, paddingBottom: 100 }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", paddingLeft: PAD, paddingRight: PAD }}>

        {/* Top 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end" style={{ marginBottom: 64 }}>

          {/* Left copy */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 24 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: "#F25623", letterSpacing: "0.06em", textTransform: "uppercase" }}>Fynix flagship product</span>
            </div>

            <h2 style={{ fontSize: "clamp(1.55rem,3.5vw,2.55rem)", fontWeight: 800, color: "#FAFAFA", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Meet Tempo — one platform for <span style={{ color: "#F25623" }}>your whole operation</span>
            </h2>

            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 28 }}>
              Most business tools do one thing. Tempo does everything — project tracking, payroll, expenses, and scheduling — bundled into a single app at a price built for the Caribbean market.
            </p>

            {/* Pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {["Project tracking","Payroll","Expenses","Scheduling"].map(f => (
                <span key={f} style={{ fontSize: 12, fontWeight: 600, color: "#F25623", borderRadius: 20, padding: "5px 12px" }}>{f}</span>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24 }}>
              <a href="#contact" style={{ background: "#F25623", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: 8, padding: "12px 24px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}>
                Get early access <ArrowRight size={14} />
              </a>
              <a href="#contact" style={{ color: "rgba(255,255,255,0.65)", fontWeight: 600, fontSize: 14, border: "1.5px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "12px 24px", textDecoration: "none" }}>
                See how it works
              </a>
            </div>

            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
              Replaces Asana + QuickBooks + spreadsheets — at a fraction of the cost
            </p>
          </div>

          {/* Right stat cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { icon: Briefcase,  value: "7 active projects",    sub: "+2 added this week",       color: "#F25623" },
              { icon: DollarSign, value: "$84,000 GYD payroll",  sub: "Due in 3 days",            color: "#f59e0b" },
              { icon: Receipt,    value: "142 hrs logged",        sub: "↑18% vs last month",       color: "#22c55e" },
            ].map(({ icon: Icon, value, sub, color }) => (
              <div key={value} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "18px 22px", display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ background: `${color}18`, borderRadius: 10, padding: 10 }}>
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#FAFAFA" }}>{value}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabbed preview */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden" }}>
          {/* Tab bar */}
          <div style={{ display: "flex", gap: 0, borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            {TABS.map(t => (
              <button key={t} onClick={() => setTab(t)}
                style={{
                  padding: "14px 24px", fontSize: 13, fontWeight: 600, border: "none", cursor: "pointer", background: "transparent",
                  color: tab === t ? "#F25623" : "rgba(255,255,255,0.45)",
                  borderBottom: tab === t ? "2px solid #F25623" : "2px solid transparent",
                  transition: "color 0.2s",
                }}
              >
                {t}
              </button>
            ))}
          </div>
          {/* Tab content */}
          <div style={{ padding: "24px 28px", overflowX: "auto" }}>
            {tab === "Projects"  && <ProjectsTab />}
            {tab === "Payroll"   && <PayrollTab />}
            {tab === "Expenses"  && <ExpensesTab />}
          </div>
        </div>

      </div>
    </section>
  );
}
