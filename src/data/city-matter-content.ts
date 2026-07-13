// Week 18 (NCR proposal Phase 2): high-buyer-intent city × MATTER pages.
// One hand-written entry per (city, matter) combo — same CityPracticeContent
// shape as the verticals so the /lawyers/[city]/[slug] template renders them
// unchanged. BCI-safe: no feeRange (no advocate-fee display).
//
// These target the exact transactional local queries from the Week 18 focus
// list: "cheque bounce lawyer in Delhi", "RERA lawyer in Noida",
// "company registration in Gurgaon".

import type { CityPracticeContent } from "./city-practice-content";

export const cityMatterContent: Record<string, CityPracticeContent> = {
  // ──────────────── DELHI × CHEQUE BOUNCE (S.138 NI ACT) ────────────────
  "delhi__cheque-bounce-recovery": {
    lead:
      "Cheque-bounce prosecutions under Section 138 of the Negotiable Instruments Act are among the highest-volume matters in Delhi's magistrate courts — and Delhi is the only city with dedicated digital NI Act courts across all six district complexes. NyaySevak connects you with Bar-Council-verified Delhi cheque-bounce lawyers who draft the statutory demand notice within the 30-day window, file the complaint before the correct complex, and press interim compensation so recovery starts before the trial ends.",
    landscape: [
      "Jurisdiction comes first: after the 2015 amendment to Section 142 NI Act, a cheque-bounce complaint is filed where the payee's bank branch is located — so if your account is in Delhi, your case is heard in Delhi even if the drawer sits in another state. The complaint then lands at the district complex serving your branch's area: Tis Hazari (North/Central), Patiala House (New Delhi), Karkardooma (East/North-East), Saket (South/South-East), Rohini (North-West), or Dwarka (South-West).",
      "Delhi pioneered dedicated digital NI Act courts (operational since 2021) that take e-filed complaints, conduct video-conference hearings, and run the Supreme Court's summary-trial framework for Section 138 — a meaningful speed advantage over most Indian cities. Two financial levers matter: Section 143A lets the trial court order interim compensation of up to 20% of the cheque amount once the accused pleads not guilty, and Section 148 requires an appellant-drawer to deposit a minimum of 20% before an appeal is heard.",
      "Because Section 138 is compoundable, a large share of Delhi cheque cases settle — through court-annexed mediation, National Lok Adalats (which dispose of NI Act matters in bulk), or a negotiated payment schedule recorded before the Magistrate. For larger debts, a parallel civil track is often run alongside: an Order XXXVII summary suit or a Commercial Court recovery suit, with suits above ₹2 crore going to the Delhi High Court's Original Side.",
    ],
    courtsForThisMatter: [
      "Digital NI Act Courts at all six Delhi district complexes (e-filing + VC hearings)",
      "Magistrate Courts — Tis Hazari, Patiala House, Karkardooma, Saket, Rohini, Dwarka",
      "Sessions Courts (appeals against S.138 conviction/acquittal)",
      "Delhi High Court (quashing on settlement under S.528 BNSS; revision)",
      "Commercial Courts / Delhi HC Original Side (parallel civil recovery)",
      "Delhi Mediation Centres & National Lok Adalat (settlement of NI Act matters)",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Drafting and dispatching the S.138 notice within 30 days of the return memo — the step most self-represented payees get wrong." },
      { title: "S.138 Complaint Filing", desc: "E-filing before the digital NI Act court of the complex serving your bank branch, with cause-of-action documentation." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing the court to order up to 20% of the cheque amount as interim compensation at the trial stage." },
      { title: "Defence of S.138 Cases", desc: "Rebutting the S.139 presumption — security cheques, altered cheques, no legally enforceable debt, notice defects." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat settlement, and compounding at any stage — often the fastest route to actual money." },
      { title: "Parallel Civil Recovery", desc: "Order XXXVII summary suits and Commercial Court claims run alongside the prosecution for larger debts." },
      { title: "Company & Director Liability", desc: "Prosecuting signatories and directors under S.141 when the drawer is a company — and the IBC-moratorium wrinkles." },
      { title: "Appeals & Quashing", desc: "Sessions appeals (with the S.148 deposit lever) and Delhi HC quashing once a settlement is reached." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque-bounce case in Delhi?",
        answer:
          "At the magistrate court of the district complex that serves the area of your bank branch — the branch where you presented the cheque. Since the 2015 amendment to Section 142 NI Act, the payee's bank branch decides territorial jurisdiction, so a Delhi account-holder files in Delhi even against an out-of-state drawer. Delhi's digital NI Act courts accept e-filed complaints at all six complexes.",
      },
      {
        question: "What is the deadline for a cheque-bounce notice?",
        answer:
          "You must send the written demand notice within 30 days of receiving the bank's return memo. The drawer then has 15 days to pay; if they don't, the complaint must be filed within one month after that 15-day period ends. Miss either window and the prosecution can fail on limitation alone — see our cheque-bounce notice format guide for the exact timeline.",
      },
      {
        question: "How long does a Section 138 case take in Delhi?",
        answer:
          "Delhi's digital NI Act courts run the Supreme Court's summary-trial framework, and straightforward cases can conclude in 12–24 months. Matters settle much faster — many resolve at mediation or in a National Lok Adalat within months, and interim compensation under Section 143A often triggers early settlement.",
      },
      {
        question: "Can I get money before the trial ends?",
        answer:
          "Often, yes. Under Section 143A the trial court can direct the drawer to pay interim compensation of up to 20% of the cheque amount once they plead not guilty. If the drawer is convicted and appeals, Section 148 requires a further minimum 20% deposit. For larger debts, a parallel Order XXXVII summary suit can add civil pressure.",
      },
      {
        question: "The cheque was issued by a company — who do I prosecute?",
        answer:
          "The company itself plus every person in charge of its business when the cheque was issued — typically the signatory and managing directors — under Section 141 NI Act. If the company has entered insolvency, the IBC moratorium protects the company but the Supreme Court has held that natural persons (signatories/directors) can still be prosecuted.",
      },
      {
        question: "Can a cheque-bounce case in Delhi be settled?",
        answer:
          "Yes — Section 138 is compoundable at any stage. Delhi's mediation centres and the National Lok Adalats settle NI Act matters in bulk, usually on a payment schedule. Once paid, the case is closed or the Delhi High Court quashes the proceedings on settlement. Settlement is frequently the fastest way to actually recover your money.",
      },
    ],
    localNotes: [
      "Delhi is the only Indian city with dedicated digital NI Act courts at all six district complexes — e-filing and VC hearings make it one of the fastest S.138 jurisdictions in the country.",
      "Your bank branch's location — not the drawer's address — fixes which Delhi complex hears the case (S.142(2) NI Act, post-2015).",
      "Use the financial levers: S.143A interim compensation (up to 20%) at trial and the S.148 appellate deposit turn the prosecution into real recovery pressure.",
    ],
  },

  // ──────────────── NOIDA × RERA / BUILDER-BUYER DISPUTES ────────────────
  "noida__rera-complaint": {
    lead:
      "Noida and Greater Noida are the epicentre of India's builder-buyer crisis — from Amrapali and Jaypee to the stalled towers of Noida Extension — and UP RERA hears NCR complaints at its Greater Noida bench. NyaySevak connects you with verified Noida RERA lawyers who file and argue your complaint, execute recovery certificates through the District Magistrate, and switch to the NCLT or consumer forum when the builder is insolvent or RERA relief stalls.",
    landscape: [
      "Homebuyers in Noida have a layered remedy map. The primary forum is UP RERA, which conducts hearings for NCR projects at its Greater Noida office: Section 18 gives a buyer whose possession is delayed the choice of exiting with a full refund plus prescribed interest, or staying in the project and claiming delay interest for every month of delay. Complaints are filed online on the UP RERA portal with a modest statutory fee, and most matters are decided on documents plus short hearings.",
      "Winning the order is half the battle in Gautam Buddh Nagar — execution is the other half. When a builder ignores a refund order, UP RERA issues a recovery certificate (RC) that the District Magistrate enforces as arrears of land revenue; a large stock of RCs against Noida builders is under DM execution at any time. Builder appeals go to the UP Real Estate Appellate Tribunal, but only after the builder pre-deposits the refund amount (or a substantial share of the penalty) — a strong settlement lever for buyers.",
      "Noida's distinctive complication is leasehold land: projects sit on plots leased from the Noida, Greater Noida, or Yamuna Expressway authorities, and builders' unpaid authority dues have historically blocked registries and occupancy certificates even in completed towers. Where the developer is insolvent (the Jaypee/Amrapali pattern), the fight moves to the NCLT under the IBC — homebuyers rank as financial creditors, and a class of at least 100 or 10% of allottees can jointly initiate proceedings. A Noida RERA lawyer's core skill is picking the right forum — RERA, consumer commission, NCLT, or a writ — for your specific builder.",
    ],
    courtsForThisMatter: [
      "UP RERA — NCR bench at Greater Noida (primary forum for Noida projects)",
      "UP Real Estate Appellate Tribunal (appeals; builder must pre-deposit)",
      "District Magistrate, Gautam Buddh Nagar (recovery-certificate execution)",
      "NCLT (builder insolvency under IBC — homebuyers as financial creditors)",
      "Consumer Commissions — District, State, NCDRC (deficiency-of-service route)",
      "Allahabad High Court (writs against authorities / RERA)",
    ],
    caseTypes: [
      { title: "Refund with Interest (S.18)", desc: "Exit a delayed project with a full refund plus prescribed interest from date of each payment." },
      { title: "Delay-Possession Interest", desc: "Stay in the project and claim monthly interest for the entire delay period." },
      { title: "Recovery-Certificate Execution", desc: "Turning an unpaid RERA order into an RC enforced by the DM as arrears of land revenue." },
      { title: "Registry & OC Disputes", desc: "Forcing conveyance and registry where builder-authority dues or missing occupancy certificates block it." },
      { title: "Builder Insolvency (NCLT/IBC)", desc: "Representing allottees as financial creditors when the developer collapses — the Jaypee/Amrapali pattern." },
      { title: "Possession, Defects & Layout Changes", desc: "Complaints for unfinished amenities, structural defects within the 5-year defect window, and unauthorised plan changes." },
    ],
    faqs: [
      {
        question: "Where does UP RERA hear complaints about Noida projects?",
        answer:
          "At its NCR office in Greater Noida — UP RERA is headquartered in Lucknow but conducts hearings for Gautam Buddh Nagar and other NCR districts at the Greater Noida bench. The complaint itself is filed online on the UP RERA portal, so filing does not require travelling to Lucknow.",
      },
      {
        question: "Can I get a refund from my Noida builder for delayed possession?",
        answer:
          "Yes. Section 18 RERA gives you the choice: withdraw from the project and recover everything you paid plus prescribed interest, or stay and claim interest for every month of delay. The promised possession date in your builder-buyer agreement (or the RERA-registered completion date) is the trigger — a Noida RERA lawyer will compute the claim payment-by-payment.",
      },
      {
        question: "The builder is ignoring my RERA order. What now?",
        answer:
          "Apply for execution: UP RERA issues a recovery certificate to the District Magistrate, Gautam Buddh Nagar, who recovers the amount as arrears of land revenue — including by attaching the builder's assets. Persistent defiance can also be prosecuted under RERA's penalty provisions. Execution is where local follow-up matters most, and where a lawyer earns their fee.",
      },
      {
        question: "My builder has gone to NCLT / is insolvent. Is RERA still useful?",
        answer:
          "Once a moratorium starts, RERA proceedings against that builder freeze and the action shifts to the NCLT, where homebuyers are financial creditors with a seat in the committee of creditors. Allottees need a group of at least 100 or 10% of buyers in the project to initiate insolvency themselves. This is the Jaypee/Amrapali route — specialised, but well-trodden in Noida.",
      },
      {
        question: "My tower is complete but the registry is not happening. Why?",
        answer:
          "Usually because the builder owes land dues to the Noida or Greater Noida authority, which then withholds permissions for sub-lease/registry, or because the occupancy certificate is pending. Buyers can press UP RERA for conveyance, pursue the authority in writ proceedings, and benefit from the state's periodic stalled-project settlement packages. This is a distinctly Noida problem — local experience matters.",
      },
      {
        question: "Should I file in RERA or the consumer court?",
        answer:
          "For delay and refund claims against a registered project, RERA is normally faster and purpose-built, with the DM-execution mechanism behind it. The consumer commission remains available for deficiency-of-service claims (and for buyers who prefer NCDRC-level relief in large claims). You cannot recover the same amount twice — a lawyer will pick the forum, not both blindly. See our RERA complaint guide for the full procedure.",
      },
    ],
    localNotes: [
      "Noida Extension (Greater Noida West) has India's largest concentration of delayed projects — UP RERA's Greater Noida bench and the DM's RC pipeline exist substantially because of it.",
      "Projects sit on authority leasehold land: builder-authority dues can block your registry even after possession — check the project's authority-dues position before you buy or settle.",
      "The builder's appeal to the UP appellate tribunal needs a heavy pre-deposit — orders in buyers' favour therefore carry real settlement leverage.",
    ],
  },

  // ──────────────── GURGAON × COMPANY REGISTRATION ────────────────
  "gurgaon__company-registration": {
    lead:
      "Gurugram is India's corporate capital — the registered home of hundreds of MNC subsidiaries, global capability centres, and funded startups along Cyber City, Golf Course Road, and Udyog Vihar. NyaySevak connects you with verified Gurgaon company-registration lawyers who incorporate your Private Limited, LLP, or foreign subsidiary through SPICe+, paper the founder and shareholder arrangements correctly, and set up the post-incorporation compliance calendar so the entity is investor- and FDI-ready from day one.",
    landscape: [
      "Incorporation is centralised but the details are local. SPICe+ filings are processed by the MCA's Central Registration Centre, with Gurugram companies registered under the Registrar of Companies for Delhi & Haryana; stamp duty on the incorporation documents is auto-computed at Haryana rates inside SPICe+. The integrated form bundles DIN, PAN, TAN, EPFO, ESIC, optional GST registration, and bank-account opening — a clean end-to-end runs in roughly 7–14 days. Company-law disputes, mergers, and petitions for Haryana-registered companies go to the NCLT's Chandigarh bench.",
      "What distinguishes Gurgaon practice is who is incorporating. Foreign parents setting up wholly-owned subsidiaries need FDI-route checks and post-issue FEMA reporting (FC-GPR through the AD bank); funded startups need founders' agreements with vesting, ESOP pools, and DPIIT Startup-India recognition; and GCCs need employment, POSH, and data-protection scaffolding from the first hire. A registered office in a Cyber City or Udyog Vihar co-working space is routine — it needs the operator's NOC and a utility bill, and it works for ROC purposes.",
      "After incorporation, Haryana-specific registrations follow: GST (Haryana), Shops & Commercial Establishments registration, professional setup with the labour department where thresholds apply, and the Companies Act basics — first auditor within 30 days, the INC-20A declaration of commencement of business within 180 days, and the first board meeting. Most incorporation disputes we see in Gurgaon are really founder disputes — the cure is drafting the shareholders' and founders' agreements at incorporation, not after the first disagreement.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Delhi & Haryana / MCA Central Registration Centre (SPICe+)",
      "NCLT, Chandigarh Bench (company petitions, mergers, oppression-mismanagement for Haryana companies)",
      "RBI / AD-bank FEMA reporting (FC-GPR for foreign-subsidiary share issues)",
      "GST & State Tax authorities, Haryana (registration and disputes)",
      "Labour Department, Haryana (Shops & Establishments, statutory registrations)",
      "Punjab & Haryana High Court (writs and company appeals)",
    ],
    caseTypes: [
      { title: "Private Limited / LLP / OPC Incorporation", desc: "Entity choice, name reservation, SPICe+ or FiLLiP filing, MoA/AoA drafting tuned to your cap table." },
      { title: "Foreign Subsidiary Setup", desc: "WOS incorporation for foreign parents — FDI-route checks, apostilled documents, FEMA FC-GPR reporting." },
      { title: "Founders' & Shareholders' Agreements", desc: "Vesting, IP assignment, exit and deadlock clauses — papered at incorporation, when it is cheap." },
      { title: "ESOP & Startup Structuring", desc: "ESOP pool creation, DPIIT Startup-India recognition, investor-readiness cleanup." },
      { title: "Post-Incorporation Compliance", desc: "First auditor (30 days), INC-20A (180 days), registered-office, GST and Shops & Establishments registrations." },
      { title: "Conversions & Restructuring", desc: "Proprietorship/partnership → Pvt Ltd, LLP ↔ company conversions, share transfers and capital changes." },
    ],
    faqs: [
      {
        question: "Which ROC registers a company with a Gurgaon office?",
        answer:
          "The Registrar of Companies for Delhi & Haryana — Haryana-registered companies share the Delhi ROC. In practice your SPICe+ filing is processed by the MCA's Central Registration Centre online, so there is no physical ROC visit; stamp duty is charged at Haryana rates automatically inside the form.",
      },
      {
        question: "How long does company registration take in Gurgaon?",
        answer:
          "A clean SPICe+ filing typically completes in 7–14 days end-to-end, including name reservation, DIN for new directors, PAN, TAN, and EPFO/ESIC. Delays almost always come from name conflicts or document defects — both avoidable with a pre-filing check. See our company-registration documents guide for the exact checklist.",
      },
      {
        question: "Should my Gurgaon startup be a Private Limited or an LLP?",
        answer:
          "If you plan to raise venture capital or issue ESOPs, choose a Private Limited — investors effectively require it. An LLP suits services firms and professional partnerships that value low compliance over fundraising. Conversion later is possible but costs time and tax analysis, so choose deliberately at the start. See our Pvt-Ltd-vs-LLP guide for the full comparison.",
      },
      {
        question: "Can I use a co-working space in Cyber City as my registered office?",
        answer:
          "Yes — a co-working or virtual-office address works as the registered office if you have the operator's NOC and a recent utility bill for the premises. Thousands of Gurgaon companies are registered at Cyber City, Udyog Vihar, Sohna Road, and Golf Course Road co-working addresses. You must still display the company name at the premises and keep the address current with the ROC.",
      },
      {
        question: "We are a foreign company setting up in Gurgaon. What extra steps apply?",
        answer:
          "A wholly-owned Indian subsidiary needs the parent's incorporation documents apostilled/notarised, at least one resident Indian director, an FDI-route check for your sector, and post-issue FEMA reporting (FC-GPR) through your AD bank within 30 days of allotment. Gurgaon is India's densest market for exactly this work — most MNC India arms are registered here.",
      },
      {
        question: "What compliance is due immediately after incorporation?",
        answer:
          "Appoint the first auditor within 30 days, file the INC-20A declaration of commencement within 180 days (before which the company cannot start business or borrow), hold the first board meeting within 30 days, issue share certificates within 60 days, and complete GST and Haryana Shops & Establishments registrations as applicable. A missed INC-20A is the most common — and most avoidable — early penalty.",
      },
    ],
    localNotes: [
      "Gurugram companies register under the ROC for Delhi & Haryana, but their NCLT forum is the Chandigarh bench — a detail that surprises founders when the first dispute or merger arrives.",
      "Foreign-subsidiary and GCC incorporations are Gurgaon's signature matter — FEMA reporting discipline (FC-GPR within 30 days of allotment) is where new entrants slip.",
      "Most Gurgaon 'incorporation disputes' are founder disputes in disguise: sign the founders' and shareholders' agreements at incorporation, with vesting and IP assignment, not after the first fight.",
    ],
  },
};
