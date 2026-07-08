import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, ChevronRight } from "lucide-react";
import ContactButton from "@/components/ContactButton";
import AnswerBlock from "@/components/AnswerBlock";
import FaqBlock from "@/components/FaqBlock";
import RelatedLinks from "@/components/RelatedLinks";
import { packageClusters, allPackages, formatPrice, ASSESSMENT_FEE } from "@/data/service-packages";
import { SITE_URL } from "@/lib/site";

const url = `${SITE_URL}/pricing`;

export const metadata: Metadata = {
  title: "Legal Services Pricing in India — Fixed-Fee Packages",
  description:
    "Transparent, fixed-fee legal packages: company incorporation, trademark registration, cheque-bounce (S.138) recovery, NCLT/IBC, RERA complaints, property due diligence, mutual-consent divorce and more. Start with a ₹499 case assessment.",
  keywords:
    "legal services cost India, lawyer fees India, company incorporation cost, trademark registration cost India, cheque bounce case charges, mutual consent divorce cost, rera complaint fees, nclt lawyer fees, patent filing cost India, contract drafting charges, NyaySevak pricing",
  alternates: { canonical: url },
  openGraph: {
    title: "Legal Services Pricing in India — Fixed-Fee Packages | NyaySevak",
    description:
      "Fixed-fee legal packages for high-value matters. Start with a ₹499 case assessment; final engagement fee confirmed by your matched advocate.",
    url,
    type: "website",
  },
};

// Schema: an OfferCatalog of every package, with priceSpecification so Google
// and AI engines can surface a price for "[matter] cost India" queries.
const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${url}#pricing`,
  name: "NyaySevak Legal Service Packages",
  url,
  provider: { "@id": "https://www.nyaysevak.com/#organization" },
  itemListElement: allPackages.map((p) => ({
    "@type": "Offer",
    name: p.name,
    description: p.tagline,
    url: `${url}#${p.slug}`,
    ...(p.quoteOnly
      ? { priceSpecification: { "@type": "PriceSpecification", priceCurrency: "INR", valueAddedTaxIncluded: false } }
      : { priceSpecification: { "@type": "PriceSpecification", minPrice: String(p.priceFrom), priceCurrency: "INR", valueAddedTaxIncluded: false } }),
    availability: "https://schema.org/InStock",
    eligibleRegion: { "@type": "Country", name: "India" },
  })),
};

