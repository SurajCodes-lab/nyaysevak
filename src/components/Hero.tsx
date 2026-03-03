import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "25+", label: "High Courts" },
  { value: "700+", label: "District Courts" },
  { value: "20+", label: "Tribunals" },
  { value: "1000+", label: "Verified Lawyers" },
  { value: "26", label: "Practice Areas" },
  { value: "36", label: "States & UTs" },
];

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-dark-deep overflow-hidden">
      {/* Background courthouse image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.25]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-deep via-dark-deep/70 to-dark-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/80 via-transparent to-dark-deep/50" />
      </div>

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] sm:h-[800px] sm:w-[800px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Desktop Layout */}
      <div className="relative z-10 mx-auto hidden h-full max-w-7xl lg:flex items-stretch px-6 lg:px-8">
        {/* Left 55% — Content */}
        <div className="flex flex-1 flex-col items-start text-left justify-center lg:w-[55%] lg:pr-16">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold/70">
            India&apos;s First Complete Legal Ecosystem
          </p>

          <h1 className="mb-6 text-7xl xl:text-8xl font-heading font-bold tracking-tight text-white">
            NYAYSEVAK
          </h1>

          {/* Accent gavel with gold divider lines */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-16 bg-gold" />
            <Image
              src="/hero-accent.jpeg"
              alt="Golden gavel"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/30 shadow-md shadow-gold/20"
            />
            <div className="h-px w-16 bg-gold" />
          </div>

          <p className="mb-4 text-xl font-heading font-medium tracking-wide text-gold/80">
            Defending Your Rights
          </p>

          <p className="mb-12 max-w-lg text-base leading-relaxed text-gray-300">
            A unified digital platform connecting citizens, businesses, and legal professionals
            across the entire Indian judicial system — Supreme Court to District Courts,
            all Tribunals, and every Arbitration centre.
          </p>

          {/* Two CTAs */}
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20 hover:shadow-[0_4px_20px_-4px_rgba(201,168,76,0.3)]"
            >
              Get Legal Help
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-gold hover:bg-gold/10"
            >
              For Businesses
            </Link>
          </div>
        </div>

        {/* Right 45% — Stats */}
        <div className="flex lg:w-[45%] flex-col justify-center items-center">
          <div className="w-full max-w-lg">
            <div className="grid grid-cols-3 gap-4">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="glass-card p-5 text-center">
                  <span className="text-3xl xl:text-4xl font-heading font-bold text-white">{stat.value}</span>
                  <p className="mt-1.5 text-xs uppercase tracking-[0.15em] text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {stats.slice(3).map((stat) => (
                <div key={stat.label} className="glass-card p-5 text-center">
                  <span className="text-3xl xl:text-4xl font-heading font-bold text-white">{stat.value}</span>
                  <p className="mt-1.5 text-xs uppercase tracking-[0.15em] text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout — everything inside h-screen */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 sm:px-6 lg:hidden">
        <p className="mb-2 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-gold/70">
          India&apos;s First Complete Legal Ecosystem
        </p>

        <h1 className="mb-2 text-4xl sm:text-5xl font-heading font-bold tracking-tight text-white">
          NYAYSEVAK
        </h1>

        {/* Accent gavel */}
        <div className="mb-3 flex items-center gap-3">
          <div className="h-px w-8 sm:w-12 bg-gold" />
          <Image
            src="/hero-accent.jpeg"
            alt="Golden gavel"
            width={36}
            height={36}
            className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-cover ring-1 ring-gold/30 shadow-md shadow-gold/20"
          />
          <div className="h-px w-8 sm:w-12 bg-gold" />
        </div>

        <p className="mb-2 text-sm sm:text-base font-heading font-medium tracking-wide text-gold/80">
          Defending Your Rights
        </p>

        <p className="mb-5 max-w-sm text-center text-xs sm:text-sm leading-relaxed text-gray-300">
          A unified digital platform connecting citizens, businesses, and legal professionals
          across the entire Indian judicial system — Supreme Court to District Courts,
          all Tribunals, and every Arbitration centre.
        </p>

        {/* CTAs side by side */}
        <div className="mb-6 flex gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
          >
            Get Legal Help
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-gold/40 px-5 sm:px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            For Businesses
          </Link>
        </div>

        {/* Stats grid — compact */}
        <div className="w-full max-w-md grid grid-cols-3 gap-2 sm:gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card px-2 py-3 sm:p-4 text-center">
              <span className="text-lg sm:text-2xl font-heading font-bold text-white">{stat.value}</span>
              <p className="mt-0.5 text-[9px] sm:text-[11px] uppercase tracking-wider text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-500">Scroll</span>
        <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
