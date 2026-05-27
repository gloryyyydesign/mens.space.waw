import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import CasesGrid from "@/components/CasesGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Work — Men's Space Barbershop Warsaw",
  description:
    "Browse the portfolio of Men's Space barbershop Warsaw. Filter by stylist or service to find your perfect look.",
};

export default function CasesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080808] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#555] hover:text-white text-xs tracking-[0.1em] uppercase transition-colors duration-200 mb-12"
          >
            <ArrowLeft size={12} />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-14">
            <p className="text-[#555] text-xs tracking-[0.25em] uppercase mb-4">Portfolio</p>
            <h1
              className="text-4xl md:text-7xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              All Work
            </h1>
          </div>

          {/* Grid with filters */}
          <Suspense
            fallback={
              <div className="text-[#444] text-sm py-20 text-center tracking-[0.1em]">
                Loading projects...
              </div>
            }
          >
            <CasesGrid />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
