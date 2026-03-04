"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart, Home, Briefcase, ShieldAlert, UserCheck, Sparkles,
  ArrowRight, ChevronRight, CircleCheck,
} from "lucide-react";
import { practiceAreaCategories } from "@/data/practice-area-categories";
import { practiceAreas } from "@/data/practice-areas";
import ScrollReveal from "./ScrollReveal";

const lucideIconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Heart, Home, Briefcase, ShieldAlert, UserCheck, Sparkles,
};

const totalCount = practiceAreas.length;
const totalServices = practiceAreas.reduce((sum, a) => sum + a.services.length, 0);

interface PracticeAreasProps {
  showFullListing?: boolean;
}

export default function PracticeAreas({ showFullListing = false }: PracticeAreasProps) {
  const [activeCategory, setActiveCategory] = useState(practiceAreaCategories[0].id);

  const activeCat = practiceAreaCategories.find((c) => c.id === activeCategory)!;
  const activeAreas = practiceAreas.filter((a) => activeCat.slugs.includes(a.slug));

  /* ────────────────────────────────────────────
     FULL LISTING MODE — /practice-areas page
     ──────────────────────────────────────────── */
  if (showFullListing) {
    return (
      <section className="bg-cream cream-pattern py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Quick stats bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-14 sm:mb-16">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl sm:text-4xl font-heading font-bold stat-gradient">{totalCount}</span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">Practice Areas</span>
            </div>
            <div className="h-6 w-px bg-gold/15" />
            <div className="flex items-center gap-2.5">
              <span className="text-3xl sm:text-4xl font-heading font-bold stat-gradient">{totalServices}+</span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">Legal Services</span>
            </div>
            <div className="h-6 w-px bg-gold/15" />
            <div className="flex items-center gap-2.5">
              <span className="text-3xl sm:text-4xl font-heading font-bold stat-gradient">6</span>
              <span className="text-xs sm:text-sm text-gray-500 font-medium">Categories</span>
            </div>
          </div>

          {/* Category-grouped sections */}
          {practiceAreaCategories.map((category) => {
            const CatIcon = lucideIconMap[category.lucideIcon];
            const childAreas = practiceAreas.filter((a) =>
              category.slugs.includes(a.slug)
            );
            const catServiceCount = childAreas.reduce((sum, a) => sum + a.services.length, 0);

            return (
              <div key={category.id} className="mb-14 sm:mb-16 last:mb-0">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shrink-0 shadow-lg shadow-gold/20">
                    {CatIcon && <CatIcon className="h-6 w-6 sm:h-7 sm:w-7 text-black" strokeWidth={1.5} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-gray-900">
                      {category.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-0.5">{category.description}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-3">
                    <span className="rounded-full bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/10 px-4 py-1.5 text-xs font-bold text-gold-dark">
                      {childAreas.length} areas
                    </span>
                    <span className="rounded-full bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/10 px-4 py-1.5 text-xs font-bold text-gold-dark">
                      {catServiceCount} services
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                  {childAreas.map((area) => (
                    <div
                      key={area.slug}
                      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-lg shadow-black/[0.02] hover:border-gold/15 hover:shadow-xl hover:shadow-gold/[0.06] transition-all duration-500"
                    >
                      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold/20 to-transparent group-hover:via-gold/50 transition-all duration-500" />
                      <span className="absolute top-4 right-5 text-[100px] font-heading font-bold text-gold/[0.03] leading-none select-none pointer-events-none">
                        {area.letter}
                      </span>
                      <div className="p-6 sm:p-8 relative">
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3.5">
                            <span className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-heading font-bold text-black text-lg shrink-0 shadow-lg shadow-gold/20">
                              {area.letter}
                            </span>
                            <div>
                              <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 group-hover:text-gold-dark transition-colors duration-300">
                                {area.title}
                              </h3>
                              <p className="text-xs text-gray-400 font-medium mt-0.5">
                                {area.services.length} specialized services
                              </p>
                            </div>
                          </div>
                          <Link
                            href={`/practice-areas/${area.slug}`}
                            className="shrink-0 h-9 w-9 rounded-full bg-gold/5 group-hover:bg-gold/15 flex items-center justify-center transition-all duration-300"
                          >
                            <ArrowRight className="h-4 w-4 text-gold/40 group-hover:text-gold-dark transition-all duration-300" strokeWidth={2} />
                          </Link>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-5">{area.description}</p>
                        <div className="space-y-2">
                          {area.services.map((service) => (
                            <div key={service} className="flex items-start gap-2.5">
                              <div className="mt-1 h-4 w-4 rounded-full bg-gradient-to-br from-gold/15 to-gold/5 flex items-center justify-center shrink-0">
                                <CircleCheck className="h-2.5 w-2.5 text-gold-dark" strokeWidth={2.5} />
                              </div>
                              <span className="text-sm text-gray-600 leading-relaxed">{service}</span>
                            </div>
                          ))}
                        </div>
                        <Link
                          href={`/practice-areas/${area.slug}`}
                          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gold-dark/15 px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold-dark hover:bg-gold/10 hover:border-gold/25 transition-all duration-300"
                        >
                          View Details
                          <ChevronRight className="h-3 w-3" strokeWidth={2.5} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-14 sm:mt-16 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  /* ────────────────────────────────────────────
     HOMEPAGE MODE — Tabs + Practice area list
     ──────────────────────────────────────────── */
  return (
    <section id="practice-areas" className="bg-cream cream-pattern py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — left-aligned with big number */}
        <ScrollReveal>
          <div className="lg:flex lg:items-end lg:justify-between lg:gap-8 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-8 w-1 bg-gold-dark rounded-full" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
                  Areas of Expertise
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-gray-900">
                <span className="stat-gradient">{totalCount}</span> Practice Areas
              </h2>
              <p className="mt-2 max-w-lg text-sm sm:text-base text-gray-500">
                Comprehensive legal services across every domain of Indian law
              </p>
            </div>
            <Link
              href="/practice-areas"
              className="mt-4 lg:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
            >
              View All Details
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </div>
        </ScrollReveal>

        {/* Category tabs — horizontal scroll on mobile */}
        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0 scrollbar-hide mb-8 sm:mb-10">
          {practiceAreaCategories.map((cat) => {
            const CatIcon = lucideIconMap[cat.lucideIcon];
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 flex items-center gap-2 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 border ${
                  isActive
                    ? "bg-gradient-to-r from-gold to-gold-light text-black border-gold/20 shadow-lg shadow-gold/20"
                    : "bg-white text-gray-600 border-gray-200 hover:border-gold/20 hover:text-gold-dark"
                }`}
              >
                {CatIcon && <CatIcon className={`h-4 w-4 ${isActive ? "text-black" : "text-gold-dark/50"}`} strokeWidth={1.5} />}
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Active category description */}
        <p className="text-sm text-gray-500 mb-8 max-w-xl">
          {activeCat.description}
        </p>

        {/* Practice areas in active category — simple list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {activeAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group flex items-center gap-4 glass-cream rounded-xl p-4 sm:p-5 transition-all duration-300"
            >
              <span className="h-11 w-11 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center text-sm font-heading font-bold text-black shrink-0 shadow-md shadow-gold/20 group-hover:shadow-lg group-hover:shadow-gold/30 transition-all duration-300">
                {area.letter}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-gold-dark transition-colors truncate">
                  {area.title}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{area.services.length} services</p>
              </div>
              <ChevronRight className="h-4 w-4 text-gold/30 group-hover:text-gold-dark shrink-0 transition-all duration-300 group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/practice-areas"
              className="btn-gold-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 sm:px-10 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-black"
            >
              Explore All {totalCount} Practice Areas
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
