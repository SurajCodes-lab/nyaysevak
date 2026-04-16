import type { Metadata } from "next";
import Link from "next/link";
import Services from "@/components/Services";
import ContactButton from "@/components/ContactButton";
import { ArrowRight } from "lucide-react";
import { allServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Legal Services India - Lawyer Consultation, Corporate Advisory & More | NyaySevak",
  description:
    "Best legal services in India for individuals & businesses. Online lawyer consultation, find & hire verified advocates, document drafting, corporate legal advisory, compliance management, contract management, IP registration, litigation support. Free first consultation.",
  keywords:
    "legal services India, lawyer consultation online, find lawyer near me, best advocate India, corporate legal advisory, compliance management, contract management, IP management, B2B legal services, B2C legal services, online lawyer India, legal help online, hire lawyer online, verified lawyer India, affordable legal services, free legal consultation",
  alternates: { canonical: "https://nyaysevak.com/services" },
  openGraph: {
    title: "Legal Services India - B2B & B2C Solutions | NyaySevak",
    description: "India's most comprehensive legal services platform. Lawyer consultation, document services, corporate advisory & more. Free first consultation.",
    url: "https://nyaysevak.com/services",
    type: "website",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://nyaysevak.com/services" },
  ],
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Legal Services India - B2B & B2C Solutions",
  description: "Comprehensive legal services for individuals and businesses across India.",
  url: "https://nyaysevak.com/services",
  isPartOf: { "@id": "https://nyaysevak.com/#website" },
  provider: { "@id": "https://nyaysevak.com/#organization" },
  mainEntity: {
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: allServices.length,
    itemListElement: allServices.map((service, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: service.title,
      description: service.description,
      url: `https://nyaysevak.com/services/${service.slug}`,
    })),
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Week 5: Keyword-rich intro prose (500+ words) above the Services component */}
      <section className="bg-cream cream-pattern py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1 rounded-full bg-gold" />
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark font-semibold">
              Legal Services for Individuals and Businesses in India
            </h2>
          </div>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              NyaySevak offers two parallel tracks of legal services — <strong className="text-gray-900">B2C (for individuals, families, and small proprietors)</strong> and <strong className="text-gray-900">B2B (for companies, LLPs, and corporate enterprises)</strong>. Both tracks connect you with Bar Council verified advocates, but the scope, fee structure, engagement model, and regulatory expertise differ significantly. Choosing the right track — and the right service within it — is the first step to getting effective legal help.
            </p>
            <p>
              <strong className="text-gray-900">For individuals</strong>, our most-used services are <Link href="/services/lawyer-consultation" className="text-gold-dark hover:text-gold transition-colors font-semibold">online lawyer consultation</Link> (connect with a verified advocate within 24 hours for any legal matter), <Link href="/services/find-hire-lawyers" className="text-gold-dark hover:text-gold transition-colors font-semibold">find &amp; hire lawyers</Link> (searchable directory by specialisation, court, location), <Link href="/services/document-services" className="text-gold-dark hover:text-gold transition-colors font-semibold">document services</Link> (agreements, affidavits, sale deeds, wills, legal notices), <Link href="/services/legal-aid" className="text-gold-dark hover:text-gold transition-colors font-semibold">free legal aid</Link> for eligible citizens, and <Link href="/services/e-filing-assistance" className="text-gold-dark hover:text-gold transition-colors font-semibold">e-filing assistance</Link> for court submissions. Whether you need a criminal lawyer for bail, a divorce lawyer for matrimonial matters, a property lawyer for title disputes, or a consumer lawyer for product or service deficiency — we have verified specialists for each. First consultation is always free.
            </p>
            <p>
              <strong className="text-gray-900">For businesses</strong>, we offer <Link href="/services/corporate-legal-advisory" className="text-gold-dark hover:text-gold transition-colors font-semibold">corporate legal advisory</Link> (dedicated legal teams tailored to your enterprise size), <Link href="/services/compliance-management" className="text-gold-dark hover:text-gold transition-colors font-semibold">compliance management</Link> (automated tracking of GST, MCA, labour-law and industry-specific filings), <Link href="/services/contract-management" className="text-gold-dark hover:text-gold transition-colors font-semibold">contract management</Link> (end-to-end drafting, review, and lifecycle tracking), <Link href="/services/ip-management" className="text-gold-dark hover:text-gold transition-colors font-semibold">IP management</Link> (trademark, patent, copyright filings and enforcement), <Link href="/services/litigation-management" className="text-gold-dark hover:text-gold transition-colors font-semibold">litigation management</Link> (centralised tracking across jurisdictions), and <Link href="/services/mergers-acquisitions-support" className="text-gold-dark hover:text-gold transition-colors font-semibold">M&amp;A support</Link> (due diligence, transaction documents, regulatory approvals). Enterprise engagements are structured on retainer, project, or hourly-rate models depending on the scope and visibility required.
            </p>
            <p>
              The advantage of using a platform like NyaySevak rather than searching for a lawyer cold is transparency: every lawyer&apos;s Bar Council registration is verified, their fees are displayed upfront (no hidden commissions, no opaque matching), and your first consultation is free regardless of which lawyer you choose. For businesses, we offer integrated dashboards, compliance calendars, and legal MIS reports that make it easy to manage your entire legal function through a single interface. Browse the service catalogue below — or if you already know the practice area you need, visit our <Link href="/practice-areas" className="text-gold-dark hover:text-gold transition-colors font-semibold">29 practice areas</Link> directly, or find a lawyer in your <Link href="/lawyers" className="text-gold-dark hover:text-gold transition-colors font-semibold">city</Link>.
            </p>
          </div>
        </div>
      </section>

      <Services />

      <div className="section-separator" />

      <section className="relative bg-dark-deep py-20 lg:py-28 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow">
                Need a Customized Legal Solution?
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-400 leading-relaxed">
                Tell us about your legal needs and we&apos;ll connect you with the right expert.
              </p>
              <ContactButton
                className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 cursor-pointer"
              >
                Contact Us Today
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </ContactButton>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to Practice Areas — expanded */}
      <section className="bg-dark py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-3">
            Browse by Specialization
          </p>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-8">
            Explore Our Practice Areas
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {[
              { label: "Criminal Law", slug: "criminal-law" },
              { label: "Family & Divorce Law", slug: "family-matrimonial" },
              { label: "Property & Real Estate", slug: "property-real-estate" },
              { label: "Corporate & Business", slug: "corporate-business" },
              { label: "Tax Law", slug: "tax-law" },
              { label: "Cyber Law", slug: "cyber-law" },
              { label: "Consumer Protection", slug: "consumer-protection" },
              { label: "Labour & Employment", slug: "labour-employment" },
              { label: "Banking & Finance", slug: "banking-finance" },
              { label: "Intellectual Property", slug: "intellectual-property" },
              { label: "CBI Cases", slug: "cbi-cases" },
              { label: "ED Cases", slug: "ed-cases" },
              { label: "NDPS Cases", slug: "ndps-cases" },
              { label: "Civil Law", slug: "civil-law" },
              { label: "Arbitration & ADR", slug: "arbitration-adr" },
              { label: "Constitutional Law", slug: "constitutional-law" },
            ].map((area) => (
              <Link
                key={area.slug}
                href={`/practice-areas/${area.slug}`}
                className="rounded-full border border-gold/15 bg-gold/[0.04] px-4 py-2 text-xs sm:text-sm text-gray-300 font-medium transition-all duration-200 hover:border-gold/40 hover:text-gold hover:bg-gold/[0.08]"
              >
                {area.label}
              </Link>
            ))}
          </div>
          <Link
            href="/practice-areas"
            className="inline-flex items-center gap-2 text-sm text-gold/60 hover:text-gold transition-colors"
          >
            View All 29 Practice Areas
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Cross-link to Courts */}
      <section className="bg-dark-deep py-16 lg:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-5xl px-6 lg:px-8 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-3">
            Find Lawyers by Court
          </p>
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-white mb-8">
            Court Coverage Across India
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
            {[
              { label: "Delhi High Court", href: "/courts/delhi-high-court" },
              { label: "Bombay High Court", href: "/courts/bombay-high-court" },
              { label: "Madras High Court", href: "/courts/madras-high-court" },
              { label: "Calcutta High Court", href: "/courts/calcutta-high-court" },
              { label: "Karnataka High Court", href: "/courts/karnataka-high-court" },
              { label: "Allahabad High Court", href: "/courts/allahabad-high-court" },
              { label: "Gujarat High Court", href: "/courts/gujarat-high-court" },
              { label: "NCLT & Corporate Tribunals", href: "/courts/financial-corporate-tribunals" },
              { label: "Consumer Forums", href: "/courts/consumer-labour-tribunals" },
              { label: "Tax Tribunals", href: "/courts/tax-tribunals" },
            ].map((court) => (
              <Link
                key={court.label}
                href={court.href}
                className="rounded-full border border-gold/15 bg-gold/[0.04] px-4 py-2 text-xs sm:text-sm text-gray-300 font-medium transition-all duration-200 hover:border-gold/40 hover:text-gold hover:bg-gold/[0.08]"
              >
                {court.label}
              </Link>
            ))}
          </div>
          <Link
            href="/courts"
            className="inline-flex items-center gap-2 text-sm text-gold/60 hover:text-gold transition-colors"
          >
            View All Courts & Tribunals
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="bg-dark py-12 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-xs text-gray-600 leading-relaxed">
            NyaySevak offers the most comprehensive legal services in India for both individuals (B2C) and businesses (B2B). Our B2C services include online lawyer consultation, find &amp; hire verified lawyers, legal document drafting &amp; review, free legal aid, legal knowledge resources, and e-filing assistance. For businesses, we provide corporate legal advisory, compliance management, contract management, IP management, litigation management, and M&amp;A support. All services are delivered by Bar Council verified professionals with transparent pricing and free first consultation. Available across Supreme Court, 25 High Courts, 700+ District Courts, and all Tribunals in India.
          </p>
        </div>
      </section>
    </main>
  );
}
