import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Connect",
    desc: "Find verified lawyers by specialization, court, or location. Browse profiles, ratings, and case histories to choose the right legal professional for your needs.",
    iconPath: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
  },
  {
    num: "02",
    title: "Consult",
    desc: "Book instant or scheduled video, audio, or chat consultations. Get expert legal advice from the comfort of your home, anytime you need it.",
    iconPath: "M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155",
  },
  {
    num: "03",
    title: "Resolve",
    desc: "Get end-to-end legal support until your matter is resolved. Track case progress, manage documents, and stay informed every step of the way.",
    iconPath: "M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z",
  },
];

export default function PlatformBanner() {
  return (
    <section className="animated-mesh py-20 sm:py-28 lg:py-36 relative overflow-hidden">
      {/* Glow orbs */}
      <div className="glow-pulse pointer-events-none absolute top-[15%] right-[-8%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
      <div className="glow-pulse pointer-events-none absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_70%)]" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/40" />
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            How It Works
          </p>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-heading font-bold tracking-tight text-white heading-glow">
          Three Simple Steps
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-400">
          Connect with verified legal professionals and resolve your matters
        </p>

        {/* ── Timeline ── */}
        <div className="mt-16 sm:mt-20 lg:mt-24 relative">
          {/* Vertical gold line — center on desktop, left on mobile */}
          <div className="absolute left-5 sm:left-6 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-gold/40" />

          <div className="space-y-16 sm:space-y-20 lg:space-y-24">
            {steps.map((step, i) => {
              const isRight = i % 2 === 0; // step 1 & 3: content right, step 2: content left
              return (
                <ScrollReveal key={step.num}>
                  <div className="relative">
                    {/* Timeline node */}
                    <div className="absolute left-5 sm:left-6 lg:left-1/2 top-0 -translate-x-1/2 z-10">
                      <div className="timeline-node" />
                    </div>

                    {/* Content — always right on mobile, alternating on desktop */}
                    <div className={`lg:grid lg:grid-cols-2 lg:gap-12 items-start ${
                      isRight ? "" : "lg:direction-rtl"
                    }`}>
                      {/* Massive step number — opposite side on desktop */}
                      <div className={`hidden lg:flex items-start justify-center pt-0 ${
                        isRight ? "lg:order-1" : "lg:order-2"
                      }`}>
                        <span className="text-8xl lg:text-9xl font-heading font-bold gradient-text-gold opacity-20 leading-none select-none">
                          {step.num}
                        </span>
                      </div>

                      {/* Card */}
                      <div className={`ml-14 sm:ml-16 lg:ml-0 ${
                        isRight ? "lg:order-2" : "lg:order-1"
                      }`} style={{ direction: "ltr" }}>
                        {/* Mobile step number */}
                        <span className="lg:hidden text-5xl font-heading font-bold gradient-text-gold opacity-20 leading-none select-none block mb-3">
                          {step.num}
                        </span>

                        <div className="glass-card p-6 sm:p-8">
                          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/20">
                            <svg className="h-6 w-6 sm:h-7 sm:w-7 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d={step.iconPath} />
                            </svg>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mt-5 heading-glow">
                            {step.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 sm:mt-20 text-center">
          <Link
            href="/platform"
            className="btn-gold-shine inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 sm:px-10 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:shadow-xl hover:shadow-gold/20"
          >
            Start Your Journey
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
