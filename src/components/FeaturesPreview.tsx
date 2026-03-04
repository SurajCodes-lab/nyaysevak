"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Users, CalendarCheck, BookOpen, Landmark, HelpCircle, MessageCircle,
  ArrowRight, ChevronLeft, ChevronRight,
} from "lucide-react";
import { platformFeatures } from "@/data/features";
import ScrollReveal from "./ScrollReveal";

const lucideIconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "lawyer-directory": Users,
  "service-booking": CalendarCheck,
  "legal-guides-resources": BookOpen,
  "court-tribunal-information": Landmark,
  "faq-sections": HelpCircle,
  "whatsapp-integration": MessageCircle,
};

export default function FeaturesPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth - 20 : cardWidth + 20,
      behavior: "smooth",
    });
  };

  return (
    <section id="features" className="bg-cream cream-pattern py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="lg:flex lg:items-end lg:justify-between lg:gap-8 mb-12 sm:mb-16">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-1 bg-gold-dark rounded-full" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
                  Platform Features
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-gray-900 heading-glow-cream">
                Built for Your Legal Needs
              </h2>
              <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed">
                A comprehensive platform designed to make India&apos;s legal system accessible to everyone
              </p>
            </div>
            <Link
              href="/features"
              className="mt-4 lg:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors shrink-0"
            >
              See All Features
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Mobile: Horizontal carousel */}
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
            className="flex gap-4 overflow-x-auto snap-scroll-x pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6"
          >
            {platformFeatures.map((feature) => {
              const IconComponent = lucideIconMap[feature.slug];
              return (
                <Link
                  key={feature.slug}
                  href={`/features/${feature.slug}`}
                  className="snap-child shrink-0 w-[78vw] sm:w-[60vw] md:w-[42vw] glass-cream overflow-hidden group"
                >
                  <div className="h-1.5 bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30" />
                  <div className="p-5 sm:p-6">
                    <div className="h-12 w-12 rounded-xl icon-box-cream flex items-center justify-center mb-4">
                      {IconComponent && <IconComponent className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />}
                    </div>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 group-hover:text-gold-dark transition-colors mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold-dark/50 group-hover:text-gold-dark transition-colors">
                      Learn More
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop: Bento grid */}
        <ScrollReveal stagger>
          <div className="hidden lg:grid grid-cols-3 grid-rows-[auto_auto] gap-5 xl:gap-6">
            {platformFeatures.map((feature, i) => {
              const IconComponent = lucideIconMap[feature.slug];
              const isHeroCard = i === 0;
              const isWideCard = i === platformFeatures.length - 1;

              return (
                <Link
                  key={feature.slug}
                  href={`/features/${feature.slug}`}
                  className={`group relative overflow-hidden glass-cream transition-all duration-400 flex flex-col ${
                    isHeroCard ? "row-span-2" : ""
                  } ${isWideCard ? "col-span-2" : ""}`}
                >
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className={`flex flex-col flex-1 ${
                    isHeroCard ? "p-8 xl:p-10" : isWideCard ? "p-7 xl:p-8" : "p-6 xl:p-7"
                  }`}>
                    <div className={`rounded-xl icon-box-cream flex items-center justify-center mb-5 transition-all duration-300 ${
                      isHeroCard ? "h-16 w-16" : "h-12 w-12"
                    }`}>
                      {IconComponent && (
                        <IconComponent className={`text-gold-dark ${isHeroCard ? "h-8 w-8" : "h-6 w-6"}`} strokeWidth={1.5} />
                      )}
                    </div>

                    <h3 className={`font-heading font-bold text-gray-900 group-hover:text-gold-dark transition-colors mb-2 ${
                      isHeroCard ? "text-xl xl:text-2xl" : "text-base xl:text-lg"
                    }`}>
                      {feature.title}
                    </h3>

                    <p className={`text-gray-500 leading-relaxed flex-1 ${
                      isHeroCard ? "text-sm xl:text-base" : "text-sm"
                    }`}>
                      {feature.description}
                    </p>

                    {/* Bullets only on hero & wide cards */}
                    {(isHeroCard || isWideCard) && (
                      <ul className="mt-4 space-y-2">
                        {feature.bullets.slice(0, isHeroCard ? 4 : 3).map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold shadow-[0_0_6px_rgba(201,168,76,0.4)]" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    <span className="mt-5 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold-dark/50 group-hover:text-gold-dark transition-colors">
                      Explore Feature
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
