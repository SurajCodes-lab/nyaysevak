// Week 6: Legal glossary — captures definitional ("what is X") search queries.
// Each entry is short (50-120 word definition), structured for Featured Snippet
// extraction, and emits DefinedTermSet + DefinedTerm JSON-LD on the glossary page.
// Indian-law specific. Cross-linked to relevant practice areas where applicable.

export type GlossaryTerm = {
  slug: string; // for #anchor deep-linking from search engines
  term: string;
  shortDefinition: string;
  longDefinition: string;
  category:
    | "Criminal Procedure"
    | "Civil Procedure"
    | "Family Law"
    | "Property Law"
    | "Corporate Law"
    | "Contract & Commercial"
    | "Constitutional Law"
    | "Evidence & Trial";
  statutoryReference?: string;
  relatedPracticeAreaSlugs: string[];
};

export const glossaryTerms: GlossaryTerm[] = [
  // ========== Criminal Procedure ==========
  {
    slug: "fir-first-information-report",
    term: "FIR (First Information Report)",
    shortDefinition:
      "Written record of information relating to a cognizable offence, registered by the police under Section 173 BNSS (formerly Section 154 CrPC). Triggers police investigation and forms the foundation of every criminal prosecution.",
    longDefinition:
      "An FIR is the formal written record made by a police officer (typically the Station House Officer or Duty Officer) of information received about the commission of a cognizable offence. Section 173 of the Bharatiya Nagarik Suraksha Sanhita 2023 (BNSS), which replaced Section 154 of the erstwhile Code of Criminal Procedure 1973 with effect from 1 July 2024, makes FIR registration mandatory for cognizable offences. Following the Supreme Court's Constitution Bench decision in Lalita Kumari v. Government of Uttar Pradesh, (2014) 2 SCC 1, the police cannot refuse FIR registration except in seven enumerated categories where preliminary inquiry is permissible.",
    category: "Criminal Procedure",
    statutoryReference: "Section 173 BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },
  {
    slug: "anticipatory-bail",
    term: "Anticipatory Bail",
    shortDefinition:
      "Pre-arrest order under Section 482 BNSS (formerly Section 438 CrPC) directing that, in the event of arrest of the applicant on accusation of having committed a non-bailable offence, he or she shall be released on bail.",
    longDefinition:
      "Anticipatory bail is a protective order granted by the High Court or Court of Session under Section 482 of the Bharatiya Nagarik Suraksha Sanhita 2023, which replaced Section 438 of the erstwhile CrPC. It is sought when a person has reason to believe that he or she may be arrested on accusation of a non-bailable offence. The Supreme Court in Sushila Aggarwal v. State (NCT of Delhi), (2020) 5 SCC 1, held that anticipatory bail is not automatically time-limited and may extend through investigation, trial, or beyond.",
    category: "Criminal Procedure",
    statutoryReference: "Section 482 BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law", "cbi-cases", "ed-cases"],
  },
  {
    slug: "regular-bail",
    term: "Regular Bail",
    shortDefinition:
      "Bail granted to an accused person already in custody under Section 480 (bailable offences) or Section 483 (non-bailable offences) BNSS. Distinct from anticipatory bail, which is granted before arrest.",
    longDefinition:
      "Regular bail is granted post-arrest. For bailable offences (Section 480 BNSS), bail is a matter of right. For non-bailable offences (Section 483 BNSS), bail is discretionary and is decided based on factors including nature and gravity of the offence, prima facie evidence, antecedents of the accused, possibility of fleeing, and risk of witness tampering. The Supreme Court in Satender Kumar Antil v. CBI, (2022) 10 SCC 51, laid down comprehensive guidelines for grant of bail to accused persons in different offence categories.",
    category: "Criminal Procedure",
    statutoryReference: "Sections 480, 483 BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },
  {
    slug: "default-bail-statutory-bail",
    term: "Default Bail (Statutory Bail)",
    shortDefinition:
      "Statutory right to bail under Section 187(3) BNSS when the prosecution fails to file the charge-sheet within 60 or 90 days of the accused's first remand to custody.",
    longDefinition:
      "Default bail, also known as statutory bail or compulsive bail, is the indefeasible right of an accused person to be released on bail when the investigation has not been completed within the statutory period — 60 days for offences punishable up to 10 years and 90 days for offences punishable beyond 10 years and capital offences. The right arises under Section 187(3) BNSS (formerly Section 167(2) CrPC). The accused must apply before the charge-sheet is filed; once filed, the right is extinguished. The Supreme Court in Satender Kumar Antil affirmed the absolute nature of this right.",
    category: "Criminal Procedure",
    statutoryReference: "Section 187(3) BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },
  {
    slug: "quashing-of-fir",
    term: "Quashing of FIR",
    shortDefinition:
      "High Court order under Section 528 BNSS (formerly Section 482 CrPC) inherent powers, terminating an FIR or criminal proceeding that discloses no offence, is malicious, time-barred, or has been compounded between parties.",
    longDefinition:
      "Quashing is the High Court's exercise of inherent jurisdiction to terminate criminal proceedings that should not continue. The Supreme Court in State of Haryana v. Bhajan Lal, 1992 Supp (1) SCC 335, laid down seven categories where quashing is appropriate, including where the allegations do not disclose a cognizable offence, are absurd or improbable, or are manifestly attended with mala fides. Quashing applications are filed before the High Court of the state where the FIR is registered.",
    category: "Criminal Procedure",
    statutoryReference: "Section 528 BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },
  {
    slug: "cognizable-offence",
    term: "Cognizable Offence",
    shortDefinition:
      "Offence in which a police officer may arrest without warrant and may register an FIR and investigate without magistrate's sanction. Listed in the First Schedule to the BNSS.",
    longDefinition:
      "Cognizable offences include serious crimes such as murder, rape, robbery, dacoity, theft above specified value, kidnapping, dowry death, and most BNS offences punishable with imprisonment of three years or more. The classification — cognizable vs non-cognizable — appears in Schedule 1 of the BNSS and determines whether the police can proceed without magistrate involvement. For non-cognizable offences, an NCR (Non-Cognizable Report) is recorded but investigation requires Magistrate's permission under Section 174 BNSS.",
    category: "Criminal Procedure",
    statutoryReference: "Schedule 1, BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },
  {
    slug: "charge-sheet",
    term: "Charge-sheet (Final Report)",
    shortDefinition:
      "Police report under Section 193 BNSS (formerly Section 173 CrPC) filed at the conclusion of investigation, stating the facts found, the persons accused, and the sections under which prosecution is recommended.",
    longDefinition:
      "The charge-sheet is the police's formal recommendation to the Magistrate to take cognizance and proceed to trial. It contains: a narration of the facts disclosed by investigation; statements of witnesses recorded under Section 180 BNSS (formerly 161 CrPC); list of documents, exhibits, and material objects seized; the sections of law alleged to have been violated; and the names and details of accused persons. Once filed, the Magistrate considers the charge-sheet and either takes cognizance and proceeds to trial or declines to do so.",
    category: "Criminal Procedure",
    statutoryReference: "Section 193 BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },
  {
    slug: "compoundable-offence",
    term: "Compoundable Offence",
    shortDefinition:
      "Offence which the complainant and accused can settle (compound) under Section 359 BNSS (formerly Section 320 CrPC), terminating prosecution. Categorised as compoundable with or without court permission.",
    longDefinition:
      "Compoundable offences are those that the legislature deems suitable for private settlement between victim and accused. Section 359 BNSS lists offences in two categories: those compoundable without court permission (typically minor disputes — simple hurt, defamation, criminal trespass) and those compoundable with court permission (more serious — voluntarily causing hurt with dangerous weapons, criminal breach of trust, theft below specified value). Once compounded, the prosecution stands terminated and the accused is acquitted. Murder, rape, dowry death, and other grave offences are non-compoundable.",
    category: "Criminal Procedure",
    statutoryReference: "Section 359 BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },
  {
    slug: "summons-warrant-cases",
    term: "Summons Case / Warrant Case",
    shortDefinition:
      "Procedural classification under Section 261 BNSS — summons cases (offences punishable up to 2 years) follow simpler procedure; warrant cases (offences punishable beyond 2 years) follow elaborate trial under Sections 263-274 BNSS.",
    longDefinition:
      "The classification determines trial procedure. Summons cases are tried under simpler procedure: substance of accusation is stated, evidence is taken, defence heard, judgment delivered. Warrant cases are tried more elaborately: charges are framed, prosecution examines and is cross-examined, accused examined under Section 351 BNSS, defence evidence taken, arguments heard, judgment delivered. Sessions trial follows yet more elaborate procedure under Sections 277-296 BNSS.",
    category: "Criminal Procedure",
    statutoryReference: "Section 261 BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },
  {
    slug: "section-138-ni-act",
    term: "Section 138 NI Act (Cheque Bounce)",
    shortDefinition:
      "Penal provision in the Negotiable Instruments Act 1881 making dishonour of cheque drawn for legally enforceable debt or liability a punishable offence, with maximum imprisonment of 2 years or fine up to twice the cheque amount.",
    longDefinition:
      "Section 138 NI Act creates the criminal-quasi-civil cheque-bounce offence. Elements: (i) cheque drawn on an account; (ii) for legally enforceable debt or liability; (iii) presented within validity (typically 3 months); (iv) dishonoured for insufficient funds, stop-payment, or other specified reasons; (v) demand notice within 30 days of dishonour; (vi) non-payment within 15 days of receipt of notice; (vii) complaint within 30 days of cause of action. Section 143 provides for summary trial, accelerating disposal.",
    category: "Criminal Procedure",
    statutoryReference: "Section 138 NI Act 1881",
    relatedPracticeAreaSlugs: ["banking-finance", "civil-law"],
  },

  // ========== Civil Procedure ==========
  {
    slug: "plaint",
    term: "Plaint",
    shortDefinition:
      "Pleading filed by the plaintiff to commence a civil suit under Order VII of the Code of Civil Procedure 1908. Contains the cause of action, relief sought, and material facts.",
    longDefinition:
      "A plaint is the first pleading in a civil suit. Under Order VII Rule 1 of the CPC, every plaint must contain: name of the court; name and address of plaintiff and defendant; cause of action with date and place of occurrence; valuation of suit for jurisdiction and court fees; relief claimed. The plaint must be supported by an affidavit-of-verification under Order VI Rule 15. Defects in the plaint can be cured by amendment under Order VI Rule 17, but rejection under Order VII Rule 11 is automatic where there is no cause of action or the suit is barred by limitation.",
    category: "Civil Procedure",
    statutoryReference: "Order VII CPC 1908",
    relatedPracticeAreaSlugs: ["civil-law"],
  },
  {
    slug: "written-statement",
    term: "Written Statement (WS)",
    shortDefinition:
      "Pleading filed by the defendant in response to a plaint, under Order VIII CPC. Must be filed within 30 days of summons (extendable to 90 days) and contains specific denials and affirmative defences.",
    longDefinition:
      "The written statement must respond paragraph-by-paragraph to the plaint, specifically denying or admitting allegations. Vague or evasive denials are deemed admissions under Order VIII Rule 5 CPC. Affirmative defences (limitation, res judicata, want of jurisdiction, fraud, accord and satisfaction) must be specifically pleaded. Counter-claims and set-offs may be incorporated. Time-extension beyond 90 days requires the court's special leave for sufficient cause; the Supreme Court in SCG Contracts (2019) held that delay beyond 120 days is impermissible save in exceptional cases.",
    category: "Civil Procedure",
    statutoryReference: "Order VIII CPC 1908",
    relatedPracticeAreaSlugs: ["civil-law"],
  },
  {
    slug: "interim-injunction",
    term: "Interim Injunction (Order 39)",
    shortDefinition:
      "Temporary restraining order granted under Order XXXIX Rule 1 or 2 CPC during the pendency of a suit, restraining the defendant from disturbing the status quo. Granted on three-fold test: prima facie case, balance of convenience, irreparable injury.",
    longDefinition:
      "An interim injunction prevents irreversible harm during litigation. The grant is governed by the three-fold test from Dalpat Kumar v. Prahlad Singh, (1992) 1 SCC 719: (i) prima facie case in favour of the plaintiff; (ii) balance of convenience in granting versus refusing the injunction; (iii) irreparable injury that cannot be compensated by damages. Interim injunctions are routinely sought in property suits, contract disputes, IP infringement, and matrimonial matters. Ex parte injunctions under Order XXXIX Rule 3 are granted only in exceptional cases of urgency.",
    category: "Civil Procedure",
    statutoryReference: "Order XXXIX CPC 1908",
    relatedPracticeAreaSlugs: ["civil-law", "intellectual-property"],
  },
  {
    slug: "ex-parte-decree",
    term: "Ex-parte Decree",
    shortDefinition:
      "Decree passed where the defendant fails to appear despite proper service. Set aside under Order IX Rule 13 CPC if the defendant shows sufficient cause for non-appearance or improper service.",
    longDefinition:
      "An ex-parte decree is final unless set aside. The defendant has 30 days from knowledge of the decree to apply under Order IX Rule 13 CPC for setting aside, on grounds of (i) improper service of summons or (ii) sufficient cause for non-appearance. The court can require costs as a condition of setting aside. Once set aside, the suit is restored and proceeds to trial. Limitation Act Article 123 provides 30 days from the date of decree (or from when the defendant first knew of it).",
    category: "Civil Procedure",
    statutoryReference: "Order IX Rule 13 CPC 1908",
    relatedPracticeAreaSlugs: ["civil-law"],
  },
  {
    slug: "execution-decree",
    term: "Execution of Decree",
    shortDefinition:
      "Procedure under Order XXI CPC for enforcing a decree — by attachment and sale of property, arrest of judgment-debtor (in limited cases), or attachment of bank accounts.",
    longDefinition:
      "Order XXI CPC provides comprehensive machinery for execution. Modes include: attachment and sale of immovable property; attachment of movable property, bank accounts, and debts owed to the judgment-debtor; arrest of judgment-debtor (subject to constitutional safeguards under Article 21 — mainly for wilful disobedience of money decrees); appointment of receiver. Execution applications must be filed within 12 years of the decree under Article 136 of the Limitation Act 1963. NCLT IBC proceedings under Section 7 (financial creditors) increasingly bypass civil execution.",
    category: "Civil Procedure",
    statutoryReference: "Order XXI CPC 1908",
    relatedPracticeAreaSlugs: ["civil-law", "banking-finance"],
  },

  // ========== Family Law ==========
  {
    slug: "section-13B-mutual-divorce",
    term: "Section 13B HMA (Mutual-Consent Divorce)",
    shortDefinition:
      "Provision in the Hindu Marriage Act 1955 permitting divorce by mutual consent. Requires one year's separation, two motions six months apart (waivable under Amardeep Singh v. Harveen Kaur, 2017).",
    longDefinition:
      "Section 13B HMA provides the consensual route to divorce for Hindus, Buddhists, Sikhs, and Jains. Preconditions: (i) marriage solemnised under HMA; (ii) one year of living separately; (iii) genuine mutual consent. The two-motion structure with a minimum six-month cooling-off period allows reconsideration. The Supreme Court in Amardeep Singh v. Harveen Kaur, (2017) 8 SCC 746, held that the cooling-off period is directory and may be waived where reconciliation has failed and parties have settled all issues. Realistic timeline: 4-12 months in tier-1 Family Courts.",
    category: "Family Law",
    statutoryReference: "Section 13B Hindu Marriage Act 1955",
    relatedPracticeAreaSlugs: ["family-matrimonial"],
  },
  {
    slug: "section-125-bnss-maintenance",
    term: "Section 125 BNSS (Maintenance)",
    shortDefinition:
      "Provision (formerly Section 125 CrPC) allowing wife, children, and parents to claim monthly maintenance from a person of sufficient means who has neglected to maintain them. Religion-neutral and procedure-friendly.",
    longDefinition:
      "Section 125 BNSS is the religion-neutral maintenance jurisdiction available to all communities. The applicant must show (i) the relationship; (ii) neglect or refusal to maintain; (iii) inability of the applicant to maintain himself/herself; and (iv) sufficient means of the respondent. The Magistrate can order monthly maintenance, with an interim maintenance facility and arrears recovery. The Supreme Court in Rajnesh v. Neha, (2021) 2 SCC 324, laid down comprehensive guidelines for maintenance computation including affidavits of disclosure of assets and liabilities.",
    category: "Family Law",
    statutoryReference: "Section 125 BNSS 2023",
    relatedPracticeAreaSlugs: ["family-matrimonial"],
  },
  {
    slug: "domestic-violence-act",
    term: "Domestic Violence Act 2005",
    shortDefinition:
      "Civil-protection statute giving aggrieved women the right to (i) protection orders, (ii) residence orders, (iii) monetary relief, (iv) custody orders, and (v) compensation orders. Enforced by Magistrate court.",
    longDefinition:
      "The Protection of Women from Domestic Violence Act 2005 (PWDVA) creates civil remedies for women in shared households. \"Domestic violence\" is defined broadly to include physical, sexual, verbal, emotional, and economic abuse. Reliefs include (i) protection order under Section 18 (restraining respondent from various acts); (ii) residence order under Section 19 (right to reside in shared household, restraint on alienation); (iii) monetary relief under Section 20; (iv) custody order under Section 21; (v) compensation order under Section 22. Service of notice and hearing follow Magistrate court procedure.",
    category: "Family Law",
    statutoryReference: "PWDVA 2005",
    relatedPracticeAreaSlugs: ["family-matrimonial"],
  },
  {
    slug: "child-custody-india",
    term: "Child Custody (India)",
    shortDefinition:
      "Custody disputes in India are decided primarily under the Guardians and Wards Act 1890 (and personal-law overlay). Welfare of the child is the paramount consideration; sole-physical-custody-with-visitation is the most common outcome.",
    longDefinition:
      "Child custody applications are filed before the Family Court under the Guardians and Wards Act 1890. The personal law of the parties (Hindu, Muslim, Christian, Parsi, or SMA) overlays statutory considerations. The Supreme Court has consistently held that the welfare of the child is paramount (Rosy Jacob v. Jacob A. Chakramakkal, AIR 1973 SC 2090). Modern Family Court orders typically grant sole physical custody to one parent with structured visitation rights to the other, joint legal custody for major decisions (schooling, medical, passport), and child-support obligations on the non-custodial parent.",
    category: "Family Law",
    statutoryReference: "Guardians and Wards Act 1890",
    relatedPracticeAreaSlugs: ["family-matrimonial"],
  },
  {
    slug: "498a-ipc-bns-85",
    term: "Section 498A IPC / Section 85 BNS (Cruelty)",
    shortDefinition:
      "Penal provision criminalising cruelty by husband or his relatives towards a married woman. Cognizable, non-bailable, non-compoundable. Section 85 BNS replaced Section 498A IPC effective 1 July 2024.",
    longDefinition:
      "Section 85 of the Bharatiya Nyaya Sanhita 2023 (replacing Section 498A IPC) criminalises cruelty by the husband or his relatives — including unlawful demands for property, harassment driving the woman to suicide or grave injury, and conduct likely to cause grave injury or danger to life. The Supreme Court in Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273, held that automatic arrest in 498A cases is impermissible — police must apply Section 35(3) BNSS notice procedure. The Supreme Court has expressed concern about misuse but maintains the protective scope of the provision.",
    category: "Family Law",
    statutoryReference: "Section 85 BNS 2023",
    relatedPracticeAreaSlugs: ["family-matrimonial", "criminal-law"],
  },

  // ========== Property Law ==========
  {
    slug: "encumbrance-certificate-ec",
    term: "Encumbrance Certificate (EC)",
    shortDefinition:
      "Document issued by the Sub-Registrar's office listing every registered transaction (sale, mortgage, lease, gift, court order, attachment) on a property within the requested time period. Foundational for title verification.",
    longDefinition:
      "An EC is the searchable summary of registered conveyances and encumbrances on a property as recorded in the Sub-Registrar's index. A 30-year EC is the property bar's standard for title verification — this corresponds to the limitation period under Article 65 of the Limitation Act 1963. State portals: TN Registration Department (Tamil Nadu), Kaveri 2.0 (Karnataka), IGR Maharashtra (Maharashtra), DORIS (Delhi), Dharani (Telangana), Garvi 2.0 (Gujarat), e-Nathikaran (West Bengal). Reliability and archival depth vary across states.",
    category: "Property Law",
    statutoryReference: "Indian Registration Act 1908",
    relatedPracticeAreaSlugs: ["property-real-estate"],
  },
  {
    slug: "transfer-of-property-act",
    term: "Transfer of Property Act 1882",
    shortDefinition:
      "Central statute governing transfer of immovable property between living persons. Defines sale, mortgage, lease, exchange, and gift, and lays down doctrines of lis pendens, part performance, and rule against perpetuities.",
    longDefinition:
      "The TPA 1882 is the foundational property statute. Key provisions: Section 5 (transfer between living persons); Section 53A (part performance); Section 52 (lis pendens — transfer during pending suit takes subject to suit's outcome); Section 54 (sale); Section 58 (mortgage and its types — simple, English, equitable by deposit of title deeds, etc.); Section 105 (lease); Section 122 (gift). The TPA does not apply to inheritance/succession; it applies to inter vivos transfers. State amendments and special statutes (RERA, Maharashtra Rent Control Act, etc.) overlay TPA in specific areas.",
    category: "Property Law",
    statutoryReference: "Transfer of Property Act 1882",
    relatedPracticeAreaSlugs: ["property-real-estate"],
  },
  {
    slug: "lis-pendens",
    term: "Lis Pendens",
    shortDefinition:
      "Doctrine under Section 52 TPA — during the pendency of a suit involving immovable property, no party can transfer the property to defeat the rights of any other party in the suit. Buyer takes property burdened with judgment.",
    longDefinition:
      "Lis pendens (Latin: pending suit) prevents litigants from frustrating the court's eventual judgment by transferring the property mid-suit. A buyer who acquires property subject to lis pendens takes the property burdened with whatever the eventual judgment decides. Lis pendens search is non-negotiable in property due diligence; the search must cover (i) Sub-Registrar's index for registered transactions; (ii) district court CIS for civil suits; (iii) HC CIS for writ petitions and original-side suits; (iv) NCLT records for IBC proceedings affecting corporate sellers.",
    category: "Property Law",
    statutoryReference: "Section 52 Transfer of Property Act 1882",
    relatedPracticeAreaSlugs: ["property-real-estate"],
  },
  {
    slug: "registered-sale-deed",
    term: "Registered Sale Deed",
    shortDefinition:
      "Conveyance of immovable property valued above Rs 100 must be by registered sale deed under Section 17 of the Registration Act 1908. Unregistered sale deeds do not pass title and are inadmissible as evidence of title.",
    longDefinition:
      "Section 17 of the Registration Act 1908 makes registration mandatory for immovable-property transfers above Rs 100 in value. Section 49 makes unregistered documents inadmissible as evidence of the transaction (with limited collateral-purpose exceptions). The sale deed must be on stamp paper of the appropriate state stamp duty (varies 4-8% across states; women buyers often get 1-2% concession). Registration is at the Sub-Registrar's office having jurisdiction over the property's location, with both parties present, photographed, biometrically captured.",
    category: "Property Law",
    statutoryReference: "Section 17 Registration Act 1908",
    relatedPracticeAreaSlugs: ["property-real-estate", "documentation"],
  },
  {
    slug: "rera-real-estate-regulation",
    term: "RERA (Real Estate Regulation)",
    shortDefinition:
      "Statute (Real Estate Regulation and Development Act 2016) creating state-level Real Estate Regulatory Authorities to register builder projects, supervise compliance, and adjudicate buyer complaints with 60-day decision mandate.",
    longDefinition:
      "RERA 2016 transformed Indian real-estate regulation. Section 3 makes registration mandatory for projects above 8 units / 500 sq m. Section 11 mandates upload of sanctioned plan, financial information, and quarterly progress on the state RERA portal. Section 18 creates the refund-with-interest remedy for delayed possession — the principal buyer relief. Active state authorities include MahaRERA (most matured), RERA Karnataka, UP RERA, TN RERA, Telangana RERA, GujRERA, K-RERA Kerala, WB-HIRA. Appeals lie to state Real Estate Appellate Tribunals (REATs) within 60 days.",
    category: "Property Law",
    statutoryReference: "RERA Act 2016",
    relatedPracticeAreaSlugs: ["property-real-estate", "consumer-protection"],
  },
  {
    slug: "khata-bbmp",
    term: "Khata (Bangalore BBMP)",
    shortDefinition:
      "Property record maintained by BBMP/BDA for assessment of property tax. A-khata = approved layout, full property tax, eligible for bank loan. B-khata = unapproved layout, partial tax, severely restricted resale.",
    longDefinition:
      "Khata is unique to the Bangalore property regime. A-khata is issued for properties within approved BBMP/BDA layouts where development conforms to sanctioned plans — these are bankable, transferable, and saleable. B-khata is issued for properties built on unapproved layouts or with deviations — recorded for tax purposes but legally compromised. Buyers should treat B-khata properties as materially defective. Khata transfer (mutation) on sale is mandatory and is filed at the Assistant Revenue Officer (ARO) of the BBMP zone.",
    category: "Property Law",
    statutoryReference: "Karnataka Municipal Corporations Act 1976",
    relatedPracticeAreaSlugs: ["property-real-estate"],
  },
  {
    slug: "partition-suit",
    term: "Partition Suit",
    shortDefinition:
      "Civil suit for division of jointly-held property among co-owners or coparceners. Filed under Order XX Rule 18 CPC. Hindu joint family partitions involve Mitakshara coparceners and require all coparceners' joinder.",
    longDefinition:
      "A partition suit divides jointly-held immovable property into separate shares. For Hindu joint families under Mitakshara school, partitions involve all coparceners (after the 2005 amendment to Hindu Succession Act, daughters are equal coparceners). The suit goes through preliminary decree (declaration of shares) and final decree (actual division by metes and bounds, often through court-appointed commissioner). Family settlement deeds are an alternative but require all members' agreement and stamp duty under the relevant state Stamp Act.",
    category: "Property Law",
    statutoryReference: "Order XX Rule 18 CPC 1908",
    relatedPracticeAreaSlugs: ["property-real-estate", "family-matrimonial"],
  },

  // ========== Corporate Law ==========
  {
    slug: "private-limited-company",
    term: "Private Limited Company (Pvt Ltd)",
    shortDefinition:
      "Company under Section 2(68) Companies Act 2013 with restricted right to transfer shares, minimum 2 shareholders, maximum 200, minimum 2 directors. Default vehicle for Indian start-ups.",
    longDefinition:
      "A Private Limited Company is a separate legal entity registered under the Companies Act 2013, with limited liability, perpetual succession, and capacity to sue and be sued in its own name. Section 2(68) defines the type. Restrictions: minimum 2 / maximum 200 shareholders; restriction on right to transfer shares (typically through MoA/AoA); prohibition on inviting public to subscribe to shares. Private Limited is the default vehicle for VC-funded start-ups because it allows flexible share-class design (CCPS, ordinary equity, ESOPs).",
    category: "Corporate Law",
    statutoryReference: "Section 2(68) Companies Act 2013",
    relatedPracticeAreaSlugs: ["corporate-business"],
  },
  {
    slug: "memorandum-articles-association",
    term: "MoA / AoA (Memorandum and Articles of Association)",
    shortDefinition:
      "Constitutional documents of a company. MoA defines objects, capital, and external relationships. AoA governs internal management, share rights, board composition, and meetings.",
    longDefinition:
      "The Memorandum of Association (MoA) under Section 4 Companies Act 2013 contains: name clause; registered office (state) clause; objects clause (main, ancillary, and other objects); liability clause (limited by shares/guarantee); capital clause; and subscription clause. The Articles of Association (AoA) under Section 5 govern internal management — share-class rights, board composition, meeting procedure, transfer restrictions, voting rights, dividend policy, ESOP framework, and reserved matters. AoA can be customised extensively beyond Table F template; investor-ready AoAs from incorporation save amendment costs at Series A.",
    category: "Corporate Law",
    statutoryReference: "Sections 4-5 Companies Act 2013",
    relatedPracticeAreaSlugs: ["corporate-business"],
  },
  {
    slug: "ibc-insolvency-bankruptcy-code",
    term: "IBC (Insolvency and Bankruptcy Code 2016)",
    shortDefinition:
      "Consolidated insolvency and bankruptcy framework for companies, partnerships, and individuals. Corporate Insolvency Resolution Process (CIRP) under Sections 7, 9, 10 administered by NCLT.",
    longDefinition:
      "IBC 2016 created a time-bound framework for financial restructuring or liquidation. Section 7 allows financial creditors to file for CIRP based on default; Section 9 allows operational creditors after demand notice; Section 10 allows the corporate debtor itself. Once admitted by NCLT, a moratorium under Section 14 freezes recovery actions, an Interim Resolution Professional (IRP) is appointed, and a Committee of Creditors (CoC) decides on resolution plans. Statutory CIRP timeline is 180 days extendable to 330 days. NCLT benches at Delhi, Mumbai, Chennai, Bangalore, Hyderabad, Kolkata, Ahmedabad, and Chandigarh.",
    category: "Corporate Law",
    statutoryReference: "Insolvency and Bankruptcy Code 2016",
    relatedPracticeAreaSlugs: ["corporate-business", "banking-finance"],
  },
  {
    slug: "shareholders-agreement-sha",
    term: "Shareholders Agreement (SHA)",
    shortDefinition:
      "Private contract among shareholders governing their inter se rights — voting agreements, transfer restrictions, tag-along, drag-along, ROFR/ROFO, reserved matters, board composition, and exit provisions.",
    longDefinition:
      "An SHA supplements the Articles of Association and codifies investor-investor and investor-promoter understandings. Standard provisions include: (i) representations and warranties; (ii) reserved matters / consent matters requiring investor approval; (iii) anti-dilution protection; (iv) tag-along (minority right to participate in promoter exit) and drag-along (majority right to compel minority exit); (v) Right of First Refusal / Right of First Offer on share transfers; (vi) liquidation preferences for preference shareholders; (vii) board composition and observer rights; (viii) information rights; (ix) ESOP allocation framework; (x) lock-in periods; (xi) deadlock resolution; (xii) dispute resolution (typically arbitration).",
    category: "Corporate Law",
    statutoryReference: "Indian Contract Act 1872",
    relatedPracticeAreaSlugs: ["corporate-business"],
  },
  {
    slug: "esop-employee-stock-options",
    term: "ESOP (Employee Stock Option Plan)",
    shortDefinition:
      "Equity-incentive scheme allowing employees the right to purchase company shares at a predetermined price after a vesting period. Governed by Companies Act 2013 (Section 62(1)(b)) and SEBI ESOP regulations for listed companies.",
    longDefinition:
      "ESOPs align employee incentives with shareholder value. Key concepts: (i) grant — issuance of options to specified employees; (ii) vesting period — minimum 1 year for unlisted, longer schedules common; (iii) exercise price — discount to market or fair value; (iv) exercise period — window after vesting in which options can be exercised; (v) cashless exercise structures common in liquidity events; (vi) FMV computation under Rule 11UA Income Tax Rules. Tax treatment: perquisite tax on exercise (FMV minus exercise price); capital gains on subsequent sale.",
    category: "Corporate Law",
    statutoryReference: "Section 62(1)(b) Companies Act 2013",
    relatedPracticeAreaSlugs: ["corporate-business"],
  },

  // ========== Contract & Commercial ==========
  {
    slug: "indian-contract-act",
    term: "Indian Contract Act 1872",
    shortDefinition:
      "Foundational contract statute. Defines agreement, contract, consideration, capacity, free consent, and lawful object. Sections 73-75 govern remedies for breach.",
    longDefinition:
      "The Contract Act 1872 codifies general contract law. Key sections: Section 10 (essentials of valid contract — offer, acceptance, lawful consideration, capacity, free consent, lawful object); Sections 13-22 (free consent — fraud, misrepresentation, undue influence, coercion, mistake); Sections 23-24 (lawful object); Sections 73-75 (damages for breach); Section 73 follows the Hadley v. Baxendale rule — damages limited to losses naturally arising or in contemplation. Specific Relief Act 1963 governs specific performance and injunctions for contract enforcement.",
    category: "Contract & Commercial",
    statutoryReference: "Indian Contract Act 1872",
    relatedPracticeAreaSlugs: ["civil-law", "corporate-business"],
  },
  {
    slug: "specific-performance",
    term: "Specific Performance",
    shortDefinition:
      "Equitable remedy under the Specific Relief Act 1963 compelling actual performance of a contract rather than damages. Post-2018 amendment, specific performance is the rule rather than the exception.",
    longDefinition:
      "Specific performance is sought where damages would be inadequate — typically immovable-property contracts and unique-goods contracts. The Specific Relief (Amendment) Act 2018 reversed the prior position making damages the primary remedy; specific performance is now the rule. Section 14 lists contracts where specific performance is not granted (personal-service contracts, indeterminate contracts, contracts requiring continuous supervision). Section 16 lists bars (plaintiff's own breach, hardship to defendant). Relief is discretionary but the discretion is structured by statute.",
    category: "Contract & Commercial",
    statutoryReference: "Specific Relief Act 1963",
    relatedPracticeAreaSlugs: ["civil-law", "property-real-estate"],
  },
  {
    slug: "arbitration-conciliation-act",
    term: "Arbitration and Conciliation Act 1996",
    shortDefinition:
      "Statute governing domestic and international commercial arbitration in India. Sections 9 (interim measures), 11 (appointment of arbitrator), 34 (challenge to award), 37 (appeal). Aligned with UNCITRAL Model Law.",
    longDefinition:
      "The Act is the primary arbitration statute, amended substantially in 2015, 2019, and 2021. Part I (Sections 1-43) governs arbitrations seated in India; Part II implements the New York Convention on enforcement of foreign awards. Section 9 allows pre-arbitration interim measures from the court. Section 11 governs appointment of arbitrator by the High Court (or Supreme Court for international commercial arbitration). Section 34 is the limited-grounds challenge route to setting aside an award. The Mumbai Centre for International Arbitration (MCIA), Delhi International Arbitration Centre (DIAC), and the recently-established India International Arbitration Centre are leading institutional bodies.",
    category: "Contract & Commercial",
    statutoryReference: "Arbitration and Conciliation Act 1996",
    relatedPracticeAreaSlugs: ["arbitration-adr", "corporate-business"],
  },

  // ========== Constitutional Law ==========
  {
    slug: "writ-petition-article-226",
    term: "Writ Petition (Article 226)",
    shortDefinition:
      "Petition before a High Court invoking constitutional jurisdiction to issue writs (mandamus, certiorari, prohibition, quo warranto, habeas corpus) against the State or its instrumentalities for enforcement of fundamental and other legal rights.",
    longDefinition:
      "Article 226 confers extraordinary writ jurisdiction on every High Court within its territorial limits. Five writs lie: (i) habeas corpus — production of person illegally detained; (ii) mandamus — direction to perform a public duty; (iii) certiorari — quashing of unconstitutional or jurisdictionally-defective orders; (iv) prohibition — preventing inferior tribunal from exceeding jurisdiction; (v) quo warranto — challenging usurpation of public office. The remedy is discretionary; the court considers alternative-remedy availability, delay, and public interest. Article 32 confers parallel jurisdiction on the Supreme Court for fundamental rights.",
    category: "Constitutional Law",
    statutoryReference: "Article 226 Constitution of India",
    relatedPracticeAreaSlugs: ["constitutional-law", "civil-law"],
  },
  {
    slug: "public-interest-litigation",
    term: "Public Interest Litigation (PIL)",
    shortDefinition:
      "Liberalised standing rule under Indian constitutional jurisprudence allowing any citizen to file a writ petition on behalf of disadvantaged groups or in public interest. Pioneered by SP Gupta v. Union of India (1981).",
    longDefinition:
      "PIL is a uniquely Indian constitutional innovation. The Supreme Court in S.P. Gupta v. Union of India, 1981 Supp SCC 87, relaxed standing rules to allow any public-spirited person to file petitions where rights of disadvantaged groups, environmental concerns, or systemic governance failures were at stake. PIL has driven landmark reforms — bonded labour abolition, Bhopal gas tragedy compensation, Vishaka guidelines on workplace harassment, rights of prisoners, environmental clearances, and electoral reforms. PILs are filed before the Supreme Court (Article 32) or High Courts (Article 226).",
    category: "Constitutional Law",
    statutoryReference: "Article 32, Article 226 Constitution",
    relatedPracticeAreaSlugs: ["constitutional-law"],
  },

  // ========== Evidence & Trial ==========
  {
    slug: "indian-evidence-act-bsa",
    term: "Bharatiya Sakshya Adhiniyam 2023 (BSA)",
    shortDefinition:
      "Indian evidence statute that replaced the Indian Evidence Act 1872 effective 1 July 2024. Codifies admissibility, relevance, examination of witnesses, and presumptions, with updated provisions for electronic evidence.",
    longDefinition:
      "The BSA 2023 is largely a re-enactment and consolidation of the Indian Evidence Act 1872 with updated terminology and additional provisions for electronic and digital evidence. Key sections: Section 3 (interpretation including electronic record); Section 8 (examination of witnesses); Section 24-29 (admissions); Section 39-41 (relevance); Section 61 (oral evidence must be direct); Section 68-77 (documentary evidence proof procedure). Electronic-record provisions formalise procedures consistent with Information Technology Act 2000 for admissibility of CCTV footage, computer printouts, mobile phone data, and metadata.",
    category: "Evidence & Trial",
    statutoryReference: "Bharatiya Sakshya Adhiniyam 2023",
    relatedPracticeAreaSlugs: ["criminal-law", "civil-law"],
  },
  {
    slug: "examination-cross-examination",
    term: "Examination, Cross-Examination, Re-Examination",
    shortDefinition:
      "Three-stage witness examination procedure. Examination-in-chief is led by the calling party; cross-examination by the opposing party tests the testimony; re-examination by the calling party clarifies points raised in cross.",
    longDefinition:
      "Witness examination is governed by Sections 142-167 BSA 2023 (formerly Sections 137-166 Indian Evidence Act 1872). Examination-in-chief is direct testimony. Cross-examination has wide scope — it can test credibility, attack character (subject to limits), bring out contradictions, and explore matters not raised in chief. Re-examination is limited to matters raised in cross. Leading questions are permitted in cross but not in chief or re. Section 145 BSA allows confronting a witness with previous inconsistent statements.",
    category: "Evidence & Trial",
    statutoryReference: "Sections 142-167 BSA 2023",
    relatedPracticeAreaSlugs: ["criminal-law", "civil-law"],
  },
  {
    slug: "burden-of-proof-criminal-civil",
    term: "Burden of Proof — Criminal vs Civil",
    shortDefinition:
      "Criminal: prosecution must prove guilt beyond reasonable doubt. Civil: plaintiff must prove case on preponderance of probabilities (more likely than not).",
    longDefinition:
      "The two standards reflect the asymmetry of consequences. Criminal: the prosecution must prove every element of the offence beyond reasonable doubt — the highest evidential standard. The presumption of innocence is constitutional under Article 21. Civil: the plaintiff must prove the case on a balance of probabilities — that it is more likely than not that the version pleaded is true. In specific civil contexts, statute imposes specific burdens — for example, Section 7 PWDVA shifts certain presumptions in favour of the aggrieved woman; Section 113B BSA presumes dowry death where death occurs within 7 years of marriage with cruelty.",
    category: "Evidence & Trial",
    statutoryReference: "BSA 2023 / CPC 1908",
    relatedPracticeAreaSlugs: ["criminal-law", "civil-law"],
  },
  {
    slug: "section-313-bnss-statement-of-accused",
    term: "Section 351 BNSS (formerly 313 CrPC) Statement",
    shortDefinition:
      "Mandatory examination of the accused after prosecution evidence concludes. The accused is questioned on each incriminating circumstance and given an opportunity to explain. Failure to record renders the trial defective.",
    longDefinition:
      "Section 351 BNSS (formerly 313 CrPC) provides for the examination of the accused at the close of prosecution evidence, before defence evidence is led. Each incriminating circumstance appearing in the prosecution case must be put to the accused individually, and his/her explanation recorded. The Supreme Court in State of Maharashtra v. Sukhdev Singh, (1992) 3 SCC 700, held that improper or omitted Section 313 examination vitiates the trial. The accused's statement is not on oath but is used by the court to assess the explanation against the prosecution evidence.",
    category: "Evidence & Trial",
    statutoryReference: "Section 351 BNSS 2023",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },

  // ========== Additional terms ==========
  {
    slug: "limitation-act-time-bar",
    term: "Limitation Act 1963",
    shortDefinition:
      "Statute prescribing the time within which different categories of suits, appeals, and applications must be filed. Suits filed beyond limitation are barred regardless of merit, subject to Section 5 condonation of delay.",
    longDefinition:
      "The Limitation Act 1963 is the central statute on time-bar. Schedule I contains 137 articles prescribing different periods for different proceedings: Article 47 (suit on a contract — 3 years from breach); Article 65 (suit for possession of immovable property — 12 years from when possession of defendant becomes adverse); Article 113 (suit for which no period is prescribed — 3 years from accrual of right to sue); Article 136 (execution of decree — 12 years from decree). Section 5 allows condonation of delay for sufficient cause in appeals and applications (not suits). Section 14 excludes time spent prosecuting in wrong court.",
    category: "Civil Procedure",
    statutoryReference: "Limitation Act 1963",
    relatedPracticeAreaSlugs: ["civil-law", "criminal-law"],
  },
  {
    slug: "vakalatnama",
    term: "Vakalatnama",
    shortDefinition:
      "Authorisation document under Order III Rule 4 CPC by which a litigant appoints an advocate to appear and act on his/her behalf in a court matter. Mandatory for advocate's appearance.",
    longDefinition:
      "A vakalatnama is the formal instrument by which a party empowers an advocate to plead and act in a court proceeding. Order III Rule 4 CPC (and parallel provisions in BNSS) mandates a properly executed vakalatnama before an advocate can act. The vakalatnama is signed by the client, attested by the advocate, and stamped under the relevant State Stamp Act (typically Rs 5-25 stamp). Multiple advocates can be empowered jointly; the vakalatnama can be revoked by the client at any time, subject to settlement of advocate's fees.",
    category: "Civil Procedure",
    statutoryReference: "Order III Rule 4 CPC 1908",
    relatedPracticeAreaSlugs: ["civil-law"],
  },
  {
    slug: "summons",
    term: "Summons",
    shortDefinition:
      "Court order under Section 63 BNSS / Order V CPC compelling a person's appearance before the court (as a witness or accused/defendant). Issued in the prescribed form, served by police or court process server.",
    longDefinition:
      "Summons is the foundational process for inviting a person to court. In civil matters, summons under Order V CPC accompanies a copy of the plaint, gives the defendant 30 days to file a written statement, and specifies the next hearing date. In criminal matters, summons under Section 63 BNSS to the accused requires appearance on the specified date; summons to a witness compels production at trial. Refusal to accept service does not invalidate service if proper procedure has been followed. Substitute service (newspaper publication, affixation) is permitted where personal service fails.",
    category: "Civil Procedure",
    statutoryReference: "Section 63 BNSS / Order V CPC",
    relatedPracticeAreaSlugs: ["civil-law", "criminal-law"],
  },
  {
    slug: "stay-order",
    term: "Stay Order",
    shortDefinition:
      "Court order temporarily suspending operation of a lower court's decree, an authority's action, or a particular activity. May be interim (during pendency) or absolute (final).",
    longDefinition:
      "Stay orders are sought to prevent irreversible harm pending substantive adjudication. Stay of execution under Order XLI Rule 5 CPC suspends execution of a decree pending appeal. Stay of operation of an order under Section 482 BNSS / Article 226 prevents the order's effect during writ-petition pendency. Stay of construction in property suits prevents alienation or further development. Stay is discretionary; courts apply the standard three-fold test (prima facie case, balance of convenience, irreparable injury). Conditions (security, undertaking) are routinely imposed.",
    category: "Civil Procedure",
    statutoryReference: "Order XLI Rule 5 CPC",
    relatedPracticeAreaSlugs: ["civil-law"],
  },
  {
    slug: "appeal",
    term: "Appeal",
    shortDefinition:
      "Statutory remedy seeking review of a lower court's judgment by a higher court. Appeals are creature of statute — no inherent right of appeal exists; the right must be conferred by specific statutory provision.",
    longDefinition:
      "Appeal is the right to seek correction of a lower court's decision. Civil appeals: from civil court to District Court (first appeal under Section 96 CPC); from District Court to High Court (second appeal under Section 100 CPC, on substantial questions of law only); from High Court to Supreme Court (Article 133, Letters Patent Appeal where applicable). Criminal appeals: under Section 415 BNSS to Sessions Court; under Section 419 BNSS to High Court; SLP under Article 136 to Supreme Court. Limitation periods are short (typically 30, 60, or 90 days) and strict.",
    category: "Civil Procedure",
    statutoryReference: "Section 96, 100 CPC / Section 415, 419 BNSS",
    relatedPracticeAreaSlugs: ["civil-law", "criminal-law"],
  },
  {
    slug: "review-revision",
    term: "Review and Revision",
    shortDefinition:
      "Review under Section 114 / Order XLVII CPC is application to the same court that passed the order, on grounds of mistake or new evidence. Revision under Section 115 CPC is to the superior court on jurisdictional error.",
    longDefinition:
      "Review and revision are limited corrective remedies distinct from appeal. Review under Section 114 read with Order XLVII Rule 1 CPC is to the same court on three grounds: discovery of new and important evidence; mistake or error apparent on the face of the record; any other sufficient reason. Revision under Section 115 CPC is to the superior court on the limited ground that the subordinate court has exercised jurisdiction not vested, failed to exercise jurisdiction, or acted illegally with material irregularity. Revision is rarer than appeal; review is even more limited.",
    category: "Civil Procedure",
    statutoryReference: "Section 114, 115 CPC 1908",
    relatedPracticeAreaSlugs: ["civil-law"],
  },
  {
    slug: "suo-moto-cognizance",
    term: "Suo Moto Cognizance",
    shortDefinition:
      "Court's exercise of cognizance on its own motion, without a complaint. High Courts and Supreme Court take suo moto cognizance in matters of public importance, particularly contempt and constitutional rights.",
    longDefinition:
      "Suo moto (Latin: of one's own accord) cognizance is the court's power to initiate proceedings without a formal complaint. The Supreme Court takes suo moto cognizance in matters of grave public concern (Vinay Pratap Singh, contempt; Re-Anti-Conversion-Laws; Re-Encounter Killings). High Courts use it for compliance with their orders, public-interest matters, and contempt. Magistrate courts can take cognizance suo moto in limited circumstances under Section 210 BNSS. The power is exercised sparingly and is closely scrutinised by senior courts.",
    category: "Constitutional Law",
    statutoryReference: "Article 142, Article 226 Constitution",
    relatedPracticeAreaSlugs: ["constitutional-law"],
  },
  {
    slug: "section-498A-arnesh-kumar-guidelines",
    term: "Arnesh Kumar Guidelines",
    shortDefinition:
      "Supreme Court directions in Arnesh Kumar v. State of Bihar, (2014) 8 SCC 273, restraining automatic arrest in offences punishable up to 7 years (notably Section 498A IPC / 85 BNS). Section 35(3) BNSS notice procedure is mandatory.",
    longDefinition:
      "In Arnesh Kumar, the Supreme Court held that police must apply mind before arresting in any offence punishable up to 7 years. The guidelines: (i) police shall not automatically arrest under Section 498A or any offence punishable up to 7 years; (ii) checklist under Section 41(1)(b) CrPC (now Section 35 BNSS) must be filled in writing, including whether arrest is necessary for investigation, prevention of further offence, securing evidence, or preventing tampering; (iii) the magistrate must scrutinise the checklist before authorising further detention. Failure to follow the guidelines exposes police to departmental action and contempt.",
    category: "Criminal Procedure",
    statutoryReference: "(2014) 8 SCC 273; Section 35 BNSS",
    relatedPracticeAreaSlugs: ["criminal-law", "family-matrimonial"],
  },
  {
    slug: "lalita-kumari-mandate",
    term: "Lalita Kumari Mandate",
    shortDefinition:
      "Supreme Court Constitution Bench ruling in Lalita Kumari v. Government of Uttar Pradesh, (2014) 2 SCC 1, holding that FIR registration is mandatory for cognizable offences. Preliminary inquiry permitted only in seven specified categories.",
    longDefinition:
      "The five-judge Bench held that Section 154 CrPC (now Section 173 BNSS) is mandatory for cognizable offences. Police cannot conduct preliminary inquiry before FIR registration except in seven categories: (i) matrimonial/family disputes; (ii) commercial offences; (iii) medical negligence; (iv) corruption cases; (v) cases with extraordinary delay (over three months) in reporting; (vi) cases involving public officials acting in good faith; (vii) cases where the legal nature of the offence is unclear. Even in these categories, preliminary inquiry must be completed within 7 days (extendable to 15 days), and FIR must be registered if a cognizable offence is disclosed.",
    category: "Criminal Procedure",
    statutoryReference: "(2014) 2 SCC 1",
    relatedPracticeAreaSlugs: ["criminal-law"],
  },
  {
    slug: "section-9-arbitration-interim",
    term: "Section 9 Arbitration Act (Interim Measures)",
    shortDefinition:
      "Provision in the Arbitration and Conciliation Act 1996 allowing courts to grant interim measures (asset preservation, status-quo, security) before or during arbitration proceedings.",
    longDefinition:
      "Section 9 Arbitration Act provides for court-ordered interim measures to support arbitration. Reliefs include: appointment of guardian; preservation of subject matter; sale of perishable goods; injunctions; appointment of receiver; security for amount in dispute; interim measures on the merits. Once the arbitral tribunal is constituted, parties typically seek interim measures from the tribunal (Section 17), but courts retain Section 9 jurisdiction under specific conditions. Section 9 applications are filed before the Commercial Division of the High Court for international commercial arbitration, and before the Commercial Court for domestic arbitration.",
    category: "Contract & Commercial",
    statutoryReference: "Section 9 Arbitration Act 1996",
    relatedPracticeAreaSlugs: ["arbitration-adr", "civil-law"],
  },
  {
    slug: "section-138-pmla",
    term: "PMLA (Prevention of Money Laundering Act 2002)",
    shortDefinition:
      "Statute targeting money laundering. Section 3 defines the offence; Section 4 prescribes punishment up to 7 years imprisonment plus fine. Investigation and prosecution by the Enforcement Directorate (ED).",
    longDefinition:
      "PMLA criminalises the projection of proceeds of crime as untainted property. Section 3 defines money laundering; Section 4 prescribes punishment (3-7 years imprisonment, extendable to 10 years for narcotics-related cases). Section 8 governs property attachment. Section 19 governs arrest powers. Section 24 reverses the burden of proof in specified circumstances. Section 45 imposes twin conditions for bail (reasonable grounds for believing accused not guilty + not likely to commit offence on bail), making bail in PMLA cases challenging. The Supreme Court in Vijay Madanlal Choudhary (2022) upheld most provisions but constrained ED's investigative powers.",
    category: "Criminal Procedure",
    statutoryReference: "Prevention of Money Laundering Act 2002",
    relatedPracticeAreaSlugs: ["ed-cases", "criminal-law"],
  },
  {
    slug: "ndps-act-section-37",
    term: "NDPS Act Section 37 (Twin Conditions for Bail)",
    shortDefinition:
      "Provision in the Narcotic Drugs and Psychotropic Substances Act 1985 imposing twin conditions for bail in commercial-quantity offences: reasonable grounds for believing not guilty + not likely to commit offence on bail.",
    longDefinition:
      "Section 37 NDPS imposes the most stringent bail conditions in Indian criminal law. For commercial-quantity offences (specified in the Schedule), bail is permissible only if (i) the public prosecutor has opportunity to oppose; and (ii) where opposed, the court is satisfied that there are reasonable grounds for believing the accused not guilty AND not likely to commit any offence on bail. The Supreme Court in Mohammed Yousuf Rather v. State of J&K (2023) reiterated that Section 37 is to be strictly applied. Result: NDPS commercial-quantity bails are difficult and often pursued through quashing or trial-stage acquittal rather than bail.",
    category: "Criminal Procedure",
    statutoryReference: "Section 37 NDPS Act 1985",
    relatedPracticeAreaSlugs: ["ndps-cases", "criminal-law"],
  },
  {
    slug: "section-9-rti",
    term: "RTI (Right to Information Act 2005)",
    shortDefinition:
      "Statute creating the right of citizens to seek information from public authorities. PIO/SPIO answer requests within 30 days; appeals to first appellate authority and Information Commission.",
    longDefinition:
      "The RTI Act 2005 creates citizen access to information held by public authorities. Section 6 prescribes the application procedure (Rs 10 fee for central; varies for states; free for BPL applicants). Section 7 requires response within 30 days (48 hours for life-or-liberty cases). Section 8 lists exemptions (national security, sovereignty, parliamentary privilege, fiduciary, personal privacy). First appeal under Section 19 to designated First Appellate Authority within 30 days; second appeal to Central or State Information Commission within 90 days. The Information Commissioners can impose penalties of up to Rs 25,000 on PIOs for unjustified delay or denial.",
    category: "Constitutional Law",
    statutoryReference: "Right to Information Act 2005",
    relatedPracticeAreaSlugs: ["constitutional-law", "civil-law"],
  },
  {
    slug: "consumer-protection-act-2019",
    term: "Consumer Protection Act 2019",
    shortDefinition:
      "Statute creating three-tier consumer-redressal forums: District Consumer Disputes Redressal Commission (claims up to Rs 1 cr), State Commission (Rs 1 cr to Rs 10 cr), National Commission (above Rs 10 cr).",
    longDefinition:
      "The Consumer Protection Act 2019 replaced the 1986 Act and substantially modernised consumer law. Key changes from the 1986 Act: (i) pecuniary jurisdiction increased; (ii) e-commerce and direct selling specifically covered; (iii) Central Consumer Protection Authority (CCPA) created as regulatory body; (iv) product-liability provisions introduced; (v) misleading-advertisement penalties strengthened. Consumer complaints are filed by the consumer or a recognised consumer association. Reliefs include refund, replacement, repair, compensation, and punitive damages.",
    category: "Contract & Commercial",
    statutoryReference: "Consumer Protection Act 2019",
    relatedPracticeAreaSlugs: ["consumer-protection", "civil-law"],
  },
  {
    slug: "it-act-section-66",
    term: "IT Act 2000 — Sections 66 and 66A",
    shortDefinition:
      "Section 66 IT Act 2000 criminalises computer-related offences (hacking, identity theft, cyberstalking). Section 66A was struck down in Shreya Singhal v. Union of India (2015) for unconstitutional vagueness.",
    longDefinition:
      "The Information Technology Act 2000 (as amended by the IT Amendment Act 2008) governs cybercrime in India. Section 66 covers offences such as hacking with intent to damage (Section 66B — receiving stolen computer resources, Section 66C — identity theft, Section 66D — cheating by impersonation, Section 66E — privacy violation, Section 66F — cyber terrorism). The Supreme Court in Shreya Singhal v. Union of India, (2015) 5 SCC 1, struck down Section 66A as unconstitutional for vagueness and overbreadth. Sections 67-67B address obscenity and child pornography online.",
    category: "Criminal Procedure",
    statutoryReference: "Information Technology Act 2000",
    relatedPracticeAreaSlugs: ["cyber-law", "criminal-law"],
  },
  {
    slug: "company-strike-off",
    term: "Company Strike-Off (Section 248 Companies Act 2013)",
    shortDefinition:
      "Closure procedure for inactive companies. ROC can strike off a company that has not commenced business within one year of incorporation, or has not filed financials/annual returns for two preceding years.",
    longDefinition:
      "Section 248 Companies Act 2013 provides two strike-off routes. (i) ROC's suo moto strike-off where the company has not commenced business within 1 year of incorporation, or has not filed financials/annual returns for two consecutive years, or has not been carrying on business or operation for the preceding two years. (ii) Voluntary strike-off (\"easy exit\") on application by the company in Form STK-2, with director-shareholder consents and indemnity. Strike-off does not extinguish liabilities — Section 250 preserves contingent liabilities for 20 years.",
    category: "Corporate Law",
    statutoryReference: "Section 248 Companies Act 2013",
    relatedPracticeAreaSlugs: ["corporate-business"],
  },
];

export const glossaryByCategory: Record<string, GlossaryTerm[]> = (() => {
  const out: Record<string, GlossaryTerm[]> = {};
  for (const item of glossaryTerms) {
    if (!out[item.category]) out[item.category] = [];
    out[item.category].push(item);
  }
  return out;
})();
