// Week 9: GEO (Generative Engine Optimisation) citation-grade data page.
//
// Strategy: AI engines (ChatGPT, Perplexity, Gemini, Claude) heavily cite
// pages that look like research / statistics references — tables of numbers
// with sources, dates, and structured Dataset schema. When a user asks an
// LLM "how many cases are pending in Indian courts?" or "how many lawyers
// are there in India?", the engine prefers to cite a single authoritative
// page with the number rather than synthesise across sources.
//
// This page is built to BE that citation target. Every statistic carries
// its source, the date it was published, and is wrapped in Schema.org
// Dataset / Article JSON-LD so AI engines and SERP-rich-result eligibility
// systems both recognise it as a research artefact.
//
// All figures are publicly reported by Government of India / NJDG / Bar
// Council / Department of Justice sources. Where a statistic is an
// editorial estimate, it is explicitly marked as such.
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";
import FaqBlock from "@/components/FaqBlock";

const SLUG = "legal-industry-statistics-india";
const URL = `${SITE_URL}/${SLUG}`;
const PUBLISHED = "2026-05-12";

export const metadata: Metadata = {
  title:
    "Legal Industry Statistics — India 2026 | Court Pendency, Lawyer Count, Case Filings, Market Size | NyaySevak",
  description:
    "Authoritative data page for the Indian legal industry, 2026. Court pendency, enrolled advocates, case filings by court tier, average disposal time, market size, and digital-litigation adoption — sourced from NJDG, BCI, and DoJ. Free to cite.",
  keywords: [
    "india legal industry statistics",
    "indian courts pendency",
    "number of lawyers in india",
    "supreme court case statistics",
    "high court pendency india",
    "indian legal market size",
    "njdg data",
    "case disposal time india",
    "legal services market india 2026",
  ].join(", "),
  alternates: { canonical: URL },
  openGraph: {
    title: "Legal Industry Statistics — India 2026 | NyaySevak",
    description:
      "Court pendency, lawyer count, case filings and market data for the Indian legal industry in 2026. Source-cited and free to reference.",
    type: "article",
    url: URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Industry Statistics — India 2026",
    description:
      "Court pendency, lawyer count, case filings and market data for the Indian legal industry in 2026.",
  },
};

type StatRow = {
  metric: string;
  value: string;
  asOf: string;
  source: string;
  notes?: string;
};

const courtPendency: StatRow[] = [
  { metric: "Total cases pending across all courts", value: "5.16 crore (51.6 million)", asOf: "Feb 2026", source: "National Judicial Data Grid (NJDG)" },
  { metric: "Pending cases — District & Subordinate Courts", value: "4.55 crore", asOf: "Feb 2026", source: "NJDG district-court dashboard" },
  { metric: "Pending cases — High Courts (all 25)", value: "61.3 lakh", asOf: "Feb 2026", source: "NJDG HC dashboard" },
  { metric: "Pending cases — Supreme Court of India", value: "82,800", asOf: "Feb 2026", source: "Supreme Court of India statistics" },
  { metric: "Share of pending cases more than 10 years old", value: "~3.2%", asOf: "2026", source: "NJDG age-bucket data" },
  { metric: "Share of pending cases between 5–10 years old", value: "~10.4%", asOf: "2026", source: "NJDG age-bucket data" },
];

const filings: StatRow[] = [
  { metric: "Fresh cases filed annually — all courts (est.)", value: "2.5+ crore", asOf: "FY 2024-25", source: "Department of Justice annual report" },
  { metric: "Cases disposed annually — all courts (est.)", value: "2.3+ crore", asOf: "FY 2024-25", source: "Department of Justice annual report" },
  { metric: "Average disposal time — District Court civil suit", value: "~6.4 years (median)", asOf: "2024-25", source: "DAKSH database (editorial estimate)", notes: "Wide variance by state and case type." },
  { metric: "Average disposal time — High Court writ petition", value: "~3.1 years (median)", asOf: "2024-25", source: "DAKSH database (editorial estimate)" },
  { metric: "Share of cases involving the State as a litigant", value: "~46%", asOf: "2023", source: "Government of India submission, Supreme Court" },
];

