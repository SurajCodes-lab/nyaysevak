import type { Metadata } from "next";
import PracticeAreas from "@/components/PracticeAreas";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practice Areas - A-Z Legal Services | NyaySevak",
  description:
    "Complete A-Z legal services across every domain. Civil law, criminal law, family law, corporate law, IP, tax, consumer protection, arbitration, documentation & more.",
  keywords:
    "practice areas, civil law India, criminal lawyer, family lawyer, corporate lawyer, IP lawyer, tax lawyer, consumer protection, arbitration, legal documentation",
};

export default function PracticeAreasPage() {
  return (
    <main className="min-h-screen pt-20">
      <PracticeAreas />

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <section className="bg-dark py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-bold text-white sm:text-4xl">
            Don&apos;t See Your Legal Need Listed?
          </h2>
          <p className="mb-10 text-gray-400">
            We cover every area of Indian law. Reach out and we&apos;ll find the right expert for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
          >
            Get Legal Help
          </Link>
        </div>
      </section>
    </main>
  );
}
