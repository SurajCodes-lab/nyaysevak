"use client";

import { useState } from "react";
import Link from "next/link";
import { b2cServices, b2bServices, b2cAudiences, b2bAudiences } from "@/data/services";
import type { ServiceItem } from "@/data/services";

export default function Services() {
  const [activeTab, setActiveTab] = useState<"b2c" | "b2b">("b2c");
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const services = activeTab === "b2c" ? b2cServices : b2bServices;
  const audiences = activeTab === "b2c" ? b2cAudiences : b2bAudiences;
  const active = services[activeIndex] || services[0];

  const switchTab = (tab: "b2c" | "b2b") => {
    setActiveTab(tab);
    setActiveIndex(0);
    setExpandedMobile(null);
  };

  const toggleMobile = (slug: string) => {
    setExpandedMobile(expandedMobile === slug ? null : slug);
  };

  return (
    <section id="services" className="bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        {/* Header */}
        <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 text-center">
          What We Offer
        </p>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-white">
          Our Services
        </h2>

        {/* Toggle tabs — pill style */}
        <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
          <div className="bg-dark-card rounded-full p-1.5 inline-flex">
            <button
              onClick={() => switchTab("b2c")}
              className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "b2c"
                  ? "bg-gold text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              For Individuals
            </button>
            <button
              onClick={() => switchTab("b2b")}
              className={`rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "b2b"
                  ? "bg-gold text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              For Businesses
            </button>
          </div>
        </div>

        {/* Split panel — desktop only */}
        <div className="mt-10 sm:mt-12 lg:mt-16 hidden lg:flex rounded-2xl overflow-hidden border border-white/5 bg-dark-card min-h-[420px]">
          {/* Left — nav list */}
          <div className="lg:w-[40%] border-r border-white/5">
            {services.map((service, i) => (
              <button
                key={service.slug}
                onClick={() => setActiveIndex(i)}
                className={`group flex w-full items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 text-left transition-all duration-300 border-l-2 ${
                  activeIndex === i
                    ? "border-gold bg-gold/5 text-white"
                    : "border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                    activeIndex === i
                      ? "bg-gold/15"
                      : "bg-white/5 group-hover:bg-gold/10"
                  }`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className={`h-4 w-4 transition-colors duration-300 ${
                      activeIndex === i ? "text-gold" : "text-gold/50 group-hover:text-gold/70"
                    }`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                  </svg>
                </span>
                <span className="text-sm font-medium">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Right — detail */}
          <div className="lg:w-[60%] flex flex-col justify-center px-6 sm:px-8 lg:px-10 py-8 sm:py-10">
            <div className="mb-4 flex items-center gap-4">
              <span className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5 sm:h-6 sm:w-6 text-gold"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={active.iconPath} />
                </svg>
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                {active.title}
              </h3>
            </div>

            <ul className="mt-4 space-y-3">
              {active.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-gray-400"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {b}
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${active.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-gold/30 px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10 transition-all duration-300 self-start"
            >
              Learn More
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Mobile accordion — cards replacing <details> */}
        <div className="mt-8 sm:mt-10 space-y-3 lg:hidden">
          {services.map((service) => {
            const isOpen = expandedMobile === service.slug;
            return (
              <div
                key={service.slug}
                className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-gold/20 bg-dark-card"
                    : "border-white/5 bg-dark-card hover:border-white/10"
                }`}
              >
                {/* Card header */}
                <button
                  onClick={() => toggleMobile(service.slug)}
                  className="flex items-center gap-3 w-full px-4 sm:px-5 py-4 cursor-pointer text-left transition-all duration-300"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      className="h-4 w-4 text-gold"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.iconPath} />
                    </svg>
                  </span>
                  <span className="flex-1 text-sm font-medium text-gray-300">
                    {service.title}
                  </span>
                  <svg
                    className={`h-4 w-4 shrink-0 text-gold/50 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Expanded content */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-white/5 pt-4">
                    <ul className="space-y-2.5">
                      {service.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm text-gray-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gold/30 px-5 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10 transition-all duration-300"
                    >
                      Learn More
                      <svg
                        className="h-3.5 w-3.5"
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

        {/* Audiences — badge pills */}
        <div className="mt-12 sm:mt-14 lg:mt-16">
          <p className="mb-4 sm:mb-6 text-center text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500">
            Who We Serve
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {audiences.map((a) => (
              <span
                key={a.label}
                className="bg-dark-card rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-300 border border-white/5"
              >
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