const faqs = [
  { question: "How does pricing work?", answer: `Every matter starts with a ₹${ASSESSMENT_FEE} case assessment — a paid session where a verified advocate diagnoses your matter and gives a written next-step plan. The engagement fees shown here are indicative "from" prices; your final fee is confirmed at that assessment.` },
  { question: "Are government fees included?", answer: "No. Where a matter involves statutory or government fees (e.g. incorporation, trademark, patent), those are charged at actuals and shown separately from the professional/package fee." },
  { question: "Why start with a paid assessment instead of a free call?", answer: "A nominal fee means the advocate spends the session on people genuinely ready to act — and you leave with a real diagnosis and plan, not vague free advice. It is the fairest filter for both sides." },
  { question: "Who sets the final fee?", answer: "Your matched, Bar-Council-verified advocate. NyaySevak facilitates the match and shows indicative package pricing; the professional fee is agreed with the advocate before any work begins, in writing." },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-dark-deep pt-28 sm:pt-32 pb-14 sm:pb-16 overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[15%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 section-separator" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">Transparent Pricing</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white heading-glow tracking-tight max-w-3xl">
            Fixed-fee legal packages for the matters that matter
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
            No hourly surprises. Every matter starts with a <span className="text-gold font-semibold">₹{ASSESSMENT_FEE} case assessment</span> — a paid diagnosis and next-step plan from a verified advocate — then a clear package fee. Government fees, where applicable, are billed at actuals.
          </p>
          <div className="mt-7">
            <ContactButton className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer">
              Book Your ₹{ASSESSMENT_FEE} Assessment
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </ContactButton>
          </div>
        </div>
      </section>

      {/* AEO quick answer */}
      <section className="bg-dark border-y border-gold/[0.08]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnswerBlock question="How much do NyaySevak's legal services cost?">
            Every matter begins with a nominal ₹{ASSESSMENT_FEE} case assessment. Engagement packages then start from ₹2,499 for a cheque-bounce demand notice, ₹6,999 for private-limited incorporation or trademark filing, ₹9,999 for a RERA complaint, and ₹24,999 for mutual-consent divorce or commercial recovery — all indicative &ldquo;from&rdquo; prices, with the final advocate fee confirmed at the assessment and government fees extra where applicable.
          </AnswerBlock>
        </div>
      </section>

      {/* Clusters */}
      <section className="bg-dark py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          {packageClusters.map((cluster) => (
            <div key={cluster.key} id={cluster.key}>
              <div className="mb-8 max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white">{cluster.title}</h2>
                <p className="mt-2 text-sm sm:text-base text-gray-400 leading-relaxed">{cluster.blurb}</p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cluster.packages.map((p) => (
                  <div key={p.slug} id={p.slug} className="glass-card !rounded-2xl p-6 flex flex-col scroll-mt-24">
                    <h3 className="text-base font-semibold text-white leading-snug">{p.name}</h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-gray-400 leading-relaxed">{p.tagline}</p>

                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-2xl font-heading font-bold text-gold">{formatPrice(p)}</span>
                      {p.govtFeesExtra && <span className="text-[11px] text-gray-500">+ govt fees</span>}
                    </div>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-gray-500">
                      <Clock className="h-3 w-3 text-gold/60" strokeWidth={2} /> {p.timeline}
                    </p>

                    <ul className="mt-4 space-y-2 flex-1">
                      {p.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-xs sm:text-[13px] text-gray-300 leading-snug">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={2.5} />
                          {inc}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex items-center gap-3">
                      <ContactButton className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold to-gold-light px-4 py-2.5 text-xs font-semibold uppercase tracking-widest text-black cursor-pointer">
                        Book Assessment
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                      </ContactButton>
                      {p.learnMore && (
                        <Link href={p.learnMore} className="text-[11px] text-gray-400 hover:text-gold transition-colors inline-flex items-center gap-1">
                          Details <ChevronRight className="h-3 w-3" />
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer / trust */}
      <section className="bg-dark-deep py-10 border-t border-white/[0.04]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            All prices are indicative &ldquo;from&rdquo; amounts for the platform package and are confirmed at your case assessment. Professional fees are set by the independent, Bar-Council-verified advocate you are matched with and are agreed in writing before any work begins. Government, statutory, court and registry fees are charged at actuals and are additional. NyaySevak is a technology platform that matches clients with verified advocates and does not itself practise law; it does not advertise or rank individual advocates.
          </p>
        </div>
      </section>

      <FaqBlock heading="Pricing — frequently asked questions" faqs={faqs} />

      <RelatedLinks
        heading="Explore the matters we focus on"
        groups={[
          { title: "Corporate & commercial", items: [
            { label: "Company incorporation guide", href: "/insights/private-limited-company-incorporation-india-2026" },
            { label: "Cheque bounce (S.138) guide", href: "/insights/section-138-ni-act-cheque-bounce-procedure-2026" },
            { label: "Corporate & business law", href: "/practice-areas/corporate-business" },
          ]},
          { title: "Startup, IP & property", items: [
            { label: "Trademark registration guide", href: "/insights/trademark-registration-india-process-cost-classes-2026" },
            { label: "RERA complaint guide", href: "/insights/rera-complaint-procedure-buyer-guide-2026" },
            { label: "Property title verification", href: "/insights/property-title-verification-india-checklist-2026" },
          ]},
          { title: "Family", items: [
            { label: "Mutual-consent divorce guide", href: "/insights/mutual-consent-divorce-india-procedure-2026" },
            { label: "Family & matrimonial law", href: "/practice-areas/family-matrimonial" },
          ]},
        ]}
      />
    </main>
  );
}
