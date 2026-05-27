import Image from "next/image";
import { barbers, type Case } from "@/lib/data";

type Props = {
  caseItem: Case;
};

export default function CaseCard({ caseItem }: Props) {
  const barber = barbers.find((b) => b.id === caseItem.barberId);

  return (
    <div className="card-base group overflow-hidden transition-all duration-300 hover:border-white/14">
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
        <Image
          src={caseItem.photo}
          alt={`${caseItem.clientName}'s haircut by ${barber?.name}`}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Fallback initials */}
        <div className="absolute inset-0 flex items-center justify-center text-[#2a2a2a] text-4xl font-bold select-none pointer-events-none"
          aria-hidden="true"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {caseItem.clientName[0]}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-white font-semibold text-sm mb-3">{caseItem.clientName}</p>

        {/* Service tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {caseItem.services.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>

        {/* Barber */}
        <p className="text-[#555] text-xs tracking-[0.06em]">
          Made by <span className="text-[#888]">{barber?.name}</span>
        </p>
      </div>
    </div>
  );
}
