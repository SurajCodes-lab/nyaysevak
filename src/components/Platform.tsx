"use client";

import Link from "next/link";
import { b2cAudiences, b2bAudiences } from "@/data/services";

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Browse our verified lawyer directory with Bar Council-registered professionals. Search by specialization, court, or location. Compare fees, ratings, and success metrics.",
    details: ["Search by practice area, court & location", "Verified Bar Council registration", "Client ratings & success metrics", "Transparent fee comparison"],
  },
  {
    number: "02",
    title: "Consult",
    description: "Book instant or scheduled consultations via video, audio, or chat. Get transparent pricing upfront with zero hidden fees. Secure, encrypted communication channels.",
    details: ["Video, audio & chat consultations", "Instant or scheduled booking", "Transparent pricing upfront", "Secure encrypted channels"],
  },
  {
    number: "03",
    title: "Resolve",
    description: "From document drafting to full court representation, get end-to-end legal support. Track your case progress in real-time until your matter is fully resolved.",
    details: ["Document drafting & review", "Court representation pan-India", "Real-time case tracking", "End-to-end resolution support"],
  },
];

const b2cServiceCards = [
  { title: "Lawyer Consultation", desc: "Connect with verified, experienced lawyers for instant or scheduled consultations via video, audio, or chat with transparent pricing." },
  { title: "Find & Hire Lawyers", desc: "Search lawyers by specialization, location, and court. View verified profiles with Bar Council registration, ratings, and fee comparison." },
  { title: "Document Services", desc: "Ready-to-use legal templates, custom drafting by qualified professionals, thorough document review, and secure digital storage." },
  { title: "Legal Aid", desc: "Free legal aid for eligible citizens. Pro bono lawyer network access. Support for women, SC/ST, and economically weaker sections." },
  { title: "Legal Knowledge", desc: "Comprehensive case law database, expert-written articles and guides, full acts and statutes repository, and know-your-rights resources." },
  { title: "E-filing Assistance", desc: "Court e-filing support and document preparation. Navigate e-filing portals with technical assistance. Track filing status and updates." },
];

const b2bServiceCards = [
  { title: "Corporate Legal Advisory", desc: "Dedicated legal teams for enterprises with strategic planning, risk assessment, board meeting support, and industry-specific regulatory guidance." },
  { title: "Compliance Management", desc: "Automated compliance calendars and alerts for GST, MCA, Income Tax, labor law, and industry-specific compliance with real-time dashboards." },
  { title: "Contract Management", desc: "End-to-end contract lifecycle management — drafting, review, centralized repository, automated renewal reminders, and clause risk analysis." },
  { title: "IP Management", desc: "Complete trademark, patent, and copyright registration. IP filings, prosecution, renewals, infringement monitoring, and portfolio strategy." },
  { title: "Litigation Management", desc: "Centralized case tracking dashboards, multi-jurisdiction case management, litigation expense tracking, budgeting, and outcome analytics." },
  { title: "M&A Support", desc: "Comprehensive legal due diligence, transaction document preparation, regulatory approvals and filings, and post-merger integration support." },
];

const platformStats = [
  { value: "25+", label: "High Courts" },
  { value: "700+", label: "District Courts" },
  { value: "20+", label: "Tribunals" },
  { value: "14", label: "Practice Areas" },
  { value: "50+", label: "Legal Services" },
  { value: "36", label: "States & UTs" },
];

