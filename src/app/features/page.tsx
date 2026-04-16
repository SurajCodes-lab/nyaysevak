import type { Metadata } from "next";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Platform Features - Verified Lawyer Directory, Instant Booking & Legal AI | NyaySevak",
  description:
    "NyaySevak platform features: Bar Council verified lawyer directory, instant consultation booking, AI-powered lawyer matching, comprehensive legal guides, court information database, secure document vault, WhatsApp integration & 24/7 support. Find the best lawyer for your case.",
  keywords:
    "lawyer directory India, book lawyer online, find lawyer near me, verified advocate directory, legal consultation booking, legal guides India, court information database, AI lawyer matching, online legal platform India, NyaySevak features",
  alternates: { canonical: "https://nyaysevak.com/features" },
  openGraph: {
    title: "Platform Features - Find Best Lawyers in India | NyaySevak",
    description: "Verified lawyer directory, instant booking, AI matching, legal guides & more. Find the right lawyer for your case.",
    type: "website",
    url: "https://nyaysevak.com/features",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com" },
    { "@type": "ListItem", position: 2, name: "Features", item: "https://nyaysevak.com/features" },
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
