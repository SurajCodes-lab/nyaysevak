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
    desc: "Full coverage from the Supreme Court of India to District Courts. Every level of the judiciary, every jurisdiction, one unified platform.",
    iconPath: "M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z",
  },
  {
    title: "A-Z Legal Services",
    desc: "From simple affidavits and notary services to high-stakes corporate litigation and international arbitration — services for every legal need.",
    iconPath: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
  },
  {
    title: "Dual B2B + B2C Model",
    desc: "Serving individual citizens seeking affordable legal help and enterprises needing dedicated legal teams, compliance support, and corporate counsel.",
    iconPath: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    title: "Arbitration & ADR Leadership",
    desc: "India's first platform covering all major arbitration institutions — MCIA, DIAC, ICC, SIAC, LCIA — and ADR mechanisms including mediation and Lok Adalat.",
    iconPath: "M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002",
  },
  {
    title: "Tribunal Specialization",
    desc: "Dedicated coverage for NCLT, NCLAT, SAT, NGT, RERA, Consumer Forums, and 20+ specialized tribunals handling over 40% of India's legal matters.",
    iconPath: "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21",
  },
  {
    title: "Quality & Trust",
    desc: "Every lawyer verified with Bar Council registration. Transparent pricing with no hidden fees. Secure document management for complete peace of mind.",
    iconPath: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
];

/* Bento grid column spans */
const bentoSpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-12",
];

export default function About() {
  return (
    <section id="about">
      {/* ── Sub-section A: Vision (Dark bg) ── */}
      <div className="bg-dark-deep py-28 sm:py-36 lg:py-44 relative overflow-hidden">
        {/* Subtle bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
          style={{ backgroundImage: "url('/about-vision.jpeg')" }}
        />
        <div className="absolute inset-0 bg-dark-deep/90" />

        {/* Decorative quote marks */}
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

          {/* Thin gold line + label */}
          <div className="mt-12 sm:mt-16 flex flex-col items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
              Our Vision
            </p>
          </div>
        </div>
      </div>

      {/* ── Sub-section B: Mission (Cream bg) ── */}
      <div className="bg-cream cream-pattern py-20 sm:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:gap-20 lg:grid-cols-[2fr_3fr] lg:items-start">
            {/* Left column — sticky heading */}
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

            {/* Right column — editorial mission points */}
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

      {/* ── Sub-section C: Why Choose (Dark bg — Bento grid) ── */}
      <div className="animated-mesh py-20 sm:py-28 lg:py-36 relative overflow-hidden">
        <div className="glow-pulse pointer-events-none absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
        <div className="glow-pulse pointer-events-none absolute bottom-[10%] -right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_70%)]" style={{ animationDelay: "3s" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/40" />
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
              The NyaySevak Advantage
            </p>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/40" />
          </div>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold tracking-tight text-white heading-glow">
            Why Choose NyaySevak
          </h2>

          {/* Bento Grid */}
          <ScrollReveal stagger className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            {whyItems.map((item, i) => (
              <div
                key={item.title}
                className={`${bentoSpans[i]} gradient-border-card`}
              >
                <div
                  className={`group glass-card !rounded-[calc(1rem-1px)] ${
                    i === 0 || i === 5 ? "p-8 sm:p-10" : "p-6 sm:p-8"
                  }`}
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center mb-5 transition-all duration-300 group-hover:from-gold/30 group-hover:to-gold/10">
                    <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                    </svg>
                  </div>
                  <h3 className={`font-heading font-bold text-white heading-glow ${
                    i === 0 || i === 5 ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-gray-300 leading-relaxed mt-3 ${
                    i === 0 || i === 5 ? "text-sm sm:text-base" : "text-sm"
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
