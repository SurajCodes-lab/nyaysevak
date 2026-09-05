// Week 25 — city × matter expansion for the nine cities added in Week 24.
//
// Week 24 gave Greater Noida, Surat, Vadodara, Rajkot, Gandhinagar, Jodhpur,
// Udaipur, Kota and Ajmer a hub plus all five core practice verticals, but no
// matter pages — the transactional layer that carries buying intent. This
// module closes that: 6 matters x 9 cities.
//
// Kept separate from city-matter-content.ts deliberately. That file is already
// ~2,500 lines, and it is the file an origin/main merge collided on during
// Week 24 — both branches had appended matter entries and git kept both copies,
// producing duplicate keys and a failed build. A separate module per cycle
// keeps concurrent work from landing in the same region of the same file.
//
// Same CityPracticeContent shape and the same content gating: a combo only
// renders, is only linked, and is only listed in the sitemap when it has an
// entry here.
//
// BCI-safe: no feeRange on any entry.

import type { CityPracticeContent } from "./city-practice-content";

export const cityMatterExpansion: Record<string, CityPracticeContent> = {
  // ══════════════════════════════════════════════════════════════════════
  // GREATER NOIDA × MATTERS — everything here runs through Gautam Buddh
  // Nagar at Surajpur (shared with Noida) and escalates to Allahabad, not
  // Delhi. The differentiator is the GNIDA/YEIDA leasehold chain.
  // ══════════════════════════════════════════════════════════════════════
  "greater-noida__cheque-bounce-recovery": {
    lead:
      "Greater Noida's industrial and warehousing belt runs on credit — component supply into the Ecotech estates, contractor payments on construction sites, and vendor invoices along the expressway corridor — so the bounced cheque is the standard failure point. NyaySevak connects you with Bar-Council-verified Greater Noida cheque-bounce lawyers who issue the statutory notice inside the 30-day window, file before the correct magistrate at Surajpur, and press interim compensation so recovery begins before the trial ends.",
    landscape: [
      "The deadlines decide the case, and they defeat more self-filed complaints than any defence does. The written demand notice must go out within 30 days of the bank's return memo; the drawer then has 15 days to pay; and the complaint must be filed within one month of that period expiring. Miss any one of them and the prosecution fails on limitation however strong the underlying debt.",
      "Jurisdiction follows your bank branch, not the drawer's address. Since the 2015 amendment to Section 142 of the NI Act, a complaint is filed where the payee presented the cheque, so a Greater Noida account holder files at the Gautam Buddh Nagar courts at Surajpur even against a drawer in Delhi, Haryana or another state. This matters here more than most places, because so many counterparties sit across the district boundary.",
      "Two levers move money before judgment. Section 143A lets the trial court order interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing to deposit at least twenty per cent first. Because Section 138 is compoundable, a large share of matters close at mediation or at a National Lok Adalat, which disposes of NI Act cases in bulk and is usually the fastest route to actual recovery.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate courts, Gautam Buddh Nagar at Surajpur (Section 138 complaints)",
      "Sessions Court, Gautam Buddh Nagar (appeals against conviction or acquittal)",
      "Allahabad High Court (quashing on settlement, revision)",
      "Commercial Court, Gautam Buddh Nagar (parallel civil recovery above the specified value)",
      "District Mediation Centre & National Lok Adalat, Gautam Buddh Nagar",
      "UP MSME Facilitation Council (Samadhaan route for registered units)",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Drafting and dispatching the Section 138 notice within 30 days of the return memo — the step most often got wrong." },
      { title: "Complaint Filing at Surajpur", desc: "Filing before the magistrate serving your bank branch, with proper cause-of-action documentation." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount at the trial stage." },
      { title: "Defending a S.138 Case", desc: "Rebutting the Section 139 presumption — security cheques, no enforceable debt, notice and service defects." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat, and compounding at any stage, usually the quickest path to payment." },
      { title: "Parallel Civil Recovery", desc: "Order XXXVII summary suits and Commercial Court claims run alongside for larger debts." },
      { title: "Director & Company Liability", desc: "Proceeding against signatories and directors under Section 141 where the drawer is a company." },
      { title: "Appeals & Quashing", desc: "Sessions appeals using the Section 148 deposit lever, and Allahabad High Court quashing once settled." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque bounce case in Greater Noida?",
        answer:
          "At the Judicial Magistrate courts in the Gautam Buddh Nagar district complex at Surajpur, which serves both Noida and Greater Noida. Jurisdiction follows the branch where you presented the cheque, so a Greater Noida account holder files here even when the drawer is in Delhi or another state.",
      },
      {
        question: "What is the deadline for the notice?",
        answer:
          "Thirty days from receiving the bank's return memo. The drawer then has fifteen days to pay, and the complaint must be filed within one month after that window closes. Missing any of these can end the prosecution on limitation alone, which is why the first step should be taken immediately.",
      },
      {
        question: "Can I recover money before the case finishes?",
        answer:
          "Often. Under Section 143A the court can order interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and a convicted drawer who appeals must deposit at least twenty per cent under Section 148. For larger debts a parallel civil suit adds further pressure.",
      },
      {
        question: "My buyer is a company. Who is liable?",
        answer:
          "The company as drawer, and under Section 141 the signatory and those in charge of and responsible for its business at the time. Naming the right officers correctly at the outset matters, because adding them later is often resisted on limitation grounds.",
      },
      {
        question: "How long does a Section 138 case take here?",
        answer:
          "Contested matters commonly run one to three years despite the Supreme Court's summary-trial framework. Settled matters close far faster — many resolve at mediation or a National Lok Adalat within months, and an interim compensation order frequently triggers that settlement.",
      },
    ],
    localNotes: [
      "Noida and Greater Noida share one magistracy at Surajpur — there is no separate Greater Noida complex.",
      "Jurisdiction follows your bank branch, which keeps cross-border NCR disputes in Gautam Buddh Nagar.",
      "Appeals and quashing go to the Allahabad High Court, not to Delhi.",
    ],
  },

  "greater-noida__rera-complaint": {
    lead:
      "Greater Noida and Noida Extension hold one of India's largest concentrations of delayed and stalled housing. The cause is usually the same: the developer has not paid its land-premium instalments to GNIDA or YEIDA, so the authority withholds the completion certificate and the lease deed, and buyers hold flats they cannot register. NyaySevak connects you with Bar-Council-verified Greater Noida RERA lawyers who pursue refund with interest, delay compensation, or completion before UP RERA.",
    landscape: [
      "Understand the chain before choosing a remedy. GNIDA and YEIDA allot land to a developer on long lease against premium payable in instalments. When the developer defaults, the authority withholds the completion certificate — which is why so many Greater Noida buyers have possession but no registered conveyance. Your claim runs against the developer while the obstacle sits with the authority, so effective matters are often run in UP RERA and by writ before the Allahabad High Court at the same time.",
      "UP RERA can order a refund of amounts paid with interest if you withdraw, compensation for the delay if you stay, or directions to complete the project, with appeals to the UP Real Estate Appellate Tribunal. The remedy applies to projects required to be registered, and delay is measured against the completion date the promoter itself declared at registration — not against what a sales team promised, which is why that declared date should be recorded when you book.",
      "Where the developer has collapsed, the alternative is the NCLT Allahabad Bench, before which homebuyers rank as financial creditors under the IBC. A petition needs at least one hundred allottees or ten per cent of the class to join, and once insolvency commences a moratorium halts other proceedings — so the timing of a move between forums matters a great deal. The Amrapali and Jaypee proceedings reshaped how buyers in this district are treated in both.",
    ],
    courtsForThisMatter: [
      "UP RERA (project complaints, refund, delay compensation, completion directions)",
      "UP Real Estate Appellate Tribunal (appeals from the Authority)",
      "NCLT Allahabad Bench (insolvent developers; homebuyers as financial creditors)",
      "Allahabad High Court (writs against GNIDA and YEIDA)",
      "District Consumer Commission, Gautam Buddh Nagar",
      "Civil & Commercial Courts, Gautam Buddh Nagar at Surajpur",
    ],
    caseTypes: [
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation measured against the promoter's declared completion date." },
      { title: "Registry & Lease Deed Deadlock", desc: "Securing conveyance where the developer's unpaid authority dues block registration." },
      { title: "Refund & Withdrawal", desc: "Electing to exit the project and recover the amounts paid together with statutory interest." },
      { title: "Carpet Area & Specification", desc: "Shortfall between the area and specification promised and what was delivered." },
      { title: "Occupancy Certificate Disputes", desc: "Handover without a completion or occupancy certificate, and its effect on utilities and resale." },
      { title: "Association & Common Areas", desc: "Formation of the association and transfer of common areas and maintenance to allottees." },
      { title: "NCLT Homebuyer Claims", desc: "Insolvency petitions and claim filing where a Greater Noida developer has collapsed." },
      { title: "Pre-Booking Review", desc: "Checking registration, the declared completion date, the lease chain and authority dues before you commit." },
    ],
    faqs: [
      {
        question: "My flat is ready but the registry is stuck. Why?",
        answer:
          "Almost always because the developer has not paid its land-premium instalments to GNIDA or YEIDA, so the authority is withholding the completion certificate and the lease deed. The claim lies against the developer while the obstacle sits with the authority, which is why these are commonly pursued before UP RERA and by writ in parallel.",
      },
      {
        question: "Should I take a refund or wait for possession?",
        answer:
          "It depends on the current value of the unit, how far construction has actually progressed, and whether the developer can realistically finish. A refund with interest is cleaner but you lose the asset; staying and claiming compensation preserves it but carries completion risk. It is an election, so it should be made deliberately before filing.",
      },
      {
        question: "How is the delay calculated?",
        answer:
          "Against the completion date the promoter declared to UP RERA at registration, not against verbal assurances. Record that date when you book — promoters resist revising it precisely because it is the benchmark every later claim is measured against.",
      },
      {
        question: "What if the builder is insolvent?",
        answer:
          "Homebuyers are financial creditors under the IBC and can proceed before the NCLT Allahabad Bench, subject to the threshold requiring at least one hundred allottees or ten per cent of the class. Once insolvency begins a moratorium halts other proceedings, so moving at the right moment is critical.",
      },
      {
        question: "How long does a UP RERA complaint take?",
        answer:
          "The Authority is designed to decide within about sixty days, though contested matters commonly run longer and an appeal to the Tribunal adds more. It remains considerably faster than a civil suit, which is why it is the default first forum for buyers here.",
      },
    ],
    localNotes: [
      "A stuck registry is usually the developer's unpaid authority premium, not a paperwork problem you can solve alone.",
      "Delay is measured against the promoter's own declared completion date — record it at booking.",
      "The NCLT route needs 100 allottees or ten per cent of the class, and its moratorium halts everything else.",
    ],
  },

  "greater-noida__company-registration": {
    lead:
      "Greater Noida offers industrial and institutional space at a fraction of Delhi or Gurgaon cost with the same NCR market access, which is why so many manufacturing, warehousing and data-centre businesses register here. NyaySevak connects you with Bar-Council-verified Greater Noida corporate lawyers for company and LLP incorporation, industrial approvals, and the permitted-use questions that decide whether the address works at all.",
    landscape: [
      "Structure first, and it is expensive to reverse. A private limited company suits anyone raising capital or supplying institutional buyers who expect that form; an LLP is lighter for a services or trading practice; a proprietorship works only at genuinely small scale. Because the local economy is manufacturing-heavy, lender and licensing requirements often push a growing unit toward incorporation earlier than a services business would need it.",
      "The jurisdictional point that surprises NCR founders is that a Greater Noida company is an Uttar Pradesh company. Filings go to the Registrar of Companies for the state, and company and insolvency disputes go to the NCLT Allahabad Bench — not to New Delhi, however much of the business is transacted inside the NCR. That affects travel, timelines and counsel selection from the first day.",
      "The registered address is not a formality here. GNIDA and YEIDA industrial and institutional leases restrict permitted use, sub-letting and transfer, and running an unapproved activity on an industrial plot puts the lease itself at risk. Beyond incorporation, an operating unit typically needs factory licensing, pollution-control consent to establish and to operate, provident fund and ESI registration, contract-labour registration where applicable, GST, and the state single-window clearances — obtained in sequence, since several depend on the ones before.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Uttar Pradesh (incorporation and ongoing filings)",
      "NCLT Allahabad Bench (oppression and mismanagement, schemes, insolvency)",
      "Uttar Pradesh single-window industrial clearance authority",
      "Uttar Pradesh Pollution Control Board (consent to establish and operate)",
      "GNIDA / YEIDA (permitted use, sub-letting and transfer under the lease)",
      "Labour department & Factories inspectorate, Gautam Buddh Nagar",
    ],
    caseTypes: [
      { title: "Private Limited Incorporation", desc: "Formation for businesses raising capital or supplying institutional and industrial buyers." },
      { title: "LLP Formation", desc: "Lighter-compliance structure for services, consulting and trading practices." },
      { title: "Permitted Use & Lease Review", desc: "Confirming the intended activity is allowed under the GNIDA or YEIDA lease before you commit." },
      { title: "Industrial Approvals", desc: "Single-window clearances, factory licensing and pollution-control consents, obtained in sequence." },
      { title: "Founders' & Shareholders' Agreements", desc: "Vesting, roles, transfer restrictions, exit and deadlock agreed before they are tested." },
      { title: "Labour Registrations", desc: "Provident fund, ESI, contract labour and standing orders where thresholds are met." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, board and annual filings, and GST." },
      { title: "Conversion & Restructuring", desc: "Converting a proprietorship or partnership into an LLP or private limited company." },
    ],
    faqs: [
      {
        question: "Which Registrar of Companies covers Greater Noida?",
        answer:
          "The Registrar of Companies for Uttar Pradesh. A Greater Noida company is a UP company for registration purposes even though it operates inside the NCR, and that also determines that its company disputes are heard at the NCLT Allahabad Bench rather than New Delhi.",
      },
      {
        question: "Can I register at a GNIDA or YEIDA industrial address?",
        answer:
          "Yes, provided the activity is permitted under the lease and you hold the ownership or tenancy documentation the Registrar requires. Running an unapproved activity on an industrial plot can put the lease at risk, so the permitted-use position should be checked before signing anything, not after.",
      },
      {
        question: "Private limited or LLP?",
        answer:
          "If you intend to raise external capital or issue employee stock options, a private limited company is effectively required. An LLP is lighter on compliance and suits a services practice with no fundraising plan. Conversion later is possible but costs time and money, so it is worth deciding properly at the outset.",
      },
      {
        question: "What approvals does a manufacturing unit need?",
        answer:
          "Typically factory licensing, pollution-control consent to establish and to operate, provident fund and ESI registration, contract-labour registration where applicable, GST, and the applicable single-window clearances. The order matters, because several depend on approvals granted earlier in the chain.",
      },
      {
        question: "Where do shareholder disputes go?",
        answer:
          "To the NCLT Allahabad Bench, which has jurisdiction over companies with a registered office in Uttar Pradesh. A shareholders' agreement with a workable exit and deadlock mechanism is usually what keeps a dispute out of that forum entirely.",
      },
    ],
    localNotes: [
      "A Greater Noida company files in Uttar Pradesh and litigates at the NCLT Allahabad Bench, not in Delhi.",
      "GNIDA and YEIDA leases restrict permitted use, sub-letting and transfer — verify before signing.",
      "Industrial approvals are sequential; starting them in the wrong order is the usual cause of delay.",
    ],
  },

  "greater-noida__anticipatory-bail": {
    lead:
      "Anticipatory bail in Greater Noida is applied for under Section 482 of the BNSS before the Sessions Court at Surajpur, and before the Allahabad High Court if refused. NyaySevak connects you with Bar-Council-verified Greater Noida anticipatory-bail lawyers who move quickly, press for interim protection at the first hearing, and know how the district's police commissionerate structure changes the pace of an investigation.",
    landscape: [
      "Uttar Pradesh is a special case. Anticipatory bail was unavailable in the state for decades and was only restored in 2019, so the body of Allahabad High Court authority is younger and less settled than in Delhi across the district boundary. Counsel who follow current rulings on the restored provision have a genuine advantage, because the position on several recurring questions is still developing.",
      "The Gautam Buddh Nagar Police Commissionerate matters for timing. Since 2020 senior police officers here hold magisterial powers that previously sat with Executive Magistrates, so preventive proceedings, externment and Goonda Act notices move faster and are decided inside the police hierarchy. That compresses the window in which a pre-arrest application is useful, and it is why moving in days rather than weeks is the single most important factor.",
      "Some categories are constrained or barred outright. Section 18 of the SC/ST (Prevention of Atrocities) Act bars anticipatory bail where a prima facie case is disclosed, leaving a quashing petition as the realistic route. NDPS matters involving commercial quantities carry the additional Section 37 threshold. The district also generates a high volume of economic-offence FIRs from stalled projects and investment disputes, where the application has to meet allegations of fabricated documents directly.",
    ],
    courtsForThisMatter: [
      "Sessions Court, Gautam Buddh Nagar at Surajpur (Section 482 BNSS applications)",
      "Allahabad High Court (anticipatory bail, quashing, revision)",
      "Chief Judicial Magistrate & Magistrate courts, Surajpur",
      "Special Courts (NDPS, POCSO, SC/ST Act), Gautam Buddh Nagar",
      "Economic Offences Wing, Uttar Pradesh",
      "Cyber Crime Police Station, Gautam Buddh Nagar Commissionerate",
    ],
    caseTypes: [
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications at Surajpur, with interim protection sought at the first hearing." },
      { title: "High Court Applications", desc: "Escalated applications before the Allahabad High Court where Sessions relief is refused." },
      { title: "Builder & Investor Fraud FIRs", desc: "Protection in cheating and breach-of-trust complaints from stalled projects, on either side." },
      { title: "Land & Allotment Disputes", desc: "Applications where a GNIDA or YEIDA plot dispute has escalated into a criminal complaint." },
      { title: "Matrimonial Cruelty FIRs", desc: "Protection in Section 85 BNS complaints, often alongside settlement negotiation." },
      { title: "Cyber & Online Fraud", desc: "Applications in IT Act and online-fraud investigations by the commissionerate cyber cell." },
      { title: "Quashing Where Bail Is Barred", desc: "Allahabad High Court petitions where Section 18 of the SC/ST Act applies." },
      { title: "Conditions & Compliance", desc: "Negotiating workable terms on cooperation, travel, passport and sureties." },
    ],
    faqs: [
      {
        question: "Is anticipatory bail available in Uttar Pradesh?",
        answer:
          "Yes, but only since 2019 — it was unavailable in the state for decades before that. Because the local jurisprudence is comparatively young, several recurring questions are still unsettled, and counsel who track current Allahabad High Court rulings make a real difference.",
      },
      {
        question: "Where do I apply?",
        answer:
          "Before the Sessions Court at the Gautam Buddh Nagar complex in Surajpur first, and the Allahabad High Court if refused. The court is fixed by where the FIR is registered, which matters here because the district sits on the Delhi boundary and the facts often cross it.",
      },
      {
        question: "How fast can an application be moved?",
        answer:
          "Usually within a few days of instructions, and courts commonly consider interim protection at the first hearing while notice issues to the prosecution. Since the risk of arrest is highest immediately after registration, moving early matters more than anything else in these applications.",
      },
      {
        question: "Are there cases where it cannot be granted?",
        answer:
          "Yes. Section 18 of the SC/ST (Prevention of Atrocities) Act bars it where a prima facie case is disclosed, and NDPS matters involving commercial quantities face the Section 37 threshold. Where the bar applies, a quashing petition before the Allahabad High Court is generally the realistic alternative.",
      },
      {
        question: "What conditions are usually imposed?",
        answer:
          "Cooperation with the investigation, not leaving the country without permission, sometimes surrender of the passport, not influencing witnesses, and furnishing sureties. These are negotiable at the hearing, and agreeing to terms you cannot meet creates a fresh problem later.",
      },
    ],
    localNotes: [
      "Uttar Pradesh restored anticipatory bail only in 2019, so the governing case law is still developing.",
      "The commissionerate structure accelerates preventive action, which compresses the useful window for a pre-arrest application.",
      "Jurisdiction follows where the FIR is registered — critical on the Delhi boundary.",
    ],
  },

  "greater-noida__mutual-consent-divorce": {
    lead:
      "Mutual consent divorce in Greater Noida is filed before the Family Court at the Gautam Buddh Nagar complex in Surajpur under Section 13B of the Hindu Marriage Act, on a two-motion structure with a statutory gap between the motions. NyaySevak connects you with Bar-Council-verified Greater Noida divorce lawyers who draft settlements that close every parallel proceeding and apply for waiver of the six-month gap where the facts support it.",
    landscape: [
      "The structure is fixed; the timeline is not. The first motion records that the parties have lived separately for at least a year and have agreed to dissolve the marriage. The second follows after six to eighteen months and confirms that consent still stands. Following the Supreme Court's decision in Amardeep Singh, the Family Court can waive the six-month gap where the separation has already been long, mediation has failed, and the settlement is complete — which in practice can reduce the process to two or three months.",
      "The settlement terms matter more than the petition. A properly drafted agreement deals with permanent alimony and its payment schedule, custody and visitation, division of property and jointly held assets, return of stridhan, and the withdrawal or closure of every parallel proceeding — any Section 85 BNS complaint, any Domestic Violence Act application, and any maintenance claim under Section 144 BNSS. A settlement that resolves only the divorce leaves the parties still litigating.",
      "Jurisdiction is a live question here because the city's population is overwhelmingly migrant. A petition can be filed where the marriage was solemnised, where the couple last resided together, or where the respondent resides, and those are frequently three different states. Where a spouse has returned to a home state, a transfer petition to the Supreme Court is common, and consolidating proceedings is usually a precondition to settling them together.",
    ],
    courtsForThisMatter: [
      "Family Court, Gautam Buddh Nagar at Surajpur (Section 13B first and second motions)",
      "Magistrate courts, Surajpur (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Allahabad High Court (quashing of criminal complaints on settlement)",
      "Supreme Court of India (transfer petitions where spouses are in different states)",
      "District Mediation Centre, Gautam Buddh Nagar",
      "Principal Judge, Family Court (waiver applications)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Family Court at Surajpur." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications on the Amardeep Singh criteria where separation is long and settlement complete." },
      { title: "Settlement Drafting", desc: "Alimony, custody, property, stridhan, and closure of every parallel proceeding." },
      { title: "Quashing on Settlement", desc: "Allahabad High Court petitions closing Section 85 BNS complaints once terms are agreed." },
      { title: "Transfer Petitions", desc: "Supreme Court petitions consolidating proceedings filed in different states." },
      { title: "Custody & Visitation Terms", desc: "Workable arrangements recorded as consent terms rather than left to later dispute." },
      { title: "Permanent Alimony Structuring", desc: "Lump sum or staged payment with enforceable security and timelines." },
      { title: "Conversion from Contested", desc: "Converting a contested petition to mutual consent once terms are negotiated." },
    ],
    faqs: [
      {
        question: "How long does mutual consent divorce take here?",
        answer:
          "Ordinarily six to twelve months, because Section 13B requires two motions with a statutory gap between them. Where the parties have already been separated for a long period and the settlement is complete, the Family Court can waive the six-month gap and the matter may conclude in two to three months.",
      },
      {
        question: "Can the waiting period be waived?",
        answer:
          "Yes. Following Amardeep Singh, the court may waive it where the parties have lived separately for the requisite period, mediation has failed, all issues including alimony and custody are settled, and waiver serves their interests. It is discretionary, so the application has to be properly supported.",
      },
      {
        question: "My spouse moved back to another state. What now?",
        answer:
          "You can either proceed where jurisdiction lies or move the Supreme Court for a transfer petition to bring the proceedings together. This is common in Greater Noida given how much of the population moved here for work, and consolidating is usually a precondition to settling everything at once.",
      },
      {
        question: "What happens to the criminal case we filed?",
        answer:
          "A Section 85 BNS complaint is not compoundable as of right, so it is closed by a quashing petition before the Allahabad High Court based on the settlement. This should be sequenced with the divorce so neither party is exposed after performing their side, usually by tying performance to each stage.",
      },
      {
        question: "Can one party withdraw consent?",
        answer:
          "Yes — consent must subsist at the second motion, and a party can withdraw before it. That is precisely why settlement terms are structured with staged performance and security rather than requiring one side to perform everything upfront.",
      },
    ],
    localNotes: [
      "Waiver of the six-month gap is discretionary and needs a complete settlement plus a long separation.",
      "A settlement that does not close the DV, maintenance and criminal tracks leaves the parties still litigating.",
      "The migrant population makes contested jurisdiction and Supreme Court transfer petitions routine.",
    ],
  },

  "greater-noida__nclt-ibc": {
    lead:
      "Insolvency and company matters for Greater Noida businesses go to the NCLT Allahabad Bench, which covers Uttar Pradesh — not to the New Delhi benches, however much of the trade happens inside the NCR. NyaySevak connects you with Bar-Council-verified Greater Noida NCLT and insolvency lawyers for Section 7 and Section 9 petitions, defending admission, homebuyer claims, and oppression and mismanagement proceedings.",
    landscape: [
      "Jurisdiction follows the registered office, and that catches out more NCR creditors than any other point. A company registered in Greater Noida is heard at Allahabad regardless of where its customers, suppliers or counsel sit. Creditors who assume the New Delhi benches lose time filing in the wrong forum, and debtors occasionally benefit from that confusion — so the registered office is the first thing to verify before a petition is drafted.",
      "The one-crore default threshold shapes strategy for a district of mid-sized industrial units. Many trade debts fall below it, so recovery runs instead through Section 138 prosecutions at Surajpur, Order XXXVII summary suits, Commercial Court claims, or the MSME Samadhaan route with its statutory compound interest. Where the threshold is met, an operational creditor's petition still fails if the debtor raised a genuine dispute before the demand notice, so the correspondence trail has to be assessed candidly.",
      "Admission is severe, and that severity is the leverage. A moratorium halts suits and enforcement, the board is displaced in favour of a resolution professional, and the promoter may be barred under Section 29A from bidding to take the company back. That combination drives a high proportion of settlements, often formalised as a Section 12A withdrawal after admission. This district also generates homebuyer petitions, since allottees rank as financial creditors — subject to the hundred-allottee or ten-per-cent threshold.",
    ],
    courtsForThisMatter: [
      "NCLT Allahabad Bench (Uttar Pradesh jurisdiction)",
      "NCLAT, New Delhi (appeals from the Allahabad Bench)",
      "Debt Recovery Tribunal (secured creditor recovery)",
      "Commercial Court, Gautam Buddh Nagar (below-threshold recovery)",
      "Magistrate courts, Surajpur (Section 138 NI Act prosecutions)",
      "UP MSME Facilitation Council (Samadhaan delayed-payment claims)",
    ],
    caseTypes: [
      { title: "Section 7 Petitions", desc: "Financial creditor applications where the default meets the statutory threshold." },
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Homebuyer Petitions", desc: "Allottee claims against stalled Greater Noida developers, subject to the class threshold." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute, disputing the default, or settling before admission." },
      { title: "Claim Filing & Verification", desc: "Filing and pursuing claims with the resolution professional once a process begins." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with the required creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution and related-party transactions." },
      { title: "Below-Threshold Alternatives", desc: "Summary suits, Commercial Court claims, Section 138 and Samadhaan where the IBC is unavailable." },
    ],
    faqs: [
      {
        question: "Which NCLT bench hears Greater Noida matters?",
        answer:
          "The NCLT Allahabad Bench, because jurisdiction follows the registered office and Greater Noida is in Uttar Pradesh. This surprises many NCR businesses who assume New Delhi applies — the registered office decides the bench, not where the company trades.",
      },
      {
        question: "What is the minimum default for an IBC petition?",
        answer:
          "One crore rupees. Below that the IBC is unavailable and recovery proceeds through an Order XXXVII summary suit, a Commercial Court claim, a Section 138 prosecution, or the MSME Samadhaan route for registered units.",
      },
      {
        question: "Can homebuyers file against a stalled project?",
        answer:
          "Yes — allottees are financial creditors under the IBC, but a petition needs at least one hundred allottees or ten per cent of the class to join. Once admitted, a moratorium halts other proceedings including RERA execution, so the choice between forums should be made deliberately.",
      },
      {
        question: "Can the debtor defeat my petition by claiming a dispute?",
        answer:
          "Only if the dispute is genuine and pre-existing — raised before your demand notice, over quality, quantity or a counterclaim. One invented afterwards does not assist, but a documented earlier dispute will defeat an operational creditor's petition, so the correspondence should be reviewed before filing.",
      },
      {
        question: "Can we settle after admission?",
        answer:
          "Yes, through a Section 12A withdrawal with the approval of the requisite majority of the committee of creditors. A substantial proportion of matters conclude this way, because admission is usually what brings a debtor to a realistic settlement.",
      },
    ],
    localNotes: [
      "Jurisdiction follows the registered office — Greater Noida companies go to Allahabad, not New Delhi.",
      "Homebuyer petitions need 100 allottees or ten per cent of the class, and the moratorium then halts RERA execution.",
      "Most local trade debts fall below one crore, so Section 138, summary suits and Samadhaan do the real work.",
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // SURAT × MATTERS — a credit-driven diamond and textile economy. Cheque
  // bounce is the signature matter; everything escalates to the Gujarat High
  // Court at Ahmedabad, and company work to the NCLT Ahmedabad Bench.
  // ══════════════════════════════════════════════════════════════════════
  "surat__cheque-bounce-recovery": {
    lead:
      "Nowhere in India is the bounced cheque more central to commercial life than Surat. The diamond and textile trades run on unsecured credit between parties who have dealt for years, and when a chain of payments breaks the cheque is usually the only enforceable document in the file. NyaySevak connects you with Bar-Council-verified Surat cheque-bounce lawyers who send the statutory notice inside the 30-day window, file before the correct magistrate, and press interim compensation so recovery starts early.",
    landscape: [
      "The timeline defeats more Surat complaints than any defence. The written demand notice must issue within 30 days of the bank's return memo, the drawer then has 15 days to pay, and the complaint must be filed within one month of that window closing. Because trade here is relationship-driven, payees routinely wait months hoping for an informal resolution and lose the prosecution on limitation before they ever reach a lawyer.",
      "Jurisdiction follows the payee's bank branch under Section 142 as amended in 2015, so a Surat account holder files in Surat even against a Mumbai, Jaipur or Kolkata drawer — which matters enormously in a trade whose counterparties sit in every diamond and textile market in the country. Documentation is the other recurring problem: much of this business moves on informal ledgers and the angadia system, so establishing the legally enforceable debt behind the cheque is often the real work of the case.",
      "Section 143A allows the trial court to order interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing to deposit at least twenty per cent. Since Section 138 is compoundable, a very large share of Surat matters settle through mediation or at National Lok Adalats, which dispose of NI Act cases in bulk — usually the fastest route to money rather than a judgment.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate courts, Surat (Section 138 NI Act complaints)",
      "Sessions Court, Surat (appeals against conviction or acquittal)",
      "Gujarat High Court, Ahmedabad (quashing on settlement, revision)",
      "Commercial Court, Surat (parallel civil recovery above the specified value)",
      "District Mediation Centre & National Lok Adalat, Surat",
      "Gujarat MSME Facilitation Council (Samadhaan route for registered units)",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Issuing the Section 138 notice within 30 days of the return memo, before the window closes." },
      { title: "Complaint Filing", desc: "Filing before the magistrate serving your bank branch, with the cause of action properly pleaded." },
      { title: "Proving the Underlying Debt", desc: "Building the legally enforceable debt from ledgers, invoices and dealings where paperwork is thin." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount at the trial stage." },
      { title: "Defending a S.138 Case", desc: "Rebutting the Section 139 presumption — security cheques, blank cheques, notice and service defects." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat and compounding, usually the fastest route to actual recovery." },
      { title: "Parallel Civil Recovery", desc: "Order XXXVII summary suits and Commercial Court claims alongside the prosecution." },
      { title: "Firm & Partner Liability", desc: "Proceeding against partners and signatories where the drawer is a firm or company." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque bounce case in Surat?",
        answer:
          "Before the Judicial Magistrate court serving the area of the bank branch where you presented the cheque. Since the 2015 amendment to Section 142 of the NI Act, the payee's branch fixes territorial jurisdiction, so a Surat account holder files here even against a drawer in another state.",
      },
      {
        question: "I waited months before acting. Is it too late?",
        answer:
          "It may be. The notice must go out within 30 days of the return memo and the complaint within one month after the drawer's 15-day period ends. This is the single most common way Surat traders lose an otherwise strong case, because informal settlement talks run past the deadline. It should be assessed immediately rather than assumed lost.",
      },
      {
        question: "Our dealings were on informal ledgers. Does that matter?",
        answer:
          "It makes the case harder but not hopeless. Section 139 presumes the cheque was issued for a legally enforceable debt, and the burden is on the drawer to rebut it. Ledgers, delivery records, correspondence and the pattern of dealings are all used to establish the debt behind the cheque.",
      },
      {
        question: "Can I get money before the trial concludes?",
        answer:
          "Often. Under Section 143A the court can order interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and a convicted drawer appealing must deposit at least a further twenty per cent under Section 148.",
      },
      {
        question: "Is settlement better than fighting it out?",
        answer:
          "Usually, if the aim is recovery rather than punishment. Section 138 is compoundable, and Surat matters settle in volume at mediation and National Lok Adalats. A negotiated payment schedule recorded before the magistrate typically produces money far sooner than a contested trial.",
      },
    ],
    localNotes: [
      "Waiting for an informal settlement past the 30-day notice window is how most Surat payees lose the case.",
      "Jurisdiction follows your bank branch, so Surat traders sue out-of-state drawers here.",
      "Thin documentation makes proving the underlying debt the real work; the Section 139 presumption is the starting point.",
    ],
  },

  "surat__rera-complaint": {
    lead:
      "Surat's residential expansion along Vesu, Pal, Adajan and the Dumas Road corridor has produced a steady flow of delayed-possession and specification disputes. NyaySevak connects you with Bar-Council-verified Surat RERA lawyers who file before GujRERA for refund with interest, delay compensation, or directions to complete, and who know when an older building falls under the Gujarat Ownership Flats Act instead.",
    landscape: [
      "Registration decides the forum. GujRERA's remedies apply to projects required to be registered, and the delay is measured against the completion date the promoter itself declared at registration — not against what a sales office promised. That declared date should be recorded when you book, because it is the benchmark every later claim turns on. Appeals from the Authority go to the Gujarat Real Estate Appellate Tribunal.",
      "Surat has a large stock of buildings that predate RERA, and for those the Gujarat Ownership Flats Act continues to govern the promoter's obligations — particularly the duty to form a co-operative society and execute conveyance. Buildings occupied for years without conveyance are common, and resolving that is usually the precondition to any later redevelopment, so the claim is framed under the Act rather than before GujRERA.",
      "Two local complications recur. Many Surat projects sit on land reconstituted through a Town Planning Scheme, so the final plot number and the betterment charge position need checking against the sanctioned plan. And where a promoter has collapsed, the alternative forum is the NCLT Ahmedabad Bench, before which homebuyers rank as financial creditors, subject to the hundred-allottee or ten-per-cent class threshold.",
    ],
    courtsForThisMatter: [
      "GujRERA (Gujarat Real Estate Regulatory Authority), Gandhinagar",
      "Gujarat Real Estate Appellate Tribunal (appeals from the Authority)",
      "NCLT Ahmedabad Bench (insolvent promoters; homebuyers as financial creditors)",
      "District & State Consumer Commissions, Surat (unregistered projects, service deficiency)",
      "Civil & Commercial Courts, Surat (conveyance, specific performance)",
      "Town Planning Officer & appellate authorities (final plot and betterment issues)",
    ],
    caseTypes: [
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation against the promoter's declared completion date." },
      { title: "Refund & Withdrawal", desc: "Electing to exit a registered project and recover amounts paid with statutory interest." },
      { title: "Society Formation & Conveyance", desc: "Compelling conveyance under the Gujarat Ownership Flats Act in pre-RERA buildings." },
      { title: "Carpet Area Shortfall", desc: "Claims where the area delivered falls short of the area agreed." },
      { title: "Specification Deviations", desc: "Departures from the sanctioned plan and agreed specifications after booking." },
      { title: "Common Areas & Amenities", desc: "Unbuilt amenities and transfer of common areas and maintenance to the society." },
      { title: "Promoter Insolvency", desc: "Claims before the NCLT Ahmedabad Bench where the developer has collapsed." },
      { title: "Pre-Booking Review", desc: "Registration, declared completion date, TP final plot and title checks before you commit." },
    ],
    faqs: [
      {
        question: "What can GujRERA order in my favour?",
        answer:
          "For a registered project it can direct a refund of the amounts you paid with interest if you withdraw, award compensation for the delay if you stay and take possession, or direct the promoter to complete and to comply with its obligations on common areas and society formation. Appeals go to the Gujarat Real Estate Appellate Tribunal.",
      },
      {
        question: "My building is older than RERA. What applies?",
        answer:
          "The Gujarat Ownership Flats Act may still govern the promoter's obligations, including forming a co-operative society and executing conveyance. Many Surat buildings have been occupied for years without conveyance, and resolving it is normally the precondition to redevelopment later.",
      },
      {
        question: "How is the delay period calculated?",
        answer:
          "Against the completion date the promoter declared to GujRERA at registration. Assurances from a sales team do not change it, which is why the declared date should be noted at booking — promoters resist revising it precisely because everything is measured from it.",
      },
      {
        question: "What if the project is not registered?",
        answer:
          "If registration was not obtained where it was required, the RERA remedy may be unavailable and the claim generally shifts to the consumer commission or a civil suit. Non-registration is itself a contravention, so the position should be assessed before choosing where to file.",
      },
      {
        question: "Should I check anything about the land itself?",
        answer:
          "Yes. Many Surat projects sit on land reconstituted through a Town Planning Scheme, so the final plot number, the betterment charge position and the sanctioned plan should be verified. Tenure category matters too, since restricted-tenure land cannot be transferred without prior permission.",
      },
    ],
    localNotes: [
      "Delay runs from the promoter's declared completion date at registration, not from sales-office promises.",
      "Pre-RERA Surat buildings fall under the Gujarat Ownership Flats Act for society formation and conveyance.",
      "Town Planning Scheme final plots and betterment charges need checking alongside the usual title diligence.",
    ],
  },

  "surat__company-registration": {
    lead:
      "Most Surat businesses begin as proprietorships or partnerships, and most outgrow that structure without changing it — which is where the trouble starts, because a partnership carries unlimited personal liability and an unregistered one cannot sue to enforce a contract. NyaySevak connects you with Bar-Council-verified Surat corporate lawyers for company and LLP incorporation, conversion from a firm, and the registrations a diamond or textile unit actually needs.",
    landscape: [
      "Structure drives risk here more than in most cities. Section 69 of the Partnership Act bars an unregistered firm and its partners from suing on a contract — a defence that ends a great many Surat recovery claims at the threshold — and partners remain personally liable without limit. Converting to an LLP or private limited company changes both, improves access to bank credit, and moves internal disputes from a civil dissolution suit to an oppression and mismanagement petition before the NCLT.",
      "Registration on the Udyam portal deserves attention at incorporation rather than after a default. A registered MSME whose buyer has not paid within forty-five days can proceed before the MSME Facilitation Council, which conducts conciliation then arbitration, with the buyer liable for compound interest at three times the RBI bank rate. Because registration generally has to predate the transaction, units that register only once a payment fails lose the remedy entirely.",
      "Companies registered in Surat file with the Registrar of Companies for Gujarat, and company and insolvency matters go to the NCLT Ahmedabad Bench. Beyond incorporation, an operating unit typically needs GST registration, professional tax, shops and establishments or factory licensing, provident fund and ESI where thresholds are met, and — for exporters working through the SEZ and diamond bourse ecosystem — the import-export code and the documentation that goes with it.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Gujarat (incorporation and ongoing filings)",
      "NCLT Ahmedabad Bench (oppression and mismanagement, schemes, insolvency)",
      "Gujarat MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Registrar of Firms, Gujarat (partnership registration)",
      "GST and professional tax authorities, Gujarat",
      "Labour department & Factories inspectorate, Surat",
    ],
    caseTypes: [
      { title: "Private Limited Incorporation", desc: "Formation for units taking on larger buyers, bank credit, or outside investment." },
      { title: "LLP Formation", desc: "Lighter-compliance structure for services, broking and trading practices." },
      { title: "Conversion from a Firm", desc: "Converting a proprietorship or partnership, and dealing with the assets, contracts and liabilities that move with it." },
      { title: "Partnership Registration", desc: "Registering the firm so the Section 69 bar cannot defeat a future recovery claim." },
      { title: "Udyam / MSME Registration", desc: "Registering before you trade so the Samadhaan remedy and its statutory interest are available." },
      { title: "Founders' & Partner Agreements", desc: "Profit shares, roles, admission and retirement, and exit terms agreed in advance." },
      { title: "Export & Trade Registrations", desc: "Import-export code and documentation for units supplying through the SEZ and bourse ecosystem." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, annual filings, GST and labour registrations." },
    ],
    faqs: [
      {
        question: "Should my Surat firm become a company?",
        answer:
          "It depends on scale and who you sell to. A partnership carries unlimited personal liability and, if unregistered, cannot sue to enforce a contract. An LLP or private limited company limits liability and improves credit standing at the cost of more compliance. For a unit moving into larger buyers or exports, conversion is usually worth modelling properly.",
      },
      {
        question: "Why does partnership registration matter so much?",
        answer:
          "Because Section 69 of the Partnership Act bars an unregistered firm and its partners from suing to enforce a contractual right. In a credit-based trade where recovery claims are routine, an unregistered firm can find itself unable to sue at all — and this is discovered at the worst possible moment.",
      },
      {
        question: "When should I register on Udyam?",
        answer:
          "Before you trade with the buyer, not after they default. The Samadhaan remedy and its compound interest at three times the RBI bank rate generally require registration predating the transaction, so late registration forfeits the strongest recovery tool available to a small unit.",
      },
      {
        question: "Which Registrar and which tribunal apply?",
        answer:
          "The Registrar of Companies for Gujarat handles incorporation and filings, and company and insolvency matters go to the NCLT Ahmedabad Bench, which has jurisdiction over the state.",
      },
      {
        question: "What else does an operating unit need?",
        answer:
          "Typically GST registration, professional tax, shops and establishments or factory licensing depending on the activity, provident fund and ESI where thresholds are met, and pollution-control consent for processing units. Exporters additionally need an import-export code and the associated documentation.",
      },
    ],
    localNotes: [
      "Section 69 of the Partnership Act can bar an unregistered firm from suing — register the firm early.",
      "Udyam registration must generally predate the transaction to unlock the Samadhaan remedy.",
      "Surat companies file in Gujarat and litigate company matters at the NCLT Ahmedabad Bench.",
    ],
  },

  "surat__anticipatory-bail": {
    lead:
      "Anticipatory bail in Surat is applied for under Section 482 of the BNSS before the Sessions Court, and before the Gujarat High Court at Ahmedabad if refused — Gujarat has a single High Court seat with no bench at Surat, which is a real factor in cost and timing. NyaySevak connects you with Bar-Council-verified Surat anticipatory-bail lawyers who move quickly and press for interim protection at the first hearing.",
    landscape: [
      "The most common Surat application arises from a commercial dispute that has been recast as a crime. When a chain of credit collapses, the aggrieved party frequently files a cheating or criminal breach of trust complaint alongside civil recovery, and the pre-arrest application has to show the court that the facts disclose a business failure rather than dishonest intention at the outset. That framing is the case, and it is the same argument that later supports a quashing petition.",
      "Prohibition prosecutions are the other constant. Gujarat has banned liquor since 1960, and the 2017 amendments made several offences non-bailable with sentences reaching ten years, so applications in this category are routine and the defences turn on Gujarat-specific provisions such as the health permit. Counsel from outside the state simply will not have handled them.",
      "Practicalities matter here. The Sessions Court at Surat is the first forum, and escalation means proceedings at Ahmedabad, so the timeline and cost of a refusal should be planned for at the outset. Some categories are barred or constrained regardless: Section 18 of the SC/ST (Prevention of Atrocities) Act bars anticipatory bail where a prima facie case is disclosed, and NDPS matters involving commercial quantities carry the Section 37 threshold.",
    ],
    courtsForThisMatter: [
      "Sessions Court, Surat (Section 482 BNSS applications)",
      "Gujarat High Court, Ahmedabad (anticipatory bail, quashing, revision)",
      "Chief Judicial Magistrate & Magistrate courts, Surat",
      "Special Courts under the Gujarat Prohibition Act",
      "Special Courts (NDPS, POCSO, SC/ST Act), Surat",
      "Economic Offences Wing & cyber cell, Surat",
    ],
    caseTypes: [
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications at Surat, with interim protection sought at the first hearing." },
      { title: "High Court Applications", desc: "Escalated applications before the Gujarat High Court at Ahmedabad." },
      { title: "Trade Dispute FIRs", desc: "Protection where a credit or consignment failure has been filed as cheating or breach of trust." },
      { title: "Prohibition Act Matters", desc: "Applications in liquor prosecutions under Gujarat's own regime." },
      { title: "Economic Offences", desc: "Applications in investment fraud and Economic Offences Wing investigations." },
      { title: "Matrimonial Cruelty FIRs", desc: "Protection in Section 85 BNS complaints, often alongside settlement." },
      { title: "Quashing Where Bail Is Barred", desc: "Gujarat High Court petitions where Section 18 of the SC/ST Act applies." },
      { title: "Conditions & Compliance", desc: "Negotiating workable terms on cooperation, travel, passport and sureties." },
    ],
    faqs: [
      {
        question: "Where do I apply for anticipatory bail in Surat?",
        answer:
          "Before the Sessions Court at Surat first, and the Gujarat High Court at Ahmedabad if refused. Gujarat has one High Court seat and no bench at Surat, so escalation means proceedings at Ahmedabad — worth planning for at the outset rather than discovering later.",
      },
      {
        question: "A trading partner has filed a cheating case against me. Can I get protection?",
        answer:
          "Often, yes. The argument is that the facts disclose a business failure rather than dishonest intention at the outset, which is what separates a civil dispute from an offence. That framing supports the pre-arrest application and later the quashing petition, so it should be built carefully from the start.",
      },
      {
        question: "How quickly should I move?",
        answer:
          "Immediately. The risk of arrest is highest in the period just after an FIR is registered, and courts commonly grant interim protection at the first hearing while notice issues to the prosecution. That interim order, not the final one, is usually what actually protects a person.",
      },
      {
        question: "Are there cases where it cannot be granted?",
        answer:
          "Yes. Section 18 of the SC/ST (Prevention of Atrocities) Act bars it where a prima facie case is disclosed, and NDPS matters involving commercial quantities face the additional Section 37 threshold. Where the bar applies, a quashing petition is generally the realistic alternative.",
      },
      {
        question: "How serious is a prohibition case?",
        answer:
          "More serious than most people outside Gujarat expect. The state has been dry since 1960 and the 2017 amendments made several offences non-bailable with sentences of up to ten years, so even possession matters carry real exposure and the defences are specific to Gujarat law.",
      },
    ],
    localNotes: [
      "Gujarat has a single High Court seat at Ahmedabad — there is no bench at Surat.",
      "Most Surat applications arise from trade defaults recast as cheating; the civil-versus-criminal framing is the case.",
      "Section 18 of the SC/ST Act bars the remedy, leaving quashing as the route.",
    ],
  },

  "surat__mutual-consent-divorce": {
    lead:
      "Surat's workforce came from Saurashtra, Odisha, Bihar and eastern Uttar Pradesh, so a very large share of its matrimonial matters involve a marriage solemnised in one state and a breakdown in another. NyaySevak connects you with Bar-Council-verified Surat divorce lawyers who file Section 13B petitions before the Family Court at Surat, handle transfer petitions where a spouse has returned home, and draft settlements that close every parallel case.",
    landscape: [
      "Jurisdiction is the first practical question. A petition may be filed where the marriage was solemnised, where the couple last resided together, or where the respondent resides — and for a migrant family those are frequently three different states. A wife may additionally claim maintenance where she currently lives. Where a spouse has gone back to a home district, a Supreme Court transfer petition is often needed before anything can be settled together.",
      "The Section 13B structure is fixed: a first motion recording at least a year's separation and agreement to dissolve, then a second after six to eighteen months confirming consent still stands. Following the Supreme Court's decision in Amardeep Singh, the Family Court can waive the six-month gap where the separation has already been long, mediation has failed and the settlement is complete — which can bring the process down to two or three months.",
      "The settlement is where the matter is actually resolved. It has to deal with permanent alimony and its schedule, custody and visitation, property and stridhan, and the closure of every parallel track — the Domestic Violence Act application before the Magistrate, the maintenance claim under Section 144 BNSS, and any Section 85 BNS complaint, which is not compoundable as of right and needs a quashing petition before the Gujarat High Court at Ahmedabad.",
    ],
    courtsForThisMatter: [
      "Family Court, Surat (Section 13B first and second motions)",
      "Magistrate courts, Surat (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Gujarat High Court, Ahmedabad (quashing of criminal complaints on settlement)",
      "Supreme Court of India (transfer petitions between states)",
      "District Mediation Centre, Surat",
      "Principal Judge, Family Court (waiver applications)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Family Court at Surat." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications on the Amardeep Singh criteria where separation is long and settlement complete." },
      { title: "Transfer Petitions", desc: "Supreme Court petitions consolidating proceedings filed in different states." },
      { title: "Settlement Drafting", desc: "Alimony, custody, property, stridhan and closure of every parallel proceeding." },
      { title: "Quashing on Settlement", desc: "Gujarat High Court petitions closing Section 85 BNS complaints once terms are agreed." },
      { title: "Custody & Visitation Terms", desc: "Arrangements that work across states, recorded as consent terms." },
      { title: "Permanent Alimony Structuring", desc: "Lump sum or staged payment with enforceable security and timelines." },
      { title: "Conversion from Contested", desc: "Converting a contested petition once terms are negotiated, often through mediation." },
    ],
    faqs: [
      {
        question: "Can I file in Surat if we married elsewhere?",
        answer:
          "Yes, if Surat is where you last resided together as spouses or where the respondent now lives. Given how much of the city's population moved here for work, this is the usual basis, and a wife may additionally claim maintenance where she currently resides.",
      },
      {
        question: "How long does it take?",
        answer:
          "Ordinarily six to twelve months because of the two-motion structure and the statutory gap. Where separation has already been long and the settlement is complete, the Family Court can waive the six-month gap and the matter may conclude in two to three months.",
      },
      {
        question: "My spouse has returned to our home state and filed there.",
        answer:
          "You can defend there or move the Supreme Court for a transfer petition to bring the proceedings together. This is a frequent situation in Surat, and consolidating is usually a precondition to settling everything in one package rather than case by case.",
      },
      {
        question: "Do both of us have to attend court?",
        answer:
          "Both parties are ordinarily required to appear so the court can satisfy itself that consent is free and genuine. Where a party is abroad or genuinely unable to attend, courts have permitted video conferencing or a duly authorised representative in appropriate cases, but this must be sought rather than assumed.",
      },
      {
        question: "What happens to the criminal case?",
        answer:
          "A Section 85 BNS complaint is not compoundable as of right, so it is closed by a quashing petition before the Gujarat High Court based on the settlement. This should be sequenced with the divorce so neither party is exposed after performing their side.",
      },
    ],
    localNotes: [
      "Migration makes cross-state jurisdiction and Supreme Court transfer petitions routine in Surat matters.",
      "Waiver of the six-month gap is discretionary and requires a complete settlement.",
      "Quashing a cruelty complaint means a separate petition at Ahmedabad, so sequence performance carefully.",
    ],
  },

  "surat__nclt-ibc": {
    lead:
      "Company and insolvency matters for Surat businesses go to the NCLT Ahmedabad Bench, which covers Gujarat. For most of the city's trade debts the IBC is out of reach — the one-crore threshold excludes them — so the practical question is usually which of the alternatives to run. NyaySevak connects you with Bar-Council-verified Surat NCLT and insolvency lawyers who can tell you honestly which route fits your claim.",
    landscape: [
      "Start with the threshold, because it determines everything. A corporate insolvency petition requires a default of at least one crore rupees, and a very large proportion of diamond and textile trade debts fall below it. Where they do, recovery runs through Section 138 prosecutions, Order XXXVII summary suits, Commercial Court claims, or the MSME Samadhaan route with its compound interest at three times the RBI bank rate — which is frequently the strongest lever a registered small unit has.",
      "Where the threshold is met, a financial creditor proceeds under Section 7 and an operational creditor under Section 9 after a statutory demand notice. For operational creditors the decisive question is whether the debtor raised a genuine dispute before that notice — over quality, quantity or a counterclaim. If one exists the petition will not be admitted, because the IBC is an insolvency mechanism and not a substitute for a recovery suit, so the correspondence trail has to be assessed candidly before filing.",
      "Admission changes the debtor's position entirely: a moratorium halts suits and enforcement, the board is displaced in favour of a resolution professional, and the promoter may be barred under Section 29A from bidding for the company. That is why the credible threat of admission produces so many settlements, commonly formalised as a Section 12A withdrawal with committee approval. Appeals from Ahmedabad go to the NCLAT in New Delhi.",
    ],
    courtsForThisMatter: [
      "NCLT Ahmedabad Bench (Gujarat jurisdiction)",
      "NCLAT, New Delhi (appeals from the Ahmedabad Bench)",
      "Gujarat MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Commercial Court, Surat (below-threshold recovery)",
      "Judicial Magistrate courts, Surat (Section 138 NI Act prosecutions)",
      "Debt Recovery Tribunal, Ahmedabad (secured creditor recovery)",
    ],
    caseTypes: [
      { title: "Section 7 Petitions", desc: "Financial creditor applications where the default meets the statutory threshold." },
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute, disputing the default, or settling before admission." },
      { title: "Claim Filing & Verification", desc: "Filing and pursuing claims with the resolution professional once a process begins." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with the required creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution and related-party transactions." },
      { title: "Personal Guarantor Proceedings", desc: "Proceedings against promoters who guaranteed the corporate debt." },
      { title: "Below-Threshold Alternatives", desc: "Samadhaan, summary suits, Commercial Court claims and Section 138 where the IBC is unavailable." },
    ],
    faqs: [
      {
        question: "Which NCLT bench covers Surat?",
        answer:
          "The NCLT Ahmedabad Bench, which has jurisdiction over Gujarat. Insolvency petitions, oppression and mismanagement claims and scheme approvals for Surat companies are filed and heard there, with appeals to the NCLAT in New Delhi.",
      },
      {
        question: "Can I file an IBC petition for an unpaid invoice?",
        answer:
          "Only if the default is one crore rupees or more, which excludes most Surat trade debts. Below that the realistic options are the MSME Samadhaan route if you are registered, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution on a bounced cheque.",
      },
      {
        question: "The buyer says the goods were defective. Does that stop me?",
        answer:
          "If that dispute was genuinely raised before your demand notice, yes — a pre-existing dispute defeats an operational creditor's petition. A complaint invented after the notice does not assist the debtor, but a documented earlier one will, which is why the correspondence should be reviewed honestly before filing.",
      },
      {
        question: "What happens once a petition is admitted?",
        answer:
          "A moratorium halts suits and enforcement, the board is displaced and a resolution professional takes control, and claims are invited. The promoter may also be barred under Section 29A from bidding for the company. The severity of that outcome is exactly what makes the threat of admission effective leverage.",
      },
      {
        question: "Can it be withdrawn if we settle?",
        answer:
          "Yes, under Section 12A with the approval of the requisite majority of the committee of creditors. Many matters conclude this way, because admission is usually what brings a debtor to a realistic settlement.",
      },
    ],
    localNotes: [
      "The one-crore threshold puts the IBC out of reach for most Surat trade debts — Samadhaan usually does more work.",
      "A pre-existing dispute defeats an operational creditor's petition; assess the correspondence before filing.",
      "Appeals from the Ahmedabad Bench go to the NCLAT in New Delhi.",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // VADODARA × MATTERS — an organised-sector industrial city. Contracts are
  // arbitration-first, the workforce is permanent and unionised, and
  // regulatory prosecutions reach the occupier and manager personally.
  // ══════════════════════════════════════════════════════════════════════
  "vadodara__cheque-bounce-recovery": {
    lead:
      "Vadodara's cheque-bounce work is largely business-to-business: vendor and job-work payments into the petrochemical and engineering supply chain, contractor bills, and equipment supply. NyaySevak connects you with Bar-Council-verified Vadodara cheque-bounce lawyers who issue the statutory notice within the 30-day window, file before the correct magistrate, and check first whether the contract's arbitration clause changes the recovery strategy.",
    landscape: [
      "The Section 138 timeline is the same everywhere and unforgiving: notice within 30 days of the return memo, 15 days for the drawer to pay, complaint within one month after that. Jurisdiction follows the payee's bank branch under Section 142 as amended in 2015, so a Vadodara supplier files here even against a buyer elsewhere in India.",
      "What differs in Vadodara is what sits behind the cheque. Supply into the large industrial units is usually governed by a written contract, and those contracts routinely carry arbitration clauses — so while the Section 138 prosecution proceeds in the magistrate's court, the civil recovery may have to go to arbitration rather than a suit. Running the criminal case for pressure while the contractual claim proceeds in the right forum is the standard approach, and getting that split wrong wastes months.",
      "Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing to deposit at least twenty per cent. Registered MSMEs supplying larger buyers should also weigh the Samadhaan route before the Facilitation Council, whose statutory compound interest often produces a settlement faster than either track.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate courts, Vadodara (Section 138 NI Act complaints)",
      "Sessions Court, Vadodara (appeals against conviction or acquittal)",
      "Gujarat High Court, Ahmedabad (quashing on settlement, Section 11 arbitration appointments)",
      "Commercial Court, Vadodara (contractual recovery above the specified value)",
      "Gujarat MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "District Mediation Centre & National Lok Adalat, Vadodara",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Issuing the Section 138 notice inside the 30-day window from the return memo." },
      { title: "Complaint Filing", desc: "Filing before the magistrate serving your bank branch, with the debt properly pleaded." },
      { title: "Forum Strategy", desc: "Deciding whether contractual recovery belongs in arbitration, a summary suit or the Commercial Court." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount at the trial stage." },
      { title: "Defending a S.138 Case", desc: "Rebutting the Section 139 presumption where the cheque was security or the debt is disputed." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered suppliers." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat and compounding at any stage of the prosecution." },
      { title: "Company & Director Liability", desc: "Proceeding against signatories and directors under Section 141." },
    ],
    faqs: [
      {
        question: "Our supply contract has an arbitration clause. Can I still file a cheque case?",
        answer:
          "Yes. The Section 138 prosecution is a criminal proceeding and is unaffected by an arbitration clause, which governs the contractual claim. In practice the prosecution is run for pressure while the contractual recovery proceeds in arbitration — but the split has to be handled deliberately, because filing the civil claim in the wrong forum wastes months.",
      },
      {
        question: "Where do I file in Vadodara?",
        answer:
          "Before the Judicial Magistrate court serving the area of the bank branch where you presented the cheque. Since the 2015 amendment to Section 142 of the NI Act, the payee's branch fixes jurisdiction, so a Vadodara supplier files here against a buyer anywhere in India.",
      },
      {
        question: "What is the deadline?",
        answer:
          "Thirty days from the bank's return memo to send the demand notice, fifteen days for the drawer to pay, and one month after that to file the complaint. Missing any of these can end the prosecution on limitation regardless of the merits.",
      },
      {
        question: "Is there a faster route for a small supplier?",
        answer:
          "If you hold Udyam registration, the MSME Samadhaan route before the Facilitation Council carries compound interest at three times the RBI bank rate and often brings a large buyer to settlement faster than litigation. Registration generally has to predate the transaction, so it should be in place before you supply.",
      },
      {
        question: "Can I recover before the trial ends?",
        answer:
          "Often. Section 143A allows the court to order interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a further minimum twenty per cent deposit from a convicted drawer who appeals.",
      },
    ],
    localNotes: [
      "Most Vadodara supply contracts carry arbitration clauses, so the civil claim and the S.138 prosecution take different routes.",
      "Jurisdiction follows the payee's bank branch, keeping the prosecution local.",
      "For registered MSMEs, Samadhaan's statutory interest often settles faster than either court track.",
    ],
  },

  "vadodara__rera-complaint": {
    lead:
      "Vadodara's housing market divides between newer registered projects along Gotri, Waghodia Road and the Vasna–Bhayli corridor, and a large stock of older society buildings that predate RERA. The remedy depends on which side your building falls. NyaySevak connects you with Bar-Council-verified Vadodara RERA lawyers who pursue refund, delay compensation or completion before GujRERA, and conveyance where the older Act applies.",
    landscape: [
      "For a registered project, GujRERA can order a refund of amounts paid with interest if you withdraw, compensation for the delay if you stay, or directions to complete, with appeals to the Gujarat Real Estate Appellate Tribunal. Delay is measured against the completion date the promoter declared at registration, so that date should be recorded at booking — it is the benchmark for every subsequent claim and promoters resist revising it for precisely that reason.",
      "Vadodara's older society stock is where a different problem sits. Buildings occupied for many years frequently have no executed conveyance, because the promoter never completed the obligation to form the society and convey the land. The Gujarat Ownership Flats Act governs those duties, and resolving conveyance is normally the precondition to redevelopment — which is why it surfaces when a society first considers a redevelopment proposal rather than at the time of purchase.",
      "Two further checks are worth doing before any Vadodara purchase. Much of the developed area sits on land reconstituted through a Town Planning Scheme, so the final plot number and betterment charge position should be verified against the sanctioned plan. And where a promoter has collapsed, the alternative forum is the NCLT Ahmedabad Bench, where homebuyers rank as financial creditors subject to the hundred-allottee or ten-per-cent class threshold.",
    ],
    courtsForThisMatter: [
      "GujRERA (Gujarat Real Estate Regulatory Authority), Gandhinagar",
      "Gujarat Real Estate Appellate Tribunal (appeals from the Authority)",
      "NCLT Ahmedabad Bench (insolvent promoters; homebuyers as financial creditors)",
      "Civil & Commercial Courts, Vadodara (conveyance, specific performance)",
      "Town Planning Officer & appellate authorities (final plot and betterment issues)",
      "District Consumer Commission, Vadodara",
    ],
    caseTypes: [
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation against the promoter's declared completion date." },
      { title: "Society Conveyance", desc: "Compelling formation of the society and execution of conveyance under the Gujarat Ownership Flats Act." },
      { title: "Redevelopment Readiness", desc: "Resolving conveyance and title so a society can actually pursue redevelopment." },
      { title: "Refund & Withdrawal", desc: "Electing to exit a registered project and recover amounts paid with interest." },
      { title: "Carpet Area & Specification", desc: "Shortfall against the area and specification agreed at booking." },
      { title: "Common Areas & Amenities", desc: "Unbuilt amenities and transfer of common areas and maintenance." },
      { title: "Promoter Insolvency", desc: "Claims before the NCLT Ahmedabad Bench where the developer has collapsed." },
      { title: "Pre-Booking Review", desc: "Registration, declared completion date, TP final plot and title checks before you commit." },
    ],
    faqs: [
      {
        question: "Our society has no conveyance. What can we do?",
        answer:
          "The Gujarat Ownership Flats Act obliges the promoter to form the society and execute conveyance, and there are routes to compel it. For a registered project GujRERA can direct compliance. Many older Vadodara buildings sit in this position, and resolving it is normally what makes redevelopment possible later.",
      },
      {
        question: "What can GujRERA order for a delayed project?",
        answer:
          "A refund of the amounts you paid with interest if you withdraw, compensation for the delay if you stay and take possession, or directions to the promoter to complete. Appeals go to the Gujarat Real Estate Appellate Tribunal, and the Authority is designed to decide within about sixty days though contested matters run longer.",
      },
      {
        question: "How is the delay measured?",
        answer:
          "Against the completion date the promoter declared to GujRERA at registration, not against sales assurances. Record that date when you book, because every later claim is calculated from it.",
      },
      {
        question: "Does it matter that the land came through a Town Planning Scheme?",
        answer:
          "It can. The final plot number, the betterment charge position and the sanctioned plan should be checked, because a mismatch between the plan and what is being built is a genuine risk and is far cheaper to find before purchase than afterwards.",
      },
      {
        question: "What if the developer becomes insolvent?",
        answer:
          "Homebuyers are financial creditors under the IBC and can proceed before the NCLT Ahmedabad Bench, subject to the threshold requiring at least one hundred allottees or ten per cent of the class. A moratorium then halts other proceedings, so timing between forums matters.",
      },
    ],
    localNotes: [
      "Vadodara's older society stock frequently lacks conveyance — the blocker that surfaces at redevelopment.",
      "Delay runs from the promoter's declared completion date at registration.",
      "TP Scheme final plot and betterment position should be checked alongside title.",
    ],
  },

  "vadodara__company-registration": {
    lead:
      "Setting up in Vadodara means planning for an industrial regulatory load from the outset — factory licensing, pollution-control consents, and the labour framework that applies to a permanent workforce. NyaySevak connects you with Bar-Council-verified Vadodara corporate lawyers for company and LLP incorporation, industrial approvals, and the employment compliance that catches out businesses arriving from services sectors.",
    landscape: [
      "Incorporation is the easy part. A private limited company suits anyone raising capital or supplying the large industrial units, which generally expect that form and impose vendor-qualification requirements; an LLP is lighter for engineering consultancy and services. Companies registered here file with the Registrar of Companies for Gujarat, and company and insolvency disputes go to the NCLT Ahmedabad Bench.",
      "The regulatory sequence is what determines the timeline. An operating unit typically needs factory licensing, pollution-control consent to establish and then to operate, provident fund and ESI registration, contract-labour registration where applicable, GST, and clearances under the state single-window framework. Several of these depend on approvals granted earlier, so starting them in the wrong order is the usual cause of delay — and consent to establish should be secured before construction, not after.",
      "Vadodara's permanent, organised workforce brings obligations that services businesses often underestimate. Establishments above the applicable thresholds must certify standing orders, and the contract-labour regime makes a principal employer responsible for a contractor's statutory dues if the contractor defaults. Getting the employment framework right at setup is considerably cheaper than defending a reference before the Industrial Tribunal later.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Gujarat (incorporation and ongoing filings)",
      "NCLT Ahmedabad Bench (oppression and mismanagement, schemes, insolvency)",
      "Gujarat Pollution Control Board (consent to establish and to operate)",
      "Factories inspectorate & labour department, Vadodara",
      "Labour Court & Industrial Tribunal, Vadodara",
      "Gujarat single-window industrial clearance authority",
    ],
    caseTypes: [
      { title: "Private Limited Incorporation", desc: "Formation for units supplying large industrial buyers or raising outside capital." },
      { title: "LLP Formation", desc: "Lighter-compliance structure for engineering consultancy and services practices." },
      { title: "Industrial Approvals", desc: "Factory licensing, pollution-control consents and single-window clearances, obtained in sequence." },
      { title: "Standing Orders", desc: "Certifying employment terms where the establishment crosses the applicable threshold." },
      { title: "Contract Labour Compliance", desc: "Principal-employer registration and the liability that follows a contractor's default." },
      { title: "Vendor Qualification", desc: "Structuring and documentation to meet large buyers' vendor-registration requirements." },
      { title: "Founders' & Shareholders' Agreements", desc: "Roles, transfer restrictions, exit and deadlock agreed in advance." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, annual filings, GST and labour registrations." },
    ],
    faqs: [
      {
        question: "What approvals does a Vadodara manufacturing unit need?",
        answer:
          "Typically factory licensing, pollution-control consent to establish and then to operate, provident fund and ESI registration, contract-labour registration where applicable, GST, and single-window clearances. Consent to establish should be obtained before construction begins, and several later approvals depend on earlier ones.",
      },
      {
        question: "Which Registrar and tribunal apply?",
        answer:
          "The Registrar of Companies for Gujarat handles incorporation and filings, and company and insolvency matters go to the NCLT Ahmedabad Bench, which has jurisdiction over the state.",
      },
      {
        question: "Do we need standing orders?",
        answer:
          "If the establishment is above the applicable size threshold, yes — standing orders certify the terms of employment including classification, hours, leave, misconduct and disciplinary procedure. Once certified they bind the employer, and disciplinary action taken outside them is regularly set aside by the Tribunal.",
      },
      {
        question: "Are we liable for our contractor's workers?",
        answer:
          "Potentially. Under the contract-labour regime a principal employer carries registration obligations and can become liable for wages and statutory dues if the contractor defaults, and courts examine whether the arrangement is genuine contracting or disguised employment. Auditing contractor compliance is far cheaper than defending a claim.",
      },
      {
        question: "Private limited or LLP for an engineering business?",
        answer:
          "If you intend to supply the large industrial units or raise capital, a private limited company is usually expected and better suited to vendor qualification. An LLP is lighter for a consultancy with no fundraising plan. Conversion later is possible but costs time and money.",
      },
    ],
    localNotes: [
      "Consent to establish must precede construction — obtaining approvals out of order is the usual cause of delay.",
      "Standing orders and contract-labour compliance apply from setup, not once a dispute arises.",
      "Vadodara companies file in Gujarat and litigate company matters at the NCLT Ahmedabad Bench.",
    ],
  },

  "vadodara__anticipatory-bail": {
    lead:
      "Vadodara generates a category of pre-arrest application that most cities do not: prosecutions following an industrial accident or a pollution-control action, which name the occupier and the manager personally rather than only the company. NyaySevak connects you with Bar-Council-verified Vadodara anticipatory-bail lawyers who act for senior plant personnel as well as in ordinary criminal matters.",
    landscape: [
      "Personal liability is the distinguishing feature. Under the Factories Act the occupier and manager carry responsibility for safety breaches, and environmental statutes similarly reach the persons in charge of the business, so after a workplace accident or a pollution-control complaint a named individual — not an abstract company — faces prosecution. Anticipatory bail applications in these matters turn on the statutory scheme and the inspection record rather than on ordinary criminal-law arguments.",
      "The most valuable work is usually earlier than the bail application. A properly handled response at the show-cause and inspection stage can prevent a complaint being filed at all, and the documents generated in those first days — notifications, site records, the inspection report — largely determine what follows. Once a complaint is filed, the application is built from that same record.",
      "Otherwise Vadodara follows the standard Gujarat route: the Sessions Court first, then the Gujarat High Court at Ahmedabad, which is the state's only seat. Prohibition prosecutions remain routine and carry serious exposure after the 2017 amendments, and the usual constraints apply — Section 18 of the SC/ST (Prevention of Atrocities) Act bars anticipatory bail where a prima facie case is disclosed, and NDPS commercial quantities carry the Section 37 threshold.",
    ],
    courtsForThisMatter: [
      "Sessions Court, Vadodara (Section 482 BNSS applications)",
      "Gujarat High Court, Ahmedabad (anticipatory bail, quashing, revision)",
      "Chief Judicial Magistrate & Magistrate courts, Vadodara",
      "Factories inspectorate & Gujarat Pollution Control Board (pre-complaint stage)",
      "Special Courts under the Gujarat Prohibition Act",
      "Special Courts (NDPS, POCSO, SC/ST Act), Vadodara",
    ],
    caseTypes: [
      { title: "Occupier & Manager Defence", desc: "Pre-arrest protection for named plant personnel after an industrial accident." },
      { title: "Environmental Prosecutions", desc: "Applications in pollution-control complaints reaching persons in charge of the business." },
      { title: "Show-Cause Stage Response", desc: "Handling the inspection and show-cause record before it becomes a complaint." },
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications at Vadodara, with interim protection at the first hearing." },
      { title: "High Court Applications", desc: "Escalated applications before the Gujarat High Court at Ahmedabad." },
      { title: "Economic & Corporate Offences", desc: "Applications for directors in cheating and breach-of-trust investigations." },
      { title: "Matrimonial Cruelty FIRs", desc: "Protection in Section 85 BNS complaints, often alongside settlement." },
      { title: "Conditions & Compliance", desc: "Negotiating terms on cooperation, travel, passport and sureties." },
    ],
    faqs: [
      {
        question: "Can a plant manager be prosecuted personally?",
        answer:
          "Yes. Under the Factories Act the occupier and manager carry personal responsibility for safety breaches, and environmental statutes reach the persons in charge of the business. That is why senior plant personnel in Vadodara often need pre-arrest protection in their own name, separately from the company.",
      },
      {
        question: "What should we do immediately after a workplace accident?",
        answer:
          "Secure the statutory notifications and preserve the site and maintenance records at once, because the inspection report largely determines what follows. Legal advice at the show-cause and inspection stage is considerably more valuable than after a complaint, since a well-documented response can prevent prosecution altogether.",
      },
      {
        question: "Where do I apply for anticipatory bail?",
        answer:
          "Before the Sessions Court at Vadodara first, and the Gujarat High Court at Ahmedabad if refused. Gujarat has a single High Court seat, so escalation always means proceedings at Ahmedabad.",
      },
      {
        question: "Are there cases where it cannot be granted?",
        answer:
          "Yes. Section 18 of the SC/ST (Prevention of Atrocities) Act bars it where a prima facie case is disclosed, and NDPS matters involving commercial quantities face the Section 37 threshold. Where the bar applies, a quashing petition is generally the realistic alternative.",
      },
      {
        question: "How quickly should we move?",
        answer:
          "Immediately once a complaint appears likely. Courts commonly consider interim protection at the first hearing while notice issues to the prosecution, and that interim order is usually what actually protects a person through the most exposed period.",
      },
    ],
    localNotes: [
      "Factories Act and pollution prosecutions name the occupier and manager personally, not just the company.",
      "The inspection and show-cause record shapes the case — handle it before a complaint is filed.",
      "All Gujarat High Court work is at Ahmedabad; there is no bench at Vadodara.",
    ],
  },

  "vadodara__mutual-consent-divorce": {
    lead:
      "Vadodara's largely salaried, organised-sector population makes mutual consent divorce comparatively straightforward on the financial side: income is documented, so alimony is negotiated against real figures rather than contested estimates. NyaySevak connects you with Bar-Council-verified Vadodara divorce lawyers who file Section 13B petitions before the Family Court and draft settlements that close every parallel proceeding.",
    landscape: [
      "The Section 13B structure is a first motion recording at least a year's separation and agreement to dissolve, then a second after six to eighteen months confirming consent still stands. Under the Supreme Court's decision in Amardeep Singh the Family Court may waive the six-month gap where separation has already been long, mediation has failed and the settlement is complete — which can reduce the process to two or three months.",
      "Because so many Vadodara spouses are employed by large industrial and public-sector employers, income is provable from salary slips, Form 16 and provident-fund records. That makes the affidavit-of-assets framework required by Rajnesh v. Neha straightforward to apply, and it usually means alimony is settled by negotiation rather than litigated. Where a spouse is in public-sector employment, pension and gratuity entitlements should be dealt with expressly, or the settlement generates fresh litigation at retirement.",
      "Custody terms need to anticipate transferable employment. Where one parent's job may move them between cities, a consent order that addresses school continuity, travel and regular video contact avoids returning to court each time a transfer happens. The settlement should also close the Domestic Violence Act application, the Section 144 BNSS maintenance claim, and any Section 85 BNS complaint — the last requiring a quashing petition at Ahmedabad.",
    ],
    courtsForThisMatter: [
      "Family Court, Vadodara (Section 13B first and second motions)",
      "Magistrate courts, Vadodara (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Gujarat High Court, Ahmedabad (quashing of criminal complaints on settlement)",
      "District Mediation Centre, Vadodara",
      "Principal Judge, Family Court (waiver applications)",
      "Supreme Court of India (transfer petitions between states)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Family Court at Vadodara." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications on the Amardeep Singh criteria where separation is long and settlement complete." },
      { title: "Alimony on Documented Income", desc: "Negotiating against salary, Form 16 and provident-fund records under the Rajnesh framework." },
      { title: "Pension & Service Benefits", desc: "Treating gratuity, provident fund and family-pension entitlements expressly in the settlement." },
      { title: "Custody for Transferable Jobs", desc: "Consent terms that survive a job transfer without returning to court." },
      { title: "Settlement Drafting", desc: "Property, stridhan and closure of every parallel proceeding in one package." },
      { title: "Quashing on Settlement", desc: "Gujarat High Court petitions closing Section 85 BNS complaints." },
      { title: "Mediation", desc: "Court-annexed mediation to convert a contested matter into agreed terms." },
    ],
    faqs: [
      {
        question: "How long does mutual consent divorce take in Vadodara?",
        answer:
          "Ordinarily six to twelve months because of the two-motion structure and the statutory gap. Where separation has already been long and the settlement is complete, the Family Court may waive the six-month gap and the matter can conclude in two to three months.",
      },
      {
        question: "How is alimony decided when both incomes are documented?",
        answer:
          "It is usually negotiated rather than litigated, because salary slips, Form 16 and provident-fund records leave little room for dispute about the figures. The Rajnesh v. Neha framework requires both spouses to file affidavits of assets and income, which in a salaried city makes the exercise largely arithmetical.",
      },
      {
        question: "What about pension and gratuity?",
        answer:
          "They should be addressed expressly. Family-pension and nomination entitlements are affected by a divorce in ways that are easy to overlook, and a settlement silent on service benefits frequently produces fresh litigation years later at retirement.",
      },
      {
        question: "My job transfers me between cities. How should custody be framed?",
        answer:
          "With terms that anticipate it — school continuity, travel arrangements and regular video contact — rather than a fixed weekly schedule that breaks on the first transfer. A consent order drafted this way avoids returning to court each time your posting changes.",
      },
      {
        question: "Does the settlement close the other cases too?",
        answer:
          "It should. A complete package closes the Domestic Violence Act application and the Section 144 BNSS maintenance claim before the Magistrate, and any Section 85 BNS complaint through a quashing petition at Ahmedabad. A settlement covering only the divorce leaves the parties still litigating.",
      },
    ],
    localNotes: [
      "Documented salaried income makes alimony a negotiation rather than a contest in most Vadodara matters.",
      "Pension, gratuity and family-pension entitlements must be dealt with expressly or they resurface at retirement.",
      "Custody terms should anticipate transferable employment rather than assume a fixed location.",
    ],
  },

  "vadodara__nclt-ibc": {
    lead:
      "Vadodara's insolvency work is shaped by its supply chains: engineering and job-work vendors owed by larger buyers, and contracts that route the underlying claim to arbitration rather than a suit. Company and insolvency matters go to the NCLT Ahmedabad Bench. NyaySevak connects you with Bar-Council-verified Vadodara NCLT and insolvency lawyers for Section 7 and Section 9 petitions, defending admission, and shareholder disputes.",
    landscape: [
      "The one-crore default threshold is the first filter. Where a claim falls below it the IBC is unavailable, and recovery proceeds instead through arbitration under the supply contract, an Order XXXVII summary suit, a Commercial Court claim, a Section 138 prosecution, or the MSME Samadhaan route with its compound interest at three times the RBI bank rate — often the most effective lever a vendor has against a much larger buyer.",
      "For operational creditors the decisive issue is the pre-existing dispute. Industrial supply relationships generate quality rejections, debit notes and counterclaims as a matter of routine, and any of those raised before the demand notice will defeat a Section 9 petition, because the IBC is an insolvency mechanism rather than a recovery forum. In this sector that correspondence almost always exists, so it must be reviewed candidly before filing rather than after a rejection.",
      "Where a petition is admitted the consequences are severe and that is the point: a moratorium halts suits and enforcement, the board is displaced in favour of a resolution professional, and the promoter may be barred under Section 29A from bidding for the company. That drives a high proportion of settlements, usually formalised as a Section 12A withdrawal with committee approval. Appeals from Ahmedabad go to the NCLAT in New Delhi.",
    ],
    courtsForThisMatter: [
      "NCLT Ahmedabad Bench (Gujarat jurisdiction)",
      "NCLAT, New Delhi (appeals from the Ahmedabad Bench)",
      "Gujarat MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Commercial Court, Vadodara (below-threshold and contractual recovery)",
      "Gujarat High Court, Ahmedabad (Section 11 arbitration appointments)",
      "Debt Recovery Tribunal, Ahmedabad (secured creditor recovery)",
    ],
    caseTypes: [
      { title: "Section 7 Petitions", desc: "Financial creditor applications where the default meets the statutory threshold." },
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute from the rejection and debit-note record." },
      { title: "Claim Filing & Verification", desc: "Filing and pursuing claims with the resolution professional once a process begins." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with the required creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution and related-party transactions." },
      { title: "Personal Guarantor Proceedings", desc: "Proceedings against promoters who guaranteed the corporate debt." },
      { title: "Below-Threshold Alternatives", desc: "Arbitration, summary suits, Commercial Court claims, Section 138 and Samadhaan." },
    ],
    faqs: [
      {
        question: "Which NCLT bench covers Vadodara?",
        answer:
          "The NCLT Ahmedabad Bench, which has jurisdiction over Gujarat, with appeals to the NCLAT in New Delhi.",
      },
      {
        question: "Our buyer raised quality rejections. Can we still file?",
        answer:
          "Probably not as an operational creditor, if those rejections predate your demand notice — a genuine pre-existing dispute defeats a Section 9 petition. In industrial supply this correspondence usually exists, so it should be reviewed honestly before filing rather than discovered at the hearing.",
      },
      {
        question: "What if the debt is below one crore?",
        answer:
          "The IBC is unavailable. Recovery then proceeds through arbitration if the contract provides for it, an Order XXXVII summary suit, a Commercial Court claim, a Section 138 prosecution, or the MSME Samadhaan route if you are registered.",
      },
      {
        question: "Why do so many admitted cases settle?",
        answer:
          "Because admission displaces the board, imposes a moratorium and can bar the promoter under Section 29A from bidding to take the company back. Faced with that, debtors who resisted payment for months often settle quickly, and the matter is withdrawn under Section 12A.",
      },
      {
        question: "Can we proceed against the promoter personally?",
        answer:
          "Where the promoter gave a personal guarantee for the corporate debt, yes — personal guarantor insolvency proceedings are available and are frequently used to add pressure alongside the corporate process.",
      },
    ],
    localNotes: [
      "Quality rejections and debit notes routinely create the pre-existing dispute that defeats a Section 9 petition.",
      "Where a supply contract has an arbitration clause, the contractual claim goes there, not to a suit.",
      "Company and insolvency matters go to Ahmedabad; appeals go to the NCLAT in New Delhi.",
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // RAJKOT × MATTERS — a proprietor-and-partnership MSME economy. The
  // recurring themes are unregistered firms, Samadhaan leverage, and
  // Saurashtra's own land tenure.
  // ══════════════════════════════════════════════════════════════════════
  "rajkot__cheque-bounce-recovery": {
    lead:
      "Rajkot's casting, forging and auto-component workshops sell on credit to dealers and OEM buyers across India, and the post-dated cheque is how that credit is secured. NyaySevak connects you with Bar-Council-verified Rajkot cheque-bounce lawyers who issue the statutory notice inside the 30-day window, file before the correct magistrate, and weigh the Samadhaan route in parallel — which for a registered MSME is often the faster lever.",
    landscape: [
      "The deadlines are the case. Notice within 30 days of the return memo, 15 days for the drawer to pay, complaint within one month after that. Jurisdiction follows the payee's bank branch under Section 142 as amended in 2015, so a Rajkot supplier files here against a buyer anywhere in India — which matters in a trade whose dealers sit in every state.",
      "A structural trap catches many Rajkot claimants before they start. Section 69 of the Partnership Act bars an unregistered firm and its partners from suing to enforce a contractual right, so while the Section 138 prosecution can proceed, the parallel civil recovery may be barred outright. Firms discover this at the worst moment, and registration status should therefore be checked at the same time as the notice is drafted.",
      "Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing to deposit at least twenty per cent. For a unit holding Udyam registration, the MSME Samadhaan route before the Facilitation Council carries compound interest at three times the RBI bank rate and often brings a larger buyer to settlement faster than either the prosecution or a suit.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate courts, Rajkot (Section 138 NI Act complaints)",
      "Sessions Court, Rajkot (appeals against conviction or acquittal)",
      "Gujarat High Court, Ahmedabad (quashing on settlement, revision)",
      "Gujarat MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Commercial Court, Rajkot (parallel civil recovery above the specified value)",
      "District Mediation Centre & National Lok Adalat, Rajkot",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Issuing the Section 138 notice within 30 days of the return memo." },
      { title: "Complaint Filing", desc: "Filing before the magistrate serving your bank branch, with the debt properly pleaded." },
      { title: "Firm Registration Check", desc: "Confirming the Section 69 bar will not defeat the parallel civil claim." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered units." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount at the trial stage." },
      { title: "Defending a S.138 Case", desc: "Rebutting the Section 139 presumption — security cheques, blank cheques, notice defects." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat and compounding, usually the fastest route to money." },
      { title: "Partner & Signatory Liability", desc: "Proceeding against partners and signatories where the drawer is a firm." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque bounce case in Rajkot?",
        answer:
          "Before the Judicial Magistrate court serving the area of the bank branch where you presented the cheque. Since the 2015 amendment to Section 142 of the NI Act the payee's branch fixes jurisdiction, so a Rajkot supplier files here even against a dealer in another state.",
      },
      {
        question: "Our firm is not registered. Does that matter?",
        answer:
          "It does for the civil side. Section 69 of the Partnership Act bars an unregistered firm and its partners from suing to enforce a contract, so a parallel recovery suit may be barred even though the Section 138 prosecution can proceed. Registration status should be checked when the notice is drafted, not after.",
      },
      {
        question: "Is Samadhaan better than a cheque bounce case?",
        answer:
          "They serve different purposes and are often run together. If you hold Udyam registration, Samadhaan carries compound interest at three times the RBI bank rate and applies real pressure to a large buyer; the Section 138 prosecution adds criminal exposure. Registration generally has to predate the transaction to qualify.",
      },
      {
        question: "Can I recover before the trial ends?",
        answer:
          "Often. Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a further minimum twenty per cent deposit from a convicted drawer who appeals.",
      },
      {
        question: "How long does it take?",
        answer:
          "Contested matters commonly run one to three years. Settled matters conclude far faster, and a substantial share of Rajkot cases resolve at mediation or at a National Lok Adalat — usually the quickest route to actual payment rather than a judgment.",
      },
    ],
    localNotes: [
      "Section 69 can bar an unregistered firm from the parallel civil suit — check registration when drafting the notice.",
      "For registered MSMEs, Samadhaan's statutory interest often outperforms both the prosecution and a suit.",
      "Jurisdiction follows your bank branch, keeping the case in Rajkot against out-of-state dealers.",
    ],
  },

  "rajkot__rera-complaint": {
    lead:
      "Rajkot's residential growth along Kalawad Road, the 150 Feet Ring Road and Raiya has produced the usual crop of delayed-possession and specification disputes — with one local complication, since much of the surrounding land carries Saurashtra's restricted tenure. NyaySevak connects you with Bar-Council-verified Rajkot RERA lawyers for refund, delay compensation and completion claims before GujRERA.",
    landscape: [
      "GujRERA's remedies apply to projects required to be registered, and the delay is measured against the completion date the promoter itself declared at registration rather than what a sales office said. Record that date when you book. The Authority can order refund with interest if you withdraw, compensation if you stay, or directions to complete, with appeals to the Gujarat Real Estate Appellate Tribunal.",
      "The land beneath the project deserves separate attention in Rajkot. Saurashtra's post-merger legislation — the Gharkhed framework and the Barkhali abolition laws — left many holdings on restricted tenure that cannot be transferred without prior government permission and payment of a premium. A project built on land whose tenure was never regularised carries a title risk that no RERA order can cure, so tenure should be verified before booking rather than litigated afterwards.",
      "For older buildings that predate RERA, the Gujarat Ownership Flats Act continues to govern the promoter's obligations, particularly forming the society and executing conveyance. And where a promoter has collapsed, homebuyers rank as financial creditors before the NCLT Ahmedabad Bench, subject to the hundred-allottee or ten-per-cent class threshold.",
    ],
    courtsForThisMatter: [
      "GujRERA (Gujarat Real Estate Regulatory Authority), Gandhinagar",
      "Gujarat Real Estate Appellate Tribunal (appeals from the Authority)",
      "Mamlatdar, Collector & revenue authorities (tenure and permission questions)",
      "NCLT Ahmedabad Bench (insolvent promoters; homebuyers as financial creditors)",
      "Civil & Commercial Courts, Rajkot (conveyance, title, specific performance)",
      "District Consumer Commission, Rajkot",
    ],
    caseTypes: [
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation against the declared completion date." },
      { title: "Tenure Verification", desc: "Establishing whether the project land is restricted tenure requiring permission and premium." },
      { title: "Refund & Withdrawal", desc: "Electing to exit a registered project and recover amounts paid with interest." },
      { title: "Society Formation & Conveyance", desc: "Compelling conveyance under the Gujarat Ownership Flats Act in older buildings." },
      { title: "Carpet Area & Specification", desc: "Shortfall against the area and specification agreed at booking." },
      { title: "Common Areas & Amenities", desc: "Unbuilt amenities and transfer of common areas and maintenance." },
      { title: "Promoter Insolvency", desc: "Claims before the NCLT Ahmedabad Bench where the developer has collapsed." },
      { title: "Pre-Booking Review", desc: "Registration, declared date, tenure and title checks before you commit." },
    ],
    faqs: [
      {
        question: "What can GujRERA order for a delayed Rajkot project?",
        answer:
          "For a registered project it can direct a refund of the amounts you paid with interest if you withdraw, award compensation for the delay if you take possession, or direct the promoter to complete. Appeals go to the Gujarat Real Estate Appellate Tribunal.",
      },
      {
        question: "Why does land tenure matter for a flat purchase?",
        answer:
          "Because Saurashtra's Gharkhed and Barkhali reforms left many holdings on restricted tenure that cannot be transferred without prior permission and premium. If the project land's tenure was never regularised, the title risk sits with the buyer and no RERA order cures it — so tenure should be verified before booking.",
      },
      {
        question: "How is the delay calculated?",
        answer:
          "Against the completion date the promoter declared to GujRERA at registration. Sales assurances do not change it, which is why that date should be noted when you book.",
      },
      {
        question: "Our building predates RERA and has no conveyance.",
        answer:
          "The Gujarat Ownership Flats Act may still govern the promoter's duty to form the society and execute conveyance, and there are routes to compel it. Resolving conveyance is normally the precondition to any later redevelopment.",
      },
      {
        question: "What if the builder becomes insolvent?",
        answer:
          "Homebuyers are financial creditors under the IBC and can proceed before the NCLT Ahmedabad Bench, subject to the threshold of at least one hundred allottees or ten per cent of the class. A moratorium then halts other proceedings, so the timing of any move matters.",
      },
    ],
    localNotes: [
      "Saurashtra's restricted tenure is a title risk beneath the project that RERA cannot fix — check it before booking.",
      "Delay runs from the promoter's declared completion date at registration.",
      "Pre-RERA buildings fall under the Gujarat Ownership Flats Act for society formation and conveyance.",
    ],
  },

  "rajkot__company-registration": {
    lead:
      "Rajkot is one of India's densest MSME clusters, and most of it trades as proprietorships and partnerships — structures that expose personal assets without limit and, when unregistered, cannot sue on a contract. NyaySevak connects you with Bar-Council-verified Rajkot corporate lawyers for incorporation, conversion from a firm, Udyam registration, and the supply documentation an OEM buyer will expect.",
    landscape: [
      "Two structural risks define the local picture. A partnership carries unlimited personal liability, and Section 69 of the Partnership Act bars an unregistered firm and its partners from suing to enforce a contractual right — which in a credit-based component trade means the firm may be unable to recover at all. Converting to an LLP or private limited company addresses both, improves bank credit standing, and moves internal disputes from a dissolution suit to an oppression and mismanagement petition before the NCLT.",
      "Udyam registration should be done before trading, not after a default. A registered MSME whose buyer has not paid within forty-five days can proceed before the MSME Facilitation Council, which conducts conciliation then arbitration with the buyer liable for compound interest at three times the RBI bank rate. Because registration generally has to predate the transaction, units that register only once a payment fails forfeit the remedy.",
      "Moving into OEM supply changes the documentation requirements sharply. Buyers run vendor-qualification processes and expect a corporate entity, defined quality and rejection procedures, clarity on tooling ownership, and agreed terms on price escalation and termination. Much of Rajkot's component business still runs on bare purchase orders, which leave exactly those points undefined at the moment a dispute arises.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Gujarat (incorporation and ongoing filings)",
      "Registrar of Firms, Gujarat (partnership registration)",
      "Gujarat MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "NCLT Ahmedabad Bench (oppression and mismanagement, schemes, insolvency)",
      "GST and professional tax authorities, Gujarat",
      "Factories inspectorate & labour department, Rajkot",
    ],
    caseTypes: [
      { title: "Conversion from a Firm", desc: "Converting a proprietorship or partnership, with the assets, contracts and liabilities that move with it." },
      { title: "Private Limited Incorporation", desc: "Formation for units entering OEM supply, exports or bank-funded expansion." },
      { title: "Partnership Registration", desc: "Registering the firm so the Section 69 bar cannot defeat a future recovery claim." },
      { title: "Udyam / MSME Registration", desc: "Registering before you trade so Samadhaan and its statutory interest are available." },
      { title: "Master Supply Agreements", desc: "Quality and rejection, tooling ownership, escalation, minimum volumes and termination." },
      { title: "Vendor Qualification", desc: "Structuring and documentation to satisfy an OEM buyer's onboarding requirements." },
      { title: "Partner Agreements", desc: "Profit shares, roles, admission and retirement, and exit terms agreed in advance." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, annual filings, GST and labour registrations." },
    ],
    faqs: [
      {
        question: "Should my Rajkot firm become a company?",
        answer:
          "It depends on who you supply and how you fund growth. A partnership carries unlimited personal liability and, if unregistered, cannot sue on a contract. For a unit moving into OEM supply, exports or bank-funded expansion, an LLP or private limited company is usually worth the additional compliance.",
      },
      {
        question: "Why is partnership registration so important here?",
        answer:
          "Because Section 69 of the Partnership Act bars an unregistered firm and its partners from suing to enforce a contractual right. In a trade where recovery claims are routine, that can leave a firm unable to sue at all — and it is discovered only when the firm tries.",
      },
      {
        question: "When should I register on Udyam?",
        answer:
          "Before you supply the buyer. The Samadhaan remedy and its compound interest at three times the RBI bank rate generally require registration predating the transaction, so registering after a default forfeits the strongest tool a small supplier has.",
      },
      {
        question: "We supply on purchase orders. Is that enough?",
        answer:
          "Rarely. Purchase orders seldom address quality rejection, tooling ownership, price escalation, minimum volumes or termination — precisely the issues that surface in a dispute. A short master supply agreement sitting behind the orders resolves most of it at modest cost.",
      },
      {
        question: "Which tribunal hears company disputes?",
        answer:
          "The NCLT Ahmedabad Bench, which has jurisdiction over Gujarat. Once you incorporate, internal disputes move there from the civil courts, which is one reason a clear shareholders' agreement is worth having from the start.",
      },
    ],
    localNotes: [
      "Unlimited liability and the Section 69 bar are the two structural risks of Rajkot's partnership-heavy economy.",
      "Udyam registration must generally predate the transaction to unlock Samadhaan.",
      "OEM supply demands documentation that bare purchase orders do not provide.",
    ],
  },

  "rajkot__anticipatory-bail": {
    lead:
      "The typical Rajkot pre-arrest application follows a commercial relationship that has broken down. Saurashtra's trade runs on long credit and personal trust with limited paperwork, so when a deal collapses the aggrieved side frequently files a cheating or criminal breach of trust complaint alongside civil recovery. NyaySevak connects you with Bar-Council-verified Rajkot anticipatory-bail lawyers who move quickly and press for interim protection at the first hearing.",
    landscape: [
      "The central argument in these applications is the line between a civil dispute and an offence. A prosecution for cheating requires dishonest intention at the outset, not merely a business that later failed to pay, and the pre-arrest application is where that distinction is first put to the court. The same framing later supports a quashing petition before the Gujarat High Court, so it should be built carefully from the beginning rather than improvised.",
      "Prohibition prosecutions are the other constant. Gujarat has banned liquor since 1960 and the 2017 amendments made several offences non-bailable with sentences reaching ten years, so applications in this category are routine and turn on state-specific provisions such as the health permit. Counsel practising outside Gujarat will not have handled them.",
      "Procedurally the route is the Sessions Court at Rajkot and then the Gujarat High Court at Ahmedabad, since there is no High Court bench in Saurashtra. That escalation cost should be planned for at the outset. The usual statutory constraints apply regardless of the facts: Section 18 of the SC/ST (Prevention of Atrocities) Act bars anticipatory bail where a prima facie case is disclosed, and NDPS commercial quantities carry the Section 37 threshold.",
    ],
    courtsForThisMatter: [
      "Sessions Court, Rajkot (Section 482 BNSS applications)",
      "Gujarat High Court, Ahmedabad (anticipatory bail, quashing, revision)",
      "Chief Judicial Magistrate & Magistrate courts, Rajkot",
      "Special Courts under the Gujarat Prohibition Act",
      "Special Courts (NDPS, POCSO, SC/ST Act), Rajkot",
      "Economic Offences Wing & cyber cell, Rajkot",
    ],
    caseTypes: [
      { title: "Trade Dispute FIRs", desc: "Protection where a credit failure has been filed as cheating or criminal breach of trust." },
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications at Rajkot, with interim protection at the first hearing." },
      { title: "High Court Applications", desc: "Escalated applications before the Gujarat High Court at Ahmedabad." },
      { title: "Prohibition Act Matters", desc: "Applications in liquor prosecutions under Gujarat's own regime." },
      { title: "Land & Property Offences", desc: "Protection in forgery and dispossession allegations over tenure-restricted holdings." },
      { title: "Matrimonial Cruelty FIRs", desc: "Protection in Section 85 BNS complaints, often alongside settlement." },
      { title: "Quashing Where Bail Is Barred", desc: "Gujarat High Court petitions where Section 18 of the SC/ST Act applies." },
      { title: "Conditions & Compliance", desc: "Negotiating workable terms on cooperation, travel, passport and sureties." },
    ],
    faqs: [
      {
        question: "A buyer has filed a cheating case over an unpaid consignment. What now?",
        answer:
          "Move for anticipatory bail immediately, and build the argument that the facts show a business failure rather than dishonest intention at the outset — that distinction is what separates a civil dispute from an offence. The same framing later supports a quashing petition, so it should be developed properly from the first application.",
      },
      {
        question: "Where do I apply in Rajkot?",
        answer:
          "Before the Sessions Court at Rajkot first, and the Gujarat High Court at Ahmedabad if refused. There is no High Court bench in Saurashtra, so escalation means proceedings at Ahmedabad — worth factoring into cost and timing at the outset.",
      },
      {
        question: "How quickly should I act?",
        answer:
          "Immediately. Risk of arrest is highest just after an FIR is registered, and courts commonly grant interim protection at the first hearing while notice issues to the prosecution. That interim order is usually what actually protects a person.",
      },
      {
        question: "Are there cases where anticipatory bail is unavailable?",
        answer:
          "Yes. Section 18 of the SC/ST (Prevention of Atrocities) Act bars it where a prima facie case is disclosed, and NDPS matters involving commercial quantities face the Section 37 threshold. In those situations a quashing petition is generally the realistic alternative.",
      },
      {
        question: "What conditions are usually imposed?",
        answer:
          "Cooperation with the investigation, not leaving the country without permission, sometimes passport surrender, not influencing witnesses, and furnishing sureties. These are negotiable at the hearing, and accepting terms you cannot meet creates a fresh problem later.",
      },
    ],
    localNotes: [
      "Most Rajkot applications arise from trade defaults recast as cheating — the civil-versus-criminal framing is the case.",
      "There is no High Court bench in Saurashtra; escalation always means Ahmedabad.",
      "Section 18 of the SC/ST Act bars the remedy, leaving quashing as the route.",
    ],
  },

  "rajkot__mutual-consent-divorce": {
    lead:
      "In Rajkot's proprietor and partnership economy, a matrimonial settlement is frequently also a business settlement — a spouse may hold a share in the family firm, and matrimonial property may include the workshop itself. NyaySevak connects you with Bar-Council-verified Rajkot divorce lawyers who file Section 13B petitions before the Family Court and draft settlements that actually disentangle the parties.",
    landscape: [
      "The Section 13B structure is fixed — a first motion recording at least a year's separation and agreement to dissolve, a second after six to eighteen months confirming consent stands — and under Amardeep Singh the Family Court may waive the six-month gap where separation has already been long, mediation has failed and the settlement is complete.",
      "Establishing means is the local difficulty. In a business household income has to be reconstructed from tax returns, firm accounts, bank statements and lifestyle evidence rather than read off a salary slip. The Rajnesh v. Neha framework requires affidavits of assets and income from both spouses, and courts draw adverse inferences where disclosure is plainly incomplete — which is why the financial groundwork often determines the outcome before terms are ever discussed.",
      "A settlement in a business family has to do more than fix a number. Where a spouse is a partner or holds a capital account, the terms should deal with retirement from the firm, transfer of the share, and release of personal guarantees given to banks or suppliers — otherwise the parties remain financially entangled long after the decree. The package should also close the Domestic Violence Act application, the Section 144 BNSS maintenance claim, and any Section 85 BNS complaint, the last through a quashing petition at Ahmedabad.",
    ],
    courtsForThisMatter: [
      "Family Court, Rajkot (Section 13B first and second motions)",
      "Magistrate courts, Rajkot (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Gujarat High Court, Ahmedabad (quashing of criminal complaints on settlement)",
      "District Mediation Centre, Rajkot",
      "Principal Judge, Family Court (waiver applications)",
      "Registrar of Firms, Gujarat (recording partner retirement on settlement)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Family Court at Rajkot." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications on the Amardeep Singh criteria where separation is long and settlement complete." },
      { title: "Establishing Business Income", desc: "Reconstructing means from returns, firm accounts and lifestyle evidence for the Rajnesh affidavits." },
      { title: "Partnership Retirement Terms", desc: "Retirement from the firm, transfer of the share and release of personal guarantees." },
      { title: "Settlement Drafting", desc: "Alimony, custody, property, stridhan and closure of every parallel proceeding." },
      { title: "Quashing on Settlement", desc: "Gujarat High Court petitions closing Section 85 BNS complaints." },
      { title: "Permanent Alimony Structuring", desc: "Lump sum or staged payment with enforceable security and timelines." },
      { title: "Mediation", desc: "Court-annexed mediation to convert a contested matter into agreed terms." },
    ],
    faqs: [
      {
        question: "How is alimony decided when the income is from a family business?",
        answer:
          "The court reconstructs it from tax returns, firm accounts, bank statements and lifestyle evidence rather than salary documents. Under Rajnesh v. Neha both spouses file affidavits of assets and income, and incomplete disclosure commonly leads to an adverse inference — so the financial groundwork often decides the outcome.",
      },
      {
        question: "Does my spouse have a claim on our firm?",
        answer:
          "Not automatically to the firm itself, but a shareholding, capital account or beneficial interest can form part of the financial settlement, and business assets are relevant to alimony. Where a spouse is actually a partner, retirement and transfer of the share should be dealt with expressly.",
      },
      {
        question: "What about personal guarantees I gave for the business?",
        answer:
          "They should be addressed in the settlement. A spouse who has guaranteed firm borrowings remains exposed to the lender regardless of the divorce, so release or substitution of the guarantee needs to be negotiated with the bank as part of the package rather than assumed to follow.",
      },
      {
        question: "How long does the process take?",
        answer:
          "Ordinarily six to twelve months because of the two-motion structure and the statutory gap. Where separation has been long and the settlement is complete, the Family Court may waive the six-month gap and the matter can conclude in two to three months.",
      },
      {
        question: "Can the settlement close the criminal case too?",
        answer:
          "A Section 85 BNS complaint is not compoundable as of right, so it is closed by a quashing petition before the Gujarat High Court based on the settlement. That should be sequenced with the divorce and any payment schedule so neither party is exposed after performing.",
      },
    ],
    localNotes: [
      "Establishing income in a business household is an evidence exercise, not a document-collection exercise.",
      "Settlements must address partnership retirement, share transfer and release of personal guarantees.",
      "Quashing a cruelty complaint requires a separate petition at Ahmedabad.",
    ],
  },

  "rajkot__nclt-ibc": {
    lead:
      "For most Rajkot businesses the IBC is out of reach — the one-crore default threshold excludes the great majority of component and dealer debts — so the practical question is which alternative to run, and when insolvency is genuinely worth invoking. NyaySevak connects you with Bar-Council-verified Rajkot NCLT and insolvency lawyers who will tell you honestly which route fits your claim.",
    landscape: [
      "Start with the threshold. A corporate insolvency petition needs a default of at least one crore rupees. Below that, recovery runs through the MSME Samadhaan route with its compound interest at three times the RBI bank rate, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution — and for a registered Rajkot unit Samadhaan is frequently the strongest of these against a much larger buyer.",
      "Where the threshold is met, an operational creditor proceeds under Section 9 after a statutory demand notice, and the decisive question is whether the debtor raised a genuine dispute beforehand. Component supply generates quality rejections and debit notes routinely, and any of those predating the notice will defeat the petition, because the IBC is an insolvency mechanism and not a substitute for a recovery suit.",
      "Admission is severe and that severity is the leverage: a moratorium halts suits and enforcement, the board is displaced in favour of a resolution professional, and the promoter may be barred under Section 29A from bidding for the company. That is why so many admitted matters are withdrawn under Section 12A once the debtor settles. Company and insolvency matters for Rajkot go to the NCLT Ahmedabad Bench, with appeals to the NCLAT in New Delhi.",
    ],
    courtsForThisMatter: [
      "NCLT Ahmedabad Bench (Gujarat jurisdiction)",
      "NCLAT, New Delhi (appeals from the Ahmedabad Bench)",
      "Gujarat MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Commercial Court, Rajkot (below-threshold recovery)",
      "Judicial Magistrate courts, Rajkot (Section 138 NI Act prosecutions)",
      "Debt Recovery Tribunal, Ahmedabad (secured creditor recovery)",
    ],
    caseTypes: [
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Section 7 Petitions", desc: "Financial creditor applications where the default meets the statutory threshold." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute from the rejection and debit-note record." },
      { title: "MSME Samadhaan Claims", desc: "The below-threshold route with statutory compound interest for registered units." },
      { title: "Claim Filing & Verification", desc: "Filing and pursuing claims with the resolution professional." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution and related-party transactions." },
      { title: "Personal Guarantor Proceedings", desc: "Proceedings against promoters who guaranteed the corporate debt." },
    ],
    faqs: [
      {
        question: "Can I file an IBC petition for an unpaid component supply?",
        answer:
          "Only if the default is one crore rupees or more, which excludes most Rajkot trade debts. Below that the realistic routes are MSME Samadhaan if you are registered, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution.",
      },
      {
        question: "The buyer raised quality rejections. Does that block me?",
        answer:
          "If they predate your demand notice, yes — a genuine pre-existing dispute defeats an operational creditor's petition. Component supply generates this correspondence as a matter of routine, so it should be reviewed candidly before filing rather than discovered at the hearing.",
      },
      {
        question: "Which bench and which appellate forum?",
        answer:
          "The NCLT Ahmedabad Bench has jurisdiction over Gujarat, with appeals to the NCLAT in New Delhi. Timelines under the IBC are short and strictly applied, so an appeal has to be prepared quickly.",
      },
      {
        question: "Why do admitted cases settle so often?",
        answer:
          "Because admission displaces the board, imposes a moratorium and can bar the promoter under Section 29A from bidding to take the company back. Debtors who resisted payment for months frequently settle once that becomes real, and the petition is withdrawn under Section 12A.",
      },
      {
        question: "Can I pursue the promoter personally?",
        answer:
          "Where the promoter gave a personal guarantee for the corporate debt, yes. Personal guarantor insolvency proceedings are available and are commonly used alongside the corporate process to increase pressure.",
      },
    ],
    localNotes: [
      "The one-crore threshold excludes most Rajkot trade debts — Samadhaan usually does the real work.",
      "Quality rejections and debit notes are the standard pre-existing dispute defence in component supply.",
      "Company matters go to the NCLT Ahmedabad Bench; appeals go to New Delhi.",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // GANDHINAGAR × MATTERS — the state capital plus GIFT City. Two client
  // bases found nowhere else in Gujarat: public servants and IFSC entities.
  // ══════════════════════════════════════════════════════════════════════
  "gandhinagar__cheque-bounce-recovery": {
    lead:
      "Gandhinagar's cheque-bounce work divides between contractors and suppliers to state government departments and undertakings, and vendors serving the GIFT City and Infocity business base. NyaySevak connects you with Bar-Council-verified Gandhinagar cheque-bounce lawyers who issue the statutory notice inside the 30-day window, file before the correct magistrate, and know when the counterparty's status changes the recovery route.",
    landscape: [
      "The Section 138 mechanics are standard: notice within 30 days of the return memo, 15 days for the drawer to pay, complaint within one month after that, filed where the payee's bank branch is located under Section 142 as amended in 2015. Missing any deadline ends the prosecution on limitation regardless of merits.",
      "What differs here is who the debtor often is. Payment disputes with a government department or public undertaking are rarely resolved by a cheque prosecution alone — the contractual claim usually carries an arbitration clause, and a wrongful withholding or a blacklisting decision may need a writ before the Gujarat High Court. Running the Section 138 case in isolation while the real remedy sits elsewhere is a common and costly mistake.",
      "Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing to deposit at least twenty per cent. For registered MSMEs supplying government or private buyers, the Samadhaan route before the Facilitation Council carries statutory compound interest and is often the faster lever.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate courts, Gandhinagar (Section 138 NI Act complaints)",
      "Sessions Court, Gandhinagar (appeals against conviction or acquittal)",
      "Gujarat High Court, Ahmedabad (quashing, writs, Section 11 arbitration appointments)",
      "Commercial Court, Gandhinagar (contractual recovery above the specified value)",
      "Gujarat MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "District Mediation Centre & National Lok Adalat, Gandhinagar",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Issuing the Section 138 notice inside the 30-day window from the return memo." },
      { title: "Complaint Filing", desc: "Filing before the magistrate serving your bank branch, with the debt properly pleaded." },
      { title: "Government Payment Disputes", desc: "Identifying whether the real remedy is arbitration, a writ, or the prosecution." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount at the trial stage." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered suppliers." },
      { title: "Defending a S.138 Case", desc: "Rebutting the Section 139 presumption where the cheque was security or the debt is disputed." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat and compounding at any stage of the prosecution." },
      { title: "Company & Director Liability", desc: "Proceeding against signatories and directors under Section 141." },
    ],
    faqs: [
      {
        question: "A government department has not paid us. Is a cheque case the answer?",
        answer:
          "Often only part of it. The contractual claim usually carries an arbitration clause, and a wrongful withholding or blacklisting decision may need a writ before the Gujarat High Court. Running the Section 138 prosecution while the real remedy sits in another forum is a common and expensive mistake, so the routes should be mapped together.",
      },
      {
        question: "Where do I file in Gandhinagar?",
        answer:
          "Before the Judicial Magistrate court serving the area of the bank branch where you presented the cheque, since the payee's branch fixes jurisdiction under Section 142 as amended in 2015.",
      },
      {
        question: "What are the deadlines?",
        answer:
          "Thirty days from the return memo to send the demand notice, fifteen days for the drawer to pay, and one month after that to file the complaint. Missing any of them can defeat the prosecution on limitation alone.",
      },
      {
        question: "Is there a faster route for a small supplier?",
        answer:
          "If you hold Udyam registration, the Samadhaan route before the MSME Facilitation Council carries compound interest at three times the RBI bank rate and frequently brings a large buyer to settlement faster than litigation. Registration generally has to predate the transaction.",
      },
      {
        question: "Can I get money before the case concludes?",
        answer:
          "Often. Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a further minimum twenty per cent deposit from a convicted drawer who appeals.",
      },
    ],
    localNotes: [
      "With a government counterparty the prosecution is rarely the whole answer — arbitration or a writ often carries the real remedy.",
      "Jurisdiction follows the payee's bank branch.",
      "Samadhaan's statutory interest is usually the fastest lever for a registered small supplier.",
    ],
  },

  "gandhinagar__rera-complaint": {
    lead:
      "Gandhinagar hosts GujRERA itself, and its own market has grown fast along the Kudasan, Randesan and Sargasan corridor — land that moved from agricultural to urban use within a short period, with tenure and conversion questions frequently unresolved beneath the project. NyaySevak connects you with Bar-Council-verified Gandhinagar RERA lawyers for refund, delay compensation and completion claims.",
    landscape: [
      "GujRERA can order refund with interest if you withdraw, compensation if you stay and take possession, or directions to complete, for projects required to be registered — with appeals to the Gujarat Real Estate Appellate Tribunal. Delay is measured against the completion date the promoter declared at registration, so record it at booking; it is the benchmark for every later claim.",
      "The land beneath a Gandhinagar project needs more scrutiny than in an established city. The growth corridor converted from agricultural use quickly, so non-agricultural conversion status, new-tenure entries requiring prior permission and premium, and Town Planning Scheme final-plot positions frequently remain unresolved. Separately, the original sector-city plots were allotted by the government on terms carrying conditions on use, construction and transfer that survive for decades — a resale can require permission or attract a premium.",
      "Where a promoter has collapsed, homebuyers rank as financial creditors before the NCLT Ahmedabad Bench, subject to the hundred-allottee or ten-per-cent class threshold, and a moratorium then halts other proceedings including RERA execution. Because the Authority sits in this city, hearings are locally accessible in a way they are not for buyers elsewhere in Gujarat.",
    ],
    courtsForThisMatter: [
      "GujRERA (Gujarat Real Estate Regulatory Authority), Gandhinagar",
      "Gujarat Real Estate Appellate Tribunal (appeals from the Authority)",
      "Collector & revenue authorities (tenure, NA conversion, allotment conditions)",
      "Town Planning Officer & appellate authorities (final plot and betterment issues)",
      "NCLT Ahmedabad Bench (insolvent promoters; homebuyers as financial creditors)",
      "Civil & Commercial Courts, Gandhinagar",
    ],
    caseTypes: [
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation against the declared completion date." },
      { title: "Tenure & NA Conversion Checks", desc: "Verifying conversion status and new-tenure entries beneath a growth-corridor project." },
      { title: "Sector Plot Allotment Conditions", desc: "Use, construction and transfer conditions attached to original government allotments." },
      { title: "Refund & Withdrawal", desc: "Electing to exit a registered project and recover amounts paid with interest." },
      { title: "Carpet Area & Specification", desc: "Shortfall against the area and specification agreed at booking." },
      { title: "Common Areas & Amenities", desc: "Unbuilt amenities and transfer of common areas and maintenance." },
      { title: "Promoter Insolvency", desc: "Claims before the NCLT Ahmedabad Bench where the developer has collapsed." },
      { title: "Pre-Booking Review", desc: "Registration, declared date, tenure, conversion and TP final-plot checks." },
    ],
    faqs: [
      {
        question: "What should I check before booking in the Kudasan corridor?",
        answer:
          "Non-agricultural conversion status, the tenure entry in the revenue records, whether prior permission and premium apply, the Town Planning Scheme final-plot position, the sanctioned plan, and the project's RERA registration with its declared completion date. This corridor converted from agricultural use quickly and several of these are often unresolved.",
      },
      {
        question: "Can I freely resell a Gandhinagar sector plot?",
        answer:
          "Not always. Many original government allotments carry conditions on use, construction timelines and transfer that survive for decades, and a sale may require prior permission or attract a premium. The original allotment terms should be established before a transaction is agreed.",
      },
      {
        question: "How is delay compensation calculated?",
        answer:
          "From the completion date the promoter declared to GujRERA at registration. Sales-team assurances do not alter it, which is why that date should be recorded when you book.",
      },
      {
        question: "Does it help that GujRERA is based here?",
        answer:
          "Practically, yes — hearings are locally accessible for Gandhinagar buyers in a way they are not for complainants travelling from Surat or Rajkot. It does not change the substantive law, but it lowers the cost and friction of pursuing a complaint.",
      },
      {
        question: "What if the developer becomes insolvent?",
        answer:
          "Homebuyers are financial creditors under the IBC and can proceed before the NCLT Ahmedabad Bench, subject to the hundred-allottee or ten-per-cent class threshold. A moratorium then halts other proceedings, including RERA execution, so timing matters.",
      },
    ],
    localNotes: [
      "GujRERA sits in Gandhinagar, so hearings are locally accessible for buyers here.",
      "The growth corridor converted from agricultural use fast — conversion and tenure are often unresolved.",
      "Original sector-city allotments carry transfer conditions that survive decades.",
    ],
  },

  "gandhinagar__company-registration": {
    lead:
      "Gandhinagar is the only place in India where you can establish a unit inside an International Financial Services Centre, regulated by the IFSCA rather than the ordinary domestic financial regulators. Setting up at GIFT City is a regulatory authorisation exercise, not simply an incorporation. NyaySevak connects you with Bar-Council-verified Gandhinagar corporate lawyers for IFSC unit setup, SEZ compliance, and ordinary company and LLP formation.",
    landscape: [
      "The IFSC framework is genuinely distinct. The International Financial Services Centres Authority is a unified regulator covering banking, capital markets, insurance and fund management within GIFT City, replacing the separate domestic regulators for units established there. An IFSC unit is treated as non-resident for many exchange-control purposes, transacts in foreign currency, and accesses a specific tax regime — so the questions at setup are authorisation questions, not incorporation questions.",
      "Layered on top is the special economic zone regime. GIFT City's IFSC operates within an SEZ, so unit approval, the letter of approval, permitted-operations limits and net-foreign-exchange obligations apply alongside IFSCA registration. Sequencing matters: SEZ approval, IFSCA authorisation for the relevant activity, incorporation, and the unit lease depend on one another, and treating the exercise as an ordinary company formation is the most common cause of delay.",
      "Away from GIFT City, incorporation in Gandhinagar is conventional — Registrar of Companies for Gujarat, NCLT Ahmedabad Bench for company disputes — but the counterparty is often the state government. Businesses selling to departments and undertakings need to plan for tender conditions, concession agreements, industrial-policy incentive claims, and the risk of blacklisting, which carries serious civil consequences and is challenged by writ.",
    ],
    courtsForThisMatter: [
      "International Financial Services Centres Authority (IFSCA), GIFT City",
      "SEZ Development Commissioner, GIFT SEZ (unit approvals and compliance)",
      "Registrar of Companies, Gujarat (incorporation and ongoing filings)",
      "NCLT Ahmedabad Bench (oppression and mismanagement, schemes, insolvency)",
      "Gujarat High Court, Ahmedabad (tender and blacklisting challenges, writs)",
      "GST and professional tax authorities, Gujarat",
    ],
    caseTypes: [
      { title: "IFSC Unit Setup", desc: "IFSCA registration and authorisation for banking, fund, insurance and capital-market units." },
      { title: "SEZ Compliance", desc: "Letter of approval, permitted operations, net-foreign-exchange obligations and reporting." },
      { title: "Fund Structuring at GIFT", desc: "Establishing funds and fund-management entities under the IFSCA framework." },
      { title: "Setup Sequencing", desc: "Ordering SEZ approval, IFSCA authorisation, incorporation and lease so they do not block each other." },
      { title: "Private Limited & LLP Formation", desc: "Conventional incorporation for businesses outside the IFSC." },
      { title: "Government Contracting", desc: "Tender conditions, concession agreements and industrial-policy incentive claims." },
      { title: "Blacklisting Challenges", desc: "Writ petitions where blacklisting was imposed without show-cause notice and hearing." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, annual filings and GST." },
    ],
    faqs: [
      {
        question: "Is setting up at GIFT City the same as incorporating a company?",
        answer:
          "No. It combines SEZ unit approval, IFSCA registration or authorisation for the relevant activity, incorporation, and a lease within the zone. These depend on one another, and sequencing them correctly is what determines the timeline — treating it as a simple incorporation is the most common cause of delay.",
      },
      {
        question: "Who regulates an IFSC unit?",
        answer:
          "The IFSCA, a unified authority covering banking, capital markets, insurance and fund management inside GIFT City. For units established there it replaces the separate domestic regulators, and the entity is treated as non-resident for many exchange-control purposes.",
      },
      {
        question: "Which Registrar and tribunal apply outside the IFSC?",
        answer:
          "The Registrar of Companies for Gujarat handles incorporation and filings, and company and insolvency disputes go to the NCLT Ahmedabad Bench.",
      },
      {
        question: "Can we challenge being blacklisted by a department?",
        answer:
          "Yes. Blacklisting carries serious civil consequences, and courts require a proper show-cause notice and an opportunity to be heard before it is imposed. Orders passed without that process are regularly set aside on writ before the Gujarat High Court.",
      },
      {
        question: "How do we claim a state industrial incentive?",
        answer:
          "Under the applicable industrial policy, which sets eligibility, timelines and documentation. Claims are commonly disputed on eligibility or on delay in applying, and a wrongful rejection is challenged by writ — so the application record should be kept complete from the outset.",
      },
    ],
    localNotes: [
      "GIFT City setup is an authorisation exercise across SEZ and IFSCA, not an ordinary incorporation.",
      "Sequencing the approvals correctly is what determines the timeline.",
      "Outside the IFSC, the state is often the counterparty — tenders, incentives and blacklisting dominate.",
    ],
  },

  "gandhinagar__anticipatory-bail": {
    lead:
      "Gandhinagar produces a category of pre-arrest application that exists nowhere else in Gujarat at the same density: Prevention of Corruption Act prosecutions against public servants, run by the Anti-Corruption Bureau. NyaySevak connects you with Bar-Council-verified Gandhinagar anticipatory-bail lawyers who handle trap cases and disproportionate-assets matters alongside ordinary criminal work.",
    landscape: [
      "Corruption prosecutions follow their own rules, and the defences begin before the courtroom. A prosecution under the Prevention of Corruption Act requires prior sanction from the competent authority, and since the 2018 amendments a prior approval is also needed before an investigation into a public servant's official decisions can begin. Absent or defective sanction is frequently the strongest point available, and it should be examined at the outset rather than raised late.",
      "Trap cases turn on a specific evidentiary structure. The Anti-Corruption Bureau's procedure — the complaint, the pre-trap panchnama, the phenolphthalein test, the recovery — is highly formalised, and the defence generally focuses on whether demand as well as acceptance is proved, since the Supreme Court has held that recovery alone does not establish the offence. Disproportionate-assets matters are largely documentary, turning on lawful sources across a defined check period.",
      "Departmental proceedings usually run in parallel and can end a career independently of the criminal trial, because the standard of proof differs. The two tracks have to be handled together, since statements made in one affect the other. Procedurally, applications go to the Sessions Court at Gandhinagar and then the Gujarat High Court at Ahmedabad — half an hour away, which is one of the few practical advantages litigants here have over the rest of the state.",
    ],
    courtsForThisMatter: [
      "Special Judge (Prevention of Corruption Act), Gandhinagar",
      "Sessions Court, Gandhinagar (Section 482 BNSS applications)",
      "Gujarat High Court, Ahmedabad (anticipatory bail, quashing, revision)",
      "Anti-Corruption Bureau, Gujarat (investigation and trap stage)",
      "Departmental disciplinary authorities (parallel proceedings)",
      "Special Courts under the Gujarat Prohibition Act",
    ],
    caseTypes: [
      { title: "Trap Case Defence", desc: "Pre-arrest protection and defence where demand as well as acceptance must be proved." },
      { title: "Sanction & Prior Approval", desc: "Challenging prosecution without valid sanction or the required investigative approval." },
      { title: "Disproportionate Assets", desc: "Documentary defence establishing lawful sources across the check period." },
      { title: "Departmental Proceedings", desc: "Charge-sheet replies and inquiry representation coordinated with the criminal trial." },
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications with interim protection at the first hearing." },
      { title: "High Court Applications", desc: "Escalated applications before the Gujarat High Court at Ahmedabad." },
      { title: "Economic & Corporate Offences", desc: "Applications in cheating and breach-of-trust investigations involving officers." },
      { title: "Conditions & Compliance", desc: "Negotiating terms on cooperation, travel, passport and sureties." },
    ],
    faqs: [
      {
        question: "Can I be prosecuted for corruption without sanction?",
        answer:
          "No. A prosecution under the Prevention of Corruption Act requires prior sanction from the competent authority, and since the 2018 amendments a prior approval is also required before an investigation into a public servant's official decisions can begin. Absent or defective sanction is one of the most effective defences and should be examined first.",
      },
      {
        question: "Is recovery of the money enough to convict in a trap case?",
        answer:
          "No. The prosecution must prove both demand and acceptance; recovery alone does not establish the offence. Much of the defence therefore focuses on the evidence of demand and on the procedural integrity of the pre-trap and recovery panchnamas.",
      },
      {
        question: "What happens to my job while the case runs?",
        answer:
          "Departmental proceedings typically run alongside the criminal trial and can result in suspension or dismissal independently of its outcome, because the standard of proof differs. The two tracks must be handled together, since statements made in one can be used in the other.",
      },
      {
        question: "How are disproportionate-assets cases defended?",
        answer:
          "Largely on documents — establishing lawful sources of income, inherited property and family contributions across the defined check period. Building that record early, before the charge sheet is filed, materially improves the position.",
      },
      {
        question: "Where do I apply for anticipatory bail?",
        answer:
          "Before the Sessions Court at Gandhinagar first, and the Gujarat High Court at Ahmedabad if refused. Proximity to Ahmedabad makes High Court access considerably easier here than from Surat or Rajkot.",
      },
    ],
    localNotes: [
      "Sanction and prior approval are usually the strongest defence in a Prevention of Corruption Act case.",
      "Recovery without proof of demand does not establish the offence in a trap case.",
      "Departmental proceedings can end a career independently of the criminal outcome.",
    ],
  },

  "gandhinagar__mutual-consent-divorce": {
    lead:
      "A large share of Gandhinagar's matrimonial matters involve at least one government-employed spouse, which changes the practical mechanics: income is documented, and maintenance arrears can be recovered directly by attachment of salary. NyaySevak connects you with Bar-Council-verified Gandhinagar divorce lawyers who file Section 13B petitions and draft settlements that deal properly with service benefits.",
    landscape: [
      "The Section 13B structure is fixed — a first motion recording at least a year's separation and agreement to dissolve, a second after six to eighteen months confirming consent stands — and under Amardeep Singh the Family Court may waive the six-month gap where separation has already been long, mediation has failed and the settlement is complete.",
      "Where a spouse is in government service, income is established from the pay slip and service record rather than estimated, which makes the Rajnesh v. Neha affidavit framework straightforward to apply. It also opens a genuinely effective enforcement route: arrears can be recovered by attachment of salary through the employer, which is considerably more reliable than pursuing an unwilling payer through execution proceedings.",
      "Service benefits are where these settlements most often go wrong. Pension, gratuity, provident fund, nomination and family-pension entitlements are affected by a divorce in ways that are easy to overlook, and a settlement silent on them regularly produces fresh litigation at retirement. Service rules may also require intimation of certain proceedings or of a second marriage, so the matrimonial strategy and the service position need to be coordinated.",
    ],
    courtsForThisMatter: [
      "Family Court, Gandhinagar (Section 13B first and second motions)",
      "Magistrate courts, Gandhinagar (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Gujarat High Court, Ahmedabad (quashing of criminal complaints on settlement)",
      "District Mediation Centre, Gandhinagar",
      "Principal Judge, Family Court (waiver applications)",
      "Departmental authorities (salary attachment and service-rule intimation)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Family Court at Gandhinagar." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications on the Amardeep Singh criteria where separation is long and settlement complete." },
      { title: "Salary Attachment", desc: "Recovering maintenance arrears directly through the employer." },
      { title: "Pension & Service Benefits", desc: "Treating gratuity, provident fund, nomination and family pension expressly in the settlement." },
      { title: "Settlement Drafting", desc: "Alimony, custody, property, stridhan and closure of every parallel proceeding." },
      { title: "Quashing on Settlement", desc: "Gujarat High Court petitions closing Section 85 BNS complaints." },
      { title: "Service Rule Coordination", desc: "Managing intimation requirements and departmental exposure alongside the matrimonial case." },
      { title: "Mediation", desc: "Court-annexed mediation to convert a contested matter into agreed terms." },
    ],
    faqs: [
      {
        question: "My spouse is a government employee. Is maintenance easier to enforce?",
        answer:
          "Generally yes. Income is documented from the pay slip and service record so the amount is hard to dispute, and arrears can be recovered by attachment of salary through the employer — substantially more reliable than execution against an unwilling payer.",
      },
      {
        question: "Does pension form part of the settlement?",
        answer:
          "It can be relevant, and family-pension and nomination entitlements are affected by a divorce in ways easily overlooked. These should be addressed expressly, because a settlement silent on service benefits frequently produces fresh litigation years later at retirement.",
      },
      {
        question: "Can a matrimonial case affect a government job?",
        answer:
          "It can. A criminal complaint may trigger departmental action independently of the criminal outcome, and some service rules require intimation of certain proceedings or of a second marriage. The matrimonial strategy should be coordinated with the service position.",
      },
      {
        question: "How long does the process take?",
        answer:
          "Ordinarily six to twelve months because of the two-motion structure and the statutory gap. Where separation has already been long and the settlement is complete, the court may waive the six-month gap and the matter can conclude in two to three months.",
      },
      {
        question: "Does the settlement close the other proceedings?",
        answer:
          "It should. A complete package closes the Domestic Violence Act application and the Section 144 BNSS maintenance claim before the Magistrate, and any Section 85 BNS complaint through a quashing petition at Ahmedabad.",
      },
    ],
    localNotes: [
      "Government employment makes income documented and arrears recoverable by salary attachment.",
      "Pension, gratuity and family-pension entitlements must be dealt with expressly.",
      "Service rules can create departmental exposure independent of the criminal outcome.",
    ],
  },

  "gandhinagar__nclt-ibc": {
    lead:
      "Gandhinagar's insolvency work spans two very different worlds: ordinary Gujarat companies whose matters go to the NCLT Ahmedabad Bench, and entities inside GIFT City whose regulatory position under the IFSCA sits alongside the insolvency framework. NyaySevak connects you with Bar-Council-verified Gandhinagar NCLT and insolvency lawyers for Section 7 and Section 9 petitions, defending admission, and shareholder disputes.",
    landscape: [
      "For a conventional Gujarat company the framework is standard. A corporate insolvency petition requires a default of at least one crore rupees; a financial creditor proceeds under Section 7 and an operational creditor under Section 9 after a statutory demand notice, provided no genuine dispute predates it. Below the threshold, recovery runs through Commercial Court claims, summary suits, Section 138 prosecutions, or the MSME Samadhaan route.",
      "Where the state or a public undertaking is the counterparty, the analysis changes. Payment disputes with government bodies frequently carry arbitration clauses and may involve withholding decisions challengeable by writ, and insolvency is rarely the right instrument against a public undertaking. Identifying that early avoids spending months in the wrong forum.",
      "Admission remains the leverage: a moratorium halts suits and enforcement, the board is displaced in favour of a resolution professional, and the promoter may be barred under Section 29A from bidding for the company — which is why a high proportion of admitted matters end in a Section 12A withdrawal once the debtor settles. Appeals from Ahmedabad go to the NCLAT in New Delhi.",
    ],
    courtsForThisMatter: [
      "NCLT Ahmedabad Bench (Gujarat jurisdiction)",
      "NCLAT, New Delhi (appeals from the Ahmedabad Bench)",
      "IFSCA, GIFT City (regulatory position of IFSC units)",
      "Gujarat High Court, Ahmedabad (writs, Section 11 arbitration appointments)",
      "Commercial Court, Gandhinagar (below-threshold and contractual recovery)",
      "Gujarat MSME Facilitation Council (Samadhaan delayed-payment claims)",
    ],
    caseTypes: [
      { title: "Section 7 Petitions", desc: "Financial creditor applications where the default meets the statutory threshold." },
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute, disputing the default, or settling before admission." },
      { title: "Government Counterparty Analysis", desc: "Identifying when arbitration or a writ, not insolvency, is the correct instrument." },
      { title: "Claim Filing & Verification", desc: "Filing and pursuing claims with the resolution professional." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution and related-party transactions." },
      { title: "Schemes & Restructuring", desc: "Mergers, amalgamations and capital reduction requiring Tribunal approval." },
    ],
    faqs: [
      {
        question: "Which NCLT bench covers Gandhinagar?",
        answer:
          "The NCLT Ahmedabad Bench, which has jurisdiction over Gujarat, with appeals to the NCLAT in New Delhi.",
      },
      {
        question: "Can we use insolvency against a public undertaking that has not paid?",
        answer:
          "Rarely the right instrument. Payment disputes with government bodies and public undertakings usually carry arbitration clauses, and a wrongful withholding may be challengeable by writ. Identifying the correct forum early avoids months spent in the wrong one.",
      },
      {
        question: "What is the minimum default?",
        answer:
          "One crore rupees. Below that the IBC is unavailable, and recovery proceeds through a Commercial Court claim, an Order XXXVII summary suit, a Section 138 prosecution, or the MSME Samadhaan route if you are registered.",
      },
      {
        question: "Does an IFSC unit follow the same insolvency rules?",
        answer:
          "The insolvency framework applies, but an IFSC unit's regulatory position under the IFSCA sits alongside it and affects how a process is managed in practice. Anything involving a GIFT City entity should be assessed with both frameworks in view rather than the IBC alone.",
      },
      {
        question: "Why do admitted petitions settle so often?",
        answer:
          "Because admission displaces the board, imposes a moratorium and can bar the promoter under Section 29A from bidding to take the company back. Debtors frequently settle once that becomes real, and the petition is withdrawn under Section 12A with committee approval.",
      },
    ],
    localNotes: [
      "Insolvency is rarely the right instrument against a public undertaking — arbitration or a writ usually is.",
      "GIFT City entities carry an IFSCA regulatory layer alongside the insolvency framework.",
      "Company matters go to the NCLT Ahmedabad Bench; appeals go to New Delhi.",
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // JODHPUR × MATTERS — High Court principal seat in the same city, but
  // NCLT work goes to Jaipur. That split is stated on every relevant page.
  // ══════════════════════════════════════════════════════════════════════
  "jodhpur__cheque-bounce-recovery": {
    lead:
      "Jodhpur's handicraft, wooden-furniture and sandstone exporters sell domestically on credit and secure it with post-dated cheques, so Section 138 work here is largely trade recovery. NyaySevak connects you with Bar-Council-verified Jodhpur cheque-bounce lawyers who issue the statutory notice inside the 30-day window, file before the correct magistrate, and take quashing or revision to the Rajasthan High Court in the same city.",
    landscape: [
      "The deadlines decide most cases: notice within 30 days of the return memo, 15 days for the drawer to pay, complaint within one month after that. Jurisdiction follows the payee's bank branch under Section 142 as amended in 2015, so a Jodhpur exporter files here against a buyer anywhere in India — which matters when dealers sit in Delhi, Mumbai or Kolkata.",
      "Jodhpur has a real procedural advantage: the Rajasthan High Court's principal seat is in this city, so quashing petitions, revisions and appeals arising from a Section 138 matter are heard locally rather than requiring travel to Jaipur. For a defendant seeking to quash a complaint on settlement, or a complainant challenging an acquittal, that shortens the escalation path considerably compared with most of the state.",
      "Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing to deposit at least twenty per cent. For registered MSMEs the Samadhaan route before the Rajasthan Facilitation Council carries compound interest at three times the RBI bank rate and often settles faster than the prosecution.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate courts, Jodhpur (Section 138 NI Act complaints)",
      "Sessions Court, Jodhpur (appeals against conviction or acquittal)",
      "Rajasthan High Court, Principal Seat at Jodhpur (quashing, revision)",
      "Commercial Court, Jodhpur (parallel civil recovery above the specified value)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "District Mediation Centre & National Lok Adalat, Jodhpur",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Issuing the Section 138 notice within 30 days of the return memo." },
      { title: "Complaint Filing", desc: "Filing before the magistrate serving your bank branch, with the debt properly pleaded." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount at the trial stage." },
      { title: "Quashing & Revision", desc: "Petitions at the High Court principal seat here, without travelling to Jaipur." },
      { title: "Defending a S.138 Case", desc: "Rebutting the Section 139 presumption — security cheques, blank cheques, notice defects." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered units." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat and compounding, usually the fastest route to money." },
      { title: "Firm & Director Liability", desc: "Proceeding against partners, signatories and directors under Section 141." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque bounce case in Jodhpur?",
        answer:
          "Before the Judicial Magistrate court serving the area of the bank branch where you presented the cheque. Since the 2015 amendment to Section 142 of the NI Act the payee's branch fixes jurisdiction, so a Jodhpur exporter files here against a buyer in any state.",
      },
      {
        question: "Does the High Court being here help?",
        answer:
          "Practically, yes. Quashing petitions, revisions and appeals arising from a Section 138 matter are heard at the principal seat in this city rather than requiring travel to the Jaipur Bench, which shortens escalation and reduces cost compared with most Rajasthan districts.",
      },
      {
        question: "What are the deadlines?",
        answer:
          "Thirty days from the return memo to send the demand notice, fifteen days for the drawer to pay, and one month after that to file the complaint. Missing any of these ends the prosecution on limitation regardless of the merits.",
      },
      {
        question: "Can I get money before the trial ends?",
        answer:
          "Often. Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a further minimum twenty per cent deposit from a convicted drawer who appeals.",
      },
      {
        question: "Is there a faster route for a small unit?",
        answer:
          "If you hold Udyam registration, the Samadhaan route before the Rajasthan MSME Facilitation Council carries compound interest at three times the RBI bank rate and frequently settles faster. Registration generally has to predate the transaction.",
      },
    ],
    localNotes: [
      "The Rajasthan High Court principal seat is in Jodhpur, so quashing and revision are heard locally.",
      "Jurisdiction follows the payee's bank branch, keeping export-trade disputes in Jodhpur.",
      "Samadhaan's statutory interest is often the faster lever for a registered unit.",
    ],
  },

  "jodhpur__rera-complaint": {
    lead:
      "Buying a flat in Jodhpur carries a risk that has nothing to do with the builder: much of the city's periphery is developed as unapproved colonies, where regularisation is discretionary and building sanction and institutional finance may be unavailable. NyaySevak connects you with Bar-Council-verified Jodhpur RERA lawyers for refund, delay compensation and completion claims, and for the approval checks that should precede any booking.",
    landscape: [
      "For a registered project, the Rajasthan Real Estate Regulatory Authority can order refund with interest if you withdraw, compensation for delay if you stay, or directions to complete, with appeals to the Rajasthan Real Estate Appellate Tribunal. Delay is measured against the completion date the promoter declared at registration, so that date should be recorded when you book.",
      "The bigger local risk sits beneath the project. Jodhpur's growth has outrun formal approvals in places, and buying in a colony without Jodhpur Development Authority approval can leave a purchaser unable to obtain building sanction or a home loan, with regularisation under a state scheme being discretionary and capable of attracting substantial charges. RERA registration and layout approval are separate things, and one does not imply the other.",
      "The revenue position matters too. Agricultural land must be converted for non-agricultural use before development, a mutation entry is a revenue record and not proof of title, and the jamabandi and khasra entries establish the land category. Where a promoter has collapsed, homebuyers rank as financial creditors before the NCLT Jaipur Bench, subject to the hundred-allottee or ten-per-cent class threshold — note the bench is Jaipur even though High Court work for Jodhpur is local.",
    ],
    courtsForThisMatter: [
      "Rajasthan Real Estate Regulatory Authority (registered project complaints)",
      "Rajasthan Real Estate Appellate Tribunal (appeals from the Authority)",
      "Jodhpur Development Authority (layout approval, regularisation, allotment)",
      "Revenue courts & Board of Revenue, Ajmer (conversion, khatedari, mutation)",
      "NCLT Jaipur Bench (insolvent promoters; homebuyers as financial creditors)",
      "Rajasthan High Court, Principal Seat at Jodhpur (writs against authorities)",
    ],
    caseTypes: [
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation against the declared completion date." },
      { title: "Approval & Colony Status Checks", desc: "Verifying development-authority approval before booking, separately from RERA registration." },
      { title: "Regularisation Assessment", desc: "Evaluating prospects and charges where a colony is unapproved." },
      { title: "Conversion & Revenue Diligence", desc: "Jamabandi, khasra and NA conversion checks beneath the project." },
      { title: "Refund & Withdrawal", desc: "Electing to exit a registered project and recover amounts paid with interest." },
      { title: "Carpet Area & Specification", desc: "Shortfall against the area and specification agreed at booking." },
      { title: "JDA Allotment Disputes", desc: "Allotment conditions, cancellation, lease terms and transfer permission." },
      { title: "Promoter Insolvency", desc: "Claims before the NCLT Jaipur Bench where the developer has collapsed." },
    ],
    faqs: [
      {
        question: "Does RERA registration mean the colony is approved?",
        answer:
          "No — they are separate things. A project can be registered with the Authority while the underlying colony lacks development-authority approval, and buying there can leave you without building sanction or a home loan. Both should be checked independently before any payment.",
      },
      {
        question: "What can Rajasthan RERA order?",
        answer:
          "For a registered project it can direct a refund of the amounts paid with interest if you withdraw, award compensation for the delay if you take possession, or direct the promoter to complete. Appeals go to the Rajasthan Real Estate Appellate Tribunal.",
      },
      {
        question: "Is a mutation entry proof that the builder owns the land?",
        answer:
          "No. Mutation records a change in the revenue entries for revenue-collection purposes and does not establish title, which must still be traced through the document chain read with the jamabandi and khasra entries.",
      },
      {
        question: "Which forum if the builder goes insolvent?",
        answer:
          "The NCLT Jaipur Bench, which covers Rajasthan — note that it is Jaipur even though High Court matters for Jodhpur are heard at the principal seat here. Homebuyers are financial creditors, subject to the hundred-allottee or ten-per-cent class threshold.",
      },
      {
        question: "How is the delay period measured?",
        answer:
          "From the completion date the promoter declared to the Authority at registration, not from sales assurances — which is why that date should be noted at booking.",
      },
    ],
    localNotes: [
      "RERA registration and development-authority approval are different checks; one does not imply the other.",
      "Buying in an unapproved colony can mean no building sanction and no institutional finance.",
      "Insolvency goes to the NCLT Jaipur Bench even though High Court work for Jodhpur is local.",
    ],
  },

  "jodhpur__company-registration": {
    lead:
      "Jodhpur's export economy — handicraft, wooden furniture, sandstone and guar — shapes what a business here actually needs at setup: an entity structure buyers will contract with, an import-export code, and terms that protect payment across borders. NyaySevak connects you with Bar-Council-verified Jodhpur corporate lawyers for incorporation, export documentation and MSME registration.",
    landscape: [
      "Structure comes first. Most Jodhpur exporters begin as proprietorships or partnerships, and both carry unlimited personal liability, with an unregistered firm additionally barred by Section 69 of the Partnership Act from suing to enforce a contract. Overseas buyers and larger domestic buyers generally prefer to contract with a company, and bank facilities for export finance are easier to arrange against a corporate balance sheet.",
      "Beyond incorporation, an exporter needs an import-export code and the documentation that supports it, GST registration with attention to export refunds, and — where relevant — registration with the applicable export promotion council. Units in the stone trade carry an additional layer: mining lease conditions, royalty assessment, environmental clearance and consent to operate, all enforced by separate authorities.",
      "Companies registered here file with the Registrar of Companies for Rajasthan, and company and insolvency matters go to the NCLT Jaipur Bench — not Jodhpur, despite the High Court's principal seat being in this city. Udyam registration should be completed before trading, since the MSME Samadhaan remedy and its compound interest at three times the RBI bank rate generally require registration predating the transaction.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Rajasthan (incorporation and ongoing filings)",
      "NCLT Jaipur Bench (oppression and mismanagement, schemes, insolvency)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Mining authorities & Collector (lease, royalty and clearance for stone units)",
      "GST authorities, Rajasthan (registration and export refunds)",
      "Rajasthan High Court, Principal Seat at Jodhpur (writs, Section 11 appointments)",
    ],
    caseTypes: [
      { title: "Private Limited Incorporation", desc: "Formation for exporters contracting with overseas and large domestic buyers." },
      { title: "LLP Formation", desc: "Lighter-compliance structure for trading and services practices." },
      { title: "Export Registrations", desc: "Import-export code, GST with export refunds, and promotion council registration." },
      { title: "Export Contract Terms", desc: "Incoterms, letters of credit, governing law and an enforceable arbitration seat." },
      { title: "Udyam / MSME Registration", desc: "Registering before you trade so Samadhaan and its statutory interest are available." },
      { title: "Mining Lease Compliance", desc: "Lease conditions, royalty assessment, clearance and returns for stone businesses." },
      { title: "Partnership Registration", desc: "Registering the firm so the Section 69 bar cannot defeat a recovery claim." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, annual filings and GST." },
    ],
    faqs: [
      {
        question: "Which NCLT bench covers Jodhpur?",
        answer:
          "The NCLT Jaipur Bench, which has jurisdiction over Rajasthan. This surprises people because the High Court's principal seat is in Jodhpur — but the two do not follow the same map, and company matters go to Jaipur.",
      },
      {
        question: "Should an exporter incorporate?",
        answer:
          "Usually. Overseas and large domestic buyers prefer to contract with a company, export finance is easier to arrange against a corporate balance sheet, and a partnership exposes personal assets without limit — with an unregistered firm additionally unable to sue on a contract.",
      },
      {
        question: "How do we protect payment from an overseas buyer?",
        answer:
          "Through commercial terms rather than litigation: a confirmed letter of credit or advance payment, appropriate incoterms, credit insurance, and an arbitration clause with a seat whose awards are enforceable against the buyer's assets. Suing a foreign buyer in an Indian court after default is slow and often ineffective.",
      },
      {
        question: "What extra applies to a stone or mining business?",
        answer:
          "Lease conditions on area and permitted extraction, royalty assessment and payment, environmental clearance and consent to operate, and periodic returns. Disputes over royalty demands or lease cancellation go to the mining authorities and, where necessary, by writ to the High Court here.",
      },
      {
        question: "When should I register on Udyam?",
        answer:
          "Before trading with the buyer. The Samadhaan remedy generally requires registration predating the transaction, so registering after a default forfeits the strongest recovery tool a small unit has.",
      },
    ],
    localNotes: [
      "High Court work is at Jodhpur but company and insolvency work goes to the NCLT Jaipur Bench.",
      "For exporters, payment security in the contract matters far more than post-default litigation.",
      "Stone and mining units carry a separate lease, royalty and environmental compliance layer.",
    ],
  },

  "jodhpur__anticipatory-bail": {
    lead:
      "Jodhpur is the principal seat of the Rajasthan High Court, which makes it the strongest place in the state to run a pre-arrest application — the Sessions Court and the High Court are in the same city, so escalation takes days rather than a journey to Jaipur. NyaySevak connects you with Bar-Council-verified Jodhpur anticipatory-bail lawyers, including counsel who appear regularly at the principal seat.",
    landscape: [
      "The structural advantage is real. An application is moved before the Sessions Court at Jodhpur, and if refused it goes to the Rajasthan High Court sitting in the same city — with a bar that includes many of the state's senior criminal counsel. For matters arising anywhere in western Rajasthan, that combination makes Jodhpur the natural place to run serious criminal defence.",
      "NDPS work is a significant part of the local docket. Bail turns almost entirely on the classification of the seized quantity, because Section 37 of the NDPS Act imposes an additional threshold for commercial quantities that makes release substantially harder. Rajasthan is also one of the states where opium cultivation is permitted under licence, which produces defences turning on licensed entitlement and licence conditions that exist almost nowhere else.",
      "The usual constraints apply regardless of forum. Section 18 of the SC/ST (Prevention of Atrocities) Act bars anticipatory bail where a prima facie case is disclosed, leaving a quashing petition — filed here at the principal seat — as the realistic route. Interim protection granted at the first hearing, while notice issues to the prosecution, is generally what actually protects a person through the most exposed period.",
    ],
    courtsForThisMatter: [
      "Sessions Court, Jodhpur (Section 482 BNSS applications)",
      "Rajasthan High Court, Principal Seat at Jodhpur (anticipatory bail, quashing, revision)",
      "Chief Judicial Magistrate & Magistrate courts, Jodhpur",
      "Special Court (NDPS), Jodhpur",
      "Special Courts (POCSO, SC/ST Act), Jodhpur",
      "Economic Offences Wing & cyber cell, Jodhpur",
    ],
    caseTypes: [
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications at Jodhpur, with interim protection at the first hearing." },
      { title: "High Court Applications", desc: "Escalated applications at the principal seat in the same city." },
      { title: "NDPS Defence", desc: "Quantity classification and the Section 37 threshold for commercial quantities." },
      { title: "Licensed Cultivation Issues", desc: "Defences turning on licensed entitlement and licence conditions specific to Rajasthan." },
      { title: "Trade & Export Fraud FIRs", desc: "Protection in cheating complaints from handicraft, stone and guar dealings." },
      { title: "Matrimonial Cruelty FIRs", desc: "Protection in Section 85 BNS complaints, often alongside settlement." },
      { title: "Quashing Where Bail Is Barred", desc: "Principal-seat petitions where Section 18 of the SC/ST Act applies." },
      { title: "Conditions & Compliance", desc: "Negotiating workable terms on cooperation, travel, passport and sureties." },
    ],
    faqs: [
      {
        question: "Why is Jodhpur a good place to run this application?",
        answer:
          "Because the Sessions Court and the Rajasthan High Court's principal seat are in the same city, so a refusal can be escalated in days rather than requiring proceedings at Jaipur. The local bar also has genuine depth in appellate criminal work, since matters from across western Rajasthan are heard here.",
      },
      {
        question: "How hard is bail in an NDPS case?",
        answer:
          "It depends almost entirely on the quantity. For a commercial quantity, Section 37 of the NDPS Act imposes an additional threshold the court must be satisfied of, which makes release substantially harder. For small or intermediate quantities the ordinary considerations apply, so classification of what was seized is usually the decisive issue.",
      },
      {
        question: "Does licensed opium cultivation affect these cases?",
        answer:
          "It can. Rajasthan permits opium cultivation under licence, so prosecutions frequently turn on whether the quantity held was within the licensed entitlement and whether licence conditions were complied with. These defences require careful documentary work on the licence records.",
      },
      {
        question: "Are there cases where anticipatory bail cannot be granted?",
        answer:
          "Yes. Section 18 of the SC/ST (Prevention of Atrocities) Act bars it where a prima facie case is disclosed. Where that applies, a quashing petition — filed here at the principal seat — is generally the realistic alternative.",
      },
      {
        question: "How quickly should I move?",
        answer:
          "Immediately. Risk of arrest is highest just after an FIR is registered, and courts commonly grant interim protection at the first hearing while notice issues to the prosecution. That interim order is usually what does the protecting.",
      },
    ],
    localNotes: [
      "Sessions Court and High Court principal seat in one city makes escalation unusually fast.",
      "NDPS bail turns on quantity classification because of the Section 37 threshold.",
      "Rajasthan's licensed opium cultivation creates defences that exist in almost no other state.",
    ],
  },

  "jodhpur__mutual-consent-divorce": {
    lead:
      "Mutual consent divorce in Jodhpur is filed before the Family Court under Section 13B, with one local advantage that matters if anything goes wrong: appeals lie to a Division Bench of the Rajasthan High Court sitting at the principal seat in the same city. NyaySevak connects you with Bar-Council-verified Jodhpur divorce lawyers who draft settlements that close every parallel proceeding.",
    landscape: [
      "The structure is a first motion recording at least a year's separation and agreement to dissolve, then a second after six to eighteen months confirming consent still stands. Following Amardeep Singh, the Family Court may waive the six-month gap where separation has already been long, mediation has failed and the settlement is complete — which can reduce the process to two or three months.",
      "Where means have to be established, western Rajasthan matters often turn on land rather than salary. Maintenance and alimony are assessed from revenue records, khatedari entries, crop and business income and family holdings, and the Rajnesh v. Neha framework requires affidavits of assets and income from both spouses. Incomplete disclosure of landholdings commonly leads the court to draw an adverse inference, so the financial groundwork is done early.",
      "The settlement should close everything at once: the Domestic Violence Act application and the Section 144 BNSS maintenance claim before the Magistrate, and any Section 85 BNS complaint — which is not compoundable as of right and requires a quashing petition. That petition is filed at the principal seat here, so the whole package can be completed without leaving the city.",
    ],
    courtsForThisMatter: [
      "Family Court, Jodhpur (Section 13B first and second motions)",
      "Magistrate courts, Jodhpur (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Rajasthan High Court, Principal Seat at Jodhpur (appeals, quashing on settlement)",
      "Principal District Judge, Jodhpur",
      "District Mediation Centre, Jodhpur",
      "Supreme Court of India (transfer petitions between states)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Family Court at Jodhpur." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications on the Amardeep Singh criteria where separation is long and settlement complete." },
      { title: "Means from Land Records", desc: "Establishing income from revenue records, khatedari entries and family holdings." },
      { title: "Settlement Drafting", desc: "Alimony, custody, property, stridhan and closure of every parallel proceeding." },
      { title: "Quashing on Settlement", desc: "Principal-seat petitions closing Section 85 BNS complaints." },
      { title: "Family Court Appeals", desc: "Division Bench appeals at the principal seat in the same city." },
      { title: "Custody & Visitation Terms", desc: "Workable arrangements recorded as consent terms rather than left to dispute." },
      { title: "Permanent Alimony Structuring", desc: "Lump sum or staged payment with enforceable security and timelines." },
    ],
    faqs: [
      {
        question: "How long does it take in Jodhpur?",
        answer:
          "Ordinarily six to twelve months because of the two-motion structure and the statutory gap. Where separation has already been long and the settlement is complete, the Family Court may waive the six-month gap and the matter can conclude in two to three months.",
      },
      {
        question: "Can I appeal a Family Court order locally?",
        answer:
          "Yes. Appeals go to a Division Bench of the Rajasthan High Court, which for Jodhpur sits at the principal seat in the same city — considerably quicker and cheaper than for litigants in surrounding districts who must travel.",
      },
      {
        question: "How is maintenance assessed when income comes from land?",
        answer:
          "From revenue records, khatedari entries, crop and business income and family holdings rather than salary documents. Under Rajnesh v. Neha both spouses file affidavits of assets and income, and incomplete disclosure of landholdings commonly leads to an adverse inference.",
      },
      {
        question: "Can the settlement close the criminal case?",
        answer:
          "A Section 85 BNS complaint is not compoundable as of right, so it is closed by a quashing petition — filed here at the principal seat. Sequencing it with the divorce and any payment schedule ensures neither party is exposed after performing their side.",
      },
      {
        question: "Do both parties have to attend?",
        answer:
          "Both are ordinarily required to appear so the court can satisfy itself that consent is free and genuine. Where a party is abroad or genuinely unable to attend, courts have permitted video conferencing or a duly authorised representative in appropriate cases, but it must be sought rather than assumed.",
      },
    ],
    localNotes: [
      "Family Court appeals and quashing are both heard at the principal seat in Jodhpur itself.",
      "Maintenance is frequently assessed from land records rather than salary documents.",
      "The whole settlement package can be completed without leaving the city.",
    ],
  },

  "jodhpur__nclt-ibc": {
    lead:
      "The point that catches out most Jodhpur businesses is that company and insolvency matters do not follow the High Court. Despite the Rajasthan High Court's principal seat being in this city, the NCLT bench for Rajasthan sits at Jaipur. NyaySevak connects you with Bar-Council-verified Jodhpur NCLT and insolvency lawyers for Section 7 and Section 9 petitions, defending admission, and shareholder disputes.",
    landscape: [
      "Jurisdiction for insolvency follows the registered office, and for a Rajasthan company that means the NCLT Jaipur Bench. Creditors who assume proceedings follow the High Court seat lose time, and the split should be confirmed before anything is drafted. Appeals go from Jaipur to the NCLAT in New Delhi.",
      "The one-crore default threshold excludes most Jodhpur trade debts, so the practical toolkit is the MSME Samadhaan route with its compound interest at three times the RBI bank rate, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution. Where the threshold is met, an operational creditor's petition still fails if the debtor raised a genuine dispute before the demand notice — and in the handicraft and stone trades, quality and consignment disputes are common enough that this correspondence usually exists.",
      "Admission is what creates leverage: a moratorium halts suits and enforcement, the board is displaced in favour of a resolution professional, and the promoter may be barred under Section 29A from bidding for the company. A high proportion of admitted matters are consequently withdrawn under Section 12A once the debtor settles. Where the promoter gave a personal guarantee, personal guarantor proceedings can run alongside.",
    ],
    courtsForThisMatter: [
      "NCLT Jaipur Bench (Rajasthan jurisdiction)",
      "NCLAT, New Delhi (appeals from the Jaipur Bench)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Commercial Court, Jodhpur (below-threshold and contractual recovery)",
      "Judicial Magistrate courts, Jodhpur (Section 138 NI Act prosecutions)",
      "Rajasthan High Court, Principal Seat at Jodhpur (Section 11 arbitration appointments)",
    ],
    caseTypes: [
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Section 7 Petitions", desc: "Financial creditor applications where the default meets the statutory threshold." },
      { title: "Export-Trade Claim Defence", desc: "Establishing a pre-existing dispute from the consignment, inspection and shipping record." },
      { title: "Forum Correction", desc: "Filing at Jaipur rather than Jodhpur, where the High Court seat misleads creditors into the wrong bench." },
      { title: "Samadhaan Claims", desc: "The below-threshold route with statutory compound interest for registered handicraft and stone units." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with the required creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution and related-party transactions." },
      { title: "Personal Guarantor Proceedings", desc: "Proceedings against promoters who guaranteed the corporate debt." },
    ],
    faqs: [
      {
        question: "Doesn't the High Court being in Jodhpur mean the NCLT is here too?",
        answer:
          "No, and this is the most common misunderstanding locally. The NCLT bench for Rajasthan sits at Jaipur, and insolvency jurisdiction follows the registered office. High Court work for the western districts is heard at the principal seat in Jodhpur, but company matters are not — the two do not follow the same map.",
      },
      {
        question: "What is the minimum default for an IBC petition?",
        answer:
          "One crore rupees. Below that the IBC is unavailable and recovery proceeds through MSME Samadhaan if you are registered, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution.",
      },
      {
        question: "The buyer complained about quality. Can I still file?",
        answer:
          "Probably not as an operational creditor, if the complaint predates your demand notice — a genuine pre-existing dispute defeats a Section 9 petition. In the handicraft and stone trades this correspondence commonly exists, so it should be reviewed candidly before filing.",
      },
      {
        question: "Why do admitted petitions settle so often?",
        answer:
          "Because admission displaces the board, imposes a moratorium and can bar the promoter under Section 29A from bidding to take the company back. Debtors frequently settle once that is real, and the matter is withdrawn under Section 12A with committee approval.",
      },
      {
        question: "Can we pursue the promoter personally?",
        answer:
          "Where the promoter gave a personal guarantee for the corporate debt, yes. Personal guarantor insolvency proceedings are available and are commonly run alongside the corporate process to increase pressure.",
      },
    ],
    localNotes: [
      "Insolvency goes to the NCLT Jaipur Bench despite the High Court principal seat being in Jodhpur.",
      "Most local trade debts fall below one crore, so Samadhaan and Section 138 do the real work.",
      "Quality and consignment disputes in the export trades routinely create the pre-existing dispute defence.",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // UDAIPUR × MATTERS — Fifth Schedule Scheduled Areas change two things
  // fundamentally: land transfer (Section 42) and anticipatory bail
  // (Section 18 of the SC/ST Act). Both are stated plainly.
  // ══════════════════════════════════════════════════════════════════════
  "udaipur__cheque-bounce-recovery": {
    lead:
      "Udaipur's cheque-bounce work comes mainly from two trades: marble and mineral supply, and the hospitality economy's dealings with vendors, event contractors and tour operators. NyaySevak connects you with Bar-Council-verified Udaipur cheque-bounce lawyers who issue the statutory notice inside the 30-day window, file before the correct magistrate, and know when the seasonal nature of the business changes settlement strategy.",
    landscape: [
      "The Section 138 mechanics are standard and unforgiving: notice within 30 days of the return memo, 15 days for the drawer to pay, complaint within one month after that, filed where the payee's bank branch is located under Section 142 as amended in 2015. Missing any deadline ends the prosecution on limitation regardless of merits.",
      "What is distinctive here is timing. Hospitality revenue is heavily seasonal, so a hotel or event operator's ability to pay varies enormously across the year, and a settlement structured around the season frequently recovers more than a judgment pursued through execution in a lean month. Experienced local counsel factor that into the payment schedule rather than treating every default identically.",
      "Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing to deposit at least twenty per cent. Registered MSMEs supplying the marble and mineral trade should also weigh the Samadhaan route before the Rajasthan Facilitation Council, whose statutory compound interest is often the stronger lever. Quashing and revision go to the Rajasthan High Court's principal seat at Jodhpur.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate courts, Udaipur (Section 138 NI Act complaints)",
      "Sessions Court, Udaipur (appeals against conviction or acquittal)",
      "Rajasthan High Court, Principal Seat at Jodhpur (quashing, revision)",
      "Commercial Court, Udaipur (parallel civil recovery above the specified value)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "District Mediation Centre & National Lok Adalat, Udaipur",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Issuing the Section 138 notice within 30 days of the return memo." },
      { title: "Seasonal Settlement Structuring", desc: "Payment schedules built around hospitality's season, which often recovers more than a decree enforced in a lean month." },
      { title: "Hotel & Event Vendor Claims", desc: "Recovery against resorts, banquet operators and event contractors on bounced settlement cheques." },
      { title: "Marble & Mineral Trade Recovery", desc: "Claims arising from consignment sales into the Mewar processing belt." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount at the trial stage." },
      { title: "Defending a S.138 Case", desc: "Rebutting the Section 139 presumption — security cheques, blank cheques and notice defects." },
      { title: "Quashing at the Principal Seat", desc: "Petitions at Jodhpur to close a prosecution once the parties have settled." },
      { title: "Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered suppliers." },
    ],
    faqs: [
      {
        question: "Where do I file in Udaipur?",
        answer:
          "Before the Judicial Magistrate court serving the area of the bank branch where you presented the cheque, since the payee's branch fixes jurisdiction under Section 142 as amended in 2015.",
      },
      {
        question: "The debtor is a hotel with seasonal income. Does that matter?",
        answer:
          "In practice a great deal. Hospitality cash flow varies sharply across the year, and a settlement scheduled around the season frequently recovers more than a judgment enforced in a lean month. That is a negotiation point rather than a legal one, but it often determines whether you are actually paid.",
      },
      {
        question: "What are the deadlines?",
        answer:
          "Thirty days from the return memo to send the demand notice, fifteen days for the drawer to pay, and one month after that to file the complaint. Missing any of them defeats the prosecution on limitation alone.",
      },
      {
        question: "Where do quashing and revision go?",
        answer:
          "To the Rajasthan High Court's principal seat at Jodhpur, since Udaipur falls under that seat rather than the Jaipur Bench. This should be factored into the cost and timeline of escalation.",
      },
      {
        question: "Can I recover before the trial ends?",
        answer:
          "Often. Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a further minimum twenty per cent deposit from a convicted drawer who appeals.",
      },
    ],
    localNotes: [
      "Hospitality's seasonal cash flow makes settlement timing a genuine recovery strategy here.",
      "Udaipur falls under the Jodhpur principal seat, not the Jaipur Bench.",
      "Samadhaan is often the stronger lever for registered marble and mineral suppliers.",
    ],
  },

  "udaipur__rera-complaint": {
    lead:
      "Buying property around Udaipur carries a risk found in few other Indian markets: much of the division is a Fifth Schedule Scheduled Area, where the transfer of tribal land is restricted and a completed sale can be undone by restoration proceedings years later. NyaySevak connects you with Bar-Council-verified Udaipur RERA lawyers for project claims, and for the Scheduled Area checks that must precede any booking.",
    landscape: [
      "Start with the land, not the project. Section 42 of the Rajasthan Tenancy Act restricts the transfer of land held by a member of a Scheduled Tribe to a non-tribal in Scheduled Areas, and a transfer in breach can be set aside with the land restored to the original holder or their heirs. Neither the tribal status of the recorded holder nor the Scheduled Area status of the land is apparent from inspecting the site — both must be verified from the records, and no RERA order cures a defect of this kind.",
      "For a registered project, the Rajasthan Real Estate Regulatory Authority can order refund with interest if you withdraw, compensation for delay if you stay, or directions to complete, with appeals to the Rajasthan Real Estate Appellate Tribunal. Delay runs from the completion date the promoter declared at registration, so record it when you book.",
      "Two further checks apply. Agricultural land must be converted for non-agricultural use before development, and buying in a colony without development-authority approval can leave a purchaser without building sanction or institutional finance, with regularisation discretionary. Where a promoter has collapsed, homebuyers rank as financial creditors before the NCLT Jaipur Bench, subject to the hundred-allottee or ten-per-cent class threshold.",
    ],
    courtsForThisMatter: [
      "Revenue courts — Tehsildar, SDO, Collector (Section 42 permission, restoration, conversion)",
      "Board of Revenue, Ajmer (final revenue appellate authority)",
      "Rajasthan Real Estate Regulatory Authority (registered project complaints)",
      "Rajasthan Real Estate Appellate Tribunal (appeals from the Authority)",
      "NCLT Jaipur Bench (insolvent promoters; homebuyers as financial creditors)",
      "Rajasthan High Court, Principal Seat at Jodhpur (writs against authorities)",
    ],
    caseTypes: [
      { title: "Scheduled Area Verification", desc: "Establishing tribal status and Scheduled Area location before any transfer is agreed." },
      { title: "Restoration Proceedings", desc: "Defending or pursuing restoration where land was transferred in breach of Section 42." },
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation against the declared completion date." },
      { title: "Conversion & Approval Checks", desc: "NA conversion and development-authority approval status before booking." },
      { title: "Refund & Withdrawal", desc: "Electing to exit a registered project and recover amounts paid with interest." },
      { title: "Carpet Area & Specification", desc: "Shortfall against the area and specification agreed at booking." },
      { title: "Heritage & Hospitality Property", desc: "Conservation conditions and permitted-use approvals separate from title." },
      { title: "Promoter Insolvency", desc: "Claims before the NCLT Jaipur Bench where the developer has collapsed." },
    ],
    faqs: [
      {
        question: "What is the biggest risk buying near Udaipur?",
        answer:
          "Acquiring restricted tribal land in a Scheduled Area. Section 42 of the Rajasthan Tenancy Act prohibits transfer to a non-tribal without prior permission, and a breach can lead to the sale being set aside and the land restored years later — leaving the buyer with only a claim against the seller.",
      },
      {
        question: "How do I check whether the restriction applies?",
        answer:
          "By verifying from the records both whether the land lies within a Scheduled Area and whether the recorded holder is a member of a Scheduled Tribe. Neither is apparent from inspecting the land, which is why the check has to be done on the documents before any payment.",
      },
      {
        question: "Does RERA registration protect me from that?",
        answer:
          "No. RERA governs the promoter's obligations on delivery, specification and refund; it does not cure a defect in the title to the land beneath the project. The two need to be checked separately, and the Section 42 position first.",
      },
      {
        question: "What can Rajasthan RERA order?",
        answer:
          "For a registered project, refund of amounts paid with interest if you withdraw, compensation for delay if you take possession, or directions to complete — with appeals to the Rajasthan Real Estate Appellate Tribunal.",
      },
      {
        question: "What if the developer becomes insolvent?",
        answer:
          "Homebuyers are financial creditors under the IBC and can proceed before the NCLT Jaipur Bench, subject to the threshold of at least one hundred allottees or ten per cent of the class. A moratorium then halts other proceedings, so timing matters.",
      },
    ],
    localNotes: [
      "Section 42 tribal-land restrictions are the decisive check in Udaipur transactions, and RERA does not cure them.",
      "A completed sale in breach can be undone by restoration proceedings long after purchase.",
      "Writs go to the Jodhpur principal seat; insolvency goes to the NCLT Jaipur Bench.",
    ],
  },

  "udaipur__company-registration": {
    lead:
      "Most businesses set up in Udaipur are in hospitality or the marble and mineral trade, and both are licence-heavy in ways that ordinary incorporation advice does not cover. NyaySevak connects you with Bar-Council-verified Udaipur corporate lawyers for company and LLP formation, hospitality licensing, and the mining and environmental compliance a processing unit carries.",
    landscape: [
      "Incorporation itself is conventional — Registrar of Companies for Rajasthan, and company and insolvency matters to the NCLT Jaipur Bench. The structure question follows the usual logic: a private limited company where outside capital, institutional lending or a hotel management arrangement is contemplated; an LLP for a smaller operator or a consultancy with no fundraising plan.",
      "For hospitality the licences are the business. A hotel, resort or venue typically needs municipal and development-authority permissions, building and fire safety clearances, food-safety registration, excise licences where liquor is served, event permissions, and pollution-control consent — with conservation conditions on top where the property is heritage. Most disputes that seriously damage a hospitality operator arise from a licence lapse or a permitted-use breach rather than from a contract, which makes compliance review the higher-value work at setup.",
      "Marble and mineral processing carries a parallel regulatory load: lease conditions, royalty assessment and demand notices, environmental clearance and consent to operate, and periodic returns. Royalty disputes and lease cancellations are contested before the mining authorities and, where necessary, by writ at the Rajasthan High Court's principal seat at Jodhpur, while environmental applications from Rajasthan go to the National Green Tribunal's Central Zone Bench at Bhopal.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Rajasthan (incorporation and ongoing filings)",
      "NCLT Jaipur Bench (oppression and mismanagement, schemes, insolvency)",
      "Municipal & development authority, Udaipur (permissions and permitted use)",
      "Excise and food-safety authorities, Rajasthan (hospitality licensing)",
      "Mining authorities & Collector (lease, royalty and clearance)",
      "National Green Tribunal, Central Zone Bench at Bhopal (environmental matters)",
    ],
    caseTypes: [
      { title: "Private Limited & LLP Formation", desc: "Structuring for hotel operations, management arrangements and processing units." },
      { title: "Hospitality Licensing", desc: "Municipal, fire, food-safety, excise and event permissions for hotels and venues." },
      { title: "Heritage Property Conditions", desc: "Conservation conditions and change of permitted use for heritage conversions." },
      { title: "Mining Lease Compliance", desc: "Lease conditions, royalty assessment, clearance and returns for marble units." },
      { title: "Environmental Compliance", desc: "Consent to operate, closure directions and NGT applications." },
      { title: "Hotel & Event Contracts", desc: "Management agreements, destination-wedding contracts and vendor arrangements." },
      { title: "Udyam / MSME Registration", desc: "Registering before you trade so Samadhaan and its statutory interest are available." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, annual filings, GST and labour registrations." },
    ],
    faqs: [
      {
        question: "What licences does a resort near Udaipur need?",
        answer:
          "Typically municipal or development-authority permission, building and fire safety clearances, food-safety registration, excise licences where liquor is served, event permissions and pollution-control consent, with conservation conditions on a heritage property. A licence lapse damages a hospitality business faster than most contract disputes.",
      },
      {
        question: "Which Registrar and tribunal apply?",
        answer:
          "The Registrar of Companies for Rajasthan handles incorporation and filings, and company and insolvency matters go to the NCLT Jaipur Bench — while High Court work for Udaipur goes to the principal seat at Jodhpur. The two do not follow the same map.",
      },
      {
        question: "What does a heritage hotel conversion need beyond title?",
        answer:
          "Conservation conditions where the building is protected, change of permitted use, municipal and development-authority sanction, and the hospitality and excise licences for the intended operations. A property with clean title can still be unusable as a hotel without them.",
      },
      {
        question: "How do we challenge a royalty demand?",
        answer:
          "First through the statutory appeal and revision mechanism before the mining authorities, and where that is exhausted or the action is without jurisdiction, by writ at the High Court principal seat at Jodhpur. Assessments should be contested within the prescribed timelines, since delay narrows the remedy.",
      },
      {
        question: "Where are environmental matters heard?",
        answer:
          "Applications under the National Green Tribunal Act from Rajasthan go to the NGT's Central Zone Bench at Bhopal. State pollution control board action, such as closure or consent refusal, is challenged before the appellate authority and by writ.",
      },
    ],
    localNotes: [
      "Hospitality risk sits in licensing and permitted use far more than in contract terms.",
      "Company matters go to the NCLT Jaipur Bench while High Court work goes to Jodhpur.",
      "Environmental applications from Rajasthan are heard at the NGT Central Zone Bench in Bhopal.",
    ],
  },

  "udaipur__anticipatory-bail": {
    lead:
      "Anticipatory bail in the Udaipur division carries a constraint most of India does not face: much of the region is a Fifth Schedule Scheduled Area, and Section 18 of the SC/ST (Prevention of Atrocities) Act bars anticipatory bail outright where a prima facie case is disclosed. NyaySevak connects you with Bar-Council-verified Udaipur lawyers who can tell you honestly whether an application is available at all, and what the alternative is.",
    landscape: [
      "The bar is the first question in a large share of Udaipur matters. Where the complaint is under the Atrocities Act and discloses a prima facie case, Section 18 excludes anticipatory bail, and the realistic route becomes a quashing petition before the Rajasthan High Court's principal seat at Jodhpur, arguing that the ingredients of the offence are not made out. Counsel who promise pre-arrest protection without addressing the bar are not being straight with you.",
      "Atrocities Act matters are also procedurally distinct in other ways: they are tried by a designated Special Court, appeals lie directly to the High Court, and the Act contains provisions on victim compensation and investigation timelines that shape how the defence is run. Familiarity with the Act specifically, rather than general criminal practice, matters here.",
      "Outside that category the ordinary route applies — the Sessions Court at Udaipur first, then the High Court at Jodhpur — and the usual considerations govern. The tourism economy adds its own applications: cases involving foreign nationals raise passport, visa and travel questions that must be addressed when bail conditions are framed rather than raised later, when varying them is considerably harder.",
    ],
    courtsForThisMatter: [
      "Special Court (SC/ST Prevention of Atrocities Act), Udaipur",
      "Sessions Court, Udaipur (Section 482 BNSS applications)",
      "Rajasthan High Court, Principal Seat at Jodhpur (quashing, appeals, revision)",
      "Chief Judicial Magistrate & Magistrate courts, Udaipur",
      "Special Courts (NDPS, POCSO), Udaipur",
      "Economic Offences Wing & cyber cell, Udaipur",
    ],
    caseTypes: [
      { title: "Assessing the Section 18 Bar", desc: "Determining honestly whether anticipatory bail is available before any application is filed." },
      { title: "Quashing Where Bail Is Barred", desc: "Principal-seat petitions arguing the ingredients of the offence are not made out." },
      { title: "Atrocities Act Defence", desc: "Special Court proceedings, with appeals lying directly to the High Court." },
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications where the bar does not apply." },
      { title: "Foreign National Matters", desc: "Passport, visa and travel conditions addressed when bail terms are framed." },
      { title: "Tourism & Hospitality Offences", desc: "Applications in excise, licensing and guest-dispute matters." },
      { title: "Trade & Mineral Fraud FIRs", desc: "Protection in cheating complaints from the marble and mineral trade." },
      { title: "Conditions & Compliance", desc: "Negotiating workable terms on cooperation, travel, passport and sureties." },
    ],
    faqs: [
      {
        question: "Can I get anticipatory bail in an Atrocities Act case?",
        answer:
          "Generally no. Section 18 of the SC/ST (Prevention of Atrocities) Act bars anticipatory bail where a prima facie case is disclosed. The realistic route is a quashing petition before the High Court arguing the ingredients of the offence are not made out — and any lawyer promising pre-arrest protection without addressing the bar is not being straight with you.",
      },
      {
        question: "Why does this come up so often in Udaipur?",
        answer:
          "Because much of the division is a Fifth Schedule Scheduled Area with a substantial tribal population, so Atrocities Act complaints form a significant share of the local criminal docket — a much higher proportion than in most Indian districts.",
      },
      {
        question: "Where is the quashing petition filed?",
        answer:
          "Before the Rajasthan High Court's principal seat at Jodhpur, since Udaipur falls under that seat rather than the Jaipur Bench. That should be factored into the timeline and cost of a defence.",
      },
      {
        question: "How are Atrocities Act cases tried?",
        answer:
          "Before a designated Special Court, with appeals lying directly to the High Court. The procedure differs from an ordinary sessions trial in several respects, including the bar on anticipatory bail and provisions on victim compensation, so counsel familiar with the Act specifically matters.",
      },
      {
        question: "A foreign guest is involved in a case. What should we expect?",
        answer:
          "Passport surrender, visa validity and permission to travel usually arise when bail conditions are framed, and the conditions imposed then govern what follows. These should be addressed at that hearing rather than raised afterwards, when varying them is considerably harder.",
      },
    ],
    localNotes: [
      "Section 18 of the SC/ST Act bars anticipatory bail outright — quashing is the alternative, not a weaker application.",
      "Scheduled Area status makes Atrocities Act procedure a routine consideration here.",
      "Udaipur escalates to the Jodhpur principal seat, not the Jaipur Bench.",
    ],
  },

  "udaipur__mutual-consent-divorce": {
    lead:
      "Udaipur's Family Court serves a region with a substantial tribal population, which raises a question most Indian cities never encounter: whether a customary marriage or divorce is legally recognised. NyaySevak connects you with Bar-Council-verified Udaipur divorce lawyers who handle Section 13B petitions and, where relevant, the evidence needed to establish a custom.",
    landscape: [
      "The Hindu Marriage Act preserves the validity of customs that are ancient, certain, reasonable and not opposed to public policy, and customary marriage and dissolution practices continue to be followed among several communities in this region. Whether a particular custom is recognised is a question of pleading and proof, not assumption — it must be established with evidence, and getting this wrong can leave a subsequent marriage or settlement on unstable ground.",
      "For the majority of matters the codified route applies. A Section 13B petition runs on a first motion recording at least a year's separation and agreement to dissolve, then a second after six to eighteen months, with the Family Court able to waive the six-month gap under Amardeep Singh where separation has been long, mediation has failed and the settlement is complete.",
      "Maintenance here is often assessed from agricultural land, family holdings and tourism-linked business income rather than salary, so the Rajnesh v. Neha affidavits require real evidentiary work and incomplete disclosure commonly draws an adverse inference. Appeals from the Family Court, and quashing of any Section 85 BNS complaint on settlement, go to the Rajasthan High Court's principal seat at Jodhpur.",
    ],
    courtsForThisMatter: [
      "Family Court, Udaipur (Section 13B first and second motions)",
      "Magistrate courts, Udaipur (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Rajasthan High Court, Principal Seat at Jodhpur (appeals, quashing on settlement)",
      "Principal District Judge, Udaipur",
      "District Mediation Centre, Udaipur",
      "Supreme Court of India (transfer petitions between states)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Family Court at Udaipur." },
      { title: "Customary Marriage & Divorce", desc: "Establishing or contesting a recognised custom with proper pleading and evidence." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications on the Amardeep Singh criteria where separation is long and settlement complete." },
      { title: "Means from Land & Business", desc: "Establishing income from land holdings and tourism-linked business for the Rajnesh affidavits." },
      { title: "Settlement Drafting", desc: "Alimony, custody, property, stridhan and closure of every parallel proceeding." },
      { title: "Quashing on Settlement", desc: "Principal-seat petitions closing Section 85 BNS complaints." },
      { title: "Custody & Guardianship", desc: "Arrangements decided on the welfare of the child, recorded as consent terms." },
      { title: "Succession & Family Property", desc: "Succession certificates and division of agricultural and inherited property." },
    ],
    faqs: [
      {
        question: "Is a customary tribal divorce legally valid?",
        answer:
          "It can be. The Hindu Marriage Act preserves customs that are ancient, certain, reasonable and not opposed to public policy, and customary dissolution practices are followed among several communities here. Whether a particular custom is recognised must be pleaded and proved with evidence — it should not be assumed either way, because a wrong assumption can destabilise a later marriage or settlement.",
      },
      {
        question: "How long does a mutual consent divorce take?",
        answer:
          "Ordinarily six to twelve months because of the two-motion structure and the statutory gap. Where separation has already been long and the settlement is complete, the Family Court may waive the six-month gap and the matter can conclude in two to three months.",
      },
      {
        question: "How is maintenance assessed here?",
        answer:
          "Frequently from revenue records, land holdings and tourism-linked business income rather than salary. Under Rajnesh v. Neha both spouses file affidavits of assets and income, and incomplete disclosure of land or business receipts commonly results in an adverse inference.",
      },
      {
        question: "Where do appeals go?",
        answer:
          "To a Division Bench of the Rajasthan High Court at the principal seat in Jodhpur, since Udaipur falls under that seat. Quashing of a Section 85 BNS complaint on settlement is filed there too.",
      },
      {
        question: "Does the settlement close the other cases?",
        answer:
          "It should. A complete package closes the Domestic Violence Act application and the Section 144 BNSS maintenance claim before the Magistrate, and any Section 85 BNS complaint through a quashing petition at Jodhpur.",
      },
    ],
    localNotes: [
      "Recognised customary marriage and divorce practices are a live evidentiary issue in this Family Court.",
      "Maintenance is commonly assessed from land and tourism-business income rather than salary.",
      "Appeals and quashing go to the Jodhpur principal seat.",
    ],
  },

  "udaipur__nclt-ibc": {
    lead:
      "Insolvency work in Udaipur comes mainly from two sectors — marble and mineral processing, and hospitality — and both have characteristics that shape how a petition is run. Company matters go to the NCLT Jaipur Bench. NyaySevak connects you with Bar-Council-verified Udaipur NCLT and insolvency lawyers for Section 7 and Section 9 petitions, defending admission, and shareholder disputes.",
    landscape: [
      "Jurisdiction follows the registered office, so a Rajasthan company is heard at the NCLT Jaipur Bench even though High Court work for Udaipur goes to the principal seat at Jodhpur. Appeals from Jaipur go to the NCLAT in New Delhi. The one-crore default threshold excludes most local trade debts, leaving MSME Samadhaan, summary suits, Commercial Court claims and Section 138 prosecutions as the practical toolkit.",
      "Hospitality insolvency has a particular feature worth understanding: the value in a hotel business is often tied up in the property, licences and brand arrangement rather than in liquid assets, and a moratorium that halts operations can destroy the very value a creditor hoped to realise. That makes settlement, or a resolution that keeps the business running, frequently more attractive than pushing an admitted process to its conclusion.",
      "For mineral and processing units, the pre-existing dispute question dominates. Quality, grade and consignment disputes are routine in the marble trade, and any raised before a demand notice will defeat an operational creditor's Section 9 petition. Admission remains the leverage — moratorium, board displaced, Section 29A bar on the promoter bidding — which is why a large share of admitted matters end in a Section 12A withdrawal.",
    ],
    courtsForThisMatter: [
      "NCLT Jaipur Bench (Rajasthan jurisdiction)",
      "NCLAT, New Delhi (appeals from the Jaipur Bench)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Commercial Court, Udaipur (below-threshold and contractual recovery)",
      "Judicial Magistrate courts, Udaipur (Section 138 NI Act prosecutions)",
      "Rajasthan High Court, Principal Seat at Jodhpur (Section 11 arbitration appointments)",
    ],
    caseTypes: [
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Section 7 Petitions", desc: "Financial creditor applications where the default meets the statutory threshold." },
      { title: "Hospitality Insolvency Strategy", desc: "Weighing a moratorium against the operating value it can destroy." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute from the quality and grade record." },
      { title: "MSME Samadhaan Claims", desc: "The below-threshold route with statutory compound interest for registered units." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution and related-party transactions." },
      { title: "Personal Guarantor Proceedings", desc: "Proceedings against promoters who guaranteed the corporate debt." },
    ],
    faqs: [
      {
        question: "Which NCLT bench covers Udaipur?",
        answer:
          "The NCLT Jaipur Bench, which has jurisdiction over Rajasthan, with appeals to the NCLAT in New Delhi. Note that High Court work for Udaipur goes to the Jodhpur principal seat — the two do not follow the same map.",
      },
      {
        question: "Is insolvency a good idea against a hotel that owes us money?",
        answer:
          "Not always. A hotel's value sits largely in its property, licences and brand arrangement, and a moratorium that halts operations can destroy the value you hoped to recover. Settlement, or a resolution that keeps the business trading, is frequently the better commercial outcome even when a petition would succeed.",
      },
      {
        question: "The buyer disputed the grade of the marble. Can I still file?",
        answer:
          "Probably not as an operational creditor if the dispute predates your demand notice — a genuine pre-existing dispute defeats a Section 9 petition. Grade and quality disputes are routine in this trade, so the correspondence should be reviewed candidly before filing.",
      },
      {
        question: "What if the debt is below one crore?",
        answer:
          "The IBC is unavailable. Recovery then proceeds through MSME Samadhaan if you are registered, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution on a bounced cheque.",
      },
      {
        question: "Why do admitted petitions settle so often?",
        answer:
          "Because admission displaces the board, imposes a moratorium and can bar the promoter under Section 29A from bidding to take the company back. Debtors frequently settle once that becomes real, and the matter is withdrawn under Section 12A with committee approval.",
      },
    ],
    localNotes: [
      "In hospitality, a moratorium can destroy the operating value a creditor is trying to realise.",
      "Grade and quality disputes in the marble trade routinely create the pre-existing dispute defence.",
      "Company matters go to Jaipur; High Court work for Udaipur goes to Jodhpur.",
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // KOTA × MATTERS — the coaching economy runs through every matter here:
  // institute compliance, hostel property, student guardianship, and an
  // industrial belt behind it. Jaipur Bench, NCLT Jaipur.
  // ══════════════════════════════════════════════════════════════════════
  "kota__cheque-bounce-recovery": {
    lead:
      "Kota's cheque-bounce work draws on two distinct economies: the industrial belt supplying the thermal power, fertiliser and chemical units, and the coaching-and-hostel services sector with its landlords, caterers, transport operators and fit-out contractors. NyaySevak connects you with Bar-Council-verified Kota cheque-bounce lawyers who issue the statutory notice inside the 30-day window and file before the correct magistrate.",
    landscape: [
      "The Section 138 mechanics do not vary: notice within 30 days of the return memo, 15 days for the drawer to pay, complaint within one month after that, filed where the payee's bank branch is located under Section 142 as amended in 2015. Missing any of them ends the prosecution on limitation whatever the merits.",
      "The hostel and coaching services trade has a distinctive rhythm that affects recovery. Payments cluster around admission cycles, and an operator's ability to pay varies sharply between session and off-season, so a settlement scheduled around the admission calendar frequently recovers more than a judgment enforced at the wrong point in the year. That is a negotiating insight rather than a legal one, but it often determines whether money actually arrives.",
      "Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing to deposit at least twenty per cent. For registered MSMEs supplying the industrial units, the Samadhaan route before the Rajasthan Facilitation Council carries compound interest at three times the RBI bank rate. Quashing and revision go to the Rajasthan High Court's Jaipur Bench.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate courts, Kota (Section 138 NI Act complaints)",
      "Sessions Court, Kota (appeals against conviction or acquittal)",
      "Rajasthan High Court, Jaipur Bench (quashing, revision)",
      "Commercial Court, Kota (parallel civil recovery above the specified value)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "District Mediation Centre & National Lok Adalat, Kota",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Issuing the Section 138 notice within 30 days of the return memo." },
      { title: "Complaint Filing", desc: "Filing before the magistrate serving your bank branch, with the debt properly pleaded." },
      { title: "Admission-Cycle Settlement", desc: "Payment schedules built around the coaching sector's seasonal cash flow." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount at the trial stage." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered suppliers." },
      { title: "Defending a S.138 Case", desc: "Rebutting the Section 139 presumption — security cheques, blank cheques, notice defects." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat and compounding at any stage of the prosecution." },
      { title: "Firm & Director Liability", desc: "Proceeding against partners, signatories and directors under Section 141." },
    ],
    faqs: [
      {
        question: "Where do I file a cheque bounce case in Kota?",
        answer:
          "Before the Judicial Magistrate court serving the area of the bank branch where you presented the cheque, since the payee's branch fixes jurisdiction under Section 142 as amended in 2015.",
      },
      {
        question: "The debtor is a hostel operator with seasonal income. Does that change anything?",
        answer:
          "In practice, a great deal. Hostel and coaching-services cash flow clusters around admission cycles, so a settlement scheduled to the calendar frequently recovers more than enforcing a decree in an off-season month. It is a negotiating point rather than a legal one, but it often decides whether you are paid.",
      },
      {
        question: "What are the deadlines?",
        answer:
          "Thirty days from the return memo to send the demand notice, fifteen days for the drawer to pay, and one month after that to file the complaint. Missing any of these defeats the prosecution on limitation alone.",
      },
      {
        question: "Where do quashing and revision go?",
        answer:
          "To the Rajasthan High Court's Jaipur Bench, which covers the eastern districts including Kota — not the principal seat at Jodhpur. Filing at the wrong seat costs real time.",
      },
      {
        question: "Can I recover before the trial ends?",
        answer:
          "Often. Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a further minimum twenty per cent deposit from a convicted drawer who appeals.",
      },
    ],
    localNotes: [
      "Coaching-sector cash flow follows admission cycles — settlement timing is a genuine recovery strategy.",
      "Kota escalates to the Jaipur Bench, not the Jodhpur principal seat.",
      "Samadhaan is often the stronger lever for registered suppliers to the industrial belt.",
    ],
  },

  "kota__rera-complaint": {
    lead:
      "Kota's property market is unlike any other in Rajasthan: entire neighbourhoods around Talwandi, Jawahar Nagar and Rajeev Gandhi Nagar consist of buildings constructed or converted for hostel and coaching use, frequently beyond what the sanctioned plan permits. NyaySevak connects you with Bar-Council-verified Kota property and RERA lawyers for project claims and for the permitted-use checks that a hostel investment requires.",
    landscape: [
      "For a registered residential project, the Rajasthan Real Estate Regulatory Authority can order refund with interest if you withdraw, compensation for delay if you stay, or directions to complete, with appeals to the Rajasthan Real Estate Appellate Tribunal. Delay runs from the completion date the promoter declared at registration, so record it at booking.",
      "The distinctive Kota risk is permitted use rather than delivery. A building already operating as a hostel is not evidence that it lawfully may — additional floors, a change of use and institutional occupancy frequently never reached the approved plan, and municipal action over unauthorised use and fire-safety non-compliance is a live risk. Fire and building-safety obligations attach specifically to hostel and institutional occupancy, and retrofitting them after construction is far more expensive than planning for them.",
      "The general Rajasthan framework applies underneath: agricultural land must be converted before development, a mutation entry is a revenue record and not proof of title, and buying in a colony without development-authority approval can leave a purchaser without building sanction or institutional finance. Where a promoter has collapsed, homebuyers rank as financial creditors before the NCLT Jaipur Bench, subject to the class threshold.",
    ],
    courtsForThisMatter: [
      "Rajasthan Real Estate Regulatory Authority (registered project complaints)",
      "Rajasthan Real Estate Appellate Tribunal (appeals from the Authority)",
      "Municipal & development authority, Kota (sanction, permitted use, regularisation)",
      "Revenue courts & Board of Revenue, Ajmer (conversion, khatedari, mutation)",
      "NCLT Jaipur Bench (insolvent promoters; homebuyers as financial creditors)",
      "Rajasthan High Court, Jaipur Bench (writs against authorities)",
    ],
    caseTypes: [
      { title: "Permitted Use Verification", desc: "Confirming the approved plan and sanctioned use before acquiring hostel or coaching premises." },
      { title: "Unauthorised Construction Defence", desc: "Responding to municipal action over additional floors, use change and fire-safety compliance." },
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation against the declared completion date." },
      { title: "Fire & Safety Compliance", desc: "Obligations attaching specifically to hostel and institutional occupancy." },
      { title: "Conversion & Approval Checks", desc: "NA conversion and development-authority approval status before purchase." },
      { title: "Hostel & Commercial Leasing", desc: "Lease drafting, rent recovery and eviction for buildings let to operators." },
      { title: "Refund & Withdrawal", desc: "Electing to exit a registered project and recover amounts paid with interest." },
      { title: "Promoter Insolvency", desc: "Claims before the NCLT Jaipur Bench where the developer has collapsed." },
    ],
    faqs: [
      {
        question: "The building already runs as a hostel. Is that enough?",
        answer:
          "No. A great many Kota buildings operate beyond their sanctioned use, with additional floors or a change of use never reflected in the approved plan. Municipal action over unauthorised use and fire-safety non-compliance is a real risk, so the approved plan and permitted use should be verified independently before you buy or invest.",
      },
      {
        question: "Can I convert my house into a hostel or PG?",
        answer:
          "Only within the permitted use for the plot and the approved plan. A change of use, additional construction or institutional occupancy generally needs sanction, and fire and building-safety requirements attach to that kind of occupancy — retrofitting them after construction is substantially more expensive than planning for them.",
      },
      {
        question: "What can Rajasthan RERA do about a delayed project?",
        answer:
          "For a registered project it can direct a refund of amounts paid with interest if you withdraw, award compensation for delay if you take possession, or direct completion — with appeals to the Rajasthan Real Estate Appellate Tribunal.",
      },
      {
        question: "Is a mutation entry proof of ownership?",
        answer:
          "No. Mutation records a change in the revenue entries for revenue-collection purposes and does not establish title, which must still be traced through the document chain read with the jamabandi and khasra entries.",
      },
      {
        question: "What if the developer becomes insolvent?",
        answer:
          "Homebuyers are financial creditors under the IBC and can proceed before the NCLT Jaipur Bench, subject to the threshold of at least one hundred allottees or ten per cent of the class, after which a moratorium halts other proceedings.",
      },
    ],
    localNotes: [
      "Current occupancy is not evidence of lawful use — verify the approved plan before buying hostel property.",
      "Fire and building-safety obligations attach specifically to hostel and institutional occupancy.",
      "Writs go to the Jaipur Bench; revenue appeals end at the Board of Revenue in Ajmer.",
    ],
  },

  "kota__company-registration": {
    lead:
      "Setting up a coaching institute or hostel business in Kota is no longer a matter of renting premises and opening the doors — the sector now carries registration, refund-policy, advertising and safety obligations, and non-compliance draws regulatory action and consumer complaints simultaneously. NyaySevak connects you with Bar-Council-verified Kota corporate lawyers for incorporation and sector compliance.",
    landscape: [
      "Coaching has become a regulated activity. Central guidance for coaching centres introduced requirements covering registration, minimum student age, refund policy, advertising claims, counselling provision, and infrastructure and safety standards, with states adding their own requirements. For an operator the practical exposure now runs on two tracks at once: an unfair refund clause or an unsubstantiated advertising claim can trigger regulatory action and a consumer complaint from the same facts.",
      "The refund policy deserves particular attention at setup. Consumer forums have consistently treated blanket retention of fees after a student discontinues as an unfair trade practice, and a no-refund clause in the admission form does not defeat a claim. A proportionate, clearly stated and consistently applied policy is a far better protection than an absolute one, and reviewing the admission documentation and advertising is the highest-value compliance work an institute can commission.",
      "Structurally, incorporation is conventional — Registrar of Companies for Rajasthan, company and insolvency matters to the NCLT Jaipur Bench. Institutions frequently overlook employment compliance because they do not think of themselves as industrial employers: establishment registration, provident fund and ESI where thresholds are met, and contract-labour compliance for outsourced hostel, catering and security staff all apply.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Rajasthan (incorporation and ongoing filings)",
      "NCLT Jaipur Bench (oppression and mismanagement, schemes, insolvency)",
      "District & State Consumer Commissions (fee refund and service claims)",
      "Municipal & development authority, Kota (premises sanction and permitted use)",
      "Labour department, Kota (establishment registration, PF, ESI, contract labour)",
      "Rajasthan High Court, Jaipur Bench (writs against regulatory action)",
    ],
    caseTypes: [
      { title: "Coaching Sector Compliance", desc: "Registration, refund policy, advertising claims, counselling and safety obligations." },
      { title: "Refund Policy Drafting", desc: "A proportionate, consistently applied policy that survives a consumer complaint." },
      { title: "Advertising Claim Review", desc: "Substantiating results and faculty claims before they draw regulatory attention." },
      { title: "Private Limited & LLP Formation", desc: "Structuring for institutes, hostel operators and ancillary businesses." },
      { title: "Premises & Permitted Use", desc: "Confirming sanction and permitted use before committing to a building." },
      { title: "Labour Registrations", desc: "Establishment registration, PF and ESI, and contract labour for outsourced staff." },
      { title: "Consumer Claim Defence", desc: "Defending fee refund and service-deficiency complaints." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, annual filings and GST." },
    ],
    faqs: [
      {
        question: "What compliance applies to a coaching institute in Kota?",
        answer:
          "Central guidance for coaching centres covers registration, minimum student age, refund policy, advertising claims, counselling provision, and infrastructure and safety standards, with states adding more. Because an unfair refund clause or an unsubstantiated claim can trigger both regulatory action and consumer complaints, reviewing admission documentation and advertising is the highest-value compliance work.",
      },
      {
        question: "Does a no-refund clause protect us?",
        answer:
          "Generally not. Consumer forums have consistently treated blanket retention of fees after a student discontinues as an unfair trade practice, and refund obligations now feature in the applicable guidance. A proportionate, clearly stated and consistently applied policy is far better protection than an absolute clause.",
      },
      {
        question: "Which Registrar and tribunal apply?",
        answer:
          "The Registrar of Companies for Rajasthan handles incorporation and filings, and company and insolvency matters go to the NCLT Jaipur Bench.",
      },
      {
        question: "What labour compliance applies to an institute or hostel?",
        answer:
          "Establishment registration, provident fund and ESI where thresholds are met, contract-labour compliance for outsourced hostel, catering and security staff, and the statutory registers. Institutions frequently overlook these because they do not consider themselves industrial employers — which is precisely when disputes arise.",
      },
      {
        question: "Do we need to check the building's permitted use?",
        answer:
          "Yes, before committing. Institutional and hostel occupancy generally requires sanction and carries fire and building-safety obligations, and the fact that a building is already used that way is not evidence that it lawfully may be.",
      },
    ],
    localNotes: [
      "Coaching is now a regulated sector — refund policy and advertising carry dual regulatory and consumer exposure.",
      "A blanket no-refund clause does not defeat a consumer claim.",
      "Institutes and hostels are employers and carry the corresponding labour obligations.",
    ],
  },

  "kota__anticipatory-bail": {
    lead:
      "Kota's pre-arrest work has a profile no other Indian city shares: roughly two lakh teenagers live here away from their families, so a significant share of matters involve people under eighteen, offences against minors, or the liability of hostel operators, wardens and institutes. NyaySevak connects you with Bar-Council-verified Kota lawyers who handle these alongside ordinary criminal defence.",
    landscape: [
      "Age changes the forum entirely. A person under eighteen in conflict with law is dealt with by the Juvenile Justice Board rather than an ordinary criminal court, with a different procedure and different outcomes, so the first question in any student matter is the accused's age — not the offence. Where the complainant is a minor, POCSO applies, bringing a designated Special Court, in-camera procedure, statutory timelines and presumptions that shift significant evidential weight onto the accused.",
      "Institutional liability is an active and developing area here. Where a student comes to harm, complaints commonly allege negligence by the hostel operator, warden or institute, and where the facts support it, abetment. The regulatory obligations now applying to coaching centres — counselling provision, safety measures, reporting — are increasingly relied on to establish the standard of care expected, which means an operator's compliance record becomes evidence in a criminal matter.",
      "For adults and ordinary offences the standard route applies: the Sessions Court at Kota first, then the Rajasthan High Court's Jaipur Bench, which covers the eastern districts. Parents contacting a lawyer from another state should know that interim protection granted at the first hearing, while notice issues to the prosecution, is usually what actually protects a person through the most exposed period.",
    ],
    courtsForThisMatter: [
      "Juvenile Justice Board, Kota (persons under eighteen in conflict with law)",
      "Special Court (POCSO), Kota",
      "Sessions Court, Kota (Section 482 BNSS applications)",
      "Rajasthan High Court, Jaipur Bench (anticipatory bail, quashing, revision)",
      "Chief Judicial Magistrate & Magistrate courts, Kota",
      "Special Court (NDPS), Kota",
    ],
    caseTypes: [
      { title: "Juvenile Justice Board Matters", desc: "Representation where the person in conflict with law is under eighteen." },
      { title: "POCSO Proceedings", desc: "Special Court matters with in-camera procedure and statutory presumptions." },
      { title: "Institutional Liability Defence", desc: "Defending hostel operators, wardens and institutes against negligence and abetment allegations." },
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications at Kota, with interim protection at the first hearing." },
      { title: "High Court Applications", desc: "Escalated applications before the Rajasthan High Court's Jaipur Bench." },
      { title: "Student Matters from Other States", desc: "Acting for families contacting counsel from outside Rajasthan." },
      { title: "Ragging & Hostel Safety", desc: "Complaints involving hostels, wardens and institutional supervision." },
      { title: "Conditions & Compliance", desc: "Negotiating workable terms on cooperation, travel, passport and sureties." },
    ],
    faqs: [
      {
        question: "My child is a student in Kota and has been named in an FIR. What happens?",
        answer:
          "The first question is their age. Under eighteen, they are dealt with by the Juvenile Justice Board rather than an ordinary criminal court, with different procedure and outcomes. Over eighteen, ordinary criminal procedure applies. Either way the first production before the Board or Magistrate is the critical hearing, so representation should be arranged before it.",
      },
      {
        question: "Can a hostel or institute be held criminally responsible?",
        answer:
          "It can, depending on the facts. Complaints commonly allege negligence by the operator, warden or institute, and abetment where the circumstances support it. The regulatory obligations on coaching centres around counselling, safety and reporting are increasingly used to establish the expected standard of care — so an operator's compliance record becomes evidence.",
      },
      {
        question: "How does a POCSO case differ?",
        answer:
          "It is tried by a designated Special Court, conducted in camera with protections for the child's identity, subject to statutory timelines, and carries presumptions that place significant evidential weight on the accused. Because of those presumptions the defence must be prepared carefully from the investigation stage.",
      },
      {
        question: "We live in another state. Can you act for us?",
        answer:
          "Yes — this is routine in Kota given the student population. What matters most is speed: interim protection granted at the first hearing is usually what actually protects a person, so instructing counsel locally without waiting to travel is the right first step.",
      },
      {
        question: "Which High Court bench hears Kota matters?",
        answer:
          "The Rajasthan High Court's Jaipur Bench, which covers the eastern districts including Kota — not the principal seat at Jodhpur.",
      },
    ],
    localNotes: [
      "In any student matter the accused's age decides the forum before the offence does.",
      "Institutional liability of hostels, wardens and institutes is active and developing here.",
      "Kota escalates to the Jaipur Bench, not the Jodhpur principal seat.",
    ],
  },

  "kota__mutual-consent-divorce": {
    lead:
      "Mutual consent divorce in Kota is filed before the Family Court under Section 13B on the standard two-motion structure. Where children are studying in the city while a parent lives elsewhere, custody and guardianship terms need more thought than a conventional weekly schedule allows. NyaySevak connects you with Bar-Council-verified Kota divorce lawyers who draft settlements that hold across cities.",
    landscape: [
      "The Section 13B structure is a first motion recording at least a year's separation and agreement to dissolve, then a second after six to eighteen months confirming consent still stands. Under Amardeep Singh the Family Court may waive the six-month gap where separation has already been long, mediation has failed and the settlement is complete — bringing the process down to two or three months.",
      "Custody arrangements in Kota frequently have to work around examination cycles rather than calendar weeks. Where a child is mid-way through a coaching or board examination programme, continuity of study carries real weight in a welfare assessment, and workable orders address inter-city travel, examination schedules and regular contact instead of imposing a fixed weekend pattern that breaks in the first month.",
      "Related to this, guardianship is worth addressing while the settlement is being drafted rather than later. Where a minor will continue living in Kota for study, a recorded local guardianship arrangement — and in some situations an order under the Guardians and Wards Act — resolves who may consent to medical treatment or act in an emergency. The settlement should also close the Domestic Violence Act application, the Section 144 BNSS maintenance claim, and any Section 85 BNS complaint, the last by quashing at the Jaipur Bench.",
    ],
    courtsForThisMatter: [
      "Family Court, Kota (Section 13B first and second motions)",
      "Magistrate courts, Kota (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Principal District Judge, Kota (Guardians and Wards Act applications)",
      "Rajasthan High Court, Jaipur Bench (appeals, quashing on settlement)",
      "District Mediation Centre, Kota",
      "Supreme Court of India (transfer petitions between states)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Family Court at Kota." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications on the Amardeep Singh criteria where separation is long and settlement complete." },
      { title: "Custody Around Exam Cycles", desc: "Terms addressing study continuity, inter-city travel and regular contact." },
      { title: "Guardianship Arrangements", desc: "Recorded local guardianship for a minor continuing to study in Kota." },
      { title: "Settlement Drafting", desc: "Alimony, custody, property, stridhan and closure of every parallel proceeding." },
      { title: "Quashing on Settlement", desc: "Jaipur Bench petitions closing Section 85 BNS complaints." },
      { title: "Transfer Petitions", desc: "Supreme Court petitions where spouses reside in different states." },
      { title: "Permanent Alimony Structuring", desc: "Lump sum or staged payment with enforceable security and timelines." },
    ],
    faqs: [
      {
        question: "How long does mutual consent divorce take in Kota?",
        answer:
          "Ordinarily six to twelve months because of the two-motion structure and the statutory gap. Where separation has already been long and the settlement is complete, the Family Court may waive the six-month gap and the matter can conclude in two to three months.",
      },
      {
        question: "Our child is studying here. How should custody be framed?",
        answer:
          "Around study continuity rather than a fixed weekly pattern. Where a child is mid-way through an examination programme, that continuity carries real weight in a welfare assessment, and workable orders address inter-city travel, examination schedules and regular contact instead of a weekend arrangement that breaks immediately.",
      },
      {
        question: "Should we deal with guardianship in the settlement?",
        answer:
          "If a minor will continue living in Kota for study, yes. A recorded local guardianship arrangement — and sometimes an order under the Guardians and Wards Act — resolves who may consent to medical treatment or act in an emergency, and is far easier to arrange while drafting than during a crisis.",
      },
      {
        question: "My spouse filed in another state.",
        answer:
          "You can defend there or move the Supreme Court for a transfer petition to bring the proceedings together. Which is better depends on where the child, the evidence and the witnesses are, and on how far the other proceeding has progressed.",
      },
      {
        question: "Does the settlement close the other cases?",
        answer:
          "It should. A complete package closes the Domestic Violence Act application and the Section 144 BNSS maintenance claim before the Magistrate, and any Section 85 BNS complaint through a quashing petition at the Jaipur Bench.",
      },
    ],
    localNotes: [
      "Custody terms here should be built around examination cycles, not calendar weeks.",
      "Guardianship for a minor studying in Kota is best recorded while the settlement is drafted.",
      "Appeals and quashing go to the Jaipur Bench.",
    ],
  },

  "kota__nclt-ibc": {
    lead:
      "Kota's insolvency work comes from an industrial belt of long-term supply and service contracts with large public and private undertakings, and increasingly from the coaching and hostel services economy. Company matters go to the NCLT Jaipur Bench. NyaySevak connects you with Bar-Council-verified Kota NCLT and insolvency lawyers for Section 7 and Section 9 petitions and shareholder disputes.",
    landscape: [
      "Most industrial contracts here carry arbitration clauses, which changes the analysis before insolvency is even considered. Where a dispute is genuinely contractual, arbitration is the correct route and an insolvency petition is likely to be resisted as a pressure tactic — and the presence of an arbitration clause frequently coincides with the kind of documented dispute that defeats an operational creditor's Section 9 petition anyway. Establishing whether the debt is genuinely undisputed comes first.",
      "The one-crore default threshold excludes most local claims, so the practical toolkit is the MSME Samadhaan route with its compound interest at three times the RBI bank rate, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution. Where the threshold is met and no genuine pre-existing dispute exists, admission is severe: a moratorium, the board displaced in favour of a resolution professional, and a possible Section 29A bar on the promoter bidding.",
      "Coaching and hostel businesses raise a distinct consideration. Their value lies largely in enrolment, reputation and premises arrangements rather than realisable assets, so a moratorium that disrupts an admission cycle can destroy the value a creditor hoped to recover. Settlement, or a resolution that keeps the institution operating through the session, is frequently the better commercial outcome even where a petition would succeed.",
    ],
    courtsForThisMatter: [
      "NCLT Jaipur Bench (Rajasthan jurisdiction)",
      "NCLAT, New Delhi (appeals from the Jaipur Bench)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Commercial Court, Kota (below-threshold and contractual recovery)",
      "Rajasthan High Court, Jaipur Bench (Section 11 arbitration appointments)",
      "Judicial Magistrate courts, Kota (Section 138 NI Act prosecutions)",
    ],
    caseTypes: [
      { title: "Forum Analysis", desc: "Determining whether arbitration, a suit or insolvency is the correct route before filing." },
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Section 7 Petitions", desc: "Financial creditor applications where the default meets the statutory threshold." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute from the contract and correspondence record." },
      { title: "Education Sector Strategy", desc: "Weighing a moratorium against enrolment value in an admission-cycle business." },
      { title: "MSME Samadhaan Claims", desc: "The below-threshold route with statutory compound interest for registered units." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution and related-party transactions." },
    ],
    faqs: [
      {
        question: "Our contract has an arbitration clause. Can we still file an insolvency petition?",
        answer:
          "Only if the debt is genuinely undisputed. Where the dispute is contractual, arbitration is the correct route and an insolvency petition is likely to be resisted as a pressure tactic — and the same documented dispute that triggers arbitration will usually defeat a Section 9 petition. Establishing whether the debt is really undisputed comes first.",
      },
      {
        question: "Which NCLT bench covers Kota?",
        answer:
          "The NCLT Jaipur Bench, which has jurisdiction over Rajasthan, with appeals to the NCLAT in New Delhi.",
      },
      {
        question: "What if the debt is below one crore?",
        answer:
          "The IBC is unavailable. Recovery proceeds through MSME Samadhaan if you are registered, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution on a bounced cheque.",
      },
      {
        question: "Is insolvency sensible against a coaching institute?",
        answer:
          "Often not. Value in that business sits in enrolment, reputation and premises arrangements rather than realisable assets, and a moratorium disrupting an admission cycle can destroy exactly what you hoped to recover. Settlement or a resolution keeping the institution operating through the session is frequently the better commercial outcome.",
      },
      {
        question: "Why do admitted petitions settle so often?",
        answer:
          "Because admission displaces the board, imposes a moratorium and can bar the promoter under Section 29A from bidding to take the company back. Debtors frequently settle once that becomes real, and the matter is withdrawn under Section 12A with committee approval.",
      },
    ],
    localNotes: [
      "Industrial contracts here are arbitration-first, and that clause usually signals a dispute that defeats a Section 9 petition.",
      "In an admission-cycle business, a moratorium can destroy the enrolment value a creditor wants to realise.",
      "Company matters go to the NCLT Jaipur Bench; appeals go to New Delhi.",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // AJMER × MATTERS — the Board of Revenue sits here, RPSC and the state
  // education boards are headquartered here, and Kishangarh's marble market
  // drives the commercial docket. Jaipur Bench, NCLT Jaipur.
  // ══════════════════════════════════════════════════════════════════════
  "ajmer__cheque-bounce-recovery": {
    lead:
      "Ajmer district's cheque-bounce work is dominated by the Kishangarh marble market — a high-volume, credit-based trade of processors, traders and transporters where documentation is often thin and the cheque is the only formal record. NyaySevak connects you with Bar-Council-verified Ajmer cheque-bounce lawyers who issue the statutory notice inside the 30-day window and reconstruct the underlying debt where the paperwork does not.",
    landscape: [
      "The Section 138 deadlines apply as everywhere: notice within 30 days of the return memo, 15 days for the drawer to pay, complaint within one month after that, filed where the payee's bank branch is located under Section 142 as amended in 2015. In a trade that runs on long-standing relationships, waiting for an informal settlement past the notice window is the most common way a strong claim is lost.",
      "Proving the debt behind the cheque is the real work in the marble trade. Consignments frequently move on delivery challans and verbal terms rather than signed contracts, so establishing a legally enforceable debt draws on ledgers, transport records, weighbridge slips and the pattern of dealings. Section 139 presumes the cheque was issued for such a debt and places the burden on the drawer to rebut it, which makes the presumption the claimant's most valuable asset.",
      "Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a convicted drawer appealing to deposit at least twenty per cent. Registered MSMEs should weigh the Samadhaan route before the Rajasthan Facilitation Council in parallel. Quashing and revision go to the Rajasthan High Court's Jaipur Bench.",
    ],
    courtsForThisMatter: [
      "Judicial Magistrate courts, Ajmer & Kishangarh (Section 138 NI Act complaints)",
      "Sessions Court, Ajmer (appeals against conviction or acquittal)",
      "Rajasthan High Court, Jaipur Bench (quashing, revision)",
      "Commercial Court, Ajmer (parallel civil recovery above the specified value)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "District Mediation Centre & National Lok Adalat, Ajmer",
    ],
    caseTypes: [
      { title: "Statutory Demand Notice", desc: "Issuing the Section 138 notice within 30 days of the return memo." },
      { title: "Reconstructing the Debt", desc: "Building the enforceable debt from ledgers, challans, weighbridge slips and dealings." },
      { title: "Complaint Filing", desc: "Filing before the magistrate serving your bank branch, with the cause of action pleaded." },
      { title: "Interim Compensation (S.143A)", desc: "Pressing for up to twenty per cent of the cheque amount at the trial stage." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered units." },
      { title: "Defending a S.138 Case", desc: "Rebutting the Section 139 presumption — security cheques, blank cheques, notice defects." },
      { title: "Settlement & Compounding", desc: "Mediation, Lok Adalat and compounding, usually the fastest route to money." },
      { title: "Firm & Partner Liability", desc: "Proceeding against partners and signatories where the drawer is a firm." },
    ],
    faqs: [
      {
        question: "Our dealings were on challans, not contracts. Can I still succeed?",
        answer:
          "Usually yes. Section 139 presumes the cheque was issued for a legally enforceable debt and places the burden on the drawer to rebut that presumption. Ledgers, delivery challans, weighbridge slips, transport records and the pattern of dealings are all used to establish the debt behind the cheque.",
      },
      {
        question: "I waited months hoping to settle. Is it too late?",
        answer:
          "It may be. The notice must issue within 30 days of the return memo and the complaint within one month after the drawer's 15-day period ends. In a relationship-driven trade this is the most common way a good claim is lost, so the position should be assessed immediately rather than assumed.",
      },
      {
        question: "Where do I file?",
        answer:
          "Before the Judicial Magistrate court serving the area of the bank branch where you presented the cheque, since the payee's branch fixes jurisdiction under Section 142 as amended in 2015.",
      },
      {
        question: "Can I recover before the trial ends?",
        answer:
          "Often. Section 143A allows interim compensation of up to twenty per cent of the cheque amount once the accused pleads not guilty, and Section 148 requires a further minimum twenty per cent deposit from a convicted drawer who appeals.",
      },
      {
        question: "Is Samadhaan worth running alongside?",
        answer:
          "If you hold Udyam registration, yes. The Facilitation Council route carries compound interest at three times the RBI bank rate and frequently brings a larger buyer to settlement faster than the prosecution alone. Registration generally has to predate the transaction.",
      },
    ],
    localNotes: [
      "Thin documentation makes the Section 139 presumption the claimant's most valuable asset in the marble trade.",
      "Waiting past the 30-day notice window is the commonest way a good claim is lost here.",
      "Quashing and revision go to the Jaipur Bench.",
    ],
  },

  "ajmer__rera-complaint": {
    lead:
      "Property diligence in Ajmer carries a check that few other Indian cities require: wakf property, which is subject to severe restrictions on alienation and whose disputes go before a dedicated tribunal rather than a civil court. NyaySevak connects you with Bar-Council-verified Ajmer property and RERA lawyers for project claims and for the wakf and revenue checks that must precede a purchase.",
    landscape: [
      "The wakf question matters most in the older parts of the city and around Pushkar. Wakf property carries severe restrictions on alienation, a sale of it can be void, and disputes go before the Rajasthan Wakf Tribunal rather than an ordinary civil court. Checking the wakf register before any transaction is essential, and no RERA registration cures a defect of this kind — the two are entirely separate enquiries. Property attached to the Dargah is governed by its own dedicated statute and committee.",
      "For registered projects, the Rajasthan Real Estate Regulatory Authority can order refund with interest if you withdraw, compensation for delay if you stay, or directions to complete, with appeals to the Rajasthan Real Estate Appellate Tribunal. Delay runs from the completion date the promoter declared at registration, so record it when you book.",
      "The general revenue framework applies underneath, and Ajmer has an advantage in applying it: the Board of Revenue — the apex revenue court for the whole of Rajasthan — sits in this city, so specialised revenue expertise is locally accessible. Agricultural land must be converted before development, a mutation entry is a revenue record and not proof of title, and buying in a colony without development-authority approval can leave a purchaser without building sanction or institutional finance.",
    ],
    courtsForThisMatter: [
      "Rajasthan Wakf Tribunal (wakf property disputes)",
      "Board of Revenue, Ajmer (apex revenue appellate authority)",
      "Revenue courts — Tehsildar, SDO, Collector (conversion, khatedari, mutation)",
      "Rajasthan Real Estate Regulatory Authority (registered project complaints)",
      "Ajmer development authority (layout approval, regularisation, allotment)",
      "Rajasthan High Court, Jaipur Bench (writs against authorities)",
    ],
    caseTypes: [
      { title: "Wakf Register Verification", desc: "Checking wakf status before any transaction in older Ajmer or around Pushkar." },
      { title: "Wakf Tribunal Proceedings", desc: "Disputes over wakf property, which do not go to an ordinary civil court." },
      { title: "Endowment & Dargah Property", desc: "Matters governed by the dedicated statute and its committee." },
      { title: "Delayed Possession Claims", desc: "Refund with interest or delay compensation against the declared completion date." },
      { title: "Revenue Record Diligence", desc: "Jamabandi, khasra, mutation and conversion checks before purchase." },
      { title: "Unapproved Colony Assessment", desc: "Regularisation prospects and charges where a layout lacks approval." },
      { title: "Refund & Withdrawal", desc: "Electing to exit a registered project and recover amounts paid with interest." },
      { title: "Title Suits & Specific Performance", desc: "Civil suits over title and enforcement of agreements to sell." },
    ],
    faqs: [
      {
        question: "How do I know whether a property is wakf land?",
        answer:
          "By checking the wakf register maintained under the Wakf Act before any transaction. Wakf property carries severe restrictions on alienation, a sale of it can be void, and disputes go before the Rajasthan Wakf Tribunal rather than a civil court. This check matters particularly in older Ajmer and around Pushkar.",
      },
      {
        question: "Does RERA registration cover that risk?",
        answer:
          "No. RERA governs the promoter's obligations on delivery, specification and refund; it does not cure a defect in the title to the land beneath the project. Wakf status and RERA registration are entirely separate enquiries and both need to be made.",
      },
      {
        question: "Is a mutation entry proof of ownership?",
        answer:
          "No. Mutation records a change in the revenue entries for revenue-collection purposes and does not establish title, which must still be traced through the document chain read with the jamabandi and khasra entries.",
      },
      {
        question: "Does the Board of Revenue being here help?",
        answer:
          "Practically, yes. It is the apex revenue court for all of Rajasthan and sits in this city, so counsel with genuine revenue depth are locally available and a revenue appeal does not require travel. It does not change the substantive law but materially lowers the friction of pursuing one.",
      },
      {
        question: "What can Rajasthan RERA order for a delayed project?",
        answer:
          "Refund of amounts paid with interest if you withdraw, compensation for delay if you take possession, or directions to complete — with appeals to the Rajasthan Real Estate Appellate Tribunal.",
      },
    ],
    localNotes: [
      "Wakf status must be checked before buying in older Ajmer or around Pushkar — such a sale can be void.",
      "Wakf disputes go to the Rajasthan Wakf Tribunal, not a civil court.",
      "The Board of Revenue sitting here makes specialised revenue expertise locally accessible.",
    ],
  },

  "ajmer__company-registration": {
    lead:
      "The Kishangarh marble market is one of the largest of its kind in the world, and most of it trades as proprietorships and partnerships on credit with thin documentation — a structure that leaves firms personally exposed and, when unregistered, unable to sue on a contract. NyaySevak connects you with Bar-Council-verified Ajmer corporate lawyers for incorporation, firm registration, and the trade documentation the market lacks.",
    landscape: [
      "Two structural risks dominate. A partnership carries unlimited personal liability, and Section 69 of the Partnership Act bars an unregistered firm and its partners from suing to enforce a contractual right — which in a credit-based trade with routine recovery claims can leave a firm unable to sue at all. Registration of the firm, or conversion to an LLP or private limited company, addresses this and is discovered as necessary only when a claim is attempted.",
      "The trade's documentation gap is the other recurring problem, and it is cheap to fix. A short supply agreement covering specification and grade, tolerance for natural variation, inspection and rejection procedure, where transport risk passes, payment terms and security, and a dispute-resolution clause would prevent most of the litigation this market generates. Quality and rejection disputes are the commonest source of claims and are almost entirely a drafting failure.",
      "Companies registered here file with the Registrar of Companies for Rajasthan, with company and insolvency matters going to the NCLT Jaipur Bench. Processing and mining-linked units carry an additional layer of lease conditions, royalty assessment, environmental clearance and consent to operate, while Udyam registration — which must generally predate the transaction — unlocks the Samadhaan remedy and its statutory compound interest.",
    ],
    courtsForThisMatter: [
      "Registrar of Companies, Rajasthan (incorporation and ongoing filings)",
      "Registrar of Firms, Rajasthan (partnership registration)",
      "NCLT Jaipur Bench (oppression and mismanagement, schemes, insolvency)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Mining authorities & Collector (lease, royalty and clearance)",
      "National Green Tribunal, Central Zone Bench at Bhopal (environmental matters)",
    ],
    caseTypes: [
      { title: "Partnership Registration", desc: "Registering the firm so the Section 69 bar cannot defeat a recovery claim." },
      { title: "Incorporation & Conversion", desc: "Private limited and LLP formation, and conversion from a proprietorship or firm." },
      { title: "Marble Supply Agreements", desc: "Specification and grade, rejection procedure, transport risk, payment terms and dispute resolution." },
      { title: "Udyam / MSME Registration", desc: "Registering before you trade so Samadhaan and its statutory interest are available." },
      { title: "Mining & Processing Compliance", desc: "Lease conditions, royalty assessment, clearance and periodic returns." },
      { title: "Environmental Compliance", desc: "Consent to operate, closure directions and NGT applications." },
      { title: "Partner Agreements", desc: "Profit shares, roles, admission and retirement, and exit terms agreed in advance." },
      { title: "Post-Incorporation Compliance", desc: "Registered office, statutory registers, annual filings and GST." },
    ],
    faqs: [
      {
        question: "Why does partnership registration matter so much in this trade?",
        answer:
          "Because Section 69 of the Partnership Act bars an unregistered firm and its partners from suing to enforce a contractual right. In the Kishangarh market, where credit is extended routinely and recovery claims are common, an unregistered firm can find itself unable to sue at all — and it is discovered only when the firm tries.",
      },
      {
        question: "What should a marble supply agreement cover?",
        answer:
          "Specification and grade, tolerance for natural variation, inspection and rejection procedure, the point at which transport risk passes, payment terms and security, and a dispute-resolution clause. Quality and rejection disputes are the commonest litigation in this trade and are almost entirely preventable by drafting.",
      },
      {
        question: "Which Registrar and tribunal apply?",
        answer:
          "The Registrar of Companies for Rajasthan handles incorporation and filings, and company and insolvency matters go to the NCLT Jaipur Bench.",
      },
      {
        question: "When should I register on Udyam?",
        answer:
          "Before trading with the buyer. The Samadhaan remedy and its compound interest at three times the RBI bank rate generally require registration predating the transaction, so registering after a default forfeits the strongest tool a small unit has.",
      },
      {
        question: "What compliance applies to a processing unit?",
        answer:
          "Lease conditions and royalty where mining-linked, environmental clearance and consent to operate, periodic returns, plus the usual GST and labour registrations. Environmental applications from Rajasthan are heard at the NGT's Central Zone Bench in Bhopal.",
      },
    ],
    localNotes: [
      "Section 69 can leave an unregistered Kishangarh firm unable to sue — register early.",
      "Quality and rejection disputes dominate this trade and are a drafting failure, not a legal inevitability.",
      "Company matters go to the NCLT Jaipur Bench; environmental matters to the NGT at Bhopal.",
    ],
  },

  "ajmer__anticipatory-bail": {
    lead:
      "Ajmer hosts the Rajasthan Public Service Commission and the state secondary education board, which makes it the centre of gravity for investigations into paper leaks, impersonation and organised cheating in public examinations — prosecutions that carry substantially enhanced punishments under dedicated state legislation. NyaySevak connects you with Bar-Council-verified Ajmer lawyers for these and for ordinary criminal defence.",
    landscape: [
      "Examination offences are treated far more seriously in Rajasthan than ordinary cheating. The state has enacted dedicated legislation against unfair means in public examinations carrying substantially enhanced punishments, and because the public service commission and education boards are headquartered in Ajmer, a large share of these investigations centre on this district. The prosecutions are procedurally distinct and politically charged, and they attract sustained investigative attention.",
      "Recruitment-related matters form an adjacent category: complaints involving forged certificates, impersonation at examinations, and payments to intermediaries promising appointments. These frequently run alongside a service or civil challenge to the selection itself, and how one is conducted affects the other — an admission made in a departmental or civil proceeding can surface in the criminal case.",
      "For ordinary matters the standard route applies: the Sessions Court at Ajmer first, then the Rajasthan High Court's Jaipur Bench, which covers the eastern districts. The city's religious significance also produces public-order matters around large congregations, particularly during the annual Urs. The usual statutory constraints apply throughout, including the Section 18 bar under the SC/ST (Prevention of Atrocities) Act.",
    ],
    courtsForThisMatter: [
      "Special Courts for public examination offences, Ajmer",
      "Sessions Court, Ajmer (Section 482 BNSS applications)",
      "Rajasthan High Court, Jaipur Bench (anticipatory bail, quashing, revision)",
      "Chief Judicial Magistrate & Magistrate courts, Ajmer",
      "Special Courts (POCSO, SC/ST Act), Ajmer",
      "Economic Offences Wing & cyber cell, Ajmer",
    ],
    caseTypes: [
      { title: "Examination Offence Defence", desc: "Paper leak, impersonation and organised cheating prosecutions under dedicated state legislation." },
      { title: "Recruitment Fraud", desc: "Forged certificates, impersonation and intermediary-payment allegations." },
      { title: "Coordinating Criminal & Service Tracks", desc: "Managing a parallel selection challenge so one proceeding does not damage the other." },
      { title: "Pre-Arrest Protection", desc: "Section 482 BNSS applications at Ajmer, with interim protection at the first hearing." },
      { title: "High Court Applications", desc: "Escalated applications before the Rajasthan High Court's Jaipur Bench." },
      { title: "Public Order & Congregation Matters", desc: "Cases arising from large gatherings, including during the annual Urs." },
      { title: "Quashing Where Bail Is Barred", desc: "Jaipur Bench petitions where Section 18 of the SC/ST Act applies." },
      { title: "Conditions & Compliance", desc: "Negotiating workable terms on cooperation, travel, passport and sureties." },
    ],
    faqs: [
      {
        question: "How serious is an examination offence case in Rajasthan?",
        answer:
          "Considerably more serious than ordinary cheating. The state has dedicated legislation against unfair means in public examinations carrying substantially enhanced punishments, and because the public service commission and education boards are headquartered in Ajmer, many of these investigations centre here and attract sustained attention.",
      },
      {
        question: "I am also challenging the selection itself. Does that affect the criminal case?",
        answer:
          "It can. The service or civil challenge and the criminal proceeding run on separate tracks, but an admission made in one can surface in the other. They should be conducted with each other in view rather than by different advisers working independently.",
      },
      {
        question: "Where do I apply for anticipatory bail?",
        answer:
          "Before the Sessions Court at Ajmer first, and the Rajasthan High Court's Jaipur Bench if refused — Ajmer falls under the Jaipur Bench rather than the Jodhpur principal seat.",
      },
      {
        question: "Are there cases where anticipatory bail cannot be granted?",
        answer:
          "Yes. Section 18 of the SC/ST (Prevention of Atrocities) Act bars it where a prima facie case is disclosed, and NDPS matters involving commercial quantities face the Section 37 threshold. In those situations a quashing petition is generally the realistic alternative.",
      },
      {
        question: "How quickly should I move?",
        answer:
          "Immediately. Risk of arrest is highest just after an FIR is registered, and courts commonly grant interim protection at the first hearing while notice issues to the prosecution — that interim order is usually what actually protects a person.",
      },
    ],
    localNotes: [
      "Ajmer hosts the public service commission and education boards, so examination-offence prosecutions centre here.",
      "Rajasthan's dedicated examination legislation carries substantially enhanced punishments.",
      "Ajmer escalates to the Jaipur Bench, not the Jodhpur principal seat.",
    ],
  },

  "ajmer__mutual-consent-divorce": {
    lead:
      "Ajmer has an unusually high proportion of government and railway employees among its residents, which makes mutual consent divorce comparatively predictable on the financial side: income is documented and maintenance arrears can be recovered by attachment of salary. NyaySevak connects you with Bar-Council-verified Ajmer divorce lawyers who file Section 13B petitions and deal properly with service benefits.",
    landscape: [
      "The Section 13B structure is a first motion recording at least a year's separation and agreement to dissolve, then a second after six to eighteen months confirming consent still stands, with the Family Court able to waive the six-month gap under Amardeep Singh where separation has been long, mediation has failed and the settlement is complete.",
      "Where a spouse is in government or railway service, income is established from the pay slip and service record rather than estimated, and arrears can be recovered by attachment of salary through the employer — substantially more effective than pursuing an unwilling payer through execution. That changes the negotiating dynamic: the paying spouse has less scope to delay, and the receiving spouse has correspondingly less reason to accept a discounted lump sum.",
      "Service benefits are the point most often missed. Pension, gratuity, provident fund, nomination and family-pension entitlements are affected by a divorce in ways that are easy to overlook, and a settlement silent on them regularly produces fresh litigation at retirement. Service rules may also require intimation of certain proceedings or of a second marriage, so the matrimonial strategy and the service position need to be coordinated rather than handled separately.",
    ],
    courtsForThisMatter: [
      "Family Court, Ajmer (Section 13B first and second motions)",
      "Magistrate courts, Ajmer (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Rajasthan High Court, Jaipur Bench (appeals, quashing on settlement)",
      "Principal District Judge, Ajmer",
      "District Mediation Centre, Ajmer",
      "Departmental authorities (salary attachment and service-rule intimation)",
    ],
    caseTypes: [
      { title: "Section 13B Petitions", desc: "First and second motion petitions before the Family Court at Ajmer." },
      { title: "Waiver of the Six-Month Gap", desc: "Applications on the Amardeep Singh criteria where separation is long and settlement complete." },
      { title: "Salary Attachment", desc: "Recovering maintenance arrears directly through a government or railway employer." },
      { title: "Pension & Service Benefits", desc: "Treating gratuity, provident fund, nomination and family pension expressly in the settlement." },
      { title: "Service Rule Coordination", desc: "Managing intimation requirements and departmental exposure alongside the matrimonial case." },
      { title: "Settlement Drafting", desc: "Alimony, custody, property, stridhan and closure of every parallel proceeding." },
      { title: "Quashing on Settlement", desc: "Jaipur Bench petitions closing Section 85 BNS complaints." },
      { title: "Custody & Guardianship", desc: "Arrangements decided on the welfare of the child, recorded as consent terms." },
    ],
    faqs: [
      {
        question: "My spouse is a railway employee. Is maintenance easier to enforce?",
        answer:
          "Generally yes. Income is documented from the pay slip and service record so the figure is hard to dispute, and arrears can be recovered by attachment of salary through the employer — considerably more reliable than execution against an unwilling payer.",
      },
      {
        question: "Does pension form part of the settlement?",
        answer:
          "It can be relevant, and family-pension and nomination entitlements are affected by a divorce in ways easily overlooked. They should be addressed expressly, because a settlement silent on service benefits frequently produces fresh litigation years later at retirement.",
      },
      {
        question: "Can the divorce affect a government job?",
        answer:
          "It can. A criminal complaint may trigger departmental action independently of the criminal outcome, and some service rules require intimation of certain proceedings or of a second marriage. The matrimonial and service positions should be coordinated rather than handled by different advisers.",
      },
      {
        question: "How long does it take?",
        answer:
          "Ordinarily six to twelve months because of the two-motion structure and the statutory gap. Where separation has already been long and the settlement is complete, the Family Court may waive the six-month gap and the matter can conclude in two to three months.",
      },
      {
        question: "Does the settlement close the other proceedings?",
        answer:
          "It should. A complete package closes the Domestic Violence Act application and the Section 144 BNSS maintenance claim before the Magistrate, and any Section 85 BNS complaint through a quashing petition at the Jaipur Bench.",
      },
    ],
    localNotes: [
      "Ajmer's concentration of Rajasthan Public Service Commission, education board and railway employment means one spouse is very often on a documented public payroll, which makes maintenance quantifiable and recoverable by salary attachment.",
      "Pension, gratuity and family-pension entitlements resurface at retirement if a settlement is silent on them, and the departmental consequences of a criminal complaint run independently of the criminal outcome.",
      "Appeals from the Family Court and quashing on settlement both go to the Jaipur Bench, not the Jodhpur principal seat.",
    ],
  },

  "ajmer__nclt-ibc": {
    lead:
      "Insolvency work in Ajmer district comes overwhelmingly from the Kishangarh marble market and the mineral processing belt around Beawar — trades where documentation is thin and disputes about grade and quality are routine, both of which shape whether a petition can succeed. Company matters go to the NCLT Jaipur Bench. NyaySevak connects you with Bar-Council-verified Ajmer NCLT and insolvency lawyers.",
    landscape: [
      "The one-crore default threshold excludes most claims in this district, so the working toolkit is the MSME Samadhaan route with its compound interest at three times the RBI bank rate, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution. For a registered unit, Samadhaan is frequently the most effective of these against a larger buyer.",
      "Where the threshold is met, the pre-existing dispute question usually decides an operational creditor's petition. The marble trade generates grade and quality disputes as a matter of course, and any raised before the demand notice will defeat a Section 9 application, because the IBC is an insolvency mechanism rather than a recovery forum. The thin documentation cuts both ways here: it makes the debt harder to establish, and it makes a debtor's claim of a prior dispute harder to disprove.",
      "Admission is the leverage — a moratorium halts suits and enforcement, the board is displaced in favour of a resolution professional, and the promoter may be barred under Section 29A from bidding for the company — which is why a high proportion of admitted matters end in a Section 12A withdrawal once the debtor settles. Where a promoter gave a personal guarantee, personal guarantor proceedings can run alongside. Appeals from Jaipur go to the NCLAT in New Delhi.",
    ],
    courtsForThisMatter: [
      "NCLT Jaipur Bench (Rajasthan jurisdiction)",
      "NCLAT, New Delhi (appeals from the Jaipur Bench)",
      "Rajasthan MSME Facilitation Council (Samadhaan delayed-payment claims)",
      "Commercial Court, Ajmer (below-threshold and contractual recovery)",
      "Judicial Magistrate courts, Ajmer & Kishangarh (Section 138 NI Act prosecutions)",
      "Debt Recovery Tribunal, Jaipur (secured creditor recovery)",
    ],
    caseTypes: [
      { title: "Section 9 Petitions", desc: "Operational creditor applications after a demand notice, absent a pre-existing dispute." },
      { title: "Section 7 Petitions", desc: "Financial creditor applications where the default meets the statutory threshold." },
      { title: "Defending Admission", desc: "Establishing a pre-existing dispute from the grade and quality record." },
      { title: "Evidence Reconstruction", desc: "Building the debt from challans, ledgers and dealings where documentation is thin." },
      { title: "MSME Samadhaan Claims", desc: "The below-threshold route with statutory compound interest for registered units." },
      { title: "Section 12A Withdrawal", desc: "Withdrawing an admitted petition on settlement with creditor approval." },
      { title: "Oppression & Mismanagement", desc: "Shareholder petitions over exclusion, dilution and related-party transactions." },
      { title: "Personal Guarantor Proceedings", desc: "Proceedings against promoters who guaranteed the corporate debt." },
    ],
    faqs: [
      {
        question: "Which NCLT bench covers Ajmer?",
        answer:
          "The NCLT Jaipur Bench, which has jurisdiction over Rajasthan, with appeals to the NCLAT in New Delhi.",
      },
      {
        question: "The buyer says the grade was wrong. Can I still file?",
        answer:
          "Probably not as an operational creditor if that complaint predates your demand notice — a genuine pre-existing dispute defeats a Section 9 petition. Grade and quality disputes are routine in the marble trade, so the correspondence should be reviewed candidly before filing rather than discovered at the hearing.",
      },
      {
        question: "Our paperwork is thin. Does that hurt us?",
        answer:
          "It cuts both ways. Thin documentation makes the debt harder to establish, but it also makes a debtor's claim of a prior dispute harder to substantiate. Reconstructing the record from challans, ledgers, weighbridge slips and the pattern of dealings is usually where the case is won or lost.",
      },
      {
        question: "What if the debt is below one crore?",
        answer:
          "The IBC is unavailable. Recovery proceeds through MSME Samadhaan if you are registered, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution on a bounced cheque.",
      },
      {
        question: "Why do admitted petitions settle so often?",
        answer:
          "Because admission displaces the board, imposes a moratorium and can bar the promoter under Section 29A from bidding to take the company back. Debtors frequently settle once that becomes real, and the matter is withdrawn under Section 12A with committee approval.",
      },
    ],
    localNotes: [
      "Grade and quality disputes in the marble trade routinely create the pre-existing dispute defence.",
      "Thin documentation cuts both ways — it also weakens a debtor's claim of a prior dispute.",
      "Most district trade debts fall below one crore, so Samadhaan and Section 138 do the real work.",
    ],
  },
};
