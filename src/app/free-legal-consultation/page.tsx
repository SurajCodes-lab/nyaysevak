import type { Metadata } from "next";
import IntentLandingRenderer from "@/components/IntentLandingRenderer";
import { intentLandings } from "@/data/intent-landings";
import { SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";

const SLUG = "free-legal-consultation";
const data = intentLandings.find((d) => d.slug === SLUG);

export const metadata: Metadata = data
  ? {
      title: data.title,
      description: data.metaDescription,
      keywords: [data.primaryKeyword, ...data.secondaryKeywords, "NyaySevak"].join(", "),
      alternates: { canonical: `${SITE_URL}/${SLUG}` },
      openGraph: {
        title: data.title,
        description: data.metaDescription,
        type: "website",
        url: `${SITE_URL}/${SLUG}`,
      },
      twitter: {
        card: "summary_large_image",
        title: data.title,
        description: data.metaDescription,
      },
    }
  : { title: "Not Found" };

export default function Page() {
  if (!data) notFound();
  const url = `${SITE_URL}/${SLUG}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: data.hero.h1, item: url },
    ],
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  // Service schema explicitly representing the free-consultation offer.
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free Legal Consultation",
    serviceType: "Lawyer Consultation",
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url,
    },
    audience: { "@type": "Audience", audienceType: "Indian residents seeking legal help" },
  };

  // Week 11: Speakable target for the AnswerBlock rendered by IntentLandingRenderer.
  const webPageJsonLd = data.quickAnswer
    ? {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: data.hero.h1,
        url,
        inLanguage: "en-IN",
        isAccessibleForFree: true,
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["#answer", "h1"] },
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {webPageJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      )}
      <IntentLandingRenderer data={data} />
    </>
  );
}
