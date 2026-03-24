import Link from "next/link";
import Image from "next/image";
import { Landmark, Building2, Scale, MapPin, ArrowRight, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const courtHighlights = [
  "Delhi High Court", "Bombay High Court", "Madras High Court", "Calcutta High Court",
  "Karnataka High Court", "Allahabad High Court",
];

const tribunalHighlights = [
  "NCLT", "NCLAT", "RERA Tribunals", "Consumer Forums", "NGT", "SAT", "ITAT", "CESTAT",
];

export default function Courts() {
  return (
    <section id="courts" className="bg-dark-deep relative overflow-hidden dark-section-depth" aria-label="Pan-India court coverage including Supreme Court, High Courts, District Courts and Tribunals">
      {/* Top separator */}
      <div className="section-separator" />

      {/* Glow orbs */}
      <div className="glow-pulse pointer-events-none absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_55%)]" />
      <div className="glow-pulse pointer-events-none absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_55%)]" style={{ animationDelay: "3s" }} />

      <div className="py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Split layout — Text left, Supreme Court right */}
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left — header and stats */}
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold mb-4">
                  Pan-India Presence
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white heading-glow mb-6">
                  Courts Across<br />
                  <span className="gradient-text-gold">All of India</span>
                </h2>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-md mb-10">
                  From the Supreme Court to your nearest District Court — comprehensive legal representation across every level of the Indian judiciary.
                </p>

                {/* Court tier stats with glass treatment */}
                <div className="space-y-4">
                  {[
                    { icon: Landmark, count: "1", label: "Supreme Court", sub: "Apex Court of India" },
                    { icon: Building2, count: "25", label: "High Courts", sub: "Across all States & UTs" },
                    { icon: Scale, count: "20+", label: "Tribunals", sub: "Specialized judicial bodies" },
                    { icon: MapPin, count: "700+", label: "District Courts", sub: "Across 36 States & UTs" },
                  ].map((tier, i) => {
                    const TierIcon = tier.icon;
                    return (
                      <div key={tier.label}>
                        <div className="flex items-center gap-5 glass-card !rounded-xl p-4 sm:p-5">
                          <div className="h-12 w-12 rounded-xl icon-box-dark flex items-center justify-center shrink-0">
                            <TierIcon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl sm:text-3xl font-heading font-bold stat-gradient">{tier.count}</span>
                              <span className="text-sm text-gray-200 font-semibold">{tier.label}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">{tier.sub}</p>
                          </div>
                        </div>
                        {i < 3 && (
                          <div className="flex justify-center py-1">
                            <div className="h-4 w-px bg-gradient-to-b from-gold/25 to-transparent" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right — Supreme Court image + overlay */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[560px] xl:h-[620px] border border-gold/10 shadow-2xl shadow-black/30">
                <Image
                  src="/courts-image.jpg"
                  alt="Supreme Court of India building - NyaySevak provides legal representation at India's apex court"
                  fill
                  quality={75}
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
                    Access to India&apos;s top advocates and senior counsels for constitutional matters, SLPs, and appellate jurisdiction.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* High Courts & Tribunals pills */}
          <ScrollReveal>
            <div className="mt-14 sm:mt-16 grid sm:grid-cols-2 gap-6 pt-8 border-t border-white/[0.06]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold/60 font-bold mb-3">High Courts</p>
                <div className="flex flex-wrap gap-2">
                  {courtHighlights.map((c) => (
                    <span key={c} className="rounded-full bg-gold/[0.06] border border-gold/12 px-3.5 py-1.5 text-xs text-gray-300 font-medium">
                      {c}
                    </span>
                  ))}
                  <span className="rounded-full bg-gold/[0.06] border border-gold/12 px-3.5 py-1.5 text-xs text-gold/60 font-medium">
                    +19 more
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold/60 font-bold mb-3">Tribunals</p>
                <div className="flex flex-wrap gap-2">
                  {tribunalHighlights.map((t) => (
                    <span key={t} className="rounded-full bg-gold/[0.06] border border-gold/12 px-3.5 py-1.5 text-xs text-gray-300 font-medium">
                      {t}
                    </span>
                  ))}
                  <span className="rounded-full bg-gold/[0.06] border border-gold/12 px-3.5 py-1.5 text-xs text-gold/60 font-medium">
                    +12 more
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CTA row */}
          <ScrollReveal>
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/courts"
                className="btn-gold-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black"
              >
                View Complete Court Directory
                <ChevronRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="section-separator" />
    </section>
  );
}
