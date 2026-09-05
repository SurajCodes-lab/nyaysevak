import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Tag, ChevronRight, CheckCircle2, BookOpen } from "lucide-react";
import { articles, articlesBySlug, isArticleSlug } from "@/data/insights";
import { authorsBySlug } from "@/data/authors";
import { practiceAreas } from "@/data/practice-areas";
import { allServices } from "@/data/services";
import { cities } from "@/data/cities";
import ContactButton from "@/components/ContactButton";
import AnswerBlock from "@/components/AnswerBlock";
import LeadCTA from "@/components/LeadCTA";
import TableOfContents, { TocItem } from "@/components/TableOfContents";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedGroupsForInsight } from "@/data/internal-links";
import { SITE_URL } from "@/lib/site";
import { trimToSentences } from "@/lib/quick-answer";
import { title as metaTitle, description as metaDescription, clamp, DESC_MAX } from "@/lib/meta";

// Week 11: hand-written AEO "Quick Answer" for each pillar article, keyed by
// slug. These are the highest-traffic informational pages, so the direct
// answer is authored (not derived) to maximise the chance an AI engine extracts
// it verbatim. Any article without an entry falls back to a trimmed excerpt.
const ARTICLE_QUICK_ANSWERS: Record<string, string> = {
  "mutual-consent-divorce-india-procedure-2026":
    "Mutual-consent divorce in India is filed jointly under Section 13B of the Hindu Marriage Act, 1955. Both spouses petition the Family Court, complete a first and second motion separated by a six-month cooling-off period (which courts can waive following the Supreme Court's Amardeep Singh ruling), and receive a decree. With the waiver, the entire process can conclude in roughly six months.",
  "anticipatory-bail-india-section-482-bnss-guide-2026":
    "Anticipatory bail is pre-arrest bail granted under Section 482 of the BNSS, 2023 (the successor to Section 438 CrPC). A person who apprehends arrest in a non-bailable case applies to the Sessions Court or High Court; if granted, they cannot be arrested except on the conditions the court sets. It guards against wrongful or motivated arrest while the investigation continues.",
  "property-title-verification-india-checklist-2026":
    "Title verification confirms that a property's seller holds clear, marketable, and transferable ownership before you buy. In India this means checking the mother deed and 30-year title chain, the encumbrance certificate, mutation and revenue records, the sanctioned plan, up-to-date tax receipts, and any litigation or RERA status. Skipping it is the leading cause of post-purchase property disputes.",
  "filing-fir-india-procedure-rights-2026":
    "A First Information Report (FIR) records a cognizable offence and is registered under Section 173 of the BNSS, 2023 at the police station with jurisdiction. Filing is free, the police must register it for a cognizable offence, and you are entitled to a free copy. If the police refuse, you can escalate to the Superintendent of Police or move a Magistrate under Section 175 BNSS.",
  "rera-complaint-procedure-buyer-guide-2026":
    "A RERA complaint lets a home-buyer act against a builder for delayed possession, misleading promises, or defects, under the Real Estate (Regulation and Development) Act, 2016. You file with your State RERA Authority for free (around ₹1,000) and can seek a refund with interest, possession, or compensation. Most states allow online filing and aim to decide within about 60 days.",
  "private-limited-company-incorporation-india-2026":
    "A private limited company is registered in India through the MCA's SPICe+ form. You obtain Director Identification Numbers and digital signatures, reserve a company name, and file incorporation with the MoA and AoA — receiving a Certificate of Incorporation along with PAN and TAN. For two directors it typically takes 7-15 working days, with no minimum paid-up capital required.",
  "section-138-ni-act-cheque-bounce-procedure-2026":
    "A cheque-bounce case is prosecuted under Section 138 of the Negotiable Instruments Act, 1881. After dishonour, the payee must send a written demand notice within 30 days; if the drawer does not pay within 15 days, a complaint must be filed before a Magistrate within the following 30 days. Conviction can carry up to two years' imprisonment or a fine of up to twice the cheque amount.",
  "lawyer-fees-india-benchmarks-2026":
    "Lawyer fees in India vary with seniority, court, and city. In 2026 a first consultation is often free or ₹500-₹3,000; document drafting runs ₹1,000-₹25,000; district-court matters typically cost ₹15,000-₹75,000; and High Court or Supreme Court representation ranges from ₹50,000 to several lakh. Fees are higher in the metros and should be agreed upfront.",
  "nclt-ibc-insolvency-recovery-india-2026":
    "The NCLT, using the Insolvency and Bankruptcy Code, 2016, lets creditors force a defaulting company into a time-bound recovery. A financial creditor files under Section 7; an operational creditor sends a Section 8 notice then files under Section 9; a company can self-initiate under Section 10. The minimum default is ₹1 crore. Once admitted, a moratorium (Section 14) freezes all claims, an independent professional takes over, and a Committee of Creditors approves a resolution plan by a 66% vote within 330 days.",
  "money-recovery-commercial-suit-india-2026":
    "To recover money owed in India, start with a legal demand notice, then choose the route that fits: an Order XXXVII summary suit for clear document-backed debts (the defendant needs the court's leave to defend), a Commercial Court for commercial disputes of ₹3 lakh or more (with mandatory pre-institution mediation under Section 12A unless urgent relief is needed), a Section 138 complaint where a cheque bounced, or an IBC petition against a company owing ₹1 crore or more. Choosing the right route at the start is the biggest factor in how fast you recover.",
  "co-founders-agreement-india-guide-2026":
    "A co-founders' agreement governs equity split, decision rights, what happens to a founder's shares if they leave, and IP ownership. The key protections are vesting (commonly four years with a one-year cliff, so early leavers forfeit unvested equity), assignment of all IP to the company, and good-leaver/bad-leaver clauses. In India, blanket non-competes are largely unenforceable under Section 27 of the Contract Act, so protection is via confidentiality and narrow non-solicit clauses. It should align with the shareholders' agreement investors later require.",
  "high-net-worth-alimony-settlement-india-2026":
    "Indian law has no fixed alimony formula. Interim maintenance (Section 24, Hindu Marriage Act) supports a spouse during the case; permanent alimony (Section 25) is the final settlement, as a lump sum or periodic payment. Courts decide the amount on the Rajnesh v. Neha factors — income, assets, standard of living, duration of marriage and needs — and both parties must file a mandatory affidavit of assets and liabilities. In high-net-worth divorces a one-time lump-sum settlement is often preferred, and honest disclosure and business valuation are the decisive issues.",
  "patent-registration-filing-india-process-2026":
    "A patent gives a 20-year monopoly over an invention that is novel, involves an inventive step, and is industrially applicable — but public disclosure before filing destroys novelty, so file first. A provisional specification secures your priority date and gives you 12 months to file the complete specification. You must request examination (Form 18) within 48 months or the application lapses; the examiner's First Examination Report must be answered before grant. An Indian patent protects you only in India — use a PCT application within 12 months for international protection.",
  "cheque-bounce-legal-notice-format-section-138-india-2026":
    "A cheque-bounce demand notice under Section 138 of the NI Act is a legal precondition, and the timing is strict: send it within 30 days of the bank's dishonour memo; the drawer then has 15 days to pay; if unpaid, file the complaint within the next 30 days. The notice must identify the cheque (number, date, amount, bank), state the underlying liability, record the dishonour, and demand the exact cheque amount within 15 days — sent with proof of dispatch and delivery. Demand only the cheque amount; over-demanding creates a defence.",
  "documents-required-company-registration-india-2026":
    "To register a company in India, each director/partner needs PAN, identity proof (Aadhaar/passport/voter ID/driving licence), address proof under two months old, a photo, and email/mobile (for DSC and DIN). The registered office needs a recent utility bill or property document, the rent agreement if rented, and the owner's NOC. A Private Limited company's MoA/AoA are prepared within the SPICe+ form; an LLP files an LLP Agreement after incorporation. NRIs and foreign nationals must have documents notarised and apostilled — a commonly missed step.",
};

