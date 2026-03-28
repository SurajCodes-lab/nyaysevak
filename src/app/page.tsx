import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import PlatformBanner from "@/components/PlatformBanner";
import PracticeAreas from "@/components/PracticeAreas";
import Courts from "@/components/Courts";
import FeaturesPreview from "@/components/FeaturesPreview";
import Contact from "@/components/Contact";

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://nyaysevak.com/#webpage",
  name: "NyaySevak - Defending Your Rights | India's Premier Legal Services Platform",
  description:
    "India's first complete legal ecosystem. Access Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals & Arbitration centres. Complete A-Z legal services for individuals and businesses.",
  url: "https://nyaysevak.com",
  isPartOf: { "@id": "https://nyaysevak.com/#website" },
  about: { "@id": "https://nyaysevak.com/#organization" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://nyaysevak.com/logo.png",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".hero-entrance-scale"],
  },
};

const homepageFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NyaySevak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NyaySevak is India's first complete legal ecosystem that connects citizens and businesses with verified lawyers across the Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals, and Arbitration centres. We offer both B2B and B2C legal services covering 29 practice areas.",
      },
    },
    {
      "@type": "Question",
      name: "How can I find a lawyer on NyaySevak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can browse our verified lawyer directory by practice area, court, location, or specialization. Each lawyer profile includes Bar Council verification, client ratings, experience details, and transparent pricing. You can book an instant or scheduled consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What legal services does NyaySevak offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NyaySevak offers comprehensive legal services including lawyer consultation, find & hire lawyers, document services, legal aid, e-filing assistance, corporate legal advisory, compliance management, contract management, IP management, litigation management, and M&A support.",
      },
    },
    {
      "@type": "Question",
      name: "Does NyaySevak cover courts across all of India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, NyaySevak provides pan-India coverage including the Supreme Court of India, all 25 High Courts, 700+ District Courts across 36 States and UTs, 20+ specialized Tribunals (NCLT, NCLAT, NGT, RERA, etc.), and all major Arbitration & ADR centres.",
      },
    },
    {
      "@type": "Question",
      name: "Is the first consultation free on NyaySevak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, NyaySevak offers a free first consultation for new clients. You can connect with verified legal professionals via secure video, audio, or chat channels to discuss your legal matter before proceeding.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a lawyer cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lawyer fees in India vary by specialization, court level, and case complexity. District Court lawyers typically charge ₹5,000-₹25,000 per hearing, High Court lawyers ₹15,000-₹1,00,000, and Supreme Court advocates ₹50,000-₹5,00,000+. NyaySevak offers transparent pricing with no hidden fees, and your first consultation is free.",
      },
    },
    {
      "@type": "Question",
      name: "How do I file a case in Indian court?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To file a case in India: (1) Consult a lawyer to assess your matter, (2) Prepare the plaint/complaint with supporting documents, (3) Pay the court fees, (4) File at the appropriate court based on jurisdiction. NyaySevak handles the entire process — from document preparation to e-filing — so you don't need to visit the court yourself.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best legal services platform in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NyaySevak is India's most comprehensive legal services platform, covering the Supreme Court, all 25 High Courts, 700+ District Courts, and all Tribunals. Unlike other platforms, NyaySevak offers end-to-end services including lawyer matching, document preparation, e-filing, and court representation across 29 practice areas with transparent pricing.",
      },
    },
  ],
};

// AEO: HowTo schema for featured snippets and AI answers
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Hire a Lawyer in India Through NyaySevak",
  description:
    "Step-by-step guide to finding and hiring a verified lawyer in India using the NyaySevak platform. Get matched with the right legal expert for your specific case.",
  totalTime: "PT15M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: "0",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Describe Your Legal Matter",
      text: "Visit NyaySevak and fill in the free consultation form with details about your legal issue — property dispute, criminal matter, family case, corporate need, or any other concern. This helps us understand your requirements.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Get Matched With a Verified Lawyer",
      text: "Our team reviews your case and matches you with a Bar Council verified lawyer who specializes in your specific legal area and practices in the relevant court jurisdiction.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Book Your Free Consultation",
      text: "Schedule a free first consultation via secure video call, phone, or chat. Discuss your case, understand your legal options, and get a transparent fee quote with no hidden charges.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Proceed With Legal Representation",
      text: "If satisfied, engage the lawyer for full representation. NyaySevak handles document preparation, court filing, and case tracking while you stay updated through our platform.",
    },
  ],
};

// GEO: Enhanced E-E-A-T signals for AI search engines
const geoAuthorityJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://nyaysevak.com/#authority",
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: "#main-content",
  },
  reviewedBy: {
    "@type": "Organization",
    name: "NyaySevak Legal Team",
    url: "https://nyaysevak.com/about",
  },
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-IN",
  isAccessibleForFree: true,
  creditText: "NyaySevak - India's Premier Legal Services Platform",
  copyrightHolder: { "@id": "https://nyaysevak.com/#organization" },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-deep">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoAuthorityJsonLd) }}
      />
      <Hero />
      <StatsMarquee />
      <About />
      <Services />
      <PlatformBanner />
      <PracticeAreas />
      <Courts />
      <FeaturesPreview />
      <Contact />
    </main>
  );
}
