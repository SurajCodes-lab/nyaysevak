import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Get Legal Consultation | NyaySevak",
  description:
    "Get in touch with NyaySevak for legal consultation. Available 24/7 for emergencies. Connect with verified lawyers across India. Call +91 98686 66715.",
  keywords:
    "contact NyaySevak, legal consultation India, hire lawyer online, legal help India, emergency legal help, free legal consultation, lawyer near me, book lawyer appointment",
  alternates: { canonical: "https://nyaysevak.com/contact" },
  openGraph: { url: "https://nyaysevak.com/contact" },
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
