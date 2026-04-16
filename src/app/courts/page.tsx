import type { Metadata } from "next";
import Courts from "@/components/Courts";
import ContactButton from "@/components/ContactButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { highCourts, tribunalGroups, districtCourts } from "@/data/courts";

export const metadata: Metadata = {
  title: "Find Lawyers for Any Court in India - Supreme Court, High Courts, District Courts | NyaySevak",
  description:
    "Find verified lawyers for Supreme Court, all 25 High Courts, 700+ District Courts, NCLT, NGT, RERA, NCDRC & 20+ Tribunals across India. Book court representation with expert advocates. Free first consultation.",
  keywords:
    "Supreme Court advocate, Supreme Court lawyer India, High Court lawyer, District Court lawyer near me, NCLT lawyer, NGT lawyer, RERA lawyer, tribunal lawyer India, court lawyer near me, find advocate for court, legal representation India, bail lawyer court, NyaySevak",
  alternates: { canonical: "https://nyaysevak.com/courts" },
  openGraph: {
    title: "Find Lawyers for Any Court in India | NyaySevak",
    description: "Verified lawyers for Supreme Court, 25 High Courts, 700+ District Courts & all Tribunals. Free first consultation.",
    url: "https://nyaysevak.com/courts",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com" },
    { "@type": "ListItem", position: 2, name: "Courts", item: "https://nyaysevak.com/courts" },
  ],
};

const courtItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Court Coverage - Find Lawyers for Any Court in India",
  description: "Pan-India court coverage with verified lawyers for Supreme Court, High Courts, District Courts, and Tribunals.",
  url: "https://nyaysevak.com/courts",
  isPartOf: { "@id": "https://nyaysevak.com/#website" },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: highCourts.length + tribunalGroups.length + districtCourts.length,
    itemListElement: [
      ...highCourts.map((court, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: court.name,
        description: `Lawyers for ${court.name} - Jurisdiction: ${court.jurisdiction}`,
        url: `https://nyaysevak.com/courts/${court.slug}`,
      })),
      ...tribunalGroups.map((tribunal, i) => ({
        "@type": "ListItem",
        position: highCourts.length + i + 1,
        name: `${tribunal.title} Tribunals`,
        description: `Lawyers for ${tribunal.title} Tribunals - ${tribunal.items.join(", ")}`,
        url: `https://nyaysevak.com/courts/${tribunal.slug}`,
      })),
    ],
  },
};

