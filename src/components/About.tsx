import { Scale, FileText, Users, Handshake, Building2, ShieldCheck } from "lucide-react";
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
      {/* ── Sub-section A: Vision (Dark bg) ── */}
      <div className="bg-dark-deep py-28 sm:py-36 lg:py-44 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url('/about-vision.jpeg')" }}
        />
        <div className="absolute inset-0 bg-dark-deep/90" />

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
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
              Our Vision
            </p>
          </div>
        </div>
      </div>

      {/* ── Sub-section B: Mission (Cream bg — left/right split) ── */}
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

      {/* ── Sub-section C: Why Choose — Editorial Row Layout (NO cards) ── */}
      <div className="bg-dark-deep py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        {/* Subtle decorative */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Left-aligned header */}
          <ScrollReveal>
            <div className="max-w-xl mb-16 sm:mb-20">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold font-semibold mb-4">
                The NyaySevak Advantage
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white heading-glow">
                Why Choose NyaySevak
              </h2>
            </div>
          </ScrollReveal>

          {/* 2-column editorial grid — NO cards, just content rows */}
          <ScrollReveal stagger>
            <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-0">
              {whyItems.map((item, i) => {
                const ItemIcon = item.Icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-5 sm:gap-6 py-8 sm:py-10 ${
                      /* horizontal rule between items in each column */
                      i < whyItems.length - 2 ? "border-b border-white/[0.05]" : ""
                    }`}
                  >
                    {/* Number + icon */}
                    <div className="shrink-0 flex flex-col items-center gap-3">
                      <span className="text-4xl sm:text-5xl font-heading font-bold stat-gradient leading-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-10 w-10 rounded-lg bg-gold/[0.08] border border-gold/10 flex items-center justify-center">
                        <ItemIcon className="h-5 w-5 text-gold/70" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Text */}
                    <div className="pt-1">
                      <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.desc}
                      </p>
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
