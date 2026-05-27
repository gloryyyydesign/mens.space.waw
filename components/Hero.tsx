"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { BOOKING_URL } from "@/lib/data";

const TITLE_LINES = ["Men's", "Space"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent ml-[10%] hidden lg:block" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent mr-[10%] hidden lg:block" />

      {/* Photo background placeholder (replace with real image) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/30 to-[#050505]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 flex items-center justify-center gap-4"
        >
          <span className="divider w-12 inline-block" />
          <span className="text-[#666] text-xs tracking-[0.25em] uppercase">
            Premium Barbershop · Warsaw
          </span>
          <span className="divider w-12 inline-block" />
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden">
          {TITLE_LINES.map((line, i) => (
            <motion.div
              key={line}
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1,
                delay: 0.4 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <h1
                className="text-[clamp(5rem,20vw,14rem)] font-bold leading-[0.88] tracking-tight text-white uppercase"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {line}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-[#666] text-sm tracking-[0.1em] uppercase max-w-xs mx-auto"
        >
          Where every detail matters
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Book Appointment
          </a>
          <a href="#services" className="btn btn-outline">
            Explore Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-4"
        >
          {[
            { value: "5", label: "Expert Stylists" },
            { value: "500+", label: "Happy Clients" },
            { value: "Warsaw", label: "Jana Kazimierza 11B" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-white text-xl font-semibold">{s.value}</div>
              <div className="text-[#555] text-[0.65rem] tracking-[0.12em] uppercase mt-0.5">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#444]"
      >
        <span className="text-[0.6rem] tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
