import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, BookOpen } from "lucide-react";
import { glossaryTerms } from "@/data/legal-glossary";
import { practiceAreas } from "@/data/practice-areas";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Indian Legal Glossary — 50+ Key Terms Explained for Legal-Service Buyers | NyaySevak",
  description:
    "Indian legal glossary 2026: FIR, anticipatory bail, cognizable offence, Section 138 NI Act, Section 13B HMA, RERA, IBC, lis pendens, encumbrance certificate, Khata. 50+ key terms.",
  keywords:
    "Indian legal glossary, legal terms India, what is FIR, anticipatory bail meaning, Section 138 NI Act, Section 13B HMA, RERA meaning, IBC meaning, lis pendens, encumbrance certificate, NyaySevak",
  alternates: { canonical: `${SITE_URL}/legal-glossary` },
  openGraph: {
    title: "Indian Legal Glossary — NyaySevak",
    description:
      "50+ Indian-law terms defined for serious legal-service buyers. Updated for BNS 2023, BNSS 2023, and BSA 2023.",
    url: `${SITE_URL}/legal-glossary`,
    type: "website",
  },
};

export default function LegalGlossaryPage() {
  const url = `${SITE_URL}/legal-glossary`;

  // Group by category for navigation
  const grouped = glossaryTerms.reduce<Record<string, typeof glossaryTerms>>((acc, t) => {
    if (!acc[t.category]) acc[t.category] = [];
    acc[t.category].push(t);
    return acc;
  }, {});

  const categoryOrder: string[] = [
    "Criminal Procedure",
    "Civil Procedure",
    "Family Law",
    "Property Law",
    "Corporate Law",
    "Contract & Commercial",
    "Constitutional Law",
    "Evidence & Trial",
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Legal Glossary", item: url },
    ],
  };

  // DefinedTermSet — schema.org type for a structured glossary
  const definedTermSetJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${url}#glossary`,
    name: "NyaySevak Indian Legal Glossary",
    description:
      "Glossary of 50+ key Indian legal terms covering criminal procedure, civil procedure, family law, property law, corporate law, evidence, and constitutional law.",
    url,
    inLanguage: "en-IN",
    publisher: { "@id": `${SITE_URL}/#organization` },
    hasDefinedTerm: glossaryTerms.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${url}#${t.slug}`,
      name: t.term,
      description: t.shortDefinition,
      url: `${url}#${t.slug}`,
      inDefinedTermSet: `${url}#glossary`,
      termCode: t.statutoryReference,
    })),
  };

  // Build a FAQ-style entity for definitional queries
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: glossaryTerms.slice(0, 25).map((t) => ({
      "@type": "Question",
      name: `What is ${t.term}?`,
      acceptedAnswer: { "@type": "Answer", text: t.shortDefinition },
    })),
  };

  return (
    <main className="bg-dark-deep text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-20 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.25em] text-gold/60 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold">Legal Glossary</span>
          </nav>

          <span className="inline-flex items-center gap-2 mb-6 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
            <BookOpen className="h-3.5 w-3.5" /> Reference · Updated for 2026
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6 gradient-text-gold">
            Indian Legal Glossary
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed mb-10">
            {glossaryTerms.length} key Indian legal terms — explained clearly for serious legal-service buyers, with statutory references updated for the BNS 2023, BNSS 2023, and BSA 2023 transition.
          </p>

          {/* Category nav */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categoryOrder.filter((c) => grouped[c]?.length).map((cat) => (
              <a
                key={cat}
                href={`#cat-${cat.replace(/\s|&/g, "-").toLowerCase()}`}
                className="rounded-full border border-white/[0.08] px-4 py-2 text-xs text-gray-300 hover:border-gold/30 hover:text-gold transition-all"
              >
                {cat} <span className="text-gold/60 ml-1">({grouped[cat].length})</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Glossary body */}
      <section className="pt-12 pb-24 lg:pt-16 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {categoryOrder.map((cat) => {
            const terms = grouped[cat];
            if (!terms?.length) return null;
            return (
              <section
                key={cat}
                id={`cat-${cat.replace(/\s|&/g, "-").toLowerCase()}`}
                className="mb-16 scroll-mt-32"
              >
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-white border-l-2 border-gold/60 pl-4">
                  {cat}
                </h2>
                <div className="space-y-4">
                  {terms.map((t) => {
                    const related = t.relatedPracticeAreaSlugs
                      .map((s) => practiceAreas.find((p) => p.slug === s))
                      .filter(Boolean) as typeof practiceAreas;
                    return (
                      <article
                        key={t.slug}
                        id={t.slug}
                        className="scroll-mt-32 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 hover:border-gold/20 transition-all"
                      >
                        <header className="flex items-baseline justify-between gap-4 mb-3 flex-wrap">
                          <h3 className="text-lg sm:text-xl font-heading font-semibold text-gold">
                            {t.term}
                          </h3>
                          {t.statutoryReference && (
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gold/60 font-mono">
                              {t.statutoryReference}
                            </span>
                          )}
                        </header>
                        <p className="text-sm sm:text-base text-gray-300 leading-[1.7] mb-3">
                          <span className="font-semibold text-white">Definition: </span>
                          {t.shortDefinition}
                        </p>
                        <p className="text-sm text-gray-400 leading-[1.75]">
                          {t.longDefinition}
                        </p>
                        {related.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-white/[0.05] flex flex-wrap items-center gap-2">
                            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Related practice areas:</span>
                            {related.map((p) => (
                              <Link
                                key={p.slug}
                                href={`/practice-areas/${p.slug}`}
                                className="text-xs text-gold/80 hover:text-gold transition-colors"
                              >
                                {p.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}

          {/* Bottom CTA */}
          <section className="mt-12 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/[0.05] to-transparent p-6 lg:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-white">
              Need help applying these to your case?
            </h3>
            <p className="text-sm text-gray-400 mb-5 max-w-xl mx-auto">
              The terms in this glossary describe the framework. Real cases live in their facts. Talk to a verified NyaySevak advocate — first consultation is free.
            </p>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              Browse insights guides
              <ChevronRight className="h-4 w-4" />
            </Link>
          </section>
        </div>
      </section>
    </main>
  );
}
