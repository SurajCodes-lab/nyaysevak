import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Get Legal Consultation | NyaySevak",
  description:
    "Get in touch with NyaySevak for legal consultation. Available 24/7 for emergencies. Connect with verified lawyers across India.",
  keywords:
    "contact NyaySevak, legal consultation India, hire lawyer online, legal help India, emergency legal help",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Contact />
    </main>
  );
}
