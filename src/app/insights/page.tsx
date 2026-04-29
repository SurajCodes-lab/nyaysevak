import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { articles, articleCategories } from "@/data/insights";
import { authorsBySlug } from "@/data/authors";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Legal Insights & Guides — In-depth Indian Law Articles for 2026 | NyaySevak",
  description:
    "Long-form Indian legal guides — mutual-consent divorce, anticipatory bail, property title verification, RERA, company incorporation, cheque bounce, and lawyer-fee benchmarks. Hand-written by practising advocates.",
  keywords:
    "legal articles India, legal guides 2026, divorce procedure, anticipatory bail guide, property title verification, RERA complaint, company registration, cheque bounce procedure, lawyer fees India, NyaySevak insights",
  alternates: {
    canonical: `${SITE_URL}/insights`,
  },
  openGraph: {
    title: "Legal Insights & Guides — NyaySevak",
    description:
      "In-depth Indian legal guides hand-written by practising advocates. Procedure walkthroughs, checklists, and 2026 fee benchmarks.",
    type: "website",
    url: `${SITE_URL}/insights`,
  },
};

export default function InsightsHubPage() {
  const url = `${SITE_URL}/insights`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Insights", item: url },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NyaySevak Legal Insights",
    description:
      "In-depth long-form articles on Indian legal procedure, hand-written and reviewed by practising advocates.",
    url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    hasPart: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${SITE_URL}/insights/${a.slug}`,
      datePublished: a.datePublished,
      dateModified: a.dateModified,
      author: {
        "@type": "Organization",
        name: authorsBySlug[a.authorSlug]?.name ?? "NyaySevak Legal Team",
      },
    })),
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: articles.length,
      itemListElement: articles.map((a, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/insights/${a.slug}`,
        name: a.title,
      })),
    },
  };

  return (
    <main className="bg-dark-deep text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-gold/60 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Insights</span>
          </nav>

          <span className="inline-flex items-center gap-2 mb-6 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
            <BookOpen className="h-3.5 w-3.5" /> Long-form Legal Guides
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 gradient-text-gold">
            Indian Legal Insights & Procedure Guides
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            In-depth, hand-written articles by practising Indian advocates and senior counsel. Every guide is reviewed by the relevant editorial desk before publication. Procedure walk-throughs, statutory references, recent Supreme Court rulings, realistic timelines, and city-specific notes — written for serious legal-service buyers and for fellow practitioners.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gold/60">
            <span className="px-3 py-1 rounded-full border border-gold/20">{articles.length} Articles</span>
            <span className="px-3 py-1 rounded-full border border-gold/20">{articleCategories.length} Practice Categories</span>
            <span className="px-3 py-1 rounded-full border border-gold/20">2026 Editorial Cycle</span>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Why these articles exist */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h3 className="text-base font-heading font-semibold mb-2 text-gold">Hand-written, not templated</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Every article is original, drafted by a subject-matter advocate and reviewed by an editorial desk. No AI-generated boilerplate. No content-mill aggregation. No keyword stuffing.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h3 className="text-base font-heading font-semibold mb-2 text-gold">Statute-anchored</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Citations to BNS 2023 / BNSS 2023 / BSA 2023, key Supreme Court and High Court precedents, with proper statutory anchors. Updated as law develops.
              </p>
            </div>
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h3 className="text-base font-heading font-semibold mb-2 text-gold">City-specific where it matters</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Where local practice diverges — Bangalore A-khata/B-khata, Mumbai cooperative-society law, Hyderabad Dharani-portal — the differences are spelled out, not glossed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-10 text-center">
            All Guides
          </h2>

          <div className="grid gap-6">
            {articles.map((article) => {
              const author = authorsBySlug[article.authorSlug];
              return (
                <Link
                  key={article.slug}
                  href={`/insights/${article.slug}`}
                  className="group block rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 lg:p-8 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4 text-[11px] uppercase tracking-[0.18em]">
                    <span className="inline-flex items-center gap-1.5 text-gold/80">
                      <Tag className="h-3 w-3" /> {article.category}
                    </span>
                    <span className="text-gray-600">·</span>
                    <span className="inline-flex items-center gap-1.5 text-gray-500">
                      <Clock className="h-3 w-3" /> {article.readTimeMinutes} min read
                    </span>
                    <span className="text-gray-600">·</span>
                    <span className="text-gray-500">
                      Updated {new Date(article.dateModified).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                    </span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-heading font-semibold mb-3 leading-snug text-white group-hover:text-gold transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-sm lg:text-base text-gray-400 leading-relaxed mb-5">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="text-xs text-gray-500">
                      <span className="text-gray-400">By </span>
                      <span className="text-gold/80">{author?.name ?? "NyaySevak Legal Team"}</span>
                      {article.reviewerSlug && (
                        <>
                          <span className="text-gray-400"> · Reviewed by </span>
                          <span className="text-gold/70">
                            {authorsBySlug[article.reviewerSlug]?.name ?? "NyaySevak Legal Team"}
                          </span>
                        </>
                      )}
                    </div>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold group-hover:gap-3 transition-all">
                      Read article
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-link to glossary and authors */}
      <section className="py-16 lg:py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 grid gap-6 md:grid-cols-2">
          <Link
            href="/legal-glossary"
            className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8 hover:border-gold/30 transition-all"
          >
            <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-gold transition-colors">
              Legal Glossary
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              50+ Indian-law terms — FIR, anticipatory bail, encumbrance certificate, RERA, IBC, Section 138, lis pendens — defined for serious legal-service buyers.
            </p>
            <span className="text-xs uppercase tracking-[0.2em] text-gold inline-flex items-center gap-2">
              Open glossary <ArrowRight className="h-3 w-3" />
            </span>
          </Link>

          <Link
            href="/authors"
            className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8 hover:border-gold/30 transition-all"
          >
            <h3 className="text-lg font-heading font-semibold mb-2 group-hover:text-gold transition-colors">
              Editorial Desks
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Our editorial desks — criminal, family, property, corporate — are the practising advocates and senior counsel responsible for every article you read here.
            </p>
            <span className="text-xs uppercase tracking-[0.2em] text-gold inline-flex items-center gap-2">
              Meet the desks <ArrowRight className="h-3 w-3" />
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
