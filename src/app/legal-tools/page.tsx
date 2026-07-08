import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, ArrowRight, Clock, Scale, Search, FileText } from "lucide-react";
import FaqBlock from "@/components/FaqBlock";

export const metadata: Metadata = {
  title: "Free Legal Tools & Calculators India [2026] | NyaySevak.com",
  description:
    "Free legal calculators for India — court fee, stamp duty, limitation period, motor-accident compensation, cheque-bounce claim. Instant results, state-wise schedules, no signup required.",
  keywords:
    "legal tools India, court fee calculator, stamp duty calculator, limitation period checker, motor accident compensation calculator, cheque bounce calculator, CNR case lookup, NyaySevak",
  alternates: { canonical: "https://www.nyaysevak.com/legal-tools" },
};

const tools: { slug: string; title: string; description: string; icon: React.ComponentType<{ className?: string; strokeWidth?: number }>; status: "live" | "soon" }[] = [
  {
    slug: "court-fee-calculator",
    title: "Court Fee Calculator",
    description: "Compute ad-valorem court fees state-by-state under the Court Fees Act 1870.",
    icon: Calculator,
    status: "live",
  },
  {
    slug: "stamp-duty-calculator",
    title: "Stamp Duty Calculator",
    description: "Property registration stamp duty + registration fees, state-wise.",
    icon: FileText,
    status: "soon",
  },
  {
    slug: "limitation-period-checker",
    title: "Limitation Period Checker",
    description: "Find the deadline for your claim under the Limitation Act 1963.",
    icon: Clock,
    status: "soon",
  },
  {
    slug: "motor-accident-compensation",
    title: "MAC Compensation Calculator",
    description: "Estimate compensation under the Sarla Verma multiplier formula.",
    icon: Scale,
    status: "soon",
  },
  {
    slug: "cheque-bounce-claim",
    title: "Cheque Bounce Claim Calculator",
    description: "Section 138 NI Act deadline + maximum penalty calculator.",
    icon: Calculator,
    status: "soon",
  },
  {
    slug: "cnr-case-status",
    title: "CNR Case Status Lookup",
    description: "Direct deep-link to eCourts for any pending case across India.",
    icon: Search,
    status: "soon",
  },
];

export default function LegalToolsIndexPage() {
  return (
    <main className="min-h-screen">
      <section className="relative bg-dark-deep pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white heading-glow tracking-tight">
            Free Legal Tools & Calculators for India
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Instant calculators built on the current Indian legal schedules. Court fees, stamp duty, limitation, compensation — no signup, no paywall.
          </p>
        </div>
      </section>

      <section className="bg-dark py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t) => {
              const Icon = t.icon;
              const isLive = t.status === "live";
              const card = (
                <div className={`glass-card !rounded-xl p-5 sm:p-6 h-full ${isLive ? "group hover:border-gold/30 transition-colors duration-200" : "opacity-60"}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl icon-gold">
                      <Icon className="h-5 w-5 text-black" strokeWidth={1.5} />
                    </span>
                    <h2 className="text-sm sm:text-base font-semibold text-white">
                      {t.title}
                    </h2>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{t.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest">
                    {isLive ? (
                      <span className="text-gold/70 group-hover:text-gold transition-colors">
                        Use {t.title} <ArrowRight className="inline h-3 w-3 ml-0.5" strokeWidth={2} />
                      </span>
                    ) : (
                      <span className="text-gray-500">Coming soon</span>
                    )}
                  </span>
                </div>
              );

              return isLive ? (
                <Link key={t.slug} href={`/legal-tools/${t.slug}`} className="block">
                  {card}
                </Link>
              ) : (
                <div key={t.slug}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>
      <FaqBlock
        heading="Legal tools & calculators — frequently asked questions"
        faqs={[
          { question: "Are NyaySevak's legal calculators free?", answer: "Yes. Every calculator — court fee, stamp duty, limitation period, motor-accident compensation, and cheque-bounce claim — is free, instant, and needs no signup." },
          { question: "How accurate are the calculators?", answer: "They use published statutory schedules (court-fee acts, state stamp-duty rates, the Limitation Act) current for 2026, so they give a reliable estimate. Confirm edge cases with a lawyer." },
          { question: "Do I need an account to use them?", answer: "No. All tools run in your browser with no login and no personal data required." },
          { question: "Can a lawyer help interpret the results?", answer: "Yes — book a paid case assessment and a verified lawyer will explain how the numbers apply to your specific matter." },
        ]}
      />
    </main>
  );
}