// Build a kebab-case slug from a heading so each section has a stable
// anchor id that can be linked from the on-page Table of Contents and
// shared as a deep-link URL fragment.
function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isArticleSlug(slug)) {
    return { title: "Not Found | NyaySevak", robots: { index: false, follow: false } };
  }
  const article = articlesBySlug[slug];
  const url = `${SITE_URL}/insights/${slug}`;

  return {
    // Week 26: article metadata is hand-written per guide and had drifted long
    // — every one of the 37 titles exceeded the SERP limit. Clamped here so the
    // constraint applies to future guides without editing each one.
    title: metaTitle(article.metaTitle),
    description: clamp(article.metaDescription, DESC_MAX),
    keywords: [article.primaryKeyword, ...article.secondaryKeywords, "NyaySevak", "Indian law guide", "legal procedure India"].join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      url,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [authorsBySlug[article.authorSlug]?.name ?? "NyaySevak Legal Team"],
      siteName: "NyaySevak",
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isArticleSlug(slug)) notFound();

  const article = articlesBySlug[slug];
  const author = authorsBySlug[article.authorSlug];
  const reviewer = article.reviewerSlug ? authorsBySlug[article.reviewerSlug] : undefined;
  const url = `${SITE_URL}/insights/${slug}`;

  const relatedPracticeAreas = article.relatedPracticeAreaSlugs
    .map((s) => practiceAreas.find((a) => a.slug === s))
    .filter(Boolean) as typeof practiceAreas;

  const relatedServices = article.relatedServiceSlugs
    .map((s) => allServices.find((sv) => sv.slug === s))
    .filter(Boolean) as typeof allServices;

  const relatedCities = (article.relatedCitySlugs ?? [])
    .map((s) => cities.find((c) => c.slug === s))
    .filter(Boolean) as typeof cities;

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  // Week 11: AEO Quick Answer — authored per-slug, with a trimmed-excerpt fallback.
  const quickAnswer = ARTICLE_QUICK_ANSWERS[slug] ?? trimToSentences(article.excerpt, 70);

  // BlogPosting / Article schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    image: `${SITE_URL}/logo.png`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: author?.name ?? "NyaySevak Legal Team",
      url: `${SITE_URL}/authors/${article.authorSlug}`,
      knowsAbout: author?.expertise ?? [],
    },
    publisher: {
      "@type": "Organization",
      name: "NyaySevak",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png`, width: 800, height: 800 },
    },
    reviewedBy: reviewer
      ? {
          "@type": "Organization",
          name: reviewer.name,
          url: `${SITE_URL}/authors/${article.reviewerSlug}`,
        }
      : undefined,
    keywords: [article.primaryKeyword, ...article.secondaryKeywords].join(", "),
    articleSection: article.category,
    wordCount:
      article.intro.join(" ").split(/\s+/).length +
      article.sections.flatMap((s) => s.body.concat(s.bullets ?? [])).join(" ").split(/\s+/).length,
    about: {
      "@type": "Thing",
      name: article.category,
      description: article.metaDescription,
    },
    creditText: `${author?.name ?? "NyaySevak Legal Team"} · NyaySevak · ${article.category}`,
    speakable: {
      // Week 11: lead with the AnswerBlock card, then H1 and the takeaways box.
      "@type": "SpeakableSpecification",
      cssSelector: ["#answer", "h1", ".article-takeaway"],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // Week 7: HowTo schema for procedural articles. Heading prefix "1. ", "2. " etc.
  // is the marker that the article's body is a step-by-step procedure suitable
  // for HowTo rich results. Articles whose sections aren't sequential procedures
  // (e.g. fee benchmarks, glossary-style) skip this — the runtime check below.
  const isProcedural = article.sections.length >= 3 &&
    article.sections.slice(0, 3).every((s) => /^\d+\./.test(s.heading.trim()));

  const howToJsonLd = isProcedural
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: article.title,
        description: article.metaDescription,
        inLanguage: "en-IN",
        totalTime: `PT${article.readTimeMinutes}M`,
        step: article.sections.map((s, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: s.heading.replace(/^\d+\.\s*/, ""),
          text: s.body[0] ?? s.heading,
          url: `${url}#step-${idx + 1}`,
        })),
        author: {
          "@type": "Organization",
          name: author?.name ?? "NyaySevak Legal Team",
          url: `${SITE_URL}/authors/${article.authorSlug}`,
        },
      }
    : null;

  return (
    <main className="bg-dark-deep text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {howToJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      )}

      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-gold/60 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/insights" className="hover:text-gold transition-colors">Insights</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold/80 truncate max-w-[200px] sm:max-w-md">{article.category}</span>
          </nav>

          <span className="inline-flex items-center gap-2 mb-5 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
            <BookOpen className="h-3.5 w-3.5" /> {article.hero.eyebrow}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-5 gradient-text-gold">
            {article.hero.title}
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-3xl">
            {article.hero.subtitle}
          </p>

          <div className="flex items-center flex-wrap gap-4 pt-6 border-t border-white/[0.06] text-xs">
            <div className="flex items-center gap-2 text-gold/70">
              <Tag className="h-3 w-3" />
              <span>{article.category}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock className="h-3 w-3" />
              <span>{article.readTimeMinutes} min read</span>
            </div>
            <div className="text-gray-500">
              Updated {new Date(article.dateModified).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" })}
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500">
            <span className="text-gray-400">Written by </span>
            <Link href={`/authors/${article.authorSlug}`} className="text-gold hover:text-gold-light transition-colors">
              {author?.name ?? "NyaySevak Legal Team"}
            </Link>
            {reviewer && (
              <>
                <span className="text-gray-400"> · Reviewed by </span>
                <Link href={`/authors/${article.reviewerSlug}`} className="text-gold/80 hover:text-gold transition-colors">
                  {reviewer.name}
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* On-page Table of Contents — drives SERP jump-link sitelinks + dwell time */}
      <TableOfContents
        items={[
          ...article.sections.map<TocItem>((s) => ({ id: slugify(s.heading), label: s.heading })),
          { id: "takeaways", label: "Key Takeaways" },
          { id: "faqs", label: "Frequently Asked Questions" },
        ]}
        variant="dark"
      />

      {/* Article body */}
      <article className="pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Week 11: AEO Quick Answer (Speakable + AI-Overview extraction target) */}
          <AnswerBlock question={article.title}>{quickAnswer}</AnswerBlock>

          {/* Intro */}
          <div className="prose-invert space-y-5 mb-12">
            {article.intro.map((para, i) => (
              <p key={i} className="text-base sm:text-lg text-gray-300 leading-[1.8]">
                {para}
              </p>
            ))}
          </div>

          {/* Sections */}
          {article.sections.map((section, i) => (
            <section key={i} id={slugify(section.heading)} className="mb-12 scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-5 text-white border-l-2 border-gold/60 pl-4">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.body.map((para, j) => (
                  <p key={j} className="text-base text-gray-300 leading-[1.8]">
                    {para}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="space-y-3 pt-2">
                    {section.bullets.map((bullet, k) => (
                      <li key={k} className="flex gap-3 text-base text-gray-300 leading-[1.8]">
                        <CheckCircle2 className="h-5 w-5 text-gold/70 shrink-0 mt-1" strokeWidth={1.5} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {/* Takeaways */}
          <section id="takeaways" className="mb-12 rounded-2xl border border-gold/20 bg-gold/[0.03] p-6 lg:p-8 article-takeaway scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-5 text-gold">
              Key Takeaways
            </h2>
            <ul className="space-y-3">
              {article.takeaways.map((t, i) => (
                <li key={i} className="flex gap-3 text-base text-gray-200 leading-[1.7]">
                  <span className="text-gold/70 shrink-0">•</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Mid-article lead capture — placed after the reader gets value */}
          <LeadCTA
            heading={`Need help with ${article.primaryKeyword.replace(/\b(india|procedure|process|guide|2026)\b/gi, "").trim() || "your matter"}?`}
            waText={`Hi, I read your guide on "${article.title}" and need legal help.`}
            context={`insight:${article.slug}`}
          />

          {/* FAQs */}
          <section id="faqs" className="mb-12 scroll-mt-24">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-white border-l-2 border-gold/60 pl-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {article.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.025] transition-colors overflow-hidden"
                >
                  <summary className="cursor-pointer px-5 py-4 text-base font-semibold text-white list-none flex justify-between items-center gap-4">
                    <span>{faq.question}</span>
                    <ChevronRight className="h-4 w-4 text-gold/60 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-400 leading-[1.7]">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Author block */}
          {author && (
            <section className="mb-12 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 lg:p-8">
              <h3 className="text-xs uppercase tracking-[0.25em] text-gold/70 font-semibold mb-3">
                About the {author.designation}
              </h3>
              <Link href={`/authors/${article.authorSlug}`} className="text-xl font-heading font-semibold text-white hover:text-gold transition-colors mb-2 block">
                {author.name}
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{author.shortBio}</p>
              <Link href={`/authors/${article.authorSlug}`} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors">
                Full profile <ArrowRight className="h-3 w-3" />
              </Link>
            </section>
          )}

          {/* CTA */}
          <section className="mb-12 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/[0.05] to-transparent p-6 lg:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-white">
              Need help with this matter?
            </h3>
            <p className="text-sm text-gray-400 mb-5 max-w-xl mx-auto">
              Connect with a verified NyaySevak advocate experienced in {article.category.toLowerCase()}. First step is a free case assessment.
            </p>
            <ContactButton className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 cursor-pointer">
              Book your assessment
              <ArrowRight className="h-4 w-4" />
            </ContactButton>
          </section>
        </div>

        {/* Related cross-links */}
        <div className="mx-auto max-w-5xl px-6 lg:px-8 pt-12 border-t border-white/[0.06]">
          {/* Related practice areas */}
          {relatedPracticeAreas.length > 0 && (
            <section className="mb-10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-gold/70 font-semibold mb-5">
                Related Practice Areas
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPracticeAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/practice-areas/${area.slug}`}
                    className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 hover:border-gold/30 transition-all"
                  >
                    <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors mb-1">{area.title}</h4>
                    <p className="text-xs text-gray-500 line-clamp-2">{area.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related services */}
          {relatedServices.length > 0 && (
            <section className="mb-10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-gold/70 font-semibold mb-5">
                Related Services
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-full border border-white/[0.08] px-4 py-2 text-xs text-gray-300 hover:border-gold/30 hover:text-gold transition-all"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Related cities */}
          {relatedCities.length > 0 && (
            <section className="mb-10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-gold/70 font-semibold mb-5">
                Find a {article.category} Lawyer in
              </h3>
              <div className="flex flex-wrap gap-2">
                {relatedCities.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/lawyers/${city.slug}`}
                    className="rounded-full border border-white/[0.08] px-4 py-2 text-xs text-gray-300 hover:border-gold/30 hover:text-gold transition-all"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* More articles */}
          {otherArticles.length > 0 && (
            <section className="mb-10">
              <h3 className="text-xs uppercase tracking-[0.25em] text-gold/70 font-semibold mb-5">
                More Insights
              </h3>
              <div className="grid gap-4 md:grid-cols-3">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/insights/${a.slug}`}
                    className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 hover:border-gold/30 transition-all"
                  >
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70">{a.category}</span>
                    <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors mt-2 mb-2 leading-snug">{a.title}</h4>
                    <p className="text-xs text-gray-500 line-clamp-3">{a.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
      <RelatedLinks groups={relatedGroupsForInsight(slug)} />
    </main>
  );
}
