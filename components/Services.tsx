"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Scissors,
  Layers,
  Zap,
  Feather,
  Paintbrush,
  Palette,
  Sparkles,
  Waves,
} from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.FC<{ size?: number; strokeWidth?: number }>> = {
  Scissors,
  Layers,
  Zap,
  Feather,
  Paintbrush,
  Palette,
  Sparkles,
  Waves,
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-pad bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-[#555] text-xs tracking-[0.25em] uppercase mb-4">
            What we do
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Services
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.07 }}
                className="group bg-[#080808] hover:bg-[#0f0f0f] p-8 transition-colors duration-300 cursor-default"
              >
                <div className="mb-6 text-white/30 group-hover:text-white/70 transition-colors duration-300">
                  {Icon && <Icon size={24} strokeWidth={1.5} />}
                </div>
                <h3 className="text-white font-semibold text-base mb-3 leading-snug">
                  {service.name}
                </h3>
                <p className="text-[#555] text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-[#444] text-xs tracking-[0.08em] text-center"
        >
          Pricing varies by stylist — check individual price lists in the Team section below.
        </motion.p>
      </div>
    </section>
  );
}
