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
};
