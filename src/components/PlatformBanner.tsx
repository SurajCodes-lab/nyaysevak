import Link from "next/link";
import Image from "next/image";
import { Users, MessageSquare, BadgeCheck, ArrowRight, Phone, Video, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Connect",
    subtitle: "Find Your Expert",
    desc: "Search 1,000+ verified lawyers by specialization, court, or city. Every advocate is verified with Bar Council credentials.",
    Icon: Users,
    tags: ["Verified Profiles", "Specialist Match"],
  },
  {
    num: "02",
    title: "Consult",
    subtitle: "Get Expert Advice",
    desc: "Book instant or scheduled consultations via video, audio, or chat. Get expert legal advice from the comfort of your home.",
    Icon: MessageSquare,
    tags: ["Video / Audio / Chat", "24/7 Available"],
  },
  {
    num: "03",
    title: "Resolve",
    subtitle: "End-to-End Support",
    desc: "From filing to final verdict — get complete legal support. Track your case, manage documents, and stay informed at every stage.",
    Icon: BadgeCheck,
    tags: ["Case Tracking", "Full Representation"],
  },
];

export default function PlatformBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/about-vision.jpeg"
          alt=""
          fill
          className="object-cover opacity-[0.06]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark-deep/95" />
      </div>

      {/* Top separator */}
      <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      <div className="relative z-10 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ── Split header: left text, right visual cue ── */}
          <ScrollReveal>
            <div className="lg:flex lg:items-end lg:justify-between gap-8 mb-16 sm:mb-20 lg:mb-24">
              <div className="max-w-lg">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-4">
                  How It Works
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white heading-glow">
                  Your Path to<br />
                  <span className="gradient-text-gold">Legal Resolution</span>
                </h2>
              </div>
              <p className="mt-4 lg:mt-0 max-w-md text-sm sm:text-base text-gray-400 leading-relaxed">
                From finding the right lawyer to resolving your legal matter — we simplify every step of the journey.
              </p>
            </div>
          </ScrollReveal>

          {/* ── Steps: Horizontal on desktop, vertical on mobile ── */}
          <ScrollReveal stagger>
            <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-0">
              {steps.map((step, i) => {
                const StepIcon = step.Icon;
                return (
                  <div key={step.num} className="relative">
                    {/* Connector line (desktop: right, mobile: bottom) */}
                    {i < steps.length - 1 && (
                      <>
                        {/* Desktop connector */}
                        <div className="hidden lg:block absolute top-8 right-0 w-full h-px z-0">
                          <div className="absolute top-0 left-[60%] right-0 h-px bg-gradient-to-r from-gold/20 to-gold/5" />
                        </div>
                        {/* Mobile connector */}
                        <div className="lg:hidden absolute left-7 bottom-0 translate-y-full w-px h-8 bg-gradient-to-b from-gold/20 to-transparent" />
                      </>
                    )}

                    <div className={`relative z-10 ${i < steps.length - 1 ? "lg:pr-10 xl:pr-14" : ""}`}>
                      {/* Step number + icon row */}
                      <div className="flex items-center gap-4 mb-5">
                        <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-xl shadow-gold/25 shrink-0">
                          <StepIcon className="h-7 w-7 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-gold/40 font-bold">Step {step.num}</span>
                          <p className="text-xs text-gray-500 mt-0.5">{step.subtitle}</p>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-sm">
                        {step.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gold/[0.06] border border-gold/10 px-3.5 py-1.5 text-[11px] font-medium text-gray-400 tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center gap-5">
              <Link
                href="/contact"
                className="btn-gold-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-10 py-5 text-sm font-semibold uppercase tracking-widest text-black"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold/60 hover:text-gold transition-colors"
              >
                Learn more about the platform
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
    </section>
  );
}
