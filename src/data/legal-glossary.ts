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
  // Week 19 (audit Priority 2 — glossary deepening). Optional, filled for the
  // highest-intent terms first: a practical-application paragraph and a worked
  // example lift the page past the ~450-real-word band and give AEO surfaces a
  // concrete scenario to cite. BCI-safe: dispute amounts OK, lawyer fees never.
  inPractice?: string;    // "How it applies in practice" — ~100-150 words
  workedExample?: string; // concrete Indian-fact scenario — ~80-120 words
};

export const glossaryTerms: GlossaryTerm[] = [
  // ========== Criminal Procedure ==========
  {
    slug: "fir-first-information-report",
    inPractice:
      "For a complainant, the FIR is the document everything downstream depends on — dates, named accused, and the specific acts alleged should be complete and accurate at registration, because gaps become defence arguments at trial. If the police refuse to register despite a cognizable offence being disclosed, the escalation ladder is: a written complaint to the Superintendent of Police, then an application to the Magistrate under Section 175(3) BNSS (the old 156(3) CrPC) seeking a direction to register and investigate. For an accused, the FIR fixes the battlefield: a copy is obtainable as of right (and most states publish FIRs online), and the choice between anticipatory bail, a quashing petition, or simply cooperating with the investigation is made by reading exactly what the FIR does and does not allege.",
    workedExample:
      "A Noida resident discovers ₹6 lakh siphoned from her bank account through a phishing link. The local police station suggests a 'complaint' instead of an FIR. Citing Lalita Kumari — registration is mandatory where a cognizable offence is disclosed — her lawyer submits a written complaint describing the offences under the BNS and IT Act. When the station still stalls, an application under Section 175(3) BNSS before the Magistrate produces a direction to register. The FIR's precise transaction timeline later lets the cyber cell freeze part of the money trail — detail at registration converted directly into recovery.",
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
    inPractice:
      "The application is filed before the Sessions Court of the district where the FIR is registered, or directly before the High Court — both have concurrent jurisdiction, and convention is to try the Sessions Court first. A well-drafted petition attaches the FIR (or pleads the basis of apprehension where none is traceable) and asks for interim protection on the very first date, which courts frequently grant while the police file a status report. Standard conditions on grant: join the investigation whenever called, do not contact witnesses or tamper with evidence, and do not leave India without the court's permission. Breach of conditions invites cancellation, so compliance is what keeps the protection alive. For offences punishable up to seven years, the Section 35(3) BNSS notice regime (the old Section 41A CrPC) and the Arnesh Kumar safeguards are argued alongside — if arrest is not necessary at all, protection follows more easily.",
    workedExample:
      "A Delhi businessman learns that his estranged business partner has filed an FIR alleging cheating and criminal breach of trust over a failed venture. Fearing arrest, he moves the Sessions Court at Saket under Section 482 BNSS within two days. The court grants interim protection on the first hearing and, after the police status report shows the dispute is documented in contracts and ledgers, confirms anticipatory bail with conditions to join the investigation and not leave India. He is questioned twice, never arrested, and the parallel civil settlement eventually leads to the FIR being quashed by the High Court.",
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
    inPractice:
      "Regular bail is applied for after arrest, typically first before the Magistrate and then the Sessions Court, with the High Court available if both decline. The court weighs the gravity of the offence, the strength of the prima facie case, the accused's antecedents and roots in the community, flight risk, and the possibility of witness tampering. In practice, the quality of the bail application matters enormously: annexing documents that show the dispute is civil in nature, medical grounds, parity with co-accused already on bail, and the period already spent in custody are the arguments that actually move courts. Bail is almost always conditional — surety bonds, surrender of passport, regular appearance at the police station — and conditions can be relaxed later by application to the same court.",
    workedExample:
      "A trader is arrested in a ₹40 lakh cheating case after a supply deal collapses. His first bail application before the Magistrate is rejected. His lawyer then moves the Sessions Court with the complete paper trail — purchase orders, part payments, and correspondence showing an ongoing commercial dispute — and argues parity, since a co-accused was granted bail two weeks earlier. The Sessions Court grants regular bail on a personal bond with one surety, passport deposit, and weekly police-station attendance for two months. Total custody: 19 days — most of it spent waiting for the Sessions listing, which is why the first application's forum and drafting matter.",
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
    inPractice:
      "The clock runs from the first remand date, not the date of arrest — diarise it on day one, because the entire right turns on arithmetic. The limit is 60 days where the offence is punishable up to ten years and 90 days where punishable with ten years or more, life, or death; special statutes extend it (180 days under the NDPS Act, extendable further under UAPA). The right is indefeasible but perishable: the application must be filed, and bail furnished, before the charge-sheet lands. Prosecutions sometimes race a bare or incomplete charge-sheet to court on day 59 or 89 precisely to defeat the right — whether such a filing is a genuine final report can itself be contested. Courts cannot refuse default bail on the gravity of the offence; the only questions are the calendar and the bond.",
    workedExample:
      "A Gurgaon man is remanded in a cheating and forgery case punishable up to seven years — the 60-day limit applies. His lawyer notes the remand date and files the Section 187(3) BNSS application on day 61, before any charge-sheet has been filed, with the accused ready to furnish bail. The court verifies the dates from the remand record and releases him the same week — no argument on merits, no status report. Had the family waited three more days, the charge-sheet filed on day 63 would have extinguished the right entirely, and bail would have had to be fought on merits under Section 483.",
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
    inPractice:
      "A quashing petition is filed only before the High Court, and succeeds on two broad tracks. The first is the Bhajan Lal track: the FIR, read on its face, discloses no offence, is absurd or malicious, or is a civil dispute dressed up as crime — courts quash these to prevent abuse of process. The second, far more common track is settlement: where the parties have genuinely resolved a private dispute (matrimonial FIRs, business cheating cases, cheque matters), the High Court quashes the proceedings because a trial would serve no purpose. Timing is strategic — quashing can be sought at the FIR stage, after charge-sheet, or even during trial — and the petition is usually paired with interim protection from coercive steps while it is pending. Heinous and economic offences against society are quashed far more reluctantly, settlement or not.",
    workedExample:
      "Following a mutual consent divorce settlement in Delhi, a wife agrees to close the 498A FIR she had filed during the dispute. Because 498A is non-compoundable, withdrawal alone is not possible — so the husband files a quashing petition under Section 528 BNSS before the Delhi High Court, annexing the settlement deed and the divorce decree, with the wife appearing to confirm the settlement was voluntary. The High Court quashes the FIR, noting the dispute was purely matrimonial and stands fully resolved. The quashing was the final, structural step of the divorce settlement — negotiated and sequenced into the deed from day one.",
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
    inPractice:
      "The classification is the first thing to check on either side of a criminal matter, because it decides who can do what without a Magistrate. For a complainant, a cognizable offence means the police must register an FIR and can investigate immediately; a non-cognizable one means an NCR entry and an application under Section 174 BNSS for Magistrate permission before any real investigation. For a person accused, cognizable means arrest without warrant is legally possible — though for offences punishable up to seven years, the Section 35(3) BNSS notice regime and the Arnesh Kumar safeguards make a notice of appearance, not arrest, the lawful default. In practice, complaints are often drafted (and FIRs registered) with at least one clearly cognizable section precisely to anchor police jurisdiction — reading which sections are cognizable tells you how much coercive power is actually in play.",
    workedExample:
      "A long-running parking dispute between Noida neighbours produces daily verbal abuse — the police correctly record only an NCR, and nothing moves without the Magistrate. One evening a shove leaves the complainant with a fractured wrist: voluntarily causing grievous hurt is cognizable, so an FIR is registered that night and investigation begins without any court order. Because the offence is punishable under seven years, the accused receives a Section 35(3) BNSS notice to join the investigation rather than being arrested — both halves of the case turning entirely on the cognizable/non-cognizable line and the arrest safeguards layered over it.",
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
    inPractice:
      "The charge-sheet is the hinge of the criminal case: its filing date decides default bail, its contents fix the prosecution's outer case, and its annexures are what the accused is entitled to receive in full before trial. The defence reads it less for what it says than for what it is missing — an essential ingredient not supported by any document or statement is the foundation of a discharge argument at the framing of charge. Supplementary charge-sheets after further investigation are common, so the first filing is not always the last word. For complainants, the stage matters too: if the police file a closure report instead, the complainant has the right to file a protest petition and be heard before the Magistrate accepts it.",
    workedExample:
      "In a Delhi cheating case arising from a failed distribution deal, the charge-sheet arrives with the complainant's ledger, the agreement, and bank statements — every annexure showing supplies made, part-payments received, and a dispute over quality. At the framing of charge the defence argues discharge: the prosecution's own documents show a commercial relationship that soured, with nothing indicating dishonest intention when the deal was struck — the settled dividing line between breach of contract and cheating. The court discharges the accused. Nothing outside the charge-sheet was needed; the case was won by reading the prosecution's own file against its legal theory.",
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
    inPractice:
      "Section 359 BNSS carries two tables that decide everything: offences compoundable by the victim alone (simple hurt, defamation, criminal trespass) and offences compoundable only with the court's permission (voluntarily causing hurt by dangerous means, criminal breach of trust, cheating). Compounding is the victim's act, not the accused's — the complainant applies, the court verifies the settlement is voluntary, and the effect is an acquittal, not merely a closure. Cheque-bounce cases under Section 138 NI Act are separately compoundable under Section 147 of that Act at any stage, which is why Lok Adalats dispose of them in bulk. Where an offence is non-compoundable but the parties have genuinely settled — the 498A/matrimonial pattern — the route is not compounding at all but quashing before the High Court under Section 528 BNSS on the Gian Singh line.",
    workedExample:
      "A dispute between two Faridabad shop neighbours ends in a scuffle and an FIR for voluntarily causing hurt. A year into the trial, elders broker peace: the complainant files a compounding application under Section 359 BNSS with the settlement recorded, and because the offence sits in the with-permission table, the magistrate examines both parties to confirm the compromise is voluntary and permits it — the accused stands acquitted the same day. His cousin's 498A case, settled the same season, needed a different door entirely: cruelty is non-compoundable, so the family took the settlement deed to the High Court for quashing instead.",
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
    inPractice:
      "The two-year punishment line does real work in practice. In a summons case (offences up to two years) there is no formal charge and no discharge stage — the substance of the accusation is put to the accused, and the trial is compact; Section 138 NI Act cheque cases run on this track, with summary-trial directions compressing it further. In a warrant case (above two years), the accused gets a discharge stage before charge is framed — the first genuine opportunity to end the case by showing, from the prosecution's own papers, that no offence is made out. That difference drives strategy: in warrant cases the defence front-loads effort into discharge arguments; in summons cases the pressure points are the plea, cross-examination of the complainant, and settlement. Magistrates can also convert a summons case into a warrant-case procedure where the interests of justice require.",
    workedExample:
      "Two cases from one soured Ghaziabad supply deal illustrate the fork. The buyer's bounced cheque produces a Section 138 complaint — a summons case: no charge framing, notice of accusation, evidence on affidavit, and a settlement at Lok Adalat inside a year. The supplier's rival FIR alleging cheating under Section 318 BNS (punishable up to seven years) is a warrant case — and dies precisely at the stage the summons case lacks: at charge framing, the defence shows the prosecution's own documents record a delivery dispute, not dishonest inducement, and the magistrate discharges the accused before a single witness is called.",
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
    inPractice:
      "The prosecution lives or dies on three strict windows: the written demand notice must go within 30 days of the bank's return memo, the drawer gets 15 days from receipt to pay, and the complaint must be filed within one month after that period lapses. Jurisdiction follows the payee's bank branch (post-2015), so you file where you deposited the cheque, not where the drawer lives. Two financial levers turn the case into recovery pressure: interim compensation of up to 20% of the cheque amount under Section 143A once the accused pleads not guilty, and a further minimum 20% deposit under Section 148 if a convicted drawer appeals. Because the offence is compoundable, a large share of cases settle at mediation or Lok Adalat on a recorded payment schedule — for most payees, the settlement is the point.",
    workedExample:
      "A Ghaziabad packaging supplier holds a ₹12 lakh cheque from a Delhi buyer that returns 'funds insufficient'. Notice goes out on day 12; the buyer neither pays nor replies; the complaint is filed in week seven before the magistrate serving the supplier's Ghaziabad bank branch. After summons, the court awards ₹2.4 lakh interim compensation under Section 143A. Facing personal criminal exposure, the buyer's directors propose settlement at the next National Lok Adalat: ₹12 lakh in four recorded instalments. Total time to first money: about five months — driven by the statutory levers, not the trial.",
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
    inPractice:
      "The plaint is where civil suits are won or lost years before evidence begins. Three drafting decisions carry most of the weight: pleading the cause of action with dates (because the defendant's first attack will be an Order VII Rule 11 rejection application arguing no cause of action or time-bar on the plaint's own showing), valuation (which fixes court fees and the forum), and the relief clause (courts do not grant what was never asked). Facts that answer an obvious limitation problem — a written acknowledgment, a part-payment — must be pleaded in the plaint itself, not saved for arguments. In commercial suits, add the Commercial Courts Act layer: a Statement of Truth verification and, unless urgent interim relief is sought, completed pre-institution mediation under Section 12A.",
    workedExample:
      "A Noida components supplier sues for ₹18 lakh in unpaid invoices, the oldest raised just over three years before filing. The buyer promptly moves Order VII Rule 11: time-barred on the face of the plaint. But the plaint had pleaded, with dates and the bank entry, a ₹2 lakh part-payment made against the running account fourteen months before filing — extending limitation under Section 19 of the Limitation Act. The rejection application is dismissed and the suit proceeds. Two sentences of careful pleading, supported by one annexure, were the difference between a live claim and a dead one.",
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
    inPractice:
      "Two disciplines decide most written statements. The first is the calendar: 30 days from summons, extendable to 90 on costs — and in commercial suits the Supreme Court's SCG Contracts ruling makes 120 days an absolute guillotine, after which the right to file is forfeited and the suit effectively proceeds on the plaint alone. The second is specificity: Order VIII Rule 5 deems every allegation not specifically denied to be admitted, so a lazy “all para wise allegations are denied” draft concedes the case it thinks it is defending. The WS is also the only vehicle for affirmative defences — limitation, jurisdiction, accord and satisfaction must be pleaded here or nowhere — and for the counter-claim, which converts a defence into an attack and survives even if the plaintiff withdraws.",
    workedExample:
      "A Delhi trading firm is sued in a commercial suit for ₹35 lakh on running-account invoices. Its counsel files the written statement on day 87 — inside the outer limit — with paragraph-wise denials, a specific plea that two invoices were never delivered (annexing the transporter's records), and a ₹9 lakh counter-claim for rejected goods. The plaintiff's application for summary judgment fails because the specific denials raise triable issues. The co-defendant who filed a bare general denial on day 130 fares differently: his WS is refused as time-barred under SCG Contracts, and the case against him proceeds undefended.",
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
    inPractice:
      "The interim injunction is usually the real battle in property and commercial disputes — whoever holds the interim order holds the ground for the years the suit takes. The application (Order XXXIX Rules 1–2 CPC) is decided on three tests argued together: a prima facie case, balance of convenience, and irreparable injury that damages cannot cure. In urgent matters courts grant ex parte ad-interim relief on the first day, subject to Order XXXIX Rule 3's requirement of immediate notice to the other side. The tactical corollaries matter as much as the tests: an injunction obtained by concealment is vacated with costs; undertakings given to court are enforceable; and breach is punishable under Rule 2A with attachment and even detention. Injunctions against creating third-party rights in disputed property are the bread-and-butter form.",
    workedExample:
      "A Gurgaon buyer under an agreement to sell learns the seller is negotiating with a second purchaser at a higher price. Her lawyer files a specific-performance suit the same week with an Order XXXIX application, annexing the agreement, payment receipts and the broker's messages about the rival deal. The court grants ex parte ad-interim protection restraining the seller from alienating or encumbering the flat, notice returnable in two weeks. The rival deal dies — no purchaser will buy litigation — and eighteen months later the seller settles by executing the sale deed. The injunction, obtained in week one, decided the case.",
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
    inPractice:
      "An ex parte decree is a real decree — executable, attachable, enforceable — so the response clock matters more than the merits. The set-aside application under Order IX Rule 13 CPC must come within 30 days of the decree (or of knowledge of it, where summons was never duly served), and must show sufficient cause for the non-appearance: defective service is the classic ground, which is why the plaintiff's service record — who received the summons, at which address, with what proof — decides most of these applications. Courts routinely impose terms while restoring: costs, deposit of part of the decretal amount, or an undertaking not to seek adjournments. The strategic alternative is a first appeal against the decree itself, and the two routes can run in parallel. For plaintiffs, the lesson is the mirror image: build the service record meticulously, because a decree obtained on shaky substituted service is a decree waiting to be reopened.",
    workedExample:
      "A Ghaziabad businessman discovers a ₹14 lakh ex parte money decree against him only when the execution notice arrives to attach his shop — the suit summons had gone to a factory address he vacated three years earlier, and 'service' was completed by affixation there. His Order IX Rule 13 application, filed within 30 days of knowledge, annexes the rent deed and electricity records proving the address change predated the suit. The court sets aside the decree on terms — ₹2 lakh deposited in court and costs paid — and the suit is restored to be fought on merits. The deposit stings, but an unchallenged decree at execution stage would have cost the shop.",
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
    inPractice:
      "Winning the decree is half the case; execution is the other half, and it is where Indian litigation actually slows down. The decree-holder files an execution petition before the court that passed the decree (or the court where the judgment-debtor's assets sit, after transfer), choosing the mode that fits the debtor: attachment and sale of movable or immovable property, garnishee orders on bank accounts and receivables, arrest and civil detention in genuinely wilful-default cases, or delivery of possession for property decrees. The practical craft is asset intelligence — execution moves at the speed at which you can point the court to identifiable assets. Money decrees carry interest until satisfaction, and a judgment-debtor's objections under Section 47 CPC are the standard delaying tool to anticipate and rebut.",
    workedExample:
      "A Delhi firm holds a ₹28 lakh money decree from a commercial suit against a trading company that simply ignores it. Its lawyer files execution with a banker's-book summons that reveals two active accounts, obtains attachment (a garnishee order) on both, and simultaneously seeks attachment of the debtor's delivery van. With its operating accounts frozen mid-season, the debtor appears within three weeks and settles the decree with interest in two instalments — recorded in the execution proceeding so default revives attachment automatically. The asset trail, not the decree, produced the money.",
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
    inPractice:
      "The process is two motions before the Family Court built on one comprehensive settlement. The spouses must have lived separately for at least a year; the first motion records the settlement deed — permanent alimony, custody and visitation, return of stridhan, division of joint assets, and closure of pending cases — and the second motion produces the decree. The six-month cooling-off period between motions is waivable after the Supreme Court's Amardeep Singh ruling where separation is long and reconciliation is genuinely dead, which can compress the whole matter to a few weeks. Consent must subsist until the decree — either spouse can withdraw before the second motion — so experienced lawyers sequence payments and case-withdrawals against the two stages so neither side is exposed if the other resiles. NRI spouses routinely appear through video-conference.",
    workedExample:
      "A couple married in Delhi and separated for two years agree to end the marriage. The settlement: ₹30 lakh one-time alimony (half at each motion), the wife retains her stridhan, joint custody with defined visitation, and withdrawal of the pending maintenance case at the first motion with the 498A FIR to be quashed after the second. Both file the first motion at the Dwarka Family Court and simultaneously apply for waiver of the cooling-off period, citing the two-year separation and complete settlement. The court grants the waiver; the second motion follows in five weeks; the decree issues, the balance is paid, and the High Court quashes the FIR on the settlement.",
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
    inPractice:
      "A maintenance petition is filed before the Family Court or Magistrate where the claimant resides, and interim maintenance is the real first battle — courts can and do order monthly payments while the main petition is pending. Since Rajnesh v. Neha (2020), both sides must file a sworn affidavit of assets and liabilities, and maintenance is normally payable from the date of application, not the date of the order — so delay by the paying spouse builds arrears rather than saving money. Quantum turns on the payer's real income and lifestyle (bank statements, ITRs, and visible spending all count), the claimant's own income, and the standard of living during the marriage. Enforcement has teeth: arrears are recoverable through warrants, attachment, and even civil imprisonment for wilful default.",
    workedExample:
      "A Gurgaon wife with a young child files a maintenance petition (Section 144 BNSS, the provision formerly numbered Section 125 CrPC) after separation, disclosing her ₹35,000 monthly salary; the husband, a senior manager, declares only ₹60,000. Her lawyer summons his bank statements and Form 16, which show ₹2.4 lakh monthly plus bonuses and an EMI on a second flat. Applying the Rajnesh framework, the Family Court awards ₹45,000 interim maintenance for wife and child from the date of filing — creating eight months of arrears at the first effective hearing. Faced with a warrant for the arrears, the husband proposes a comprehensive settlement that folds maintenance into mutual consent divorce terms.",
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
    inPractice:
      "A DV Act application is filed before the Magistrate (increasingly, Family Courts hear them alongside matrimonial matters) by or on behalf of an aggrieved woman, and its power lies in the interim stage: protection orders, residence orders securing her right to stay in the shared household regardless of whose name owns it, monetary relief covering maintenance and expenses, and interim custody — often granted within weeks. The Act is civil in architecture (breach of a protection order is the criminal offence), applies to live-in relationships in the nature of marriage, and reliefs run alongside — not instead of — Section 125 BNSS maintenance and matrimonial proceedings. For respondents, the defence work is documentary: rebutting the domestic-relationship or violence allegations, and ensuring monetary orders reflect real income on both sides via the Rajnesh affidavit discipline.",
    workedExample:
      "After being locked out of her matrimonial flat in Noida, a woman files a DV application through the Protection Officer. Within three weeks the Magistrate passes an interim residence order restoring her to the shared household and monetary relief of ₹22,000 per month against her husband, based on his salary slips summoned from his employer. The orders hold while the couple's divorce negotiation matures; a year later, the DV case is withdrawn as part of a comprehensive mutual consent divorce settlement in which the one-time alimony expressly covers all past and future claims — the standard arc for DV proceedings that begin as protection and end as leverage toward a complete settlement.",
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
    inPractice:
      "Custody in India is decided on one test — the welfare of the child — which overrides every parental right and every agreement between the parents. Applications run under the Guardians and Wards Act (all communities) or Section 26 HMA within matrimonial proceedings, before the Family Court where the child ordinarily resides. Courts increasingly distinguish custody from guardianship and favour arrangements that keep both parents present: physical custody to one parent with defined visitation, or genuinely shared arrangements for older children. Children of discernible maturity are interviewed in chambers. The practice reality: interim custody and visitation orders set the pattern the final order usually follows, so the first sixty days matter disproportionately — and a parent who unilaterally cuts off access damages their own case more than the other side's.",
    workedExample:
      "In a Delhi mutual consent divorce, parents of a nine-year-old negotiate custody instead of fighting it: physical custody with the mother, alternate weekends and half of every vacation with the father, joint decisions on school and medical matters, video calls on fixed evenings, and a no-relocation-abroad clause without written consent or court leave. The schedule is written into the settlement deed with pickup times and holiday splits, recorded at the first motion, and made part of the decree. Three years later, when a job offer tempts the mother toward Singapore, the clause forces a renegotiation instead of an abduction petition — precision in the deed prevented the second round of litigation.",
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
    inPractice:
      "In practice the section runs on two tracks at once. For the complainant wife, the FIR is typically filed with supporting detail of specific acts, dates and dowry demands — vague omnibus allegations against the entire extended family are the single most common reason cases collapse. For the accused husband and in-laws, the immediate playbook is anticipatory bail (granted liberally for relatives with peripheral roles), strict reliance on the Arnesh Kumar safeguards — since the offence is punishable up to three years, arrest requires recorded justification and the Section 35(3) BNSS notice regime applies — and, where the allegations are demonstrably a pressure tactic, a quashing petition. Most 498A matters end not in conviction but in a mediated global settlement: the criminal case is quashed on settlement as part of a mutual consent divorce package.",
    workedExample:
      "A week after a Delhi husband files for divorce, an FIR under BNS Section 85 names him, his parents, and his married sister in Lucknow. All four obtain anticipatory bail — the sister's counsel showing she visited the couple twice in three years, the court noting the omnibus nature of the allegations. The Family Court refers the couple to mediation, where a comprehensive settlement emerges: mutual consent divorce, ₹25 lakh one-time alimony, return of stridhan. After the second motion and final payment, the Delhi High Court quashes the FIR on the settlement — the standard arc for the large majority of contested 498A matters.",
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
    inPractice:
      "The EC is the first document a property lawyer pulls in any purchase due diligence — obtained from the Sub-Registrar's office (online in most states) for a fee, ideally covering 13 to 30 years of the property's registered history. Reading it correctly matters more than obtaining it: the EC shows only registered transactions, so an unregistered agreement to sell, an unregistered family arrangement, pending litigation, or unpaid statutory dues will not appear. Practice is therefore to pair the EC with the title-deed chain, revenue records, a litigation search, and — for flats — the society's and authority's dues position. A clean EC is necessary but never sufficient; a loan entry (mortgage) on the EC that has been repaid must still be matched with a registered release deed before you pay.",
    workedExample:
      "A Bangalore buyer negotiating a ₹1.6 crore resale flat obtains a 15-year EC online. It shows the seller's purchase in 2014 and a mortgage to a housing-finance company in 2016 — but no release. The seller insists the loan was closed in 2022 and produces a closure letter. The buyer's lawyer holds the deal until the lender executes and registers a release deed, then re-pulls the EC to confirm the entry. The updated EC comes back clean, the sale deed proceeds, and the buyer avoids the classic trap: paying full value for a flat that is still, on the register, security for someone else's loan.",
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
    inPractice:
      "Four provisions carry the Act's practical weight in property work. Section 54: sale of immovable property worth ₹100 or more is completed only by a registered sale deed — possession plus full payment plus a notarised agreement still passes no title. That is why GPA transactions are not sales: the Supreme Court in Suraj Lamp closed the GPA/agreement-to-sell/will route, and such holdings can be regularised only by a fresh registered conveyance from the true owner. Section 53A gives the shield version: a transferee in possession under a written agreement who has performed his part can defend that possession even without registration — a defence, never a source of title. Section 52 (lis pendens) makes purchases of property under litigation subject to the suit's outcome, and Section 106 governs lease terminations, where the notice's form and period decide eviction suits before they begin.",
    workedExample:
      "A Delhi buyer holds a 2009-vintage GPA-plus-agreement 'purchase' of a plot, with full payment and continuous possession. When he tries to sell, the title search stops the deal: post-Suraj Lamp, his papers convey no title. The original owner, traced after months, demands a premium to execute a registered conveyance. Meanwhile a rival claimant's suit against the owner tempts a quick unregistered exit — but any transfer now would be caught by Section 52 lis pendens. The eventual solution is the only clean one: a registered sale deed from the owner (at negotiated cost), executed after the rival suit is compromised on record. Section 53A had protected his possession for fifteen years; only registration finally gave him property.",
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
    inPractice:
      "Section 52 of the Transfer of Property Act makes any transfer of disputed property during a pending suit subject to the suit's outcome — the buyer steps into the seller's shoes and is bound by the decree, without needing to be a party. For a litigant, the working consequence is protective: a defendant cannot defeat your property suit by selling to a third party mid-way. For a buyer, it is a due-diligence command: search for pending litigation before paying, because 'I didn't know about the case' is no defence. In states like Maharashtra, a notice of lis pendens can be registered so it surfaces in the property's search; elsewhere, litigation searches on e-Courts and a careful reading of the plaint schedule do the work. Lawyers pursuing property suits routinely pair the doctrine with an express injunction against alienation — the doctrine binds a purchaser, but the injunction deters the sale itself.",
    workedExample:
      "Mid-way through a partition suit over a Ghaziabad plot, one brother sells 'his' share of the undivided property to an investor at a discount. The investor registers the sale deed and starts fencing the plot. The other siblings do nothing special — they simply implead the investor and proceed. When the final decree allots that portion of the plot to a sister, the investor's purchase stands subject to the decree under Section 52: he acquired only what his seller was finally held to own, which is a different, smaller parcel. His remedy is a refund fight against his own seller. The discount, it turns out, was the price of the pending suit he never searched for.",
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
    inPractice:
      "The registered sale deed is the document that actually transfers ownership of immovable property worth ₹100 or more — an agreement to sell, a GPA, or possession letters do not, whatever market practice suggests. Execution runs through the Sub-Registrar of the property's district: stamp duty at the state's rate (with concessions for women buyers in several states, including Delhi and UP), registration fee, both parties' and witnesses' presence for biometrics and photographs, and presentation within four months of execution. The lawyer's work happens before that appointment: verifying the seller's title chain and a clean encumbrance certificate, matching the property schedule to the actual survey/khasra numbers, confirming no registered mortgage survives without a release deed, and drafting covenants — title warranty, indemnity, possession and dues cutoffs — that protect the buyer for decades. After registration, mutation in revenue/municipal records completes the practical transfer.",
    workedExample:
      "A Noida buyer pays ₹1.1 crore for a resale flat. Her lawyer insists the deal close only by registered sale deed — not the seller's proposed 'GPA + agreement' shortcut that would save stamp duty. Pre-registration checks surface a surviving mortgage entry from 2019; the lender's registered release deed is obtained first. At the Sub-Registrar's office the deed is executed with the authority transfer-memorandum requirements met, duty paid at UP's female-buyer concession rate in her name, and possession and maintenance-dues cutoffs recorded in the deed. Mutation follows in six weeks. Two years later, when a cousin of the seller claims an interest, the registered deed plus the release trail ends the threat at the notice stage.",
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
    inPractice:
      "For a delayed homebuyer, RERA works in three moves. First, the complaint — e-filed with the state authority (UP RERA's Greater Noida bench for Noida projects, HRERA Gurugram for Gurugram district) with a modest statutory fee, decided mostly on documents. Second, the Section 18 choice: exit the project with a full refund plus prescribed interest on every payment, or stay and claim delay interest month by month — a genuine strategic decision that depends on the project's likelihood of completion. Third, execution, where cases are actually won or lost: an unpaid order becomes a recovery certificate enforced through the district revenue machinery as arrears of land revenue, with attachment of builder assets available. The builder's appeal to the appellate tribunal requires a pre-deposit of the refund ordered — which is why buyer-favourable orders carry real settlement leverage.",
    workedExample:
      "A buyer paid ₹85 lakh for a Noida Extension flat promised in 2021 and still unfinished. She files a UP RERA complaint electing refund under Section 18. The authority orders a full refund with prescribed interest — the computation, run payment-by-payment from each instalment date, takes the total past ₹1.2 crore. The builder neither pays nor appeals (the appeal would need a matching pre-deposit), so a recovery certificate issues to the District Magistrate, Gautam Buddh Nagar, who initiates attachment of the builder's unsold inventory. The builder settles: ₹1.05 crore in three tranches — recovered through execution pressure, not the order alone.",
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
    inPractice:
      "A partition suit is filed in the civil court where the property is situated, by any co-owner — and after the 2005 amendment to the Hindu Succession Act, daughters hold coparcenary rights equal to sons, including in properties inherited long before. The suit proceeds in two stages: a preliminary decree declaring each sharer's fractional entitlement, then a final decree physically dividing the property (or ordering sale and distribution where division is impracticable, as with a single flat). The realistic paths to resolution are three: a negotiated family settlement recorded before the court, court-referred mediation, or the full trial. Because possession, rental income and mesne profits accrue while the suit runs, interim arrangements — who occupies, who collects rent — are often fought as hard as the shares themselves.",
    workedExample:
      "Three siblings inherit their father's Delhi house; the eldest brother occupies it and refuses to divide. The sister — an equal coparcener post-2005 — files a partition suit, claiming her one-third share plus mesne profits for her excluded years. The court passes a preliminary decree of one-third each; since a single built-up house cannot be split three ways, the parties are referred to mediation, where the occupying brother agrees to buy out both siblings at a valuer-determined price of ₹1.1 crore each, paid in two instalments recorded in the final decree. Time: 3 years — against 8-10 for a fully contested trial to sale.",
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
    inPractice:
      "Incorporation runs through the MCA's SPICe+ form, processed centrally with stamp duty auto-computed at the state's rate — a clean filing completes in roughly 7–14 days and bundles DIN, PAN, TAN, EPFO/ESIC and optional GST. The decisions that matter are made before filing: entity choice (venture-capital fundraising and ESOPs effectively require a Private Limited over an LLP), a name that clears the trademark and MCA conflict checks, an authorised-capital figure that anticipates the first funding round, and — above all — founders' and shareholders' agreements with vesting and IP assignment signed at incorporation, when they are cheap. The post-incorporation calendar is unforgiving: first auditor within 30 days, share certificates within 60, the INC-20A commencement declaration within 180 (before which the company cannot trade or borrow).",
    workedExample:
      "Two founders incorporate a SaaS startup as a Private Limited with a co-working registered office in Gurgaon's Cyber City (operator NOC plus utility bill). On their lawyer's insistence they sign a founders' agreement at incorporation: 4-year vesting with a 1-year cliff, IP assignment of all pre-incorporation code, and a deadlock-resolution clause. Eight months later one founder exits; the cliff and vesting mean he leaves with 12.5% instead of his full 50%, and the assigned IP stays with the company. The seed round closes on schedule — the investor's diligence flags nothing, because the fight that kills most young startups was papered out of existence on day one.",
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
    inPractice:
      "The MoA fixes what the company may do (objects, capital, registered-office state); the AoA fixes how it is run (board powers, share transfers, meetings, founder rights). Most incorporations paste Table F articles untouched — and pay for it at the first funding round or the first founder fight, because the rules that matter (transfer restrictions, ROFR, drag/tag rights, board-seat entitlements, deadlock resolution) exist only if drafted in. The load-bearing practice point: rights written into a shareholders' agreement but not into the articles bind only the signatories — against the company and incoming shareholders, courts enforce the articles, so every SHA negotiation should end with a conforming AoA amendment by special resolution. Alterations are ROC-filed (MGT-14); object-clause changes need a special resolution, and entrenchment provisions can make chosen articles amendable only by stricter thresholds.",
    workedExample:
      "Two co-founders of a Faridabad tooling startup sign an SHA giving each a right of first refusal over the other's shares — but never amend the Table F articles. Years later one founder sells to an outside investor overnight; the ROFR claim against the transfer fails because the articles, which the company and the transferee are bound by, contain no such restriction — the SHA yields only a damages claim against the seller. The investor's own counsel does it properly at the next round: the new SHA's transfer restrictions, board rights, and entrenched protective provisions are written into amended articles and filed with the ROC, making them enforceable against everyone who ever touches the shares.",
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
    inPractice:
      "For creditors, the IBC works as much through leverage as liquidation. An operational creditor owed ₹1 crore or more serves a Section 8 demand notice; the debtor has 10 days to pay or show a pre-existing dispute, failing which a Section 9 petition can be filed at the NCLT bench for the debtor's registered-office state. A very large share of these matters settle at or before admission — because admission hands the company to a resolution professional, imposes a moratorium, and freezes the promoters out. Financial creditors file under Section 7 on default; homebuyers qualify as financial creditors subject to the 100-allottee-or-10% class threshold. For debtors, the 10-day reply showing a genuine pre-existing dispute is the single defence that kills a petition at the threshold — and once inside CIRP, timely claim filing with the RP decides how much anyone recovers.",
    workedExample:
      "A Gurgaon component manufacturer is owed ₹1.8 crore by an auto-parts buyer that has stalled payment for a year with no dispute ever raised in writing. Its lawyer serves a Section 8 demand notice; the buyer's reply alleges quality issues for the first time — with no prior correspondence to back it. The Section 9 petition is filed at NCLT Chandigarh (the buyer is Haryana-registered). Facing likely admission and loss of the company, the promoters settle at ₹1.55 crore in two tranches before the first effective hearing, and the petition is withdrawn. Time from notice to first payment: four months.",
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
    inPractice:
      "An SHA is negotiated at two moments: among founders at incorporation, and with investors at each funding round. The clauses that decide real disputes are predictable — vesting and cliff for founder equity, board composition and reserved matters (what cannot be done without investor consent), anti-dilution protection, transfer restrictions (right of first refusal, tag-along, drag-along), exit rights, and the deadlock mechanism. Two practice points matter in India: the SHA's key terms must also be written into the Articles of Association to bind the company itself reliably, and dispute-resolution clauses should name arbitration with a workable seat, because a bare SHA breach otherwise lands in slow civil courts. When a founder is squeezed out or diluted in breach, the remedies run from arbitration under the SHA to an oppression-and-mismanagement petition at the NCLT.",
    workedExample:
      "A three-founder Bangalore startup raises a seed round. The SHA gives the investor a board seat, reserved matters over budgets and ESOP expansion, and gives founders reverse vesting; the same provisions are mirrored into the Articles. A year later, two founders attempt to issue fresh shares to themselves at par, diluting the third from 30% to 9% while he is on medical leave. Because the SHA (and Articles) require unanimous founder consent plus investor sign-off for new issuance, the allotment is void against the Articles; his lawyer's NCLT oppression petition under Sections 241–242 wins interim status quo in three weeks, and the matter settles with the allotment reversed.",
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
    inPractice:
      "An ESOP is built in three legal layers: the scheme (board plus shareholders' special resolution under Section 62(1)(b) of the Companies Act and Rule 12 — with pool size, eligibility and vesting architecture), the individual grant letters (options, strike price, vesting schedule, exercise window, exit and clawback terms), and the cap-table discipline that keeps the pool honest through funding rounds. Standard Indian startup practice is four-year vesting with a one-year cliff. Two legal points bite repeatedly: promoters and most directors holding over 10% cannot receive ESOPs (except in DPIIT-recognised startups within their exemption window), and tax hits twice — as salary (perquisite) on exercise and as capital gains on sale — which is why exercise windows and departure terms are the most negotiated clauses. For employees, the enforceable rights are in the scheme and grant letter, not the offer-letter one-liner.",
    workedExample:
      "A Gurgaon SaaS startup grants a senior engineer options over 0.4% of the company: four-year vesting, one-year cliff, strike at face value, 90-day post-exit exercise window. She leaves after 30 months with 50% + 6/48 vested. Because the scheme allows the board to extend the exercise window, her lawyer negotiates an extension to two years — sparing her the perquisite tax hit of exercising illiquid shares immediately. At the Series B secondary a year later, she exercises and sells vested shares in the same event, paying perquisite tax on the exercise-date fair value and capital gains on the uplift. The clause that mattered was not the number of options — it was the exercise window her grant letter almost didn't have.",
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
    inPractice:
      "Three provisions do most of the Act's commercial work. Section 73 gives compensation for loss naturally arising from breach — but only loss actually proved, with a duty to mitigate; Section 74 caps liquidated-damages clauses at reasonable compensation, so the ₹10-lakh-per-day penalty in the contract is a ceiling for negotiation, not an entitlement (Kailash Nath v. DDA is the governing statement). Section 27 renders agreements in restraint of trade void — which is why post-employment non-compete clauses in Indian employment contracts are generally unenforceable however solemnly signed, while confidentiality and (narrowly drawn) non-solicitation obligations survive. Around these sit the daily disciplines: free consent (coercion and undue influence unwind contracts signed under pressure), and the rule that a contract can be terminated only per its own notice clause — termination in breach of the clause is itself a breach.",
    workedExample:
      "A Gurgaon IT firm sues a departed engineer on a two-year non-compete and simultaneously invokes the contract's ₹15 lakh liquidated-damages clause. The non-compete claim fails at the threshold — Section 27 makes a post-employment restraint void, and the injunction application is dismissed. The damages claim survives but shrinks: under Section 74 the firm must still prove actual loss, and its evidence supports only the cost of one delayed project deliverable. It recovers ₹2.1 lakh, not ₹15 lakh. The clause that holds is the narrowly drafted non-solicitation covenant — the engineer is restrained from poaching the two named clients he serviced, because that restraint protects goodwill rather than barring him from his trade.",
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
    inPractice:
      "Specific performance is the standard remedy when a seller of immovable property backs out — since the 2018 amendment to the Specific Relief Act, it is the rule rather than the discretionary exception, and courts must grant it unless a statutory bar applies. The buyer's case is won on readiness and willingness: pleading and proving that they were at all times ready to pay and perform, backed by bank statements, loan sanction letters, and written demands to complete the sale. Limitation is three years. The suit is filed where the property is situated, almost always with an interim injunction restraining the seller from creating third-party rights — and a notice of lis pendens so any purchaser during the suit takes subject to the outcome. Damages remain the fallback where performance has become impossible.",
    workedExample:
      "A Pune buyer signs an agreement to purchase a flat for ₹90 lakh, pays ₹20 lakh earnest, and obtains a loan sanction for the balance. As prices rise, the seller stops responding and negotiates with another buyer at ₹1.1 crore. The buyer's lawyer sends a completion notice, then sues for specific performance with an urgent injunction against third-party sale — granted in the first fortnight. At trial, the earnest receipt, loan sanction and notices prove continuous readiness and willingness. The court decrees specific performance at the contract price; the seller executes the sale deed through the court's machinery when he refuses to sign voluntarily.",
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
    inPractice:
      "Five sections do most of the Act's practical work. Section 8 makes reference mandatory: if a party sues in court despite a valid arbitration clause, the other side applies before its first statement on the substance and the suit is referred. Section 9 gives court-ordered interim protection before the tribunal exists; Section 11 has the High Court appoint the arbitrator when the clause's mechanism fails or one side stalls. Section 29A puts the award on a 12-month clock from completion of pleadings (extendable six months by consent, then only by court). Section 34 is the challenge route — deliberately narrow, with no re-hearing on merits — and Section 36 makes the award enforceable as a decree with no automatic stay pending challenge. Half of all arbitration fights trace back to clause drafting: seat, institution versus ad hoc, and the number of arbitrators deserve deliberate choices at contract stage, not boilerplate.",
    workedExample:
      "A Delhi distributor's agreement with a manufacturer carries a Delhi-seated institutional arbitration clause. When the relationship collapses, the manufacturer sues in civil court for account recovery; the distributor applies under Section 8 and the suit is referred to arbitration. A Section 9 order meanwhile restrains the manufacturer from appropriating the distributor's security deposit. The sole arbitrator, appointed through the institution without any Section 11 detour, renders a ₹1.6 crore award in under fifteen months. The manufacturer's Section 34 challenge — effectively asking for a merits re-hearing — fails, and the award is executed as a decree. Every stage ran on the statute's rails because the clause was drafted cleanly.",
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
    inPractice:
      "Article 226 is the citizen's direct line to the High Court against the State — and 'State' reaches government departments, municipal and development authorities, tax officers, universities, and statutory bodies like RERA authorities or the Noida and Ghaziabad development authorities. The petition asks for one of the classic writs (certiorari to quash an order, mandamus to compel a duty, prohibition, quo warranto, habeas corpus) and is the remedy of choice where an authority acts without jurisdiction, violates natural justice, or simply refuses to perform a statutory duty. Its practical limits are equally important: the High Court ordinarily will not entertain a writ where an effective alternative remedy (a statutory appeal, a tribunal) exists, will not decide heavily disputed facts, and expects clean hands and prompt filing. Interim relief — a stay of the impugned action — is often the petition's real objective, sought on day one.",
    workedExample:
      "A fully paid Ghaziabad flat owner cannot register her flat because the GDA withholds completion permissions over the builder's unpaid dues — a fight she is not party to. RERA orders against the builder have not moved the authority itself. Her buyers' association files an Article 226 petition before the Allahabad High Court against the GDA, seeking mandamus to process registrations of blameless buyers and interim directions. On the first hearing the court seeks the GDA's response and restrains coercive steps; three months later it directs a dues-settlement mechanism between GDA and the builder that de-links buyers' registries. The writ reached the authority the consumer and RERA forums could not.",
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
    inPractice:
      "In civil trials the examination-in-chief now arrives as an affidavit (Order XVIII Rule 4 CPC), so the live courtroom event is really the cross-examination — and cases are decided by what a witness concedes there, not by what the affidavit asserted. Cross permits leading questions and ranges over credibility as well as facts; its sharpest tool is Section 148 BSA-style confrontation with prior inconsistent statements — the witness's own earlier affidavit, police statement, reply notice, or WhatsApp messages. Practical disciplines: put your case to the opposing witness (a fact never suggested in cross is treated as accepted), keep questions short and closed, and know when to stop — the over-long cross that lets a witness repair damage is a courtroom classic. Re-examination is confined to explaining matters arising in cross; it cannot introduce a fresh story.",
    workedExample:
      "In a Section 138 trial, the drawer's defence is that the cheque was a blank security instrument misused by the supplier. In cross-examination the complainant's counsel gets three admissions in ten minutes: the signature is the drawer's, the goods covered by the invoices were received and never returned, and the statutory demand notice went unanswered for months. Each admission is a prior-conduct contradiction of the security-cheque story. The defence's own witness stage cannot undo it — the presumption under Section 139 NI Act, now fortified by the admissions, carries the conviction. The case turned on ten minutes of cross, not on either side's paperwork.",
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
    inPractice:
      "The two standards produce practical consequences people rarely expect. First, parallel proceedings can diverge lawfully: an acquittal in the criminal case (proof beyond reasonable doubt not met) does not defeat the civil claim on the same facts, which needs only a preponderance — so a director acquitted of cheating can still lose the recovery suit. Second, statutes reverse the burden where the legislature wants convictions easier: Section 139 NI Act presumes a bounced cheque was issued for a legally enforceable debt, so in cheque trials it is the accused who must raise a probable defence (Rangappa v. Mohan) — on the civil standard of preponderance, not beyond reasonable doubt. Similar reverse-onus architecture runs through the NDPS Act, PMLA, and the dowry-death presumption. Knowing who must prove what, to which standard, is the first strategic question in any dispute that straddles the criminal-civil line.",
    workedExample:
      "A supplier runs a Section 138 prosecution and a civil recovery suit against the same defaulting buyer. In the criminal case the Section 139 presumption operates: the buyer must probabilise his story that the cheque was security — his bare denial, with no reply to the statutory notice and no supporting ledger, fails the preponderance threshold and conviction follows. In a parallel cheating FIR over the same deal, the same buyer is discharged — dishonest intention at inception cannot be proved beyond reasonable doubt from a commercial paper trail. Same facts, three proceedings, three burdens — and the outcomes differ exactly as the standards predict.",
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
    inPractice:
      "Limitation is the first question in every civil consultation, because it kills more claims than bad evidence ever does. Money and contract claims die three years from when each invoice or instalment fell due — on a running commercial account, every invoice has its own clock. Possession claims run twelve years; execution of a decree, twelve. Two provisions revive a dying claim: a written, signed acknowledgment of liability before expiry (Section 18) and a part-payment (Section 19) each restart the period — which is why a demand letter that provokes a written 'we will clear the dues' reply is worth more than a year of phone calls. Section 5 condonation of delay exists for appeals and applications, not suits: a time-barred suit is dead however sympathetic the cause, and courts must reject it even if the defendant never raises the point.",
    workedExample:
      "A Noida vendor holds ₹9 lakh in unpaid invoices against a retail chain, the oldest now two years and ten months old. Before filing, her lawyer sends a demand email; the buyer's accounts head replies confirming the outstanding balance and promising payment 'by next quarter'. That signed acknowledgment resets limitation under Section 18 for the entire admitted balance. The recovery suit is filed four months later — comfortably within the fresh period — and the acknowledgment email doubles as the suit's best evidence. Without it, the oldest invoices would have expired in eight weeks, and no court could have revived them.",
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
    inPractice:
      "The vakalatnama looks like a formality but defines the lawyer-client relationship in court: read its printed clauses before signing, because standard forms typically authorise the advocate to act, file, receive documents, and sometimes compromise the matter. It is executed per proceeding and per forum — an appeal or a connected case needs its own — and carries a small court-fee stamp that varies by state. Changing advocates mid-case is a client's right: the new advocate files a fresh vakalatnama, in practice with a no-objection endorsement from the earlier advocate or, where that is withheld, with the court's leave after notice — the file and case papers must be handed over, subject to accounts being settled. Senior advocates never file a vakalatnama; they appear on the instructions of the advocate-on-record, which is why every matter needs a filing advocate regardless of who argues it.",
    workedExample:
      "Midway through a Delhi property suit, a litigant loses confidence after repeated adjournments sought by her counsel and engages a new advocate. The new advocate prepares a fresh vakalatnama and requests a no-objection from the earlier counsel; when a week passes without response, he files the vakalatnama with an application seeking leave to appear, with notice to the earlier advocate. The court grants leave, directs handover of the case file, and the suit continues without losing a date. The change cost one application and no adjournment — because the substitution followed the procedure instead of simply turning up with new counsel on the hearing day.",
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
    inPractice:
      "A stay is never automatic — it is asked for, argued, and usually conditioned. Filing an appeal does not by itself stop execution of the decree below: a separate application under Order XLI Rule 5 CPC is needed, and courts routinely condition the stay on depositing all or part of the decretal amount, so the winner below is protected while the appeal runs. In writ and quashing practice, the interim stay of the impugned order or of coercive steps is often the petition's real objective on day one. Statutes increasingly build the condition into the stay itself — a builder appealing a RERA refund order, for instance, must first deposit the amount under Section 43(5) RERA. An ex parte stay lasts only until the returnable date, breach of a stay is contempt, and the other side can always apply to vacate — so a stay is a position to be defended, not a result.",
    workedExample:
      "A Delhi landlord wins a ₹22 lakh money decree against a former commercial tenant, who files a first appeal on day 28. The appeal alone changes nothing — execution can proceed — so the tenant also files an Order XLI Rule 5 stay application. The appellate court grants the stay on the condition that half the decretal amount be deposited in court within four weeks, failing which the stay dissolves. The tenant deposits; execution is suspended for the life of the appeal, while the landlord knows ₹11 lakh sits secured in court whatever the outcome. Both sides got what a stay is actually designed to deliver: preserved positions, not free time.",
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
    inPractice:
      "Three questions decide every appeal before its merits are ever reached: does a right of appeal exist at all (it is purely statutory), what is the limitation period (typically 30, 60, or 90 days, strictly counted from the judgment or its certified copy), and what must be deposited to be heard (consumer and RERA appeals carry statutory pre-deposits). A civil first appeal under Section 96 CPC is a full re-hearing on fact and law; a second appeal under Section 100 lies only on a substantial question of law, which the High Court must frame — most second appeals die at admission. Filing the appeal does not stay the decree: a separate stay application is needed. And the respondent is not passive — cross-objections allow the winner below to challenge the parts it lost, so an appeal can end worse than the judgment appealed from.",
    workedExample:
      "A Ghaziabad contractor loses a suit and faces a ₹22 lakh decree with 12% interest. Within 30 days he files a first appeal before the District Judge with a stay application; the stay is granted against deposit of half the amount. Because the first appeal is a full re-hearing, the appellate court re-examines the ledgers and finds the trial court double-counted one invoice and applied a contractual interest clause that had lapsed — the decree is reduced to ₹15 lakh with 9% interest. The decree-holder's cross-objection on a disallowed claim fails. Neither side got everything, which is the routine truth of appellate practice: recalibration is common, reversal is rare.",
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
    inPractice:
      "Section 9 is the emergency room of arbitration: it is used before the tribunal exists, when assets are moving and the clause alone protects nothing. Typical asks — restraint on alienating the disputed asset, security for the amount in dispute, preservation of stock or records, appointment of a receiver. The court applies the standard injunction trilogy (prima facie case, balance of convenience, irreparable injury), and bank-guarantee encashment is restrained only on the narrow grounds of fraud or irretrievable injustice. Two timing rules matter: once interim relief is granted before arbitration, arbitral proceedings must be commenced within 90 days, and once the tribunal is constituted, Section 9(3) sends parties to the tribunal under Section 17 unless that remedy would be inefficacious. Filed strategically, a Section 9 order often produces the settlement the arbitration would otherwise take a year to force.",
    workedExample:
      "A Gurgaon contractor with ₹90 lakh in certified-but-unpaid bills learns the developer is negotiating to sell the only unencumbered floor of the project — its effective recovery pool — while invoking arbitration is still weeks away. A Section 9 petition before the commercial court seeks security for the claim; the court restrains alienation of the floor pending arbitration and directs the developer to disclose encumbrances. The contractor serves its notice of arbitration within the 90-day window, and the tribunal, once constituted, continues the protection under Section 17. When the award later comes, there is still an asset left to execute against — the entire value of the case preserved by the first fortnight's filing.",
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
    inPractice:
      "The 2019 Act rebuilt consumer litigation around value-based tiers: District Commissions hear claims up to ₹50 lakh, State Commissions up to ₹2 crore, and the NCDRC above that (jurisdiction is measured by the consideration paid, not the compensation claimed — a 2021 recalibration that moved most cases down the ladder). Complaints are e-filed on e-Daakhil, can be filed where the complainant resides or works (not just where the seller sits), and limitation is two years from the cause of action. The Act's practical additions matter: product liability claims against manufacturers and sellers, recognition of unfair contracts, mediation cells attached to commissions, and the Central Consumer Protection Authority acting against unfair trade practices at scale. Execution has teeth — non-compliance with commission orders is punishable with imprisonment. For homebuyers, the consumer route runs concurrent with RERA; you elect the forum, you cannot recover twice.",
    workedExample:
      "A Delhi buyer pays ₹18 lakh for a modular kitchen and premium appliances; installation is botched, the chimney is a discontinued model, and the vendor stops responding. She e-files on e-Daakhil before the Delhi District Commission (consideration ₹18 lakh — comfortably within the ₹50 lakh tier), claiming refund of the defective components, rectification costs and compensation, with photographs, invoices and the WhatsApp trail annexed. At the commission's mediation cell the vendor offers partial rectification; she declines, and the commission later orders replacement of the chimney, ₹2.4 lakh toward rectification and ₹50,000 compensation with interest on default. When payment stalls, an execution application citing the Act's penal enforcement produces a settlement cheque within a month.",
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
    inPractice:
      "The provisions that matter in everyday cyber-fraud practice are Section 66C (identity theft — using someone's password, OTP, or electronic signature) and Section 66D (cheating by personation using a computer resource — the fake-officer video call, the phishing link, the UPI fraud), usually charged alongside cheating under Section 318 BNS. Speed decides recovery: report within hours on the 1930 cyber helpline or cybercrime.gov.in and the system can freeze the money mid-hop between mule accounts; wait a week and the trail is dry. The complaint route runs cyber cell → FIR → bank lien on the frozen amounts → magistrate-supervised release back to the victim. For the accused side, these offences are bailable in most configurations, and the defence work is largely forensic — device seizure memos, IP logs, and the chain of custody of electronic evidence.",
    workedExample:
      "A Noida professional clicks a courier-notification link and loses ₹3.8 lakh through three instant UPI debits. She calls 1930 within the hour and files on cybercrime.gov.in the same evening; the freeze request catches ₹2.6 lakh sitting in two mule accounts before it moves again. The cyber cell registers an FIR under Sections 66C/66D IT Act and Section 318 BNS, and three months later the magistrate orders the frozen amounts released to her against indemnity. The uncaught ₹1.2 lakh had left the banking system within forty minutes of the fraud — the case was won and lost in the first hour, not in court.",
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
    inPractice:
      "Strike-off is the exit route for a company that never took off or has stopped operating — and a compliance trap for directors who ignore it. Voluntary strike-off under Section 248(2) runs on Form STK-2: the company must have no operations for two financial years (or never commenced business), extinguish liabilities, close bank accounts, and file with a members' special resolution, indemnity bonds and a statement of accounts no older than 30 days. The ROC's own power under Section 248(1) is the involuntary version — routinely triggered by companies that skip annual filings or never file INC-20A — and it arrives with director consequences: potential disqualification under Section 164(2) after three years of non-filing, which blocks directorships across all companies. A struck-off company can be restored by the NCLT under Section 252 within specified windows, but restoration is litigation, not paperwork. The clean rule: operate compliantly, or close deliberately — never abandon.",
    workedExample:
      "Two Noida founders shut their venture in 2024 but simply stop filing instead of closing the company. In 2026 the ROC issues a Section 248(1) notice and strikes the company off; both founders discover the sting when a new startup's incorporation stalls — their DINs are flagged for disqualification exposure from the defunct company's filing defaults. Fixing it costs a year: a Section 252 restoration application before the NCLT, back-filing every overdue annual return with additional fees, and only then a proper voluntary strike-off via STK-2 with indemnity bonds and a bank-closure certificate. A ₹20,000 orderly closure in 2024 became a six-figure, twelve-month detour — the standard price of abandoning instead of dissolving.",
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
