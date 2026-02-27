import type { Metadata } from "next";
import Courts from "@/components/Courts";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Court Coverage - Pan-India Legal Coverage | NyaySevak",
  description:
    "Complete coverage across Supreme Court, all 25 High Courts, 700+ District Courts, 20+ Tribunals, and all major Arbitration centres in India.",
  keywords:
    "Supreme Court advocate, High Court lawyer, District Court lawyer, NCLT lawyer, tribunal lawyer, arbitration India, court coverage India",
};

export default function CourtsPage() {
  return (
    <main className="min-h-screen pt-20">
      <Courts />

      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <section className="bg-black py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-4 text-3xl font-heading font-bold text-white sm:text-4xl">
            Need Representation in Any Court?
          </h2>
          <p className="mb-10 text-gray-400">
            We have verified lawyers across every court and tribunal in India.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light"
          >
            Find a Lawyer
          </Link>
        </div>
      </section>
    </main>
  );
}
