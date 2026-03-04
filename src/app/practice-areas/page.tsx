import type { Metadata } from "next";
import PracticeAreas from "@/components/PracticeAreas";
import Link from "next/link";
import { BookOpen, MapPin, ShieldCheck, ArrowRight, ChevronRight, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Areas - A-Z Legal Services | NyaySevak",
  description:
    "Complete A-Z legal services across every domain of Indian law. Civil law, criminal law, CBI, ED, NDPS defense, family law, corporate law, IP, tax, consumer protection, arbitration, documentation & more. 29 practice areas with pan-India coverage.",
  keywords:
    "practice areas, civil law India, criminal lawyer, family lawyer, corporate lawyer, IP lawyer, tax lawyer, consumer protection, arbitration, legal documentation, Indian law, NyaySevak",
  openGraph: {
    title: "A-Z Legal Practice Areas | NyaySevak",
    description:
      "29 practice areas covering every domain of Indian law. Find verified lawyers for CBI, ED, NDPS, civil, criminal, family, corporate, IP, tax, and more.",
    type: "website",
  },
};

const stats = [
  {
    value: "29",
    label: "Practice Areas",
    Icon: BookOpen,
  },
  {
    value: "Pan-India",
    label: "Coverage",
    Icon: MapPin,
  },
  {
    value: "Verified",
    label: "Lawyers",
    Icon: ShieldCheck,
  },
];

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden bg-dark pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="glow-pulse absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
          <div className="glow-pulse absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_60%)]" style={{ animationDelay: "3s" }} />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        {/* Decorative gold lines */}
        <div className="absolute top-[40%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 sm:mb-10" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
              <li>
                <Link href="/" className="transition-colors duration-200 hover:text-gold">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3.5 w-3.5 text-gray-600" strokeWidth={2} />
              </li>
              <li className="text-gold font-medium">Practice Areas</li>
            </ol>
          </nav>

          {/* Heading content */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/40" />
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
                Comprehensive Legal Coverage
              </p>
            </div>
            <h1 className="text-3xl font-heading font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl heading-glow">
              A&ndash;Z Legal{" "}
              <span className="gradient-text-gold">Practice Areas</span>
            </h1>
            <p className="mt-4 text-base text-gray-400 sm:mt-6 sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
              NyaySevak covers every domain of Indian law &mdash; from civil
              litigation and criminal defense to corporate advisory, intellectual
              property, and beyond. Find the right legal expertise for your needs.
            </p>
          </div>

          {/* Stat bar */}
          <div className="mt-10 sm:mt-14 grid grid-cols-3 gap-3 sm:gap-5 max-w-2xl">
            {stats.map((stat) => {
              const StatIcon = stat.Icon;
              return (
                <div
                  key={stat.label}
                  className="gradient-border-card"
                >
                  <div className="rounded-[calc(1rem-1px)] bg-dark-card p-4 sm:p-5 text-center">
                    <div className="mb-3 flex justify-center">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-gold/15 to-gold/5 border border-gold/10 flex items-center justify-center">
                        <StatIcon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="text-xl font-heading font-bold text-white sm:text-2xl lg:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom gold line */}
        <div className="absolute bottom-0 left-0 right-0 section-separator" />
      </section>

      {/* ── Practice Areas Listing — Full detailed grid ── */}
      <PracticeAreas showFullListing />

      {/* ── Separator ── */}
      <div className="section-separator" />

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden bg-dark py-24 lg:py-32">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="glow-pulse absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          {/* Icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-gold-dark shadow-xl shadow-gold/25">
            <Search className="h-8 w-8 text-black" strokeWidth={1.5} />
          </div>

          <h2 className="mb-4 text-3xl font-heading font-bold text-white heading-glow sm:text-4xl lg:text-5xl">
            Don&apos;t See Your{" "}
            <span className="text-gold">Legal Need</span> Listed?
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-gray-400 sm:text-lg leading-relaxed">
            We cover every area of Indian law. Tell us about your situation and
            we&apos;ll connect you with the right verified expert &mdash; no
            matter how niche your legal requirement.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="btn-gold-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-9 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300"
            >
              Get Legal Help
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
            <Link
              href="/services"
              className="btn-premium inline-flex items-center gap-2 rounded-xl border border-gold/30 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
