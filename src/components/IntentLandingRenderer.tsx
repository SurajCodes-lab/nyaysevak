// Week 8: Shared renderer for intent-rendered landing pages.
// Each /best-X-lawyers-in-india + /case-assessment page passes its
// IntentLandingPage data to this component. Keeps the route files thin.

import Link from "next/link";
import { ArrowRight, ChevronRight, CheckCircle2, Briefcase, MapPin } from "lucide-react";
import { type IntentLandingPage, intentLandings } from "@/data/intent-landings";
import ContactButton from "@/components/ContactButton";
import AnswerBlock from "@/components/AnswerBlock";

export default function IntentLandingRenderer({ data }: { data: IntentLandingPage }) {
  // Week 15: cross-link the sibling "best <practice> lawyers in India" guides so
  // the listicle pages form a mutually-linked hub cluster (instead of being
  // dead-ends reachable only from the footer). Equity flows between all of them,
  // and each new guide instantly inherits inbound links from the others.
  const relatedGuides = intentLandings.filter((g) => g.slug !== data.slug);
  return (
    <main className="bg-dark-deep text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-gold/60 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold/80">{data.hero.eyebrow}</span>
          </nav>

          <span className="inline-flex items-center gap-2 mb-5 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
            <Briefcase className="h-3.5 w-3.5" /> {data.hero.eyebrow}
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-5 gradient-text-gold">
            {data.hero.h1}
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
            {data.hero.sub}
          </p>
        </div>
      </section>

      <div className="section-separator" />

      {/* Body */}
      <article className="pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {/* Week 11: AEO Quick Answer (Speakable + AI-Overview extraction target) */}
          {data.quickAnswer && (
            <AnswerBlock question={data.hero.h1}>{data.quickAnswer}</AnswerBlock>
          )}

          {data.intro.map((p, i) => (
            <p key={i} className="text-base sm:text-lg text-gray-300 leading-[1.8] mb-5">
              {p}
            </p>
          ))}

          {data.sections.map((s, i) => (
            <section key={i} className="mt-10 mb-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-5 text-white border-l-2 border-gold/60 pl-4">
                {s.heading}
              </h2>
              <div className="space-y-4">
                {s.body.map((para, j) => (
                  <p key={j} className="text-base text-gray-300 leading-[1.8]">{para}</p>
                ))}
                {s.bullets && (
                  <ul className="space-y-3 pt-2">
                    {s.bullets.map((b, k) => (
                      <li key={k} className="flex gap-3 text-base text-gray-300 leading-[1.8]">
                        <CheckCircle2 className="h-5 w-5 text-gold/70 shrink-0 mt-1" strokeWidth={1.5} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {/* City table */}
          {data.cityTable && (
            <section className="mt-12 mb-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-white border-l-2 border-gold/60 pl-4">
                City × City Coverage
              </h2>
              <div className="grid gap-4">
                {data.cityTable.map((c) => (
                  <Link
                    key={c.citySlug}
                    href={
                      data.practiceCanonicalSlug
                        ? `/lawyers/${c.citySlug}/${data.practiceCanonicalSlug}`
                        : `/lawyers/${c.citySlug}`
                    }
                    className="group block rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 hover:border-gold/30 transition-all"
                  >
                    <div className="flex items-baseline justify-between gap-4 flex-wrap">
                      <h3 className="text-lg font-heading font-semibold text-gold inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {c.city}
                      </h3>
                      <span className="text-xs text-gray-500">{c.feeRange}</span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {c.highlights.map((h, k) => (
                        <li key={k} className="text-sm text-gray-400 leading-relaxed">• {h}</li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 mt-3 text-xs uppercase tracking-[0.2em] text-gold/80 group-hover:text-gold transition-colors">
                      View {c.city} lawyers <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className="mb-12 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/[0.05] to-transparent p-6 lg:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 text-white">
              {data.ctaTitle}
            </h3>
            <p className="text-sm text-gray-400 mb-5 max-w-xl mx-auto">{data.ctaCopy}</p>
            <ContactButton className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 cursor-pointer">
              Book your assessment
              <ArrowRight className="h-4 w-4" />
            </ContactButton>
          </section>

          {/* FAQs */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-white border-l-2 border-gold/60 pl-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {data.faqs.map((f, i) => (
                <details key={i} className="group rounded-xl border border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.025] transition-colors overflow-hidden">
                  <summary className="cursor-pointer px-5 py-4 text-base font-semibold text-white list-none flex justify-between items-center gap-4">
                    <span>{f.question}</span>
                    <ChevronRight className="h-4 w-4 text-gold/60 group-open:rotate-90 transition-transform shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-400 leading-[1.7]">{f.answer}</div>
                </details>
              ))}
            </div>
          </section>

          {/* Week 15: Related guides — internal-link hub cluster across the
              "best <practice> lawyers in India" landing pages. */}
          {relatedGuides.length > 0 && (
            <section className="mb-4">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-white border-l-2 border-gold/60 pl-4">
                Related Guides
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedGuides.map((g) => (
                  <Link
                    key={g.slug}
                    href={`/${g.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-white/[0.06] bg-white/[0.015] px-5 py-4 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                      {g.hero.h1}
                    </span>
                    <ArrowRight className="h-4 w-4 text-gold/60 shrink-0 group-hover:translate-x-1 transition-transform" />
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
