import type { Metadata } from "next";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import AnswerBlock from "@/components/AnswerBlock";
import { ArrowRight, MapPin, Landmark, Scale, Briefcase, ChevronRight, HelpCircle } from "lucide-react";
import { cities, cityPracticeSlugs, cityPracticeLabels } from "@/data/cities";
import { cityPracticeContent } from "@/data/city-practice-content";
import { SITE_URL } from "@/lib/site";
import RelatedLinks from "@/components/RelatedLinks";
import { relatedGroupsForCity } from "@/data/internal-links";
import { faqPageJsonLd } from "@/lib/schema";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return { title: "Not Found | NyaySevak", robots: { index: false, follow: false } };

  // Week 8: title surfaces "Near You" to capture "lawyer near me [city]" intent.
  // Keywords expanded with the per-practice variants ("criminal lawyer Delhi",
  // "divorce lawyer Delhi" etc.) and neighbourhood-level near-me variants.
  // Week 15: tightened + de-duplicated brand (root layout adds "| NyaySevak.com").
  const title = `Best Lawyers in ${city.name} — Case Assessment`;
  const description = `Find the best verified lawyers near you in ${city.name}, ${city.state}. Criminal lawyer, civil lawyer, divorce lawyer, property lawyer, corporate lawyer & more. Covering ${city.highCourt.name} and all ${city.name} district courts. Free case assessment available.`;
  const url = `${SITE_URL}/lawyers/${citySlug}`;
  const cityLower = city.name.toLowerCase();

  return {
    title,
    description,
    // Focused keyword set — the meta keywords tag is ignored by Google, so a
    // tight list avoids the over-optimization pattern of a 60-variant,
    // neighbourhood-stuffed string.
    keywords: [
      `best lawyer ${cityLower}`,
      `lawyer near me ${cityLower}`,
      `advocate ${cityLower}`,
      `${city.highCourt.name.toLowerCase()} lawyer`,
      `free case assessment ${cityLower}`,
      "verified lawyer India",
      "NyaySevak",
    ].join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: `Best Lawyers Near You in ${city.name} | Case Assessment | NyaySevak`,
      description: `Verified advocates near you across ${city.name}, ${city.state}. Every practice area. Free case assessment available.`,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Lawyers Near You in ${city.name} | NyaySevak`,
      description: `Find verified ${city.name} lawyers near you. Free case assessment available.`,
    },
  };
}

export default async function CityHubPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) notFound();

  const url = `${SITE_URL}/lawyers/${citySlug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Lawyers by City", item: `${SITE_URL}/lawyers` },
      { "@type": "ListItem", position: 3, name: city.name, item: url },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best Lawyers in ${city.name}`,
    description: `Verified advocates in ${city.name}, ${city.state} across criminal, civil, family, property, and corporate law.`,
    url,
    about: { "@type": "City", name: city.name, containedInPlace: { "@type": "State", name: city.state } },
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      // Content-gated (Week 18): schema must only list combos that resolve 200.
      numberOfItems: cityPracticeSlugs.filter((p) => cityPracticeContent[`${citySlug}__${p}`]).length,
      itemListElement: cityPracticeSlugs
        .filter((p) => cityPracticeContent[`${citySlug}__${p}`])
        .map((p, i) => {
          const label = cityPracticeLabels[p];
          return {
            "@type": "ListItem",
            position: i + 1,
            name: `${label.title}s in ${city.name}`,
            url: `${url}/${p}`,
          };
        }),
    },
  };

  // Week 11: full GBP-mirror LocalBusiness for the city hub. The hub previously
  // carried a minimal LocalBusiness; this brings it to parity with the
  // city×practice pages and with the on-site Google Business Profile we are
  // standing up this cycle — stable @id, openingHoursSpecification, sameAs, and
  // an areaServed that names both the city and its state.
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${url}#localbusiness`,
    name: `NyaySevak — Lawyers in ${city.name}`,
    description: `Bar-Council-verified lawyers in ${city.name}, ${city.state} across criminal, civil, family, property, and corporate law. Free case assessment available.`,
    image: `${SITE_URL}/logo.png`,
    url,
    telephone: "+91-9868666715",
    email: "nyaysevak@gmail.com",
    priceRange: "Free - ₹₹₹",
    address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: city.state, addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: city.geo.lat, longitude: city.geo.lng },
    areaServed: [
      { "@type": "City", name: city.name },
      { "@type": "State", name: city.state },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "18:00" },
    ],
    parentOrganization: { "@id": "https://www.nyaysevak.com/#organization" },
    sameAs: [
      "https://www.facebook.com/nyaysevak",
      "https://www.instagram.com/nyaysevak",
    ],
  };

  // Week 11: AEO Quick Answer for the city hub + WebPage Speakable target.
  const quickAnswerQuestion = `Who are the best lawyers in ${city.name}?`;
  const quickAnswer =
    `NyaySevak connects you with Bar-Council-verified lawyers in ${city.name}, ${city.state} for criminal, civil, family and divorce, property, and corporate matters. Our ${city.name} advocates practise before ${city.highCourt.name} and the city's district courts, cover all ${city.neighbourhoods.length}+ localities, and offer a free case assessment with fees agreed upfront.`;

  // Week 15 (Phase 4 / AEO): genuine FAQ derived from the city's own data — no
  // fabrication. Gives the hub structured Q&A for AI-Overview / featured-snippet
  // eligibility (the hub previously had Quick Answer but no FAQPage).
  const cityFaqs = [
    {
      question: `How do I find a verified lawyer in ${city.name}?`,
      answer: `Tell NyaySevak about your matter and we match you within 24 hours with a Bar-Council-verified ${city.name} lawyer who practises before ${city.highCourt.name} and the relevant district court. Your first step is a free case assessment and all fees are agreed upfront.`,
    },
    {
      question: `What does a lawyer consultation cost in ${city.name}?`,
      answer: `Your case assessment through NyaySevak is free and comes with no obligation. After that, ${city.name} lawyers charge based on the matter, seniority, and court; fees are always agreed upfront before any work begins.`,
    },
    {
      question: `Which courts do ${city.name} lawyers handle?`,
      answer: `NyaySevak's ${city.name} advocates appear before ${city.highCourt.name}, ${city.districtCourts.slice(0, 3).join(", ")}, and the specialty and tribunal forums relevant to your case.`,
    },
    {
      question: `Can I consult a ${city.name} lawyer online?`,
      answer: `Yes. You can consult a verified ${city.name} lawyer by phone or video through NyaySevak, or meet in person — whichever suits your matter and timeline.`,
    },
  ];

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Best Lawyers in ${city.name}`,
    url,
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#answer", "h1"],
    },
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(cityFaqs)) }} />

      {/* Hero */}
      <section className="relative bg-dark-deep pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 section-separator" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
            <Link href="/lawyers" className="hover:text-gold transition-colors">Lawyers by City</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
            <span className="text-gold">{city.name}</span>
          </nav>

          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
            {city.state} · Pan-City Coverage
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white heading-glow tracking-tight max-w-4xl">
            Best Lawyers in {city.name} — Verified Advocates Across Every Practice Area
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl leading-relaxed">
            {city.blurb} NyaySevak connects you with Bar-Council-verified {city.name} lawyers practising before {city.highCourt.name}, {city.districtCourts.slice(0, 2).join(", ")}, and every district and specialty court relevant to your matter.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { Icon: Landmark, label: city.highCourt.name },
              { Icon: MapPin, label: `${city.neighbourhoods.length}+ localities served` },
              { Icon: Briefcase, label: "5 Practice Areas" },
            ].map((s) => (
              <span key={s.label} className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                <s.Icon className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                {s.label}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <ContactButton className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer">
              Book Your Assessment
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </ContactButton>
          </div>
        </div>
      </section>

      {/* Week 11: AEO Quick Answer (Speakable + AI-Overview extraction target) */}
      <section className="bg-dark border-y border-gold/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnswerBlock question={quickAnswerQuestion}>{quickAnswer}</AnswerBlock>
        </div>
      </section>

      {/* Practice areas for this city */}
      <section className="bg-cream cream-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60 font-semibold mb-2">Practice Areas in {city.name}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 heading-glow-cream">
              Find the Right {city.name} Lawyer for Your Matter
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cityPracticeSlugs.filter((p) => cityPracticeContent[`${citySlug}__${p}`]).map((p) => {
              const label = cityPracticeLabels[p];
              const content = cityPracticeContent[`${citySlug}__${p}`]!;
              return (
                <Link
                  key={p}
                  href={`/lawyers/${citySlug}/${p}`}
                  className="glass-cream p-6 group hover:border-gold/30 transition-all duration-300"
                >
                  <div className="icon-box-cream h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                    <Scale className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gold-dark transition-colors">
                    {label.title}s in {city.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {content?.lead.split(". ").slice(0, 2).join(". ") + "."}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-gold-dark/60 group-hover:text-gold-dark transition-colors">
                    Get matched
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neighbourhoods */}
      <section className="bg-dark-deep py-14 sm:py-16 relative overflow-hidden dark-section-depth">
        <div className="absolute top-0 left-0 right-0 section-separator" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Neighbourhoods Served</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-4">
            Lawyer Near Me in {city.name}
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mb-8">
            Our verified {city.name} lawyers serve every major locality and the surrounding metropolitan area.
          </p>
          <div className="flex flex-wrap gap-2">
            {city.neighbourhoods.map((n) => (
              <span key={n} className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] text-gray-400">
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Courts info */}
      <section className="bg-cream cream-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60 font-semibold">Courts in {city.name}</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 heading-glow-cream mb-8">
            Where Your Case Will Be Heard
          </h2>
          <div className="space-y-4">
            <div className="glass-cream p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <Landmark className="h-6 w-6 text-gold-dark shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-dark/70 font-bold">High Court</p>
                  <Link href={`/courts/${city.highCourt.slug}`} className="mt-1 inline-block text-base font-semibold text-gray-900 hover:text-gold-dark transition-colors">
                    {city.highCourt.name}
                  </Link>
                </div>
              </div>
            </div>
            {city.districtCourts.length > 0 && (
              <div className="glass-cream p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-gold-dark shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold-dark/70 font-bold">District & Special Courts</p>
                    <ul className="mt-2 space-y-1">
                      {city.districtCourts.map((dc) => (
                        <li key={dc} className="text-sm text-gray-700">• {dc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <div className="glass-cream p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <Scale className="h-6 w-6 text-gold-dark shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-dark/70 font-bold">Bar Council</p>
                  <p className="mt-1 text-base font-semibold text-gray-900">{city.localBar}</p>
                  <p className="mt-2 text-sm text-gray-500">Every NyaySevak lawyer in {city.name} is registered with and verified against the {city.localBar}.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-deep py-16 sm:py-20 dark-section-depth">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-border-card">
            <div className="bg-dark-deep rounded-[calc(1.25rem-1.5px)] p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow">
                Ready to Speak With a {city.name} Lawyer?
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-lg text-sm sm:text-base text-gray-400 leading-relaxed">
                Tell us about your matter in 30 seconds. We&apos;ll match you with a verified {city.name} lawyer within 24 hours. First step is a free case assessment.
              </p>
              <ContactButton className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 sm:px-10 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer">
                Book Your Assessment
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ — visible content mirroring the FAQPage schema (AEO) */}
      <section className="bg-dark py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-8">
            Frequently asked questions — lawyers in {city.name}
          </h2>
          <div className="space-y-4">
            {cityFaqs.map((f) => (
              <details key={f.question} className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-5">
                <summary className="cursor-pointer list-none text-sm sm:text-base font-semibold text-white flex items-start gap-2">
                  <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                  {f.question}
                </summary>
                <p className="mt-3 pl-6 text-sm text-gray-400 leading-relaxed">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks groups={relatedGroupsForCity(citySlug)} />
    </main>
  );
}
