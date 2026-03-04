import type { Metadata } from "next";
import Courts from "@/components/Courts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

      <div className="section-separator" />

      <section className="relative bg-dark-deep py-20 lg:py-28 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-8">
          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow">
                Need Representation in Any Court?
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-400 leading-relaxed">
                We have verified lawyers across every court and tribunal in India.
              </p>
              <Link
                href="/contact"
                className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300"
              >
                Find a Lawyer
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
