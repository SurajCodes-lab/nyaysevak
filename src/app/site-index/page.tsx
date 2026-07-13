import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { allServices } from "@/data/services";
import { practiceAreas } from "@/data/practice-areas";
import { highCourts, tribunalGroups, districtCourts } from "@/data/courts";
import { platformFeatures } from "@/data/features";
import { cities, cityPracticeSlugs, cityPracticeLabels } from "@/data/cities";
import { cityPracticeContent } from "@/data/city-practice-content";
import { articles } from "@/data/insights";
import { authors } from "@/data/authors";
import { glossaryTerms } from "@/data/legal-glossary";
import { breadcrumbJsonLd } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

// Why this page exists:
//   An HTML site index (a human/crawler-readable list of every indexable URL)
//   is the single highest-leverage fix for "Discovered – currently not indexed".
//   It guarantees every leaf page is reachable within ~2 clicks of the homepage
//   via a real <a> link, which is the internal-link signal Google needs before
//   it will spend crawl budget indexing a page on a young domain. It also gives
//   AI crawlers a clean map of the whole site.

export const metadata: Metadata = {
  title: "Site Index — All Pages | NyaySevak.com",
  description:
    "Complete index of every page on NyaySevak: practice areas, legal services, courts & tribunals, lawyers by city, legal tools, insights guides, and the legal glossary.",
  alternates: { canonical: `${SITE_URL}/site-index` },
  robots: { index: true, follow: true },
};

type Group = { title: string; links: { label: string; href: string }[] };

export default function SiteIndexPage() {
  const corePages: Group = {
    title: "Main pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About NyaySevak", href: "/about" },
      { label: "How It Works", href: "/platform" },
      { label: "Platform Features", href: "/features" },
      { label: "Legal Services", href: "/services" },
      { label: "Practice Areas", href: "/practice-areas" },
      { label: "Court Coverage", href: "/courts" },
      { label: "Lawyers by City", href: "/lawyers" },
      { label: "Legal Insights", href: "/insights" },
      { label: "Legal Glossary", href: "/legal-glossary" },
      { label: "Legal Tools", href: "/legal-tools" },
      { label: "Case Assessment", href: "/case-assessment" },
      { label: "Legal Industry Statistics", href: "/legal-industry-statistics-india" },
      { label: "Contact", href: "/contact" },
    ],
  };

  const intentPages: Group = {
    title: "Find a lawyer",
    links: [
      { label: "Best Criminal Lawyers in India", href: "/best-criminal-lawyers-in-india" },
      { label: "Best Civil Lawyers in India", href: "/best-civil-lawyers-in-india" },
      { label: "Best Divorce Lawyers in India", href: "/best-divorce-lawyers-in-india" },
      { label: "Best Property Lawyers in India", href: "/best-property-lawyers-in-india" },
      { label: "Best Corporate Lawyers in India", href: "/best-corporate-lawyers-in-india" },
    ],
  };

  const servicesGroup: Group = {
    title: `Legal Services (${allServices.length})`,
    links: allServices.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  };

  const practiceGroup: Group = {
    title: `Practice Areas (${practiceAreas.length})`,
    links: practiceAreas.map((p) => ({ label: p.title, href: `/practice-areas/${p.slug}` })),
  };

  const highCourtGroup: Group = {
    title: `High Courts (${highCourts.length})`,
    links: highCourts.map((c) => ({ label: c.name, href: `/courts/${c.slug}` })),
  };

  const tribunalGroup: Group = {
    title: `Tribunals (${tribunalGroups.length})`,
    links: tribunalGroups.map((t) => ({ label: t.title, href: `/courts/${t.slug}` })),
  };

  const districtGroup: Group = {
    title: `District Courts by State (${districtCourts.length})`,
    links: districtCourts.map((d) => ({
      label: `${d.state} District Courts`,
      href: `/courts/${d.slug}`,
    })),
  };

  const cityHubGroup: Group = {
    title: `Lawyers by City (${cities.length})`,
    links: cities.map((c) => ({ label: `Lawyers in ${c.name}`, href: `/lawyers/${c.slug}` })),
  };

  // City × practice — the largest under-linked cluster. Flattened into one group.
  // Content-gated (Week 18): matter slugs exist only for the cities we hand-wrote.
  const cityPracticeLinks = cities.flatMap((c) =>
    cityPracticeSlugs
      .filter((p) => Boolean(cityPracticeContent[`${c.slug}__${p}`]))
      .map((p) => ({
        label: `${cityPracticeLabels[p].title} in ${c.name}`,
        href: `/lawyers/${c.slug}/${p}`,
      }))
  );
  const cityPracticeGroup: Group = {
    title: `City × Practice Pages (${cityPracticeLinks.length})`,
    links: cityPracticeLinks,
  };

  const insightsGroup: Group = {
    title: `Insights & Guides (${articles.length})`,
    links: articles.map((a) => ({ label: a.title, href: `/insights/${a.slug}` })),
  };

  const glossaryGroup: Group = {
    title: `Legal Glossary (${glossaryTerms.length})`,
    links: glossaryTerms.map((t) => ({ label: t.term, href: `/legal-glossary/${t.slug}` })),
  };

  const authorsGroup: Group = {
    title: `Editorial Desks (${authors.length})`,
    links: authors.map((a) => ({ label: a.name, href: `/authors/${a.slug}` })),
  };

  const featuresGroup: Group = {
    title: `Platform Features (${platformFeatures.length})`,
    links: platformFeatures.map((f) => ({ label: f.title, href: `/features/${f.slug}` })),
  };

  const legalGroup: Group = {
    title: "Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  };

  const groups: Group[] = [
    corePages,
    intentPages,
    servicesGroup,
    practiceGroup,
    highCourtGroup,
    tribunalGroup,
    districtGroup,
    cityHubGroup,
    cityPracticeGroup,
    insightsGroup,
    glossaryGroup,
    authorsGroup,
    featuresGroup,
    legalGroup,
  ];

  const totalUrls = groups.reduce((n, g) => n + g.links.length, 0);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NyaySevak Site Index",
    url: `${SITE_URL}/site-index`,
    description: "Complete index of all pages on NyaySevak.com.",
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return (
    <main className="bg-dark-deep text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd([{ name: "Site Index", path: "/site-index" }])) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold/60 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">Site Index</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold leading-tight mb-5 gradient-text-gold">
            Site Index
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            Every page on NyaySevak in one place — {totalUrls} links across practice areas,
            services, courts, cities, tools, guides and the legal glossary.
          </p>
        </div>
      </section>

      <div className="section-separator" />

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-10 [&>div]:break-inside-avoid [&>div]:mb-10">
            {groups.map((g) => (
              <div key={g.title}>
                <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.25em] text-gold/70">
                  {g.title}
                </h2>
                <ul className="space-y-2">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors duration-200 link-underline"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
