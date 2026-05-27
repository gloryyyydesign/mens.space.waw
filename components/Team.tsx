"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ListOrdered, GalleryHorizontal } from "lucide-react";
import InstagramIcon from "./InstagramIcon";
import { barbers, type Barber } from "@/lib/data";
import PricelistModal from "./PricelistModal";

function BarberCard({
  barber,
  index,
  inView,
  onShowPricelist,
}: {
  barber: Barber;
  index: number;
  inView: boolean;
  onShowPricelist: (b: Barber) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
      className="card-base overflow-hidden group transition-all duration-300 hover:border-white/14 flex flex-col"
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
        <Image
          src={barber.photo}
          alt={barber.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Initials fallback */}
        <div
          className="absolute inset-0 flex items-center justify-center text-[#2a2a2a] text-5xl font-bold select-none"
          aria-hidden="true"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {barber.name[0]}
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-[#555] text-[0.65rem] tracking-[0.2em] uppercase mb-1">{barber.role}</p>
        <h3
          className="text-white text-xl font-bold mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {barber.name}
        </h3>
        <p className="text-[#666] text-xs leading-relaxed mb-5 flex-1">
          {barber.description}
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => onShowPricelist(barber)}
              className="btn btn-ghost flex-1 text-left flex items-center gap-1.5"
            >
              <ListOrdered size={12} strokeWidth={1.8} />
              Pricelist
            </button>
            <Link
              href={`/cases?barber=${barber.id}`}
              className="btn btn-ghost flex-1 flex items-center gap-1.5"
            >
              <GalleryHorizontal size={12} strokeWidth={1.8} />
              My Works
            </Link>
          </div>
          <a
            href={barber.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost w-full flex items-center gap-1.5 justify-center"
          >
            <InstagramIcon size={12} />
            Instagram
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activePricelist, setActivePricelist] = useState<Barber | null>(null);

  return (
    <section id="team" className="section-pad bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[#555] text-xs tracking-[0.25em] uppercase mb-4">The people</p>
          <h2
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Team
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {barbers.map((barber, i) => (
            <BarberCard
              key={barber.id}
              barber={barber}
              index={i}
              inView={inView}
              onShowPricelist={setActivePricelist}
            />
          ))}
        </div>
      </div>

      <PricelistModal barber={activePricelist} onClose={() => setActivePricelist(null)} />
    </section>
  );
}
