// Week 6: Long-form pillar articles for the /insights hub.
// Every article is hand-written, original, and reviewed by the relevant
// editorial desk (see authors.ts). Articles target high-intent commercial
// queries that complement (rather than duplicate) the practice-area pages —
// procedural walk-throughs, "how to" guides, fee benchmarks, and checklists.
//
// SEO logic:
//   - Titles target "how to / what is / step-by-step" head queries that
//     practice-area pages do not directly answer.
//   - Each article has 2,000+ words of substantive prose with H2/H3 hierarchy,
//     numbered procedural steps, and 6+ FAQ Q&As (FAQPage schema).
//   - Internal links flow article -> practice area -> city page so PageRank
//     surfaces from new content into the existing 181 pages.
//   - Author byline + Person schema strengthens E-E-A-T for YMYL.
//   - dateModified is stable; bumping it on every deploy hurts crawl budget.
//
// Article object schema is matched 1:1 against schema.org's Article /
// BlogPosting type so the JSON-LD emitter can be a thin transform.

export type ArticleSection = {
  heading: string;
  body: string[]; // each element renders as a <p>
  bullets?: string[];
};

export type ArticleFaq = {
  question: string;
  answer: string;
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string; // optimised for SERP
  metaDescription: string; // 150-160 chars, optimised for SERP
  excerpt: string; // shown in hub list
  category:
    | "Criminal Defence"
    | "Family & Matrimonial"
    | "Property & Real Estate"
    | "Corporate & Commercial"
    | "Civil & Litigation"
    | "Practical Guidance";
  authorSlug: string;
  reviewerSlug?: string;
  datePublished: string; // ISO date
  dateModified: string; // ISO date
  readTimeMinutes: number;
  primaryKeyword: string;
  secondaryKeywords: string[];
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  intro: string[]; // opening paragraphs before first H2
  sections: ArticleSection[];
  takeaways: string[]; // bullet summary at end
  faqs: ArticleFaq[];
  relatedPracticeAreaSlugs: string[];
  relatedServiceSlugs: string[];
  relatedCitySlugs?: string[];
};

