import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Scale, BookOpen, Landmark, ChevronRight } from "lucide-react";
import { practiceAreas } from "@/data/practice-areas";
import { practiceAreaContent } from "@/data/practice-area-content";
import { practiceAreaCategories } from "@/data/practice-area-categories";
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

  // Category-aware related areas: same category first, then adjacent
  const sameCategory = practiceAreaCategories.find((c) => c.slugs.includes(slug));
  const sameCatAreas = sameCategory
    ? sameCategory.slugs
        .filter((s) => s !== slug)
        .map((s) => practiceAreas.find((a) => a.slug === s))
        .filter(Boolean) as typeof practiceAreas
    : [];
  const related = sameCatAreas.slice(0, 3);
  if (related.length < 3) {
    const usedSlugs = new Set([slug, ...related.map((r) => r.slug)]);
    for (let i = 1; related.length < 3 && i < practiceAreas.length; i++) {
      const candidate = practiceAreas[(currentIndex + i) % practiceAreas.length];
      if (!usedSlugs.has(candidate.slug)) {
        related.push(candidate);
        usedSlugs.add(candidate.slug);
      }
    }
  }

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

      {/* ===== Hero ===== */}
      <section className="relative bg-dark-deep pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 section-separator" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 sm:mb-10 flex items-center gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <span className="text-gray-700">/</span>
            <Link href="/practice-areas" className="transition-colors hover:text-gold">Practice Areas</Link>
            <span className="text-gray-700">/</span>
            <span className="text-gold">{area.title}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8">
            <span className="hidden sm:flex h-20 w-20 lg:h-24 lg:w-24 shrink-0 items-center justify-center rounded-2xl icon-gold text-4xl lg:text-5xl font-heading font-bold text-black">
              {area.letter}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-3 sm:hidden mb-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl icon-gold text-xl font-heading font-bold text-black">
                  {area.letter}
                </span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/60">Practice Area</p>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white heading-glow tracking-tight">
                {area.title}
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">{area.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stat Highlights Strip ===== */}
      {content && (
        <section className="relative bg-dark border-y border-gold/[0.08]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold/[0.08]">
              {content.highlights.map((h) => (
                <div key={h.label} className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-heading font-bold stat-gradient leading-tight">{h.stat}</span>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gray-500 mt-2 leading-snug">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Detailed Overview ===== */}
      {content && (
        <section className="bg-cream cream-pattern py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-8 w-1 rounded-full bg-gold" />
              <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark font-semibold">Overview</h2>
            </div>
            <div className="space-y-5 sm:space-y-6">
              {content.detailedOverview.map((para, i) => (
                <p key={i} className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Key Legislation ===== */}
      {content && (
        <section className="bg-dark-deep py-16 sm:py-20 lg:py-24 relative overflow-hidden dark-section-depth">
          <div className="glow-pulse pointer-events-none absolute bottom-[20%] left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_55%)]" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12">
              <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Governing Framework</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">
                Key Legislation & Statutes
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {content.keyLegislation.map((law) => (
                <div key={law} className="glass-card !rounded-xl p-4 sm:p-5">
                  <div className="flex items-start gap-3">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-gold/60" strokeWidth={1.5} />
                    <span className="text-xs sm:text-sm text-gray-300">{law}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Detailed Services ===== */}
      {content ? (
        <section className="bg-cream cream-pattern py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60 font-semibold">What We Offer</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 heading-glow-cream">
                Our {area.title} Services
              </h2>
            </div>
            <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
              {content.serviceDetails.map((service, i) => (
                <div key={service.title} className="group glass-cream p-5 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl icon-box-cream text-sm font-heading font-bold text-gold-dark">
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
        <section className="bg-cream cream-pattern py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-2xl sm:text-3xl font-heading font-bold text-gray-900">
              Our {area.title} Services
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {area.services.map((service, i) => (
                <div key={service} className="flex items-start gap-4 glass-cream p-4 sm:p-5">
                  <span className="text-sm font-heading font-bold stat-gradient">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <span className="text-sm text-gray-600">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== Relevant Courts & Jurisdictions ===== */}
      {content && (
        <section className="bg-dark-deep py-16 sm:py-20 lg:py-24 relative overflow-hidden dark-section-depth">
          <div className="absolute top-0 left-0 right-0 section-separator" />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
              {/* Courts */}
              <div>
                <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Jurisdictions</p>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-6 sm:mb-8">
                  Relevant Courts & Forums
                </h2>
                <div className="space-y-3">
                  {content.relevantCourts.map((court) => (
                    <div key={court} className="glass-card !rounded-xl p-4 sm:p-5">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <Landmark className="h-5 w-5 shrink-0 text-gold/60" strokeWidth={1.5} />
                        <span className="text-xs sm:text-sm text-gray-300">{court}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services list */}
              <div>
                <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Quick Reference</p>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-6 sm:mb-8">
                  Services at a Glance
                </h2>
                <div className="space-y-2.5 sm:space-y-3">
                  {area.services.map((service) => (
                    <div key={service} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_6px_rgba(201,168,76,0.4)] shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-400">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQs — Glass Cards ===== */}
      {content && (
        <section className="bg-cream cream-pattern py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60 font-semibold">Common Questions</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 heading-glow-cream">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {content.faqs.map((faq, i) => (
                <div key={i} className="faq-card group">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 h-8 w-8 rounded-lg icon-box-cream flex items-center justify-center text-xs font-heading font-bold text-gold-dark">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-gold-dark transition-colors duration-300 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="bg-dark-deep py-16 sm:py-20 lg:py-24 dark-section-depth">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-border-card">
            <div className="bg-dark-deep rounded-[calc(1.25rem-1.5px)] p-8 sm:p-10 lg:p-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">
                Need Help with {area.title}?
              </h2>
              <p className="mx-auto mt-4 mb-8 sm:mb-10 max-w-xl text-sm sm:text-base text-gray-400 leading-relaxed">
                Connect with our verified legal professionals specializing in {area.title.toLowerCase()} matters across all courts in India. Get expert guidance today.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 sm:px-10 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-black"
                >
                  Get Consultation
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 sm:px-8 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 hover:scale-[1.02] transition-all duration-300"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Related Practice Areas ===== */}
      <section className="bg-dark py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Explore More</p>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">Related Practice Areas</h3>
          </div>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/practice-areas/${r.slug}`}
                className="group glass-card p-5 sm:p-6"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl icon-gold text-lg font-heading font-bold text-black">
                    {r.letter}
                  </span>
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-gold transition-colors duration-200">
                    {r.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{r.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold/50 group-hover:text-gold transition-colors">
                  Learn More
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors duration-200"
            >
              <ArrowRight className="h-4 w-4 rotate-180" strokeWidth={1.5} />
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
