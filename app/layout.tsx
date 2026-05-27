import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Men's Space — Barbershop Warsaw",
  description:
    "Premium men's barbershop in Warsaw. Expert haircuts, beard trimming, shaving & coloring by our team of skilled stylists. Book online.",
  keywords: ["barbershop", "Warsaw", "men's haircut", "beard trimming", "fryzjer", "Warszawa"],
  openGraph: {
    title: "Men's Space — Barbershop Warsaw",
    description: "Premium men's barbershop in Warsaw. Expert cuts, beard work & styling.",
    siteName: "Men's Space",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), sans-serif" }} className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
