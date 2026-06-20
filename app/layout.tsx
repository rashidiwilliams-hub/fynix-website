import type { Metadata } from "next";
import { Inter_Tight, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Fynix Studios",
  description: "Software and web solutions built for Caribbean SMEs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${urbanist.variable}`}>
      <head>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" />
        <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" />
      </head>
      <body style={{ fontFamily: "var(--font-inter-tight), 'Inter Tight', sans-serif" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
