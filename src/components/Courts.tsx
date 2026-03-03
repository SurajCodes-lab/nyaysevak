"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { highCourts, tribunalGroups, districtCourts } from "@/data/courts";
import ScrollReveal from "./ScrollReveal";

export default function Courts() {
  const [dcExpanded, setDcExpanded] = useState(false);
  const [dcFilter, setDcFilter] = useState<"all" | "state" | "ut">("all");
  const [expandedState, setExpandedState] = useState<string | null>(null);
  const [mobileTier, setMobileTier] = useState<"hc" | "tribunals">("hc");

  const filteredDC =
    dcFilter === "all"
      ? districtCourts
      : districtCourts.filter((d) => d.type === dcFilter);

  const totalDistricts = districtCourts.reduce(
    (sum, s) => sum + s.districts.length,
    0
  );

  const scrollToTier = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="courts"
      className="animated-mesh py-20 sm:py-28 lg:py-36 relative overflow-hidden"
    >
      {/* Glow orbs */}
      <div className="glow-pulse pointer-events-none absolute top-[30%] -right-[8%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_70%)]" />
      <div
        className="glow-pulse pointer-events-none absolute bottom-[20%] -left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_70%)]"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/40" />
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            Pan-India Presence
          </p>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/40" />
        </div>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white heading-glow">
          Court Coverage
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-300">
          Complete Coverage Across Every Court, Tribunal &amp; Arbitration Centre
        </p>

        {/* Anchor links */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs uppercase tracking-wider text-gray-500">
          <button onClick={() => scrollToTier("tier-supreme")} className="hover:text-gold transition-colors">Supreme Court</button>
          <span className="text-gold/30">&bull;</span>
          <button onClick={() => scrollToTier("tier-high")} className="hover:text-gold transition-colors">High Courts</button>
          <span className="text-gold/30">&bull;</span>
          <button onClick={() => scrollToTier("tier-tribunals")} className="hover:text-gold transition-colors">Tribunals</button>
          <span className="text-gold/30">&bull;</span>
          <button onClick={() => scrollToTier("tier-districts")} className="hover:text-gold transition-colors">Districts</button>
        </div>

        {/* ══════════════════════════════════════════════
           TOP TIER — Supreme Court (always visible)
           ══════════════════════════════════════════════ */}
        <ScrollReveal>
          <div id="tier-supreme" className="mt-12 sm:mt-16 scroll-mt-24">
            <div className="court-apex rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/courts-image.png"
                  alt=""
                  fill
                  className="object-cover opacity-[0.12]"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-dark-deep/80 via-dark-deep/60 to-dark-deep/80" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1 text-center md:text-left">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold mb-3">
                    Apex Court
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">
                    Supreme Court of India
                  </h3>
                  <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
                    Complete coverage of all Supreme Court matters with access to India&apos;s top advocates and senior counsels.
                  </p>

                  {/* Stats inline */}
                  <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-6 sm:gap-10 justify-center md:justify-start">
                    {[
                      { val: "34", label: "Judges" },
                      { val: "4+", label: "Case Types" },
                      { val: "#1", label: "Apex Court" },
                    ].map((s) => (
                      <div key={s.label} className="text-center md:text-left">
                        <span className="text-3xl sm:text-4xl font-heading font-bold stat-gradient">
                          {s.val}
                        </span>
                        <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mt-1">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto md:shrink-0 md:max-w-sm">
                  {[
                    "SLP, PIL, Writ Petitions",
                    "Access to SC Advocates & Sr. Counsels",
                    "Constitutional Matters",
                    "Landmark Cases & Appeals",
                  ].map((item) => (
                    <div
                      key={item}
                      className="glass-card p-3.5 sm:p-4 border-l-2 border-l-gold/40"
                    >
                      <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ══════════════════════════════════════════════
           MIDDLE TIER — High Courts & Tribunals
           ══════════════════════════════════════════════ */}
        <div id="tier-high" className="mt-12 sm:mt-16 scroll-mt-24">
          {/* Mobile: tabs for HC / Tribunals */}
          <div className="lg:hidden flex justify-center gap-2 mb-8">
            <button
              onClick={() => setMobileTier("hc")}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                mobileTier === "hc"
                  ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/25"
                  : "glass-card text-gray-400 hover:text-white"
              }`}
            >
              High Courts
            </button>
            <button
              onClick={() => setMobileTier("tribunals")}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                mobileTier === "tribunals"
                  ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/25"
                  : "glass-card text-gray-400 hover:text-white"
              }`}
            >
              Tribunals
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left — High Courts */}
            <ScrollReveal>
              <div className={`${mobileTier !== "hc" ? "hidden lg:block" : ""}`}>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-4 sm:mb-6 heading-glow">
                  25 High Courts
                </h3>
                <div className="flex flex-wrap gap-2">
                  {highCourts.map((court) => (
                    <Link
                      key={court.slug}
                      href={`/courts/${court.slug}`}
                      className="glass-card px-3 py-2 text-xs sm:text-sm text-gray-300 hover:text-gold hover:border-gold/30 transition-all duration-300"
                    >
                      {court.name.replace("High Court of ", "").replace(" High Court", "")}
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Tribunals */}
            <ScrollReveal>
              <div id="tier-tribunals" className={`scroll-mt-24 ${mobileTier !== "tribunals" ? "hidden lg:block" : ""}`}>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-4 sm:mb-6 heading-glow">
                  Tribunals &amp; Specialized Bodies
                </h3>
                <div className="space-y-4">
                  {tribunalGroups.map((group) => (
                    <div key={group.slug}>
                      <Link
                        href={`/courts/${group.slug}`}
                        className="text-sm font-semibold text-gold hover:text-gold-light transition-colors duration-200"
                      >
                        {group.title}
                      </Link>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs text-gray-400 bg-white/[0.03] rounded-lg px-2.5 py-1.5 border border-white/5"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
           BOTTOM TIER — District Courts (expandable)
           ══════════════════════════════════════════════ */}
        <div id="tier-districts" className="mt-12 sm:mt-16 scroll-mt-24">
          <div className="glass-card p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white heading-glow">
                  District Courts
                </h3>
                <p className="mt-1 text-sm text-gray-400">
                  <span className="text-2xl sm:text-3xl font-heading font-bold stat-gradient mr-2">
                    {totalDistricts}+
                  </span>
                  Courts across{" "}
                  <span className="text-white font-medium">
                    {districtCourts.length} States &amp; UTs
                  </span>
                </p>
              </div>

              <button
                onClick={() => setDcExpanded(!dcExpanded)}
                className={`btn-premium inline-flex items-center gap-2 border border-gold/40 rounded-xl px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300 ${
                  dcExpanded ? "bg-gold/10" : ""
                }`}
              >
                {dcExpanded ? "Collapse" : "Explore District Courts"}
                <svg
                  className={`h-4 w-4 transition-transform duration-300 ${dcExpanded ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Expanded content */}
            <div
              className="overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: dcExpanded ? "5000px" : "0px",
                opacity: dcExpanded ? 1 : 0,
              }}
            >
              <div className="mt-6 sm:mt-8 pt-6 border-t border-white/10">
                {/* Filter pills */}
                <div className="mb-6 sm:mb-8 flex justify-center gap-2">
                  {(
                    [
                      ["all", "All"],
                      ["state", "States"],
                      ["ut", "Union Territories"],
                    ] as const
                  ).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setDcFilter(key)}
                      className={`rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 ${
                        dcFilter === key
                          ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/25"
                          : "glass-card text-gray-400 hover:text-white hover:border-gold/20"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* State accordion */}
                <div className="space-y-2 sm:space-y-3">
                  {filteredDC.map((stateData) => {
                    const isOpen = expandedState === stateData.state;
                    return (
                      <div
                        key={stateData.state}
                        className="glass-card overflow-hidden"
                      >
                        <button
                          onClick={() =>
                            setExpandedState(isOpen ? null : stateData.state)
                          }
                          className="flex w-full items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 text-left transition-colors duration-200 hover:bg-gold/[0.03]"
                        >
                          <div className="flex items-center gap-3 sm:gap-4">
                            <span className="text-xs font-bold text-gold w-6 text-right shrink-0">
                              {stateData.districts.length}
                            </span>
                            <div>
                              <Link
                                href={`/courts/${stateData.slug}`}
                                className="text-sm font-medium text-white hover:text-gold transition-colors duration-200"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {stateData.state}
                              </Link>
                              <span className="ml-2 sm:ml-3 text-[10px] uppercase tracking-wider text-gray-500">
                                {stateData.type === "ut" ? "UT" : "State"}
                              </span>
                            </div>
                          </div>
                          <svg
                            className={`h-4 w-4 shrink-0 text-gold/50 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
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
                        <div
                          className="overflow-hidden transition-all duration-500 ease-in-out"
                          style={{
                            maxHeight: isOpen
                              ? `${stateData.districts.length * 28 + 32}px`
                              : "0px",
                            opacity: isOpen ? 1 : 0,
                          }}
                        >
                          <div className="px-4 sm:px-5 pb-4 pl-10 sm:pl-14 flex flex-wrap gap-2">
                            {stateData.districts.map((d) => (
                              <span
                                key={d}
                                className="rounded-lg bg-gold/5 border border-gold/10 px-2.5 sm:px-3 py-1.5 text-xs text-gray-300"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
