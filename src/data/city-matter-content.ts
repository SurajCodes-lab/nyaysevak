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

  // ════════════════ WEEK 22: FARIDABAD MATTER TRANCHE (6 entries) ════════════════
  // ──────────────── FARIDABAD × CHEQUE BOUNCE (S.138 NI ACT) ────────────────
  "faridabad__cheque-bounce-recovery": {
    lead:
      "Faridabad is one of Haryana's biggest MSME and manufacturing hubs — auto components, light engineering, job-work units — and the classic cheque-bounce pattern here is the unpaid-invoice cheque between a vendor and a buyer. Section 138 NI Act complaints from Faridabad account-holders are heard by the Judicial Magistrate courts at the Sector 12 district court complex (or Ballabgarh for that side of the district). NyaySevak connects you with Bar-Council-verified Faridabad cheque-bounce lawyers who send the statutory notice within the 30-day window, file before the correct magistrate, press interim compensation under Section 143A, and use the district's Lok Adalat machinery to convert the prosecution into actual recovery.",
    landscape: [
      "Jurisdiction is fixed by your bank, not the drawer's address: after the 2015 amendment to Section 142 NI Act, a cheque-bounce complaint is filed where the payee's bank branch is located. So if you presented the cheque through a Faridabad branch, your case is heard by a Judicial Magistrate at the Faridabad District Court complex in Sector 12 — even against a drawer sitting in Delhi, Noida, or another state — while matters from the Ballabgarh side of the district go to the Ballabgarh Sub-Divisional Courts. Appeals against conviction or acquittal lie to the Sessions Court, Faridabad; quashing and revision go to the Punjab & Haryana High Court at Chandigarh under Section 528 BNSS (the old Section 482 CrPC).",
      "Two financial levers turn a Faridabad prosecution into recovery pressure. Section 143A lets the trial magistrate order interim compensation of up to 20% of the cheque amount once the accused pleads not guilty — money in hand before the trial ends. If the drawer is convicted and appeals, Section 148 requires a minimum 20% deposit before the Sessions Court hears the appeal. And because so many Faridabad cheques are drawn by proprietorships and private companies in the industrial estates, Section 141 matters: the company, its signatory, and every person in charge of its business when the cheque was issued can all be prosecuted.",
      "Section 138 is compoundable, and Faridabad's settlement machinery is active: the District Legal Services Authority runs regular Lok Adalats, and the National Lok Adalats dispose of NI Act matters in bulk — usually on a payment schedule recorded before the court. The mediation centre at the district court handles pre-trial and referred settlements. For larger trade debts, a parallel civil track is often run alongside the prosecution: a recovery suit before the Commercial Court, Faridabad under the Commercial Courts Act, which requires Section 12A pre-institution mediation unless urgent interim relief is sought — itself a structured settlement opportunity.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate Courts — Faridabad District Court complex, Sector 12",
      "Ballabgarh Sub-Divisional Courts (matters from the Ballabgarh side of the district)",
      "Sessions Court, Faridabad (appeals against S.138 conviction/acquittal)",
      "Punjab & Haryana High Court, Chandigarh (quashing under S.528 BNSS; revision)",
      "Commercial Court, Faridabad (parallel civil recovery; S.12A pre-institution mediation)",
      "DLSA Faridabad Lok Adalats & mediation centre at the district court (NI Act settlements)",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Drafting and dispatching the S.138 notice within 30 days of the return memo — the step most self-represented payees get wrong." },
      { title: "S.138 Complaint Filing", desc: "Filing before the Judicial Magistrate at Sector 12 or Ballabgarh serving your bank branch, with complete cause-of-action documentation." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing the magistrate to order up to 20% of the cheque amount as interim compensation at the trial stage." },
      { title: "Defence of S.138 Cases", desc: "Rebutting the S.139 presumption — security cheques, stop-payment on disputed supplies, quality disputes on the underlying invoice, notice defects." },
      { title: "Vendor & Trade-Debt Recovery", desc: "The Faridabad staple: bounced cheques against unpaid supply invoices between MSME vendors and buyers, often with running-account reconciliation." },
      { title: "Company & Director Liability", desc: "Prosecuting the drawer company, its signatory, and persons in charge under S.141 — common where the buyer is a private limited unit in the industrial estates." },
      { title: "Settlement & Compounding", desc: "DLSA Lok Adalats, National Lok Adalats, and court-referred mediation — frequently the fastest route from prosecution to actual money." },
      { title: "Parallel Commercial-Court Recovery", desc: "Recovery suits before the Commercial Court, Faridabad for larger debts, run alongside the S.138 prosecution for dual pressure." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque-bounce case in Faridabad?",
        answer:
          "Before the Judicial Magistrate court serving the area of your bank branch — the branch where you presented the cheque. Since the 2015 amendment to Section 142 NI Act, the payee's bank branch fixes territorial jurisdiction, so a Faridabad account-holder files in Faridabad even against a drawer based elsewhere. Most complaints go to the district court complex at Sector 12; matters from the Ballabgarh side go to the Ballabgarh Sub-Divisional Courts.",
      },
      {
        question: "My buyer's cheque against a supply invoice bounced. Is that a S.138 case?",
        answer:
          "Almost always, yes — a cheque issued against an unpaid invoice is a cheque for a legally enforceable debt, which is exactly what Section 138 covers. This is the most common Faridabad pattern: MSME vendors in the industrial estates holding bounced cheques from buyers. Keep the invoice, delivery challans, ledger, and return memo together — the drawer's usual defence is a quality or reconciliation dispute, and the paper trail defeats it. Start with a free case assessment to map the timeline.",
      },
      {
        question: "What is the deadline for the cheque-bounce notice?",
        answer:
          "You must send the written demand notice within 30 days of receiving the bank's return memo. The drawer then has 15 days to pay; if they don't, the complaint must be filed within one month after that 15-day window closes. Miss either deadline and the prosecution can fail on limitation alone — the notice stage is where a Faridabad lawyer earns their place first.",
      },
      {
        question: "Can I get money before the trial in Faridabad ends?",
        answer:
          "Often, yes. Under Section 143A the trial magistrate can direct the drawer to pay interim compensation of up to 20% of the cheque amount once they plead not guilty. If the drawer is convicted and appeals to the Sessions Court, Faridabad, Section 148 requires a further minimum 20% deposit before the appeal is heard. For larger trade debts, a parallel suit before the Commercial Court, Faridabad adds civil pressure.",
      },
      {
        question: "The cheque was issued by a company in the industrial area — who do I prosecute?",
        answer:
          "The company itself plus every person in charge of and responsible for its business when the cheque was issued — typically the signatory and the directors actively running the unit — under Section 141 NI Act. This matters in Faridabad, where many drawer entities are private limited companies or LLPs in the industrial estates. Nominee or non-executive directors with no role in day-to-day affairs can contest their impleadment.",
      },
      {
        question: "Can a cheque-bounce case in Faridabad be settled?",
        answer:
          "Yes — Section 138 is compoundable at any stage. The District Legal Services Authority Faridabad runs regular Lok Adalats, and National Lok Adalats settle NI Act matters in bulk, usually on a payment schedule recorded before the court; the mediation centre at the district court handles referred settlements. Once the money is paid, the case is compounded — or the Punjab & Haryana High Court quashes the proceedings on settlement. For most payees, settlement is the fastest route to actual recovery.",
      },
    ],
    localNotes: [
      "Your bank branch's location — not the drawer's address — fixes jurisdiction (S.142(2) NI Act, post-2015): Faridabad branches mean the Sector 12 district courts, with Ballabgarh-side matters at the Ballabgarh Sub-Divisional Courts.",
      "Faridabad's MSME/manufacturing base makes vendor-buyer invoice cheques the dominant S.138 pattern — keep invoices, challans, and ledgers with the return memo, and consider a parallel Commercial Court, Faridabad suit for larger debts.",
      "Use the financial levers and the settlement machinery together: S.143A interim compensation (up to 20%), the S.148 appellate deposit, and DLSA Faridabad's Lok Adalats — which dispose of NI Act matters in bulk — turn the prosecution into real recovery pressure.",
    ],
  },

  // ──────────────── FARIDABAD × COMPANY REGISTRATION & STARTUP ────────────────
  "faridabad__company-registration": {
    lead:
      "Faridabad founders — whether an auto-components unit in the DLF Industrial Area, a job-work shop in Sector 24-25, or a startup in Neharpar/Greater Faridabad — incorporate through the same fully-online MCA route as the rest of India, but the jurisdictional map is Haryana-specific: the Central Registration Centre processes the SPICe+ filing, the Registrar of Companies (ROC) Delhi (whose jurisdiction covers NCT of Delhi and Haryana) handles everything post-incorporation, and the NCLT Chandigarh Bench is the company-law tribunal for Haryana companies. NyaySevak connects you with verified Faridabad company-registration and startup lawyers who choose the right structure, draft the MoA/AoA around your actual business, clear the registered-office and name hurdles, and set up the compliance calendar — starting with a free case assessment.",
    landscape: [
      "Incorporation itself is end-to-end digital: SPICe+ Part A reserves the name, Part B files the incorporation with DIN allotment for directors, and the linked AGILE-PRO form bundles GST, EPFO, and ESIC registrations in one shot; DSC (digital signature) procurement for the signatories comes first. The filing is processed by the Central Registration Centre — physically located at IMT Manesar, though no Faridabad founder ever visits it, because the entire process runs on the MCA portal. What is not automatic is judgment: name availability against existing companies and trademarks, MoA object clauses that actually match a manufacturing or services business, and shareholding/director structure that anticipates investors — this is where a lawyer earns their place before the certificate of incorporation arrives.",
      "The structural choice comes before the filing. Private limited remains the default for anything that will raise investment or take institutional purchase orders; an LLP suits professional-services and family-run trading setups with a lighter compliance load; an OPC works for single founders; a plain partnership or proprietorship still makes sense for small job-work units — though it forfeits limited liability. Faridabad-specific adjacencies stack on top: Udyam (MSME) registration for the manufacturing base, factory-licence and Haryana State Pollution Control Board (HSPCB) consents for units in the industrial estates, and shops-and-establishments registration under the Haryana rules for offices and retail. Registered-office proof — ownership documents or a rent deed with the owner's NOC plus a utility bill — is the commonest cause of resubmission remarks.",
      "Incorporation is day one, not the finish line. Commencement of business (INC-20A) must be filed within 180 days before the company can start operations or borrow; the annual ROC cycle to the ROC Delhi runs AOC-4 (financials), MGT-7/7A (annual return), and ADT-1 (auditor appointment), with directors' KYC alongside; missed filings attract per-day additional fees that quickly dwarf the cost of doing it right. Disputes and schemes — oppression-mismanagement, mergers, strike-off restorations — go to the NCLT Chandigarh Bench, the tribunal for Haryana. A practical Faridabad pattern worth noting: founders frequently register with a Faridabad registered office (home or factory address) while selling and operating across the NCR — perfectly lawful, provided the registered office genuinely receives communication and the state-level registrations (GST, shops-and-establishments) match where business is actually done.",
    ],
    courtsForThisMatter: [
      "Central Registration Centre (CRC), MCA — processes SPICe+ incorporations (at IMT Manesar; fully online)",
      "Registrar of Companies (ROC), Delhi — post-incorporation jurisdiction for NCT of Delhi & Haryana",
      "NCLT Chandigarh Bench (company-law tribunal for Haryana companies)",
      "Regional Director (Northern Region), MCA (appeals, name disputes, shifting of registered office)",
      "Haryana State Pollution Control Board & factory-licensing authorities (industrial-unit consents)",
      "GST, EPFO & ESIC authorities via AGILE-PRO (bundled registrations at incorporation)",
    ],
    caseTypes: [
      { title: "Structure Selection", desc: "Pvt Ltd vs LLP vs OPC vs partnership — matched to funding plans, liability exposure, and the compliance load a Faridabad MSME can actually carry." },
      { title: "SPICe+ Incorporation", desc: "Name reservation (SPICe+ Part A/RUN), DSC and DIN, Part B filing through the CRC, and AGILE-PRO for GST/EPFO/ESIC in one pass." },
      { title: "MoA/AoA Drafting", desc: "Object clauses that match a manufacturing or services business, and articles that anticipate founders' rights, transfer restrictions, and future investors." },
      { title: "Registered-Office Setup", desc: "Rent deed, owner's NOC, and utility-bill proof done right — the commonest resubmission trigger — including Faridabad-office-plus-NCR-operations structures." },
      { title: "MSME & Industrial Registrations", desc: "Udyam registration, factory licence, HSPCB consents, and Haryana shops-and-establishments — the licensing stack around the incorporation for industrial-estate units." },
      { title: "Post-Incorporation Compliance", desc: "INC-20A within 180 days, then the annual ROC Delhi cycle — AOC-4, MGT-7, ADT-1, director KYC — on a calendar, not on panic." },
      { title: "Founder & Shareholder Agreements", desc: "Founders' agreements, ESOP pools, and share-transfer paperwork for Neharpar/Greater Faridabad startups heading toward investment." },
      { title: "ROC Disputes & NCLT Matters", desc: "Strike-off restorations, name objections before the Regional Director, and oppression-mismanagement or scheme matters at the NCLT Chandigarh Bench." },
    ],
    faqs: [
      {
        question: "Do I have to visit any government office to register a company in Faridabad?",
        answer:
          "No. Incorporation is fully online through the MCA portal: SPICe+ Part A reserves the name, Part B files the incorporation, and AGILE-PRO bundles GST, EPFO, and ESIC. The filing is processed by the Central Registration Centre — physically at IMT Manesar, but you never go there. The only physical steps are getting your digital signature (DSC) verified and assembling registered-office proof.",
      },
      {
        question: "Which ROC and tribunal cover a Faridabad company?",
        answer:
          "The Registrar of Companies, Delhi — whose jurisdiction covers both the NCT of Delhi and Haryana — handles all post-incorporation filings and scrutiny for Faridabad companies. Company-law disputes, schemes, and strike-off restorations go to the NCLT Chandigarh Bench, the tribunal for Haryana. So your annual filings go to ROC Delhi even though your factory or office is in Faridabad.",
      },
      {
        question: "Private limited, LLP, or OPC — what suits a Faridabad manufacturing unit?",
        answer:
          "It depends on where the business is going. A private limited company is the default if you will raise investment, take institutional purchase orders, or want clean limited liability for an industrial unit. An LLP carries a lighter compliance load and suits services and family-run trading. An OPC fits a single founder. Many small job-work units stay proprietorships — cheap, but with unlimited personal liability. A free case assessment can map the choice to your actual plans.",
      },
      {
        question: "Can I use my Faridabad home or factory as the registered office?",
        answer:
          "Yes — a residential or factory address works, with ownership proof or a rent deed plus the owner's NOC and a recent utility bill. Registered-office proof is the commonest cause of resubmission remarks, so get the paperwork exact. Many founders register with a Faridabad address while operating across the NCR — lawful, provided the office genuinely receives official communication and your GST and shops-and-establishments registrations match where you actually do business.",
      },
      {
        question: "What registrations does a Faridabad industrial unit need beyond incorporation?",
        answer:
          "Typically: Udyam (MSME) registration — which unlocks priority-sector lending, delayed-payment protection, and tender preferences; a factory licence if you cross the worker thresholds; consent-to-establish and consent-to-operate from the Haryana State Pollution Control Board for units in the industrial estates like DLF Industrial Area or Sector 24-25; and shops-and-establishments registration under the Haryana rules for offices. GST, EPFO, and ESIC usually come bundled at incorporation via AGILE-PRO.",
      },
      {
        question: "What must I file after the company is incorporated?",
        answer:
          "First, INC-20A (commencement of business) within 180 days — without it the company cannot start operations or borrow, and it is a common strike-off trigger. Then the annual cycle to ROC Delhi: AOC-4 for financial statements, MGT-7 or MGT-7A for the annual return, ADT-1 for auditor appointment, plus directors' KYC. Late filings attract per-day additional fees that escalate fast, so a compliance calendar from day one is cheaper than any rescue later.",
      },
    ],
    localNotes: [
      "Incorporation is processed by the CRC (fully online), but everything after belongs to ROC Delhi — the registrar for NCT of Delhi and Haryana — and disputes go to the NCLT Chandigarh Bench: a three-body map every Faridabad founder should know.",
      "Faridabad's incorporation work is MSME-flavoured: Udyam registration, factory licence, and HSPCB consents stack on top of SPICe+ for units in the DLF Industrial Area and Sector 24-25 estates, while Neharpar/Greater Faridabad startups add founders' agreements and ESOP structures.",
      "Founders commonly register with a Faridabad registered office while operating across the NCR — lawful, but the office must genuinely receive communication, and INC-20A within 180 days plus the AOC-4/MGT-7/ADT-1 annual cycle are non-negotiable.",
    ],
  },

  // ──────────────── FARIDABAD × RERA / BUILDER-BUYER DISPUTES ────────────────
  "faridabad__rera-complaint": {
    lead:
      "Faridabad's builder-buyer disputes cluster in Neharpar — Greater Faridabad's Sectors 75–89 — where a wave of projects launched in the late 2000s and 2010s ran years behind schedule, and older BPTP/SRS-era developments stalled outright. The critical jurisdictional fact most buyers get wrong: Faridabad falls under HRERA Panchkula, not HRERA Gurugram — the Gurugram authority's territory is Gurugram district alone, and every other Haryana district including Faridabad files at Panchkula. NyaySevak connects you with verified RERA lawyers who file your complaint on the HRERA Panchkula portal, argue the Section 18 refund-versus-interest choice, and drive execution until money actually moves.",
    landscape: [
      "The primary forum for a Faridabad homebuyer is the Haryana Real Estate Regulatory Authority, Panchkula. Complaints are filed online on the HRERA Panchkula portal with a modest statutory fee, and Section 18 RERA frames the core decision: exit the delayed project and recover everything you paid with prescribed interest, or stay in and claim delay-possession interest for every month past the promised date. The choice is strategic — refund makes sense in genuinely stalled towers, while delay interest suits projects that will eventually deliver. A lawyer computes the claim payment-by-payment from your builder-buyer agreement and receipts, because the interest often rivals the principal in decade-old delays.",
      "Execution is where Faridabad cases are won or lost. HRERA can enforce its orders as arrears of land revenue through the district administration, route compensation questions through its adjudicating officer, and transfer decree-execution so an unpaid order behaves like a civil decree against the builder's assets. Builder appeals go to the Haryana Real Estate Appellate Tribunal at Chandigarh — but Section 43(5) forces the appealing promoter to pre-deposit the full refund amount (or a substantial slice of the penalty) before the appeal is even entertained. That pre-deposit requirement is the single strongest settlement lever a Faridabad buyer holds, and experienced counsel uses it deliberately.",
      "RERA is not the only track. Following Imperia Structures, a homebuyer can instead sue for deficiency of service before the District Consumer Commission at Faridabad or the Haryana SCDRC at Panchkula — the remedies are concurrent, not exclusive. When the developer is insolvent, the fight shifts to the NCLT under the IBC, where allottees rank as financial creditors and a group of at least 100 or 10% of the project's allottees can jointly initiate proceedings. Writs to the Punjab & Haryana High Court remain available against authorities and HRERA itself. Layer in Faridabad's local frictions — FMDA master-plan infrastructure running behind the towers, registry and occupancy-certificate delays, and the Surajkund/Sector 37 side pockets — and forum selection becomes the lawyer's core skill.",
    ],
    courtsForThisMatter: [
      "HRERA Panchkula (the authority for Faridabad district — not HRERA Gurugram)",
      "Haryana Real Estate Appellate Tribunal, Chandigarh (appeals; builder's S.43(5) pre-deposit)",
      "Adjudicating Officer, HRERA Panchkula (compensation claims)",
      "District Consumer Commission, Faridabad / Haryana SCDRC, Panchkula (Imperia Structures concurrent route)",
      "NCLT (builder insolvency under IBC — allottees as financial creditors)",
      "Punjab & Haryana High Court (writs against authorities / HRERA)",
    ],
    caseTypes: [
      { title: "Refund with Interest (S.18)", desc: "Exit a delayed Neharpar or Greater Faridabad project with a full refund plus prescribed interest computed from each payment." },
      { title: "Delay-Possession Interest", desc: "Stay in the project and claim monthly interest for the entire delay past the promised possession date." },
      { title: "Execution of HRERA Orders", desc: "Enforcing unpaid orders as arrears of land revenue, through the adjudicating officer, or via decree-execution transfer." },
      { title: "Appellate Defence at HREAT", desc: "Holding the builder to the S.43(5) pre-deposit before the Chandigarh tribunal — and converting that pressure into settlement." },
      { title: "Registry & OC Disputes", desc: "Forcing conveyance and registry where occupancy certificates or builder-authority dues block completed towers." },
      { title: "Consumer-Forum Route", desc: "Deficiency-of-service complaints before the Faridabad District Commission or Haryana SCDRC where that forum suits the case better." },
      { title: "Builder Insolvency (NCLT/IBC)", desc: "Representing allottee groups (100 or 10% threshold) as financial creditors when the developer collapses — the stalled-project pattern." },
      { title: "Stalled-Project Revival", desc: "Strategies for the older BPTP/SRS-type stuck developments — association action, forum switching, and negotiated completion." },
    ],
    faqs: [
      {
        question: "Which RERA authority covers Faridabad — Gurugram or Panchkula?",
        answer:
          "HRERA Panchkula. Haryana split its authority in two, but HRERA Gurugram's jurisdiction is Gurugram district only — every other district, including Faridabad, files before HRERA Panchkula. Filing at the wrong authority wastes months, and it is one of the most common self-filing errors we see from Greater Faridabad buyers. The complaint itself is filed online on the HRERA Panchkula portal, so you do not need to travel to Panchkula to start.",
      },
      {
        question: "My Neharpar flat is years delayed. Refund or delay interest — which should I claim?",
        answer:
          "Section 18 gives you the choice. A refund with prescribed interest suits projects that look genuinely stalled; delay-possession interest suits towers that will plausibly deliver, since you keep the flat and collect interest for every month of delay. The promised date in your builder-buyer agreement (or the RERA-registered completion date) is the trigger. In Sectors 75–89, where delays commonly run five years or more, the interest component alone can be very substantial — get the claim computed before you elect.",
      },
      {
        question: "The builder is ignoring my HRERA order. How do I actually recover the money?",
        answer:
          "File for execution. HRERA Panchkula can recover the amount as arrears of land revenue through the district machinery, route compensation through its adjudicating officer, and transfer the order for execution like a civil decree against the builder's assets. Execution is slower than winning the order but it is where persistence pays — and where a lawyer who tracks the file matters far more than one who only argued the hearing.",
      },
      {
        question: "The builder has appealed my refund order. Does that freeze everything?",
        answer:
          "Not without payment. Under Section 43(5) RERA, a promoter appealing to the Haryana Real Estate Appellate Tribunal at Chandigarh must first deposit the full refund amount ordered (or a substantial share of any penalty) with the tribunal. Many Faridabad builders abandon or settle appeals rather than fund the pre-deposit — so a builder's appeal, properly defended, often accelerates your recovery instead of delaying it.",
      },
      {
        question: "Can I go to the consumer court instead of HRERA?",
        answer:
          "Yes. The Supreme Court held in Imperia Structures that RERA and the Consumer Protection Act are concurrent remedies — a Faridabad allottee can choose the District Consumer Commission at Faridabad or the Haryana SCDRC at Panchkula instead of HRERA. Consumer forums can award compensation for harassment and mental agony that RERA typically does not, but HRERA's land-revenue execution and the S.43(5) pre-deposit are levers the consumer route lacks. Forum choice should follow the builder's specific situation.",
      },
      {
        question: "My builder is insolvent. Is a RERA complaint still worth filing?",
        answer:
          "Once an NCLT moratorium begins, proceedings against the builder freeze and the action shifts to the insolvency process, where homebuyers rank as financial creditors with a seat in the committee of creditors. To initiate insolvency themselves, allottees need at least 100 buyers or 10% of the project's allottees acting jointly. For Faridabad's older stalled projects this associative route — organising the buyer group, then choosing between RERA, NCLT, and the High Court — is usually the realistic path, and it starts with a free case assessment of where your project actually stands.",
      },
    ],
    localNotes: [
      "Faridabad files at HRERA Panchkula, not HRERA Gurugram — the Gurugram authority covers Gurugram district only, and misdirected complaints from Greater Faridabad buyers are routinely returned.",
      "Neharpar / Greater Faridabad (Sectors 75–89) is the district's delayed-project belt: long possession delays, FMDA infrastructure catching up behind the towers, and registry/OC bottlenecks even in completed blocks.",
      "The builder's S.43(5) pre-deposit before the Chandigarh appellate tribunal is your strongest lever — an appealing promoter must put the refund amount on the table before being heard.",
    ],
  },

  // ──────────────── FARIDABAD × NCLT & INSOLVENCY (IBC) ────────────────
  "faridabad__nclt-ibc": {
    lead:
      "For a Faridabad company — or a creditor chasing one — the National Company Law Tribunal is not in Faridabad or even Delhi: Haryana-registered companies litigate before the NCLT Chandigarh bench, roughly 250 km away, with appeals to the NCLAT at New Delhi. That geography shapes everything, from who you hire to how hearings are attended. NyaySevak connects you with verified insolvency and company-law teams who appear at Chandigarh while managing your matter from Faridabad — drafting the Section 8 demand notice, filing the S.7 or S.9 petition, defending promoters, and running oppression-and-mismanagement or strike-off-restoration petitions before the same bench.",
    landscape: [
      "The IBC's two front doors are Section 7 for financial creditors and Section 9 for operational creditors, both requiring a default of at least ₹1 crore. The operational route — the one most Faridabad auto-component and engineering vendors use — starts with a Form 3/Form 4 demand notice under Section 8; the corporate debtor gets ten days to pay or flag a pre-existing dispute, and under Mobilox even a plausible pre-existing dispute defeats the petition. Used well, the demand notice itself is potent recovery pressure: many OEM-chain buyers pay on notice rather than risk admission, a moratorium under Section 14, and loss of management. Withdrawal after admission needs Section 12A — 90% approval of the committee of creditors — so the leverage is front-loaded.",
      "Faridabad's insolvency docket reflects its industrial character: manufacturing and auto-component supply chains where a vendor several tiers below an OEM absorbs the shock of a customer's collapse, industrial sickness and revival attempts in the older sectors, and — from the housing side — dues stuck in insolvent builders, where allottees proceed as financial creditors through the 100-or-10% joint route. For MSME vendors below or around the ₹1 crore threshold, the practical parallel track is MSME Samadhaan: a reference to the Haryana Micro and Small Enterprises Facilitation Council, which carries compound-interest liability for delayed payments and needs no insolvency at all. A good team runs the S.8 notice and the MSEFC reference as complementary pressure, not alternatives chosen blindly.",
      "The Chandigarh bench also hears the company-law side for Haryana entities: oppression-and-mismanagement petitions under Sections 241–242 — common in Faridabad's family-held manufacturing companies when a faction is squeezed out — restoration of struck-off companies, and schemes and reductions. Personal guarantors to corporate debtors (typically promoters who guaranteed working-capital lines) are likewise pursued before the NCLT. On the exit side, voluntary liquidation under the IBC and STK-2 strike-off give defunct Faridabad units a clean wind-down. The 250-km problem is real but shrinking: NCLT video-conference hearings cut routine travel, and the working model is a lawyer team that appears at Chandigarh — physically when the matter demands it — while the client is briefed and documents move from Faridabad.",
    ],
    courtsForThisMatter: [
      "NCLT Chandigarh Bench (the tribunal for Haryana-registered companies, ~250 km from Faridabad)",
      "NCLAT, New Delhi (appeals from NCLT Chandigarh)",
      "MSE Facilitation Council, Haryana (MSME Samadhaan — parallel delayed-payment route for vendors)",
      "Supreme Court of India (appeals from NCLAT on questions of law)",
      "Punjab & Haryana High Court (writs touching NCLT/authority action)",
      "Registrar of Companies / Official Liquidator (strike-off, voluntary liquidation interface)",
    ],
    caseTypes: [
      { title: "S.8 Demand Notice (Operational)", desc: "Form 3/Form 4 notice for unpaid supplies — often the highest-leverage recovery step a Faridabad vendor has against a defaulting buyer." },
      { title: "S.9 Petition Filing", desc: "Operational-creditor petitions at NCLT Chandigarh once the ₹1 crore default stands and no pre-existing dispute is flagged." },
      { title: "S.7 Financial-Creditor Petitions", desc: "Initiating CIRP for lenders, NBFCs, and homebuyer groups (100 or 10% of allottees) against insolvent builders." },
      { title: "Corporate-Debtor Defence", desc: "Resisting admission on Mobilox pre-existing-dispute grounds, negotiating pre-admission settlement, and S.12A withdrawal strategy." },
      { title: "Oppression & Mismanagement (S.241-242)", desc: "Shareholder-faction disputes in Faridabad's family-held manufacturing companies, fought before the Chandigarh bench." },
      { title: "Personal-Guarantor Proceedings", desc: "Insolvency of promoters who guaranteed the company's debt — pursued (or defended) before the NCLT." },
      { title: "MSME Samadhaan (MSEFC Haryana)", desc: "Facilitation-council references for delayed payments with compound interest — the sub-crore parallel route for MSME suppliers." },
      { title: "Wind-Down & Restoration", desc: "Voluntary liquidation and STK-2 strike-off for defunct units; NCLT restoration of companies struck off in error." },
    ],
    faqs: [
      {
        question: "Which NCLT bench handles a Faridabad company?",
        answer:
          "NCLT Chandigarh — the bench with territorial jurisdiction over companies registered in Haryana. There is no NCLT bench in Faridabad or Gurugram, and the Delhi bench next door covers NCT of Delhi companies only, so a Faridabad company's insolvency, oppression-and-mismanagement, or restoration matter travels roughly 250 km to Chandigarh. Appeals go to the NCLAT at New Delhi.",
      },
      {
        question: "A buyer owes my Faridabad unit a large sum. Can I use the IBC to recover it?",
        answer:
          "If the default is ₹1 crore or more, yes — you serve a Section 8 demand notice (Form 3 or Form 4), wait ten days, and file a Section 9 petition at NCLT Chandigarh if payment does not come. The notice alone often produces payment, because admission means a moratorium and loss of management for the debtor. But under the Mobilox test a genuine pre-existing dispute — quality claims, debit notes, prior correspondence — defeats the petition, so the notice must be built on clean documentation.",
      },
      {
        question: "My dues are below ₹1 crore. What are my options?",
        answer:
          "The IBC is closed below the ₹1 crore threshold, but a registered MSME supplier can file an MSME Samadhaan reference before the Haryana Micro and Small Enterprises Facilitation Council, which carries compound-interest liability on delayed payments and can culminate in an arbitral award. Ordinary civil and commercial-court recovery, summary suits, and negotiated settlement remain available. For many Faridabad auto-component vendors the MSEFC route plus firm notice-stage negotiation recovers more, faster, than any tribunal fight — a free case assessment can map which track fits your paper trail.",
      },
      {
        question: "How do we manage a case 250 km away in Chandigarh?",
        answer:
          "This is the practical question for every Faridabad litigant, and the working answer is a team structure: counsel who regularly appear before the NCLT Chandigarh bench handle listings and hearings, while coordination, documents, and client meetings run from Faridabad or over calls. NCLT video-conference hearings have cut routine travel substantially — many procedural listings need no one physically at Chandigarh — with physical appearance reserved for admission, final arguments, and contested applications.",
      },
      {
        question: "My company received a Section 8 demand notice. What should we do in the ten days?",
        answer:
          "Act immediately — the ten-day window is where the case is usually decided. If a genuine dispute predates the notice (quality rejections, debit notes, correspondence contesting the invoice), reply on the record raising it: under Mobilox a plausible pre-existing dispute bars admission of the Section 9 petition. If the debt is undisputed, negotiate before filing, because once a petition is admitted at Chandigarh, withdrawal needs Section 12A approval from 90% of the committee of creditors and management passes to a resolution professional under the Section 14 moratorium.",
      },
      {
        question: "Our builder in Greater Faridabad is insolvent. Can flat buyers use the NCLT?",
        answer:
          "Yes — homebuyers are financial creditors under the IBC, so allottees can file under Section 7 at NCLT Chandigarh, provided at least 100 allottees or 10% of the project's buyers (whichever is less) join the petition. Once CIRP begins, buyers vote in the committee of creditors through an authorised representative. Organising the buyer group is the hard part in practice; the legal route from Faridabad's stalled projects is well-established.",
      },
    ],
    localNotes: [
      "There is no NCLT bench in Faridabad or anywhere in the NCR portion of Haryana — Haryana companies file at NCLT Chandigarh (~250 km), with appeals to the NCLAT at New Delhi. Video-conference hearings now absorb most routine listings.",
      "Faridabad's insolvency work follows its factories: auto-component and engineering vendors in OEM supply chains, where the S.8 demand notice is often more valuable as recovery pressure than the petition itself.",
      "For MSME suppliers under the ₹1 crore IBC threshold, the Haryana MSE Facilitation Council (MSME Samadhaan) is the parallel route — compound interest on delayed payments, no insolvency required.",
    ],
  },

  // ──────────────── FARIDABAD × ANTICIPATORY BAIL (S.482 BNSS) ────────────────
  "faridabad__anticipatory-bail": {
    lead:
      "Anticipatory bail under Section 482 of the BNSS 2023 (the old Section 438 CrPC) is fully available in Haryana — unlike neighbouring UP, the state never deleted the remedy — and for a Faridabad FIR the application ordinarily goes first to the Sessions Court at the Faridabad District Court complex in Sector 12, with the Punjab & Haryana High Court at Chandigarh as the concurrent and appellate forum. NyaySevak connects you with Bar-Council-verified Faridabad anticipatory-bail lawyers who obtain a copy of the FIR, move the application before the right court fast, press for interim protection on the first listing, and manage the investigation-cooperation conditions that keep that protection alive.",
    landscape: [
      "The mechanics matter more than the panic. Faridabad is a Police Commissionerate — the city is headed by a Commissioner of Police with DCP zones covering NIT, Ballabgarh, and Central Faridabad — so the FIR you fear will typically sit with a police station in one of those zones (or the Ballabgarh sub-division for the southern belt). FIR copies are downloadable from the Haryana Police citizen portal, which lets a lawyer read the allegations and the sections invoked before drafting. The conventional sequence is Sessions Court first: judges at the Sector 12 complex hear anticipatory-bail applications daily, usually call for a police report, and can grant interim protection from arrest on the very first listing while the matter is argued.",
      "Two statutory shields run alongside. For offences punishable up to seven years, Section 35(3) BNSS (the old Section 41A CrPC) requires police to issue a notice of appearance rather than arrest, and the Supreme Court's Arnesh Kumar guidelines make a mechanical arrest in such cases open to challenge — a lawyer often responds to the 35(3) notice and pursues anticipatory bail in parallel. When bail is granted, expect the standard conditions: join the investigation whenever called, do not contact or influence witnesses, and do not leave India without leave of the court. Breach of these is the usual route by which protection gets cancelled, so compliance is part of the strategy, not an afterthought.",
      "Faridabad's geography creates a distinctive wrinkle: residents routinely face FIRs registered across the border in Delhi or UP, and outsiders face Faridabad FIRs. Following Priya Indoria (2023), the Sessions Court at Faridabad can grant short transit anticipatory bail — time-limited protection that lets you travel and apply before the court with jurisdiction over the outside-state FIR. The matters that dominate the anticipatory-bail board here are matrimonial complaints under Section 85 BNS (old 498A IPC), business-cheating complaints under Section 318 BNS arising from Faridabad's dense trade and industrial disputes, and property or possession scuffles. If arrest happens despite everything, regular bail under Sections 480/483 BNSS lies before the same complex, and default bail under Section 187(3) BNSS remains the fallback if the chargesheet is delayed.",
    ],
    courtsForThisMatter: [
      "Sessions Court, Faridabad District Court complex, Sector 12 (primary forum for S.482 BNSS applications)",
      "Punjab & Haryana High Court, Chandigarh (concurrent jurisdiction; second attempt after Sessions rejection)",
      "Magistrate Courts, Faridabad (S.35(3) BNSS notice compliance; remand; regular bail in magistrate-triable offences)",
      "Sessions Court, Faridabad — transit anticipatory bail for FIRs registered in Delhi/UP (Priya Indoria route)",
      "Ballabgarh sub-divisional courts (matters arising from Ballabgarh-zone police stations)",
      "Punjab & Haryana High Court (S.528 BNSS quashing of the FIR itself, where settlement or no offence is made out)",
    ],
    caseTypes: [
      { title: "Anticipatory Bail (S.482 BNSS)", desc: "Drafting and arguing the application before the Faridabad Sessions Court, with a push for interim protection on the first listing." },
      { title: "Matrimonial FIRs (S.85 BNS / 498A)", desc: "Protection for husbands and in-laws named in dowry-cruelty complaints — the single largest category on Faridabad's anticipatory-bail board." },
      { title: "Business & Cheating Complaints (S.318 BNS)", desc: "Trade-dispute FIRs dressed as cheating — common in Faridabad's industrial and trading belts — where civil-dispute arguments carry real weight." },
      { title: "Transit Anticipatory Bail", desc: "Short-duration protection from the Faridabad Sessions Court for an FIR registered in Delhi or UP, so you can apply before the jurisdictional court without arrest en route." },
      { title: "S.35(3) BNSS Notice Response", desc: "Appearing on and replying to police notices of appearance (old 41A) for ≤7-year offences, invoking Arnesh Kumar against mechanical arrest." },
      { title: "High Court Applications", desc: "Fresh or successive anticipatory-bail applications before the Punjab & Haryana High Court at Chandigarh after a Sessions rejection." },
      { title: "Regular & Default Bail", desc: "S.480/483 BNSS bail after arrest before the Sector 12 complex, and default bail under S.187(3) BNSS when the chargesheet misses its deadline." },
      { title: "Cancellation Defence & Condition Modification", desc: "Opposing cancellation applications and seeking relaxation of travel or reporting conditions as the investigation progresses." },
    ],
    faqs: [
      {
        question: "Where do I apply for anticipatory bail in Faridabad?",
        answer:
          "The Sessions Court at the Faridabad District Court complex in Sector 12 is the conventional first forum. The Punjab & Haryana High Court at Chandigarh has concurrent jurisdiction under Section 482 BNSS, but courts generally expect you to move the Sessions Court first; a Sessions rejection then lets you apply afresh at Chandigarh. Your lawyer will first pull the FIR — usually available online through the Haryana Police portal — to confirm which police station and zone the case sits in.",
      },
      {
        question: "Is anticipatory bail even available in Haryana?",
        answer:
          "Yes, fully. Haryana never removed the remedy — unlike UP, which deleted the old Section 438 CrPC for decades — so Section 482 BNSS operates in Faridabad exactly as the statute reads. This matters in the NCR: a Faridabad resident facing a UP FIR needs to understand a different bail landscape across the border, which is where transit anticipatory bail from the Faridabad Sessions Court comes in.",
      },
      {
        question: "How fast can I get protection from arrest?",
        answer:
          "Often on the first listing. The Faridabad Sessions Court routinely grants interim protection from arrest while it calls for a police report and hears the application fully — for urgent matters an application can be listed within a day or two of the FIR surfacing. For offences punishable up to seven years, a Section 35(3) BNSS notice plus the Arnesh Kumar guidelines add a second layer: police are expected to issue a notice of appearance, not arrest.",
      },
      {
        question: "The FIR against me is in Delhi or UP, but I live in Faridabad. What do I do?",
        answer:
          "Apply for transit anticipatory bail before the Sessions Court at Faridabad. Following the Supreme Court's Priya Indoria decision (2023), a Sessions Court where the applicant resides can grant short, time-bound protection from arrest for an FIR registered in another state — enough to travel and file a full anticipatory-bail application before the court that actually has jurisdiction. The reverse also works for outsiders facing Faridabad FIRs.",
      },
      {
        question: "What conditions come with anticipatory bail in Faridabad?",
        answer:
          "The standard trio: join the investigation whenever the investigating officer calls you, do not contact or attempt to influence witnesses or complainants, and do not leave India without the court's permission. Courts may add local reporting or a bond. Breaching a condition is the main ground on which the prosecution seeks cancellation, so treat compliance — including actually appearing at the police station in the correct DCP zone (NIT, Ballabgarh, or Central) — as part of the defence.",
      },
      {
        question: "What if I am arrested before the application is heard?",
        answer:
          "The remedy shifts to regular bail under Sections 480/483 BNSS before the magistrate or Sessions Court at the same Sector 12 complex — anticipatory bail becomes infructuous once you are in custody. If the police fail to file the chargesheet within the statutory period (60 or 90 days depending on the offence), default bail under Section 187(3) BNSS becomes an absolute right. A Faridabad lawyer will keep both tracks ready from day one.",
      },
    ],
    localNotes: [
      "Faridabad is a Police Commissionerate: FIRs sit with police stations under the NIT, Ballabgarh, or Central DCP zones (with the Ballabgarh sub-division covering the southern belt), and copies are usually downloadable from the Haryana Police citizen portal before you ever visit a thana.",
      "The Sessions Court at Sector 12 is the working forum — interim protection is realistically available on the first listing — with the Punjab & Haryana High Court at Chandigarh as the concurrent and second-attempt court.",
      "Cross-border FIRs are a Faridabad speciality: transit anticipatory bail under the Priya Indoria framework lets the local Sessions Court protect you long enough to face a Delhi or UP FIR before the right court.",
    ],
  },

  // ──────────────── FARIDABAD × MUTUAL CONSENT DIVORCE (S.13B HMA) ────────────────
  "faridabad__mutual-consent-divorce": {
    lead:
      "Mutual consent divorce under Section 13B of the Hindu Marriage Act (or Section 28 of the Special Marriage Act for civil marriages) is the fastest and least damaging way for a Faridabad couple to separate — a two-motion procedure before the Family Court at the Faridabad District Court complex, Sector 12, that can conclude in as little as a single stretch if the six-month cooling-off is waived. NyaySevak connects you with Bar-Council-verified Faridabad divorce lawyers who draft a watertight settlement deed, structure alimony payments so neither side is exposed if consent is withdrawn, and wind up every connected case — maintenance, DV Act, 498A — in the same settlement.",
    landscape: [
      "Jurisdiction first: a Section 13B petition can be filed where the marriage was solemnised, where the husband and wife last resided together, or where the wife currently resides. Because so many couples married elsewhere have set up their matrimonial home in Faridabad's sectors and NIT colonies, the last-residence ground brings most local couples before the Family Court at Sector 12. The petition is joint, supported by affidavits, marriage proof, address proof, and photographs, and pleads one year of separation plus a genuine failure of the marriage. The first motion records both parties' statements; the second motion — after the statutory interregnum — records them again, and the decree follows.",
      "The six-month cooling-off between motions is no longer rigid. In Amardeep Singh v. Harveen Kaur (2017) the Supreme Court held the period is directory, and the Faridabad Family Court can waive it where the couple has already been separated well over a year, mediation has failed, all disputes over alimony, streedhan, and custody are genuinely settled, and further waiting would only prolong agony. A properly drafted waiver application at the first motion is now routine practice. The real risk in a 13B is withdrawal of consent: Sureshta Devi holds that either spouse can resile any time before the decree, so a competent lawyer stages the settlement — part payment at first motion, balance at second, streedhan and custody terms recorded in the deed — so neither side pays everything before the divorce is irreversible.",
      "A Faridabad mutual-consent settlement rarely travels alone. The same deed should wind up Section 144 BNSS maintenance proceedings (the old 125 CrPC), Domestic Violence Act cases pending before Faridabad magistrates, and any 498A/Section 85 BNS FIR — the FIR requiring quashing before the Punjab & Haryana High Court on the strength of the settlement, on the Gian Singh line of cases. The court-annexed Mediation & Conciliation Centre at the Faridabad district court is the standard machine for converting a contested divorce, or a bundle of cross-cases, into a clean 13B package. For NRI spouses, local practice permits appearance through video-conferencing or a power of attorney at intermediate stages, but courts generally insist both spouses appear (physically or by VC as permitted) for the recording of statements at both motions — a scheduling detail your lawyer must plan around flight dates.",
    ],
    courtsForThisMatter: [
      "Family Court, Faridabad District Court complex, Sector 12 (S.13B HMA and S.28 SMA petitions)",
      "Mediation & Conciliation Centre, Faridabad district court (converting contested matters into mutual consent)",
      "Magistrate Courts, Faridabad (winding up S.144 BNSS maintenance and DV Act proceedings on settlement)",
      "Punjab & Haryana High Court, Chandigarh (quashing of 498A/S.85 BNS FIRs on settlement — Gian Singh line)",
      "Punjab & Haryana High Court (appeals and transfer petitions in matrimonial matters)",
      "Lok Adalats at the Faridabad complex (recording matrimonial settlements attached to the divorce package)",
    ],
    caseTypes: [
      { title: "Joint 13B Petition & Two Motions", desc: "Drafting and filing the joint petition, first-motion statements, and second-motion decree proceedings before the Sector 12 Family Court." },
      { title: "Cooling-Off Waiver", desc: "Amardeep Singh applications to waive the six-month gap where separation is long, mediation is exhausted, and all terms are settled." },
      { title: "Settlement Deed Drafting", desc: "One comprehensive deed covering alimony, streedhan return, child custody and visitation, and withdrawal of every pending case." },
      { title: "Staged-Payment Protection", desc: "Structuring alimony in tranches tied to the first and second motions so a Sureshta Devi consent-withdrawal cannot strand a paying spouse." },
      { title: "Winding Up Connected Cases", desc: "Closing S.144 BNSS maintenance, DV Act matters before Faridabad magistrates, and 498A/S.85 BNS FIRs via High Court quashing." },
      { title: "Mediation-to-13B Conversion", desc: "Using the court-annexed Mediation & Conciliation Centre to turn contested divorces and cross-FIRs into a single mutual-consent package." },
      { title: "NRI & Outstation Spouse Divorces", desc: "Video-conference appearances and power-of-attorney arrangements per local practice, with both statements scheduled around travel." },
      { title: "Special Marriage Act Divorces", desc: "Mutual consent under S.28 SMA for couples who married civilly or across religions — same two-motion architecture." },
    ],
    faqs: [
      {
        question: "Where do we file a mutual consent divorce in Faridabad?",
        answer:
          "Before the Family Court at the Faridabad District Court complex in Sector 12. Jurisdiction lies where the marriage took place, where you last lived together as a couple, or where the wife now resides — so couples who married in another city but made their home in Faridabad file locally on the last-residence ground. The petition is joint, so both spouses sign and both appear for statements.",
      },
      {
        question: "How long does a mutual consent divorce take in Faridabad?",
        answer:
          "The statute contemplates two motions separated by six to eighteen months, but the six-month cooling-off is waivable after Amardeep Singh v. Harveen Kaur (2017) where the separation already exceeds a year, mediation has failed, and every issue — alimony, streedhan, custody — is genuinely settled. With a waiver granted, Faridabad couples have completed the process in a matter of weeks; without it, expect roughly seven to eight months end to end.",
      },
      {
        question: "Can my spouse back out after we file?",
        answer:
          "Yes — under Sureshta Devi, either spouse can withdraw consent at any time before the decree, and the court cannot force the divorce through. This is why the settlement must be staged: typically part of the agreed amount changes hands at the first motion and the balance only at the second, with streedhan, custody, and case-withdrawal terms written into the deed. Structured properly, neither side is left having paid everything for a divorce that never happened.",
      },
      {
        question: "We also have maintenance, DV, and 498A cases running. What happens to those?",
        answer:
          "A well-drafted settlement winds all of them up. Maintenance under Section 144 BNSS and DV Act cases before Faridabad magistrates are withdrawn or closed on the settlement's terms. A 498A/Section 85 BNS FIR cannot simply be withdrawn — it must be quashed by the Punjab & Haryana High Court at Chandigarh on the basis of the settlement, following the Gian Singh line of authority. Your lawyer should sequence the quashing alongside the second motion so nothing is left hanging.",
      },
      {
        question: "One of us lives abroad. Do we both have to come to Faridabad?",
        answer:
          "Statements at both motions ordinarily require both spouses, but local practice accommodates NRI parties: courts have permitted appearance through video-conferencing, and a power of attorney can handle intermediate procedural steps. What cannot be delegated wholesale is the recording of consent itself, so the realistic plan is either two short India trips timed to the motions or a VC application supported by good cause — your lawyer will schedule the motions around travel.",
      },
      {
        question: "What documents do we need, and can mediation help us get to mutual consent?",
        answer:
          "Core documents: proof of marriage (certificate, cards, or ceremony photographs), address proof for both spouses, photographs, and the signed settlement deed; separation and settlement details go on affidavit. If you are not yet agreed, the Mediation & Conciliation Centre at the Faridabad district court exists precisely to convert contested divorces and bundles of cross-cases into an agreed 13B package — many Faridabad mutual consents start as referrals from a contested matter. Start with a free case assessment to map your terms before filing.",
      },
    ],
    localNotes: [
      "The Family Court at Sector 12 handles all Faridabad mutual-consent matters; couples who married elsewhere but last lived together in Faridabad file locally on the last-residence ground under S.13B HMA (or S.28 SMA for civil marriages).",
      "The six-month cooling-off is waivable on the Amardeep Singh criteria, but the Sureshta Devi withdrawal risk means alimony should always be staged across the two motions — never paid in full up front.",
      "A complete Faridabad settlement package pairs the 13B decree with closure of S.144 BNSS maintenance and DV Act cases before local magistrates and quashing of any 498A/S.85 BNS FIR at the Punjab & Haryana High Court, usually brokered through the district court's Mediation & Conciliation Centre.",
    ],
  },

  // ──────────────── HYDERABAD × MUTUAL CONSENT DIVORCE (S.13B HMA) ────────────────
  // Week 23 tranche: first South/West matter pages — GSC-driven (the Hyderabad
  // family page already carries the site's strongest fee-intent clicks).
  "hyderabad__mutual-consent-divorce": {
    lead:
      "For Hyderabad's HITEC City professionals, dual-income couples and a large Telugu NRI diaspora across the US, mutual consent divorce under Section 13B of the Hindu Marriage Act is the clean exit: two motions, one comprehensive settlement, no contested trench warfare. Done well, the paperwork — not the courtroom — decides everything. NyaySevak connects you with Bar-Council-verified Hyderabad mutual-consent-divorce lawyers who negotiate and draft the settlement deed, choose between the Nampally and Ranga Reddy Family Courts where the choice is real, manage cooling-off waivers and video-conference appearances for spouses abroad, and close every connected case in a single package.",
    landscape: [
      "The statute asks for three things: one year of living separately, a joint conviction that the marriage cannot continue, and consent that survives until the decree. For couples in central Hyderabad and the old city, the forum is the Family Court at the Metropolitan Civil Courts, Nampally; for the western Cyberabad belt — HITEC City, Gachibowli, Kondapur, Madhapur, Kukatpally, Miyapur — the matter usually belongs to the Family Court at the Ranga Reddy District Court, L. B. Nagar, because those localities fall in Ranga Reddy district rather than Hyderabad district. The first motion places the complete settlement on record and the court examines both spouses; the second motion, after the statutory interregnum, produces the decree. The six-month cooling-off period is directory, not mandatory — following Amardeep Singh v. Harveen Kaur (2017), the Family Court can waive it where the separation is already long, mediation has failed or is pointless, and every issue stands settled, compressing the whole matter into a couple of months.",
      "Forum choice is a genuine Hyderabad question, because Section 13B petitions can be filed where the marriage was solemnised, where the couple last resided together, or where the wife currently resides. A couple who married in their home town in Telangana or Andhra, lived together in a Gachibowli apartment, and where the wife has since moved to her parents' home may lawfully choose between three courts — and the practical differences (listing speed, commute from HITEC City, a judge's waiver practice) are worth weighing rather than defaulting to the nearest address. Couples married under the Special Marriage Act follow the parallel two-motion route under Section 28 of that Act, which notably requires two years of separation — not one — a distinction that catches many Hyderabad NRI and inter-community marriages. Whichever forum you pick, both spouses must personally satisfy the judge of their free consent at both motions.",
      "Hyderabad's demographic shapes the practice: one spouse is very often posted in the US — the Telugu diaspora in Texas, New Jersey, California and Washington is among India's largest — and Family Courts routinely permit appearance through video-conferencing for a spouse abroad, so a well-sequenced matter needs at most one India trip. The settlement deed carries the whole load — permanent alimony and its payment schedule, custody and visitation in enforceable detail, return of stridhan, division of the jointly financed flat (often itself tangled in a Cyberabad builder delay), and closure of every pending case. Where a 498A or DV Act complaint is pending, the deed provides for withdrawal or quashing — and because the Telangana High Court sits in Hyderabad itself, quashing under Section 528 BNSS happens in-town rather than requiring a long outstation trek, a real practical advantage. The court-annexed mediation centre run through the Telangana State Legal Services Authority regularly converts contested filings into this kind of package.",
    ],
    courtsForThisMatter: [
      "Family Court, Hyderabad — Metropolitan Civil Courts, Nampally (S.13B motions for Hyderabad district)",
      "Family Court, Ranga Reddy District Court at L. B. Nagar (Cyberabad belt — HITEC City, Gachibowli, Kukatpally, Madhapur)",
      "Telangana High Court, Hyderabad (appeals; S.528 BNSS quashing of settled 498A/S.85 BNS and connected FIRs)",
      "Mediation & Conciliation Centre, Telangana State Legal Services Authority (converting contested matters into consent terms)",
      "Magistrate Courts, Hyderabad & Ranga Reddy (closure of S.144 BNSS maintenance and DV Act proceedings on settlement)",
      "Supreme Court of India (transfer petitions between states; Article 142 dissolution in rare cases)",
    ],
    caseTypes: [
      { title: "S.13B Joint Petition & Both Motions", desc: "Drafting, filing and appearing at the first and second motions with consent recorded correctly." },
      { title: "Cooling-Off Waiver", desc: "Amardeep Singh applications to waive the six-month interregnum where separation is long and terms are complete." },
      { title: "Settlement Deed & Alimony Structuring", desc: "One-time alimony, stridhan return and property division drafted to be final, staged and enforceable." },
      { title: "Custody & Visitation Terms", desc: "Parenting schedules, relocation and schooling clauses detailed enough to prevent future guardianship rounds." },
      { title: "NRI & Video-Conference Matters", desc: "VC appearances and travel-efficient sequencing for Telugu-diaspora spouses posted abroad or in other cities." },
      { title: "Closure of 498A / DV / Maintenance Cases", desc: "Withdrawals before local magistrates and quashing at the Telangana High Court as part of the package." },
      { title: "Forum Selection — Nampally vs LB Nagar vs Home Town", desc: "Choosing between the Hyderabad and Ranga Reddy Family Courts, or the marriage-town court, when jurisdiction lies in more than one." },
    ],
    faqs: [
      {
        question: "Where do we file for mutual consent divorce in Hyderabad?",
        answer:
          "It depends on which side of the city you last lived together in. Couples whose last shared home was in Hyderabad district file at the Family Court, Nampally (the Metropolitan Civil Courts); couples whose last shared home was in the Cyberabad belt — HITEC City, Gachibowli, Kondapur, Madhapur, Kukatpally — file at the Ranga Reddy Family Court at L. B. Nagar, because those localities fall in Ranga Reddy district. Section 13B jurisdiction also lies where the marriage was solemnised and where the wife now resides, so you may have a real choice between two or three courts — pick on listing speed, commute, and the court's approach to cooling-off waivers.",
      },
      {
        question: "How long will it take at the Hyderabad Family Court?",
        answer:
          "The statutory frame is two motions with a six-to-eighteen-month gap, so an unassisted timeline runs about seven to nine months including service and listing. With an Amardeep Singh waiver — realistic where you have already been separated well beyond a year and the settlement is complete — the gap can be dispensed with and matters conclude in roughly six to ten weeks. The waiver is discretionary, so the petition and deed must demonstrate that reconciliation is genuinely dead, not merely assert it.",
      },
      {
        question: "My spouse works in the US. Must they fly to India twice?",
        answer:
          "Usually not. Family Courts in Hyderabad accept appearance through video-conferencing for a spouse abroad, particularly at one of the two motions. What cannot be delegated is consent itself — the judge must be satisfied that each spouse freely consents at both stages. With the size of the Telugu diaspora in Texas, New Jersey and California, the local courts are well practised at NRI matters; a well-planned case is sequenced around leave dates and time zones so that at most one trip is needed.",
      },
      {
        question: "What exactly should our settlement cover before we file?",
        answer:
          "Everything either of you could ever litigate: the alimony figure (or mutual waiver) with a payment schedule tied to the two motions, custody and visitation with real detail — holidays, relocation, schooling — return of stridhan and jewellery, division or buyout of the jointly financed flat, treatment of joint loans and accounts, and closure of every pending case between the families. In the Cyberabad belt the flat often carries a builder-delay complication; decide who keeps the TS RERA claim too. The deed filed with the first motion is the transaction — the hearings only confirm it.",
      },
      {
        question: "There is a 498A FIR in Hyderabad. Can the divorce settle that as well?",
        answer:
          "Yes, and it should — comprehensive closure is the point. Withdrawable proceedings like maintenance and DV Act applications are closed before the local magistrate, but a 498A or Section 85 BNS FIR is non-compoundable and needs quashing on settlement. The advantage in Hyderabad is that the Telangana High Court sits in the city itself, so the quashing petition is a local hearing rather than a long outstation journey — sequence the deed so the final tranche of payment coincides with the quashing, protecting both sides until the last case actually dies.",
      },
      {
        question: "What if one of us changes our mind after the first motion?",
        answer:
          "Consent must exist at the second motion too, so either spouse can lawfully resile before the decree — following Sureshta Devi v. Om Prakash, the court cannot force the divorce through. Protection lies in the deed's architecture, not in optimism: stage the payments and case withdrawals against each motion so that neither side has performed fully while the other can still walk away. If consent is withdrawn, the paid amounts are governed by the deed's terms and the contested-divorce routes reopen — which is exactly the outcome good sequencing is designed to make unattractive.",
      },
    ],
    localNotes: [
      "Hyderabad's family matters split across two forums — Nampally for Hyderabad district and L. B. Nagar (Ranga Reddy) for the Cyberabad belt — so couples in HITEC City, Gachibowli or Kukatpally usually file at LB Nagar, not Nampally.",
      "Quashing a settled 498A or Section 85 BNS FIR happens at the Telangana High Court, which sits in Hyderabad itself — no long outstation trek, a real advantage over UP where the High Court is hundreds of kilometres away.",
      "Couples married under the Special Marriage Act need two years of separation (Section 28 SMA), not one — a distinction that catches many Hyderabad NRI and inter-community civil marriages.",
    ],
  },

  // ──────────────── AHMEDABAD × MUTUAL CONSENT DIVORCE (S.13B HMA) ────────────────
  "ahmedabad__mutual-consent-divorce": {
    lead:
      "For Ahmedabad's business families, dual-income couples and a large Gujarati NRI diaspora across the US, UK and East Africa, mutual consent divorce under Section 13B of the Hindu Marriage Act is the dignified exit: two motions, one comprehensive settlement, no contested trench warfare. Done well, the paperwork — not the courtroom — decides everything. NyaySevak connects you with Bar-Council-verified Ahmedabad mutual-consent-divorce lawyers who negotiate and draft the settlement deed, choose between the Bhadra Family Court and the Gandhinagar alternative where the choice is real, manage cooling-off waivers and video-conference appearances for spouses abroad, and close every connected case in a single package.",
    landscape: [
      "The statute asks for three things: one year of living separately, a joint conviction that the marriage cannot continue, and consent that survives until the decree. For couples in Ahmedabad city, the forum is the Family Court at the City Civil & Sessions Court campus, Bhadra; couples in the Gandhinagar capital belt file at the Gandhinagar Family Court. The first motion places the complete settlement on record and the court examines both spouses; the second motion, after the statutory interregnum, produces the decree. The six-month cooling-off period is directory, not mandatory — following Amardeep Singh v. Harveen Kaur (2017), the Family Court can waive it where the separation is already long, mediation has failed or is pointless, and every issue stands settled, compressing the whole matter into a couple of months.",
      "Forum choice is a genuine Ahmedabad question, because Section 13B petitions can be filed where the marriage was solemnised, where the couple last resided together, or where the wife currently resides. A couple who married in a home-town temple, lived together in a Vastrapur or Satellite flat, and where the wife has since moved to her parents' home may lawfully choose between three courts — and the practical differences (listing speed, commute, a judge's waiver practice) are worth weighing rather than defaulting to the nearest address. Couples married under the Special Marriage Act follow the parallel two-motion route under Section 28 of that Act, which requires two years of separation rather than one — a distinction that catches many Ahmedabad NRI and inter-community marriages. Whichever forum you pick, both spouses must personally satisfy the judge of their free consent at both motions.",
      "Ahmedabad's demographic shapes the practice: one spouse is very often posted abroad — the Gujarati diaspora in the US, UK and East Africa is substantial — and Family Courts routinely permit appearance through video-conferencing for a spouse abroad, so a well-sequenced matter needs at most one India trip. The settlement deed carries the whole load — permanent alimony and its payment schedule, custody and visitation in enforceable detail, return of stridhan, division of the jointly financed flat (often a Vastrapur, Bodakdev or SG Highway property, sometimes itself tangled in a builder delay), and closure of every pending case. Where a 498A or DV Act complaint is pending, the deed provides for withdrawal or quashing — and because the Gujarat High Court sits at its Sola campus on the SG Highway corridor, conveniently close to the western Ahmedabad belt where many of these couples live, quashing under Section 528 BNSS is a local hearing rather than an outstation trek. The Gujarat State Legal Services Authority's mediation and Lok Adalat machinery regularly converts contested filings into this kind of package.",
    ],
    courtsForThisMatter: [
      "Family Court, Ahmedabad — City Civil & Sessions Court campus, Bhadra (S.13B motions)",
      "Family Court, Gandhinagar (alternative forum for the capital belt)",
      "Gujarat High Court at Sola, Ahmedabad (appeals; S.528 BNSS quashing of settled 498A/S.85 BNS and connected FIRs)",
      "Gujarat State Legal Services Authority — Mediation & Lok Adalat (converting contested matters into consent terms)",
      "Magistrate Courts, Ahmedabad (closure of S.144 BNSS maintenance and DV Act proceedings on settlement)",
      "Supreme Court of India (transfer petitions between states; Article 142 dissolution in rare cases)",
    ],
    caseTypes: [
      { title: "S.13B Joint Petition & Both Motions", desc: "Drafting, filing and appearing at the first and second motions with consent recorded correctly." },
      { title: "Cooling-Off Waiver", desc: "Amardeep Singh applications to waive the six-month interregnum where separation is long and terms are complete." },
      { title: "Settlement Deed & Alimony Structuring", desc: "One-time alimony, stridhan return and property division drafted to be final, staged and enforceable." },
      { title: "Custody & Visitation Terms", desc: "Parenting schedules, relocation and schooling clauses detailed enough to prevent future guardianship rounds." },
      { title: "NRI & Video-Conference Matters", desc: "VC appearances and travel-efficient sequencing for Gujarati-diaspora spouses posted abroad or in other cities." },
      { title: "Closure of 498A / DV / Maintenance Cases", desc: "Withdrawals before local magistrates and quashing at the Gujarat High Court as part of the package." },
      { title: "Forum Selection — Bhadra vs Gandhinagar vs Home Town", desc: "Choosing between the Ahmedabad and Gandhinagar Family Courts, or the marriage-town court, when jurisdiction lies in more than one." },
    ],
    faqs: [
      {
        question: "Where do we file for mutual consent divorce in Ahmedabad?",
        answer:
          "Couples whose last shared home was in Ahmedabad city file at the Family Court on the City Civil & Sessions Court campus at Bhadra; couples in the Gandhinagar belt file at the Gandhinagar Family Court. Section 13B jurisdiction also lies where the marriage was solemnised and where the wife now resides, so you may have a real choice between two or three courts — pick on listing speed, commute, and the court's approach to cooling-off waivers rather than defaulting to the nearest address.",
      },
      {
        question: "How long will it take at the Ahmedabad Family Court?",
        answer:
          "The statutory frame is two motions with a six-to-eighteen-month gap, so an unassisted timeline runs about seven to nine months including service and listing. With an Amardeep Singh waiver — realistic where you have already been separated well beyond a year and the settlement is complete — the gap can be dispensed with and matters conclude in roughly six to ten weeks. The waiver is discretionary, so the petition and deed must demonstrate that reconciliation is genuinely dead, not merely assert it.",
      },
      {
        question: "My spouse works abroad. Must they fly to India twice?",
        answer:
          "Usually not. Family Courts in Ahmedabad accept appearance through video-conferencing for a spouse abroad, particularly at one of the two motions. What cannot be delegated is consent itself — the judge must be satisfied that each spouse freely consents at both stages. With the size of the Gujarati diaspora in the US, UK and East Africa, local courts are familiar with NRI matters; a well-planned case is sequenced around leave dates so that at most one trip is needed.",
      },
      {
        question: "What exactly should our settlement cover before we file?",
        answer:
          "Everything either of you could ever litigate: the alimony figure (or mutual waiver) with a payment schedule tied to the two motions, custody and visitation with real detail — holidays, relocation, schooling — return of stridhan and jewellery, division or buyout of the jointly financed flat, treatment of joint loans and accounts, and closure of every pending case between the families. In the Vastrapur–SG Highway corridor the flat often carries a builder-delay complication; decide who keeps the Gujarat RERA claim too. The deed filed with the first motion is the transaction — the hearings only confirm it.",
      },
      {
        question: "There is a 498A FIR in Ahmedabad. Can the divorce settle that as well?",
        answer:
          "Yes, and it should — comprehensive closure is the point. Withdrawable proceedings like maintenance and DV Act applications are closed before the local magistrate, but a 498A or Section 85 BNS FIR is non-compoundable and needs quashing on settlement. The advantage in Ahmedabad is that the Gujarat High Court sits at its Sola campus on the SG Highway corridor, close to the western belt where many couples live, so the quashing petition is a local hearing rather than an outstation journey — sequence the deed so the final tranche of payment coincides with the quashing, protecting both sides until the last case actually dies.",
      },
      {
        question: "What if one of us changes our mind after the first motion?",
        answer:
          "Consent must exist at the second motion too, so either spouse can lawfully resile before the decree — following Sureshta Devi v. Om Prakash, the court cannot force the divorce through. Protection lies in the deed's architecture, not in optimism: stage the payments and case withdrawals against each motion so that neither side has performed fully while the other can still walk away. If consent is withdrawn, the paid amounts are governed by the deed's terms and the contested-divorce routes reopen — which is exactly the outcome good sequencing is designed to make unattractive.",
      },
    ],
    localNotes: [
      "Ahmedabad's family matters sit at the Bhadra Family Court, with the Gandhinagar Family Court as the alternative for the capital belt — pick on commute and listing speed, not habit.",
      "Quashing a settled 498A or Section 85 BNS FIR happens at the Gujarat High Court's Sola campus, on the SG Highway corridor — a local hearing for western Ahmedabad couples, no long outstation trek.",
      "Couples married under the Special Marriage Act need two years of separation (Section 28 SMA), not one — a distinction that catches many Ahmedabad NRI and inter-community civil marriages.",
    ],
  },

  // ──────────────── JAIPUR × ANTICIPATORY BAIL (S.482 BNSS) ────────────────
  "jaipur__anticipatory-bail": {
    lead:
      "An FIR in Jaipur — a matrimonial complaint, a property or trading-partnership dispute recast as cheating, an SC/ST allegation — puts arrest on the table, and anticipatory bail under Section 482 BNSS (the old Section 438 CrPC) is how you take it off. Rajasthan never abolished the remedy, so the city has a deeper bench of anticipatory-bail practice than states that did. NyaySevak connects you with Bar-Council-verified Jaipur anticipatory-bail lawyers who move the Jaipur Metropolitan Sessions Court fast, press interim protection at the first listing, escalate to the Rajasthan High Court's Jaipur Bench at Jhalana where needed, and manage the conditions that keep protection alive.",
    landscape: [
      "Two forums hold concurrent jurisdiction under Section 482 BNSS: the Jaipur Metropolitan Sessions Court, and the Rajasthan High Court's Jaipur Bench at Jhalana. On paper you may approach either; in practice the strategy is Sessions-first, for the standard reasons — the High Court generally expects the Sessions Court to have been approached first absent special circumstances, and the Sessions Court lists faster. A refusal at the Sessions Court then supports a better-framed application before the High Court. The advantage Jaipur holds over a city like Noida is distance: the Rajasthan High Court sits at Jhalana in Jaipur itself, so the second forum is in-town rather than a 600-kilometre trek. The application is built on the FIR copy, and competent drafting asks for interim protection at the very first listing, because the gap between filing and final hearing is precisely when arrest happens. For offences punishable up to seven years, Section 35(3) BNSS requires the police to issue a notice of appearance rather than arrest, and the Arnesh Kumar line makes non-compliance a ground for judicial pushback.",
      "The distinctive Rajasthan complication is the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act. Section 18 of that Act bars anticipatory bail for offences under it, unless false implication is prima facie shown — a bar restored by the 2019 amendment following the Supreme Court's recalibration. Rajasthan's large SC/ST population makes this a real, high-volume constraint: an anticipatory-bail application in a PoA Act FIR is not a standard Section 482 brief but a false-implication strategy, arguing that the allegation is a matrimonial or commercial dispute dressed in atrocities clothing. The Supreme Court's Sushila Aggarwal v. State of Haryana (2020) guidance — that anticipatory bail can be granted with conditions and is not automatically time-limited — frames how the Rajasthan High Court shapes its orders, including conditions to join the investigation, not contact witnesses, and not leave India without leave.",
      "Jaipur's anticipatory-bail volume comes from three streams: matrimonial FIRs (Section 85 BNS, formerly 498A IPC, often naming parents and siblings with peripheral roles), commercial-dispute FIRs (cheating and criminal breach of trust from Jaipur's gems, textile, tourism and real-estate economy), and SC/ST Act allegations. For FIRs registered outside Rajasthan against Jaipur residents, the Supreme Court's Priya Indoria ruling (2023) allows the Jaipur Sessions Court or the Rajasthan High Court to grant transit anticipatory bail — short protection to travel and apply before the competent court in the FIR state. Grants come with conditions, and breach invites cancellation, so post-order discipline matters as much as the order itself.",
    ],
    courtsForThisMatter: [
      "Jaipur Metropolitan Sessions Court (S.482 BNSS applications — the standard first forum)",
      "Rajasthan High Court, Jaipur Bench at Jhalana (concurrent jurisdiction; applications after Sessions refusal; serious or sensitive matters)",
      "Special Courts — POCSO, NDPS, and the SC/ST (PoA) Act designated courts (bail posture differs; Section 18 bar for PoA Act)",
      "Magistrate Courts, Jaipur (S.35(3) BNSS appearance-notice compliance)",
      "Mediation Centre, Jaipur (matrimonial FIRs referred while protection continues)",
      "Supreme Court of India (special leave where the High Court declines)",
    ],
    caseTypes: [
      { title: "Anticipatory Bail — Jaipur Sessions Court", desc: "S.482 BNSS applications with interim protection pressed at the first listing." },
      { title: "Anticipatory Bail — Rajasthan High Court (Jaipur Bench)", desc: "Applications after Sessions refusal, or direct approach where special circumstances justify it." },
      { title: "498A / Matrimonial FIR Protection", desc: "The city's highest-volume category — protection for spouses and peripherally named family members." },
      { title: "Business-Dispute FIRs (Cheating / CBT)", desc: "Commercial fallouts from Jaipur's gems, textile, tourism and real-estate economy recast as criminal cases." },
      { title: "SC/ST (PoA) Act Cases — Section 18 Bar", desc: "False-implication strategies to navigate the anticipatory-bail bar under Section 18 of the PoA Act." },
      { title: "Transit Anticipatory Bail", desc: "Priya Indoria protection from Jaipur courts for residents facing out-of-state FIRs." },
      { title: "S.35(3) Notice Compliance", desc: "Managing police appearance notices under the Arnesh Kumar framework so arrest never becomes necessary." },
      { title: "Cancellation Defence & Condition Modification", desc: "Resisting cancellation applications and relaxing travel or reporting conditions as the case matures." },
    ],
    faqs: [
      {
        question: "Should I apply at the Jaipur Sessions Court or go straight to the Rajasthan High Court?",
        answer:
          "Both courts have concurrent power under Section 482 BNSS, but the working rule is Sessions-first. The Rajasthan High Court generally expects the Sessions Court to have been tried absent special reasons, and the Sessions Court lists faster. Starting locally gets protection considered quickly, and if the Sessions Court refuses, that order becomes the platform for a sharper High Court application. The Jaipur advantage is that the High Court sits at Jhalana in the city itself, so even the second forum is local — there is no long outstation journey to make the escalation.",
      },
      {
        question: "How quickly can I get protection, and what covers me before the final order?",
        answer:
          "An application can be drafted and filed within a day or two of obtaining the FIR copy, and the request that matters most is interim protection at the first listing — a direction that no coercive steps be taken while the police file their report. That bridge order is the difference between negotiating from liberty and applying for regular bail from custody. In parallel, if the offence is punishable up to seven years, a Section 35(3) BNSS notice response signals cooperation and undercuts the case for custodial interrogation.",
      },
      {
        question: "The FIR is under the SC/ST Atrocities Act. Is anticipatory bail possible?",
        answer:
          "Section 18 of the Prevention of Atrocities Act bars anticipatory bail for offences under it, so a standard Section 482 application will not succeed. The route is a false-implication strategy — demonstrating that the allegation is prima facie fabricated, often a matrimonial or commercial dispute dressed in atrocities clothing — which the Rajasthan courts are used to assessing given the state's large SC/ST population. This is a specialised brief, not an ordinary bail application, and the early framing determines everything.",
      },
      {
        question: "My in-laws filed a 498A in Jaipur naming my whole family. Can everyone be protected?",
        answer:
          "Matrimonial FIRs are Jaipur's largest anticipatory-bail category, and courts regularly protect family members whose alleged roles are peripheral — parents, siblings, relatives living elsewhere. Each applicant's case is argued on their specific role in the FIR, so omnibus allegations often help the defence. Courts also nudge these disputes toward the mediation centre while protection continues, and a mediated settlement can later support quashing before the Rajasthan High Court, closing the criminal case for everyone at once.",
      },
      {
        question: "I live in Jaipur but the FIR is registered in another state. What are my options?",
        answer:
          "Apply for transit anticipatory bail locally. Under the Supreme Court's Priya Indoria decision (2023), the Jaipur Sessions Court or the Rajasthan High Court can grant a Jaipur resident short-duration protection against arrest, sufficient to travel to the FIR state and move its competent court for full anticipatory bail. The transit order does not decide the main matter — it removes the fear of being picked up en route.",
      },
      {
        question: "What conditions will the court impose, and can the protection be taken away?",
        answer:
          "Expect conditions to join the investigation whenever summoned, not to influence witnesses or touch evidence, and not to leave India without the court's leave; passport deposit or periodic police attendance are added in some matters. Following Sushila Aggarwal v. State of Haryana (2020), these conditions can be tailored to the case and need not automatically expire with a fixed date. The protection is defeasible: breach of conditions invites a cancellation application by the prosecution, so compliance is the second half of the brief, and conditions that become impractical are relaxed by application, not ignored.",
      },
    ],
    localNotes: [
      "Sessions-first is the standard playbook, but unlike Noida the second forum — the Rajasthan High Court's Jaipur Bench at Jhalana — sits in the city itself, so escalation does not mean an outstation journey.",
      "Anticipatory bail was never abolished in Rajasthan, so local Sessions-level practice is older and deeper than in states that restored the remedy only recently.",
      "The SC/ST (Prevention of Atrocities) Act Section 18 bar is a real, high-volume Rajasthan constraint: matters under the PoA Act need a false-implication strategy, not a standard Section 482 application.",
    ],
  },

  // ──────────────── BANGALORE × COMPANY REGISTRATION (COMPANIES ACT 2013) ────────────────
  "bangalore__company-registration": {
    lead:
      "Bengaluru is India's startup and technology capital — the dense founder belt runs from Koramangala and Indiranagar through HSR Layout to Whitefield and Electronic City, and the city hosts the country's largest concentration of venture-backed companies and global capability centres. NyaySevak connects you with verified Bangalore company-registration lawyers who incorporate your Private Limited, LLP or foreign subsidiary through SPICe+, paper the founder and shareholder arrangements correctly, line up DPIIT Startup-India and Karnataka Startup Policy recognition, and set up the post-incorporation compliance calendar so the entity is investor-ready from day one.",
    landscape: [
      "Incorporation is centralised but the details are local. SPICe+ filings are processed by the MCA's Central Registration Centre, with Bengaluru companies registered under the Registrar of Companies, Karnataka; stamp duty on the incorporation documents is auto-computed at Karnataka rates inside SPICe+. The integrated form bundles DIN, PAN, TAN, EPFO and ESIC, and AGILE-PRO adds GST registration and bank-account opening — a clean end-to-end runs in roughly 7–14 days. Company-law disputes, mergers, and petitions for Karnataka-registered companies go to the NCLT's Bengaluru Bench (operational since 2019), so founder disputes and oppression-mismanagement petitions no longer travel to the Chennai bench as they once did.",
      "What distinguishes Bangalore practice is who is incorporating. Funded startups need founders' agreements with vesting, ESOP pools, and DPIIT Startup-India recognition — and, distinctively, recognition under the Karnataka Startup Policy and its Elevate initiative, which stack additional state-level benefits on top of the central scheme. Foreign parents setting up wholly-owned subsidiaries and global capability centres need FDI-route checks and post-issue FEMA reporting (FC-GPR through the AD bank within 30 days of allotment); Bengaluru's density of GCCs makes this one of the country's busiest markets for exactly this work. A registered office in a Koramangala, Indiranagar, HSR Layout or Electronic City co-working space is routine — it needs the operator's NOC and a utility bill, and it works for ROC purposes.",
      "After incorporation, Karnataka-specific registrations follow: GST (Karnataka), registration under the Karnataka Shops and Commercial Establishments Act, professional tax, and the Companies Act basics — first auditor within 30 days under Section 139(1), the INC-20A declaration of commencement of business within 180 days under Section 10A (before which the company cannot start business or borrow), and the first board meeting within 30 days. Most incorporation disputes we see in Bengaluru are really founder disputes — the cure is drafting the shareholders' and founders' agreements at incorporation, with vesting and IP assignment, not after the first disagreement.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Karnataka / MCA Central Registration Centre (SPICe+)",
      "NCLT, Bengaluru Bench (company petitions, mergers, oppression-mismanagement for Karnataka companies)",
      "RBI / AD-bank FEMA reporting (FC-GPR for foreign-subsidiary share issues)",
      "GST & State Tax authorities, Karnataka (registration and disputes)",
      "Karnataka High Court (writs and company appeals)",
      "Commercial Courts, Bengaluru (commercial disputes)",
    ],
    caseTypes: [
      { title: "Private Limited / LLP / OPC Incorporation", desc: "Entity choice, name reservation, SPICe+ or FiLLiP filing, MoA/AoA drafting tuned to your cap table." },
      { title: "Foreign Subsidiary & GCC Setup", desc: "WOS incorporation for foreign parents and global capability centres — FDI-route checks, apostilled documents, FEMA FC-GPR reporting." },
      { title: "Founders' & Shareholders' Agreements", desc: "Vesting, IP assignment, exit and deadlock clauses — papered at incorporation, when it is cheap." },
      { title: "ESOP & Startup Structuring", desc: "ESOP pool creation, DPIIT Startup-India recognition plus Karnataka Startup Policy / Elevate benefits." },
      { title: "Post-Incorporation Compliance", desc: "First auditor (30 days, S.139(1)), INC-20A (180 days, S.10A), registered-office, GST and Karnataka Shops & Establishments registrations." },
      { title: "Conversions & Restructuring", desc: "Proprietorship/partnership → Pvt Ltd, LLP ↔ company conversions, share transfers and capital changes." },
      { title: "Investor-Readiness & Due Diligence", desc: "Cap-table cleanup, statutory registers and compliance hygiene ahead of a funding or acquisition round." },
    ],
    faqs: [
      {
        question: "Which ROC registers a company with a Bangalore office?",
        answer:
          "The Registrar of Companies, Karnataka — Bengaluru companies register under RoC Karnataka. In practice your SPICe+ filing is processed by the MCA's Central Registration Centre online, so there is no physical ROC visit; stamp duty is charged at Karnataka rates automatically inside the form. Company-law disputes and petitions for Karnataka-registered companies then go to the NCLT's Bengaluru Bench.",
      },
      {
        question: "How long does company registration take in Bangalore?",
        answer:
          "A clean SPICe+ filing typically completes in 7–14 days end-to-end, including name reservation, DIN for new directors, PAN, TAN, and EPFO/ESIC. Delays almost always come from name conflicts or document defects — both avoidable with a pre-filing check. See our company-registration documents guide for the exact checklist.",
      },
      {
        question: "Should my Bangalore startup be a Private Limited or an LLP?",
        answer:
          "If you plan to raise venture capital or issue ESOPs, choose a Private Limited — investors effectively require it. An LLP suits services firms and professional partnerships that value low compliance over fundraising. Conversion later is possible but costs time and tax analysis, so choose deliberately at the start. See our Pvt-Ltd-vs-LLP guide for the full comparison.",
      },
      {
        question: "Can I use a co-working space in Koramangala or HSR Layout as my registered office?",
        answer:
          "Yes — a co-working or virtual-office address works as the registered office if you have the operator's NOC and a recent utility bill for the premises. Thousands of Bengaluru companies are registered at Koramangala, Indiranagar, HSR Layout, Whitefield and Electronic City co-working addresses. You must still display the company name at the premises and keep the address current with the ROC.",
      },
      {
        question: "We are a foreign company setting up in Bangalore. What extra steps apply?",
        answer:
          "A wholly-owned Indian subsidiary needs the parent's incorporation documents apostilled or notarised, at least one resident Indian director, an FDI-route check for your sector, and post-issue FEMA reporting (FC-GPR) through your AD bank within 30 days of allotment. Bengaluru is India's densest market for global capability centres, so the surrounding ecosystem — auditors, AD banks, counsel — is deeply familiar with this workflow.",
      },
      {
        question: "What compliance is due immediately after incorporation?",
        answer:
          "Appoint the first auditor within 30 days under Section 139(1), file the INC-20A declaration of commencement within 180 days under Section 10A (before which the company cannot start business or borrow), hold the first board meeting within 30 days, issue share certificates within 60 days, and complete GST and Karnataka Shops & Commercial Establishments registrations as applicable. A missed INC-20A is the most common — and most avoidable — early penalty.",
      },
    ],
    localNotes: [
      "Karnataka-registered companies have their NCLT forum at the Bengaluru Bench (since 2019) — founder disputes, mergers and oppression-mismanagement petitions no longer travel to Chennai as they once did.",
      "Bangalore founders should claim both DPIIT Startup-India recognition and Karnataka Startup Policy / Elevate benefits — the state scheme stacks on top of the central one, and many founders leave the second on the table.",
      "Most Bengaluru 'incorporation disputes' are founder disputes in disguise: sign the founders' and shareholders' agreements at incorporation, with vesting and IP assignment, not after the first fight.",
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // HYDERABAD × MATTERS — Hyderabad is the strongest-performing city in
  // Search Console but previously carried only one matter page against
  // Delhi's six. These five close that gap on the highest-buyer-intent
  // transactional queries.
  // ════════════════════════════════════════════════════════════════════════
  "hyderabad__anticipatory-bail": {
    lead:
      "Anticipatory bail in Hyderabad is applied for under Section 482 of the BNSS before the Sessions Court at Nampally or the relevant district complex, and before the Telangana High Court if refused. NyaySevak connects you with Bar-Council-verified Hyderabad anticipatory-bail lawyers who can move an application the same week, argue for interim protection at the first hearing, and structure conditions you can actually comply with.",
    landscape: [
      "The first decision is which court to approach. An application can be made either to the Court of Session or directly to the High Court, and there are situations where going straight to the Telangana High Court is the better course — where the Sessions Court has already refused a co-accused, where the allegation involves a special statute, or where the matter is genuinely urgent. In most ordinary cases the Sessions Court at Nampally, Ranga Reddy at L. B. Nagar, or Medchal-Malkajgiri is the correct starting point, with the High Court held in reserve.",
      "Interim protection at the first hearing is what usually matters most. Courts frequently grant interim protection while notice is issued to the prosecution, which prevents arrest during the period the application is pending — and in practice this interim order, not the final one, is what protects a person through the most exposed weeks. Applications drafted with the custodial-interrogation question addressed head-on tend to secure interim protection more reliably.",
      "Some categories are harder or barred outright. Under the SC/ST (Prevention of Atrocities) Act, Section 18 bars anticipatory bail where a prima facie case is disclosed, so the realistic route becomes a quashing petition before the Telangana High Court instead. NDPS matters involving commercial quantities carry the Section 37 threshold, and economic offences investigated by the Economic Offences Wing or involving the PMLA are approached differently again. Identifying the category correctly determines whether the application is worth filing at all.",
    ],
    courtsForThisMatter: [
      "Metropolitan Sessions Court, Nampally (anticipatory bail applications)",
      "Ranga Reddy District Court at L. B. Nagar",
      "Medchal-Malkajgiri District Court",
      "Telangana High Court, Hyderabad (Section 482 BNSS, quashing)",
      "Special Courts (NDPS, POCSO, SC/ST Act, PMLA), Hyderabad",
      "Cyber Crime Police Station, Hyderabad & Cyberabad Commissionerates",
    ],
    caseTypes: [
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications before the Sessions Court, with interim protection sought at the first hearing." },
      { title: "High Court Applications", desc: "Direct or escalated applications before the Telangana High Court where Sessions relief is refused or unavailable." },
      { title: "Cheating & Economic Offences", desc: "Anticipatory bail in business-dispute FIRs, investment fraud, and Economic Offences Wing matters." },
      { title: "Matrimonial Cruelty FIRs", desc: "Protection in Section 85 BNS and dowry-related complaints, often alongside settlement negotiation." },
      { title: "Cyber Crime Allegations", desc: "Applications in IT Act and online-fraud matters investigated by the Hyderabad and Cyberabad cyber cells." },
      { title: "Property & Land Offences", desc: "Protection in forgery, forcible dispossession, and land-grabbing allegations." },
      { title: "Quashing Where Bail Is Barred", desc: "Telangana High Court petitions where Section 18 of the SC/ST Act bars anticipatory bail." },
      { title: "Conditions & Compliance", desc: "Negotiating workable conditions on investigation cooperation, travel, passport, and surety." },
    ],
    faqs: [
      {
        question: "How quickly can anticipatory bail be filed in Hyderabad?",
        answer:
          "An application can usually be drafted and moved within a few days of instructions, and courts commonly consider interim protection at the first hearing while notice goes to the prosecution. Because the risk of arrest is highest in the period immediately after an FIR, moving early matters more than almost anything else in these applications.",
      },
      {
        question: "Do I go to the Sessions Court or the Telangana High Court?",
        answer:
          "Either is legally open, but in most ordinary cases the Sessions Court at Nampally or the relevant district complex is the right starting point, with the High Court held in reserve if relief is refused. Going directly to the High Court makes sense where a co-accused has already been refused, where a special statute is involved, or where the urgency is genuine.",
      },
      {
        question: "Is anticipatory bail available in every case?",
        answer:
          "No. Section 18 of the SC/ST (Prevention of Atrocities) Act bars it where a prima facie case is disclosed, and NDPS matters involving commercial quantities face the additional Section 37 threshold. Where the bar applies, a quashing petition before the Telangana High Court is usually the realistic alternative.",
      },
      {
        question: "What conditions are typically imposed?",
        answer:
          "Commonly cooperation with the investigation, not leaving the country without permission, sometimes surrender of the passport, not influencing witnesses, and furnishing sureties. These conditions are negotiable at the hearing, and agreeing to terms you cannot realistically comply with creates a fresh problem later.",
      },
      {
        question: "What happens if anticipatory bail is refused?",
        answer:
          "You can approach the Telangana High Court if the Sessions Court refused, and if the High Court also refuses, the remaining routes are a Supreme Court petition or surrendering and applying for regular bail. A refusal is not the end of the matter, but it does narrow the options, which is why the first application should be properly prepared.",
      },
    ],
    localNotes: [
      "Interim protection granted at the first hearing is usually what actually protects you, not the final order.",
      "Section 18 of the SC/ST Act bars anticipatory bail — quashing before the Telangana High Court becomes the route.",
      "Hyderabad spans three commissionerates and three district complexes; the correct court depends on where the FIR is registered.",
    ],
  },

  "hyderabad__cheque-bounce-recovery": {
    lead:
      "A bounced cheque in Hyderabad is prosecuted under Section 138 of the Negotiable Instruments Act before the magistrate courts, and the case is filed where your bank branch is located — not where the drawer lives. NyaySevak connects you with Bar-Council-verified Hyderabad cheque-bounce lawyers who send the statutory demand notice inside the 30-day window, file before the correct court, and press interim compensation so recovery starts before the trial ends.",
    landscape: [
      "The timeline decides the case, and most self-represented payees lose on it rather than on the merits. The written demand notice must go out within 30 days of the bank's return memo; the drawer then has 15 days to pay; and the complaint must be filed within one month after that 15-day period expires. Miss any of those windows and the prosecution can fail on limitation regardless of how strong the underlying debt is.",
      "Jurisdiction follows your bank branch. Since the 2015 amendment to Section 142 of the NI Act, a complaint is filed where the payee's branch is situated, so a Hyderabad account holder files in Hyderabad even against a drawer in another state. Within the city, that means the magistrate court serving the area of your branch — at Nampally, or in the Ranga Reddy and Medchal-Malkajgiri complexes as the case may be.",
      "Two financial levers matter more than most complainants realise. Section 143A allows the trial court to order interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing the conviction to deposit a minimum of twenty per cent before the appeal is heard. Because Section 138 is compoundable, a large share of Hyderabad matters settle at mediation or at National Lok Adalats, which dispose of NI Act cases in bulk and are often the fastest route to actual money.",
    ],
    courtsForThisMatter: [
      "Magistrate Courts, Nampally (Section 138 NI Act complaints)",
      "Magistrate Courts, Ranga Reddy at L. B. Nagar & Medchal-Malkajgiri",
      "Sessions Courts, Hyderabad (appeals against S.138 conviction or acquittal)",
      "Telangana High Court (quashing on settlement, revision)",
      "Commercial Court, Hyderabad (parallel civil recovery above the specified value)",
      "Mediation Centres & National Lok Adalat, Hyderabad",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Drafting and dispatching the Section 138 notice within 30 days of the return memo — the step most often got wrong." },
      { title: "Section 138 Complaint Filing", desc: "Filing before the magistrate court serving your bank branch, with proper cause-of-action documentation." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount as interim compensation at the trial stage." },
      { title: "Defence of S.138 Cases", desc: "Rebutting the Section 139 presumption — security cheques, no legally enforceable debt, and notice defects." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat settlement, and compounding at any stage, usually the fastest route to recovery." },
      { title: "Parallel Civil Recovery", desc: "Order XXXVII summary suits and Commercial Court claims run alongside for larger debts." },
      { title: "Company & Director Liability", desc: "Prosecuting signatories and directors under Section 141 where the drawer is a company." },
      { title: "Appeals & Quashing", desc: "Sessions appeals using the Section 148 deposit lever, and High Court quashing once settled." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque bounce case in Hyderabad?",
        answer:
          "Before the magistrate court serving the area of the bank branch where you presented the cheque. Since the 2015 amendment to Section 142 of the NI Act, the payee's branch determines territorial jurisdiction, so a Hyderabad account holder files here even when the drawer is in another state.",
      },
      {
        question: "What is the deadline for the cheque bounce notice?",
        answer:
          "The written demand notice must be sent within 30 days of receiving the bank's return memo. The drawer then has 15 days to pay, and the complaint must be filed within one month after that period ends. Missing any of these windows can defeat the prosecution on limitation alone.",
      },
      {
        question: "Can I get money before the trial concludes?",
        answer:
          "Often yes. Under Section 143A the trial court can direct interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a further minimum twenty per cent deposit if a convicted drawer appeals. For larger debts a parallel civil suit adds pressure.",
      },
      {
        question: "How long does a Section 138 case take in Hyderabad?",
        answer:
          "Contested matters commonly run one to three years, though the Supreme Court's summary-trial framework is intended to shorten that. Settled matters conclude far faster — many resolve at mediation or at a National Lok Adalat within months, and interim compensation frequently triggers early settlement.",
      },
      {
        question: "The cheque was given as security. Is that a defence?",
        answer:
          "It can be, but it is not automatic. Section 139 presumes the cheque was issued for a legally enforceable debt, and the burden is on the drawer to rebut that presumption with evidence. A security-cheque defence succeeds only where the surrounding documentation genuinely supports it.",
      },
    ],
    localNotes: [
      "Jurisdiction follows your bank branch, so a Hyderabad payee files in Hyderabad against an out-of-state drawer.",
      "The 30-day notice window from the return memo is the deadline that defeats most self-filed complaints.",
      "National Lok Adalats dispose of NI Act matters in bulk and are usually the fastest route to actual recovery.",
    ],
  },

  "hyderabad__rera-complaint": {
    lead:
      "Hyderabad's building boom along the Outer Ring Road — Kokapet, the Financial District, Tellapur, Kollur, and the Nanakramguda corridor — has produced a matching volume of delayed-possession and specification disputes. NyaySevak connects you with Bar-Council-verified Hyderabad RERA lawyers who file before the Telangana Real Estate Regulatory Authority for refund with interest, delay compensation, or directions to complete.",
    landscape: [
      "Registration is the gateway question. RERA remedies apply to projects required to be registered under the Act, so the first step in any Hyderabad complaint is confirming the project's registration and the completion date the promoter itself declared. That declared date is what the delay is measured against, which is why promoters resist revising it and why buyers should record it at booking. Where a project is unregistered, the remedy shifts to the consumer commission or a civil suit instead.",
      "The buyer has a genuine election to make. You can seek a refund of the amounts paid with interest and withdraw from the project, or stay in it and claim compensation for the period of delay until possession. These lead to different outcomes and cannot simply be pursued in the alternative indefinitely, so the choice should be made deliberately at the outset, taking account of the current market value of the unit and the promoter's actual capacity to complete.",
      "Occupancy certificate and common-area issues are the recurring Hyderabad complaints after possession. Handover without an occupancy certificate, shortfall between the carpet area promised and delivered, unbuilt amenities, and delay in forming the association and transferring common areas are all matters RERA can address. Appeals from the Authority go to the Telangana Real Estate Appellate Tribunal, and where a promoter has become insolvent the alternative route is the NCLT Hyderabad Bench, where homebuyers rank as financial creditors.",
    ],
    courtsForThisMatter: [
      "Telangana Real Estate Regulatory Authority (project complaints, refund, compensation)",
      "Telangana Real Estate Appellate Tribunal (appeals from the Authority)",
      "NCLT Hyderabad Bench (insolvent promoters; homebuyers as financial creditors)",
      "District & State Consumer Commissions (unregistered projects, service deficiency)",
      "Civil & Commercial Courts, Hyderabad (title and specific performance)",
      "Telangana High Court (writs against the Authority and planning bodies)",
    ],
    caseTypes: [
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation measured against the promoter's declared completion date." },
      { title: "Refund & Withdrawal", desc: "Electing to exit the project and recover amounts paid together with statutory interest." },
      { title: "Carpet Area Shortfall", desc: "Claims where the area delivered falls short of the area promised in the agreement." },
      { title: "Occupancy Certificate Disputes", desc: "Handover without an occupancy certificate and the consequences for utilities and resale." },
      { title: "Amenities & Common Areas", desc: "Unbuilt amenities, association formation, and transfer of common areas to the allottees." },
      { title: "Specification & Quality Deviations", desc: "Departures from the sanctioned plan and the agreed specifications after booking." },
      { title: "Promoter Insolvency", desc: "Claims before the NCLT Hyderabad Bench where the developer has collapsed." },
      { title: "Agreement Review Before Booking", desc: "Reviewing the builder-buyer agreement and registration status before you commit." },
    ],
    faqs: [
      {
        question: "What can Telangana RERA order in my favour?",
        answer:
          "For a registered project it can direct a refund of the amounts you paid together with interest if you withdraw, or award compensation for the period of delay if you choose to stay and take possession. It can also direct the promoter to complete the project and to comply with its obligations on common areas and association formation.",
      },
      {
        question: "How is the delay calculated?",
        answer:
          "Against the completion date the promoter itself declared at registration, not against informal assurances given by a sales team. That is why the declared date should be recorded at booking, and why promoters resist revising it once the project is registered.",
      },
      {
        question: "Should I take a refund or wait for possession?",
        answer:
          "It depends on the current value of the unit, how far construction has actually progressed, and whether the promoter has the capacity to finish. A refund with interest is cleaner but you lose the asset; staying in and claiming compensation preserves it but carries completion risk. The election should be made deliberately at the outset rather than drifted into.",
      },
      {
        question: "My project is not registered with RERA. What now?",
        answer:
          "If registration was not required or was not obtained, the RERA remedy may not be available and the claim generally shifts to the consumer commission or a civil suit. Non-registration where it was required is itself a contravention, so the position should be assessed before choosing a forum.",
      },
      {
        question: "What if the builder has gone into insolvency?",
        answer:
          "Homebuyers are financial creditors under the IBC and can pursue the promoter before the NCLT Hyderabad Bench, subject to the threshold requiring at least one hundred allottees or ten per cent of the class to join. Once insolvency commences a moratorium halts other proceedings, so timing is critical.",
      },
    ],
    localNotes: [
      "Delay is measured against the completion date the promoter declared at registration — record it at booking.",
      "Refund-with-interest and stay-and-claim-compensation are alternative elections, not sequential options.",
      "Handover without an occupancy certificate affects utilities, resale, and finance, and is a distinct RERA claim.",
    ],
  },

  "hyderabad__company-registration": {
    lead:
      "Hyderabad has become one of India's strongest startup and enterprise bases, anchored by HITEC City, the Financial District, and the T-Hub ecosystem — and Telangana's single-window industrial clearance framework makes setting up here genuinely faster than in most states. NyaySevak connects you with Bar-Council-verified Hyderabad corporate lawyers for company and LLP incorporation, founder documentation, and post-incorporation compliance.",
    landscape: [
      "Choosing the structure is the decision that matters most, and it is difficult to reverse cheaply. A private limited company suits anyone who intends to raise external capital or issue ESOPs, because investors expect that form and the share capital structure supports it. An LLP is lighter on compliance and better suited to a services or consulting practice with no fundraising plan. A one-person company or a sole proprietorship works for a solo operator, but converting later carries cost and disruption.",
      "Telangana's TS-iPASS framework is the local advantage. It provides a single-window industrial approval mechanism with statutory timelines and a deemed-approval provision where the authority does not act within the prescribed period, which makes establishing a manufacturing or industrial unit here materially faster than in states without an equivalent. For an IT or services business the relevant approvals are lighter, but registered-office proof, professional tax, and shops and establishments registration still apply.",
      "The documents founders skip at incorporation are the ones that cause disputes later. A founders' or shareholders' agreement dealing with vesting, roles, exit, transfer restrictions, and deadlock, and clear assignment of intellectual property from founders and contractors to the company, are what a serious investor examines first in diligence. Companies incorporated in Telangana file with the Registrar of Companies for the state, and disputes between shareholders go to the NCLT Hyderabad Bench.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Telangana (incorporation and ongoing filings)",
      "TS-iPASS single-window authority (industrial approvals with deemed timelines)",
      "NCLT Hyderabad Bench (oppression and mismanagement, schemes, insolvency)",
      "GST and professional tax authorities, Telangana",
      "Labour department, Telangana (shops and establishments, PF, ESI)",
      "Telangana High Court (writs against regulatory action)",
    ],
    caseTypes: [
      { title: "Private Limited Incorporation", desc: "Formation for businesses intending to raise capital, issue ESOPs, or bring on investors." },
      { title: "LLP Formation", desc: "Lighter-compliance structure suited to services and consulting practices without fundraising plans." },
      { title: "Founders' & Shareholders' Agreements", desc: "Vesting, roles, transfer restrictions, exit, and deadlock resolution agreed before disputes arise." },
      { title: "Intellectual Property Assignment", desc: "Assigning IP created by founders and contractors to the company — the first item in investor diligence." },
      { title: "TS-iPASS Approvals", desc: "Single-window industrial clearances under Telangana's statutory-timeline framework." },
      { title: "ESOP Structuring", desc: "Employee stock option pools, vesting schedules, and the associated regulatory compliance." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, board and annual filings, GST, and labour registrations." },
      { title: "Conversion & Restructuring", desc: "Converting a proprietorship, partnership, or LLP into a private limited company." },
    ],
    faqs: [
      {
        question: "Private limited or LLP for a Hyderabad startup?",
        answer:
          "If you intend to raise external capital or issue ESOPs, a private limited company is effectively required — investors expect that structure and the share capital supports it. An LLP is lighter on compliance and works well for a services practice with no fundraising plan. Converting later is possible but costs time and money, so this is worth deciding properly.",
      },
      {
        question: "What is TS-iPASS and does it apply to me?",
        answer:
          "It is Telangana's single-window industrial approval framework, providing statutory timelines and a deemed approval where the authority does not act within the prescribed period. It is most relevant to manufacturing and industrial units; an IT or services business faces a lighter set of registrations but still needs registered-office proof, professional tax, and shops and establishments registration.",
      },
      {
        question: "What do investors check first in diligence?",
        answer:
          "The founders' or shareholders' agreement and the intellectual property position — specifically whether IP created by founders, employees, and contractors has actually been assigned to the company. Gaps in either routinely delay or reduce a funding round, and both are far cheaper to fix at incorporation than during diligence.",
      },
      {
        question: "Can I register a company at a co-working address?",
        answer:
          "Generally yes, provided you have the documentation the Registrar requires — a no-objection certificate from the owner, proof of the address, and a utility bill. Many Hyderabad startups begin at a co-working or incubator address; the requirement is proper documentation rather than exclusive premises.",
      },
      {
        question: "Where do shareholder disputes go?",
        answer:
          "Oppression and mismanagement petitions, and most company-law disputes for Telangana companies, go to the NCLT Hyderabad Bench. A well-drafted shareholders' agreement with a clear deadlock and exit mechanism is what usually keeps a dispute out of that forum in the first place.",
      },
    ],
    localNotes: [
      "TS-iPASS gives Telangana a statutory-timeline, deemed-approval single window that most states do not have.",
      "IP assignment and the founders' agreement are the two diligence items that most often delay a funding round.",
      "Company disputes for Telangana entities go to the NCLT Hyderabad Bench.",
    ],
  },

  "hyderabad__nclt-ibc": {
    lead:
      "The NCLT Hyderabad Bench hears insolvency and company matters for Telangana and Andhra Pradesh, which makes it the forum for corporate recovery, shareholder disputes, and restructuring across the region. NyaySevak connects you with Bar-Council-verified Hyderabad NCLT and insolvency lawyers for Section 7 and Section 9 petitions, defending admission, claim filing, and oppression and mismanagement proceedings.",
    landscape: [
      "The threshold governs whether the IBC is available at all. A corporate insolvency petition requires a default of at least one crore rupees, which puts the process out of reach for most ordinary trade debts and pushes them toward summary suits, Commercial Court claims, or Section 138 prosecutions instead. Where the threshold is met, a financial creditor proceeds under Section 7 and an operational creditor under Section 9, after a statutory demand notice and in the absence of a pre-existing dispute.",
      "For operational creditors the pre-existing dispute point is decisive. If the debtor raised a genuine dispute about the debt before the demand notice — over quality, quantity, or a counterclaim — the petition will not be admitted, and the IBC cannot be used as a substitute for a recovery suit. Creditors therefore need to be candid about the correspondence trail before filing, because a rejected petition costs time and hands the debtor a useful precedent.",
      "Admission changes everything for the debtor. A moratorium halts suits and enforcement, the board is displaced and control passes to a resolution professional, and the promoter may be barred under Section 29A from bidding for the company. That combination is why the credible threat of admission produces so many settlements, and why Section 12A withdrawal after admission is common. Appeals from the Hyderabad Bench go to the NCLAT's Chennai Bench.",
    ],
    courtsForThisMatter: [
      "NCLT Hyderabad Bench (Telangana and Andhra Pradesh jurisdiction)",
      "NCLAT Chennai Bench (appeals from the Hyderabad Bench)",
      "Supreme Court of India (statutory appeals from NCLAT)",
      "Debt Recovery Tribunal, Hyderabad (secured creditor recovery)",
      "Commercial Court, Hyderabad (below-threshold recovery)",
      "Telangana High Court (writs, winding-up matters retained by the High Court)",
    ],
    caseTypes: [
      { title: "Section 7 Petitions", desc: "Financial creditor insolvency applications where the default meets the statutory threshold." },
      { title: "Section 9 Petitions", desc: "Operational creditor applications following a demand notice, where no pre-existing dispute exists." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute, disputing the default, or settling before admission." },
      { title: "Claim Filing & Verification", desc: "Filing and pursuing claims with the resolution professional, including homebuyer claims." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with the required creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution, related-party transactions, and board conduct." },
      { title: "Personal Guarantor Proceedings", desc: "Insolvency proceedings against promoters who guaranteed the corporate debt." },
      { title: "Schemes & Restructuring", desc: "Mergers, amalgamations, and capital reduction requiring Tribunal approval." },
    ],
    faqs: [
      {
        question: "What is the minimum default for an IBC petition?",
        answer:
          "One crore rupees. Below that the IBC is not available and recovery has to proceed through an Order XXXVII summary suit, a Commercial Court claim, a Section 138 prosecution, or the MSME Samadhaan route if you are a registered MSME.",
      },
      {
        question: "What is a pre-existing dispute and why does it matter?",
        answer:
          "It is a genuine dispute about the debt raised by the debtor before your demand notice — over quality, quantity, or a counterclaim. If one exists, an operational creditor's petition will not be admitted, because the IBC is an insolvency mechanism rather than a substitute for a recovery suit. The correspondence trail should be assessed honestly before filing.",
      },
      {
        question: "What happens once a petition is admitted?",
        answer:
          "A moratorium comes into force halting suits and enforcement, the board is displaced and a resolution professional takes control, and claims are called for. The promoter may also be barred under Section 29A from bidding to take the company back. This combination is why the credible threat of admission drives so many settlements.",
      },
      {
        question: "Can an admitted case be withdrawn if we settle?",
        answer:
          "Yes, under Section 12A, with the approval of the requisite majority of the committee of creditors. A great many Hyderabad matters conclude this way, because the pressure of admission is what brings the debtor to a realistic settlement.",
      },
      {
        question: "Where do appeals from the Hyderabad Bench go?",
        answer:
          "To the NCLAT's Chennai Bench, and from there on a statutory appeal to the Supreme Court. Timelines under the IBC are short and strictly applied, so an appeal has to be prepared quickly rather than considered at leisure.",
      },
    ],
    localNotes: [
      "The NCLT Hyderabad Bench covers both Telangana and Andhra Pradesh.",
      "A pre-existing dispute defeats an operational creditor's petition — assess the correspondence before filing.",
      "Appeals go to the NCLAT Chennai Bench, not to a Hyderabad appellate forum.",
    ],
  },

  // ════════════════════════════════════════════════════════════════════════
  // GHAZIABAD × MATTERS — completing the NCR set. Ghaziabad previously had
  // only cheque-bounce and RERA against the six carried by Delhi, Noida,
  // Gurgaon, and Faridabad.
  // ════════════════════════════════════════════════════════════════════════
  "ghaziabad__anticipatory-bail": {
    lead:
      "Anticipatory bail in Ghaziabad is applied for under Section 482 of the BNSS before the Sessions Court at the district complex, and before the Allahabad High Court if refused. NyaySevak connects you with Bar-Council-verified Ghaziabad anticipatory-bail lawyers who move applications quickly, press for interim protection at the first hearing, and know how Uttar Pradesh's comparatively recent restoration of the remedy shapes the local practice.",
    landscape: [
      "Uttar Pradesh is a special case, and it matters here. Anticipatory bail was unavailable in the state for decades and was only restored in 2019, which means the body of local jurisprudence is much younger and less settled than in Delhi across the district boundary. Counsel who actively track current Allahabad High Court rulings on the restored provision have a real advantage, because the position on several recurring questions is still developing.",
      "The practical route is the Sessions Court at Ghaziabad first, with the Allahabad High Court in reserve. Interim protection granted at the first hearing while notice issues to the prosecution is usually what actually protects a person through the most exposed period, so applications are drafted to address the necessity of custodial interrogation directly rather than leaving it to argument. Ghaziabad's proximity to Delhi also means cross-border facts are common, and the FIR's place of registration decides the court.",
      "Certain categories are barred or constrained. Section 18 of the SC/ST (Prevention of Atrocities) Act bars anticipatory bail where a prima facie case is disclosed, leaving a quashing petition as the realistic route, and NDPS matters involving commercial quantities carry the Section 37 threshold. Ghaziabad also sees a significant volume of economic-offence FIRs arising from property and investment disputes, where the application has to grapple with allegations of document fabrication.",
    ],
    courtsForThisMatter: [
      "Ghaziabad District & Sessions Court (Section 482 BNSS applications)",
      "Chief Judicial Magistrate & Magistrate Courts, Ghaziabad",
      "Allahabad High Court (anticipatory bail, quashing, revision)",
      "Special Courts (NDPS, POCSO, SC/ST Act), Ghaziabad",
      "Economic Offences Wing, Uttar Pradesh",
      "Juvenile Justice Board, Ghaziabad",
    ],
    caseTypes: [
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications before the Sessions Court, with interim protection sought at the first hearing." },
      { title: "High Court Applications", desc: "Escalated applications before the Allahabad High Court where Sessions relief is refused." },
      { title: "Property & Investment Fraud FIRs", desc: "Protection in cheating and forgery allegations arising from property and investment disputes." },
      { title: "Matrimonial Cruelty FIRs", desc: "Protection in Section 85 BNS complaints, frequently alongside settlement negotiation." },
      { title: "Builder & Buyer Disputes", desc: "Applications where a project dispute has escalated into a criminal complaint on either side." },
      { title: "Cyber & Online Fraud", desc: "Applications in IT Act and online-fraud investigations." },
      { title: "Quashing Where Bail Is Barred", desc: "Allahabad High Court petitions where Section 18 of the SC/ST Act applies." },
      { title: "Conditions & Compliance", desc: "Negotiating workable conditions on cooperation, travel, passport, and sureties." },
    ],
    faqs: [
      {
        question: "Is anticipatory bail available in Uttar Pradesh?",
        answer:
          "Yes, but only since 2019 — the remedy was unavailable in the state for decades before that. Because the local jurisprudence is comparatively young, the position on several recurring questions is still developing, and counsel who follow current Allahabad High Court rulings closely make a genuine difference.",
      },
      {
        question: "Where do I apply in Ghaziabad?",
        answer:
          "Before the Sessions Court at the Ghaziabad district complex first, and before the Allahabad High Court if refused. The court is determined by where the FIR is registered, which matters here because Ghaziabad sits on the Delhi boundary and the facts frequently cross it.",
      },
      {
        question: "How quickly can an application be moved?",
        answer:
          "Usually within a few days of instructions, and courts commonly consider interim protection at the first hearing while notice goes to the prosecution. Since the risk of arrest is highest immediately after an FIR is registered, moving early is the single most important factor.",
      },
      {
        question: "Are there cases where anticipatory bail cannot be granted?",
        answer:
          "Yes. Section 18 of the SC/ST (Prevention of Atrocities) Act bars it where a prima facie case is disclosed, and NDPS matters involving commercial quantities face the Section 37 threshold. Where the bar applies, a quashing petition before the Allahabad High Court is generally the realistic alternative.",
      },
      {
        question: "What if my case is registered in Delhi instead?",
        answer:
          "Then the application goes to the Delhi courts, not to Ghaziabad, because jurisdiction follows the place of registration of the FIR. Cross-border facts are common in this district, so confirming where the FIR actually sits is the first step before anything is drafted.",
      },
    ],
    localNotes: [
      "Uttar Pradesh only restored anticipatory bail in 2019, so the local case law is younger than in neighbouring Delhi.",
      "Jurisdiction follows the place the FIR is registered — critical on the Delhi–Ghaziabad boundary.",
      "Section 18 of the SC/ST Act bars the remedy, making quashing the realistic route in those matters.",
    ],
  },

  "ghaziabad__mutual-consent-divorce": {
    lead:
      "Mutual consent divorce in Ghaziabad is filed before the Family Court at the district complex under Section 13B of the Hindu Marriage Act, and runs on a two-motion structure with a statutory gap between the motions. NyaySevak connects you with Bar-Council-verified Ghaziabad divorce lawyers who draft settlements that actually close every parallel proceeding and apply for waiver of the six-month gap where the facts support it.",
    landscape: [
      "The structure is fixed but the timeline is not. The first motion records that the parties have lived separately for at least a year and have agreed to dissolve the marriage; the second motion follows after a gap of six to eighteen months and confirms that consent stands. Following the Supreme Court's decision in Amardeep Singh, the Family Court can waive the six-month gap where the separation has already been long, mediation has failed, the settlement is complete, and the waiver serves the parties' interests — which in practice can reduce the process to two or three months.",
      "The settlement terms matter more than the petition. A properly drafted agreement deals with permanent alimony and its payment schedule, custody and visitation, division of property and jointly held assets, return of stridhan, and — critically — the withdrawal or closure of every parallel proceeding, including any Section 85 BNS complaint, Domestic Violence Act application, and Section 144 BNSS maintenance claim. A settlement that resolves only the divorce leaves the parties still litigating.",
      "Where a criminal complaint exists, quashing has to be handled separately. A Section 85 BNS complaint is not compoundable as of right, so closing it requires a quashing petition before the Allahabad High Court on the basis of the settlement. Sequencing this correctly — so that neither party is exposed after performing their side of the bargain — is where careful drafting earns its value, and staged performance tied to each step is the usual solution.",
    ],
    courtsForThisMatter: [
      "Family Court, Ghaziabad (Section 13B first and second motions)",
      "Magistrate Courts, Ghaziabad (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Allahabad High Court (quashing of criminal complaints on settlement)",
      "Mediation Centre, Ghaziabad District Court",
      "Principal Judge, Family Court (waiver applications)",
      "Supreme Court of India (transfer petitions where spouses are in different states)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Ghaziabad Family Court." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications under the Amardeep Singh framework where separation is long and settlement complete." },
      { title: "Settlement Drafting", desc: "Alimony, custody, property division, stridhan, and closure of all parallel proceedings." },
      { title: "Quashing on Settlement", desc: "Allahabad High Court petitions to close Section 85 BNS complaints once terms are agreed." },
      { title: "Custody & Visitation Terms", desc: "Workable arrangements recorded as consent terms rather than left to later dispute." },
      { title: "Permanent Alimony Structuring", desc: "Lump sum or instalment arrangements with enforceable security and timelines." },
      { title: "Conversion from Contested", desc: "Converting a contested petition into mutual consent once terms are negotiated." },
      { title: "Mediation", desc: "Court-annexed mediation at the district centre to arrive at comprehensive terms." },
    ],
    faqs: [
      {
        question: "How long does mutual consent divorce take in Ghaziabad?",
        answer:
          "Ordinarily six to twelve months, because Section 13B requires two motions with a statutory gap between them. Where the parties have already been separated for a long period and the settlement is complete, the Family Court can waive the six-month gap and the matter may conclude in two to three months.",
      },
      {
        question: "Can the six-month waiting period be waived?",
        answer:
          "Yes. Following the Supreme Court's decision in Amardeep Singh, the Family Court may waive it where the parties have lived separately for the requisite period, mediation has failed, all issues including alimony and custody are settled, and the waiver serves their interests. It is discretionary, so the application has to be properly supported.",
      },
      {
        question: "Do we both have to attend court?",
        answer:
          "Both parties are ordinarily required to appear for the motions so the court can satisfy itself that consent is free and genuine. Where a party is abroad or genuinely unable to attend, courts have permitted appearance by video conferencing or through a duly authorised representative in appropriate cases, but this needs to be sought rather than assumed.",
      },
      {
        question: "What happens to the criminal case we filed?",
        answer:
          "A Section 85 BNS complaint is not compoundable as of right, so it is closed by a quashing petition before the Allahabad High Court based on the settlement. This should be sequenced alongside the divorce so that neither party is left exposed after performing their side, which is usually managed by tying performance to each stage.",
      },
      {
        question: "Can one party withdraw consent before the second motion?",
        answer:
          "Yes — consent must subsist at the time of the second motion, and a party can withdraw before it. This is precisely why settlement terms are structured with staged performance and security rather than requiring one side to perform everything upfront.",
      },
    ],
    localNotes: [
      "Waiver of the six-month gap is discretionary and must be supported by a complete settlement and long separation.",
      "A settlement that does not close the DV, maintenance, and criminal proceedings leaves the parties still litigating.",
      "Quashing a Section 85 BNS complaint requires a separate Allahabad High Court petition.",
    ],
  },

  "ghaziabad__company-registration": {
    lead:
      "Ghaziabad's industrial belt — Sahibabad, Site IV, the Meerut Road corridor, and Tronica City — combines manufacturing depth with NCR market access at a materially lower cost than Delhi or Gurgaon. NyaySevak connects you with Bar-Council-verified Ghaziabad corporate lawyers for company and LLP incorporation, industrial approvals, and the compliance that follows.",
    landscape: [
      "Structure comes first, and the right answer depends on what the business will do. A private limited company suits anyone raising capital or dealing with large institutional buyers who expect that form; an LLP is lighter for a services or trading practice; and a proprietorship works only for a genuinely small solo operation. Because Ghaziabad's economy is manufacturing-heavy, the additional consideration is that industrial licensing and lender requirements often push a growing unit toward incorporation earlier than a services business would need it.",
      "The jurisdictional fact that surprises NCR businesses is that a Ghaziabad company is an Uttar Pradesh company. Filings go to the Registrar of Companies for the state rather than to Delhi, and company and insolvency disputes go to the NCLT Allahabad Bench — even though the business may sell entirely within the NCR and its counterparties may all be in Delhi or Gurgaon. That affects travel, timelines, and counsel selection from day one.",
      "For an industrial unit the registrations extend well beyond incorporation: factory licensing, Uttar Pradesh Pollution Control Board consent to establish and to operate, provident fund and ESI registration, contract-labour registration where applicable, GST, and the state single-window industrial clearances. Sequencing these correctly, and confirming that the intended activity is permitted at the premises before committing to a lease, avoids the most expensive delays.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Uttar Pradesh (incorporation and ongoing filings)",
      "NCLT Allahabad Bench (oppression and mismanagement, schemes, insolvency)",
      "Uttar Pradesh single-window industrial clearance authority",
      "Uttar Pradesh Pollution Control Board (consent to establish and operate)",
      "Labour department & Factories inspectorate, Ghaziabad",
      "GST authorities, Uttar Pradesh",
    ],
    caseTypes: [
      { title: "Private Limited Incorporation", desc: "Formation for manufacturing and trading businesses dealing with institutional buyers or lenders." },
      { title: "LLP Formation", desc: "Lighter-compliance structure for services, consulting, and trading practices." },
      { title: "Industrial Approvals", desc: "Single-window clearances, factory licensing, and pollution-control consents for the industrial belt." },
      { title: "Premises & Permitted Use", desc: "Confirming that the intended activity is permitted at the premises before a lease is signed." },
      { title: "Founders' & Shareholders' Agreements", desc: "Roles, transfer restrictions, exit, and deadlock resolution agreed in advance." },
      { title: "Labour Registrations", desc: "Provident fund, ESI, contract labour, and standing orders where thresholds are met." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, board and annual filings, and GST." },
      { title: "Conversion & Restructuring", desc: "Converting a proprietorship or partnership into an LLP or private limited company." },
    ],
    faqs: [
      {
        question: "Which Registrar of Companies covers Ghaziabad?",
        answer:
          "The Registrar of Companies for Uttar Pradesh, not Delhi. A Ghaziabad company is an Uttar Pradesh company for registration purposes even though it operates within the NCR, which also determines that its company disputes go to the NCLT Allahabad Bench.",
      },
      {
        question: "Should I incorporate in Ghaziabad or Delhi?",
        answer:
          "It depends on where you actually operate and what you need. Ghaziabad offers materially lower premises costs and industrial land with NCR access, but places filings and company litigation in Uttar Pradesh. Registering in Delhi while operating from Ghaziabad creates its own compliance mismatch, so the registered office should reflect reality.",
      },
      {
        question: "What approvals does a manufacturing unit need?",
        answer:
          "Beyond incorporation, typically factory licensing, pollution-control consent to establish and to operate, provident fund and ESI registration, contract-labour registration where applicable, GST, and the applicable state single-window clearances. The order in which these are obtained matters, since several depend on one another.",
      },
      {
        question: "Can I register a company at a rented industrial address?",
        answer:
          "Yes, with the documentation the Registrar requires — a no-objection certificate from the owner, the lease, and proof of address — and provided the intended activity is permitted at those premises. Permitted use should be confirmed before signing the lease rather than after.",
      },
      {
        question: "Where do shareholder disputes go?",
        answer:
          "To the NCLT Allahabad Bench, which has jurisdiction over companies with a registered office in Uttar Pradesh. A shareholders' agreement with a clear exit and deadlock mechanism is what usually avoids that forum altogether.",
      },
    ],
    localNotes: [
      "A Ghaziabad company files with the Uttar Pradesh Registrar and litigates at the NCLT Allahabad Bench, not in Delhi.",
      "Permitted use of the premises should be confirmed before signing an industrial lease.",
      "Industrial approvals are sequential — factory licensing and pollution consents depend on prior steps.",
    ],
  },

  "ghaziabad__nclt-ibc": {
    lead:
      "Insolvency and company matters for Ghaziabad businesses go to the NCLT Allahabad Bench, which has jurisdiction over Uttar Pradesh — not to the New Delhi benches, even though the business may trade entirely within the NCR. NyaySevak connects you with Bar-Council-verified Ghaziabad NCLT and insolvency lawyers for Section 7 and Section 9 petitions, defending admission, and oppression and mismanagement proceedings.",
    landscape: [
      "The bench question catches out more NCR businesses than any other point. Jurisdiction follows the registered office, so a company registered in Ghaziabad is heard at Allahabad regardless of where its customers, suppliers, or counsel are based. Creditors who assume the New Delhi benches apply lose time filing in the wrong forum, and debtors sometimes benefit from that confusion — which is why the registered office is the first thing to verify before a petition is drafted.",
      "The one-crore default threshold shapes strategy for Ghaziabad's largely mid-sized industrial base. Many trade debts fall below it, so recovery runs instead through Section 138 prosecutions at the district complex, Order XXXVII summary suits, Commercial Court claims, or the MSME Samadhaan route with its statutory compound interest. Where the threshold is met, an operational creditor's petition still fails if the debtor raised a genuine dispute before the demand notice, so the correspondence trail has to be assessed candidly.",
      "Admission is a severe outcome and that is precisely its leverage. A moratorium halts suits and enforcement, the board is displaced in favour of a resolution professional, and the promoter may be barred under Section 29A from bidding for the company. That combination drives a high proportion of settlements, often formalised as a Section 12A withdrawal after admission with the committee of creditors' approval. Appeals from the Allahabad Bench go to the NCLAT in New Delhi.",
    ],
    courtsForThisMatter: [
      "NCLT Allahabad Bench (Uttar Pradesh jurisdiction)",
      "NCLAT, New Delhi (appeals from the Allahabad Bench)",
      "Debt Recovery Tribunal (secured creditor recovery)",
      "Commercial Court, Ghaziabad (below-threshold recovery)",
      "Magistrate Courts, Ghaziabad (Section 138 NI Act prosecutions)",
      "MSME Facilitation Council, Uttar Pradesh (Samadhaan claims)",
    ],
    caseTypes: [
      { title: "Section 7 Petitions", desc: "Financial creditor insolvency applications where the default meets the statutory threshold." },
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute, disputing the default, or settling before admission." },
      { title: "Claim Filing & Verification", desc: "Filing and pursuing claims with the resolution professional once a process begins." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with the required creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution, and related-party transactions." },
      { title: "Personal Guarantor Proceedings", desc: "Proceedings against promoters who guaranteed the corporate debt." },
      { title: "Below-Threshold Alternatives", desc: "Summary suits, Commercial Court claims, Section 138, and MSME Samadhaan where the IBC is unavailable." },
    ],
    faqs: [
      {
        question: "Which NCLT bench hears Ghaziabad matters?",
        answer:
          "The NCLT Allahabad Bench, because jurisdiction follows the registered office and Ghaziabad is in Uttar Pradesh. This surprises many NCR businesses who assume the New Delhi benches apply — the registered office decides the bench, not where the company trades.",
      },
      {
        question: "What is the minimum default for an IBC petition?",
        answer:
          "One crore rupees. Below that threshold the IBC is unavailable, and recovery proceeds through an Order XXXVII summary suit, a Commercial Court claim, a Section 138 prosecution, or the MSME Samadhaan route for registered MSMEs.",
      },
      {
        question: "Can the debtor defeat my petition by claiming a dispute?",
        answer:
          "Only if the dispute is genuine and pre-existing — raised before your demand notice, over quality, quantity, or a counterclaim. A dispute invented after the notice does not assist the debtor, but a documented earlier dispute will defeat an operational creditor's petition, which is why the correspondence should be reviewed before filing.",
      },
      {
        question: "What happens once a petition is admitted?",
        answer:
          "A moratorium halts suits and enforcement, the board is displaced and a resolution professional takes control, and claims are invited. The promoter may also be barred under Section 29A from bidding for the company. The severity of that outcome is what makes the threat of admission such effective leverage.",
      },
      {
        question: "Can we settle after admission?",
        answer:
          "Yes, through a Section 12A withdrawal with the approval of the requisite majority of the committee of creditors. A substantial proportion of matters conclude this way, because admission is usually what brings a debtor to a realistic settlement.",
      },
    ],
    localNotes: [
      "Jurisdiction follows the registered office — Ghaziabad companies go to the NCLT Allahabad Bench, not New Delhi.",
      "Most Ghaziabad trade debts fall below the one-crore threshold, so the practical tools are Section 138, summary suits, and Samadhaan.",
      "Appeals from the Allahabad Bench go to the NCLAT in New Delhi.",
    ],
  },
};
