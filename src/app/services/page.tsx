import type { Metadata } from "next";
import Link from "next/link";
import Services from "@/components/Services";
import ContactButton from "@/components/ContactButton";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Services - B2B & B2C Solutions | NyaySevak",
  description:
    "Comprehensive legal services for individuals and businesses. Lawyer consultation, document services, corporate advisory, compliance management, contract management, IP management & more.",
  keywords:
    "legal services India, lawyer consultation, corporate legal advisory, compliance management, contract management, IP management, B2B legal services, B2C legal services, online lawyer India, legal help online",
  alternates: { canonical: "https://nyaysevak.com/services" },
  openGraph: { url: "https://nyaysevak.com/services" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://nyaysevak.com/services" },
  ],
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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

      {/* Cross-link to Practice Areas */}
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
              { label: "Family Law", slug: "family-matrimonial" },
              { label: "Property Law", slug: "property-real-estate" },
              { label: "Corporate Law", slug: "corporate-business" },
              { label: "Tax Law", slug: "tax" },
              { label: "Cyber Law", slug: "cyber" },
              { label: "Consumer Protection", slug: "consumer-protection" },
              { label: "Labour Law", slug: "labour-employment" },
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
    </main>
  );
}
