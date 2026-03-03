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
    <section className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Background courthouse image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.12]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] sm:h-[800px] sm:w-[800px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
      </div>

      {/* Split Layout */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row items-stretch px-4 sm:px-6 lg:px-8">
        {/* Left 55% — Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left justify-center pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-12 lg:w-[55%] lg:pr-16">
          <Image
            src="/logo.jpeg"
            alt="NyaySevak Logo"
            width={120}
            height={120}
            className="mb-3 sm:mb-6 lg:mb-8 h-20 w-20 sm:h-24 sm:w-24 lg:h-[120px] lg:w-[120px] rounded-full ring-2 ring-gold/30 shadow-lg shadow-gold/20"
          />

          <p className="mb-2 sm:mb-4 lg:mb-6 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/70">
            India&apos;s First Complete Legal Ecosystem
          </p>

          <h1 className="mb-3 sm:mb-4 lg:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold tracking-tight text-white">
            <span className="lg:hidden">NYAYSEVAK</span>
            <span className="hidden lg:inline">NYAY<br />SEVAK</span>
          </h1>

          {/* Accent gavel with gold divider lines */}
          <div className="mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 mx-auto lg:mx-0">
            <div className="h-px w-10 sm:w-16 bg-gold" />
            <Image
              src="/hero-accent.jpeg"
              alt="Golden gavel"
              width={44}
              height={44}
              className="h-9 w-9 sm:h-11 sm:w-11 rounded-full object-cover ring-1 ring-gold/30 shadow-md shadow-gold/20"
            />
            <div className="h-px w-10 sm:w-16 bg-gold" />
          </div>

          <p className="mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl font-heading font-medium tracking-wide text-gold/80">
            Defending Your Rights
          </p>

          <p className="mb-8 sm:mb-10 lg:mb-12 max-w-md lg:max-w-lg text-sm sm:text-base leading-relaxed text-gray-400">
            A unified digital platform connecting citizens, businesses, and legal professionals
            across the entire Indian judicial system — Supreme Court to District Courts,
            all Tribunals, and every Arbitration centre.
          </p>

          {/* Two CTAs */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light hover:shadow-xl hover:shadow-gold/20"
            >
              Get Legal Help
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-gold/40 px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-gold hover:bg-gold/10"
            >
              For Businesses
            </Link>
          </div>
        </div>

        {/* Right 45% — Constitution book + stats (desktop) */}
        <div className="hidden lg:flex lg:w-[45%] flex-col justify-center items-center">
          {/* Main hero illustration */}
          <div className="relative mb-10">
            <Image
              src="/hero-main.png"
              alt="Constitution of India with golden light"
              width={480}
              height={400}
              priority
              className="h-auto w-full max-w-[400px] xl:max-w-[460px] object-contain drop-shadow-[0_0_50px_rgba(201,168,76,0.2)]"
            />
            <div className="absolute inset-0 -z-10 translate-y-4 scale-75 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_70%)]" />
          </div>

          {/* Stats grid below the image */}
          <div className="w-full max-w-md">
            <div className="grid grid-cols-3 gap-4">
              {stats.slice(0, 3).map((stat) => (
                <div key={stat.label} className="text-center border-l border-gold/20 first:border-l-0 pl-4 first:pl-0">
                  <span className="text-2xl font-heading font-bold text-white">{stat.value}</span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {stats.slice(3).map((stat) => (
                <div key={stat.label} className="text-center border-l border-gold/20 first:border-l-0 pl-4 first:pl-0">
                  <span className="text-2xl font-heading font-bold text-white">{stat.value}</span>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Constitution book + stats */}
      <div className="relative z-10 border-t border-white/5 bg-black/50 px-4 sm:px-6 py-8 sm:py-10 lg:hidden">
        <div className="mx-auto mb-8 flex justify-center">
          <Image
            src="/hero-main.png"
            alt="Constitution of India with golden light"
            width={280}
            height={230}
            className="h-auto w-full max-w-[220px] sm:max-w-[260px] object-contain opacity-90 drop-shadow-[0_0_30px_rgba(201,168,76,0.15)]"
          />
        </div>

        <div className="mx-auto grid max-w-lg grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/[0.03] rounded-xl p-3 sm:p-4 border border-white/5 text-center">
              <span className="text-xl sm:text-2xl font-heading font-bold text-white">{stat.value}</span>
              <p className="mt-1 text-[10px] sm:text-[11px] uppercase tracking-wider text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-gray-600">Scroll</span>
        <svg className="h-5 w-5 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
