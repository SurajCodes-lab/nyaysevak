// Productised, priced service packages — the revenue model.
//
// Focus (owner, Week 17): concentrate on high-value matters where clients have
// real intent + budget to hire, and show CHARGES so the platform monetises.
// Model = a nominal ₹499 Case Assessment (the entry / filter) → a priced
// engagement package below. Every price is "from / indicative": the advocate's
// professional fee is confirmed at the assessment; government/statutory fees are
// extra where noted. This is platform/package pricing (Vakilsearch/IndiaFilings
// style), NOT advocate advertising — kept BCI Rule 36-safe.
//
// TO CHANGE A PRICE: edit `priceFrom` here — it drives the page copy AND the
// schema Offer, so there is one source of truth.

export const ASSESSMENT_FEE = 499; // ₹ — the nominal Case Assessment entry fee

export type Package = {
  slug: string;
  name: string;
  tagline: string;
  priceFrom: number;        // ₹, indicative engagement fee "from"
  unit?: string;            // e.g. "per class", "per party" — shown after price
  govtFeesExtra?: boolean;  // true → "+ government fees" note
  quoteOnly?: boolean;      // true → show "On assessment" instead of a number
  timeline: string;
  includes: string[];
  // Which existing page this deep-links to for full context (practice area / service / guide).
  learnMore?: string;
};

export type PackageCluster = {
  key: string;
  title: string;
  blurb: string;
  packages: Package[];
};