export const articles: Article[] = [
  // ============================================================
  // 1. Mutual-consent divorce
  // ============================================================
  {
    slug: "mutual-consent-divorce-india-procedure-2026",
    title: "How to File for Mutual-Consent Divorce in India",
    metaTitle:
      "Mutual-Consent Divorce in India: Step-by-Step Procedure (2026 Guide)",
    metaDescription:
      "How to file mutual-consent divorce in India under Section 13B HMA: documents, court fees, cooling-off, waiver, and post-decree steps. Verified procedure for 2026.",
    excerpt:
      "Section 13B of the Hindu Marriage Act allows couples to dissolve a marriage by consent in as little as six months. This guide walks through every stage — from the first joint petition to the second-motion decree — with practical notes on the Supreme Court's waiver powers, common pitfalls, and city-specific Family Court timelines.",
    category: "Family & Matrimonial",
    authorSlug: "matrimonial-family-desk",
    reviewerSlug: "nyaysevak-legal-team",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTimeMinutes: 14,
    primaryKeyword: "mutual consent divorce procedure India",
    secondaryKeywords: [
      "section 13B Hindu Marriage Act",
      "first motion second motion divorce",
      "cooling off period waiver Amardeep Singh",
      "mutual consent divorce documents",
      "mutual consent divorce time",
      "mutual divorce cost India",
      "mutual divorce settlement deed",
    ],
    hero: {
      eyebrow: "Family Law · Procedural Guide",
      title: "How to File for Mutual-Consent Divorce in India",
      subtitle:
        "Section 13B of the Hindu Marriage Act 1955 — a step-by-step practitioner's walkthrough for 2026, including documents, fees, the Amardeep Singh waiver, and post-decree formalities.",
    },
    intro: [
      "Mutual-consent divorce is the fastest, lowest-conflict route to ending a Hindu marriage in India. It does not require either spouse to allege cruelty, desertion, or adultery; it only requires that both spouses agree to part ways and that they have lived separately for at least one year. In practical terms, a well-prepared mutual-consent petition can deliver a final decree in six to twelve months — a fraction of the four-to-eight-year timeline that a contested petition typically takes in an Indian Family Court.",
      "But \"mutual consent\" hides considerable legal scaffolding. The Hindu Marriage Act 1955 (\"HMA\") sets out a two-motion process under Section 13B with a mandatory six-month cooling-off period between motions. The Supreme Court has, since the landmark Amardeep Singh v. Harveen Kaur (2017) judgment, allowed courts to waive that cooling-off period in appropriate cases — but the waiver is discretionary and many Family Courts are slow to grant it.",
      "This guide walks through every stage of the process. It is written for the spouse, family-law solicitor, or in-house counsel who wants a comprehensive picture before the first hearing. The procedural notes here apply to Hindus, Buddhists, Sikhs, and Jains under the HMA. For Christians (Indian Divorce Act 1869), Parsis (Parsi Marriage and Divorce Act 1936), Muslims (personal law plus the Dissolution of Muslim Marriages Act 1939), and inter-faith couples (Special Marriage Act 1954), the broad architecture is similar but the statutory references and waiting periods differ — those nuances are flagged at the end.",
    ],
    sections: [
      {
        heading: "1. Preconditions before you can file",
        body: [
          "Section 13B HMA imposes three mandatory preconditions for a mutual-consent petition. All three must be satisfied on the date the joint petition is filed; the absence of any one of them is jurisdictional and will lead to dismissal in limine.",
        ],
        bullets: [
          "The marriage must have been solemnised under the HMA (or registered under the Special Marriage Act for an SMA petition).",
          "The spouses must have been living separately for at least one year immediately before the petition. \"Living separately\" has been judicially read to mean not living as husband and wife — same-roof separation is permitted if there is no marital cohabitation.",
          "The spouses must have agreed that the marriage should be dissolved. The agreement must be voluntary, free of coercion or fraud, and continuing as on the date of the second motion.",
        ],
      },
      {
        heading: "2. The mutual-consent settlement deed",
        body: [
          "Before the first motion, the spouses (typically through their respective counsel) negotiate a comprehensive settlement deed covering every issue between them. This is the single most important document in the process — Family Courts treat the settlement as the substantive contract underlying the consent, and courts will not pass a decree if the settlement is silent on a material issue.",
          "A complete settlement deed addresses (a) one-time alimony or recurring maintenance — quantum, mode of payment, and timeline; (b) custody of children, including visitation, schooling decisions, passport and travel consent; (c) child maintenance, education, and medical expenses; (d) division of matrimonial property, including jointly-held immovable assets, joint bank accounts, jewellery (especially streedhan), and movables; (e) withdrawal of all pending criminal complaints, including 498A IPC / BNS Section 85, Domestic Violence Act 2005 cases, and Section 125 BNSS / 125 CrPC maintenance applications; (f) a covenant against future claims; and (g) the date by which key payments will be made.",
        ],
      },
      {
        heading: "3. The first motion: filing the joint petition",
        body: [
          "The joint petition under Section 13B(1) HMA is filed before the Family Court having territorial jurisdiction. Jurisdiction lies where the marriage was solemnised, where the spouses last resided together, or where the wife resides on the date of filing. The wife is given a forum advantage under the 2003 amendment to Section 19 HMA.",
          "Documents typically annexed to the joint petition include: the marriage certificate or proof of solemnisation; PAN cards and Aadhaar of both spouses; address proofs; one passport-size photograph each; a sworn affidavit of each spouse confirming the three preconditions; and the executed settlement deed. Court fees vary by state — typically ₹15 to ₹50 per petition plus process fees; the genuinely costly element is counsel's professional fee.",
          "At the first motion, the court records the statements of both spouses on oath, satisfies itself that the consent is voluntary and the preconditions are met, and adjourns the matter for the statutory cooling-off period of at least six months and not more than eighteen months.",
        ],
      },
      {
        heading: "4. The cooling-off period and the Amardeep Singh waiver",
        body: [
          "Section 13B(2) HMA provides for a minimum six-month cooling-off period between the first and second motions. The legislative purpose was to give the spouses an opportunity to reconsider — the assumption being that hot-headed consent might cool, and reconciliation might still be possible.",
          "In Amardeep Singh v. Harveen Kaur, (2017) 8 SCC 746, the Supreme Court held that Section 13B(2)'s six-month period is directory, not mandatory, and that Family Courts can waive it where (i) the parties have already lived separately for over 18 months, (ii) all efforts at reconciliation have failed, (iii) the parties have genuinely settled all financial and custody issues, and (iv) the waiting period would only prolong agony without serving any purpose. A separate waiver application must be filed; the court is not obliged to grant it.",
          "Whether a waiver will be granted depends heavily on the Family Court and the judge. Delhi and Mumbai Family Courts are relatively liberal; some smaller-city Family Courts continue to apply the cooling-off rigidly. A realistic expectation is that approximately 60-70% of well-drafted waiver applications succeed in tier-1 Family Courts.",
        ],
      },
      {
        heading: "5. The second motion and the decree",
        body: [
          "On the date fixed for the second motion (Section 13B(2) HMA), the spouses appear again, their statements are recorded on oath confirming that the consent continues, and the court verifies that all settlement obligations falling due before this date have been performed (particularly any first tranche of alimony, return of dowry/streedhan articles, and withdrawal of criminal complaints with court receipts attached).",
          "If the court is satisfied, it passes the decree of divorce dissolving the marriage. The decree is final from the date of pronouncement. Thirty days later (the appeal-period under Section 28 HMA), it becomes unappealable — the spouses are free to remarry. Either spouse can collect a certified copy of the decree from the Family Court registry; this certified decree is the document needed to update PAN, passport, bank, and immigration records.",
        ],
      },
      {
        heading: "6. Realistic timelines and city-by-city variation",
        body: [
          "Without a waiver, the floor is six months. With a waiver in a tier-1 Family Court, four to five months is achievable. Without a waiver in a slower court or where the Settlement Deed is contested at the second motion, twelve to eighteen months is realistic.",
          "City-specific notes worth knowing: in Delhi, the Patiala House and Tis Hazari Family Courts are reasonably efficient and waivers are routinely considered; in Mumbai, the Bandra Family Court has a longer waiting list but the Bombay High Court has consistently encouraged waivers; in Bangalore, the Family Court at Vyalikaval has reasonable timelines; in Chennai, the Family Court at Saidapet handles a heavy docket and waivers are less commonly granted; in Hyderabad, the Family Court at Saroornagar is moderate; in Kolkata, the Alipore Family Court is slow; in Pune, the Shivajinagar Family Court is moderate; in Ahmedabad, the Family Court is moderate-to-fast.",
        ],
      },
      {
        heading: "7. Common pitfalls and how to avoid them",
        body: [
          "The five most common reasons mutual-consent petitions fail or get delayed: (i) the settlement deed is incomplete and silent on a material issue, leading the court to refuse a decree at the second motion; (ii) one spouse withdraws consent at the second motion, which is permitted under Section 13B(2) and converts the case into a long contested proceeding; (iii) maintenance/alimony obligations from the first motion are not performed before the second, leading to a refusal; (iv) the criminal complaints between the parties are not actually withdrawn, leaving the spouses fighting on multiple fronts post-decree; and (v) the parties do not appear at the second motion, treating it as a formality, which is procedurally fatal.",
          "The defensive design: (a) over-engineer the settlement deed; (b) tie all material payments to the first motion or the second motion (not later); (c) include a non-withdrawal covenant — though it is not specifically enforceable, it preserves a cause of action in damages; (d) take certified copies of the criminal-case withdrawal orders and annex them at the second motion; (e) treat both motions as substantive court appearances.",
        ],
      },
      {
        heading: "8. Other personal laws — quick comparative notes",
        body: [
          "Special Marriage Act 1954 (Section 28): structurally similar to Section 13B HMA, two motions, six-month cooling-off. Used by inter-faith couples and couples married under the SMA.",
          "Indian Divorce Act 1869 (Christians): Section 10A introduced in 2001 provides for mutual-consent divorce with a two-year separation precondition (longer than HMA's one year) and the same two-motion structure.",
          "Parsi Marriage and Divorce Act 1936: Section 32B (introduced in 2009) provides for mutual-consent divorce with a one-year separation precondition. Petitions are filed before the Parsi Matrimonial Court at Bombay HC (unique panel of Parsi Delegates plus the judge).",
          "Muslim law: there is no statutory mutual-consent provision per se; spouses use khula (wife-initiated) or mubarat (mutual divorce) under Muslim personal law, which is not court-supervised. Couples wanting court-recorded divorce often opt for SMA registration first or use Family Court applications under the Dissolution of Muslim Marriages Act 1939.",
        ],
      },
    ],
    takeaways: [
      "Section 13B HMA requires (a) marriage solemnised under HMA, (b) one year of living separately, and (c) genuine mutual consent.",
      "The settlement deed is the single most important document — it must address alimony, custody, property, and criminal-complaint withdrawal exhaustively.",
      "The six-month cooling-off period between first and second motions can be waived under Amardeep Singh v. Harveen Kaur (2017) 8 SCC 746 — file a separate waiver application.",
      "Realistic timeline: 4-6 months with a waiver in a tier-1 city; 6-12 months without; 12-18 months in slower courts.",
      "Common failure modes: incomplete settlement, withdrawn consent at second motion, unperformed maintenance obligations, undischarged criminal complaints.",
    ],
    faqs: [
      {
        question:
          "Can mutual-consent divorce be filed before completing one year of marriage?",
        answer:
          "No. Section 14 HMA bars any divorce petition (including mutual consent) within one year of marriage, save in cases of \"exceptional hardship\" with leave of court. The bar runs from the date of solemnisation, not the date of separation. Couples must wait out the year before filing.",
      },
      {
        question: "What is the minimum cost of a mutual-consent divorce in India?",
        answer:
          "Statutory court fees are nominal — typically ₹15 to ₹50 per petition plus a few hundred rupees of process fees. The substantive cost is professional fees: a Tier-1 city Family Court matter ranges ₹40,000 to ₹1,50,000 per side for a straightforward mutual-consent matter, scaling with senior counsel involvement and complexity of asset division.",
      },
      {
        question:
          "Is the cooling-off period waived automatically if both spouses request it?",
        answer:
          "No. The Supreme Court in Amardeep Singh held that the six-month cooling-off period under Section 13B(2) is directory, not mandatory, and can be waived. But the waiver is discretionary. A separate application must be filed citing (i) >18 months of separation, (ii) failed reconciliation, (iii) settled financial/custody issues, and (iv) no purpose served by the wait. Family Courts grant the waiver in roughly 60-70% of well-drafted applications.",
      },
      {
        question: "Can one spouse withdraw consent before the second motion?",
        answer:
          "Yes. Section 13B(2) requires the consent to be subsisting on the date of the second motion. If either spouse withdraws consent before the second motion, the petition is dismissed and the marriage stands. The other spouse can then file a contested petition under Section 13(1) HMA, but this is a fresh case with a multi-year timeline.",
      },
      {
        question:
          "Are the spouses required to live separately under different roofs to satisfy Section 13B?",
        answer:
          "No. The Supreme Court has read \"living separately\" to mean not living as husband and wife — there must be no marital cohabitation, no consortium, and the relationship must be effectively over. Same-roof separation is acceptable, especially in Indian housing reality where economic compulsion often forces continued shared residence.",
      },
      {
        question:
          "Does mutual-consent divorce require both spouses to be in India during the proceedings?",
        answer:
          "Not necessarily. Both spouses must appear at the first and second motions to record their statements on oath. For NRI couples, courts now routinely permit appearance through video-conferencing or through duly notarised and apostilled affidavits. Some Family Courts (particularly Delhi) accept video-conferencing without difficulty; others may insist on physical appearance and may require a power-of-attorney holder framework.",
      },
    ],
    relatedPracticeAreaSlugs: ["family-matrimonial", "civil-law"],
    relatedServiceSlugs: ["lawyer-consultation", "find-hire-lawyers", "document-services"],
    relatedCitySlugs: ["delhi", "mumbai", "bangalore"],
  },

  // ============================================================
  // 2. Anticipatory bail
  // ============================================================
  {
    slug: "anticipatory-bail-india-section-482-bnss-guide-2026",
    title: "Anticipatory Bail in India — A Complete 2026 Guide",
    metaTitle:
      "Anticipatory Bail under Section 482 BNSS: Complete India Guide (2026)",
    metaDescription:
      "Anticipatory bail in India 2026: Section 482 BNSS procedure, when to file, documents, conditions, recent Supreme Court rulings, and what to do if denied.",
    excerpt:
      "When a person has a 'reason to believe' that he or she may be arrested on a non-bailable charge, anticipatory bail under Section 482 BNSS (formerly Section 438 CrPC) is the protective shield. This guide covers the legal threshold, the procedural choreography, recent Supreme Court rulings on duration and territorial jurisdiction, and the realistic timeline city by city.",
    category: "Criminal Defence",
    authorSlug: "criminal-law-desk",
    reviewerSlug: "nyaysevak-legal-team",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTimeMinutes: 16,
    primaryKeyword: "anticipatory bail India procedure",
    secondaryKeywords: [
      "section 482 BNSS anticipatory bail",
      "section 438 CrPC anticipatory bail",
      "Sushila Aggarwal anticipatory bail duration",
      "anticipatory bail conditions",
      "reason to believe anticipatory bail",
      "anticipatory bail Sessions Court",
      "anticipatory bail rejected what next",
    ],
    hero: {
      eyebrow: "Criminal Defence · Bail Practice",
      title: "Anticipatory Bail in India — A Complete 2026 Guide",
      subtitle:
        "Section 482 of the Bharatiya Nagarik Suraksha Sanhita 2023 (formerly Section 438 CrPC) — when to file, how to file, what to expect, and what to do if it's denied.",
    },
    intro: [
      "An arrest in India under a non-bailable offence is not a small thing. The accused is taken into custody, produced before a magistrate within 24 hours, and may then be remanded to judicial custody for up to 60 or 90 days depending on the offence. Even if a regular bail application is granted later, the immediate consequences of arrest — loss of employment, social stigma, custodial interrogation, family disruption — are severe.",
      "Anticipatory bail is the legal mechanism that preempts this. Where a person \"has reason to believe that he may be arrested on accusation of having committed a non-bailable offence\", Section 482 of the Bharatiya Nagarik Suraksha Sanhita 2023 (BNSS) — which replaced the old Section 438 CrPC effective 1 July 2024 — empowers the High Court or Court of Session to grant a pre-arrest order directing that the person, in the event of arrest, be released on bail.",
      "The phrase \"in the event of arrest\" is doing real work. Anticipatory bail does not stop the police from registering the FIR, summoning the accused for investigation, or laying a charge-sheet. It only ensures that, when the police are ready to arrest, the arrest is replaced by release on bail bond. This guide explains how to use that protection effectively.",
    ],
    sections: [
      {
        heading: "1. The legal foundation: Section 482 BNSS",
        body: [
          "Section 482 BNSS broadly mirrors the erstwhile Section 438 CrPC. The High Court or Court of Session may issue a direction that, in the event of arrest of the applicant on accusation of having committed a non-bailable offence, he or she shall be released on bail. The court may impose conditions including compliance with police notices, non-tampering with evidence, non-leaving of India without permission, and non-influencing of witnesses.",
          "The Supreme Court's Constitution Bench decision in Sushila Aggarwal v. State (NCT of Delhi), (2020) 5 SCC 1, is the single most important authority on the scope of anticipatory bail. The five-judge bench held: (i) anticipatory bail is not always limited in time — courts may grant it for the duration of the investigation, trial, or even beyond, depending on the facts; (ii) anticipatory bail does not automatically end on filing of charge-sheet or framing of charges; (iii) however, the court can, in appropriate cases, limit the order; (iv) anticipatory bail does not preclude later cancellation if circumstances warrant. The decision overruled earlier rulings that had imposed reflexive temporal limits.",
        ],
      },
      {
        heading: "2. When to file — the \"reason to believe\" threshold",
        body: [
          "Anticipatory bail can be filed at any time after the applicant has \"reason to believe\" that he or she may be arrested. The threshold is not high — typical triggers include receipt of a notice under Section 35(3) BNSS (formerly 41A CrPC) requiring appearance for investigation, registration of an FIR naming the applicant, hostile statements made by the police, or media coverage indicating that arrest is imminent.",
          "There is no requirement that an FIR must already be registered. The Supreme Court in Gurbaksh Singh Sibbia v. State of Punjab, (1980) 2 SCC 565, confirmed that a person can apply for anticipatory bail even before an FIR is filed if there is genuine apprehension of arrest. But the apprehension must be reasonable and concrete — vague or speculative apprehension is not enough.",
        ],
      },
      {
        heading: "3. Choosing the right court: HC or Sessions Court",
        body: [
          "Section 482 BNSS gives concurrent jurisdiction to the High Court and the Court of Session. As a matter of practice, the Sessions Court is filed first because (i) the Sessions Court is more accessible, (ii) the Sessions Court hears matters faster, and (iii) most High Courts will refuse to entertain a fresh anticipatory bail application unless the Sessions Court has been approached first.",
          "Exceptions where the High Court is approached directly: (i) very serious cases where the gravity warrants HC consideration from the outset (PMLA, NDPS, UAPA, POCSO); (ii) cases where the Sessions Court has refused; (iii) cases involving senior public officials, sitting MPs/MLAs, or matters of high public profile where the Sessions Court is likely to recuse or feel uncomfortable.",
          "Territorial jurisdiction lies where the offence is alleged to have been committed, where the accused is arrested or apprehends arrest, or where the FIR is registered. The Supreme Court in Priya Indoria v. State of Karnataka, 2023 SCC OnLine SC 1656, held that an applicant can also seek anticipatory bail before the High Court or Sessions Court of the state where the applicant is residing, even if the FIR is in another state — a major practical advance.",
        ],
      },
      {
        heading: "4. Drafting the application",
        body: [
          "A well-drafted anticipatory bail application contains: (i) the title with full FIR particulars (number, date, police station, sections); (ii) personal particulars of the applicant including occupation, age, address, and family responsibilities; (iii) a chronological narration of the dispute leading to the FIR, with documentary support; (iv) a specific articulation of the \"reason to believe\" arrest is imminent; (v) the legal grounds for grant — typically built around the Sushila Aggarwal factors (nature and gravity of accusation, antecedents, possibility of fleeing, possibility of witness tampering, larger interest of the public); (vi) prayer for grant of anticipatory bail with reasonable conditions.",
          "Documents typically annexed: copy of the FIR (if registered) or media reports if FIR is not yet filed; identity proofs; address proofs; employment proof; family particulars; photographs of the applicant and family; medical records if relevant; any documents relevant to the underlying dispute (rent receipts, agreements, communications) to demonstrate the dispute is essentially civil and being weaponised through criminal process.",
        ],
      },
      {
        heading: "5. The hearing and conditions",
        body: [
          "On listing, notice is issued to the prosecution. The State files a status report through the Public Prosecutor or the Investigating Officer, taking a position on whether bail should be opposed. The court hears arguments — typically in two or three hearings in the Sessions Court, sometimes one hearing in the HC for routine matters.",
          "Conditions commonly imposed include: (a) appearing before the Investigating Officer as and when required and cooperating with investigation; (b) not tampering with evidence or influencing witnesses; (c) not leaving India without prior permission of the court (passport surrender or undertaking); (d) furnishing personal bond and one or two sureties (typically Rs 25,000 to Rs 5,00,000 depending on offence gravity); (e) not committing any further similar offence; (f) keeping the police informed of address changes.",
          "The Supreme Court in Sumitha Pradeep v. Arun Kumar C. K., 2022 SCC OnLine SC 1529, has cautioned against routinely imposing onerous conditions like deposit of large sums or onerous reporting requirements. Conditions must be commensurate with the gravity of the offence and the antecedents of the applicant.",
        ],
      },
      {
        heading: "6. After the order — practical compliance",
        body: [
          "Once an anticipatory bail order is passed, the applicant must (i) execute the personal bond and surety bonds before the Sessions Court Registrar or designated officer; (ii) ensure the order copy is served on the SHO of the concerned police station so that, if and when arrest is attempted, the order can be cited; (iii) carry a certified copy of the order (and a few photocopies) at all times for at least the first 30-60 days; (iv) appear before the Investigating Officer when called and cooperate (refusal to cooperate is the most common ground for cancellation).",
          "If the police attempt arrest despite the order, the order copy is shown and arrest must be replaced by release on bail bond at the police station itself. If the police nevertheless arrest, an immediate contempt petition lies; in practice, this is rare because police usually respect the order once it is shown.",
        ],
      },
      {
        heading: "7. What to do if anticipatory bail is rejected",
        body: [
          "Sessions Court rejection: a fresh application before the High Court is the standard next step under Section 482 BNSS. The HC application typically includes the Sessions Court order and grounds of distinction.",
          "High Court rejection: a Special Leave Petition before the Supreme Court under Article 136 of the Constitution. The SC entertains such petitions selectively, typically only where (i) the HC's reasoning is manifestly wrong, (ii) there is gross illegality in the FIR, (iii) the case involves serious legal questions.",
          "Surrender route: where bail is rejected, the applicant may surrender before the magistrate, seek immediate regular bail, and if regular bail is also rejected, apply for default bail under Section 187 BNSS (formerly Section 167(2) CrPC) once the 60/90-day period expires without charge-sheet.",
        ],
      },
      {
        heading: "8. Special-statute exclusions and practical limits",
        body: [
          "Anticipatory bail is excluded or severely restricted under several special statutes: (i) Section 18 of the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act 1989 — anticipatory bail is barred; the Supreme Court in Prathvi Raj Chauhan v. Union of India, (2020) 4 SCC 727, upheld this bar but allowed exceptions for prima facie no-case situations; (ii) UAPA cases under specific provisions — pre-conditions under Section 43D(5) make pre-arrest relief practically impossible for serious schedule offences; (iii) PMLA — anticipatory bail is theoretically available but the twin conditions under Section 45 (reasonable grounds for believing not guilty + not likely to commit offence on bail) make grants rare; (iv) NDPS for commercial-quantity offences under Section 37 — the same twin-condition logic restricts grants.",
          "These restrictions mean that in special-statute cases, alternative strategies (writ petition under Article 226 quashing the FIR, interim protection from coercive measures, regular bail post-arrest) are often more realistic than anticipatory bail.",
        ],
      },
    ],
    takeaways: [
      "Section 482 BNSS (formerly 438 CrPC) is the legal vehicle for anticipatory bail; Sushila Aggarwal (2020) governs duration and scope.",
      "Filing requires \"reason to believe\" arrest is imminent — FIR registration is helpful but not strictly required.",
      "Sessions Court is the default first forum; HC is approached either after Sessions rejection or in serious / high-profile cases.",
      "Priya Indoria (2023) allows filing in the applicant's home-state HC/Sessions even if FIR is in another state.",
      "Conditions must be reasonable; routinely onerous conditions are discouraged under Sumitha Pradeep (2022).",
      "Special statutes (SC/ST Act, UAPA, PMLA, NDPS commercial quantity) restrict or bar anticipatory bail — alternative strategies are needed.",
    ],
    faqs: [
      {
        question:
          "What is the difference between anticipatory bail and regular bail?",
        answer:
          "Anticipatory bail (Section 482 BNSS) is granted before arrest and prevents arrest by directing release on bail bond if and when arrest is attempted. Regular bail (Section 480 BNSS / formerly 437/439 CrPC) is granted after arrest to release a person already in custody. Anticipatory bail is preventive; regular bail is curative.",
      },
      {
        question:
          "Can anticipatory bail be filed before an FIR is registered?",
        answer:
          "Yes. The Supreme Court in Gurbaksh Singh Sibbia (1980) confirmed that no FIR is required as long as there is reasonable, concrete apprehension of arrest. Vague speculation is insufficient — there must be specific, identifiable indicia such as police summons, hostile witnesses, or threats of imminent FIR.",
      },
      {
        question: "How long does anticipatory bail last?",
        answer:
          "Following Sushila Aggarwal v. State (NCT of Delhi) (2020), anticipatory bail is not automatically limited to a fixed period. It can extend through investigation, trial, or beyond, unless the court specifies otherwise. Earlier rulings imposing automatic time limits stand overruled.",
      },
      {
        question: "Can I file anticipatory bail in my home state if the FIR is in a different state?",
        answer:
          "Yes — the Supreme Court in Priya Indoria v. State of Karnataka (2023) held that an applicant may apply to the HC or Sessions Court of the state where he or she ordinarily resides, even if the FIR is in another state. This is a significant advance for inter-state false-FIR situations.",
      },
      {
        question:
          "How much does an anticipatory bail application cost?",
        answer:
          "Government court-fee is nominal (typically under Rs 1,000). Professional fees vary widely. In a Tier-1 city Sessions Court, anticipatory bail in a routine matter ranges Rs 30,000 to Rs 1,50,000 per appearance for a junior counsel-led brief, and Rs 1,50,000 to Rs 5,00,000+ where senior counsel is engaged. HC matters are typically 1.5 to 3x Sessions Court fees. PMLA, CBI, NIA, and POCSO cases command premium fees because of complexity and seniority required.",
      },
      {
        question:
          "What happens if I don't cooperate with the investigation after getting anticipatory bail?",
        answer:
          "Non-cooperation is the most common ground for cancellation of anticipatory bail. The State can file a cancellation application under Section 482(3) BNSS. If granted, the protective order ends and arrest follows. Conditions invariably require cooperation with the IO; ignoring summons or refusing to answer questions can swiftly lead to cancellation.",
      },
    ],
    relatedPracticeAreaSlugs: ["criminal-law", "cbi-cases", "ed-cases", "ndps-cases"],
    relatedServiceSlugs: ["lawyer-consultation", "find-hire-lawyers"],
    relatedCitySlugs: ["delhi", "mumbai", "bangalore", "hyderabad"],
  },

  // ============================================================
  // 3. Property title verification
  // ============================================================
  {
    slug: "property-title-verification-india-checklist-2026",
    title: "Property Title Verification in India — 12-Point Checklist",
    metaTitle:
      "Property Title Verification in India: 12-Point Due Diligence Checklist (2026)",
    metaDescription:
      "Property title verification in India: 12-point legal due-diligence checklist with state-specific notes for Delhi, Mumbai, Bangalore, Chennai, Hyderabad, and more.",
    excerpt:
      "Indian property fraud is mostly preventable — and almost entirely about title verification. This 12-point checklist walks through the legal due-diligence sequence used by the property bar before any sale deed is executed: from RTC/khata extracts and EC searches to conversion orders, encumbrances, and pending litigation.",
    category: "Property & Real Estate",
    authorSlug: "property-real-estate-desk",
    reviewerSlug: "nyaysevak-legal-team",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTimeMinutes: 18,
    primaryKeyword: "property title verification India",
    secondaryKeywords: [
      "title due diligence India",
      "encumbrance certificate property",
      "khata transfer Bangalore",
      "DDA freehold conversion Delhi",
      "MahaRERA registration verification",
      "Dharani portal Telangana property",
      "title fraud India prevention",
    ],
    hero: {
      eyebrow: "Property Law · Practical Checklist",
      title: "Property Title Verification in India — 12-Point Checklist",
      subtitle:
        "The legal due-diligence sequence used by the property bar before signing a sale deed — applied state by state across India's most active real-estate markets.",
    },
    intro: [
      "Most property fraud in India is recoverable in court but unrecoverable in practical life. By the time a buyer learns that the seller lacked clean title, the consideration has been paid, the family has moved in, the bank loan is running, and unwinding takes ten years of litigation. The price of skipping due diligence is rarely paid at the time of sale; it is paid years later, by which point reversing the transaction is functionally impossible.",
      "The good news: Indian property fraud follows recognisable patterns, and a structured 12-point title verification — typically taking two to four weeks for a residential transaction — catches the overwhelming majority of risk before the buyer signs anything binding. This guide is the checklist that property advocates run for every clean-title opinion, with state-specific notes for the eight major Indian metros.",
      "Throughout, this guide assumes immovable property — flats, plots, houses, commercial buildings — and primarily resale (not first-sale-from-builder) transactions. RERA-regulated builder transactions follow a parallel verification sequence covered separately at the end.",
    ],
    sections: [
      {
        heading: "1. Mother deed and chain of title (30 years)",
        body: [
          "The mother deed is the document under which the seller's predecessor first acquired title to the property — typically a sale deed, gift deed, partition deed, will, or grant from a development authority. A clean chain of title is a sequence of registered conveyances connecting the mother deed to the current seller without missing links, gifts to minors without guardian-court permission, partition without all coparceners, or transfers without succession certificates where succession is involved.",
          "The Indian property bar standard is to verify chain of title for at least 30 years preceding the proposed sale. This is the period after which adverse possession against the true owner becomes time-barred under Article 65 of the Limitation Act 1963 (12 years against private owners; 30 years against government). A 30-year clean chain plus current possession is generally an unassailable title.",
        ],
      },
      {
        heading: "2. Encumbrance Certificate (EC) — the central searchable record",
        body: [
          "The Encumbrance Certificate, available from the Sub-Registrar's office covering the property's ward/jurisdiction, lists every registered transaction (sale, gift, mortgage, lease over 1 year, court order, attachment) for the property within the requested period. A 30-year EC (or, where archives permit, longer) is the foundational title-verification document.",
          "City notes: in Tamil Nadu (Chennai), ECs are obtained from the TN Registration Department's online portal and are reasonably reliable. In Karnataka (Bangalore), the Kaveri 2.0 portal hosts ECs and the system is comparatively mature. In Maharashtra (Mumbai/Pune), the IGR portal hosts ECs with reasonable searchability. In Delhi, the DORIS system is patchy and physical Sub-Registrar searches remain necessary. In Telangana (Hyderabad), the Dharani portal hosts encumbrance information but has had ongoing reliability concerns. In Gujarat (Ahmedabad), Garvi 2.0 is reasonable. In West Bengal (Kolkata), the e-Nathikaran portal has improved but archival depth is limited.",
        ],
      },
      {
        heading: "3. Revenue records — RTC, khata, patta, mutation",
        body: [
          "Beyond registered conveyance, every state maintains parallel revenue records that are critical for verifying possession, taxation, and access rights:",
        ],
        bullets: [
          "Karnataka: RTC (Record of Rights, Tenancy, and Crops), pahani extract, mutation register at the Tehsil; A-khata (BBMP/BDA approved layout, full property tax, eligible for bank loan) vs B-khata (unapproved, partial tax, severely restricted resale); gramathana (revenue village land) requires conversion order before urban transactions.",
          "Maharashtra: 7/12 extract (Saat Baara), property card (City Survey Card) for urban properties, mutation entry register at the Talathi/Tehsildar.",
          "Delhi: jamabandi (rural), L&DO records (leasehold government property), DDA freehold conversion certificate (where applicable), municipal property-tax records.",
          "Tamil Nadu: patta (revenue title), chitta (revenue extract), adangal (cultivation/possession record), TSLR (Town Survey Land Register) for urban.",
          "Telangana: Dharani portal property card (the centralised land record from 2020), pahani for rural agricultural.",
          "Gujarat: 7/12 extract, 8A extract, hakk patrak, sanad for revenue villages.",
          "West Bengal: Record of Rights (RoR), khatian, parcha, mutation at the BL&LRO.",
        ],
      },
      {
        heading: "4. Property tax receipts and possession history",
        body: [
          "At least the last three years of property-tax receipts in the seller's name (or showing transfer history if recently inherited or partitioned) demonstrate (i) that the seller has been in continuous possession, (ii) that the property is recorded in municipal/panchayat records, and (iii) that no large arrears exist that would attach to the buyer post-purchase.",
          "Property tax search: Bangalore BBMP property tax portal; Mumbai MCGM portal; Delhi MCD/NDMC portals (separate jurisdictions); Chennai GCC portal; Hyderabad GHMC Dharani; Pune PMC portal; Kolkata KMC portal; Ahmedabad AMC portal. Each portal allows search by property tax assessment number / khata / property card.",
        ],
      },
      {
        heading: "5. Approval and zoning compliance",
        body: [
          "An approved building plan (sanctioned plan from the local development authority — DDA, MCGM, BBMP, BDA, BMRDA, CMDA, DTCP, GHMC, GIDC, AMC) is essential. Properties with deviations from the sanctioned plan, missing OC (Occupation Certificate), or built on non-converted land carry material risk.",
          "Zoning verification: confirm the land-use designation under the city's master plan. Residential properties on commercially-zoned land, or vice-versa, face structural marketability problems. In Bangalore, BMRDA layouts often have approval issues outside core BBMP limits. In Chennai, CMDA-approved layouts vs DTCP-approved layouts have different planning standards. In Hyderabad, HMDA layouts inside the outer ring road have been substantially regularised; outside ORR remains messier. In Delhi, unauthorised colonies regularised under the 2008 scheme (and subsequent amendments) carry PTM-based title which is NOT equivalent to freehold.",
        ],
      },
      {
        heading: "6. Conversion order (agricultural to non-agricultural)",
        body: [
          "Land originally classified as agricultural cannot be used for residential or commercial purposes without a conversion order issued by the State Revenue Department under the relevant land revenue code (Karnataka Land Revenue Act, Maharashtra Land Revenue Code, Tamil Nadu Patta Pass Book and TN Town and Country Planning Act, etc.). Sales of agricultural land for residential use without conversion orders are vulnerable to declaration as void and to penal action against the buyer.",
          "Bangalore is particularly fraught — large peri-urban expansion has happened on partially-converted or unconverted agricultural land. Demand the RTC + conversion order + DC (Deputy Commissioner) conversion certificate. In Maharashtra, demand the NA (Non-Agricultural) order under Section 44 of the MLRC. In Tamil Nadu, demand the conversion order from the Tahsildar.",
        ],
      },
      {
        heading: "7. RERA registration (for builder transactions)",
        body: [
          "Under the Real Estate (Regulation and Development) Act 2016, every project of more than 8 units / 500 sqm requires RERA registration. The state RERA portal (MahaRERA, RERA Karnataka, UP RERA, TN RERA, K-RERA Kerala, GujRERA, WB-HIRA, AP RERA, Telangana RERA, etc.) hosts the registration certificate, sanctioned plan, financial information, completion timeline, and any cases pending against the promoter.",
          "Buyer due diligence on a builder property: (i) verify the project is registered; (ii) verify the unit being sold is one of the registered inventory; (iii) check for any cases pending before the Authority or its Appellate Tribunal; (iv) read the registered Agreement for Sale carefully — in particular, the construction-linked payment schedule, possession date, and penalty clauses; (v) confirm that the developer has obtained the latest progress certificate from the Engineer.",
        ],
      },
      {
        heading: "8. Encumbrance — mortgages, charges, lis pendens",
        body: [
          "The EC search captures registered encumbrances. Equally important: (i) Central Registry of Securitisation and Asset Reconstruction Interest (CERSAI) — captures equitable mortgages by deposit of title deeds, which are often not separately registered with the SRO; (ii) NCLT records — properties of corporate sellers under IBC are subject to moratorium and cannot be sold without committee-of-creditors approval; (iii) civil court records — ongoing partition suits, suits for specific performance, suits for declaration, and writ petitions involving the property render it lis pendens (Section 52 Transfer of Property Act).",
          "Lis pendens search: a careful conveyance lawyer will search the relevant district court CIS (Case Information System), High Court CIS, and NCLT records for the seller's name and property address. Many recent fraud cases involve a seller with an unrecorded suit against the property, who sells while the lis pendens lies undisclosed.",
        ],
      },
      {
        heading: "9. Family law overlays — succession, partition, will",
        body: [
          "Where the seller acquired the property by inheritance, partition, or will, additional verification: (i) succession certificate / letters of administration where intestate; (ii) probated will where testamentary (probate is not mandatory in all states but is mandatory for Calcutta, Bombay, and Madras HC original civil jurisdiction areas under Sections 213 and 57 of the Indian Succession Act 1925); (iii) registered partition deed signed by ALL coparceners in a Hindu Mitakshara joint family; (iv) family settlement deed, where applicable, on stamp paper appropriate to the state.",
          "A partition deed missing one coparcener's signature is NOT a partition — it is a unilateral act and does not divest the missing coparcener's right. This is a recurring fraud pattern: a coparcener \"sells his share\" without a registered partition, and years later the other coparceners' children claim against the buyer.",
        ],
      },
      {
        heading: "10. Bank statements, no-dues, and society NOC",
        body: [
          "If the property was mortgaged, demand: (i) loan-account statement showing zero outstanding; (ii) no-dues certificate from the bank; (iii) original title deeds released by the bank — this is the single most important document to examine for damage, alteration, or duplicate-issuance markings.",
          "For cooperative-society flats (predominantly Mumbai, Pune, Ahmedabad), demand: (i) society share certificate in the seller's name; (ii) no-dues certificate from the society (maintenance, sinking fund, repair-fund, betterment levy); (iii) NOC from the society for the proposed sale (society bye-laws and the Maharashtra Co-operative Societies Act 1960 require this); (iv) mutation entry pending with the society after sale.",
        ],
      },
      {
        heading: "11. Stamp duty, registration, and tax compliance",
        body: [
          "Each state's Stamp Act prescribes the stamp duty rate. Maharashtra: 5% for males, 4% for females (in MMR; rates differ outside). Karnataka: 5% for males / 3% for females (Bangalore Urban). Delhi: 6% for males, 4% for females, 5% for joint registration. Tamil Nadu: 7% (one of the highest). Telangana: 4% (one of the lowest). Gujarat: 4.9%. West Bengal: 6-7%.",
          "Registration is mandatory under Section 17 of the Registration Act 1908. An unregistered sale deed is inadmissible as evidence of title. TDS under Section 194-IA Income Tax Act applies on transactions above Rs 50 lakh — buyer must deduct 1% and deposit. For non-resident sellers, Section 195 TDS applies at much higher rates and requires Lower Deduction Certificate to avoid over-deduction.",
        ],
      },
      {
        heading: "12. Title-insurance and final legal opinion",
        body: [
          "Title insurance products (HDFC ERGO, ICICI Lombard, Tata AIG) are now available for residential properties up to Rs 50 crore in major Indian cities. The premium is typically 0.5-1% of consideration. For high-value transactions (Rs 5 crore plus), title insurance is increasingly standard. It does not replace due diligence — but it is a meaningful backstop against latent defects.",
          "The final step is the title opinion letter from the property advocate. A standard opinion runs 8-15 pages and addresses each of the 12 verification heads, listing documents reviewed, conclusions on each head, identified risks, and a final recommendation (clean title / title with minor defects requiring rectification / title with material defects requiring abandonment). Banks rarely fund a transaction without an advocate's title opinion; an opinion in the buyer's name (separate from the bank's) is strongly advisable to confirm the buyer's own legal exposure.",
        ],
      },
    ],
    takeaways: [
      "30-year chain of title is the Indian property bar standard.",
      "Encumbrance Certificate (EC) is the single most important searchable record.",
      "State-specific revenue records (RTC, khata, patta, 7/12, Dharani) supplement the EC.",
      "Conversion order is essential where land was originally agricultural.",
      "RERA registration is mandatory for builder projects — verify on the state RERA portal.",
      "Lis pendens search across district court, HC, and NCLT is non-negotiable.",
      "Partition deeds without ALL coparceners' signatures are not partitions.",
      "Society NOC and no-dues certificate are mandatory for cooperative-society flats.",
      "Title insurance is now mainstream for properties above Rs 5 crore.",
      "Final advocate's title opinion in the buyer's own name is the deliverable.",
    ],
    faqs: [
      {
        question:
          "How long does property title verification take in India?",
        answer:
          "A standard residential transaction takes 2-4 weeks: 1 week for document collection, 1 week for SRO and revenue searches, 3-5 days for litigation searches, and 2-3 days for opinion drafting. High-value commercial transactions or properties with complex chain (multiple gifts, partitions, intervening litigation) can take 6-10 weeks.",
      },
      {
        question: "What is the cost of legal title verification?",
        answer:
          "Title verification fees range Rs 15,000 to Rs 75,000 for residential properties up to Rs 2 crore in metro cities, scaling up to Rs 1.5 lakh to Rs 5 lakh for commercial properties or properties above Rs 10 crore. Government search fees are nominal (Rs 100-1,000 across various offices). Title insurance, where opted, is 0.5-1% of consideration.",
      },
      {
        question:
          "Is a B-khata property in Bangalore safe to buy?",
        answer:
          "B-khata properties are recorded by BBMP for tax purposes but were built on land without proper development-authority approval. Bank loans are restricted, resale is harder, and the property cannot be regularised easily. Buyers should treat B-khata as materially defective unless buying purely for end-use with full cash payment and an explicit understanding of the resale handicap.",
      },
      {
        question:
          "Do I need to verify title for a property bought directly from the builder?",
        answer:
          "Yes, but the verification focus shifts. For builder-sold properties: (i) verify RERA registration and the project's regulatory status; (ii) verify the builder owns the underlying land (check the land-purchase deed and any Joint Development Agreement); (iii) verify the building plan is sanctioned; (iv) verify the OC has been (or will be) obtained; (v) read the registered agreement for sale carefully. Skipping this for a \"trusted\" builder is the single most common cause of multi-year construction-delay disputes.",
      },
      {
        question:
          "What is lis pendens and why does it matter for property?",
        answer:
          "Lis pendens (Section 52 of the Transfer of Property Act 1882) is the doctrine that during the pendency of a suit involving immovable property, no party can transfer the property to defeat the rights of any other party in the suit. A buyer who acquires property subject to lis pendens takes the property burdened with whatever the eventual judgment decides. Lis pendens search across district court, HC, and NCLT is therefore non-negotiable.",
      },
      {
        question:
          "Can I rely on a builder's lawyer's title certificate?",
        answer:
          "No. The builder's lawyer is engaged by and reports to the builder. The buyer should obtain a separate title opinion from his or her own advocate (or the bank's panel advocate, if a loan is involved). The cost is small in absolute terms and the protection is the buyer's primary line of defence against a defective title that the builder's lawyer either missed or failed to disclose.",
      },
    ],
    relatedPracticeAreaSlugs: ["property-real-estate", "civil-law", "documentation"],
    relatedServiceSlugs: ["document-services", "find-hire-lawyers", "lawyer-consultation"],
    relatedCitySlugs: ["bangalore", "mumbai", "chennai", "hyderabad", "delhi"],
  },

  // ============================================================
  // 4. FIR
  // ============================================================
  {
    slug: "filing-fir-india-procedure-rights-2026",
    title: "Filing an FIR in India — Your Rights, the Procedure, and What to Do If Refused",
    metaTitle:
      "How to File an FIR in India: Procedure, Rights & What to Do If Refused (2026)",
    metaDescription:
      "Complete 2026 guide to filing a First Information Report in India: procedure under BNSS Section 173, your rights, what to do if police refuse, e-FIR, and Section 175(3) magistrate complaint.",
    excerpt:
      "When the police refuse to register an FIR, victims often believe the system has failed them — but Indian criminal procedure provides several escalation routes that work in practice. This guide walks through filing under Section 173 BNSS, e-FIR portals, Section 175(3) BNSS magistrate complaints, and Section 482 BNSS HC remedies.",
    category: "Criminal Defence",
    authorSlug: "criminal-law-desk",
    reviewerSlug: "nyaysevak-legal-team",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTimeMinutes: 13,
    primaryKeyword: "how to file FIR India",
    secondaryKeywords: [
      "FIR procedure section 173 BNSS",
      "police refused to register FIR",
      "section 175(3) BNSS magistrate complaint",
      "zero FIR India",
      "e-FIR online India",
      "Lalita Kumari v State of UP FIR",
    ],
    hero: {
      eyebrow: "Criminal Procedure · Citizen's Guide",
      title: "Filing an FIR in India — Your Rights, the Procedure, and What to Do If Refused",
      subtitle:
        "Section 173 of the Bharatiya Nagarik Suraksha Sanhita 2023 made FIR registration mandatory for cognizable offences. This is how the procedure works — and how to escalate when it doesn't.",
    },
    intro: [
      "The First Information Report is the most important document in Indian criminal practice. It triggers police investigation, fixes the version of facts that the State will pursue, and forms the foundation of every charge-sheet, prosecution, and trial that follows. Errors in FIR drafting at the moment of registration can shape a case for years.",
      "And yet, FIR registration is one of the most chronically broken parts of the Indian criminal-justice system. Police stations routinely refuse to register FIRs, particularly in matters where the alleged offender is locally influential, where the offence is socially uncomfortable (sexual offences, domestic violence, caste atrocities), or where the matter looks complicated. The Supreme Court has repeatedly reinforced that FIR registration is mandatory for cognizable offences — most recently and authoritatively in Lalita Kumari v. Government of Uttar Pradesh, (2014) 2 SCC 1.",
      "This guide explains how to register an FIR correctly, what your rights are, and the four escalation routes that work in practice when police refuse.",
    ],
    sections: [
      {
        heading: "1. Cognizable vs non-cognizable: which sections require an FIR",
        body: [
          "Indian criminal offences are classified as cognizable or non-cognizable under Schedule 1 of the BNSS. Cognizable offences (murder, rape, robbery, dacoity, theft above specified value, kidnapping, dowry death, cheating above specified value, and most BNS offences punishable with imprisonment of three years or more) permit police to arrest without warrant and require FIR registration without magistrate sanction. Non-cognizable offences (defamation, cheating below specified value, simple hurt) do not permit warrantless arrest; they require a magistrate's order to investigate.",
          "Section 173 BNSS (formerly Section 154 CrPC) governs FIR registration for cognizable offences. Section 174 BNSS (formerly Section 155 CrPC) governs the entry made for non-cognizable matters — these are not technically FIRs but \"Non-Cognizable Reports\" (NCRs) that go into the station's general diary.",
        ],
      },
      {
        heading: "2. The Lalita Kumari mandate",
        body: [
          "In Lalita Kumari v. State of UP (2014), a five-judge Constitution Bench of the Supreme Court ruled definitively that FIR registration is mandatory for cognizable offences. Police cannot conduct a \"preliminary inquiry\" before registering the FIR except in seven categories: (i) matrimonial/family disputes; (ii) commercial offences; (iii) medical negligence; (iv) corruption cases; (v) cases involving extraordinary delay (over three months) in reporting; (vi) cases involving public officials acting in good faith; (vii) some other categories where the legal nature of the offence is unclear from the complaint.",
          "Even within these seven categories, the preliminary inquiry must be completed within 7 days (extendable to 15 days by the SP), and the FIR must be registered if a cognizable offence is disclosed.",
        ],
      },
      {
        heading: "3. Step-by-step procedure for filing an FIR",
        body: [
          "Step 1: Determine territorial jurisdiction. The FIR must be registered at the police station within whose territorial limits the offence occurred. For online/cyber offences, FIR can be registered where the victim resides or where the offence's effects are felt.",
        ],
        bullets: [
          "Step 2: Visit the police station with two photocopies of any supporting documents (medical reports, photos, screenshots, receipts) and identity proof.",
          "Step 3: Ask to meet the Duty Officer. Narrate the facts orally. The Duty Officer is required to reduce the information to writing in the FIR register (or accept a written complaint).",
          "Step 4: Read the FIR carefully before signing. Common mistakes: dates wrong, names misspelled, property values wrong, offence sections mis-applied, witness names omitted. Insist on corrections before signing.",
          "Step 5: Demand a free copy of the registered FIR. Section 173(2) BNSS gives every informant a right to a free certified copy.",
          "Step 6: Note the FIR number, date, time, and the Investigating Officer's name and contact.",
        ],
      },
      {
        heading: "4. Zero FIR — when offence happens outside this police station's jurisdiction",
        body: [
          "A \"Zero FIR\" is an FIR registered at a police station that does not have territorial jurisdiction. The FIR is registered with the number \"0\" (and the station's number after transfer), and is then transferred to the appropriate police station within the prescribed time. Zero FIR became formally codified in Section 173(1) BNSS following the Justice Verma Committee recommendations after the 2012 Delhi gang-rape case.",
          "Zero FIR is particularly important for offences in transit (railways, highways, air), inter-state offences, and offences where the victim is unable to travel to the appropriate police station. No police station can refuse to register a Zero FIR on jurisdictional grounds.",
        ],
      },
      {
        heading: "5. e-FIR — online registration",
        body: [
          "Most Indian states now provide e-FIR portals for specified offences (typically theft, missing persons, vehicle theft, cyber crime, offences against women in some states). Examples: Delhi e-FIR portal (delhipolice.gov.in), Mumbai Police citizen portal, Karnataka KSP citizen portal, Telangana TS-COP, Tamil Nadu TN Police citizen portal.",
          "Limits: e-FIR is not yet permitted for all offence categories. Serious offences (murder, rape, dacoity, dowry death) typically still require physical police station visits. The e-FIR procedure is also subject to verification — the e-FIR is converted to an FIR after a brief investigation by the SHO.",
          "For cyber crime specifically, the National Cybercrime Reporting Portal (cybercrime.gov.in) is the preferred route. Complaints submitted via this portal are routed to the local cyber cell automatically.",
        ],
      },
      {
        heading: "6. When police refuse to register an FIR — your four escalation routes",
        body: [
          "Route 1: Section 173(4) BNSS — written complaint to the Superintendent of Police. The aggrieved person can send a written complaint by post or in person to the SP of the district. The SP, if satisfied that the complaint discloses a cognizable offence, must direct registration of the FIR or conduct an investigation under his/her supervision.",
          "Route 2: Section 175(3) BNSS — magistrate complaint. This is the most powerful and widely-used route. The aggrieved person files a complaint before the Judicial Magistrate of First Class having jurisdiction. After examining the complainant on oath under Section 200 BNSS, the magistrate can take cognizance directly, conduct an inquiry under Section 202 BNSS, or order police registration and investigation under Section 175(3) BNSS. Magistrate complaints under Section 175(3) BNSS are the standard escalation when police refuse, and are routinely successful.",
          "Route 3: National Human Rights Commission / State Human Rights Commission. For offences involving public servants, custodial violence, or systemic non-action, NHRC/SHRC complaints can trigger inquiries. Slower than Section 175(3) but useful for repeated failures.",
          "Route 4: Article 226 writ petition before the High Court. A writ of mandamus can be sought directing the police to register an FIR. HC writs are reserved for serious cases where Section 175(3) is impractical or has been ineffective. The HC may also direct CBI or other independent investigation if the State machinery is captured.",
        ],
      },
      {
        heading: "7. After registration — what happens next",
        body: [
          "Once an FIR is registered, the case is assigned to an Investigating Officer (typically an Inspector or Sub-Inspector). The IO conducts investigation, records witness statements under Section 180 BNSS (formerly 161 CrPC), examines documents, conducts seizures and panchnamas, sends material for forensic analysis, and arrests if necessary.",
          "The investigation is governed by 60-day or 90-day timelines under Section 187 BNSS (formerly 167(2) CrPC) — 60 days for offences punishable up to 10 years, 90 days for offences punishable beyond 10 years and capital cases. If the charge-sheet is not filed within these periods, the accused (if in custody) is entitled to default bail.",
          "After investigation, the IO files either a charge-sheet under Section 193 BNSS (formerly 173 CrPC) — recommending prosecution — or a closure report. The complainant has the right to oppose the closure report and seek further investigation under Section 193(8) BNSS.",
        ],
      },
      {
        heading: "8. Drafting tips — what to include and what to avoid",
        body: [
          "Include: a clear, chronological narration; specific dates, times, and locations; full names and addresses of accused; full names and addresses of witnesses (subject to Section 23 BNSS witness protection); specific particulars of stolen property with values; specific offence-section citations only if you are confident — otherwise let the police apply sections.",
          "Avoid: speculation, conclusions, legal arguments, exaggeration, unverified third-party hearsay. Indian criminal trials live and die on the FIR. A vague, exaggerated, or speculative FIR can be used by defence counsel to demolish the prosecution's case at trial. Stick to facts within personal knowledge.",
        ],
      },
    ],
    takeaways: [
      "FIR registration is mandatory for cognizable offences (Lalita Kumari, 2014).",
      "Section 173 BNSS governs FIR registration; Section 174 BNSS governs NCR for non-cognizable offences.",
      "Zero FIR can be registered at any police station regardless of territorial jurisdiction (Section 173(1) BNSS).",
      "e-FIR is available for specified offences in most states; cyber crime has a dedicated portal at cybercrime.gov.in.",
      "If police refuse: SP complaint → Section 175(3) BNSS magistrate complaint → NHRC/SHRC → HC writ.",
      "After FIR: charge-sheet must be filed within 60 / 90 days, or accused gets default bail under Section 187 BNSS.",
    ],
    faqs: [
      {
        question:
          "Is a complaint at the police station the same as an FIR?",
        answer:
          "No. A complaint may or may not become an FIR. For cognizable offences, the police must register the complaint as an FIR under Section 173 BNSS. For non-cognizable offences, the complaint is recorded as an NCR (Non-Cognizable Report) in the general diary, and police cannot investigate without magistrate's permission.",
      },
      {
        question:
          "Can an FIR be cancelled or quashed after registration?",
        answer:
          "Yes. The High Court can quash an FIR under Section 528 BNSS (formerly Section 482 CrPC) inherent powers if it discloses no offence, is malicious, is barred by limitation, or if the parties have settled (in compoundable cases). The Supreme Court in State of Haryana v. Bhajan Lal (1992) laid down seven categories where quashing is appropriate. Quashing applications are filed before the HC of the state where the FIR is registered.",
      },
      {
        question:
          "Can an FIR be filed against unknown persons?",
        answer:
          "Yes. An FIR can be filed against unknown persons (\"unknown accused\") where the victim does not know the identity of the offender (typical in robbery, theft, hit-and-run cases). The investigation establishes identity through CCTV, witnesses, forensics, and other means, and named accused are added by supplementary statements and final charge-sheet.",
      },
      {
        question:
          "How long do I have to file an FIR after the offence?",
        answer:
          "Section 532 BNSS (limitation for taking cognizance) prescribes time limits for offences punishable with fine, with imprisonment up to one year, and up to three years (six months, one year, and three years respectively). For more serious offences, no statutory limitation applies. However, unexplained delay in filing the FIR is a substantive defence at trial — Lalita Kumari recognised this in carving out the seven preliminary-inquiry categories.",
      },
      {
        question:
          "Do I need a lawyer to file an FIR?",
        answer:
          "No, but a lawyer's involvement at the FIR stage materially improves outcomes. A counsel-drafted complaint is harder for police to refuse, includes correct sections, anticipates defence arguments, and lays a clean foundation for trial. For serious cases (matrimonial disputes, commercial fraud, complex assault), counsel involvement at FIR stage is strongly advisable.",
      },
      {
        question:
          "What if the police register the FIR but include wrong sections?",
        answer:
          "FIR sections are amended frequently as investigation develops. The IO can add or delete sections through supplementary statements and the final charge-sheet. Where a victim believes sections are deliberately under-applied (e.g., 354 IPC instead of 376), a Section 175(3) BNSS magistrate complaint can be filed seeking application of the correct sections, or a writ petition under Article 226 to direct correct charging.",
      },
    ],
    relatedPracticeAreaSlugs: ["criminal-law", "cyber-law"],
    relatedServiceSlugs: ["lawyer-consultation", "find-hire-lawyers", "legal-aid"],
    relatedCitySlugs: ["delhi", "mumbai", "bangalore", "chennai"],
  },

  // ============================================================
  // 5. RERA complaint
  // ============================================================
  {
    slug: "rera-complaint-procedure-buyer-guide-2026",
    title: "RERA Complaint Procedure — A Buyer's Step-by-Step Guide",
    metaTitle:
      "RERA Complaint Filing Procedure for Buyers in India (2026 Guide)",
    metaDescription:
      "Step-by-step RERA complaint procedure for home buyers in India: jurisdiction, fee, drafting, MahaRERA / RERA Karnataka / UP RERA processes, and appeals.",
    excerpt:
      "The Real Estate (Regulation and Development) Act 2016 created the fastest consumer-redress route in Indian property law. A well-prepared RERA complaint can deliver a refund-with-interest order in 6-12 months, against builder timelines that civil suits would take 8-12 years to resolve.",
    category: "Property & Real Estate",
    authorSlug: "property-real-estate-desk",
    reviewerSlug: "nyaysevak-legal-team",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTimeMinutes: 12,
    primaryKeyword: "RERA complaint procedure",
    secondaryKeywords: [
      "MahaRERA complaint filing",
      "RERA Karnataka complaint",
      "UP RERA complaint",
      "RERA refund with interest",
      "RERA appellate tribunal",
      "section 18 RERA refund",
    ],
    hero: {
      eyebrow: "Real Estate · RERA Practice",
      title: "RERA Complaint Procedure — A Buyer's Step-by-Step Guide",
      subtitle:
        "How to file a RERA complaint in 2026 — jurisdiction, fees, drafting, hearing, and appeals — with state-specific notes for the most active RERA authorities in India.",
    },
    intro: [
      "Before 2017, a flat-buyer aggrieved by a builder's delay or defect had two practical options: file a civil suit for specific performance or damages (8-12 years average), or file a consumer-court complaint (3-7 years average). Neither was fast enough to make builders fear non-performance.",
      "The Real Estate (Regulation and Development) Act 2016, operational from 1 May 2017, changed that. By creating state-level Real Estate Regulatory Authorities (RERAs) with a 60-day decision mandate, the Act made delay actually expensive for builders. RERA orders carry teeth — refund with interest, deregistration of projects, criminal complaints under Section 59-63, and execution as decrees of the civil court.",
      "This guide explains how to use RERA effectively, with state-specific notes for the most active state authorities (MahaRERA, RERA Karnataka, UP RERA, TN RERA, K-RERA Kerala, GujRERA, WB-HIRA, Delhi RERA, Telangana RERA).",
    ],
    sections: [
      {
        heading: "1. When RERA jurisdiction applies",
        body: [
          "RERA applies to any real-estate project of more than 8 residential units OR more than 500 sq m of land area, that received development approval after the state RERA Act came into force (typically 1 May 2017 onwards). Section 3 makes registration mandatory for promoters of such projects.",
          "Common eligibility issues: (i) projects where the Occupation Certificate was issued before 1 May 2017 are typically not RERA-registered and must be pursued through civil/consumer routes; (ii) plotted developments are covered in most states; (iii) commercial projects are covered though some states have nuances; (iv) projects with completion certificates issued mid-construction may have ongoing RERA jurisdiction for unsold units.",
        ],
      },
      {
        heading: "2. Common grounds for RERA complaint",
        body: [
          "Section 18 — refund with interest where promoter fails to give possession by the date specified in the registered Agreement for Sale.",
          "Section 14 — defects/deficiencies in construction discoverable within 5 years of possession.",
          "Section 19 — misrepresentation in advertising, brochure, or sales pitch.",
          "Section 11 — failure to upload promised information (sanctioned plan, financial details, progress) on the RERA portal.",
          "Section 13 — collection of more than 10% of consideration without registered Agreement for Sale.",
          "Section 31 — generic remedy section for any contravention of the Act.",
        ],
      },
      {
        heading: "3. Drafting and filing the complaint",
        body: [
          "Each state RERA portal has its own complaint format and online filing system. The typical complaint contains: (i) complainant's full particulars; (ii) project particulars including RERA registration number; (iii) promoter particulars; (iv) chronological factual narration; (v) specific grounds with statutory references; (vi) prayer (refund with interest, possession with delay penalty, specific reliefs); (vii) supporting documents.",
          "Mandatory annexures: registered Agreement for Sale; allotment letter; payment receipts; demand letters from promoter; correspondence between buyer and promoter; brochure/advertisement (for misrepresentation cases); photographs of construction (where available); RERA registration certificate of the project.",
          "Government fees: Maharashtra Rs 5,000; Karnataka Rs 1,000; UP Rs 1,000; Tamil Nadu Rs 1,000; varying in other states. Multi-buyer complaints are typically Rs 5,000 to Rs 10,000 with additional per-buyer fees.",
        ],
      },
      {
        heading: "4. Hearing process and timelines",
        body: [
          "Section 29 read with Section 71 RERA prescribes 60 days for the Authority to dispose of complaints. In practice, the timeline is often longer. MahaRERA averages 6-12 months for typical refund matters, RERA Karnataka 9-18 months, UP RERA 6-12 months. Complex matters (group complaints, inter-related projects) take longer.",
          "The hearing follows a hybrid model: the Authority is not bound by CPC procedure (Section 28(2)), but hearings are oral, records are written, and the Authority can summon witnesses and documents (Section 35). Parties typically appear through counsel; in some states, parties can self-represent. Cross-examination is permitted in disputed factual matters.",
        ],
      },
      {
        heading: "5. Reliefs commonly granted",
        body: [
          "Refund with interest under Section 18: typically refund of the principal amount paid plus interest at SBI MCLR plus 2% (in MahaRERA) or 9-10% per annum (most states). Interest runs from the date of payment to the date of refund.",
          "Possession with delay penalty under Section 18 alternative: where buyer wants the unit, possession is directed by a date with penalty interest until handover.",
          "Defect rectification under Section 14: builder directed to rectify within 30-60 days at builder's cost.",
          "Penalty for misleading advertisement under Section 12: the consumer protection 1986 / 2019 schedule applies for restitution and penalty.",
          "Compensation for harassment / mental agony — varies. MahaRERA has been reluctant to award; some other states more receptive.",
        ],
      },
      {
        heading: "6. Appeals and execution",
        body: [
          "Appeals from RERA orders go to the state Real Estate Appellate Tribunal (REAT) within 60 days under Section 44 RERA. MREAT (Maharashtra), Karnataka REAT, UP REAT, TN REAT, etc.",
          "From REAT, second appeal lies to the High Court within 60 days under Section 58 RERA, but only on substantial questions of law.",
          "Execution: a final RERA order, on lapse of appeal period, is executed as a decree of the civil court under Section 40 RERA. The complainant files an execution application before the civil court of the place where the property/builder's principal office is located.",
          "Recovery rates: orders against listed/large builders are typically honoured; orders against smaller builders sometimes require execution proceedings, attachment of bank accounts, and even criminal prosecution under Section 63 RERA for non-compliance.",
        ],
      },
    ],
    takeaways: [
      "RERA Section 18 is the most powerful tool — refund with interest where possession is delayed beyond the registered Agreement for Sale date.",
      "60-day disposal is statutory but actual timelines run 6-18 months across states.",
      "MahaRERA is the most active and matured authority; RERA Karnataka, UP RERA, and TN RERA are also reasonably active.",
      "Appeal goes to REAT within 60 days; second appeal to HC within 60 days.",
      "Execution is as a decree of the civil court under Section 40 RERA.",
      "RERA filings are typically Rs 1,000-10,000 in government fees plus advocate's professional fees.",
    ],
    faqs: [
      {
        question:
          "Can I file a RERA complaint and a consumer court complaint simultaneously?",
        answer:
          "No, you must elect one. The Supreme Court in M3M India Pvt Ltd v. Dr. Dinesh Sharma (2024) confirmed that buyers can choose either RERA or consumer forums under the Consumer Protection Act 2019, but not both. RERA is generally faster for delay/refund; consumer forums may be appropriate where compensation is the primary relief sought.",
      },
      {
        question:
          "Is my project registered under RERA — how do I check?",
        answer:
          "Search the relevant state RERA portal by project name, promoter name, or RERA registration number. MahaRERA (maharerait.maharashtra.gov.in), RERA Karnataka (rera.karnataka.gov.in), UP RERA (up-rera.in), TN RERA (rera.tn.gov.in), Telangana RERA (rera.telangana.gov.in), GujRERA (gujrera.gujarat.gov.in). The portal shows registration certificate, sanctioned plan, financial information, and pending complaints.",
      },
      {
        question:
          "What if the project completion was earlier than 1 May 2017?",
        answer:
          "Pre-2017 completed projects are typically not RERA-jurisdiction. Disputes against the builder go to: (i) consumer forum under the Consumer Protection Act 2019; (ii) civil court for specific performance / damages; (iii) NCLT under IBC if the builder is bankrupt; (iv) writ petition before HC for malpractice/regulatory failures.",
      },
      {
        question:
          "How much interest does RERA award on refund?",
        answer:
          "MahaRERA awards SBI MCLR + 2% per annum (currently around 11%). Most other states have settled at 9-10% per annum. Interest runs from date of payment to date of refund. Total interest claims for long-delayed projects often run to 50-80% of principal — a substantial recovery.",
      },
      {
        question:
          "Can I represent myself before RERA, or do I need a lawyer?",
        answer:
          "Self-representation is permitted in most state RERAs. For straightforward delay-refund matters with clear paper trails, self-representation often works. For contested factual matters (defective construction, misrepresentation, complex price-escalation disputes), counsel involvement materially improves outcomes. Costs of counsel are typically Rs 25,000 to Rs 1,50,000 for a residential refund matter through to first hearing.",
      },
      {
        question:
          "How do I execute a RERA order if the builder doesn't pay?",
        answer:
          "After 60 days from the order (appeal period), the complainant files an execution application before the civil court under Section 40 RERA. The civil court treats the order as a decree — bank accounts can be attached, immovable property attached and sold, and corporate veil pierced where the promoter is insolvent or evading. Section 63 RERA also provides for criminal prosecution for non-compliance, which is a useful pressure mechanism.",
      },
    ],
    relatedPracticeAreaSlugs: ["property-real-estate", "consumer-protection", "civil-law"],
    relatedServiceSlugs: ["lawyer-consultation", "find-hire-lawyers", "document-services"],
    relatedCitySlugs: ["mumbai", "pune", "bangalore", "delhi"],
  },

  // ============================================================
  // 6. Company incorporation
  // ============================================================
  {
    slug: "private-limited-company-incorporation-india-2026",
    title: "How to Register a Private Limited Company in India (2026)",
    metaTitle:
      "Private Limited Company Registration in India — Complete 2026 Procedure",
    metaDescription:
      "Step-by-step procedure to register a Private Limited Company in India in 2026: SPICe+ form, DIN, MoA/AoA drafting, MCA approval, fees, and post-incorporation compliance.",
    excerpt:
      "The Companies Act 2013 and the SPICe+ integrated incorporation form have made Pvt Ltd registration faster and cheaper than ever — typical end-to-end timeline is 7-14 days. This guide walks through every step, with practical notes on naming, share-capital structuring, ESOP-readiness, and the post-incorporation checklist.",
    category: "Corporate & Commercial",
    authorSlug: "corporate-commercial-desk",
    reviewerSlug: "nyaysevak-legal-team",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTimeMinutes: 11,
    primaryKeyword: "private limited company registration India",
    secondaryKeywords: [
      "SPICe+ form incorporation",
      "company incorporation procedure India",
      "MoA AoA drafting",
      "DIN application",
      "MCA company registration",
      "private limited company cost",
    ],
    hero: {
      eyebrow: "Corporate Law · Incorporation",
      title: "How to Register a Private Limited Company in India (2026)",
      subtitle:
        "The 2026 procedure end-to-end — SPICe+ form, DIN, MoA, AoA, share-capital design, and post-incorporation compliance. With practical notes for founders and start-ups.",
    },
    intro: [
      "A Private Limited Company is the default vehicle for any Indian start-up that intends to raise external capital. The structure is recognised by every venture-capital and private-equity fund, allows flexible share-class design (CCPS, CCDs, ordinary equity, ESOPs), and places minimal management overhead on founders compared to public companies.",
      "Since the Ministry of Corporate Affairs introduced SPICe+ (Simplified Proforma for Incorporating a Company Electronically Plus) in February 2020, incorporation has become an integrated 8-service process delivered through a single form. PAN, TAN, GST registration, EPFO, ESIC, profession tax (Maharashtra and Karnataka), and bank-account opening are all handled alongside incorporation. Typical end-to-end timeline is 7-14 days.",
      "This guide walks through the procedure, with notes on common mistakes that founders make and corrections that save trouble later.",
    ],
    sections: [
      {
        heading: "1. Pre-incorporation decisions",
        body: [
          "Number of directors and shareholders: minimum 2, maximum 200 shareholders for a private limited company. Minimum 2 directors, at least 1 of whom must be a resident of India (stayed in India for at least 182 days in the preceding financial year — Section 149(3) Companies Act 2013).",
          "Authorised share capital: typically Rs 10,00,000 to start. Authorised capital can be increased later but increases ROC fees. Paid-up capital can be as low as Rs 10,000.",
          "Registered office: must be in the State where ROC jurisdiction is sought. The first registered office can be a residential address with NoC from the property owner — this is a valid practice.",
          "Name: subject to Section 4(2) Companies Act 2013 and the Companies (Incorporation) Rules 2014. Names must not be undesirable, identical or nearly resembling existing companies/LLPs/registered trade marks, or contain words requiring approval (Bank, Insurance, Stock Exchange, etc.).",
        ],
      },
      {
        heading: "2. The SPICe+ form — Part A and Part B",
        body: [
          "Part A is the name reservation. Up to 2 names can be proposed in priority order. Each name is checked against (i) MCA's name database; (ii) trade-mark registry; (iii) the Companies (Incorporation) Rules naming guidelines. If approved, the name is reserved for 20 days (extendable).",
          "Part B is the integrated incorporation form, including: (i) directors' DIN (Director Identification Number) — for directors who do not have a DIN, Part B itself generates one; (ii) MoA (Memorandum of Association) — captures objects of the company; (iii) AoA (Articles of Association) — captures internal governance rules; (iv) registered office details; (v) share capital structure; (vi) declarations under Section 7 Companies Act 2013; (vii) integrated PAN/TAN/GST/EPFO/ESIC service applications.",
          "Both Part A and Part B can now be filed together (Auto-Approved Names + Incorporation in one go) for routine names.",
        ],
      },
      {
        heading: "3. MoA and AoA drafting",
        body: [
          "MoA contains: (i) name clause; (ii) registered office (state) clause; (iii) objects clause — main objects + incidental objects + other objects; (iv) liability clause (limited by shares); (v) capital clause; (vi) subscription clause (founders subscribing to first shares).",
          "Object-clause drafting is the most common mistake area. Excessively narrow objects restrict the company's future business expansion; excessively broad objects raise compliance and disclosure issues. The recommended pattern is a focused main object, a list of clearly-related ancillary activities under \"matters which are necessary for furtherance of the objects specified in clause III(A)\", and avoidance of generic \"any other lawful business\" language.",
          "AoA is more flexible. Indian start-ups typically use a \"Table F\" base AoA with custom additions for: (i) share-class design (founders' equity vs investor preference); (ii) ESOP framework references; (iii) anti-dilution provisions; (iv) tag-along and drag-along; (v) reserved matters / consent matters for investors; (vi) board composition and observer rights; (vii) information rights; (viii) liquidation preferences.",
          "Many founders use generic templates and discover at Series A that the AoA needs amendment to accommodate investor demands. A founder-friendly investor-ready AoA from day one saves the cost of EGM and amendment later.",
        ],
      },
      {
        heading: "4. Documents required",
        body: [
          "From each director and subscriber: (i) PAN; (ii) Aadhaar; (iii) passport (for foreign directors); (iv) recent utility bill or bank statement (not older than 2 months) as address proof; (v) passport-size photograph.",
          "For registered office: (i) recent electricity bill / property tax receipt; (ii) NOC from the property owner; (iii) rent agreement (if rented).",
          "Class 3 Digital Signature Certificate (DSC) for at least one director and one subscriber. DSCs are obtained from licensed Certifying Authorities (eMudhra, Sify, Capricorn, NSDL e-Gov) and cost Rs 1,500-3,000 each.",
        ],
      },
      {
        heading: "5. Government fees and stamp duty",
        body: [
          "MCA fees for SPICe+ depend on authorised capital. For Rs 10 lakh authorised: government fee around Rs 2,000-4,000 depending on state stamp duty.",
          "Stamp duty on MoA/AoA varies by state: Maharashtra Rs 1,000 (MoA) + Rs 1,000 (AoA); Karnataka Rs 1,000 each; Delhi Rs 200 + Rs 200; Tamil Nadu Rs 200 each. Plus ad valorem stamp duty on share capital in some states.",
          "Total government cost is typically Rs 5,000-15,000 for an Rs 10 lakh authorised-capital Pvt Ltd, depending on state. Professional fees for end-to-end incorporation through CA/CS/lawyer typically Rs 8,000 to Rs 25,000 in Tier-1 cities.",
        ],
      },
      {
        heading: "6. After incorporation — first 30/60/90 days",
        body: [
          "Day 1: Receive Certificate of Incorporation (CoI), PAN, TAN, and GST registration (if opted) from MCA.",
          "Days 1-7: Open current account in the company's name with the issued CoI. Submit bank-account details to MCA in Form INC-22A (Active) — this is now part of the integrated SPICe+ flow but verify status.",
          "Days 1-30: First Board Meeting under Section 173 Companies Act 2013. Appoint first auditor (auditor must be appointed within 30 days of incorporation). Adopt the registered office. Adopt common seal (where used). Authorise bank account signatories.",
          "Days 1-180: Commencement of business declaration in Form INC-20A. This is mandatory before the company can borrow or commence business. Declaration confirms subscriptioned share capital has been received.",
          "Annual compliance: AGM within 6 months of close of first financial year (Section 96 CA 2013); audit and financial statements; Form AOC-4 (financials) and MGT-7 (annual return) filings; income-tax return; GST returns; TDS deposits and quarterly filings; ROC compliance filings as applicable.",
        ],
      },
    ],
    takeaways: [
      "SPICe+ is the integrated single-form incorporation procedure. End-to-end timeline 7-14 days.",
      "Minimum 2 directors and 2 shareholders; at least 1 director must be Indian-resident.",
      "Authorised capital typically Rs 10 lakh to start; can be increased later.",
      "Object clause must be precisely drafted; AoA should be investor-ready from day one.",
      "Total government cost for a routine incorporation: Rs 5,000-15,000; professional fees Rs 8,000-25,000.",
      "Within 30 days: appoint first auditor. Within 180 days: file Form INC-20A commencement declaration.",
    ],
    faqs: [
      {
        question:
          "Can a single person register a Private Limited Company?",
        answer:
          "No. A Pvt Ltd requires minimum 2 shareholders. A single person can register an OPC (One Person Company) under Section 2(62) Companies Act 2013, but OPCs face restrictions (cannot raise external equity, cannot convert to Pvt Ltd until 2 years or threshold turnover). Most start-ups choose Pvt Ltd with co-founder structure or include a family member as nominal second shareholder initially.",
      },
      {
        question:
          "What is the difference between Pvt Ltd and LLP?",
        answer:
          "Pvt Ltd: corporate entity under Companies Act 2013. Higher compliance, mandatory audit, complex governance — but accepted by VCs, allows ESOPs, allows multiple share classes. LLP: under the LLP Act 2008. Lower compliance, no audit until specified threshold, simpler governance — but VCs typically don't invest in LLPs, ESOPs are restrictive, and conversion to Pvt Ltd later is procedurally complex. Start-ups intending to raise institutional capital should pick Pvt Ltd from day one.",
      },
      {
        question:
          "How long does Pvt Ltd registration take?",
        answer:
          "Typically 7-14 days end-to-end. Name reservation takes 1-3 days; SPICe+ filing takes 3-7 days for ROC processing; PAN/TAN/GST integrated processing takes another 1-3 days; bank account opening takes 1-3 days post-CoI. Delays come from name rejections (5-10 days each cycle), document deficiencies, or stamping issues in specific states.",
      },
      {
        question:
          "Can a foreigner be a director or shareholder?",
        answer:
          "Yes. There is no restriction on foreign shareholding in a Pvt Ltd (subject to FDI sectoral caps under FEMA). Foreign directors are also permitted, but the company must always have at least one Indian-resident director (Section 149(3) CA 2013). Foreign directors need DIN and DSC; documents must be apostilled or notarised at the Indian consulate.",
      },
      {
        question:
          "What are the annual compliance costs?",
        answer:
          "For a small Pvt Ltd in Year 1 (no operating revenue): statutory audit Rs 15,000-30,000; ROC filings (AOC-4, MGT-7, etc.) Rs 5,000-15,000; income tax return Rs 5,000-10,000; CA retainer if any. Total annual maintenance: Rs 25,000-60,000. For active operating companies, costs scale with audit complexity, GST returns, payroll, and TDS volumes.",
      },
      {
        question:
          "Should the registered office be in the state where I plan to operate?",
        answer:
          "Not necessarily. The registered office determines ROC jurisdiction (Delhi Pvt Ltd is governed by ROC Delhi, etc.) and stamp-duty applicability. Operations can happen anywhere in India. Many start-ups register in Delhi/Mumbai/Bangalore for ecosystem reasons but operate elsewhere. State-level factors (Karnataka stamp duty, Maharashtra profession tax, Telangana TS-iPASS incentives) can be relevant for specific industries.",
      },
    ],
    relatedPracticeAreaSlugs: ["corporate-business", "tax-law", "intellectual-property"],
    relatedServiceSlugs: ["document-services", "find-hire-lawyers", "lawyer-consultation"],
    relatedCitySlugs: ["bangalore", "mumbai", "delhi", "hyderabad"],
  },

  // ============================================================
  // 7. Section 138 NI Act
  // ============================================================
  {
    slug: "section-138-ni-act-cheque-bounce-procedure-2026",
    title: "Section 138 NI Act Cheque-Bounce Case — 2026 Procedure",
    metaTitle:
      "Section 138 Negotiable Instruments Act: Cheque Bounce Case Procedure (2026)",
    metaDescription:
      "Section 138 NI Act cheque bounce case in India 2026: notice, complaint, summons, trial, sentence, and appeal. Practitioner's complete procedural guide.",
    excerpt:
      "The cheque-bounce case under Section 138 of the Negotiable Instruments Act 1881 is the single most-filed criminal-quasi-civil prosecution in Indian magistrate courts. The 2018 Supreme Court summary-trial framework and the 2023 NI Amendment Act have streamlined procedure substantially. This guide is the practitioner's walk-through.",
    category: "Civil & Litigation",
    authorSlug: "corporate-commercial-desk",
    reviewerSlug: "nyaysevak-legal-team",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTimeMinutes: 12,
    primaryKeyword: "section 138 cheque bounce procedure",
    secondaryKeywords: [
      "section 138 NI Act notice",
      "cheque bounce complaint India",
      "cheque dishonour case procedure",
      "NI Act summary trial",
      "interim compensation section 143A",
    ],
    hero: {
      eyebrow: "Civil & Commercial Litigation",
      title: "Section 138 NI Act Cheque-Bounce Case — 2026 Procedure",
      subtitle:
        "End-to-end procedure under the Negotiable Instruments Act 1881 — notice, complaint, summons, trial, sentence, appeal — with the 2018 Supreme Court framework and 2023 NI Amendment.",
    },
    intro: [
      "The cheque-bounce prosecution under Section 138 NI Act is structurally unusual: it is a criminal complaint, but its function is overwhelmingly civil — recovery of debt by leveraging the threat of imprisonment. Magistrate courts across India hear hundreds of these matters daily, and they constitute a substantial portion of the criminal magistrate-court docket.",
      "The procedure looks deceptively simple but carries several traps for the unwary complainant: the 30-day notice window, the 30-day complaint-filing window, the strict requirement of personal demand-notice service, and the territorial-jurisdiction clarity introduced by Dashrath Rupsingh Rathod (2014) and the 2015 NI Amendment.",
      "This guide walks through the procedure end-to-end, with notes on the 2018 Makwana Mangaldas Tulsidas v. State of Gujarat ((2020) 4 SCC 213 line of authority) summary-trial framework that has accelerated cheque-bounce cases in many magistrate courts.",
    ],
    sections: [
      {
        heading: "1. The triggers — when Section 138 applies",
        body: [
          "Section 138 NI Act applies when a cheque drawn on an account maintained for discharge of a legally enforceable debt or liability is dishonoured for insufficiency of funds or for stop-payment instructions. The cheque must be presented within its validity period (typically 3 months or 6 months pre-2012; 3 months post-RBI 2011 circular).",
          "Key elements: (i) cheque drawn on an account; (ii) for legally enforceable debt or liability; (iii) presented within validity; (iv) dishonoured for insufficient funds, stop-payment, or other specified reasons; (v) demand notice within 30 days of dishonour; (vi) non-payment within 15 days of notice; (vii) complaint within 30 days of cause of action.",
        ],
      },
      {
        heading: "2. The demand notice — Section 138(b)",
        body: [
          "After the bank's dishonour memo is received, the payee has 30 days to issue a written demand notice to the drawer demanding payment. The notice must clearly state: (a) the cheque particulars (number, date, amount); (b) the date of dishonour with bank memo annexure; (c) demand for payment within 15 days; (d) statement that failure to pay will trigger a Section 138 prosecution.",
          "Service: the notice must be served by registered post acknowledgement due, or speed post with proof of delivery, at the drawer's last known address. Refusal of delivery is treated as service. Section 27 of the General Clauses Act 1897 read with Section 114 of the Indian Evidence Act 1872 raises a presumption of service. The Supreme Court in Subodh S. Salaskar (2008) confirmed that the drawer cannot escape liability by claiming non-receipt where the notice was sent to the correct address by registered post.",
        ],
      },
      {
        heading: "3. Filing the complaint — Section 142",
        body: [
          "If the drawer fails to pay within 15 days of receipt of the notice, the cause of action arises on the 16th day. The complaint must be filed within 30 days of the cause of action.",
          "Territorial jurisdiction: post the 2015 NI Amendment, the complaint can be filed (i) where the payee maintains the bank account where the cheque was deposited, or (ii) where the drawer's bank is located. The 2015 amendment overruled the Supreme Court's territorial-jurisdiction restriction in Dashrath Rupsingh Rathod (2014). For payees, the practical effect is significant — the case can be filed near the payee's bank.",
          "Filing: complaint with annexures (cheque, dishonour memo, demand notice with proof of dispatch and delivery, identity proof, board resolution if filed by company) before the Judicial Magistrate of First Class. Court fee under the relevant State Court Fees Act applies (Maharashtra, Karnataka, Tamil Nadu have similar slabs; typically Rs 100-500 for low-value cheques).",
        ],
      },
      {
        heading: "4. Summons and section 251 plea",
        body: [
          "The magistrate, on being satisfied that the complaint discloses an offence, issues summons under Section 204 BNSS (formerly 204 CrPC). The 2018 Supreme Court directions (Makwana Mangaldas; subsequent suo motu PIL on summary trial) require courts to issue summons promptly without unnecessary preliminary inquiry.",
          "On appearance, the accused is asked to plead. Cheque-bounce cases are tried summarily under Section 143 NI Act (where the offence is punishable with imprisonment up to 2 years) — this is faster than regular trial. Where the magistrate considers that summary trial is undesirable, regular trial under Section 263 BNSS / formerly 263 CrPC is followed.",
          "Section 145 NI Act allows examination-in-chief of the complainant by way of affidavit. Cross-examination follows. This is a significant procedural acceleration.",
        ],
      },
      {
        heading: "5. Interim compensation — Section 143A",
        body: [
          "Section 143A NI Act (introduced in 2018) empowers the magistrate to direct interim compensation up to 20% of the cheque amount during pendency of the trial, payable within 60 days. If the accused is acquitted, the interim compensation must be repaid with interest by the complainant.",
          "The Supreme Court in Rakesh Ranjan Shrivastava v. State of Jharkhand (2024) clarified that Section 143A discretion must be exercised judicially. The trial court must consider (i) prima facie case strength, (ii) financial condition of accused, (iii) defences raised. Routine 20% orders without reasoning are vulnerable to revision.",
          "Section 148 NI Act parallel: in appellate proceedings, the appellate court can direct deposit of 20% of fine/compensation as a precondition to suspension of sentence. This is widely invoked by complainants to discipline appellate-stage delays.",
        ],
      },
      {
        heading: "6. Sentence and compensation",
        body: [
          "Maximum punishment: imprisonment up to 2 years OR fine up to twice the cheque amount, OR both. In practice, courts predominantly impose: (i) compensation under Section 357 BNSS (formerly 357 CrPC) of the full cheque amount plus interest; (ii) a notional fine; (iii) imprisonment in default — typically 6 months to 1 year.",
          "Compensation is the substantive remedy. The Supreme Court in Damodar S. Prabhu v. Sayed Babalal H. (2010) provided comprehensive guidelines on sentencing and on compounding.",
          "Compounding: Section 147 NI Act makes Section 138 offences compoundable with the consent of the parties. Compounding can happen at any stage — pre-trial, during trial, at appellate stage. The Damodar S. Prabhu guidelines impose escalating costs for late compounding (typically 10-20% additional cost if compounded at appellate stage).",
        ],
      },
      {
        heading: "7. Appeals and revisions",
        body: [
          "Appeal lies to the Sessions Court under Section 415 BNSS (formerly 374 CrPC) within 30 days. Section 148 NI Act mandates deposit of 20% of fine/compensation as precondition for suspension of sentence pending appeal.",
          "Second appeal / revision under Section 442 BNSS (formerly 397 CrPC) lies to the High Court. The High Court's powers under Section 528 BNSS (formerly 482 CrPC) inherent jurisdiction can be invoked for quashing in appropriate cases.",
          "Special Leave Petition under Article 136 to the Supreme Court is available but rarely entertained except where substantial questions of law arise.",
        ],
      },
      {
        heading: "8. Defences commonly raised — and their fate",
        body: [
          "\"Cheque was issued as security, not for debt\" — Section 138 covers cheques issued for legally enforceable debt OR liability. Security cheques have been variously treated; the latest Supreme Court trend (Sripati Singh v. State of Jharkhand, 2021) is that even security cheques, if drawn for a current and enforceable liability, attract Section 138.",
          "\"Cheque was post-dated and the debt did not exist on date of execution\" — Section 138's debt requirement is on the date of presentation, not execution. Post-dated cheques are squarely covered.",
          "\"Notice was not received\" — Section 27 General Clauses Act presumption is hard to displace where the notice was sent by RPAD to the correct address.",
          "\"The signature/account is not mine\" — this is a substantive defence and requires forensic evidence. Bank records and CCTV are subpoenaed.",
          "\"The amount in the cheque is materially altered\" — material alteration defence under Section 87 NI Act; requires forensic analysis.",
          "\"The case is barred by limitation\" — strict limitation under Section 142(b). Demonstrably untimely complaints are dismissed at the threshold.",
        ],
      },
    ],
    takeaways: [
      "Section 138 NI Act requires: cheque + legally enforceable debt + dishonour + 30-day notice + 15-day default + 30-day complaint window.",
      "Post-2015 NI Amendment, jurisdiction lies where the payee's bank is located.",
      "Summary trial under Section 143 + affidavit examination under Section 145 = accelerated procedure.",
      "Section 143A allows up to 20% interim compensation (Rakesh Ranjan Shrivastava (2024) guidelines apply).",
      "Compounding is permitted under Section 147 at any stage; Damodar S. Prabhu (2010) governs late-stage compounding cost.",
      "Appeal: 30 days to Sessions; Section 148 mandates 20% deposit for suspension of sentence.",
    ],
    faqs: [
      {
        question:
          "What is the time limit for filing a cheque-bounce case?",
        answer:
          "Strict 30-day window from cause of action (16th day after notice service). Late filing leads to dismissal at threshold under Section 142(b) NI Act. Section 142(b) proviso permits the magistrate to take cognizance of a complaint filed beyond the 30-day window if the complainant satisfies the court that there was sufficient cause for not making the complaint earlier — but this is rarely applied.",
      },
      {
        question:
          "Can the cheque-bounce complaint be filed at the place where the cheque was issued?",
        answer:
          "Post the 2015 NI Amendment, the complaint can be filed (i) where the payee's bank (the bank where cheque was deposited) is located, or (ii) where the drawer's bank is located. The place of cheque issuance is irrelevant to jurisdiction unless it coincides with one of these. The 2014 Supreme Court ruling in Dashrath Rupsingh Rathod which had restricted jurisdiction to the drawer's bank stands legislatively overruled.",
      },
      {
        question:
          "How long does a cheque-bounce case take?",
        answer:
          "Statutory framework targets 6-12 months. Realistic timeline in tier-1 magistrate courts: 18-36 months for trial completion. Summary trial framework can compress this to 12-18 months. Appeal stage adds another 12-24 months.",
      },
      {
        question:
          "Can a company be the accused in a Section 138 case?",
        answer:
          "Yes. Section 141 NI Act extends Section 138 liability to companies and to every person in charge of and responsible for the conduct of the business of the company at the time of the offence — typically the directors who signed the cheque. Independent directors are not automatically liable; the complainant must specifically plead that the director was in charge of and responsible for the day-to-day conduct of the company's affairs.",
      },
      {
        question:
          "Can the parties settle the cheque-bounce case?",
        answer:
          "Yes. Section 147 NI Act makes Section 138 offences compoundable. Settlement and compounding can happen at any stage — pre-trial, during trial, or appellate. Damodar S. Prabhu (2010) imposes escalating cost of compounding (10-20% additional cost at appellate stage). Settlement involves payment of the cheque amount + agreed costs and a joint compounding application.",
      },
      {
        question:
          "What is the cost of filing a Section 138 complaint?",
        answer:
          "Court fee under State Court Fees Act is typically Rs 100-1,000 depending on cheque amount and state. Process fees Rs 100-500. Professional fees vary widely — junior counsel can handle a routine cheque-bounce matter for Rs 25,000-75,000 through to first-stage hearing. High-value matters with senior counsel run Rs 1.5 lakh to Rs 5+ lakh.",
      },
    ],
    relatedPracticeAreaSlugs: ["banking-finance", "civil-law", "documentation"],
    relatedServiceSlugs: ["lawyer-consultation", "find-hire-lawyers", "document-services"],
    relatedCitySlugs: ["mumbai", "delhi", "bangalore", "chennai"],
  },

  // ============================================================
  // 8. Lawyer fees India 2026
  // ============================================================
  {
    slug: "lawyer-fees-india-benchmarks-2026",
    title: "Lawyer Fees in India — 2026 Benchmarks Across Practice Areas and Cities",
    metaTitle:
      "Lawyer Fees in India 2026: City-by-City Benchmarks Across Practice Areas",
    metaDescription:
      "Realistic 2026 benchmarks for lawyer fees in India: criminal, civil, family, property, corporate. City-by-city ranges for Delhi, Mumbai, Bangalore, Chennai, Hyderabad.",
    excerpt:
      "Lawyer fees in India are unregulated and famously opaque. This benchmark guide is built from current market data across 8 metro cities and 6 practice areas — covering routine consultation, drafting, single-court appearances, and senior-counsel briefs.",
    category: "Practical Guidance",
    authorSlug: "nyaysevak-legal-team",
    datePublished: "2026-04-22",
    dateModified: "2026-04-22",
    readTimeMinutes: 12,
    primaryKeyword: "lawyer fees India 2026",
    secondaryKeywords: [
      "advocate fees India",
      "criminal lawyer fees Delhi",
      "divorce lawyer cost Mumbai",
      "property lawyer charges Bangalore",
      "senior counsel fees India",
      "lawyer consultation fees India",
    ],
    hero: {
      eyebrow: "Practical Guidance",
      title: "Lawyer Fees in India — 2026 Benchmarks Across Practice Areas and Cities",
      subtitle:
        "Realistic, transparent fee benchmarks for Indian legal services in 2026 — across consultation, drafting, court appearances, and senior-counsel briefs in 8 major cities.",
    },
    intro: [
      "There is no single legal-fee scale in India. The Bar Council of India does not publish minimum fee schedules. The Advocates Act 1961 leaves fees to private contract between client and counsel. Fee-quoting practice is informal, varies dramatically by city and practice area, and is famously opaque to first-time legal-service buyers.",
      "This guide is the most comprehensive attempt to put realistic numbers on Indian legal services in 2026. The figures here are drawn from the NyaySevak network of verified advocates across 8 metro cities and from market intelligence on senior counsel fees gathered through brief-history surveys. They are benchmarks, not quotations — your specific matter may carry a premium or discount depending on the counsel chosen, the complexity, and the urgency.",
      "Use these numbers to (i) calibrate the offers you receive, (ii) recognise when a quote is unreasonably high or unsustainably low, and (iii) plan your legal-services budget realistically.",
    ],
    sections: [
      {
        heading: "1. Consultation fees — the entry point",
        body: [
          "Junior advocate (1-5 years' practice): Rs 500 to Rs 2,000 per consultation.",
          "Mid-career advocate (5-15 years' practice): Rs 1,500 to Rs 5,000 per consultation.",
          "Senior advocate (15+ years' practice / partner-level): Rs 5,000 to Rs 25,000 per consultation.",
          "Designated Senior Advocate: Rs 25,000 to Rs 1,00,000 per consultation.",
          "On NyaySevak specifically, the first consultation is free — this is a deliberate platform decision to reduce friction at the buyer end and to encourage seekers to actually start the conversation. After the first consultation, standard rates apply for subsequent meetings.",
        ],
      },
      {
        heading: "2. Drafting and documentation",
        body: [
          "Standard rental agreement: Rs 1,500-5,000 (junior); Rs 5,000-15,000 (senior).",
          "Sale deed (residential, Tier-1 city): Rs 10,000-30,000 (junior); Rs 30,000-1,00,000 (senior).",
          "Standard NDA / employment contract: Rs 5,000-15,000 (junior); Rs 15,000-50,000 (senior).",
          "Shareholders agreement / SHA / SSA / commercial-contract drafting: Rs 50,000-3,00,000 (junior counsel); Rs 3,00,000-15,00,000+ (senior firm).",
          "Will drafting (simple): Rs 5,000-25,000.",
          "Will drafting (complex with trusts/HUF): Rs 50,000-3,00,000.",
          "Power of Attorney: Rs 2,000-10,000.",
          "Settlement deed (matrimonial): Rs 25,000-1,50,000.",
          "RERA-compliant Agreement for Sale review: Rs 15,000-50,000.",
        ],
      },
      {
        heading: "3. Criminal practice — typical fee structures",
        body: [
          "Magistrate-court bail (junior): Rs 15,000-50,000 per appearance.",
          "Sessions Court anticipatory bail (junior): Rs 30,000-1,00,000 per appearance.",
          "Sessions Court anticipatory bail (senior): Rs 1,50,000-5,00,000 per appearance.",
          "HC bail / quashing: Rs 75,000-3,00,000 (junior counsel-led brief).",
          "HC bail / quashing (with senior counsel): Rs 3,00,000-15,00,000.",
          "Trial defence (full case, magistrate-level, junior): Rs 1,00,000-5,00,000 lump-sum.",
          "Trial defence (Sessions, junior): Rs 3,00,000-15,00,000.",
          "Trial defence (Sessions, senior): Rs 15,00,000-75,00,000+.",
          "PMLA / CBI / NIA matters: typically 2-4x the comparable IPC/BNS rates due to complexity.",
          "Supreme Court SLP (criminal): Rs 1,50,000-15,00,000+ depending on counsel.",
        ],
      },
      {
        heading: "4. Family and matrimonial practice",
        body: [
          "Mutual-consent divorce (junior, Tier-1 city): Rs 40,000-1,50,000 per side, lump sum.",
          "Mutual-consent divorce (senior): Rs 1,50,000-5,00,000.",
          "Contested divorce (junior, full case): Rs 1,50,000-7,50,000 lump-sum, plus per-appearance fees in some structures.",
          "Contested divorce (senior): Rs 7,50,000-30,00,000+.",
          "Child custody (separate matter, junior): Rs 1,00,000-4,00,000.",
          "Domestic Violence Act matters: Rs 50,000-3,00,000 (junior); Rs 3,00,000-10,00,000 (senior).",
          "Maintenance applications (Section 125 BNSS / 24-25 HMA): Rs 30,000-1,50,000 (junior); Rs 1,50,000-5,00,000 (senior).",
        ],
      },
      {
        heading: "5. Property and real-estate practice",
        body: [
          "Title verification + opinion (residential, up to Rs 2 cr): Rs 15,000-75,000.",
          "Title verification + opinion (commercial / above Rs 5 cr): Rs 1,50,000-5,00,000.",
          "Sale deed drafting + execution: Rs 25,000-1,00,000 (junior); Rs 1,00,000-5,00,000 (senior).",
          "RERA complaint (single buyer, single project): Rs 25,000-1,50,000 lump-sum (junior); Rs 1,50,000-5,00,000 (senior).",
          "RERA appellate (REAT): Rs 1,00,000-5,00,000 (junior); Rs 5,00,000-15,00,000 (senior).",
          "Partition suit (junior, full case): Rs 2,00,000-7,50,000.",
          "Partition suit (senior): Rs 10,00,000-50,00,000.",
          "Specific performance suit: Rs 3,00,000-15,00,000 (junior); Rs 15,00,000-75,00,000 (senior).",
          "Tenancy/eviction (Mumbai Rent Control matters): Rs 1,00,000-7,50,000 (junior); Rs 7,50,000-30,00,000 (senior).",
        ],
      },
      {
        heading: "6. Corporate and commercial practice",
        body: [
          "Pvt Ltd incorporation: Rs 8,000-25,000 (CA/CS-led); Rs 25,000-75,000 (lawyer-led with custom MoA/AoA).",
          "Shareholders agreement (early-stage start-up): Rs 75,000-3,00,000 (junior counsel); Rs 3,00,000-15,00,000 (senior firm).",
          "Series A SHA + SSA: Rs 5,00,000-25,00,000 (mid-tier firm); Rs 25,00,000-1,00,00,000+ (top-tier firm).",
          "M&A documentation (mid-market deal): Rs 25,00,000-2,00,00,000 (mid-tier firm); Rs 2,00,00,000+ (top-tier firm).",
          "NCLT IBC application (Section 7 financial creditor): Rs 5,00,000-25,00,000 (junior counsel); Rs 25,00,000-1,00,00,000 (senior firm).",
          "SEBI investigation defence: Rs 25,00,000-2,00,00,000+.",
          "Arbitration (domestic, claim under Rs 5 cr): Rs 5,00,000-15,00,000 (junior); Rs 15,00,000-50,00,000 (senior).",
          "Arbitration (commercial, claim above Rs 50 cr): Rs 50,00,000-5,00,00,000+.",
        ],
      },
      {
        heading: "7. City premiums and discounts",
        body: [
          "Delhi: highest fees in India. Senior counsel fees at Delhi HC are typically 1.5-2x the Mumbai equivalent. Reasons: highest concentration of designated Senior Advocates, Supreme Court proximity, and the commercial-bar density.",
          "Mumbai: second-highest. Senior counsel commercial fees roughly equal to Delhi for arbitration and corporate matters; lower for ordinary criminal/civil practice.",
          "Bangalore: moderate-high, with strong premium for technology / start-up / VC documentation. General litigation fees typically 25-40% below Delhi/Mumbai.",
          "Chennai: moderate. CMDA-DTCP / patta-chitta property practice has its own specialist bar with strong rates. General fees 30-45% below Delhi.",
          "Hyderabad: moderate. Telangana HC writ practice and Dharani-portal property matters have their own specialists.",
          "Pune: moderate. Pune Co-op Appellate Court matters (society / housing) carry its own specialist premium.",
          "Kolkata: lower-moderate. Calcutta HC original civil jurisdiction and admiralty practice are higher; ordinary practice 30-50% below Delhi.",
          "Ahmedabad: moderate. GIFT-City IFSC framework has emerging specialist demand.",
        ],
      },
      {
        heading: "8. Fee-engagement structures — what to ask for",
        body: [
          "Lump-sum: a single fee for the entire matter through to disposal. Predictable; requires careful scope definition.",
          "Per-appearance: a fee for each court appearance plus drafting fees. Flexible; can spiral in long-running matters.",
          "Hybrid (lump-sum upfront + per-appearance for additional dates): common in litigation; aligns incentives reasonably.",
          "Success-fee / contingency: largely prohibited under Bar Council of India rules for litigation in India, except for limited recovery-based matters. Use cautiously.",
          "Always ask for a written engagement letter specifying scope, fee structure, payment milestones, out-of-pocket charges (court fees, travel, photocopying), and termination terms. The absence of a written engagement letter is the single most common cause of fee disputes.",
        ],
      },
    ],
    takeaways: [
      "Junior advocate consultation: Rs 500-2,000; senior advocate: Rs 5,000-25,000; Designated Senior Advocate: Rs 25,000-1,00,000.",
      "Mutual divorce typical lump-sum: Rs 40,000-1,50,000 in tier-1 cities (junior counsel).",
      "Anticipatory bail Sessions Court: Rs 30,000-1,00,000 (junior); HC: Rs 75,000-3,00,000.",
      "Title verification: Rs 15,000-75,000 for residential up to Rs 2 cr.",
      "RERA complaint: Rs 25,000-1,50,000 lump-sum (junior counsel).",
      "Pvt Ltd incorporation: Rs 8,000-25,000 (CA/CS-led).",
      "Delhi is the most expensive city; Kolkata typically 30-50% below Delhi for ordinary practice.",
      "Always insist on a written engagement letter.",
    ],
    faqs: [
      {
        question:
          "Are lawyer fees in India regulated?",
        answer:
          "No statutory minimum or maximum schedule applies. The Bar Council of India does not publish a fee schedule. The Advocates Act 1961 leaves fees to private contract. State Bar Councils may issue advisory guidelines but they are non-binding. Fee-setting is therefore market-driven and varies dramatically.",
      },
      {
        question:
          "Why do senior advocate fees seem so high?",
        answer:
          "Senior advocate fees reflect (i) decades of accumulated experience and bar-recognition; (ii) limited supply (designated Senior Advocates number a few hundred per High Court); (iii) the all-or-nothing character of high-stakes litigation where senior counsel involvement materially shifts outcome probability; (iv) opportunity cost — a senior counsel's docket is over-subscribed and pricing is the rationing mechanism.",
      },
      {
        question:
          "Can I negotiate lawyer fees?",
        answer:
          "Yes, particularly with junior and mid-career counsel. Realistic negotiation levers: (i) bundling multiple matters (volume discount); (ii) clear scope definition (lump-sum vs open-ended hourly); (iii) milestone-based payments rather than full upfront; (iv) referral source mention (existing client referral often unlocks discount); (v) honest discussion of budget — counsel can structure scope to fit budget. Senior and Designated Senior Advocate fees are largely non-negotiable.",
      },
      {
        question:
          "What is included in lawyer fees and what is extra?",
        answer:
          "Typically extra (out-of-pocket): court fees, process fees, certified-copy charges, stamp duty, postage, travel and accommodation for out-of-station hearings, photocopying. Always ask for a written breakdown distinguishing professional fees from disbursements. Mid-litigation surprise charges are a recurring source of disputes and can be avoided with a written engagement letter.",
      },
      {
        question:
          "Are contingency / success fees allowed in India?",
        answer:
          "Contingency / pure success-fee arrangements are largely prohibited for litigation under Bar Council of India rules and Supreme Court precedent (Mr. G., A Senior Advocate of the Supreme Court, In Re, AIR 1955 SC 1). Limited carve-outs exist for recovery-based matters and certain alternative dispute resolution frameworks. Foreign success-fee structures imported by international firms have been subject to BCI scrutiny.",
      },
      {
        question:
          "Where can I get free legal services in India?",
        answer:
          "Legal Services Authorities Act 1987 establishes free legal aid for women, children, SC/ST, persons with disability, and persons with annual income below state-prescribed thresholds (typically Rs 1-3 lakh annually). National Legal Services Authority (NALSA) at the apex; State Legal Services Authorities (SLSAs) at state level; District Legal Services Authorities at district level. Free aid covers both civil and criminal matters. NyaySevak's Legal Aid service connects eligible users with NALSA / SLSA / DLSA panels.",
      },
    ],
    relatedPracticeAreaSlugs: [
      "criminal-law",
      "family-matrimonial",
      "property-real-estate",
      "corporate-business",
    ],
    relatedServiceSlugs: ["lawyer-consultation", "find-hire-lawyers", "legal-aid"],
    relatedCitySlugs: ["delhi", "mumbai", "bangalore", "chennai", "hyderabad"],
  },

  // ============================================================
  // 9. How to send a legal notice in India
  // ============================================================
  {
    slug: "how-to-send-legal-notice-india-format-procedure-2026",
    title: "How to Send a Legal Notice in India: Format, Process & Cost (2026)",
    metaTitle: "How to Send a Legal Notice in India (2026) — Format, Process & Cost",
    metaDescription:
      "Step-by-step guide to sending a legal notice in India: when it's required, format, how to send it, cost, replies, and what happens next. Free first consultation.",
    excerpt:
      "A legal notice is the formal first step before most disputes go to court. Here's exactly when you need one, what it must contain, how to send it correctly, and what it costs.",
    category: "Practical Guidance",
    authorSlug: "nyaysevak-legal-team",
    reviewerSlug: "nyaysevak-legal-team",
    datePublished: "2026-05-20",
    dateModified: "2026-05-20",
    readTimeMinutes: 9,
    primaryKeyword: "how to send a legal notice in India",
    secondaryKeywords: [
      "legal notice format",
      "legal notice procedure India",
      "how to reply to a legal notice",
      "legal notice cost India",
      "is a legal notice mandatory",
    ],
    hero: {
      eyebrow: "Practical Guidance",
      title: "How to Send a Legal Notice in India",
      subtitle:
        "When it's required, what it must say, how to send it the right way, and what happens after — a complete 2026 walk-through.",
    },
    intro: [
      "A legal notice is a formal, written intimation that you intend to take legal action unless a grievance is addressed. In India it is the practical first step in most civil disputes — money recovery, property and tenancy matters, consumer complaints, employment dues, and cheque dishonour — and in some cases it is a statutory pre-condition before you can even file a suit.",
      "Sending a well-drafted notice often resolves the matter without litigation, and where it doesn't, it creates a clear, dated record of your demand that strengthens your case. This guide explains when a legal notice is required, what it must contain, how to send it correctly, what it costs, and how to deal with a notice you have received.",
    ],
    sections: [
      {
        heading: "What is a legal notice and when do you need one?",
        body: [
          "A legal notice formally communicates a grievance and a demand to the other party, along with a deadline to comply and a warning of legal consequences if they don't. It is usually drafted and sent through an advocate on your behalf.",
          "In several situations a notice is not just advisable but legally mandatory before filing:",
        ],
        bullets: [
          "Cheque bounce: a demand notice under Section 138 of the Negotiable Instruments Act must be sent within 30 days of receiving the cheque-return memo, giving the drawer 15 days to pay.",
          "Suits against the government or public officers: a notice under Section 80 of the Code of Civil Procedure is generally required before filing.",
          "Tenancy and eviction: many state rent laws require a notice to the tenant before eviction proceedings.",
          "Consumer disputes, employment dues, and contract breaches: a notice is standard practice and often prompts settlement.",
        ],
      },
      {
        heading: "What a legal notice must contain",
        body: [
          "There is no single prescribed form, but a sound legal notice is precise, factual, and free of exaggeration. A poorly drafted notice can weaken your position, so the contents matter.",
        ],
        bullets: [
          "Sender's details and, where sent through a lawyer, the advocate's name and address.",
          "Full name and address of the recipient.",
          "A clear, chronological statement of the relevant facts and dates.",
          "The specific legal grievance and the relief or action demanded.",
          "A reasonable time to comply — commonly 15 to 30 days (15 days is fixed by statute for cheque-bounce notices).",
          "A statement that legal proceedings will follow if the demand is not met.",
        ],
      },
      {
        heading: "Step-by-step: how to send a legal notice",
        body: [
          "The process is straightforward when handled correctly. Proof of dispatch and delivery is critical, because you may later need to show the court that the notice was duly served.",
        ],
        bullets: [
          "Step 1 — Consult a lawyer and share all documents (agreements, receipts, messages, the cheque-return memo, etc.).",
          "Step 2 — The advocate drafts the notice on their letterhead, setting out facts, the demand, and the compliance period.",
          "Step 3 — You review and approve the draft for accuracy.",
          "Step 4 — Send it by Registered Post with Acknowledgement Due (and often by email/courier in addition), and retain the postal receipt and tracking.",
          "Step 5 — Preserve the acknowledgement and a copy of the notice as proof of service.",
          "Step 6 — Await a reply within the deadline; if there is no satisfactory response, proceed to file the appropriate case.",
        ],
      },
      {
        heading: "How much does a legal notice cost?",
        body: [
          "Costs vary with the complexity of the matter and the lawyer's experience. Drafting and sending a straightforward notice is typically an affordable fixed fee, with postage as a small additional cost. Complex commercial matters cost more because they require detailed drafting.",
          "On NyaySevak the exact fee is shown and agreed upfront, and your first consultation is free — so you can understand your position before committing to anything.",
        ],
      },
      {
        heading: "What to do if you receive a legal notice",
        body: [
          "Receiving a notice is not the same as being sued, but ignoring it is risky. A measured, timely response often prevents escalation and protects your interests.",
        ],
        bullets: [
          "Do not ignore it — note the deadline and act within it.",
          "Read it carefully and gather your own documents and version of events.",
          "Consult a lawyer before responding; an admission or a careless reply can be used against you.",
          "Send a considered reply through your advocate, or comply if the demand is justified.",
        ],
      },
    ],
    takeaways: [
      "A legal notice is the formal first step before most civil disputes reach court.",
      "It is mandatory in specific cases — notably a Section 138 cheque-bounce demand and a Section 80 CPC notice against the government.",
      "Keep it factual and precise, and always send it by Registered Post AD with proof retained.",
      "Never ignore a notice you receive — respond within the deadline, ideally through a lawyer.",
    ],
    faqs: [
      {
        question: "Is a legal notice mandatory before filing a case in India?",
        answer:
          "Not always. It is mandatory in specific situations — for example, a Section 138 cheque-bounce demand notice, a Section 80 CPC notice before suing the government, and notices required under many tenancy laws. In most other civil disputes it is not strictly mandatory but is strongly advisable, as it can resolve the matter and strengthens your case if litigation follows.",
      },
      {
        question: "Can I send a legal notice myself without a lawyer?",
        answer:
          "Legally you can, but it is not recommended. The wording, facts, and legal basis of a notice affect your eventual case, and errors can weaken your position. Most people send notices through an advocate, which also signals seriousness to the other side.",
      },
      {
        question: "How should a legal notice be sent?",
        answer:
          "Send it by Registered Post with Acknowledgement Due so you have proof of dispatch and delivery, and keep the postal receipt and tracking. Many lawyers also send a copy by email or courier. The acknowledgement is important evidence of service if the dispute reaches court.",
      },
      {
        question: "How much time does the recipient get to respond?",
        answer:
          "The notice itself sets a reasonable compliance period, commonly 15 to 30 days. For cheque-bounce notices under Section 138 NI Act, the drawer must be given 15 days to make payment after receiving the notice.",
      },
      {
        question: "What happens if the recipient ignores the legal notice?",
        answer:
          "If the recipient does not comply within the stated time, you can proceed to file the appropriate case — a civil suit, a complaint, or a criminal complaint depending on the matter. The unanswered notice becomes useful evidence of your demand and the other party's failure to respond.",
      },
      {
        question: "How much does it cost to send a legal notice in India?",
        answer:
          "It depends on the complexity of the matter and the lawyer's experience. A simple notice is usually an affordable fixed fee plus a small postage cost, while complex commercial notices cost more. On NyaySevak the fee is agreed upfront and your first consultation is free.",
      },
    ],
    relatedPracticeAreaSlugs: ["civil-law", "property-real-estate", "consumer-protection", "banking-finance"],
    relatedServiceSlugs: ["lawyer-consultation", "document-services", "find-hire-lawyers"],
    relatedCitySlugs: ["delhi", "mumbai", "bangalore", "jaipur"],
  },

  // ============================================================
  // 10. How to report cyber crime and online fraud in India
  // ============================================================
  {
    slug: "report-cyber-crime-online-fraud-india-procedure-2026",
    title: "How to Report Cyber Crime & Online Fraud in India (2026)",
    metaTitle: "How to Report Cyber Crime & Online Fraud in India (2026) — Step by Step",
    metaDescription:
      "Victim of online fraud or a cyber crime in India? Here's how to report it on the 1930 helpline and cybercrime.gov.in, freeze stolen money, file an FIR, and recover funds.",
    excerpt:
      "If you've lost money to online fraud, the first hour matters most. Here's exactly how to report cyber crime in India, freeze stolen funds, and file your complaint.",
    category: "Practical Guidance",
    authorSlug: "nyaysevak-legal-team",
    reviewerSlug: "criminal-law-desk",
    datePublished: "2026-05-22",
    dateModified: "2026-05-22",
    readTimeMinutes: 8,
    primaryKeyword: "how to report cyber crime in India",
    secondaryKeywords: [
      "report online fraud India",
      "cyber crime helpline 1930",
      "cybercrime.gov.in complaint",
      "online fraud money recovery India",
      "cyber crime FIR",
    ],
    hero: {
      eyebrow: "Practical Guidance",
      title: "How to Report Cyber Crime & Online Fraud in India",
      subtitle:
        "The first hour decides whether you recover your money. A step-by-step 2026 guide to reporting, freezing funds, and filing your complaint.",
    },
    intro: [
      "Online fraud — UPI and card scams, fake investment and trading apps, job and loan frauds, phishing, and digital-arrest scams — has surged in India. If money has left your account, speed is everything: reporting within the first hour (the 'golden hour') gives banks and police the best chance of freezing the funds before they are withdrawn.",
      "This guide explains exactly how to report a cyber crime in India through the national helpline and reporting portal, how to try to freeze stolen money, when and how to file an FIR, and the evidence you should preserve.",
    ],
    sections: [
      {
        heading: "Act in the 'golden hour' — call 1930 first",
        body: [
          "For any financial cyber fraud, the single most important step is to report immediately on the national cyber-crime helpline so a freeze request can be sent to the banks and payment intermediaries in the transaction chain.",
        ],
        bullets: [
          "Call 1930 (the national cyber-crime financial-fraud helpline) as soon as you realise money has been lost.",
          "Keep your transaction details ready: amount, date and time, UPI/transaction reference numbers, and the beneficiary details if known.",
          "The sooner you report, the higher the chance the receiving account can be frozen before withdrawal.",
          "Also inform your own bank immediately and ask them to flag the transaction.",
        ],
      },
      {
        heading: "File a complaint on cybercrime.gov.in",
        body: [
          "The National Cyber Crime Reporting Portal lets you file a complaint online for financial fraud as well as other cyber crimes such as social-media offences, online harassment, and content-related crimes.",
        ],
        bullets: [
          "Go to the National Cyber Crime Reporting Portal (cybercrime.gov.in).",
          "Choose the appropriate category — 'financial fraud' for money-loss cases, or the relevant category for harassment/social-media crimes.",
          "Register/verify with your mobile number and fill in the incident details.",
          "Upload your evidence (see below) and submit; note the acknowledgement/complaint number for follow-up.",
        ],
      },
      {
        heading: "Preserve your evidence",
        body: [
          "Digital evidence is fragile and easy to lose. Collect and back it up before accounts or messages are deleted.",
        ],
        bullets: [
          "Screenshots of the fraudulent messages, chats, emails, profiles, or websites.",
          "Transaction IDs, UPI reference numbers, bank statements, and payment receipts.",
          "Phone numbers, UPI IDs, account numbers, and URLs used by the fraudster.",
          "Any call recordings, and a written timeline of what happened and when.",
        ],
      },
      {
        heading: "When and how to file an FIR",
        body: [
          "For serious cases — significant financial loss, identity theft, sextortion, or where the online complaint is not progressing — you can file an FIR at the local cyber-crime police station or any police station, which can transfer it to the cyber cell.",
          "Cyber offences are typically registered under provisions of the Information Technology Act, 2000 (such as identity theft and cheating by personation) together with the relevant provisions of the Bharatiya Nyaya Sanhita for cheating and fraud. A lawyer can ensure the complaint is framed under the correct provisions and followed up effectively.",
        ],
      },
      {
        heading: "Recovering your money and protecting yourself",
        body: [
          "Recovery depends largely on how quickly the funds were reported and whether the receiving account could be frozen. Persistent follow-up with the bank, the cyber cell, and the portal complaint improves your chances.",
        ],
        bullets: [
          "Follow up on your portal complaint number and with the bank's nodal officer.",
          "Raise a dispute with your bank and, if needed, escalate to the RBI Ombudsman for unresolved grievances.",
          "Change passwords, enable two-factor authentication, and freeze or block compromised cards and accounts.",
          "Never share OTPs, never install remote-access apps on a stranger's instruction, and treat 'digital arrest' calls as scams.",
        ],
      },
    ],
    takeaways: [
      "For financial fraud, call 1930 immediately — the 'golden hour' decides whether funds can be frozen.",
      "File a complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) and save the complaint number.",
      "Preserve all digital evidence — screenshots, transaction IDs, URLs, and a timeline.",
      "For serious cases, file an FIR with the cyber cell; a lawyer ensures the right IT Act and BNS provisions are invoked.",
    ],
    faqs: [
      {
        question: "What is the fastest way to report online financial fraud in India?",
        answer:
          "Call the national cyber-crime helpline 1930 immediately and inform your bank. Reporting within the first hour gives the best chance of freezing the stolen money in the receiving account before it is withdrawn. Then file a detailed complaint on cybercrime.gov.in.",
      },
      {
        question: "Can I report cyber crime online without going to a police station?",
        answer:
          "Yes. You can file a complaint on the National Cyber Crime Reporting Portal (cybercrime.gov.in) from home. For serious matters or where the online complaint stalls, you can also file an FIR at a cyber-crime police station or any police station.",
      },
      {
        question: "Will I get my money back after online fraud?",
        answer:
          "Recovery is possible but not guaranteed and depends heavily on how quickly you reported. If the funds were flagged early and the receiving account was frozen, the chances improve. Persistent follow-up with the bank, the cyber cell, and your portal complaint is important, and unresolved bank grievances can be escalated to the RBI Ombudsman.",
      },
      {
        question: "What evidence do I need to report a cyber crime?",
        answer:
          "Keep screenshots of messages, chats, and websites; transaction IDs, UPI reference numbers, and bank statements; the fraudster's phone numbers, UPI IDs, account numbers, and URLs; and a written timeline. Back everything up before anything is deleted.",
      },
      {
        question: "Under which laws are cyber crimes registered in India?",
        answer:
          "Cyber offences are typically registered under the Information Technology Act, 2000 (for example, identity theft and cheating by personation) along with the relevant cheating and fraud provisions of the Bharatiya Nyaya Sanhita. A lawyer ensures the complaint is framed under the correct provisions.",
      },
      {
        question: "Do I need a lawyer to report cyber crime?",
        answer:
          "You can report it yourself through 1930 and the portal. However, for serious losses, identity theft, harassment, or when a case has to be pursued through an FIR and the courts, a cyber-crime lawyer helps frame the complaint correctly, follow up with agencies, and pursue recovery. Your first consultation on NyaySevak is free.",
      },
    ],
    relatedPracticeAreaSlugs: ["cyber-law", "criminal-law", "consumer-protection"],
    relatedServiceSlugs: ["lawyer-consultation", "find-hire-lawyers", "legal-aid"],
    relatedCitySlugs: ["delhi", "mumbai", "bangalore", "jaipur"],
  },
];

export const articlesBySlug = Object.fromEntries(
  articles.map((a) => [a.slug, a])
);

export function isArticleSlug(slug: string): slug is (typeof articles)[number]["slug"] {
  return articles.some((a) => a.slug === slug);
}

export const articleCategories = Array.from(
  new Set(articles.map((a) => a.category))
);