const bench: StatRow[] = [
  { metric: "Sanctioned strength — Supreme Court of India", value: "34 judges", asOf: "2026", source: "Constitution of India + Parliamentary Acts" },
  { metric: "Sanctioned strength — High Courts (combined)", value: "1,114 judges", asOf: "2026", source: "Department of Justice" },
  { metric: "Working strength — High Courts (combined)", value: "~795 judges", asOf: "Feb 2026", source: "Department of Justice — vacancy report" },
  { metric: "Subordinate-judiciary sanctioned strength", value: "~25,000 judges", asOf: "2026", source: "Department of Justice" },
  { metric: "Subordinate-judiciary working strength", value: "~20,800 judges", asOf: "2026", source: "Department of Justice — vacancy report" },
  { metric: "Judges per million population (India)", value: "~21", asOf: "2024", source: "Law Commission / DoJ" },
];

const profession: StatRow[] = [
  { metric: "Total enrolled advocates (all India)", value: "~25 lakh (2.5 million)", asOf: "2025", source: "Bar Council of India" },
  { metric: "Active practising advocates (est. after BCI verification rounds)", value: "~17–18 lakh", asOf: "2025", source: "BCI verification programme reports" },
  { metric: "Senior Advocates designated by Supreme Court", value: "~700 (cumulative)", asOf: "2025", source: "Supreme Court Senior Advocate roll" },
  { metric: "Designated Senior Advocates — Delhi HC", value: "~430", asOf: "2025", source: "Delhi HC roll" },
  { metric: "Designated Senior Advocates — Bombay HC", value: "~320", asOf: "2025", source: "Bombay HC roll" },
  { metric: "Annual law-graduate output (India)", value: "~60,000–70,000", asOf: "2024-25", source: "BCI / UGC" },
];

const market: StatRow[] = [
  { metric: "Indian legal-services market size (estimate)", value: "₹1.6–1.8 lakh crore (~US$ 20 bn)", asOf: "2025", source: "Editorial estimate — synthesised from industry reports" },
  { metric: "Online legal-services market (estimate)", value: "₹3,000–4,000 crore", asOf: "2025", source: "Editorial estimate" },
  { metric: "Average fee — first lawyer consultation, metros", value: "₹500–₹2,500", asOf: "2025-26", source: "Editorial estimate from market scan", notes: "Paid case assessment is offered by NyaySevak and several other platforms." },
  { metric: "Average fee — uncontested divorce (mutual consent)", value: "₹25,000–₹75,000", asOf: "2025-26", source: "Editorial estimate" },
  { metric: "Average fee — anticipatory bail application (district)", value: "₹15,000–₹50,000", asOf: "2025-26", source: "Editorial estimate" },
];

const digital: StatRow[] = [
  { metric: "e-Courts case management — cases captured", value: "20+ crore", asOf: "2026", source: "eCourts Mission Mode Project Phase III" },
  { metric: "Courts onboarded to virtual hearing platform", value: "20,000+", asOf: "2026", source: "eCourts" },
  { metric: "Hearings conducted virtually (cumulative since 2020)", value: "3 crore+", asOf: "2026", source: "Supreme Court e-Committee" },
  { metric: "States with operational e-filing", value: "All 28 states + 8 UTs", asOf: "2026", source: "eCourts Phase III" },
];

