// Week 8: Intent-rendered landing-page content. Each page targets a single
// high-volume head query that does not have a clean canonical home in the
// existing practice/city/service taxonomy. Content is hand-written, not
// templated, with embedded internal links to the relevant practice-area,
// city-hub, and service pages — so each landing acts as a dense topical-hub
// node feeding traffic into the existing 197-page graph.

import { cities } from "@/data/cities";

export type CityCard = {
  city: string;
  citySlug: string;
  highlights: string[]; // 2-3 short city-specific notes
  feeRange: string;     // realistic 2026 fee range for this practice in this city
};

export type IntentLandingPage = {
  slug: string;                // route under /
  title: string;               // <title>
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
  };
  intro: string[];             // opening paragraphs
  sections: Array<{
    heading: string;
    body: string[];
    bullets?: string[];
  }>;
  cityTable?: CityCard[];      // optional city-by-city summary table
  faqs: Array<{ question: string; answer: string }>;
  practiceCanonicalSlug?: string;  // existing practice-area to canonicalise behind
  ctaTitle: string;
  ctaCopy: string;
};

export const intentLandings: IntentLandingPage[] = [
  // ============================================================
  // Best Property Lawyers in India
  // ============================================================
  {
    slug: "best-property-lawyers-in-india",
    title:
      "Best Property Lawyers in India 2026 — City-Wise Verified Advocates | NyaySevak",
    metaDescription:
      "Find the best property lawyers in India 2026 — verified advocates across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Title verification, RERA, conveyancing, partition. Free first consultation.",
    primaryKeyword: "best property lawyers in India",
    secondaryKeywords: [
      "best property lawyer India",
      "top property lawyers India",
      "property lawyer near me",
      "real estate lawyer India",
      "property lawyer fees India",
      "RERA lawyer India",
      "property advocate India",
      "title verification lawyer",
    ],
    hero: {
      eyebrow: "Property Law · India · 2026",
      h1: "Best Property Lawyers in India",
      sub: "Verified, Bar-Council-checked property advocates across the 8 largest Indian metros. Title verification, RERA complaints, conveyancing, partition suits, builder-buyer disputes, tenancy. Free first consultation.",
    },
    intro: [
      "Property is the single most-fraud-vulnerable transaction category in Indian civil practice. A buyer who skips proper title verification typically discovers the problem only after possession — by which point reversing the transaction can take a decade of litigation. Choosing the right property lawyer at the right stage of the transaction is the single most important risk control most home-buyers and commercial-property purchasers can exercise.",
      "This page lists NyaySevak's network of verified property lawyers across the 8 largest Indian property markets — Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Every property advocate listed has been Bar-Council verified, has a documented practice history at the relevant city's Sub-Registrar offices and High Court, and has explicit experience with the city's distinctive property-law features (Bangalore A-khata vs B-khata, Mumbai cooperative-society model, Hyderabad Dharani portal, Delhi DDA leasehold-to-freehold, etc.).",
      "Below: how to evaluate a property lawyer; what city-specific expertise actually matters; realistic fee benchmarks for 2026; and — at the bottom of the page — direct links to our city-specific property-lawyer hubs and our 12-point title-verification checklist.",
    ],
    sections: [
      {
        heading: "What does a 'property lawyer' actually do?",
        body: [
          "The category covers a broader scope than most first-time buyers realise. A property lawyer's brief typically includes any combination of: (i) title verification — the 30-year chain-of-title due diligence that confirms a seller actually has clean title to convey; (ii) conveyancing — drafting and registering the sale deed, gift deed, partition deed, or release deed; (iii) RERA work — filing complaints under Section 18 RERA for delayed possession, defending or prosecuting builder-buyer disputes, RERA Appellate Tribunal appeals; (iv) partition — civil suits or family settlement deeds for division of jointly-held property; (v) tenancy — eviction proceedings, rent-control matters (especially Mumbai, Delhi, and Pune); (vi) succession — probates, succession certificates, mutation in revenue records; (vii) builder-developer transactions — Joint Development Agreements, Agreement for Sale review, escrow structures; (viii) commercial real estate — leasing, sale-and-leaseback, REIT advisory.",
          "The same lawyer rarely does all of these. Conveyancing-focused practices specialise in transactions; RERA-focused practices specialise in disputes. Choose by matching the lawyer's primary practice to your immediate need.",
        ],
      },
      {
        heading: "How to evaluate a property lawyer",
        body: [
          "Three signals matter most:",
        ],
        bullets: [
          "Bar Council enrolment and current practising-lawyer status — verifiable on the relevant State Bar Council's website. Avoid anyone whose enrolment cannot be confirmed.",
          "Documented case history at the city's Sub-Registrar office, High Court (writ side for redevelopment matters), and the relevant RERA Authority. Ask for redacted recent matter references.",
          "Specific knowledge of the city's distinctive property regime — the BBMP A-khata/B-khata distinction in Bangalore, the Maharashtra Co-operative Societies model in Mumbai, the CMDA/DTCP boundary in Chennai, the Dharani portal in Hyderabad, the DDA leasehold-conversion process in Delhi, the GIFT-City IFSC framework in Ahmedabad. A property lawyer without this local knowledge will miss city-specific risk.",
          "Transparent fee structure — preferably a written engagement letter specifying scope, fee, out-of-pocket charges, and milestone payments. Property matters with vague fee terms are a recurring source of disputes.",
        ],
      },
      {
        heading: "City × city expertise — what differs",
        body: [
          "Property law in India is statutorily federal but operationally state-specific. The most important city-level differences:",
        ],
      },
    ],
    cityTable: [
      {
        city: "Delhi",
        citySlug: "delhi",
        highlights: [
          "DDA leasehold-to-freehold conversion expertise required for many resale transactions.",
          "Delhi Rent Control Act 1958 applies to pre-1995 tenancies — bifurcated regime.",
          "Unauthorised-colony PTM-based title is NOT freehold-equivalent — material risk.",
        ],
        feeRange: "Title verification: ₹25,000-₹1,00,000 · Sale deed: ₹30,000-₹1,50,000 · Partition: ₹3,00,000+",
      },
      {
        city: "Mumbai",
        citySlug: "mumbai",
        highlights: [
          "Cooperative Housing Society (CHS) ownership structure dominates — distinct from sale-deed conveyance.",
          "DCPR 2034 redevelopment regulations (33(5)/(7)/(9)/(10)/(11)) govern most society redevelopment.",
          "MahaRERA is India's most active RERA — matured complaint adjudication.",
        ],
        feeRange: "Title verification: ₹30,000-₹1,50,000 · MahaRERA complaint: ₹50,000-₹2,50,000",
      },
      {
        city: "Bangalore",
        citySlug: "bangalore",
        highlights: [
          "A-khata vs B-khata distinction is decisive for resale and bank financing.",
          "Gramathana (revenue village) land needs conversion order before urban transactions.",
          "BBMP/BDA/BMRDA layouts have different approval implications.",
        ],
        feeRange: "Title + khata verification: ₹20,000-₹75,000 · A-khata conversion: ₹30,000-₹1,50,000",
      },
      {
        city: "Chennai",
        citySlug: "chennai",
        highlights: [
          "CMDA vs DTCP jurisdictional boundary determines applicable planning standards.",
          "Patta-chitta-adangal revenue records overlay the registered conveyance.",
          "Tamil Nadu Apartment Ownership Act 1994 governs apartment ownership.",
        ],
        feeRange: "Title + patta verification: ₹20,000-₹80,000 · CMDA dispute: ₹1,00,000+",
      },
      {
        city: "Hyderabad",
        citySlug: "hyderabad",
        highlights: [
          "Dharani portal (centralised land record from 2020) — own reliability concerns.",
          "GPA restrictions (post-2015 Telangana) limit power-of-attorney transfers.",
          "HMDA layout regularisation (within outer ring road) is largely complete.",
        ],
        feeRange: "Title + Dharani verification: ₹15,000-₹60,000",
      },
      {
        city: "Pune",
        citySlug: "pune",
        highlights: [
          "Co-operative Court (Pune) has dedicated jurisdiction for society disputes.",
          "PMC stamp-duty rates — 6% for males, 4% for females.",
          "Maharashtra Rent Control Act 1999 applies for legacy tenancies.",
        ],
        feeRange: "Title verification: ₹20,000-₹75,000",
      },
      {
        city: "Kolkata",
        citySlug: "kolkata",
        highlights: [
          "Calcutta HC original civil jurisdiction (>₹10 lakh) for property suits.",
          "WB-HIRA (separate from RERA) covers West Bengal residential projects.",
          "Mutation through BL&LRO via online portal.",
        ],
        feeRange: "Title verification: ₹15,000-₹60,000 · HC suit: ₹2,00,000+",
      },
      {
        city: "Ahmedabad",
        citySlug: "ahmedabad",
        highlights: [
          "Garvi 2.0 portal hosts the registration record.",
          "GIFT City IFSC regulatory framework — India's only such centre.",
          "TP scheme framework determines plot lay-outs.",
        ],
        feeRange: "Title verification: ₹15,000-₹60,000 · GIFT City structuring: ₹3,00,000+",
      },
    ],
    faqs: [
      {
        question: "What is the best way to find a property lawyer in India?",
        answer:
          "Choose a verified advocate with documented practice in the specific city's Sub-Registrar office, the relevant High Court, and the state RERA Authority. Confirm Bar Council enrolment via the State Bar Council website. Ask for a written engagement letter specifying scope, fee, and milestones. NyaySevak's network meets all these criteria — every property lawyer listed is Bar-Council verified and city-specific in expertise.",
      },
      {
        question: "How much do property lawyers charge in India in 2026?",
        answer:
          "Title verification ranges ₹15,000-₹1,00,000 for residential properties up to ₹2 crore in metro cities (₹1.5 lakh-₹5 lakh for commercial properties or those above ₹10 crore). Sale-deed drafting and registration ₹25,000-₹1,50,000. RERA complaints ₹25,000-₹2,50,000 lump-sum. Partition suits ₹2,00,000-₹15,00,000+ depending on complexity and counsel seniority. Mumbai and Delhi rates are typically the highest; Hyderabad and Kolkata 30-50% lower for ordinary practice.",
      },
      {
        question: "Do I need a separate property lawyer if my bank is processing the loan?",
        answer:
          "Yes, strongly recommended. The bank's panel advocate is engaged by and reports to the bank — their title certificate protects the bank's lien, not your buyer interest. A separate property lawyer in your own name conducts due diligence specifically to protect the buyer's exposure to title defects, encumbrances, lis pendens, and other risks the bank's lawyer may not flag.",
      },
      {
        question: "What is title insurance in India and is it worth buying?",
        answer:
          "Title insurance products (HDFC ERGO, ICICI Lombard, Tata AIG) are now available in major Indian cities for residential properties up to ₹50 crore. Premium typically 0.5-1% of consideration. For high-value transactions (₹5 crore+), title insurance is increasingly standard and worth buying. It does not replace due diligence but is a meaningful backstop against latent defects.",
      },
      {
        question: "Can I file a RERA complaint without a lawyer?",
        answer:
          "Yes — most state RERA Authorities permit self-representation, and the Authority is not bound by strict CPC procedure. For straightforward delay-refund matters with clear paper trails, self-representation often works. For contested factual disputes (defective construction, misrepresentation, complex price-escalation), an experienced RERA practitioner materially improves outcomes. Counsel fees: ₹25,000-₹2,50,000 for a residential refund matter through to first hearing.",
      },
      {
        question: "How do NyaySevak's property lawyers differ from listing-site directories?",
        answer:
          "Three differences: (i) every property lawyer in our network is Bar-Council verified — listing-site directories often display unverified profiles; (ii) we match lawyers to your specific city, court, and matter type — listing sites typically present alphabetical lists; (iii) the first consultation is free with no obligation — listing-site directories charge per lead.",
      },
    ],
    practiceCanonicalSlug: "property-real-estate",
    ctaTitle: "Need a property lawyer right now?",
    ctaCopy:
      "Get a free first consultation with a verified property advocate in your city. We match you to a lawyer with documented experience in your specific city and matter type — typically within 4 hours.",
  },

  // ============================================================
  // Best Divorce Lawyers in India
  // ============================================================
  {
    slug: "best-divorce-lawyers-in-india",
    title:
      "Best Divorce Lawyers in India 2026 — City-Wise Verified Family Advocates | NyaySevak",
    metaDescription:
      "Find the best divorce lawyers in India 2026 — verified family advocates across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Mutual consent, contested, custody, maintenance. Free first consultation.",
    primaryKeyword: "best divorce lawyers in India",
    secondaryKeywords: [
      "best divorce lawyer India",
      "top divorce lawyers India",
      "divorce lawyer near me",
      "mutual divorce lawyer",
      "contested divorce lawyer",
      "family lawyer India",
      "matrimonial lawyer",
      "divorce lawyer fees India",
    ],
    hero: {
      eyebrow: "Family Law · India · 2026",
      h1: "Best Divorce Lawyers in India",
      sub: "Verified, Bar-Council-checked divorce and family-law advocates across the 8 largest Indian metros. Mutual-consent and contested divorce, child custody, maintenance, domestic violence, matrimonial property. Free first consultation.",
    },
    intro: [
      "Divorce is among the most procedurally and emotionally complex matters in Indian civil practice. The right lawyer makes the difference between a 6-month mutual-consent decree and a 5-year contested battle. Choosing well at the start saves years of litigation, lakhs in counsel fees, and immeasurable personal toll.",
      "NyaySevak's network includes verified divorce and matrimonial advocates with active practice at every major Family Court in India — Patiala House and Tis Hazari (Delhi), Bandra (Mumbai), Vyalikaval (Bangalore), Saidapet (Chennai), Saroornagar (Hyderabad), Alipore (Kolkata), Shivajinagar (Pune), and the equivalent Family Court in Ahmedabad. Every advocate is Bar-Council verified with documented matrimonial-court experience, and several are mediation-panel-empanelled, which can help expedite mutual-consent matters.",
      "Below: when to choose mutual-consent vs contested divorce; what to look for in a divorce lawyer; realistic fee benchmarks; and direct links to our city-specific divorce-lawyer hubs and the comprehensive 2026 mutual-consent procedure guide.",
    ],
    sections: [
      {
        heading: "Mutual-consent vs contested divorce — which path?",
        body: [
          "Mutual-consent divorce under Section 13B HMA (or Section 28 SMA, or Section 10A IDA, or Section 32B PMDA depending on personal law) is the fastest and lowest-cost route. It requires both spouses to agree on the dissolution and on every material issue — alimony, custody, property division, withdrawal of pending criminal complaints. With a properly-drafted settlement deed and a tier-1-city Family Court, a mutual-consent decree can be obtained in 4-12 months. The Supreme Court's 2017 Amardeep Singh ruling allows the six-month cooling-off period to be waived in appropriate cases.",
          "Contested divorce under Section 13(1) HMA is necessary when the spouses cannot agree on dissolution itself, or where allegations of cruelty, desertion, or adultery must be adjudicated. Contested matters typically take 4-8 years through trial, appeal, and High Court reviews. Contested divorce is the right choice when: one spouse refuses dissolution; one spouse is missing or untraceable; the marriage was void or voidable on statutory grounds (Sections 11/12 HMA); or the parties cannot agree on settlement terms despite extensive negotiation.",
          "The right divorce lawyer will assess your situation and recommend the realistic path — not push contested litigation when mutual consent is achievable, or oversell mutual consent when contested is the only viable route.",
        ],
      },
      {
        heading: "How to evaluate a divorce lawyer",
        body: [],
        bullets: [
          "Bar Council enrolment confirmed via the State Bar Council website.",
          "Documented practice history at your specific city's Family Court.",
          "Experience with the relevant personal law (HMA for Hindus/Buddhists/Sikhs/Jains, SMA for inter-faith, IDA for Christians, PMDA for Parsis, Muslim personal law for Muslims).",
          "Specific experience with the issues that matter in your matter — custody disputes (Guardians and Wards Act 1890), maintenance (Section 125 BNSS or Sections 24-25 HMA), domestic violence (PWDVA 2005 + Vishaka guidelines), matrimonial property division.",
          "Mediation-panel empanelment can be a strong positive signal for mutual-consent matters.",
          "Transparent fee structure with written engagement letter.",
        ],
      },
      {
        heading: "Realistic fee benchmarks for 2026",
        body: [
          "Mutual-consent divorce in a tier-1 city Family Court: ₹40,000-₹1,50,000 per side for a junior-counsel-led matter; ₹1,50,000-₹5,00,000 for senior counsel involvement. Costs scale with complexity of asset division and number of pending criminal complaints to be withdrawn.",
          "Contested divorce: ₹1,50,000-₹7,50,000 lump-sum (junior counsel, full case to disposal); ₹7,50,000-₹30,00,000+ for senior counsel involvement. Per-appearance billing is also common for very long-running matters.",
          "Child custody (separate matter): ₹1,00,000-₹4,00,000 (junior counsel).",
          "DV Act matters: ₹50,000-₹3,00,000 (junior); ₹3,00,000-₹10,00,000 (senior).",
          "Maintenance applications (Section 125 BNSS / 24-25 HMA): ₹30,000-₹1,50,000 (junior); ₹1,50,000-₹5,00,000 (senior).",
        ],
      },
    ],
    cityTable: [
      {
        city: "Delhi",
        citySlug: "delhi",
        highlights: [
          "Patiala House and Tis Hazari Family Courts — relatively efficient; waivers routinely considered.",
          "Strong panel of mediation-empanelled lawyers.",
          "Highest concentration of Senior Advocates for HC matrimonial appeals.",
        ],
        feeRange: "Mutual divorce: ₹50,000-₹2,00,000 · Contested: ₹2,00,000-₹15,00,000+",
      },
      {
        city: "Mumbai",
        citySlug: "mumbai",
        highlights: [
          "Bandra Family Court — longer waiting list but Bombay HC encourages waivers.",
          "Parsi Matrimonial Court at Bombay HC — unique in India.",
          "Strong commercial-bar exposure for high-net-worth matrimonial matters.",
        ],
        feeRange: "Mutual divorce: ₹60,000-₹2,50,000 · Contested: ₹2,50,000-₹20,00,000+",
      },
      {
        city: "Bangalore",
        citySlug: "bangalore",
        highlights: [
          "Vyalikaval Family Court — reasonable timelines.",
          "Karnataka HC is technology-forward — virtual hearings routine.",
        ],
        feeRange: "Mutual divorce: ₹40,000-₹1,80,000 · Contested: ₹1,80,000-₹12,00,000",
      },
      {
        city: "Chennai",
        citySlug: "chennai",
        highlights: [
          "Saidapet Family Court — heavy docket; waivers less commonly granted.",
          "Madras HC family matters bench has its own procedural conventions.",
        ],
        feeRange: "Mutual divorce: ₹40,000-₹1,50,000 · Contested: ₹1,50,000-₹10,00,000",
      },
      {
        city: "Hyderabad",
        citySlug: "hyderabad",
        highlights: [
          "Saroornagar Family Court — moderate timelines.",
          "Telangana HC writ practice for specific custody/maintenance disputes.",
        ],
        feeRange: "Mutual divorce: ₹35,000-₹1,40,000 · Contested: ₹1,40,000-₹9,00,000",
      },
      {
        city: "Pune",
        citySlug: "pune",
        highlights: [
          "Shivajinagar Family Court — moderate.",
          "Maharashtra Rent Control Act overlay common in matrimonial-property division.",
        ],
        feeRange: "Mutual divorce: ₹40,000-₹1,60,000 · Contested: ₹1,60,000-₹10,00,000",
      },
      {
        city: "Kolkata",
        citySlug: "kolkata",
        highlights: [
          "Alipore Family Court — slower; expect longer timelines.",
          "Calcutta HC original-civil-jurisdiction matters above ₹10 lakh.",
        ],
        feeRange: "Mutual divorce: ₹30,000-₹1,30,000 · Contested: ₹1,30,000-₹8,00,000",
      },
      {
        city: "Ahmedabad",
        citySlug: "ahmedabad",
        highlights: [
          "Family Court — moderate-to-fast.",
          "Lower fee benchmarks across most matter types.",
        ],
        feeRange: "Mutual divorce: ₹30,000-₹1,30,000 · Contested: ₹1,30,000-₹8,00,000",
      },
    ],
    faqs: [
      {
        question: "How long does a mutual-consent divorce take in India?",
        answer:
          "Realistic timelines: 4-6 months with a successful Amardeep Singh waiver in a tier-1 city Family Court; 6-12 months without a waiver in tier-1 cities; 12-18 months in slower courts. Without a waiver, the floor is the statutory six-month cooling-off period under Section 13B(2) HMA.",
      },
      {
        question: "How long does a contested divorce take in India?",
        answer:
          "Typical contested-divorce timeline: 4-8 years through Family Court trial, plus 2-4 additional years if appealed to the High Court. Some matters resolve faster through mid-trial mediation. The actual length depends on the issues contested, the witness list, and the specific Family Court's docket pressure.",
      },
      {
        question: "Is the cooling-off period always required?",
        answer:
          "No. The Supreme Court in Amardeep Singh v. Harveen Kaur, (2017) 8 SCC 746, held that the six-month cooling-off period is directory and may be waived where parties have lived separately for over 18 months, all reconciliation efforts have failed, settlement is complete, and waiting would only prolong agony. The waiver is discretionary; tier-1 Family Courts grant it in roughly 60-70% of well-drafted applications.",
      },
      {
        question: "What documents are needed for mutual-consent divorce?",
        answer:
          "Marriage certificate (or proof of solemnisation); PAN cards and Aadhaar of both spouses; address proofs; passport-size photographs; sworn affidavits confirming the three preconditions (HMA marriage, one year separation, mutual consent); and the executed comprehensive settlement deed addressing alimony, custody, property, and criminal-complaint withdrawal.",
      },
      {
        question: "Can divorce be filed online in India?",
        answer:
          "The petition itself must be filed at the appropriate Family Court (with physical or e-filing). Both spouses must appear at the first and second motions to record statements on oath. For NRI couples, courts increasingly permit appearance through video-conferencing. Several Indian Family Courts (notably Delhi) accept video appearances; others may insist on physical presence.",
      },
      {
        question: "Can I withdraw consent after the first motion?",
        answer:
          "Yes. Section 13B(2) HMA requires the consent to be subsisting at the time of the second motion. If either spouse withdraws consent before the second motion, the petition is dismissed and the marriage stands. The other spouse can then file a contested petition under Section 13(1), but this becomes a multi-year case from scratch.",
      },
    ],
    practiceCanonicalSlug: "family-matrimonial",
    ctaTitle: "Need a divorce lawyer right now?",
    ctaCopy:
      "Get a free first consultation with a verified divorce or family-law advocate in your city. We match you to a lawyer with documented Family Court practice and the right experience for your specific matter (mutual-consent, contested, custody, or maintenance).",
  },

  // ============================================================
  // Best Criminal Lawyers in India
  // ============================================================
  {
    slug: "best-criminal-lawyers-in-india",
    title:
      "Best Criminal Lawyers in India 2026 — City-Wise Verified Defence Advocates | NyaySevak",
    metaDescription:
      "Find the best criminal lawyers in India 2026 — verified defence advocates across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Bail, FIR quashing, trial defence, PMLA, NDPS, CBI cases. Free first consultation.",
    primaryKeyword: "best criminal lawyers in India",
    secondaryKeywords: [
      "best criminal lawyer India",
      "top criminal lawyers India",
      "criminal lawyer near me",
      "bail lawyer India",
      "criminal defence lawyer",
      "criminal advocate India",
      "PMLA lawyer",
      "NDPS lawyer",
      "CBI case lawyer",
    ],
    hero: {
      eyebrow: "Criminal Defence · India · 2026",
      h1: "Best Criminal Lawyers in India",
      sub: "Verified, Bar-Council-checked criminal-defence advocates across the 8 largest Indian metros. Bail, anticipatory bail, FIR quashing, trial defence, PMLA, NDPS, CBI cases. Free first consultation.",
    },
    intro: [
      "Criminal-defence work is the highest-stakes practice in Indian law. Loss of liberty is irreversible while it lasts; a wrongful conviction carries lifelong consequences. The right criminal lawyer at the right stage — pre-FIR, at the bail application, at trial, at appeal — materially shifts outcome probability. Choosing well is rarely about price; it is about precise expertise.",
      "NyaySevak's network includes verified criminal-defence advocates with active practice at every major Sessions Court, High Court, and special court complex in India: Delhi (Tis Hazari, Patiala House, Saket, Karkardooma, Rohini, Dwarka, Rouse Avenue Special Courts for CBI/ED/MP-MLA), Mumbai (City Civil & Sessions Court Fort, Dindoshi, Esplanade, Ballard Pier MCOCA Court, PMLA Special Court), and equivalent benches in Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Several have dedicated practice in PMLA, NDPS, UAPA, CBI, NIA, and POCSO matters where special-statute expertise is decisive.",
      "Below: when to engage criminal counsel; how to evaluate criminal-defence lawyers; realistic fee benchmarks; city-specific notes; and direct links to our anticipatory-bail and FIR-procedure deep-dive guides.",
    ],
    sections: [
      {
        heading: "When to engage criminal counsel — and why early matters",
        body: [
          "The five inflection points where engaging criminal counsel materially shifts outcomes:",
        ],
        bullets: [
          "Pre-FIR: when summons or hostile notice indicates an FIR is imminent. Engaging counsel here allows preventive steps — anticipatory bail under Section 482 BNSS, quashing applications under Section 528 BNSS, or simply structured cooperation with the IO that prevents arrest.",
          "Post-FIR, pre-arrest: anticipatory bail filing is the standard protection. Sessions Court is the default first forum; HC for serious cases.",
          "At arrest: regular bail under Section 480/483 BNSS is typically pursued the same or next day. The first 24 hours are decisive — magistrate's first remand decision frames everything that follows.",
          "Charge-sheet stage: charge-sheet review and pre-trial preparation determine the trial strategy. Many cases that look weak at FIR stage become defendable at charge-sheet stage if approached correctly.",
          "Trial: counsel selection at trial is decisive. Indian criminal trials are won and lost in cross-examination and Section 351 BNSS examination of accused.",
        ],
      },
      {
        heading: "How to evaluate a criminal lawyer",
        body: [],
        bullets: [
          "Bar Council enrolment confirmed via the State Bar Council website.",
          "Documented Sessions Court / Magistrate Court / HC practice — the right counsel for an HC quashing matter is not necessarily the right counsel for a Magistrate-court trial.",
          "Specific special-statute expertise where applicable. PMLA, NDPS commercial-quantity, UAPA, POCSO, CBI matters each have their own jurisprudential frameworks and procedural choreographies. A general criminal lawyer is not adequate for these.",
          "Recent Supreme Court and High Court bail jurisprudence familiarity — Sushila Aggarwal (anticipatory bail duration), Satender Kumar Antil (regular bail framework), Lalita Kumari (FIR mandatory registration), Arnesh Kumar (no automatic arrest below 7-year offences).",
          "Track record on similar matters — ask for redacted recent matter references.",
        ],
      },
      {
        heading: "Realistic fee benchmarks for 2026",
        body: [
          "Magistrate-court bail (junior counsel): ₹15,000-₹50,000 per appearance. Sessions Court anticipatory bail: ₹30,000-₹1,00,000 (junior); ₹1,50,000-₹5,00,000 (senior). HC bail / quashing: ₹75,000-₹3,00,000 (junior); ₹3,00,000-₹15,00,000 (with senior counsel).",
          "Trial defence (full case): ₹1,00,000-₹5,00,000 lump-sum at Magistrate level (junior); ₹3,00,000-₹15,00,000 at Sessions level (junior); ₹15,00,000-₹75,00,000+ for senior counsel in serious cases.",
          "PMLA / CBI / NIA cases: typically 2-4x comparable IPC/BNS rates due to complexity, special-court forum, and higher seniority required.",
          "Supreme Court SLP (criminal): ₹1,50,000-₹15,00,000+ depending on counsel.",
        ],
      },
    ],
    cityTable: [
      {
        city: "Delhi",
        citySlug: "delhi",
        highlights: [
          "Six district court complexes plus Rouse Avenue Special Courts (CBI/ED/MP-MLA).",
          "Highest concentration of Designated Senior Advocates in India.",
          "Supreme Court proximity for SLP filings.",
        ],
        feeRange: "Sessions bail: ₹50,000-₹3,00,000 · HC quashing: ₹1,50,000-₹10,00,000+",
      },
      {
        city: "Mumbai",
        citySlug: "mumbai",
        highlights: [
          "City Civil & Sessions (Fort), Dindoshi, plus PMLA/MCOCA Special Courts at Ballard Estate.",
          "MCOCA expertise — unique to Mumbai/Maharashtra.",
          "Strong PMLA defence bar (Bombay HC has substantial ED-prosecution docket).",
        ],
        feeRange: "Sessions bail: ₹50,000-₹2,50,000 · PMLA defence: ₹3,00,000-₹15,00,000+",
      },
      {
        city: "Bangalore",
        citySlug: "bangalore",
        highlights: [
          "City Civil & Sessions Court Bengaluru Urban + specialised CBI Court.",
          "Karnataka HC technology-forward — virtual hearings routine.",
        ],
        feeRange: "Sessions bail: ₹40,000-₹2,00,000 · HC quashing: ₹1,20,000-₹7,00,000",
      },
      {
        city: "Chennai",
        citySlug: "chennai",
        highlights: [
          "Sessions Court at Egmore + Madras HC for bail / quashing.",
          "Tamil Nadu Goondas Act 1982 considerations in habitual-offender matters.",
        ],
        feeRange: "Sessions bail: ₹35,000-₹1,80,000 · HC quashing: ₹1,00,000-₹6,00,000",
      },
      {
        city: "Hyderabad",
        citySlug: "hyderabad",
        highlights: [
          "Three police commissionerates create distinctive jurisdictional questions.",
          "Telangana HC criminal bench moderate-to-active.",
        ],
        feeRange: "Sessions bail: ₹30,000-₹1,50,000 · HC quashing: ₹90,000-₹5,00,000",
      },
      {
        city: "Pune",
        citySlug: "pune",
        highlights: [
          "Pune Sessions Court + Bombay HC bench at Nagpur for some matters.",
          "MCOCA jurisdiction in organised-crime cases.",
        ],
        feeRange: "Sessions bail: ₹35,000-₹1,80,000 · HC quashing: ₹1,00,000-₹6,00,000",
      },
      {
        city: "Kolkata",
        citySlug: "kolkata",
        highlights: [
          "Alipore Sessions Court + Calcutta HC original-side criminal jurisdiction.",
          "Slower listing timelines — plan accordingly.",
        ],
        feeRange: "Sessions bail: ₹30,000-₹1,40,000 · HC quashing: ₹80,000-₹5,00,000",
      },
      {
        city: "Ahmedabad",
        citySlug: "ahmedabad",
        highlights: [
          "Sessions Court Ahmedabad + Gujarat HC.",
          "Lower fee benchmarks across most matter types.",
        ],
        feeRange: "Sessions bail: ₹30,000-₹1,40,000 · HC quashing: ₹80,000-₹5,00,000",
      },
    ],
    faqs: [
      {
        question: "What is the difference between bail and anticipatory bail?",
        answer:
          "Anticipatory bail (Section 482 BNSS, formerly 438 CrPC) is granted before arrest. The court directs that, in the event of arrest, the applicant shall be released on bail. Regular bail (Section 480/483 BNSS, formerly 437/439 CrPC) is granted after arrest to release a person already in custody. Anticipatory bail is preventive; regular bail is curative.",
      },
      {
        question: "How quickly can I get bail in India?",
        answer:
          "For bailable offences, bail is a matter of right — typically same-day. For non-bailable offences, Sessions Court bail typically takes 2-7 working days from filing. HC bail typically 7-30 days depending on docket pressure. Anticipatory bail can be obtained at the first hearing in straightforward matters, or through a few hearings in contested matters.",
      },
      {
        question: "Can I get bail in PMLA, NDPS commercial-quantity, or UAPA cases?",
        answer:
          "These special statutes impose stringent bail conditions (Section 45 PMLA, Section 37 NDPS, Section 43D(5) UAPA) — twin conditions requiring the court to be satisfied that the accused is not guilty and is not likely to commit any offence on bail. Bail in these matters is materially harder; many cases are pursued through quashing or trial-stage acquittal rather than bail.",
      },
      {
        question: "How much does a criminal lawyer cost in India?",
        answer:
          "Sessions Court anticipatory bail: ₹30,000-₹1,00,000 (junior counsel); ₹1,50,000-₹5,00,000 (senior). HC bail/quashing: ₹75,000-₹3,00,000 (junior counsel-led brief); ₹3,00,000-₹15,00,000 (senior counsel involvement). Trial defence (full case at Sessions): ₹3,00,000-₹15,00,000 (junior); ₹15,00,000-₹75,00,000+ (senior).",
      },
      {
        question: "What if the police refuse to register an FIR against me being framed?",
        answer:
          "If you have evidence of a false complaint being orchestrated, file a quashing application under Section 528 BNSS at the High Court — this can quash the FIR before charge-sheet if the seven Bhajan Lal categories apply. Parallel: file an Article 226 writ petition for protection from coercive measures during the quashing pendency. NyaySevak's criminal-law desk can match you to counsel with quashing-application expertise.",
      },
      {
        question: "Can a single lawyer handle the entire case from FIR to Supreme Court?",
        answer:
          "Yes, but it is rare in serious matters. Typical structure: a junior or mid-career criminal lawyer handles Magistrate / Sessions stages; senior counsel is briefed for HC bail / quashing; designated Senior Advocate is briefed for SC SLP if needed. The same lawyer handling all stages works for routine matters; senior counsel involvement at later stages is normal in serious cases.",
      },
    ],
    practiceCanonicalSlug: "criminal-law",
    ctaTitle: "Need a criminal lawyer right now?",
    ctaCopy:
      "Get a free first consultation with a verified criminal-defence advocate in your city. We match you to a lawyer with the right Sessions/HC/special-court experience for your matter — typically within 4 hours.",
  },

  // ============================================================
  // Free Legal Consultation
  // ============================================================
  {
    slug: "free-legal-consultation",
    title:
      "Free Legal Consultation in India — Talk to a Verified Lawyer Today | NyaySevak",
    metaDescription:
      "Free first legal consultation in India. Talk to a verified Bar-Council-checked lawyer for criminal, divorce, property, corporate, civil, or any other matter. No obligation, no card required, response within 4 hours.",
    primaryKeyword: "free legal consultation",
    secondaryKeywords: [
      "free legal consultation India",
      "free lawyer consultation",
      "free legal advice India",
      "talk to a lawyer free",
      "free first consultation lawyer",
      "online free lawyer consultation",
      "free legal aid India",
      "ask a lawyer free",
    ],
    hero: {
      eyebrow: "Free Service · No Obligation",
      h1: "Free Legal Consultation in India",
      sub: "Talk to a verified, Bar-Council-checked lawyer about your legal matter — no charge for the first consultation, no obligation to engage further. Available across criminal, civil, divorce, property, corporate, tax, cyber, consumer, and 25+ other practice areas.",
    },
    intro: [
      "Most Indian legal-service buyers delay engaging a lawyer because they don't know what the matter will cost — and they don't want to commit money to find out. The free first consultation removes this friction. You describe your situation; a verified lawyer assesses the matter, explains your options, gives a realistic timeline and fee estimate, and answers questions. No obligation to proceed.",
      "NyaySevak's free first consultation is structured deliberately. We match you to a lawyer with documented experience in your specific matter type and (where relevant) your city's procedural particulars. The consultation runs 30-45 minutes and is held by phone, video, or chat — your choice. The lawyer is a real Bar-Council-enrolled advocate, not a chatbot or a salesperson.",
      "What this page explains: what to expect from the consultation; how to prepare; what the lawyer will tell you; what it does not include; and the realistic timeline for proceeding from consultation to hiring (if you choose to).",
    ],
    sections: [
      {
        heading: "What is included in the free consultation",
        body: [],
        bullets: [
          "An assessment of your matter — what category of law applies, what statutes are relevant, what procedural framework governs.",
          "A realistic outcome assessment — what the likely range of outcomes is, what factors will determine the actual outcome, what risks are involved.",
          "A timeline estimate — how long the matter will take if pursued, with city-specific calibration.",
          "A fee estimate — realistic 2026 cost range for the matter type, with the cost drivers explained.",
          "Answers to your specific questions — within the scope of the matter you described.",
          "A recommendation on next steps — including, where relevant, whether you actually need a lawyer or whether the matter can be handled differently.",
        ],
      },
      {
        heading: "What is NOT included",
        body: [],
        bullets: [
          "Document drafting (this is engagement work — separate fee).",
          "Court appearances or filings (engagement work).",
          "Detailed case-law research beyond what is needed to assess your matter.",
          "Multi-session handholding (the consultation is one session; subsequent sessions are billable unless you formally engage the lawyer).",
        ],
      },
      {
        heading: "How to prepare for the consultation",
        body: [],
        bullets: [
          "Write a 1-page chronological narration of the facts. Dates, places, parties, key events. This makes the conversation 3x more efficient.",
          "Have any relevant documents ready — FIR, notices, contracts, agreements, court orders, correspondence.",
          "Know what you want from the matter — refund, possession, divorce, bail, defence, recovery, declaration, etc. The remedy you want shapes the strategy.",
          "Prepare your specific questions — the consultation is a Q&A; come with the questions you most need answered.",
          "Be honest about prior steps — including any prior counsel, prior settlement attempts, or prior court filings.",
        ],
      },
      {
        heading: "Why is the first consultation free?",
        body: [
          "Three reasons. (1) Friction reduction — most legal-service buyers genuinely don't know whether their matter needs a lawyer at all; the free consultation lets them learn before paying. (2) Trust building — the consultation lets the buyer evaluate the lawyer before committing. (3) Mutual fit — not every matter is a fit for every lawyer; the consultation lets both sides assess fit.",
          "We can offer the free first consultation at scale because (a) the verified lawyers in our network value access to high-intent matched leads; (b) the consultation is bounded (30-45 minutes, single session); and (c) the consultation produces a clear engagement decision — proceed or don't — that lets the lawyer plan time efficiently.",
        ],
      },
      {
        heading: "After the consultation — the engagement decision",
        body: [
          "If you decide to engage the lawyer, you sign a written engagement letter specifying scope, fee, milestones, out-of-pocket charges, and termination terms. Indian Bar Council guidelines do not impose specific engagement-letter formats, but a written letter is the single best protection against fee disputes later.",
          "If you decide not to engage, you owe nothing. The information shared during the consultation remains confidential under attorney-client privilege; the lawyer may not share it.",
          "If you want a second opinion, ask at the consultation — most NyaySevak lawyers will support a second-opinion process where the matter is genuinely complex.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is the first consultation really free?",
        answer:
          "Yes, completely free, no card required, no hidden charges. The lawyer's time for the first 30-45 minute consultation is provided at no cost to the user. There is no obligation to proceed with engagement after the consultation.",
      },
      {
        question: "How quickly can I get a free consultation?",
        answer:
          "Typical match-and-schedule time is 4 hours for non-urgent matters; 30-60 minutes for urgent matters (impending arrest, court hearing the same day, etc.). We prioritise urgency in matching.",
      },
      {
        question: "Can I get free legal advice without engaging a lawyer afterwards?",
        answer:
          "Yes. The consultation is unconditional. The whole point is that you can learn about your matter without committing to engagement. If you decide not to proceed, you owe nothing.",
      },
      {
        question: "What if I need a lawyer who speaks a specific language?",
        answer:
          "Tell us at the request stage. Our network includes lawyers fluent in English, Hindi, Marathi, Tamil, Telugu, Kannada, Bengali, Gujarati. Match by language is straightforward.",
      },
      {
        question: "Is the consultation confidential?",
        answer:
          "Yes. Attorney-client privilege applies from the moment you describe your matter. The lawyer is bound by Bar Council rules of confidentiality and may not share the information you provide.",
      },
      {
        question: "Can I get free legal aid if I can't afford a lawyer at all?",
        answer:
          "Yes. The Legal Services Authorities Act 1987 creates free legal aid for women, children, SC/ST, persons with disability, and persons with annual income below state-prescribed thresholds (typically ₹1-3 lakh annually). NyaySevak's Legal Aid service connects eligible users with NALSA / SLSA / DLSA panels.",
      },
    ],
    ctaTitle: "Get your free consultation now",
    ctaCopy:
      "Tell us about your matter — a verified Bar-Council-enrolled lawyer will be matched to you within 4 hours. No card required, no obligation, complete confidentiality.",
  },
];

// Extracted helper: compute eight city cards using the cities data so the
// listicle pages can render the city table without re-typing each city.
export function citiesForVariant() {
  return cities.map((c) => ({ slug: c.slug, name: c.name }));
}