export const packageClusters: PackageCluster[] = [
  {
    key: "corporate-commercial",
    title: "Corporate & Commercial Recovery",
    blurb:
      "NCLT & insolvency, cheque-bounce and commercial-suit recovery, and company setup — matters where speed and structure protect real money.",
    packages: [
      {
        slug: "company-incorporation-pvt-ltd",
        name: "Company Incorporation — Private Limited",
        tagline: "SPICe+ end-to-end: name, DIN, DSC, MoA/AoA, PAN & TAN.",
        priceFrom: 6999,
        govtFeesExtra: true,
        timeline: "7–15 working days",
        includes: ["Name reservation (RUN/SPICe+)", "2 Director DSCs + DINs", "MoA & AoA drafting", "Certificate of Incorporation, PAN & TAN", "First-compliance checklist"],
        learnMore: "/insights/private-limited-company-incorporation-india-2026",
      },
      {
        slug: "llp-incorporation",
        name: "Company Incorporation — LLP",
        tagline: "LLP registration with agreement drafting and filings.",
        priceFrom: 5999,
        govtFeesExtra: true,
        timeline: "7–15 working days",
        includes: ["Name reservation", "2 Partner DSCs + DPINs", "LLP Agreement drafting", "Certificate of Incorporation, PAN & TAN"],
        learnMore: "/insights/private-limited-vs-llp-vs-opc-vs-partnership-india",
      },
      {
        slug: "cheque-bounce-notice",
        name: "Cheque Bounce (S.138) — Demand Notice",
        tagline: "Statutory demand notice within the 30-day window.",
        priceFrom: 2499,
        timeline: "Drafted & sent in 48 hours",
        includes: ["S.138 NI Act demand notice drafting", "Dispatch by RPAD/courier with proof", "Advice on the 15-day + 30-day timeline"],
        learnMore: "/insights/section-138-ni-act-cheque-bounce-procedure-2026",
      },
      {
        slug: "cheque-bounce-case",
        name: "Cheque Bounce (S.138) — Full Case",
        tagline: "Complaint filing to recovery, before the Magistrate.",
        priceFrom: 19999,
        timeline: "Case-dependent",
        includes: ["Complaint drafting & filing", "Appearances before the Magistrate", "Evidence & cross-examination", "Recovery / settlement strategy"],
        learnMore: "/practice-areas/banking-finance",
      },
      {
        slug: "commercial-suit-recovery",
        name: "Commercial Suit / Money Recovery",
        tagline: "Recovery of dues under the Commercial Courts Act.",
        priceFrom: 24999,
        timeline: "Case-dependent",
        includes: ["Pre-litigation demand & mediation", "Plaint drafting & filing", "Interim relief / attachment applications", "Trial & execution strategy"],
        learnMore: "/practice-areas/civil-law",
      },
      {
        slug: "nclt-ibc-petition",
        name: "NCLT / Insolvency (IBC) Matter",
        tagline: "Company petitions, IBC proceedings & oppression-mismanagement.",
        priceFrom: 49999,
        quoteOnly: true,
        timeline: "Confirmed at assessment",
        includes: ["Section 7/9/10 IBC petitions", "NCLT company petitions", "Representation before NCLT/NCLAT", "Resolution & recovery strategy"],
        learnMore: "/practice-areas/corporate-business",
      },
    ],
  },
  {
    key: "startup-ip",
    title: "Startup, IP & Contracts",
    blurb:
      "Trademark & patent registration, co-founder agreements, incorporation and airtight contracts — the legal spine every founder needs.",
    packages: [
      {
        slug: "trademark-registration",
        name: "Trademark Registration",
        tagline: "Search, class advice, filing & prosecution to registration.",
        priceFrom: 6999,
        unit: "per class",
        govtFeesExtra: true,
        timeline: "Filing in 3–5 days",
        includes: ["Trademark search & class advice", "TM-A application filing", "Examination-report responses", "Objection/opposition handling (add-on)"],
        learnMore: "/insights/trademark-registration-india-process-cost-classes-2026",
      },
      {
        slug: "patent-filing",
        name: "Patent Filing (Provisional)",
        tagline: "Provisional specification drafting & filing.",
        priceFrom: 14999,
        govtFeesExtra: true,
        timeline: "Filing in 7–10 days",
        includes: ["Patentability discussion", "Provisional specification drafting", "Form 1/2/3/5 filing", "Complete-spec & prosecution (add-on)"],
        learnMore: "/practice-areas/intellectual-property",
      },
      {
        slug: "co-founders-agreement",
        name: "Co-founders' Agreement",
        tagline: "Equity, vesting, roles, IP assignment & exit — done right.",
        priceFrom: 4999,
        timeline: "Draft in 3–5 days",
        includes: ["Equity split & vesting schedule", "Roles, decision rights & deadlock", "IP assignment to the company", "Leaver / exit & non-compete clauses"],
        learnMore: "/practice-areas/corporate-business",
      },
      {
        slug: "contract-drafting",
        name: "Contract Drafting & Review",
        tagline: "Founder-grade contracts drafted or reviewed by a specialist.",
        priceFrom: 2999,
        timeline: "48–72 hours",
        includes: ["Drafting or red-line review", "Risk & liability flagging", "One revision round", "Plain-English summary of key terms"],
        learnMore: "/services/contract-management",
      },
    ],
  },
  {
    key: "property",
    title: "Property & RERA",
    blurb:
      "RERA disputes against builders and pre-purchase due diligence — protect the largest cheque most people ever write.",
    packages: [
      {
        slug: "rera-complaint",
        name: "RERA Complaint",
        tagline: "Action against a builder for delay, defect or misrepresentation.",
        priceFrom: 9999,
        timeline: "Filed in 5–7 days",
        includes: ["Complaint drafting for your State RERA", "Refund-with-interest / possession / compensation claim", "Filing & representation", "Order execution guidance"],
        learnMore: "/insights/rera-complaint-procedure-buyer-guide-2026",
      },
      {
        slug: "property-due-diligence",
        name: "Property Due Diligence / Title Check",
        tagline: "30-year title chain, encumbrance & litigation search before you buy.",
        priceFrom: 7999,
        timeline: "5–7 working days",
        includes: ["Mother deed & 30-year title chain review", "Encumbrance certificate & mutation check", "Sanctioned-plan & RERA-status verification", "Written title-opinion report"],
        learnMore: "/insights/property-title-verification-india-checklist-2026",
      },
    ],
  },
  {
    key: "family",
    title: "Family & Matrimonial",
    blurb:
      "Mutual-consent divorce handled cleanly, and high-net-worth alimony settlements structured to protect assets.",
    packages: [
      {
        slug: "mutual-consent-divorce",
        name: "Mutual Consent Divorce",
        tagline: "Joint petition to decree under S.13B, end to end.",
        priceFrom: 24999,
        timeline: "~6 months (with waiver)",
        includes: ["Joint petition & settlement-deed drafting", "First & second motion appearances", "Cooling-off waiver application", "Custody / maintenance terms drafting"],
        learnMore: "/insights/mutual-consent-divorce-india-procedure-2026",
      },
      {
        slug: "hnw-alimony-settlement",
        name: "High-Net-Worth Alimony Settlement",
        tagline: "Asset-protective settlement structuring & negotiation.",
        priceFrom: 99999,
        quoteOnly: true,
        timeline: "Confirmed at assessment",
        includes: ["Asset & income mapping", "Settlement structuring (lump-sum vs periodic)", "Negotiation & mediation", "Enforceable settlement-deed drafting"],
        learnMore: "/practice-areas/family-matrimonial",
      },
    ],
  },
];

// Flat list + lookup helpers.
export const allPackages: Package[] = packageClusters.flatMap((c) => c.packages);

export function formatPrice(p: Package): string {
  if (p.quoteOnly) return "On assessment";
  const inr = `₹${p.priceFrom.toLocaleString("en-IN")}`;
  return `from ${inr}${p.unit ? ` ${p.unit}` : ""}`;
}
