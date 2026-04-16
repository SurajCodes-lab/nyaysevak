import type { Metadata } from "next";
import Platform from "@/components/Platform";

export const metadata: Metadata = {
  title: "How to Hire a Lawyer Online in India - Step by Step | NyaySevak Platform",
  description:
    "Learn how to hire a verified lawyer online in India through NyaySevak. Simple 4-step process: describe your case, get matched with verified advocates, book free consultation, proceed with representation. B2B & B2C legal services for individuals, startups & corporates.",
  keywords:
    "how to hire lawyer online India, how to find lawyer near me, online lawyer consultation process, best legal services platform India, B2B legal services, B2C legal services, hire advocate online, lawyer booking platform India, NyaySevak platform",
  alternates: { canonical: "https://nyaysevak.com/platform" },
  openGraph: {
    title: "How to Hire a Lawyer Online in India | NyaySevak",
    description: "Simple 4-step process to find & hire verified lawyers. Free first consultation. B2B + B2C legal services across all courts in India.",
    type: "website",
    url: "https://nyaysevak.com/platform",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com" },
    { "@type": "ListItem", position: 2, name: "How It Works", item: "https://nyaysevak.com/platform" },
  ],
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Platform />
    </main>
  );
}
