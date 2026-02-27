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
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
      </svg>
    ),
  },
  {
    title: "A-Z Legal Services",
    desc: "From simple affidavits and notary services to high-stakes corporate litigation and international arbitration — services for every legal need.",
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Dual B2B + B2C Model",
    desc: "Serving individual citizens seeking affordable legal help and enterprises needing dedicated legal teams, compliance support, and corporate counsel.",
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Arbitration & ADR Leadership",
    desc: "India's first platform covering all major arbitration institutions — MCIA, DIAC, ICC, SIAC, LCIA — and ADR mechanisms including mediation and Lok Adalat.",
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002" />
      </svg>
    ),
  },
  {
    title: "Tribunal Specialization",
    desc: "Dedicated coverage for NCLT, NCLAT, SAT, NGT, RERA, Consumer Forums, and 20+ specialized tribunals handling over 40% of India's legal matters.",
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    title: "Quality & Trust",
    desc: "Every lawyer verified with Bar Council registration. Transparent pricing with no hidden fees. Secure document management for complete peace of mind.",
    icon: (
      <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const trustItems = [
  "SSL/HTTPS Encryption",
  "Secure Cloud Hosting",
  "Privacy Policy Compliance",
  "IT Act 2000 Compliance",
  "Secure Form Submissions",
];

export default function About() {
  return (
    <section id="about">
      {/* Section 1 — Dark: Large vision statement */}
      <div className="bg-black py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-6 sm:mb-8 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 text-center">
            Who We Are
          </p>
          <blockquote className="text-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold leading-snug tracking-tight text-white">
              To become India&apos;s premier legal services platform, democratizing access to quality
              legal assistance and creating transparency in the Indian legal ecosystem.
            </p>
          </blockquote>
          <div className="mx-auto mt-8 sm:mt-10 h-px w-16 sm:w-24 bg-gold/40" />
        </div>
      </div>

      {/* Section 2 — Cream: Asymmetric Mission */}
      <div className="bg-cream py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            {/* Left: large heading */}
            <div>
              <p className="mb-3 sm:mb-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/70">
                Our Mission
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold tracking-tight text-gray-900">
                Building India&apos;s Most Comprehensive Legal Ecosystem
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-gray-500">
                NyaySevak is building the most comprehensive legal services marketplace in India — a single
                platform connecting clients with verified legal professionals across every court, tribunal,
                and alternative dispute resolution institution in the country.
              </p>
            </div>

            {/* Right: numbered list in cards */}
            <div className="space-y-4 sm:space-y-6">
              {missionPoints.map((point) => (
                <div key={point.num} className="flex gap-4 sm:gap-6 bg-cream-dark/50 rounded-xl p-4 sm:p-5 border-l-2 border-gold/30">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gold/20 shrink-0 leading-none">
                    {point.num}
                  </span>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-600 pt-0.5 sm:pt-1">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Dark: Why Choose Us — card grid */}
      <div className="bg-gradient-to-b from-black via-dark to-black py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 sm:mb-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 text-center">
            The NyaySevak Advantage
          </p>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold tracking-tight text-white">
            Why Choose NyaySevak
          </h2>

          <div className="mt-10 sm:mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyItems.map((item) => (
              <div
                key={item.title}
                className="group bg-dark-card rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-gold/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Icon circle */}
                <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-gold/20">
                  {item.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mt-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 4 — Cream: Trust items as badges */}
      <div className="bg-cream py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 sm:mb-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/70 text-center">
            Security
          </p>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-gray-900">
            Trust &amp; Security
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-center text-sm sm:text-base text-gray-500">
            Your data and privacy are our top priority. We employ industry-leading security measures.
          </p>

          <div className="mx-auto mt-10 sm:mt-14 lg:mt-16 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {trustItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 sm:gap-3 bg-cream-dark rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <svg className="h-4 w-4 shrink-0 text-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-gray-700">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
