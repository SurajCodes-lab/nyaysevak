// Regional expansion — hand-written city × practice content for the nine
// cities added this cycle: Greater Noida (NCR completion), Surat, Vadodara,
// Rajkot and Gandhinagar (Gujarat), and Jodhpur, Udaipur, Kota and Ajmer
// (Rajasthan).
//
// Kept in its own module for the same reason as city-matter-content.ts: the
// original city-practice-content.ts is already ~310KB and a further 45 entries
// would make it unmanageable. Same CityPracticeContent shape, same content
// gating — a combo only renders, is only linked, and is only listed in the
// sitemap when it has an entry here.
//
// Each entry is written against that city's actual legal specifics — the High
// Court seat that hears its writs, its NCLT bench, the state statutes that
// apply to it, and the industry driving its disputes — so these are not
// templated doorway pages. Where a fact differs between two cities in the same
// state (Jodhpur is the Rajasthan HC principal seat, Kota and Ajmer fall under
// the Jaipur Bench), the content says so explicitly.
//
// BCI-safe: no feeRange on any entry (no advocate-fee display).

import type { CityPracticeContent } from "./city-practice-content";

export const cityPracticeExpansion: Record<string, CityPracticeContent> = {
  // ══════════════════════════════════════════════════════════════════════
  // GREATER NOIDA — the differentiator against Noida is the ALLOTTING
  // AUTHORITY (GNIDA / YEIDA), not the courthouse: both cities are heard at
  // Gautam Buddh Nagar District Court, Surajpur.
  // ══════════════════════════════════════════════════════════════════════
  "greater-noida__criminal-law": {
    lead:
      "Greater Noida falls under the Gautam Buddh Nagar Police Commissionerate, which replaced the old district-superintendent structure in 2020 and gave senior police officers direct magisterial powers over preventive action. NyaySevak connects you with Bar-Council-verified Greater Noida criminal lawyers who appear at the District & Sessions Court in Surajpur, handle bail from the first remand onward, and know how the commissionerate system changes the timeline for detention, preventive notices, and FIR registration.",
    landscape: [
      "The commissionerate system matters more here than most people expect. Since January 2020 a Deputy Commissioner of Police exercises powers that previously sat with an Executive Magistrate, which means preventive proceedings under Sections 126 and 170 of the BNSS, externment, and Goonda Act notices move considerably faster. A lawyer who practises regularly at Surajpur will know which zone — Central, Noida, or Greater Noida — a matter sits in and who the decision-maker actually is.",
      "The offence mix is distinctive. Alongside ordinary IPC/BNS work, Greater Noida generates a high volume of economic-offence FIRs arising from stalled real-estate projects: cheating and criminal breach of trust complaints against builders, and prosecutions under the UP Gangsters Act where the police allege an organised pattern. Land-related criminal complaints — forcible dispossession, forged sale deeds, disputes over abadi and acquired land — are also common because of the scale of acquisition around GNIDA and YEIDA.",
      "For anticipatory bail, the route is the Sessions Court at Surajpur first and the Allahabad High Court after that. Uttar Pradesh is the state where anticipatory bail was restored comparatively recently (Section 438 CrPC was reinstated in UP in 2019, now Section 482 BNSS), so the local jurisprudence is younger and less settled than in Delhi — which makes counsel who follow Allahabad High Court rulings closely genuinely valuable.",
    ],
    courtsForThisMatter: [
      "Gautam Buddh Nagar District & Sessions Court, Surajpur (bail, sessions trials)",
      "Chief Judicial Magistrate & Magistrate Courts, Surajpur",
      "Allahabad High Court (anticipatory bail, quashing, criminal revision)",
      "Special Judge (SC/ST Act) and Special Courts, Gautam Buddh Nagar",
      "Juvenile Justice Board, Gautam Buddh Nagar",
      "Cyber Crime Police Station, Gautam Buddh Nagar Commissionerate",
    ],
    caseTypes: [
      { title: "Bail & Anticipatory Bail", desc: "Regular bail at Surajpur, anticipatory bail before Sessions and the Allahabad High Court under Section 482 BNSS." },
      { title: "Builder & Investor Fraud FIRs", desc: "Cheating and criminal breach of trust complaints arising from stalled Greater Noida and Noida Extension projects — from either side." },
      { title: "Land & Property Offences", desc: "Forcible dispossession, forged sale deeds, and disputes over abadi land and acquired holdings." },
      { title: "Cyber & Online Fraud", desc: "Investment, job, and UPI fraud handled by the commissionerate's cyber cell, plus Section 66 IT Act matters." },
      { title: "Preventive & Goonda Act Proceedings", desc: "Challenging notices and externment orders issued by DCPs under the commissionerate's magisterial powers." },
      { title: "Dowry & Domestic Cruelty Defence", desc: "Section 85 BNS (formerly 498A) matters, including quashing on settlement before the Allahabad High Court." },
      { title: "Motor Accident & Rash Driving", desc: "Prosecutions arising on the Yamuna and Noida–Greater Noida Expressways, often alongside a MACT claim." },
      { title: "Quashing & Criminal Revision", desc: "Allahabad High Court petitions to quash FIRs and challenge orders passed at Surajpur." },
    ],
    faqs: [
      {
        question: "Where is a Greater Noida criminal case heard?",
        answer:
          "At the Gautam Buddh Nagar District & Sessions Court complex in Surajpur, which serves both Noida and Greater Noida. Magistrate trials, sessions trials, and bail applications are all heard there; anticipatory bail can be moved before the Sessions Judge and then the Allahabad High Court.",
      },
      {
        question: "How do I get anticipatory bail in Greater Noida?",
        answer:
          "You apply under Section 482 BNSS before the Sessions Court at Surajpur, and if refused, before the Allahabad High Court. Uttar Pradesh only restored anticipatory bail in 2019, so the case law is still developing — a lawyer who tracks current Allahabad High Court rulings makes a real difference. Your first step through NyaySevak is a free case assessment.",
      },
      {
        question: "What does the police commissionerate change for my case?",
        answer:
          "Since 2020 senior police officers in Gautam Buddh Nagar hold magisterial powers that previously rested with Executive Magistrates. Preventive proceedings, externment, and Goonda Act notices therefore move faster and are decided within the police hierarchy, so challenges have to be framed and filed quickly.",
      },
      {
        question: "Can I file an FIR against a builder in Greater Noida?",
        answer:
          "Yes, where the facts disclose cheating or criminal breach of trust rather than a purely contractual failure. In practice most buyers run a criminal complaint alongside a UP RERA complaint or an NCLT petition, because the criminal case creates pressure while the civil forum delivers the remedy.",
      },
      {
        question: "Is a Greater Noida lawyer different from a Noida lawyer?",
        answer:
          "For criminal work the courthouse is the same — Surajpur. The practical difference is familiarity with the Greater Noida and Zone-III police stations and with the land and project disputes specific to the GNIDA and YEIDA areas.",
      },
    ],
    localNotes: [
      "Greater Noida and Noida share one district judiciary at Surajpur — there is no separate Greater Noida court complex.",
      "The Gautam Buddh Nagar Police Commissionerate gives DCPs magisterial powers, which accelerates preventive and externment proceedings.",
      "Appeals, quashing, and anticipatory bail beyond Sessions go to the Allahabad High Court, not to Delhi.",
    ],
  },

  "greater-noida__civil-law": {
    lead:
      "Most Greater Noida civil litigation traces back to a single relationship: an allotment from GNIDA or YEIDA. Plot cancellations, possession that never arrived, escalating lease rent, and transfer refusals all end up as suits or writs. NyaySevak connects you with Bar-Council-verified Greater Noida civil lawyers who litigate at the Gautam Buddh Nagar courts in Surajpur and know when a dispute belongs in a civil suit, in arbitration, or in a writ before the Allahabad High Court.",
    landscape: [
      "The forum question is the first real decision. A dispute with GNIDA or YEIDA over allotment, cancellation, or lease conditions is often a writ matter before the Allahabad High Court because the authorities are statutory bodies performing public functions — but a claim for specific performance or damages against a private builder or seller is an ordinary civil suit at Surajpur. Picking wrong costs months, and the limitation clock does not pause while you correct course.",
      "Land acquisition remains the deepest vein of civil work in the district. Thousands of holdings around Greater Noida and along the Yamuna Expressway were acquired for GNIDA and YEIDA, and litigation over enhanced compensation, lapse of acquisition, and the 10% developed-abadi plot entitlement has run for years through the Allahabad High Court and the Supreme Court. Farmer claims and buyer claims frequently collide on the same parcel.",
      "For commercial disputes above the specified value, the Commercial Court at Gautam Buddh Nagar applies the Commercial Courts Act timetable, including compulsory pre-institution mediation unless urgent interim relief is sought. Many allotment and construction contracts also carry arbitration clauses, which routes the dispute to a Section 11 application before the Allahabad High Court instead of a suit.",
    ],
    courtsForThisMatter: [
      "Civil Judge (Junior & Senior Division), Gautam Buddh Nagar at Surajpur",
      "District Judge, Gautam Buddh Nagar (appeals, arbitration applications)",
      "Commercial Court, Gautam Buddh Nagar",
      "Allahabad High Court (writs against GNIDA/YEIDA, second appeals, Section 11)",
      "Motor Accident Claims Tribunal (MACT), Gautam Buddh Nagar",
      "District Consumer Commission, Gautam Buddh Nagar",
    ],
    caseTypes: [
      { title: "GNIDA & YEIDA Allotment Disputes", desc: "Cancellation, restoration, extension charges, lease-rent escalation, and refusal to permit transfer." },
      { title: "Land Acquisition & Compensation", desc: "Enhanced compensation references, lapse claims, and the developed-abadi plot entitlement for displaced farmers." },
      { title: "Specific Performance & Injunctions", desc: "Enforcing agreements to sell plots and flats, and restraining third-party transfers pending suit." },
      { title: "Recovery & Summary Suits", desc: "Order XXXVII suits and Commercial Court claims for contractual dues owed to and by Greater Noida businesses." },
      { title: "Partition & Succession", desc: "Ancestral and abadi-land partition, succession certificates, and mutation disputes." },
      { title: "Arbitration Support", desc: "Section 9 interim relief, Section 11 appointments before the Allahabad High Court, and award enforcement." },
      { title: "Consumer Complaints", desc: "Deficiency-of-service claims against builders, banks, and service providers before the District Commission." },
      { title: "Motor Accident Claims", desc: "MACT compensation claims arising on the Noida–Greater Noida and Yamuna Expressways." },
    ],
    faqs: [
      {
        question: "Can I sue GNIDA or YEIDA in a civil court?",
        answer:
          "Sometimes, but a challenge to an allotment cancellation or a lease condition is usually a writ petition before the Allahabad High Court, because both are statutory authorities exercising public functions. Contractual damages claims can still be civil suits. Choosing the wrong forum wastes months, so the forum decision should be taken before anything is filed.",
      },
      {
        question: "Where are Greater Noida civil suits filed?",
        answer:
          "At the Gautam Buddh Nagar district courts in Surajpur — before the Civil Judge (Junior or Senior Division) depending on valuation, with appeals to the District Judge and second appeals to the Allahabad High Court. Above-value commercial disputes go to the Commercial Court at Gautam Buddh Nagar.",
      },
      {
        question: "What is the limitation period for a civil suit?",
        answer:
          "It depends on the claim — broadly three years for most contractual and money claims, and twelve years for possession of immovable property, running from when the right to sue accrued. Because limitation is often the first defence raised, the date your cause of action arose should be assessed early.",
      },
      {
        question: "Do I have to try mediation before filing?",
        answer:
          "For a commercial dispute above the specified value, yes — pre-institution mediation under the Commercial Courts Act is mandatory unless you are seeking urgent interim relief. Ordinary civil suits have no such precondition, though courts refer many matters to mediation afterwards.",
      },
      {
        question: "Am I still entitled to compensation for acquired farmland?",
        answer:
          "Possibly. Depending on when the acquisition and the award happened, and whether possession and compensation were completed, claims for enhanced compensation or for a lapse of acquisition may still be available, along with the developed-abadi plot entitlement. These outcomes turn on specific dates, so an assessment of your acquisition file comes first.",
      },
    ],
    localNotes: [
      "Disputes with GNIDA and YEIDA usually belong in a writ before the Allahabad High Court, not a civil suit at Surajpur.",
      "Land-acquisition litigation around the Yamuna Expressway is the district's largest single civil category.",
      "Commercial disputes above the specified value require pre-institution mediation unless urgent interim relief is sought.",
    ],
  },

  "greater-noida__family-matrimonial": {
    lead:
      "Greater Noida's population is overwhelmingly migrant — professionals, students, and industrial workers who moved here from across northern India. That shapes matrimonial litigation in one specific way: jurisdiction is contested far more often than in an established city. NyaySevak connects you with Bar-Council-verified Greater Noida divorce and family lawyers who file at the Family Court in Surajpur and handle transfer petitions, maintenance, and custody where the two spouses now live in different states.",
    landscape: [
      "Jurisdiction is the recurring first fight. Under the Hindu Marriage Act a petition can be filed where the marriage was solemnised, where the couple last resided together, or where the respondent resides — and in a city built on migration those are frequently three different places. Wives are additionally entitled to file for maintenance where they currently reside, and transfer petitions to the Supreme Court are common when one spouse returns to a home state.",
      "The Family Court at Surajpur handles divorce, judicial separation, restitution, custody, and guardianship for both Noida and Greater Noida. Mutual-consent divorce follows the two-motion structure under Section 13B of the Hindu Marriage Act, with a six-month gap between motions that the court may waive under the Supreme Court's Amardeep Singh guidance where separation has been long and settlement genuinely final.",
      "Domestic-violence proceedings under the Protection of Women from Domestic Violence Act run before the Magistrate at Surajpur, not the Family Court, and are often filed alongside a Section 85 BNS complaint and a maintenance claim under Section 144 BNSS. Because these tracks proceed in parallel before different judges, coordinating them — and settling all of them together — is where experienced local counsel earns their fee.",
    ],
    courtsForThisMatter: [
      "Family Court, Gautam Buddh Nagar at Surajpur",
      "Magistrate Courts, Surajpur (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Principal Judge, Family Court (custody and guardianship)",
      "Allahabad High Court (appeals, quashing on settlement)",
      "Supreme Court of India (transfer petitions between states)",
      "Mediation Centre, Gautam Buddh Nagar District Court",
    ],
    caseTypes: [
      { title: "Mutual Consent Divorce", desc: "Two-motion Section 13B petitions at Surajpur, with waiver of the six-month gap where the separation has been long." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, and adultery petitions, including defence of allegations made in a spouse's home state." },
      { title: "Maintenance & Interim Support", desc: "Section 144 BNSS, Section 24 HMA interim maintenance, and permanent alimony, applying the Rajnesh v. Neha disclosure framework." },
      { title: "Child Custody & Guardianship", desc: "Custody, visitation, and guardianship applications where the welfare of the child governs the outcome." },
      { title: "Domestic Violence Proceedings", desc: "Protection, residence, and monetary orders before the Magistrate at Surajpur." },
      { title: "Transfer Petitions", desc: "Supreme Court petitions to move proceedings when spouses live in different states." },
      { title: "Section 85 BNS Defence & Quashing", desc: "Defending dowry-cruelty allegations and quashing on settlement before the Allahabad High Court." },
      { title: "Settlement & Mediation", desc: "Comprehensive settlements that close divorce, maintenance, criminal, and DV proceedings together." },
    ],
    faqs: [
      {
        question: "Where do I file for divorce in Greater Noida?",
        answer:
          "At the Family Court in the Gautam Buddh Nagar district complex at Surajpur, which serves both Noida and Greater Noida. You can file where the marriage took place, where you last lived together as spouses, or where the respondent resides; a wife may additionally claim maintenance where she currently lives.",
      },
      {
        question: "How long does a mutual consent divorce take?",
        answer:
          "Ordinarily six to twelve months, because Section 13B requires two motions with a statutory gap between them. Where the parties have lived apart for a long period and the settlement is complete, the Family Court can waive the six-month gap, and matters have concluded in two to three months.",
      },
      {
        question: "My spouse filed in another state. What can I do?",
        answer:
          "You can move the Supreme Court for a transfer petition to bring the case to Gautam Buddh Nagar, or defend where it is filed. Transfer petitions are common in Greater Noida precisely because so many couples moved here from elsewhere. Which route is better depends on where the evidence and the children are.",
      },
      {
        question: "Can I get maintenance while the case is running?",
        answer:
          "Yes. Interim maintenance is available under Section 24 of the Hindu Marriage Act and under Section 144 BNSS, and the Supreme Court's Rajnesh v. Neha judgment requires both spouses to file affidavits of assets and income, which has made interim orders faster and better evidenced.",
      },
      {
        question: "Are domestic violence cases heard at the Family Court?",
        answer:
          "No — Domestic Violence Act proceedings are heard by the Magistrate at Surajpur, while divorce and custody are heard by the Family Court. Cases often run in parallel, which is why a settlement is usually negotiated to cover every proceeding at once.",
      },
    ],
    localNotes: [
      "Greater Noida's migrant population makes contested jurisdiction and Supreme Court transfer petitions unusually common.",
      "Divorce and custody sit with the Family Court at Surajpur; DV and Section 144 BNSS maintenance sit with the Magistrate.",
      "Waiver of the six-month gap in mutual-consent divorce is granted where separation is long and the settlement is complete.",
    ],
  },

  "greater-noida__property-real-estate": {
    lead:
      "Property is the reason most people need a lawyer in Greater Noida. The city was built on leasehold land allotted by GNIDA and YEIDA, sold on to developers, and pre-sold to buyers — so a single flat can carry a defective lease, an unpaid authority dues trail, and an incomplete tower all at once. NyaySevak connects you with Bar-Council-verified Greater Noida property lawyers who handle UP RERA complaints, authority disputes, and title diligence before you commit.",
    landscape: [
      "Understand the leasehold chain first. GNIDA and YEIDA allot land to a developer on a long lease against premium payable in instalments. If the developer defaults on those instalments, the authority withholds the completion certificate and the lease deed — which is why thousands of Greater Noida buyers have possession of a flat but no registered conveyance. Your remedy usually lies against the developer, but the obstacle sits with the authority, and effective counsel works both sides of that chain.",
      "UP RERA is the primary buyer forum. Registered projects can be taken to UP RERA for refund with interest, delay compensation, or directions to complete — with appeals to the UP Real Estate Appellate Tribunal. Where the developer is insolvent, the alternative is the NCLT: homebuyers are financial creditors under the IBC, though a minimum threshold of one hundred allottees or ten per cent of the class must join to trigger a petition. The Amrapali and Jaypee proceedings reshaped how Greater Noida buyers are treated in both forums.",
      "Land title in the periphery needs particular care. Villages absorbed into GNIDA and YEIDA hold abadi land, land subject to acquisition, and land under the UP Zamindari Abolition framework, and transactions in these categories carry real risk of a defective or unmarketable title. Independent verification of the lease chain, the authority's no-dues position, the sanctioned plan, and the RERA registration is worth far more than any remedy after the fact.",
    ],
    courtsForThisMatter: [
      "UP RERA (project complaints, refund, delay compensation)",
      "UP Real Estate Appellate Tribunal (RERA appeals)",
      "NCLT Allahabad Bench (insolvent developers; homebuyers as financial creditors)",
      "Allahabad High Court (writs against GNIDA and YEIDA)",
      "Civil & Commercial Courts, Gautam Buddh Nagar at Surajpur",
      "District Consumer Commission, Gautam Buddh Nagar",
    ],
    caseTypes: [
      { title: "UP RERA Complaints", desc: "Refund with interest, delay compensation, and completion directions against registered Greater Noida projects." },
      { title: "Builder-Buyer Disputes", desc: "Possession delays, changed layouts, area shortfalls, and one-sided allotment terms in Noida Extension projects." },
      { title: "Registry & Lease Deed Deadlock", desc: "Securing conveyance where the developer's unpaid authority dues are blocking registration." },
      { title: "GNIDA & YEIDA Disputes", desc: "Cancellations, extension charges, lease-rent escalation, and transfer permission refusals." },
      { title: "Title Verification & Due Diligence", desc: "Lease-chain, encumbrance, sanctioned-plan, and RERA-registration checks before you buy." },
      { title: "Land Acquisition Claims", desc: "Enhanced compensation and developed-abadi plot entitlements for displaced landowners." },
      { title: "NCLT Homebuyer Claims", desc: "Insolvency petitions and claim filing where a Greater Noida developer has collapsed." },
      { title: "Tenancy & Commercial Leasing", desc: "Lease drafting, eviction, and rent recovery for residential and industrial premises." },
    ],
    faqs: [
      {
        question: "My Greater Noida flat is ready but the registry is stuck. Why?",
        answer:
          "Almost always because the developer has not paid its land-premium instalments to GNIDA or YEIDA, so the authority is withholding the completion certificate and the lease deed. The claim runs against the developer while the obstacle sits with the authority, which is why these matters are usually pursued in UP RERA and by writ in parallel.",
      },
      {
        question: "Can I get a refund from a delayed Greater Noida project?",
        answer:
          "Yes, if the project is RERA-registered. UP RERA can order a refund of your money with interest, or compensation for delay if you would rather wait for possession. Appeals go to the UP Real Estate Appellate Tribunal. Which remedy to elect is a strategic choice and should be made before you file.",
      },
      {
        question: "What if the builder has gone into insolvency?",
        answer:
          "Homebuyers are financial creditors under the IBC and can pursue the developer before the NCLT Allahabad Bench, but a petition needs at least one hundred allottees or ten per cent of the class to join. Once insolvency begins, a moratorium halts other proceedings, so timing your move matters a great deal.",
      },
      {
        question: "Is buying land in a Greater Noida village safe?",
        answer:
          "It requires care. Peripheral land may be abadi land, land already acquired, or land restricted under the UP Zamindari Abolition framework, any of which can make the title unmarketable. Independent verification of the revenue records, the acquisition status, and the authority's position should always precede payment.",
      },
      {
        question: "How long does a UP RERA complaint take?",
        answer:
          "UP RERA is designed to decide complaints within about sixty days, though contested matters commonly run longer, and an appeal to the Appellate Tribunal adds further time. It remains considerably faster than a civil suit, which is why it is the default first forum for Greater Noida buyers.",
      },
    ],
    localNotes: [
      "Greater Noida land is leasehold from GNIDA or YEIDA — a developer's unpaid premium is the usual reason a registry is stuck.",
      "UP RERA is the fastest buyer remedy; NCLT is the route once a developer is insolvent, subject to the 100-allottee threshold.",
      "Peripheral village land can be abadi, acquired, or restricted — title diligence is essential before purchase.",
    ],
  },

  "greater-noida__corporate-business": {
    lead:
      "Greater Noida is an industrial and institutional city — Ecotech manufacturing zones, warehousing along the expressways, data centres, and one of the densest concentrations of private universities in the NCR. NyaySevak connects you with Bar-Council-verified Greater Noida corporate lawyers for incorporation, commercial contracts, labour compliance, and recovery, with insolvency and company matters taken to the NCLT Allahabad Bench that has jurisdiction over Uttar Pradesh.",
    landscape: [
      "The jurisdictional fact that catches most Greater Noida businesses out is the NCLT bench. Because the company's registered office sits in Uttar Pradesh, insolvency petitions, oppression and mismanagement claims, and scheme approvals go to the NCLT Allahabad Bench — not to the New Delhi benches, even though the business may operate entirely within the NCR and its counterparties may all be in Delhi or Gurgaon. That changes travel, timelines, and counsel selection.",
      "Recovery work is shaped by the industrial base. For a company debtor, an IBC petition above the one-crore default threshold remains the strongest lever, though the process is now slower and the Section 12A withdrawal route often ends matters early. Below that threshold the practical tools are a Section 138 cheque-bounce prosecution at Surajpur, an Order XXXVII summary suit, and — for registered MSMEs — the Samadhaan route to the Facilitation Council, which carries statutory interest and a compulsory conciliation-then-arbitration structure.",
      "Labour and land compliance both bite here. Industrial units in the Ecotech and Surajpur belts deal with contract-labour registration, factory licensing, and disputes before the Labour Court and Industrial Tribunal, while any expansion runs into the GNIDA and YEIDA lease conditions governing permitted use, sub-letting, and transfer. A change of business activity on an industrial plot without authority approval is a common and expensive mistake.",
    ],
    courtsForThisMatter: [
      "NCLT Allahabad Bench (insolvency, oppression and mismanagement, schemes)",
      "Commercial Court, Gautam Buddh Nagar",
      "MSME Facilitation Council, Uttar Pradesh (Samadhaan claims)",
      "Labour Court & Industrial Tribunal, Gautam Buddh Nagar",
      "Magistrate Courts, Surajpur (Section 138 NI Act prosecutions)",
      "Allahabad High Court (writs, Section 11 arbitration appointments)",
    ],
    caseTypes: [
      { title: "Company & LLP Incorporation", desc: "Private limited and LLP formation, registered-office compliance, and ongoing ROC filings." },
      { title: "Commercial Contracts", desc: "Manufacturing, supply, warehousing, and distribution agreements drafted for the local industrial base." },
      { title: "Debt Recovery", desc: "IBC petitions, Order XXXVII summary suits, Commercial Court claims, and cheque-bounce prosecutions." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery before the Facilitation Council with statutory interest for registered MSMEs." },
      { title: "Labour & Industrial Compliance", desc: "Contract-labour registration, factory licensing, standing orders, and disputes before the Industrial Tribunal." },
      { title: "Authority Lease Compliance", desc: "Permitted-use, sub-letting, transfer, and time-extension issues on GNIDA and YEIDA industrial plots." },
      { title: "Shareholder & Partner Disputes", desc: "Oppression and mismanagement petitions and founder exits before the NCLT Allahabad Bench." },
      { title: "Arbitration", desc: "Drafting workable clauses, Section 9 interim relief, and enforcement of awards." },
    ],
    faqs: [
      {
        question: "Which NCLT bench covers Greater Noida?",
        answer:
          "The NCLT Allahabad Bench, because it has jurisdiction over companies with a registered office in Uttar Pradesh. This surprises many NCR businesses who assume the New Delhi benches apply — the registered office decides the bench, not where you trade.",
      },
      {
        question: "How do I recover money owed to my Greater Noida business?",
        answer:
          "It depends on the debtor and the amount. For a company owing above the one-crore default threshold, an IBC petition is the strongest lever; for a bounced cheque, a Section 138 complaint at Surajpur; for a clear debt, an Order XXXVII summary suit. If you are a registered MSME, the Samadhaan route adds statutory interest and is often faster.",
      },
      {
        question: "Can I register a company at a Greater Noida address?",
        answer:
          "Yes, provided the premises are permitted for that use under the GNIDA or YEIDA lease and you hold the ownership or tenancy proof the ROC requires. Using an industrial plot for an unapproved activity can put the lease itself at risk, so the lease conditions should be checked before you file.",
      },
      {
        question: "What labour compliance applies to a Greater Noida factory?",
        answer:
          "Typically factory licensing, contract-labour registration, provident fund and ESI registration, standing orders where applicable, and the statutory registers. Disputes go to the Labour Court or Industrial Tribunal at Gautam Buddh Nagar. Given the size of the local workforce, compliance audits are worth doing before a dispute arises.",
      },
      {
        question: "Does a commercial dispute need mediation first?",
        answer:
          "Yes — for a commercial dispute above the specified value, pre-institution mediation under the Commercial Courts Act is mandatory unless you are seeking urgent interim relief. Building that step into your timeline avoids having a suit returned at the threshold.",
      },
    ],
    localNotes: [
      "Insolvency and company petitions go to the NCLT Allahabad Bench because the registered office is in Uttar Pradesh.",
      "The MSME Samadhaan route carries statutory interest and is often the fastest recovery lever for registered small units.",
      "GNIDA and YEIDA industrial leases restrict permitted use, sub-letting, and transfer — check before expanding or converting.",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // SURAT — a diamond-and-textile SME economy. Two facts drive nearly all
  // local content: Gujarat is a prohibition state, and Surat's trade runs on
  // credit, which makes Section 138 and recovery work dominant.
  // ══════════════════════════════════════════════════════════════════════
  "surat__criminal-law": {
    lead:
      "Criminal practice in Surat is shaped by two things you will not find in most Indian cities: the Gujarat Prohibition Act, which makes liquor offences a routine part of the magistrate's list, and a diamond and textile trade that runs almost entirely on unsecured credit, which generates a steady stream of cheating and breach-of-trust prosecutions. NyaySevak connects you with Bar-Council-verified Surat criminal lawyers who appear before the District & Sessions Court and take bail and quashing to the Gujarat High Court.",
    landscape: [
      "Gujarat has prohibited the manufacture, sale, and consumption of liquor since 1960, and the Prohibition Act was substantially tightened in 2017 to make certain offences non-bailable with sentences running to ten years. Prosecutions under it are among the most common matters in Surat's magistrate courts, and the health-permit and possession provisions have their own body of Gujarat High Court case law that a lawyer outside the state simply will not know.",
      "Economic offences form the second major stream. Surat's diamond trade has historically operated on trust-based credit, and the angadia system moves large sums with minimal documentation, so defaults regularly surface as cheating and criminal breach of trust FIRs rather than purely civil claims. The textile markets generate a parallel flow of Section 138 cheque prosecutions, which occupy a substantial share of the magistrate courts' docket.",
      "For bail and anticipatory bail, applications go to the Sessions Court at Surat and then to the Gujarat High Court at Ahmedabad — Gujarat has a single seat with no bench in Surat, so High Court work means either travelling to Ahmedabad or briefing counsel there. That single-seat structure is a genuine practical consideration when planning the cost and timeline of a criminal defence.",
    ],
    courtsForThisMatter: [
      "Surat District & Sessions Court (sessions trials, bail, appeals)",
      "Chief Judicial Magistrate & Magistrate Courts, Surat",
      "Special Courts under the Gujarat Prohibition Act",
      "Gujarat High Court, Ahmedabad (anticipatory bail, quashing, revision)",
      "Special Court (NDPS, POCSO, SC/ST Act), Surat",
      "Juvenile Justice Board, Surat",
    ],
    caseTypes: [
      { title: "Bail & Anticipatory Bail", desc: "Regular bail before the Surat Sessions Court and anticipatory bail there and before the Gujarat High Court." },
      { title: "Gujarat Prohibition Act Defence", desc: "Possession, transport, and sale prosecutions under a statute unique to Gujarat, including health-permit issues." },
      { title: "Cheating & Breach of Trust", desc: "Diamond and textile trade defaults prosecuted as Section 318 and 316 BNS offences rather than civil claims." },
      { title: "Cheque Bounce Prosecutions", desc: "Section 138 NI Act complaints and defences arising from the city's credit-based trade." },
      { title: "Economic & Financial Offences", desc: "Angadia-related complaints, investment fraud, and matters before the Economic Offences Wing." },
      { title: "Cyber Crime", desc: "Online fraud, data theft, and IT Act offences investigated by the Surat cyber cell." },
      { title: "Dowry & Domestic Cruelty Defence", desc: "Section 85 BNS matters, including quashing on settlement before the Gujarat High Court." },
      { title: "Quashing & Criminal Revision", desc: "Gujarat High Court petitions to quash FIRs and challenge orders passed at Surat." },
    ],
    faqs: [
      {
        question: "Is a liquor case serious in Surat?",
        answer:
          "It can be. Gujarat has been a prohibition state since 1960, and the 2017 amendments made several offences non-bailable with sentences of up to ten years. Even possession matters carry real consequences, and the defences turn on Gujarat-specific provisions such as the health permit, so local counsel matters more here than in most states.",
      },
      {
        question: "Where do I apply for anticipatory bail in Surat?",
        answer:
          "Before the Sessions Court at Surat first, and then before the Gujarat High Court at Ahmedabad if refused. Gujarat has a single High Court seat with no bench at Surat, so High Court work is conducted at Ahmedabad. Your first step through NyaySevak is a free case assessment.",
      },
      {
        question: "Can a trade default become a criminal case?",
        answer:
          "It can where the facts suggest dishonest intention at the outset rather than a business failure. Surat's diamond and textile trade runs on credit with limited documentation, so defaults often surface as cheating or criminal breach of trust FIRs. Whether the complaint discloses an offence or is essentially a civil dispute is exactly what a quashing petition tests.",
      },
      {
        question: "What is the angadia system and why does it matter legally?",
        answer:
          "Angadias are traditional courier-financiers who move cash and valuables between traders on trust with minimal paperwork. When a consignment or payment goes missing the absence of documentation makes proof difficult, which is why these disputes frequently escalate into criminal complaints and require careful evidence work.",
      },
      {
        question: "How long does a criminal trial take in Surat?",
        answer:
          "It varies widely. Summary matters such as prohibition prosecutions can conclude in months, while sessions trials often run for years. Section 138 cheque cases follow the Supreme Court's summary-trial framework and a large proportion settle at Lok Adalat, which is usually the fastest route to an actual resolution.",
      },
    ],
    localNotes: [
      "Gujarat is a prohibition state — liquor offences are routine in Surat's courts and carry serious consequences after the 2017 amendments.",
      "The Gujarat High Court sits only at Ahmedabad, so all Surat High Court work is conducted there.",
      "Credit-based diamond and textile trading turns many commercial defaults into cheating and breach-of-trust prosecutions.",
    ],
  },

  "surat__civil-law": {
    lead:
      "Surat's civil docket is a trade docket. A city of diamond units, textile mills, and market shops running on unsecured credit produces recovery suits, partnership dissolutions, and market-shop tenancy disputes in volume. NyaySevak connects you with Bar-Council-verified Surat civil lawyers who use Order XXXVII summary suits and the Commercial Court to move money claims quickly, and who take second appeals and writs to the Gujarat High Court at Ahmedabad.",
    landscape: [
      "For a documented debt, the summary suit under Order XXXVII of the Civil Procedure Code is the workhorse remedy in Surat. It shifts the burden to the defendant, who must obtain leave to defend rather than simply filing a written statement, which strips out much of the delay of an ordinary suit. Above the specified value, the Commercial Court at Surat applies the Commercial Courts Act timetable with compulsory pre-institution mediation unless urgent interim relief is sought.",
      "Partnership and family-firm disputes are unusually common because so much of Surat's economy is organised as proprietorships and partnerships rather than companies. Dissolution suits, accounts and profit-sharing claims, and disputes over the use of a firm name recur constantly, and an unregistered partnership faces a bar on suing to enforce contractual rights under Section 69 of the Partnership Act — a defence that ends many claims at the threshold.",
      "Tenancy in the textile markets has its own regime. Shop tenancies are governed by the Gujarat Rent Act, which restricts the grounds on which a landlord can evict and channels disputes to the designated Small Causes jurisdiction rather than an ordinary civil suit. Market-shop rights change hands informally and at high value, so possession, sub-letting, and pagdi-style transfer disputes are frequent and hard-fought.",
    ],
    courtsForThisMatter: [
      "Civil Judge (Junior & Senior Division), Surat",
      "Principal District Judge, Surat (appeals, arbitration applications)",
      "Commercial Court, Surat",
      "Small Causes jurisdiction, Surat (Gujarat Rent Act matters)",
      "Gujarat High Court, Ahmedabad (second appeals, writs, Section 11)",
      "District Consumer Commission, Surat",
    ],
    caseTypes: [
      { title: "Summary Suits (Order XXXVII)", desc: "Fast-track recovery on cheques, invoices, and written agreements where the defendant needs leave to defend." },
      { title: "Commercial Court Claims", desc: "Above-value trade disputes under the Commercial Courts Act timetable, after pre-institution mediation." },
      { title: "Partnership & Firm Disputes", desc: "Dissolution, accounts, profit-sharing, and firm-name disputes across Surat's proprietor-partnership economy." },
      { title: "Market Shop Tenancy", desc: "Eviction, sub-letting, standard-rent, and transfer disputes under the Gujarat Rent Act." },
      { title: "Specific Performance", desc: "Enforcing agreements to sell shops, units, and residential property, with injunctions against third-party sale." },
      { title: "Partition & Succession", desc: "Family property partition, succession certificates, and disputes over inherited business assets." },
      { title: "Arbitration Support", desc: "Section 9 interim relief, Section 11 appointments at the Gujarat High Court, and award enforcement." },
      { title: "Consumer Complaints", desc: "Deficiency-of-service claims against builders, banks, insurers, and service providers." },
    ],
    faqs: [
      {
        question: "What is the fastest way to recover a business debt in Surat?",
        answer:
          "For a documented debt, an Order XXXVII summary suit is usually fastest, because the defendant must obtain the court's leave before being allowed to defend at all. Where a cheque has bounced, a Section 138 prosecution is often run alongside it, since the criminal case creates settlement pressure while the suit delivers the decree.",
      },
      {
        question: "Can I sue if my partnership firm is not registered?",
        answer:
          "Generally not for enforcing a contractual right — Section 69 of the Partnership Act bars an unregistered firm and its partners from suing on a contract, though a suit for dissolution and accounts is an exception. This defence defeats a great many Surat claims at the outset, so registration status should be checked before filing.",
      },
      {
        question: "Which law governs my textile market shop tenancy?",
        answer:
          "The Gujarat Rent Act, which limits the grounds for eviction and channels disputes to the designated Small Causes jurisdiction rather than an ordinary civil suit. Because market-shop rights are transferred informally at high value, documenting the arrangement properly matters a great deal.",
      },
      {
        question: "Do I have to mediate before filing a commercial suit?",
        answer:
          "Yes — pre-institution mediation is mandatory for commercial disputes above the specified value unless you are seeking urgent interim relief. Ordinary civil suits do not require it, although courts frequently refer them to mediation later.",
      },
      {
        question: "How long do I have to file a civil suit?",
        answer:
          "Broadly three years for most money and contract claims and twelve years for possession of immovable property, running from when the cause of action arose. Limitation is usually the first defence raised, so the date the claim accrued should be assessed before anything else.",
      },
    ],
    localNotes: [
      "Order XXXVII summary suits are the default recovery tool in a credit-driven trading economy.",
      "An unregistered partnership cannot sue to enforce a contract under Section 69 of the Partnership Act — check registration first.",
      "Textile-market shop tenancies fall under the Gujarat Rent Act, not ordinary civil suit procedure.",
    ],
  },

  "surat__family-matrimonial": {
    lead:
      "Surat's workforce came from somewhere else — Saurashtra, Odisha, Bihar, and eastern Uttar Pradesh — and matrimonial litigation reflects that. Marriages solemnised in one state break down in another, which turns jurisdiction and transfer into live issues in a large share of cases. NyaySevak connects you with Bar-Council-verified Surat divorce and family lawyers who file at the Family Court in Surat and handle maintenance, custody, and cross-state proceedings.",
    landscape: [
      "Under the Hindu Marriage Act a petition may be filed where the marriage was solemnised, where the couple last resided together, or where the respondent resides. For a Surat migrant family those are often three different states, and a wife may additionally claim maintenance where she currently lives. Transfer petitions to the Supreme Court are correspondingly common when one spouse returns to a home district.",
      "The Family Court at Surat hears divorce, judicial separation, restitution, custody, and guardianship. Mutual-consent divorce runs on the two-motion structure under Section 13B with a six-month statutory gap, which the court may waive following the Supreme Court's guidance in Amardeep Singh where the parties have long been separated and the settlement is genuinely complete and final.",
      "Domestic-violence proceedings under the Protection of Women from Domestic Violence Act are heard by the Magistrate rather than the Family Court, and are commonly filed alongside a Section 85 BNS complaint and a maintenance claim under Section 144 BNSS. Because these run in parallel before different judges, an effective settlement has to be structured to close all of them together, including any quashing petition before the Gujarat High Court.",
    ],
    courtsForThisMatter: [
      "Family Court, Surat (divorce, custody, guardianship, maintenance)",
      "Magistrate Courts, Surat (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Principal District Judge, Surat (appeals from Family Court orders)",
      "Gujarat High Court, Ahmedabad (appeals, quashing on settlement)",
      "Supreme Court of India (transfer petitions between states)",
      "Mediation Centre, Surat District Court",
    ],
    caseTypes: [
      { title: "Mutual Consent Divorce", desc: "Two-motion Section 13B petitions at the Surat Family Court, with waiver of the six-month gap where appropriate." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, and adultery petitions, including defence of proceedings filed in a spouse's home state." },
      { title: "Maintenance & Alimony", desc: "Section 144 BNSS, Section 24 HMA interim maintenance, and permanent alimony under the Rajnesh v. Neha framework." },
      { title: "Child Custody & Guardianship", desc: "Custody, visitation, and guardianship applications decided on the welfare of the child." },
      { title: "Domestic Violence Proceedings", desc: "Protection, residence, and monetary orders before the Magistrate at Surat." },
      { title: "Transfer Petitions", desc: "Supreme Court petitions where spouses have returned to different home states." },
      { title: "Section 85 BNS Defence & Quashing", desc: "Defending dowry-cruelty allegations and quashing on settlement at the Gujarat High Court." },
      { title: "Muslim & Christian Personal Law", desc: "Divorce, mehr, and maintenance matters under the personal law applicable to the parties." },
    ],
    faqs: [
      {
        question: "Where can I file for divorce if I moved to Surat for work?",
        answer:
          "You can file where the marriage was solemnised, where you last lived together as spouses, or where the respondent resides — so Surat qualifies if you last lived together here or if your spouse is here. A wife may additionally claim maintenance where she currently resides, which often creates a choice of forum worth thinking through.",
      },
      {
        question: "How long does a mutual consent divorce take in Surat?",
        answer:
          "Usually six to twelve months because of the two-motion structure and the statutory gap between motions. Where the separation has been long and the settlement is complete, the Family Court can waive the six-month gap and the matter can conclude in two to three months.",
      },
      {
        question: "My spouse filed a case in our home state. What now?",
        answer:
          "You can either defend there or move the Supreme Court for a transfer petition to bring the proceedings to Surat. This is a frequent issue in Surat given how much of the workforce migrated here. The better route depends on where the children, the evidence, and the witnesses actually are.",
      },
      {
        question: "Can I claim maintenance while the divorce is pending?",
        answer:
          "Yes — interim maintenance is available under Section 24 of the Hindu Marriage Act and under Section 144 BNSS. Following Rajnesh v. Neha both spouses must file affidavits of assets and income, which has made interim orders better evidenced and generally faster.",
      },
      {
        question: "Is a domestic violence case heard by the Family Court?",
        answer:
          "No. Domestic Violence Act proceedings go before the Magistrate, while divorce and custody are heard by the Family Court, and a criminal complaint would be a third track. Settlements are therefore negotiated to resolve every proceeding at once rather than one at a time.",
      },
    ],
    localNotes: [
      "Surat's migrant workforce makes cross-state jurisdiction and Supreme Court transfer petitions a routine feature of matrimonial work.",
      "Divorce and custody sit with the Family Court; DV Act and Section 144 BNSS maintenance sit with the Magistrate.",
      "High Court appeals and quashing are conducted at Ahmedabad, as Gujarat has no High Court bench at Surat.",
    ],
  },

  "surat__property-real-estate": {
    lead:
      "Surat's property market is governed by two things outsiders rarely account for: the Town Planning Scheme mechanism that Gujarat uses instead of conventional land acquisition, and the Gujarat Ownership Flats Act, which sits alongside RERA. NyaySevak connects you with Bar-Council-verified Surat property lawyers for title verification, GujRERA complaints, redevelopment agreements, and market-shop transactions across Adajan, Vesu, Katargam, and the Varachha diamond belt.",
    landscape: [
      "The Town Planning Scheme is Gujarat's distinctive land mechanism. Rather than acquiring land outright, the authority pools holdings in an area, reserves part for roads and public amenities, and returns a reconstituted smaller plot — the final plot — to each owner. Disputes over the final-plot allotment, the betterment charge levied, and the gap between the draft and final scheme are a recurring category of Surat property litigation, and they are handled by the Town Planning Officer and the appellate machinery rather than by an ordinary civil suit.",
      "For flat buyers, GujRERA is the primary forum for registered projects, offering refund with interest, delay compensation, or completion directions, with appeals to the Gujarat Real Estate Appellate Tribunal. The older Gujarat Ownership Flats Act continues to matter for promoter obligations and for the formation and conveyance duties owed to a co-operative housing society, particularly in the many Surat buildings that predate RERA.",
      "Title diligence in Surat has local specifics worth insisting on. The revenue records distinguish old survey numbers from TP final plot numbers, and agricultural land requires attention to the restrictions on purchase by non-agriculturists and to new-tenure land, which cannot be transferred without prior permission and a premium. Buying new-tenure land without that clearance is one of the most common and most expensive errors in the Gujarat market.",
    ],
    courtsForThisMatter: [
      "GujRERA (Gujarat Real Estate Regulatory Authority), Gandhinagar",
      "Gujarat Real Estate Appellate Tribunal (RERA appeals)",
      "Town Planning Officer & appellate authorities (TP Scheme disputes)",
      "Civil & Commercial Courts, Surat (title, specific performance, injunctions)",
      "Gujarat High Court, Ahmedabad (writs against planning and revenue authorities)",
      "District Consumer Commission, Surat",
    ],
    caseTypes: [
      { title: "Title Verification & Due Diligence", desc: "Revenue-record, 7/12 extract, TP final-plot, encumbrance, and RERA-registration checks before purchase." },
      { title: "GujRERA Complaints", desc: "Refund with interest, delay compensation, and completion directions against registered Surat projects." },
      { title: "Town Planning Scheme Disputes", desc: "Final-plot allotment, betterment charges, and draft-versus-final scheme objections." },
      { title: "New-Tenure & Agricultural Land", desc: "Permission and premium requirements for restricted-tenure land and non-agriculturist purchase limits." },
      { title: "Society & Redevelopment", desc: "Co-operative housing society formation, conveyance, and redevelopment agreements." },
      { title: "Market Shop Transactions", desc: "Sale, transfer, and tenancy of textile-market and diamond-market commercial units." },
      { title: "Specific Performance & Injunctions", desc: "Enforcing agreements to sell and restraining third-party transfers pending suit." },
      { title: "Partition & Inherited Property", desc: "Family partition of land and buildings, and resolution of mutation and succession entries." },
    ],
    faqs: [
      {
        question: "What is a Town Planning Scheme and how does it affect my land?",
        answer:
          "It is Gujarat's alternative to conventional land acquisition. The authority pools land in an area, reserves part for roads and amenities, and returns a smaller reconstituted final plot to each owner, usually with a betterment charge. Disputes over the final plot you receive or the charge levied go to the Town Planning Officer and the appellate machinery, not to a civil court.",
      },
      {
        question: "What is new-tenure land?",
        answer:
          "Land held on restricted tenure — typically granted to a tenant or an allottee — which cannot be sold without prior government permission and payment of a premium. A sale without that clearance can be invalid, and buying new-tenure land unknowingly is one of the costliest mistakes in the Gujarat property market.",
      },
      {
        question: "Can I complain to GujRERA about a delayed Surat project?",
        answer:
          "Yes, if the project is RERA-registered. GujRERA can order a refund with interest, compensation for delay, or directions to complete, with appeals going to the Gujarat Real Estate Appellate Tribunal. For older buildings that predate RERA, the Gujarat Ownership Flats Act may still govern the promoter's obligations.",
      },
      {
        question: "Can a non-agriculturist buy farmland in Gujarat?",
        answer:
          "Restrictions apply, and the position depends on the category of land, the buyer's status, and whether conversion for non-agricultural use has been obtained. Because the consequences of getting it wrong include an unenforceable purchase, this should be verified before any payment rather than after.",
      },
      {
        question: "What should I check before buying a Surat flat?",
        answer:
          "The title chain and revenue records, the TP final-plot position, the sanctioned plan and building-use permission, the RERA registration and its declared completion date, any encumbrance or mortgage, and the society's conveyance status. A short diligence exercise is far cheaper than litigation afterwards.",
      },
    ],
    localNotes: [
      "Gujarat uses Town Planning Schemes rather than conventional acquisition — final-plot and betterment-charge disputes are distinctive to the state.",
      "New-tenure land cannot be transferred without prior permission and premium; verify tenure before paying.",
      "GujRERA governs registered projects, while the Gujarat Ownership Flats Act still applies to older promoter obligations.",
    ],
  },

  "surat__corporate-business": {
    lead:
      "Surat runs on small and medium enterprise: diamond-cutting units, man-made-fibre mills, embroidery and processing houses, and the trading firms around them. Most are proprietorships and partnerships rather than companies, which changes almost every legal question — from how you recover money to what happens when a partner leaves. NyaySevak connects you with Bar-Council-verified Surat corporate lawyers for incorporation, contracts, MSME recovery, and NCLT matters at the Ahmedabad Bench.",
    landscape: [
      "The MSME Samadhaan route is the single most useful recovery tool for a registered Surat unit. A buyer who fails to pay within forty-five days becomes liable for compound interest at three times the RBI bank rate, and the Facilitation Council conducts conciliation followed by arbitration — a statutory structure that many larger buyers settle rather than contest. Registration on the Udyam portal before the transaction is what unlocks it, which is why so many eligible Surat units miss out.",
      "Where a debtor is a company, insolvency petitions go to the NCLT Ahmedabad Bench, which covers Gujarat. The one-crore default threshold puts the IBC out of reach for most Surat trade debts, so the practical mix remains Section 138 prosecutions, Order XXXVII summary suits, and Samadhaan claims. For company debtors below the threshold, a Section 271 winding-up petition or a Commercial Court suit are the realistic alternatives.",
      "Business structure drives risk in ways many Surat proprietors underestimate. A partnership carries unlimited personal liability and, if unregistered, cannot sue to enforce a contract under Section 69 of the Partnership Act. Conversion to an LLP or a private limited company changes both, and also changes the forum for internal disputes — from a civil suit for dissolution and accounts to an oppression and mismanagement petition before the NCLT.",
    ],
    courtsForThisMatter: [
      "NCLT Ahmedabad Bench (insolvency, oppression and mismanagement, schemes)",
      "MSME Facilitation Council, Gujarat (Samadhaan delayed-payment claims)",
      "Commercial Court, Surat",
      "Magistrate Courts, Surat (Section 138 NI Act prosecutions)",
      "Labour Court & Industrial Tribunal, Surat",
      "Gujarat High Court, Ahmedabad (writs, Section 11 arbitration appointments)",
    ],
    caseTypes: [
      { title: "Company & LLP Incorporation", desc: "Private limited and LLP formation, and conversion from proprietorship or partnership." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery before the Facilitation Council with statutory compound interest." },
      { title: "Partnership Documentation", desc: "Partnership deeds, registration, admission and retirement of partners, and dissolution terms." },
      { title: "Trade Contracts", desc: "Supply, job-work, processing, and distribution agreements for diamond and textile businesses." },
      { title: "Debt Recovery", desc: "Section 138 prosecutions, Order XXXVII summary suits, Commercial Court claims, and IBC petitions where available." },
      { title: "GST & Indirect Tax Disputes", desc: "Assessment, input-credit, and refund disputes common to exporters and processing units." },
      { title: "Labour Compliance", desc: "Factory licensing, contract labour, provident fund and ESI, and Industrial Tribunal disputes." },
      { title: "Shareholder & Partner Disputes", desc: "Oppression and mismanagement before the NCLT Ahmedabad Bench, and dissolution suits for firms." },
    ],
    faqs: [
      {
        question: "How does the MSME Samadhaan route work?",
        answer:
          "If you are registered on the Udyam portal and a buyer has not paid within forty-five days, you can file before the MSME Facilitation Council, which conducts conciliation and then arbitration. The buyer becomes liable for compound interest at three times the RBI bank rate. Registration must generally predate the transaction, so registering early is what makes the remedy available.",
      },
      {
        question: "Which NCLT bench covers Surat?",
        answer:
          "The NCLT Ahmedabad Bench, which has jurisdiction over Gujarat. Insolvency petitions, oppression and mismanagement claims, and scheme approvals for Surat companies are filed and heard there.",
      },
      {
        question: "Should I convert my partnership into a company?",
        answer:
          "It depends on scale and risk. A partnership carries unlimited personal liability and, if unregistered, cannot sue to enforce a contract. An LLP or private limited company limits liability and improves access to credit, but adds compliance. For a growing Surat unit taking on larger buyers, conversion is usually worth modelling properly.",
      },
      {
        question: "What is the fastest way to recover a trade debt in Surat?",
        answer:
          "For a registered MSME, the Samadhaan route is often fastest and carries statutory interest. Otherwise a Section 138 prosecution on a bounced cheque and an Order XXXVII summary suit are commonly run together — the criminal case creates pressure while the suit delivers the decree.",
      },
      {
        question: "Can I file an IBC petition for an unpaid invoice?",
        answer:
          "Only if the default is one crore rupees or more, which puts the IBC beyond most Surat trade debts. Below that threshold the practical routes are Samadhaan, a summary suit, a Commercial Court claim, or a cheque-bounce prosecution.",
      },
    ],
    localNotes: [
      "Udyam registration before the transaction is what unlocks the MSME Samadhaan remedy and its statutory compound interest.",
      "Insolvency and company petitions for Surat businesses go to the NCLT Ahmedabad Bench.",
      "Most Surat businesses are partnerships or proprietorships — unlimited liability and the Section 69 bar are the two biggest structural risks.",
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // VADODARA — Gujarat's organised-sector industrial city. The distinguishing
  // feature against Surat and Rajkot is the large permanent workforce, which
  // makes industrial and employment law central rather than peripheral.
  // ══════════════════════════════════════════════════════════════════════
  "vadodara__criminal-law": {
    lead:
      "Vadodara combines a city police commissionerate with one of Gujarat's densest industrial belts, and both shape its criminal docket. Alongside ordinary offences and the Gujarat Prohibition Act prosecutions common across the state, Vadodara sees a steady flow of industrial-accident and environmental prosecutions that most cities do not. NyaySevak connects you with Bar-Council-verified Vadodara criminal lawyers for bail, defence, and quashing before the Gujarat High Court.",
    landscape: [
      "Prohibition work is a constant. Gujarat has banned the manufacture, sale, and consumption of liquor since 1960, and the 2017 amendments made several offences non-bailable with sentences reaching ten years. These prosecutions occupy a large share of the magistrate courts' list in Vadodara as they do across Gujarat, and the defences turn on state-specific provisions such as the health permit that lawyers from outside Gujarat will not have handled.",
      "Vadodara's refineries, petrochemical complexes, and engineering plants generate a category of prosecution that is genuinely local: proceedings under the Factories Act following workplace accidents, and prosecutions under the Environment Protection Act and the Water and Air Acts brought by the Gujarat Pollution Control Board. These are usually directed at the occupier and the manager personally, not only at the company, so senior plant personnel frequently need their own defence.",
      "Bail follows the standard Gujarat structure: the Sessions Court at Vadodara first, then the Gujarat High Court at Ahmedabad, which is the state's only seat. For companies and their officers facing regulatory prosecution, the more valuable work is often earlier — responding properly to a show-cause notice or an inspection report before it becomes a complaint, since a well-handled response can prevent prosecution entirely.",
    ],
    courtsForThisMatter: [
      "Vadodara District & Sessions Court (sessions trials, bail, appeals)",
      "Chief Judicial Magistrate & Magistrate Courts, Vadodara",
      "Special Courts under the Gujarat Prohibition Act",
      "Gujarat High Court, Ahmedabad (anticipatory bail, quashing, revision)",
      "Special Court (NDPS, POCSO, SC/ST Act), Vadodara",
      "National Green Tribunal, Pune Bench (environmental matters from Gujarat)",
    ],
    caseTypes: [
      { title: "Bail & Anticipatory Bail", desc: "Regular bail before the Vadodara Sessions Court and anticipatory bail there and at the Gujarat High Court." },
      { title: "Gujarat Prohibition Act Defence", desc: "Possession, transport, and sale prosecutions under Gujarat's liquor regime, including health-permit defences." },
      { title: "Factories Act Prosecutions", desc: "Defence of occupiers and managers after workplace accidents at Vadodara's industrial units." },
      { title: "Environmental Prosecutions", desc: "Gujarat Pollution Control Board complaints and Environment Protection Act proceedings against plants and their officers." },
      { title: "Economic & Corporate Offences", desc: "Cheating, breach of trust, and Economic Offences Wing matters involving businesses and their directors." },
      { title: "Cyber Crime", desc: "Online fraud, data theft, and IT Act offences investigated by the Vadodara cyber cell." },
      { title: "Dowry & Domestic Cruelty Defence", desc: "Section 85 BNS matters, including quashing on settlement before the Gujarat High Court." },
      { title: "Quashing & Criminal Revision", desc: "Gujarat High Court petitions challenging FIRs, complaints, and orders passed at Vadodara." },
    ],
    faqs: [
      {
        question: "Can a company director be prosecuted personally in Vadodara?",
        answer:
          "Yes. Under the Factories Act the occupier and manager carry personal liability for safety breaches, and environmental statutes similarly reach the persons in charge of the business. This is why senior plant personnel at Vadodara's industrial units often need defence in their own name and not only through the company.",
      },
      {
        question: "Where do I apply for anticipatory bail in Vadodara?",
        answer:
          "Before the Sessions Court at Vadodara first, and then the Gujarat High Court at Ahmedabad if refused. Gujarat has a single High Court seat, so all High Court work is conducted at Ahmedabad. Your first step through NyaySevak is a free case assessment.",
      },
      {
        question: "How serious is a liquor offence in Gujarat?",
        answer:
          "More serious than most people outside the state expect. Gujarat has been dry since 1960 and the 2017 amendments made several offences non-bailable with sentences of up to ten years. Even possession matters carry consequences, and the available defences are specific to Gujarat law.",
      },
      {
        question: "What should we do after a workplace accident at our plant?",
        answer:
          "Secure the statutory notifications and preserve the site records immediately, because the inspection report largely determines what follows. Legal advice at the show-cause and inspection stage is far more valuable than after a complaint is filed, since a well-documented response can prevent prosecution altogether.",
      },
      {
        question: "Where are environmental cases from Vadodara heard?",
        answer:
          "Criminal prosecutions under the environmental statutes go to the local magistrate, while applications under the National Green Tribunal Act from Gujarat are heard by the NGT's Pune Bench. Regulatory action by the Gujarat Pollution Control Board, such as closure directions, is challenged before the appellate authority and by writ at the Gujarat High Court.",
      },
    ],
    localNotes: [
      "Vadodara's industrial base makes Factories Act and pollution-control prosecutions a distinctive part of the local criminal docket.",
      "Occupiers and managers face personal liability, so plant leadership often needs defence separate from the company.",
      "All Gujarat High Court work is at Ahmedabad — there is no bench at Vadodara.",
    ],
  },

  "vadodara__civil-law": {
    lead:
      "Vadodara's civil litigation is contract-heavy in a way that reflects its economy: long-term supply and job-work relationships with refineries and engineering majors, industrial land held on varying tenures, and arbitration clauses in almost every significant agreement. NyaySevak connects you with Bar-Council-verified Vadodara civil lawyers who handle Commercial Court claims, arbitration, and recovery, and who take second appeals and writs to the Gujarat High Court.",
    landscape: [
      "A large share of Vadodara's commercial disputes never reach a civil court, because the underlying contracts carry arbitration clauses. That routes matters to a Section 11 appointment application before the Gujarat High Court, then to an arbitral tribunal, with the courts retained for Section 9 interim relief and for challenge and enforcement under Sections 34 and 36. Knowing when to invoke arbitration and when the clause is defective enough to be bypassed is often the most consequential early decision.",
      "Where a suit is the right vehicle, the Commercial Court at Vadodara applies the Commercial Courts Act timetable for above-value disputes, with pre-institution mediation mandatory unless urgent interim relief is sought. For documented debts, the Order XXXVII summary suit remains the fastest civil route because the defendant must obtain leave to defend rather than simply filing a written statement.",
      "Land and tenure questions recur because industrial expansion keeps running into them. Gujarat's Town Planning Scheme mechanism reconstitutes holdings into final plots with betterment charges levied, new-tenure land cannot be transferred without prior permission and premium, and agricultural land carries restrictions on purchase and on non-agricultural use. Vadodara's periphery contains all three categories, and a plant expansion that ignores them stalls at the permission stage.",
    ],
    courtsForThisMatter: [
      "Civil Judge (Junior & Senior Division), Vadodara",
      "Principal District Judge, Vadodara (appeals, arbitration applications)",
      "Commercial Court, Vadodara",
      "Gujarat High Court, Ahmedabad (Section 11 appointments, second appeals, writs)",
      "Motor Accident Claims Tribunal (MACT), Vadodara",
      "District Consumer Commission, Vadodara",
    ],
    caseTypes: [
      { title: "Commercial Court Claims", desc: "Above-value contract and supply disputes under the Commercial Courts Act timetable." },
      { title: "Arbitration Support", desc: "Section 9 interim relief, Section 11 appointments at the Gujarat High Court, and Section 34 challenges." },
      { title: "Summary Suits (Order XXXVII)", desc: "Fast-track recovery on cheques, invoices, and written agreements." },
      { title: "Industrial Land & Tenure", desc: "Town Planning Scheme final plots, new-tenure permissions, and non-agricultural conversion." },
      { title: "Specific Performance & Injunctions", desc: "Enforcing agreements to sell and restraining transfers or breaches pending suit." },
      { title: "Partition & Succession", desc: "Family property partition, succession certificates, and mutation disputes." },
      { title: "Motor Accident Claims", desc: "MACT compensation claims, including accidents on the National Highway corridor." },
      { title: "Consumer Complaints", desc: "Deficiency-of-service claims against builders, banks, insurers, and service providers." },
    ],
    faqs: [
      {
        question: "My contract has an arbitration clause. Can I still go to court?",
        answer:
          "Generally the dispute must go to arbitration, and a court will refer the parties there if a valid clause exists. Courts remain available for interim relief under Section 9, for appointing an arbitrator under Section 11 when the parties cannot agree, and for challenging or enforcing the eventual award. Whether a defective clause can be bypassed is a question worth assessing before you file anything.",
      },
      {
        question: "How do I recover money owed by an industrial buyer?",
        answer:
          "If the contract has an arbitration clause, through arbitration. Otherwise an Order XXXVII summary suit for a documented debt, a Commercial Court claim above the specified value, or a Section 138 prosecution if a cheque has bounced. Registered MSMEs have the additional Samadhaan route with statutory interest.",
      },
      {
        question: "Do I need mediation before filing a commercial suit?",
        answer:
          "Yes — for a commercial dispute above the specified value, pre-institution mediation under the Commercial Courts Act is mandatory unless you are seeking urgent interim relief. Building it into the timeline avoids the suit being returned at the threshold.",
      },
      {
        question: "Can I buy agricultural land for a factory in Vadodara?",
        answer:
          "Only subject to Gujarat's restrictions. The tenure category matters, non-agriculturist purchase is limited, new-tenure land needs prior permission and a premium, and non-agricultural conversion must be obtained before industrial use. These should all be cleared before payment, not after.",
      },
      {
        question: "What is the limitation period for a civil claim?",
        answer:
          "Broadly three years for most money and contract claims and twelve years for possession of immovable property, running from when the cause of action arose. Limitation is usually the first defence raised, so the accrual date should be assessed at the outset.",
      },
    ],
    localNotes: [
      "Most significant Vadodara commercial contracts carry arbitration clauses, so Section 11 and Section 9 work is central.",
      "Industrial expansion regularly encounters Town Planning Scheme final plots, new-tenure restrictions, and NA conversion.",
      "Commercial disputes above the specified value require pre-institution mediation unless urgent relief is sought.",
    ],
  },

  "vadodara__family-matrimonial": {
    lead:
      "Vadodara's matrimonial work reflects a settled, salaried, largely organised-sector population — which means maintenance and alimony disputes are frequently document-driven rather than speculative, and custody arrangements have to work around transferable jobs. NyaySevak connects you with Bar-Council-verified Vadodara divorce and family lawyers who file at the Family Court in Vadodara and handle maintenance, custody, and settlement negotiation.",
    landscape: [
      "Because so many Vadodara spouses are salaried employees of large industrial and public-sector employers, income is provable from salary slips, Form 16, and provident-fund records. That has made the Supreme Court's framework in Rajnesh v. Neha, which requires both parties to file affidavits of assets and income, unusually effective here — interim maintenance is often decided on documents rather than on contested estimates of undisclosed earnings.",
      "The Family Court at Vadodara hears divorce, judicial separation, restitution, custody, and guardianship. Mutual-consent divorce follows the two-motion structure under Section 13B with a six-month statutory gap between motions, which the court may waive where the parties have been separated for a long period and the settlement is genuinely complete, applying the Supreme Court's guidance in Amardeep Singh.",
      "Transferable employment complicates custody. Where one parent's job moves them between cities or states, workable arrangements need to address school continuity, travel costs, and video contact, and a consent order that anticipates a transfer avoids returning to court each time one occurs. Domestic-violence proceedings run separately before the Magistrate, so settlements are structured to close every parallel proceeding at once.",
    ],
    courtsForThisMatter: [
      "Family Court, Vadodara (divorce, custody, guardianship, maintenance)",
      "Magistrate Courts, Vadodara (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Principal District Judge, Vadodara (appeals from Family Court orders)",
      "Gujarat High Court, Ahmedabad (appeals, quashing on settlement)",
      "Supreme Court of India (transfer petitions between states)",
      "Mediation Centre, Vadodara District Court",
    ],
    caseTypes: [
      { title: "Mutual Consent Divorce", desc: "Two-motion Section 13B petitions at the Vadodara Family Court, with waiver of the six-month gap where appropriate." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, and adultery petitions and defences before the Family Court." },
      { title: "Maintenance & Alimony", desc: "Section 24 HMA and Section 144 BNSS claims, argued on salary and provident-fund records under the Rajnesh framework." },
      { title: "Child Custody & Guardianship", desc: "Custody and visitation arrangements built around transferable employment and school continuity." },
      { title: "Domestic Violence Proceedings", desc: "Protection, residence, and monetary orders before the Magistrate at Vadodara." },
      { title: "Section 85 BNS Defence & Quashing", desc: "Defending dowry-cruelty allegations and quashing on settlement at the Gujarat High Court." },
      { title: "Settlement & Mediation", desc: "Comprehensive settlements closing divorce, maintenance, criminal, and DV proceedings together." },
      { title: "Succession & Family Property", desc: "Wills, succession certificates, and division of matrimonial and inherited assets." },
    ],
    faqs: [
      {
        question: "How is maintenance calculated in Vadodara?",
        answer:
          "There is no fixed formula. Courts weigh the paying spouse's income and assets, the claimant's needs and earning capacity, the standard of living during the marriage, and the children's requirements. Following Rajnesh v. Neha both parties file affidavits of assets and income, and in Vadodara's salaried economy those are usually corroborated by salary slips and provident-fund records.",
      },
      {
        question: "How long does a mutual consent divorce take?",
        answer:
          "Usually six to twelve months because of the two-motion structure and the statutory gap. Where the separation has been long and the settlement is complete, the Family Court can waive the six-month gap and the matter may conclude in two to three months.",
      },
      {
        question: "My job transfers me between cities. How will custody work?",
        answer:
          "Courts decide custody on the welfare of the child, and transferable employment is a practical factor rather than a disqualification. Workable orders address school continuity, travel arrangements, and regular video contact, and a consent order drafted to anticipate a transfer avoids returning to court whenever one happens.",
      },
      {
        question: "Is a domestic violence case heard by the Family Court?",
        answer:
          "No — Domestic Violence Act proceedings are heard by the Magistrate, while divorce and custody go to the Family Court. Because parallel proceedings are common, settlements are negotiated to resolve all of them together rather than one at a time.",
      },
      {
        question: "Can we agree custody and maintenance without a full trial?",
        answer:
          "Yes. Most Vadodara matters that settle do so through mediation at the district mediation centre or through negotiated consent terms recorded by the court. A properly drafted settlement can close the divorce, maintenance, custody, and any criminal or DV proceeding at the same time.",
      },
    ],
    localNotes: [
      "A salaried, organised-sector population makes Rajnesh v. Neha income affidavits unusually effective in Vadodara.",
      "Transferable employment makes forward-looking custody orders more valuable than fixed weekly schedules.",
      "DV Act and Section 144 BNSS proceedings sit with the Magistrate, not the Family Court.",
    ],
  },

  "vadodara__property-real-estate": {
    lead:
      "Vadodara property questions divide sharply between the planned city core, where Town Planning Schemes and society conveyance dominate, and the industrial periphery, where tenure category and non-agricultural conversion decide whether a transaction is even lawful. NyaySevak connects you with Bar-Council-verified Vadodara property lawyers for title verification, GujRERA complaints, redevelopment, and industrial land acquisition.",
    landscape: [
      "Gujarat's Town Planning Scheme mechanism governs how the city grew. Instead of acquiring land outright, the authority pools holdings, reserves land for roads and amenities, and returns each owner a reconstituted final plot, usually with a betterment charge. Objections to the draft scheme, disputes about the final plot allotted, and challenges to the charge levied are decided by the Town Planning Officer and the appellate machinery rather than by an ordinary civil suit.",
      "For flat buyers, GujRERA is the primary forum for registered projects, with remedies of refund with interest, delay compensation, or directions to complete, and appeals to the Gujarat Real Estate Appellate Tribunal. Vadodara also has a large stock of older society buildings that predate RERA, where the Gujarat Ownership Flats Act still governs the promoter's obligations, including the duty to form a society and execute conveyance.",
      "Industrial land is where diligence pays for itself. New-tenure land cannot be transferred without prior government permission and payment of a premium; agricultural land carries restrictions on purchase by non-agriculturists; and non-agricultural conversion must be secured before industrial use. Vadodara's periphery contains all of these categories, and a purchase that overlooks tenure can leave a buyer holding land they cannot lawfully use or resell.",
    ],
    courtsForThisMatter: [
      "GujRERA (Gujarat Real Estate Regulatory Authority), Gandhinagar",
      "Gujarat Real Estate Appellate Tribunal (RERA appeals)",
      "Town Planning Officer & appellate authorities (TP Scheme disputes)",
      "Civil & Commercial Courts, Vadodara (title, specific performance, injunctions)",
      "Gujarat High Court, Ahmedabad (writs against planning and revenue authorities)",
      "District Consumer Commission, Vadodara",
    ],
    caseTypes: [
      { title: "Title Verification & Due Diligence", desc: "Revenue records, 7/12 extracts, TP final-plot status, tenure category, and encumbrance checks." },
      { title: "GujRERA Complaints", desc: "Refund with interest, delay compensation, and completion directions against registered Vadodara projects." },
      { title: "Town Planning Scheme Disputes", desc: "Draft-scheme objections, final-plot allotment, and betterment-charge challenges." },
      { title: "Industrial Land Acquisition", desc: "Tenure clearance, non-agricultural conversion, and permission for purchase by companies." },
      { title: "Society Conveyance & Redevelopment", desc: "Society formation, deemed conveyance, and redevelopment agreements for older buildings." },
      { title: "Specific Performance & Injunctions", desc: "Enforcing agreements to sell and restraining third-party transfers pending suit." },
      { title: "Tenancy & Commercial Leasing", desc: "Lease drafting, eviction, and rent recovery under the Gujarat Rent Act where applicable." },
      { title: "Partition & Inherited Property", desc: "Family partition, mutation corrections, and succession disputes over land and buildings." },
    ],
    faqs: [
      {
        question: "What is a final plot in a Town Planning Scheme?",
        answer:
          "It is the reconstituted plot returned to you after the authority pools land in an area and reserves part for roads and amenities. It is usually smaller than your original holding and typically carries a betterment charge. Disputes about the plot allotted or the charge levied go to the Town Planning Officer and the appellate authorities, not to a civil court.",
      },
      {
        question: "Can my company buy agricultural land near Vadodara for a plant?",
        answer:
          "Only subject to Gujarat's restrictions. Purchase by non-agriculturists is limited, new-tenure land requires prior permission and premium, and non-agricultural conversion must be obtained before industrial use. Each of these should be cleared before payment, because a transaction completed without them can be unenforceable.",
      },
      {
        question: "Our society has no conveyance. What can we do?",
        answer:
          "Where a promoter has failed to execute conveyance, the Gujarat Ownership Flats Act and the co-operative societies framework provide routes to compel it, and for registered projects GujRERA can direct the promoter to comply. Older Vadodara buildings frequently sit in this position, and resolving it is what makes redevelopment possible later.",
      },
      {
        question: "How long does a GujRERA complaint take?",
        answer:
          "RERA is designed for decisions within roughly sixty days, though contested matters commonly take longer, and an appeal to the Gujarat Real Estate Appellate Tribunal adds further time. It is still substantially faster than a civil suit, which is why it is the default first forum for buyers.",
      },
      {
        question: "What should I check before buying property in Vadodara?",
        answer:
          "The title chain and 7/12 or property-card entries, the tenure category, the TP final-plot position, non-agricultural permission where relevant, the sanctioned plan and building-use permission, RERA registration for a new project, and the society's conveyance status. Diligence before payment is far cheaper than litigation after it.",
      },
    ],
    localNotes: [
      "Town Planning Scheme final plots and betterment charges are decided by the Town Planning Officer, not a civil court.",
      "Tenure category and non-agricultural conversion decide whether industrial land can lawfully be bought and used.",
      "Older society buildings predating RERA remain governed by the Gujarat Ownership Flats Act for conveyance obligations.",
    ],
  },

  "vadodara__corporate-business": {
    lead:
      "Vadodara's corporate work is dominated by one theme that sets it apart from Surat and Rajkot: a large permanent, unionised workforce. Standing orders, contract-labour compliance, and Industrial Tribunal disputes are day-to-day matters here rather than occasional ones. NyaySevak connects you with Bar-Council-verified Vadodara corporate lawyers for industrial compliance, commercial contracts, arbitration, and NCLT work at the Ahmedabad Bench.",
    landscape: [
      "Industrial relations law is the local specialism. Units above the applicable thresholds must certify standing orders, comply with the contract-labour regime for principal-employer obligations, and take retrenchment, layoff, and closure decisions within the framework that requires government permission for larger establishments. Disputes go to the Labour Court and the Industrial Tribunal at Vadodara, with writs to the Gujarat High Court, and the cost of getting a retrenchment process wrong is usually reinstatement with back wages.",
      "Contracting practice is arbitration-first. Supply, job-work, and engineering-procurement agreements with the large plants almost always carry arbitration clauses, so disputes proceed to a tribunal rather than a suit, with the Gujarat High Court handling Section 11 appointments and the courts retained for Section 9 interim relief and for Section 34 challenges. Drafting a clause that names a workable seat, a clear appointment mechanism, and a realistic timetable prevents most of the procedural fights that follow.",
      "For company and insolvency matters, the NCLT Ahmedabad Bench has jurisdiction over Gujarat. Recovery strategy below the one-crore IBC threshold relies on Section 138 prosecutions, Order XXXVII summary suits, and Commercial Court claims, with the MSME Samadhaan route available to registered small units and carrying statutory compound interest that makes it disproportionately effective against larger buyers.",
    ],
    courtsForThisMatter: [
      "Labour Court & Industrial Tribunal, Vadodara",
      "NCLT Ahmedabad Bench (insolvency, oppression and mismanagement, schemes)",
      "Commercial Court, Vadodara",
      "MSME Facilitation Council, Gujarat (Samadhaan claims)",
      "Gujarat High Court, Ahmedabad (writs, Section 11 arbitration appointments)",
      "Magistrate Courts, Vadodara (Section 138 NI Act prosecutions)",
    ],
    caseTypes: [
      { title: "Industrial & Labour Compliance", desc: "Standing orders, contract-labour registration, retrenchment and closure procedure, and statutory registers." },
      { title: "Industrial Disputes", desc: "Reference proceedings, reinstatement and back-wages claims, and union matters before the Tribunal." },
      { title: "Commercial Contracts", desc: "Supply, job-work, EPC, and distribution agreements with enforceable dispute-resolution clauses." },
      { title: "Arbitration", desc: "Clause drafting, Section 9 interim relief, Section 11 appointments, and Section 34 challenges." },
      { title: "Company & LLP Incorporation", desc: "Formation, registered-office compliance, and ongoing ROC filings." },
      { title: "Debt Recovery", desc: "IBC petitions, summary suits, Commercial Court claims, and cheque-bounce prosecutions." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered units." },
      { title: "Shareholder & Director Disputes", desc: "Oppression and mismanagement petitions before the NCLT Ahmedabad Bench." },
    ],
    faqs: [
      {
        question: "Do we need government permission to retrench workers in Vadodara?",
        answer:
          "For establishments above the applicable size threshold, retrenchment, layoff, and closure require prior government permission in addition to notice and compensation. Getting the process wrong commonly results in reinstatement with back wages, so the procedure should be planned with counsel before any decision is communicated.",
      },
      {
        question: "What are standing orders and do they apply to us?",
        answer:
          "Standing orders are the certified terms of employment — classification of workmen, hours, leave, misconduct, and disciplinary procedure — required for industrial establishments above the applicable threshold. Once certified they bind the employer, and disciplinary action taken outside them is frequently set aside by the Tribunal.",
      },
      {
        question: "Which NCLT bench covers Vadodara?",
        answer:
          "The NCLT Ahmedabad Bench, which has jurisdiction over Gujarat. Insolvency petitions, oppression and mismanagement claims, and scheme approvals for Vadodara companies are filed there.",
      },
      {
        question: "Are we liable for our contractor's workers?",
        answer:
          "Potentially. Under the contract-labour regime a principal employer carries registration obligations and can become liable for wages and statutory dues if the contractor defaults, and courts examine whether the arrangement is genuine contracting or disguised employment. Auditing contractor compliance is considerably cheaper than defending a claim later.",
      },
      {
        question: "How do we recover payment from a large industrial buyer?",
        answer:
          "If the contract has an arbitration clause, through arbitration. Otherwise an Order XXXVII summary suit or a Commercial Court claim, with a Section 138 prosecution where a cheque has bounced. Registered MSMEs should consider the Samadhaan route, whose statutory compound interest gives real leverage against large buyers.",
      },
    ],
    localNotes: [
      "Vadodara's permanent industrial workforce makes standing orders, contract labour, and Tribunal disputes central to corporate practice.",
      "Most significant contracts are arbitration-first, so clause quality determines how disputes actually proceed.",
      "Company and insolvency matters go to the NCLT Ahmedabad Bench.",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // RAJKOT — Saurashtra's commercial capital. The distinguishing legal fact
  // is the region's separate land-tenure history (Saurashtra Gharkhed and the
  // Barkhali Abolition framework), which does not apply in mainland Gujarat.
  // ══════════════════════════════════════════════════════════════════════
  "rajkot__criminal-law": {
    lead:
      "Rajkot's criminal docket carries the same Gujarat Prohibition Act load as the rest of the state, layered over an SME economy where commercial defaults regularly escalate into cheating and breach-of-trust complaints. NyaySevak connects you with Bar-Council-verified Rajkot criminal lawyers who appear before the District & Sessions Court, handle bail from first remand, and take anticipatory bail and quashing to the Gujarat High Court at Ahmedabad.",
    landscape: [
      "Prohibition prosecutions are a routine feature of the Rajkot magistrate courts, as they are across Gujarat. The state has banned liquor since 1960 and the 2017 amendments made several offences non-bailable with sentences reaching ten years, so even matters that look minor carry real exposure. The defences are Gujarat-specific and turn on provisions such as the health permit, which is why local practice experience matters disproportionately.",
      "The second significant stream comes from Saurashtra's engineering and trading economy. Business relationships here run on long credit and personal trust between proprietors and partners, so when a deal collapses the aggrieved party frequently files a cheating or criminal breach of trust complaint alongside civil recovery. Whether such a complaint actually discloses an offence, or is a civil dispute dressed as a crime, is the central question in a quashing petition.",
      "Bail follows the standard Gujarat route: the Sessions Court at Rajkot first, then the Gujarat High Court at Ahmedabad. Because Gujarat has a single High Court seat with no Saurashtra bench, all High Court work — anticipatory bail, quashing, revision — means proceedings at Ahmedabad, which is a real factor in the cost and timeline of defending a Rajkot case.",
    ],
    courtsForThisMatter: [
      "Rajkot District & Sessions Court (sessions trials, bail, appeals)",
      "Chief Judicial Magistrate & Magistrate Courts, Rajkot",
      "Special Courts under the Gujarat Prohibition Act",
      "Gujarat High Court, Ahmedabad (anticipatory bail, quashing, revision)",
      "Special Court (NDPS, POCSO, SC/ST Act), Rajkot",
      "Juvenile Justice Board, Rajkot",
    ],
    caseTypes: [
      { title: "Bail & Anticipatory Bail", desc: "Regular bail before the Rajkot Sessions Court and anticipatory bail there and at the Gujarat High Court." },
      { title: "Gujarat Prohibition Act Defence", desc: "Possession, transport, and sale prosecutions, including health-permit and procedural defences." },
      { title: "Cheating & Breach of Trust", desc: "Commercial defaults prosecuted as Section 318 and 316 BNS offences across Saurashtra's trading economy." },
      { title: "Cheque Bounce Prosecutions", desc: "Section 138 NI Act complaints and defences arising from credit-based engineering and trading business." },
      { title: "Land & Property Offences", desc: "Forgery, forcible dispossession, and disputes over tenure-restricted Saurashtra holdings." },
      { title: "Cyber & Financial Fraud", desc: "Online investment and UPI fraud, and Economic Offences Wing matters." },
      { title: "Dowry & Domestic Cruelty Defence", desc: "Section 85 BNS matters, including quashing on settlement at the Gujarat High Court." },
      { title: "Quashing & Criminal Revision", desc: "Gujarat High Court petitions against FIRs, complaints, and orders passed at Rajkot." },
    ],
    faqs: [
      {
        question: "Where do I apply for anticipatory bail in Rajkot?",
        answer:
          "Before the Sessions Court at Rajkot first, and then the Gujarat High Court at Ahmedabad if refused. There is no High Court bench in Saurashtra, so all High Court work is conducted at Ahmedabad. Your first step through NyaySevak is a free case assessment.",
      },
      {
        question: "Can a business dispute become a criminal case in Rajkot?",
        answer:
          "It can, where the facts suggest dishonest intention from the outset rather than a business that simply failed. Saurashtra's trade runs on long credit and personal trust with limited documentation, so complaints of cheating and breach of trust are common. Whether the complaint discloses an offence at all is exactly what a quashing petition before the Gujarat High Court tests.",
      },
      {
        question: "How serious is a prohibition case?",
        answer:
          "Serious. Gujarat has been dry since 1960 and the 2017 amendments made several offences non-bailable with sentences of up to ten years. The available defences depend on Gujarat-specific provisions, so counsel who regularly handle these matters locally are important.",
      },
      {
        question: "What happens at the first remand hearing?",
        answer:
          "The accused is produced before the Magistrate, who decides on police custody, judicial custody, or release. This hearing shapes the entire case, which is why arranging representation before the first production — rather than after — usually makes the biggest practical difference.",
      },
      {
        question: "Can a cheque bounce case be settled?",
        answer:
          "Yes. Section 138 is compoundable, and a large proportion of Rajkot matters settle through mediation, at National Lok Adalats, or by a negotiated payment schedule recorded before the Magistrate. Settlement is usually the fastest route to actual recovery.",
      },
    ],
    localNotes: [
      "Gujarat's prohibition regime makes liquor prosecutions routine and consequential in Rajkot's magistrate courts.",
      "Saurashtra's trust-based trade credit turns many commercial defaults into criminal complaints.",
      "There is no High Court bench in Saurashtra — all Gujarat High Court work is at Ahmedabad.",
    ],
  },

  "rajkot__civil-law": {
    lead:
      "Rajkot is a city of proprietors and partnerships — casting foundries, engineering workshops, auto-component makers, and the trading firms that finance them. Its civil docket is correspondingly dominated by recovery, firm disputes, and land questions governed by Saurashtra's own tenure laws. NyaySevak connects you with Bar-Council-verified Rajkot civil lawyers for summary suits, Commercial Court claims, partition, and title litigation.",
    landscape: [
      "Saurashtra's land law is genuinely different from mainland Gujarat's. The region carries its own post-merger tenure framework, including the Saurashtra Gharkhed, Tenancy Settlement and Agricultural Lands Act and the Barkhali abolition legislation, which converted various former estate and tenancy rights into restricted-tenure holdings. Land in and around Rajkot therefore frequently sits in categories that cannot be transferred without prior permission and premium, and a purchase made without checking tenure can be void.",
      "For money claims, the Order XXXVII summary suit is the workhorse, because it forces the defendant to seek leave to defend rather than filing a written statement as of right. Above the specified value the Commercial Court at Rajkot applies the Commercial Courts Act timetable with pre-institution mediation mandatory unless urgent interim relief is sought, and MSME claimants can pursue the Samadhaan route with statutory interest instead.",
      "Firm disputes recur because of how Rajkot businesses are structured. Dissolution suits, claims for accounts and profit shares, disputes over continued use of a firm name, and family separations of jointly run businesses are constant. The bar in Section 69 of the Partnership Act, which prevents an unregistered firm from suing to enforce a contract, defeats a surprising number of claims at the threshold and should always be checked before filing.",
    ],
    courtsForThisMatter: [
      "Civil Judge (Junior & Senior Division), Rajkot",
      "Principal District Judge, Rajkot (appeals, arbitration applications)",
      "Commercial Court, Rajkot",
      "Mamlatdar & revenue authorities (tenure, tenancy, and mutation matters)",
      "Gujarat High Court, Ahmedabad (second appeals, writs, Section 11)",
      "District Consumer Commission, Rajkot",
    ],
    caseTypes: [
      { title: "Summary Suits (Order XXXVII)", desc: "Fast-track recovery on cheques, invoices, and written agreements where leave to defend is required." },
      { title: "Partnership & Firm Disputes", desc: "Dissolution, accounts, profit-sharing, firm-name use, and family separations of jointly run businesses." },
      { title: "Saurashtra Land Tenure Matters", desc: "Restricted-tenure holdings under the Gharkhed and Barkhali framework, and permission for transfer." },
      { title: "Commercial Court Claims", desc: "Above-value trade disputes under the Commercial Courts Act timetable." },
      { title: "Specific Performance & Injunctions", desc: "Enforcing agreements to sell land, units, and shops, with injunctions against third-party transfer." },
      { title: "Partition & Succession", desc: "Family partition of land, buildings, and business assets, and mutation corrections." },
      { title: "Arbitration Support", desc: "Section 9 interim relief, Section 11 appointments at the Gujarat High Court, and enforcement." },
      { title: "Consumer Complaints", desc: "Deficiency-of-service claims against builders, banks, insurers, and dealers." },
    ],
    faqs: [
      {
        question: "Why is land law different in Rajkot?",
        answer:
          "Because Saurashtra was a group of princely states that merged separately, and it retained its own tenure legislation — including the Saurashtra Gharkhed and Barkhali abolition framework — which converted former estate and tenancy rights into restricted-tenure holdings. Land around Rajkot therefore often cannot be transferred without prior permission and premium, unlike ordinary mainland Gujarat holdings.",
      },
      {
        question: "Can my unregistered partnership file a recovery suit?",
        answer:
          "Generally not for enforcing a contractual right — Section 69 of the Partnership Act bars an unregistered firm and its partners from suing on a contract, though a suit for dissolution and accounts is an exception. This defence ends many Rajkot claims at the threshold, so registration status should be verified before filing.",
      },
      {
        question: "What is the fastest way to recover a trade debt?",
        answer:
          "An Order XXXVII summary suit for a documented debt, usually run alongside a Section 138 prosecution where a cheque has bounced. Registered MSMEs should consider the Samadhaan route before the Facilitation Council, which carries statutory compound interest and often settles faster.",
      },
      {
        question: "How do I check whether land near Rajkot is transferable?",
        answer:
          "By examining the revenue records and 7/12 extract for the tenure entry, checking whether the holding is new tenure or otherwise restricted, and confirming whether prior permission and premium are required. This should always precede payment, because a transfer made without clearance can be invalid.",
      },
      {
        question: "How long do I have to file a civil suit?",
        answer:
          "Broadly three years for most money and contract claims and twelve years for possession of immovable property, running from when the cause of action arose. Limitation is normally the first defence taken, so the accrual date should be assessed at the outset.",
      },
    ],
    localNotes: [
      "Saurashtra's separate tenure legislation makes Rajkot land diligence materially different from mainland Gujarat.",
      "Section 69 of the Partnership Act bars unregistered firms from suing on contracts — a frequent threshold defeat.",
      "Summary suits plus a parallel Section 138 prosecution is the standard recovery combination locally.",
    ],
  },

  "rajkot__family-matrimonial": {
    lead:
      "Family disputes in Rajkot often carry a business dimension that purely salaried cities do not have: when a marriage in a proprietor or partnership family breaks down, the matrimonial case and the firm's accounts become entangled. NyaySevak connects you with Bar-Council-verified Rajkot divorce and family lawyers who file at the Family Court in Rajkot and handle maintenance where income has to be established from business records rather than salary slips.",
    landscape: [
      "Proving income is the recurring difficulty. In a salaried household, maintenance turns on documents that already exist; in Rajkot's proprietor and partnership economy, income has to be reconstructed from returns, firm accounts, bank statements, and lifestyle evidence. The Supreme Court's framework in Rajnesh v. Neha, which requires affidavits of assets and income from both spouses, gives the court a structure for this, and courts routinely draw adverse inferences where disclosure is incomplete.",
      "The Family Court at Rajkot hears divorce, judicial separation, restitution, custody, and guardianship. Mutual-consent divorce follows the two-motion structure under Section 13B with a six-month gap between motions, which the court can waive under the Supreme Court's Amardeep Singh guidance where the parties have been separated for a long period and the settlement is complete and final.",
      "Settlements in family-business cases have to do more than divide money. Where a spouse holds a share in a firm, or where matrimonial property includes business premises, the settlement needs to deal with retirement from the partnership, transfer of the share, and release of personal guarantees — otherwise the parties remain financially entangled after the divorce. Domestic-violence proceedings run separately before the Magistrate and should be closed in the same settlement.",
    ],
    courtsForThisMatter: [
      "Family Court, Rajkot (divorce, custody, guardianship, maintenance)",
      "Magistrate Courts, Rajkot (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Principal District Judge, Rajkot (appeals from Family Court orders)",
      "Gujarat High Court, Ahmedabad (appeals, quashing on settlement)",
      "Supreme Court of India (transfer petitions between states)",
      "Mediation Centre, Rajkot District Court",
    ],
    caseTypes: [
      { title: "Mutual Consent Divorce", desc: "Two-motion Section 13B petitions at the Rajkot Family Court, with waiver of the six-month gap where appropriate." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, and adultery petitions and defences before the Family Court." },
      { title: "Maintenance & Alimony", desc: "Claims where income must be established from business records under the Rajnesh v. Neha disclosure framework." },
      { title: "Business-Linked Settlements", desc: "Partnership retirement, share transfer, and release of guarantees as part of a matrimonial settlement." },
      { title: "Child Custody & Guardianship", desc: "Custody, visitation, and guardianship decided on the welfare of the child." },
      { title: "Domestic Violence Proceedings", desc: "Protection, residence, and monetary orders before the Magistrate at Rajkot." },
      { title: "Section 85 BNS Defence & Quashing", desc: "Defending dowry-cruelty allegations and quashing on settlement at the Gujarat High Court." },
      { title: "Succession & Family Property", desc: "Wills, succession certificates, and division of inherited and matrimonial assets." },
    ],
    faqs: [
      {
        question: "How is maintenance decided when my spouse runs a business?",
        answer:
          "The court reconstructs income from tax returns, firm accounts, bank statements, and lifestyle evidence rather than salary slips. Under Rajnesh v. Neha both spouses must file affidavits of assets and income, and courts draw adverse inferences where disclosure is plainly incomplete. Building the financial picture properly at the outset is what determines the outcome.",
      },
      {
        question: "Does my spouse have a claim on our family firm?",
        answer:
          "Not automatically to the firm itself, but a spouse's shareholding, capital account, or beneficial interest can form part of the financial settlement, and business assets are relevant to determining maintenance and alimony. Where a spouse is actually a partner, retirement and transfer of the share should be dealt with expressly in the settlement.",
      },
      {
        question: "How long does a mutual consent divorce take in Rajkot?",
        answer:
          "Usually six to twelve months given the two-motion structure and the statutory gap. Where the separation has been long and the settlement is complete, the Family Court can waive the six-month gap and the matter may conclude in two to three months.",
      },
      {
        question: "Is a domestic violence case heard by the Family Court?",
        answer:
          "No — the Magistrate hears Domestic Violence Act proceedings while the Family Court hears divorce and custody, and a criminal complaint would be a third track. Settlements are therefore structured to close every parallel proceeding together.",
      },
      {
        question: "Can maintenance be revised later?",
        answer:
          "Yes. Maintenance orders can be varied on a material change of circumstances — a substantial change in either party's income, remarriage, or a change in the children's needs. In business families this frequently follows a documented change in the firm's position.",
      },
    ],
    localNotes: [
      "In Rajkot's proprietor economy, establishing income for maintenance is an evidence exercise, not a document-collection exercise.",
      "Matrimonial settlements in business families must address partnership retirement, share transfer, and personal guarantees.",
      "DV Act and Section 144 BNSS proceedings sit with the Magistrate, separate from the Family Court.",
    ],
  },

  "rajkot__property-real-estate": {
    lead:
      "Property diligence in Rajkot is not the same exercise as in Ahmedabad or Surat, because Saurashtra carries its own tenure history. Holdings converted under the Gharkhed and Barkhali framework are frequently restricted, and a transfer without prior permission can be invalid. NyaySevak connects you with Bar-Council-verified Rajkot property lawyers for title verification, GujRERA complaints, and transactions in restricted-tenure land.",
    landscape: [
      "Tenure is the first thing to establish. Saurashtra's post-merger legislation — including the Gharkhed, Tenancy Settlement and Agricultural Lands Act and the Barkhali abolition laws — converted former estate and tenancy rights into holdings that carry transfer restrictions. Land recorded as new tenure or otherwise restricted cannot be sold without prior government permission and payment of a premium, and buyers who discover this after paying are left holding land they can neither use as intended nor resell.",
      "Beyond tenure, Rajkot follows the wider Gujarat framework. The Town Planning Scheme mechanism reconstitutes holdings into final plots with betterment charges, which are contested before the Town Planning Officer rather than in a civil court. GujRERA governs registered projects and can order refund with interest, delay compensation, or completion, with appeals to the Gujarat Real Estate Appellate Tribunal, while the Gujarat Ownership Flats Act continues to govern promoter obligations in older buildings.",
      "The industrial dimension matters in Rajkot. Foundries and engineering units in the Aji and Shapar-Veraval belts need non-agricultural conversion and correct use permissions, and expansion frequently runs into tenure restrictions on adjoining agricultural land. Verifying conversion status, permitted use, and pollution-control consent before purchase is considerably cheaper than regularising afterwards.",
    ],
    courtsForThisMatter: [
      "GujRERA (Gujarat Real Estate Regulatory Authority), Gandhinagar",
      "Gujarat Real Estate Appellate Tribunal (RERA appeals)",
      "Mamlatdar, Collector & revenue authorities (tenure, permission, mutation)",
      "Town Planning Officer & appellate authorities (TP Scheme disputes)",
      "Civil & Commercial Courts, Rajkot (title, specific performance, injunctions)",
      "Gujarat High Court, Ahmedabad (writs against revenue and planning authorities)",
    ],
    caseTypes: [
      { title: "Tenure Verification", desc: "Establishing whether a Saurashtra holding is new tenure or restricted, and what permission a transfer requires." },
      { title: "Title Due Diligence", desc: "Revenue records, 7/12 extracts, encumbrance, mutation history, and sanctioned-plan checks before purchase." },
      { title: "GujRERA Complaints", desc: "Refund with interest, delay compensation, and completion directions against registered Rajkot projects." },
      { title: "Industrial Land & Conversion", desc: "Non-agricultural conversion, permitted use, and expansion onto adjoining restricted holdings." },
      { title: "Town Planning Scheme Disputes", desc: "Final-plot allotment and betterment-charge objections before the Town Planning Officer." },
      { title: "Specific Performance & Injunctions", desc: "Enforcing agreements to sell and restraining third-party transfers pending suit." },
      { title: "Partition & Inherited Land", desc: "Family partition, mutation corrections, and succession disputes over agricultural and urban holdings." },
      { title: "Tenancy & Commercial Leasing", desc: "Lease drafting, eviction, and rent recovery for shops, workshops, and industrial premises." },
    ],
    faqs: [
      {
        question: "What is new-tenure land and why does it matter in Rajkot?",
        answer:
          "It is land held on restricted tenure, often arising from Saurashtra's Gharkhed and Barkhali reforms, which cannot be transferred without prior government permission and payment of a premium. A sale without that clearance can be invalid, so tenure must be established from the revenue records before any money changes hands.",
      },
      {
        question: "Can I convert agricultural land for an industrial unit?",
        answer:
          "Non-agricultural conversion has to be obtained before the land is used industrially, and if the holding is restricted tenure, prior permission and premium apply on top. Pollution-control consent and permitted-use confirmation should be secured in the same exercise, because retrofitting approvals after construction is far more expensive.",
      },
      {
        question: "What can GujRERA do about a delayed Rajkot project?",
        answer:
          "For a registered project, GujRERA can order a refund of your money with interest, award compensation for delay, or direct the promoter to complete, with appeals to the Gujarat Real Estate Appellate Tribunal. Older buildings that predate RERA may instead be governed by the Gujarat Ownership Flats Act.",
      },
      {
        question: "What documents should I check before buying in Rajkot?",
        answer:
          "The title chain, the 7/12 extract or property card with the tenure entry, mutation history, encumbrance position, non-agricultural permission where relevant, TP final-plot status, the sanctioned plan, and RERA registration for a new project. Tenure is the check most often skipped and the most expensive to get wrong.",
      },
      {
        question: "Who decides a betterment charge dispute?",
        answer:
          "The Town Planning Officer and the appellate machinery under the town planning legislation, not an ordinary civil court. Objections have to be raised within the scheme's timelines, so acting when the draft scheme is published matters more than challenging it afterwards.",
      },
    ],
    localNotes: [
      "Saurashtra's Gharkhed and Barkhali tenure framework makes restricted-tenure holdings common around Rajkot.",
      "Restricted-tenure land needs prior permission and premium before transfer — verify before paying, not after.",
      "Industrial expansion needs NA conversion, permitted-use confirmation, and pollution-control consent together.",
    ],
  },

  "rajkot__corporate-business": {
    lead:
      "Rajkot is one of India's densest MSME clusters — castings, forgings, bearings, diesel engines, auto components, and the trading network around them, overwhelmingly organised as proprietorships and partnerships. NyaySevak connects you with Bar-Council-verified Rajkot corporate lawyers for MSME recovery, partnership documentation, incorporation and conversion, and NCLT matters at the Ahmedabad Bench.",
    landscape: [
      "For a Rajkot MSME the Samadhaan route is usually the most powerful recovery tool available. A buyer who has not paid within forty-five days becomes liable for compound interest at three times the RBI bank rate, and the Facilitation Council runs conciliation followed by arbitration. The catch is registration: the Udyam registration generally needs to predate the transaction, and a great many eligible Rajkot units discover the remedy only after the default, when it is too late to claim it.",
      "Structure is the other recurring issue. A partnership exposes personal assets without limit, and if unregistered it cannot sue to enforce a contract under Section 69 of the Partnership Act. As Rajkot units start supplying larger OEMs and exporting, conversion to an LLP or a private limited company changes both the liability position and the credit profile — and moves internal disputes from a civil dissolution suit to an oppression and mismanagement petition before the NCLT Ahmedabad Bench.",
      "Supply-chain contracting deserves more attention than it usually gets here. Much of Rajkot's component business runs on purchase orders and long-standing understandings rather than written agreements, which leaves quality rejection, tooling ownership, price escalation, and termination undefined precisely when a dispute arises. Putting a short, workable master supply agreement in place is disproportionately valuable relative to its cost.",
    ],
    courtsForThisMatter: [
      "MSME Facilitation Council, Gujarat (Samadhaan delayed-payment claims)",
      "NCLT Ahmedabad Bench (insolvency, oppression and mismanagement, schemes)",
      "Commercial Court, Rajkot",
      "Magistrate Courts, Rajkot (Section 138 NI Act prosecutions)",
      "Labour Court, Rajkot",
      "Gujarat High Court, Ahmedabad (writs, Section 11 arbitration appointments)",
    ],
    caseTypes: [
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery before the Facilitation Council with statutory compound interest." },
      { title: "Partnership Documentation", desc: "Deeds, registration, admission and retirement of partners, and dissolution terms." },
      { title: "Incorporation & Conversion", desc: "Private limited and LLP formation, and conversion from proprietorship or partnership." },
      { title: "Supply & OEM Contracts", desc: "Master supply agreements covering quality rejection, tooling ownership, escalation, and termination." },
      { title: "Debt Recovery", desc: "Section 138 prosecutions, Order XXXVII summary suits, and Commercial Court claims." },
      { title: "Export & Trade Compliance", desc: "Export documentation, incoterms, payment security, and cross-border dispute clauses." },
      { title: "Labour Compliance", desc: "Factory licensing, contract labour, provident fund and ESI, and Labour Court disputes." },
      { title: "Partner & Shareholder Disputes", desc: "Dissolution and accounts suits for firms, and NCLT petitions for companies." },
    ],
    faqs: [
      {
        question: "How do I use the MSME Samadhaan route?",
        answer:
          "If you hold Udyam registration and a buyer has not paid within forty-five days, you file before the MSME Facilitation Council, which conducts conciliation and then arbitration, with the buyer liable for compound interest at three times the RBI bank rate. Registration generally has to predate the transaction, so registering early is what makes the remedy usable.",
      },
      {
        question: "Should my Rajkot firm become a company?",
        answer:
          "It depends on scale, risk, and who you supply. A partnership carries unlimited personal liability and, if unregistered, cannot sue on a contract. An LLP or private limited company limits liability and improves credit standing but adds compliance. For units moving into OEM supply or exports, conversion is usually worth modelling seriously.",
      },
      {
        question: "Which NCLT bench covers Rajkot?",
        answer:
          "The NCLT Ahmedabad Bench, which has jurisdiction over Gujarat. Insolvency petitions, oppression and mismanagement claims, and scheme approvals for Rajkot companies are filed and heard there.",
      },
      {
        question: "We supply on purchase orders. Is that enough?",
        answer:
          "Rarely. Purchase orders seldom address quality rejection, tooling ownership, price escalation, minimum volumes, or termination, which are exactly the issues that surface in a dispute. A short master supply agreement sitting behind the POs resolves most of this at modest cost.",
      },
      {
        question: "Can I file an IBC petition against a defaulting buyer?",
        answer:
          "Only where the default is one crore rupees or more, which excludes most Rajkot trade debts. Below that threshold the realistic tools are the Samadhaan route, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution.",
      },
    ],
    localNotes: [
      "Udyam registration before the transaction is what unlocks Samadhaan's statutory compound interest — register early.",
      "Unlimited liability and the Section 69 bar are the two structural risks of Rajkot's partnership-heavy economy.",
      "Component supply on bare purchase orders leaves tooling, rejection, and termination undefined when disputes arise.",
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // GANDHINAGAR — state capital plus GIFT City. Two distinct client bases:
  // government servants (service law, ACB defence) and IFSC-regulated
  // entities. Nothing here overlaps with Ahmedabad's commercial docket.
  // ══════════════════════════════════════════════════════════════════════
  "gandhinagar__criminal-law": {
    lead:
      "Gandhinagar is the seat of the Gujarat government, and that gives its criminal docket a shape found nowhere else in the state: a steady flow of Prevention of Corruption Act prosecutions against public servants, run by the Anti-Corruption Bureau, alongside the Gujarat Prohibition Act work common across Gujarat. NyaySevak connects you with Bar-Council-verified Gandhinagar criminal lawyers for bail, corruption defence, and quashing before the Gujarat High Court.",
    landscape: [
      "Corruption prosecutions follow their own rules and they matter here because so many residents are public servants. A prosecution under the Prevention of Corruption Act requires prior sanction from the competent authority, and after the 2018 amendments a prior approval is also needed before an investigation into a public servant's official decisions can even begin. Trials are conducted by a designated Special Judge, and the absence or invalidity of sanction is frequently the strongest defence available.",
      "Trap cases have a distinctive evidentiary pattern. The Anti-Corruption Bureau's procedure — the complaint, the pre-trap panchnama, the phenolphthalein test, and the recovery — is highly formalised, and defences generally turn on whether demand and acceptance were both proved rather than on recovery alone, since the Supreme Court has held that recovery without proof of demand does not establish the offence. Departmental proceedings usually run in parallel with the criminal trial and need coordinated handling.",
      "Alongside this, Gandhinagar carries the ordinary Gujarat criminal load, including prohibition prosecutions under a statute that the 2017 amendments made considerably harsher. Bail applications go to the Sessions Court at Gandhinagar and then to the Gujarat High Court at Ahmedabad, which is roughly half an hour away — one of the few practical advantages Gandhinagar litigants have over the rest of the state.",
    ],
    courtsForThisMatter: [
      "Special Judge (Prevention of Corruption Act), Gandhinagar",
      "Gandhinagar District & Sessions Court (bail, sessions trials)",
      "Chief Judicial Magistrate & Magistrate Courts, Gandhinagar",
      "Gujarat High Court, Ahmedabad (anticipatory bail, quashing, revision)",
      "Special Courts under the Gujarat Prohibition Act",
      "Anti-Corruption Bureau, Gujarat (investigation stage)",
    ],
    caseTypes: [
      { title: "Prevention of Corruption Act Defence", desc: "Trap cases, disproportionate-assets prosecutions, and sanction challenges before the Special Judge." },
      { title: "Departmental Proceedings", desc: "Charge-sheet replies, inquiry representation, and coordination with a parallel criminal trial." },
      { title: "Bail & Anticipatory Bail", desc: "Regular and anticipatory bail before the Sessions Court and the Gujarat High Court." },
      { title: "Gujarat Prohibition Act Defence", desc: "Possession, transport, and sale prosecutions under Gujarat's liquor regime." },
      { title: "Economic & Financial Offences", desc: "Cheating, breach of trust, and investigations involving companies and their officers." },
      { title: "Cyber Crime", desc: "Online fraud, data theft, and IT Act offences, including matters affecting government systems." },
      { title: "Dowry & Domestic Cruelty Defence", desc: "Section 85 BNS matters, including quashing on settlement at the Gujarat High Court." },
      { title: "Quashing & Criminal Revision", desc: "Gujarat High Court petitions challenging FIRs, sanction, and orders of the Special Judge." },
    ],
    faqs: [
      {
        question: "Can I be prosecuted for corruption without sanction?",
        answer:
          "No. A prosecution under the Prevention of Corruption Act requires prior sanction from the competent authority, and since the 2018 amendments a prior approval is also required before an investigation into a public servant's official decisions can begin. Absent or defective sanction is one of the most effective defences and should be examined at the outset.",
      },
      {
        question: "Is recovery of money enough to convict in a trap case?",
        answer:
          "No. The prosecution must prove both demand and acceptance of the bribe; recovery alone does not establish the offence. Much of the defence in an Anti-Corruption Bureau trap case therefore focuses on the evidence of demand and on the procedural integrity of the pre-trap and recovery panchnamas.",
      },
      {
        question: "What happens to my job during a corruption case?",
        answer:
          "Departmental proceedings typically run alongside the criminal trial and can result in suspension or dismissal independently of the trial's outcome, because the standard of proof differs. The two tracks need to be handled together, since statements made in one can affect the other.",
      },
      {
        question: "Where do I apply for anticipatory bail in Gandhinagar?",
        answer:
          "Before the Sessions Court at Gandhinagar first, and then the Gujarat High Court at Ahmedabad if refused. Gandhinagar's proximity to Ahmedabad makes High Court access considerably easier here than from Surat or Rajkot. Your first step through NyaySevak is a free case assessment.",
      },
      {
        question: "Are disproportionate-assets cases handled differently?",
        answer:
          "Yes. These turn on a comparison of known sources of income against assets over a defined check period, so the defence is largely documentary — establishing lawful sources, inherited property, and family income. Preparing that record early, before the charge sheet is filed, materially improves the position.",
      },
    ],
    localNotes: [
      "As the state capital, Gandhinagar carries an unusually high share of Prevention of Corruption Act prosecutions against public servants.",
      "Sanction and prior approval requirements are often the strongest defence in a corruption case.",
      "Proximity to the Gujarat High Court at Ahmedabad makes High Court remedies faster to access than from elsewhere in Gujarat.",
    ],
  },

  "gandhinagar__civil-law": {
    lead:
      "Gandhinagar's civil work splits between two very different clienteles: state government employees with service disputes, and the businesses and landowners around the capital's rapidly developing Kudasan-Randesan corridor. NyaySevak connects you with Bar-Council-verified Gandhinagar civil lawyers for service matters, land and tenure disputes, government contract claims, and recovery before the district and commercial courts.",
    landscape: [
      "Service law is the local specialism. Gujarat does not have a functioning State Administrative Tribunal, so state government employees take service disputes — promotion, seniority, pension, disciplinary penalties, and recruitment challenges — directly to the Gujarat High Court by writ petition, while central government employees go to the Central Administrative Tribunal's Ahmedabad Bench. Knowing which forum applies to a given employer is the first question in every such matter, and getting it wrong costs a full round of litigation.",
      "Government contracting generates its own disputes. Tender challenges, blacklisting orders, and payment claims against state departments and public undertakings are argued largely by writ, where courts apply a narrow standard of review to tender decisions but intervene readily where blacklisting has been imposed without a proper show-cause notice and hearing. Contractual claims that survive that filter usually carry arbitration clauses and proceed to a tribunal.",
      "Land around the capital has become valuable quickly, and the legal categories have not changed to match. Holdings in the Kudasan, Randesan, Sargasan, and Adalaj belt include agricultural land, new-tenure land requiring prior permission and premium for transfer, and parcels reconstituted under Town Planning Schemes into final plots with betterment charges. Disputes over final-plot allotment go to the Town Planning Officer, not to a civil court.",
    ],
    courtsForThisMatter: [
      "Gujarat High Court, Ahmedabad (state service writs, tender and blacklisting challenges)",
      "Central Administrative Tribunal, Ahmedabad Bench (central government service matters)",
      "Civil Judge (Junior & Senior Division), Gandhinagar",
      "Commercial Court, Gandhinagar",
      "Town Planning Officer & appellate authorities (TP Scheme disputes)",
      "District Consumer Commission, Gandhinagar",
    ],
    caseTypes: [
      { title: "State Service Matters", desc: "Promotion, seniority, pension, and disciplinary challenges taken by writ to the Gujarat High Court." },
      { title: "Central Service Matters", desc: "Applications before the Central Administrative Tribunal's Ahmedabad Bench for central employees." },
      { title: "Tender & Blacklisting Challenges", desc: "Writ petitions against tender decisions and blacklisting imposed without proper hearing." },
      { title: "Government Contract Claims", desc: "Payment and variation claims against state departments and public undertakings." },
      { title: "Land Tenure & Final Plots", desc: "New-tenure permissions, TP final-plot allotment, and betterment-charge objections." },
      { title: "Recovery & Summary Suits", desc: "Order XXXVII suits and Commercial Court claims for contractual dues." },
      { title: "Partition & Succession", desc: "Family partition, succession certificates, and mutation corrections." },
      { title: "Consumer Complaints", desc: "Deficiency-of-service claims against builders, banks, insurers, and service providers." },
    ],
    faqs: [
      {
        question: "Where do Gujarat government employees file service disputes?",
        answer:
          "Directly before the Gujarat High Court by writ petition, because Gujarat does not have a functioning State Administrative Tribunal. Central government employees instead approach the Central Administrative Tribunal's Ahmedabad Bench. Identifying the correct forum for your employer is the first step and determines everything that follows.",
      },
      {
        question: "Can I challenge being blacklisted by a government department?",
        answer:
          "Yes. Blacklisting carries serious civil consequences and courts require a proper show-cause notice and an opportunity to be heard before it is imposed. Orders passed without that process are regularly set aside, and the challenge is brought by writ before the Gujarat High Court.",
      },
      {
        question: "Can a court interfere with a tender decision?",
        answer:
          "Only within narrow limits. Courts review the decision-making process for arbitrariness, mala fides, or clear violation of the tender conditions, rather than substituting their own commercial judgment. Challenges that succeed are usually built on a documented procedural defect rather than on the merits of the award.",
      },
      {
        question: "How do I check land near Gandhinagar before buying?",
        answer:
          "Verify the revenue records and 7/12 extract for the tenure entry, whether the holding is new tenure requiring permission and premium, the Town Planning Scheme final-plot position, non-agricultural conversion where relevant, and any encumbrance. The corridor around Kudasan and Randesan contains all of these categories.",
      },
      {
        question: "How long does a service writ take?",
        answer:
          "It varies considerably with the relief sought. Interim protection against an immediate action such as a transfer or recovery can come quickly, while a final hearing on seniority or promotion may take substantially longer. Filing promptly matters, because delay itself is a ground on which service relief is refused.",
      },
    ],
    localNotes: [
      "Gujarat state service disputes go by writ to the High Court; central employees go to the CAT Ahmedabad Bench.",
      "Blacklisting without a show-cause notice and hearing is routinely set aside on writ.",
      "The Kudasan–Randesan–Adalaj corridor mixes agricultural, new-tenure, and TP final-plot land in close proximity.",
    ],
  },

  "gandhinagar__family-matrimonial": {
    lead:
      "Gandhinagar's matrimonial cases frequently involve at least one government-employed spouse, and that changes the mechanics of maintenance in a specific and useful way: income is fully documented, and recovery of arrears can be secured directly against salary. NyaySevak connects you with Bar-Council-verified Gandhinagar divorce and family lawyers who file at the Family Court in Gandhinagar and handle maintenance, custody, and settlement.",
    landscape: [
      "Where a spouse is a government servant, income is established from the pay slip, the service record, and the pension entitlement rather than from contested estimates. That makes the affidavit-of-assets framework laid down by the Supreme Court in Rajnesh v. Neha straightforward to apply, and it also opens a practical enforcement route: arrears of maintenance can be recovered by attachment of salary, which is considerably more effective than pursuing an unwilling payer through execution proceedings.",
      "Pension and retirement benefits raise questions that do not arise in most matrimonial cases. Whether and how a share of pension, gratuity, or provident fund forms part of a financial settlement, and how nomination and family-pension entitlements interact with a divorce, needs to be addressed expressly in the settlement terms. A settlement that ignores the service benefits usually leaves the parties back in court years later.",
      "The Family Court at Gandhinagar hears divorce, judicial separation, restitution, custody, and guardianship. Mutual-consent divorce runs on the two-motion structure under Section 13B with a six-month statutory gap, waivable under the Supreme Court's Amardeep Singh guidance where separation has been long and the settlement is complete. Domestic-violence proceedings are heard separately by the Magistrate and should be closed in the same settlement.",
    ],
    courtsForThisMatter: [
      "Family Court, Gandhinagar (divorce, custody, guardianship, maintenance)",
      "Magistrate Courts, Gandhinagar (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Principal District Judge, Gandhinagar (appeals from Family Court orders)",
      "Gujarat High Court, Ahmedabad (appeals, quashing on settlement)",
      "Supreme Court of India (transfer petitions between states)",
      "Mediation Centre, Gandhinagar District Court",
    ],
    caseTypes: [
      { title: "Mutual Consent Divorce", desc: "Two-motion Section 13B petitions at the Gandhinagar Family Court, with waiver of the gap where appropriate." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, and adultery petitions and defences before the Family Court." },
      { title: "Maintenance & Salary Attachment", desc: "Claims against government-employed spouses, with arrears recovered by attachment of salary." },
      { title: "Pension & Service Benefits", desc: "Treatment of pension, gratuity, provident fund, and family-pension entitlements in a settlement." },
      { title: "Child Custody & Guardianship", desc: "Custody, visitation, and guardianship decided on the welfare of the child." },
      { title: "Domestic Violence Proceedings", desc: "Protection, residence, and monetary orders before the Magistrate at Gandhinagar." },
      { title: "Section 85 BNS Defence & Quashing", desc: "Defending dowry-cruelty allegations and quashing on settlement at the Gujarat High Court." },
      { title: "Settlement & Mediation", desc: "Comprehensive settlements closing divorce, maintenance, criminal, and DV proceedings together." },
    ],
    faqs: [
      {
        question: "My spouse is a government employee. Is maintenance easier to enforce?",
        answer:
          "Generally yes. Income is documented from the pay slip and service record, so the amount is harder to dispute, and arrears can be recovered by attachment of salary through the employer. That is substantially more effective than ordinary execution against an unwilling payer.",
      },
      {
        question: "Does my spouse's pension form part of the settlement?",
        answer:
          "It can be relevant to the financial settlement, and family-pension and nomination entitlements are affected by a divorce in ways that are easy to overlook. These should be addressed expressly in the settlement terms, because a settlement silent on service benefits frequently produces fresh litigation years later.",
      },
      {
        question: "How long does a mutual consent divorce take?",
        answer:
          "Usually six to twelve months because of the two-motion structure and the statutory gap between motions. Where the separation has been long and the settlement is complete, the Family Court may waive the six-month gap and the matter can conclude in two to three months.",
      },
      {
        question: "Can a matrimonial case affect a government job?",
        answer:
          "It can. A criminal complaint may trigger departmental action independently of the outcome of the criminal case, and some service rules require intimation of a second marriage or of certain proceedings. Coordinating the matrimonial strategy with the service position is important where a government post is involved.",
      },
      {
        question: "Is a domestic violence case heard by the Family Court?",
        answer:
          "No — the Magistrate hears Domestic Violence Act proceedings while the Family Court hears divorce and custody. Because they run in parallel, settlements are structured to close every proceeding at the same time.",
      },
    ],
    localNotes: [
      "Government employment makes income documented and maintenance arrears recoverable by salary attachment.",
      "Pension, gratuity, and family-pension entitlements should be dealt with expressly in the settlement.",
      "A criminal matrimonial complaint can trigger departmental action independently of the criminal outcome.",
    ],
  },

  "gandhinagar__property-real-estate": {
    lead:
      "Gandhinagar's property market has two distinct halves: the original planned sector city, where plots were allotted on government leases with conditions still attached decades later, and the Kudasan-Randesan-Sargasan corridor, where agricultural land has been converted and developed at speed. NyaySevak connects you with Bar-Council-verified Gandhinagar property lawyers for tenure verification, GujRERA complaints, and GIFT City leasing.",
    landscape: [
      "In the sector city, many plots were allotted by the government on leasehold terms with conditions on use, construction timelines, and transfer that remain enforceable long after allotment. Buyers frequently discover at the point of sale that a transfer requires prior permission or attracts a premium, or that a breach of the original allotment condition is outstanding. Establishing the exact terms of the original allotment is therefore the first step in any sector-city transaction.",
      "The growth corridor raises different questions. Land at Kudasan, Randesan, Sargasan, and Adalaj has moved from agricultural to urban use within a short period, so non-agricultural conversion status, restrictions on purchase by non-agriculturists, new-tenure entries requiring permission and premium, and Town Planning Scheme final-plot positions all need verification. Disputes over final-plot allotment and betterment charges go to the Town Planning Officer rather than to a civil court.",
      "GIFT City operates on a different footing again. Units there take space under leases within a special economic zone and an International Financial Services Centre framework, so occupancy is governed by SEZ approvals and IFSCA registration alongside the lease itself, and the exit and transfer provisions are correspondingly more restrictive than an ordinary commercial tenancy. Leasing there is a regulatory exercise as much as a property one.",
    ],
    courtsForThisMatter: [
      "GujRERA (Gujarat Real Estate Regulatory Authority), Gandhinagar",
      "Gujarat Real Estate Appellate Tribunal (RERA appeals)",
      "Collector & revenue authorities (tenure, NA conversion, allotment conditions)",
      "Town Planning Officer & appellate authorities (TP Scheme disputes)",
      "Civil & Commercial Courts, Gandhinagar",
      "Gujarat High Court, Ahmedabad (writs against allotment and planning authorities)",
    ],
    caseTypes: [
      { title: "Allotment Condition Verification", desc: "Establishing use, construction, and transfer conditions attached to original sector-city government allotments." },
      { title: "Title & Tenure Due Diligence", desc: "Revenue records, 7/12 extracts, new-tenure entries, and NA conversion status in the growth corridor." },
      { title: "GujRERA Complaints", desc: "Refund with interest, delay compensation, and completion directions against registered projects." },
      { title: "GIFT City Leasing", desc: "Unit leases within the SEZ and IFSC framework, including transfer, exit, and regulatory conditions." },
      { title: "Town Planning Scheme Disputes", desc: "Final-plot allotment and betterment-charge objections before the Town Planning Officer." },
      { title: "Specific Performance & Injunctions", desc: "Enforcing agreements to sell and restraining third-party transfers pending suit." },
      { title: "Society Formation & Conveyance", desc: "Housing society formation, deemed conveyance, and redevelopment of older buildings." },
      { title: "Partition & Inherited Property", desc: "Family partition, mutation corrections, and succession disputes." },
    ],
    faqs: [
      {
        question: "Can I freely sell a Gandhinagar sector plot?",
        answer:
          "Not always. Many original government allotments carry conditions on use, construction timelines, and transfer that survive for decades, and a sale may require prior permission or attract a premium. The terms of the original allotment should be established before a transaction is agreed, not at the registration stage.",
      },
      {
        question: "What should I check before buying at Kudasan or Randesan?",
        answer:
          "Non-agricultural conversion status, the tenure entry in the revenue records, whether prior permission and premium apply, the Town Planning Scheme final-plot position, the sanctioned plan and use permission, and RERA registration for a new project. This corridor converted from agricultural use quickly, so several of these frequently remain unresolved.",
      },
      {
        question: "How is leasing at GIFT City different?",
        answer:
          "Occupancy there sits within a special economic zone and an International Financial Services Centre framework, so SEZ approvals and IFSCA registration govern the arrangement alongside the lease. Transfer and exit provisions are more restrictive than in ordinary commercial tenancy, which makes the regulatory review as important as the lease negotiation.",
      },
      {
        question: "What can GujRERA do about a delayed project?",
        answer:
          "For a registered project, GujRERA can order a refund with interest, award compensation for delay, or direct the promoter to complete, with appeals to the Gujarat Real Estate Appellate Tribunal. It is designed for decisions in roughly sixty days, though contested matters take longer.",
      },
      {
        question: "Who decides disputes about a final plot?",
        answer:
          "The Town Planning Officer and the appellate machinery under the town planning legislation, not a civil court. Objections must be raised within the scheme's timelines, so responding when the draft scheme is published matters more than challenging it afterwards.",
      },
    ],
    localNotes: [
      "Original sector-city allotments carry use, construction, and transfer conditions that remain enforceable decades later.",
      "The Kudasan–Randesan corridor converted from agricultural use rapidly, leaving tenure and NA status unresolved in many parcels.",
      "GIFT City occupancy is governed by SEZ and IFSC regulation alongside the lease itself.",
    ],
  },

  "gandhinagar__corporate-business": {
    lead:
      "Gandhinagar hosts GIFT City, India's only operational International Financial Services Centre, which means a category of corporate work exists here that exists nowhere else in the country: entities regulated by the IFSCA rather than by the ordinary domestic financial regulators. NyaySevak connects you with Bar-Council-verified Gandhinagar corporate lawyers for IFSC unit setup, SEZ compliance, government contracting, and NCLT matters at the Ahmedabad Bench.",
    landscape: [
      "The IFSC framework is genuinely distinct. The International Financial Services Centres Authority is a unified regulator for banking, capital markets, insurance, and fund management within GIFT City, replacing the separate domestic regulators for units established there. An IFSC unit is treated as a non-resident for many exchange-control purposes, transacts in foreign currency, and accesses a specific tax regime — so setting one up is a regulatory authorisation exercise, not simply an incorporation.",
      "Layered on top is the special economic zone regime. GIFT City's IFSC operates within an SEZ, so unit approval, the letter of approval, permitted-operations limits, and net-foreign-exchange obligations apply alongside IFSCA registration. Getting the sequence right — SEZ approval, IFSCA registration, incorporation, and lease — avoids the delays that catch out entities treating this as an ordinary company formation.",
      "Away from GIFT City, Gandhinagar's corporate work is dominated by dealing with the state government as a counterparty: tenders, concession agreements, subsidy and incentive claims under state industrial policy, and blacklisting challenges. Insolvency and company matters go to the NCLT Ahmedabad Bench, and disputes with government undertakings usually proceed to arbitration, with Section 11 appointments made by the Gujarat High Court.",
    ],
    courtsForThisMatter: [
      "International Financial Services Centres Authority (IFSCA), GIFT City",
      "SEZ Development Commissioner, GIFT SEZ (unit approvals and compliance)",
      "NCLT Ahmedabad Bench (insolvency, oppression and mismanagement, schemes)",
      "Gujarat High Court, Ahmedabad (writs, tender challenges, Section 11 appointments)",
      "Commercial Court, Gandhinagar",
      "MSME Facilitation Council, Gujarat (Samadhaan claims)",
    ],
    caseTypes: [
      { title: "IFSC Unit Setup", desc: "IFSCA registration, structuring, and authorisation for banking, fund, insurance, and capital-market units." },
      { title: "SEZ Compliance", desc: "Letter of approval, permitted operations, net-foreign-exchange obligations, and periodic reporting." },
      { title: "Fund Structuring at GIFT", desc: "Setting up funds and fund-management entities under the IFSCA framework." },
      { title: "Government Contracting", desc: "Tenders, concession agreements, and subsidy and incentive claims under state industrial policy." },
      { title: "Tender & Blacklisting Challenges", desc: "Writ petitions against tender decisions and blacklisting imposed without proper hearing." },
      { title: "Company & LLP Formation", desc: "Incorporation, registered-office compliance, and ongoing ROC filings." },
      { title: "Arbitration", desc: "Clause drafting, Section 9 interim relief, and Section 11 appointments before the Gujarat High Court." },
      { title: "Insolvency & Shareholder Disputes", desc: "IBC petitions and oppression and mismanagement claims before the NCLT Ahmedabad Bench." },
    ],
    faqs: [
      {
        question: "What is an IFSC unit and who regulates it?",
        answer:
          "It is an entity established within GIFT City's International Financial Services Centre, regulated by the IFSCA — a unified authority covering banking, capital markets, insurance, and fund management. For units established there the IFSCA replaces the separate domestic regulators, and the entity is treated as a non-resident for many exchange-control purposes.",
      },
      {
        question: "Is setting up at GIFT City the same as incorporating a company?",
        answer:
          "No. It combines SEZ unit approval, IFSCA registration or authorisation for the relevant activity, incorporation, and a lease within the zone. Sequencing these correctly matters, because approvals depend on one another and treating it as a simple incorporation is the most common cause of delay.",
      },
      {
        question: "Which NCLT bench covers Gandhinagar?",
        answer:
          "The NCLT Ahmedabad Bench, which has jurisdiction over Gujarat. Insolvency petitions, oppression and mismanagement claims, and scheme approvals are filed and heard there.",
      },
      {
        question: "Can we challenge a state government tender decision?",
        answer:
          "Within limits. Courts review the process for arbitrariness, mala fides, or breach of the tender conditions rather than reassessing the commercial merits. Blacklisting is treated more strictly, and an order imposed without a show-cause notice and hearing is regularly set aside on writ.",
      },
      {
        question: "How do we claim a state industrial incentive or subsidy?",
        answer:
          "Under the applicable state industrial policy, which sets eligibility, timelines, and documentation, and claims are commonly disputed on eligibility or on delay in application. Where a claim is wrongly rejected the challenge is by writ before the Gujarat High Court, so keeping the application record complete from the start is important.",
      },
    ],
    localNotes: [
      "GIFT City units are regulated by the IFSCA, a unified regulator that replaces the domestic financial regulators inside the IFSC.",
      "Setup combines SEZ approval, IFSCA authorisation, incorporation, and lease — sequence matters.",
      "Away from GIFT, Gandhinagar corporate work centres on the state government as counterparty: tenders, incentives, blacklisting.",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // JODHPUR — PRINCIPAL SEAT of the Rajasthan High Court (Jaipur is a bench).
  // Every Jodhpur page leans on this: appellate work, senior counsel depth,
  // and the writ jurisdiction covering western Rajasthan.
  // ══════════════════════════════════════════════════════════════════════
  "jodhpur__criminal-law": {
    lead:
      "Jodhpur is the principal seat of the Rajasthan High Court, which makes it the state's centre of gravity for serious criminal defence — bail, appeals, quashing, and revision from across western Rajasthan are heard here. NyaySevak connects you with Bar-Council-verified Jodhpur criminal lawyers who appear before the District & Sessions Court and the High Court's principal seat, with a bar that includes many of the state's senior criminal counsel.",
    landscape: [
      "The principal-seat status is the practical advantage. Because the Rajasthan High Court's main registry sits at Jodhpur, matters from the western districts — Barmer, Jaisalmer, Bikaner, Pali, Jalore, Sirohi, Nagaur, and Jodhpur itself — are filed and heard here rather than at the Jaipur Bench. For an accused, that means bail and quashing petitions reach a High Court bench without travelling to Jaipur, and it means the local bar has genuine depth in appellate criminal work.",
      "The offence profile of western Rajasthan has its own emphases. NDPS prosecutions are significant because the region sits on established trafficking routes and because Rajasthan is one of the states where licit opium cultivation is permitted under licence, which produces prosecutions turning on the difference between licensed and unlicensed quantities. Bail in NDPS matters is constrained by the Section 37 threshold for commercial quantities, so the classification of the seized quantity is usually the decisive issue.",
      "Alongside this, the district generates the ordinary run of criminal work — property offences, cheating in the handicraft and stone export trades, road-accident prosecutions on the highway corridors, and matrimonial cruelty complaints. Anticipatory bail is moved before the Sessions Court and then the High Court, and because both are in the same city, the escalation is faster here than almost anywhere else in Rajasthan.",
    ],
    courtsForThisMatter: [
      "Rajasthan High Court, Principal Seat at Jodhpur (bail, appeals, quashing, revision)",
      "Jodhpur District & Sessions Court (sessions trials, bail)",
      "Chief Judicial Magistrate & Magistrate Courts, Jodhpur",
      "Special Court (NDPS), Jodhpur",
      "Special Court (POCSO, SC/ST Act), Jodhpur",
      "Juvenile Justice Board, Jodhpur",
    ],
    caseTypes: [
      { title: "Bail & Anticipatory Bail", desc: "Sessions and High Court bail at the principal seat, including matters escalated from western Rajasthan districts." },
      { title: "NDPS Defence", desc: "Quantity classification, Section 37 bail constraints, and licensed-cultivation issues specific to Rajasthan." },
      { title: "Criminal Appeals & Revision", desc: "Appeals against conviction and revision petitions before the Rajasthan High Court's principal seat." },
      { title: "Quashing Petitions", desc: "Challenging FIRs and complaints that disclose a civil dispute rather than an offence." },
      { title: "Cheating & Trade Fraud", desc: "Handicraft, stone, and guar trade defaults prosecuted as cheating and breach of trust." },
      { title: "Dowry & Domestic Cruelty Defence", desc: "Section 85 BNS matters, including quashing on settlement at the High Court." },
      { title: "Property & Land Offences", desc: "Forgery, forcible dispossession, and disputes over agricultural and urban holdings." },
      { title: "Cyber & Financial Fraud", desc: "Online investment and UPI fraud, and Economic Offences Wing matters." },
    ],
    faqs: [
      {
        question: "Why does it matter that Jodhpur is the principal seat?",
        answer:
          "Because the Rajasthan High Court's main registry is here, matters from the western districts are filed and heard at Jodhpur rather than at the Jaipur Bench. Bail, appeals, and quashing therefore reach a High Court bench in the same city as the trial court, and the local bar has real depth in appellate criminal work.",
      },
      {
        question: "Which districts come to the Jodhpur seat?",
        answer:
          "Broadly the western Rajasthan districts, including Jodhpur, Barmer, Jaisalmer, Bikaner, Pali, Jalore, Sirohi, and Nagaur, while eastern districts go to the Jaipur Bench. Since filing at the wrong seat causes real delay, the correct seat should be confirmed before a petition is drafted.",
      },
      {
        question: "How hard is bail in an NDPS case?",
        answer:
          "It depends almost entirely on the quantity. For a commercial quantity, Section 37 of the NDPS Act imposes an additional threshold that the court must be satisfied of before granting bail, which makes it substantially harder. For small or intermediate quantities the ordinary considerations apply, so the classification of what was seized is usually the central issue.",
      },
      {
        question: "Does licensed opium cultivation affect NDPS cases here?",
        answer:
          "It can. Rajasthan is one of the states where opium cultivation is permitted under licence, so prosecutions frequently turn on whether the quantity held was within the licensed entitlement and whether the licence conditions were complied with. These defences require careful documentary work on the licence records.",
      },
      {
        question: "Where do I apply for anticipatory bail in Jodhpur?",
        answer:
          "Before the Sessions Court at Jodhpur first, and then the Rajasthan High Court at its principal seat here if refused. Having both in the same city makes escalation quicker than in most Rajasthan districts. Your first step through NyaySevak is a free case assessment.",
      },
    ],
    localNotes: [
      "Jodhpur is the principal seat of the Rajasthan High Court — the Jaipur Bench hears the eastern districts.",
      "NDPS classification of quantity drives bail outcomes because of the Section 37 threshold for commercial quantities.",
      "Rajasthan's licensed opium cultivation creates NDPS defences that do not exist in most states.",
    ],
  },

  "jodhpur__civil-law": {
    lead:
      "Jodhpur's civil practice is shaped by its status as the Rajasthan High Court's principal seat and by western Rajasthan's land economy — agricultural holdings under the Rajasthan Tenancy Act, mining leases in the sandstone belt, and revenue records that carry a long history of khatedari rights. NyaySevak connects you with Bar-Council-verified Jodhpur civil lawyers for land, revenue, contract, and appellate work.",
    landscape: [
      "Revenue law is central here in a way it is not in metro cities. Agricultural land in Rajasthan is held largely as khatedari tenancy under the Rajasthan Tenancy Act, and disputes about khatedari rights, mutation, partition of agricultural holdings, and conversion for non-agricultural use are decided by the revenue hierarchy — the Tehsildar, the Sub-Divisional Officer, the Collector, and ultimately the Board of Revenue at Ajmer — rather than by the civil courts. Filing a civil suit over a matter within the revenue jurisdiction gets it dismissed at the threshold.",
      "The distinction between revenue and civil jurisdiction is therefore the first question in most Jodhpur land matters. Broadly, questions of tenancy rights, mutation, and agricultural partition go to revenue authorities, while title disputes, specific performance, and injunctions between private parties remain civil. Many matters straddle both, and running the wrong track first can cost years, which is why local counsel value the jurisdictional assessment highly.",
      "Commercially, Jodhpur's handicraft and stone export businesses generate contract and recovery disputes, handled by summary suit, Commercial Court claim, or arbitration depending on the documentation. Mining leases in the sandstone belt add a further layer, with lease conditions, royalty disputes, and environmental clearance issues challenged before the mining authorities and by writ at the High Court's principal seat.",
    ],
    courtsForThisMatter: [
      "Rajasthan High Court, Principal Seat at Jodhpur (writs, second appeals, Section 11)",
      "Civil Judge & District Judge, Jodhpur (suits and appeals)",
      "Commercial Court, Jodhpur",
      "Revenue courts — Tehsildar, SDO, Collector (khatedari, mutation, partition)",
      "Board of Revenue, Ajmer (final revenue appellate authority)",
      "District Consumer Commission, Jodhpur",
    ],
    caseTypes: [
      { title: "Khatedari & Tenancy Rights", desc: "Disputes over agricultural tenancy rights under the Rajasthan Tenancy Act before the revenue hierarchy." },
      { title: "Mutation & Revenue Records", desc: "Correction of records, succession entries, and partition of agricultural holdings." },
      { title: "Land Conversion", desc: "Conversion of agricultural land for residential, commercial, or industrial use." },
      { title: "Title Suits & Specific Performance", desc: "Civil suits over title, agreements to sell, and injunctions between private parties." },
      { title: "Mining Lease Disputes", desc: "Lease conditions, royalty demands, and clearance issues in the sandstone belt." },
      { title: "Commercial Recovery", desc: "Summary suits and Commercial Court claims for handicraft and stone export businesses." },
      { title: "Arbitration Support", desc: "Section 9 interim relief and Section 11 appointments at the High Court's principal seat." },
      { title: "Writ Petitions", desc: "Challenges to revenue, municipal, and state authority action before the principal seat." },
    ],
    faqs: [
      {
        question: "Should my land dispute go to a civil court or a revenue court?",
        answer:
          "It depends on the nature of the right claimed. Khatedari tenancy rights, mutation, and partition of agricultural holdings fall within the revenue hierarchy, while title disputes, specific performance, and injunctions between private parties are civil. Filing in the wrong forum leads to dismissal at the threshold, so this assessment should come before anything is drafted.",
      },
      {
        question: "What is khatedari tenancy?",
        answer:
          "It is the principal form of agricultural land holding in Rajasthan under the Rajasthan Tenancy Act, carrying heritable and generally transferable rights subject to statutory restrictions. Disputes about who holds khatedari rights, and about entries recording them, are decided by revenue authorities rather than civil courts.",
      },
      {
        question: "Where do revenue appeals finally go?",
        answer:
          "Through the revenue hierarchy — Tehsildar, Sub-Divisional Officer, and Collector — with the Board of Revenue at Ajmer as the final revenue appellate authority. Its orders can then be challenged by writ before the Rajasthan High Court, which for the western districts means the principal seat at Jodhpur.",
      },
      {
        question: "Can I convert agricultural land for construction?",
        answer:
          "Conversion has to be obtained from the competent revenue authority before non-agricultural use, and the process considers the land's category, location, and the applicable master plan. Construction without conversion exposes the owner to demolition and penalty, so the permission should precede any development.",
      },
      {
        question: "How long do I have to file a civil suit?",
        answer:
          "Broadly three years for most money and contract claims and twelve years for possession of immovable property, running from when the cause of action arose. Revenue proceedings have their own timelines, which are often shorter, so a matter should be assessed early.",
      },
    ],
    localNotes: [
      "Agricultural tenancy, mutation, and partition go to the revenue hierarchy, not to civil courts.",
      "The Board of Revenue at Ajmer is the final revenue appellate authority for the whole of Rajasthan.",
      "Jodhpur's principal-seat status means writs and second appeals for western Rajasthan are filed in the same city.",
    ],
  },

  "jodhpur__family-matrimonial": {
    lead:
      "Jodhpur combines a Family Court with immediate access to the Rajasthan High Court's principal seat, which matters more in matrimonial work than people expect: appeals against Family Court orders, quashing of cruelty complaints on settlement, and transfer applications are all heard in the same city. NyaySevak connects you with Bar-Council-verified Jodhpur divorce and family lawyers for divorce, maintenance, custody, and settlement.",
    landscape: [
      "The Family Court at Jodhpur hears divorce, judicial separation, restitution of conjugal rights, custody, and guardianship, and appeals from its orders go to a Division Bench of the Rajasthan High Court sitting at the principal seat here. Because the appellate forum is local, an unfavourable order can be challenged without the delay and cost that litigants in other western Rajasthan districts face.",
      "Mutual-consent divorce follows the two-motion structure under Section 13B of the Hindu Marriage Act with a six-month statutory gap between motions, which the court can waive following the Supreme Court's guidance in Amardeep Singh where the parties have long been separated and the settlement is complete and final. Where a Section 85 BNS cruelty complaint has also been filed, quashing on settlement is sought from the High Court, again at the principal seat.",
      "Maintenance in this region frequently involves agricultural and joint-family property rather than salary, so establishing the paying spouse's means becomes an exercise in land records, khatedari entries, and family holdings. The Supreme Court's Rajnesh v. Neha framework requiring affidavits of assets and income from both parties gives the court a structure for this, and courts draw adverse inferences where disclosure of landholdings is incomplete.",
    ],
    courtsForThisMatter: [
      "Family Court, Jodhpur (divorce, custody, guardianship, maintenance)",
      "Magistrate Courts, Jodhpur (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Rajasthan High Court, Principal Seat at Jodhpur (appeals, quashing on settlement)",
      "Principal District Judge, Jodhpur",
      "Supreme Court of India (transfer petitions between states)",
      "Mediation Centre, Jodhpur District Court",
    ],
    caseTypes: [
      { title: "Mutual Consent Divorce", desc: "Two-motion Section 13B petitions at the Jodhpur Family Court, with waiver of the six-month gap where appropriate." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, and adultery petitions and defences before the Family Court." },
      { title: "Maintenance & Alimony", desc: "Claims where means must be established from land records and family holdings under the Rajnesh framework." },
      { title: "Child Custody & Guardianship", desc: "Custody, visitation, and guardianship decided on the welfare of the child." },
      { title: "Domestic Violence Proceedings", desc: "Protection, residence, and monetary orders before the Magistrate at Jodhpur." },
      { title: "Family Court Appeals", desc: "Division Bench appeals at the Rajasthan High Court's principal seat in the same city." },
      { title: "Section 85 BNS Defence & Quashing", desc: "Defending cruelty allegations and quashing on settlement at the principal seat." },
      { title: "Succession & Family Property", desc: "Wills, succession certificates, and division of agricultural and inherited property." },
    ],
    faqs: [
      {
        question: "Can I appeal a Family Court order in Jodhpur?",
        answer:
          "Yes. Appeals from Family Court orders go to a Division Bench of the Rajasthan High Court, which for Jodhpur sits at the principal seat in the same city. That local access makes challenging an unfavourable order considerably quicker than for litigants in surrounding districts.",
      },
      {
        question: "How is maintenance assessed when income comes from land?",
        answer:
          "The court examines land records, khatedari entries, crop income, and family holdings rather than salary documents. Under Rajnesh v. Neha both spouses file affidavits of assets and income, and incomplete disclosure of landholdings commonly leads the court to draw an adverse inference.",
      },
      {
        question: "How long does a mutual consent divorce take?",
        answer:
          "Usually six to twelve months because of the two-motion structure and the statutory gap. Where separation has been long and the settlement is complete, the Family Court can waive the six-month gap and the matter may conclude in two to three months.",
      },
      {
        question: "Can a cruelty case be closed if we settle?",
        answer:
          "A Section 85 BNS complaint is not compoundable as of right, but the High Court can quash it where the parties have genuinely settled, and that petition is filed at the principal seat here. A comprehensive settlement is usually drafted to cover the divorce, maintenance, custody, and the criminal and DV proceedings together.",
      },
      {
        question: "Is a domestic violence case heard by the Family Court?",
        answer:
          "No — the Magistrate hears Domestic Violence Act proceedings while the Family Court hears divorce and custody. Because the tracks run in parallel before different judges, settlements are structured to close all of them at once.",
      },
    ],
    localNotes: [
      "Family Court appeals go to a Division Bench at the Rajasthan High Court's principal seat in Jodhpur itself.",
      "Maintenance here is often assessed from land records and khatedari entries rather than salary documents.",
      "Quashing a cruelty complaint on settlement is sought from the High Court, not the Family Court.",
    ],
  },

  "jodhpur__property-real-estate": {
    lead:
      "Property work in Jodhpur runs on the revenue system. Most land begins as khatedari agricultural holding under the Rajasthan Tenancy Act, and whether it can be sold, converted, or built on is decided by revenue authorities rather than civil courts. NyaySevak connects you with Bar-Council-verified Jodhpur property lawyers for title and revenue-record verification, conversion, JDA matters, and RERA complaints.",
    landscape: [
      "Start with the revenue record. The jamabandi and khasra entries establish who holds khatedari rights, what the land category is, and whether any restriction or encumbrance is recorded, and a mutation entry is not by itself proof of title. Because agricultural land in and around Jodhpur is regularly sold for development, the sequence of conversion, layout approval, and municipal or development-authority sanction determines whether a plot can lawfully be built on at all.",
      "The Jodhpur Development Authority governs planned development in the urban area, issuing layout approvals, regularising unauthorised colonies under state schemes, and allotting plots on terms that carry conditions. Buying in an unapproved colony is the single most common property mistake here, because regularisation is discretionary, may attract substantial charges, and can leave the buyer without access to building sanction or institutional finance.",
      "For flat buyers in registered projects, the Rajasthan Real Estate Regulatory Authority provides remedies of refund with interest, delay compensation, or directions to complete, with appeals to the Rajasthan Real Estate Appellate Tribunal. Writ challenges to revenue, municipal, and development-authority action are filed before the Rajasthan High Court's principal seat here, which makes the escalation path shorter than in most of the state.",
    ],
    courtsForThisMatter: [
      "Revenue courts — Tehsildar, SDO, Collector (khatedari, mutation, conversion)",
      "Board of Revenue, Ajmer (final revenue appellate authority)",
      "Jodhpur Development Authority (layout approval, regularisation, allotment)",
      "Rajasthan Real Estate Regulatory Authority (registered project complaints)",
      "Civil & Commercial Courts, Jodhpur (title, specific performance, injunctions)",
      "Rajasthan High Court, Principal Seat at Jodhpur (writs against authorities)",
    ],
    caseTypes: [
      { title: "Revenue Record Verification", desc: "Jamabandi, khasra, and mutation checks to establish khatedari rights and land category." },
      { title: "Land Conversion", desc: "Conversion of agricultural land for residential, commercial, or industrial use before development." },
      { title: "Unapproved Colony & Regularisation", desc: "Assessing regularisation prospects and charges before buying in an unapproved layout." },
      { title: "JDA Allotment Disputes", desc: "Allotment conditions, cancellation, lease terms, and transfer permission." },
      { title: "RERA Complaints", desc: "Refund with interest, delay compensation, and completion directions for registered projects." },
      { title: "Title Suits & Specific Performance", desc: "Civil suits over title and enforcement of agreements to sell, with injunctions." },
      { title: "Partition & Succession", desc: "Partition of agricultural and urban holdings, succession entries, and mutation corrections." },
      { title: "Tenancy & Commercial Leasing", desc: "Lease drafting, eviction, and rent recovery for shops and commercial premises." },
    ],
    faqs: [
      {
        question: "Is a mutation entry proof that I own the land?",
        answer:
          "No. Mutation records a change in the revenue entries for the purpose of collecting land revenue; it does not by itself establish title. Title has to be traced through the chain of documents and read together with the jamabandi and khasra entries, which is why a revenue-record examination is the starting point of any Jodhpur purchase.",
      },
      {
        question: "What is the risk of buying in an unapproved colony?",
        answer:
          "It is the most common and most costly property mistake in Jodhpur. Without development-authority approval you may be unable to obtain building sanction or institutional finance, and regularisation under a state scheme is discretionary and can carry substantial charges. Approval status should be verified before any payment.",
      },
      {
        question: "Do I need conversion before building on agricultural land?",
        answer:
          "Yes. Agricultural land must be converted for non-agricultural use by the competent revenue authority before it is developed, and layout and building approvals follow from that. Construction without conversion exposes the owner to demolition and penalty regardless of how the land was purchased.",
      },
      {
        question: "What can RERA do about a delayed Jodhpur project?",
        answer:
          "For a registered project, the Rajasthan Real Estate Regulatory Authority can order a refund with interest, award compensation for delay, or direct completion, with appeals to the Rajasthan Real Estate Appellate Tribunal. Unregistered projects fall outside that remedy, which is another reason to check registration before booking.",
      },
      {
        question: "Where do I challenge a revenue or JDA order?",
        answer:
          "Revenue orders go up the revenue hierarchy to the Board of Revenue at Ajmer, and development-authority action is challenged before the authority and then by writ. Writs from Jodhpur are filed at the Rajasthan High Court's principal seat in the same city, which shortens the escalation considerably.",
      },
    ],
    localNotes: [
      "A mutation entry is a revenue record, not proof of title — the document chain must still be traced.",
      "Buying in an unapproved colony can leave a plot without building sanction or institutional finance.",
      "Conversion from agricultural use must precede development, and writs go to the principal seat in Jodhpur itself.",
    ],
  },

  "jodhpur__corporate-business": {
    lead:
      "Jodhpur's business economy is export-facing — handicraft and wooden furniture, sandstone, guar gum, and the trading houses around them — which puts export documentation, payment security, and cross-border dispute resolution at the centre of its corporate work. NyaySevak connects you with Bar-Council-verified Jodhpur corporate lawyers for export contracts, MSME recovery, incorporation, and NCLT matters at the Jaipur Bench.",
    landscape: [
      "Export exposure defines the risk profile. A Jodhpur handicraft or stone exporter typically deals with overseas buyers on letters of credit or open account, which makes the choice of incoterms, the payment mechanism, and the governing law and forum in the contract far more consequential than the price terms. Where payment fails, recovery against a foreign buyer through Indian courts is slow, so credit insurance and a workable arbitration clause with an enforceable seat are the practical protections.",
      "Domestically, most Jodhpur units are MSMEs, and the Samadhaan route before the MSME Facilitation Council is the strongest recovery tool against delayed-paying domestic buyers, carrying compound interest at three times the RBI bank rate and a statutory conciliation-then-arbitration structure. Udyam registration generally has to predate the transaction, so registering before trading, rather than after a default, is what makes the remedy available.",
      "Company and insolvency matters go to the NCLT Jaipur Bench, which has jurisdiction over Rajasthan. Below the one-crore IBC default threshold the usable tools are Section 138 prosecutions, Order XXXVII summary suits, and Commercial Court claims. Mining-linked businesses face an additional regulatory layer of lease conditions, royalty assessment, and environmental clearance, challenged before the mining authorities and by writ at the High Court's principal seat here.",
    ],
    courtsForThisMatter: [
      "NCLT Jaipur Bench (insolvency, oppression and mismanagement, schemes)",
      "MSME Facilitation Council, Rajasthan (Samadhaan delayed-payment claims)",
      "Commercial Court, Jodhpur",
      "Magistrate Courts, Jodhpur (Section 138 NI Act prosecutions)",
      "Rajasthan High Court, Principal Seat at Jodhpur (writs, Section 11 appointments)",
      "Labour Court, Jodhpur",
    ],
    caseTypes: [
      { title: "Export Contracts", desc: "Incoterms, letters of credit, payment security, governing law, and enforceable arbitration clauses." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered units." },
      { title: "Company & LLP Incorporation", desc: "Formation, conversion from partnership, and ongoing ROC compliance." },
      { title: "Debt Recovery", desc: "Section 138 prosecutions, summary suits, Commercial Court claims, and IBC petitions where available." },
      { title: "Mining & Lease Compliance", desc: "Lease conditions, royalty assessment, and clearance issues for stone and mineral businesses." },
      { title: "Arbitration", desc: "Clause drafting, Section 9 interim relief, and Section 11 appointments at the principal seat." },
      { title: "Labour Compliance", desc: "Factory and workshop licensing, contract labour, provident fund and ESI, and Labour Court disputes." },
      { title: "Partner & Shareholder Disputes", desc: "Dissolution and accounts suits for firms, and NCLT petitions for companies." },
    ],
    faqs: [
      {
        question: "Which NCLT bench covers Jodhpur?",
        answer:
          "The NCLT Jaipur Bench, which has jurisdiction over Rajasthan. Insolvency petitions, oppression and mismanagement claims, and scheme approvals for Jodhpur companies are filed and heard there, even though High Court work for the western districts is done at Jodhpur.",
      },
      {
        question: "How do I protect payment from an overseas buyer?",
        answer:
          "Through the commercial terms rather than through litigation. A confirmed letter of credit or advance payment, appropriate incoterms, credit insurance, and an arbitration clause with a seat whose awards are enforceable against the buyer's assets are the practical protections. Suing a foreign buyer in an Indian court after default is slow and often ineffective.",
      },
      {
        question: "What is the MSME Samadhaan route?",
        answer:
          "If you hold Udyam registration and a domestic buyer has not paid within forty-five days, you can file before the MSME Facilitation Council, which conducts conciliation followed by arbitration, with the buyer liable for compound interest at three times the RBI bank rate. Registration generally needs to predate the transaction.",
      },
      {
        question: "What compliance applies to a sandstone mining lease?",
        answer:
          "Lease conditions on area and permitted extraction, royalty assessment and payment, environmental clearance and consent to operate, and periodic returns. Disputes over royalty demands or lease cancellation are taken up before the mining authorities and, where necessary, by writ at the High Court's principal seat.",
      },
      {
        question: "Can I file an IBC petition for an unpaid invoice?",
        answer:
          "Only where the default is one crore rupees or more, which excludes most Jodhpur trade debts. Below that, the practical options are the Samadhaan route, an Order XXXVII summary suit, a Commercial Court claim, or a Section 138 prosecution.",
      },
    ],
    localNotes: [
      "Company and insolvency work goes to the NCLT Jaipur Bench even though High Court work is at Jodhpur.",
      "For exporters, payment security and an enforceable arbitration seat matter more than post-default litigation.",
      "Mining-linked businesses carry a separate regulatory layer of lease, royalty, and clearance compliance.",
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // UDAIPUR — two facts drive everything: much of the division is a Fifth
  // Schedule Scheduled Area with statutory restrictions on transferring
  // tribal land, and the economy is hospitality and marble/mining.
  // ══════════════════════════════════════════════════════════════════════
  "udaipur__criminal-law": {
    lead:
      "Udaipur's criminal docket carries a feature most Rajasthan districts do not: large parts of the division are Fifth Schedule Scheduled Areas with a substantial tribal population, which makes prosecutions under the SC/ST (Prevention of Atrocities) Act a significant and procedurally distinct category. NyaySevak connects you with Bar-Council-verified Udaipur criminal lawyers for bail, defence, and appeals to the Rajasthan High Court's principal seat at Jodhpur.",
    landscape: [
      "Atrocities Act cases follow their own procedure and it changes the strategy fundamentally. Anticipatory bail is barred under Section 18 of the SC/ST Act where a prima facie case is made out, trials are conducted by a designated Special Court, and appeals lie directly to the High Court. The practical consequence is that the defence effort concentrates on whether the ingredients of the offence are disclosed at all — because if they are, the ordinary anticipatory-bail route simply is not available.",
      "The tourism economy generates its own offences. Disputes at hotels and resorts, cheating complaints connected with destination weddings and travel bookings, excise matters arising from bar and event licensing, and complaints involving foreign nationals all surface here more than in comparable cities. Cases involving foreign tourists carry additional practical complications around passports, visa status, and travel, which need to be addressed at the bail stage rather than later.",
      "For bail and appeals, Udaipur falls under the Rajasthan High Court's principal seat at Jodhpur rather than the Jaipur Bench, so High Court work means proceedings at Jodhpur. Anticipatory bail is moved before the Sessions Court at Udaipur first and then escalated there — except in Atrocities Act matters, where the statutory bar applies and the route is a quashing petition instead.",
    ],
    courtsForThisMatter: [
      "Special Court (SC/ST Prevention of Atrocities Act), Udaipur",
      "Udaipur District & Sessions Court (sessions trials, bail)",
      "Chief Judicial Magistrate & Magistrate Courts, Udaipur",
      "Rajasthan High Court, Principal Seat at Jodhpur (appeals, quashing, revision)",
      "Special Court (NDPS, POCSO), Udaipur",
      "Juvenile Justice Board, Udaipur",
    ],
    caseTypes: [
      { title: "SC/ST Atrocities Act Defence", desc: "Special Court trials where anticipatory bail is barred under Section 18 and quashing becomes the primary route." },
      { title: "Bail & Anticipatory Bail", desc: "Sessions and High Court bail, with escalation to the principal seat at Jodhpur." },
      { title: "Tourism & Hospitality Offences", desc: "Hotel and resort disputes, excise and licensing matters, and complaints involving foreign nationals." },
      { title: "Cheating & Trade Fraud", desc: "Marble, handicraft, and travel-trade defaults prosecuted as cheating and breach of trust." },
      { title: "Land & Property Offences", desc: "Forgery and forcible dispossession, including disputes over Scheduled Area holdings." },
      { title: "NDPS Defence", desc: "Quantity classification and Section 37 bail constraints in narcotics prosecutions." },
      { title: "Dowry & Domestic Cruelty Defence", desc: "Section 85 BNS matters, including quashing on settlement at Jodhpur." },
      { title: "Cyber & Financial Fraud", desc: "Online investment, booking, and UPI fraud, and Economic Offences Wing matters." },
    ],
    faqs: [
      {
        question: "Can I get anticipatory bail in an Atrocities Act case?",
        answer:
          "Generally no. Section 18 of the SC/ST (Prevention of Atrocities) Act bars anticipatory bail where a prima facie case is made out, which is why the defence usually focuses on whether the ingredients of the offence are disclosed at all, and why a quashing petition before the High Court often becomes the primary route.",
      },
      {
        question: "Which High Court seat hears Udaipur cases?",
        answer:
          "The Rajasthan High Court's principal seat at Jodhpur, not the Jaipur Bench. Appeals, quashing petitions, and High Court bail applications from Udaipur are filed and heard at Jodhpur, which should be factored into the timeline and cost of a defence.",
      },
      {
        question: "Where are Atrocities Act cases tried?",
        answer:
          "Before a designated Special Court, with appeals lying directly to the High Court. The procedure differs from an ordinary sessions trial in several respects, including the bar on anticipatory bail and provisions for victim compensation, so counsel familiar with the Act specifically is important.",
      },
      {
        question: "What happens if a foreign tourist is involved in a case?",
        answer:
          "Practical issues around passport surrender, visa validity, and permission to travel usually arise at the bail stage, and conditions imposed then govern what follows. These should be addressed when bail is argued rather than raised afterwards, when varying the conditions is considerably harder.",
      },
      {
        question: "What happens at the first remand hearing?",
        answer:
          "The accused is produced before the Magistrate, who decides between police custody, judicial custody, and release. This hearing shapes the case, so arranging representation before the first production rather than after it usually makes the greatest practical difference.",
      },
    ],
    localNotes: [
      "Much of the Udaipur division is a Fifth Schedule Scheduled Area, making Atrocities Act procedure a routine consideration.",
      "Section 18 of the SC/ST Act bars anticipatory bail, so quashing is often the only realistic pre-arrest remedy.",
      "Udaipur falls under the Rajasthan High Court's principal seat at Jodhpur, not the Jaipur Bench.",
    ],
  },

  "udaipur__civil-law": {
    lead:
      "Udaipur's civil practice turns on two things: the revenue system that governs agricultural land across Rajasthan, and the Scheduled Area restrictions that make land transfers in much of the division legally different from anywhere else in the state. NyaySevak connects you with Bar-Council-verified Udaipur civil lawyers for land and revenue matters, hospitality contracts, mining disputes, and recovery.",
    landscape: [
      "The Scheduled Area restriction is the single most important local rule. Under Section 42 of the Rajasthan Tenancy Act, the sale, gift, or transfer of land held by a member of a Scheduled Tribe to a person who is not a member of a Scheduled Tribe is prohibited or requires prior permission in Scheduled Areas. Transactions completed in breach are liable to be set aside and the land restored, which means a buyer's entire investment can be lost years after the purchase — making tribal-status verification an unavoidable step in the Udaipur belt.",
      "The wider revenue framework applies as elsewhere in Rajasthan. Khatedari tenancy under the Rajasthan Tenancy Act governs agricultural holdings, and disputes about tenancy rights, mutation, and partition of agricultural land are decided by the revenue hierarchy — Tehsildar, Sub-Divisional Officer, Collector — with the Board of Revenue at Ajmer as the final revenue appellate authority. Title disputes and specific performance between private parties remain with the civil courts.",
      "Commercially, hospitality and mining generate the bulk of contract work. Hotel management agreements, event and destination-wedding contracts, and lease arrangements for heritage properties raise questions about licensing and permitted use, while marble and mineral operations involve lease conditions, royalty assessment, and environmental clearance, challenged before the mining authorities and by writ at the principal seat in Jodhpur.",
    ],
    courtsForThisMatter: [
      "Revenue courts — Tehsildar, SDO, Collector (khatedari, mutation, Section 42 restrictions)",
      "Board of Revenue, Ajmer (final revenue appellate authority)",
      "Civil Judge & District Judge, Udaipur (suits and appeals)",
      "Commercial Court, Udaipur",
      "Rajasthan High Court, Principal Seat at Jodhpur (writs, second appeals, Section 11)",
      "District Consumer Commission, Udaipur",
    ],
    caseTypes: [
      { title: "Scheduled Area Land Transfers", desc: "Section 42 restrictions on transfer of tribal land, permission requirements, and restoration proceedings." },
      { title: "Khatedari & Tenancy Rights", desc: "Agricultural tenancy disputes under the Rajasthan Tenancy Act before the revenue hierarchy." },
      { title: "Mutation & Revenue Records", desc: "Record correction, succession entries, and partition of agricultural holdings." },
      { title: "Hospitality Contracts", desc: "Hotel management, event, and destination-wedding agreements, and heritage-property leases." },
      { title: "Mining Lease Disputes", desc: "Lease conditions, royalty demands, and clearance issues in the marble and mineral belt." },
      { title: "Title Suits & Specific Performance", desc: "Civil suits over title and enforcement of agreements to sell, with injunctions." },
      { title: "Commercial Recovery", desc: "Summary suits and Commercial Court claims for trade and hospitality businesses." },
      { title: "Consumer Complaints", desc: "Deficiency-of-service claims against builders, hotels, banks, and service providers." },
    ],
    faqs: [
      {
        question: "Can I buy tribal land in the Udaipur area?",
        answer:
          "In a Scheduled Area, generally not without prior permission. Section 42 of the Rajasthan Tenancy Act restricts the transfer of land held by a member of a Scheduled Tribe to a person who is not, and transactions in breach can be set aside with the land restored to the original holder. The tribal status of the seller and the Scheduled Area status of the land must both be verified before any payment.",
      },
      {
        question: "What happens if a restricted transfer already went through?",
        answer:
          "Restoration proceedings can be initiated and the land returned to the original holder or their heirs, in which case the buyer's remedy is limited to recovering the consideration from the seller — often long after the money has gone. This is why the restriction is checked before purchase rather than defended afterwards.",
      },
      {
        question: "Should my land dispute go to a civil or revenue court?",
        answer:
          "Khatedari tenancy rights, mutation, and partition of agricultural holdings fall within the revenue hierarchy, while title disputes, specific performance, and injunctions between private parties are civil. Filing in the wrong forum results in dismissal at the threshold, so the assessment should come before drafting.",
      },
      {
        question: "Where do revenue appeals ultimately go?",
        answer:
          "Through the Tehsildar, Sub-Divisional Officer, and Collector, with the Board of Revenue at Ajmer as the final revenue appellate authority. Its orders can then be challenged by writ before the Rajasthan High Court, which for Udaipur means the principal seat at Jodhpur.",
      },
      {
        question: "What should a hotel or resort agreement cover in Udaipur?",
        answer:
          "Permitted use and licensing, heritage-property conservation conditions where applicable, event and liquor permissions, liability and insurance, and a dispute-resolution clause with a workable seat. Licensing and permitted-use questions cause more disputes here than commercial terms do.",
      },
    ],
    localNotes: [
      "Section 42 of the Rajasthan Tenancy Act restricts transfer of tribal land in Scheduled Areas — verify before purchase.",
      "Restoration proceedings can undo a completed sale years later, leaving the buyer with a claim only against the seller.",
      "Revenue appeals end at the Board of Revenue in Ajmer; writs go to the principal seat at Jodhpur.",
    ],
  },

  "udaipur__family-matrimonial": {
    lead:
      "Family law in the Udaipur division has a dimension that most Indian cities do not: a substantial tribal population whose marriage and succession questions can engage customary law alongside the codified statutes. NyaySevak connects you with Bar-Council-verified Udaipur divorce and family lawyers for divorce, maintenance, custody, and succession, with appeals to the Rajasthan High Court's principal seat at Jodhpur.",
    landscape: [
      "Custom matters here in a way it rarely does elsewhere. The Hindu Marriage Act preserves the validity of customary practices where a custom is ancient, certain, reasonable, and not opposed to public policy, and among Scheduled Tribe communities in the Udaipur region customary marriage and dissolution practices continue to be followed. Whether a customary divorce is legally recognised, and what has to be proved to establish the custom, is a genuine and recurring issue in this district's Family Court.",
      "For the majority of matters the codified framework applies as elsewhere. The Family Court at Udaipur hears divorce, judicial separation, restitution, custody, and guardianship, with mutual-consent divorce following the two-motion structure under Section 13B and its six-month statutory gap, waivable under the Supreme Court's Amardeep Singh guidance where separation has been long and the settlement is complete.",
      "Maintenance assessment often involves agricultural land, family holdings, and income from tourism-linked businesses rather than salary. The Supreme Court's framework in Rajnesh v. Neha, requiring both spouses to file affidavits of assets and income, gives the court a structure for testing this, and incomplete disclosure of landholdings or business receipts commonly leads to an adverse inference. Appeals from Family Court orders go to the High Court at Jodhpur.",
    ],
    courtsForThisMatter: [
      "Family Court, Udaipur (divorce, custody, guardianship, maintenance)",
      "Magistrate Courts, Udaipur (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Principal District Judge, Udaipur",
      "Rajasthan High Court, Principal Seat at Jodhpur (appeals, quashing on settlement)",
      "Supreme Court of India (transfer petitions between states)",
      "Mediation Centre, Udaipur District Court",
    ],
    caseTypes: [
      { title: "Mutual Consent Divorce", desc: "Two-motion Section 13B petitions at the Udaipur Family Court, with waiver of the gap where appropriate." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, and adultery petitions and defences before the Family Court." },
      { title: "Customary Marriage & Divorce", desc: "Establishing or contesting recognised tribal customary practices under the Hindu Marriage Act framework." },
      { title: "Maintenance & Alimony", desc: "Claims where means come from land and tourism businesses, assessed under the Rajnesh framework." },
      { title: "Child Custody & Guardianship", desc: "Custody, visitation, and guardianship decided on the welfare of the child." },
      { title: "Domestic Violence Proceedings", desc: "Protection, residence, and monetary orders before the Magistrate at Udaipur." },
      { title: "Section 85 BNS Defence & Quashing", desc: "Defending cruelty allegations and quashing on settlement at Jodhpur." },
      { title: "Succession & Family Property", desc: "Succession certificates and division of agricultural and inherited property." },
    ],
    faqs: [
      {
        question: "Is a customary tribal divorce legally valid?",
        answer:
          "It can be. The Hindu Marriage Act preserves customs that are ancient, certain, reasonable, and not opposed to public policy, and customary dissolution practices are followed among several communities in the Udaipur region. Whether a particular custom is recognised has to be pleaded and proved with evidence, so this is not something to assume either way.",
      },
      {
        question: "How is maintenance decided when income is from land?",
        answer:
          "The court examines revenue records, khatedari entries, crop and business income, and the family's holdings rather than salary documents. Under Rajnesh v. Neha both spouses file affidavits of assets and income, and incomplete disclosure of land or business receipts commonly results in an adverse inference.",
      },
      {
        question: "How long does a mutual consent divorce take?",
        answer:
          "Usually six to twelve months because of the two-motion structure and the statutory gap between motions. Where separation has been long and the settlement is complete, the Family Court can waive the six-month gap and the matter may conclude in two to three months.",
      },
      {
        question: "Where do Family Court appeals from Udaipur go?",
        answer:
          "To a Division Bench of the Rajasthan High Court at its principal seat in Jodhpur, since Udaipur falls under that seat rather than the Jaipur Bench. This should be factored into the timeline when considering whether to appeal.",
      },
      {
        question: "Is a domestic violence case heard by the Family Court?",
        answer:
          "No — Domestic Violence Act proceedings go before the Magistrate while divorce and custody are heard by the Family Court. Because they run in parallel, settlements are structured to close every proceeding at once.",
      },
    ],
    localNotes: [
      "Recognised tribal customary marriage and divorce practices are a live issue in Udaipur's Family Court.",
      "Maintenance is frequently assessed from land and tourism-business income rather than salary.",
      "Appeals go to the Rajasthan High Court's principal seat at Jodhpur.",
    ],
  },

  "udaipur__property-real-estate": {
    lead:
      "Buying property around Udaipur carries a risk that exists in few other Indian markets: much of the division is a Fifth Schedule Scheduled Area where transfers of tribal land are restricted, and a completed sale can be undone by restoration proceedings years later. NyaySevak connects you with Bar-Council-verified Udaipur property lawyers for Scheduled Area verification, revenue-record diligence, conversion, and RERA complaints.",
    landscape: [
      "Section 42 of the Rajasthan Tenancy Act is the provision that decides many Udaipur transactions. In Scheduled Areas, land held by a member of a Scheduled Tribe cannot be transferred to a non-tribal without prior permission, and a transfer made in breach can be set aside with the land restored to the original holder or their heirs. Because the restriction attaches to the status of the holder and the location of the land rather than to anything obvious on the ground, verification of both is the essential first step.",
      "The general Rajasthan framework applies on top. Agricultural land is held as khatedari tenancy, mutation records revenue entries rather than proving title, and conversion from the competent revenue authority is required before non-agricultural use. Development in the urban area is governed by the local development authority through layout approval and regularisation schemes, and buying in an unapproved colony leaves a purchaser without building sanction or institutional finance.",
      "Heritage and hospitality property adds another layer. Conversion of havelis and heritage buildings into hotels engages conservation conditions, permitted-use approvals, and licensing that are entirely separate from title, and lakefront and hill-area development around Udaipur has attracted environmental restrictions and construction limits. A transaction that clears title but ignores these approvals frequently cannot be used for its intended purpose.",
    ],
    courtsForThisMatter: [
      "Revenue courts — Tehsildar, SDO, Collector (Section 42 permission, khatedari, mutation)",
      "Board of Revenue, Ajmer (final revenue appellate authority)",
      "Udaipur development authority (layout approval, regularisation, allotment)",
      "Rajasthan Real Estate Regulatory Authority (registered project complaints)",
      "Civil & Commercial Courts, Udaipur (title, specific performance, injunctions)",
      "Rajasthan High Court, Principal Seat at Jodhpur (writs against authorities)",
    ],
    caseTypes: [
      { title: "Scheduled Area Verification", desc: "Establishing tribal status and Scheduled Area location before any transfer is agreed." },
      { title: "Restoration Proceedings", desc: "Defending or pursuing restoration of land transferred in breach of Section 42." },
      { title: "Revenue Record Diligence", desc: "Jamabandi, khasra, and mutation checks to establish khatedari rights and land category." },
      { title: "Land Conversion", desc: "Conversion of agricultural land for residential, commercial, or hospitality use." },
      { title: "Heritage & Hotel Property", desc: "Conservation conditions, permitted-use approvals, and licensing for heritage conversions." },
      { title: "RERA Complaints", desc: "Refund with interest, delay compensation, and completion directions for registered projects." },
      { title: "Title Suits & Specific Performance", desc: "Civil suits over title and enforcement of agreements to sell, with injunctions." },
      { title: "Partition & Succession", desc: "Partition of agricultural and urban holdings, succession entries, and mutation corrections." },
    ],
    faqs: [
      {
        question: "What is the biggest risk when buying land near Udaipur?",
        answer:
          "Buying restricted tribal land in a Scheduled Area. Section 42 of the Rajasthan Tenancy Act prohibits transfer of such land to a non-tribal without prior permission, and a breach can lead to the sale being set aside and the land restored years later — leaving the buyer with only a claim against the seller.",
      },
      {
        question: "How do I check whether the restriction applies?",
        answer:
          "By verifying both whether the land lies within a Scheduled Area and whether the recorded holder is a member of a Scheduled Tribe, from the revenue records and the applicable notifications. Neither is apparent from inspecting the land, which is why this check has to be done on the records before any payment.",
      },
      {
        question: "Do I need conversion before building?",
        answer:
          "Yes. Agricultural land must be converted for non-agricultural use by the competent revenue authority before development, with layout and building approvals following. Construction without conversion exposes the owner to demolition and penalty regardless of how the land was acquired.",
      },
      {
        question: "What extra approvals does a heritage hotel conversion need?",
        answer:
          "Conservation conditions where the building is protected, change of permitted use, municipal and development-authority sanction, and the hospitality and excise licences for the intended operations. These are separate from title, and a property with clear title can still be unusable for a hotel without them.",
      },
      {
        question: "What can RERA do about a delayed Udaipur project?",
        answer:
          "For a registered project, the Rajasthan Real Estate Regulatory Authority can order a refund with interest, award compensation for delay, or direct completion, with appeals to the Rajasthan Real Estate Appellate Tribunal. Unregistered projects fall outside the remedy, so registration should be checked before booking.",
      },
    ],
    localNotes: [
      "Section 42 tribal-land restrictions make Scheduled Area verification the decisive check in Udaipur transactions.",
      "A completed sale in breach can be undone by restoration proceedings long after purchase.",
      "Heritage and lakefront development carries conservation and environmental approvals separate from title.",
    ],
  },

  "udaipur__corporate-business": {
    lead:
      "Udaipur's business economy is hospitality and minerals — hotels and resorts, destination-wedding operators, and the marble and mineral processing belt that surrounds the city. Both are licence-heavy sectors where compliance failures cost more than contract disputes. NyaySevak connects you with Bar-Council-verified Udaipur corporate lawyers for hospitality licensing, mining compliance, contracts, and NCLT matters at the Jaipur Bench.",
    landscape: [
      "Hospitality is a licensing business as much as a service business. A hotel or resort needs municipal and development-authority permissions, fire and building safety clearances, food-safety registration, excise licences for liquor service, and event permissions, with additional conservation conditions where the property is heritage. Most disputes that damage a hospitality operator arise from a licence lapse or a permitted-use breach rather than from a contract, which makes compliance review the higher-value work.",
      "Mining and mineral processing carry a parallel regulatory load: lease conditions, royalty assessment and demand notices, environmental clearance and consent to operate, and periodic returns. Royalty disputes and lease cancellations are contested before the mining authorities and, where necessary, by writ before the Rajasthan High Court's principal seat at Jodhpur. Environmental proceedings from Rajasthan are heard by the National Green Tribunal's Central Zone Bench at Bhopal.",
      "For ordinary commercial work the structures are those used across Rajasthan. Company and insolvency matters go to the NCLT Jaipur Bench; recovery below the one-crore IBC threshold runs through Section 138 prosecutions, summary suits, and Commercial Court claims; and registered MSMEs can use the Samadhaan route before the Facilitation Council, which carries statutory compound interest and is often the fastest lever available.",
    ],
    courtsForThisMatter: [
      "NCLT Jaipur Bench (insolvency, oppression and mismanagement, schemes)",
      "MSME Facilitation Council, Rajasthan (Samadhaan delayed-payment claims)",
      "Mining authorities & Collector (lease conditions, royalty, cancellation)",
      "National Green Tribunal, Central Zone Bench at Bhopal (environmental matters)",
      "Commercial Court, Udaipur",
      "Rajasthan High Court, Principal Seat at Jodhpur (writs, Section 11 appointments)",
    ],
    caseTypes: [
      { title: "Hospitality Licensing", desc: "Municipal, fire, food-safety, excise, and event permissions for hotels, resorts, and venues." },
      { title: "Hotel & Event Contracts", desc: "Management agreements, destination-wedding contracts, and vendor and venue arrangements." },
      { title: "Mining Lease Compliance", desc: "Lease conditions, royalty assessment, clearance, and returns for marble and mineral operations." },
      { title: "Environmental Proceedings", desc: "Consent to operate, closure directions, and NGT applications affecting processing units." },
      { title: "Company & LLP Incorporation", desc: "Formation, conversion from partnership, and ongoing ROC compliance." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered units." },
      { title: "Debt Recovery", desc: "Section 138 prosecutions, summary suits, Commercial Court claims, and IBC petitions where available." },
      { title: "Labour Compliance", desc: "Establishment registration, contract labour, provident fund and ESI, and Labour Court disputes." },
    ],
    faqs: [
      {
        question: "What licences does a resort near Udaipur need?",
        answer:
          "Typically municipal or development-authority permission, building and fire safety clearances, food-safety registration, excise licences where liquor is served, event permissions, and pollution-control consent, with conservation conditions on a heritage property. A licence lapse damages a hospitality business faster than most contract disputes do.",
      },
      {
        question: "Which NCLT bench covers Udaipur?",
        answer:
          "The NCLT Jaipur Bench, which has jurisdiction over Rajasthan. Insolvency petitions, oppression and mismanagement claims, and scheme approvals for Udaipur companies are filed and heard there, even though High Court work goes to the principal seat at Jodhpur.",
      },
      {
        question: "How do we challenge a royalty demand on a mining lease?",
        answer:
          "First before the mining authorities through the statutory appeal and revision mechanism, and where that is exhausted or the action is without jurisdiction, by writ before the Rajasthan High Court's principal seat at Jodhpur. Assessments should be contested within the prescribed timelines, since delay itself narrows the remedy.",
      },
      {
        question: "Where are environmental matters from Rajasthan heard?",
        answer:
          "Applications under the National Green Tribunal Act from Rajasthan go to the NGT's Central Zone Bench at Bhopal. Regulatory action by the state pollution control board, such as closure or consent refusal, is challenged before the appellate authority and by writ.",
      },
      {
        question: "What is the fastest way to recover a business debt?",
        answer:
          "For a registered MSME, the Samadhaan route before the Facilitation Council, which carries compound interest at three times the RBI bank rate. Otherwise a Section 138 prosecution on a bounced cheque, an Order XXXVII summary suit, or a Commercial Court claim above the specified value.",
      },
    ],
    localNotes: [
      "Hospitality risk in Udaipur is concentrated in licensing and permitted use rather than in contract terms.",
      "Mining and processing carry lease, royalty, and environmental obligations enforced by separate authorities.",
      "NCLT work goes to Jaipur while High Court work goes to Jodhpur — the two do not follow the same map.",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════
  // KOTA — India's coaching capital. The distinctive legal work is education
  // and consumer law (fee refunds, institute liability, hostel tenancy),
  // which no other Indian city generates at this scale.
  // ══════════════════════════════════════════════════════════════════════
  "kota__criminal-law": {
    lead:
      "Kota's criminal docket reflects a city where roughly two lakh teenagers live away from their families in hostels and paying-guest accommodation. Alongside the industrial belt's ordinary caseload, the city generates matters around student welfare, hostel safety, ragging, and offences involving and against minors. NyaySevak connects you with Bar-Council-verified Kota criminal lawyers for bail, defence, and appeals to the Rajasthan High Court's Jaipur Bench.",
    landscape: [
      "A large migrant student population changes the profile of criminal work. Offences involving people under eighteen engage the Juvenile Justice Act, where a child in conflict with law is dealt with by the Juvenile Justice Board rather than an ordinary court, and offences against minors engage the POCSO Act with its Special Court, in-camera procedure, and statutory presumptions. Both regimes are procedurally distinct from ordinary criminal practice.",
      "Institutional liability has become a recurring theme. Where a student comes to harm, questions arise about the responsibility of the hostel operator, the coaching institute, and the warden — pursued through complaints alleging negligence and, where the facts support it, abetment. State and central guidance on coaching centres has introduced obligations around counselling, safety measures, and reporting, and non-compliance now features in both regulatory action and criminal complaints.",
      "The industrial belt around Kota adds the usual run of economic offences, cheque-bounce prosecutions, and factory-related matters, while the district's location on inter-state routes brings NDPS and excise work. Bail is moved before the Sessions Court at Kota and escalated to the Rajasthan High Court's Jaipur Bench, which has jurisdiction over the eastern districts including Kota.",
    ],
    courtsForThisMatter: [
      "Kota District & Sessions Court (sessions trials, bail)",
      "Chief Judicial Magistrate & Magistrate Courts, Kota",
      "Juvenile Justice Board, Kota (children in conflict with law)",
      "Special Court (POCSO), Kota",
      "Rajasthan High Court, Jaipur Bench (appeals, quashing, revision)",
      "Special Court (NDPS), Kota",
    ],
    caseTypes: [
      { title: "Bail & Anticipatory Bail", desc: "Regular and anticipatory bail before the Kota Sessions Court and the Rajasthan High Court's Jaipur Bench." },
      { title: "Juvenile Justice Matters", desc: "Representation before the Juvenile Justice Board where a person under eighteen is in conflict with law." },
      { title: "POCSO Defence & Prosecution", desc: "Special Court proceedings with in-camera procedure and statutory presumptions." },
      { title: "Ragging & Hostel Safety", desc: "Complaints involving hostels, wardens, and institutions, including negligence and abetment allegations." },
      { title: "Student-Related Offences", desc: "Matters involving migrant students, including those arising far from the student's home state." },
      { title: "Cheque Bounce & Economic Offences", desc: "Section 138 prosecutions and cheating complaints from the industrial and trading belt." },
      { title: "NDPS Defence", desc: "Quantity classification and Section 37 bail constraints in narcotics prosecutions." },
      { title: "Quashing & Criminal Revision", desc: "Jaipur Bench petitions challenging FIRs, complaints, and orders passed at Kota." },
    ],
    faqs: [
      {
        question: "My child is a student in Kota and has been named in an FIR. What happens?",
        answer:
          "If they are under eighteen they are dealt with by the Juvenile Justice Board rather than an ordinary criminal court, and the procedure and outcomes differ substantially. If they are over eighteen, ordinary criminal procedure applies. Either way the first production before the Board or Magistrate is the critical hearing, so representation should be arranged before it.",
      },
      {
        question: "Can a hostel or coaching institute be held responsible if a student is harmed?",
        answer:
          "It can, depending on the facts. Complaints commonly allege negligence by the hostel operator, warden, or institute, and where the circumstances support it, abetment. Regulatory obligations introduced for coaching centres around counselling, safety, and reporting are increasingly relied on to establish the standard of care expected.",
      },
      {
        question: "Which High Court bench hears Kota matters?",
        answer:
          "The Rajasthan High Court's Jaipur Bench, which covers the eastern districts including Kota. Appeals, quashing petitions, and High Court bail applications from Kota are filed there rather than at the principal seat in Jodhpur.",
      },
      {
        question: "How does a POCSO case differ from an ordinary trial?",
        answer:
          "It is tried by a designated Special Court, conducted in camera with protections for the child's identity, subject to statutory timelines, and carries presumptions that shift significant evidential weight onto the accused. Because of those presumptions, the defence has to be prepared with particular care from the investigation stage.",
      },
      {
        question: "What happens at the first remand hearing?",
        answer:
          "The Magistrate decides between police custody, judicial custody, and release. This hearing shapes everything that follows, which is why arranging representation before the first production rather than after usually makes the greatest practical difference.",
      },
    ],
    localNotes: [
      "Kota's large migrant student population makes Juvenile Justice and POCSO procedure a routine part of local practice.",
      "Institutional liability of hostels, wardens, and coaching centres is an active and developing area here.",
      "Kota falls under the Rajasthan High Court's Jaipur Bench, not the Jodhpur principal seat.",
    ],
  },

  "kota__civil-law": {
    lead:
      "No other Indian city generates the volume of education-linked civil and consumer disputes that Kota does. Coaching fee refunds, hostel and paying-guest tenancies, and service-deficiency claims against institutes form a category of work that barely exists elsewhere. NyaySevak connects you with Bar-Council-verified Kota civil lawyers for consumer claims, tenancy, recovery, and land and revenue matters.",
    landscape: [
      "Fee refund disputes are the signature local matter. Consumer forums have consistently held that coaching institutes cannot retain the entire fee where a student discontinues, treating blanket no-refund clauses as an unfair trade practice, and central guidance for coaching centres now provides for proportionate refunds within defined timelines. Claims are brought before the District Consumer Commission at Kota, and because the amounts are individually modest but the pattern is repetitive, these matters are often resolved quickly once properly framed.",
      "Hostel and paying-guest accommodation generates a second stream. Thousands of arrangements are made on informal terms — advance payments, security deposits, and annual commitments — with little documentation, so disputes over deposit refunds, mid-year exit, and eviction are constant. Where the arrangement amounts to a tenancy the Rajasthan rent framework and the civil courts apply; where it is a licence for accommodation with services, the analysis and the remedy differ.",
      "Beyond the education economy, Kota's civil docket follows the wider Rajasthan pattern. Agricultural land is held as khatedari tenancy with disputes about tenancy rights, mutation, and partition decided by the revenue hierarchy up to the Board of Revenue at Ajmer, while title suits, specific performance, and injunctions remain with the civil courts. Commercial recovery for the industrial belt runs through summary suits and the Commercial Court.",
    ],
    courtsForThisMatter: [
      "District Consumer Commission, Kota (fee refunds, service deficiency)",
      "Rajasthan State Consumer Commission (appeals)",
      "Civil Judge & District Judge, Kota (suits, tenancy, appeals)",
      "Commercial Court, Kota",
      "Revenue courts & Board of Revenue, Ajmer (khatedari, mutation, partition)",
      "Rajasthan High Court, Jaipur Bench (writs, second appeals)",
    ],
    caseTypes: [
      { title: "Coaching Fee Refund Claims", desc: "Consumer complaints against institutes retaining fees after a student discontinues." },
      { title: "Service Deficiency Against Institutes", desc: "Claims over misrepresented facilities, faculty, batch changes, and admission assurances." },
      { title: "Hostel & PG Disputes", desc: "Security deposit refunds, mid-year exit, and eviction from student accommodation." },
      { title: "Tenancy & Rent Recovery", desc: "Residential and commercial tenancy disputes, including landlord claims against operators." },
      { title: "Recovery & Summary Suits", desc: "Order XXXVII suits and Commercial Court claims for the industrial and trading belt." },
      { title: "Khatedari & Revenue Matters", desc: "Agricultural tenancy rights, mutation, and partition before the revenue hierarchy." },
      { title: "Title Suits & Specific Performance", desc: "Civil suits over title and enforcement of agreements to sell, with injunctions." },
      { title: "Motor Accident & Insurance Claims", desc: "MACT compensation and insurance repudiation disputes." },
    ],
    faqs: [
      {
        question: "Can I get a refund if my child leaves a Kota coaching institute?",
        answer:
          "Usually a proportionate refund is recoverable. Consumer forums have repeatedly held that retaining the entire fee after a student discontinues is an unfair trade practice, and central guidance for coaching centres provides for proportionate refunds within defined timelines. A blanket no-refund clause in the admission form does not by itself defeat the claim.",
      },
      {
        question: "Where do I file a fee refund complaint?",
        answer:
          "Before the District Consumer Commission at Kota, with appeals to the Rajasthan State Consumer Commission. These claims are individually modest but well-established, and once properly framed with the admission documents, receipts, and the discontinuation record, they are often resolved without prolonged litigation.",
      },
      {
        question: "My hostel is refusing to return the security deposit. What can I do?",
        answer:
          "A deposit is refundable subject to legitimate deductions, and refusal without justification can be pursued as a consumer complaint or a civil recovery claim depending on the nature of the arrangement. Keeping the receipt, the written terms, and a record of the condition of the room at exit makes these claims considerably easier to establish.",
      },
      {
        question: "Is a PG arrangement a tenancy?",
        answer:
          "Not necessarily. Where accommodation is provided with services and without exclusive possession it is generally a licence rather than a tenancy, which changes both the protections available and the remedy for eviction or deposit recovery. The distinction turns on the substance of the arrangement rather than what the document is called.",
      },
      {
        question: "Should a land dispute go to a civil or revenue court?",
        answer:
          "Khatedari tenancy rights, mutation, and partition of agricultural holdings fall within the revenue hierarchy up to the Board of Revenue at Ajmer, while title disputes, specific performance, and injunctions between private parties are civil. Filing in the wrong forum leads to dismissal at the threshold.",
      },
    ],
    localNotes: [
      "Coaching fee refund claims are the signature Kota consumer matter, and blanket no-refund clauses do not defeat them.",
      "Whether student accommodation is a tenancy or a licence changes the protections and the remedy available.",
      "Agricultural land disputes go to the revenue hierarchy, ending at the Board of Revenue in Ajmer.",
    ],
  },

  "kota__family-matrimonial": {
    lead:
      "Kota's family law practice serves two distinct populations: an established local community around the industrial and trading economy, and families spread across the country whose children study here — which makes guardianship, custody, and cross-state jurisdiction unusually frequent. NyaySevak connects you with Bar-Council-verified Kota divorce and family lawyers for divorce, maintenance, custody, and guardianship.",
    landscape: [
      "Guardianship questions arise here more than in most cities. Where a minor lives in Kota for study while parents reside elsewhere, questions about who may consent to medical treatment, act in an emergency, or represent the child in proceedings become practical rather than theoretical. Applications under the Guardians and Wards Act, and local guardianship arrangements recorded properly, prevent avoidable difficulty when something goes wrong.",
      "Custody disputes involving a child studying away from home have their own dimension. Courts decide custody on the welfare of the child, and where a child is mid-way through an examination cycle, continuity of study is a factor that carries real weight. Orders in these matters often need to address travel between cities, examination schedules, and communication rather than a conventional weekly arrangement.",
      "For local families the framework is standard. The Family Court at Kota hears divorce, judicial separation, restitution, custody, and guardianship, with mutual-consent divorce following the two-motion structure under Section 13B and its six-month statutory gap, waivable where separation has been long and the settlement complete. Domestic-violence proceedings run before the Magistrate, and appeals go to the Rajasthan High Court's Jaipur Bench.",
    ],
    courtsForThisMatter: [
      "Family Court, Kota (divorce, custody, guardianship, maintenance)",
      "Magistrate Courts, Kota (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Principal District Judge, Kota (Guardians and Wards Act applications)",
      "Rajasthan High Court, Jaipur Bench (appeals, quashing on settlement)",
      "Supreme Court of India (transfer petitions between states)",
      "Mediation Centre, Kota District Court",
    ],
    caseTypes: [
      { title: "Mutual Consent Divorce", desc: "Two-motion Section 13B petitions at the Kota Family Court, with waiver of the gap where appropriate." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, and adultery petitions and defences before the Family Court." },
      { title: "Guardianship Applications", desc: "Guardians and Wards Act orders for minors residing in Kota while parents live elsewhere." },
      { title: "Child Custody", desc: "Custody and visitation arrangements built around examination schedules and inter-city travel." },
      { title: "Maintenance & Alimony", desc: "Section 24 HMA and Section 144 BNSS claims under the Rajnesh v. Neha disclosure framework." },
      { title: "Domestic Violence Proceedings", desc: "Protection, residence, and monetary orders before the Magistrate at Kota." },
      { title: "Transfer Petitions", desc: "Supreme Court petitions where spouses reside in different states." },
      { title: "Succession & Family Property", desc: "Wills, succession certificates, and division of family and business assets." },
    ],
    faqs: [
      {
        question: "My child studies in Kota but we live elsewhere. Who can act as guardian?",
        answer:
          "Parents remain the natural guardians, but where a minor lives away for study it helps to have a recorded local guardianship arrangement, and in some situations an order under the Guardians and Wards Act. This matters for medical consent, emergencies, and any proceedings involving the child, and is far easier to arrange in advance than during a crisis.",
      },
      {
        question: "How does custody work if the child is studying for exams?",
        answer:
          "Courts decide custody on the welfare of the child, and continuity of study during an examination cycle carries real weight. Orders in these cases commonly address inter-city travel, examination schedules, and regular communication rather than imposing a conventional weekly arrangement.",
      },
      {
        question: "How long does a mutual consent divorce take in Kota?",
        answer:
          "Usually six to twelve months given the two-motion structure and the statutory gap between motions. Where the parties have been separated for a long period and the settlement is complete, the Family Court can waive the six-month gap and the matter may conclude in two to three months.",
      },
      {
        question: "My spouse filed a case in another state. What are my options?",
        answer:
          "You can defend there or move the Supreme Court for a transfer petition to bring the proceedings to Kota. Which is better depends on where the child, the evidence, and the witnesses are, and on the stage the other proceeding has reached.",
      },
      {
        question: "Is a domestic violence case heard by the Family Court?",
        answer:
          "No — the Magistrate hears Domestic Violence Act proceedings while the Family Court hears divorce and custody. Because they run in parallel, settlements are structured to close every proceeding together.",
      },
    ],
    localNotes: [
      "Guardianship for minors living in Kota while parents reside elsewhere is a distinctively local requirement.",
      "Custody orders here frequently have to work around examination cycles and inter-city travel.",
      "Appeals go to the Rajasthan High Court's Jaipur Bench.",
    ],
  },

  "kota__property-real-estate": {
    lead:
      "Kota's property market is shaped by its student economy: entire neighbourhoods around Talwandi, Jawahar Nagar, and Rajeev Gandhi Nagar consist of buildings constructed or converted for hostels and coaching use. That creates recurring questions about permitted use, conversion, and building sanction that ordinary residential markets do not face. NyaySevak connects you with Bar-Council-verified Kota property lawyers for title, conversion, tenancy, and RERA matters.",
    landscape: [
      "Permitted use is the local pressure point. Residential buildings converted into hostels, paying-guest accommodation, or coaching premises frequently operate beyond the use sanctioned in the approved plan, and municipal action over unauthorised use, additional floors, and fire-safety compliance is a real risk. A buyer or investor acquiring a hostel property needs to verify the sanctioned plan and the permitted use rather than relying on the fact that the building is already operating.",
      "The general Rajasthan framework applies otherwise. Agricultural land is held as khatedari tenancy and must be converted for non-agricultural use before development, the revenue records establish the land category rather than proving title, and development in the urban area proceeds through layout approval and regularisation by the local development authority. Buying in an unapproved colony leaves a purchaser without building sanction or institutional finance.",
      "For flat buyers in registered projects, the Rajasthan Real Estate Regulatory Authority offers refund with interest, delay compensation, or directions to complete, with appeals to the Rajasthan Real Estate Appellate Tribunal. Writ challenges to municipal, revenue, and development-authority action from Kota go to the Rajasthan High Court's Jaipur Bench.",
    ],
    courtsForThisMatter: [
      "Municipal & development authority, Kota (sanction, permitted use, regularisation)",
      "Revenue courts & Board of Revenue, Ajmer (khatedari, mutation, conversion)",
      "Rajasthan Real Estate Regulatory Authority (registered project complaints)",
      "Civil & Commercial Courts, Kota (title, specific performance, injunctions)",
      "Rajasthan High Court, Jaipur Bench (writs against authorities)",
      "District Consumer Commission, Kota",
    ],
    caseTypes: [
      { title: "Permitted Use & Sanction Verification", desc: "Confirming the approved plan and sanctioned use before acquiring hostel or coaching premises." },
      { title: "Unauthorised Construction Defence", desc: "Responding to municipal action over additional floors, use change, and fire-safety compliance." },
      { title: "Land Conversion", desc: "Conversion of agricultural land for residential, commercial, or institutional use." },
      { title: "Hostel & Commercial Tenancy", desc: "Lease drafting, rent recovery, and eviction for buildings let to hostel and coaching operators." },
      { title: "Title & Revenue Diligence", desc: "Jamabandi, khasra, mutation, and encumbrance checks before purchase." },
      { title: "RERA Complaints", desc: "Refund with interest, delay compensation, and completion directions for registered projects." },
      { title: "Specific Performance & Injunctions", desc: "Enforcing agreements to sell and restraining third-party transfers pending suit." },
      { title: "Partition & Succession", desc: "Partition of family property, succession entries, and mutation corrections." },
    ],
    faqs: [
      {
        question: "The building already runs as a hostel. Is that enough to assume it is legal?",
        answer:
          "No. A great many Kota buildings operate beyond their sanctioned use, with additional floors or a use change never reflected in the approved plan. Municipal action over unauthorised use and fire-safety non-compliance is a live risk, so the sanctioned plan and permitted use should be verified independently before purchase or investment.",
      },
      {
        question: "Can I convert my house into a hostel or PG?",
        answer:
          "Only within the permitted use for the plot and the approved plan, and any change of use, additional construction, or institutional occupancy generally needs sanction. Fire-safety and building-safety requirements apply to occupancy of that kind, and retrofitting them after construction is substantially more expensive than planning for them.",
      },
      {
        question: "Do I need conversion before building on agricultural land?",
        answer:
          "Yes. Conversion from the competent revenue authority is required before non-agricultural use, with layout and building approvals following. Construction without conversion exposes the owner to demolition and penalty regardless of how the land was acquired.",
      },
      {
        question: "What can RERA do about a delayed Kota project?",
        answer:
          "For a registered project, the Rajasthan Real Estate Regulatory Authority can order a refund with interest, award compensation for delay, or direct completion, with appeals to the Rajasthan Real Estate Appellate Tribunal. Unregistered projects fall outside that remedy.",
      },
      {
        question: "Is a mutation entry proof of ownership?",
        answer:
          "No. Mutation records a change in the revenue entries for revenue-collection purposes and does not establish title, which still has to be traced through the chain of documents read alongside the jamabandi and khasra entries.",
      },
    ],
    localNotes: [
      "Hostel and coaching conversions frequently exceed sanctioned use — verify the approved plan, not the current occupancy.",
      "Fire and building safety obligations attach to institutional and hostel occupancy specifically.",
      "Writs from Kota go to the Rajasthan High Court's Jaipur Bench; revenue appeals end at the Board of Revenue in Ajmer.",
    ],
  },

  "kota__corporate-business": {
    lead:
      "Kota's business landscape pairs a heavy industrial base — thermal power, fertilisers, chemicals, and Kota stone — with a coaching-and-hostel services economy that is now a regulated sector in its own right. NyaySevak connects you with Bar-Council-verified Kota corporate lawyers for coaching-sector compliance, industrial contracts, MSME recovery, and NCLT matters at the Jaipur Bench.",
    landscape: [
      "Coaching has become a compliance-heavy business. Central guidance for coaching centres has introduced requirements around minimum student age, registration, refund policy, advertising claims, counselling provision, and infrastructure and safety standards, and states have moved to regulate the sector further. For operators, the practical exposure is now regulatory and consumer-facing simultaneously: an unfair refund clause or an unsubstantiated advertising claim can trigger both a consumer complaint and regulatory action.",
      "The industrial belt runs on long-term supply and service contracts with large public and private undertakings, most of which carry arbitration clauses. Disputes proceed to a tribunal rather than a suit, with Section 11 appointments made by the Rajasthan High Court and the courts retained for Section 9 interim relief and Section 34 challenges. Contract quality — a clear appointment mechanism, a workable seat, and realistic timelines — determines how painful that process becomes.",
      "For recovery and company matters the Rajasthan structures apply. The NCLT Jaipur Bench has jurisdiction over insolvency and company petitions; below the one-crore IBC threshold the usable tools are Section 138 prosecutions, Order XXXVII summary suits, and Commercial Court claims; and registered MSMEs can use the Samadhaan route with statutory compound interest, which is often the most effective lever against a larger buyer.",
    ],
    courtsForThisMatter: [
      "NCLT Jaipur Bench (insolvency, oppression and mismanagement, schemes)",
      "MSME Facilitation Council, Rajasthan (Samadhaan delayed-payment claims)",
      "District & State Consumer Commissions (coaching and service claims)",
      "Commercial Court, Kota",
      "Labour Court & Industrial Tribunal, Kota",
      "Rajasthan High Court, Jaipur Bench (writs, Section 11 appointments)",
    ],
    caseTypes: [
      { title: "Coaching Sector Compliance", desc: "Registration, refund policy, advertising claims, counselling, and safety obligations for institutes." },
      { title: "Consumer Claim Defence", desc: "Defending fee refund and service-deficiency complaints brought against institutes and hostels." },
      { title: "Industrial Contracts", desc: "Supply, service, and works agreements with large public and private undertakings." },
      { title: "Arbitration", desc: "Clause drafting, Section 9 interim relief, Section 11 appointments, and Section 34 challenges." },
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered units." },
      { title: "Company & LLP Incorporation", desc: "Formation, conversion, and ongoing ROC compliance for institutes and trading businesses." },
      { title: "Labour & Industrial Compliance", desc: "Contract labour, factory licensing, standing orders, and Industrial Tribunal disputes." },
      { title: "Debt Recovery", desc: "Section 138 prosecutions, summary suits, Commercial Court claims, and IBC petitions where available." },
    ],
    faqs: [
      {
        question: "What compliance applies to a coaching institute in Kota?",
        answer:
          "Central guidance for coaching centres covers registration, minimum student age, refund policy, advertising claims, counselling provision, and infrastructure and safety standards, with states adding their own requirements. Because an unfair refund clause or an unsubstantiated claim can trigger both regulatory action and consumer complaints, reviewing the admission documentation and advertising is the highest-value compliance work.",
      },
      {
        question: "Can a no-refund clause protect an institute?",
        answer:
          "Generally not. Consumer forums have consistently treated blanket retention of fees after a student discontinues as an unfair trade practice, and refund obligations now feature in the applicable guidance. A proportionate, clearly stated, and consistently applied refund policy is a far better protection than an absolute clause.",
      },
      {
        question: "Which NCLT bench covers Kota?",
        answer:
          "The NCLT Jaipur Bench, which has jurisdiction over Rajasthan. Insolvency petitions, oppression and mismanagement claims, and scheme approvals for Kota companies are filed and heard there.",
      },
      {
        question: "How do we recover payment from a large industrial buyer?",
        answer:
          "If the contract has an arbitration clause, through arbitration, with the Rajasthan High Court appointing an arbitrator under Section 11 if the parties cannot agree. Otherwise an Order XXXVII summary suit or a Commercial Court claim, with a Section 138 prosecution where a cheque has bounced. Registered MSMEs should consider the Samadhaan route.",
      },
      {
        question: "What labour compliance applies to a hostel or institute?",
        answer:
          "Establishment registration, provident fund and ESI where thresholds are met, contract-labour compliance for outsourced staff, and the statutory registers. Institutions frequently overlook these because they do not think of themselves as industrial employers, which is precisely when disputes arise.",
      },
    ],
    localNotes: [
      "Coaching is now a regulated sector — refund policy and advertising claims carry both regulatory and consumer exposure.",
      "Industrial contracts in Kota are arbitration-first, so clause quality determines how disputes actually proceed.",
      "Company and insolvency matters go to the NCLT Jaipur Bench.",
    ],
  },
  // ══════════════════════════════════════════════════════════════════════
  // AJMER — the institutional capital of Rajasthan. It hosts the Board of
  // Revenue (the state's apex revenue court), the Rajasthan Public Service
  // Commission, and the state secondary education board. That makes revenue,
  // service, and education litigation the local specialisms — none of which
  // any other Rajasthan city can claim.
  // ══════════════════════════════════════════════════════════════════════
  "ajmer__criminal-law": {
    lead:
      "Ajmer's criminal docket carries an institutional dimension that reflects the city itself: recruitment and examination-related prosecutions arising from the public service commission and the state education board, alongside the ordinary caseload of a divisional headquarters. NyaySevak connects you with Bar-Council-verified Ajmer criminal lawyers for bail, defence, and appeals to the Rajasthan High Court's Jaipur Bench.",
    landscape: [
      "Examination and recruitment offences are a genuine local category. Because the Rajasthan Public Service Commission and the state secondary education board are headquartered here, investigations into paper leaks, impersonation, and organised cheating in public examinations frequently centre on Ajmer. Rajasthan has enacted specific legislation to deal with unfair means in public examinations, carrying substantially enhanced punishments, and prosecutions under it are procedurally distinct from ordinary cheating cases.",
      "The city's religious significance brings a second distinct stream. Large congregations, particularly during the annual Urs at the Dargah, generate public-order matters, and disputes connected with the management of religious endowments occasionally acquire a criminal dimension alongside their civil and statutory tracks. Handling these well requires familiarity with the statutory framework governing the endowment rather than criminal procedure alone.",
      "Otherwise Ajmer sees the standard run of work for a divisional headquarters — property offences, cheating, matrimonial cruelty complaints, road-accident prosecutions on the highway corridor, and excise matters. Bail is moved before the Sessions Court at Ajmer and escalated to the Rajasthan High Court's Jaipur Bench, which has jurisdiction over the eastern districts including Ajmer.",
    ],
    courtsForThisMatter: [
      "Ajmer District & Sessions Court (sessions trials, bail, appeals)",
      "Chief Judicial Magistrate & Magistrate Courts, Ajmer",
      "Special Courts for public examination offences",
      "Rajasthan High Court, Jaipur Bench (appeals, quashing, revision)",
      "Special Court (POCSO, SC/ST Act), Ajmer",
      "Juvenile Justice Board, Ajmer",
    ],
    caseTypes: [
      { title: "Bail & Anticipatory Bail", desc: "Regular and anticipatory bail before the Ajmer Sessions Court and the Rajasthan High Court's Jaipur Bench." },
      { title: "Examination Offence Defence", desc: "Paper leak, impersonation, and organised cheating prosecutions under Rajasthan's public examination legislation." },
      { title: "Recruitment Fraud", desc: "Complaints involving fraudulent appointments, forged certificates, and recruitment intermediaries." },
      { title: "Cheating & Breach of Trust", desc: "Trade and investment defaults prosecuted as Section 318 and 316 BNS offences." },
      { title: "Public Order & Congregation Matters", desc: "Cases arising from large gatherings, including during the annual Urs." },
      { title: "Property & Land Offences", desc: "Forgery, forcible dispossession, and disputes over agricultural and urban holdings." },
      { title: "Dowry & Domestic Cruelty Defence", desc: "Section 85 BNS matters, including quashing on settlement at the Jaipur Bench." },
      { title: "Cyber & Financial Fraud", desc: "Online investment and UPI fraud, and Economic Offences Wing matters." },
    ],
    faqs: [
      {
        question: "How serious is an examination offence case in Rajasthan?",
        answer:
          "Considerably more serious than an ordinary cheating case. Rajasthan has enacted dedicated legislation against unfair means in public examinations with substantially enhanced punishments, and prosecutions arising from paper leaks and organised cheating are pursued vigorously. Because Ajmer hosts the public service commission and the education board, many of these investigations centre here.",
      },
      {
        question: "Which High Court bench hears Ajmer matters?",
        answer:
          "The Rajasthan High Court's Jaipur Bench, which covers the eastern districts including Ajmer. Appeals, quashing petitions, and High Court bail applications from Ajmer are filed there rather than at the principal seat in Jodhpur.",
      },
      {
        question: "Can a recruitment or appointment dispute become criminal?",
        answer:
          "It can, where forged documents, impersonation, or payment to an intermediary is alleged, as opposed to a straightforward challenge to a selection decision. The civil or service challenge and the criminal complaint then run on separate tracks, and how one is conducted can affect the other.",
      },
      {
        question: "Where do I apply for anticipatory bail in Ajmer?",
        answer:
          "Before the Sessions Court at Ajmer first, and then the Rajasthan High Court's Jaipur Bench if refused. Your first step through NyaySevak is a free case assessment with a verified local advocate.",
      },
      {
        question: "What happens at the first remand hearing?",
        answer:
          "The accused is produced before the Magistrate, who decides between police custody, judicial custody, and release. This hearing shapes the entire case, so arranging representation before the first production rather than after usually makes the greatest practical difference.",
      },
    ],
    localNotes: [
      "Ajmer hosts the state public service commission and education board, making examination-offence prosecutions a local specialism.",
      "Rajasthan's dedicated public examination legislation carries substantially enhanced punishments.",
      "Ajmer falls under the Rajasthan High Court's Jaipur Bench, not the Jodhpur principal seat.",
    ],
  },

  "ajmer__civil-law": {
    lead:
      "Ajmer is the seat of the Board of Revenue, the apex revenue court for the whole of Rajasthan — which means revenue appeals from every district in the state are ultimately heard in this city. NyaySevak connects you with Bar-Council-verified Ajmer civil lawyers with genuine depth in revenue practice, alongside service, education, and ordinary civil litigation before the district courts.",
    landscape: [
      "The Board of Revenue's presence defines legal practice here. It is the final appellate authority in the Rajasthan revenue hierarchy, hearing second appeals and revisions from Collectors and Sub-Divisional Officers across the state on khatedari tenancy, mutation, partition of agricultural holdings, land conversion, and allotment of government land. For a litigant anywhere in Rajasthan whose revenue matter has reached that stage, the case is argued in Ajmer — which has produced a local bar that specialises in revenue law to a degree found nowhere else in the state.",
      "The jurisdictional divide between revenue and civil courts is therefore especially well understood here. Broadly, questions of agricultural tenancy rights, mutation, and partition of agricultural land belong to the revenue hierarchy, while title disputes, specific performance, and injunctions between private parties are civil. Matters that straddle both are common, and sequencing them correctly avoids years of wasted litigation.",
      "Ajmer's other institutions generate their own civil and service work. Challenges to recruitment and selection by the public service commission, and disputes over examination results, revaluation, and affiliation involving the state education board, are largely argued by writ before the Rajasthan High Court's Jaipur Bench, while the Kishangarh marble trade in the district produces a steady flow of commercial recovery and contract disputes.",
    ],
    courtsForThisMatter: [
      "Board of Revenue, Ajmer (apex revenue appellate authority for Rajasthan)",
      "Revenue courts — Tehsildar, SDO, Collector (khatedari, mutation, partition)",
      "Civil Judge & District Judge, Ajmer (suits and appeals)",
      "Commercial Court, Ajmer",
      "Rajasthan High Court, Jaipur Bench (writs, second appeals, Section 11)",
      "District Consumer Commission, Ajmer",
    ],
    caseTypes: [
      { title: "Board of Revenue Appeals", desc: "Second appeals and revisions from across Rajasthan before the state's apex revenue court." },
      { title: "Khatedari & Tenancy Rights", desc: "Agricultural tenancy disputes under the Rajasthan Tenancy Act before the revenue hierarchy." },
      { title: "Mutation & Partition", desc: "Record correction, succession entries, and partition of agricultural holdings." },
      { title: "Land Conversion & Allotment", desc: "Conversion for non-agricultural use and disputes over allotment of government land." },
      { title: "Service & Recruitment Challenges", desc: "Writ petitions against selection, seniority, and appointment decisions." },
      { title: "Education Disputes", desc: "Results, revaluation, affiliation, and recognition matters involving the state education board." },
      { title: "Commercial Recovery", desc: "Summary suits and Commercial Court claims, including the Kishangarh marble trade." },
      { title: "Title Suits & Specific Performance", desc: "Civil suits over title and enforcement of agreements to sell, with injunctions." },
    ],
    faqs: [
      {
        question: "What is the Board of Revenue and why is it in Ajmer?",
        answer:
          "It is the apex revenue court for Rajasthan, sitting at Ajmer, and it hears second appeals and revisions from Collectors and Sub-Divisional Officers across the entire state on tenancy, mutation, partition, conversion, and land allotment. A revenue matter from any Rajasthan district that reaches that stage is argued here, which is why Ajmer has an unusually specialised revenue bar.",
      },
      {
        question: "Should my land dispute go to a civil court or a revenue court?",
        answer:
          "Khatedari tenancy rights, mutation, and partition of agricultural holdings fall within the revenue hierarchy, while title disputes, specific performance, and injunctions between private parties are civil. Filing in the wrong forum results in dismissal at the threshold, so the assessment should be made before anything is drafted.",
      },
      {
        question: "Can I challenge a Board of Revenue order?",
        answer:
          "Yes, by writ petition before the Rajasthan High Court, which for Ajmer means the Jaipur Bench. The scope of that challenge is narrower than a further appeal, since the High Court reviews for jurisdictional error and perversity rather than reappreciating the evidence, so the case has to be built properly at the revenue stage.",
      },
      {
        question: "How do I challenge a public service commission selection?",
        answer:
          "Ordinarily by writ petition before the Rajasthan High Court, on grounds such as breach of the advertised criteria, arbitrariness in the selection process, or an error in evaluation. Filing promptly matters, because delay is itself a ground on which such relief is refused once appointments have been made.",
      },
      {
        question: "How long do I have to file a civil suit?",
        answer:
          "Broadly three years for most money and contract claims and twelve years for possession of immovable property, running from when the cause of action arose. Revenue proceedings carry their own and often shorter timelines, so a matter should be assessed early.",
      },
    ],
    localNotes: [
      "The Board of Revenue at Ajmer is the apex revenue court for all of Rajasthan, giving the local bar exceptional revenue depth.",
      "Revenue and civil jurisdictions are distinct — filing in the wrong forum ends the matter at the threshold.",
      "Service and education challenges are argued by writ before the Rajasthan High Court's Jaipur Bench.",
    ],
  },

  "ajmer__family-matrimonial": {
    lead:
      "Ajmer's matrimonial practice serves a population with an unusually high proportion of government employees — the public service commission, the education board, the railways, and the divisional administration are all major local employers. That makes maintenance both easier to quantify and easier to enforce. NyaySevak connects you with Bar-Council-verified Ajmer divorce and family lawyers for divorce, maintenance, custody, and settlement.",
    landscape: [
      "Where a spouse is in government or railway service, income is established from the pay slip and service record rather than estimated, and arrears of maintenance can be recovered by attachment of salary through the employer. That is a materially stronger enforcement route than ordinary execution, and it shapes how settlements are negotiated — the paying spouse has less scope to delay, and the receiving spouse has less reason to accept a discounted lump sum.",
      "Pension and service benefits therefore feature in Ajmer settlements more than in most places. How gratuity, provident fund, family pension, and nomination entitlements are treated needs to be addressed expressly, because a settlement silent on them commonly produces fresh litigation at retirement. Service rules may also require intimation of certain proceedings or of a second marriage, which can bring departmental consequences independent of the matrimonial outcome.",
      "Procedurally the framework is standard. The Family Court at Ajmer hears divorce, judicial separation, restitution, custody, and guardianship, with mutual-consent divorce on the two-motion structure under Section 13B and its six-month statutory gap, waivable where separation has been long and the settlement complete. Domestic-violence proceedings go before the Magistrate, and appeals lie to the Rajasthan High Court's Jaipur Bench.",
    ],
    courtsForThisMatter: [
      "Family Court, Ajmer (divorce, custody, guardianship, maintenance)",
      "Magistrate Courts, Ajmer (Domestic Violence Act, Section 144 BNSS maintenance)",
      "Principal District Judge, Ajmer",
      "Rajasthan High Court, Jaipur Bench (appeals, quashing on settlement)",
      "Supreme Court of India (transfer petitions between states)",
      "Mediation Centre, Ajmer District Court",
    ],
    caseTypes: [
      { title: "Mutual Consent Divorce", desc: "Two-motion Section 13B petitions at the Ajmer Family Court, with waiver of the gap where appropriate." },
      { title: "Contested Divorce", desc: "Cruelty, desertion, and adultery petitions and defences before the Family Court." },
      { title: "Maintenance & Salary Attachment", desc: "Claims against government and railway employees, with arrears recovered by attachment of salary." },
      { title: "Pension & Service Benefits", desc: "Treatment of gratuity, provident fund, family pension, and nomination in a settlement." },
      { title: "Child Custody & Guardianship", desc: "Custody, visitation, and guardianship decided on the welfare of the child." },
      { title: "Domestic Violence Proceedings", desc: "Protection, residence, and monetary orders before the Magistrate at Ajmer." },
      { title: "Section 85 BNS Defence & Quashing", desc: "Defending cruelty allegations and quashing on settlement at the Jaipur Bench." },
      { title: "Muslim & Christian Personal Law", desc: "Divorce, mehr, and maintenance matters under the personal law applicable to the parties." },
    ],
    faqs: [
      {
        question: "My spouse is a government employee. How is maintenance enforced?",
        answer:
          "Income is documented from the pay slip and service record, so the amount is difficult to dispute, and arrears can be recovered by attachment of salary through the employer. That is a substantially more effective route than ordinary execution against an unwilling payer, and it changes the negotiating position considerably.",
      },
      {
        question: "Does pension form part of a divorce settlement?",
        answer:
          "It can be relevant, and family-pension and nomination entitlements are affected by a divorce in ways that are easy to overlook. These should be addressed expressly in the settlement terms, because agreements silent on service benefits frequently generate fresh litigation years later at retirement.",
      },
      {
        question: "Can a matrimonial case affect a government job?",
        answer:
          "It can. A criminal complaint may trigger departmental action independently of the outcome of the criminal case, and some service rules require intimation of certain proceedings or of a second marriage. Coordinating the matrimonial strategy with the service position matters where a government post is involved.",
      },
      {
        question: "How long does a mutual consent divorce take in Ajmer?",
        answer:
          "Usually six to twelve months because of the two-motion structure and the statutory gap. Where the separation has been long and the settlement is complete, the Family Court can waive the six-month gap and the matter may conclude in two to three months.",
      },
      {
        question: "Is a domestic violence case heard by the Family Court?",
        answer:
          "No — the Magistrate hears Domestic Violence Act proceedings while the Family Court hears divorce and custody. Because the tracks run in parallel, settlements are structured to close every proceeding at once.",
      },
    ],
    localNotes: [
      "Ajmer's large government and railway workforce makes maintenance both quantifiable and enforceable by salary attachment.",
      "Pension, gratuity, and family-pension entitlements should be dealt with expressly in the settlement.",
      "A criminal matrimonial complaint can trigger departmental action independent of the criminal outcome.",
    ],
  },

  "ajmer__property-real-estate": {
    lead:
      "Property practice in Ajmer runs through the revenue system, and the city happens to host the Board of Revenue — the apex revenue court for the whole of Rajasthan. It also has a distinctive category of endowment property around the Dargah and Pushkar that follows an entirely separate statutory regime. NyaySevak connects you with Bar-Council-verified Ajmer property lawyers for revenue diligence, conversion, and RERA matters.",
    landscape: [
      "Revenue diligence is the foundation of every transaction. The jamabandi and khasra entries establish khatedari rights, the land category, and any recorded restriction, and mutation records a revenue entry rather than proving title. Agricultural land must be converted by the competent revenue authority before non-agricultural use, and appeals through the revenue hierarchy end at the Board of Revenue here in Ajmer — which makes local revenue expertise unusually accessible.",
      "Endowment property is the local specialism. Property attached to the Dargah is governed by the dedicated statute and its committee, and wakf property across the district falls under the Wakf Act with disputes going before the Wakf Tribunal rather than an ordinary civil court. Wakf property carries severe restrictions on alienation, and a purchase of land that turns out to be wakf can be void — which makes checking the wakf register an essential step for any transaction in the older parts of the city and around Pushkar.",
      "For urban development, the Ajmer development authority handles layout approval, regularisation of unauthorised colonies, and allotment on conditional terms, while registered residential projects fall under the Rajasthan Real Estate Regulatory Authority with appeals to the state appellate tribunal. Buying in an unapproved colony leaves a purchaser without building sanction or institutional finance, and regularisation is discretionary rather than assured.",
    ],
    courtsForThisMatter: [
      "Board of Revenue, Ajmer (apex revenue appellate authority)",
      "Revenue courts — Tehsildar, SDO, Collector (khatedari, mutation, conversion)",
      "Rajasthan Wakf Tribunal (wakf property disputes)",
      "Ajmer development authority (layout approval, regularisation, allotment)",
      "Rajasthan Real Estate Regulatory Authority (registered project complaints)",
      "Civil Courts, Ajmer & Rajasthan High Court, Jaipur Bench (title, writs)",
    ],
    caseTypes: [
      { title: "Revenue Record Diligence", desc: "Jamabandi, khasra, and mutation checks to establish khatedari rights and land category." },
      { title: "Wakf Property Verification", desc: "Checking the wakf register before purchase, and disputes before the Wakf Tribunal." },
      { title: "Endowment & Dargah Property", desc: "Matters governed by the dedicated statute and its committee rather than ordinary property law." },
      { title: "Land Conversion", desc: "Conversion of agricultural land for residential, commercial, or institutional use." },
      { title: "Unapproved Colony & Regularisation", desc: "Assessing regularisation prospects and charges before buying in an unapproved layout." },
      { title: "RERA Complaints", desc: "Refund with interest, delay compensation, and completion directions for registered projects." },
      { title: "Title Suits & Specific Performance", desc: "Civil suits over title and enforcement of agreements to sell, with injunctions." },
      { title: "Partition & Succession", desc: "Partition of agricultural and urban holdings, succession entries, and mutation corrections." },
    ],
    faqs: [
      {
        question: "How do I know whether a property is wakf land?",
        answer:
          "By checking the wakf register maintained under the Wakf Act before any transaction. Wakf property carries severe restrictions on alienation and a sale of it can be void, with disputes going before the Wakf Tribunal rather than a civil court. This check matters particularly in the older parts of Ajmer and around Pushkar.",
      },
      {
        question: "Is a mutation entry proof of ownership?",
        answer:
          "No. Mutation records a change in the revenue entries for revenue-collection purposes and does not establish title, which must still be traced through the chain of documents read alongside the jamabandi and khasra entries.",
      },
      {
        question: "What is the risk of buying in an unapproved colony?",
        answer:
          "Without development-authority approval you may be unable to obtain building sanction or institutional finance, and regularisation under a state scheme is discretionary and can attract substantial charges. Approval status should be verified before any payment rather than assumed from the fact that construction already exists nearby.",
      },
      {
        question: "Do I need conversion before building?",
        answer:
          "Yes. Agricultural land must be converted for non-agricultural use by the competent revenue authority before development, with layout and building approvals following. Construction without conversion exposes the owner to demolition and penalty.",
      },
      {
        question: "Where do revenue appeals from other districts get heard?",
        answer:
          "At the Board of Revenue in Ajmer, which is the apex revenue appellate authority for the whole of Rajasthan. That is why Ajmer's bar has particular depth in revenue practice, and why a revenue matter from anywhere in the state is ultimately argued in this city.",
      },
    ],
    localNotes: [
      "The wakf register must be checked before buying in older Ajmer and around Pushkar — wakf land sales can be void.",
      "Dargah and endowment property follows a dedicated statutory regime, not ordinary property law.",
      "The Board of Revenue sitting in Ajmer makes specialised revenue expertise locally accessible.",
    ],
  },

  "ajmer__corporate-business": {
    lead:
      "Ajmer district's commercial centre of gravity sits outside the city: Kishangarh hosts one of the world's largest marble markets, and Beawar is a long-established cement and mineral-processing centre. NyaySevak connects you with Bar-Council-verified Ajmer corporate lawyers for trade contracts, mining and processing compliance, MSME recovery, and NCLT matters at the Jaipur Bench.",
    landscape: [
      "The Kishangarh marble trade drives much of the district's commercial work. It operates as a high-volume, credit-based market of traders, processors, and transporters, largely organised as proprietorships and partnerships, which produces a steady flow of recovery disputes, quality and rejection claims, consignment and transport losses, and partnership separations. Documentation in this trade is often thin, so the strength of a claim frequently turns on whether the transaction record can be reconstructed at all.",
      "Mining and mineral processing bring a regulatory layer: lease conditions, royalty assessment and demand notices, environmental clearance and consent to operate, and periodic returns. Royalty disputes and lease cancellations are contested before the mining authorities and, where necessary, by writ before the Rajasthan High Court's Jaipur Bench, while environmental applications from Rajasthan are heard by the National Green Tribunal's Central Zone Bench at Bhopal.",
      "For recovery and company matters the Rajasthan structures apply. The NCLT Jaipur Bench has jurisdiction over insolvency and company petitions; below the one-crore IBC default threshold the practical tools are Section 138 prosecutions, Order XXXVII summary suits, and Commercial Court claims; and registered MSMEs can use the Samadhaan route before the Facilitation Council, whose statutory compound interest gives real leverage in a trade where delayed payment is endemic.",
    ],
    courtsForThisMatter: [
      "NCLT Jaipur Bench (insolvency, oppression and mismanagement, schemes)",
      "MSME Facilitation Council, Rajasthan (Samadhaan delayed-payment claims)",
      "Commercial Court, Ajmer",
      "Mining authorities & Collector (lease conditions, royalty, cancellation)",
      "National Green Tribunal, Central Zone Bench at Bhopal (environmental matters)",
      "Rajasthan High Court, Jaipur Bench (writs, Section 11 appointments)",
    ],
    caseTypes: [
      { title: "MSME Samadhaan Claims", desc: "Delayed-payment recovery with statutory compound interest for registered marble and processing units." },
      { title: "Trade & Supply Contracts", desc: "Sale, consignment, quality, rejection, and transport terms for the marble and mineral trade." },
      { title: "Debt Recovery", desc: "Section 138 prosecutions, Order XXXVII summary suits, and Commercial Court claims." },
      { title: "Mining Lease Compliance", desc: "Lease conditions, royalty assessment, clearance, and returns for mining and processing operations." },
      { title: "Environmental Compliance", desc: "Consent to operate, closure directions, and NGT applications affecting processing units." },
      { title: "Partnership & Firm Disputes", desc: "Deeds, registration, retirement, dissolution, and accounts for trade partnerships." },
      { title: "Company & LLP Incorporation", desc: "Formation, conversion from partnership, and ongoing ROC compliance." },
      { title: "Labour Compliance", desc: "Factory licensing, contract labour, provident fund and ESI, and Labour Court disputes." },
    ],
    faqs: [
      {
        question: "How do I recover payment in the Kishangarh marble trade?",
        answer:
          "For a registered MSME, the Samadhaan route before the Facilitation Council is usually strongest, carrying compound interest at three times the RBI bank rate. Otherwise a Section 138 prosecution on a bounced cheque and an Order XXXVII summary suit are commonly run together. Because documentation in this trade is often thin, reconstructing the transaction record is the first practical step.",
      },
      {
        question: "Which NCLT bench covers Ajmer?",
        answer:
          "The NCLT Jaipur Bench, which has jurisdiction over Rajasthan. Insolvency petitions, oppression and mismanagement claims, and scheme approvals for companies in the district are filed and heard there.",
      },
      {
        question: "What should a marble supply contract cover?",
        answer:
          "Specification and grade, tolerance for natural variation, inspection and rejection procedure, who bears transport risk and at what point it passes, payment terms and security, and a dispute-resolution clause. Quality and rejection disputes are the most common source of litigation in this trade and are almost entirely preventable by drafting.",
      },
      {
        question: "How do we challenge a royalty demand?",
        answer:
          "First through the statutory appeal and revision mechanism before the mining authorities, and where that is exhausted or the action is without jurisdiction, by writ before the Rajasthan High Court's Jaipur Bench. Assessments should be contested within the prescribed timelines, since delay narrows the available remedy.",
      },
      {
        question: "Should our trading firm register as a partnership?",
        answer:
          "Registration matters considerably, because Section 69 of the Partnership Act bars an unregistered firm and its partners from suing to enforce a contract. In a credit-based trade where recovery claims are routine, an unregistered firm can find itself unable to sue at all, which is a substantial and easily avoided risk.",
      },
    ],
    localNotes: [
      "The Kishangarh marble market drives the district's commercial docket, and thin documentation is its defining risk.",
      "Section 69 of the Partnership Act can bar an unregistered firm from suing — critical in a credit-based trade.",
      "Company and insolvency matters go to the NCLT Jaipur Bench; environmental matters go to the NGT at Bhopal.",
    ],
  },
};
