"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, MessageSquare, BadgeCheck, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ContactButton from "./ContactButton";

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
          alt="NyaySevak legal services platform connecting lawyers and clients across India"
          fill
          quality={60}
          className="object-cover opacity-[0.08]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-dark-deep/92" />
      </div>

      {/* Glow orbs */}
      <div className="glow-pulse pointer-events-none absolute top-[20%] left-[15%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_55%)] z-[1]" />
      <div className="glow-pulse pointer-events-none absolute bottom-[10%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_55%)] z-[1]" style={{ animationDelay: "3s" }} />

      {/* Top separator */}
      <div className="relative z-10 section-separator" />

      <div className="relative z-10 py-24 sm:py-32 lg:py-40 dark-section-depth">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Split header */}
          <ScrollReveal>
            <div className="lg:flex lg:items-end lg:justify-between gap-8 mb-16 sm:mb-20 lg:mb-24">
              <div className="max-w-lg">
                <p className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold mb-4">
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

          {/* Steps: Glass cards with connectors */}
          <ScrollReveal stagger>
            <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8">
              {steps.map((step, i) => {
                const StepIcon = step.Icon;
                return (
                  <div key={step.num} className="relative">
                    {/* Desktop connector line */}
                    {i < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 right-0 translate-x-1/2 w-6 xl:w-8 z-20">
                        <div className="h-px bg-gradient-to-r from-gold/40 to-gold/10" />
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,168,76,0.5)]" />
                      </div>
                    )}

                    <div className="glass-card h-full">
                      <div className="p-6 sm:p-8 relative">
                        {/* Watermark step number */}
                        <span className="absolute top-4 right-5 text-[80px] font-heading font-bold text-gold/[0.04] leading-none select-none pointer-events-none">
                          {step.num}
                        </span>

                        {/* Icon + step label */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl icon-gold flex items-center justify-center shrink-0">
                            <StepIcon className="h-7 w-7 sm:h-8 sm:w-8 text-black" strokeWidth={1.5} />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase tracking-[0.25em] text-gold/50 font-bold">Step {step.num}</span>
                            <p className="text-xs text-gray-500 mt-0.5">{step.subtitle}</p>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-3">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                          {step.desc}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {step.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-gold/[0.08] border border-gold/15 px-4 py-1.5 text-[11px] font-semibold text-gold/80 tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Mobile connector */}
                    {i < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center py-2">
                        <div className="h-6 w-px bg-gradient-to-b from-gold/30 to-transparent" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row items-center gap-5">
              <ContactButton
                className="btn-gold-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-10 py-5 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer"
              >
                Start Your Journey
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </ContactButton>
              <Link
                href="/platform"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold/70 hover:text-gold transition-colors"
              >
                Learn more about the platform
                <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="relative z-10 section-separator" />
    </section>
  );
}
