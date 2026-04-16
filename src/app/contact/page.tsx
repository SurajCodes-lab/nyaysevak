import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Free Legal Consultation - Talk to a Lawyer Now | NyaySevak",
  description:
    "Get free legal consultation from verified lawyers. Call +91 98686 66715 or fill the form. Available for criminal, divorce, property, corporate, cyber crime & all legal matters. 24/7 emergency legal help across India.",
  keywords:
    "free legal consultation, talk to lawyer online, legal consultation India, hire lawyer online, emergency lawyer India, free lawyer advice, book lawyer appointment, legal help near me, lawyer phone consultation, NyaySevak contact",
  alternates: { canonical: "https://nyaysevak.com/contact" },
  openGraph: {
    title: "Free Legal Consultation - Talk to a Verified Lawyer Now | NyaySevak",
    description: "Get free first consultation from verified lawyers across India. Call +91 98686 66715. 24/7 for emergencies.",
    url: "https://nyaysevak.com/contact",
    type: "website",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact NyaySevak",
  description:
    "Get in touch with NyaySevak for legal consultation. Available 24/7 for emergencies.",
  url: "https://nyaysevak.com/contact",
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://nyaysevak.com/contact" },
  ],
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
      <Contact />
    </main>
  );
}
