"use client";

import { useState } from "react";
import Link from "next/link";
import { highCourts, tribunalGroups, districtCourts } from "@/data/courts";

const tabs = ["Supreme Court", "High Courts", "District Courts", "Tribunals", "Arbitration"];

export default function Courts() {
  const [activeTab, setActiveTab] = useState(0);
  const [dcFilter, setDcFilter] = useState<"all" | "state" | "ut">("all");
  const [expandedState, setExpandedState] = useState<string | null>(null);

  const filteredDC = dcFilter === "all"
    ? districtCourts
    : districtCourts.filter((d) => d.type === dcFilter);

  const totalDistricts = districtCourts.reduce((sum, s) => sum + s.districts.length, 0);

  return (
    <section id="courts" className="bg-dark py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 text-center">
          Pan-India Presence
        </p>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white">
          Court Coverage
        </h2>
        <p className="mx-auto mt-3 sm:mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-400">
          Complete Coverage Across Every Court, Tribunal &amp; Arbitration Centre
        </p>

        {/* Tabs */}
        <div className="mt-8 sm:mt-10 lg:mt-12 overflow-x-auto scrollbar-hide pb-2">
          <div className="flex gap-2 justify-start sm:justify-center min-w-max sm:min-w-0">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 ${
                  activeTab === i
                    ? "bg-gold text-black shadow-lg shadow-gold/20"
                    : "bg-dark-card text-gray-500 border border-white/5 hover:text-white hover:border-white/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          {/* Supreme Court */}
          {activeTab === 0 && (
            <div className="mx-auto max-w-3xl">
              <div className="bg-dark-card rounded-2xl p-6 sm:p-8 border border-white/5">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-white">
                    Supreme Court of India
                  </h3>
                  <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 leading-relaxed">
                    Complete coverage of all Supreme Court matters with access to India&apos;s top advocates and senior counsels.
                  </p>
                </div>
                <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-2">
                  {["Complete SC matter coverage", "Access to SC advocates & Sr. Counsels", "SLP, PIL, Writ Petition, Appeals", "Constitutional matters & landmark cases"].map((item) => (
                    <div key={item} className="bg-white/[0.03] rounded-xl p-4 border border-white/5 border-l-2 border-l-gold/40">
                      <span className="text-xs sm:text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* High Courts */}
          {activeTab === 1 && (
            <div>
              <p className="mb-6 sm:mb-8 lg:mb-10 text-center text-xs sm:text-sm text-gray-500">All 25 High Courts across India</p>
              {/* Desktop table */}
              <div className="hidden md:block rounded-2xl overflow-hidden border border-white/5">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-dark-card">
                      <th className="px-5 lg:px-6 py-4 text-[10px] sm:text-xs uppercase tracking-wider text-gold/70 font-semibold">Court</th>
                      <th className="px-5 lg:px-6 py-4 text-[10px] sm:text-xs uppercase tracking-wider text-gold/70 font-semibold">Jurisdiction</th>
                      <th className="px-5 lg:px-6 py-4 text-[10px] sm:text-xs uppercase tracking-wider text-gold/70 font-semibold">Benches</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {highCourts.map((court) => (
                      <tr key={court.slug} className="hover:bg-white/[0.02] transition-colors duration-200 group">
                        <td className="px-5 lg:px-6 py-4 text-sm font-medium">
                          <Link href={`/courts/${court.slug}`} className="text-white group-hover:text-gold transition-colors duration-200">
                            {court.name}
                          </Link>
                        </td>
                        <td className="px-5 lg:px-6 py-4 text-sm text-gray-400">{court.jurisdiction}</td>
                        <td className="px-5 lg:px-6 py-4 text-sm text-gray-500">{court.benches.join(", ") || "\u2014"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Mobile cards */}
              <div className="md:hidden space-y-2 sm:space-y-3">
                {highCourts.map((court) => (
                  <Link
                    key={court.slug}
                    href={`/courts/${court.slug}`}
                    className="block rounded-xl bg-dark-card border border-white/5 p-4 sm:p-5 hover:border-gold/30 transition-all duration-300"
                  >
                    <h4 className="text-sm font-semibold text-gold">{court.name}</h4>
                    <p className="mt-1.5 text-xs text-gray-400">{court.jurisdiction}</p>
                    {court.benches.length > 0 && (
                      <p className="mt-1.5 text-xs text-gray-500">Benches: {court.benches.join(", ")}</p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* District Courts */}
          {activeTab === 2 && (
            <div>
              {/* Stats */}
              <div className="mb-8 sm:mb-10 lg:mb-12 grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-2xl mx-auto">
                <div className="bg-dark-card rounded-2xl p-4 sm:p-6 border border-white/5 text-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">{districtCourts.length}</span>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-wider text-gray-500">States &amp; UTs</p>
                </div>
                <div className="bg-dark-card rounded-2xl p-4 sm:p-6 border border-white/5 text-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">{totalDistricts}+</span>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-wider text-gray-500">District Courts</p>
                </div>
                <div className="bg-dark-card rounded-2xl p-4 sm:p-6 border border-white/5 text-center">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">100%</span>
                  <p className="mt-1 sm:mt-2 text-[10px] sm:text-xs uppercase tracking-wider text-gray-500">Pan-India</p>
                </div>
              </div>

              {/* Filter */}
              <div className="mb-6 sm:mb-8 flex justify-center gap-2">
                {([["all", "All"], ["state", "States"], ["ut", "Union Territories"]] as const).map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setDcFilter(key)}
                    className={`rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider whitespace-nowrap shrink-0 transition-all duration-300 ${
                      dcFilter === key
                        ? "bg-gold text-black shadow-lg shadow-gold/20"
                        : "bg-dark-card text-gray-500 border border-white/5 hover:text-white hover:border-white/20"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Accordion rows */}
              <div className="space-y-2 sm:space-y-3">
                {filteredDC.map((stateData) => {
                  const isOpen = expandedState === stateData.state;
                  return (
                    <div key={stateData.state} className="rounded-xl bg-dark-card border border-white/5 overflow-hidden">
                      <button
                        onClick={() => setExpandedState(isOpen ? null : stateData.state)}
                        className="flex w-full items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 text-left transition-colors duration-200 hover:bg-white/[0.02]"
                      >
                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="text-xs font-bold text-gold/60 w-6 text-right shrink-0">{stateData.districts.length}</span>
                          <div>
                            <Link
                              href={`/courts/${stateData.slug}`}
                              className="text-sm font-medium text-white hover:text-gold transition-colors duration-200"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {stateData.state}
                            </Link>
                            <span className="ml-2 sm:ml-3 text-[10px] uppercase tracking-wider text-gray-600">
                              {stateData.type === "ut" ? "UT" : "State"}
                            </span>
                          </div>
                        </div>
                        <svg
                          className={`h-4 w-4 shrink-0 text-gold/50 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div
                        className="overflow-hidden transition-all duration-500 ease-in-out"
                        style={{ maxHeight: isOpen ? `${stateData.districts.length * 28 + 32}px` : "0px", opacity: isOpen ? 1 : 0 }}
                      >
                        <div className="px-4 sm:px-5 pb-4 pl-10 sm:pl-14 flex flex-wrap gap-2">
                          {stateData.districts.map((d) => (
                            <span key={d} className="rounded-lg bg-white/[0.03] border border-white/5 px-2.5 sm:px-3 py-1.5 text-xs text-gray-500">
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
          )}

          {/* Tribunals */}
          {activeTab === 3 && (
            <div className="space-y-4">
              {tribunalGroups.map((group) => (
                <div key={group.slug} className="rounded-2xl bg-dark-card border border-white/5 p-5 sm:p-6 lg:p-8">
                  <Link
                    href={`/courts/${group.slug}`}
                    className="text-base sm:text-lg font-heading font-bold text-gold hover:text-gold-light transition-colors duration-200"
                  >
                    {group.title}
                  </Link>
                  <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Arbitration */}
          {activeTab === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                { title: "Domestic Arbitration", items: ["MCIA (Mumbai)", "DIAC (Delhi)", "ICA (Indian Council)", "ICADR", "IIAM", "NANI", "State Arbitration Centers"] },
                { title: "International Arbitration", items: ["ICC (International Chamber of Commerce)", "LCIA (London)", "SIAC (Singapore)", "HKIAC (Hong Kong)"] },
                { title: "ADR Services", items: ["Ad-hoc Arbitration under Act, 1996", "Commercial Mediation", "Family Mediation", "Court-annexed Mediation", "Conciliation proceedings", "Lok Adalat services"] },
              ].map((group) => (
                <div key={group.title} className="rounded-2xl bg-dark-card border border-white/5 p-5 sm:p-6 lg:p-8">
                  <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-4">{group.title}</h4>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold/50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
