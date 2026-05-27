"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";
import { X } from "lucide-react";
import { cases, barbers, services } from "@/lib/data";
import CaseCard from "./CaseCard";

export default function CasesGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedBarber = searchParams.get("barber") || "";
  const selectedService = searchParams.get("service") || "";

  const setFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const clearAll = () => router.replace(pathname, { scroll: false });

  const filtered = useMemo(() => {
    return cases.filter((c) => {
      const barberMatch = !selectedBarber || c.barberId === selectedBarber;
      const serviceMatch =
        !selectedService ||
        c.services.some(
          (s) => s.toLowerCase().replace(/\s+/g, "-") === selectedService
        );
      return barberMatch && serviceMatch;
    });
  }, [selectedBarber, selectedService]);

  const hasFilters = selectedBarber || selectedService;

  return (
    <div>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap gap-3 items-center">
        {/* Barber filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-[#555] text-[0.65rem] tracking-[0.15em] uppercase self-center mr-1">
            Barber:
          </span>
          {barbers.map((b) => (
            <button
              key={b.id}
              onClick={() => setFilter("barber", selectedBarber === b.id ? "" : b.id)}
              className={`btn btn-ghost transition-all duration-200 ${
                selectedBarber === b.id
                  ? "!border-white/50 !text-white"
                  : ""
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>

        <div className="w-px h-6 bg-white/10 hidden sm:block" />

        {/* Service filter */}
        <div className="flex flex-wrap gap-2">
          <span className="text-[#555] text-[0.65rem] tracking-[0.15em] uppercase self-center mr-1">
            Service:
          </span>
          {services.map((s) => {
            const slug = s.id;
            return (
              <button
                key={s.id}
                onClick={() => setFilter("service", selectedService === slug ? "" : slug)}
                className={`btn btn-ghost transition-all duration-200 ${
                  selectedService === slug ? "!border-white/50 !text-white" : ""
                }`}
              >
                {s.name}
              </button>
            );
          })}
        </div>

        {/* Clear */}
        {hasFilters && (
          <button
            onClick={clearAll}
            className="flex items-center gap-1 text-[#555] hover:text-white text-xs transition-colors duration-200 ml-auto"
          >
            <X size={12} />
            Clear
          </button>
        )}
      </div>

      {/* Count */}
      <p className="text-[#444] text-xs tracking-[0.1em] uppercase mb-8">
        {filtered.length} {filtered.length === 1 ? "project" : "projects"} found
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((c) => (
            <CaseCard key={c.id} caseItem={c} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-[#333] text-sm">No projects match the selected filters.</p>
          <button onClick={clearAll} className="mt-4 text-[#555] hover:text-white text-xs transition-colors duration-200">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
