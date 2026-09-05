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
  // feeRange was removed in Week 26. It carried per-city advocate fee ranges
  // on the city cards; the rendering came out in Week 25 and the data follows
  // now, so it cannot be switched back on.
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
  // Week 11: 40-90-word declarative direct answer rendered as the AnswerBlock
  // (AEO) card near the top of the page and targeted by the route's Speakable
  // JSON-LD. Distinct from hero.sub (a marketing strap-line): this reads as a
  // standalone factual answer to the head query.
  quickAnswer?: string;
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
    quickAnswer:
      "The best property lawyers in India are Bar-Council-verified advocates with a documented practice history at the relevant city's Sub-Registrar offices and High Court, plus hands-on experience with that city's specific property regime. NyaySevak lists verified property advocates across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and Ahmedabad for title verification, RERA complaints, conveyancing, and partition — with a free case assessment.",
    title:
      "Best Property Lawyers in India 2026 — City-Wise Verified Advocates",
    metaDescription:
      "Find the best property lawyers in India 2026 — verified advocates across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Title verification, RERA, conveyancing, partition. Free case assessment available.",
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
      sub: "Verified, Bar-Council-checked property advocates across the 8 largest Indian metros. Title verification, RERA complaints, conveyancing, partition suits, builder-buyer disputes, tenancy. Free case assessment available.",
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
      },
      {
        city: "Mumbai",
        citySlug: "mumbai",
        highlights: [
          "Cooperative Housing Society (CHS) ownership structure dominates — distinct from sale-deed conveyance.",
          "DCPR 2034 redevelopment regulations (33(5)/(7)/(9)/(10)/(11)) govern most society redevelopment.",
          "MahaRERA is India's most active RERA — matured complaint adjudication.",
        ],
      },
      {
        city: "Bangalore",
        citySlug: "bangalore",
        highlights: [
          "A-khata vs B-khata distinction is decisive for resale and bank financing.",
          "Gramathana (revenue village) land needs conversion order before urban transactions.",
          "BBMP/BDA/BMRDA layouts have different approval implications.",
        ],
      },
      {
        city: "Chennai",
        citySlug: "chennai",
        highlights: [
          "CMDA vs DTCP jurisdictional boundary determines applicable planning standards.",
          "Patta-chitta-adangal revenue records overlay the registered conveyance.",
          "Tamil Nadu Apartment Ownership Act 1994 governs apartment ownership.",
        ],
      },
      {
        city: "Hyderabad",
        citySlug: "hyderabad",
        highlights: [
          "Dharani portal (centralised land record from 2020) — own reliability concerns.",
          "GPA restrictions (post-2015 Telangana) limit power-of-attorney transfers.",
          "HMDA layout regularisation (within outer ring road) is largely complete.",
        ],
      },
      {
        city: "Pune",
        citySlug: "pune",
        highlights: [
          "Co-operative Court (Pune) has dedicated jurisdiction for society disputes.",
          "PMC stamp-duty rates — 6% for males, 4% for females.",
          "Maharashtra Rent Control Act 1999 applies for legacy tenancies.",
        ],
      },
      {
        city: "Kolkata",
        citySlug: "kolkata",
        highlights: [
          "Calcutta HC original civil jurisdiction (>₹10 lakh) for property suits.",
          "WB-HIRA (separate from RERA) covers West Bengal residential projects.",
          "Mutation through BL&LRO via online portal.",
        ],
      },
      {
        city: "Ahmedabad",
        citySlug: "ahmedabad",
        highlights: [
          "Garvi 2.0 portal hosts the registration record.",
          "GIFT City IFSC regulatory framework — India's only such centre.",
          "TP scheme framework determines plot lay-outs.",
        ],
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
          "Three differences: (i) every property lawyer in our network is Bar-Council verified — listing-site directories often display unverified profiles; (ii) we match lawyers to your specific city, court, and matter type — listing sites typically present alphabetical lists; (iii) the first step is a free case assessment with no obligation — listing-site directories charge per lead.",
      },
    ],
    practiceCanonicalSlug: "property-real-estate",
    ctaTitle: "Need a property lawyer right now?",
    ctaCopy:
      "Get a free case assessment with a verified property advocate in your city. We match you to a lawyer with documented experience in your specific city and matter type — typically within 4 hours.",
  },

  // ============================================================
  // Best Divorce Lawyers in India
  // ============================================================
  {
    slug: "best-divorce-lawyers-in-india",
    quickAnswer:
      "The best divorce lawyers in India specialise in matrimonial law and the Family Courts, handling mutual-consent and contested divorce, maintenance, child custody, and alimony under the Hindu Marriage Act, Special Marriage Act, and applicable personal law. NyaySevak connects you with verified divorce advocates across the 8 largest metros, with transparent fees and a free case assessment to assess your matter confidentially.",
    title:
      "Best Divorce Lawyers in India 2026 — City-Wise Verified Family Advocates",
    metaDescription:
      "Find the best divorce lawyers in India 2026 — verified family advocates across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Mutual consent, contested, custody, maintenance. Free case assessment available.",
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
      sub: "Verified, Bar-Council-checked divorce and family-law advocates across the 8 largest Indian metros. Mutual-consent and contested divorce, child custody, maintenance, domestic violence, matrimonial property. Free case assessment available.",
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
        heading: "What actually drives the cost",
        body: [
          "Bar Council of India rules restrict advocate fee advertising, so this page does not publish fee amounts. What can be set out is what the number depends on — and in matrimonial work the drivers are unusually predictable, so a well-scoped brief rarely surprises anyone.",
          "The single largest factor is whether the matter is mutual-consent or contested. A mutual-consent divorce follows a defined two-motion procedure and is commonly scoped as a fixed package covering both motions. A contested matter has no defined end point, so it is engaged stage by stage instead.",
          "The second factor is how many proceedings are actually running. A divorce petition alone is one brief; a divorce running alongside a maintenance claim, a Domestic Violence Act application and a criminal complaint is four, before different judges, and any settlement has to close all of them together.",
          "The third is seniority and forum. A Family Court appearance, a High Court appeal and a senior-counsel brief sit at different levels, and where a spouse has moved states, a Supreme Court transfer petition is separate work again.",
          "Asset complexity drives the rest — a settlement dividing a salaried couple's flat is a different exercise from one involving a family firm, where partnership retirement, share transfer and release of personal guarantees all have to be dealt with or the parties stay financially entangled after the decree.",
          "Whatever the matter, the advocate quotes the fee and agrees it in writing before work begins, and your first step through NyaySevak is a free case assessment with no obligation.",
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
      },
      {
        city: "Mumbai",
        citySlug: "mumbai",
        highlights: [
          "Bandra Family Court — longer waiting list but Bombay HC encourages waivers.",
          "Parsi Matrimonial Court at Bombay HC — unique in India.",
          "Strong commercial-bar exposure for high-net-worth matrimonial matters.",
        ],
      },
      {
        city: "Bangalore",
        citySlug: "bangalore",
        highlights: [
          "Vyalikaval Family Court — reasonable timelines.",
          "Karnataka HC is technology-forward — virtual hearings routine.",
        ],
      },
      {
        city: "Chennai",
        citySlug: "chennai",
        highlights: [
          "Saidapet Family Court — heavy docket; waivers less commonly granted.",
          "Madras HC family matters bench has its own procedural conventions.",
        ],
      },
      {
        city: "Hyderabad",
        citySlug: "hyderabad",
        highlights: [
          "Saroornagar Family Court — moderate timelines.",
          "Telangana HC writ practice for specific custody/maintenance disputes.",
        ],
      },
      {
        city: "Pune",
        citySlug: "pune",
        highlights: [
          "Shivajinagar Family Court — moderate.",
          "Maharashtra Rent Control Act overlay common in matrimonial-property division.",
        ],
      },
      {
        city: "Kolkata",
        citySlug: "kolkata",
        highlights: [
          "Alipore Family Court — slower; expect longer timelines.",
          "Calcutta HC original-civil-jurisdiction matters above ₹10 lakh.",
        ],
      },
      {
        city: "Ahmedabad",
        citySlug: "ahmedabad",
        highlights: [
          "Family Court — moderate-to-fast.",
          "Lower fee benchmarks across most matter types.",
        ],
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
      "Get a free case assessment with a verified divorce or family-law advocate in your city. We match you to a lawyer with documented Family Court practice and the right experience for your specific matter (mutual-consent, contested, custody, or maintenance).",
  },

  // ============================================================
  // Best Criminal Lawyers in India
  // ============================================================
  {
    slug: "best-criminal-lawyers-in-india",
    quickAnswer:
      "The best criminal lawyers in India are advocates experienced in bail, trial, and appellate defence under the Bharatiya Nyaya Sanhita and Bharatiya Nagarik Suraksha Sanhita, 2023, who appear regularly before the relevant Sessions Court, High Court, and Supreme Court. NyaySevak connects you with verified criminal defence advocates across the 8 largest metros for FIRs, anticipatory and regular bail, and trials — with a confidential free case assessment.",
    title:
      "Best Criminal Lawyers in India 2026 — City-Wise Verified Defence Advocates",
    metaDescription:
      "Find the best criminal lawyers in India 2026 — verified defence advocates across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Bail, FIR quashing, trial defence, PMLA, NDPS, CBI cases. Free case assessment available.",
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
      sub: "Verified, Bar-Council-checked criminal-defence advocates across the 8 largest Indian metros. Bail, anticipatory bail, FIR quashing, trial defence, PMLA, NDPS, CBI cases. Free case assessment available.",
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
        heading: "What actually drives the cost",
        body: [
          "Bar Council of India rules restrict advocate fee advertising, so this page does not publish fee amounts. What it can set out is what the figure depends on, which in criminal defence is driven more by forum and stage than by anything else.",
          "Forum comes first. A Magistrate court appearance, a Sessions Court matter, a High Court bail or quashing petition and a Supreme Court special leave petition are four different levels of engagement, and each is scoped separately.",
          "Stage matters as much as forum. A discrete application — bail, anticipatory bail, quashing — is usually scoped as a package with a defined end. A full trial has no such boundary and is engaged stage by stage, which is why the two are quoted so differently.",
          "Seniority is the third driver. A designated Senior Advocate is briefed for specific hearings rather than carried through a matter, so a senior-counsel brief sits alongside the instructing advocate's engagement rather than replacing it.",
          "Special statutes raise the work substantially. PMLA, NDPS, CBI and NIA matters run before designated special courts, carry their own bail thresholds — Section 37 of the NDPS Act for commercial quantities, for instance — and demand correspondingly more preparation.",
          "In every case the advocate quotes the fee and agrees it in writing before work begins, and your first step through NyaySevak is a free case assessment with no obligation.",
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
      },
      {
        city: "Mumbai",
        citySlug: "mumbai",
        highlights: [
          "City Civil & Sessions (Fort), Dindoshi, plus PMLA/MCOCA Special Courts at Ballard Estate.",
          "MCOCA expertise — unique to Mumbai/Maharashtra.",
          "Strong PMLA defence bar (Bombay HC has substantial ED-prosecution docket).",
        ],
      },
      {
        city: "Bangalore",
        citySlug: "bangalore",
        highlights: [
          "City Civil & Sessions Court Bengaluru Urban + specialised CBI Court.",
          "Karnataka HC technology-forward — virtual hearings routine.",
        ],
      },
      {
        city: "Chennai",
        citySlug: "chennai",
        highlights: [
          "Sessions Court at Egmore + Madras HC for bail / quashing.",
          "Tamil Nadu Goondas Act 1982 considerations in habitual-offender matters.",
        ],
      },
      {
        city: "Hyderabad",
        citySlug: "hyderabad",
        highlights: [
          "Three police commissionerates create distinctive jurisdictional questions.",
          "Telangana HC criminal bench moderate-to-active.",
        ],
      },
      {
        city: "Pune",
        citySlug: "pune",
        highlights: [
          "Pune Sessions Court + Bombay HC bench at Nagpur for some matters.",
          "MCOCA jurisdiction in organised-crime cases.",
        ],
      },
      {
        city: "Kolkata",
        citySlug: "kolkata",
        highlights: [
          "Alipore Sessions Court + Calcutta HC original-side criminal jurisdiction.",
          "Slower listing timelines — plan accordingly.",
        ],
      },
      {
        city: "Ahmedabad",
        citySlug: "ahmedabad",
        highlights: [
          "Sessions Court Ahmedabad + Gujarat HC.",
          "Lower fee benchmarks across most matter types.",
        ],
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
      "Get a free case assessment with a verified criminal-defence advocate in your city. We match you to a lawyer with the right Sessions/HC/special-court experience for your matter — typically within 4 hours.",
  },

  // ============================================================
  // Case Assessment
  // ============================================================
  {
    slug: "case-assessment",
    quickAnswer:
      "Looking for free legal advice in India? What serious matters actually need first is a diagnosis — NyaySevak offers a free case assessment with a Bar-Council-verified lawyer for any matter, by phone, video, or chat, with no obligation to proceed. You describe your issue, get matched with a relevant advocate within 24 hours, and leave with a clear next-step plan; any further fees are agreed upfront before work begins. Government legal aid via NALSA is also available for eligible persons.",
    title:
      "Case Assessment in India — Talk to a Verified Lawyer Today",
    metaDescription:
      "Free case assessment in India. Talk to a verified Bar-Council-checked lawyer for criminal, divorce, property, corporate, civil, or any other matter. No obligation — free assessment, response within 4 hours.",
    primaryKeyword: "free case assessment",
    secondaryKeywords: [
      "free case assessment India",
      "free case assessment",
      "free legal advice India",
      "talk to a lawyer free",
      "free case assessment lawyer",
      "online free case assessment",
      "free legal aid India",
      "ask a lawyer free",
    ],
    hero: {
      eyebrow: "Free Service · No Obligation",
      h1: "Case Assessment in India",
      sub: "Talk to a verified, Bar-Council-checked lawyer about your legal matter — free, with no obligation to engage further. Available across criminal, civil, divorce, property, corporate, tax, cyber, consumer, and 25+ other practice areas.",
    },
    intro: [
      "Most Indian legal-service buyers delay engaging a lawyer because they don't know what the matter will cost — and they don't want to commit money to find out. The free case assessment removes this friction. You describe your situation; a verified lawyer assesses the matter, explains your options, gives a realistic timeline and fee estimate, and answers questions. No obligation to proceed.",
      "NyaySevak's free case assessment is structured deliberately. We match you to a lawyer with documented experience in your specific matter type and (where relevant) your city's procedural particulars. The consultation runs 30-45 minutes and is held by phone, video, or chat — your choice. The lawyer is a real Bar-Council-enrolled advocate, not a chatbot or a salesperson.",
      "What this page explains: what to expect from the consultation; how to prepare; what the lawyer will tell you; what it does not include; and the realistic timeline for proceeding from consultation to hiring (if you choose to).",
    ],
    sections: [
      {
        heading: "What is included in the case assessment",
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
        heading: "Why start with a free case assessment?",
        body: [
          "Three reasons. (1) Serious matters only — free filters out idle enquiries, so the verified lawyer spends the session on people genuinely ready to act on their matter. (2) A real deliverable — you leave with a clear diagnosis of your situation and a written next-step plan, not vague free advice. (3) Mutual fit — the assessment lets both you and the lawyer decide whether to proceed to full engagement.",
          "The assessment is bounded (30-45 minutes, single session) and ends with a clear engagement decision — proceed or don't — so both sides know exactly where they stand before any larger fees are discussed.",
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
        question: "How much is the case assessment, and what do I get?",
        answer:
          "The case assessment is free, with no obligation and no hidden charges — the first 30-45 minute session with a verified lawyer costs nothing. You leave with a diagnosis of your matter and a written next-step plan, and there is no obligation to proceed to engagement afterwards.",
      },
      {
        question: "How quickly can I get a case assessment?",
        answer:
          "Typical match-and-schedule time is 4 hours for non-urgent matters; 30-60 minutes for urgent matters (impending arrest, court hearing the same day, etc.). We prioritise urgency in matching.",
      },
      {
        question: "Can I get the free assessment without engaging a lawyer afterwards?",
        answer:
          "Yes. The assessment is unconditional — the whole point is that you can understand your matter and your options without committing to engagement. If you decide not to proceed, you owe nothing.",
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
    ctaTitle: "Get your case assessment now",
    ctaCopy:
      "Tell us about your matter — a verified Bar-Council-enrolled lawyer will be matched to you within 4 hours. No card required, no obligation, complete confidentiality.",
  },

  // ============================================================
  // Best Civil Lawyers in India  (Week 15 — completes the "best <practice>
  // lawyers in India" set; targets the bangalore-civil + property-civil
  // impression cluster GSC shows ranking pos 30+ on the city × practice pages)
  // ============================================================
  {
    slug: "best-civil-lawyers-in-india",
    quickAnswer:
      "The best civil lawyers in India are Bar-Council-verified litigators with a documented record before the relevant city's District Civil Courts, the High Court, and (for high-value commercial suits) the Commercial Courts under the Commercial Courts Act, 2015. They handle property and partition suits, money recovery, specific performance, injunctions, declaration suits, and consumer and RERA matters. NyaySevak matches you with a verified civil advocate across the 8 largest metros — with a free case assessment and fees agreed upfront.",
    title:
      "Best Civil Lawyers in India 2026 — City-Wise Verified Advocates",
    metaDescription:
      "Find the best civil lawyers in India 2026 — verified civil litigation advocates across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Property suits, recovery, injunctions, specific performance, partition. Free case assessment available.",
    primaryKeyword: "best civil lawyers in India",
    secondaryKeywords: [
      "best civil lawyer India",
      "top civil advocates India",
      "civil lawyer near me",
      "civil litigation lawyer India",
      "civil court advocate",
      "property suit lawyer",
      "recovery suit lawyer",
      "civil lawyer fees India",
    ],
    hero: {
      eyebrow: "Civil Litigation · India · 2026",
      h1: "Best Civil Lawyers in India",
      sub: "Verified, Bar-Council-checked civil litigation advocates across the 8 largest Indian metros. Property and partition suits, money recovery, specific performance, injunctions, declaration, consumer and RERA matters. Free case assessment available.",
    },
    intro: [
      "Civil litigation is the widest category in Indian practice — anything that is not a crime and not purely a regulatory matter ultimately resolves through a civil suit. Money recovery, breach of contract, property title and partition, specific performance of an agreement to sell, injunctions to stop a wrong before it happens, and declaratory suits to settle a legal status all run through the civil courts under the Code of Civil Procedure, 1908. The single biggest determinant of a civil outcome is procedural: which forum, what valuation, what limitation period, and whether interim relief is secured early.",
      "This page lists NyaySevak's network of verified civil lawyers across the 8 largest Indian litigation markets — Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Every civil advocate listed is Bar-Council verified, has a documented practice history before the relevant District Civil Court and High Court, and understands the city's specific civil-jurisdiction quirks (the Delhi and Bombay High Court original-side pecuniary thresholds, the Madras and Calcutta High Court original civil jurisdiction, and the Commercial Courts that now hear most high-value contractual disputes).",
      "Below: what civil litigation actually covers; how to evaluate a civil lawyer; the limitation traps that quietly defeat valid claims; realistic 2026 fee benchmarks; and — at the bottom — direct links to our city-specific civil-lawyer hubs.",
    ],
    sections: [
      {
        heading: "What does a 'civil lawyer' actually handle?",
        body: [
          "The civil brief is broad: (i) money recovery — suits for unpaid dues, loans, and receivables, including summary suits under Order XXXVII CPC for negotiable instruments and written contracts; (ii) property suits — title declaration, partition, possession, and mesne profits; (iii) specific performance — compelling completion of an agreement to sell under the Specific Relief Act, 1963 (substantially strengthened by the 2018 amendment, which made specific performance the rule rather than the exception); (iv) injunctions — temporary (Order XXXIX CPC) and permanent, to restrain a defendant from causing irreversible harm; (v) declaratory suits — to establish a right, status, or the invalidity of a document; (vi) consumer and RERA matters, which run on civil principles before specialised fora.",
          "Securing interim relief early frequently matters more than the final decree. A well-pleaded temporary injunction or an Order XXXVIII attachment-before-judgment can preserve the subject matter for the years a suit takes to reach trial.",
        ],
      },
      {
        heading: "How to evaluate a civil lawyer",
        body: [
          "Four signals matter most:",
        ],
        bullets: [
          "Bar Council enrolment and current practising status — verifiable on the State Bar Council's website.",
          "A documented record at the right forum — District Civil Court, the High Court's original or appellate side, and the Commercial Court for suits above the ₹3-lakh commercial threshold. Pecuniary and territorial jurisdiction decide where your suit even can be filed.",
          "Command of limitation. The Limitation Act, 1963 quietly defeats more valid civil claims than any defence on merits — three years for most contract and recovery actions, twelve for possession based on title. A lawyer who diaries limitation correctly is worth more than one who argues eloquently after the period has lapsed.",
          "A transparent, written fee structure — drafting, per-appearance, and interim-application fees stated upfront. Long-running suits with vague fee terms are a recurring source of client disputes.",
        ],
      },
      {
        heading: "City × city expertise — what differs",
        body: [
          "Civil procedure is federal in form but heavily city-specific in operation. The jurisdictional thresholds and the choice between the District Court and the High Court's original side vary materially by city:",
        ],
      },
    ],
    cityTable: [
      {
        city: "Delhi",
        citySlug: "delhi",
        highlights: [
          "Delhi HC original side hears suits above ₹2 crore — rare in India; lower-value suits go to the District Courts.",
          "Dedicated Commercial Courts at each district complex under the Commercial Courts Act.",
          "Heavy property, recovery, and builder-buyer civil dockets.",
        ],
      },
      {
        city: "Mumbai",
        citySlug: "mumbai",
        highlights: [
          "Bombay HC original civil jurisdiction for high-value suits; City Civil Court at Fort otherwise.",
          "Small Causes Court has exclusive tenancy jurisdiction (MRC Act).",
          "Commercial Division is among the busiest in India.",
        ],
      },
      {
        city: "Bangalore",
        citySlug: "bangalore",
        highlights: [
          "City Civil & Sessions Court (Mayo Hall / Bengaluru Urban) handles the bulk of civil suits.",
          "Commercial Courts handle IT/contract disputes — a large share of the docket.",
          "Khata and conversion issues frequently surface inside civil property suits.",
        ],
      },
      {
        city: "Chennai",
        citySlug: "chennai",
        highlights: [
          "Madras HC has original civil jurisdiction (City Civil limit aside) — one of the heaviest dockets in India.",
          "Patta-chitta revenue records overlay civil title suits.",
          "Strong tradition of specific-performance and partition litigation.",
        ],
      },
      {
        city: "Hyderabad",
        citySlug: "hyderabad",
        highlights: [
          "City Civil Court and Ranga Reddy District Court carry most civil filings.",
          "Dharani-portal land-record disputes feature heavily in title suits.",
          "GPA-transfer restrictions (post-2015 Telangana) shape property-suit strategy.",
        ],
      },
      {
        city: "Pune",
        citySlug: "pune",
        highlights: [
          "District & Sessions Court (Shivajinagar) and Senior-Division Civil Court for valued suits.",
          "Co-operative Court has dedicated jurisdiction over society disputes.",
          "Bombay HC (appellate) for writs and high-value appeals.",
        ],
      },
      {
        city: "Kolkata",
        citySlug: "kolkata",
        highlights: [
          "Calcutta HC original civil jurisdiction for suits above ₹10 lakh — India's oldest chartered HC.",
          "City Civil Court and Alipore for lower-value matters.",
          "Strong testamentary and partition practice.",
        ],
      },
      {
        city: "Ahmedabad",
        citySlug: "ahmedabad",
        highlights: [
          "City Civil & Sessions Court (Bhadra) for valued civil suits.",
          "Gujarat HC handles writs and high-value appeals/original matters.",
          "Heavy real-estate and recovery civil docket.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best way to find a civil lawyer in India?",
        answer:
          "Choose a Bar-Council-verified advocate with a documented record at the exact forum your matter belongs to — District Civil Court, the High Court's original or appellate side, or the Commercial Court. Confirm enrolment on the State Bar Council website, and get a written engagement letter stating scope and fees. Tell NyaySevak about your matter and we match you within 24 hours with a verified civil advocate in your city; the first step is a free case assessment.",
      },
      {
        question: "How much do civil lawyers charge in India in 2026?",
        answer:
          "Civil-court appearances typically run ₹10,000–₹60,000 each at the District/City Civil Court level and ₹30,000–₹5,00,000 at the High Court, depending on the city and counsel seniority. Drafting a plaint or written statement is usually ₹15,000–₹75,000. Mumbai and Delhi rates are the highest; Hyderabad, Kolkata, and Ahmedabad run 30–50% lower for ordinary practice. Through NyaySevak the first step is a free case assessment and all fees are agreed upfront.",
      },
      {
        question: "How long does a civil suit take in India?",
        answer:
          "A straightforward recovery or injunction suit at the District Court often takes 2–4 years to decree; contested title or partition suits commonly run 4–8 years, and appeals add further time. This is exactly why securing interim relief — a temporary injunction or attachment before judgment — early in the suit usually matters more than the final decree. Summary suits under Order XXXVII CPC for written contracts and cheques are materially faster.",
      },
      {
        question: "What is the difference between a civil and a criminal lawyer?",
        answer:
          "A civil lawyer handles disputes between private parties over rights, money, property, and contracts, where the remedy is compensation, possession, or an injunction. A criminal lawyer handles offences prosecuted by the State, where the outcome is acquittal, conviction, bail, or sentence. Some matters run in parallel — a cheque-bounce case is criminal (S.138 NI Act) while recovery of the same debt can also be a civil summary suit.",
      },
      {
        question: "Can I file a civil suit without a lawyer?",
        answer:
          "You may appear in person ('party-in-person'), and small consumer matters are often run that way. But civil procedure is unforgiving — a wrongly valued suit, a missed limitation period, a defective interim application, or improper pleadings can sink an otherwise strong claim before it is heard on merits. For anything beyond a simple, low-value matter, experienced civil counsel materially improves the outcome.",
      },
      {
        question: "What is specific performance and when can I claim it?",
        answer:
          "Specific performance is a decree compelling a party to actually perform a contract — most commonly, to complete an agreement to sell immovable property — instead of merely paying damages. After the Specific Relief (Amendment) Act, 2018, specific performance is the rule rather than a discretionary exception, provided you have performed (or are ready and willing to perform) your part and file within the three-year limitation. It is one of the most powerful civil remedies in property transactions.",
      },
    ],
    practiceCanonicalSlug: "civil-law",
    ctaTitle: "Need a civil lawyer right now?",
    ctaCopy:
      "Get a free case assessment with a verified civil litigation advocate in your city. Tell us your matter and the court involved — we match you to a lawyer with documented experience in that exact forum, typically within 4 hours.",
  },

  // ============================================================
  // Best Corporate Lawyers in India  (Week 15 — targets the corporate-law-firm
  // /corporate-lawyer impression cluster GSC shows for Hyderabad, Ahmedabad,
  // Kolkata, and Bangalore)
  // ============================================================
  {
    slug: "best-corporate-lawyers-in-india",
    quickAnswer:
      "The best corporate lawyers in India advise companies and founders on incorporation, contracts, compliance, fundraising, and M&A, and litigate before the NCLT, the High Court's Commercial Division, and regulators such as SEBI, the RBI, and the CCI. NyaySevak matches you with a verified corporate and business advocate — or a corporate law firm — across the 8 largest metros, with a free case assessment and fees agreed upfront.",
    title:
      "Best Corporate Lawyers in India 2026 — City-Wise Verified Advocates & Law Firms",
    metaDescription:
      "Find the best corporate lawyers and law firms in India 2026 — verified business advocates across Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Incorporation, contracts, NCLT, IBC, M&A, compliance. Free case assessment available.",
    primaryKeyword: "best corporate lawyers in India",
    secondaryKeywords: [
      "best corporate lawyer India",
      "top corporate law firms India",
      "corporate lawyer near me",
      "business lawyer India",
      "company lawyer",
      "NCLT lawyer",
      "startup lawyer India",
      "corporate lawyer fees India",
    ],
    hero: {
      eyebrow: "Corporate & Business Law · India · 2026",
      h1: "Best Corporate Lawyers in India",
      sub: "Verified, Bar-Council-checked corporate and business advocates and law firms across the 8 largest Indian metros. Incorporation, shareholder and commercial contracts, compliance, fundraising, M&A, NCLT and IBC litigation. Free case assessment available.",
    },
    intro: [
      "Corporate legal work splits into two very different streams, and the best lawyer for one is rarely the best for the other. Transactional and advisory work — incorporation, founders' and shareholders' agreements, commercial contracts, employment and ESOP structuring, fundraising, due diligence, and M&A — is preventive and document-heavy. Disputes and regulatory work — oppression and mismanagement and insolvency before the NCLT, commercial arbitration, and proceedings before SEBI, the RBI, and the Competition Commission — is adversarial and forum-specific. Knowing which stream your matter falls into is the first decision.",
      "This page lists NyaySevak's network of verified corporate lawyers and law firms across the 8 largest Indian commercial centres — Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad. Whether you need an individual business advocate for a contract review or a corporate law firm for a financing round or an NCLT dispute, every lawyer listed is Bar-Council verified, with a documented record before the relevant NCLT bench, Registrar of Companies, and High Court Commercial Division.",
      "Below: what corporate lawyers actually do; how to choose between an individual advocate and a firm; the compliance calendar that quietly creates the most corporate liability; realistic 2026 fee benchmarks; and — at the bottom — direct links to our city-specific corporate-lawyer hubs.",
    ],
    sections: [
      {
        heading: "What does a 'corporate lawyer' actually do?",
        body: [
          "The corporate brief spans the company's whole life: (i) formation — incorporation (Pvt Ltd, LLP, OPC), founders' agreements, and the constitutional documents; (ii) contracts — shareholders' agreements, share-subscription and share-purchase agreements, commercial supply, services, distribution, and SaaS contracts; (iii) fundraising — seed to growth-stage equity, convertible notes, SAFEs, and the term-sheet-to-closing process; (iv) compliance — Companies Act 2013 filings, board and general-meeting governance, FEMA/FDI for foreign investment, and sector-specific licences; (v) M&A — due diligence, transaction structuring, CCI merger notification, and post-closing integration; (vi) disputes — oppression and mismanagement, IBC insolvency, and commercial arbitration.",
          "For most early-stage companies the highest-value work is preventive: a clean cap table, a well-drafted shareholders' agreement, and disciplined Companies Act compliance prevent the disputes that later cost far more to litigate.",
        ],
      },
      {
        heading: "Individual advocate or a corporate law firm?",
        body: [
          "Both are valid — the right choice depends on the matter:",
        ],
        bullets: [
          "An individual corporate advocate is usually the most cost-effective choice for contract review, a single agreement, routine compliance, or representation in one NCLT or arbitration matter.",
          "A corporate law firm is better suited to multi-workstream transactions — a financing round, an acquisition, or a cross-border deal — where corporate, tax, IP, and employment specialists must work in parallel under deadline.",
          "For litigation before the NCLT or the High Court Commercial Division, what matters most is documented bench experience, not the size of the masthead — a focused advocate who appears there weekly often outperforms a generalist team.",
          "Whichever you choose, insist on a written engagement letter with a clear fee basis (fixed, retainer, or per-appearance) and a defined scope.",
        ],
      },
      {
        heading: "City × city expertise — what differs",
        body: [
          "Corporate forums are geographically fixed: your NCLT bench, Registrar of Companies, and the High Court Commercial Division are determined by your registered office. The depth of the specialist bar also varies sharply by city:",
        ],
      },
    ],
    cityTable: [
      {
        city: "Delhi",
        citySlug: "delhi",
        highlights: [
          "NCLT Principal Bench + NCLAT (the appellate tribunal) both sit in Delhi.",
          "SEBI Northern Regional Office, CCI, and MCA Regional Director (North).",
          "Delhi HC Commercial Division is highly active for arbitration and IPR.",
        ],
      },
      {
        city: "Mumbai",
        citySlug: "mumbai",
        highlights: [
          "India's corporate HQ — SEBI, RBI, BSE/NSE, and the second-busiest NCLT bench.",
          "Highest IBC filing volume in India; MCIA for institutional arbitration.",
          "Deepest M&A, PE, and securities bar in the country.",
        ],
      },
      {
        city: "Bangalore",
        citySlug: "bangalore",
        highlights: [
          "India's startup capital — the deepest venture-financing and ESOP practice.",
          "NCLT Bengaluru Bench for Karnataka companies.",
          "Heavy SaaS, IP-licensing, and tech-M&A contract work.",
        ],
      },
      {
        city: "Chennai",
        citySlug: "chennai",
        highlights: [
          "NCLT Chennai Bench covers Tamil Nadu, Kerala, and the UTs of the south.",
          "Strong manufacturing, auto-ancillary, and family-business advisory practice.",
          "Madras HC Commercial Division for high-value contract disputes.",
        ],
      },
      {
        city: "Hyderabad",
        citySlug: "hyderabad",
        highlights: [
          "NCLT Hyderabad Bench for Telangana and Andhra Pradesh companies.",
          "Fast-growing IT, pharma, and life-sciences corporate base.",
          "Rising corporate-law-firm presence around HITEC City and the financial district.",
        ],
      },
      {
        city: "Pune",
        citySlug: "pune",
        highlights: [
          "Companies in Pune are filed before the NCLT Mumbai Bench.",
          "Strong auto, manufacturing, and IT-services corporate practice.",
          "Commercial disputes route through the Bombay HC (appellate).",
        ],
      },
      {
        city: "Kolkata",
        citySlug: "kolkata",
        highlights: [
          "NCLT Kolkata Bench covers West Bengal and the east/north-east.",
          "Deep tradition in company, testamentary, and commercial litigation at the Calcutta HC.",
          "Strong family-conglomerate and trading-house advisory base.",
        ],
      },
      {
        city: "Ahmedabad",
        citySlug: "ahmedabad",
        highlights: [
          "NCLT Ahmedabad Bench for Gujarat companies.",
          "GIFT City IFSC — India's only international financial-services centre.",
          "Heavy corporate, textile, and real-estate-company advisory and tax-writ work.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the best way to find a corporate lawyer in India?",
        answer:
          "Match the lawyer to the matter: an individual business advocate for a contract or single dispute, or a corporate law firm for a multi-workstream transaction. Confirm Bar Council enrolment, and for litigation insist on documented experience before your NCLT bench or the High Court Commercial Division. Tell NyaySevak whether you need an advocate or a firm and what the matter is — we match you within 24 hours, with a free case assessment and fees agreed upfront.",
      },
      {
        question: "How much do corporate lawyers charge in India in 2026?",
        answer:
          "Advisory work is usually a monthly retainer (₹30,000–₹5,00,000 depending on city, scope, and firm tier) or a fixed fee per document (₹15,000–₹1,50,000 for a shareholders' agreement or contract suite). NCLT and Commercial Division litigation runs ₹25,000–₹7,50,000+ per hearing by seniority. Mumbai and Delhi are the highest; Hyderabad, Kolkata, and Ahmedabad are materially lower. Through NyaySevak the first step is a free case assessment.",
      },
      {
        question: "Which NCLT bench handles my company?",
        answer:
          "Your NCLT bench is fixed by the state of your company's registered office — for example, Maharashtra (including Pune) goes to NCLT Mumbai; Karnataka to Bengaluru; Telangana and Andhra Pradesh to Hyderabad; Tamil Nadu and Kerala to Chennai; West Bengal to Kolkata; Gujarat to Ahmedabad; and Delhi to the Principal Bench. Appeals from any bench go to the NCLAT. Matching your lawyer to the correct bench is essential.",
      },
      {
        question: "Do I need a corporate lawyer to register a company in India?",
        answer:
          "Incorporation itself can be done through the MCA portal with a company secretary or CA, and many founders do. A corporate lawyer adds the most value on what comes after incorporation — the founders' agreement, the shareholders' agreement, ESOP pool, IP assignment, and the cap-table structure. These documents prevent the disputes that are far more expensive to litigate later, so legal involvement at formation is a high-return, low-cost investment.",
      },
      {
        question: "What is the difference between a corporate lawyer and a company secretary?",
        answer:
          "A company secretary (CS) handles statutory compliance and filings under the Companies Act and is the in-house governance officer. A corporate lawyer (advocate) drafts and negotiates contracts, advises on legal risk and transactions, and — critically — can represent the company in litigation before the NCLT, tribunals, and courts, which a CS cannot. Growing companies typically use both.",
      },
      {
        question: "Can a startup afford a corporate lawyer?",
        answer:
          "Yes — and the cost of not having one is usually higher. Many corporate advocates offer fixed-fee startup packages (incorporation-to-shareholders'-agreement) and flexible retainers scaled to stage. The founders' and shareholders' agreements, a clean cap table, and proper IP assignment are exactly the documents investors diligence — getting them right early protects valuation at the next round. NyaySevak's first step is a free case assessment, so you can scope the cost before committing.",
      },
    ],
    practiceCanonicalSlug: "corporate-business",
    ctaTitle: "Need a corporate lawyer or law firm right now?",
    ctaCopy:
      "Get a free case assessment with a verified corporate and business advocate — or a corporate law firm — in your city. Tell us whether it's advisory, transactional, or a dispute, and we match you to the right lawyer for that work, typically within 4 hours.",
  },
];

// Extracted helper: compute eight city cards using the cities data so the
// listicle pages can render the city table without re-typing each city.
export function citiesForVariant() {
  return cities.map((c) => ({ slug: c.slug, name: c.name }));
}
