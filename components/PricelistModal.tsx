"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Barber } from "@/lib/data";
import { useEffect } from "react";

type Props = {
  barber: Barber | null;
  onClose: () => void;
};

export default function PricelistModal({ barber, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (barber) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [barber, onClose]);

  return (
    <AnimatePresence>
      {barber && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-4 bottom-4 top-auto sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-[70] w-full sm:w-[480px] max-h-[85dvh] overflow-hidden flex flex-col bg-[#111111] border border-white/10"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-7 pb-5 border-b border-white/7">
              <div>
                <p className="text-[#555] text-[0.65rem] tracking-[0.2em] uppercase mb-1">Price List</p>
                <h3
                  className="text-white text-xl font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {barber.name}
                </h3>
                <p className="text-[#666] text-xs mt-0.5">{barber.role}</p>
              </div>
              <button
                onClick={onClose}
                className="text-[#555] hover:text-white transition-colors duration-200 p-1 -mr-1 -mt-1"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="overflow-y-auto flex-1 p-7 pt-5">
              <div className="space-y-0">
                {barber.pricelist.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between py-4 border-b border-white/5 last:border-0"
                  >
                    <span className="text-[#aaa] text-sm pr-4 leading-snug">{item.service}</span>
                    <span className="text-white text-sm font-medium shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-7 pt-4 border-t border-white/7">
              <p className="text-[#444] text-[0.65rem] text-center tracking-[0.06em]">
                Prices subject to change. Final price confirmed at booking.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
