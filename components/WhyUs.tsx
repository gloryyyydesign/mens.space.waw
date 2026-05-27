"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, UserCheck, Star, Coffee, TrendingUp, Target } from "lucide-react";
import { whyUsReasons } from "@/lib/data";

const iconMap: Record<string, React.FC<{ size?: number; strokeWidth?: number }>> = {
  Award,
  UserCheck,
  Star,
  Coffee,
  TrendingUp,
  Target,
};

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-[#555] text-xs tracking-[0.25em] uppercase mb-4">
              Why choose us
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The Standard
              <br />
              <span className="text-white/30">Others Follow</span>
            </h2>
            <p className="text-[#666] text-sm leading-relaxed max-w-sm">
              We built Men&apos;s Space around a single idea: that every man deserves a
              barbershop experience as sharp as the cut he leaves with.
            </p>

            <div className="mt-10 divider w-24" />
          </motion.div>

          {/* Right: reasons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyUsReasons.map((reason, i) => {
              const Icon = iconMap[reason.icon];
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                  className="card-base p-6 transition-all duration-300 hover:border-white/14"
                >
                  <div className="mb-4 text-white/25">
                    {Icon && <Icon size={18} strokeWidth={1.5} />}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-[#555] text-xs leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
