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
  ],
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