export default function CourtsPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courtItemListJsonLd) }}
      />

      {/* Week 5: 500-word intro prose on India's court hierarchy */}
      <section className="bg-cream cream-pattern py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 rounded-full bg-gold" />
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark font-semibold">
              India&apos;s Court Hierarchy — A Quick Guide
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              India&apos;s judiciary is the world&apos;s largest legal system by caseload, organised into a strict three-tier hierarchy with specialised tribunals on the side. Knowing which court will hear your matter — and finding a lawyer who regularly practises there — is the single most important decision when you start legal proceedings.
            </p>
            <p>
              <strong className="text-gray-900">The Supreme Court of India</strong>, located in New Delhi, is India&apos;s apex court. It hears constitutional matters, Special Leave Petitions (SLPs) from High Court orders, transfer petitions, and cases of national importance. The Chief Justice of India leads 34 judges who sit in various benches. Representation at the Supreme Court typically requires an Advocate-on-Record (AOR) who can be briefed alongside a senior counsel for arguments.
            </p>
            <p>
              <strong className="text-gray-900">High Courts</strong> are the top courts at the state level. India has <Link href="/courts" className="text-gold-dark hover:text-gold transition-colors font-semibold">25 High Courts</Link>, some serving single states (e.g., <Link href="/courts/delhi-high-court" className="text-gold-dark hover:text-gold transition-colors font-semibold">Delhi HC</Link>, <Link href="/courts/karnataka-high-court" className="text-gold-dark hover:text-gold transition-colors font-semibold">Karnataka HC</Link>) and some multiple states or UTs (e.g., <Link href="/courts/bombay-high-court" className="text-gold-dark hover:text-gold transition-colors font-semibold">Bombay HC</Link> covering Maharashtra + Goa + Dadra & Nagar Haveli; <Link href="/courts/punjab-haryana-high-court" className="text-gold-dark hover:text-gold transition-colors font-semibold">Punjab &amp; Haryana HC</Link> covering Punjab + Haryana + Chandigarh). High Courts hear writ petitions under Articles 226 and 227, civil and criminal appeals, and in some cases — <Link href="/courts/bombay-high-court" className="text-gold-dark hover:text-gold transition-colors font-semibold">Bombay</Link>, <Link href="/courts/madras-high-court" className="text-gold-dark hover:text-gold transition-colors font-semibold">Madras</Link>, <Link href="/courts/calcutta-high-court" className="text-gold-dark hover:text-gold transition-colors font-semibold">Calcutta</Link>, and <Link href="/courts/delhi-high-court" className="text-gold-dark hover:text-gold transition-colors font-semibold">Delhi</Link> — they also have original civil jurisdiction for high-value suits.
            </p>
            <p>
              <strong className="text-gray-900">District &amp; Sessions Courts</strong> are where most criminal and civil matters originate. India has over 700 District Courts, each with a District Judge hearing civil matters above the Junior Civil Judge&apos;s jurisdiction, and a Sessions Judge hearing Sessions-triable criminal offences. Below them, Senior and Junior Civil Judges, Magistrate Courts (Chief Judicial / Chief Metropolitan Magistrate, Judicial Magistrates), and Small Causes Courts handle lower-value or lesser offences. Local jurisdiction is decided by where the cause of action arose (for civil) or where the FIR was registered (for criminal).
            </p>
            <p>
              <strong className="text-gray-900">Specialised tribunals</strong> handle domain-specific disputes under their own statutes: NCLT and NCLAT for company and insolvency matters, ITAT for income tax, CESTAT for central excise and customs, NGT for environmental, RERA for real estate, DRT and DRAT for bank recovery, Consumer Commissions (District, State, NCDRC) for consumer disputes, Armed Forces Tribunal for service matters, and many more. Tribunals typically follow their own procedural rules, are faster than regular courts, and benefit from specialised domain-expert members alongside judicial members. NyaySevak&apos;s <Link href="/lawyers" className="text-gold-dark hover:text-gold transition-colors font-semibold">verified lawyers</Link> have direct filing experience at every level of this system — from local Magistrate Courts to the Supreme Court and every major tribunal.
            </p>
          </div>
        </div>
      </section>

      <Courts />

      <div className="section-separator" />

      <section className="relative bg-dark-deep py-20 lg:py-28 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow">
                Need Representation in Any Court?
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-400 leading-relaxed">
                We have verified lawyers across every court and tribunal in India.
              </p>
              <ContactButton
                className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 cursor-pointer"
              >
                Find a Lawyer
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </ContactButton>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to Practice Areas & Services */}
      <section className="bg-dark py-16 lg:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-3">
            Browse by Legal Need
          </p>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-8">
            Popular Practice Areas Across Courts
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {[
              { label: "Criminal Defense", slug: "criminal-law" },
              { label: "Bail Applications", slug: "criminal-law" },
              { label: "Writ Petitions", slug: "constitutional-law" },
              { label: "Divorce & Family", slug: "family-matrimonial" },
              { label: "Property Disputes", slug: "property-real-estate" },
              { label: "Corporate Matters", slug: "corporate-business" },
              { label: "Tax Appeals", slug: "tax-law" },
              { label: "Consumer Complaints", slug: "consumer-protection" },
              { label: "CBI Defense", slug: "cbi-cases" },
              { label: "ED Defense", slug: "ed-cases" },
              { label: "NDPS Defense", slug: "ndps-cases" },
              { label: "Arbitration", slug: "arbitration-adr" },
            ].map((area) => (
              <Link
                key={area.label}
                href={`/practice-areas/${area.slug}`}
                className="rounded-full border border-gold/15 bg-gold/[0.04] px-4 py-2 text-xs sm:text-sm text-gray-300 font-medium transition-all duration-200 hover:border-gold/40 hover:text-gold hover:bg-gold/[0.08]"
              >
                {area.label}
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-sm text-gold/60 hover:text-gold transition-colors"
            >
              All 29 Practice Areas
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-gold/60 hover:text-gold transition-colors"
            >
              Our Legal Services
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-dark-deep py-10 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-xs text-gray-600 leading-relaxed">
            NyaySevak provides verified lawyers for every court in India&apos;s judicial system. From the Supreme Court of India to all 25 High Courts (Delhi, Bombay, Madras, Calcutta, Karnataka, Allahabad, Gujarat, Punjab &amp; Haryana, Telangana, Rajasthan, and more), 700+ District Courts across 36 States and Union Territories, and 20+ specialized Tribunals including NCLT, NCLAT, NGT, RERA, NCDRC, ITAT, CAT, DRT, SAT, and Armed Forces Tribunal. Our advocates handle writ petitions, appeals, bail applications, criminal trials, civil suits, family matters, corporate disputes, tax appeals, consumer complaints, and all other court proceedings. Free first consultation available.
          </p>
        </div>
      </section>
    </main>
  );
}
