import type { Metadata } from "next";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import { ArrowRight, MapPin, Landmark, ChevronRight } from "lucide-react";
import { cities, cityPracticeSlugs, cityPracticeLabels } from "@/data/cities";
import { SITE_URL } from "@/lib/site";

const url = `${SITE_URL}/lawyers`;

export const metadata: Metadata = {
  title: "Find Lawyers by City in India - Verified Advocates in Top Metros | NyaySevak",
  description:
    "Find the best verified lawyers across India's top cities — Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and Ahmedabad. Criminal, civil, divorce, property, and corporate advocates. Free first consultation.",
  keywords:
    "lawyer near me, lawyer in Delhi, lawyer in Mumbai, lawyer in Bangalore, lawyer in Chennai, lawyer in Hyderabad, lawyer in Pune, lawyer in Kolkata, lawyer in Ahmedabad, best lawyer India, verified advocate India, free legal consultation, NyaySevak",
  alternates: { canonical: url },
  openGraph: {
    title: "Find Lawyers by City Across India | NyaySevak",
    description: "Verified lawyers in Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Every practice area. Free consultation.",
    url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Lawyers by City in India | NyaySevak",
    description: "Verified advocates across India's top 8 cities. Free first consultation.",
  },
};

export default function LawyersIndexPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Find Lawyers by City in India",
    description: "Verified lawyers across India's top 8 metros — criminal, civil, family, property, corporate practice areas.",
    url,
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: cities.length,
      itemListElement: cities.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `Lawyers in ${c.name}`,
        url: `${SITE_URL}/lawyers/${c.slug}`,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Lawyers by City", item: url },
    ],
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="relative bg-dark-deep pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[10%] left-[5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 section-separator" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
            <span className="text-gold">Lawyers by City</span>
          </nav>
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">Local Legal Coverage</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white heading-glow tracking-tight max-w-4xl">
            Find Verified Lawyers in India&apos;s Top Cities
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl leading-relaxed">
            Bar-Council-verified lawyers across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and Ahmedabad — each with specialist panels for criminal, civil, family, property, and corporate matters, and direct filing capability at every relevant High Court and district court complex.
          </p>
          <div className="mt-8">
            <ContactButton className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </ContactButton>
          </div>
        </div>
      </section>

      {/* Cities grid */}
      <section className="bg-cream cream-pattern py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60 font-semibold mb-2">8 Metropolitan Regions</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 heading-glow-cream">
              Choose Your City
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <Link key={c.slug} href={`/lawyers/${c.slug}`} className="glass-cream p-5 sm:p-6 group hover:border-gold/30 transition-all duration-300">
                <div className="icon-box-cream h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-gold-dark transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{c.state}</p>
                <div className="mt-3 flex items-start gap-2">
                  <Landmark className="h-3.5 w-3.5 text-gold-dark/60 shrink-0 mt-0.5" strokeWidth={1.5} />
                  <p className="text-xs text-gray-500 leading-relaxed">{c.highCourt.name}</p>
                </div>
                <p className="mt-3 text-xs text-gray-500 leading-relaxed line-clamp-3">{c.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-gold-dark/60 group-hover:text-gold-dark transition-colors">
                  View lawyers
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City × practice grid for SEO internal linking */}
      <section className="bg-dark-deep py-16 sm:py-20 relative overflow-hidden dark-section-depth">
        <div className="absolute top-0 left-0 right-0 section-separator" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold">Direct Access</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-10">
            Find Lawyers by City and Practice Area
          </h2>
          <div className="space-y-8">
            {cities.map((c) => (
              <div key={c.slug}>
                <h3 className="text-sm font-semibold text-gold/80 mb-3 flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {c.name}, {c.state}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cityPracticeSlugs.map((p) => {
                    const label = cityPracticeLabels[p];
                    return (
                      <Link
                        key={p}
                        href={`/lawyers/${c.slug}/${p}`}
                        className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] text-gray-400 hover:text-gold hover:border-gold/30 transition-colors"
                      >
                        {label.title} in {c.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
