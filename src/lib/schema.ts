// Centralised JSON-LD builders.
//
// Why this file exists:
//   Schema markup was previously hand-authored inline in every page.tsx. That
//   meant the same BreadcrumbList / FAQPage / WebApplication / Speakable shape
//   was copy-pasted across ~200 pages, so a fix (or a schema.org change) had to
//   be applied in dozens of places and inevitably drifted. These pure builders
//   are the single source of truth: every page imports the same function, so
//   the markup is identical and a bug is fixed once.
//
//   All builders are pure and server-safe (no client APIs) so they run during
//   static prerender. They return plain objects — the caller still emits the
//   <script type="application/ld+json"> tag (keeps the JSX explicit and lets a
//   page combine several builders).
//
// AEO note: webPageSpeakable always points the Speakable selector at the
// `#answer` element (the id rendered by <AnswerBlock>) plus the H1, so the
// voice/answer-engine surface is consistent site-wide.

import { SITE_URL } from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;

/** Build an absolute URL from a path (accepts already-absolute URLs unchanged). */
export function abs(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) return pathOrUrl;
  return `${SITE_URL}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export type Crumb = { name: string; path: string };

/**
 * BreadcrumbList. Pass the trail WITHOUT Home — Home is prepended automatically.
 * e.g. breadcrumbJsonLd([{ name: "Legal Tools", path: "/legal-tools" }, ...])
 */
export function breadcrumbJsonLd(trail: Crumb[]) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export type QA = { question: string; answer: string };

/** FAQPage from a list of {question, answer}. Returns null if empty (so callers can `&&` it). */
export function faqPageJsonLd(faqs: QA[]) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export type HowToStep = { name: string; text: string; durationHint?: string };

/** HowTo for procedural pages (step-by-step guides, tool workflows). */
export function howToJsonLd(opts: {
  name: string;
  description?: string;
  steps: HowToStep[];
  totalTime?: string; // ISO 8601 duration e.g. "P6M"
}) {
  if (!opts.steps?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    ...(opts.description ? { description: opts.description } : {}),
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/** WebApplication for the free calculators/tools — a price-0 utility offer. */
export function webApplicationJsonLd(opts: {
  name: string;
  path: string;
  description: string;
  category?: string; // schema.org applicationCategory
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    url: abs(opts.path),
    applicationCategory: opts.category ?? "UtilitiesApplication",
    operatingSystem: "Web",
    description: opts.description,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    inLanguage: "en-IN",
    publisher: { "@id": ORG_ID },
  };
}

/**
 * WebPage + SpeakableSpecification. Targets the AnswerBlock (#answer) and the H1
 * so AI/voice engines know exactly which text is the canonical answer.
 */
export function webPageSpeakableJsonLd(opts: {
  name: string;
  path: string;
  description?: string;
  reviewedByDesk?: string; // e.g. "Criminal Law Desk" — light E-E-A-T signal, no individual lawyer names
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: opts.name,
    url: abs(opts.path),
    ...(opts.description ? { description: opts.description } : {}),
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    publisher: { "@id": ORG_ID },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#answer", "h1"],
    },
    ...(opts.reviewedByDesk
      ? {
          reviewedBy: {
            "@type": "Organization",
            name: `NyaySevak ${opts.reviewedByDesk}`,
            "@id": ORG_ID,
          },
        }
      : {}),
  };
}

/** DefinedTerm for an individual glossary page. */
export function definedTermJsonLd(opts: {
  term: string;
  path: string;
  description: string;
  statutoryReference?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${abs(opts.path)}#term`,
    name: opts.term,
    description: opts.description,
    url: abs(opts.path),
    inLanguage: "en-IN",
    inDefinedTermSet: `${SITE_URL}/legal-glossary#glossary`,
    ...(opts.statutoryReference ? { termCode: opts.statutoryReference } : {}),
  };
}
