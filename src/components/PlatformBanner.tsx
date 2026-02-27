import Link from "next/link";

const steps = [
  { num: "01", title: "Connect", desc: "Find verified lawyers by specialization, court, or location" },
  { num: "02", title: "Consult", desc: "Book instant or scheduled video, audio, or chat consultations" },
  { num: "03", title: "Resolve", desc: "Get end-to-end legal support until your matter is resolved" },
];

export default function PlatformBanner() {
  return (
    <section className="bg-gradient-to-b from-black via-dark to-black py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 sm:mb-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 text-center">
          How It Works
        </p>
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-heading font-bold tracking-tight text-white">
          Three Simple Steps
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-500">
          Connect with verified legal professionals and resolve your matters
        </p>

        {/* Step cards grid */}
        <div className="mt-10 sm:mt-14 lg:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 relative">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex">
              {/* Step card */}
              <div className="group bg-dark-card rounded-2xl p-6 sm:p-8 border border-white/5 relative overflow-hidden w-full transition-all duration-300 hover:border-gold/30 hover:scale-[1.02] hover:shadow-xl">
                {/* Large watermark number */}
                <span className="absolute -top-2 -right-2 text-6xl sm:text-7xl font-heading font-bold text-gold/[0.06] leading-none select-none pointer-events-none">
                  {step.num}
                </span>

                {/* Gold number badge */}
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gold flex items-center justify-center text-sm font-bold text-black transition-all duration-300 group-hover:shadow-lg group-hover:shadow-gold/30">
                  {step.num}
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mt-4">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Connecting arrow between cards (desktop only) */}
              {i < 2 && (
                <div className="hidden md:flex items-center absolute -right-3 lg:-right-4 top-1/2 -translate-y-1/2 z-10">
                  <svg className="h-6 w-6 text-gold/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            href="/platform"
            className="inline-flex items-center justify-center gap-2 border border-gold/40 rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:shadow-lg"
          >
            Explore Our Platform
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
