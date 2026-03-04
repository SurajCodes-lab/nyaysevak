import Link from "next/link";
import Image from "next/image";
import { Landmark, Building2, Scale, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Courts() {
  return (
    <section id="courts" className="bg-dark-deep relative overflow-hidden">
      {/* Top separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ── Top: Split layout — Text left, Supreme Court right ── */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left — header and stats */}
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-4">
                  Pan-India Presence
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white heading-glow mb-6">
                  Courts Across<br />
                  <span className="gradient-text-gold">All of India</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md mb-10">
                  From the Supreme Court to your nearest District Court — comprehensive legal representation across every level of the Indian judiciary.
                </p>

                {/* Court tier stats — vertical, no cards */}
                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-xl bg-gold/[0.06] border border-gold/[0.08] flex items-center justify-center shrink-0">
                      <Landmark className="h-6 w-6 text-gold/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-heading font-bold stat-gradient">1</span>
                      <span className="ml-2 text-sm text-gray-300">Supreme Court</span>
                    </div>
                  </div>

                  <div className="ml-6 h-6 w-px bg-gradient-to-b from-gold/15 to-transparent" />

                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-xl bg-gold/[0.06] border border-gold/[0.08] flex items-center justify-center shrink-0">
                      <Building2 className="h-6 w-6 text-gold/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-heading font-bold stat-gradient">25</span>
                      <span className="ml-2 text-sm text-gray-300">High Courts</span>
                    </div>
                  </div>

                  <div className="ml-6 h-6 w-px bg-gradient-to-b from-gold/15 to-transparent" />

                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-xl bg-gold/[0.06] border border-gold/[0.08] flex items-center justify-center shrink-0">
                      <Scale className="h-6 w-6 text-gold/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-heading font-bold stat-gradient">20+</span>
                      <span className="ml-2 text-sm text-gray-300">Tribunals</span>
                    </div>
                  </div>

                  <div className="ml-6 h-6 w-px bg-gradient-to-b from-gold/15 to-transparent" />

                  <div className="flex items-center gap-5">
                    <div className="h-12 w-12 rounded-xl bg-gold/[0.06] border border-gold/[0.08] flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-gold/70" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-heading font-bold stat-gradient">700+</span>
                      <span className="ml-2 text-sm text-gray-300">District Courts across 36 States &amp; UTs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right — Supreme Court image + overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[520px] xl:h-[580px]">
                <Image
                  src="/courts-image.png"
                  alt="Supreme Court of India"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-dark-deep/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-deep/40 via-transparent to-transparent" />

                {/* Overlay content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Landmark className="h-4 w-4 text-gold" strokeWidth={2} />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
                      Apex Court of India
                    </p>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white heading-glow">
                    Supreme Court of India
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 max-w-sm">
                    Access to India&apos;s top advocates and senior counsels for constitutional matters and appeals.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Bottom: CTA row ── */}
          <ScrollReveal>
            <div className="mt-14 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/[0.05]">
              <p className="text-sm text-gray-500">
                Delhi HC &bull; Bombay HC &bull; Madras HC &bull; Calcutta HC &bull; NCLT &bull; RERA &bull; Consumer Forums &bull; NGT
                <span className="text-gold/50 ml-2">and many more</span>
              </p>
              <Link
                href="/courts"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors shrink-0"
              >
                View Complete Court Directory
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
    </section>
  );
}
