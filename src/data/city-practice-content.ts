// Week 5: Hand-written content for 40 city × practice-area landing pages.
// Each combination has genuinely distinct lead/landscape/fees/FAQs so pages are
// NOT templated doorway duplicates (which Google penalises).

import type { CityPracticeSlug } from "./cities";

export interface CityPracticeFAQ {
  question: string;
  answer: string;
}

export interface CityPracticeContent {
  lead: string;              // ~80-word hero intro
  landscape: string[];       // 2–3 paragraphs of local legal landscape
  courtsForThisMatter: string[]; // Practice-specific courts within the city
  caseTypes: { title: string; desc: string }[]; // 5-6 case types handled
  feeRange: {
    consultation: string;    // e.g. "₹1,500–₹5,000"
    district: string;        // per appearance at district level
    highCourt: string;       // per appearance at HC
    note: string;            // local fee observation
  };
  faqs: CityPracticeFAQ[];   // 6 city × practice Q&As
  localNotes: string[];      // 2–3 distinctive local considerations
}

// Keyed by `${citySlug}__${practiceSlug}`
export const cityPracticeContent: Record<string, CityPracticeContent> = {
  // ────────────────────────────── DELHI ──────────────────────────────
  "delhi__criminal-law": {
    lead:
      "Delhi's criminal justice system is the country's busiest — six district court complexes, the Delhi High Court, and the Supreme Court collectively handle everything from petty offences to the most politically sensitive PMLA, CBI, and NIA matters. NyaySevak connects you with Bar-Council-verified Delhi criminal lawyers who appear daily at Tis Hazari, Patiala House, Karkardooma, Saket, Rohini, and Dwarka, with direct High Court filing capability for bail, quashing, and appeals.",
    landscape: [
      "Criminal matters in Delhi originate at one of the six District Court complexes depending on the police station: Tis Hazari handles North and Central districts, Patiala House serves New Delhi district and houses CBI special courts and the Trial Court for Delhi Riots and political matters, Karkardooma covers East and North-East (including Shahdara), Saket presides over South and South-East, Rohini handles North-West, and Dwarka Courts cover South-West and Dwarka sub-city. Each complex has its own Sessions Judge, Chief Metropolitan Magistrate, and specialised Fast Track Courts for POCSO, women, and senior-citizen cases.",
      "For Delhi, bail is the single highest-volume practice. Regular bail under Section 483 BNSS (formerly 439 CrPC) is filed before the Sessions Court at the relevant complex; anticipatory bail goes directly to the Sessions Court or the Delhi High Court. Quashing petitions under Section 528 BNSS (formerly 482 CrPC) are exclusive to the Delhi High Court. Special Acts — PMLA, NDPS, POCSO, UAPA, Prevention of Corruption Act — are tried in designated special courts (primarily at Patiala House and Rouse Avenue).",
      "Delhi's unique concentration of central investigation agencies — CBI, ED, NIA, NCB, DRI, Delhi Police Crime Branch, Economic Offences Wing — means a disproportionate share of complex white-collar and political crime litigation runs through the capital, and it has bred a specialist criminal bar that is among the most experienced in India.",
    ],
    courtsForThisMatter: [
      "Delhi High Court (quashing, bail, criminal appeals)",
      "Rouse Avenue Courts (CBI, ED, MP/MLA special courts)",
      "Patiala House Courts (New Delhi district, POCSO, special cases)",
      "Tis Hazari Courts (North & Central districts)",
      "Karkardooma Courts (East & North-East — riots cases)",
      "Saket Courts (South & South-East)",
      "Rohini Courts (North-West)",
      "Dwarka Courts (South-West)",
    ],
    caseTypes: [
      { title: "Bail Applications", desc: "Regular, anticipatory and interim bail across Sessions Courts and Delhi HC." },
      { title: "FIR Quashing (S. 528 BNSS)", desc: "Quashing frivolous or settled FIRs before the Delhi High Court." },
      { title: "PMLA / ED Matters", desc: "Defence in ECIR proceedings and attachments before Rouse Avenue Special Court." },
      { title: "CBI Cases", desc: "Corruption, disproportionate assets, trap cases tried at Rouse Avenue." },
      { title: "NDPS Defence", desc: "Commercial and intermediate-quantity defences under the NDPS Act." },
      { title: "Domestic Violence & 498A", desc: "Defence and prosecution of matrimonial cruelty and DV Act cases." },
      { title: "Cyber Crime Defence", desc: "Cases registered at CyPAD / Cyber Cells of Delhi Police." },
      { title: "Criminal Appeals", desc: "Appeals from Sessions Court to Delhi HC, and to the Supreme Court." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹7,500 (free first consultation on NyaySevak)",
      district: "₹8,000 – ₹40,000 per appearance",
      highCourt: "₹25,000 – ₹2,00,000 per appearance; senior counsel ₹3,00,000+",
      note: "Bail matters at the Delhi HC typically run ₹50,000–₹1,50,000 all-inclusive for a single-bench hearing with drafting. Fast-track trial retainers start around ₹75,000.",
    },
    faqs: [
      {
        question: "How do I find the best criminal lawyer near me in Delhi?",
        answer:
          "Use NyaySevak's Delhi criminal-law directory, filter by the relevant district court complex (Tis Hazari, Patiala House, Karkardooma, Saket, Rohini, or Dwarka), and shortlist by Bar Council verification, years of practice, and ratings. Every listed lawyer appears regularly before Delhi courts, and your first consultation is free.",
      },
      {
        question: "Which court handles my criminal case in Delhi?",
        answer:
          "Jurisdiction is decided by the police station that registered the FIR. Cases registered in Central or North Delhi go to Tis Hazari; New Delhi district goes to Patiala House; East/North-East to Karkardooma; South/South-East to Saket; North-West to Rohini; South-West and Dwarka to Dwarka Courts. CBI, ED and MP/MLA matters are handled at the Rouse Avenue Special Courts.",
      },
      {
        question: "How much does a criminal lawyer cost in Delhi?",
        answer:
          "Fees vary by court level and lawyer seniority. A District Court appearance typically costs ₹8,000–₹40,000; a Delhi High Court hearing ranges from ₹25,000 to over ₹2,00,000; and senior advocates charge ₹3,00,000+ per appearance. NyaySevak lists every lawyer's fees upfront with no hidden charges.",
      },
      {
        question: "Can I get anticipatory bail in Delhi?",
        answer:
          "Yes. Anticipatory bail under Section 482 BNSS (earlier Section 438 CrPC) can be filed before the Sessions Court of the relevant district or directly before the Delhi High Court, depending on the offence. Our Delhi criminal lawyers have extensive experience in obtaining anticipatory bail across all six complexes.",
      },
      {
        question: "How long does a criminal trial take in Delhi?",
        answer:
          "Simple trials at Magistrate Courts can conclude in 12–18 months. Sessions trials typically take 2–4 years, while complex PMLA or CBI cases often exceed 5 years. Bail applications are usually decided within 2–6 weeks at the Sessions Court and 4–10 weeks at the Delhi High Court.",
      },
      {
        question: "Do you handle CBI and ED cases in Delhi?",
        answer:
          "Yes. Our panel includes criminal lawyers who specialise in matters before the Rouse Avenue Courts, where all CBI, ED, and Prevention of Corruption Act cases for Delhi are tried. We also assist with PMLA attachments before the Adjudicating Authority and Appellate Tribunal in Delhi.",
      },
    ],
    localNotes: [
      "Delhi has six functional District Court complexes plus the Rouse Avenue Special Courts — jurisdiction is the single most important question to settle before filing.",
      "The Delhi High Court bail list runs daily, with dedicated 'Miscellaneous' Benches for bail and quashing — same-week hearings are routine for urgent matters.",
      "Special BNSS rules and the Delhi High Court's own procedural orders apply — experienced local counsel matters more here than in most other states.",
    ],
  },

  "delhi__civil-law": {
    lead:
      "Delhi's civil litigation ecosystem spans high-stakes commercial suits at the Delhi High Court's Original Side, property and partition matters at the District Courts, consumer and RERA forums, and specialised commercial courts under the Commercial Courts Act. NyaySevak's Delhi civil lawyers handle everything from Connaught Place property disputes and Dwarka builder-buyer cases to multi-crore recovery suits and injunctions across the capital.",
    landscape: [
      "Delhi has a unique bifurcated civil jurisdiction: suits valued above ₹2 crore go to the Delhi High Court's Original Side (rare in India), while lower-value matters are heard at the relevant District Court based on territorial jurisdiction. Commercial matters — IPR, arbitration, shareholder disputes, and contract recovery — also travel to the Commercial Division of the Delhi High Court under the Commercial Courts Act, 2015.",
      "Property disputes dominate the District Court civil dockets. With Delhi's land being either DDA-allotted, lal-dora, private freehold, or cooperative group-housing, title verification and partition suits are routinely complex. Builder-buyer disputes have surged since the Noida, Gurgaon, and Dwarka housing crises — although Noida and Gurgaon fall outside Delhi's jurisdiction, the same project fraud often triggers parallel proceedings in Delhi courts where the developer is headquartered.",
      "Consumer protection cases are filed at the District Commission (Delhi has five: North, South, East, West, Central), the Delhi State Commission, and the National Commission (NCDRC) — all three tiers sit within NCR, creating one of the most efficient consumer dispute ecosystems in India.",
    ],
    courtsForThisMatter: [
      "Delhi High Court (Original Side — suits above ₹2 crore; commercial division)",
      "District Courts (civil suits within territorial jurisdiction)",
      "Commercial Courts at Tis Hazari, Saket, Karkardooma, Rohini, Dwarka, Patiala House",
      "Delhi RERA (builder-buyer)",
      "Consumer Commissions (District, State, NCDRC)",
      "DDA/Urban Development Courts",
    ],
    caseTypes: [
      { title: "Property Title Suits", desc: "Declaration, title verification, specific performance, and partition." },
      { title: "Recovery Suits", desc: "Money recovery, loan/receivables disputes, summary suits under Order 37." },
      { title: "Injunctions", desc: "Temporary and permanent injunctions to prevent property or commercial harm." },
      { title: "Builder-Buyer Disputes", desc: "Refund, possession delay and defect claims under RERA & Consumer Protection Act." },
      { title: "Tenancy Matters", desc: "Delhi Rent Control Act cases and commercial lease disputes." },
      { title: "Consumer Complaints", desc: "District Commission, State Commission, and NCDRC representation." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,000 (free first consultation on NyaySevak)",
      district: "₹10,000 – ₹45,000 per appearance",
      highCourt: "₹30,000 – ₹2,50,000 per appearance",
      note: "Large commercial suits are often billed on a hybrid retainer + success-fee model. Simple recovery suits under Order 37 may be filed for a flat fee of ₹35,000–₹75,000 plus court fee (Delhi court fee is ad valorem, capped at ₹1.5 lakh per suit).",
    },
    faqs: [
      {
        question: "Which court handles my civil case in Delhi?",
        answer:
          "Suits valued up to ₹2 crore go to the District Court in whose territorial jurisdiction the property/cause of action lies. Suits above ₹2 crore, and all IPR/commercial matters under the Commercial Courts Act, go directly to the Delhi High Court's Original Side or Commercial Division.",
      },
      {
        question: "What is the Delhi court fee for a civil suit?",
        answer:
          "Delhi court fee is ad valorem under the Court Fees (Delhi Amendment) Act with a cap of ₹1.5 lakh per suit. For a ₹50 lakh recovery suit, the court fee works out to roughly ₹50,000; your lawyer will calculate the exact amount before filing.",
      },
      {
        question: "Can I recover money through a Delhi court quickly?",
        answer:
          "Yes — if you have a written, liquidated claim (cheque, invoice, promissory note), you can file a Summary Suit under Order 37 CPC. These are typically decreed within 6–18 months if the defendant cannot demonstrate a triable defence. NyaySevak's Delhi civil lawyers specialise in Order 37 recovery.",
      },
      {
        question: "How are property disputes handled in Delhi?",
        answer:
          "Property disputes are filed at the District Court in the jurisdiction where the property is located. For Delhi properties, that means Tis Hazari (Central/North), Saket (South), Rohini (North-West), Dwarka (South-West), Karkardooma (East) or Patiala House (New Delhi). Title verification, mutation status, and DDA allotment history are critical first steps.",
      },
      {
        question: "How long does a civil case take in Delhi?",
        answer:
          "Summary recovery suits: 6–18 months. Regular civil suits: 3–7 years at trial level. Appeals add 2–5 years. Commercial Courts under the 2015 Act are time-bound and typically resolve in 18–30 months.",
      },
      {
        question: "Do you handle Delhi RERA cases?",
        answer:
          "Yes. Our panel includes lawyers who regularly appear before the Delhi RERA Authority and the Delhi Appellate Tribunal (REAT) for builder-buyer disputes across projects in Dwarka, Rohini, Narela, and Delhi-NCR. We also pursue parallel consumer and civil remedies where applicable.",
      },
    ],
    localNotes: [
      "Delhi High Court's Original Side pecuniary jurisdiction (₹2 crore) is a quirk — most metros have Rs. 20 lakh or lower; filing choices matter.",
      "Commercial Courts Act timelines are strictly enforced in Delhi — missing a time-bound step can be fatal.",
      "Delhi Rent Control Act 1958 applies to pre-1995 tenancies only; newer tenancies are governed by the Transfer of Property Act.",
    ],
  },

  "delhi__family-matrimonial": {
    lead:
      "Family and matrimonial litigation in Delhi is handled by dedicated Family Courts at each district court complex plus the Delhi High Court on appeal. NyaySevak connects you with empathetic, verified Delhi divorce lawyers who handle mutual-consent and contested divorces, child-custody, maintenance under Section 144 BNSS (earlier 125 CrPC), domestic-violence proceedings, 498A defence, and succession matters across Delhi's six district complexes.",
    landscape: [
      "Delhi has Family Courts at Rohini, Karkardooma, Dwarka, Saket, Tis Hazari, and Patiala House, established under the Family Courts Act, 1984. These courts have exclusive jurisdiction over divorce, judicial separation, restitution of conjugal rights, maintenance, custody, guardianship, and declaration of marital status. The Family Court judge hears without robes and encourages reconciliation before trial.",
      "Mutual-consent divorce under Section 13B of the Hindu Marriage Act requires two motions separated by 6 months (sometimes waived by the Delhi High Court or Supreme Court). Contested divorces usually take 3–5 years in Delhi, though settlement during the first motion is common. Child custody disputes in Delhi follow the 'welfare of the child' principle laid down by the Supreme Court — courts here readily grant shared parenting plans.",
      "Delhi's Domestic Violence Act jurisdiction covers live-in partners as well as spouses, and Protection Officers are attached to each district. Section 498A IPC (now 86 BNS) complaints are prosecuted at Magistrate Courts and have been subject to significant procedural safeguards after the Delhi HC's own guidelines and the Supreme Court's Rajesh Sharma judgement.",
    ],
    courtsForThisMatter: [
      "Family Courts at Rohini, Karkardooma, Dwarka, Saket, Tis Hazari, Patiala House",
      "Mahila Courts (Magistrate) for DV Act and 498A cases",
      "Delhi High Court (matrimonial appeals, custody writs, transfer petitions)",
      "Supreme Court of India (custody and matrimonial transfers)",
    ],
    caseTypes: [
      { title: "Mutual-Consent Divorce", desc: "Section 13B HMA — expedited filings with waiver applications where possible." },
      { title: "Contested Divorce", desc: "On grounds of cruelty, desertion, adultery or mental disorder under HMA/Special Marriage Act." },
      { title: "Child Custody & Guardianship", desc: "Interim and permanent custody, visitation rights under the Guardians and Wards Act." },
      { title: "Maintenance & Alimony", desc: "Section 144 BNSS, Section 24/25 HMA, and DV Act monetary reliefs." },
      { title: "Domestic Violence Act", desc: "Protection, residence, monetary and custody orders before the Magistrate." },
      { title: "498A / Dowry Defence", desc: "Quashing, bail, and anticipatory bail in matrimonial cruelty cases." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹5,000 (free first consultation on NyaySevak)",
      district: "₹8,000 – ₹35,000 per hearing",
      highCourt: "₹30,000 – ₹1,50,000 per appearance",
      note: "Mutual-consent divorce retainers in Delhi typically run ₹35,000–₹85,000 all-inclusive. Contested divorces are charged on a per-appearance basis with total case costs of ₹1.5–₹5 lakh depending on complexity and duration.",
    },
    faqs: [
      {
        question: "Which Family Court do I approach for divorce in Delhi?",
        answer:
          "Jurisdiction is based on where the marriage was solemnised, where the parties last resided together, or where the respondent resides. Each district in Delhi has a Family Court: Rohini for NW, Karkardooma for East/NE, Dwarka for SW, Saket for S/SE, Tis Hazari for N/Central, and Patiala House for New Delhi district. Your NyaySevak lawyer will confirm jurisdiction before filing.",
      },
      {
        question: "How long does a divorce take in Delhi?",
        answer:
          "Mutual-consent divorce in Delhi typically takes 6–9 months; the mandatory cooling-off period can be waived by application if there is no prospect of reconciliation. Contested divorces take 3–5 years at the Family Court, with appeals to the Delhi High Court adding another 2–4 years.",
      },
      {
        question: "Can I get anticipatory bail in a 498A case in Delhi?",
        answer:
          "Yes. Following Supreme Court guidelines, anticipatory bail under Section 482 BNSS (formerly 438 CrPC) is usually granted in 498A (Section 86 BNS) matters provided there is no custodial interrogation need. Our Delhi matrimonial lawyers handle both the AB application and any parallel DV Act or divorce filings.",
      },
      {
        question: "What maintenance can a wife claim in Delhi?",
        answer:
          "A wife can claim interim maintenance under Section 144 BNSS (fast track at Magistrate Court), Section 24 HMA (pendente lite during divorce), and monetary relief under Section 20 of the DV Act. Delhi courts typically grant 20–35% of the husband's net monthly income as interim maintenance, with permanent alimony decided on evidence.",
      },
      {
        question: "How is child custody decided in Delhi?",
        answer:
          "Delhi Family Courts apply the 'welfare of the child' principle from the Supreme Court's Gaurav Nagpal and Githa Hariharan rulings. Mothers are usually preferred for children under 5, but courts routinely order shared parenting and visitation schedules, and fathers can and do obtain custody where it serves the child's welfare.",
      },
      {
        question: "Can I file for divorce online in Delhi?",
        answer:
          "E-filing is available at Delhi's District Courts and is strongly encouraged. Mutual-consent divorce motions can be filed and hearings attended virtually in many cases. NyaySevak's divorce lawyers handle the complete e-filing and virtual-hearing process on your behalf.",
      },
    ],
    localNotes: [
      "The Delhi High Court has led Indian jurisprudence on waiver of the 6-month cooling-off period in mutual-consent divorce — useful where reconciliation is not possible.",
      "Delhi has a strong women's rights infrastructure — Mahila Courts, Protection Officers in every district, and One Stop Centres.",
      "False-case defence is a distinct Delhi speciality — the HC's Arnesh Kumar-based guidelines on arrest in 498A cases are strictly applied.",
    ],
  },

  "delhi__property-real-estate": {
    lead:
      "Delhi property litigation spans DDA allotment disputes, unauthorised-colony regularisation, Noida and Gurgaon builder-buyer cases, lal-dora title issues, cooperative group-housing society conflicts, and high-value commercial-lease disputes in Connaught Place and Nehru Place. NyaySevak's Delhi property lawyers handle title verification, sale-deed drafting, RERA filings, specific-performance suits, and property-related writs before the Delhi High Court.",
    landscape: [
      "Delhi property is a patchwork of legal regimes: DDA-allotted flats (lease-hold converted to free-hold), lal-dora extended abadi, private freehold plots, cooperative group-housing societies (CGHS), Urban Development Ministry-administered colonies, and unauthorised colonies regularised under the 2008 scheme and subsequent amendments. Title verification is therefore non-trivial — a 30-year search of the sub-registrar's records and mutation history is the minimum diligence standard.",
      "Builder-buyer disputes dominate the high-volume end of the practice. Although most delayed-possession horror stories involve Noida (UP RERA) and Gurgaon (Haryana RERA), parallel civil and consumer cases are routinely filed in Delhi where the developer has a registered office. Delhi-specific builder projects (especially DDA Housing Schemes and Unity/Parsvnath/Supertech complexes within city limits) come under Delhi RERA.",
      "Delhi's commercial real-estate bar is among the most specialised in India. Connaught Place leases, Nehru Place IT-park disputes, and Okhla industrial-lease matters generate steady litigation at both the Delhi High Court and the Delhi District Courts' Commercial Divisions.",
    ],
    courtsForThisMatter: [
      "Delhi High Court (property writs, commercial division, suits above ₹2 crore)",
      "District Courts (property suits, partition, specific performance)",
      "Delhi RERA & REAT (builder-buyer)",
      "NCDRC & Delhi State Commission (consumer remedies)",
      "SDM / Revenue Court (mutation, partition of agricultural land)",
      "Cooperative Societies Tribunal (CGHS disputes)",
    ],
    caseTypes: [
      { title: "Title Verification & Due Diligence", desc: "30-year search, encumbrance, mutation, and litigation check before purchase." },
      { title: "Sale/Gift/Lease Deed Drafting", desc: "Registration-ready drafting compliant with Delhi stamp duty and registration rules." },
      { title: "Specific Performance", desc: "Enforcing sale agreements where the seller refuses to execute the sale deed." },
      { title: "Partition Suits", desc: "Co-owner partition of ancestral and jointly held property." },
      { title: "RERA / Consumer Cases", desc: "Refund, possession and defect claims against Delhi-NCR builders." },
      { title: "Cooperative Society Disputes", desc: "CGHS membership, allotment, and management committee disputes." },
      { title: "Unauthorised Colony Regularisation", desc: "PTM-cum-freehold conversion and regularisation advisories." },
    ],
    feeRange: {
      consultation: "₹2,000 – ₹7,500 (free first consultation on NyaySevak)",
      district: "₹15,000 – ₹50,000 per appearance",
      highCourt: "₹40,000 – ₹3,00,000 per appearance",
      note: "Title due-diligence packages for a single Delhi property start at ₹25,000. Sale-deed drafting plus registration assistance typically ₹15,000–₹40,000 plus stamp duty (6% for men, 4% for women in Delhi) and registration charges (1%).",
    },
    faqs: [
      {
        question: "How do I verify property title in Delhi?",
        answer:
          "A complete Delhi title check includes: 30-year chain of title at the relevant Sub-Registrar, encumbrance certificate, mutation records, DDA/CGHS/MCD records, up-to-date property tax receipts, an approved building plan, and a litigation search at the High Court and District Court. NyaySevak's Delhi property lawyers deliver a signed due-diligence report.",
      },
      {
        question: "What is the Delhi stamp duty on a property purchase?",
        answer:
          "Delhi stamp duty is 6% for male buyers, 4% for female buyers, and 5% for joint (one of each). Registration is 1% of the sale consideration. Gift deeds between blood relatives attract concessional stamp duty. Your lawyer will calculate exact duties before execution.",
      },
      {
        question: "Can I file a RERA case in Delhi against a Noida builder?",
        answer:
          "No — project jurisdiction follows location. A Noida project is under UP RERA; a Gurgaon project is under Haryana RERA. However, you can file consumer cases in Delhi if the builder has a registered office or significant cause of action here. Our lawyers will advise on the most favourable forum.",
      },
      {
        question: "How long does a property case take in Delhi?",
        answer:
          "Simple title declaration cases: 3–6 years. Partition suits: 5–10 years with possible appeals. RERA matters: 6–15 months at the Authority; appeals to REAT add 6–12 months. Consumer cases at the District Commission: 12–24 months on average.",
      },
      {
        question: "What documents are needed for a Delhi property sale?",
        answer:
          "You'll need: Sale Deed (executed and registered), original chain of title documents, tax receipts, NOC from society/DDA as applicable, building plan, possession certificate, and bank NOC if there is an existing mortgage. Our conveyancing team handles end-to-end paperwork.",
      },
      {
        question: "Can a seller refuse to transfer property after receiving advance?",
        answer:
          "No. If an Agreement to Sell was executed and the buyer is willing to pay the balance, you can file a suit for Specific Performance under the Specific Relief Act. Delhi courts are generally pro-purchaser where the agreement and consideration can be proved. File within 3 years of the cause of action.",
      },
    ],
    localNotes: [
      "Delhi stamp-duty concession for female buyers (4% vs 6%) is one of the strongest such concessions in India — joint registration with a female family member often saves lakhs.",
      "DDA-allotted flats have specific lease-to-freehold conversion procedures that must be followed before any sale.",
      "Unauthorised-colony regularisation under PTM (Power of Attorney-Money receipt) is NOT equivalent to freehold title — separate conveyance deed is required.",
    ],
  },

  // ────────────────────────────── MUMBAI ──────────────────────────────
  "mumbai__criminal-law": {
    lead:
      "Mumbai is India's busiest criminal-trial jurisdiction outside Delhi. From economic offences at the CBI Special Court (Mumbai) to MCOCA gang-crime trials and PMLA matters at the Special PMLA Court in Ballard Estate, NyaySevak's verified Mumbai criminal lawyers appear daily at the Bombay High Court, the Mumbai City Civil & Sessions Court at Fort, and Metropolitan Magistrate Courts at Bandra, Andheri, Borivali, Dindoshi, and Esplanade.",
    landscape: [
      "Mumbai's criminal justice architecture is unusual because of its scale and specialisation. The City Civil & Sessions Court at Fort hears all Sessions-triable offences for the island city. Suburban Mumbai is served by the Dindoshi Sessions Court, with Metropolitan Magistrate Courts at Andheri, Bandra, Borivali, Ballard Pier, and Kurla handling FIR-level committals and lesser offences. Thane and Navi Mumbai have their own district and sessions courts.",
      "Special courts are a Mumbai hallmark: CBI Special Court, Special PMLA Court, Special MCOCA Court, NDPS Special Courts, POCSO Courts, and TADA/UAPA Special Courts — many of these are the busiest in India. The Bombay High Court hears bail, quashing under Section 528 BNSS, criminal appeals, and writ petitions. Its criminal listings are heavily case-loaded and the bar here is among the most senior in the country.",
      "Economic offences — cheque bouncing (S. 138 NI Act), PMLA, SEBI, fraud under BNS — dominate the filings because of Mumbai's financial-capital status. Criminal defence here often overlaps with financial-regulatory defence, and the best Mumbai criminal lawyers are comfortable in both worlds.",
    ],
    courtsForThisMatter: [
      "Bombay High Court (bail, quashing, criminal appeals)",
      "CBI Special Court, Mumbai",
      "Special PMLA Court, Ballard Estate",
      "Mumbai City Civil & Sessions Court, Fort",
      "Dindoshi Sessions Court (suburban)",
      "Metropolitan Magistrate Courts: Andheri, Bandra, Borivali, Esplanade, Kurla, Ballard Pier",
      "Thane and Navi Mumbai Sessions Courts",
    ],
    caseTypes: [
      { title: "Bail Applications", desc: "Regular, anticipatory, and interim bail under BNSS before Sessions and High Court." },
      { title: "Economic Offences", desc: "Defence in PMLA, SEBI, SFIO, and fraud matters." },
      { title: "Cheque Bouncing (S.138 NI Act)", desc: "Prosecution and defence at the Magistrate Court." },
      { title: "MCOCA / UAPA Cases", desc: "Defence in organised-crime and terror-related proceedings." },
      { title: "NDPS Defence", desc: "Mumbai and Thane NDPS Special Court representation." },
      { title: "FIR Quashing", desc: "S. 528 BNSS petitions before the Bombay High Court." },
    ],
    feeRange: {
      consultation: "₹2,000 – ₹8,000 (free first consultation on NyaySevak)",
      district: "₹10,000 – ₹50,000 per appearance",
      highCourt: "₹30,000 – ₹2,50,000 per appearance; senior counsel ₹5,00,000+",
      note: "Mumbai senior-counsel rates are the highest in India after Delhi. Cheque-bouncing cases are often handled on a flat-fee basis of ₹35,000–₹1,00,000 depending on stages covered.",
    },
    faqs: [
      { question: "Which court handles my criminal case in Mumbai?", answer: "Jurisdiction depends on where the FIR was registered. Island-city matters (South Mumbai, Central, Western up to Mahim) go to the Fort Sessions Court; suburbs (Andheri, Bandra, Borivali, Goregaon) go to Dindoshi. Thane, Navi Mumbai and Kalyan have independent district courts." },
      { question: "How do I get anticipatory bail in Mumbai?", answer: "Anticipatory bail under Section 482 BNSS is filed before the Sessions Court of the relevant district or directly before the Bombay High Court. Our Mumbai lawyers regularly obtain AB at both forums, often same-week for urgent matters." },
      { question: "Do you handle PMLA / ED cases in Mumbai?", answer: "Yes. The Special PMLA Court at Ballard Estate hears ED matters. Our panel includes specialists in ECIR proceedings, provisional attachment orders, and PMLA appellate tribunal work." },
      { question: "How much does a Mumbai criminal lawyer cost?", answer: "Sessions Court: ₹10,000–₹50,000 per appearance. Bombay HC: ₹30,000–₹2.5 lakh. Senior counsel: ₹5 lakh+. NyaySevak lists every lawyer's fees upfront." },
      { question: "Can I settle a cheque-bouncing case in Mumbai?", answer: "Yes — S. 138 matters are compoundable. Settlement at any stage (even post-conviction at appellate stage) with the complainant's consent results in acquittal. Our Mumbai lawyers routinely negotiate S. 138 settlements." },
      { question: "How long does a criminal trial take in Mumbai?", answer: "Magistrate trials: 12–24 months. Sessions trials: 3–5 years. Bail at Sessions: 2–4 weeks; at Bombay HC: 4–10 weeks. Specialised PMLA/CBI matters can run 5–8 years." },
    ],
    localNotes: [
      "Mumbai and Thane have distinct bar associations — jurisdictional choice between Dindoshi and Thane for suburban matters matters.",
      "Bombay HC's criminal-side 'mention' practice allows urgent same-day listing.",
      "Mumbai Police's Economic Offences Wing and Cyber Cell generate a disproportionate share of Mumbai criminal filings — specialist defence counsel is advisable.",
    ],
  },

  "mumbai__civil-law": {
    lead:
      "Mumbai civil litigation is dominated by commercial matters — the Bombay High Court has original civil jurisdiction for claims above ₹1 crore within Greater Mumbai, making it unique alongside the Calcutta and Madras HCs. NyaySevak's Mumbai civil lawyers handle high-value property disputes, tenancy under the Maharashtra Rent Control Act, RERA cases, recovery suits, and complex commercial litigation under the Commercial Courts Act.",
    landscape: [
      "Mumbai's civil jurisdiction is tiered: the Small Causes Court at Dhobi Talao handles rent and tenancy matters, suits up to ₹10 lakh go to the Court of Small Causes; between ₹10 lakh and ₹1 crore to the City Civil Court at Fort; above ₹1 crore to the Bombay High Court Original Side. Commercial suits above ₹3 lakh (after 2018 amendment) go to the Commercial Court at the City Civil Court or to the Bombay HC Commercial Division depending on pecuniary jurisdiction.",
      "Maharashtra Rent Control Act, 1999 applies to most Mumbai residential tenancies — a pro-tenant regime where eviction is difficult and rent hikes are controlled. This has generated a substantial tenancy bar, particularly in island-city practice. Commercial leases are governed by the Transfer of Property Act and contract law, and are drafted to contract out of MRC Act protections.",
      "MahaRERA (the Maharashtra Real Estate Regulatory Authority) is the most active RERA authority in India, and its appellate tribunal (MREAT) sits in Mumbai. Builder-buyer disputes across Worli, Lower Parel, Thane, Navi Mumbai, and suburban Mumbai projects are routinely filed here.",
    ],
    courtsForThisMatter: [
      "Bombay High Court — Original Side (suits above ₹1 crore, commercial division)",
      "City Civil Court, Fort (suits ₹10 lakh – ₹1 crore)",
      "Court of Small Causes, Dhobi Talao (up to ₹10 lakh, tenancy)",
      "MahaRERA & MREAT (builder-buyer)",
      "Consumer Commissions (District, State, NCDRC-West Zone)",
      "Co-operative Society Courts",
    ],
    caseTypes: [
      { title: "Commercial Recovery Suits", desc: "Order 37 summary suits, Commercial Courts Act matters at Bombay HC." },
      { title: "MRC Act Tenancy", desc: "Eviction, rent fixation, standard-rent applications." },
      { title: "Property Title Suits", desc: "Declaration, specific performance, partition in island city and suburbs." },
      { title: "MahaRERA Cases", desc: "Refund, possession, defect claims before MahaRERA and MREAT." },
      { title: "Co-op Society Disputes", desc: "Before Deputy Registrar, Co-operative Court, and Co-operative Appellate Court." },
      { title: "Commercial Arbitration", desc: "S. 9/11/34 petitions before Bombay HC Commercial Division." },
    ],
    feeRange: {
      consultation: "₹2,000 – ₹7,500 (free first consultation on NyaySevak)",
      district: "₹10,000 – ₹45,000 per appearance",
      highCourt: "₹40,000 – ₹3,00,000 per appearance",
      note: "Mumbai HC Original Side filing fees are ad-valorem and among the highest in India. Commercial arbitrations are often on hybrid retainer + success-fee models; Mumbai is India's leading institutional arbitration seat.",
    },
    faqs: [
      { question: "Which court handles my civil case in Mumbai?", answer: "Up to ₹10 lakh: Court of Small Causes. ₹10 lakh–₹1 crore: City Civil Court. Above ₹1 crore: Bombay HC Original Side. Commercial matters above ₹3 lakh go to Commercial Courts under the 2015 Act." },
      { question: "How does MRC Act protect Mumbai tenants?", answer: "The Maharashtra Rent Control Act, 1999 provides standard-rent regulation and restricts eviction grounds to specific cases (bona fide requirement, default, etc.). Our lawyers handle both landlord and tenant sides of MRC Act litigation." },
      { question: "Can I get interim relief urgently in Mumbai?", answer: "Yes. Section 9 of the Arbitration Act and Order 39 CPC injunctions are available on urgent basis at the Bombay HC Commercial Division. Same-week hearings are common for asset-freeze applications." },
      { question: "How long does a MahaRERA case take?", answer: "MahaRERA decisions typically come within 6–12 months, making it far faster than civil court routes. Appeals to MREAT add another 4–8 months. Recovery of money awards is through District Collector under Land Revenue Code." },
      { question: "What's the Mumbai court fee for a civil suit?", answer: "Maharashtra court fees are ad-valorem with specific slabs and a capped maximum at Bombay HC. Exact computation depends on relief sought and value. Your NyaySevak lawyer calculates the fee before filing." },
      { question: "Do you handle co-operative society disputes in Mumbai?", answer: "Yes — Mumbai has over 1 lakh co-op societies. Disputes are filed before the Deputy Registrar, then the Co-operative Court, and appeals to the Co-op Appellate Court at Pune." },
    ],
    localNotes: [
      "Bombay HC Original Side has its own civil rules (Bombay HC OS Rules) distinct from CPC — specialised counsel matters.",
      "MahaRERA is the most-filed RERA in India — outcomes here set trends adopted by other state authorities.",
      "Commercial contracts in Mumbai are routinely drafted with Mumbai-seat arbitration clauses administered by institutions like MCIA.",
    ],
  },

  "mumbai__family-matrimonial": {
    lead:
      "Mumbai matrimonial lawyers practise across three Family Courts — Bandra, Dindoshi (Goregaon), and Pune Road — plus the Bombay High Court on appeal. NyaySevak's verified Mumbai divorce lawyers handle mutual-consent and contested divorces under Hindu, Muslim, Christian, Parsi and Special Marriage Acts, child custody under the Guardians and Wards Act, maintenance, DV Act proceedings, and 498A / 86 BNS defence.",
    landscape: [
      "Mumbai's three Family Courts cover vast caseloads. Bandra Family Court serves the island city up to Mahim. Dindoshi (Goregaon) Family Court serves the western suburbs. The Pune Road / Bandra East Family Court also handles select matters. Thane and Navi Mumbai have separate Family Courts. Jurisdiction is determined by residence of respondent and place of marriage/last cohabitation.",
      "Mumbai's Parsi Matrimonial Court at the High Court is unique — Parsi divorces under the Parsi Marriage and Divorce Act are tried with a panel of 'Delegates' (Parsi lay judges) alongside the judge. Muslim personal law matters go to the Family Court, with talaq and khula registrations typically done before a qazi.",
      "The Bombay HC's matrimonial bench has contributed significantly to Indian family-law jurisprudence — most notably on irretrievable breakdown, shared parenting, and rights of inter-faith couples.",
    ],
    courtsForThisMatter: [
      "Family Court, Bandra (island city)",
      "Family Court, Dindoshi (western suburbs)",
      "Thane and Navi Mumbai Family Courts",
      "Parsi Matrimonial Court, Bombay HC",
      "Magistrate Courts (DV Act, 498A)",
      "Bombay High Court (matrimonial appeals)",
    ],
    caseTypes: [
      { title: "Mutual-Consent Divorce", desc: "Under HMA S.13B, SMA, and personal laws of other faiths." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, adultery — HMA, SMA, Muslim, Christian, Parsi Acts." },
      { title: "Child Custody & Guardianship", desc: "Before Family Court under GWA with visitation and shared-parenting plans." },
      { title: "Maintenance & Alimony", desc: "S.144 BNSS, S.24/25 HMA, and DV Act monetary relief." },
      { title: "Domestic Violence", desc: "Protection, residence, and monetary orders before Magistrate." },
      { title: "498A Defence", desc: "Quashing, anticipatory bail, and regular bail under BNSS." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,000 (free first consultation on NyaySevak)",
      district: "₹10,000 – ₹40,000 per hearing",
      highCourt: "₹30,000 – ₹1,50,000 per appearance",
      note: "Mutual-consent divorce retainers in Mumbai run ₹40,000–₹1 lakh. Contested matrimonial cases are typically billed per appearance with total costs of ₹2–₹6 lakh over the life of the case.",
    },
    faqs: [
      { question: "Which Family Court for my divorce in Mumbai?", answer: "Island-city couples file at Bandra; suburban couples (Andheri, Borivali, Goregaon, Malad) at Dindoshi. Thane/Navi Mumbai residents file at their respective district Family Courts. Jurisdiction follows place of marriage, last cohabitation, or respondent's residence." },
      { question: "How long does divorce take in Mumbai?", answer: "Mutual-consent: 6–9 months. Contested: 3–5 years at Family Court; appeals to Bombay HC add 2–4 years. The cooling-off period for MCD can be waived by the Bombay HC in appropriate cases." },
      { question: "Are online/virtual hearings available?", answer: "Yes. Mumbai Family Courts permit virtual hearings in many matters, and e-filing is standard. NyaySevak lawyers handle the complete online process." },
      { question: "Can a wife claim maintenance in Mumbai?", answer: "Yes — under S.144 BNSS (fast-track at Magistrate), S.24 HMA (pendente lite), and DV Act monetary relief. Mumbai Family Courts generally grant 20–35% of husband's net income as interim maintenance." },
      { question: "How is child custody decided in Mumbai?", answer: "Welfare-of-child principle applies. Mumbai Family Courts have led Indian jurisprudence on shared parenting and inter-city / inter-country custody. Our lawyers handle both Family Court and writ-based custody disputes." },
      { question: "Do you handle Parsi divorce in Mumbai?", answer: "Yes. The Parsi Matrimonial Court at Bombay HC is unique and requires specialist counsel familiar with the Parsi Marriage and Divorce Act, 1936 and the Delegates system." },
    ],
    localNotes: [
      "Mumbai's Bandra and Dindoshi Family Courts have heavy caseloads — scheduling and mediation strategy materially affect outcomes.",
      "Parsi matrimonial practice at Bombay HC is a niche specialism.",
      "Bombay HC has been progressive on live-in relationships, inter-faith marriages, and shared parenting — a favourable forum for modern family-law issues.",
    ],
  },

  "mumbai__property-real-estate": {
    lead:
      "Mumbai property lawyers handle everything from Colaba and Malabar Hill title chains going back to the 1800s to brand-new redevelopment disputes at Dadar and Borivali. NyaySevak's Mumbai property lawyers cover RERA, redevelopment under DCPR, tenancy, cooperative housing society conflicts, SRA slum-rehab cases, and high-value commercial lease disputes in Bandra-Kurla Complex and Lower Parel.",
    landscape: [
      "Mumbai real estate is legally complex because of overlapping regimes: MRC Act tenancies from before 1999, DCPR 2034 development rules, MHADA lay-outs, SRA slum schemes, private freehold, cooperative housing societies (the dominant ownership pattern in Mumbai — more than 1 lakh societies), and MahaRERA-regulated new projects. Title verification requires sifting across Revenue Records, Collector's office, Sub-Registrar's records, MHADA files, and society records.",
      "Redevelopment is Mumbai's defining real-estate phenomenon. Hundreds of societies are at different stages of redevelopment under DCPR Regulation 33(7), 33(5), 33(9), 33(10), 33(11), and SRA schemes. Disputes arise at every stage — developer selection, tenant consent, corpus fund, PAAA (Permanent Alternate Accommodation Agreement), possession delays — and typically run in parallel before the Deputy Registrar, Co-operative Court, MahaRERA, and Bombay HC.",
      "MahaRERA, MREAT, and the Bombay HC Commercial Division together handle the bulk of Mumbai's builder-buyer and commercial-real-estate litigation. Mumbai has more RERA filings than any other Indian city.",
    ],
    courtsForThisMatter: [
      "Bombay High Court (high-value, writ, redevelopment and MHADA matters)",
      "City Civil Court, Fort",
      "MahaRERA & MREAT",
      "Co-operative Court & Co-operative Appellate Court",
      "Small Causes Court (tenancy)",
      "Collector's Office (land revenue, SRA)",
    ],
    caseTypes: [
      { title: "Title Diligence & Conveyancing", desc: "Full title search, encumbrance, society NOC, MHADA clearance." },
      { title: "Redevelopment Disputes", desc: "Developer-society, PAAA, corpus, and possession-delay litigation." },
      { title: "MahaRERA Filings", desc: "Refund, possession, and defect-claim cases and MREAT appeals." },
      { title: "Co-op Society Matters", desc: "Membership, transfer, nomination, society management disputes." },
      { title: "SRA / Slum Rehab", desc: "Eligibility, rehab tenement allotment, and SRA scheme challenges." },
      { title: "Tenancy (MRC Act)", desc: "Eviction, standard-rent, and repair disputes at Small Causes Court." },
    ],
    feeRange: {
      consultation: "₹2,500 – ₹10,000 (free first consultation on NyaySevak)",
      district: "₹15,000 – ₹75,000 per appearance",
      highCourt: "₹50,000 – ₹5,00,000 per appearance",
      note: "Mumbai stamp duty is 5–6% (with female-buyer concessions in select periods) plus 1% registration and 1% metro cess in many municipal areas. Title diligence for a Mumbai flat: ₹35,000–₹1 lakh depending on complexity.",
    },
    faqs: [
      { question: "How do I verify property title in Mumbai?", answer: "A Mumbai title check includes the 30-year chain at Sub-Registrar, CTS (City Town Survey) records, encumbrance, society share-certificate chain, MHADA/SRA clearances (if applicable), OC/CC, and property-tax history. NyaySevak delivers a signed due-diligence report." },
      { question: "What is the Mumbai stamp duty on property purchase?", answer: "Mumbai residential stamp duty is 5–6% depending on Maharashtra's periodic concessions, plus 1% registration and in some areas 1% metro cess. Female buyers receive concessional rates in most periods." },
      { question: "How is redevelopment regulated in Mumbai?", answer: "Mumbai redevelopment runs under DCPR 2034 Regulations 33(5)-(11), with MHADA/SRA components for slum and layout schemes. Disputes are multi-forum: Deputy Registrar, Co-op Court, MahaRERA, and Bombay HC. Specialist counsel is essential." },
      { question: "How long do MahaRERA cases take?", answer: "MahaRERA: 6–12 months. MREAT appeal: 4–8 months. Recovery of refund orders through Land Revenue Collector: 3–9 months. This is the fastest consumer-property remedy in India." },
      { question: "Can I file against a Mumbai builder?", answer: "Yes — MahaRERA (registered projects), Consumer Commission (deficiency of service), civil suit (contract breach), and in limited cases criminal complaint (cheating). Our Mumbai lawyers advise on the best combination of forums." },
      { question: "What is an SRA project?", answer: "Slum Rehabilitation Authority (SRA) projects rehabilitate eligible slum residents into new housing. Eligibility disputes, tenement allotment challenges, and developer delays dominate SRA litigation at the Bombay HC writ side." },
    ],
    localNotes: [
      "Mumbai's cooperative-housing-society model is legally distinct from apartment-ownership models in other metros — title is held through society share certificates, not deeds alone.",
      "MahaRERA's reputation for speed and enforcement is a Mumbai-specific advantage for buyers.",
      "Bombay HC's writ jurisdiction over MHADA, SRA, and BMC makes it uniquely powerful in property matters.",
    ],
  },

  "mumbai__corporate-business": {
    lead:
      "Mumbai is India's corporate headquarters — BSE, NSE, SEBI, RBI, and the National Stock Exchange all sit here, alongside the NCLT Mumbai Bench and the Bombay HC Commercial Division. NyaySevak's Mumbai corporate lawyers handle SEBI proceedings, stock-exchange compliance, IBC and NCLT litigation, cross-border M&A, institutional arbitration, and commercial contract work for MNCs, listed companies, Indian conglomerates, and Bandra-Kurla-Complex-based startups.",
    landscape: [
      "Mumbai's corporate bar is the most specialised in India. SEBI, RBI, and Stock Exchange interactions are daily fare. The NCLT Mumbai Bench is the second-busiest in India after Delhi, handling oppression and mismanagement suits, mergers, and IBC cases (Mumbai has the highest volume of IBC filings in India because most major corporate insolvencies route through Mumbai).",
      "The Bombay HC Commercial Division under the Commercial Courts Act, 2015 is extremely active for S.9/11/34/37 arbitration petitions, shareholder disputes, and international commercial contracts. Mumbai is India's arbitration capital with MCIA (Mumbai Centre for International Arbitration) as a premier institution alongside the International Commercial Court at Bombay HC.",
      "M&A, private equity, and IPO work is overwhelmingly concentrated in Mumbai. The commercial-contracts and corporate-governance bar here is exceptionally deep, and even non-Mumbai HQ'd clients routinely brief Mumbai counsel for SEBI and stock-exchange work.",
    ],
    courtsForThisMatter: [
      "NCLT Mumbai Bench (oppression, IBC, mergers, strike-off)",
      "NCLAT (Delhi) for appeals",
      "Bombay High Court — Commercial Division (arbitration, IPR, commercial contracts)",
      "SEBI headquarters, Bandra-Kurla Complex",
      "Securities Appellate Tribunal (SAT), Bandra-Kurla Complex",
      "RBI Head Office, Mint Road",
      "ROC Mumbai",
    ],
    caseTypes: [
      { title: "SEBI / SAT Matters", desc: "Defence in insider trading, fraud, and disclosure investigations; SAT appeals." },
      { title: "NCLT Litigation", desc: "Oppression & mismanagement, mergers, demergers, capital reduction, strike-off restoration." },
      { title: "IBC / CIRP", desc: "Operational and financial creditor filings; resolution plan advisory." },
      { title: "Arbitration", desc: "S.9/11/34/37 petitions at Bombay HC; MCIA, ICC, SIAC-seated arbitrations." },
      { title: "M&A Transactions", desc: "SPA, SHA, due diligence, CCI notifications, RBI approvals." },
      { title: "Securities Litigation", desc: "Listed-company disputes, debenture recovery, public issue-related matters." },
      { title: "Cross-Border Contracts", desc: "FEMA, FDI, ODI advisory and disputes; ECB structuring." },
    ],
    feeRange: {
      consultation: "₹3,500 – ₹20,000 (free first consultation on NyaySevak)",
      district: "Not applicable — NCLT: ₹30,000–₹2,00,000 per hearing",
      highCourt: "₹75,000 – ₹7,50,000 per appearance; senior counsel ₹15 lakh+",
      note: "Mumbai senior-counsel rates are the highest in India for commercial matters. SEBI defence work is typically retainer-based (₹10 lakh+). Institutional arbitrations at MCIA follow tribunal-set fee structures plus counsel fees.",
    },
    faqs: [
      { question: "Which NCLT bench for my Mumbai company?", answer: "Companies with registered offices in Maharashtra (excluding Pune, which also goes to NCLT Mumbai) fall under NCLT Mumbai Bench at Kailas Bhavan. Our lawyers appear regularly before all three NCLT Mumbai courts." },
      { question: "How do I defend a SEBI show-cause notice?", answer: "File a detailed response within the period stipulated, attend personal hearing, and be ready for appeal to SAT within 45 days of any adverse order. Our Mumbai securities lawyers handle both SEBI hearing representation and SAT appeals." },
      { question: "Is Mumbai a good arbitration seat?", answer: "Yes — Mumbai is India's leading arbitration seat. MCIA offers institutional administration, the Bombay HC is arbitration-friendly under the 2015 and 2019 amendments, and enforcement is reliable. Many foreign contracts choose Mumbai over Singapore for India-related disputes." },
      { question: "How long does an IBC case take in Mumbai?", answer: "CIRP must be concluded in 270 days (extendable to 330 days by court order). In practice, Mumbai IBC cases average 400–550 days from admission to resolution or liquidation. Insolvency Resolution Professional appointment is usually quick." },
      { question: "Can you handle SEBI show-cause at BKC?", answer: "Yes — our panel appears daily before SEBI's adjudicating officers at Bandra-Kurla Complex and SAT at BKC. We also handle consent-order negotiations for faster resolution of minor offences." },
      { question: "Do you handle RBI FEMA compounding?", answer: "Yes. FEMA violations can be compounded through an application to the RBI Regional Office, Mumbai. Our FEMA team handles compounding applications and represents clients at personal hearings." },
    ],
    localNotes: [
      "SEBI, SAT, NCLT, and Bombay HC Commercial Division form a unique regulatory-litigation ecosystem within Mumbai — specialist counsel is critical.",
      "MCIA-administered arbitrations are typically faster and more predictable than ad-hoc arbitrations.",
      "NCLT Mumbai's IBC docket is the largest in India — strategic timing of admission applications materially affects outcomes.",
    ],
  },

  "delhi__corporate-business": {
    lead:
      "Delhi is India's corporate-law nerve centre: MCA Regional Director North, NCLT Principal Bench, NCLAT, SEBI Northern Regional Office, CCI, and the Delhi High Court's Commercial Division all sit in the capital. NyaySevak's Delhi corporate lawyers handle company incorporation, shareholder agreements, M&A, compliance, NCLT litigation, commercial arbitration, and IBC proceedings for clients ranging from Connaught Place startups to listed Mumbai-HQ'd companies with Delhi matters.",
    landscape: [
      "Delhi hosts India's Principal NCLT Bench, the only NCLAT in India, the Competition Commission of India, the Appellate Tribunal for Electricity, and the Telecom Disputes Settlement Appellate Tribunal (TDSAT). Any company wanting to challenge an NCLT order from anywhere in India eventually argues in Delhi before NCLAT, and any MCA-level strategic filing routes through Regional Director North at Connaught Place.",
      "The Delhi High Court's Commercial Division under the Commercial Courts Act, 2015 is among the most active in India for shareholder disputes, IPR, arbitration-related Section 9/11/34 petitions, and inter-corporate commercial suits. The Court's IP Division (constituted 2021) has fast-tracked patent and trademark litigation for Delhi-based corporates and Indian subsidiaries of multinationals.",
      "Delhi's corporate bar has deep ties to Big Law firms, Big 4 consulting, and in-house legal teams of listed companies — which is reflected in the sophistication of commercial contract drafting, M&A due diligence, and arbitration practice available locally.",
    ],
    courtsForThisMatter: [
      "NCLT Principal Bench, New Delhi (company petitions, IBC, oppression/mismanagement)",
      "NCLAT, New Delhi (appeals from all NCLT benches in India)",
      "Delhi High Court — Commercial Division (S. 9/11/34/37 Arbitration & Conciliation Act, IPR, shareholder disputes)",
      "SEBI Northern Regional Office (securities offences)",
      "CCI (anti-trust matters)",
      "TDSAT / APTEL (telecom and electricity regulatory appeals)",
      "ROC Delhi & Haryana (Registrar of Companies filings)",
    ],
    caseTypes: [
      { title: "Company Incorporation", desc: "Private Ltd, LLP, OPC, section 8, subsidiary setup with MCA and RBI filings." },
      { title: "Shareholders / JV Agreements", desc: "SHA, SSA, SPA drafting and negotiation for Delhi startups and MNCs." },
      { title: "NCLT Litigation", desc: "Oppression & mismanagement (S. 241-242), mergers, reduction of capital, winding up." },
      { title: "IBC / CIRP", desc: "Operational and financial creditor petitions before NCLT Delhi; NCLAT appeals." },
      { title: "Commercial Arbitration", desc: "S. 9 interim relief, S. 11 arbitrator appointment, S. 34 challenge at Delhi HC." },
      { title: "FEMA / RBI Compliance", desc: "FDI, ODI, ECB and compounding applications at RBI Delhi office." },
      { title: "M&A Transactions", desc: "Due diligence, SPA, regulatory approvals (CCI, RBI, NCLT)." },
      { title: "MCA / ROC Compliance", desc: "Annual filings, strike-off, restoration, and RD-level approvals." },
    ],
    feeRange: {
      consultation: "₹3,000 – ₹15,000 (free first consultation on NyaySevak)",
      district: "Not applicable — NCLT: ₹25,000–₹1,50,000 per hearing",
      highCourt: "₹50,000 – ₹5,00,000 per appearance; senior counsel ₹10 lakh+",
      note: "Private Limited incorporation runs ₹15,000–₹35,000 all-inclusive. NCLT oppression/mismanagement retainers start at ₹5 lakh. IBC admission petitions ₹75,000–₹2 lakh plus court fee. Commercial arbitrations are typically billed on a hybrid retainer + success-fee basis.",
    },
    faqs: [
      {
        question: "Which NCLT bench handles my Delhi company's case?",
        answer:
          "Companies with their registered office in Delhi fall under the NCLT Principal Bench at New Delhi. Haryana and Punjab cases are also heard at the Delhi/Chandigarh benches. Our NyaySevak corporate lawyers regularly appear before NCLT Delhi and NCLAT.",
      },
      {
        question: "How do I set up a Private Limited company in Delhi?",
        answer:
          "We handle end-to-end incorporation: name reservation through SPICe+ Part A, DIN and DSC procurement, MOA/AOA drafting, PAN/TAN allotment, and bank account opening. Timeline: 7–12 working days. Cost: ₹15,000–₹35,000 all-inclusive depending on paid-up capital and state stamp.",
      },
      {
        question: "Can I challenge a SEBI order from Delhi?",
        answer:
          "Yes — SEBI orders are appealable to the Securities Appellate Tribunal (SAT) at Mumbai, with further appeal to the Supreme Court. While SAT sits in Mumbai, many Delhi-based companies prefer Delhi securities counsel who appear there on oral hearing days.",
      },
      {
        question: "What is the IBC admission threshold?",
        answer:
          "Under Section 4 IBC, an operational creditor can initiate CIRP if the default is at least ₹1 crore. For financial creditors, the same threshold applies. Delhi is the busiest IBC bench in India; our insolvency lawyers manage admission, CoC participation, resolution plans, and NCLAT appeals.",
      },
      {
        question: "Can I get urgent interim relief in a commercial dispute in Delhi?",
        answer:
          "Yes. Section 9 of the Arbitration & Conciliation Act, 1996 allows urgent interim relief from the Delhi High Court's Commercial Division — asset freezes, injunctions, securing the amount in dispute. Our arbitration team regularly secures same-week hearings for urgent matters.",
      },
      {
        question: "Do you handle CCI anti-trust matters in Delhi?",
        answer:
          "Yes. Our competition-law panel files complaints, defends Section 3/4 investigations, handles merger notifications (Section 6), and represents parties before the CCI and NCLAT on appeal. CCI headquarters is in Delhi, making local counsel advantageous.",
      },
    ],
    localNotes: [
      "Delhi High Court's IP Division operates on fast-track rules — pleadings, written statements, and discovery are time-bound.",
      "NCLT Principal Bench is the biggest in India by caseload — expert local counsel materially affects listing and outcomes.",
      "Regional Director North (MCA) Delhi handles compounding and approval matters for companies in Delhi, Haryana, and parts of UP — a major time-saver to route through Delhi counsel.",
    ],
  },

  // ────────────────────────────── BANGALORE ──────────────────────────────
  "bangalore__criminal-law": {
    lead:
      "Bangalore's criminal-law practice is driven by economic offences and cyber-crime given the city's IT-hub status. NyaySevak's Bangalore criminal lawyers appear daily at the Karnataka High Court, the City Civil & Sessions Court at Bengaluru, and Magistrate Courts at Halasuru Gate, Jayanagar, Yelahanka, and Mayo Hall, with specialist defence available for cyber, economic, and corporate-related criminal matters.",
    landscape: [
      "The City Civil & Sessions Court at Bengaluru Urban hears Sessions-triable offences. Bengaluru has Chief Metropolitan Magistrate courts at Halasuru Gate (central) and additional Magistrate courts at Jayanagar (south), Yelahanka (north), and Mayo Hall. Bangalore Rural, Ramanagara, and Tumakuru are separate districts with their own sessions courts.",
      "Cyber crime is a Bengaluru speciality — the CID Cyber Crime Police Station at Bannerghatta Road is among India's best-resourced, and the CEN (Cyber, Economic & Narcotics) Police Stations in every division generate most of Bengaluru's cyber and economic filings. The Karnataka High Court has passed several landmark judgments on cyber jurisdiction, intermediary liability, and privacy.",
      "The Karnataka HC bail and quashing practice is quick — same-week hearings for bail are routine. Special NDPS, PMLA, and CBI courts sit at the City Civil Court complex.",
    ],
    courtsForThisMatter: [
      "Karnataka High Court (bail, quashing, appeals)",
      "City Civil & Sessions Court, Bengaluru",
      "CCH, Halasuru Gate Metropolitan Magistrate",
      "Magistrate Courts at Jayanagar, Yelahanka, Mayo Hall",
      "CBI & Special PMLA Courts, City Civil Court complex",
      "Bangalore Rural District & Sessions Court",
    ],
    caseTypes: [
      { title: "Cyber Crime Defence", desc: "Cases at CCB and CEN stations under IT Act and BNS." },
      { title: "Economic Offences", desc: "Cheating, fraud, and fintech-related matters." },
      { title: "Bail Applications", desc: "Regular, anticipatory, interim bail under BNSS." },
      { title: "NDPS Cases", desc: "Commercial and intermediate-quantity defences." },
      { title: "498A / DV Defence", desc: "Matrimonial cruelty and DV Act responses." },
      { title: "Quashing Petitions", desc: "S. 528 BNSS petitions before Karnataka HC." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,000 (free first consultation on NyaySevak)",
      district: "₹7,000 – ₹30,000 per appearance",
      highCourt: "₹20,000 – ₹1,50,000 per appearance; senior counsel ₹2,50,000+",
      note: "Bangalore criminal-lawyer fees are 15–25% lower than Delhi/Mumbai. Cyber-crime retainers ₹50,000–₹2 lakh; bail matters at Karnataka HC typically ₹40,000–₹1 lakh all-inclusive.",
    },
    faqs: [
      { question: "Which court handles my criminal case in Bangalore?", answer: "FIR registration location decides jurisdiction. North Bengaluru: Yelahanka courts; Central: Halasuru Gate; South: Jayanagar/Mayo Hall; Sessions-triable offences go to City Civil & Sessions Court at Bengaluru." },
      { question: "Do you handle cyber-crime cases in Bangalore?", answer: "Yes. Our Bangalore cyber-crime specialists handle cases registered at CCB Bannerghatta and CEN divisions across Bengaluru — UPI frauds, phishing, OTP fraud, deepfake, and corporate data-breach matters." },
      { question: "How fast can I get anticipatory bail at Karnataka HC?", answer: "Urgent anticipatory bail applications can be heard within 3–7 days at Karnataka HC. Our lawyers file with supporting mentioning before the appropriate bench to secure quick listing." },
      { question: "What are Bangalore criminal lawyer fees?", answer: "Magistrate Court: ₹7,000–₹20,000 per appearance; Sessions Court: ₹15,000–₹40,000; Karnataka HC: ₹20,000–₹1.5 lakh; Senior counsel: ₹2.5 lakh+. Free first consultation on NyaySevak." },
      { question: "How long does a criminal trial take in Bangalore?", answer: "Magistrate trials: 12–24 months. Sessions trials: 2–4 years. Bail at Sessions: 2–4 weeks; at Karnataka HC: 3–8 weeks." },
      { question: "Do you handle CBI cases in Bangalore?", answer: "Yes. CBI and Special PMLA Courts at the City Civil Court complex are regularly attended by our specialist panel." },
    ],
    localNotes: [
      "Bangalore Police's cyber infrastructure is the most advanced in India — specialist defence counsel is strongly recommended.",
      "Karnataka HC's single-judge bail benches are relatively quick compared to other HCs.",
      "Bangalore Rural, Ramanagara, and Tumakuru are separate jurisdictions — many cases filed as 'Bangalore' actually fall outside Bengaluru Urban.",
    ],
  },

  "bangalore__civil-law": {
    lead:
      "Bangalore civil litigation is dominated by property disputes, RERA cases, IT-sector commercial disputes, and startup shareholder conflicts. NyaySevak's Bangalore civil lawyers handle everything from Whitefield and Electronic City commercial-lease matters to recovery suits, specific performance, partition, and commercial arbitration before the Karnataka High Court.",
    landscape: [
      "Karnataka's civil court hierarchy: Small Causes Court (up to ₹1 lakh), Civil Judge (Jr. Division) up to ₹5 lakh, Civil Judge (Sr. Division) above ₹5 lakh, Additional City Civil Court for higher values, and Karnataka HC on appeal. Commercial matters above ₹3 lakh go to the Commercial Court at City Civil Court under the Commercial Courts Act.",
      "Bangalore property litigation is among India's most complex because of the layered history: Kengeri/Gandhinagar revenue-records, BBMP/Panchayat-certified layouts, BDA allotments, BMRDA belt layouts, and private layouts often with gramathana conversion issues. 30-year title search plus mother deed plus encumbrance plus khata — the 'Bangalore property diligence stack' — is the minimum standard.",
      "Karnataka RERA is active and handles Bangalore builder-buyer disputes; the Karnataka Appellate Tribunal (K-RERA AT) hears appeals. Startup-centric commercial disputes — shareholder, ESOP, convertible-note, and investor-founder conflicts — are a distinctively Bangalore practice.",
    ],
    courtsForThisMatter: [
      "Karnataka High Court (commercial division, writs, appeals)",
      "City Civil Court, Bengaluru (suits above ₹5 lakh)",
      "Commercial Courts at City Civil Court",
      "Karnataka RERA & Appellate Tribunal",
      "Consumer Commissions (District, State)",
      "BBMP / BDA tribunals for layout matters",
    ],
    caseTypes: [
      { title: "Property Title & Partition", desc: "Partition suits, declaration, specific performance on Bangalore properties." },
      { title: "Builder-Buyer / K-RERA", desc: "Refund and possession claims against Bangalore developers." },
      { title: "Commercial Recovery", desc: "Order 37 summary suits, commercial-contract enforcement." },
      { title: "Startup Disputes", desc: "Shareholder, convertible-note, ESOP, and founder-investor matters." },
      { title: "Commercial Leases", desc: "IT-park and retail-lease disputes across Whitefield, ORR, MG Road." },
      { title: "Consumer Cases", desc: "District Consumer Commission and Karnataka State Commission filings." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,500 (free first consultation on NyaySevak)",
      district: "₹8,000 – ₹35,000 per appearance",
      highCourt: "₹25,000 – ₹1,75,000 per appearance",
      note: "Karnataka court fees are ad-valorem and among the lower slabs in India. Title diligence for a Bengaluru property: ₹20,000–₹60,000 depending on layout complexity. K-RERA filings start at ₹30,000 retainer.",
    },
    faqs: [
      { question: "Which court for my Bangalore civil case?", answer: "Up to ₹5 lakh: Civil Judge (Jr Div); ₹5 lakh–higher: Civil Judge (Sr Div)/City Civil Court; Commercial matters above ₹3 lakh: Commercial Court; Appeals: Karnataka HC." },
      { question: "What's involved in Bangalore property diligence?", answer: "Mother deed + 30-year chain at Sub-Registrar + encumbrance (EC) + khata (BBMP) + tax-paid receipt + BBMP/BDA/BMRDA layout approval + conversion order (for ex-agricultural land) + building plan + OC/CC. Our team delivers a complete report." },
      { question: "How fast is K-RERA in Bangalore?", answer: "Karnataka RERA typically decides matters within 8–14 months. Appeals to the Karnataka Appellate Tribunal add 6–9 months. Execution of refund awards is through the Collector under Revenue Code." },
      { question: "Do you handle startup shareholder disputes?", answer: "Yes. Our commercial team handles convertible-note, SAFE-note, ESOP, and shareholder disputes before NCLT Bengaluru and the Karnataka HC Commercial Division. Section 241-242 oppression petitions are a specialism." },
      { question: "What is a gramathana property issue?", answer: "Gramathana is a type of village-settlement land. Properties built on unauthorised gramathana extensions have title and construction-approval issues; our property team advises on regularisation and risk." },
      { question: "Are virtual hearings available in Bangalore?", answer: "Yes. Karnataka HC and City Civil Court permit virtual hearings in many matters, and e-filing is extensively adopted." },
    ],
    localNotes: [
      "Bangalore's layered property-approval system (BBMP vs BDA vs BMRDA vs Panchayat) is unique and requires specialist property counsel.",
      "Karnataka HC is pro-technology and has among the highest rates of virtual hearings.",
      "Commercial disputes at the Karnataka HC Commercial Division are time-bound — Commercial Courts Act compliance is strictly enforced.",
    ],
  },

  "bangalore__family-matrimonial": {
    lead:
      "Bangalore matrimonial litigation is handled at three dedicated Family Courts — Mayo Hall, Halasuru Gate, and Bengaluru Rural — plus Karnataka HC on appeal. NyaySevak's Bangalore divorce lawyers handle mutual-consent and contested divorces, IT-sector cross-border custody disputes, maintenance, DV Act filings, and 498A defence with sensitivity and local expertise.",
    landscape: [
      "Bangalore's Family Courts have established themselves as among the fastest in India for mutual-consent divorce — 6-month cooling-off waivers are routine when both parties consent. Contested divorces run 2–4 years, faster than Delhi or Mumbai averages. The Karnataka HC has been progressive on irretrievable-breakdown and custody.",
      "Bangalore's IT-driven demographics create unusual family-law cases: NRI-Indian spouse custody disputes, cross-border maintenance, and cross-country relocation petitions. Our Bangalore matrimonial lawyers handle Hague Convention and non-Hague Convention cases regularly.",
      "DV Act filings are heavy at Magistrate Courts in Halasuru Gate and Yelahanka. 498A defence strategies follow the Karnataka HC's Arnesh Kumar-compliance guidelines strictly.",
    ],
    courtsForThisMatter: [
      "Family Court, Mayo Hall",
      "Family Court, Halasuru Gate",
      "Family Court, Bengaluru Rural",
      "Karnataka High Court (matrimonial appeals)",
      "Magistrate Courts (DV Act, 498A)",
    ],
    caseTypes: [
      { title: "Mutual-Consent Divorce", desc: "HMA, SMA, and personal-law mutual-consent filings with waiver strategy." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, adultery under HMA / SMA / Muslim / Christian law." },
      { title: "NRI / Cross-Border Custody", desc: "Hague and non-Hague Convention cases." },
      { title: "Maintenance & Alimony", desc: "S.144 BNSS, S.24 HMA, DV Act monetary relief." },
      { title: "Domestic Violence", desc: "Protection, residence, and monetary orders." },
      { title: "498A Defence", desc: "Quashing, anticipatory bail, regular bail." },
    ],
    feeRange: {
      consultation: "₹1,200 – ₹5,000 (free first consultation on NyaySevak)",
      district: "₹7,000 – ₹30,000 per hearing",
      highCourt: "₹20,000 – ₹1,25,000 per appearance",
      note: "Mutual-consent divorce retainers in Bangalore run ₹30,000–₹65,000 all-inclusive. NRI-custody matters are more specialised and billed on retainer + per-appearance basis.",
    },
    faqs: [
      { question: "Which Family Court in Bangalore?", answer: "Mayo Hall, Halasuru Gate, or Bengaluru Rural depending on residence and place of marriage. Jurisdiction is determined by respondent's residence or last matrimonial cohabitation." },
      { question: "How long does divorce take in Bangalore?", answer: "Mutual-consent: 5–9 months with waiver applications. Contested: 2–4 years. Appeals: additional 2–3 years." },
      { question: "Do you handle NRI divorce in Bangalore?", answer: "Yes. Our Bangalore matrimonial lawyers handle cross-border divorce filings, Hague Convention custody petitions, and coordinate with foreign counsel for service and enforcement." },
      { question: "Can a wife get maintenance in Bangalore?", answer: "Yes — under S.144 BNSS, S.24 HMA, and DV Act. Karnataka courts typically award 20–30% of husband's net monthly income as interim maintenance." },
      { question: "Can I file divorce online in Bangalore?", answer: "Yes. E-filing is standard, and many Bangalore Family Court hearings are conducted virtually. NyaySevak handles end-to-end digital filing." },
      { question: "How is child custody decided in Bangalore?", answer: "Welfare-of-child principle under GWA. Karnataka HC readily grants shared-parenting orders; cross-border cases follow the Supreme Court's Nithya Anand Raghavan and Prateek Gupta frameworks." },
    ],
    localNotes: [
      "Bangalore Family Courts are among India's fastest for MCD — specialist counsel can shorten timelines by months.",
      "NRI / cross-border custody is a genuine Bangalore specialism given the tech-industry demographics.",
      "Karnataka HC's matrimonial jurisprudence is progressive on live-in, custody, and irretrievable-breakdown.",
    ],
  },

  "bangalore__property-real-estate": {
    lead:
      "Bangalore property law is a minefield — BBMP vs BDA vs BMRDA vs Panchayat layouts, A-khata vs B-khata, gramathana, revenue-converted lands, and apartment-complex disputes. NyaySevak's Bangalore property lawyers handle title diligence, sale-deed drafting, K-RERA builder-buyer cases, partition, specific performance, and apartment-association disputes across Whitefield, Electronic City, Sarjapur, Hebbal, and North Bangalore belts.",
    landscape: [
      "Bangalore property title diligence is uniquely complex. The 'Bangalore stack' includes: mother deed, 30-year chain at Sub-Registrar, encumbrance (EC), BBMP khata (A-khata is fully regulation-compliant; B-khata has pending regularisation), tax-paid receipt, approved layout plan (BBMP/BDA/BMRDA), conversion order (under Karnataka Land Revenue Act), building plan approval, and occupancy certificate. Missing any layer creates future-sale problems.",
      "Bangalore has had multiple layout-regularisation schemes (Akrama-Sakrama, etc.) — their legal status is contested and pending before the Karnataka HC. Properties relying on regularisation promises should be examined carefully by a property lawyer.",
      "K-RERA handles builder-buyer matters for all projects ≥8 units or ≥500 sq m. Consumer Commission remedies run parallel. Apartment-association disputes (common areas, management-committee elections, maintenance fees, developer-handover conflicts) are a fast-growing category.",
    ],
    courtsForThisMatter: [
      "Karnataka High Court",
      "City Civil Court, Bengaluru",
      "K-RERA & Karnataka Appellate Tribunal",
      "Consumer Commissions",
      "BBMP / BDA / BMRDA tribunals",
      "Co-operative Societies Tribunal",
    ],
    caseTypes: [
      { title: "Title Diligence", desc: "Full Bangalore stack review plus site visit and physical verification." },
      { title: "Sale/Gift/Lease Drafting", desc: "Registration-ready documents compliant with Karnataka Stamp Act." },
      { title: "Specific Performance", desc: "Enforcing sale agreements under SRA." },
      { title: "K-RERA Cases", desc: "Refund and possession cases against Bangalore builders." },
      { title: "Partition Suits", desc: "Co-owner partition of ancestral properties." },
      { title: "Apartment-Association Disputes", desc: "Common areas, maintenance, developer-handover." },
    ],
    feeRange: {
      consultation: "₹2,000 – ₹7,500 (free first consultation on NyaySevak)",
      district: "₹12,000 – ₹40,000 per appearance",
      highCourt: "₹30,000 – ₹2,00,000 per appearance",
      note: "Karnataka stamp duty is 5% (3% for women in specific slabs) plus 1% registration and 0.5% cess. Title diligence for a single Bangalore property: ₹20,000–₹60,000. Full-service conveyancing including drafting and registration: ₹30,000–₹75,000 plus duties.",
    },
    faqs: [
      { question: "How do I verify Bangalore property title?", answer: "Engage a property lawyer to obtain the Bangalore diligence stack: mother deed, 30-year chain, EC, khata, tax receipts, layout approval, conversion order, building plan, and OC. A physical site visit is essential." },
      { question: "What is the difference between A-khata and B-khata?", answer: "A-khata is a fully regularised BBMP revenue entry — the property is compliant with BBMP bye-laws. B-khata indicates pending regularisation of deviations or layout. B-khata properties are riskier and may not be mortgageable by most banks." },
      { question: "What is Bangalore stamp duty?", answer: "5% on sale consideration (3% for women in certain slabs of Karnataka Stamp Act concessions) plus 1% registration and 0.5% cess. Gift between blood relatives is at concessional rates." },
      { question: "Can I buy property on revenue-converted agricultural land?", answer: "Yes, if the conversion order under Section 95 of Karnataka Land Revenue Act is in place. Without conversion, construction and sale are illegal. Our property team verifies conversion status before purchase." },
      { question: "How long does K-RERA take?", answer: "Karnataka RERA decides matters in 8–14 months; appeals add 6–9 months; refund enforcement through Collector adds 3–6 months." },
      { question: "Do you handle apartment-association disputes?", answer: "Yes. Management-committee elections, common-area encroachment, maintenance-fee defaults, developer-handover disputes — our team represents both associations and individual flat-owners before appropriate forums." },
    ],
    localNotes: [
      "Bangalore's layered property-approval ecosystem demands specialist counsel — generic property lawyers often miss BMRDA/BBMP distinctions.",
      "B-khata properties should be purchased with caution and legal opinion.",
      "K-RERA's refund-and-interest awards are often faster than civil court routes for delayed projects.",
    ],
  },

  "bangalore__corporate-business": {
    lead:
      "Bangalore is India's startup and IT capital — KPMG, Infosys, Wipro, Flipkart, Ola, Zomato, Swiggy, and hundreds of unicorns call it home. NyaySevak's Bangalore corporate lawyers handle startup incorporation, VC/PE fundraising documentation (SSA, SHA, SAFE-notes), ESOP structuring, IT-services commercial contracts, NCLT litigation, SEBI/AIF work, and cross-border M&A for Indian and foreign clients.",
    landscape: [
      "Bangalore's corporate-law practice is distinctive — the VC/PE and startup ecosystem drives most of the work. Shareholders' agreements, term sheets, convertible instruments (CCD/CCPS), SAFE-notes, ESOP plans, secondary sales, down-round negotiations, and unicorn pre-IPO structuring are daily fare for the Bangalore corporate bar.",
      "NCLT Bengaluru Bench handles company matters for Karnataka — IBC, oppression and mismanagement, mergers, amalgamations. The Karnataka HC Commercial Division hears arbitration petitions and complex commercial suits. SEBI's Southern Regional Office at Chennai has jurisdiction over Bangalore-listed entities, with SAT appeals heard in Mumbai.",
      "IT-services contracting — MSAs, SOWs, SLAs, data-protection addenda (including GDPR and India DPDP Act), IP-assignment agreements, and offshore-development terms — is a Bangalore specialism. IP litigation, particularly around trade secrets and non-compete enforcement, has grown sharply.",
    ],
    courtsForThisMatter: [
      "NCLT Bengaluru Bench",
      "NCLAT (Chennai Bench handles South India appeals)",
      "Karnataka High Court — Commercial Division",
      "SEBI Regional Office (Chennai has jurisdiction)",
      "ROC Bengaluru",
      "Competition Commission of India (through Delhi)",
    ],
    caseTypes: [
      { title: "Startup Incorporation", desc: "Pvt Ltd, LLP, OPC setup with MCA, GST, startup-India registration." },
      { title: "VC / PE Fundraising", desc: "Term sheet, SSA, SHA, SAFE-note, ESOP documentation." },
      { title: "ESOP Structuring", desc: "Employee stock option plans, trust structures, exercise mechanics." },
      { title: "IT-Services Contracts", desc: "MSA, SOW, SLA, data-protection, IP-assignment drafting." },
      { title: "NCLT Litigation", desc: "Oppression/mismanagement, IBC, mergers before NCLT Bengaluru." },
      { title: "Commercial Arbitration", desc: "S.9/11/34/37 at Karnataka HC Commercial Division." },
      { title: "Cross-Border M&A", desc: "Due diligence, SPA, regulatory approvals (CCI, RBI, MCA)." },
    ],
    feeRange: {
      consultation: "₹2,500 – ₹12,500 (free first consultation on NyaySevak)",
      district: "NCLT: ₹25,000–₹1,25,000 per hearing",
      highCourt: "₹40,000 – ₹3,50,000 per appearance",
      note: "Bangalore corporate-law fees are 10–20% below Mumbai/Delhi. Pvt Ltd incorporation: ₹15,000–₹30,000. SSA+SHA drafting: ₹1.5–₹5 lakh depending on complexity. ESOP plan drafting: ₹1–₹3 lakh.",
    },
    faqs: [
      { question: "Which NCLT bench for my Bangalore company?", answer: "Companies registered in Karnataka go to NCLT Bengaluru Bench. Appeals go to NCLAT Chennai (which has jurisdiction over South India NCLT appeals)." },
      { question: "How do I raise a VC round for my startup?", answer: "Typical seed / Series A: term sheet → due diligence → SSA + SHA drafting → board/shareholder approvals → share allotment → ROC filings. Our Bangalore team handles end-to-end startup financings and coordinates with auditors and CS." },
      { question: "Can I structure ESOP for my team?", answer: "Yes. We draft ESOP plans compliant with Companies (Share Capital and Debenture) Rules, 2014, structure trusts if needed, handle exercise-price calibration, and advise on tax implications for founders and employees." },
      { question: "What is a SAFE-note and is it enforceable in India?", answer: "SAFE (Simple Agreement for Future Equity) notes originated in the US but are adapted for India through CCD/CCPS structures. Enforceability depends on drafting — our team handles India-compliant SAFE-note documentation." },
      { question: "Do you handle IT-services MSA disputes?", answer: "Yes. Our commercial team handles MSA, SOW, and SLA disputes before the Karnataka HC Commercial Division and in institutional arbitration. Data-protection breach claims are increasingly common." },
      { question: "Where is SEBI jurisdiction for Bangalore?", answer: "SEBI's Southern Regional Office at Chennai has jurisdiction over Karnataka. Show-cause responses and appeals are handled through a combination of Chennai and Mumbai representation — our panel covers both." },
    ],
    localNotes: [
      "Bangalore's VC/PE documentation practice is the most developed in India.",
      "NCLT Bengaluru is among India's fastest NCLT benches — admissions are typically decided within 60–90 days.",
      "IT-sector commercial contracts routinely include data-protection and IP-assignment clauses that require specialist drafting.",
    ],
  },

  // ────────────────────────────── CHENNAI ──────────────────────────────
  "chennai__criminal-law": {
    lead:
      "Chennai's criminal justice system is anchored by the Madras High Court and the City Civil & Sessions Court at Chennai. NyaySevak's verified Chennai criminal lawyers handle bail, quashing, trials, and appeals across the Principal Sessions Court, the Chief Metropolitan Magistrate Court at Egmore, and the Saidapet, Alandur, and Poonamallee Magistrate courts — with defence specialists for POCSO, NDPS, SC/ST Act, and economic-offence cases.",
    landscape: [
      "Chennai's principal criminal courts are at Egmore and the City Civil Court complex. The Chief Metropolitan Magistrate's court at Egmore handles FIR committals and lesser offences. Sessions cases go to the Principal Sessions Court, Chennai, with special courts for POCSO, SC/ST Act, CBI, NDPS, and MCOP (Motor Accidents) matters. Chengalpattu, Tiruvallur, Kancheepuram, and Villupuram districts have their own sessions courts.",
      "The Madras High Court's criminal side is among the most proactive in India — bail, quashing under Section 528 BNSS, and habeas corpus hearings are frequent and often same-week. The Court has been influential on custodial-violence rulings, pre-arrest notices, and police accountability.",
      "Tamil Nadu-specific statutes (Tamil Nadu Prevention of Women Harassment Act, goondas Act detentions) generate distinct practices. Our Chennai criminal lawyers handle goondas Act detention-order challenges and advisory board hearings.",
    ],
    courtsForThisMatter: [
      "Madras High Court (bail, quashing, criminal appeals)",
      "Principal Sessions Court, Chennai",
      "Chief Metropolitan Magistrate Court, Egmore",
      "Saidapet, Alandur, Poonamallee Magistrate Courts",
      "CBI, NDPS, POCSO Special Courts",
      "Chengalpattu and Tiruvallur District Sessions Courts",
    ],
    caseTypes: [
      { title: "Bail Applications", desc: "Regular, anticipatory, interim bail under BNSS." },
      { title: "Quashing (S.528 BNSS)", desc: "Quashing petitions before Madras HC." },
      { title: "Goondas Act Detention Challenge", desc: "Challenging preventive detentions through habeas corpus." },
      { title: "POCSO / SC-ST Act Defence", desc: "Special-court representation." },
      { title: "NDPS Defence", desc: "Commercial and intermediate-quantity trials." },
      { title: "Economic Offences", desc: "Cheating, fraud, S.138 NI Act, and SEBI matters." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹5,500 (free first consultation on NyaySevak)",
      district: "₹6,000 – ₹28,000 per appearance",
      highCourt: "₹20,000 – ₹1,50,000 per appearance; senior counsel ₹3,00,000+",
      note: "Chennai criminal lawyer fees are 10–20% below Mumbai/Delhi for comparable experience. Goondas Act habeas corpus filings at Madras HC: ₹50,000–₹1.5 lakh retainer typical.",
    },
    faqs: [
      { question: "Which Chennai court for my criminal case?", answer: "Depends on FIR location. Chennai city FIRs go to Egmore Magistrate Court for committal; sessions-triable offences move to Principal Sessions Court. Chengalpattu, Tiruvallur, Kanchipuram have their own district sessions courts." },
      { question: "How do I get habeas corpus in Chennai?", answer: "A Habeas Corpus Petition can be filed before the Madras HC — typically heard within 24–48 hours in urgent custody cases. Our team handles HCP filings for goondas Act detentions, dowry-harassment family-detention, and similar urgent matters." },
      { question: "What is the goondas Act?", answer: "The Tamil Nadu Prevention of Dangerous Activities of Bootleggers, Cyber Law Offenders, Drug Offenders, Forest Offenders, Goondas, Immoral Traffic Offenders, Sand Offenders, Slum Grabbers and Video Pirates Act, 1982 — allows preventive detention. Habeas corpus to Madras HC is the primary remedy." },
      { question: "How long does a Chennai criminal trial take?", answer: "Magistrate trials: 10–20 months. Sessions trials: 2–4 years. Bail at Sessions: 2–4 weeks; at Madras HC: 3–8 weeks." },
      { question: "Can I file quashing in Chennai?", answer: "Yes. Section 528 BNSS petitions are filed before the Madras HC — typically listed within 2–4 weeks, heard in 4–10 weeks." },
      { question: "Do you handle POCSO cases in Chennai?", answer: "Yes. Chennai has dedicated POCSO special courts with specialist procedures. Our panel handles both defence and victim representation." },
    ],
    localNotes: [
      "Tamil Nadu's goondas Act detentions create a distinct Madras HC habeas corpus practice — specialised counsel is essential.",
      "Madras HC is known for its detailed, reasoned orders in criminal matters.",
      "Chengalpattu district (erstwhile Kanchipuram South) has its own sessions court — jurisdictional confusion is common.",
    ],
  },

  "chennai__civil-law": {
    lead:
      "Chennai civil litigation includes high-value property disputes in Mylapore and T. Nagar, OMR / Sholinganallur IT-corridor commercial matters, RERA filings, and heavy commercial docket at the Madras High Court's Original Side. NyaySevak's Chennai civil lawyers handle title diligence, specific performance, partition, commercial recovery, arbitration, and tenancy under the Tamil Nadu Regulation of Rights and Responsibilities of Landlords and Tenants Act, 2017.",
    landscape: [
      "Chennai has unique bifurcated civil jurisdiction — the Madras HC has original civil jurisdiction for suits above ₹25 lakh within city limits (one of only three such HCs in India, with Bombay and Calcutta). Suits up to ₹25 lakh go to the City Civil Court. Small Causes Court handles minor matters and tenancy disputes.",
      "Tamil Nadu's 2017 Rent Act replaced the older Tamil Nadu Buildings (Lease and Rent Control) Act, 1960 — the new regime is more landlord-friendly and time-bound, though transition-period disputes remain. Tenancy practice at Chennai's Rent Control Court is active.",
      "Tamil Nadu RERA (TNRERA) handles builder-buyer disputes; the Tamil Nadu RERA Appellate Tribunal hears appeals. Consumer Commission filings (District and State) are heavy — Chennai's appellate consumer bench is among India's busiest.",
    ],
    courtsForThisMatter: [
      "Madras High Court — Original Side (suits above ₹25 lakh)",
      "City Civil Court, Chennai (suits ₹3 lakh – ₹25 lakh)",
      "Rent Control Court (tenancy)",
      "Small Causes Court (low-value civil)",
      "TNRERA & RERA Appellate Tribunal",
      "Consumer Commissions (District, State)",
    ],
    caseTypes: [
      { title: "Property Title Suits", desc: "Specific performance, declaration, partition on Chennai properties." },
      { title: "Commercial Recovery", desc: "Order 37 summary suits, Commercial Courts Act matters." },
      { title: "Tenancy Matters", desc: "TN Rent Act 2017 eviction and fair-rent disputes." },
      { title: "TNRERA Cases", desc: "Refund and possession claims against Chennai developers." },
      { title: "Commercial Arbitration", desc: "S.9/11/34 petitions at Madras HC Commercial Division." },
      { title: "Consumer Cases", desc: "District Consumer Commission and TN State Commission filings." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,000 (free first consultation on NyaySevak)",
      district: "₹8,000 – ₹32,000 per appearance",
      highCourt: "₹25,000 – ₹1,75,000 per appearance",
      note: "Tamil Nadu court fees are ad-valorem with moderate slabs. Title diligence for a Chennai property: ₹20,000–₹50,000. TNRERA retainer: ₹30,000–₹75,000 typical.",
    },
    faqs: [
      { question: "Which Chennai civil court handles my case?", answer: "Up to ₹3 lakh: Small Causes. ₹3 lakh–₹25 lakh: City Civil Court. Above ₹25 lakh: Madras HC Original Side. Commercial matters above ₹3 lakh go to Commercial Courts." },
      { question: "How do I verify Chennai property title?", answer: "30-year chain at Sub-Registrar + encumbrance (EC) + patta/chitta (revenue records) + tax receipts + CMDA/DTCP planning permission + building plan + OC/CC + litigation search at Madras HC. Our team delivers a report." },
      { question: "What is the TN Rent Act 2017 effect?", answer: "The 2017 Act provides faster, time-bound rent control with clearer eviction grounds than the old 1960 Act. Pre-2017 tenancies may still be governed by 1960 Act in limited cases." },
      { question: "How fast is TNRERA?", answer: "TNRERA typically decides matters in 9–15 months. Appeals to TN RERA Appellate Tribunal add 6–9 months." },
      { question: "What is Chennai stamp duty?", answer: "TN stamp duty is 7% on sale consideration plus 4% registration (total 11%). One of India's higher rates, compensated by a ceiling in some transactions." },
      { question: "Do you handle commercial arbitration in Chennai?", answer: "Yes. Madras HC Commercial Division handles S.9/11/34 arbitration petitions quickly. Chennai is emerging as an institutional-arbitration seat through MCIA-Chennai and TNIA." },
    ],
    localNotes: [
      "Madras HC Original Side pecuniary jurisdiction (₹25 lakh) is lower than Bombay's (₹1 crore) and higher than Calcutta's (₹10 lakh).",
      "Tamil Nadu's higher stamp duty has driven creative transaction structures — family settlements and gift deeds are commonly used for planning.",
      "CMDA (Chennai Metropolitan Development Authority) planning permission is a distinct Chennai requirement for all construction.",
    ],
  },

  "chennai__family-matrimonial": {
    lead:
      "Chennai's matrimonial practice is handled at dedicated Family Courts with the Madras HC on appeal. NyaySevak's Chennai divorce lawyers handle mutual-consent and contested divorces, NRI matrimonial matters (given Chennai's substantial diaspora), child custody, DV Act filings, and 498A defence with cultural sensitivity for Tamil Hindu, Muslim, and Christian personal-law nuances.",
    landscape: [
      "Chennai's Family Courts handle matters under the Family Courts Act, 1984. The Principal Family Court at Chennai and the Additional Family Courts cover the city; Chengalpattu, Tiruvallur, and Kanchipuram have their own Family Courts. Jurisdiction is based on residence of respondent, place of marriage, or last cohabitation.",
      "Tamil Nadu Diaspora-related NRI divorce and custody cases are significant given the large Tamil-origin population in Malaysia, Singapore, the Gulf, and the US. Our Chennai matrimonial lawyers handle Hague Convention custody returns and cross-border maintenance.",
      "Christian divorce under the Indian Divorce Act, 1869 has specific procedures, including the decree-confirmation requirement in some matters — a distinct Chennai practice given the city's sizeable Christian population. Muslim matrimonial matters include khula, talaq registration, and mehr disputes.",
    ],
    courtsForThisMatter: [
      "Principal Family Court, Chennai",
      "Additional Family Courts, Chennai",
      "Chengalpattu and Tiruvallur Family Courts",
      "Magistrate Courts (DV Act, 498A)",
      "Madras High Court (matrimonial appeals)",
    ],
    caseTypes: [
      { title: "Mutual-Consent Divorce", desc: "HMA / SMA / Christian / Muslim mutual-consent filings." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, adultery under applicable personal law." },
      { title: "NRI / Cross-Border Custody", desc: "Hague and non-Hague cases; foreign judgment recognition." },
      { title: "Maintenance & Alimony", desc: "S.144 BNSS, S.24 HMA, DV Act." },
      { title: "Christian Divorce", desc: "Indian Divorce Act, 1869 filings and decree confirmation." },
      { title: "498A Defence", desc: "Quashing, AB, regular bail." },
    ],
    feeRange: {
      consultation: "₹1,200 – ₹5,000 (free first consultation on NyaySevak)",
      district: "₹7,000 – ₹28,000 per hearing",
      highCourt: "₹20,000 – ₹1,25,000 per appearance",
      note: "Mutual-consent divorce retainers in Chennai run ₹25,000–₹60,000. NRI matters are typically higher due to complexity and cross-border coordination.",
    },
    faqs: [
      { question: "Which Family Court in Chennai?", answer: "Principal Family Court, Chennai for city residents; Chengalpattu, Tiruvallur, Kanchipuram for their districts. Jurisdiction is determined by respondent's residence or place of last cohabitation." },
      { question: "Do you handle NRI divorce in Chennai?", answer: "Yes. Chennai's NRI divorce practice is substantial given Tamil diaspora. We handle service abroad, foreign-decree recognition, Hague custody cases, and cross-border maintenance enforcement." },
      { question: "How does Christian divorce work in Chennai?", answer: "Christian divorce is governed by the Indian Divorce Act, 1869 — specific procedures apply, including decree-confirmation in some matters. Our team handles Christian matrimonial matters regularly." },
      { question: "How long does divorce take in Chennai?", answer: "Mutual-consent: 6–10 months. Contested: 3–5 years. Appeals to Madras HC: 2–4 years." },
      { question: "Can a wife claim maintenance in Chennai?", answer: "Yes — under S.144 BNSS, S.24 HMA (for Hindu/Buddhist/Jain/Sikh), Section 37 Indian Divorce Act (for Christians), and DV Act. Typical awards are 20–30% of husband's net income as interim maintenance." },
      { question: "What is khula in Muslim divorce?", answer: "Khula is divorce initiated by the wife under Muslim personal law, typically with return of mehr. Our Muslim-law panel handles khula, talaq-e-tafweez, and faskh (dissolution) cases." },
    ],
    localNotes: [
      "Tamil Nadu's Christian-law matrimonial practice is distinctive — decree-confirmation procedures differ from other HCs.",
      "Madras HC has been progressive on Muslim women's rights, live-in relationships, and inter-faith marriages.",
      "Chennai NRI matrimonial practice often involves parallel proceedings in Singapore, Malaysia, UAE, and the US.",
    ],
  },

  "chennai__property-real-estate": {
    lead:
      "Chennai property law is layered — CMDA planning, patta/chitta revenue records, TN-specific stamp-duty regime (at 11% total), apartment-ownership under the Tamil Nadu Apartment Ownership Act, 1994, and TNRERA for new projects. NyaySevak's Chennai property lawyers handle title diligence, sale-deed drafting, specific performance, partition, RERA filings, and apartment-association disputes across Mylapore, T. Nagar, Adyar, Velachery, OMR, ECR, and Chennai metro belts.",
    landscape: [
      "Chennai title diligence requires the 'Chennai stack': 30-year chain at Sub-Registrar, patta (revenue-record title), chitta (possession extract), A-register extract, tax-paid receipts, CMDA / DTCP planning permission, building plan approval, and OC/CC. DTCP (Directorate of Town and Country Planning) covers areas outside CMDA (Chennai Metropolitan Development Authority).",
      "Chennai has pioneered the Tamil Nadu Apartment Ownership Act, 1994 — apartments are legally owned as deeded units with undivided share (UDS) in land. This is distinct from Mumbai's cooperative-society model. Disputes over UDS, common areas, and maintenance are common.",
      "TNRERA handles new-project disputes. Chennai's real-estate market (T. Nagar, Mylapore, Velachery, OMR, Perumbakkam, Sholinganallur) has generated heavy TNRERA caseload, particularly in the OMR IT-corridor belt.",
    ],
    courtsForThisMatter: [
      "Madras High Court (writs, high-value suits)",
      "City Civil Court, Chennai",
      "TNRERA & RERA Appellate Tribunal",
      "Consumer Commissions",
      "Sub-Registrar offices (registration)",
      "CMDA / DTCP",
    ],
    caseTypes: [
      { title: "Title Diligence", desc: "30-year chain plus patta/chitta + CMDA approvals." },
      { title: "Sale/Gift/Lease Drafting", desc: "Registration-ready drafting under TN Stamp Act." },
      { title: "Specific Performance", desc: "Enforcing agreements to sell under SRA." },
      { title: "TNRERA Cases", desc: "Against Chennai developers for delays and defects." },
      { title: "Apartment-Ownership Disputes", desc: "UDS, common-area, maintenance disputes." },
      { title: "Partition Suits", desc: "Co-owner partition of ancestral property." },
    ],
    feeRange: {
      consultation: "₹2,000 – ₹7,500 (free first consultation on NyaySevak)",
      district: "₹10,000 – ₹35,000 per appearance",
      highCourt: "₹25,000 – ₹1,75,000 per appearance",
      note: "TN total property-registration cost is 11% (7% stamp + 4% registration). Title diligence for a Chennai property: ₹20,000–₹50,000. Conveyancing including drafting and registration: ₹25,000–₹60,000 plus duties.",
    },
    faqs: [
      { question: "What is Chennai stamp duty?", answer: "7% stamp duty + 4% registration = 11% total on sale consideration. Gift deeds between blood relatives have concessional slabs. No female-buyer concession currently." },
      { question: "How do I verify Chennai property title?", answer: "30-year chain + patta + chitta + A-register + tax receipts + CMDA/DTCP approval + building plan + OC. Our property team delivers a signed due-diligence report." },
      { question: "What is UDS in a Chennai apartment?", answer: "Undivided Share (UDS) in the underlying land — each apartment owner has a proportionate share of the land. UDS disputes arise when developers retain unsold units or sell excess UDS." },
      { question: "How long does a Chennai property dispute take?", answer: "Title suits: 3–7 years. Partition: 5–10 years. TNRERA: 9–15 months. Consumer: 12–24 months." },
      { question: "Do you handle OMR / ECR property matters?", answer: "Yes. OMR and ECR are active TNRERA/consumer jurisdictions given the scale of new construction. Our panel includes property lawyers with deep OMR / Sholinganallur / Perumbakkam expertise." },
      { question: "What if the seller has no patta?", answer: "Patta is a revenue title document for many rural/semi-urban Chennai properties. Without valid patta, title is questionable. Our team can advise on patta transfer under the TN Patta Pass Book Act." },
    ],
    localNotes: [
      "Tamil Nadu's 11% total property-registration cost is among India's highest — planning is essential.",
      "CMDA/DTCP distinction matters — properties outside CMDA come under DTCP with different approval regimes.",
      "Tamil Nadu Apartment Ownership Act creates a distinctive legal framework for Chennai apartments.",
    ],
  },

  "chennai__corporate-business": {
    lead:
      "Chennai is South India's commercial-litigation hub — a major IT, auto-manufacturing, and healthcare centre. NyaySevak's Chennai corporate lawyers handle company incorporation, commercial contracts, NCLT Chennai litigation, NCLAT Chennai appeals (since 2022), SEBI Southern Regional Office matters, arbitration, and M&A for clients ranging from Chennai startups to Tata, Ford, BMW, Ashok Leyland, and Apollo Hospital.",
    landscape: [
      "Chennai hosts the NCLAT Chennai Bench (constituted 2022), which hears appeals from all South-India NCLT benches — Bengaluru, Hyderabad, Chennai, Amaravati, and Kochi. This makes Chennai the appellate capital for South Indian insolvency. NCLT Chennai Bench itself handles Tamil Nadu and Puducherry company matters.",
      "SEBI's Southern Regional Office at Chennai has jurisdiction over Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, Telangana, Puducherry, and Lakshadweep. Show-cause notices, adjudication proceedings, and consent-order negotiations for southern-HQ'd entities all route through Chennai.",
      "Madras HC Commercial Division handles S.9/11/34/37 arbitration petitions, IPR, shareholder disputes, and high-value commercial suits. Chennai is an established arbitration seat (particularly for infrastructure disputes) and TNIA (Tamil Nadu International Arbitration) is gaining traction.",
    ],
    courtsForThisMatter: [
      "NCLT Chennai Bench",
      "NCLAT Chennai Bench (South India appeals)",
      "Madras High Court — Commercial Division",
      "SEBI Southern Regional Office, Chennai",
      "ROC Chennai",
      "Competition Commission of India (through Delhi)",
    ],
    caseTypes: [
      { title: "Company Incorporation", desc: "Pvt Ltd, LLP, OPC, Sec 8 setup with MCA filings." },
      { title: "Commercial Contracts", desc: "MSA, SOW, distributorship, franchise drafting and disputes." },
      { title: "NCLT / NCLAT Litigation", desc: "Oppression, IBC, mergers at NCLT Chennai; appeals at NCLAT Chennai." },
      { title: "SEBI Matters", desc: "Show-cause, adjudication, and consent-order work at SRO Chennai." },
      { title: "Commercial Arbitration", desc: "S.9/11/34/37 at Madras HC; TNIA-seated arbitrations." },
      { title: "M&A Transactions", desc: "Due diligence, SPA, regulatory approvals." },
      { title: "Infrastructure Disputes", desc: "EPC, concession, and government-contract arbitration." },
    ],
    feeRange: {
      consultation: "₹2,500 – ₹12,500 (free first consultation on NyaySevak)",
      district: "NCLT: ₹25,000–₹1,25,000 per hearing",
      highCourt: "₹40,000 – ₹3,00,000 per appearance",
      note: "Chennai corporate-law fees are 10–20% below Mumbai/Delhi. Incorporation ₹15,000–₹30,000. NCLAT appeals: ₹75,000–₹2 lakh per appearance. Infrastructure arbitrations often on hybrid retainer + success-fee basis.",
    },
    faqs: [
      { question: "Which NCLT for my Chennai company?", answer: "Tamil Nadu and Puducherry companies go to NCLT Chennai Bench. Appeals go to NCLAT Chennai (since 2022) — for all South India." },
      { question: "How do I incorporate a company in Chennai?", answer: "SPICe+ Part A + B (MCA), DIN, DSC, MOA/AOA drafting, PAN/TAN, bank account. Timeline: 7–12 working days. Cost: ₹15,000–₹30,000." },
      { question: "Is SEBI SRO Chennai active?", answer: "Yes. SEBI Chennai handles show-cause, adjudication, and consent-order work for 7 southern states and 2 UTs. Our securities panel appears regularly." },
      { question: "Is Chennai an arbitration seat?", answer: "Yes — Madras HC is arbitration-friendly, and TNIA (Tamil Nadu International Arbitration) is growing. Infrastructure arbitrations (EPC, concession) are a Chennai specialism." },
      { question: "Do you handle NCLAT appeals in Chennai?", answer: "Yes. Our panel appears regularly before NCLAT Chennai Bench, which has jurisdiction over NCLT Bengaluru, Chennai, Hyderabad, Amaravati, and Kochi." },
      { question: "What about CCI matters in Chennai?", answer: "CCI is headquartered in Delhi but handles matters involving Chennai-based entities regularly. We coordinate with Delhi CCI counsel for comprehensive representation." },
    ],
    localNotes: [
      "NCLAT Chennai's constitution in 2022 significantly reduced travel-to-Delhi for South India appeals — a major cost saving.",
      "SEBI SRO Chennai's jurisdiction across 7 states makes local representation valuable for southern-HQ'd entities.",
      "Chennai infrastructure arbitration practice is among India's most developed.",
    ],
  },

  // ────────────────────────────── HYDERABAD ──────────────────────────────
  "hyderabad__criminal-law": {
    lead:
      "Hyderabad's criminal justice runs across the Metropolitan Sessions Court at Nampally, the Chief Metropolitan Magistrate at Nampally, Magistrate Courts across the city, and the Ranga Reddy District Court at L. B. Nagar. NyaySevak's Hyderabad criminal lawyers handle bail, quashing before the Telangana High Court, cyber-crime defence, narcotics cases, and economic-offence matters for both Hyderabad city and Cyberabad / Rachakonda commissionerate FIRs.",
    landscape: [
      "Hyderabad has three police commissionerates — Hyderabad City, Cyberabad (covering HITEC City, Gachibowli, Madhapur, Kondapur), and Rachakonda (covering LB Nagar, Malkajgiri). Each commissionerate's FIRs are tried at different court complexes. Hyderabad city FIRs go to Nampally Metropolitan Sessions/Magistrate; Cyberabad and Rachakonda FIRs go to Ranga Reddy District Court at L. B. Nagar or Medchal-Malkajgiri District Court.",
      "Telangana High Court (which serves both Telangana and Andhra Pradesh in limited matters, though AP has its own HC) is at Hyderabad. Its criminal bail and quashing practice is quick. Special courts for POCSO, NDPS, SC/ST Act, PMLA, and CBI operate at the Nampally complex.",
      "Cyberabad — covering HITEC City and the IT corridor — sees a disproportionate share of cyber-crime filings given Hyderabad's tech-hub status. The Cyberabad Cyber Crime Police Station is well-equipped, and defence strategy has become a Hyderabad specialism.",
    ],
    courtsForThisMatter: [
      "Telangana High Court (bail, quashing, appeals)",
      "Metropolitan Sessions Court, Nampally",
      "Chief Metropolitan Magistrate Court, Nampally",
      "Ranga Reddy District Court, L. B. Nagar (Cyberabad and Rachakonda)",
      "Medchal-Malkajgiri District Court",
      "Special CBI, PMLA, NDPS Courts at Nampally",
    ],
    caseTypes: [
      { title: "Bail Applications", desc: "Regular, anticipatory, interim bail under BNSS." },
      { title: "Cyber Crime Defence", desc: "HITEC City / Cyberabad cyber-police cases." },
      { title: "Quashing Petitions", desc: "S. 528 BNSS before Telangana HC." },
      { title: "NDPS Defence", desc: "Commercial and intermediate-quantity cases." },
      { title: "Economic Offences", desc: "Fraud, cheating, S.138 NI Act cases." },
      { title: "PMLA / ED Defence", desc: "Special PMLA Court representation." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹5,500 (free first consultation on NyaySevak)",
      district: "₹6,000 – ₹28,000 per appearance",
      highCourt: "₹20,000 – ₹1,50,000 per appearance; senior counsel ₹3,00,000+",
      note: "Hyderabad criminal lawyer fees track Bengaluru levels — 15–20% below Mumbai/Delhi. Bail matters at Telangana HC typically ₹35,000–₹1 lakh all-inclusive.",
    },
    faqs: [
      { question: "Which Hyderabad court for my criminal case?", answer: "Depends on which commissionerate registered the FIR. Hyderabad City: Nampally. Cyberabad (HITEC City, Gachibowli, Madhapur): Ranga Reddy District Court at LB Nagar. Rachakonda: also LB Nagar. Medchal-Malkajgiri Commissionerate: Medchal-Malkajgiri District Court." },
      { question: "Do you handle cyber-crime cases in Hyderabad?", answer: "Yes. Cyberabad Cyber Crime PS handles UPI frauds, phishing, data-theft, and corporate cybercrime matters. Our panel includes specialist cyber defence counsel." },
      { question: "How fast is bail at Telangana HC?", answer: "Bail matters are typically listed within 2–5 days and decided within 3–8 weeks. Urgent matters can be heard same-week through mentioning." },
      { question: "What are Hyderabad criminal lawyer fees?", answer: "Magistrate: ₹6,000–₹18,000 per appearance; Sessions: ₹12,000–₹35,000; Telangana HC: ₹20,000–₹1.5 lakh; Senior counsel: ₹3 lakh+." },
      { question: "How long does a Hyderabad criminal trial take?", answer: "Magistrate: 12–20 months. Sessions: 2–4 years. Bail: Sessions 2–4 weeks; HC 3–8 weeks." },
      { question: "Do you handle ED / PMLA cases in Hyderabad?", answer: "Yes. Special PMLA Court at Nampally hears ED matters. Our panel includes specialists in ECIR proceedings and attachment challenges." },
    ],
    localNotes: [
      "Hyderabad's three-commissionerate structure (Hyderabad, Cyberabad, Rachakonda) creates jurisdictional complexity — specialist local counsel is essential.",
      "Telangana HC is separate from AP HC (since 2019) — AP-origin cases are heard at Amaravati, not Hyderabad.",
      "Cyberabad IT-corridor cyber-crime defence is a growing specialism.",
    ],
  },

  "hyderabad__civil-law": {
    lead:
      "Hyderabad civil litigation covers high-value property disputes (Jubilee Hills, Banjara Hills, HITEC City), commercial matters from the IT corridor, real-estate RERA filings under Telangana RERA, and consumer disputes. NyaySevak's Hyderabad civil lawyers handle title diligence, specific performance, partition, commercial recovery, arbitration, and tenancy across the Nampally and LB Nagar court complexes.",
    landscape: [
      "Telangana's civil court hierarchy: Junior Civil Judge (up to ₹5 lakh), Senior Civil Judge (₹5 lakh–₹25 lakh), City Civil Court Hyderabad (above ₹25 lakh), and Telangana HC on appeal. Commercial matters above ₹3 lakh go to Commercial Courts.",
      "Hyderabad property litigation is complex because of the GO Ms No. 33 layout-regularisation regime, GPA-based transactions (which Telangana has curbed), TS-bPASS building-approval overlay, and various pattadar-pattedar-land-survey issues in the metropolitan belt. Title diligence requires specialist skill.",
      "Telangana RERA (TSRERA) is among the more active state RERAs, particularly for HITEC City, Gachibowli, and Kondapur projects. Consumer Commissions at District and State levels handle service-deficiency claims.",
    ],
    courtsForThisMatter: [
      "Telangana High Court",
      "City Civil Court, Hyderabad (suits above ₹25 lakh)",
      "Senior Civil Judge Courts (₹5–₹25 lakh)",
      "TSRERA & TSRERA Appellate Tribunal",
      "Consumer Commissions (District, State)",
      "TS-bPASS / HMDA for planning matters",
    ],
    caseTypes: [
      { title: "Property Title Suits", desc: "Declaration, specific performance, partition on Hyderabad properties." },
      { title: "Commercial Recovery", desc: "Order 37 suits, Commercial Courts Act matters." },
      { title: "TSRERA Cases", desc: "Against Hyderabad developers for delays and defects." },
      { title: "Consumer Cases", desc: "Service deficiency, product liability, real-estate complaints." },
      { title: "Commercial Arbitration", desc: "S.9/11/34 petitions at Telangana HC." },
      { title: "Tenancy Matters", desc: "Under TS Buildings (Lease, Rent, and Eviction) Control Act." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,000 (free first consultation on NyaySevak)",
      district: "₹8,000 – ₹30,000 per appearance",
      highCourt: "₹22,000 – ₹1,50,000 per appearance",
      note: "Telangana stamp duty is 6% + 1% transfer duty + 0.5% registration (7.5% total). Title diligence: ₹20,000–₹50,000. TSRERA retainer: ₹30,000–₹75,000.",
    },
    faqs: [
      { question: "Which Hyderabad civil court handles my case?", answer: "Up to ₹5 lakh: Junior Civil Judge. ₹5–₹25 lakh: Senior Civil Judge / City Civil Court. Above ₹25 lakh: City Civil Court / Telangana HC." },
      { question: "How do I verify Hyderabad property title?", answer: "30-year chain + encumbrance + pattadar passbook + HMDA/TS-bPASS approvals + RoR entries + tax receipts + building-plan approval + litigation search at HC. Our team delivers a signed report." },
      { question: "Is GPA sale valid in Hyderabad?", answer: "Generally no — Telangana has strongly discouraged GPA-based transfers since 2015. Proper registered sale deeds are required. Our team can advise on regularising legacy GPA transactions." },
      { question: "How long does TSRERA take?", answer: "TSRERA typically decides in 9–14 months. Appeals add 6–9 months." },
      { question: "What is Telangana stamp duty?", answer: "6% stamp + 1% transfer duty + 0.5% registration = 7.5% total. Reasonable compared to Tamil Nadu (11%) but higher than Karnataka (6.5%)." },
      { question: "Do you handle HMDA plot matters?", answer: "Yes. HMDA (Hyderabad Metropolitan Development Authority) layouts and plot regularisation are a common Hyderabad issue. Our property team handles regularisation, BRS/LRS matters, and challenges to HMDA orders." },
    ],
    localNotes: [
      "Telangana's GPA crackdown (2015) means legacy GPA-based title is now substandard — extensive diligence required.",
      "HMDA, GHMC, and TS-bPASS planning approvals must be verified for every Hyderabad property purchase.",
      "TSRERA is active but slower than MahaRERA — patience and strategy matter.",
    ],
  },

  "hyderabad__family-matrimonial": {
    lead:
      "Hyderabad matrimonial practice includes Hindu, Muslim, Christian, and Special Marriage Act matters handled at the Family Court, Nampally, Ranga Reddy District Court, and Medchal-Malkajgiri District Court. NyaySevak's Hyderabad divorce lawyers handle mutual-consent and contested divorces, NRI cases (given substantial Gulf and US diaspora), child custody, maintenance, DV Act, and 498A defence.",
    landscape: [
      "Family Courts at Nampally serve Hyderabad city. Ranga Reddy District Court at LB Nagar and Medchal-Malkajgiri District Court serve the IT-corridor and suburban areas. Jurisdiction is determined by respondent's residence or place of marriage.",
      "Hyderabad's substantial Gulf and US diaspora creates a meaningful NRI matrimonial practice. Muslim matrimonial law (particularly talaq-e-hasan and khula) is active given Hyderabad's Muslim population; Telangana has seen important Telangana HC judgments on triple talaq and mehr.",
      "498A defence and DV Act filings are heavy across all three commissionerates. Telangana HC has issued detailed guidelines compliant with Arnesh Kumar and Rajesh Sharma.",
    ],
    courtsForThisMatter: [
      "Family Court, Nampally",
      "Ranga Reddy Family Court, LB Nagar",
      "Medchal-Malkajgiri Family Court",
      "Magistrate Courts (DV Act, 498A)",
      "Telangana High Court (appeals)",
    ],
    caseTypes: [
      { title: "Mutual-Consent Divorce", desc: "HMA, SMA, Christian, and Muslim mutual-consent filings." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, adultery under applicable personal law." },
      { title: "Muslim Matrimonial", desc: "Khula, talaq, mehr, and maintenance matters." },
      { title: "NRI Cases", desc: "Gulf and US-resident spouses — service, custody, enforcement." },
      { title: "Maintenance & Alimony", desc: "S.144 BNSS, S.24 HMA, DV Act, Muslim Women Act." },
      { title: "498A Defence", desc: "Quashing, AB, regular bail." },
    ],
    feeRange: {
      consultation: "₹1,200 – ₹5,000 (free first consultation on NyaySevak)",
      district: "₹6,000 – ₹25,000 per hearing",
      highCourt: "₹20,000 – ₹1,25,000 per appearance",
      note: "Mutual-consent divorce retainers in Hyderabad: ₹25,000–₹55,000. NRI matters higher due to cross-border coordination.",
    },
    faqs: [
      { question: "Which Family Court in Hyderabad?", answer: "Nampally for city residents; Ranga Reddy Family Court at LB Nagar for Cyberabad and Rachakonda areas; Medchal-Malkajgiri Family Court for northern suburbs." },
      { question: "Do you handle Muslim divorce (khula, talaq) in Hyderabad?", answer: "Yes. Our Muslim-law panel handles khula, talaq registration, mehr recovery, and maintenance under the Muslim Women (Protection of Rights on Marriage) Act and Shah Bano-framework matters." },
      { question: "How long does divorce take in Hyderabad?", answer: "Mutual-consent: 5–9 months. Contested: 2–5 years. Appeals: 2–4 years." },
      { question: "Do you handle Gulf NRI divorce?", answer: "Yes. Our team coordinates with counsel in UAE, Saudi Arabia, Qatar, and Oman for service, foreign-decree recognition, and cross-border maintenance enforcement." },
      { question: "Can a wife claim maintenance in Hyderabad?", answer: "Yes — under S.144 BNSS, S.24 HMA, DV Act, and Muslim Women Act. Typical awards: 20–30% of husband's net income as interim maintenance." },
      { question: "Are virtual hearings available?", answer: "Yes. Telangana Family Courts conduct many hearings virtually, particularly for NRI matters." },
    ],
    localNotes: [
      "Hyderabad's Gulf NRI matrimonial practice is substantial and specialised.",
      "Muslim-law matrimonial practice is particularly well-developed in Hyderabad.",
      "Telangana HC has issued progressive rulings on Muslim women's rights and matrimonial cruelty.",
    ],
  },

  "hyderabad__property-real-estate": {
    lead:
      "Hyderabad property law spans HMDA layouts, GHMC/GHMC-limits properties, HITEC City commercial leases, Jubilee Hills and Banjara Hills high-value freehold, and suburban farm-land (particularly Shamshabad, Shadnagar). NyaySevak's Hyderabad property lawyers handle title diligence, sale-deed drafting, TSRERA cases, specific performance, partition, and GHMC/HMDA regularisation advisories.",
    landscape: [
      "Hyderabad title diligence requires the 'Telangana stack': 30-year chain at Sub-Registrar, pattadar passbook, encumbrance (EC), RoR/1-B extract, tax-paid receipt, HMDA/GHMC/TS-bPASS layout/building approval, and litigation search. Telangana's Dharani portal is the state's integrated land-records system.",
      "Hyderabad's real-estate market has been reshaped by the Layout Regularisation Scheme (LRS) and Building Regularisation Scheme (BRS) — many properties have pending regularisation applications whose legal status affects mortgage-ability and sale. Our property team advises on regularisation strategy.",
      "TSRERA handles builder-buyer disputes. GHMC and HMDA have their own grievance mechanisms for layout and building issues. Commercial real estate at HITEC City, Gachibowli, and Kondapur generates significant lease-dispute and commercial-arbitration work.",
    ],
    courtsForThisMatter: [
      "Telangana High Court",
      "City Civil Court, Hyderabad",
      "TSRERA & Appellate Tribunal",
      "HMDA, GHMC, TS-bPASS",
      "Consumer Commissions",
      "Dharani portal (records)",
    ],
    caseTypes: [
      { title: "Title Diligence", desc: "Full Telangana-stack review." },
      { title: "Sale/Gift/Lease Drafting", desc: "Registration-ready documents." },
      { title: "Specific Performance", desc: "Enforcing sale agreements." },
      { title: "TSRERA Cases", desc: "Against Hyderabad developers." },
      { title: "LRS / BRS Regularisation", desc: "Layout and building regularisation advisories." },
      { title: "Partition Suits", desc: "Co-owner partition of ancestral property." },
    ],
    feeRange: {
      consultation: "₹2,000 – ₹7,500 (free first consultation on NyaySevak)",
      district: "₹10,000 – ₹35,000 per appearance",
      highCourt: "₹25,000 – ₹1,75,000 per appearance",
      note: "Total Telangana registration cost: 7.5% (6% stamp + 1% transfer + 0.5% registration). Title diligence: ₹20,000–₹50,000. Conveyancing: ₹25,000–₹60,000 + duties.",
    },
    faqs: [
      { question: "What is Dharani and how does it affect title?", answer: "Dharani is Telangana's integrated land-records portal — every agricultural and non-agricultural property is recorded. Pattadar passbook and 1-B extracts are generated from Dharani. Our diligence includes Dharani verification." },
      { question: "What are LRS and BRS?", answer: "LRS = Layout Regularisation Scheme (for unapproved layouts). BRS = Building Regularisation Scheme (for deviations in construction). Both are periodic amnesty schemes. Current status must be verified before purchase." },
      { question: "Is GPA sale still allowed in Telangana?", answer: "No — Telangana has restricted GPA-based transfers since 2015. Proper registered sale deeds are required. Legacy GPA titles need regularisation." },
      { question: "How long does TSRERA take?", answer: "9–14 months at TSRERA, 6–9 months on appeal at TSRERA AT, 3–6 months for execution." },
      { question: "Do you handle HMDA plot matters?", answer: "Yes — layouts, plot regularisation, and HMDA order challenges are routine. TS-bPASS issues for building approvals are also handled." },
      { question: "What is Telangana stamp duty?", answer: "6% stamp + 1% transfer duty + 0.5% registration = 7.5% total. Gift between blood relatives is at concessional slabs." },
    ],
    localNotes: [
      "Telangana's Dharani is India's most integrated land-records system — diligence is more reliable here than in most states.",
      "LRS and BRS schemes are revisited periodically — latest scheme status matters.",
      "GPA-crackdown makes legacy GPA titles a diligence red flag.",
    ],
  },

  "hyderabad__corporate-business": {
    lead:
      "Hyderabad is India's pharma and IT hub — Dr Reddy's, Aurobindo, Divi's, Microsoft India R&D, Google, Amazon, Facebook, and thousands of startups are headquartered here. NyaySevak's Hyderabad corporate lawyers handle company incorporation, pharma regulatory and IP work, IT contracts, NCLT Hyderabad litigation, Telangana HC commercial disputes, and cross-border M&A.",
    landscape: [
      "Hyderabad hosts the NCLT Hyderabad Bench serving Telangana. NCLAT appeals go to NCLAT Chennai (since 2022). SEBI Southern Regional Office (Chennai) has jurisdiction. ROC Hyderabad handles registration filings. Telangana HC Commercial Division handles S.9/11/34/37 arbitration petitions, IPR, and commercial suits.",
      "Pharma regulatory and patent work is distinctly Hyderabad. With USFDA inspections, DCGI filings, and significant generic-IP litigation, the Hyderabad corporate bar has deep pharma-sector expertise. Patent oppositions and infringement cases are common at Telangana HC's IP side.",
      "IT-sector work (HITEC City-based) mirrors Bangalore — VC/PE documentation, startup financing, ESOP, MSA, and cross-border contracts. Our Hyderabad team handles these routinely.",
    ],
    courtsForThisMatter: [
      "NCLT Hyderabad Bench",
      "NCLAT Chennai (appeals)",
      "Telangana High Court — Commercial Division",
      "SEBI SRO Chennai (for Telangana matters)",
      "ROC Hyderabad",
      "USFDA / DCGI for pharma regulatory",
    ],
    caseTypes: [
      { title: "Company Incorporation", desc: "Pvt Ltd, LLP, OPC, Sec 8 setup with MCA filings." },
      { title: "Pharma Regulatory", desc: "DCGI, USFDA, patent oppositions, and price-control matters." },
      { title: "IT Contracts", desc: "MSA, SOW, IP-assignment, data-protection drafting." },
      { title: "NCLT Litigation", desc: "Oppression, IBC, mergers at NCLT Hyderabad." },
      { title: "Commercial Arbitration", desc: "S.9/11/34/37 at Telangana HC Commercial Division." },
      { title: "Patent Litigation", desc: "Infringement and opposition proceedings." },
      { title: "M&A Transactions", desc: "Due diligence, SPA, regulatory approvals." },
    ],
    feeRange: {
      consultation: "₹2,500 – ₹12,500 (free first consultation on NyaySevak)",
      district: "NCLT: ₹25,000–₹1,25,000 per hearing",
      highCourt: "₹40,000 – ₹3,00,000 per appearance; senior counsel ₹7 lakh+",
      note: "Hyderabad corporate fees track Chennai/Bengaluru levels. Pharma regulatory work is typically retainer-based (₹3 lakh+). Incorporation ₹15,000–₹30,000.",
    },
    faqs: [
      { question: "Which NCLT for my Hyderabad company?", answer: "NCLT Hyderabad Bench for Telangana companies. Appeals to NCLAT Chennai." },
      { question: "Do you handle pharma regulatory matters?", answer: "Yes. DCGI approvals, USFDA inspections, DPCO price-control challenges, and patent oppositions are a Hyderabad specialism. Our panel includes pharma-regulatory specialists." },
      { question: "Where is SEBI jurisdiction for Hyderabad?", answer: "SEBI SRO Chennai has jurisdiction over Telangana. Show-cause responses and SAT appeals (Mumbai) are handled through our coordinated panel." },
      { question: "Do you handle IT startup financings?", answer: "Yes. Term sheets, SSA, SHA, SAFE-note, ESOP, and VC due diligence are handled end-to-end." },
      { question: "Can you handle patent litigation in Hyderabad?", answer: "Yes. Telangana HC's IP practice is active, particularly for pharma patent cases. We handle both pharma and non-pharma patent matters." },
      { question: "How fast is NCLT Hyderabad?", answer: "Admission in 60–120 days for IBC; oppression/mismanagement 3–9 months; mergers 4–9 months. Timelines depend on case complexity and objections." },
    ],
    localNotes: [
      "Hyderabad's pharma-regulatory practice is distinctly specialised — USFDA, DCGI, DPCO work is heavy.",
      "NCLAT Chennai handles South India appeals — materially reduces travel cost from Hyderabad.",
      "IT/startup work in Hyderabad is growing rapidly, following the Bangalore model.",
    ],
  },

  // ────────────────────────────── PUNE ──────────────────────────────
  "pune__criminal-law": {
    lead:
      "Pune's criminal matters are handled at the District & Sessions Court at Shivajinagar, Metropolitan Magistrate Courts across Pune city and Pimpri-Chinchwad, and at the Bombay High Court on bail, quashing, and appeal. NyaySevak's Pune criminal lawyers handle cyber-crime, economic-offence, NDPS, and general criminal-defence matters with specialist representation before Pune's active Special PMLA, NDPS, and MCOCA courts.",
    landscape: [
      "Pune is Maharashtra's second-largest criminal-court jurisdiction. The District & Sessions Court at Shivajinagar serves Pune city; Pimpri-Chinchwad Court serves the industrial belt. Special PMLA, NDPS, MCOCA, POCSO, and SC/ST Act courts operate at Shivajinagar.",
      "Criminal matters in Pune reach the Bombay HC (not a separate Pune bench — Bombay HC has no Pune bench) for bail, quashing under S.528 BNSS, and appeals. Advocates typically travel to Mumbai for HC appearances; virtual hearings have eased this somewhat.",
      "Pune's criminal bar is active but smaller than Mumbai's. Given Pune's student and IT-workforce demographics, economic offences, cyber-crime, and ragging-related criminal cases are common.",
    ],
    courtsForThisMatter: [
      "Bombay High Court at Mumbai (bail, quashing, appeals)",
      "District & Sessions Court, Shivajinagar",
      "Pimpri-Chinchwad District Court",
      "Metropolitan Magistrate Courts, Shivajinagar",
      "Special PMLA, NDPS, POCSO Courts, Shivajinagar",
      "Khadki Cantonment Court",
    ],
    caseTypes: [
      { title: "Bail Applications", desc: "Regular, anticipatory, interim bail under BNSS." },
      { title: "Cyber Crime Defence", desc: "Pune Cyber Police cases (UPI, phishing, identity theft)." },
      { title: "Economic Offences", desc: "Cheating, fraud, S.138 NI Act cases." },
      { title: "NDPS Defence", desc: "Commercial and intermediate-quantity cases." },
      { title: "Quashing Petitions", desc: "S. 528 BNSS before Bombay HC." },
      { title: "MCOCA / UAPA", desc: "Organised-crime and terror-related defences." },
    ],
    feeRange: {
      consultation: "₹1,200 – ₹5,000 (free first consultation on NyaySevak)",
      district: "₹6,000 – ₹25,000 per appearance",
      highCourt: "₹25,000 – ₹1,75,000 per appearance (Bombay HC)",
      note: "Pune criminal-lawyer fees are 20–30% below Mumbai. Bombay HC appearance requires Mumbai-based advocates or Pune lawyers with Mumbai HC practice. Our panel covers both.",
    },
    faqs: [
      { question: "Which Pune court for my criminal case?", answer: "FIR registration location determines jurisdiction. Pune city: Shivajinagar complex. Pimpri-Chinchwad: PCMC complex. Khadki Cantonment: its own court." },
      { question: "Where is the Pune High Court?", answer: "There is no separate Pune bench — Pune matters go to the Bombay High Court in Mumbai. Virtual hearings allow many matters to proceed without travel." },
      { question: "How do I get anticipatory bail in Pune?", answer: "File before District & Sessions Court at Shivajinagar or directly before Bombay HC. Urgent matters can be heard within 3–7 days at Sessions, 5–10 days at HC." },
      { question: "Do you handle cyber-crime cases in Pune?", answer: "Yes. Pune Cyber Police (part of Maharashtra Cyber wing) handles UPI, phishing, identity-theft, and data-breach cases. Our cyber-defence panel is active in Pune." },
      { question: "How long does a Pune criminal trial take?", answer: "Magistrate: 12–20 months. Sessions: 2–4 years. Bail at Sessions: 2–4 weeks; Bombay HC: 4–10 weeks." },
      { question: "Can I get virtual Bombay HC hearings from Pune?", answer: "Yes. Bombay HC permits virtual hearings for many matters, significantly reducing the need for Mumbai travel from Pune." },
    ],
    localNotes: [
      "Pune has no separate HC bench — all HC work goes to Bombay HC at Mumbai.",
      "Virtual hearings have transformed Pune-to-Mumbai HC practice; most bail and quashing can be argued virtually.",
      "Pune's IT workforce creates significant cyber-crime practice.",
    ],
  },

  "pune__civil-law": {
    lead:
      "Pune civil litigation covers IT-park commercial leases (Hinjewadi, Kharadi, Magarpatta), residential property disputes, MahaRERA builder-buyer cases, co-operative housing society conflicts, and commercial recovery. NyaySevak's Pune civil lawyers handle title diligence, specific performance, MahaRERA, and commercial arbitration, with appeals routing to the Bombay HC.",
    landscape: [
      "Pune's civil court hierarchy: Small Causes up to ₹10 lakh; Civil Judge Senior Division ₹10 lakh – ₹2 crore; Pune District Court for higher values; Bombay HC on appeal. Commercial Courts handle matters above ₹3 lakh under the 2015 Act.",
      "Pune property market — particularly in Hinjewadi, Kharadi, Wakad, Baner, and Pimpri-Chinchwad — has produced heavy MahaRERA caseload. The co-operative society model (shared with Mumbai) dominates Pune residential ownership, generating society-related disputes.",
      "Pune is emerging as a commercial-arbitration venue given the auto-manufacturing and IT sector base. Bombay HC Commercial Division at Mumbai handles S.9/11/34 arbitration petitions for Pune-seated matters.",
    ],
    courtsForThisMatter: [
      "Bombay High Court (commercial, writs, appeals)",
      "Pune District Court (civil, commercial)",
      "Civil Judge Senior Division, Pune",
      "Small Causes Court, Pune",
      "MahaRERA & MREAT",
      "Co-operative Courts and Appellate Court",
    ],
    caseTypes: [
      { title: "Property Title Suits", desc: "Declaration, partition, specific performance in Pune properties." },
      { title: "MahaRERA Cases", desc: "Against Pune developers for delays and defects." },
      { title: "Co-op Society Disputes", desc: "Membership, management, redevelopment disputes." },
      { title: "Commercial Recovery", desc: "Order 37 and Commercial Courts Act suits." },
      { title: "Commercial Leases", desc: "IT-park and retail-lease litigation." },
      { title: "Tenancy (MRC Act)", desc: "Eviction, rent fixation for pre-1999 tenancies." },
    ],
    feeRange: {
      consultation: "₹1,200 – ₹5,500 (free first consultation on NyaySevak)",
      district: "₹7,000 – ₹30,000 per appearance",
      highCourt: "₹40,000 – ₹2,50,000 (Bombay HC)",
      note: "Pune civil-law fees are 25–35% below Mumbai rates. Title diligence for Pune property: ₹15,000–₹45,000. MahaRERA retainer: ₹30,000–₹65,000.",
    },
    faqs: [
      { question: "Which Pune civil court for my case?", answer: "Up to ₹10 lakh: Small Causes. ₹10 lakh – ₹2 crore: Civil Judge Senior Division. Above ₹2 crore or commercial: Pune District Court or Bombay HC Commercial Division." },
      { question: "How fast is MahaRERA for Pune?", answer: "MahaRERA Pune bench decides in 6–12 months; appeals to MREAT (Mumbai) add 4–8 months. This is significantly faster than civil routes for delayed-project disputes." },
      { question: "How do I verify Pune property title?", answer: "30-year chain at Sub-Registrar + 7/12 extract + property card + society share-certificate chain (for flats) + building-plan approval + OC + litigation search. Our team delivers a full report." },
      { question: "What is the Pune stamp duty?", answer: "Maharashtra stamp duty is 5–6% (with female-buyer concessions in select periods) + 1% registration + 1% metro cess in Pune Municipal Corporation area. Total ~7–8%." },
      { question: "Do you handle co-op society disputes in Pune?", answer: "Yes. Pune has thousands of co-op societies. Disputes are filed at Deputy Registrar, then Co-op Court, with appeals to the Co-op Appellate Court at Pune." },
      { question: "How long does a Pune civil case take?", answer: "Small Causes: 18 months. Civil Judge: 3–6 years. Commercial Court: 18–30 months (time-bound)." },
    ],
    localNotes: [
      "Pune civil matters use Maharashtra procedural framework — same rules as Mumbai but usually with shorter queues.",
      "Co-op Appellate Court is headquartered in Pune — making it a natural forum for society litigation.",
      "MahaRERA has a Pune zonal bench — local counsel can shorten hearing schedules.",
    ],
  },

  "pune__family-matrimonial": {
    lead:
      "Pune matrimonial litigation is handled at the Family Court, Shivajinagar, with appeals to the Bombay High Court. NyaySevak's Pune divorce lawyers handle mutual-consent and contested divorces, IT-sector cross-border custody cases, maintenance, DV Act, and 498A defence with cultural sensitivity for Marathi, Muslim, Christian, and inter-state matrimonial matters.",
    landscape: [
      "Pune's Family Court at Shivajinagar serves Pune city; Pimpri-Chinchwad has its own Family Court. Jurisdiction is determined by respondent's residence, place of marriage, or last matrimonial cohabitation.",
      "Pune's IT and education sectors produce substantial inter-state and NRI matrimonial cases. Our Pune lawyers handle cross-border divorce, Hague custody applications, and foreign-decree recognition routinely.",
      "Muslim matrimonial practice (khula, talaq, mehr) is active in Pune given the city's sizeable Muslim population, and the Bombay HC has been progressive on Muslim women's rights.",
    ],
    courtsForThisMatter: [
      "Family Court, Shivajinagar",
      "Pimpri-Chinchwad Family Court",
      "Magistrate Courts (DV Act, 498A)",
      "Bombay High Court (appeals, custody writs)",
    ],
    caseTypes: [
      { title: "Mutual-Consent Divorce", desc: "HMA, SMA, Christian, Muslim mutual-consent filings." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, adultery under applicable personal law." },
      { title: "Cross-Border / NRI Cases", desc: "Hague and non-Hague custody, foreign-decree recognition." },
      { title: "Maintenance & Alimony", desc: "S.144 BNSS, S.24 HMA, DV Act." },
      { title: "Domestic Violence", desc: "Protection, residence, monetary orders." },
      { title: "498A Defence", desc: "Quashing, AB, regular bail." },
    ],
    feeRange: {
      consultation: "₹1,000 – ₹4,500 (free first consultation on NyaySevak)",
      district: "₹6,000 – ₹22,000 per hearing",
      highCourt: "₹30,000 – ₹1,25,000 (Bombay HC)",
      note: "Pune mutual-consent divorce retainers: ₹20,000–₹50,000. NRI matters higher due to cross-border coordination.",
    },
    faqs: [
      { question: "Which Family Court in Pune?", answer: "Pune city: Shivajinagar Family Court. Pimpri-Chinchwad: PCMC Family Court. Jurisdiction is based on residence or place of marriage." },
      { question: "How long does divorce take in Pune?", answer: "Mutual-consent: 5–9 months. Contested: 2–4 years. Appeals to Bombay HC: 2–4 years." },
      { question: "Do you handle NRI divorce in Pune?", answer: "Yes. Our Pune NRI matrimonial practice handles service abroad, Hague Convention custody cases, and foreign-decree recognition routinely." },
      { question: "Can a wife claim maintenance in Pune?", answer: "Yes — under S.144 BNSS, S.24 HMA, and DV Act. Typical awards: 20–30% of husband's net income." },
      { question: "Are virtual hearings available in Pune?", answer: "Yes. Pune Family Courts conduct virtual hearings for many matters." },
      { question: "Can I file quashing of 498A from Pune?", answer: "Yes — Section 528 BNSS petitions go to Bombay HC at Mumbai. Our panel handles Pune-origin quashing with virtual arguing where possible." },
    ],
    localNotes: [
      "Pune has no separate HC bench — matrimonial appeals and quashing go to Bombay HC.",
      "Virtual hearings have improved Pune-to-Mumbai HC practice access.",
      "Pune's IT workforce creates substantial cross-border custody and NRI matrimonial practice.",
    ],
  },

  "pune__property-real-estate": {
    lead:
      "Pune property law combines Maharashtra's cooperative society model with fast IT-corridor development in Hinjewadi, Wakad, Kharadi, Magarpatta, and Baner, plus older properties in Peth areas, Koregaon Park, and Deccan. NyaySevak's Pune property lawyers handle title diligence, sale-deed drafting, MahaRERA filings, redevelopment disputes under DCPR-equivalent Pune rules, and co-op society matters.",
    landscape: [
      "Pune title diligence requires the 'Maharashtra stack': 30-year chain at Sub-Registrar, 7/12 extract (for agricultural land), property card (for urban), mutation records, society share-certificate chain, PMC/PCMC building-plan approval, OC/CC, and encumbrance/litigation search. PMC (Pune Municipal Corporation) and PCMC (Pimpri-Chinchwad Municipal Corporation) have distinct building-approval regimes.",
      "Pune's IT-corridor development has generated heavy MahaRERA caseload. Hinjewadi Phase 1/2/3 and Kharadi are particularly litigated. The cooperative housing society (CHS) model — same as Mumbai — dominates Pune residential ownership, creating society-membership and redevelopment disputes.",
      "Pune has active Unearned Income Recovery cases and NA (non-agricultural) land-use conversion matters — properties near Pune's fringes (Wagholi, Undri, Kharadi expansion) often have NA-status issues that require legal resolution.",
    ],
    courtsForThisMatter: [
      "Bombay High Court (writs, high-value suits)",
      "Pune District Court",
      "MahaRERA Pune zonal bench & MREAT (Mumbai)",
      "Co-operative Courts (Pune)",
      "Small Causes Court (tenancy)",
      "Tahsildar / SDM Courts (NA conversion)",
    ],
    caseTypes: [
      { title: "Title Diligence", desc: "Full Maharashtra-stack review including NA and society checks." },
      { title: "Sale/Gift/Lease Drafting", desc: "Registration-ready documents compliant with Maharashtra Stamp Act." },
      { title: "MahaRERA Cases", desc: "Against Pune developers — Hinjewadi, Kharadi, Wakad focus." },
      { title: "Co-op Society Disputes", desc: "Membership, management, redevelopment conflicts." },
      { title: "Specific Performance", desc: "Enforcing Pune sale agreements." },
      { title: "NA Conversion", desc: "Agricultural to non-agricultural conversion advisories." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,000 (free first consultation on NyaySevak)",
      district: "₹8,000 – ₹28,000 per appearance",
      highCourt: "₹30,000 – ₹2,00,000 (Bombay HC)",
      note: "Total registration cost in Pune: ~7–8% (stamp 5–6% + registration 1% + metro cess 1%). Title diligence: ₹15,000–₹45,000. MahaRERA retainer: ₹30,000–₹65,000.",
    },
    faqs: [
      { question: "How do I verify Pune property title?", answer: "30-year chain + property card/7-12 + mutation + society share certificate + PMC/PCMC building approval + OC/CC + litigation search. Our team delivers a signed report." },
      { question: "What is NA conversion and why does it matter?", answer: "NA (non-agricultural) conversion under Maharashtra Land Revenue Code is required before construction on agricultural land. Properties without proper NA orders have illegal-construction risk." },
      { question: "How fast is MahaRERA Pune?", answer: "MahaRERA Pune zonal bench decides in 6–12 months; appeals to MREAT Mumbai add 4–8 months." },
      { question: "What is Pune stamp duty?", answer: "Maharashtra stamp duty (5–6% with periodic female-buyer concessions) + 1% registration + 1% metro cess (in PMC area) = ~7–8% total." },
      { question: "Do you handle co-op society disputes?", answer: "Yes. Society membership, nomination, management committee elections, and redevelopment disputes are routine. Appeals go to Co-op Appellate Court in Pune itself." },
      { question: "Can I buy property in Wagholi/Undri?", answer: "Yes, but with diligence on NA status, PMC/PMRDA jurisdiction, and approved layouts. Our property team specialises in Pune fringe-area diligence." },
    ],
    localNotes: [
      "Pune's IT-corridor MahaRERA caseload is the second-highest in Maharashtra after Mumbai.",
      "Co-op Appellate Court of Maharashtra sits in Pune — convenient for appellate society matters.",
      "PMC vs PCMC vs PMRDA jurisdiction matters for building-approval diligence.",
    ],
  },

  "pune__corporate-business": {
    lead:
      "Pune is a major auto-manufacturing, IT-services, and education centre. NyaySevak's Pune corporate lawyers handle company incorporation, commercial contracts, NCLT Mumbai litigation (Pune matters are heard at NCLT Mumbai), Bombay HC commercial disputes (virtual arguing from Pune), education-sector law, and M&A for Pune-headquartered companies.",
    landscape: [
      "Pune companies route through the NCLT Mumbai Bench for company matters. NCLAT appeals go to Delhi. Bombay HC Commercial Division at Mumbai handles arbitration petitions; most Pune arbitrations are seated in Mumbai or use Pune-based arbitrators with Mumbai as the seat.",
      "Auto-manufacturing, IT-services, and pharma-sector work is Pune's staple. Education-sector legal work is also substantial given Pune's large university and private-education ecosystem.",
      "Pune's corporate bar is smaller but established. Most transactional / high-stakes M&A work still routes through Mumbai, with Pune lawyers handling execution and local regulatory interface.",
    ],
    courtsForThisMatter: [
      "NCLT Mumbai Bench",
      "Bombay High Court — Commercial Division (at Mumbai)",
      "ROC Pune",
      "SEBI Western Regional Office (Mumbai)",
      "Labour Courts / Industrial Tribunal",
      "UGC / AICTE (education sector)",
    ],
    caseTypes: [
      { title: "Company Incorporation", desc: "Pvt Ltd, LLP, OPC, Sec 8 setup." },
      { title: "Commercial Contracts", desc: "MSA, distributorship, franchise, supply-chain contracts." },
      { title: "NCLT Litigation", desc: "Oppression, IBC, mergers at NCLT Mumbai." },
      { title: "Labour Matters", desc: "Industrial disputes, wrongful termination, PF/ESI matters." },
      { title: "Education-Sector Law", desc: "UGC/AICTE compliance, university disputes, student-faculty matters." },
      { title: "M&A Transactions", desc: "Due diligence, SPA, regulatory approvals." },
    ],
    feeRange: {
      consultation: "₹2,000 – ₹10,000 (free first consultation on NyaySevak)",
      district: "NCLT: ₹25,000–₹1,25,000 per hearing (Mumbai)",
      highCourt: "₹40,000 – ₹3,00,000 (Bombay HC at Mumbai)",
      note: "Pune corporate fees are 20–30% below Mumbai. Incorporation ₹15,000–₹30,000. Contract drafting ₹35,000–₹2 lakh depending on complexity.",
    },
    faqs: [
      { question: "Which NCLT for my Pune company?", answer: "NCLT Mumbai Bench — Pune companies are heard at Mumbai. Our panel includes lawyers who appear regularly at NCLT Mumbai." },
      { question: "Can Bombay HC commercial matters be argued virtually from Pune?", answer: "Yes — virtual hearings are commonly permitted for most commercial proceedings, significantly reducing Pune-to-Mumbai travel." },
      { question: "How do I incorporate a company in Pune?", answer: "SPICe+ filing with ROC Pune, DSC, DIN, PAN/TAN, MOA/AOA drafting. Timeline: 7–12 working days. Cost: ₹15,000–₹30,000." },
      { question: "Do you handle labour matters in Pune?", answer: "Yes. Pune's industrial base (auto, IT) creates heavy labour-law work. We handle industrial disputes, Labour Commissioner matters, and Industrial Tribunal appeals." },
      { question: "Can you handle education-sector legal work?", answer: "Yes. Pune's education ecosystem generates UGC/AICTE compliance, affiliation disputes, student matters, and faculty terminations. Our education-law panel is well-established." },
      { question: "How fast is NCLT Mumbai for Pune companies?", answer: "IBC admission: 60–150 days. Oppression/mismanagement: 4–12 months. Strict timeline compliance helps." },
    ],
    localNotes: [
      "Pune companies' NCLT work goes to Mumbai — local lawyers coordinate with Mumbai-based counsel.",
      "Virtual HC and NCLT hearings have improved Pune-to-Mumbai access dramatically.",
      "Education-sector law is a distinct Pune specialism given the city's university density.",
    ],
  },

  // ────────────────────────────── KOLKATA ──────────────────────────────
  "kolkata__criminal-law": {
    lead:
      "Kolkata's criminal justice system is anchored by the Calcutta High Court — India's oldest chartered High Court — and runs through the City Civil & Sessions Court, Sealdah Court (Chief Metropolitan Magistrate), Alipore District Court, and Barasat and Howrah District Courts. NyaySevak's Kolkata criminal lawyers handle bail, quashing, trials, and economic-offence defence across all complexes.",
    landscape: [
      "Kolkata's criminal matters originate at the police station and go either to Sealdah Court (Chief Metropolitan Magistrate, central Kolkata) or to Alipore (South Kolkata, Sessions). Howrah and North 24 Parganas (Barasat) have separate district courts. Special courts for POCSO, NDPS, SC/ST Act, CBI, and PMLA operate within the Kolkata court complex.",
      "Calcutta HC has historically shaped Indian criminal jurisprudence — from the classic Privy Council era to modern rulings on personal liberty. Its criminal side is active; bail and quashing are typically heard within 3–6 weeks. The HC has been progressive on habeas corpus, custodial-violence, and press freedom.",
      "West Bengal-specific statutes (Bengal Excise Act, West Bengal Prevention of Violent Acts Against Medical Service Persons Act) and the state's political-crime dynamics create a distinct criminal-practice environment.",
    ],
    courtsForThisMatter: [
      "Calcutta High Court (bail, quashing, appeals)",
      "City Civil & Sessions Court, Kolkata",
      "Sealdah Court (Chief Metropolitan Magistrate)",
      "Alipore District & Sessions Court",
      "Barasat District Court (North 24 Parganas)",
      "Howrah District Court",
      "Special CBI, PMLA, NDPS Courts",
    ],
    caseTypes: [
      { title: "Bail Applications", desc: "Regular, anticipatory, interim bail under BNSS." },
      { title: "Quashing Petitions", desc: "S. 528 BNSS before Calcutta HC." },
      { title: "Habeas Corpus", desc: "Urgent writs before Calcutta HC for illegal detention." },
      { title: "Economic Offences", desc: "Fraud, cheating, S. 138 NI Act cases." },
      { title: "NDPS Defence", desc: "Commercial and intermediate-quantity cases." },
      { title: "PMLA / ED Defence", desc: "Special PMLA Court representation." },
    ],
    feeRange: {
      consultation: "₹1,200 – ₹5,000 (free first consultation on NyaySevak)",
      district: "₹5,000 – ₹22,000 per appearance",
      highCourt: "₹15,000 – ₹1,25,000 per appearance; senior counsel ₹2,50,000+",
      note: "Kolkata criminal-lawyer fees are among the lower-mid India-wide — 30–40% below Mumbai/Delhi. Bail at Calcutta HC: ₹30,000–₹85,000 all-inclusive typical.",
    },
    faqs: [
      { question: "Which Kolkata court handles my criminal case?", answer: "FIR location decides. Central Kolkata: Sealdah Magistrate then City Sessions. South Kolkata: Alipore District Court. Howrah: Howrah District Court. North 24 Parganas: Barasat District Court." },
      { question: "How fast is Calcutta HC bail?", answer: "Urgent bail applications are typically listed within 3–5 working days and decided within 3–6 weeks. Habeas corpus is quicker — often same-week." },
      { question: "What are Kolkata criminal lawyer fees?", answer: "Magistrate: ₹5,000–₹15,000 per appearance; Sessions: ₹10,000–₹25,000; Calcutta HC: ₹15,000–₹1.25 lakh; Senior counsel ₹2.5 lakh+. Free first consultation on NyaySevak." },
      { question: "Do you handle CBI / ED cases in Kolkata?", answer: "Yes. Special CBI and PMLA courts at Kolkata handle central agency matters. Our panel has specialists in both." },
      { question: "How long does a Kolkata criminal trial take?", answer: "Magistrate: 12–24 months. Sessions: 2–5 years. Bail: Sessions 2–4 weeks, HC 3–6 weeks." },
      { question: "Can I challenge preventive detention in Kolkata?", answer: "Yes. Calcutta HC habeas corpus practice is active — NyaySevak's panel handles detentions under West Bengal's preventive-detention laws and Centre-law detentions." },
    ],
    localNotes: [
      "Calcutta HC's habeas corpus jurisdiction is one of India's most respected — urgent matters are heard swiftly.",
      "West Bengal's political-crime dynamics generate specialist defence practice around preventive detentions and mob-violence cases.",
      "Kolkata senior-counsel rates are notably lower than Delhi/Mumbai for comparable experience — excellent value for high-stakes defence.",
    ],
  },

  "kolkata__civil-law": {
    lead:
      "Kolkata civil litigation includes commercial matters under Calcutta HC's original jurisdiction (suits above ₹10 lakh), property disputes in Ballygunge and Salt Lake, testamentary and admiralty cases, and builder-buyer matters under West Bengal RERA. NyaySevak's Kolkata civil lawyers handle title diligence, specific performance, partition, commercial recovery, and the HC's unique testamentary practice.",
    landscape: [
      "Calcutta HC has original jurisdiction for civil suits above ₹10 lakh within Kolkata town and suburbs — one of only three such HCs (alongside Bombay and Madras). Suits up to ₹10 lakh go to the City Civil Court. Testamentary (probate, letters of administration, succession certificates) matters above the threshold go to Calcutta HC's testamentary side, which is a distinctive Indian judicial institution.",
      "Admiralty jurisdiction at Calcutta HC is among the most developed in India given Kolkata Port's commercial significance. Maritime claims, ship arrests, and cargo-damage cases are routinely heard.",
      "West Bengal RERA (HIRA was struck down; WB-RERA is now operational) handles builder-buyer disputes. The Calcutta HC writ side is very active on state-administrative matters, including the infamous Salt Lake layout disputes and Rajarhat-New Town land cases.",
    ],
    courtsForThisMatter: [
      "Calcutta High Court — Original, Testamentary, Admiralty Sides",
      "City Civil Court, Kolkata",
      "Small Causes Court",
      "West Bengal RERA & Appellate Tribunal",
      "Consumer Commissions",
      "Co-operative Courts",
    ],
    caseTypes: [
      { title: "Property Title Suits", desc: "Declaration, specific performance, partition." },
      { title: "Testamentary Matters", desc: "Probate, letters of administration, succession certificates." },
      { title: "Commercial Recovery", desc: "Order 37 and Commercial Courts Act suits." },
      { title: "Admiralty Claims", desc: "Ship arrest, cargo damage, maritime lien." },
      { title: "WB-RERA Cases", desc: "Against Kolkata developers for delay and defect." },
      { title: "Consumer Cases", desc: "District and State Commission filings." },
    ],
    feeRange: {
      consultation: "₹1,200 – ₹5,500 (free first consultation on NyaySevak)",
      district: "₹6,000 – ₹25,000 per appearance",
      highCourt: "₹20,000 – ₹1,50,000 per appearance",
      note: "West Bengal stamp duty is 5% + 1% registration = 6% total. Title diligence for Kolkata property: ₹15,000–₹45,000. Testamentary matters (probate of ordinary estates) ₹50,000–₹2 lakh depending on asset value and complexity.",
    },
    faqs: [
      { question: "Which Kolkata civil court handles my case?", answer: "Up to ₹10 lakh: City Civil Court. Above ₹10 lakh within Kolkata: Calcutta HC Original Side. Commercial matters above ₹3 lakh: Commercial Courts." },
      { question: "Do you handle probate in Kolkata?", answer: "Yes. Calcutta HC's testamentary side handles probate, LA, and SCs for sizeable estates. Our probate team handles end-to-end procedures including citation, contested probate, and execution." },
      { question: "How do I verify Kolkata property title?", answer: "30-year chain at Sub-Registrar + mutation records (Municipal Corporation) + khajna (land-tax) receipts + KMC / HMC building approval + OC/CC + litigation search. Our team delivers a signed report." },
      { question: "What is West Bengal stamp duty?", answer: "5% stamp + 1% registration = 6% total on sale consideration. No female-buyer concession currently. Gift between close relatives: concessional slabs." },
      { question: "How long does WB-RERA take?", answer: "WB-RERA is relatively new (post-HIRA invalidation); typical decisions in 9–14 months. Appeals to WB Appellate Tribunal add 6–10 months." },
      { question: "Can I file admiralty cases in Kolkata?", answer: "Yes. Calcutta HC Admiralty Side is highly developed given Kolkata Port's status. Ship arrest, cargo-damage, and maritime-lien cases are routinely handled." },
    ],
    localNotes: [
      "Calcutta HC's Testamentary Side is a distinct institution — probate practice here is India's most developed.",
      "Admiralty practice at Calcutta HC is specialised — few other HCs have comparable expertise.",
      "WB-RERA replaced HIRA after Supreme Court struck down the West Bengal-specific law in 2021 — historical cases need transition analysis.",
    ],
  },

  "kolkata__family-matrimonial": {
    lead:
      "Kolkata matrimonial practice is handled at Family Courts across the city with appeals to Calcutta HC. NyaySevak's Kolkata divorce lawyers handle Hindu, Muslim, Christian (including Parsi under Indian Divorce Act), and Special Marriage Act divorces, child custody, maintenance, DV Act filings, and 498A defence with deep understanding of Bengali matrimonial practice and inter-community family law.",
    landscape: [
      "Kolkata's Family Courts handle matters under the Family Courts Act, 1984. Jurisdiction is determined by respondent's residence, place of marriage, or last matrimonial cohabitation. Howrah, North 24 Parganas (Barasat), and South 24 Parganas (Alipore) have their own Family Courts.",
      "Christian divorce under the Indian Divorce Act, 1869 is particularly active in Kolkata given its substantial Christian community. Calcutta HC was instrumental in the 2001 amendments to the ID Act and has issued important rulings on Christian matrimonial law.",
      "Muslim matrimonial practice (talaq, khula, mehr, post-divorce maintenance under MWPRMA) is active. Calcutta HC's matrimonial bench has been progressive on inter-community marriages, live-in relationships, and custody.",
    ],
    courtsForThisMatter: [
      "Family Court, Kolkata",
      "Alipore Family Court (South 24 Parganas)",
      "Barasat Family Court (North 24 Parganas)",
      "Howrah Family Court",
      "Magistrate Courts (DV Act, 498A)",
      "Calcutta High Court (appeals)",
    ],
    caseTypes: [
      { title: "Mutual-Consent Divorce", desc: "HMA, SMA, Christian, Muslim mutual-consent filings." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, adultery under applicable personal law." },
      { title: "Christian Divorce", desc: "Indian Divorce Act, 1869 filings." },
      { title: "Muslim Matrimonial", desc: "Khula, talaq, mehr, maintenance under MWPRMA." },
      { title: "Child Custody", desc: "Under Guardians and Wards Act; welfare principle." },
      { title: "Maintenance & Alimony", desc: "S.144 BNSS, S.24 HMA, DV Act." },
    ],
    feeRange: {
      consultation: "₹1,000 – ₹4,500 (free first consultation on NyaySevak)",
      district: "₹5,000 – ₹20,000 per hearing",
      highCourt: "₹18,000 – ₹1,00,000 per appearance",
      note: "Mutual-consent divorce retainers in Kolkata: ₹20,000–₹45,000. Contested divorces typically ₹1.5–₹4 lakh over the life of the case.",
    },
    faqs: [
      { question: "Which Family Court in Kolkata?", answer: "Kolkata city residents: Family Court, Kolkata. Alipore for South 24 Parganas; Barasat for North 24 Parganas; Howrah Family Court for Howrah district." },
      { question: "How does Christian divorce work in Kolkata?", answer: "Indian Divorce Act, 1869 governs Christian divorce. Mutual-consent and contested grounds are available; some decrees require confirmation by HC. Our Christian-law panel is experienced." },
      { question: "How long does divorce take in Kolkata?", answer: "Mutual-consent: 6–10 months. Contested: 3–5 years. Appeals to Calcutta HC: 2–4 years." },
      { question: "Do you handle Muslim matrimonial cases?", answer: "Yes. Khula, talaq registration, mehr recovery, and post-divorce maintenance under the Muslim Women (Protection of Rights on Marriage) Act are routine." },
      { question: "Can a wife claim maintenance in Kolkata?", answer: "Yes — under S.144 BNSS, S.24 HMA, DV Act, Section 37 Indian Divorce Act (for Christians), and MWPRMA (for Muslims). Typical awards: 20–30% of husband's net income." },
      { question: "How is child custody decided in Kolkata?", answer: "Welfare-of-child principle. Calcutta HC has progressive shared-parenting jurisprudence. Our panel handles both Family Court and HC custody writs." },
    ],
    localNotes: [
      "Kolkata's Christian-law matrimonial practice is among India's most developed.",
      "Calcutta HC has been historically progressive on matrimonial jurisprudence.",
      "Kolkata fees are notably lower than Mumbai/Delhi — excellent value for complex matrimonial matters.",
    ],
  },

  "kolkata__property-real-estate": {
    lead:
      "Kolkata property law spans old colonial-era freehold in Ballygunge and Alipore, KMC and HMC regulated urban properties, Salt Lake Bidhannagar and New Town (Rajarhat) development, testamentary/inheritance disputes, and WB-RERA builder-buyer matters. NyaySevak's Kolkata property lawyers handle title diligence, drafting, partition, specific performance, and WB-RERA filings across the city and suburbs.",
    landscape: [
      "Kolkata title diligence is distinctive because of the colonial-era long-chain properties with complex devolution (often including Hindu Joint Family, inter-generational partition, and gift-deed complications). The 'Bengal stack' includes: mother deed, 30-year chain at Sub-Registrar, mutation at KMC/HMC, khajna receipts, KMC building approval, completion certificate, and litigation search.",
      "Salt Lake (Bidhannagar) and New Town (Rajarhat) are government-planned layouts with HIDCO and WBHIDCO allotment frameworks — distinct from ordinary freehold. Transfer of allotments requires specific approvals and has historically been litigation-heavy.",
      "WB-RERA handles builder-buyer disputes for new projects. Consumer Commission and civil court remedies run parallel. Testamentary disputes — distinctly heavy in Kolkata given colonial-era family wealth — remain a significant practice at the Calcutta HC.",
    ],
    courtsForThisMatter: [
      "Calcutta High Court (Original and Testamentary Sides)",
      "City Civil Court, Kolkata",
      "WB-RERA & Appellate Tribunal",
      "Consumer Commissions",
      "HIDCO / WBHIDCO / KMDA for government-allotted land",
      "Sub-Registrar offices (registration)",
    ],
    caseTypes: [
      { title: "Title Diligence", desc: "Bengal-stack review including testamentary chain analysis." },
      { title: "Sale/Gift/Lease Drafting", desc: "Registration-ready documents." },
      { title: "Specific Performance", desc: "Enforcing sale agreements." },
      { title: "Partition / Testamentary", desc: "Co-owner partition; probate-related title matters." },
      { title: "WB-RERA Cases", desc: "Against Kolkata developers." },
      { title: "HIDCO / Salt Lake Matters", desc: "Allotment and transfer advisory." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,000 (free first consultation on NyaySevak)",
      district: "₹7,000 – ₹28,000 per appearance",
      highCourt: "₹20,000 – ₹1,50,000 per appearance",
      note: "Total WB registration cost: 6% (5% stamp + 1% registration). Title diligence: ₹15,000–₹45,000. Testamentary-linked title matters: higher due to complexity.",
    },
    faqs: [
      { question: "How do I verify Kolkata property title?", answer: "30-year chain + KMC mutation + khajna receipts + building approval + OC + testamentary-chain analysis (for inherited properties). Our team delivers a signed report." },
      { question: "What is West Bengal stamp duty?", answer: "5% stamp + 1% registration = 6% total on sale consideration. No female-buyer concession currently. Family gifts: concessional slabs." },
      { question: "What is Salt Lake / HIDCO allotment?", answer: "Salt Lake (Bidhannagar) properties are HIDCO-allotted. Transfer requires HIDCO permission. Our team handles HIDCO/WBHIDCO approval procedures." },
      { question: "Do you handle testamentary title disputes?", answer: "Yes. Kolkata's colonial-era long-chain properties often involve multi-generational inheritance disputes. Our probate and title teams work jointly on these matters." },
      { question: "How long does WB-RERA take?", answer: "9–14 months at WB-RERA; appeals 6–10 months." },
      { question: "Can I buy property in New Town / Rajarhat?", answer: "Yes. Most New Town properties are WBHIDCO-allotted. Transfer requires approval. Our property team handles Rajarhat / New Town diligence and conveyancing." },
    ],
    localNotes: [
      "Kolkata title work is unusually testamentary-heavy — specialist probate-title coordination is often required.",
      "Salt Lake and New Town have their own allotment-regime complexities.",
      "Kolkata property fees are the lowest among tier-1 Indian cities — excellent value for deep due diligence.",
    ],
  },

  "kolkata__corporate-business": {
    lead:
      "Kolkata is Eastern India's commercial hub — home to ITC, Bengal Chemicals, Titagarh Wagons, CESC, Exide Industries, and many old-economy and new-economy companies. NyaySevak's Kolkata corporate lawyers handle company incorporation, NCLT Kolkata litigation, Calcutta HC commercial disputes, tea-industry regulatory work, cross-border contracts (Bangladesh, Nepal, Bhutan border), and M&A.",
    landscape: [
      "NCLT Kolkata Bench handles company matters for West Bengal, Jharkhand, Odisha, Bihar, Sikkim, and Andaman & Nicobar Islands. NCLAT appeals go to Delhi. Calcutta HC Commercial Division handles S. 9/11/34/37 arbitration petitions. SEBI Eastern Regional Office is at Kolkata.",
      "Tea-industry regulation, jute-industry matters, and cross-border trade with Bangladesh/Nepal are distinctive Kolkata corporate-law areas. The Tea Board of India is headquartered in Kolkata, generating regulatory and licensing work.",
      "Kolkata has several listed family-owned companies with complex shareholder and succession issues — NCLT oppression/mismanagement petitions at Kolkata are often rooted in inter-generational family-ownership disputes.",
    ],
    courtsForThisMatter: [
      "NCLT Kolkata Bench (WB, Jharkhand, Odisha, Bihar, Sikkim, A&N)",
      "NCLAT (Delhi)",
      "Calcutta High Court — Commercial Division",
      "SEBI Eastern Regional Office, Kolkata",
      "ROC Kolkata",
      "Tea Board of India",
    ],
    caseTypes: [
      { title: "Company Incorporation", desc: "Pvt Ltd, LLP, OPC, Sec 8 setup." },
      { title: "NCLT Litigation", desc: "Oppression, IBC, mergers at NCLT Kolkata." },
      { title: "Commercial Arbitration", desc: "S. 9/11/34/37 petitions at Calcutta HC." },
      { title: "Tea / Jute Regulatory", desc: "Tea Board licensing, export-import advisory." },
      { title: "Cross-Border Trade", desc: "Bangladesh, Nepal, Bhutan trade contracts and disputes." },
      { title: "Family Business Disputes", desc: "Shareholder, inheritance, succession in family firms." },
      { title: "M&A Transactions", desc: "Due diligence, SPA, regulatory approvals." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹10,000 (free first consultation on NyaySevak)",
      district: "NCLT: ₹20,000–₹1,00,000 per hearing",
      highCourt: "₹30,000 – ₹2,00,000 per appearance; senior counsel ₹5 lakh+",
      note: "Kolkata corporate fees are 25–35% below Mumbai/Delhi. Incorporation ₹12,000–₹28,000. Family-business dispute representation is often on retainer + success-fee basis.",
    },
    faqs: [
      { question: "Which NCLT for my Kolkata company?", answer: "NCLT Kolkata Bench — serves West Bengal, Jharkhand, Odisha, Bihar, Sikkim, and A&N. Appeals go to NCLAT Delhi." },
      { question: "Do you handle tea/jute industry legal matters?", answer: "Yes. Tea Board licensing, jute-industry regulations, and export-import advisory for Kolkata-HQ'd tea, jute, and allied businesses." },
      { question: "Is SEBI ERO Kolkata active?", answer: "Yes. SEBI Eastern Regional Office handles show-cause and adjudication for eastern India. Our securities panel covers both Kolkata and SAT Mumbai representation." },
      { question: "Can you handle Bangladesh cross-border contracts?", answer: "Yes. Kolkata's geographic position creates substantial Bangladesh and Nepal trade work. Our panel includes cross-border contract and dispute specialists." },
      { question: "How fast is NCLT Kolkata?", answer: "IBC admission: 60–120 days. Oppression/mismanagement: 4–12 months. Family-business disputes may extend longer due to complexity." },
      { question: "Can you handle family-business shareholder disputes?", answer: "Yes. Kolkata's old family-firms create steady oppression/mismanagement and inheritance-linked shareholder litigation. Our corporate-litigation team specialises in these matters." },
    ],
    localNotes: [
      "Kolkata is the natural gateway for Bangladesh/Nepal trade work.",
      "Tea Board at Kolkata makes tea-industry regulatory a distinct Kolkata specialism.",
      "NCLT Kolkata's six-state jurisdiction is the broadest geographic NCLT coverage in India.",
    ],
  },

  // ────────────────────────────── AHMEDABAD ──────────────────────────────
  "ahmedabad__criminal-law": {
    lead:
      "Ahmedabad's criminal matters are handled at the City Civil & Sessions Court at Bhadra, Metropolitan Magistrate Courts at Gheekanta and Mirzapur, and the Gujarat High Court (at Sola, Ahmedabad). NyaySevak's Ahmedabad criminal lawyers handle bail, quashing, trial defence, economic-offence matters, and specialist PMLA/CBI representation across the Ahmedabad complex.",
    landscape: [
      "Ahmedabad is Gujarat's largest criminal-court jurisdiction. Sessions-triable offences go to the City Civil & Sessions Court at Bhadra. Magistrate matters are at Gheekanta (Chief Metropolitan Magistrate) and other divisional Magistrate courts. Gandhinagar has its own sessions court. Special courts for POCSO, NDPS, CBI, and PMLA operate at Ahmedabad.",
      "Gujarat High Court is located at Sola, Ahmedabad, serving the entire state. Its bail and quashing practice is quick — same-week hearings are common. The HC has issued important rulings on criminal-procedure fairness and has been active in monitoring police accountability.",
      "Gujarat's specific statutes — Gujarat Prohibition Act (prohibiting alcohol) — generate distinct criminal-defence practice. Economic offences and fraud are also heavy given Ahmedabad's trading and diamond-industry background.",
    ],
    courtsForThisMatter: [
      "Gujarat High Court, Sola (bail, quashing, appeals)",
      "City Civil & Sessions Court, Bhadra",
      "Metropolitan Magistrate Court, Gheekanta",
      "Mirzapur Magistrate Court",
      "Special CBI, PMLA, NDPS Courts",
      "Gandhinagar District & Sessions Court",
    ],
    caseTypes: [
      { title: "Bail Applications", desc: "Regular, anticipatory, interim bail under BNSS." },
      { title: "Prohibition Act Defence", desc: "Gujarat Prohibition Act offences (unique to Gujarat)." },
      { title: "Economic Offences", desc: "Fraud, cheating, S. 138 NI Act, diamond-trade matters." },
      { title: "Quashing Petitions", desc: "S. 528 BNSS before Gujarat HC." },
      { title: "NDPS Defence", desc: "Commercial and intermediate-quantity cases." },
      { title: "PMLA / ED Defence", desc: "Special PMLA Court representation." },
    ],
    feeRange: {
      consultation: "₹1,200 – ₹5,000 (free first consultation on NyaySevak)",
      district: "₹5,000 – ₹22,000 per appearance",
      highCourt: "₹18,000 – ₹1,25,000 per appearance; senior counsel ₹2,50,000+",
      note: "Ahmedabad criminal-lawyer fees are 25–35% below Mumbai/Delhi. Bail at Gujarat HC: ₹30,000–₹85,000 all-inclusive typical.",
    },
    faqs: [
      { question: "Which Ahmedabad court handles my criminal case?", answer: "FIR location decides. Central Ahmedabad: Gheekanta or Bhadra. Gandhinagar: separate district court. Suburban: respective Magistrate courts." },
      { question: "Do you handle Gujarat Prohibition Act cases?", answer: "Yes. Our Ahmedabad criminal panel has specialists in Prohibition Act defence — distinctive to Gujarat. Bail, trial defence, and quashing are handled." },
      { question: "How fast is Gujarat HC bail?", answer: "Typically listed within 2–4 working days, heard within 3–6 weeks. Urgent matters can be listed same week through mentioning." },
      { question: "What are Ahmedabad criminal lawyer fees?", answer: "Magistrate: ₹5,000–₹15,000 per appearance. Sessions: ₹10,000–₹25,000. Gujarat HC: ₹18,000–₹1.25 lakh. Senior counsel: ₹2.5 lakh+. Free first consultation on NyaySevak." },
      { question: "How long does a criminal trial take?", answer: "Magistrate: 12–20 months. Sessions: 2–4 years. Bail at Sessions: 2–4 weeks; Gujarat HC: 3–6 weeks." },
      { question: "Do you handle CBI / ED cases in Ahmedabad?", answer: "Yes. Special CBI and PMLA courts at Ahmedabad handle central agency matters. Our panel has specialists for each." },
    ],
    localNotes: [
      "Gujarat Prohibition Act creates a distinctive criminal-defence practice with its own procedural rules.",
      "Ahmedabad's diamond and textile industry produces unique fraud and economic-offence cases.",
      "Gujarat HC is known for quick disposition of bail matters.",
    ],
  },

  "ahmedabad__civil-law": {
    lead:
      "Ahmedabad civil litigation includes high-value property disputes (Satellite, Bodakdev, SG Highway), commercial matters for diamond and textile traders, Gujarat RERA builder-buyer cases, and commercial recovery. NyaySevak's Ahmedabad civil lawyers handle title diligence, specific performance, partition, tenancy under the Gujarat Rent Act, and commercial arbitration.",
    landscape: [
      "Gujarat's civil court hierarchy: Civil Judge (Junior Division) up to ₹5 lakh; Civil Judge (Senior Division) ₹5 lakh – ₹1 crore; City Civil Court (Ahmedabad) above ₹1 crore; Gujarat HC on appeal. Commercial Courts handle matters above ₹3 lakh under the 2015 Act.",
      "Ahmedabad property title diligence involves Gujarat-specific records: title deeds, 7/12 extract for rural/peri-urban, property card for urban, mutation records, AMC/AUDA building approval, and HC litigation search. AUDA (Ahmedabad Urban Development Authority) has distinct layout and building rules.",
      "Gujarat RERA (GujRERA) is operational and handles Ahmedabad builder-buyer matters. The Gujarat RERA Appellate Tribunal hears appeals. Consumer Commission routes run parallel.",
    ],
    courtsForThisMatter: [
      "Gujarat High Court",
      "City Civil Court, Ahmedabad",
      "Civil Judge Senior Division Courts",
      "Small Causes Court",
      "GujRERA & Appellate Tribunal",
      "Consumer Commissions",
      "AUDA / AMC planning authorities",
    ],
    caseTypes: [
      { title: "Property Title Suits", desc: "Declaration, specific performance, partition." },
      { title: "Commercial Recovery", desc: "Order 37 and Commercial Courts Act suits." },
      { title: "GujRERA Cases", desc: "Against Ahmedabad developers for delays." },
      { title: "Gujarat Rent Act Tenancy", desc: "Eviction, fair-rent, standard-rent cases." },
      { title: "Consumer Cases", desc: "Product liability, service-deficiency, real-estate claims." },
      { title: "Commercial Arbitration", desc: "S. 9/11/34 at Gujarat HC Commercial Division." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,000 (free first consultation on NyaySevak)",
      district: "₹7,000 – ₹25,000 per appearance",
      highCourt: "₹20,000 – ₹1,50,000 per appearance",
      note: "Gujarat total stamp and registration: 4.9% (4.9% stamp + 1% registration with female buyer rebate reducing stamp). Title diligence ₹15,000–₹40,000. GujRERA retainer ₹25,000–₹60,000.",
    },
    faqs: [
      { question: "Which Ahmedabad civil court handles my case?", answer: "Up to ₹5 lakh: Civil Judge Junior Division. ₹5 lakh–₹1 crore: Civil Judge Senior Division. Above ₹1 crore: City Civil Court. Commercial matters above ₹3 lakh: Commercial Courts." },
      { question: "How do I verify Ahmedabad property title?", answer: "30-year chain + 7/12 extract or property card + mutation + AMC/AUDA building approval + OC + litigation search at Gujarat HC. Our team delivers a signed report." },
      { question: "What is Gujarat stamp duty?", answer: "Effective stamp duty is 4.9% + 1% registration. Female buyers get a rebate — one of India's more favourable stamp regimes." },
      { question: "How long does GujRERA take?", answer: "GujRERA typically decides in 8–12 months. Appeals to Appellate Tribunal add 6–9 months." },
      { question: "Do you handle AUDA matters?", answer: "Yes. AUDA layouts, non-TP (Town Planning) scheme areas, and TP scheme approvals are common diligence items. Our property team handles AUDA issues." },
      { question: "What about diamond-trade commercial disputes?", answer: "Yes — Ahmedabad's Zaveri Bazaar has distinctive commercial trading customs. Our commercial team has experience in diamond-trade contract disputes and arbitration." },
    ],
    localNotes: [
      "Gujarat's stamp duty (effectively ~4.9%) is among India's lower rates, with meaningful female-buyer rebates.",
      "AUDA and AMC have distinct planning regimes that must be verified separately for Ahmedabad property.",
      "Diamond-trade commercial disputes are a distinct Ahmedabad specialism.",
    ],
  },

  "ahmedabad__family-matrimonial": {
    lead:
      "Ahmedabad matrimonial practice handles Hindu, Muslim, Christian, Parsi, and Special Marriage Act matters at the Family Court, Ahmedabad, with appeals to the Gujarat High Court. NyaySevak's Ahmedabad divorce lawyers handle mutual-consent and contested divorces, NRI matters (given significant Gujarati diaspora), maintenance, DV Act, and 498A defence.",
    landscape: [
      "Ahmedabad's Family Court handles matters under the Family Courts Act, 1984. Gandhinagar has its own Family Court. Jurisdiction is determined by respondent's residence, place of marriage, or last cohabitation.",
      "Ahmedabad's large NRI Gujarati diaspora (particularly in USA, UK, Canada, East Africa) creates substantial NRI matrimonial practice. Our team handles Hague Convention custody cases, foreign-decree recognition, and cross-border maintenance regularly.",
      "Gujarat has a sizeable Muslim (particularly Dawoodi Bohra), Parsi, and Jain population — creating distinctive matrimonial practices. Parsi divorce under the Parsi Marriage and Divorce Act is heard at designated Parsi Matrimonial Courts; Muslim matrimonial work spans mainstream Sunni, Shia, and Bohra community practices.",
    ],
    courtsForThisMatter: [
      "Family Court, Ahmedabad",
      "Gandhinagar Family Court",
      "Parsi Matrimonial Court (designated judge)",
      "Magistrate Courts (DV Act, 498A)",
      "Gujarat High Court (appeals)",
    ],
    caseTypes: [
      { title: "Mutual-Consent Divorce", desc: "HMA, SMA, Christian, Muslim, Parsi mutual-consent filings." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, adultery under personal law." },
      { title: "NRI Matrimonial", desc: "USA, UK, Canada, East Africa diaspora cases." },
      { title: "Muslim / Bohra Matrimonial", desc: "Khula, talaq, mehr, Bohra community practices." },
      { title: "Maintenance & Alimony", desc: "S.144 BNSS, S.24 HMA, DV Act." },
      { title: "498A Defence", desc: "Quashing, AB, regular bail." },
    ],
    feeRange: {
      consultation: "₹1,000 – ₹4,500 (free first consultation on NyaySevak)",
      district: "₹5,000 – ₹20,000 per hearing",
      highCourt: "₹18,000 – ₹1,00,000 per appearance",
      note: "Ahmedabad mutual-consent divorce retainers: ₹20,000–₹45,000. NRI matters higher due to cross-border coordination.",
    },
    faqs: [
      { question: "Which Family Court in Ahmedabad?", answer: "Ahmedabad city: Family Court, Ahmedabad. Gandhinagar: Gandhinagar Family Court. Jurisdiction is based on residence or place of marriage." },
      { question: "Do you handle NRI Gujarati divorce?", answer: "Yes. Our Ahmedabad NRI matrimonial practice handles USA, UK, Canada, East Africa cases routinely — service abroad, Hague custody, and foreign-decree recognition." },
      { question: "How long does divorce take in Ahmedabad?", answer: "Mutual-consent: 5–9 months. Contested: 3–5 years. Appeals to Gujarat HC: 2–4 years." },
      { question: "Do you handle Bohra community matrimonial matters?", answer: "Yes. Bohra community has distinctive practices (khula conditions, Nikah registration, Faslul-Khusumat process). Our panel includes lawyers familiar with community-specific procedures." },
      { question: "Can a wife claim maintenance in Ahmedabad?", answer: "Yes — under S.144 BNSS, S.24 HMA, DV Act, and Muslim Women Act. Typical awards: 20–30% of husband's net income." },
      { question: "Are virtual hearings available?", answer: "Yes. Gujarat Family Courts conduct virtual hearings for many matters, particularly helpful for NRI parties." },
    ],
    localNotes: [
      "Ahmedabad's NRI matrimonial practice (USA/UK/Canada/East Africa) is distinctive.",
      "Bohra community matrimonial law is a niche Ahmedabad specialism.",
      "Gujarat HC is progressive on inter-community marriages and custody.",
    ],
  },

  "ahmedabad__property-real-estate": {
    lead:
      "Ahmedabad property law covers SG Highway commercial developments, Bodakdev and Satellite residential high-value properties, Gandhinagar planned-city layouts, AUDA TP scheme areas, and GujRERA builder-buyer matters. NyaySevak's Ahmedabad property lawyers handle title diligence, sale-deed drafting, TP scheme issues, GujRERA filings, specific performance, and partition matters.",
    landscape: [
      "Ahmedabad title diligence requires the 'Gujarat stack': 30-year chain at Sub-Registrar, property card (urban), 7/12 extract (agricultural or peri-urban), mutation records, AMC/AUDA building approval, TP scheme clearance (where applicable), OC/CC, and litigation search. TP (Town Planning) schemes under the Gujarat Town Planning and Urban Development Act create a distinctive layout-ownership regime.",
      "AUDA (Ahmedabad Urban Development Authority) regulates suburban Ahmedabad, while AMC (Ahmedabad Municipal Corporation) regulates the city. Layout schemes, DP (Development Plan) compliance, and NOC from AUDA/AMC are frequent diligence items. Gandhinagar has its own planning framework.",
      "GujRERA handles Ahmedabad builder-buyer matters. Ahmedabad's real-estate market has been particularly active in SG Highway, Prahladnagar, Shela, Vaishnodevi Circle, and Naroda — generating heavy GujRERA caseload. Female-buyer stamp-duty rebates have influenced transaction structuring.",
    ],
    courtsForThisMatter: [
      "Gujarat High Court",
      "City Civil Court, Ahmedabad",
      "GujRERA & Appellate Tribunal",
      "Consumer Commissions",
      "AUDA / AMC / Gandhinagar planning authorities",
      "Sub-Registrar offices",
    ],
    caseTypes: [
      { title: "Title Diligence", desc: "Gujarat-stack review including TP scheme verification." },
      { title: "Sale/Gift/Lease Drafting", desc: "Registration-ready documents compliant with Gujarat Stamp Act." },
      { title: "Specific Performance", desc: "Enforcing sale agreements." },
      { title: "GujRERA Cases", desc: "Against Ahmedabad developers." },
      { title: "TP Scheme Matters", desc: "Town Planning scheme issues and final plot reconciliation." },
      { title: "Partition Suits", desc: "Co-owner partition of ancestral and jointly-held properties." },
    ],
    feeRange: {
      consultation: "₹1,500 – ₹6,000 (free first consultation on NyaySevak)",
      district: "₹7,000 – ₹25,000 per appearance",
      highCourt: "₹22,000 – ₹1,50,000 per appearance",
      note: "Gujarat registration: 4.9% stamp + 1% registration (female buyer rebate reduces stamp further). Title diligence: ₹15,000–₹40,000. GujRERA retainer: ₹25,000–₹60,000.",
    },
    faqs: [
      { question: "What is a TP scheme in Ahmedabad?", answer: "Town Planning scheme under the Gujarat TPUD Act — a mechanism where authority reorganises plots into planned layouts. Original plots become 'final plots' with new boundaries. TP finality is a critical diligence check." },
      { question: "How do I verify Ahmedabad property title?", answer: "30-year chain + property card / 7-12 + mutation + AMC/AUDA approval + TP scheme status + OC + litigation search. Our team delivers a signed report." },
      { question: "What is Gujarat stamp duty?", answer: "Effective stamp 4.9% + registration 1% = 5.9% total. Female buyers get meaningful rebate bringing total below 5%. One of India's more favourable rates." },
      { question: "How fast is GujRERA?", answer: "8–12 months at GujRERA; appeals 6–9 months." },
      { question: "Do you handle AUDA issues?", answer: "Yes. AUDA layout approvals, NA status, DP compliance, and TP scheme finality are routine diligence items. Our team handles AUDA representation as needed." },
      { question: "Can I buy property in Gandhinagar?", answer: "Yes. Gandhinagar has its own planned-city framework — GUDA (Gandhinagar Urban Development Authority) regulates. Distinct from AUDA. Our team handles both." },
    ],
    localNotes: [
      "Gujarat TP schemes create a distinctive layout-ownership regime — specialist counsel is essential.",
      "Female-buyer stamp-duty rebate is meaningful in Gujarat and affects transaction structuring.",
      "Gandhinagar GUDA framework is separate from Ahmedabad AUDA — boundary matters for jurisdiction.",
    ],
  },

  "ahmedabad__corporate-business": {
    lead:
      "Ahmedabad is Gujarat's commercial capital — home to Adani Group, Torrent Pharma, Zydus Cadila, Nirma, and thousands of textile, pharma, chemical, and diamond-trade companies. NyaySevak's Ahmedabad corporate lawyers handle company incorporation, GIFT City (International Financial Services Centre) work, NCLT Ahmedabad litigation, Gujarat HC commercial disputes, and M&A for diverse Gujarat-HQ'd conglomerates.",
    landscape: [
      "Ahmedabad hosts the NCLT Ahmedabad Bench serving Gujarat. NCLAT appeals go to Delhi. SEBI Western Regional Office has jurisdiction through Mumbai. Gujarat HC Commercial Division at Sola handles S. 9/11/34/37 arbitration petitions.",
      "GIFT City (Gujarat International Finance Tec-City) at Gandhinagar is India's only IFSC (International Financial Services Centre). IFSCA-regulated banking, insurance, fund management, and aircraft leasing work is a distinctively Gujarat specialism. Our team handles IFSCA regulatory matters and cross-border structuring through GIFT City.",
      "Pharma, textile, and chemical industries generate specialised regulatory and commercial work. Diamond-trade commercial disputes, textile-mill reorganisation, and chemical-industry environmental compliance are all Ahmedabad practice areas.",
    ],
    courtsForThisMatter: [
      "NCLT Ahmedabad Bench",
      "NCLAT Delhi (appeals)",
      "Gujarat High Court — Commercial Division",
      "IFSCA (GIFT City regulatory)",
      "SEBI Western Regional Office (Mumbai)",
      "ROC Ahmedabad",
      "Gujarat Pollution Control Board",
    ],
    caseTypes: [
      { title: "Company Incorporation", desc: "Pvt Ltd, LLP, OPC, Sec 8 setup; also IFSC entities at GIFT City." },
      { title: "GIFT City / IFSCA", desc: "IFSC banking, insurance, fund management, aircraft leasing." },
      { title: "NCLT Litigation", desc: "Oppression, IBC, mergers at NCLT Ahmedabad." },
      { title: "Commercial Arbitration", desc: "S. 9/11/34/37 at Gujarat HC Commercial Division." },
      { title: "Pharma / Textile Regulatory", desc: "Industry-specific compliance for Gujarat-HQ'd corporates." },
      { title: "Environmental Compliance", desc: "GPCB and NGT matters for chemical / pharma units." },
      { title: "M&A Transactions", desc: "Due diligence, SPA, regulatory approvals." },
    ],
    feeRange: {
      consultation: "₹2,000 – ₹12,000 (free first consultation on NyaySevak)",
      district: "NCLT: ₹20,000–₹1,00,000 per hearing",
      highCourt: "₹30,000 – ₹2,50,000 per appearance; senior counsel ₹6 lakh+",
      note: "Ahmedabad corporate fees are 20–30% below Mumbai/Delhi. Incorporation ₹12,000–₹28,000. IFSC-related regulatory work is specialised and typically retainer-based.",
    },
    faqs: [
      { question: "Which NCLT for my Ahmedabad company?", answer: "NCLT Ahmedabad Bench for Gujarat companies. Appeals go to NCLAT Delhi." },
      { question: "Do you handle GIFT City / IFSCA work?", answer: "Yes. IFSC entity setup, IFSCA regulatory compliance, cross-border banking, insurance, and fund-management structures at GIFT City are handled end-to-end. IFSC offers significant tax and regulatory benefits for qualifying entities." },
      { question: "How do I incorporate a company in Ahmedabad?", answer: "SPICe+ filing with ROC Ahmedabad, DIN, DSC, MOA/AOA drafting. Timeline: 7–12 days. Cost: ₹12,000–₹28,000." },
      { question: "Can you handle pharma regulatory matters?", answer: "Yes. Gujarat is India's largest pharma state. DCGI approvals, USFDA inspections support, DPCO compliance, and patent matters are regularly handled." },
      { question: "Is Gujarat HC fast for commercial arbitration?", answer: "Yes. Gujarat HC Commercial Division is among India's faster commercial benches. S. 9 interim relief can be obtained within 1–2 weeks." },
      { question: "How fast is NCLT Ahmedabad?", answer: "IBC admission: 60–120 days. Oppression/mismanagement: 4–10 months. Mergers: 3–6 months." },
    ],
    localNotes: [
      "GIFT City IFSC is a distinctively Gujarat opportunity — only IFSC in India, with unique tax and regulatory benefits.",
      "Gujarat's industrial base (pharma, textile, chemicals, diamonds) creates diverse specialist commercial practice.",
      "Gujarat HC commercial arbitration practice is among the most efficient in India.",
    ],
  },
};
