import Link from "next/link";
import InstagramIcon from "./InstagramIcon";
import { INSTAGRAM_URL, BOOKING_URL } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <p
              className="text-white font-bold text-sm tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Men&apos;s Space
            </p>
            <p className="text-[#555] text-xs leading-relaxed max-w-[180px]">
              Premium barbershop in the heart of Warsaw.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#555] hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[#444] text-[0.65rem] tracking-[0.2em] uppercase mb-4">Services</p>
            <ul className="space-y-2.5">
              {["Men's Haircut", "Beard Trimming", "Buzz Cut", "Shaving", "Coloring", "Waxing"].map(
                (s) => (
                  <li key={s}>
                    <a href="#services" className="text-[#666] hover:text-white text-xs transition-colors duration-200">
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[#444] text-[0.65rem] tracking-[0.2em] uppercase mb-4">Navigate</p>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "#services" },
                { label: "Our Work", href: "/cases" },
                { label: "Team", href: "#team" },
                { label: "Location", href: "#location" },
                { label: "Book Now", href: BOOKING_URL, external: true },
              ].map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-white text-xs transition-colors duration-200">
                      {l.label}
                    </a>
                  ) : (
                    <Link href={l.href} className="text-[#666] hover:text-white text-xs transition-colors duration-200">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Address */}
          <div>
            <p className="text-[#444] text-[0.65rem] tracking-[0.2em] uppercase mb-4">Address</p>
            <address className="not-italic">
              <p className="text-[#666] text-xs leading-relaxed">
                Jana Kazimierza 11B<br />
                01-248 Warszawa<br />
                Polska
              </p>
            </address>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-white text-xs tracking-[0.1em] uppercase hover:text-[#ccc] transition-colors duration-200"
            >
              Book Online →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mb-7" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.65rem] text-[#333] tracking-[0.06em]">
          <p>© {year} Men&apos;s Space. All rights reserved.</p>
          <p>Jana Kazimierza 11B, Warszawa, Polska</p>
        </div>
      </div>
    </footer>
  );
}
