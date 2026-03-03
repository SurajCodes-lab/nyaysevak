"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { b2cServices, b2bServices, b2cAudiences, b2bAudiences } from "@/data/services";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"b2c" | "b2b">("b2c");
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [dotIndex, setDotIndex] = useState(0);
  const services = activeTab === "b2c" ? b2cServices : b2bServices;
  const audiences = activeTab === "b2c" ? b2cAudiences : b2bAudiences;
  const active = services[activeIndex] || services[0];

  const switchTab = (tab: "b2c" | "b2b") => {
    setActiveTab(tab);
    setActiveIndex(0);
    setDotIndex(0);
  };

  /* Track mobile scroll position for dot indicators */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleScroll = () => {
      const idx = Math.round(el.scrollLeft / el.offsetWidth);
      setDotIndex(Math.min(idx, services.length - 1));
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [services.length]);

  return (
    <section id="services" className="bg-cream cream-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-8 w-1 bg-gold-dark rounded-full" />
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark font-semibold">
            What We Offer
          </p>
        </div>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-gray-900">
          Our Services
        </h2>

        {/* Toggle tabs — pill style */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
          <div className="bg-cream-dark rounded-full p-1.5 inline-flex">
            <button
              onClick={() => switchTab("b2c")}
              className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "b2c"
                  ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/20"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              For Individuals
            </button>
            <button
              onClick={() => switchTab("b2b")}
              className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "b2b"
                  ? "bg-gradient-to-r from-gold to-gold-light text-black shadow-lg shadow-gold/20"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              For Businesses
            </button>
          </div>
        </div>

        {/* ── Desktop: Featured Spotlight + Sidebar ── */}
        <div className="mt-10 sm:mt-12 lg:mt-16 hidden lg:flex gap-0 rounded-2xl overflow-hidden border border-gold/10 bg-white shadow-xl shadow-gold/[0.05] min-h-[480px]">
          {/* Left 55% — Active service spotlight */}
          <div className="w-[55%] p-8 xl:p-10 flex flex-col justify-center relative">
            <div className="service-spotlight" key={active.slug}>
              <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center shadow-lg shadow-gold/20 mb-6">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d={active.iconPath} />
                </svg>
              </div>

              <h3 className="text-3xl font-heading font-bold text-gray-900">
                {active.title}
              </h3>

              <ul className="mt-6 space-y-4">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base leading-relaxed text-gray-600">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {b}
                  </li>
                ))}
              </ul>

              <Link
                href={`/services/${active.slug}`}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 btn-gold-shine self-start"
              >
                Learn More
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right 45% — Vertical service list */}
          <div className="w-[45%] border-l border-gray-100 bg-cream/30">
            {services.map((service, i) => (
              <button
                key={service.slug}
                onClick={() => setActiveIndex(i)}
                className={`group flex w-full items-center gap-4 px-6 py-5 text-left transition-all duration-300 border-l-[3px] ${
                  activeIndex === i
                    ? "border-l-gold bg-gold/5 text-gray-900"
                    : "border-l-transparent text-gray-500 hover:text-gray-900 hover:bg-cream-dark/50"
                }`}
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                    activeIndex === i
                      ? "bg-gold/15"
                      : "bg-cream-dark group-hover:bg-gold/10"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className={`h-5 w-5 transition-colors duration-300 ${
                      activeIndex === i ? "text-gold" : "text-gold/50 group-hover:text-gold/70"
                    }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                  </svg>
                </span>
                <span className={`text-sm font-medium ${activeIndex === i ? "font-bold" : ""}`}>
                  {service.title}
                </span>
                {activeIndex === i && (
                  <svg className="ml-auto h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* ── Mobile: Horizontal snap-scroll cards ── */}
        <div className="mt-8 sm:mt-10 lg:hidden">
          <div ref={scrollRef} className="snap-scroll-x flex gap-4 overflow-x-auto pb-4 -mx-4 px-4">
            {services.map((service) => (
              <div
                key={service.slug}
                className="snap-child shrink-0 w-[85vw] sm:w-[75vw] max-w-[400px]"
              >
                <div className="cream-card p-5 sm:p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 text-gold">
                        <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                      </svg>
                    </span>
                    <h3 className="text-base font-heading font-bold text-gray-900">{service.title}</h3>
                  </div>

                  <ul className="space-y-2.5 flex-1">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gold-dark/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-gold-dark hover:bg-gold/10 transition-all duration-300 self-start"
                  >
                    Learn More
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {services.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIndex === i ? "w-6 bg-gold" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Audiences — inline text band ── */}
        <div className="mt-12 sm:mt-14 lg:mt-16 py-5 border-t border-b border-gold/10">
          <p className="text-center text-sm sm:text-base text-gray-500">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold-dark/60 font-semibold mr-3">
              Serving:
            </span>
            {audiences.map((a, i) => (
              <span key={a.label}>
                <span className="text-gray-700 font-medium">{a.label}</span>
                {i < audiences.length - 1 && (
                  <span className="mx-2 text-gold/40">&bull;</span>
                )}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
