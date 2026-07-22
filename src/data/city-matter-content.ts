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

  // ──────────────── DELHI × ANTICIPATORY BAIL (S.482 BNSS) ────────────────
  "delhi__anticipatory-bail": {
    lead:
      "When arrest is a real possibility — a 498A complaint, an economic-offences FIR, a business dispute turned criminal — anticipatory bail under Section 482 BNSS (formerly Section 438 CrPC) is the shield that keeps you out of custody while the law takes its course. NyaySevak connects you with Bar-Council-verified Delhi anticipatory bail lawyers who move the Sessions Court or the Delhi High Court the same week, press for interim protection at the first hearing, and manage the investigation-cooperation conditions that keep the protection alive.",
    landscape: [
      "Delhi gives an apprehended person two concurrent forums: the Sessions Court of the district where the FIR is registered — Tis Hazari (North/Central), Patiala House (New Delhi), Karkardooma (East/North-East), Saket (South/South-East), Rohini (North-West), or Dwarka (South-West) — and the Delhi High Court. Convention is to move the Sessions Court first, but the High Court can be approached directly in appropriate cases, and CBI/ED matters go to the special courts at Rouse Avenue. The application is filed with the FIR copy (or, where no FIR is traceable, on the basis of a reasonable apprehension), and a well-drafted petition asks for interim protection on the very first date — often the practical difference between liberty and a lock-up.",
      "The legal framework favours the prepared applicant. After Sushila Aggarwal v. State (NCT of Delhi) (2020), anticipatory bail is not automatically time-bound — it can protect you through investigation and trial unless the court expressly limits it. For most offences punishable up to seven years, the Arnesh Kumar line of cases and Section 35(3) BNSS (the old 41A CrPC notice regime) mean the police should issue an appearance notice rather than arrest — your lawyer uses this both to resist arrest and to persuade the court that custodial interrogation is unnecessary. Typical conditions on grant: join the investigation when called, do not contact witnesses, do not leave India without leave of the court.",
      "Delhi's docket has its own patterns. Matrimonial FIRs (498A/dowry) are the single largest anticipatory-bail category, and courts increasingly refer them to mediation while protection continues. Economic offences — EOW complaints, cheating and criminal-breach-of-trust FIRs arising from business deals — face harder scrutiny, and PMLA matters before Rouse Avenue must clear the Section 45 twin conditions, which makes early, specialised drafting critical. Where the FIR is registered outside Delhi but you live here, the Supreme Court's Priya Indoria ruling (2023) permits limited transit anticipatory bail from a Delhi court to let you approach the FIR-state court safely.",
    ],
    courtsForThisMatter: [
      "Sessions Courts at all six Delhi district complexes (S.482 BNSS applications)",
      "Delhi High Court (direct applications, second applications, and cancellation defence)",
      "Rouse Avenue Special Courts (CBI, ED/PMLA and corruption matters)",
      "Magistrate Courts (S.35(3) BNSS appearance-notice compliance)",
      "Delhi Mediation Centres (matrimonial FIRs referred during protection)",
      "Supreme Court of India (special leave when the High Court declines)",
    ],
    caseTypes: [
      { title: "Anticipatory Bail — Sessions Court", desc: "S.482 BNSS applications before the district Sessions Court with a press for interim protection on the first date." },
      { title: "Anticipatory Bail — Delhi High Court", desc: "Direct or second applications before the High Court where the matter's gravity or urgency justifies it." },
      { title: "498A / Matrimonial FIR Protection", desc: "Delhi's highest-volume category — protection plus mediation strategy for dowry and cruelty FIRs." },
      { title: "Economic Offences (EOW / Cheating / CBT)", desc: "Business disputes turned criminal — anticipating arrest in cheating, breach-of-trust and forgery FIRs." },
      { title: "PMLA / CBI Matters at Rouse Avenue", desc: "Specialised applications that must engage the PMLA S.45 twin conditions and agency status reports." },
      { title: "Transit Anticipatory Bail", desc: "Limited protection from Delhi courts for FIRs registered in other states (the Priya Indoria route)." },
      { title: "Notice Compliance & Arrest Resistance", desc: "Managing S.35(3) BNSS appearance notices and Arnesh Kumar safeguards so arrest never becomes necessary." },
      { title: "Cancellation Defence & Condition Modification", desc: "Defending applications to cancel your bail and relaxing travel or reporting conditions later." },
    ],
    faqs: [
      {
        question: "Where do I file anticipatory bail in Delhi — Sessions Court or High Court?",
        answer:
          "Both have concurrent jurisdiction under Section 482 BNSS. The usual practice is to move the Sessions Court of the district where the FIR is registered first, and the Delhi High Court thereafter if it is declined — though the High Court can be approached directly in serious or urgent matters. CBI and ED cases go to the Rouse Avenue special courts. A lawyer who appears daily in these courts will pick the forum that best fits your FIR.",
      },
      {
        question: "How fast can anticipatory bail be heard in Delhi?",
        answer:
          "An application can usually be filed within a day of engaging counsel, and Delhi courts routinely take up anticipatory bail urgently — interim protection is often sought and granted on the first hearing while the police file their status report. The full hearing typically follows within one to three weeks. If arrest is imminent, tell your lawyer immediately: timing determines strategy.",
      },
      {
        question: "How long does anticipatory bail last?",
        answer:
          "Following the Supreme Court's Constitution Bench ruling in Sushila Aggarwal (2020), anticipatory bail is not automatically limited in time — once granted, it can continue through the investigation and trial unless the court specifically restricts it or it is cancelled for breach of conditions. Complying strictly with the conditions (joining the investigation, not contacting witnesses) is what keeps it alive.",
      },
      {
        question: "Can I get anticipatory bail in a 498A case in Delhi?",
        answer:
          "Yes — matrimonial FIRs are the largest anticipatory-bail category in Delhi and courts grant protection regularly, particularly for family members with peripheral roles. Courts frequently refer the underlying dispute to mediation while protection continues, and a settlement can later support quashing of the FIR before the Delhi High Court.",
      },
      {
        question: "The FIR against me is registered in another state. Can a Delhi court protect me?",
        answer:
          "To a limited extent. After the Supreme Court's decision in Priya Indoria (2023), a Delhi Sessions Court or the Delhi High Court can grant transit anticipatory bail — short-duration protection that lets you travel to and apply before the competent court in the FIR state — if you are a Delhi resident and the apprehension is genuine. The main application must still be made in the state where the FIR stands.",
      },
      {
        question: "What conditions come with anticipatory bail, and what happens if I break them?",
        answer:
          "Standard conditions include joining the investigation whenever called, not influencing witnesses or tampering with evidence, and not leaving India without the court's permission; courts sometimes add reporting or passport-deposit conditions. Breach lets the prosecution apply for cancellation — so compliance is not optional. Conditions that prove impractical can be modified by application to the same court.",
      },
    ],
    localNotes: [
      "Delhi's six Sessions Courts and the High Court share concurrent S.482 BNSS jurisdiction — forum choice (and knowing each complex's practice) is genuine strategy, not formality.",
      "For offences punishable up to seven years, the S.35(3) BNSS notice regime and Arnesh Kumar safeguards mean arrest should be the exception — use them both to resist arrest and to win the application.",
      "PMLA and CBI matters are heard at Rouse Avenue and face stricter tests (including PMLA's S.45 twin conditions) — engage counsel who works those courts specifically.",
    ],
  },

  // ──────────────── DELHI × MUTUAL CONSENT DIVORCE (S.13B HMA) ────────────────
  "delhi__mutual-consent-divorce": {
    lead:
      "Mutual consent divorce under Section 13B of the Hindu Marriage Act is the fastest, most private and least adversarial way to end a marriage in Delhi — two motions before the Family Court, a comprehensive settlement, and a decree that both sides can live with. NyaySevak connects you with Bar-Council-verified Delhi mutual-consent-divorce lawyers who draft the settlement deed that protects you on alimony, custody and stridhan, file the first motion at the correct Family Court, and press for waiver of the cooling-off period where the law allows it.",
    landscape: [
      "The procedure is two court appearances built on one negotiation. The spouses must have lived separately for at least one year and agree that the marriage should end; the first motion records the settlement — permanent alimony, child custody and visitation, return of stridhan, division of joint assets and closure of pending cases — and the second motion, made after the statutory interregnum, results in the decree. The six-month cooling-off period between motions is no longer mandatory: after the Supreme Court's ruling in Amardeep Singh v. Harveen Kaur (2017), Delhi Family Courts regularly waive it where the separation is long and reconciliation is genuinely dead, which can compress the whole process to under two months.",
      "Delhi's Family Courts sit at the district complexes — Dwarka, Saket, Tis Hazari, Karkardooma, Rohini and Patiala House — and the petition is filed where the marriage was solemnised, where the couple last resided together, or where the wife currently resides. Couples married under the Special Marriage Act use the parallel Section 28 route with the same two-motion structure. For NRI spouses, Delhi Family Courts routinely permit appearance through video-conference for one or both motions, so a spouse working abroad does not have to fly in twice; what they cannot do is skip consent — both parties must confirm it to the judge at both stages.",
      "The settlement deed is where a mutual consent divorce is actually won or lost. A properly drafted deed makes the one-time alimony genuinely final, sequences payment against the motions (typically part at first motion, balance at second), fixes custody and visitation with enough detail to prevent future litigation, and provides for withdrawal or quashing of pending 498A, DV Act or maintenance proceedings — with the quashing of criminal cases taken to the Delhi High Court on the strength of the settlement. Consent can be withdrawn any time before the decree, which is precisely why the deed's structure and payment sequencing matter more than its length.",
    ],
    courtsForThisMatter: [
      "Family Courts at Delhi's district complexes — Dwarka, Saket, Tis Hazari, Karkardooma, Rohini, Patiala House",
      "Delhi High Court (appeals, transfer petitions, quashing of settled criminal cases)",
      "Delhi Mediation Centres (converting contested matters into mutual consent settlements)",
      "Supreme Court (transfer petitions between states; Article 142 dissolution in exceptional cases)",
      "SDM / Marriage Officer (Special Marriage Act procedural steps where applicable)",
      "Magistrate Courts (closure of connected maintenance and DV proceedings on settlement)",
    ],
    caseTypes: [
      { title: "S.13B First & Second Motion", desc: "Drafting and filing both motions with the joint statement recorded correctly at each stage." },
      { title: "Cooling-Off Waiver Applications", desc: "Amardeep Singh waiver of the six-month interregnum where separation is long and settlement complete." },
      { title: "Settlement Deed & Alimony Structuring", desc: "One-time permanent alimony, stridhan return and asset division drafted to be final and enforceable." },
      { title: "Child Custody & Visitation Terms", desc: "Detailed custody, visitation and education arrangements that prevent round two in the Guardianship Court." },
      { title: "NRI Mutual Consent Divorce", desc: "Video-conference appearances and travel-efficient scheduling for spouses abroad." },
      { title: "Closure of Connected Cases", desc: "Withdrawal or Delhi HC quashing of 498A, DV and maintenance proceedings as part of the package." },
      { title: "Contested-to-Consent Conversion", desc: "Mediation-backed conversion of ongoing contested divorces into a mutual consent settlement." },
    ],
    faqs: [
      {
        question: "How long does a mutual consent divorce take in Delhi?",
        answer:
          "The statutory structure is two motions separated by a six-to-eighteen-month window, so the conventional timeline is six to eight months. But Delhi Family Courts regularly waive the six-month cooling-off period under the Supreme Court's Amardeep Singh ruling where the couple has been separated well over a year and the settlement is complete — waiver cases can finish in four to eight weeks.",
      },
      {
        question: "Which Family Court in Delhi will hear our petition?",
        answer:
          "You can file where the marriage was solemnised, where you last lived together as a couple, or where the wife is currently residing. That maps to the Family Court at the corresponding district complex — Dwarka, Saket, Tis Hazari, Karkardooma, Rohini or Patiala House. When more than one forum is available, your lawyer picks the practical one.",
      },
      {
        question: "What must we agree on before filing?",
        answer:
          "Everything that could otherwise be litigated: permanent alimony or a mutual waiver, custody and visitation of children, return of stridhan and jewellery, division or transfer of joint property and accounts, and closure of any pending cases between the families. This is recorded in a settlement deed filed with the first motion — the most important document in the entire process.",
      },
      {
        question: "One of us lives abroad. Do we both have to appear in court in Delhi?",
        answer:
          "Both spouses must confirm consent at both motions, but Delhi Family Courts routinely allow an NRI spouse to appear through video-conference, and courts have accepted appearance through a special power-of-attorney holder in limited circumstances. In practice a well-planned NRI matter needs at most one trip to India — often none.",
      },
      {
        question: "Can my spouse back out after the first motion?",
        answer:
          "Yes — consent must subsist until the decree, and either spouse can withdraw before the second motion. This is why the settlement deed's sequencing matters: payments and case withdrawals are structured against each stage so that neither side is exposed if the other resiles. A withdrawn consent leaves the contested-divorce routes open, and sums already paid under the deed are typically protected by its terms.",
      },
      {
        question: "We have a 498A / DV case pending. Can it be closed as part of the divorce?",
        answer:
          "Yes — this is standard in Delhi. The settlement provides for withdrawal of complaints and, for a non-compoundable FIR like 498A, quashing by the Delhi High Court on the basis of the settlement once the divorce and payments are through. Courts encourage exactly this kind of comprehensive closure, and the mediation centres attached to Delhi's courts broker it every day.",
      },
    ],
    localNotes: [
      "Delhi Family Courts apply the Amardeep Singh cooling-off waiver liberally in genuine cases — long-separated couples with a complete settlement can finish in weeks, not months.",
      "Video-conference appearance for NRI spouses is routine in Delhi's Family Courts — plan the motions around it rather than around flight tickets.",
      "Sequence the settlement: part payment and case withdrawals at the first motion, balance and quashing at the second — it protects both sides against a withdrawn consent.",
    ],
  },

  // ──────────────── NOIDA × CHEQUE BOUNCE (S.138 NI ACT) ────────────────
  "noida__cheque-bounce-recovery": {
    lead:
      "Noida's economy of MSMEs, traders, IT vendors and real-estate developers runs on post-dated cheques — and when one bounces, Section 138 of the Negotiable Instruments Act is the recovery weapon. NyaySevak connects you with Bar-Council-verified Noida cheque-bounce lawyers who serve the statutory demand notice inside the 30-day window, file the complaint before the Gautam Buddh Nagar magistrate courts at Surajpur, and press interim compensation and settlement so the money — not just the conviction — actually arrives.",
    landscape: [
      "Jurisdiction follows your bank, not the drawer. Since the 2015 amendment to Section 142 NI Act, the complaint is filed where the payee's bank branch is located — so a cheque deposited in a Noida or Greater Noida branch is prosecuted before the magistrate courts at the Gautam Buddh Nagar district court complex at Surajpur, even if the drawer sits in Delhi, Agra or Mumbai. The timeline is unforgiving: present the cheque within its validity, send the written demand notice within 30 days of the return memo, give the drawer 15 days to pay, and file the complaint within one month after that period lapses. Each step missed is a defence handed to the drawer.",
      "The financial levers matter more than the conviction. Section 143A lets the trial court order interim compensation of up to 20% of the cheque amount once the accused pleads not guilty; Section 148 forces a convicted drawer to deposit a minimum of 20% more to appeal. Because the offence is compoundable, a large share of Gautam Buddh Nagar's NI Act docket settles — at court-referred mediation, in the National Lok Adalats that dispose of cheque matters in bulk, or on a payment schedule recorded before the magistrate. For bigger debts, a parallel civil track runs alongside: an Order XXXVII summary suit or a Commercial Court claim at Gautam Buddh Nagar, and where the drawer is a company owing ₹1 crore or more, an IBC demand notice adds insolvency pressure at the NCLT.",
      "Noida adds a signature local pattern: builder refund cheques. Developers who settle with homebuyers — or refund booking amounts — routinely issue post-dated cheques that bounce, and a Section 138 prosecution then runs usefully alongside the UP RERA complaint or execution; the criminal exposure of the signatory directors (Section 141) is often what finally produces payment. Company drawers generally mean prosecuting both the company and the signatories, with the IBC-moratorium nuance — the company may be shielded during insolvency, but the Supreme Court has held the natural persons stay on the hook. Appeals go to the Sessions Court at Surajpur, and quashing on settlement to the Allahabad High Court.",
    ],
    courtsForThisMatter: [
      "Magistrate Courts, Gautam Buddh Nagar district complex at Surajpur (S.138 complaints)",
      "Sessions Court, Gautam Buddh Nagar (appeals; the S.148 deposit lever)",
      "Commercial Court, Gautam Buddh Nagar (parallel civil recovery of specified-value debts)",
      "Allahabad High Court (quashing on settlement under S.528 BNSS; revision)",
      "Mediation Centre & National Lok Adalat, Gautam Buddh Nagar (bulk NI Act settlement)",
      "NCLT (IBC pressure where the drawer is a company owing ₹1 crore+)",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Drafting and dispatching the S.138 notice within 30 days of the return memo — the step most self-represented payees get wrong." },
      { title: "S.138 Complaint at Surajpur", desc: "Filing before the Gautam Buddh Nagar magistrate courts with jurisdiction anchored to your Noida bank branch." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to 20% of the cheque amount as interim compensation at the trial stage." },
      { title: "Builder Refund-Cheque Prosecutions", desc: "S.138 complaints on bounced builder refund and settlement cheques, run alongside UP RERA proceedings." },
      { title: "Company & Director Liability (S.141)", desc: "Prosecuting the drawer company and its signatories — with the IBC-moratorium wrinkles handled." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat settlement and compounding at any stage — often the fastest route to actual money." },
      { title: "Parallel Civil Recovery", desc: "Order XXXVII summary suits and Commercial Court claims for larger debts, alongside the prosecution." },
      { title: "Defence of S.138 Cases", desc: "Rebutting the S.139 presumption — security cheques, altered cheques, no legally enforceable debt, notice defects." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque-bounce case for a cheque deposited in Noida?",
        answer:
          "Before the magistrate courts at the Gautam Buddh Nagar district court complex at Surajpur (Greater Noida). Since the 2015 amendment to Section 142 NI Act, jurisdiction follows the payee's bank branch — so if you deposited the cheque in a Noida or Greater Noida branch, your case is heard locally even if the drawer is in another city or state.",
      },
      {
        question: "What is the exact timeline I must follow after the cheque bounces?",
        answer:
          "Three windows, all strict: send the written demand notice within 30 days of receiving the bank's return memo; give the drawer 15 days from receipt to pay; and if they don't, file the complaint within one month of that 15-day period ending. Miss any window and the prosecution can fail on limitation alone — see our cheque-bounce notice format guide for the step-by-step timeline.",
      },
      {
        question: "The builder's refund cheque bounced. Do I file under RERA or Section 138?",
        answer:
          "Both — they work together, not against each other. The Section 138 prosecution puts the signatory directors at personal criminal risk, which is often what finally produces payment, while the UP RERA complaint or recovery-certificate execution pursues the refund itself. This double track is one of the most common — and most effective — recovery patterns in Noida.",
      },
      {
        question: "Can I get part of my money before the case ends?",
        answer:
          "Often, yes. Under Section 143A the magistrate can order interim compensation of up to 20% of the cheque amount once the drawer pleads not guilty, and a convicted drawer must deposit at least 20% more to appeal (Section 148). For larger debts a parallel Order XXXVII summary suit or Commercial Court claim at Gautam Buddh Nagar adds civil pressure — and where the drawer is a company owing ₹1 crore or more, an IBC notice raises the stakes further.",
      },
      {
        question: "The cheque was issued by a company. Who do I prosecute?",
        answer:
          "The company plus every person in charge of its business when the cheque was issued — typically the signatory and managing directors — under Section 141 NI Act. If the company enters insolvency, the moratorium shields the company but the Supreme Court has held that the signatories and directors can still be prosecuted personally.",
      },
      {
        question: "How long does a Section 138 case take in Noida, and can it settle?",
        answer:
          "NI Act matters are summary-trial proceedings, and straightforward Gautam Buddh Nagar cases typically run 18–30 months — but a large share settle much earlier, at mediation or in the National Lok Adalats that dispose of cheque matters in bulk, usually on a recorded payment schedule. Section 138 is compoundable at any stage, and settlement is frequently the fastest way to actually recover your money.",
      },
    ],
    localNotes: [
      "Your Noida bank branch — not the drawer's address — fixes jurisdiction at the Gautam Buddh Nagar courts at Surajpur (S.142 NI Act, post-2015).",
      "Bounced builder refund cheques are a Noida signature: run the S.138 prosecution and the UP RERA execution together — the directors' personal criminal exposure is the strongest settlement lever.",
      "Use the financial levers: S.143A interim compensation at trial, the S.148 appellate deposit, and IBC pressure for ₹1 crore+ company debtors turn the prosecution into real recovery.",
    ],
  },

  // ──────────────── GURGAON × RERA / BUILDER-BUYER DISPUTES ────────────────
  "gurgaon__rera-complaint": {
    lead:
      "Gurugram is Haryana's real-estate engine — and its dispute capital, from delayed towers on the Dwarka Expressway and New Gurgaon corridors to assured-return schemes that stopped paying. Haryana RERA hears Gurugram projects at its own dedicated Gurugram bench. NyaySevak connects you with verified Gurgaon RERA lawyers who file and argue your complaint before H-RERA Gurugram, execute unpaid orders through recovery certificates, and switch to the NCLT or consumer forum when the builder is insolvent or a different lever will pay faster.",
    landscape: [
      "Haryana runs two real-estate authorities, and forum choice is automatic: projects in Gurugram district go to HRERA Gurugram, everything else to the Panchkula authority. Complaints are e-filed on the HRERA Gurugram portal with a modest statutory fee. Section 18 RERA gives a delayed buyer the strategic choice — exit with a full refund plus interest at the prescribed rate (pegged to SBI's highest MCLR plus 2% under the Haryana rules), or stay in the project and claim delay interest month by month. Claims for compensation beyond interest go to the Adjudicating Officer under Sections 71–72.",
      "Execution is where Gurugram buyers win or lose. HRERA Gurugram enforces its own orders — non-compliance proceedings, penalties, and recovery certificates that the district revenue machinery executes against the builder as arrears of land revenue; attachment of builder assets and bank accounts is a live, regularly used remedy. The builder's appeal to the Haryana Real Estate Appellate Tribunal at Chandigarh requires a pre-deposit of the refund amount ordered, which converts most buyer-favourable orders into settlement leverage. Writs against the authorities go to the Punjab & Haryana High Court.",
      "Gurugram's docket has distinctive patterns: assured-return and committed-return schemes on commercial projects that stopped paying (pursued as both RERA and consumer matters), luxury-segment delay claims where the interest arithmetic runs into crores, DTCP-licence and layout-change disputes, and builder insolvencies where the fight moves to the NCLT Chandigarh bench — homebuyers rank as financial creditors, and a class of at least 100 or 10% of allottees can jointly initiate proceedings. The consumer route (District Commission, State Commission, NCDRC) remains open for deficiency-of-service claims and for buyers who prefer it; a Gurgaon RERA lawyer's core skill is picking the forum that actually pays for your specific builder.",
    ],
    courtsForThisMatter: [
      "Haryana RERA — Gurugram bench (primary forum for Gurugram-district projects)",
      "Adjudicating Officer, HRERA Gurugram (compensation claims under S.71–72)",
      "Haryana Real Estate Appellate Tribunal, Chandigarh (appeals; builder pre-deposit)",
      "District revenue authorities, Gurugram (recovery-certificate execution as land-revenue arrears)",
      "NCLT, Chandigarh Bench (builder insolvency — homebuyers as financial creditors)",
      "Consumer Commissions & Punjab & Haryana High Court (parallel routes and writs)",
    ],
    caseTypes: [
      { title: "Refund with Interest (S.18)", desc: "Exit a delayed project with a full refund plus interest at the Haryana prescribed rate, computed payment by payment." },
      { title: "Delay-Possession Interest", desc: "Stay in the project and claim monthly interest for the entire delay period until valid possession." },
      { title: "Recovery-Certificate Execution", desc: "Turning an unpaid HRERA order into attachment and recovery through the district revenue machinery." },
      { title: "Assured-Return Scheme Defaults", desc: "Recovering committed returns on commercial and SCO investments when the builder stops paying." },
      { title: "Builder Insolvency (NCLT/IBC)", desc: "Representing allottees as financial creditors at NCLT Chandigarh when the developer collapses." },
      { title: "Possession, Defects & Layout Changes", desc: "Unfinished amenities, structural defects within the five-year defect window, and unauthorised plan changes." },
      { title: "Conveyance & Registry Disputes", desc: "Forcing conveyance deeds, occupancy-certificate compliance and registry where the builder stalls." },
    ],
    faqs: [
      {
        question: "Where do I file a RERA complaint against a Gurgaon builder?",
        answer:
          "Before Haryana RERA's Gurugram bench — Haryana has two authorities, and projects in Gurugram district are assigned to HRERA Gurugram (the rest of the state goes to Panchkula). The complaint is e-filed on the HRERA Gurugram portal with a modest statutory fee, and most matters are decided on documents plus short oral hearings.",
      },
      {
        question: "Can I get a refund from my builder for delayed possession in Gurgaon?",
        answer:
          "Yes. Section 18 RERA gives you the choice: withdraw from the project and recover everything you paid plus interest at the Haryana prescribed rate (SBI's highest MCLR plus 2%), or stay and claim interest for every month of delay. The promised possession date in your builder-buyer agreement or the RERA-registered completion date is the trigger — the interest arithmetic on a Gurgaon-priced flat is substantial, so have it computed properly.",
      },
      {
        question: "The builder is ignoring my HRERA order. What can actually be done?",
        answer:
          "Execution proceedings before HRERA Gurugram: non-compliance penalties, and a recovery certificate that the district revenue authorities execute against the builder as arrears of land revenue — including attachment of assets and bank accounts. Persistent defiance is where local, persistent follow-up matters most; an order that is not executed is just paper.",
      },
      {
        question: "My builder promised assured returns on a commercial unit and stopped paying. Is that a RERA matter?",
        answer:
          "Frequently, yes — assured-return and committed-return defaults on Gurugram commercial projects are pursued before HRERA and, in parallel or alternatively, as consumer complaints and even as recovery suits depending on the scheme's structure. The right forum depends on your documentation and the builder's solvency; this is one of Gurugram's most common — and most winnable — dispute patterns.",
      },
      {
        question: "The developer has gone into insolvency. Is my RERA case dead?",
        answer:
          "The RERA proceedings freeze against the insolvent builder once the moratorium starts, and the action shifts to the NCLT's Chandigarh bench, where homebuyers rank as financial creditors with a seat in the committee of creditors. A group of at least 100 allottees or 10% of the project's buyers can also jointly initiate insolvency. Your claim survives — it just changes forum, and it needs to be filed with the resolution professional in time.",
      },
      {
        question: "Should I choose RERA or the consumer court for my Gurgaon flat dispute?",
        answer:
          "For delay, refund and possession claims against a registered project, HRERA Gurugram is normally faster and purpose-built, with the recovery-certificate machinery behind it. The consumer route (District Commission up to NCDRC) suits deficiency-of-service claims and certain large or unregistered-project cases. You cannot recover the same amount twice — a lawyer picks the forum that pays fastest for your facts. See our RERA complaint guide for the full procedure.",
      },
    ],
    localNotes: [
      "Haryana has two RERA benches — Gurugram-district projects go to HRERA Gurugram, not Panchkula; filing in the wrong authority wastes months.",
      "The Haryana REAT pre-deposit rule means a buyer-favourable refund order carries real settlement leverage — builders must deposit the ordered amount before their appeal is heard.",
      "Assured-return defaults and Dwarka Expressway / New Gurgaon delay claims are Gurugram's signature patterns — the interest computation, done correctly at the prescribed rate, is often larger than buyers expect.",
    ],
  },

  // ──────────────── GURGAON × NCLT / INSOLVENCY (IBC) ────────────────
  "gurgaon__nclt-ibc": {
    lead:
      "For Gurugram businesses, the NCLT is where the biggest fights happen — recovering crores from a defaulting corporate customer, defending an insolvency petition, resolving a founder deadlock, or steering a merger. NyaySevak connects you with verified NCLT and insolvency lawyers for Gurgaon companies who issue and answer IBC demand notices, file Section 7 and Section 9 petitions before the right bench, represent creditors in the committee of creditors, and run oppression-mismanagement and scheme petitions end to end.",
    landscape: [
      "Bench selection comes first, and it trips up even seasoned finance teams: NCLT jurisdiction follows the corporate debtor's registered office. A company registered in Haryana — most Gurugram-registered entities — litigates at the NCLT Chandigarh bench, while a Gurgaon-headquartered business whose registered office is across the border in Delhi goes to NCLT New Delhi. Appeals from both lie to the NCLAT at New Delhi, and the Supreme Court sits above that. Parallel or alternative recovery tracks — Commercial Court suits in Gurugram, arbitration, summary suits — often run alongside, and choosing the sequence is strategy, not paperwork.",
      "For creditors, the IBC is as much leverage as liquidation. An operational creditor owed ₹1 crore or more (the threshold since 2020) serves a Section 8 demand notice; the debtor has 10 days to pay or show a pre-existing dispute, failing which a Section 9 petition can be filed — and a very large share of these matters settle before admission, because admission means the promoters lose the company to a resolution professional and a moratorium freezes everything. Financial creditors file under Section 7 on default; homebuyers in a Gurugram project qualify as financial creditors too, subject to the 100-allottee-or-10% class threshold. Once a company is in CIRP, timely claim filing with the resolution professional and active committee-of-creditors participation decide how much anyone actually recovers.",
      "Beyond insolvency, the NCLT is Gurugram's company court. Founder and shareholder disputes — the classic fallout of a startup or family business — go as oppression-and-mismanagement petitions under Sections 241–242; mergers, demergers and capital reductions proceed as scheme petitions under Sections 230–232; and MSME debtors have the pre-packaged insolvency route. Directors and promoters facing a CIRP need defensive counsel early: personal guarantees to corporate debt are themselves enforceable at the NCLT, and avoidance-transaction scrutiny (preferential, undervalued, fraudulent transactions) reaches back into pre-insolvency dealings.",
    ],
    courtsForThisMatter: [
      "NCLT, Chandigarh Bench (Haryana-registered companies — CIRP, company petitions)",
      "NCLT, New Delhi Benches (Delhi-registered companies operating from Gurgaon)",
      "NCLAT, New Delhi (appeals from NCLT orders)",
      "Supreme Court of India (appeals from NCLAT on questions of law)",
      "Commercial Court, Gurugram (parallel recovery suits under the Commercial Courts Act)",
      "Punjab & Haryana High Court (writs touching company and insolvency matters)",
    ],
    caseTypes: [
      { title: "Operational-Creditor Recovery (S.8/S.9)", desc: "Demand notice, the 10-day window, and a Section 9 petition — the IBC's settlement pressure for ₹1 crore+ B2B debts." },
      { title: "Financial-Creditor Petitions (S.7)", desc: "Default-based CIRP initiation for lenders, NBFCs and qualifying homebuyer classes." },
      { title: "CIRP Defence & Settlement", desc: "Defending admission, disputing debt/default, and Section 12A withdrawal once a settlement is struck." },
      { title: "Claims & Committee of Creditors", desc: "Timely claim filing with the RP, CoC representation, and resolution-plan objections." },
      { title: "Oppression & Mismanagement (S.241–242)", desc: "Founder, shareholder and family-business disputes over control, dilution and exclusion." },
      { title: "Mergers & Schemes (S.230–232)", desc: "Scheme petitions for mergers, demergers and restructurings of Haryana-registered companies." },
      { title: "Personal Guarantors & Avoidance Actions", desc: "Defence of promoters on personal guarantees and in preferential/undervalued-transaction proceedings." },
      { title: "MSME Pre-Pack Insolvency", desc: "The pre-packaged resolution route that lets MSME promoters restructure without losing the company." },
    ],
    faqs: [
      {
        question: "Which NCLT bench handles a Gurgaon company's case?",
        answer:
          "It follows the registered office, not the corporate office. A Haryana-registered company litigates at the NCLT Chandigarh bench; a company operating from Gurgaon but registered in Delhi goes to the NCLT New Delhi benches. Appeals from both go to the NCLAT at New Delhi. Confirm the registered office from the master data before anything else — filing at the wrong bench costs months.",
      },
      {
        question: "A company owes my business over ₹1 crore. How does IBC recovery work?",
        answer:
          "You serve a Section 8 demand notice; the debtor has 10 days to pay or show a genuine pre-existing dispute. If neither happens, you file a Section 9 petition for insolvency. Because admission hands the company to a resolution professional and freezes the promoters out, a large share of these matters settle at or before the admission stage — the IBC is often the most effective recovery pressure available for serious B2B debts.",
      },
      {
        question: "What is the minimum debt for an IBC petition, and what if my debt is smaller?",
        answer:
          "The default threshold is ₹1 crore (raised from ₹1 lakh in 2020). Smaller debts are pursued through the Commercial Court at Gurugram, an Order XXXVII summary suit, arbitration if your contract provides for it, or a Section 138 prosecution if cheques bounced — and several of these can run together. A lawyer sequences the tracks by debtor and documentation.",
      },
      {
        question: "Our company received a Section 8 demand notice. What should we do?",
        answer:
          "Act inside the 10-day window — it is the whole game. If a genuine dispute about the debt existed before the notice (quality claims, correspondence, pending proceedings), it must be raised in the reply with evidence; a well-documented pre-existing dispute defeats a Section 9 petition at the threshold. Silence or a weak reply invites admission, moratorium, and loss of control to a resolution professional.",
      },
      {
        question: "Can homebuyers in a Gurgaon project take the builder to NCLT?",
        answer:
          "Yes — homebuyers rank as financial creditors under the IBC, but allottees must act as a class: at least 100 buyers or 10% of the project's allottees, whichever is less, to jointly file a Section 7 petition. Once a builder is in CIRP, individual RERA proceedings freeze and buyers' claims are pursued before the resolution professional and the committee of creditors.",
      },
      {
        question: "What is the difference between an NCLT dispute and an oppression-mismanagement case?",
        answer:
          "The NCLT hears both, but they are different tracks: insolvency (IBC) is about debt and default, while oppression-and-mismanagement petitions under Sections 241–242 of the Companies Act are about how the company is being run — exclusion of a founder or shareholder, dilution, sidelining from the board, diversion of business. Founder fallouts in Gurgaon's startup ecosystem are classic 241 territory, and interim relief (status quo on shareholding, board restraints) is often the real battle.",
      },
    ],
    localNotes: [
      "NCLT jurisdiction follows the registered office: Haryana-registered Gurgaon companies go to Chandigarh, Delhi-registered ones to NCLT New Delhi — verify before filing, appeals for both land at NCLAT New Delhi.",
      "Most Section 9 matters settle around admission — the IBC's real power for creditors is the promoters' fear of losing the company, so a precise demand notice is the highest-leverage document in the file.",
      "Received a demand notice? The 10-day reply showing a pre-existing dispute is the single defence that kills a petition at the threshold — never let the window lapse silently.",
    ],
  },

  // ════════ Week 19 expansion tranche — full NCR matter grid (12 entries) ════════

  // ──────────────── DELHI × RERA / BUILDER-BUYER DISPUTES ────────────────
  "delhi__rera-complaint": {
    lead:
      "Delhi's real-estate disputes look nothing like Noida's or Gurgaon's: instead of mega-townships, the capital's grievances come from builder floors, collaboration-agreement redevelopments, and small developers who vanish after collecting instalments — heard by the Real Estate Regulatory Authority, NCT of Delhi (RERA Delhi). NyaySevak connects you with Bar-Council-verified Delhi RERA lawyers who file your complaint before the right authority, choose intelligently between refund and delay interest under Section 18, and push execution — or the consumer commission or NCLT — when an order alone does not produce money.",
    landscape: [
      "RERA Delhi is the authority for projects within the National Capital Territory — a point buyers in the NCR routinely get wrong, because a project across the border in Noida belongs to UP RERA and one in Gurugram to Haryana RERA. Complaints under Section 31 are filed on the RERA Delhi portal against registered projects, and Section 18 then presents the strategic fork: withdraw from a delayed project and recover everything paid with interest at the prescribed rate, or retain the unit and charge the promoter interest for every month beyond the promised possession date. Compensation over and above interest — mental agony, rent paid, cost escalation — is a separate claim before the Adjudicating Officer under Sections 71 and 72.",
      "The capital's signature problem is registration itself. Because Section 3 exempts projects of 500 square metres or less, or eight or fewer apartments, a large slice of Delhi's builder-floor stock in areas like South Extension, Lajpat Nagar, Rajouri Garden and Pitampura sits at or around the threshold — and many developers who should have registered simply did not. RERA Delhi entertains complaints about unregistered projects and can impose penalties reaching 10% of the estimated project cost under Section 59, which is real leverage against a small builder. Collaboration agreements — where a plot owner hands the land to a builder against a share of the floors — add a second layer: whether the builder is a 'promoter' under RERA, and who owes the buyer, is often the first fight.",
      "Winning an order is step one; collecting is step two. Amounts a promoter fails to pay are recoverable under Section 40(1) as arrears of land revenue through Delhi's revenue machinery — attachment included — and a promoter who wants to appeal to the Real Estate Appellate Tribunal for Delhi must first pre-deposit under the proviso to Section 43(5): the full amount ordered to the allottee, or at least 30% of any penalty. When RERA is the wrong or exhausted tool, Delhi buyers have unusual home-ground advantages: the NCDRC and Delhi's consumer commissions sit in the city for deficiency-of-service claims, the NCLT New Delhi benches take builder-insolvency petitions (homebuyers are financial creditors, acting as a class of 100 allottees or 10%), and writs go to the Delhi High Court.",
    ],
    courtsForThisMatter: [
      "Real Estate Regulatory Authority, NCT of Delhi — RERA Delhi (primary forum for Delhi projects)",
      "Adjudicating Officer, RERA Delhi (compensation claims under S.71–72)",
      "Real Estate Appellate Tribunal for Delhi (appeals; promoter pre-deposit under S.43(5))",
      "Delhi revenue authorities (execution of unpaid orders as arrears of land revenue, S.40)",
      "NCLT, New Delhi Benches (builder insolvency — homebuyers as financial creditors)",
      "Consumer Commissions — District, Delhi State Commission, NCDRC — and Delhi High Court (parallel routes and writs)",
    ],
    caseTypes: [
      { title: "Refund with Interest (S.18)", desc: "Exit a delayed Delhi project and recover every instalment paid, with interest at the prescribed rate." },
      { title: "Delay-Possession Interest", desc: "Keep the unit and charge the promoter monthly interest for the entire delay period." },
      { title: "Builder-Floor & Collaboration Disputes", desc: "Claims arising from builder floors and owner-builder collaboration agreements — Delhi's signature project type." },
      { title: "Unregistered-Project Complaints", desc: "Action against promoters who skipped S.3 registration, including S.59 penalties up to 10% of project cost." },
      { title: "Execution of RERA Orders", desc: "Recovering unpaid awards as arrears of land revenue through Delhi's revenue machinery." },
      { title: "Builder Insolvency (NCLT/IBC)", desc: "Representing allottee classes as financial creditors at the NCLT New Delhi benches." },
      { title: "Compensation Claims (S.71–72)", desc: "Rent, escalation and hardship compensation before the Adjudicating Officer, beyond delay interest." },
      { title: "Possession, Defects & Conveyance", desc: "Structural-defect claims within the five-year window, plan deviations, and stalled conveyance deeds." },
    ],
    faqs: [
      {
        question: "Where do I file a RERA complaint for a property in Delhi?",
        answer:
          "Before the Real Estate Regulatory Authority, NCT of Delhi (RERA Delhi) — the authority for projects located within the National Capital Territory. This is a common NCR confusion: a flat in Noida goes to UP RERA and one in Gurugram to Haryana RERA, whatever the builder's head office says. The complaint is filed online under Section 31 with a modest statutory fee; see our RERA complaint guide for the step-by-step procedure and document list.",
      },
      {
        question: "Should I take a refund or delay interest from my Delhi builder?",
        answer:
          "Section 18 gives you the choice, and it is genuinely strategic. A refund with prescribed interest suits a buyer who has lost faith in the project or the small developer behind it — common in Delhi's builder-floor market. Delay interest suits a buyer who still wants the property, especially where the location cannot be re-bought at today's prices. The arithmetic runs payment-by-payment from each instalment date, so have it computed before you elect.",
      },
      {
        question: "My builder floor was never registered with RERA. Can I still complain?",
        answer:
          "Usually, yes. Projects above 500 square metres or with more than eight apartments required registration, and many Delhi builder-floor developers ignored this. RERA Delhi takes complaints against unregistered projects and can levy a Section 59 penalty of up to 10% of the estimated project cost — often the strongest pressure available against a small promoter. If the project genuinely falls below the threshold, the consumer commission and a civil suit remain your forums.",
      },
      {
        question: "I bought a floor built under a collaboration agreement. Who do I proceed against?",
        answer:
          "Potentially both the builder and the landowner. In Delhi's collaboration model the plot owner contributes land and the builder constructs against a share of floors — and depending on who received your money and who signed your agreement, either or both can be 'promoters' under RERA with liability to you. Getting this right at the complaint stage matters, because an order against the wrong party is unexecutable. Bring the collaboration agreement itself to your first consultation if you can obtain it.",
      },
      {
        question: "The builder is not complying with the RERA Delhi order. How do I recover?",
        answer:
          "Apply for execution: amounts payable under the order are recoverable under Section 40(1) as arrears of land revenue, which puts Delhi's revenue machinery — including attachment — behind your award. If the promoter appeals to the Real Estate Appellate Tribunal for Delhi instead, the proviso to Section 43(5) forces a pre-deposit of the full amount ordered before the appeal is heard, which is why compliant settlement offers often appear at exactly that stage.",
      },
      {
        question: "Is the consumer court or NCLT ever better than RERA for a Delhi buyer?",
        answer:
          "Sometimes. Consumer commissions — with the NCDRC itself sitting in Delhi — remain open for deficiency-of-service claims and suit unregistered or below-threshold projects. If the builder is insolvent, RERA proceedings freeze under the moratorium and allottees pursue claims at the NCLT New Delhi benches as financial creditors, with a class of 100 buyers or 10% of allottees able to initiate insolvency. You cannot recover the same sum twice, so the forum is chosen once, deliberately, on the builder's solvency and your documents.",
      },
    ],
    localNotes: [
      "Delhi's market is builder floors and collaboration agreements, not townships — check the project's RERA registration status first, because the S.3 threshold (500 sq m / 8 apartments) decides whether RERA Delhi, the consumer forum, or a civil suit is your opening move.",
      "The S.43(5) pre-deposit before the Real Estate Appellate Tribunal for Delhi means a refund order in your favour is near-cash leverage — most promoters talk settlement rather than deposit and appeal.",
      "Delhi buyers litigate everything at home: RERA Delhi, the NCDRC, the NCLT New Delhi benches, NCLAT and the Delhi High Court are all within the city — no travelling bench problem, so escalation is cheap and fast.",
    ],
  },

  // ──────────────── DELHI × NCLT / INSOLVENCY (IBC) ────────────────
  "delhi__nclt-ibc": {
    lead:
      "Delhi is India's insolvency-litigation capital: the NCLT's Principal Bench and multiple New Delhi court benches, the NCLAT, and the IBBI all sit in the city, and every company registered with ROC Delhi litigates its corporate life here. NyaySevak connects you with Bar-Council-verified Delhi NCLT and insolvency lawyers who draft and answer Section 8 demand notices, file Section 7 and Section 9 petitions before the correct New Delhi court bench, represent you in the committee of creditors, and run oppression-mismanagement and merger-scheme petitions end to end.",
    landscape: [
      "Territorial jurisdiction under the IBC follows the corporate debtor's registered office, and for companies registered in the NCT of Delhi that means the NCLT's New Delhi benches — the Principal Bench and its companion court benches sitting in the capital. The practical consequence is density: Delhi hears more insolvency and company-law matters than any other station, listing is heavy, and matters are distributed across courts by roster, so knowing which court your petition lands in — and its pace — is part of strategy. Appeals go to the NCLAT, also in New Delhi, and from there to the Supreme Court, which means a Delhi corporate dispute can travel its entire appellate life within a few kilometres.",
      "For a creditor, the machine starts with the debt. An operational creditor owed ₹1 crore or more serves a Section 8 demand notice; the corporate debtor has 10 days to pay or place a pre-existing dispute on record — and under the Mobilox standard even a plausible, genuinely pre-existing dispute defeats the subsequent Section 9 petition at admission. Financial creditors proceed under Section 7 on proof of default, with homebuyer classes qualifying subject to the 100-allottee-or-10% rule. Admission triggers the Section 14 moratorium and hands management to a resolution professional, which is exactly why so many petitions convert into payment before that point; once CIRP runs, a Section 12A withdrawal needs the applicant's request plus 90% committee-of-creditors approval.",
      "The NCLT's Delhi docket is far wider than insolvency. Founder and shareholder wars in Delhi companies come as oppression-and-mismanagement petitions under Sections 241–242 of the Companies Act, where interim orders — status quo on shareholding, restraints on board action — are usually the real battlefield. Mergers, demergers and capital reductions of ROC-Delhi companies proceed as scheme petitions under Sections 230–232. Promoters face two further fronts the capital sees constantly: personal-guarantor proceedings, enforceable before the NCLT since the Supreme Court's Lalit Kumar Jain ruling (2021), and avoidance actions reaching back into preferential, undervalued and fraudulent pre-insolvency transactions. MSME debtors have the pre-packaged insolvency route as a management-retaining alternative.",
    ],
    courtsForThisMatter: [
      "NCLT — Principal Bench and New Delhi court benches (CIRP and company petitions for Delhi-registered companies)",
      "NCLAT, New Delhi (appeals from NCLT orders across India)",
      "Supreme Court of India (appeals from the NCLAT on questions of law)",
      "Delhi High Court (writs touching insolvency and company matters)",
      "Commercial Courts, Delhi districts / Delhi HC Original Side (parallel civil recovery)",
      "Debts Recovery Tribunals, Delhi (bank recovery tracks running alongside the IBC)",
    ],
    caseTypes: [
      { title: "Operational-Creditor Recovery (S.8/S.9)", desc: "Demand notice, the 10-day dispute window, and Section 9 filing — settlement pressure for ₹1 crore+ trade debts." },
      { title: "Financial-Creditor Petitions (S.7)", desc: "Default-based CIRP initiation for banks, NBFCs, bondholders and qualifying homebuyer classes." },
      { title: "CIRP Defence & S.12A Withdrawal", desc: "Contesting admission on pre-existing dispute or default, and exiting CIRP once settlement is struck." },
      { title: "Claims, CoC & Resolution Plans", desc: "Claim filing with the RP, committee-of-creditors strategy, and objections to resolution plans." },
      { title: "Oppression & Mismanagement (S.241–242)", desc: "Founder, investor and family-shareholder disputes over control, dilution and board exclusion." },
      { title: "Mergers & Schemes (S.230–232)", desc: "Scheme petitions for mergers, demergers and restructurings of ROC-Delhi companies." },
      { title: "Personal Guarantors to Corporate Debtors", desc: "Prosecuting and defending guarantee enforcement before the NCLT after Lalit Kumar Jain." },
      { title: "Avoidance & Fraudulent-Trading Actions", desc: "Preferential, undervalued and fraudulent-transaction proceedings reaching into pre-insolvency dealings." },
    ],
    faqs: [
      {
        question: "Which NCLT bench hears cases against a Delhi company?",
        answer:
          "The NCLT at New Delhi — jurisdiction follows the corporate debtor's registered office, so a company registered with ROC Delhi litigates before the Principal Bench or one of the New Delhi court benches, allocated by roster. Note the mirror-image trap: a business that operates from Delhi but is registered in Haryana or UP belongs to a different bench entirely. Pull the registered office from the MCA master data before drafting anything.",
      },
      {
        question: "A Delhi company owes my firm more than ₹1 crore. Is the NCLT worth it?",
        answer:
          "For undisputed trade debts, it is often the sharpest tool available. A Section 8 demand notice starts a 10-day clock; if the debtor neither pays nor shows a genuinely pre-existing dispute, a Section 9 petition follows — and because admission means a moratorium and loss of the company to a resolution professional, a large fraction of these matters pay out before or at admission. See our NCLT and IBC guide for how the notice, reply and petition fit together.",
      },
      {
        question: "We received a Section 8 demand notice. How do we respond?",
        answer:
          "Within 10 days, in writing, with evidence — this window decides the case. If a real dispute about the debt existed before the notice arrived (rejected deliverables, quality correspondence, a pending arbitration or suit), the reply must document it; under the Mobilox standard a plausible pre-existing dispute defeats the Section 9 petition at the threshold. A silent or bare-denial reply is how solvent Delhi companies end up fighting admission hearings they should never have faced.",
      },
      {
        question: "My debt is below ₹1 crore. What are my options against a Delhi debtor?",
        answer:
          "The IBC door is closed below the threshold, but Delhi offers strong alternatives: a summary suit under Order XXXVII, a Commercial Courts Act claim in the district commercial courts (or the Delhi High Court's Original Side for suits above ₹2 crore), arbitration where the contract provides it, and a Section 138 NI Act prosecution if cheques bounced. These tracks can run in combination — our money recovery guide maps which sequence fits which debtor.",
      },
      {
        question: "What happens to my company the moment a CIRP petition is admitted?",
        answer:
          "Three things at once: a Section 14 moratorium freezes suits, executions and enforcement against the company; an interim resolution professional displaces the board and takes over management; and creditors file claims that form a committee of creditors which controls the company's fate. Promoters wanting the company back must settle and apply under Section 12A, which needs 90% CoC approval — far easier to negotiate before admission than after. Early, realistic settlement strategy is usually worth more than a heroic defence.",
      },
      {
        question: "Can the NCLT in Delhi hear a fight between company founders?",
        answer:
          "Yes — that is the other half of its docket. Petitions under Sections 241–242 of the Companies Act address oppression and mismanagement: a co-founder removed from the board, shareholding diluted through a rigged allotment, business diverted to a parallel entity. Eligibility thresholds apply (broadly 10% of members or shareholding, relaxable by the tribunal), and the decisive phase is usually interim relief that freezes shareholding and board action while the petition is heard.",
      },
    ],
    localNotes: [
      "Delhi is the only city where the NCLT's Principal Bench, the NCLAT, the IBBI and the Supreme Court all sit — a Delhi insolvency can run its full appellate course without leaving town, and the bar here is correspondingly deep and specialised.",
      "Registered office, not head office, fixes the bench: Delhi-operating companies registered in Haryana or UP do not belong at NCLT New Delhi — verify against MCA master data before filing.",
      "The two highest-leverage documents in IBC practice are the Section 8 notice and the 10-day reply — a precise notice extracts payment without a petition, and a documented pre-existing dispute kills one at admission.",
    ],
  },

  // ──────────────── DELHI × COMPANY REGISTRATION ────────────────
  "delhi__company-registration": {
    lead:
      "Delhi is where India incorporates for access — to ministries, embassies, regulators, and the country's densest professional-services market — from Connaught Place holding companies to Okhla and Nehru Place startups and the liaison offices of foreign giants. NyaySevak connects you with Bar-Council-verified Delhi company-registration lawyers who take your Private Limited, LLP, OPC or foreign subsidiary through SPICe+ under ROC Delhi, paper the founders' and shareholders' arrangements before the first disagreement, and install the post-incorporation compliance calendar so nothing is missed in the first 180 days.",
    landscape: [
      "Every Delhi incorporation runs through two registries at once: the MCA's Central Registration Centre, which processes the SPICe+ form online, and the Registrar of Companies, NCT of Delhi & Haryana, on whose register the company lives afterwards. SPICe+ bundles name reservation, DIN for new directors, PAN, TAN, EPFO, ESIC and optional GST into one filing, with stamp duty on the memorandum and articles auto-computed at NCT-of-Delhi rates. Choice of vehicle comes before any form: a Private Limited for anyone raising capital or issuing ESOPs, an LLP (via FiLLiP) for professional and services firms, an OPC for solo founders. Where the entity later fights or restructures, its forum is the NCLT's New Delhi benches — conveniently, in the same city.",
      "The capital's incorporation practice has a distinctly international cast. As the diplomatic and policy capital, Delhi hosts wholly-owned subsidiaries of foreign parents — needing apostilled parent documents, a resident Indian director, sectoral FDI-route checks, and FC-GPR reporting through the AD bank within 30 days of share allotment — alongside two structures rarer elsewhere: liaison offices and branch offices of foreign companies, approved through the AD-bank/RBI route under FEMA rather than incorporated at all. Choosing between a subsidiary, branch and liaison office is a tax and permissible-activity decision, not a formality. For domestic founders, co-working registered offices in Connaught Place, Nehru Place, Okhla and Dwarka are routine — the operator's NOC plus a recent utility bill satisfy the ROC.",
      "Incorporation day starts the compliance clock. Within 30 days: the first auditor and the first board meeting. Within 60 days: share certificates to subscribers. Within 180 days: the INC-20A declaration of commencement, before which the company can neither trade nor borrow — the most commonly missed filing we see. Alongside sit GST registration where applicable and registration under the Delhi Shops and Establishments Act with the GNCTD labour department for the actual workplace. The legal work that pays for itself, though, happens before the CRC ever sees a form: founders' and shareholders' agreements with vesting, IP assignment and exit mechanics — because a startup that skips them is drafting its future Section 241 petition instead.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, NCT of Delhi & Haryana / MCA Central Registration Centre (SPICe+ processing)",
      "NCLT, New Delhi Benches (company petitions, mergers, oppression-mismanagement for Delhi companies)",
      "RBI / AD-bank route (FEMA reporting for subsidiaries; branch and liaison-office approvals)",
      "GST authorities, Delhi (registration and disputes)",
      "Labour Department, Govt. of NCT of Delhi (Shops & Establishments registration)",
      "Delhi High Court (writs and company appeals)",
    ],
    caseTypes: [
      { title: "Pvt Ltd / LLP / OPC Incorporation", desc: "Entity selection, name strategy, SPICe+ or FiLLiP filing, and MoA/AoA drafted around your cap table." },
      { title: "Foreign Subsidiary Incorporation", desc: "WOS setup for foreign parents — apostilled documents, resident director, FDI checks, FC-GPR within 30 days." },
      { title: "Liaison & Branch Offices", desc: "FEMA-route establishment of LO/BO presences for foreign companies — Delhi's signature structure." },
      { title: "Founders' & Shareholders' Agreements", desc: "Vesting, IP assignment, deadlock and exit clauses signed at incorporation, while they are cheap." },
      { title: "Post-Incorporation Compliance", desc: "First auditor and board meeting (30 days), share certificates (60), INC-20A (180), GST, Shops & Establishments." },
      { title: "Startup & ESOP Structuring", desc: "ESOP pools, DPIIT Startup-India recognition, and investor-readiness cleanup before the first term sheet." },
      { title: "Conversions & Restructuring", desc: "Proprietorship or partnership to Pvt Ltd, LLP-company conversions, share transfers and capital changes." },
    ],
    faqs: [
      {
        question: "Which ROC will my Delhi company be registered with, and do I need to visit it?",
        answer:
          "The Registrar of Companies, NCT of Delhi & Haryana — but you will likely never set foot there, because the SPICe+ form is processed centrally and online by the MCA's Central Registration Centre. Stamp duty is charged automatically at NCT-of-Delhi rates inside the form. What matters is a defect-free filing: a name clash or a bad registered-office proof is what actually turns a two-week incorporation into a two-month one.",
      },
      {
        question: "What documents do I need to register a company in Delhi?",
        answer:
          "For each director and subscriber: PAN, identity and address proof, a photograph, and DSC (digital signature). For the registered office: proof of the premises plus the owner's or operator's NOC and a utility bill not older than two months. Foreign shareholders' documents need apostille or consular attestation. Add the MoA and AoA — worth drafting to your deal, not copying from a template. Our company-registration documents guide carries the complete checklist with formats.",
      },
      {
        question: "Private Limited or LLP — which is right for a Delhi startup?",
        answer:
          "If venture funding or ESOPs are anywhere in your plan, incorporate a Private Limited — institutional investors do not put money into LLPs. If you are a services or professional firm optimising for light compliance and pass-through economics, an LLP is often the better home. Conversion later is possible but slow and tax-sensitive, so decide on your five-year plan, not this year's convenience. Our Pvt-Ltd-vs-LLP guide runs the comparison line by line.",
      },
      {
        question: "Can I register my company at a co-working space in Connaught Place or Nehru Place?",
        answer:
          "Yes. A co-working or serviced-office address is a valid registered office if you attach the space operator's NOC and a recent utility bill for the premises to the SPICe+ filing — a large share of Delhi startups register exactly this way in Connaught Place, Nehru Place, Okhla and Dwarka. Two continuing duties: display the company name and CIN at the premises, and file INC-22 promptly if you later move.",
      },
      {
        question: "We are a foreign company entering India via Delhi. Subsidiary, branch or liaison office?",
        answer:
          "Three genuinely different animals. A wholly-owned subsidiary is a full Indian company that can trade and hire freely, with FDI-route checks and FC-GPR reporting within 30 days of allotment. A branch office can conduct the parent's business within RBI-permitted activities; a liaison office can only represent and communicate — no revenue. Branch and liaison offices are approved through your AD bank under FEMA, not incorporated. Delhi, as the diplomatic and MNC capital, sees all three daily; the choice is driven by tax and permitted activity.",
      },
      {
        question: "What must a new Delhi company file in its first six months?",
        answer:
          "The sequence is fixed: first board meeting and first-auditor appointment within 30 days, share certificates to subscribers within 60 days, and the INC-20A declaration of commencement within 180 days — before INC-20A the company cannot start business or borrow, and missing it invites penalties and even strike-off. Layer on GST registration where turnover or activity requires it and Delhi Shops & Establishments registration for your workplace. If founders haven't signed a founders' agreement yet, do it now — our co-founders agreement guide explains what it must contain.",
      },
    ],
    localNotes: [
      "A Delhi-registered company's dispute forum is the NCLT's New Delhi benches, in the same city as the ROC, the NCLAT and the Delhi High Court — unlike Gurgaon or Noida companies, which litigate at Chandigarh or Allahabad-side forums.",
      "Liaison and branch offices of foreign companies are a Delhi speciality — they are FEMA approvals through your AD bank, not incorporations, and choosing the wrong structure creates permanent-establishment tax exposure that is expensive to unwind.",
      "The INC-20A declaration (180 days) is the filing new Delhi founders miss most — the company cannot legally trade or borrow before it, so calendar it on incorporation day along with the 30-day auditor and 60-day share-certificate deadlines.",
    ],
  },

  // ──────────────── NOIDA × COMPANY REGISTRATION ────────────────
  "noida__company-registration": {
    lead:
      "Noida is Uttar Pradesh's technology and startup capital — IT/ITES campuses in Sector 62, gaming and product companies along the Sector 127–135 Expressway corridor, and a deep manufacturing base in the Authority's industrial sectors. Incorporating here involves one decision Delhi and Gurgaon founders never face: whether your registered office should sit in UP, because that line in SPICe+ fixes your ROC at Kanpur and your NCLT at Allahabad. NyaySevak connects you with Bar-Council-verified Noida company-registration lawyers who structure that choice, run SPICe+ end to end, and paper the founder documents so the company is funding-ready from day one.",
    landscape: [
      "The filing itself is central, the consequences are local. SPICe+ applications are processed online by the MCA's Central Registration Centre, and a company with a Noida registered office is placed on the register of the Registrar of Companies, Kanpur — the ROC for Uttar Pradesh — with stamp duty on the MoA and AoA auto-computed at UP rates inside the form. The integrated filing bundles name reservation, DIN, PAN, TAN, EPFO, ESIC, optional GST and bank-account opening, and a defect-free application typically clears in one to two weeks. The quieter consequence arrives later: company petitions, mergers and shareholder disputes for UP-registered companies are heard by the NCLT's Allahabad bench at Prayagraj, roughly 600 km from your Noida office.",
      "That is why the registered-office question deserves an honest conversation before you file. Many Noida founders deliberately take a registered office across the border in Delhi — a co-working or virtual-office address with the operator's NOC and a utility bill satisfies the ROC — which puts them under the Registrar of Companies, Delhi, and gives them the NCLT New Delhi benches for any future dispute or scheme. The trade-off is real on both sides: a Delhi office means Delhi GST registration and professional-tax geography that may not match where your team actually sits, while a UP office keeps state registrations aligned with operations but accepts the Allahabad forum. Shifting the registered office between states later is possible, but it needs Regional Director approval and months of process — deciding correctly at incorporation is far cheaper.",
      "Noida adds two local layers. First, premises: most commercial and industrial plots are held on lease from the Noida, Greater Noida or Yamuna Expressway authorities, so using leased Authority premises as a registered office or business address should be checked against the lease deed's permitted use and sub-letting conditions — functional-mix violations invite Authority notices. Second, the state ecosystem: DPIIT Startup-India recognition pairs with the UP startup policy's incentives, and both reward clean incorporation paperwork. After incorporation, the calendar runs regardless of geography: first auditor within 30 days, the INC-20A commencement declaration within 180 days, share certificates within 60 days, UP GST registration, and registration under the UP Shops and Commercial Establishments Act for offices in Noida's sectors.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Kanpur / MCA Central Registration Centre (SPICe+ processing for UP-registered companies)",
      "NCLT, Allahabad Bench (company petitions, mergers, disputes for UP-registered companies)",
      "Registrar of Companies, Delhi & NCLT New Delhi Benches (where a Delhi registered office is chosen)",
      "Regional Director, Northern Region, MCA (name appeals; inter-state shifting of registered office)",
      "GST & State Tax authorities, Uttar Pradesh (registration and disputes)",
      "Labour Department, Uttar Pradesh (Shops & Commercial Establishments registration)",
    ],
    caseTypes: [
      { title: "Private Limited / LLP / OPC Incorporation", desc: "Entity choice, name reservation, SPICe+ or FiLLiP filing, and MoA/AoA drafted around your cap table." },
      { title: "Registered-Office Strategy (UP vs Delhi)", desc: "Structuring the ROC Kanpur / NCLT Allahabad versus ROC Delhi / NCLT New Delhi trade-off before you file." },
      { title: "Founders' & Co-Founders' Agreements", desc: "Vesting, IP assignment, deadlock and exit clauses signed at incorporation — when agreement is still easy." },
      { title: "Startup Recognition & Structuring", desc: "DPIIT Startup-India recognition, UP startup-policy benefits, ESOP pools and investor-readiness cleanup." },
      { title: "Noida Authority Premises Compliance", desc: "Vetting lease-deed permitted use, sub-lease and functional-mix conditions before an Authority plot becomes your office." },
      { title: "Post-Incorporation Compliance", desc: "First auditor (30 days), INC-20A (180 days), share certificates, UP GST and Shops & Establishments registrations." },
      { title: "Conversions & Restructuring", desc: "Proprietorship or partnership to Pvt Ltd, LLP-company conversions, share transfers and capital changes." },
    ],
    faqs: [
      {
        question: "Which ROC registers a company with a Noida office?",
        answer:
          "The Registrar of Companies, Kanpur — Uttar Pradesh companies do not fall under ROC Delhi. The filing itself is fully online through the MCA's Central Registration Centre, so you never visit Kanpur; SPICe+ applies UP stamp duty automatically. The registration also fixes your tribunal: disputes, mergers and petitions for UP-registered companies go to the NCLT's Allahabad bench. That downstream forum, not the filing mechanics, is what should drive your registered-office decision.",
      },
      {
        question: "Should my startup register in Noida or take a Delhi registered office instead?",
        answer:
          "Both are legitimate, and Noida founders genuinely split on this. A UP registered office keeps GST, labour registrations and state incentives aligned with where your team works, and qualifies you for UP startup-policy benefits — but accepts ROC Kanpur and, more importantly, the NCLT Allahabad bench for any future shareholder dispute or merger. A Delhi registered office buys the New Delhi NCLT and Delhi's professional ecosystem at the cost of a split between registered and operational addresses. Decide once, at incorporation — shifting states later needs Regional Director approval and months.",
      },
      {
        question: "Can I use a co-working space in Sector 62 or Sector 135 as my registered office?",
        answer:
          "Yes. A co-working or serviced-office seat qualifies as a registered office provided the operator issues an NOC, you hold a recent utility bill for the premises, and the company's name is displayed there. One Noida-specific check: many commercial buildings stand on Noida Authority leasehold plots, so confirm the operator's lease permits the use — Authority-side irregularities are the operator's problem in theory, but they become yours when a bank or investor runs diligence on your address.",
      },
      {
        question: "Private Limited or LLP for a Noida business?",
        answer:
          "If you intend to raise venture funding, issue ESOPs, or sell to enterprise customers who diligence their vendors, a Private Limited is the practical answer — investors rarely fund LLPs. An LLP fits agencies, consultancies and professional firms that want limited liability with lighter annual compliance. Tax and conversion mechanics differ enough that the choice deserves twenty minutes of real analysis, not a template — our Pvt-Ltd-vs-LLP guide walks through the full comparison.",
      },
      {
        question: "What documents do I need, and how long does incorporation take?",
        answer:
          "For each director and subscriber: PAN, identity and address proof, a photograph, and a DSC; for the registered office: the ownership proof or rent agreement, the owner's or operator's NOC, and a utility bill not older than two months. A clean SPICe+ filing generally completes in 7–14 days; name conflicts and defective address proofs cause nearly all rejections. Our company-registration documents guide has the complete checklist, including the foreign-director apostille requirements.",
      },
      {
        question: "What compliance hits immediately after incorporation?",
        answer:
          "Four Companies Act deadlines: appoint the first auditor within 30 days, hold the first board meeting within 30 days, issue share certificates within 60 days, and file the INC-20A commencement declaration within 180 days — before which the company cannot begin business or borrow. Then the UP layer: GST registration in Uttar Pradesh if you cross thresholds or sell inter-state, and registration under the UP Shops and Commercial Establishments Act for your Noida office. A missed INC-20A remains the most common avoidable penalty we see.",
      },
    ],
    localNotes: [
      "A Noida registered office means ROC Kanpur and the NCLT Allahabad bench; a Delhi address means ROC Delhi and NCLT New Delhi — this forum consequence, decided at incorporation, is the single most under-weighted choice Noida founders make.",
      "Most Noida commercial premises sit on Authority leasehold — check the lease's permitted-use and sub-letting clauses before anchoring your registered office there, because Authority notices surface at the worst diligence moments.",
      "UP startup-policy incentives and DPIIT recognition stack for UP-registered entities — if you take a Delhi office for forum reasons, you are consciously trading those away.",
    ],
  },

  // ──────────────── NOIDA × NCLT / INSOLVENCY (IBC) ────────────────
  "noida__nclt-ibc": {
    lead:
      "Noida knows the NCLT better than almost any city in India — Jaypee Infratech's insolvency ran for years at the Allahabad bench, Amrapali's collapse went all the way to the Supreme Court, and thousands of local MSMEs use the IBC as their sharpest recovery tool against defaulting corporate buyers. NyaySevak connects you with Bar-Council-verified NCLT and insolvency lawyers for Noida businesses and homebuyers who serve and answer demand notices, file Section 7 and Section 9 petitions at the correct bench, and represent you in the committee of creditors where recoveries are actually decided.",
    landscape: [
      "Everything starts with the debtor's registered office, and for Noida this is where geography bites. A company registered in Uttar Pradesh — including most Noida-incorporated entities — litigates at the NCLT's Allahabad bench in Prayagraj, roughly 600 km away, with the travel, local-counsel coordination and listing realities that distance implies; matters there compete for time on a bench that serves the entire state. A debtor whose registered office is in Delhi, as many Noida-operating companies deliberately arranged at incorporation, goes to the NCLT New Delhi benches instead. Appeals from both routes converge at the NCLAT in New Delhi. Before drafting anything, pull the debtor's master data from the MCA portal — Noida signage tells you nothing about which bench you are headed to.",
      "For creditors, the statute's pressure works the same at either bench. An operational creditor owed ₹1 crore or more serves a Section 8 demand notice; the debtor has 10 days to pay or demonstrate a pre-existing dispute, after which a Section 9 petition lies — and the prospect of admission, a moratorium and a resolution professional displacing the promoters settles a large share of matters before they are ever admitted. Financial creditors file under Section 7 on proof of default. Once CIRP begins, deadlines rule: claims must reach the resolution professional in form and on time, and committee-of-creditors participation determines what a resolution plan actually pays you. A settlement after admission is still possible, but Section 12A withdrawal needs the approval of 90% of the CoC — far harder than settling before admission.",
      "Noida's signature pattern is builder insolvency. Jaypee Infratech was fought at NCLT Allahabad through multiple resolution rounds; Amrapali's homebuyers reached the Supreme Court, which took over the projects and put NBCC in charge of completion — two different routes to the same rescue problem. Homebuyers rank as financial creditors under the IBC, but must move as a class: at least 100 allottees or 10% of a project's buyers, whichever is less, to file a Section 7 petition. The moment a moratorium starts, UP RERA proceedings and recovery-certificate execution against that builder freeze, and buyers must re-file their claims with the resolution professional. Beyond insolvency, founder and shareholder fights in Noida's startup and family-business world proceed as oppression-and-mismanagement petitions under Sections 241–242 of the Companies Act, at the same registered-office-determined bench.",
    ],
    courtsForThisMatter: [
      "NCLT, Allahabad Bench (CIRP and company petitions for UP-registered companies)",
      "NCLT, New Delhi Benches (Delhi-registered debtors operating from Noida)",
      "NCLAT, New Delhi (appeals from NCLT orders)",
      "Supreme Court of India (appeals on questions of law; the Amrapali-style extraordinary intervention)",
      "Commercial Court, Gautam Buddh Nagar (parallel civil-recovery suits below or alongside the IBC)",
      "UP RERA / District Magistrate, Gautam Buddh Nagar (pre-moratorium builder remedies that freeze during CIRP)",
    ],
    caseTypes: [
      { title: "Operational-Creditor Recovery (S.8/S.9)", desc: "Demand notice, the 10-day dispute window, and Section 9 petitions for ₹1 crore+ trade and vendor debts." },
      { title: "Financial-Creditor Petitions (S.7)", desc: "Default-based CIRP initiation for lenders, NBFCs and assignees of financial debt." },
      { title: "Homebuyer Class Petitions", desc: "Assembling the 100-or-10% allottee class and filing Section 7 against defaulting Noida builders." },
      { title: "CIRP Defence & S.12A Withdrawal", desc: "Contesting debt and default at admission, and structured withdrawal once a settlement is reached." },
      { title: "Claims & Committee of Creditors", desc: "Claim filing with the resolution professional, CoC representation and resolution-plan objections." },
      { title: "Oppression & Mismanagement (S.241–242)", desc: "Founder exclusion, dilution and control disputes in UP-registered companies, at the Allahabad bench." },
      { title: "Personal Guarantors & Avoidance Actions", desc: "Defending promoters on personal guarantees and in preferential and undervalued-transaction proceedings." },
      { title: "RERA–IBC Interface Strategy", desc: "Sequencing UP RERA execution against moratorium risk, and re-filing buyer claims once CIRP begins." },
    ],
    faqs: [
      {
        question: "Which NCLT bench hears a case against a Noida company?",
        answer:
          "The bench follows the registered office on the MCA record. UP-registered companies — most entities incorporated with a Noida address — are litigated at the NCLT Allahabad bench in Prayagraj; companies that took a Delhi registered office go to the NCLT New Delhi benches. Appeals from both lie to the NCLAT at New Delhi. Verify the master data before drafting: the practical cost of the Allahabad forum (distance, listing pace, local-counsel coordination) should shape your settlement strategy from day one.",
      },
      {
        question: "A company owes my Noida business more than ₹1 crore. Is the NCLT worth it?",
        answer:
          "Usually, yes — as pressure even more than as process. A precise Section 8 demand notice starts a 10-day clock; if the debtor neither pays nor shows a pre-existing dispute, your Section 9 petition threatens the promoters with losing the company to a resolution professional, which is why so many of these matters settle around admission. For debts under ₹1 crore, the Commercial Court at Gautam Buddh Nagar, arbitration or a summary suit carry the load — our NCLT/IBC and money-recovery guides map when each track fits.",
      },
      {
        question: "My builder has entered insolvency. What happens to my UP RERA case?",
        answer:
          "It freezes. The Section 14 moratorium halts UP RERA proceedings and recovery-certificate execution against the corporate debtor, and your remedy shifts to the CIRP: file your claim with the resolution professional within the deadline, in the prescribed homebuyer form, with your builder-buyer agreement and payment proofs. Missing the claim window can leave you outside the resolution plan. The RERA order you already hold still evidences your debt — it just cannot be executed against the builder while the moratorium runs.",
      },
      {
        question: "Can homebuyers themselves push a Noida builder into insolvency?",
        answer:
          "Yes — homebuyers are financial creditors — but only as a class: at least 100 allottees of the project or 10% of its total buyers, whichever is less, must join a Section 7 petition. Building that group across a stalled Noida tower is organisational work as much as legal work, and the threshold is tested at filing. The class route is well-trodden here: Noida and Greater Noida's stalled projects produced the case law, from Jaypee at NCLT Allahabad to Amrapali's Supreme Court-monitored completion.",
      },
      {
        question: "We received a Section 8 demand notice. How do we respond?",
        answer:
          "Treat the 10-day window as decisive. If a genuine dispute existed before the notice arrived — quality claims in writing, debit notes, pending arbitration or litigation — your reply must raise it with documents, because a real pre-existing dispute defeats the Section 9 petition at the threshold. If the debt is undisputed, use the window to negotiate: settling before admission is a commercial exercise, while settling after admission requires Section 12A withdrawal with 90% committee-of-creditors approval, on someone else's timetable.",
      },
      {
        question: "Is the Allahabad bench really a problem, or just an inconvenience?",
        answer:
          "It is a real strategic factor, not a disqualifier. Every hearing means Prayagraj travel or a local-counsel arrangement, listing timelines reflect a bench serving all of Uttar Pradesh, and urgent interim relief takes more logistical planning than a Delhi filing. Creditors should build that friction into settlement pricing; debtors sometimes benefit from it. And for founders incorporating now, it is the strongest argument some make for a Delhi registered office — a choice covered honestly in our NCLT/IBC guide.",
      },
    ],
    localNotes: [
      "Bench geography is strategy: UP-registered debtors mean NCLT Allahabad — roughly 600 km away — so price the travel, local-counsel and listing friction into every demand, defence and settlement number.",
      "Builder insolvency is Noida's defining IBC pattern — the Jaypee (NCLT Allahabad) and Amrapali (Supreme Court/NBCC) sagas set the playbook, and timely claim filing with the resolution professional is what protects an individual buyer inside it.",
      "Hold a UP RERA recovery certificate? Execute it aggressively before any moratorium lands — once CIRP begins, the DM's recovery machinery stops and you stand in the creditors' queue instead.",
    ],
  },

  // ──────────────── NOIDA × MUTUAL CONSENT DIVORCE (S.13B HMA) ────────────────
  "noida__mutual-consent-divorce": {
    lead:
      "For Noida's IT professionals, dual-career couples and NRI families, mutual consent divorce under Section 13B of the Hindu Marriage Act is the dignified exit: two motions before the Family Court at Surajpur, one comprehensive settlement, no years of trench warfare. Done well, the paperwork — not the courtroom — decides everything. NyaySevak connects you with Bar-Council-verified Noida mutual-consent-divorce lawyers who negotiate and draft the settlement deed, choose the right forum when more than one is available, and manage cooling-off waivers and video-conference appearances so the process fits real lives and real postings abroad.",
    landscape: [
      "The statute asks for three things: one year of living separately, a joint conviction that the marriage cannot continue, and consent that survives until the decree. For couples filing locally, the forum is the Family Court, Gautam Buddh Nagar, at the Surajpur district court complex in Greater Noida. The first motion places the complete settlement on record and the court examines both spouses; the second motion, after the statutory interregnum, produces the decree. The six-month cooling-off period is directory, not mandatory — following Amardeep Singh v. Harveen Kaur (2017), the Surajpur Family Court can waive it where the separation is already long, mediation has failed or is pointless, and every issue stands settled, compressing the whole matter into a couple of months.",
      "Forum choice is a genuine Noida question, because Section 13B petitions can be filed where the marriage was solemnised, where the couple last resided together, or where the wife currently resides. A couple who married in Kanpur, lived in a Sector 137 flat, and where the wife has since moved to her parents' home in Delhi may lawfully choose between three courts — and the practical differences (listing speed, commute, a judge's waiver practice) are worth weighing rather than defaulting to the nearest address. Couples married under the Special Marriage Act follow the parallel two-motion route under Section 28 of that Act. Whichever forum you pick, both spouses must personally satisfy the judge of their free consent at both motions.",
      "Noida's demographic shapes the practice: one spouse is very often posted in Bengaluru, the US or Europe mid-proceedings. Family Courts routinely permit appearance through video-conferencing for a spouse abroad, and a well-sequenced matter needs at most one India trip. The settlement deed carries the whole load — permanent alimony and its payment schedule, custody and visitation in enforceable detail, return of stridhan, division of the jointly financed flat (often itself tangled in a builder delay), and closure of every pending case. Where a 498A or DV Act complaint is pending, the deed provides for withdrawal or quashing — and for Gautam Buddh Nagar FIRs, quashing means a petition at the Allahabad High Court, so the payment sequencing must account for that extra step. The court-annexed mediation centre at Surajpur regularly converts contested filings into this kind of package.",
    ],
    courtsForThisMatter: [
      "Family Court, Gautam Buddh Nagar — Surajpur district court complex (S.13B first and second motions)",
      "Allahabad High Court (appeals; quashing of settled 498A and connected FIRs)",
      "Mediation Centre, Gautam Buddh Nagar (converting contested matters into consent terms)",
      "Magistrate Courts, Gautam Buddh Nagar (closure of maintenance and DV Act proceedings on settlement)",
      "Family Courts in Delhi or the marriage/home town (alternative forums where S.13B jurisdiction lies)",
      "Supreme Court of India (transfer petitions between states; Article 142 dissolution in rare cases)",
    ],
    caseTypes: [
      { title: "S.13B Joint Petition & Both Motions", desc: "Drafting, filing and appearing at the first and second motions with consent recorded correctly." },
      { title: "Cooling-Off Waiver", desc: "Amardeep Singh applications to waive the six-month interregnum where separation is long and terms are complete." },
      { title: "Settlement Deed & Alimony Structuring", desc: "One-time alimony, stridhan return and property division drafted to be final, staged and enforceable." },
      { title: "Custody & Visitation Terms", desc: "Parenting schedules, relocation and schooling clauses detailed enough to prevent future guardianship rounds." },
      { title: "NRI & Video-Conference Matters", desc: "VC appearances and travel-efficient sequencing for spouses posted abroad or in other cities." },
      { title: "Closure of 498A / DV / Maintenance Cases", desc: "Withdrawals before GB Nagar courts and quashing petitions at the Allahabad High Court as part of the package." },
      { title: "Forum Selection & Transfer", desc: "Choosing between Surajpur, Delhi and home-town Family Courts — and Supreme Court transfers where needed." },
    ],
    faqs: [
      {
        question: "Where do we file for mutual consent divorce if we live in Noida?",
        answer:
          "The default forum is the Family Court, Gautam Buddh Nagar, at the Surajpur complex in Greater Noida — that is where a couple whose last shared home was in Noida files. But Section 13B jurisdiction also lies where the marriage was solemnised and where the wife now resides, so many Noida couples can legitimately choose a Delhi Family Court or their home-town court instead. When multiple forums are available, pick on practicalities — listing speed, commute for both spouses, and the court's approach to cooling-off waivers.",
      },
      {
        question: "How long will it take at the Gautam Buddh Nagar Family Court?",
        answer:
          "The statutory frame is two motions with a six-to-eighteen-month gap, so an unassisted timeline runs about seven to nine months including service and listing. With an Amardeep Singh waiver — realistic where you have already been separated well beyond a year and the settlement is complete — the gap can be dispensed with and matters conclude in roughly six to ten weeks. The waiver is discretionary, so the petition and deed must demonstrate that reconciliation is genuinely dead, not merely assert it.",
      },
      {
        question: "My spouse works in the US. Must they fly to India twice?",
        answer:
          "Usually not. Family Courts accept appearance through video-conferencing for a spouse abroad, particularly at one of the two motions, and courts have in limited circumstances allowed a special power-of-attorney holder to act procedurally. What cannot be delegated is consent itself — the judge must be satisfied that each spouse freely consents at both stages. A well-planned NRI matter is sequenced around leave dates and time zones so that at most one trip is needed; our mutual-consent-divorce guide covers the VC mechanics step by step.",
      },
      {
        question: "What exactly should our settlement cover before we file?",
        answer:
          "Everything either of you could ever litigate: the alimony figure (or mutual waiver) with a payment schedule tied to the two motions, custody and visitation with real detail — holidays, relocation, schooling — return of stridhan and jewellery, division or buyout of the jointly financed flat, treatment of joint loans and accounts, and closure of every pending case between the families. In Noida the flat often carries a builder-delay complication; decide who keeps the RERA claim too. The deed filed with the first motion is the transaction — the hearings only confirm it.",
      },
      {
        question: "There is a 498A FIR pending in Noida. Can the divorce settle that as well?",
        answer:
          "Yes, and it should — comprehensive closure is the point of the exercise. Withdrawable proceedings like maintenance and DV Act applications are closed before the Gautam Buddh Nagar courts, but a 498A FIR is non-compoundable and needs quashing on settlement, which for a Noida FIR means a petition before the Allahabad High Court. Because that adds a step at Prayagraj, sequence the deed so the final tranche of payment coincides with the quashing, protecting both sides until the last case actually dies.",
      },
      {
        question: "What if one of us changes our mind after the first motion?",
        answer:
          "Consent must exist at the second motion too, so either spouse can lawfully resile before the decree — the court cannot force the divorce through. Protection lies in the deed's architecture, not in optimism: stage the payments and case withdrawals against each motion so that neither side has performed fully while the other can still walk away. If consent is withdrawn, the paid amounts are governed by the deed's terms and the contested-divorce routes reopen — which is exactly the outcome good sequencing is designed to make unattractive.",
      },
    ],
    localNotes: [
      "The Family Court sits at Surajpur in Greater Noida — a long commute from most Noida sectors — so plan appearances deliberately and use video-conferencing where the court permits it rather than burning leave on adjournments.",
      "Quashing a settled 498A registered in Gautam Buddh Nagar happens at the Allahabad High Court, not locally — build that Prayagraj step into the settlement's payment sequencing and timeline.",
      "Many Noida couples hold jurisdiction in two or three courts (marriage town, last shared home, wife's current residence) — treat forum choice as a real decision; waiver practice and listing speed differ meaningfully between them.",
    ],
  },

  // ──────────────── NOIDA × ANTICIPATORY BAIL (S.482 BNSS) ────────────────
  "noida__anticipatory-bail": {
    lead:
      "An FIR in Gautam Buddh Nagar — a matrimonial complaint, a business deal recast as cheating, a property dispute turned criminal — puts arrest on the table, and anticipatory bail under Section 482 BNSS (the old Section 438 CrPC) is how you take it off. In UP the remedy itself is younger than most people's marriages: abolished in 1976, it returned only in 2019. NyaySevak connects you with Bar-Council-verified Noida anticipatory-bail lawyers who move the Sessions Court at Surajpur fast, press interim protection at the first listing, and manage the notice-compliance and conditions that keep the protection alive.",
    landscape: [
      "Two forums hold concurrent jurisdiction under Section 482 BNSS: the Sessions Court, Gautam Buddh Nagar, at the Surajpur complex, and the Allahabad High Court. On paper you may approach either; in practice, UP strategy is Sessions-first, and for hard-nosed reasons — the High Court sits at Prayagraj, some 600 km away, carries one of India's heaviest dockets, and generally expects the Sessions Court to have been approached first absent special circumstances. A refusal at Surajpur then supports a better-framed application before the High Court. The application is built on the FIR copy (obtainable from the UP Police portal), and competent drafting asks for interim protection at the very first listing, because the gap between filing and final hearing is precisely when arrest happens.",
      "The statutory safeguards do much of the work before any bail order exists. For offences punishable up to seven years — which covers most 498A and business-dispute FIRs — Section 35(3) BNSS requires the police to issue a notice of appearance rather than arrest, and the Arnesh Kumar line makes non-compliance a ground for judicial pushback. Responding to the notice properly, with counsel, both prevents arrest and builds the record that custodial interrogation is unnecessary — the central question in every anticipatory-bail hearing. UP's docket adds a wrinkle: FIRs are registered district by district, so a Noida resident named in a Kanpur or Agra FIR must seek protection from that district's Sessions Court or the High Court, not from Surajpur; only limited transit protection is available locally.",
      "Gautam Buddh Nagar's anticipatory-bail volume comes from two streams: matrimonial FIRs (498A and allied provisions, often naming parents and siblings with peripheral roles) and commercial disputes converted into cheating and criminal-breach-of-trust FIRs — a pattern Noida's trading, real-estate and vendor ecosystems generate constantly. For FIRs registered outside UP against Noida residents, the Supreme Court's Priya Indoria ruling (2023) allows the Surajpur Sessions Court or the High Court to grant transit anticipatory bail — short protection to travel and apply before the competent court in the FIR state. Grants come with conditions — join the investigation, no witness contact, no leaving India without leave — and breach invites cancellation, so post-order discipline matters as much as the order itself.",
    ],
    courtsForThisMatter: [
      "Sessions Court, Gautam Buddh Nagar at Surajpur (S.482 BNSS applications — the standard first forum)",
      "Allahabad High Court (concurrent jurisdiction; applications after Sessions refusal)",
      "Magistrate Courts, Gautam Buddh Nagar (S.35(3) BNSS appearance-notice compliance)",
      "Sessions Courts of other UP districts (FIRs registered elsewhere in Uttar Pradesh)",
      "Mediation Centre, Gautam Buddh Nagar (matrimonial FIRs referred while protection continues)",
      "Supreme Court of India (special leave where the High Court declines)",
    ],
    caseTypes: [
      { title: "Anticipatory Bail — Sessions Court, Surajpur", desc: "S.482 BNSS applications with interim protection pressed at the first listing." },
      { title: "Anticipatory Bail — Allahabad High Court", desc: "Applications after Sessions refusal, or direct approach where special circumstances justify it." },
      { title: "498A / Matrimonial FIR Protection", desc: "The district's highest-volume category — protection for spouses and peripherally named family members." },
      { title: "Business-Dispute FIRs (Cheating / CBT)", desc: "Commercial fallouts recast as criminal cases — vendors, traders, builders and their signatories." },
      { title: "Transit Anticipatory Bail", desc: "Priya Indoria protection from GB Nagar courts for Noida residents facing out-of-state FIRs." },
      { title: "S.35(3) Notice Compliance", desc: "Managing police appearance notices under the Arnesh Kumar framework so arrest never becomes necessary." },
      { title: "Out-of-District UP FIRs", desc: "Coordinating applications before the Sessions Court of the UP district where the FIR actually stands." },
      { title: "Cancellation Defence & Condition Modification", desc: "Resisting cancellation applications and relaxing travel or reporting conditions as the case matures." },
    ],
    faqs: [
      {
        question: "Should I apply at the Surajpur Sessions Court or go straight to the Allahabad High Court?",
        answer:
          "Both courts have concurrent power under Section 482 BNSS, but the working rule in UP is Sessions-first. The High Court sits at Prayagraj — a 600 km journey — expects the Sessions Court to have been tried absent special reasons, and its docket makes urgent listing harder to guarantee than at Surajpur. Starting locally gets protection considered faster, and if the Sessions Court refuses, that order becomes the platform for a sharper High Court application. Direct High Court filings are reserved for matters whose gravity or politics genuinely demand it.",
      },
      {
        question: "Is anticipatory bail even available in Uttar Pradesh? I read it was abolished.",
        answer:
          "It is available now, but your memory is right: UP deleted Section 438 CrPC in 1976, and for over four decades residents had no anticipatory-bail remedy at all. The state restored it in June 2019, and Section 482 of the BNSS now applies uniformly. One practical legacy remains — UP's Sessions-level practice around the remedy is younger than in Delhi or Mumbai, so courts scrutinise applications closely and counsel who regularly appear at Surajpur add real value in framing what the judge expects to see.",
      },
      {
        question: "How quickly can I get protection, and what covers me before the final order?",
        answer:
          "An application can be drafted and filed within a day or two of obtaining the FIR copy, and the request that matters most is interim protection at the first listing — a direction that no coercive steps be taken while the police file their report. That bridge order is the difference between negotiating from liberty and applying for regular bail from custody. In parallel, if the offence is punishable up to seven years, a Section 35(3) BNSS notice response signals cooperation and undercuts the case for custodial interrogation.",
      },
      {
        question: "My in-laws filed a 498A in Noida naming my whole family. Can everyone be protected?",
        answer:
          "Matrimonial FIRs are Gautam Buddh Nagar's largest anticipatory-bail category, and courts regularly protect family members whose alleged roles are peripheral — parents, siblings, relatives living elsewhere. Each applicant's case is argued on their specific role in the FIR, so omnibus allegations often help the defence. Courts also nudge these disputes toward the mediation centre while protection continues, and a mediated settlement can later support quashing before the Allahabad High Court, closing the criminal case for everyone at once.",
      },
      {
        question: "I live in Noida but the FIR is registered in another state. What are my options?",
        answer:
          "Apply for transit anticipatory bail locally. Under the Supreme Court's Priya Indoria decision (2023), the Sessions Court at Surajpur or the Allahabad High Court can grant a Noida resident short-duration protection against arrest, sufficient to travel to the FIR state and move its competent court for full anticipatory bail. The transit order does not decide the main matter — it removes the fear of being picked up en route. The same logic applies within UP: an FIR in another UP district must ultimately be answered before that district's Sessions Court.",
      },
      {
        question: "What conditions will the court impose, and can the protection be taken away?",
        answer:
          "Expect conditions to join the investigation whenever summoned, not to influence witnesses or touch evidence, and not to leave India without the court's leave; passport deposit or periodic police attendance are added in some matters. The protection endures through investigation and trial unless the order limits it — but it is defeasible: breach of conditions invites a cancellation application by the prosecution. Compliance is therefore the second half of the brief, and conditions that become impractical (a job posting abroad, for instance) are relaxed by application, not ignored.",
      },
    ],
    localNotes: [
      "Sessions-first is the standard UP playbook: the Allahabad High Court's distance and docket make Surajpur the fast forum, with the High Court held in reserve for the second attempt.",
      "Anticipatory bail only returned to UP in 2019 after a 43-year absence — local practice is still consolidating, which rewards counsel who appear daily before the Surajpur Sessions judges.",
      "Jurisdiction follows the FIR, not your address: a Noida resident named in another district's or state's FIR needs that forum (or a Priya Indoria transit order locally) — filing at Surajpur against an outside FIR wastes the most critical days.",
    ],
  },

  // ──────────────── GURGAON × CHEQUE BOUNCE (S.138 NI ACT) ────────────────
  "gurgaon__cheque-bounce-recovery": {
    lead:
      "Gurugram's cheque flow mirrors its economy: vendor and B2B cheques from corporates and funded startups, rent and security-deposit cheques in India's busiest office-leasing market, and builder refund cheques that bounce exactly when a homebuyer needs the money back. Section 138 of the Negotiable Instruments Act turns each of those bounces into a criminal prosecution before the Gurugram magistrate courts. NyaySevak connects you with Bar-Council-verified Gurgaon cheque-bounce lawyers who serve the demand notice inside the statutory window, file the complaint at the Gurugram district court, and use interim compensation and settlement pressure to turn the case into recovered money.",
    landscape: [
      "Where you bank decides where you sue. Under Section 142 NI Act as amended in 2015, the complaint lies before the magistrate having jurisdiction over the payee's bank branch — deposit the cheque in a Gurugram branch and the prosecution runs before the Judicial Magistrate courts at the Gurugram District Court complex, whether the drawer sits in Delhi, Bengaluru or overseas. The calendar is rigid: present the cheque within its validity, dispatch the demand notice inside 30 days of the return memo, wait out the drawer's 15-day payment window, then file inside the month that follows. A defective or late notice is the commonest reason otherwise-strong Gurugram cases collapse.",
      "A Gurugram prosecution should be engineered for payment, not just conviction. Section 143A allows the magistrate, once the drawer claims trial, to award the complainant interim compensation reaching 20% of the cheque value, and Section 148 makes a convicted drawer deposit a minimum of 20% before the Sessions Court, Gurugram hears the appeal — twin levers that concentrate settlement minds. Since the offence is compoundable at any stage, many Gurugram matters resolve at the district court's mediation centre or in the National Lok Adalats, where NI Act cases are taken up in bulk on recorded payment schedules. For substantial commercial debts, a parallel suit before the Commercial Court, Gurugram — or an Order XXXVII summary suit — keeps civil recovery moving alongside the criminal file.",
      "Three drawer profiles dominate Gurugram's docket. Corporate and startup vendor cheques bring Section 141 into play: the company and every person in charge of its business — signatories and managing directors — are prosecuted together, and if the company slips into insolvency, the IBC moratorium shields the entity while the Supreme Court's rulings keep the natural persons exposed. Landlord-tenant cheques — bounced rent cheques and unreturned security deposits in the leasing market — form a steady second stream. The third is builder refund cheques: a Section 138 prosecution against the signatory directors runs profitably alongside an HRERA Gurugram refund or execution proceeding, each reinforcing the other. Appeals go to the Sessions Court, Gurugram; quashing on settlement lies to the Punjab & Haryana High Court at Chandigarh under Section 528 BNSS (the old Section 482 CrPC).",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate Courts, Gurugram District Court complex (S.138 complaints and trial)",
      "Sessions Court, Gurugram (appeals against conviction/acquittal; the S.148 deposit stage)",
      "Commercial Court, Gurugram (parallel civil recovery of commercial debts)",
      "Punjab & Haryana High Court, Chandigarh (S.528 BNSS quashing after settlement; revisions)",
      "Mediation Centre, Gurugram District Court & National Lok Adalat (compounding and settlement)",
      "NCLT, Chandigarh Bench (insolvency leverage against company drawers with ₹1 crore+ defaults)",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "The S.138 notice drafted and dispatched within 30 days of the return memo — the make-or-break first step." },
      { title: "S.138 Complaint at Gurugram", desc: "Filing before the Gurugram magistrate courts, jurisdiction anchored to your Gurugram bank branch." },
      { title: "Vendor & B2B Cheque Prosecutions", desc: "Bounced cheques from corporate customers and startups — Gurugram's highest-volume S.138 category." },
      { title: "Rent & Security-Deposit Cheques", desc: "Prosecuting bounced rent cheques and unreturned deposit cheques in Gurugram's leasing market." },
      { title: "Builder Refund-Cheque Cases", desc: "S.138 prosecutions on bounced builder refund cheques, coordinated with HRERA Gurugram proceedings." },
      { title: "Interim Compensation & Appeal Deposits", desc: "S.143A interim compensation at trial and the S.148 deposit lever on appeal." },
      { title: "Company & Director Liability (S.141)", desc: "S.141 exposure for signatories and directors when a company's cheque bounces, insolvency-moratorium nuances included." },
      { title: "Defence, Settlement & Quashing", desc: "Rebutting the S.139 presumption, mediated settlements, and P&H High Court quashing once paid." },
    ],
    faqs: [
      {
        question: "Which Gurgaon court hears my cheque-bounce case?",
        answer:
          "The Judicial Magistrate courts at the Gurugram District Court complex. Post-2015, Section 142 NI Act fixes territorial jurisdiction at the payee's bank branch — the branch where the cheque was deposited — so a Gurugram account-holder prosecutes locally even when the drawer operates from another state. Your lawyer files the complaint with the return memo, the demand notice, proof of dispatch, and the underlying debt documents.",
      },
      {
        question: "What deadlines apply after my cheque bounces?",
        answer:
          "Three strict ones. The demand notice has a 30-day fuse running from the return memo; the drawer's payment window is 15 days from receiving it; and the complaint window is one month from the day that payment window closes. Limitation defects sink more Gurugram prosecutions than any substantive defence — our cheque-bounce notice format guide walks through the timeline and the notice contents step by step.",
      },
      {
        question: "A Gurgaon company gave us the cheque. Can I go after the directors personally?",
        answer:
          "Yes. Section 141 NI Act makes the company and every person who was in charge of and responsible for its business at the time — typically the signatory and the managing directors — liable to prosecution together. Even if the company later enters insolvency and the IBC moratorium freezes cases against it, the Supreme Court has held that the prosecution continues against the signatories and directors personally, which is usually what brings them to the settlement table.",
      },
      {
        question: "My builder's refund cheque bounced. Should I use Section 138 or HRERA Gurugram?",
        answer:
          "Run both tracks. The HRERA Gurugram complaint or execution pursues the refund with interest through the authority's machinery, while the Section 138 case places the signing directors under personal criminal exposure — a pressure HRERA alone cannot apply. The two proceedings are independent and mutually reinforcing, and in Gurugram's stalled-project disputes the criminal file frequently produces the cheque amount faster. Our RERA complaint guide covers the authority-side procedure.",
      },
      {
        question: "Can I recover anything before the trial finishes?",
        answer:
          "Frequently. Once the drawer claims trial, Section 143A empowers the magistrate to award interim compensation reaching a fifth of the cheque value, and if a convicted drawer appeals, Section 148 requires a further deposit of at least 20% before the Sessions Court, Gurugram hears the appeal. For larger commercial debts, a parallel Commercial Court suit or Order XXXVII summary suit — and, where a company drawer's default crosses the ₹1 crore IBC threshold, a Section 8 demand notice — stacks additional recovery pressure. See our money recovery guide for how the tracks combine.",
      },
      {
        question: "Do Gurgaon cheque-bounce cases settle, and how?",
        answer:
          "Most of the successful ones do — Section 138 is compoundable at any stage. The mediation centre at the Gurugram District Court and the periodic National Lok Adalats process NI Act matters in volume, usually recording a payment schedule before the magistrate. Once the money is paid, the case is compounded or the Punjab & Haryana High Court quashes the proceedings on settlement under Section 528 BNSS. A prosecution built for leverage from day one settles sooner and on better terms.",
      },
    ],
    localNotes: [
      "Jurisdiction follows your Gurugram bank branch under S.142 NI Act (post-2015) — you prosecute an out-of-state corporate drawer locally at the Gurugram District Court, a real cost advantage for Gurugram businesses.",
      "Builder refund cheques are a Gurugram signature: pair the S.138 prosecution (personal director exposure under S.141) with the HRERA Gurugram proceeding — the criminal file is usually the faster payer.",
      "Quashing on settlement means the Punjab & Haryana High Court at Chandigarh — roughly a 250 km trip — so structure settlements to be compounded before the Gurugram magistrate where possible and reserve the HC step for closed 141 prosecutions.",
    ],
  },

  // ──────────────── GURGAON × MUTUAL CONSENT DIVORCE (S.13B HMA) ────────────────
  "gurgaon__mutual-consent-divorce": {
    lead:
      "For Gurugram's corporate professionals, founders and NRI couples, a Section 13B (Hindu Marriage Act) mutual consent divorce is usually the rational exit: two motions before the Family Court, Gurugram, one comprehensive settlement, no public trial of private facts. Done well, it also closes every connected front — alimony, custody, stridhan and any pending criminal cases — in a single package. NyaySevak connects you with Bar-Council-verified Gurgaon mutual-consent-divorce lawyers who negotiate and draft the settlement deed, file both motions at the Family Court, Gurugram, and seek waiver of the cooling-off period where your facts support it.",
    landscape: [
      "Section 13B requires one year of separate living and a joint petition; the first motion places the settlement on record and the second, after the statutory gap, yields the decree. The Family Court, Gurugram, sitting in the district court complex, applies the Supreme Court's Amardeep Singh v. Harveen Kaur (2017) framework to waive the six-month cooling-off period where the separation is already long, mediation has failed or is pointless, and every issue stands settled — well-prepared Gurugram matters with waiver can conclude within weeks. Territorial jurisdiction offers three anchors: where the marriage was solemnised, where the spouses last resided together, or where the wife now resides — so a couple whose married home was a Gurugram apartment files here even if the wedding happened elsewhere.",
      "Gurugram's demographics shape the practice. With one spouse frequently posted in Singapore, London or the US, the Family Court, Gurugram permits appearance through video-conference for recorded motions, and matters are calendared so an NRI spouse needs one trip to India at most — though the judge must hear free consent from each spouse at both stages, and that cannot be delegated. Inter-faith and civil marriages registered under the Special Marriage Act dissolve by the parallel two-motion route under Section 28 of that Act before the same court. Where one side initially resists, the mediation centre at the Gurugram district court regularly converts contested petitions into consent packages — often the cheapest and quickest path to the same decree.",
      "The economics are settled before the law is. Gurugram settlements price permanent alimony against corporate compensation — base salary, bonuses, ESOPs and vested RSUs — and the deed must define the one-time figure as a full and final discharge of all maintenance claims, past and future. It should also sequence payment across the two motions, fix custody and a visitation calendar with school-term precision, list the stridhan and jewellery being returned, and provide for closure of every pending proceeding: withdrawal of maintenance and Domestic Violence Act cases before the Gurugram courts, and quashing of a 498A FIR by the Punjab & Haryana High Court at Chandigarh on the strength of the settlement. Since either spouse may resile before the decree, the deed's staging — not its length — is its real protection.",
    ],
    courtsForThisMatter: [
      "Family Court, Gurugram (S.13B first and second motions; SMA S.28 petitions)",
      "Mediation Centre, Gurugram District Court (converting contested matters into consent packages)",
      "Punjab & Haryana High Court, Chandigarh (quashing of settled 498A FIRs; appeals)",
      "Magistrate Courts, Gurugram (closure of maintenance and DV Act proceedings on settlement)",
      "Supreme Court of India (inter-state transfer petitions; Article 142 dissolution in rare cases)",
      "Marriage Officer / SDM, Gurugram (Special Marriage Act registrations and procedural steps)",
    ],
    caseTypes: [
      { title: "S.13B Petitions — Both Motions", desc: "Joint petition, first-motion statement, and second-motion decree before the Family Court, Gurugram." },
      { title: "Cooling-Off Waiver (Amardeep Singh)", desc: "Applications to compress the six-month gap on Amardeep Singh grounds before the decree." },
      { title: "Alimony & Settlement-Deed Design", desc: "One-time alimony sized against salaries, ESOPs and RSUs, drafted as a final discharge." },
      { title: "Custody, Visitation & Relocation Terms", desc: "School-calendar visitation, holiday splits, and relocation clauses for transfer-prone corporate careers." },
      { title: "NRI & Expat Divorce Logistics", desc: "Video-conference appearances and single-trip scheduling for spouses posted abroad." },
      { title: "Closure of 498A / DV / Maintenance Cases", desc: "Withdrawals before Gurugram courts and P&H High Court quashing built into the package." },
      { title: "Special Marriage Act Divorce (S.28)", desc: "The parallel two-motion consent route for inter-faith and civil marriages." },
    ],
    faqs: [
      {
        question: "How quickly can a mutual consent divorce finish in Gurgaon?",
        answer:
          "The default structure is two motions at least six months apart, giving a six-to-eight-month runway. But the Family Court, Gurugram applies the Supreme Court's Amardeep Singh ruling to waive the cooling-off period where the couple has been separated over a year, reconciliation efforts have failed, and the settlement covers everything — and waiver matters can finish in roughly four to eight weeks. Our mutual consent divorce guide explains the waiver test and both motions in detail.",
      },
      {
        question: "We married in another city but lived in Gurgaon. Can we file here?",
        answer:
          "Yes, if Gurugram was your last shared matrimonial home, or if the wife now resides here — either anchor gives the Family Court, Gurugram jurisdiction alongside the place of marriage. Most Gurugram filings rest on the last-matrimonial-home ground, since so many couples built their married life here after a wedding elsewhere. Where two forums are available, pick the one that suits appearances and follow-on work like case closures.",
      },
      {
        question: "My spouse works abroad. How many times must they come to India?",
        answer:
          "Often not at all, and rarely more than once. The Family Court, Gurugram routinely permits an NRI spouse to appear and confirm consent through video-conference, and in limited situations through a special power-of-attorney holder. What cannot be avoided is the substance: the judge must be satisfied at both motions that each spouse consents freely, so both must be personally heard — physically or on screen. Sensible calendaring around leave and time zones is part of the lawyer's job.",
      },
      {
        question: "How is alimony decided when both of us have corporate incomes?",
        answer:
          "In mutual consent it is decided by you, not imposed — the court records what the parties agree. Gurugram settlements typically benchmark a one-time figure against both sides' total compensation, including bonuses, ESOPs and vested RSUs, the marriage's length, the children's needs, and each spouse's independent earning capacity. Dual-income couples sometimes agree to a mutual waiver. Whatever the number, the deed must state it as a full and final discharge of all maintenance claims, or the finality you paid for evaporates.",
      },
      {
        question: "There is a 498A and a DV case between our families. Can the divorce close them?",
        answer:
          "Yes — that is precisely what a well-built consent package does. The settlement deed provides for withdrawal of the maintenance and Domestic Violence Act proceedings before the Gurugram courts, and since a 498A FIR is non-compoundable, for its quashing by the Punjab & Haryana High Court at Chandigarh on the basis of the settlement. Sequencing matters: withdrawals and quashing are staged against the motions and payments so neither side performs first without protection.",
      },
      {
        question: "We had a court marriage. Does Section 13B apply to us?",
        answer:
          "If your marriage was solemnised or registered under the Special Marriage Act — the usual route for inter-faith and civil marriages in Gurugram — the equivalent provision is Section 28 of that Act, with the same architecture: one year of separation, a joint petition, two motions, and cooling-off waiver available on the same principles. The Family Court, Gurugram hears these too, and the settlement-deed work is identical. Your lawyer confirms the governing statute from your marriage certificate before drafting.",
      },
    ],
    localNotes: [
      "The Family Court, Gurugram grants Amardeep Singh cooling-off waivers on well-documented facts — arrive at the first motion with the separation timeline, failed-mediation record and complete deed, and the second motion can follow within weeks.",
      "Gurugram's ESOP-heavy settlements need tax-aware drafting: how the one-time alimony is characterised and staged across the motions affects both enforceability and take-home value.",
      "Criminal-case closure runs through Chandigarh — budget the P&H High Court quashing step (time and appearance) into the deed's schedule rather than discovering it after the decree.",
    ],
  },

  // ──────────────── GURGAON × ANTICIPATORY BAIL (S.482 BNSS) ────────────────
  "gurgaon__anticipatory-bail": {
    lead:
      "In Gurugram, the FIRs that make arrest a live fear tend to follow the city's fault-lines — a matrimonial complaint after a marriage breaks down, a business deal recast as cheating, an investment scheme or cyber-fraud allegation, a workplace complaint that turns criminal. Anticipatory bail under Section 482 BNSS (the old Section 438 CrPC) keeps you out of custody while the investigation runs. NyaySevak connects you with Bar-Council-verified Gurgaon anticipatory-bail lawyers who file before the Sessions Court, Gurugram within days, press for interim protection at the first listing, and keep the protection alive through disciplined condition compliance.",
    landscape: [
      "Two forums hold concurrent jurisdiction under Section 482 BNSS: the Sessions Court, Gurugram and the Punjab & Haryana High Court at Chandigarh. Geography makes the choice for most applicants — Chandigarh is roughly 250 km away, so Gurugram practice is Sessions-first, with the High Court as the second tier if the Sessions Court declines, though grave or politically sensitive matters sometimes justify going to Chandigarh directly. The application is drafted on the FIR (or on a concrete apprehension where no FIR is yet traceable), and the first listing is the pressure point: counsel presses for interim protection from arrest while the investigating officer's status report is awaited, because the gap between filing and final hearing is exactly when an unprotected applicant is most exposed.",
      "The statutory safeguards do much of the work for prepared applicants. For offences punishable up to seven years — which covers most of Gurugram's matrimonial and first-schedule economic FIRs — Section 35(3) BNSS (the old Section 41A CrPC) obliges the police to issue a notice of appearance rather than arrest, and the Arnesh Kumar line makes non-compliance a ground for judicial pushback. A Gurugram bail strategy uses this twice: to respond to the notice and cooperate on record, and to argue in court that custodial interrogation serves no purpose. After Sushila Aggarwal (2020), protection once granted is not automatically time-capped and can run through investigation and trial. Standard conditions — join the investigation when called, no witness contact, no travel abroad without leave — are the price, and breach invites cancellation.",
      "Gurugram's docket concentrates in three lanes. Matrimonial FIRs — 498A and dowry allegations, often naming parents and siblings — are the volume category, and courts commonly steer the underlying dispute to the district mediation centre while protection continues. Economic-offence and cyber-fraud FIRs form the second lane: soured vendor and investor relationships, real-estate and investment schemes, and complaints landing through Gurugram's cyber police stations, where anticipatory bail turns on documentary cooperation and disgorgement offers. The third is employment-adjacent complaints — POSH-linked or workplace allegations escalated to the police. For Gurugram residents named in FIRs registered in other states, the Supreme Court's Priya Indoria (2023) ruling lets a Gurugram court grant limited transit anticipatory bail to reach the competent court there safely; conditions can later be modified, and cancellation attempts defended, before the granting court.",
    ],
    courtsForThisMatter: [
      "Sessions Court, Gurugram (S.482 BNSS applications — the standard first forum)",
      "Punjab & Haryana High Court, Chandigarh (concurrent jurisdiction; second applications after Sessions refusal)",
      "Judicial Magistrate Courts, Gurugram (S.35(3) BNSS notice compliance; remand-stage safeguards)",
      "Mediation Centre, Gurugram District Court (matrimonial FIRs referred while protection continues)",
      "Competent courts of the FIR state (main application after Gurugram transit protection — the Priya Indoria route)",
      "Supreme Court of India (special leave petitions after a High Court refusal)",
    ],
    caseTypes: [
      { title: "Anticipatory Bail — Sessions Court, Gurugram", desc: "S.482 BNSS applications with interim protection pressed at the first listing." },
      { title: "Second Applications — P&H High Court", desc: "Renewed applications at Chandigarh after a Sessions refusal, or direct filings in grave matters." },
      { title: "498A / Matrimonial FIR Protection", desc: "Gurugram's volume category — protection for spouses and in-laws, paired with mediation strategy." },
      { title: "Economic-Offence & Cyber-Fraud FIRs", desc: "Cheating, breach-of-trust and investment-fraud allegations from business and investor disputes." },
      { title: "Employment & POSH-Adjacent Complaints", desc: "Workplace allegations escalated to FIRs — protection managed discreetly for serving professionals." },
      { title: "S.35(3) Notice Strategy", desc: "Responding to police appearance notices and invoking Arnesh Kumar safeguards against needless arrest." },
      { title: "Transit Anticipatory Bail", desc: "Priya Indoria protection from Gurugram courts for FIRs registered in other states." },
      { title: "Cancellation Defence & Condition Modification", desc: "Defending cancellation applications and relaxing travel or reporting conditions as the case matures." },
    ],
    faqs: [
      {
        question: "Should I apply in Gurgaon or go straight to the High Court at Chandigarh?",
        answer:
          "Both courts have concurrent power under Section 482 BNSS, but the settled Gurugram practice is to move the Sessions Court, Gurugram first — it lists fast, knows the local police, and Chandigarh is a 250 km journey that adds cost and delay to every hearing. The Punjab & Haryana High Court is the second application if the Sessions Court refuses, and the direct forum only where the matter's gravity or the need to consolidate with other Chandigarh proceedings justifies it.",
      },
      {
        question: "How soon can I get protection after learning of an FIR in Gurgaon?",
        answer:
          "An application can usually be settled and filed within a day or two of engaging counsel, and the Sessions Court, Gurugram takes up anticipatory bail on priority. The critical ask at the first listing is interim protection — a direction that no coercive steps be taken while the investigating officer files a status report — which bridges the one-to-three weeks until final hearing. If you sense arrest is imminent, say so at the first call: filing speed changes the outcome.",
      },
      {
        question: "I received a police notice to appear at a Gurgaon police station. Will I be arrested there?",
        answer:
          "A notice under Section 35(3) BNSS (the old 41A CrPC) is the alternative to arrest for offences punishable up to seven years — appearing in compliance is generally protective, and Arnesh Kumar requires the police to justify any arrest despite compliance. Attend with counsel briefed, answer on record, and take written acknowledgment. The notice itself is also evidence of a live apprehension, which supports a parallel anticipatory-bail application. Do not ignore it: non-appearance is the easiest arrest justification you can hand over.",
      },
      {
        question: "Will the Gurgaon court protect my family in a 498A case filed by my daughter-in-law?",
        answer:
          "No category comes before the Sessions Court, Gurugram more often than matrimonial FIRs, and protection is granted regularly — particularly for parents-in-law and relatives whose alleged roles are peripheral and who have no reason to flee or tamper. Courts often refer the family dispute to the Gurugram mediation centre while protection continues, and a mediated settlement can later ground quashing of the FIR at the Punjab & Haryana High Court. Full cooperation with the investigation is what keeps the protection intact meanwhile.",
      },
      {
        question: "The FIR against me is in another state but I live in Gurgaon. What are my options?",
        answer:
          "Apply for transit anticipatory bail. Following the Supreme Court's Priya Indoria ruling (2023), a Gurugram court can grant a Gurugram resident short-duration protection from arrest so you can travel to and move the competent court in the FIR state, provided the apprehension is genuine and the forum is not being gamed. The substantive application must still be decided where the FIR stands — the transit order is a bridge, not the destination, and it should be sought before you travel, not after.",
      },
      {
        question: "What conditions will the Gurgaon court impose, and can they be changed later?",
        answer:
          "Expect the standard set: join the investigation whenever the IO calls, do not contact witnesses or touch evidence, and do not leave India without the court's leave; passport deposit or periodic reporting is added in economic-offence matters. Breach is what gets protection cancelled, so treat conditions as absolute. They are not frozen, though — as the investigation concludes or a chargesheet is filed, the same court can be moved to relax travel restrictions or reporting requirements, and Gurugram's corporate applicants routinely obtain leave for work travel on structured applications.",
      },
    ],
    localNotes: [
      "Gurugram is Sessions-first territory: with the High Court 250 km away at Chandigarh, the Sessions Court, Gurugram is the fast, standard forum — reserve Chandigarh for the second application or genuinely grave matters.",
      "Economic-offence and cyber-fraud FIRs are Gurugram's fastest-growing bail category — courts respond to documented cooperation, so assemble the transaction paper trail before the first hearing, not after.",
      "If you live in Gurugram but the FIR is elsewhere, seek Priya Indoria transit protection from the Gurugram court before travelling to the FIR state — moving unprotected is the commonest, and most avoidable, mistake.",
    ],
  },

  // ──────────────── GHAZIABAD × CHEQUE BOUNCE (S.138 NI ACT) ────────────────
  "ghaziabad__cheque-bounce-recovery": {
    lead:
      "Ghaziabad's trade runs on post-dated cheques — steel and electronics units in Sahibabad, factories along the Loni and Modinagar belts, distributors supplying half of western UP — and when one is dishonoured, Section 138 of the Negotiable Instruments Act converts the bounce into criminal recovery pressure. NyaySevak connects you with Bar-Council-verified Ghaziabad cheque-bounce lawyers who dispatch the demand notice inside the 30-day window, file the complaint before the magistrate courts at the Ghaziabad Kacheri, and use interim compensation and structured settlement so the money — not just a conviction — actually arrives.",
    landscape: [
      "The first question is where, and the answer is your bank. Under Section 142 NI Act as amended in 2015, the complaint lies before the magistrate having jurisdiction over the payee's bank branch — deposit the cheque in an Indirapuram, Kavi Nagar or Sahibabad branch and the case is tried at the Ghaziabad District Court complex (the Kacheri), even against a drawer sitting in Delhi, Noida or Meerut. The clock is merciless: present the cheque within its validity, dispatch the written demand notice within 30 days of the return memo, allow the drawer 15 days to pay, and file the complaint within one month of that period expiring. A defect at any step becomes the drawer's first defence.",
      "Recovery, not merely conviction, is the objective — and the statute supplies levers. Once the drawer pleads not guilty, Section 143A permits the magistrate to award interim compensation of up to 20% of the cheque amount; a convicted drawer must deposit a further minimum of 20% under Section 148 before the Sessions Court at Ghaziabad hears the appeal. Because the offence is compoundable, Ghaziabad's heavy NI Act docket clears substantially through court-annexed mediation and the National Lok Adalats, where cheque matters are disposed of in bulk on recorded payment schedules. For larger commercial debts, a parallel civil track — an Order XXXVII summary suit or a claim before the Commercial Court, Ghaziabad — keeps a decree-based recovery running alongside the prosecution.",
      "Three local patterns dominate. Supply-chain cheques from the Sahibabad, Loni and Modinagar industrial belts — trader-to-trader and MSME invoices settled by post-dated cheque — form the bulk of the docket; the drawer is usually a firm or company, so Section 141 brings the signatory and every person in charge of its business into the prosecution personally. Rent and security-deposit cheques from the Indirapuram–Vaishali–Vasundhara residential corridor are the second stream. The third is builder refund cheques: developers settling with flat buyers issue post-dated cheques that bounce, and the Section 138 case then runs alongside the UP RERA complaint — the directors' personal criminal exposure often produces the payment RERA execution is still chasing. Quashing on settlement lies to the Allahabad High Court under Section 528 BNSS (old Section 482 CrPC).",
    ],
    courtsForThisMatter: [
      "Magistrate Courts, Ghaziabad District Court complex — the Kacheri (S.138 complaints)",
      "Sessions Court, Ghaziabad (appeals against conviction/acquittal; the S.148 deposit lever)",
      "Commercial Court, Ghaziabad (parallel civil recovery of commercial debts)",
      "Allahabad High Court (quashing on settlement under S.528 BNSS — old S.482 CrPC; revision)",
      "Mediation Centre & National Lok Adalat, Ghaziabad (bulk NI Act settlement)",
      "NCLT (IBC pressure where the drawer is a company owing ₹1 crore or more)",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Drafting and proving service of the S.138 notice within 30 days of the return memo — where most self-filed cases die." },
      { title: "S.138 Complaint at the Kacheri", desc: "Filing before the Ghaziabad magistrate courts with jurisdiction anchored to your local bank branch." },
      { title: "Interim Compensation (S.143A)", desc: "Seeking up to 20% of the cheque amount from the drawer while the trial is still running." },
      { title: "Trader & MSME Supply-Chain Cheques", desc: "Bounced invoice cheques from Sahibabad, Loni and Modinagar units — Ghaziabad's highest-volume S.138 pattern." },
      { title: "Rent & Builder Refund Cheques", desc: "Dishonoured rent cheques in the Indirapuram–Vaishali corridor and builder refund cheques run alongside UP RERA." },
      { title: "Company & Director Liability (S.141)", desc: "Prosecuting the drawer company, its signatory and persons in charge — with insolvency-moratorium nuances handled." },
      { title: "Settlement & Compounding", desc: "Mediation, National Lok Adalat schedules and compounding at any stage — usually the fastest path to money." },
      { title: "Parallel Civil Recovery", desc: "Order XXXVII summary suits and Commercial Court, Ghaziabad claims running alongside the prosecution for bigger debts." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque-bounce case in Ghaziabad?",
        answer:
          "Before the magistrate courts at the Ghaziabad District Court complex — the Kacheri. Jurisdiction follows the payee's bank branch under Section 142 NI Act (post-2015), so if you deposited the cheque in a Ghaziabad branch — Indirapuram, Kavi Nagar, Sahibabad, anywhere in the district — the case is heard in Ghaziabad even when the drawer operates from Delhi, Noida or another state. Our Section 138 procedure guide walks through the filing step by step.",
      },
      {
        question: "What deadlines apply after my cheque bounces?",
        answer:
          "Three strict windows: the written demand notice must go within 30 days of the bank's return memo; the drawer then gets 15 days from receipt to pay; if they don't, the complaint must be filed within one month of that 15-day period ending. Courts can condone a late complaint only for sufficient cause — never rely on it. Get the notice right the first time; our cheque-bounce notice format guide shows exactly what it must contain.",
      },
      {
        question: "My tenant's rent cheques in Indirapuram keep bouncing. Is Section 138 worth it?",
        answer:
          "Usually, yes — rent is a legally enforceable debt, so each dishonoured cheque supports a separate S.138 complaint, and the criminal summons concentrates a defaulting tenant's mind far faster than an eviction letter. Landlords in the Indirapuram–Vaishali–Vasundhara corridor use this route routinely, often alongside eviction and arrears proceedings. The statutory notice can demand the full amount of each bounced cheque, and most tenants settle before the trial gets anywhere.",
      },
      {
        question: "The builder gave me post-dated refund cheques and they bounced. Section 138 or RERA?",
        answer:
          "Run both tracks. The S.138 prosecution at the Kacheri makes the signatory directors personally criminally liable under Section 141, while the UP RERA complaint or recovery-certificate execution chases the refund itself — in Ghaziabad's stalled-project market this combination is what actually gets builders to pay. If the developer slides into insolvency, the moratorium shields the company but the Supreme Court has held the signatories and directors remain personally prosecutable.",
      },
      {
        question: "Can I recover any money before the trial ends?",
        answer:
          "Yes, often. Section 143A lets the magistrate order interim compensation of up to 20% of the cheque amount once the drawer pleads not guilty, and Section 148 forces a convicted drawer to deposit at least another 20% to appeal to the Sessions Court. For substantial trade debts, a parallel Order XXXVII summary suit or Commercial Court, Ghaziabad claim adds a civil decree track — our money recovery guide compares these options in detail.",
      },
      {
        question: "How do most Ghaziabad cheque-bounce cases actually end?",
        answer:
          "In settlement. Section 138 is compoundable at any stage, and Ghaziabad's National Lok Adalats dispose of NI Act matters in bulk on recorded payment schedules; court-annexed mediation resolves many more. A drawer who pays gets the case compounded or quashed by the Allahabad High Court on settlement, so a well-run prosecution is really a structured negotiation with criminal consequences behind it — which is exactly why it works as a recovery tool.",
      },
    ],
    localNotes: [
      "Your Ghaziabad bank branch — not the drawer's address — fixes jurisdiction at the Kacheri (S.142 NI Act, post-2015), which matters constantly in trans-Hindon trade with Delhi and Noida counterparties.",
      "The Sahibabad–Loni–Modinagar industrial belt generates Ghaziabad's biggest S.138 stream — MSME supply-chain cheques — and the drawer is usually a firm, so build the S.141 case against the signatories from day one.",
      "Diary the quarterly National Lok Adalat dates at Ghaziabad: courts refer NI Act matters to them in bulk, and a payment schedule recorded there is often the fastest enforceable outcome available.",
    ],
  },

  // ──────────────── GHAZIABAD × RERA / BUILDER-BUYER DISPUTES ────────────────
  "ghaziabad__rera-complaint": {
    lead:
      "Ghaziabad rode the NCR housing boom harder than almost anywhere — the high-rise clusters of Raj Nagar Extension, the townships of Crossings Republik and Wave City, the NH-24/Siddharth Vihar corridor next to Indirapuram — and thousands of its buyers are still waiting for flats, registries or refunds. The forum is UP RERA, with complaints e-filed online and NCR hearings held at the Greater Noida bench. NyaySevak connects you with Bar-Council-verified Ghaziabad RERA lawyers who compute and argue your Section 18 claim, drive recovery certificates through the District Magistrate, and switch to the NCLT or consumer forum when a different lever pays faster.",
    landscape: [
      "UP RERA is headquartered in Lucknow, but a Ghaziabad buyer never needs to travel there: complaints are filed online on the UP RERA portal with a modest statutory fee, and matters from Ghaziabad and the other NCR districts are listed before the authority's Greater Noida bench, with many hearings conducted by video-conference. Section 18 then frames the strategic choice every delayed buyer must make — withdraw from the project and recover everything paid with interest at the prescribed rate, or retain the flat and claim delay interest for each month past the promised possession date. The right answer differs by locality: a Raj Nagar Extension tower at 80% completion argues for staying; a project stalled at plinth level argues for exit.",
      "An order is only the halfway mark in Ghaziabad. If the builder does not pay, UP RERA issues a recovery certificate to the District Magistrate, Ghaziabad, who recovers the amount as arrears of land revenue — the tehsil machinery can attach the builder's bank accounts, unsold inventory and other assets, and a substantial stock of certificates against Ghaziabad developers sits in that pipeline at any time. The builder's counter-move, an appeal to the UP Real Estate Appellate Tribunal, requires pre-depositing the refund amount ordered before the appeal is even entertained — which converts most buyer-favourable orders into settlement leverage. Deficiency-of-service claims can alternatively go to the consumer commissions, up to the NCDRC for large claims.",
      "Two Ghaziabad-specific complications shape strategy. First, the GDA (Ghaziabad Development Authority): layout approvals, completion certificates and the builder's unpaid GDA dues regularly hold up registries even in occupied towers — a chronic Raj Nagar Extension and Crossings Republik grievance — pursued through RERA conveyance directions and, against the authority itself, writ petitions before the Allahabad High Court. Second, builder insolvency: once an NCLT moratorium begins, RERA proceedings against that developer freeze, and homebuyers pursue their claims as financial creditors under the IBC — though initiating insolvency needs a class of at least 100 allottees or 10% of the project's buyers. Choosing among RERA, consumer forum, NCLT and writ — and sequencing them — is the real lawyering.",
    ],
    courtsForThisMatter: [
      "UP RERA — e-filing on the portal; NCR hearings at the Greater Noida bench (primary forum for Ghaziabad projects)",
      "UP Real Estate Appellate Tribunal (builder appeals; refund pre-deposit required)",
      "District Magistrate, Ghaziabad (recovery-certificate execution as arrears of land revenue)",
      "NCLT (builder insolvency under the IBC — homebuyers as financial creditors)",
      "Consumer Commissions — District, State, NCDRC (deficiency-of-service alternative)",
      "Allahabad High Court (writs against GDA and the authorities)",
    ],
    caseTypes: [
      { title: "Refund with Interest (S.18)", desc: "Exiting a delayed project with everything you paid plus prescribed interest, computed payment by payment." },
      { title: "Delay-Possession Interest", desc: "Keeping the flat and claiming monthly interest for the full delay until valid possession with occupancy certificate." },
      { title: "Recovery-Certificate Execution", desc: "Converting an unpaid RERA order into DM-enforced recovery as arrears of land revenue, with asset attachment." },
      { title: "Registry & GDA-Dues Disputes", desc: "Forcing conveyance and registry where builder GDA dues or missing completion certificates block them." },
      { title: "Builder Insolvency (NCLT/IBC)", desc: "Pursuing allottee claims as financial creditors when the developer collapses into corporate insolvency." },
      { title: "Possession, Defects & Layout Changes", desc: "Unfinished amenities, structural defects within the five-year window, and unauthorised changes to sanctioned plans." },
      { title: "Consumer-Forum Complaints", desc: "Deficiency-of-service claims before the District and State Commissions where that route pays better." },
    ],
    faqs: [
      {
        question: "Where does UP RERA hear complaints about Ghaziabad projects?",
        answer:
          "Filing is entirely online on the UP RERA portal, and Ghaziabad matters are heard at the authority's Greater Noida bench, which handles the NCR districts — you do not appear in Lucknow, and many hearings run on video-conference. Attach the builder-buyer agreement, all payment receipts and the project's RERA registration details with the complaint; most matters are decided on documents plus short hearings. Our RERA complaint guide covers the portal procedure end to end.",
      },
      {
        question: "My Raj Nagar Extension flat is years late. Should I take a refund or delay interest?",
        answer:
          "Section 18 gives you both options, and the choice is tactical. Exit with refund-plus-interest if the project looks unlikely to finish or your money works harder elsewhere; claim monthly delay interest if construction is genuinely progressing and the location still suits you. On a flat bought years ago, the interest computed from each payment date is often a startling number — have a lawyer run the arithmetic before you choose, because the election shapes everything after.",
      },
      {
        question: "I have a UP RERA order but the builder simply is not paying. What next?",
        answer:
          "Move for execution. UP RERA issues a recovery certificate addressed to the District Magistrate, Ghaziabad, who enforces it as arrears of land revenue — the revenue machinery can attach the builder's bank accounts, unsold flats and other assets. This stage rewards persistence: certificates are executed in batches and follow-up before the collectorate matters. Continued defiance also invites penalty proceedings before RERA itself, adding a second pressure point on the builder.",
      },
      {
        question: "My builder has gone into insolvency at the NCLT. Do I lose my RERA case?",
        answer:
          "The RERA proceedings freeze once the moratorium starts, but your claim survives — it changes forum. Homebuyers are financial creditors under the IBC: file your claim with the resolution professional within the deadline, and allottees vote in the committee of creditors through an authorised representative. To initiate insolvency yourselves, you need at least 100 allottees or 10% of the project's buyers acting together. Our NCLT/IBC guide explains the homebuyer route in detail.",
      },
      {
        question: "My tower is occupied but the registry has not happened for years. Why?",
        answer:
          "In Ghaziabad the usual culprits are the builder's unpaid dues to the GDA or a missing completion certificate — the authority withholds the permissions the sub-registrar needs, so even fully paid buyers cannot register. Remedies run in parallel: press UP RERA for conveyance and registry directions against the builder, and where the GDA itself is the obstacle, a writ petition before the Allahabad High Court. Buyer associations acting jointly get materially faster traction than individuals.",
      },
      {
        question: "Should I file before UP RERA or the consumer forum for my Ghaziabad flat?",
        answer:
          "For delay, refund and possession claims against a RERA-registered project, UP RERA is normally the stronger forum — purpose-built, cheaper, and backed by DM execution of recovery certificates. The consumer commissions suit deficiency-of-service claims, pre-RERA grievances and buyers wanting compensation heads RERA does not grant. The same amount cannot be recovered twice, so pick one track per relief — a lawyer chooses based on your documents and the builder's financial state.",
      },
    ],
    localNotes: [
      "Raj Nagar Extension, Crossings Republik and Wave City hold Ghaziabad's densest stock of delayed and registry-blocked flats — check the builder's GDA-dues and completion-certificate position before you buy, settle or elect your Section 18 remedy.",
      "Everything files online and hearings sit at the Greater Noida bench — a Ghaziabad RERA matter never requires a Lucknow trip, so do not let distance delay your complaint.",
      "The UP REAT pre-deposit rule is your leverage: a refund order the builder must fully deposit to appeal usually produces a settlement offer — and the DM recovery-certificate pipeline is where relentless follow-up wins.",
    ],
  },
};
