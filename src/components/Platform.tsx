"use client";

import Link from "next/link";
import {
  ArrowRight, Users, Search, FileText, HeartHandshake, BookOpen, Upload,
  Building2, ClipboardCheck, PenTool, Lightbulb, BarChart3, ArrowLeftRight,
  CircleCheck, Shield, Landmark, Scale, Globe, Briefcase, ChevronRight,
} from "lucide-react";
import { b2cAudiences, b2bAudiences } from "@/data/services";

const steps = [
  {
    number: "01",
    Icon: Search,
    title: "Connect",
    description: "Browse our verified lawyer directory with Bar Council-registered professionals. Search by specialization, court, or location. Compare fees, ratings, and success metrics.",
    details: ["Search by practice area, court & location", "Verified Bar Council registration", "Client ratings & success metrics", "Transparent fee comparison"],
  },
  {
    number: "02",
    Icon: Users,
    title: "Consult",
    description: "Book instant or scheduled consultations via video, audio, or chat. Get transparent pricing upfront with zero hidden fees. Secure, encrypted communication channels.",
    details: ["Video, audio & chat consultations", "Instant or scheduled booking", "Transparent pricing upfront", "Secure encrypted channels"],
  },
  {
    number: "03",
    Icon: Scale,
    title: "Resolve",
    description: "From document drafting to full court representation, get end-to-end legal support. Track your case progress in real-time until your matter is fully resolved.",
    details: ["Document drafting & review", "Court representation pan-India", "Real-time case tracking", "End-to-end resolution support"],
  },
];

const b2cServiceCards = [
  { Icon: Users, title: "Lawyer Consultation", desc: "Connect with verified, experienced lawyers for instant or scheduled consultations via video, audio, or chat with transparent pricing." },
  { Icon: Search, title: "Find & Hire Lawyers", desc: "Search lawyers by specialization, location, and court. View verified profiles with Bar Council registration, ratings, and fee comparison." },
  { Icon: FileText, title: "Document Services", desc: "Ready-to-use legal templates, custom drafting by qualified professionals, thorough document review, and secure digital storage." },
  { Icon: HeartHandshake, title: "Legal Aid", desc: "Free legal aid for eligible citizens. Pro bono lawyer network access. Support for women, SC/ST, and economically weaker sections." },
  { Icon: BookOpen, title: "Legal Knowledge", desc: "Comprehensive case law database, expert-written articles and guides, full acts and statutes repository, and know-your-rights resources." },
  { Icon: Upload, title: "E-filing Assistance", desc: "Court e-filing support and document preparation. Navigate e-filing portals with technical assistance. Track filing status and updates." },
];

const b2bServiceCards = [
  { Icon: Building2, title: "Corporate Legal Advisory", desc: "Dedicated legal teams for enterprises with strategic planning, risk assessment, board meeting support, and industry-specific regulatory guidance." },
  { Icon: ClipboardCheck, title: "Compliance Management", desc: "Automated compliance calendars and alerts for GST, MCA, Income Tax, labor law, and industry-specific compliance with real-time dashboards." },
  { Icon: PenTool, title: "Contract Management", desc: "End-to-end contract lifecycle management — drafting, review, centralized repository, automated renewal reminders, and clause risk analysis." },
  { Icon: Lightbulb, title: "IP Management", desc: "Complete trademark, patent, and copyright registration. IP filings, prosecution, renewals, infringement monitoring, and portfolio strategy." },
  { Icon: BarChart3, title: "Litigation Management", desc: "Centralized case tracking dashboards, multi-jurisdiction case management, litigation expense tracking, budgeting, and outcome analytics." },
  { Icon: ArrowLeftRight, title: "M&A Support", desc: "Comprehensive legal due diligence, transaction document preparation, regulatory approvals and filings, and post-merger integration support." },
];

const platformStats = [
  { value: "25+", label: "High Courts", Icon: Landmark },
  { value: "700+", label: "District Courts", Icon: Building2 },
  { value: "20+", label: "Tribunals", Icon: Scale },
  { value: "26", label: "Practice Areas", Icon: Briefcase },
  { value: "50+", label: "Legal Services", Icon: FileText },
  { value: "36", label: "States & UTs", Icon: Globe },
];

