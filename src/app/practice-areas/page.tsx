import type { Metadata } from "next";
import PracticeAreas from "@/components/PracticeAreas";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import { BookOpen, MapPin, ShieldCheck, ArrowRight, ChevronRight, Search } from "lucide-react";
import { practiceAreas as practiceAreasData } from "@/data/practice-areas";

export const metadata: Metadata = {
  title: "29 Practice Areas - Best Lawyers for Every Legal Need in India | NyaySevak",
  description:
    "Find the best lawyers in India across 29 practice areas. Criminal lawyer, divorce lawyer, property lawyer, corporate lawyer, cyber crime lawyer, bail lawyer, CBI/ED/NDPS defense, consumer protection, IP, tax & more. Verified advocates with free first consultation.",
  keywords:
    "best lawyer India, criminal lawyer near me, divorce lawyer India, property lawyer, corporate lawyer, cyber crime lawyer, bail lawyer, CBI lawyer, ED lawyer, NDPS lawyer, consumer court lawyer, IP lawyer, tax lawyer India, family lawyer, advocate near me, legal services India, NyaySevak",
  alternates: { canonical: "https://nyaysevak.com/practice-areas" },
  openGraph: {
    title: "29 Practice Areas - Find Best Lawyers in India | NyaySevak",
    description:
      "Find verified lawyers across 29 practice areas. Criminal, civil, family, corporate, IP, tax, cyber crime, CBI, ED, NDPS & more. Free first consultation.",
    type: "website",
    url: "https://nyaysevak.com/practice-areas",
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nyaysevak.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Practice Areas",
      item: "https://nyaysevak.com/practice-areas",
    },
  ],
};

const practiceAreaItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "29 Practice Areas - Best Lawyers for Every Legal Need in India",
  description: "Complete A-Z legal services across every domain of Indian law with verified lawyers.",
  url: "https://nyaysevak.com/practice-areas",
  isPartOf: { "@id": "https://nyaysevak.com/#website" },
  provider: { "@id": "https://nyaysevak.com/#organization" },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: practiceAreasData.length,
    itemListElement: practiceAreasData.map((area, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: area.title,
      description: area.description,
      url: `https://nyaysevak.com/practice-areas/${area.slug}`,
    })),
  },
};

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceAreaItemListJsonLd) }}
      />
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

      {/* ── Week 5: Keyword-rich intro prose (500+ words) above component ── */}
      <section className="bg-cream cream-pattern py-14 sm:py-16 border-y border-gold/[0.1]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 rounded-full bg-gold" />
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark font-semibold">
              Understanding Legal Practice Areas in India
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              Indian law is organised into distinct practice areas — each governed by its own substantive statutes, procedural rules, and specialist courts. When you need legal help, choosing the right practice area isn&apos;t just about labelling your problem correctly — it determines which court you file in, how long the process takes, what your fees will look like, and which lawyers are qualified to advise you. NyaySevak covers all 29 major practice areas of Indian law, with Bar Council verified advocates who specialise in each one.
            </p>
            <p>
              <strong className="text-gray-900">Criminal law</strong> (now governed by the Bharatiya Nyaya Sanhita, 2023 and the Bharatiya Nagarik Suraksha Sanhita, 2023) covers everything from bail applications and FIR quashing to white-collar defence, cyber crime, and specialist proceedings under PMLA, NDPS, and the Prevention of Corruption Act. <strong className="text-gray-900">Civil law</strong> handles property disputes, contract recovery, partition, specific performance, and commercial claims — most cases begin at the District Court and can be appealed up through the High Courts to the Supreme Court. <strong className="text-gray-900">Family &amp; matrimonial law</strong> under the Hindu Marriage Act, Special Marriage Act, Indian Divorce Act, and Muslim personal law handles divorces, custody, maintenance, and domestic-violence matters at dedicated Family Courts.
            </p>
            <p>
              <strong className="text-gray-900">Corporate &amp; business law</strong> covers company incorporation, shareholder agreements, commercial contracts, M&amp;A, regulatory filings (MCA, RBI, SEBI), NCLT litigation, and IBC insolvency proceedings — largely handled at NCLT benches and High Court commercial divisions. <strong className="text-gray-900">Property &amp; real estate law</strong> includes title verification, sale and lease deed drafting, RERA filings, partition, and specific performance — some of the highest-value litigation in India. Specialised practice areas — <Link href="/practice-areas/intellectual-property" className="text-gold-dark hover:text-gold transition-colors font-semibold">IP law</Link>, <Link href="/practice-areas/cyber-law" className="text-gold-dark hover:text-gold transition-colors font-semibold">cyber law</Link>, <Link href="/practice-areas/tax-law" className="text-gold-dark hover:text-gold transition-colors font-semibold">tax law</Link>, <Link href="/practice-areas/consumer-protection" className="text-gold-dark hover:text-gold transition-colors font-semibold">consumer protection</Link>, <Link href="/practice-areas/labour-employment" className="text-gold-dark hover:text-gold transition-colors font-semibold">labour &amp; employment</Link>, <Link href="/practice-areas/arbitration-adr" className="text-gold-dark hover:text-gold transition-colors font-semibold">arbitration &amp; ADR</Link> — each require domain-specific expertise and often go to their own tribunals (IPAB equivalents, consumer commissions, labour courts, arbitral tribunals).
            </p>
            <p>
              For matters involving central investigation agencies — <Link href="/practice-areas/cbi-cases" className="text-gold-dark hover:text-gold transition-colors font-semibold">CBI cases</Link>, <Link href="/practice-areas/ed-cases" className="text-gold-dark hover:text-gold transition-colors font-semibold">ED / PMLA proceedings</Link>, <Link href="/practice-areas/ndps-cases" className="text-gold-dark hover:text-gold transition-colors font-semibold">NDPS defence</Link> — specialist criminal counsel with experience before designated Special Courts is essential. For constitutional matters and Public Interest Litigation, writ-court practitioners at the High Courts and Supreme Court are the right choice. The practice-area grid below gives you a quick way to identify your need and connect immediately with a verified lawyer who handles exactly that kind of matter — with transparent fees, free first consultation, and direct filing capability across all Indian courts.
            </p>
          </div>
        </div>
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
            <ContactButton
              className="btn-gold-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-9 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 cursor-pointer"
            >
              Get Legal Help
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </ContactButton>
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
