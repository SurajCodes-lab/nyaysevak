import type { Metadata } from "next";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import {
  ArrowRight, Landmark, MapPin, Scale, Building2, BadgeCheck,
  Phone, Star, Clock, ChevronRight, CheckCircle2, HelpCircle, Briefcase,
} from "lucide-react";
import { cities, cityPracticeSlugs, cityPracticeLabels, type CityPracticeSlug } from "@/data/cities";
import { cityPracticeContent } from "@/data/city-practice-content";
import { SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  // 8 cities × 5 practice areas = 40 static pages
  return cities.flatMap((city) =>
    cityPracticeSlugs.map((slug) => ({ city: city.slug, slug }))
  );
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string; slug: string }> }
): Promise<Metadata> {
  const { city: citySlug, slug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  const practice = (cityPracticeSlugs as readonly string[]).includes(slug)
    ? (slug as CityPracticeSlug)
    : null;
  if (!city || !practice) {
    return { title: "Not Found | NyaySevak", robots: { index: false, follow: false } };
  }
  const label = cityPracticeLabels[practice];
  const content = cityPracticeContent[`${citySlug}__${slug}`];
  const url = `${SITE_URL}/lawyers/${citySlug}/${slug}`;

  const title = `Best ${label.title} in ${city.name} - Verified Advocates | Free Consultation | NyaySevak`;
  const description = content
    ? `${content.lead.slice(0, 155)}…`
    : `Find the best ${label.keyword}s in ${city.name}, ${city.state}. Verified advocates for ${label.long.toLowerCase()} matters across ${city.highCourt.name} and district courts. Free first consultation. Call +91-9868666715.`;

  return {
    title,
    description,
    keywords: [
      `${label.keyword} in ${city.name.toLowerCase()}`,
      `best ${label.keyword} ${city.name.toLowerCase()}`,
      `${label.keyword} near me ${city.name.toLowerCase()}`,
      `top ${label.keyword} ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} ${label.keyword}`,
      `${label.title.toLowerCase()} ${city.name.toLowerCase()}`,
      `${label.short.toLowerCase()} advocate ${city.name.toLowerCase()}`,
      `${label.keyword} ${city.state.toLowerCase()}`,
      `affordable ${label.keyword} ${city.name.toLowerCase()}`,
      `online ${label.keyword} ${city.name.toLowerCase()}`,
      `${city.highCourt.name.toLowerCase()} ${label.keyword}`,
      ...city.neighbourhoods.slice(0, 5).map((n) => `${label.keyword} ${n.toLowerCase()}`),
      "verified lawyer India",
      "NyaySevak",
      "free legal consultation",
    ].join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: `Best ${label.title} in ${city.name} | Free Consultation | NyaySevak`,
      description: `Verified ${label.long.toLowerCase()}s serving ${city.name}, ${city.state}. ${label.short} matters across ${city.highCourt.name} and district courts. Free first consultation.`,
      type: "website",
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `Best ${label.title} in ${city.name} | NyaySevak`,
      description: `Verified ${label.keyword}s in ${city.name}. Free first consultation.`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function CityPracticePage(
  { params }: { params: Promise<{ city: string; slug: string }> }
) {
  const { city: citySlug, slug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  const practice = (cityPracticeSlugs as readonly string[]).includes(slug)
    ? (slug as CityPracticeSlug)
    : null;
  if (!city || !practice) notFound();

  const label = cityPracticeLabels[practice];
  const content = cityPracticeContent[`${citySlug}__${slug}`];
  if (!content) notFound();

  const url = `${SITE_URL}/lawyers/${citySlug}/${slug}`;

  // Other practice areas for this city (for cross-linking)
  const otherPractices = cityPracticeSlugs
    .filter((p) => p !== practice)
    .map((p) => ({ slug: p, label: cityPracticeLabels[p] }));

  // Sister cities for same practice (for cross-linking)
  const sisterCities = cities.filter((c) => c.slug !== citySlug).slice(0, 7);

  // ── Schema.org structured data ──
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Lawyers by City", item: `${SITE_URL}/lawyers` },
      { "@type": "ListItem", position: 3, name: city.name, item: `${SITE_URL}/lawyers/${citySlug}` },
      { "@type": "ListItem", position: 4, name: label.title, item: url },
    ],
  };

  const legalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `Best ${label.title}s in ${city.name} - NyaySevak`,
    description: content.lead,
    url,
    areaServed: {
      "@type": "City",
      name: city.name,
      "@id": `${SITE_URL}/lawyers/${citySlug}`,
      containedInPlace: { "@type": "State", name: city.state },
      geo: {
        "@type": "GeoCoordinates",
        latitude: city.geo.lat,
        longitude: city.geo.lng,
      },
    },
    provider: {
      "@type": "ProfessionalService",
      name: "NyaySevak",
      url: SITE_URL,
      telephone: "+91-9868666715",
    },
    serviceType: label.long,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: "Free first consultation",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "1247",
      reviewCount: "689",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${label.title} Services in ${city.name}`,
      itemListElement: content.caseTypes.map((ct) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: ct.title, description: ct.desc },
      })),
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${url}#localbusiness`,
    name: `NyaySevak — ${label.title}s in ${city.name}`,
    image: `${SITE_URL}/logo.png`,
    url,
    telephone: "+91-9868666715",
    email: "nyaysevak@gmail.com",
    priceRange: "Free - ₹₹₹",
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.state,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: city.geo.lat,
      longitude: city.geo.lng,
    },
    areaServed: { "@type": "City", name: city.name },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "1247",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "21:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "10:00", closes: "18:00" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `Best ${label.title} in ${city.name}`,
    url,
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-IN",
    isAccessibleForFree: true,
    reviewedBy: {
      "@type": "Organization",
      name: "NyaySevak Legal Team",
      url: `${SITE_URL}/about`,
    },
    about: {
      "@type": "Thing",
      name: `${label.long} in ${city.name}`,
      description: `${label.long.toLowerCase()} services across ${city.name}, ${city.state} — courts, fees, and local legal landscape.`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2"],
    },
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      {/* ===== Hero ===== */}
      <section className="relative bg-dark-deep pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 section-separator" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
            <span className="text-gray-500">Lawyers by City</span>
            <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
            <span className="text-gray-400">{city.name}</span>
            <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
            <span className="text-gold">{label.title}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start gap-6">
            <span className="hidden sm:flex h-20 w-20 lg:h-24 lg:w-24 shrink-0 items-center justify-center rounded-2xl icon-gold">
              <Scale className="h-10 w-10 text-black" strokeWidth={1.5} />
            </span>
            <div className="flex-1">
              <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">
                {city.name}, {city.state} · {label.long}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white heading-glow tracking-tight">
                Best {label.title}s in {city.name} — Verified Advocates
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl leading-relaxed">
                {content.lead}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  { Icon: BadgeCheck, label: "Bar Council Verified" },
                  { Icon: Clock, label: "Response in 24hrs" },
                  { Icon: Star, label: "4.8/5 Rating" },
                  { Icon: MapPin, label: `${city.name} Courts` },
                ].map((stat) => (
                  <span key={stat.label} className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                    <stat.Icon className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                    {stat.label}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
                <ContactButton className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer">
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </ContactButton>
                <a
                  href={`https://wa.me/919868666715?text=${encodeURIComponent(`Hi, I need a ${label.title.toLowerCase()} in ${city.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-6 py-4 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 transition-all duration-300"
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

      {/* ===== Local legal landscape ===== */}
      <section className="bg-cream cream-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-8 w-1 rounded-full bg-gold" />
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark font-semibold">
              {label.long} in {city.name} — Local Landscape
            </h2>
          </div>
          <div className="space-y-5 text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
            {content.landscape.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Courts handling this matter ===== */}
      <section className="relative bg-dark-deep py-16 sm:py-20 overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Jurisdictions</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow mb-3">
            Courts That Handle {label.short} Cases in {city.name}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-3xl mb-10">
            Our verified {city.name} {label.keyword}s appear regularly before each of the courts below, so your matter can be filed and pursued without jurisdictional confusion.
          </p>

          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
            {content.courtsForThisMatter.map((court) => (
              <div key={court} className="glass-card !rounded-xl p-4 sm:p-5">
                <div className="flex items-start gap-3">
                  <Landmark className="mt-0.5 h-5 w-5 shrink-0 text-gold/70" strokeWidth={1.5} />
                  <span className="text-sm text-gray-200">{court}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Link out to the specific High Court page */}
          <div className="mt-8">
            <Link
              href={`/courts/${city.highCourt.slug}`}
              className="inline-flex items-center gap-2 text-sm text-gold/80 hover:text-gold transition-colors"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
              Find lawyers at {city.highCourt.name}
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Case types handled ===== */}
      <section className="bg-cream cream-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60 font-semibold mb-2">What We Handle</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 heading-glow-cream">
              {label.title} Case Types in {city.name}
            </h2>
          </div>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {content.caseTypes.map((c, i) => (
              <div key={c.title} className="glass-cream p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl icon-box-cream text-sm font-heading font-bold text-gold-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900">{c.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-gray-500">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Areas / neighbourhoods served ===== */}
      <section className="bg-dark-deep py-14 sm:py-16 relative overflow-hidden dark-section-depth">
        <div className="absolute top-0 left-0 right-0 section-separator" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Coverage Across {city.name}</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-3">
            Areas We Serve in {city.name}
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mb-8">
            Our {city.name} {label.keyword}s cover every major neighbourhood and the surrounding metropolitan area, so you can meet your lawyer near you.
          </p>
          <div className="flex flex-wrap gap-2">
            {city.neighbourhoods.map((n) => (
              <span
                key={n}
                className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] text-gray-400"
              >
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Typical fees ===== */}
      <section className="bg-cream cream-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60 font-semibold">Transparent Pricing</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 heading-glow-cream mb-8">
            Typical {label.title} Fees in {city.name}
          </h2>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-3">
            {[
              { label: "Consultation", value: content.feeRange.consultation, Icon: Briefcase },
              { label: "District Court", value: content.feeRange.district, Icon: Landmark },
              { label: city.highCourt.name, value: content.feeRange.highCourt, Icon: Scale },
            ].map((card) => (
              <div key={card.label} className="glass-cream p-5 sm:p-6">
                <div className="icon-box-cream h-10 w-10 rounded-xl flex items-center justify-center mb-3">
                  <card.Icon className="h-4 w-4 text-gold-dark" strokeWidth={1.5} />
                </div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-gold-dark/70 font-bold">{card.label}</p>
                <p className="mt-1 text-sm sm:text-base font-semibold text-gray-900">{card.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-gold/20 bg-gold/5 p-5 sm:p-6">
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong className="text-gold-dark font-semibold">Local note:</strong> {content.feeRange.note}
            </p>
          </div>
        </div>
      </section>

      {/* ===== How it works in this city ===== */}
      <section className="bg-dark py-16 sm:py-20 relative overflow-hidden">
        <div className="glow-pulse pointer-events-none absolute bottom-[10%] right-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Get Started</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow mb-10">
            How to Hire a {label.title} in {city.name}
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                step: "Describe your matter",
                desc: `Share the facts of your ${label.short.toLowerCase()} matter and your location in ${city.name} — no charge, no obligation.`,
              },
              {
                step: "Get matched in 24 hours",
                desc: `We match you with a Bar-Council-verified ${label.keyword} who regularly appears before ${city.highCourt.name} and the relevant ${city.name} courts.`,
              },
              {
                step: "Book a free consultation",
                desc: `Speak with your lawyer by phone, video, or in-person meeting in ${city.name}. Agree fees upfront — no surprises.`,
              },
            ].map((step, i) => (
              <div key={step.step} className="glass-card p-5 sm:p-6 relative">
                <span className="absolute top-3 right-4 text-[60px] font-heading font-bold text-gold/[0.05] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl icon-gold text-sm font-heading font-bold text-black mb-4">
                    {i + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-2">{step.step}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Local notes ===== */}
      <section className="bg-cream cream-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60 font-semibold">Local Pro Tips</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 heading-glow-cream mb-8">
            What to Know About {label.short} Matters in {city.name}
          </h2>
          <div className="space-y-3">
            {content.localNotes.map((n, i) => (
              <div key={i} className="flex items-start gap-3 glass-cream p-4 sm:p-5">
                <CheckCircle2 className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm text-gray-700 leading-relaxed">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section className="bg-dark-deep py-16 sm:py-20 relative overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-2">Common Questions</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">
              {label.title} in {city.name} — FAQs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.faqs.map((faq, i) => (
              <div key={i} className="faq-card-dark group">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 h-8 w-8 rounded-lg bg-gold/[0.08] border border-gold/10 flex items-center justify-center">
                    <HelpCircle className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2 group-hover:text-gold transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cross-links: other practice areas in this city ===== */}
      <section className="bg-dark py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">More in {city.name}</p>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-8">
            Other Legal Help in {city.name}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherPractices.map((p) => (
              <Link
                key={p.slug}
                href={`/lawyers/${citySlug}/${p.slug}`}
                className="glass-card !rounded-xl p-4 sm:p-5 group hover:border-gold/30 transition-all duration-300"
              >
                <p className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                  {p.label.title}s in {city.name}
                </p>
                <p className="mt-1 text-xs text-gray-500">View local {p.label.keyword}s</p>
                <span className="mt-3 inline-flex items-center gap-1 text-[10px] text-gold/50 group-hover:text-gold transition-colors font-semibold uppercase tracking-widest">
                  Learn more
                  <ArrowRight className="h-3 w-3" strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cross-links: same practice in other cities ===== */}
      <section className="bg-dark-deep py-14 sm:py-16 border-t border-white/[0.04]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">By City</p>
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-white mb-8">
            {label.title}s in Other Top Indian Cities
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {sisterCities.map((c) => (
              <Link
                key={c.slug}
                href={`/lawyers/${c.slug}/${practice}`}
                className="glass-card !rounded-xl p-4 group hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold/60" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-white group-hover:text-gold transition-colors">
                    {label.title} in {c.name}
                  </p>
                </div>
                <p className="mt-1 text-xs text-gray-500 pl-6">{c.state}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`/practice-areas/${practice}`} className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors">
              View {label.title} practice area
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-dark-deep py-16 sm:py-20 dark-section-depth">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="gradient-border-card">
            <div className="bg-dark-deep rounded-[calc(1.25rem-1.5px)] p-8 sm:p-10 lg:p-14">
              <div className="icon-gold h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-7 w-7 text-black" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">
                Talk to a {label.title} in {city.name} Today
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-xl text-sm sm:text-base text-gray-400 leading-relaxed">
                Verified {city.name} {label.keyword}s are online now. Your first consultation is free — no obligation, no hidden fees.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
                <ContactButton className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 sm:px-10 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer">
                  Get Free Consultation
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </ContactButton>
                <a
                  href="tel:+919868666715"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-gold/40 px-6 sm:px-8 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10 transition-all duration-300"
                >
                  <Phone className="h-4 w-4" strokeWidth={2} />
                  Call +91-9868666715
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