const whyChooseItems = [
  { title: "Pan-India Coverage", desc: "Supreme Court to District Courts. All 25 High Courts, 700+ District Courts, 20+ Tribunals across every state and union territory." },
  { title: "Verified Professionals", desc: "Every lawyer verified with Bar Council registration. Transparent profiles with ratings, reviews, and success metrics." },
  { title: "Transparent Pricing", desc: "No hidden fees. Compare lawyer fees upfront before booking. Pay only for what you need." },
  { title: "Dual B2B + B2C Model", desc: "Serving individual citizens and enterprises alike. One platform for personal legal needs and corporate legal operations." },
  { title: "A-Z Legal Services", desc: "From simple notary and affidavits to high-stakes Supreme Court litigation and international arbitration." },
  { title: "Secure & Compliant", desc: "SSL encryption, IT Act 2000 compliance, secure form submissions, and privacy policy adherence." },
];

export default function Platform() {
  return (
    <section className="overflow-hidden">
      {/* Hero — Dark Premium */}
      <div className="relative bg-dark-deep overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">India&apos;s First Complete Legal Ecosystem</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-white heading-glow lg:text-6xl">
              One Platform. Every Legal Need.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-gray-400">
              NyaySevak bridges the gap between legal service providers and consumers across India. We combine a
              comprehensive <strong className="text-gray-200">B2C marketplace for individuals</strong> with a powerful
              <strong className="text-gray-200"> B2B platform for businesses</strong> — all in one unified ecosystem.
            </p>
          </div>
        </div>
        <div className="section-separator" />
      </div>

      {/* Stats — glass cards */}
      <div className="bg-cream py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {platformStats.map((stat) => (
              <div key={stat.label} className="glass-cream p-5 text-center">
                <div className="icon-box-cream h-10 w-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.Icon className="h-4 w-4 text-gold-dark" strokeWidth={1.5} />
                </div>
                <span className="block text-2xl font-heading font-bold text-gray-900">{stat.value}</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works — glass cream cards */}
      <div className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold-dark/70 font-semibold">Simple Process</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
          </div>
          <h2 className="text-center text-3xl font-heading font-bold tracking-tight text-gray-900 heading-glow-cream lg:text-4xl">
            How NyaySevak Works
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.number} className="glass-cream p-7 sm:p-8 relative">
                {/* Watermark number */}
                <span className="absolute top-4 right-5 text-5xl font-heading font-bold text-gold/[0.07] select-none">
                  {step.number}
                </span>

                <div className="flex items-center gap-4 mb-5">
                  <div className="icon-box-cream h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <step.Icon className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900">{step.title}</h3>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-5">{step.description}</p>

                <ul className="space-y-2.5">
                  {step.details.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <CircleCheck className="h-4 w-4 text-gold-dark/60 shrink-0" strokeWidth={1.5} />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Connector arrow between cards */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <ChevronRight className="h-5 w-5 text-gold/40" strokeWidth={2} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* B2C Section — Dark with glass cards */}
      <div className="relative bg-dark-deep py-20 lg:py-28 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">For Individuals & Families</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-white heading-glow lg:text-4xl">
              Empowering Every Citizen
            </h2>

            {/* Audiences as pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {b2cAudiences.map((a) => (
                <span key={a.label} className="glass-card !rounded-full !px-4 !py-2 text-xs text-gray-300 font-medium">
                  {a.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {b2cServiceCards.map((card) => (
              <div key={card.title} className="glass-card !rounded-xl p-5 sm:p-6 hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-box-dark h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                    <card.Icon className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-white">{card.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* B2B Section — Cream with glass cards */}
      <div className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/30" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold-dark/70 font-semibold">For Businesses & Enterprises</p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/30" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-gray-900 heading-glow-cream lg:text-4xl">
              Enterprise Legal Operations
            </h2>

            {/* Audiences */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {b2bAudiences.map((a) => (
                <span key={a.label} className="rounded-full bg-gold/[0.08] border border-gold/15 px-4 py-2 text-xs text-gray-700 font-medium">
                  {a.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {b2bServiceCards.map((card) => (
              <div key={card.title} className="glass-cream p-5 sm:p-6 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-box-cream h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                    <card.Icon className="h-4 w-4 text-gold-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{card.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose — Dark Premium */}
      <div className="relative bg-dark py-20 lg:py-28 overflow-hidden">
        <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Why NyaySevak</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <h2 className="text-center text-3xl font-heading font-bold text-white heading-glow lg:text-4xl mb-12">
            Why Choose NyaySevak?
          </h2>

          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-6 sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                {whyChooseItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CircleCheck className="h-5 w-5 text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA — Cream */}
      <div className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="glass-cream p-8 sm:p-12">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 heading-glow-cream lg:text-4xl">
              Ready to Get Started?
            </h3>
            <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-500 leading-relaxed">
              Join thousands of individuals and businesses already using NyaySevak for their legal needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300"
              >
                Get Legal Help
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center gap-2 rounded-xl border border-gold/40 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold-dark transition-all duration-300 hover:bg-gold/10 hover:border-gold"
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
