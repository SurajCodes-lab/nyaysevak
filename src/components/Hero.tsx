import Link from "next/link";
import Image from "next/image";
import { Shield, Users, MapPin, MessageCircle, ChevronDown, ArrowRight } from "lucide-react";

const trustItems = [
  { icon: Shield, label: "10+ Years Experience" },
  { icon: Users, label: "1,000+ Verified Lawyers" },
  { icon: MapPin, label: "700+ Courts Covered" },
  { icon: MessageCircle, label: "Free First Consultation" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-dark-deep overflow-hidden flex flex-col">
      {/* Background image with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.30]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-deep/60 via-dark-deep/30 to-dark-deep" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-deep/40 via-transparent to-dark-deep/40" />
      </div>

      {/* Ambient glow orbs */}
      <div className="glow-pulse pointer-events-none absolute top-[15%] left-[10%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_60%)] z-[1]" />
      <div className="glow-pulse pointer-events-none absolute bottom-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)] z-[1]" style={{ animationDelay: "3s" }} />

      {/* Decorative gold accent lines */}
      <div className="absolute top-[28%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent z-[1]" />
      <div className="absolute top-[72%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent z-[1]" />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center pt-24 pb-8">
        {/* Eyebrow with decorative lines */}
        <div className="hero-entrance hero-delay-1 flex items-center gap-4 mb-6 sm:mb-8">
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-gold/40" />
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/80 font-semibold">
            Trusted Legal Services Across India
          </p>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-gold/40" />
        </div>

        {/* H1 */}
        <h1 className="hero-entrance-scale hero-delay-2 mb-4 sm:mb-5 max-w-4xl">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-white heading-glow leading-[1.15]">
            Your Legal Problem
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight gradient-text-gold mt-1 leading-[1.15]">
            Deserves a Trusted Solution
          </span>
        </h1>

        {/* Ornamental diamond divider */}
        <div className="hero-entrance hero-delay-3 flex items-center gap-3 mb-5 sm:mb-6">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/30" />
          <div className="h-2 w-2 bg-gold rotate-45 shadow-[0_0_12px_rgba(201,168,76,0.4)]" />
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        {/* Supporting paragraph */}
        <p className="hero-entrance hero-delay-4 mb-8 sm:mb-10 max-w-xl text-sm sm:text-base leading-relaxed text-gray-300/90">
          Connect with verified lawyers across India for property disputes,
          bail applications, corporate counsel, and more — affordable, transparent,
          and always in your corner.
        </p>

        {/* CTAs */}
        <div className="hero-entrance hero-delay-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
          <Link
            href="/contact"
            className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-9 py-4.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:shadow-xl hover:shadow-[0_8px_30px_-4px_rgba(201,168,76,0.4)]"
          >
            Talk to a Lawyer Today
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
          <Link
            href="/services"
            className="btn-premium inline-flex items-center justify-center gap-2 rounded-xl border border-gold/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300"
          >
            Explore Our Services
          </Link>
        </div>
      </div>

      {/* Trust bar — glassmorphism */}
      <div className="hero-entrance hero-delay-6 relative z-10 border-t border-white/[0.06] bg-dark-deep/40 backdrop-blur-xl">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center justify-center gap-3">
                  <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg bg-gold/[0.08] border border-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-300 font-medium leading-tight">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-entrance hero-delay-7 absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-gray-500">Scroll</span>
        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gold/50" strokeWidth={1.5} />
      </div>
    </section>
  );
}
