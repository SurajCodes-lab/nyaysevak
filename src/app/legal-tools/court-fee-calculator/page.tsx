import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Scale, FileText } from "lucide-react";
import ContactButton from "@/components/ContactButton";
import CourtFeeCalculator from "@/components/CourtFeeCalculator";
import TableOfContents, { TocItem } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Court Fee Calculator India [2026] — State-wise Schedule | NyaySevak.com",
  description:
    "Free court fee calculator for India. Compute ad-valorem court fees for civil suits state-by-state — Delhi, Maharashtra, Karnataka, Tamil Nadu, U.P. and the central schedule. Updated for 2026.",
  keywords:
    "court fee calculator India, court fee Delhi, court fee Maharashtra, court fee Karnataka, court fee Tamil Nadu, ad valorem court fee, civil suit court fee, court fees act 1870, e-stamping court fee, NyaySevak",
  alternates: {
    canonical: "https://www.nyaysevak.com/legal-tools/court-fee-calculator",
  },
  openGraph: {
    title: "Court Fee Calculator India 2026 — State-wise | NyaySevak.com",
    description:
      "Compute Indian civil-suit court fees in seconds. State-wise ad-valorem schedule for Delhi, Maharashtra, Karnataka, Tamil Nadu, U.P. and beyond.",
    type: "website",
    url: "https://www.nyaysevak.com/legal-tools/court-fee-calculator",
  },
};

const faqs = [
  {
    q: "How is court fee calculated in India?",
    a: "Court fees in India are governed by the Court Fees Act, 1870, as amended by each state. For money suits the fee is ad-valorem (a percentage of the suit value) under Schedule I, Article 1. For declaratory suits, injunctions, and certain other reliefs a fixed fee under Schedule II applies. Most states cap the maximum ad-valorem fee — once the suit value crosses that threshold, the fee plateaus.",
  },
  {
    q: "Why does court fee vary state to state?",
    a: "Court fees are a state subject under Entry 3 of the State List, Seventh Schedule of the Constitution. Each state has amended the central Court Fees Act, 1870 with its own Schedule and rate slabs. Delhi uses a 4-tier slab, Maharashtra a more granular slab structure with higher base rates, Karnataka and Tamil Nadu use 7.5% opening rates, and so on. The result: the same suit value attracts materially different fees in different states.",
  },
  {
    q: "Can court fee be paid online?",
    a: "Yes. All major states accept e-Court Fee through SHCIL (shcilestamp.com) or through the state-specific e-stamping vendor. For e-filing on the eCourts portal the fee is typically integrated into the submission flow. Physical stamp papers are still accepted but rapidly being phased out in metropolitan courts.",
  },
  {
    q: "Is court fee refundable if I withdraw the case?",
    a: "Under Section 16 of the Court Fees Act and Section 89 CPC (read with Order XXIII Rule 3) court fee is partially refundable in cases settled through Alternative Dispute Resolution — Lok Adalat, mediation, conciliation — typically up to 75% of the fee paid. For pure unilateral withdrawal without settlement, no refund is allowed.",
  },
  {
    q: "What if I can't afford the court fee?",
    a: "Indigent persons can apply under Order XXXIII CPC for permission to sue as a pauper, in which case court fee is deferred. If the suit succeeds the fee is recoverable from the awarded amount; if it fails the court may dispense with the fee. Government of India and Legal Aid Authorities also fund full fee waivers in qualifying matters.",
  },
  {
    q: "Does this calculator replace legal advice?",
    a: "No. The result is indicative and meant for budgeting / strategy planning. Final court fee is computed by the court's e-filing system or local Nazir as per the current state schedule, which may have been amended since this calculator was last updated. For actual filing, verify with your advocate or the court office.",
  },
];

const tocItems: TocItem[] = [
  { id: "calculator", label: "Court Fee Calculator" },
  { id: "about", label: "About Court Fees" },
  { id: "states", label: "State-wise Differences" },
  { id: "tips", label: "Tips to Reduce Fees" },
  { id: "faqs", label: "FAQs" },
  { id: "consult", label: "Need a Lawyer?" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.nyaysevak.com/" },
    { "@type": "ListItem", position: 2, name: "Legal Tools", item: "https://www.nyaysevak.com/legal-tools" },
    { "@type": "ListItem", position: 3, name: "Court Fee Calculator", item: "https://www.nyaysevak.com/legal-tools/court-fee-calculator" },
  ],
};

