import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Award, Users } from "lucide-react";
import { authors } from "@/data/authors";
import { articles } from "@/data/insights";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Editorial Desks & Reviewers — NyaySevak Legal Insights Authors",
  description:
    "Meet the NyaySevak editorial desks — practising senior advocates and partner-level corporate counsel who research, write, and review every legal guide on this platform.",
  keywords:
    "NyaySevak editorial desk, legal authors India, criminal law desk, family law desk, property law desk, corporate law desk, senior advocate authors, NyaySevak reviewers",
  alternates: { canonical: `${SITE_URL}/authors` },
  openGraph: {
    title: "Editorial Desks & Reviewers — NyaySevak",
    description:
      "Practising Indian senior advocates and partner-level corporate counsel responsible for every NyaySevak legal article.",
    url: `${SITE_URL}/authors`,
    type: "website",
  },
};

export default function AuthorsHubPage() {
  const url = `${SITE_URL}/authors`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Authors", item: url },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NyaySevak Editorial Desks",
    description: "Editorial desks of senior advocates and senior counsel responsible for NyaySevak legal content.",
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: authors.length,
      itemListElement: authors.map((a, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/authors/${a.slug}`,
        name: a.name,
      })),
    },
  };

  return (
    <main className="bg-dark-deep text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />

      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-gold/60 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">Editorial Desks</span>
          </nav>

          <span className="inline-flex items-center gap-2 mb-6 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
            <Users className="h-3.5 w-3.5" /> Editorial Authority
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 gradient-text-gold">
            NyaySevak Editorial Desks
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Practising senior advocates and partner-level corporate counsel responsible for every legal article, glossary entry, and city guide on NyaySevak. Three-stage editorial review ensures accuracy, currency, and compliance with Bar Council of India advertising guidelines.
          </p>
        </div>
      </section>

      <div className="section-separator" />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {authors.map((author) => {
              const articleCount = articles.filter(
                (a) => a.authorSlug === author.slug || a.reviewerSlug === author.slug
              ).length;
              return (
                <Link
                  key={author.slug}
                  href={`/authors/${author.slug}`}
                  className="group block rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 lg:p-8 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <Award className="h-8 w-8 text-gold/60" strokeWidth={1.5} />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold/60">
                      {articleCount} article{articleCount === 1 ? "" : "s"}
                    </span>
                  </div>
                  <h2 className="text-xl font-heading font-semibold text-white group-hover:text-gold transition-colors mb-1">
                    {author.name}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.2em] text-gold/70 mb-3">
                    {author.designation} · {author.yearsOfExperience}+ years
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5 line-clamp-4">{author.shortBio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {author.practiceAreas.slice(0, 3).map((p) => (
                      <span
                        key={p}
                        className="text-[10px] uppercase tracking-[0.15em] text-gold/70 border border-gold/15 rounded-full px-3 py-1"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold group-hover:gap-3 transition-all">
                    Full profile <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/[0.06]">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-4 text-white">
            Three-stage editorial review
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Every article on NyaySevak passes through three review stages before publication: primary research and drafting by a subject-matter advocate, doctrinal review by a senior lawyer with at least 15 years of court practice in the same domain, and final editorial pass by the legal-content lead.
          </p>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
          >
            Browse insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
