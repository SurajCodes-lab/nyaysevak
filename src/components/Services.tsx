"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  Scale, Search, FileText, HeartHandshake, BookOpen, Upload,
  Building2, ClipboardCheck, PenTool, Lightbulb, BarChart3, ArrowLeftRight,
  ArrowRight, ChevronLeft, ChevronRight,
} from "lucide-react";
import { b2cServices, b2bServices, b2cAudiences, b2bAudiences } from "@/data/services";
import ScrollReveal from "./ScrollReveal";

const lucideIconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Scale, Search, FileText, HeartHandshake, BookOpen, Upload,
  Building2, ClipboardCheck, PenTool, Lightbulb, BarChart3, ArrowLeftRight,
};

const tabDescriptions = {
  b2c: "From your first legal consultation to document drafting and court e-filing — we make legal services simple, affordable, and accessible for every Indian citizen.",
  b2b: "Streamline your enterprise legal operations with dedicated teams for compliance, contracts, IP protection, litigation management, and M&A support.",
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<"b2c" | "b2b">("b2c");
  const scrollRef = useRef<HTMLDivElement>(null);
  const services = activeTab === "b2c" ? b2cServices : b2bServices;
  const audiences = activeTab === "b2c" ? b2cAudiences : b2bAudiences;

  const featured = services.find((s) => s.featured) || services[0];
  const rest = services.filter((s) => s.slug !== featured.slug);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth - 20 : cardWidth + 20,
      behavior: "smooth",
    });
  };

  const FeaturedIcon = lucideIconMap[featured.lucideIcon];

  return (
    <section id="services" className="bg-cream cream-pattern py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="lg:flex lg:items-end lg:justify-between lg:gap-8 mb-10 sm:mb-14">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-1 bg-gold-dark rounded-full" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
                  What We Offer
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-gray-900 heading-glow-cream">
                Our Services
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
                {tabDescriptions[activeTab]}
              </p>
            </div>

            {/* Tab toggle */}
            <div className="mt-6 lg:mt-0 flex lg:flex-col items-start gap-3">
              <div className="bg-cream-dark rounded-full p-1.5 inline-flex shadow-inner shadow-black/[0.06] border border-white/50">
                <button
                  onClick={() => setActiveTab("b2c")}
                  className={`rounded-full px-5 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeTab === "b2c"
                      ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/30"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  For You &amp; Family
                </button>
                <button
                  onClick={() => setActiveTab("b2b")}
                  className={`rounded-full px-5 sm:px-7 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                    activeTab === "b2b"
                      ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/30"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  For Your Business
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mobile/Tablet: Horizontal carousel */}
        <div className="lg:hidden">
          <div className="flex items-center justify-end gap-2 mb-4 pr-1">
            <button
              onClick={() => scrollCarousel("left")}
              className="h-9 w-9 rounded-full border border-gold/20 bg-white flex items-center justify-center text-gold-dark hover:bg-gold/5 transition-all shadow-sm hover:shadow-md"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="h-9 w-9 rounded-full border border-gold/20 bg-white flex items-center justify-center text-gold-dark hover:bg-gold/5 transition-all shadow-sm hover:shadow-md"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto snap-scroll-x pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {services.map((service) => {
              const IconComponent = lucideIconMap[service.lucideIcon];
              return (
                <div
                  key={service.slug}
                  className="snap-child shrink-0 w-[82vw] sm:w-[65vw] md:w-[45vw] glass-cream overflow-hidden"
                >
                  <div className="h-1.5 bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30" />
                  <div className="p-5 sm:p-6 flex flex-col h-full">
                    <div className="h-12 w-12 rounded-xl icon-box-cream flex items-center justify-center mb-4">
                      {IconComponent && <IconComponent className="h-6 w-6 text-gold-dark" strokeWidth={1.5} />}
                    </div>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-4 leading-relaxed">{service.description}</p>
                    <ul className="space-y-2 flex-1 mb-5">
                      {service.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_6px_rgba(201,168,76,0.4)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-dark hover:text-gold transition-colors self-start"
                    >
                      Learn More
                      <ArrowRight className="h-3 w-3" strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: Asymmetric — Featured left, rest right */}
        <div className="hidden lg:grid grid-cols-[1fr_1fr] gap-6 xl:gap-8">
          {/* Featured service — large card with gradient border */}
          <div className="row-span-3 gradient-border-card">
            <div className="glass-cream !rounded-[calc(1.25rem-1.5px)] flex flex-col h-full overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-gold via-gold-light to-gold" />
              <div className="p-8 xl:p-10 flex flex-col flex-1">
                <div className="h-16 w-16 xl:h-18 xl:w-18 rounded-2xl icon-gold flex items-center justify-center mb-6">
                  {FeaturedIcon && <FeaturedIcon className="h-8 w-8 xl:h-9 xl:w-9 text-black" strokeWidth={1.5} />}
                </div>

                <h3 className="text-2xl xl:text-3xl font-heading font-bold text-gray-900 heading-glow-cream mb-3">
                  {featured.title}
                </h3>
                <p className="text-sm xl:text-base text-gray-500 leading-relaxed mb-6">
                  {featured.description}
                </p>

                <ul className="space-y-3 flex-1 mb-8">
                  {featured.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-gold to-gold-dark shadow-[0_0_8px_rgba(201,168,76,0.4)]" />
                      {b}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${featured.slug}`}
                  className="btn-gold-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-black self-start"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>

          {/* Remaining services */}
          {rest.map((service) => {
            const IconComponent = lucideIconMap[service.lucideIcon];
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-5 glass-cream p-6 xl:p-7 transition-all duration-400"
              >
                <div className="h-12 w-12 rounded-xl icon-box-cream flex items-center justify-center shrink-0 group-hover:shadow-md transition-all duration-300">
                  {IconComponent && <IconComponent className="h-6 w-6 text-gold-dark" strokeWidth={1.5} />}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base xl:text-lg font-heading font-bold text-gray-900 group-hover:text-gold-dark transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-gold/40 group-hover:text-gold-dark shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            );
          })}
        </div>

        {/* Audience pills */}
        <ScrollReveal>
          <div className="mt-12 sm:mt-16 pt-6 border-t border-gold/15">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark/60 font-semibold mr-2">
                Serving:
              </span>
              {audiences.map((a) => (
                <span
                  key={a.label}
                  className="rounded-full bg-white/70 backdrop-blur-sm border border-white/60 px-4 py-2 text-xs sm:text-sm text-gray-600 font-medium shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-300"
                >
                  {a.label}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
