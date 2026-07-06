import type { Metadata } from "next";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Platform Features — Verified Lawyer Matching",
  description:
    "NyaySevak platform features: Bar Council verified lawyer matching, instant consultation booking, comprehensive legal guides, court information database, secure document storage, WhatsApp integration & 24/7 support. Get matched with the right lawyer for your case.",
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

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Features />
    </main>
  );
}
