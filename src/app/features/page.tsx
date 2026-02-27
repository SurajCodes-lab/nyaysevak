import type { Metadata } from "next";
import Features from "@/components/Features";

export const metadata: Metadata = {
  title: "Features | Lawyer Directory, Service Booking & Legal Resources | NyaySevak",
  description:
    "Explore NyaySevak's platform features: verified lawyer directory with Bar Council registration, instant service booking, comprehensive legal guides, court and tribunal information, FAQ sections, WhatsApp integration, secure document vault, and 24/7 support.",
  keywords:
    "lawyer directory India, book lawyer online, legal guides India, court information, legal FAQ, WhatsApp legal support, legal document management, NyaySevak features",
  openGraph: {
    title: "Platform Features | NyaySevak - India's Complete Legal Ecosystem",
    description:
      "Verified lawyer directory, instant booking, legal guides, court info, FAQ sections, WhatsApp integration, and more — all in one platform.",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Features />
    </main>
  );
}