export default function Platform() {
  return (
    <section className="overflow-hidden">
      {/* Hero — Dark */}
      <div className="bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold/70">
              India&apos;s First Complete Legal Ecosystem
            </p>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-white lg:text-6xl">
              One Platform. Every Legal Need.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400">
              NyaySevak bridges the gap between legal service providers and consumers across India. We combine a
              comprehensive <strong className="text-gray-200">B2C marketplace for individuals</strong> with a powerful
              <strong className="text-gray-200"> B2B platform for businesses</strong> — all in one unified ecosystem.
            </p>
          </div>
        </div>
      </div>

      {/* Stats — single row with gold dividers */}
      <div className="bg-cream py-14">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {platformStats.map((stat, i) => (
              <span key={stat.label} className="flex items-center gap-3">
                <span className="text-3xl font-heading font-bold text-gray-900">{stat.value}</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">{stat.label}</span>
                {i < platformStats.length - 1 && (
                  <span className="hidden sm:block ml-7 h-8 w-px bg-gold/30" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works — horizontal timeline */}
      <div className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-dark/70 text-center">
            Simple Process
          </p>
          <h2 className="text-center text-3xl font-heading font-bold tracking-tight text-gray-900 lg:text-4xl">
            How NyaySevak Works
          </h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Number on gold line */}
                <div className="mb-6 flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-gold text-sm font-bold text-black">
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block h-px flex-1 bg-gold/30" />
                  )}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">{step.description}</p>
                <ul className="mt-4 space-y-2">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* B2C Section — Dark — alternating left/right */}
      <div className="bg-dark py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold/70">
              B2C — For Individuals
            </p>
            <h2 className="text-3xl font-heading font-bold text-white lg:text-4xl">
              Empowering Every Citizen
            </h2>
          </div>

          {/* Audiences as text */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {b2cAudiences.map((a, i) => (
              <span key={a.label} className="text-sm text-gray-500">
                <span className="text-gray-300">{a.label}</span>
                {i < b2cAudiences.length - 1 && <span className="ml-2 text-gold/40">&#9679;</span>}
              </span>
            ))}
          </div>

          <div className="mt-14 space-y-0 divide-y divide-white/5">
            {b2cServiceCards.map((card, i) => (
              <div key={card.title} className={`flex flex-col gap-4 py-8 lg:flex-row lg:items-center lg:gap-16 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <h3 className="text-xl font-heading font-bold text-white lg:w-1/3">{card.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed lg:w-2/3">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* B2B Section — Cream — alternating left/right */}
      <div className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-dark/70">
              B2B — For Businesses
            </p>
            <h2 className="text-3xl font-heading font-bold text-gray-900 lg:text-4xl">
              Enterprise Legal Operations
            </h2>
          </div>

          {/* Audiences */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
            {b2bAudiences.map((a, i) => (
              <span key={a.label} className="text-sm text-gray-500">
                <span className="text-gray-700">{a.label}</span>
                {i < b2bAudiences.length - 1 && <span className="ml-2 text-gold/40">&#9679;</span>}
              </span>
            ))}
          </div>

          <div className="mt-14 space-y-0 divide-y divide-gray-200">
            {b2bServiceCards.map((card, i) => (
              <div key={card.title} className={`flex flex-col gap-4 py-8 lg:flex-row lg:items-center lg:gap-16 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <h3 className="text-xl font-heading font-bold text-gray-900 lg:w-1/3">{card.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed lg:w-2/3">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose — Dark */}
      <div className="bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-heading font-bold text-white lg:text-4xl">
            Why Choose NyaySevak?
          </h2>
          <div className="mt-16 grid gap-y-8 gap-x-16 lg:grid-cols-2">
            {[
              { title: "Pan-India Coverage", desc: "Supreme Court to District Courts. All 25 High Courts, 700+ District Courts, 20+ Tribunals across every state and union territory." },
              { title: "Verified Professionals", desc: "Every lawyer verified with Bar Council registration. Transparent profiles with ratings, reviews, and success metrics." },
              { title: "Transparent Pricing", desc: "No hidden fees. Compare lawyer fees upfront before booking. Pay only for what you need." },
              { title: "Dual B2B + B2C Model", desc: "Serving individual citizens and enterprises alike. One platform for personal legal needs and corporate legal operations." },
              { title: "A-Z Legal Services", desc: "From simple notary and affidavits to high-stakes Supreme Court litigation and international arbitration." },
              { title: "Secure & Compliant", desc: "SSL encryption, IT Act 2000 compliance, secure form submissions, and privacy policy adherence." },
            ].map((item) => (
              <div key={item.title} className="border-l border-gold/20 pl-6">
                <h4 className="text-base font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA — Cream */}
      <div className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-heading font-bold text-gray-900 lg:text-4xl">
              Ready to Get Started?
            </h3>
            <p className="mx-auto mt-4 mb-10 max-w-lg text-gray-500">
              Join thousands of individuals and businesses already using NyaySevak for their legal needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
              >
                Get Legal Help
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 border border-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold-dark transition-all duration-300 hover:bg-gold/10"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
