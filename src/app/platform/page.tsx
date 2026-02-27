import type { Metadata } from "next";
import Platform from "@/components/Platform";

export const metadata: Metadata = {
  title: "How NyaySevak Works | B2B & B2C Legal Services Platform India",
  description:
    "Discover how NyaySevak's dual B2B and B2C legal platform works. Connect with verified lawyers, book consultations, and resolve legal matters across every court and tribunal in India. Serving individuals, families, startups, corporates, and law firms.",
  keywords:
    "legal services platform India, B2B legal services, B2C legal services, online lawyer consultation, hire lawyer India, legal ecosystem, court representation India, NyaySevak",
  openGraph: {
    title: "How NyaySevak Works | India's First Complete Legal Ecosystem",
    description:
      "One platform for every legal need. B2C services for individuals and B2B solutions for businesses — covering Supreme Court, High Courts, District Courts, Tribunals, and Arbitration across India.",
    type: "website",
  },
};

export default function PlatformPage() {
  return (
    <main className="min-h-screen pt-20">
      <Platform />
    </main>
  );
}
