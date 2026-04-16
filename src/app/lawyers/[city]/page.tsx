import type { Metadata } from "next";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import { ArrowRight, MapPin, Landmark, Scale, Briefcase, ChevronRight } from "lucide-react";
import { cities, cityPracticeSlugs, cityPracticeLabels } from "@/data/cities";
import { cityPracticeContent } from "@/data/city-practice-content";
import { SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return { title: "Not Found | NyaySevak", robots: { index: false, follow: false } };

  const title = `Best Lawyers in ${city.name} - Verified Advocates Across Every Practice Area | NyaySevak`;
  const description = `Find the best verified lawyers in ${city.name}, ${city.state}. Criminal, civil, divorce, property, and corporate advocates. Covering ${city.highCourt.name} and all ${city.name} district courts. Free first consultation.`;
  const url = `${SITE_URL}/lawyers/${citySlug}`;

  return {
    title,
    description,
    keywords: [
      `lawyer in ${city.name.toLowerCase()}`,
      `best lawyer ${city.name.toLowerCase()}`,
      `advocate ${city.name.toLowerCase()}`,
      `lawyer near me ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} lawyers`,
      `${city.name.toLowerCase()} advocate`,
      `${city.highCourt.name.toLowerCase()} lawyer`,
      `free legal consultation ${city.name.toLowerCase()}`,
      ...city.neighbourhoods.slice(0, 6).map((n) => `lawyer ${n.toLowerCase()}`),
      "verified lawyer India",
      "NyaySevak",
    ].join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: `Best Lawyers in ${city.name} | Free Consultation | NyaySevak`,
      description: `Verified advocates across ${city.name}, ${city.state}. Every practice area. Free first consultation.`,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Best Lawyers in ${city.name} | NyaySevak`,
      description: `Find verified ${city.name} advocates. Free first consultation.`,
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
      numberOfItems: cityPracticeSlugs.length,
      itemListElement: cityPracticeSlugs.map((p, i) => {
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

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `NyaySevak — Lawyers in ${city.name}`,
    image: `${SITE_URL}/logo.png`,
    url,
    telephone: "+91-9868666715",
    email: "nyaysevak@gmail.com",
    priceRange: "Free - ₹₹₹",
    address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: city.state, addressCountry: "IN" },
    geo: { "@type": "GeoCoordinates", latitude: city.geo.lat, longitude: city.geo.lng },
    areaServed: { "@type": "City", name: city.name },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", bestRating: "5", ratingCount: "1247" },
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

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
              Book Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </ContactButton>
          </div>
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
            {cityPracticeSlugs.map((p) => {
              const label = cityPracticeLabels[p];
              const content = cityPracticeContent[`${citySlug}__${p}`];
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
                    View lawyers
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
                Tell us about your matter in 30 seconds. We&apos;ll match you with a verified {city.name} lawyer within 24 hours. First consultation is free.
              </p>
              <ContactButton className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 sm:px-10 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer">
                Get Free Consultation
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