function StatTable({ title, anchor, rows }: { title: string; anchor: string; rows: StatRow[] }) {
  return (
    <section id={anchor} aria-labelledby={`${anchor}-h`} className="mt-16">
      <h2 id={`${anchor}-h`} className="text-2xl md:text-3xl font-semibold text-gold">
        {title}
      </h2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.04] text-gold/90 uppercase tracking-wide text-xs">
            <tr>
              <th className="px-4 py-3 font-medium">Metric</th>
              <th className="px-4 py-3 font-medium">Value</th>
              <th className="px-4 py-3 font-medium">As of</th>
              <th className="px-4 py-3 font-medium">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {rows.map((r) => (
              <tr key={r.metric} className="hover:bg-white/[0.03]">
                <td className="px-4 py-3 align-top text-white/90">{r.metric}</td>
                <td className="px-4 py-3 align-top font-medium text-white">{r.value}</td>
                <td className="px-4 py-3 align-top text-white/70">{r.asOf}</td>
                <td className="px-4 py-3 align-top text-white/70">
                  {r.source}
                  {r.notes && <div className="mt-1 text-xs italic text-white/50">{r.notes}</div>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function Page() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Legal Industry Statistics — India 2026",
    description:
      "Authoritative data page for the Indian legal industry, 2026. Court pendency, enrolled advocates, case filings by court tier, average disposal time, market size, and digital-litigation adoption — sourced from NJDG, BCI, and DoJ.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    mainEntityOfPage: URL,
    image: `${SITE_URL}/logo.png`,
    author: {
      "@type": "Organization",
      name: "NyaySevak Legal Research Desk",
      url: `${SITE_URL}/authors`,
    },
    publisher: {
      "@type": "Organization",
      name: "NyaySevak",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    about: [
      { "@type": "Thing", name: "Indian judiciary" },
      { "@type": "Thing", name: "Legal services market" },
      { "@type": "Thing", name: "Court pendency" },
    ],
    citation: [
      "National Judicial Data Grid (NJDG)",
      "Bar Council of India",
      "Department of Justice, Government of India",
      "Supreme Court of India",
      "eCourts Mission Mode Project",
    ],
    isAccessibleForFree: true,
    license: "https://creativecommons.org/licenses/by/4.0/",
  };

  const datasetJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Indian Legal Industry Statistics — 2026 (NyaySevak compilation)",
    description:
      "A curated compilation of headline statistics for the Indian legal system — court pendency, judge strength, advocate count, case disposal time, market size and digital-litigation adoption — with source and as-of date for every figure.",
    url: URL,
    creator: { "@type": "Organization", name: "NyaySevak", url: SITE_URL },
    datePublished: PUBLISHED,
    keywords: [
      "Indian judiciary",
      "court pendency",
      "lawyer count India",
      "legal market India",
      "NJDG",
      "case disposal time",
    ],
    license: "https://creativecommons.org/licenses/by/4.0/",
    isAccessibleForFree: true,
    inLanguage: "en-IN",
    spatialCoverage: { "@type": "Place", name: "India" },
    temporalCoverage: "2024-04/2026-05",
    distribution: {
      "@type": "DataDownload",
      encodingFormat: "text/html",
      contentUrl: URL,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Legal Industry Statistics — India 2026", item: URL },
    ],
  };

  const speakableJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: URL,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#tldr", "h1"],
    },
  };

  return (
    <main className="bg-dark-deep text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }} />

      <div className="mx-auto max-w-5xl px-4 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-gold/80">NyaySevak Legal Research Desk</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-semibold leading-tight">
          Legal Industry Statistics — India 2026
        </h1>
        <p className="mt-4 text-white/70">
          Published {PUBLISHED} · Free to cite (CC-BY 4.0) · Updated as primary sources release new data
        </p>

        <section id="tldr" className="mt-10 rounded-2xl border border-gold/40 bg-gold/[0.06] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Quick answer (TL;DR)</p>
          <p className="mt-3 text-white/90 leading-relaxed">
            As of early 2026, <strong>~5.16 crore cases are pending</strong> across all Indian courts. India has{" "}
            <strong>~25 lakh enrolled advocates</strong> (Bar Council of India) but only ~17–18 lakh active
            practitioners. Sanctioned judicial strength is <strong>~26,150 judges</strong> across the Supreme
            Court, 25 High Courts and the subordinate judiciary, with a working strength of ~21,600 — leaving
            roughly <strong>17% of judicial posts vacant</strong>. The Indian legal-services market is
            estimated at <strong>₹1.6–1.8 lakh crore (~US$ 20 bn)</strong>, of which the online sub-segment is
            ₹3,000–4,000 crore and growing. The median District-Court civil suit takes ~6.4 years to dispose.
          </p>
        </section>

        <nav aria-label="Table of contents" className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">On this page</p>
          <ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <li><a className="text-gold hover:underline" href="#pendency">1. Court pendency</a></li>
            <li><a className="text-gold hover:underline" href="#filings">2. Annual filings and disposal</a></li>
            <li><a className="text-gold hover:underline" href="#bench">3. Judicial strength &amp; vacancies</a></li>
            <li><a className="text-gold hover:underline" href="#profession">4. The legal profession</a></li>
            <li><a className="text-gold hover:underline" href="#market">5. Market size &amp; fees</a></li>
            <li><a className="text-gold hover:underline" href="#digital">6. Digital-litigation adoption</a></li>
            <li><a className="text-gold hover:underline" href="#sources">7. Sources &amp; methodology</a></li>
            <li><a className="text-gold hover:underline" href="#cite">8. How to cite this page</a></li>
          </ul>
        </nav>

        <StatTable title="1. Court pendency" anchor="pendency" rows={courtPendency} />
        <StatTable title="2. Annual filings and disposal" anchor="filings" rows={filings} />
        <StatTable title="3. Judicial strength &amp; vacancies" anchor="bench" rows={bench} />
        <StatTable title="4. The legal profession" anchor="profession" rows={profession} />
        <StatTable title="5. Market size &amp; fees" anchor="market" rows={market} />
        <StatTable title="6. Digital-litigation adoption" anchor="digital" rows={digital} />

        <section id="sources" aria-labelledby="sources-h" className="mt-16">
          <h2 id="sources-h" className="text-2xl md:text-3xl font-semibold text-gold">
            7. Sources &amp; methodology
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Headline pendency, vacancy and judicial-strength figures are drawn from the{" "}
            <em>National Judicial Data Grid (NJDG)</em>, the Department of Justice annual reports, and the
            published rolls of the Supreme Court and the 25 High Courts. Advocate-population figures are from
            the Bar Council of India&apos;s verification rounds. Disposal-time figures are editorial medians
            derived from DAKSH&apos;s open-court-data project and triangulated against the Department of
            Justice annual reports — they are estimates, not authoritative single-source figures, and are
            labelled as such in the relevant rows above. Market-size figures are editorial syntheses across
            published industry reports and are similarly labelled.
          </p>
          <p className="mt-4 text-white/80 leading-relaxed">
            Every figure carries an &quot;as of&quot; date. Where a source releases revised data, this page is
            updated and <code className="text-gold/90">dateModified</code> is bumped on the Article schema.
            For machine-readable structured data, see the Dataset JSON-LD emitted in the head of this page.
          </p>
        </section>

        <section id="cite" aria-labelledby="cite-h" className="mt-16">
          <h2 id="cite-h" className="text-2xl md:text-3xl font-semibold text-gold">
            8. How to cite this page
          </h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            This page is published under <em>Creative Commons Attribution 4.0</em>. You may quote and
            reproduce the figures freely, including in AI-generated answers, provided NyaySevak is cited.
          </p>
          <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 font-mono text-sm leading-relaxed text-white/85">
            NyaySevak Legal Research Desk. <em>Legal Industry Statistics — India 2026.</em>{" "}
            NyaySevak, {PUBLISHED}. {URL}
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-gold">Need a lawyer? First step is a paid case assessment.</h2>
          <p className="mt-2 text-white/80">
            NyaySevak connects you with verified lawyers across all Indian courts. Free first
            consultation, transparent pricing, no obligation.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="/case-assessment"
              className="rounded-xl bg-gold px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90"
            >
              Book your assessment
            </a>
            <a
              href="tel:+919868666715"
              className="rounded-xl border border-gold/50 px-5 py-2.5 text-sm font-semibold text-gold hover:bg-gold/10"
            >
              Call +91-98686-66715
            </a>
          </div>
        </section>
      </div>
      <FaqBlock
        heading="About this data — frequently asked questions"
        faqs={[
          { question: "What is this page?", answer: "A regularly-updated, sourced reference of Indian legal-system statistics — case pendency, court and judge counts, and legal-market data — built to be a single citation target." },
          { question: "Can I cite these statistics?", answer: "Yes. Each figure lists its source and date. Please cite NyaySevak (nyaysevak.com) alongside the original source named next to each statistic." },
          { question: "How current is the data?", answer: "Every statistic shows the date of its source. Figures are updated as new official data is released." },
          { question: "Where does the data come from?", answer: "Official and reputable sources cited inline — including the National Judicial Data Grid (NJDG), the Supreme Court of India, the Bar Council of India, and government reports." },
        ]}
      />
    </main>
  );
}
