import type { Metadata } from "next";
import About from "@/components/About";
import Features from "@/components/Features";
import ContactButton from "@/components/ContactButton";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About NyaySevak - India's #1 Legal Services Platform | Verified Lawyers Across All Courts",
  description:
    "NyaySevak is India's most trusted legal platform connecting you with verified lawyers across Supreme Court, 25 High Courts, 700+ District Courts & all Tribunals. 29 practice areas, transparent pricing, free first consultation. Serving individuals & businesses pan-India.",
  keywords:
    "about NyaySevak, best legal services India, trusted lawyer platform, verified lawyer directory India, legal services platform, online legal consultation India, find lawyer near me, hire advocate online, pan-India legal coverage",
  alternates: { canonical: "https://nyaysevak.com/about" },
  openGraph: {
    title: "About NyaySevak - India's Most Trusted Legal Services Platform",
    description: "Verified lawyers across all courts in India. 29 practice areas. Free first consultation.",
    url: "https://nyaysevak.com/about",
    type: "website",
  },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://nyaysevak.com/about/#aboutpage",
  name: "About NyaySevak - India's #1 Legal Services Platform",
  description:
    "India's first complete legal ecosystem connecting citizens, businesses, and legal professionals across the entire Indian judicial system. Verified lawyers across Supreme Court, 25 High Courts, 700+ District Courts & all Tribunals.",
  url: "https://nyaysevak.com/about",
  mainEntity: { "@id": "https://nyaysevak.com/#organization" },
  isPartOf: { "@id": "https://nyaysevak.com/#website" },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".vision-text"],
  },
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-IN",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nyaysevak.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://nyaysevak.com/about",
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <About />

      <div className="section-separator" />

      <Features />

      <div className="section-separator" />

      <section className="relative bg-dark-deep py-20 lg:py-28 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow">
                Ready to Experience the NyaySevak Difference?
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-400 leading-relaxed">
                Get connected with verified legal professionals across India today.
              </p>
              <ContactButton
                className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 cursor-pointer"
              >
                Get Consultation
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
