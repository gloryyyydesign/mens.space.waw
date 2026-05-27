"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" className="section-pad bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <p className="text-[#555] text-xs tracking-[0.25em] uppercase mb-4">Find us</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Location
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between gap-10"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-white/25">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#555] text-xs tracking-[0.15em] uppercase mb-1">Address</p>
                  <p className="text-white text-sm">Jana Kazimierza 11B</p>
                  <p className="text-[#666] text-sm">Warszawa, Polska</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-white/25">
                  <Clock size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#555] text-xs tracking-[0.15em] uppercase mb-2">Hours</p>
                  <div className="space-y-1">
                    {[
                      ["Monday – Friday", "10:00 – 21:00"],
                      ["Saturday", "10:00 – 20:00"],
                      ["Sunday", "11:00 – 19:00"],
                    ].map(([day, hours]) => (
                      <div key={day} className="flex justify-between gap-8 text-sm">
                        <span className="text-[#888]">{day}</span>
                        <span className="text-white">{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-0.5 text-white/25">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#555] text-xs tracking-[0.15em] uppercase mb-1">Contact</p>
                  <p className="text-white text-sm">Book online for the fastest response</p>
                </div>
              </div>
            </div>

            {/* Video placeholder */}
            <div className="relative aspect-video bg-[#111] border border-white/7 overflow-hidden">
              <video
                src="/assets/location-video.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <p className="text-[#333] text-xs tracking-[0.15em] uppercase">
                  Location video coming soon
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative overflow-hidden border border-white/7"
            style={{ minHeight: "480px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.6895050042264!2d20.976019!3d52.240748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecd1a2af5e7d1%3A0x0!2sJana%20Kazimierza%2011B%2C%2001-248%20Warszawa!5e0!3m2!1sen!2spl!4v1700000000000!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "480px", filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Men's Space location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
