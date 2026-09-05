import type { Metadata } from "next";
import Contact from "@/components/Contact";
import { HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact NyaySevak — Talk to a Lawyer",
  description:
    "Reach NyaySevak for a free case assessment — criminal, divorce, property, corporate, cyber and civil matters. Response within four hours, pan-India.",
  keywords:
    "free case assessment, talk to lawyer online, legal consultation India, hire lawyer online, emergency lawyer India, free case assessment lawyer, book lawyer appointment, legal help near me, lawyer phone consultation, NyaySevak contact",
  alternates: { canonical: "https://www.nyaysevak.com/contact" },
  openGraph: {
    title: "Case Assessment - Talk to a Verified Lawyer Now | NyaySevak",
    description: "Get free case assessment from verified lawyers across India. Call +91 98686 66715. 24/7 for emergencies.",
    url: "https://www.nyaysevak.com/contact",
    type: "website",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact NyaySevak",
  description:
    "Get in touch with NyaySevak for legal consultation. Available 24/7 for emergencies.",
  url: "https://www.nyaysevak.com/contact",
  mainEntity: {
    "@type": "Organization",
    name: "NyaySevak",
    telephone: "+91-9868666715",
    email: "nyaysevak@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nyaysevak.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.nyaysevak.com/contact" },
  ],
};

const contactFaqs = [
  {
    question: "How quickly will I get a callback?",
    answer:
      "We call you back within 24 hours of receiving your request — usually much sooner during working hours (Mon–Sat 9:00 AM–9:00 PM, Sun 10:00 AM–6:00 PM). For urgent matters, call or WhatsApp us directly at +91 98686 66715.",
  },
  {
    question: "Is the case assessment really free?",
    answer:
      "Yes. The case assessment — a diagnosis of your legal matter, a clear next-step plan, and matching with a Bar-Council-verified advocate — is completely free with no obligation. If you decide to engage an advocate, professional fees are discussed and agreed directly with them in writing before any work begins.",
  },
  {
    question: "How does NyaySevak match me with a lawyer?",
    answer:
      "We review the details you share, identify the practice area and court your matter belongs to, and connect you with a Bar-Council-verified advocate who handles exactly that kind of case in your city. You speak with the advocate directly — we do not advertise or rank individual lawyers.",
  },
  {
    question: "Which cities and courts do you cover?",
    answer:
      "We currently cover 11+ cities including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata and the wider NCR (Noida, Gurgaon, Ghaziabad, Faridabad), across forums from district courts and tribunals to High Courts and the Supreme Court of India. If your city isn't listed, submit the form anyway — we will try to connect you with an advocate near you.",
  },
];

const contactFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: contactFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactFaqJsonLd) }}
      />
      <Contact headingLevel="h1" />

      {/* ===== FAQs ===== */}
      <section
        aria-label="Frequently asked questions about contacting NyaySevak"
        className="bg-dark-deep py-16 sm:py-20 relative overflow-hidden dark-section-depth"
      >
        <div className="glow-pulse pointer-events-none absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-2">
              Common Questions
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">
              Before You Reach Out — FAQs
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {contactFaqs.map((faq, i) => (
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
