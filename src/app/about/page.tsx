import type { Metadata } from "next";
import About from "@/components/About";
import Features from "@/components/Features";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About NyaySevak - India's First Complete Legal Ecosystem | Features & Platform",
  description:
    "Learn about NyaySevak's vision, mission, and platform features. India's premier legal services platform with verified lawyer directory, service booking, legal guides, court information, and WhatsApp integration. Pan-India coverage across Supreme Court, High Courts, District Courts, Tribunals & Arbitration centres.",
  keywords:
    "about NyaySevak, legal services India, legal ecosystem India, legal platform vision, legal services mission, lawyer directory, service booking, legal guides, court information, WhatsApp legal support",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <About />

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <Features />

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <section className="bg-dark py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-bold text-white sm:text-4xl">
            Ready to Experience the NyaySevak Difference?
          </h2>
          <p className="mb-10 text-gray-400">
            Get connected with verified legal professionals across India today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
          >
            Get Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
