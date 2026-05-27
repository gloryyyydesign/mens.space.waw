"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { INSTAGRAM_URL } from "@/lib/data";

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 border border-white/7 p-10 md:p-14"
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <InstagramIcon size={20} className="text-white/40" />
              <span className="text-[#555] text-xs tracking-[0.2em] uppercase">Follow our work</span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold text-white leading-tight mb-3"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              @mens.space.waw
            </h2>
            <p className="text-[#666] text-sm max-w-sm leading-relaxed">
              Fresh cuts, behind-the-scenes moments, and the culture of Men&apos;s Space —
              all on Instagram.
            </p>
          </div>

          {/* Right */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center gap-3 group shrink-0"
          >
            <InstagramIcon size={14} />
            Follow on Instagram
            <ArrowRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
