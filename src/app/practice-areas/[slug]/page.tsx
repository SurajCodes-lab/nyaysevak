import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";
import { practiceAreaContent } from "@/data/practice-area-content";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return { title: "Not Found | NyaySevak" };

  const content = practiceAreaContent[slug];
  const description = content
    ? content.detailedOverview[0].slice(0, 155) + "..."
    : area.description;

  return {
    title: `${area.title} Lawyers & Legal Services in India | NyaySevak`,
    description: `Expert ${area.title.toLowerCase()} lawyers and legal services across India. ${description}`,
    keywords: [
      `${area.title.toLowerCase()} lawyer India`,
      `${area.title.toLowerCase()} legal services`,
      `best ${area.title.toLowerCase()} advocate`,
      ...area.services.slice(0, 5).map((s) => s.toLowerCase()),
      "NyaySevak",
      "legal services India",
    ].join(", "),
    openGraph: {
      title: `${area.title} Lawyers & Legal Services | NyaySevak`,
      description: `${area.description}. Find verified ${area.title.toLowerCase()} lawyers across India on NyaySevak.`,
      type: "website",
    },
  };
}

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const content = practiceAreaContent[slug];
  const currentIndex = practiceAreas.findIndex((a) => a.slug === slug);
  const related = [
    practiceAreas[(currentIndex + 1) % practiceAreas.length],
    practiceAreas[(currentIndex + 2) % practiceAreas.length],
    practiceAreas[(currentIndex + 3) % practiceAreas.length],
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com/" },
      { "@type": "ListItem", position: 2, name: "Practice Areas", item: "https://nyaysevak.com/practice-areas" },
      { "@type": "ListItem", position: 3, name: area.title, item: `https://nyaysevak.com/practice-areas/${slug}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} - NyaySevak`,
    description: content?.detailedOverview[0] || area.description,
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: "NyaySevak", url: "https://nyaysevak.com" },
  };

  const faqJsonLd = content?.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      {/* ───── Hero ───── */}
      <section className="relative bg-black pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 sm:mb-10 flex items-center gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <span className="text-gray-700">/</span>
            <Link href="/practice-areas" className="transition-colors hover:text-gold">Practice Areas</Link>
            <span className="text-gray-700">/</span>
            <span className="text-gold">{area.title}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
            <span className="hidden sm:flex h-20 w-20 lg:h-24 lg:w-24 shrink-0 items-center justify-center rounded-2xl bg-gold/10 border border-gold/20 text-5xl lg:text-6xl font-heading font-bold text-gold/40">
              {area.letter}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-3 sm:hidden mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-xl font-heading font-bold text-gold/40">
                  {area.letter}
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/60">Practice Area</p>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white tracking-tight">
                {area.title}
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 max-w-2xl">{area.description}</p>

              {/* Stat highlights */}
              {content && (
                <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                  {content.highlights.map((h) => (
                    <div key={h.label} className="rounded-xl bg-white/[0.04] border border-white/5 px-4 py-2.5 sm:px-5 sm:py-3">
                      <span className="text-lg sm:text-xl font-heading font-bold text-gold">{h.stat}</span>
                      <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mt-0.5">{h.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Detailed Overview ───── */}
      {content && (
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-8 w-1 rounded-full bg-gold" />
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark/70 font-semibold">Overview</h2>
            </div>
            <div className="space-y-5 sm:space-y-6">
              {content.detailedOverview.map((para, i) => (
                <p key={i} className="text-sm sm:text-base leading-relaxed text-gray-600">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── Key Legislation ───── */}
      {content && (
        <section className="bg-dark py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60">Governing Framework</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Key Legislation & Statutes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {content.keyLegislation.map((law) => (
                <div key={law} className="rounded-xl bg-dark-card border border-white/5 p-4 sm:p-5 border-l-2 border-l-gold/30">
                  <div className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span className="text-xs sm:text-sm text-gray-300">{law}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── Detailed Services ───── */}
      {content ? (
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60">What We Offer</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">
                Our {area.title} Services
              </h2>
            </div>
            <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              {content.serviceDetails.map((service, i) => (
                <div key={service.title} className="group rounded-2xl bg-white border border-gray-100 shadow-sm p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-md hover:border-gold/20">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-sm font-heading font-bold text-gold/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-gold-dark transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-2xl sm:text-3xl font-heading font-bold text-gray-900">
              Our {area.title} Services
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {area.services.map((service, i) => (
                <div key={service} className="flex items-start gap-4 rounded-xl bg-white border border-gray-100 p-4 sm:p-5">
                  <span className="text-sm font-heading font-bold text-gold/50">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-sm text-gray-600">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── Relevant Courts & Jurisdictions ───── */}
      {content && (
        <section className="bg-black py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
              {/* Courts */}
              <div>
                <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60">Jurisdictions</p>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6 sm:mb-8">
                  Relevant Courts & Forums
                </h2>
                <div className="space-y-3">
                  {content.relevantCourts.map((court) => (
                    <div key={court} className="flex items-center gap-3 sm:gap-4 rounded-xl bg-dark-card border border-white/5 px-4 sm:px-5 py-3.5 sm:py-4">
                      <svg className="h-5 w-5 shrink-0 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                      </svg>
                      <span className="text-xs sm:text-sm text-gray-300">{court}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick at-a-glance list of basic services */}
              <div>
                <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60">Quick Reference</p>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6 sm:mb-8">
                  Services at a Glance
                </h2>
                <div className="space-y-2.5 sm:space-y-3">
                  {area.services.map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold/50 shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-400">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ───── FAQs ───── */}
      {content && (
        <section className="bg-cream py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60">Common Questions</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4 sm:space-y-5">
              {content.faqs.map((faq, i) => (
                <details key={i} className="group rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-5 sm:px-6 lg:px-8 py-4 sm:py-5 text-sm sm:text-base font-semibold text-gray-900 hover:text-gold-dark transition-colors duration-200">
                    <span className="pr-4">{faq.question}</span>
                    <svg className="h-5 w-5 shrink-0 text-gold/50 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── CTA ───── */}
      <section className="bg-dark py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-dark-card border border-white/5 p-8 sm:p-10 lg:p-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white">
              Need Help with {area.title}?
            </h2>
            <p className="mx-auto mt-4 mb-8 sm:mb-10 max-w-xl text-sm sm:text-base text-gray-400">
              Connect with our verified legal professionals specializing in {area.title.toLowerCase()} matters across all courts in India. Get expert guidance today.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-6 sm:px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
              >
                Get Consultation
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#25D366]/40 px-6 sm:px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/10 hover:border-[#25D366]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Related Practice Areas ───── */}
      <section className="bg-black py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60">Explore More</p>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">Related Practice Areas</h3>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/practice-areas/${r.slug}`}
                className="group rounded-2xl bg-dark-card border border-white/5 p-5 sm:p-6 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10 text-xl font-heading font-bold text-gold/40 group-hover:text-gold/60 transition-colors duration-200">
                    {r.letter}
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-gold transition-colors duration-200">
                    {r.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">{r.description}</p>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-gold/60 group-hover:text-gold transition-colors duration-200">
                  <span>Learn more</span>
                  <svg className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to all */}
          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors duration-200"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
