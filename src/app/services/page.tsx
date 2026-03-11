import type { Metadata } from "next";
import Services from "@/components/Services";
import ContactButton from "@/components/ContactButton";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Services - B2B & B2C Solutions | NyaySevak",
  description:
    "Comprehensive legal services for individuals and businesses. Lawyer consultation, document services, corporate advisory, compliance management, contract management, IP management & more.",
  keywords:
    "legal services India, lawyer consultation, corporate legal advisory, compliance management, contract management, IP management, B2B legal services, B2C legal services",
  alternates: { canonical: "https://nyaysevak.com/services" },
  openGraph: { url: "https://nyaysevak.com/services" },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Services />

      <div className="section-separator" />

      <section className="relative bg-dark-deep py-20 lg:py-28 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow">
                Need a Customized Legal Solution?
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-400 leading-relaxed">
                Tell us about your legal needs and we&apos;ll connect you with the right expert.
              </p>
              <ContactButton
                className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 cursor-pointer"
              >
                Contact Us Today
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </ContactButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
