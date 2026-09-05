import type { Metadata } from "next";
import Features from "@/components/Features";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Platform Features — Lawyer Matching",
  description:
    "Bar Council-verified lawyer matching, instant booking, a court database, secure documents, WhatsApp integration and 24/7 support.",
  keywords:
    "find a lawyer India, book lawyer online, lawyer near me, verified advocate India, legal consultation booking, legal guides India, court information database, lawyer matching India, online legal platform India, NyaySevak features",
  alternates: { canonical: "https://www.nyaysevak.com/features" },
  openGraph: {
    title: "Platform Features - Find Best Lawyers in India | NyaySevak",
    description: "Verified lawyer matching, consultation booking, legal guides & more. Get matched with the right lawyer for your case.",
    type: "website",
    url: "https://www.nyaysevak.com/features",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nyaysevak.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://www.nyaysevak.com/features" },
  ],
};

const featuresFaqs = [
  {
    question: "What makes NyaySevak different from a lawyer directory?",
    answer:
      "We don't advertise, rank, or promote individual lawyers — Bar Council of India rules prohibit that, and directories that do it leave you guessing. Instead, you tell us about your matter, we diagnose it in a free case assessment, and we match you with a Bar-Council-verified advocate who handles exactly that kind of case in your city.",
  },
  {
    question: "How does lawyer verification work?",
    answer:
      "Every advocate in our network is verified against their Bar Council enrolment before we make any introduction. We also confirm their practice areas and the courts they regularly appear in, so the match you receive is based on verified credentials — not paid listings.",
  },
  {
    question: "Is NyaySevak free to use?",
    answer:
      "Yes. The platform — including the case assessment, legal guides, court information, and legal tools — is free to use. If you choose to engage an advocate after being matched, their professional fees are discussed and agreed directly with them in writing before any work begins.",
  },
  {
    question: "How do I get started?",
    answer:
      "Submit the case assessment form, call +91 98686 66715, or message us on WhatsApp. You get a callback within 24 hours (Mon–Sat 9:00 AM–9:00 PM, Sun 10:00 AM–6:00 PM) with a diagnosis of your matter, a next-step plan, and an introduction to a verified advocate.",
  },
];

const featuresFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: featuresFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresFaqJsonLd) }}
      />
      <Features />

      {/* ===== FAQs ===== */}
      <section
        aria-label="Frequently asked questions about the NyaySevak platform"
        className="bg-dark-deep py-16 sm:py-20 relative overflow-hidden dark-section-depth"
      >
        <div className="glow-pulse pointer-events-none absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-2">
              Common Questions
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">
              How the Platform Works — FAQs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuresFaqs.map((faq, i) => (
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
    </main>
  );
}
