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
import { SITE_URL } from "@/lib/site";

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
    title: article.metaTitle,
    description: article.metaDescription,
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
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".article-takeaway"],
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

      {/* Article body */}
      <article className="pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
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
            <section key={i} className="mb-12">
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
          <section className="mb-12 rounded-2xl border border-gold/20 bg-gold/[0.03] p-6 lg:p-8 article-takeaway">
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

          {/* FAQs */}
          <section className="mb-12">
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
              Connect with a verified NyaySevak advocate experienced in {article.category.toLowerCase()}. First consultation is free.
            </p>
            <ContactButton className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 cursor-pointer">
              Get free consultation
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
    </main>
  );
}
