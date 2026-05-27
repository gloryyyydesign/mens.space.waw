"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { BOOKING_URL } from "@/lib/data";

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="booking" className="section-pad bg-[#080808]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden border border-white/8 bg-[#0d0d0d] p-12 md:p-20 text-center"
        >
          {/* Background accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/20 to-transparent" />

          <p className="text-[#555] text-xs tracking-[0.25em] uppercase mb-6">
            Ready for a new look?
          </p>
          <h2
            className="text-4xl md:text-7xl font-bold text-white leading-tight mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Book Your
            <br />
            Appointment
          </h2>
          <p className="text-[#666] text-sm max-w-sm mx-auto mb-10 leading-relaxed">
            Select your stylist, pick a time that works for you, and step into
            your best look.
          </p>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-3 group text-sm"
          >
            Choose Your Stylist
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
            {[
              ["Mon – Fri", "10:00 – 21:00"],
              ["Saturday", "10:00 – 20:00"],
              ["Sunday", "11:00 – 19:00"],
            ].map(([day, hours]) => (
              <div key={day}>
                <div className="text-[#444] text-[0.65rem] tracking-[0.12em] uppercase">{day}</div>
                <div className="text-white text-sm mt-1">{hours}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
