import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, BookOpen } from "lucide-react";
import { glossaryTerms } from "@/data/legal-glossary";
import { practiceAreas } from "@/data/practice-areas";
import AnswerBlock from "@/components/AnswerBlock";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedGroupsForGlossary } from "@/data/internal-links";
import TrustStrip from "@/components/TrustStrip";
import LeadCTA from "@/components/LeadCTA";
import {
  breadcrumbJsonLd,
  definedTermJsonLd,
  faqPageJsonLd,
  webPageSpeakableJsonLd,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

// Why these are individual pages (not anchors on one glossary page):
//   Each term answers a distinct "what is X / meaning of X in law" query. As
//   #anchors on a single URL, 58 definitional intents collapsed into one page
//   that could rank for at most one or two. Split into pages, each captures its
//   own long-tail query and its own AI-citation surface (the AnswerBlock).
//   This is the largest indexable surface we can create from existing content.

export function generateStaticParams() {
  return glossaryTerms.map((t) => ({ slug: t.slug }));
}

function getTerm(slug: string) {
  return glossaryTerms.find((t) => t.slug === slug);
}

// Strip a trailing parenthetical e.g. "FIR (First Information Report)" -> "FIR".
function plainTerm(term: string): string {
  return term.replace(/\s*\([^)]*\)\s*$/, "").trim();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) {
    return { title: "Term not found | NyaySevak", robots: { index: false, follow: true } };
  }
  const name = plainTerm(term.term);
  const ref = term.statutoryReference ? `, ${term.statutoryReference}` : "";
  const url = `${SITE_URL}/legal-glossary/${term.slug}`;
  return {
    title: `What is ${name}? Meaning${ref} [2026] | NyaySevak`,
    description: term.shortDefinition.slice(0, 158),
    keywords: `what is ${name}, ${name} meaning, ${name} in law India, ${name} definition${
      term.statutoryReference ? `, ${term.statutoryReference}` : ""
    }, NyaySevak`,
    alternates: { canonical: url },
    openGraph: {
      title: `What is ${name}? — Indian Legal Glossary | NyaySevak`,
      description: term.shortDefinition.slice(0, 158),
      url,
      type: "article",
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getTerm(slug);
  if (!term) notFound();

  const name = plainTerm(term.term);
  const url = `${SITE_URL}/legal-glossary/${term.slug}`;

  const related = term.relatedPracticeAreaSlugs
    .map((s) => practiceAreas.find((p) => p.slug === s))
    .filter(Boolean) as typeof practiceAreas;

  // Build a small, genuine FAQ so the page has structured Q&A (AEO) and clears
  // the thin-content bar — derived from the term's own data, no fabrication.
  const faqs = [
    { question: `What is ${name}?`, answer: term.shortDefinition },
    ...(term.statutoryReference
      ? [
          {
            question: `Which law governs ${name} in India?`,
            answer: `${name} is governed by ${term.statutoryReference}. ${term.longDefinition}`,
          },
        ]
      : []),
    ...(related.length
      ? [
          {
            question: `Which type of lawyer handles ${name} matters?`,
            answer: `${name} falls under ${related
              .map((p) => p.title)
              .join(", ")}. NyaySevak matches you with a Bar-Council-verified advocate in the relevant practice area — the first consultation is free.`,
          },
        ]
      : []),
  ];

  const breadcrumb = breadcrumbJsonLd([
    { name: "Legal Glossary", path: "/legal-glossary" },
    { name, path: `/legal-glossary/${term.slug}` },
  ]);
  const definedTerm = definedTermJsonLd({
    term: term.term,
    path: `/legal-glossary/${term.slug}`,
    description: term.shortDefinition,
    statutoryReference: term.statutoryReference,
  });
  const webPage = webPageSpeakableJsonLd({
    name: `What is ${name}?`,
    path: `/legal-glossary/${term.slug}`,
    description: term.shortDefinition,
  });
  const faqLd = faqPageJsonLd(faqs);

  return (
    <main className="bg-dark-deep text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTerm) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}

      {/* Hero */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold/60 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/legal-glossary" className="hover:text-gold transition-colors">Legal Glossary</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold normal-case tracking-normal">{name}</span>
          </nav>

          <span className="inline-flex items-center gap-2 mb-5 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
            <BookOpen className="h-3.5 w-3.5" /> {term.category}
            {term.statutoryReference && <span className="text-gold/50">· {term.statutoryReference}</span>}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-2 gradient-text-gold">
            {term.term}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <AnswerBlock question={`What is ${name}?`}>
            {term.shortDefinition}
          </AnswerBlock>

          <div className="mb-8">
            <TrustStrip />
          </div>

          <div className="prose-invert max-w-none">
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-3">
              {name} explained
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-[1.8] mb-6">
              {term.longDefinition}
            </p>

            {term.statutoryReference && (
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 mb-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-1">Statutory reference</p>
                <p className="text-sm text-white font-medium">{term.statutoryReference}</p>
              </div>
            )}
          </div>

          {related.length > 0 && (
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-3">Related practice areas</p>
              <div className="flex flex-wrap gap-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/practice-areas/${p.slug}`}
                    className="rounded-full border border-gold/30 px-4 py-1.5 text-xs text-gold/90 hover:bg-gold/10 transition-colors"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* FAQ */}
          {faqs.length > 1 && (
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-5">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2">{f.question}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <LeadCTA
            heading={`Dealing with ${name.toLowerCase()} in a real case?`}
            subtext="Definitions describe the framework — your case lives in its facts. Talk to a Bar-Council-verified advocate. First consultation is free, callback usually within 24 hours."
            waText={`Hi, I have a question about ${name} and need legal help.`}
            context={`glossary:${term.slug}`}
          />
        </div>
      </section>

      {/* Mesh: related terms, practice areas, guides + back to glossary */}
      <RelatedLinks
        heading="Explore related pages"
        groups={[
          ...relatedGroupsForGlossary(slug),
          {
            title: "Reference",
            items: [{ label: "Full Legal Glossary (A–Z)", href: "/legal-glossary" }],
          },
        ]}
      />
    </main>
  );
}
