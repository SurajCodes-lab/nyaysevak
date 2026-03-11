import type { Metadata } from "next";
import About from "@/components/About";
import Features from "@/components/Features";
import ContactButton from "@/components/ContactButton";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About NyaySevak - India's First Complete Legal Ecosystem | Features & Platform",
  description:
    "Learn about NyaySevak's vision, mission, and platform features. India's premier legal services platform with verified lawyer directory, service booking, legal guides, court information, and WhatsApp integration. Pan-India coverage across Supreme Court, High Courts, District Courts, Tribunals & Arbitration centres.",
  keywords:
    "about NyaySevak, legal services India, legal ecosystem India, legal platform vision, legal services mission, lawyer directory, service booking, legal guides, court information, WhatsApp legal support",
  alternates: { canonical: "https://nyaysevak.com/about" },
  openGraph: { url: "https://nyaysevak.com/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      <About />

      <div className="section-separator" />

      <Features />

      <div className="section-separator" />

      <section className="relative bg-dark-deep py-20 lg:py-28 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow">
                Ready to Experience the NyaySevak Difference?
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-400 leading-relaxed">
                Get connected with verified legal professionals across India today.
              </p>
              <ContactButton
                className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 cursor-pointer"
              >
                Get Consultation
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
