"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";
import ScrollReveal from "./ScrollReveal";

const letters = practiceAreas.map((a) => a.letter);
const totalCount = practiceAreas.length;

export default function PracticeAreas() {
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const selectedArea = activeLetter
    ? practiceAreas.find((a) => a.letter === activeLetter) ?? null
    : null;

  const currentIdx = activeLetter
    ? practiceAreas.findIndex((a) => a.letter === activeLetter)
    : -1;

  const goToDetail = useCallback((letter: string) => {
    setActiveLetter(letter);
  }, []);

  const goBack = useCallback(() => {
    setActiveLetter(null);
  }, []);

  const goPrev = useCallback(() => {
    const prevIdx = (currentIdx - 1 + totalCount) % totalCount;
    setActiveLetter(practiceAreas[prevIdx].letter);
  }, [currentIdx]);

  const goNext = useCallback(() => {
    const nextIdx = (currentIdx + 1) % totalCount;
    setActiveLetter(practiceAreas[nextIdx].letter);
  }, [currentIdx]);

  return (
    <section
      id="practice-areas"
      className="bg-cream cream-pattern py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Asymmetric Header ── */}
        <ScrollReveal>
          <div className="flex flex-col items-center lg:flex-row lg:items-end lg:justify-center gap-4 lg:gap-8 mb-4">
            {/* Giant number */}
            <span className="text-7xl lg:text-8xl font-heading font-bold stat-gradient leading-none">
              {totalCount}
            </span>
            {/* Heading + subtitle */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div className="h-8 w-1 bg-gold-dark rounded-full" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
                  A-Z Legal Coverage
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-gray-900">
                Practice Areas
              </h2>
              <p className="mt-2 max-w-2xl text-sm sm:text-base text-gray-500">
                Complete A-Z Legal Services Across Every Domain
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Letter Filter Ribbon ── */}
        <ScrollReveal>
          {/* Mobile: horizontal scroll */}
          <div className="relative mt-8 sm:mt-10 lg:hidden">
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-cream to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-cream to-transparent z-10" />
            <div className="scrollbar-hide flex gap-1.5 pb-2 overflow-x-auto px-6">
              <button
                onClick={goBack}
                className={`h-9 w-9 sm:h-10 sm:w-10 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center shrink-0 transition-all duration-300 ${
                  !activeLetter
                    ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/20"
                    : "bg-cream-dark text-gray-500 hover:bg-gold/10 hover:text-gold-dark"
                }`}
              >
                All
              </button>
              {letters.map((letter) => (
                <button
                  key={letter}
                  onClick={() => goToDetail(letter)}
                  className={`h-9 w-9 sm:h-10 sm:w-10 rounded-lg text-xs sm:text-sm font-semibold flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 ${
                    activeLetter === letter
                      ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/20"
                      : "bg-cream-dark text-gray-500 hover:bg-gold/10 hover:text-gold-dark"
                  }`}
                >
                  {letter}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: centered flex-wrap */}
          <div className="hidden lg:flex flex-wrap justify-center gap-1.5 mt-10">
            <button
              onClick={goBack}
              className={`h-10 w-10 rounded-lg text-sm font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                !activeLetter
                  ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/20"
                  : "bg-cream-dark text-gray-500 hover:bg-gold/10 hover:text-gold-dark"
              }`}
            >
              All
            </button>
            {letters.map((letter) => (
              <button
                key={letter}
                onClick={() => goToDetail(letter)}
                className={`h-10 w-10 rounded-lg text-sm font-semibold flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                  activeLetter === letter
                    ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/20"
                    : "bg-cream-dark text-gray-500 hover:bg-gold/10 hover:text-gold-dark"
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* ── Content Area ── */}
        <div className="mt-10 sm:mt-12 lg:mt-14 relative">
          {/* Browse Mode (grid) */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              selectedArea
                ? "opacity-0 pointer-events-none absolute inset-0"
                : "opacity-100"
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {practiceAreas.map((area, idx) => {
                const isFeatured = idx < 2;
                return (
                  <button
                    key={area.slug}
                    onClick={() => goToDetail(area.letter)}
                    className={`group cream-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/5 ${
                      isFeatured
                        ? "lg:col-span-2 p-6 sm:p-8 border-l-[3px] border-l-gold"
                        : "p-4 sm:p-5"
                    }`}
                  >
                    {/* Letter badge + title row */}
                    <div className="flex items-center gap-3 mb-2">
                      <span className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-gold/10 flex items-center justify-center text-base sm:text-lg font-heading font-bold text-gold-dark shrink-0">
                        {area.letter}
                      </span>
                      <h3
                        className={`font-semibold text-gray-900 ${
                          isFeatured
                            ? "text-base sm:text-lg"
                            : "text-sm sm:text-base truncate"
                        }`}
                      >
                        {area.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p
                      className={`text-gray-500 mb-3 ${
                        isFeatured
                          ? "text-sm sm:text-base"
                          : "text-xs sm:text-sm line-clamp-1"
                      }`}
                    >
                      {area.description}
                    </p>

                    {/* Featured: service preview chips */}
                    {isFeatured && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {area.services.slice(0, 3).map((s) => (
                          <span
                            key={s}
                            className="bg-cream rounded-lg px-2.5 py-1 text-xs text-gray-600"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Bottom row: service count + arrow */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] sm:text-xs bg-cream-dark rounded-full px-2.5 py-1 text-gray-500 font-medium">
                        {area.services.length} services
                      </span>
                      <svg
                        className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-1 group-hover:translate-x-0"
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
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail Mode */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              selectedArea
                ? "opacity-100"
                : "opacity-0 pointer-events-none absolute inset-0"
            }`}
          >
            {selectedArea && (
              <div className="cream-card overflow-hidden p-6 sm:p-8 lg:p-10">
                {/* Mobile layout: stacked */}
                <div className="lg:hidden">
                  {/* Back button */}
                  <button
                    onClick={goBack}
                    className="inline-flex items-center gap-2 text-sm text-gold-dark font-semibold hover:text-gold transition-colors mb-6"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                    All Areas
                  </button>

                  {/* Giant letter */}
                  <div className="watermark-letter text-center !text-[120px] sm:!text-[160px] mb-2 leading-none">
                    {selectedArea.letter}
                  </div>

                  {/* Title + description */}
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                    {selectedArea.title}
                  </h3>
                  <p className="text-base text-gray-600 mb-6">
                    {selectedArea.description}
                  </p>

                  {/* Services list: 1 column */}
                  <div className="space-y-2.5 mb-6">
                    {selectedArea.services.map((service) => (
                      <div key={service} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                        <span className="text-sm text-gray-700">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <Link
                    href={`/practice-areas/${selectedArea.slug}`}
                    className="btn-gold-shine block w-full text-center rounded-lg bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-gold/20 transition-all duration-300 hover:shadow-xl hover:shadow-gold/30"
                  >
                    View Full Details →
                  </Link>

                  {/* Prev / Next row */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={goPrev}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gold-dark transition-colors"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      {practiceAreas[(currentIdx - 1 + totalCount) % totalCount].letter}
                    </button>
                    <span className="text-xs text-gray-400">
                      {currentIdx + 1} / {totalCount}
                    </span>
                    <button
                      onClick={goNext}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gold-dark transition-colors"
                    >
                      {practiceAreas[(currentIdx + 1) % totalCount].letter}
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Desktop layout: 2-column asymmetric */}
                <div className="hidden lg:flex gap-10">
                  {/* Left column (30%) */}
                  <div className="w-[30%] shrink-0 flex flex-col">
                    {/* Back button */}
                    <button
                      onClick={goBack}
                      className="inline-flex items-center gap-2 text-sm text-gold-dark font-semibold hover:text-gold transition-colors mb-8 self-start"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      All Areas
                    </button>

                    {/* Giant decorative letter */}
                    <div className="flex-1 flex items-center justify-center">
                      <div className="watermark-letter !text-[200px] xl:!text-[260px] leading-none">
                        {selectedArea.letter}
                      </div>
                    </div>

                    {/* Prev / Next arrows */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                      <button
                        onClick={goPrev}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gold-dark transition-colors"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                        {practiceAreas[(currentIdx - 1 + totalCount) % totalCount].title}
                      </button>
                      <button
                        onClick={goNext}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gold-dark transition-colors"
                      >
                        {practiceAreas[(currentIdx + 1) % totalCount].title}
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Right column (70%) */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-gray-900 mb-3">
                      {selectedArea.title}
                    </h3>
                    <p className="text-base text-gray-600 mb-8">
                      {selectedArea.description}
                    </p>

                    {/* Services grid: 2 columns */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {selectedArea.services.map((service) => (
                        <div
                          key={service}
                          className="flex items-start gap-2.5"
                        >
                          <span className="mt-1.5 h-2 w-2 rounded-full bg-gold shrink-0" />
                          <span className="text-sm text-gray-700">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA button */}
                    <Link
                      href={`/practice-areas/${selectedArea.slug}`}
                      className="btn-gold-shine inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-gold/20 transition-all duration-300 hover:shadow-xl hover:shadow-gold/30"
                    >
                      View Full Details
                      <svg
                        className="h-4 w-4"
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
            )}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <ScrollReveal>
          <div className="mt-12 sm:mt-14 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gold-dark hover:text-gold transition-colors"
            >
              Explore All Practice Areas
              <svg
                className="h-4 w-4"
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
        </ScrollReveal>
      </div>
    </section>
  );
}
