import { Scale, FileText, Users, Handshake, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const missionPoints = [
  { num: "01", text: "Bridge the gap between legal service providers and consumers across India" },
  { num: "02", text: "Simplify complex legal processes through digital solutions" },
  { num: "03", text: "Provide affordable and accessible legal services to every Indian citizen and business" },
  { num: "04", text: "Enable businesses to manage legal compliance efficiently across all jurisdictions" },
  { num: "05", text: "Create a transparent, secure, and reliable legal services ecosystem" },
];

const whyItems = [
  {
    title: "Complete Legal Ecosystem",
    desc: "Full coverage from the Supreme Court to District Courts — every jurisdiction, one unified platform.",
    Icon: Scale,
  },
  {
    title: "A-Z Legal Services",
    desc: "From simple affidavits to high-stakes corporate litigation and international arbitration.",
    Icon: FileText,
  },
  {
    title: "Dual B2B + B2C Model",
    desc: "Serving individual citizens and enterprises needing dedicated legal teams and corporate counsel.",
    Icon: Users,
  },
  {
    title: "Arbitration & ADR Leadership",
    desc: "India's first platform covering all major arbitration institutions — MCIA, DIAC, ICC, SIAC, LCIA.",
    Icon: Handshake,
  },
  {
    title: "Tribunal Specialization",
    desc: "NCLT, NCLAT, SAT, NGT, RERA, Consumer Forums, and 20+ specialized tribunals.",
    Icon: Building2,
  },
  {
    title: "Quality & Trust",
    desc: "Every lawyer verified with Bar Council registration. Transparent pricing, secure document management.",
    Icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section id="about">
      {/* -- Sub-section A: Vision (Dark bg) -- */}
      <div className="bg-dark-deep py-28 sm:py-36 lg:py-44 relative overflow-hidden dark-section-depth">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url('/about-vision.jpeg')" }}
        />
        <div className="absolute inset-0 bg-dark-deep/85" />

        {/* Glow orbs */}
        <div className="glow-pulse pointer-events-none absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="glow-pulse pointer-events-none absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" style={{ animationDelay: "3s" }} />

        <div className="quote-mark absolute top-12 left-6 sm:left-12 lg:left-20 select-none">
          &ldquo;
        </div>
        <div className="quote-mark absolute bottom-12 right-6 sm:right-12 lg:right-20 select-none">
          &rdquo;
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-tight tracking-tight text-white heading-glow">
              <span className="block">To become India&apos;s premier</span>
              <span className="block gradient-text-gold">legal services platform,</span>
              <span className="block">democratizing access to</span>
              <span className="block">quality legal assistance.</span>
            </blockquote>
          </ScrollReveal>

          <div className="mt-12 sm:mt-16 flex flex-col items-center gap-4">
            <div className="gold-line-animated w-20" />
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
              Our Vision
            </p>
          </div>
        </div>
      </div>

      {/* -- Sub-section B: Mission (Cream bg -- left/right split) -- */}
      <div className="bg-cream cream-pattern py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:gap-20 lg:grid-cols-[2fr_3fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-8 w-1 bg-gold rounded-full" />
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
                  Our Mission
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold tracking-tight text-gray-900">
                Building India&apos;s Most Comprehensive Legal Ecosystem
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-gray-500">
                NyaySevak is building the most comprehensive legal services marketplace in India — a single
                platform connecting clients with verified legal professionals across every court, tribunal,
                and alternative dispute resolution institution in the country.
              </p>
            </div>

            <ScrollReveal stagger>
              <div className="space-y-0">
                {missionPoints.map((point, i) => (
                  <div
                    key={point.num}
                    className={`flex items-start gap-5 sm:gap-8 py-7 sm:py-8 ${
                      i < missionPoints.length - 1 ? "border-b border-gold/15" : ""
                    }`}
                  >
                    <span className="text-5xl lg:text-7xl font-heading font-bold stat-gradient leading-none shrink-0 -ml-1">
                      {point.num}
                    </span>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-600 pt-2 lg:pt-4">
                      {point.text}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* -- Sub-section C: Why Choose — Glass Cards with Gradient Borders -- */}
      <div className="bg-dark-deep py-20 sm:py-28 lg:py-36 relative overflow-hidden dark-section-depth">
        {/* Decorative separators */}
        <div className="absolute top-0 left-0 right-0 section-separator" />
        <div className="absolute bottom-0 left-0 right-0 section-separator" />

        {/* Glow orbs */}
        <div className="glow-pulse pointer-events-none absolute top-[30%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_55%)]" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal>
            <div className="text-center mb-14 sm:mb-18 lg:mb-20">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold mb-4">
                The NyaySevak Advantage
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white heading-glow">
                Why Choose NyaySevak
              </h2>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
                <div className="h-2 w-2 bg-gold rotate-45 shadow-[0_0_12px_rgba(201,168,76,0.4)]" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
              </div>
            </div>
          </ScrollReveal>

          {/* Featured first card — full width */}
          <ScrollReveal>
            {(() => {
              const FeaturedIcon = whyItems[0].Icon;
              return (
                <div className="gradient-border-card mb-6 lg:mb-8">
                  <div className="glass-card !rounded-[calc(1.25rem-1.5px)]">
                    <div className="p-6 sm:p-8 lg:p-10 lg:flex lg:items-center lg:gap-10">
                      <div className="h-16 w-16 lg:h-20 lg:w-20 rounded-2xl icon-gold flex items-center justify-center shrink-0 mb-5 lg:mb-0">
                        <FeaturedIcon className="h-8 w-8 lg:h-10 lg:w-10 text-black" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white heading-glow mb-2">
                          {whyItems[0].title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                          {whyItems[0].desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </ScrollReveal>

          {/* Remaining 5 cards — 2-column grid */}
          <ScrollReveal stagger>
            <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
              {whyItems.slice(1).map((item, i) => {
                const ItemIcon = item.Icon;
                const isLastOdd = i === whyItems.length - 2 && (whyItems.length - 1) % 2 !== 0;
                return (
                  <div
                    key={item.title}
                    className={`glass-card ${isLastOdd ? "md:col-span-2 md:max-w-lg md:mx-auto md:w-full" : ""}`}
                  >
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start gap-5">
                        <div className="h-13 w-13 rounded-xl icon-box-dark flex items-center justify-center shrink-0">
                          <ItemIcon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
