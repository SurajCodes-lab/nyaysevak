import type { Metadata } from "next";
import Services from "@/components/Services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Legal Services - B2B & B2C Solutions | NyaySevak",
  description:
    "Comprehensive legal services for individuals and businesses. Lawyer consultation, document services, corporate advisory, compliance management, contract management, IP management & more.",
  keywords:
    "legal services India, lawyer consultation, corporate legal advisory, compliance management, contract management, IP management, B2B legal services, B2C legal services",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20">
      <Services />

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <section className="bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-bold text-white sm:text-4xl">
            Need a Customized Legal Solution?
          </h2>
          <p className="mb-10 text-gray-400">
            Tell us about your legal needs and we&apos;ll connect you with the right expert.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
