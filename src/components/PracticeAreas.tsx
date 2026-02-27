"use client";

import { useState } from "react";
import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";

const letters = practiceAreas.map((a) => a.letter);

export default function PracticeAreas() {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const filtered = activeLetter
    ? practiceAreas.filter((a) => a.letter === activeLetter)
    : practiceAreas;

  return (
    <section id="practice-areas" className="bg-cream py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/70 text-center">
          A-Z Legal Coverage
        </p>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-gray-900">
          Practice Areas
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-500">
          Complete A-Z Legal Services Across Every Domain
        </p>

        <div className="mt-10 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
          {/* Left: Letter navigation */}
          <div className="lg:w-[200px] shrink-0">
            {/* Mobile: Horizontal scrollable row */}
            <div className="scrollbar-hide flex gap-1.5 pb-2 -mx-1 lg:mx-0 lg:pb-0 lg:flex-col lg:sticky lg:top-28 overflow-x-auto lg:overflow-x-visible">
              <button
                onClick={() => setActiveLetter(null)}
                className={`h-9 w-9 sm:h-10 sm:w-10 lg:h-auto lg:w-full rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center shrink-0 transition-all duration-300 ${
                  !activeLetter
                    ? "bg-gold text-black"
                    : "bg-cream-dark text-gray-500 hover:bg-gold/10 hover:text-gold-dark"
                }`}
              >
                All
              </button>
              {letters.map((letter) => (
                <button
                  key={letter}
                  onClick={() =>
                    setActiveLetter(activeLetter === letter ? null : letter)
                  }
                  className={`h-9 w-9 sm:h-10 sm:w-10 lg:h-auto lg:w-full rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center shrink-0 transition-all duration-300 ${
                    activeLetter === letter
                      ? "bg-gold text-black"
                      : "bg-cream-dark text-gray-500 hover:bg-gold/10 hover:text-gold-dark"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Practice area cards */}
          <div className="flex-1 min-w-0">
            <div className="space-y-3 sm:space-y-4">
              {filtered.map((area) => {
                const isExpanded = expandedSlug === area.slug;
                return (
                  <div
                    key={area.slug}
                    className={`group rounded-xl bg-white border overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? "shadow-md border-gold/20"
                        : "shadow-sm border-gray-100 hover:shadow-md hover:border-gold/20"
                    }`}
                  >
                    {/* Header button */}
                    <button
                      onClick={() =>
                        setExpandedSlug(isExpanded ? null : area.slug)
                      }
                      className="flex items-center gap-3 sm:gap-4 w-full px-4 sm:px-5 py-4 sm:py-5 text-left transition-all duration-300"
                    >
                      {/* Letter badge */}
                      <span className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gold/10 flex items-center justify-center text-base sm:text-lg font-heading font-bold text-gold-dark shrink-0">
                        {area.letter}
                      </span>

                      {/* Title */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
                          {area.title}
                        </h3>
                      </div>

                      {/* Service count pill */}
                      <span className="text-[10px] sm:text-xs bg-cream-dark rounded-full px-2.5 py-1 text-gray-500 font-medium shrink-0">
                        {area.services.length} services
                      </span>

                      {/* Chevron */}
                      <svg
                        className={`h-4 w-4 sm:h-5 sm:w-5 shrink-0 text-gold transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Expanded content */}
                    <div
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{
                        maxHeight: isExpanded ? "600px" : "0px",
                        opacity: isExpanded ? 1 : 0,
                      }}
                    >
                      <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-gray-100 pt-4">
                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                          {area.description}
                        </p>

                        {/* Services as chips */}
                        <div className="flex flex-wrap gap-2">
                          {area.services.map((service) => (
                            <span
                              key={service}
                              className="bg-cream rounded-lg px-3 py-2 text-xs sm:text-sm text-gray-700"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        {/* View Details link */}
                        <Link
                          href={`/practice-areas/${area.slug}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 rounded-lg bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold-dark hover:bg-gold/20 transition-all duration-300 mt-3 sm:mt-4"
                        >
                          View Details
                          <svg
                            className="h-3 w-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