const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Court Fee Calculator India",
  url: "https://www.nyaysevak.com/legal-tools/court-fee-calculator",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: "Free online court fee calculator for India. State-wise ad-valorem schedule under the Court Fees Act 1870.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  inLanguage: "en-IN",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CourtFeeCalculatorPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-dark-deep pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gray-700">/</span>
            <Link href="/legal-tools" className="hover:text-gold transition-colors">Legal Tools</Link>
            <span className="text-gray-700">/</span>
            <span className="text-gold">Court Fee Calculator</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white heading-glow tracking-tight">
            Court Fee Calculator India [2026]
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
            Compute the ad-valorem court fee for a civil suit in any Indian state. Updated for 2026 — Delhi, Maharashtra (Mumbai), Karnataka (Bangalore), Tamil Nadu (Chennai), Uttar Pradesh, and the central schedule.
          </p>
        </div>
      </section>

      <TableOfContents items={tocItems} variant="dark" />

      {/* Calculator */}
      <section id="calculator" className="bg-dark py-12 sm:py-16 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <CourtFeeCalculator />
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-cream cream-pattern py-16 sm:py-20 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark font-semibold">About</h2>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-5">
            How court fees work in India
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
            <p>
              The Court Fees Act, 1870 is the parent legislation governing court fees on suits, applications, appeals, and other legal proceedings in India. Court fees are a State subject under Entry 3 of the State List, Seventh Schedule of the Constitution — every state has amended the central Act with its own Schedule I (ad-valorem on suit value) and Schedule II (fixed fees for declaratory and other reliefs).
            </p>
            <p>
              For money suits — recovery, damages, partition with valuation — the fee is computed as a percentage of the suit value. Most states use a progressive slab structure where the rate decreases on higher values, and most states cap the maximum fee at between ₹1.5 lakh and ₹3 lakh, irrespective of how high the suit value goes. Once the cap is hit, the marginal cost of escalating the claim drops to zero.
            </p>
            <p>
              For declaratory suits, mandatory and prohibitory injunctions, and certain matrimonial reliefs, the fee is fixed — typically ₹15 to ₹500 — irrespective of the value involved.
            </p>
          </div>
        </div>
      </section>

      {/* States */}
      <section id="states" className="bg-dark py-16 sm:py-20 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-6">
            State-wise differences in court fee rates
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              { state: "Delhi", note: "5% opening rate, capped at ₹2 lakh." },
              { state: "Maharashtra (Mumbai)", note: "6% opening, granular slabs, cap ₹3 lakh." },
              { state: "Karnataka (Bangalore)", note: "7.5% opening — highest in India among major states." },
              { state: "Tamil Nadu (Chennai)", note: "7.5% opening, cap ₹2 lakh." },
              { state: "Uttar Pradesh", note: "7.5% opening with the unique U.P. amendment slab." },
              { state: "Other states", note: "Default central schedule applies — 5% opening rate, cap ₹1.5 lakh." },
            ].map((s) => (
              <div key={s.state} className="glass-card !rounded-xl p-4 sm:p-5">
                <p className="text-sm font-semibold text-white">{s.state}</p>
                <p className="mt-1 text-xs text-gray-400 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="bg-cream cream-pattern py-16 sm:py-20 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-6">
            How to reduce or recover court fees
          </h2>
          <ul className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed list-disc pl-5">
            <li>
              <span className="font-semibold">Lok Adalat / mediation refund:</span> 75% of the paid fee is refundable under Section 16 Court Fees Act when the dispute is settled through Lok Adalat or mediation under Section 89 CPC.
            </li>
            <li>
              <span className="font-semibold">Indigent person (Order XXXIII CPC):</span> apply to sue as a pauper — fee is deferred and recoverable from the awarded amount.
            </li>
            <li>
              <span className="font-semibold">Suit valuation strategy:</span> for partition suits, consult on whether the property's full market value or only the share value should be used for ad-valorem computation.
            </li>
            <li>
              <span className="font-semibold">Multiple reliefs:</span> separate reliefs in the same suit may attract separate fees — bundling vs splitting changes the total.
            </li>
            <li>
              <span className="font-semibold">Maximum-cap awareness:</span> if your claim is above the state cap, additional value above the cap costs you nothing in fee — useful for damages claims with uncertain quantum.
            </li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="bg-dark py-16 sm:py-20 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-5">
            {faqs.map((f, i) => (
              <div key={i} className="glass-card !rounded-xl p-5 sm:p-6">
                <h3 className="text-sm sm:text-base font-semibold text-white mb-2">{f.q}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="consult" className="bg-cream cream-pattern py-16 sm:py-20 scroll-mt-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Scale className="h-10 w-10 text-gold-dark" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
            Not sure how to value your suit?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
            Suit valuation determines court fee and pecuniary jurisdiction. Talk to a verified civil-litigation advocate on NyaySevak — paid case assessment.
          </p>
          <ContactButton className="btn-gold-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer">
            Book Your Assessment
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </ContactButton>
        </div>
      </section>
    </main>
  );
}
