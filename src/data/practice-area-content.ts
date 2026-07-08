import { part2Content } from "./practice-area-content-part2";

export interface PracticeAreaContent {
  detailedOverview: string[];
  keyLegislation: string[];
  serviceDetails: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relevantCourts: string[];
  highlights: { stat: string; label: string }[];
  // Optional blocks — when present, the practice-area template renders
  // dedicated H2 sections so the page can target "documents required for X",
  // "process for X", and "how long does X take" queries that the
  // earlier overview-only structure couldn't capture.
  commonProblems?: string[];
  legalProcess?: { step: string; description: string; durationHint?: string }[];
  requiredDocuments?: string[];
  timeline?: { stage: string; duration: string }[];
  // Outbound links to authority sources (indiacode.nic.in, sci.gov.in,
  // ecourts.gov.in, MCA, RBI, etc.). Google treats outbound links to
  // high-authority sites as a quality signal for YMYL pages — and the
  // citations also strengthen E-E-A-T for AI search engines.
  outboundReferences?: { label: string; url: string; source: string }[];
}

const part1Content: Record<string, PracticeAreaContent> = {
  "civil-law": {
    detailedOverview: [
      "Looking for the best civil lawyer in India? NyaySevak connects you with verified civil law advocates across the Supreme Court, 25 High Courts, and 700+ District Courts. Whether you need a civil lawyer for a property dispute, money recovery suit, breach of contract, partition matter, injunction, or specific performance action, our network covers every type of civil litigation under the Code of Civil Procedure, 1908 (CPC). Civil law in India governs disputes between individuals, organizations, and institutions over rights, obligations, and liabilities — and our advocates have decades of combined experience handling these matters end-to-end. Book a paid case assessment in 60 seconds.",
      "Civil disputes in India can range from relatively straightforward money recovery suits to extraordinarily complex multi-party property litigation spanning generations. Indian civil courts follow a well-defined hierarchy\u2014from the courts of Civil Judges (Junior and Senior Division) at the district level, through the District Courts, up to the High Courts and ultimately the Supreme Court of India. Our legal team is well-versed in all stages of civil litigation, including the filing of plaints, written statements, interim applications for injunctions and attachments, examination of witnesses, arguments on merits, and execution of decrees.",
      "Beyond traditional courtroom litigation, we also advise clients on pre-litigation strategies such as sending legal notices under Order VII of CPC, exploring settlement possibilities through Lok Adalats and mediation centres, and pursuing alternative remedies where appropriate. Our approach combines aggressive advocacy with pragmatic counsel\u2014we believe that the best legal outcome is one that protects your rights while minimizing unnecessary time and expense."
    ],
    keyLegislation: [
      "Code of Civil Procedure, 1908 (CPC)",
      "Indian Contract Act, 1872",
      "Specific Relief Act, 1963",
      "Transfer of Property Act, 1882",
      "Limitation Act, 1963",
      "Indian Succession Act, 1925",
      "Partition Act, 1893",
      "Court Fees Act, 1870"
    ],
    serviceDetails: [
      {
        title: "Property Disputes & Title Verification",
        description: "We handle complex property disputes including ownership conflicts, boundary disagreements, encroachment matters, and title challenges. Our team conducts thorough title searches at the Sub-Registrar's office and revenue records to establish clear chains of ownership."
      },
      {
        title: "Landlord-Tenant Disputes",
        description: "Representation in eviction proceedings, rent arrears recovery, unauthorized subletting cases, and disputes under state-specific Rent Control Acts. We assist both landlords seeking possession and tenants defending their statutory rights."
      },
      {
        title: "Contract Disputes & Breach of Contract",
        description: "Pursuing or defending claims arising from contractual breaches, including claims for damages, specific performance under the Specific Relief Act, and injunctive relief to prevent irreparable harm during the pendency of litigation."
      },
      {
        title: "Money Recovery & Debt Collection",
        description: "Filing and prosecuting money recovery suits, summary suits under Order XXXVII of CPC for expedited recovery, and execution proceedings to enforce decrees through attachment, garnishment, and sale of debtor's assets."
      },
      {
        title: "Injunctions & Declaratory Suits",
        description: "Obtaining temporary, permanent, and mandatory injunctions to protect our clients' legal rights. We also file declaratory suits under the Specific Relief Act to establish legal status, rights, or character of property."
      },
      {
        title: "Partition & Property Division",
        description: "Handling partition suits for joint family properties, co-owned properties, and ancestral estates. We ensure equitable division through court-appointed commissioners, valuations, and negotiated settlements wherever possible."
      },
      {
        title: "Succession & Inheritance Matters",
        description: "Advising on testamentary and intestate succession under the Indian Succession Act, Hindu Succession Act, and personal laws. We handle probate applications, letters of administration, and disputes over the validity of wills."
      },
      {
        title: "Specific Performance Actions",
        description: "Filing suits for specific performance of contracts, particularly in real estate transactions where monetary compensation is inadequate. We guide clients through the stringent requirements of readiness and willingness under the Specific Relief Act."
      }
    ],
    faqs: [
      {
        question: "How long does a civil case take in Indian courts?",
        answer: "The duration of a civil case in India varies significantly based on the complexity of the matter, the court's workload, and the conduct of parties. Simple money recovery suits may conclude within 1-2 years, while complex property disputes can take 5-10 years or more through all appellate stages. However, mechanisms like Lok Adalats, mediation, and summary suits under Order XXXVII CPC can substantially reduce timelines."
      },
      {
        question: "What is the limitation period for filing a civil suit in India?",
        answer: "Under the Limitation Act, 1963, different types of civil suits have different limitation periods. For example, suits for recovery of money based on a contract must be filed within 3 years, suits for possession of immovable property within 12 years, and suits based on a registered document within 3 years. Filing beyond the limitation period typically results in the suit being time-barred unless condonation of delay is granted."
      },
      {
        question: "What is the difference between a temporary and permanent injunction?",
        answer: "A temporary (interim) injunction under Order XXXIX of CPC is granted during the pendency of a suit to preserve the status quo and prevent irreparable harm until the final hearing. A permanent injunction under Section 38 of the Specific Relief Act is granted as part of the final decree after full trial, permanently restraining a party from doing a specified act. The court considers factors like prima facie case, balance of convenience, and irreparable injury."
      },
      {
        question: "Can I file a civil case online in India?",
        answer: "Yes, following the e-Courts initiative by the Supreme Court of India, many district courts and High Courts now accept e-filing of civil suits. The eFiling portal allows advocates and litigants-in-person to file plaints, applications, and documents electronically. However, the availability and extent of e-filing varies by state and court, and certain original documents may still need to be physically presented."
      },
      {
        question: "What court fees are applicable for filing a civil suit in India?",
        answer: "Court fees in India are governed by the Court Fees Act, 1870, and respective state amendments. For suits involving money claims, ad valorem court fees (a percentage of the claimed amount) are payable. For declaratory suits, fixed court fees apply. The percentage varies by state\u2014typically ranging from 1% to 10% of the suit value. Indigent persons can apply for fee exemption under Order XXXIII of CPC."
      }
    ],
    relevantCourts: [
      "Supreme Court of India",
      "High Courts (25 across India)",
      "District Courts & Civil Judge Courts",
      "Small Causes Courts",
      "Lok Adalats & Mediation Centres"
    ],
    highlights: [
      { stat: "700+", label: "District Courts across India" },
      { stat: "25", label: "High Courts with civil jurisdiction" },
      { stat: "3 Years", label: "General limitation for contract suits" },
      { stat: "100%", label: "Pan-India coverage through our network" }
    ],
    commonProblems: [
      "Property title disputes, boundary disagreements, and encroachment by neighbours",
      "Breach of contract — non-payment, non-delivery, or non-performance of agreed terms",
      "Money recovery from individuals, businesses, or defaulting borrowers",
      "Landlord-tenant disputes — eviction, unpaid rent, illegal subletting",
      "Partition of joint family or co-owned property",
      "Specific performance of a sale agreement where the seller refuses to honour the deal",
      "Injunctions to stop unauthorised construction, sale, or transfer",
      "Succession, inheritance, and probate disputes over wills"
    ],
    legalProcess: [
      { step: "Pre-litigation legal notice", description: "Send a demand notice under Section 80 CPC (or Order VII as applicable) calling on the opposite party to perform — many disputes settle here without filing.", durationHint: "7–30 days" },
      { step: "Drafting and filing the plaint", description: "Plaint is drafted with cause of action, relief sought, schedule of property/documents, and court-fee valuation. Filed at the court of competent territorial and pecuniary jurisdiction.", durationHint: "1–2 weeks" },
      { step: "Service of summons and written statement", description: "Court issues summons to the defendant who must file a written statement (denial / admission) within 30 days, extendable to 90.", durationHint: "30–90 days" },
      { step: "Framing of issues", description: "Court identifies the disputed questions of fact and law that need adjudication.", durationHint: "1–2 hearings" },
      { step: "Evidence — examination-in-chief and cross-examination", description: "Plaintiff leads evidence by affidavit followed by oral cross-examination; defendant follows. Documents are formally proved and exhibited.", durationHint: "6–18 months" },
      { step: "Final arguments", description: "Counsel for both sides argue on the issues, supported by case law and statutory provisions.", durationHint: "2–6 hearings" },
      { step: "Judgment and decree", description: "Court pronounces judgment; decree is drawn up. Either party can appeal under Section 96 CPC within 30 days (district) or 90 days (HC).", durationHint: "Within 30 days of arguments" },
      { step: "Execution of decree", description: "Decree-holder files execution petition under Order XXI CPC to enforce — through attachment, sale, or possession.", durationHint: "6 months – several years" }
    ],
    requiredDocuments: [
      "Identity proof (Aadhaar / PAN / Passport) of plaintiff and defendant",
      "Address proof for jurisdiction (utility bill, ration card, registered lease)",
      "All agreements, contracts, MoUs, and correspondence relating to the dispute",
      "Title deeds, sale deeds, gift deeds, or chain of ownership for property matters",
      "Bank statements, payment receipts, cheques (and dishonour memos if any)",
      "Demand notice and proof of service (RPAD acknowledgement / courier POD)",
      "Encumbrance certificate and revenue records for immovable property",
      "Photographs, site plans, and survey reports for boundary / encroachment issues",
      "Death certificate, succession certificate, or probate for inheritance matters",
      "List of witnesses with their affidavits in support",
      "Court-fee receipt / e-stamp papers as per state valuation rules",
      "Vakalatnama (lawyer's authorisation) executed in favour of the advocate"
    ],
    timeline: [
      { stage: "Filing to first hearing", duration: "1–3 months" },
      { stage: "Pleadings & framing of issues", duration: "3–6 months" },
      { stage: "Evidence & cross-examination", duration: "6–24 months" },
      { stage: "Arguments to judgment", duration: "2–6 months" }
    ],
    outboundReferences: [
      { label: "Code of Civil Procedure, 1908 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2191", source: "India Code (indiacode.nic.in)" },
      { label: "Limitation Act, 1963 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1554", source: "India Code" },
      { label: "Specific Relief Act, 1963 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1547", source: "India Code" },
      { label: "Supreme Court of India — judgements portal", url: "https://main.sci.gov.in/judgments", source: "sci.gov.in" },
      { label: "eCourts case status lookup", url: "https://services.ecourts.gov.in/ecourtindia_v6/", source: "ecourts.gov.in" }
    ]
  },

  "criminal-law": {
    detailedOverview: [
      "Need the best criminal lawyer in India? NyaySevak connects you with verified criminal defence advocates for bail, anticipatory bail, FIR quashing, trial defence, and appeals across the Supreme Court, High Courts, Sessions Courts, and Magistrate's Courts. Our criminal lawyers handle every offence type \u2014 economic offences, NDPS cases, PMLA defence, POCSO matters, organised crime, cyber-crime, and offences against women and children \u2014 under both the legacy IPC/CrPC framework and the new Bharatiya Nyaya Sanhita (BNS) 2023, Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023, and Bharatiya Sakshya Adhiniyam (BSA) 2023. Paid case assessment, available round-the-clock for urgent bail matters.",
      "From the moment an FIR is registered at the police station to the final appellate hearing before the Supreme Court, criminal proceedings in India follow a rigorous procedural path involving investigation, charge-sheeting, bail hearings, framing of charges, examination of prosecution and defense witnesses, arguments, judgment, and sentencing. Our team of experienced criminal lawyers handles the full spectrum\u2014from securing anticipatory bail to prevent wrongful arrest, to defending complex trials involving economic offences, organized crime, cyber-crime, and offences against women and children.",
      "We understand that being accused of a criminal offence is one of the most stressful experiences a person can face. Our approach prioritizes protecting our clients' fundamental rights under Articles 20, 21, and 22 of the Constitution of India, including the right against self-incrimination, the right to a fair trial, and the right to legal counsel. We meticulously analyze evidence, challenge procedural irregularities, cross-examine witnesses effectively, and build compelling defenses tailored to each case's unique facts."
    ],
    keyLegislation: [
      "Bharatiya Nyaya Sanhita (BNS), 2023 (replaced Indian Penal Code, 1860)",
      "Bharatiya Nagarik Suraksha Sanhita (BNSS), 2023 (replaced CrPC, 1973)",
      "Bharatiya Sakshya Adhiniyam (BSA), 2023 (replaced Indian Evidence Act, 1872)",
      "Prevention of Corruption Act, 1988",
      "Narcotic Drugs and Psychotropic Substances (NDPS) Act, 1985",
      "Protection of Children from Sexual Offences (POCSO) Act, 2012",
      "SC/ST (Prevention of Atrocities) Act, 1989",
      "Prevention of Money Laundering Act (PMLA), 2002"
    ],
    serviceDetails: [
      {
        title: "Bail Applications (Regular, Anticipatory, Interim)",
        description: "We file and argue bail applications at all levels\u2014from the Magistrate's court to the Supreme Court. For anticipatory bail under Section 482 BNSS (formerly Section 438 CrPC), we prepare detailed applications demonstrating absence of flight risk and willingness to cooperate with investigation."
      },
      {
        title: "FIR Filing & Quashing",
        description: "Assistance in lodging FIRs at police stations, filing complaints under Section 200 BNSS before Magistrates when police refuse to register FIRs, and pursuing quashing of FIRs under Section 528 BNSS (formerly Section 482 CrPC) before the High Court when cases are frivolous or malicious."
      },
      {
        title: "Criminal Trial Defense",
        description: "Full-spectrum trial representation including cross-examination of prosecution witnesses, presenting defense evidence, filing discharge applications at the charge stage, and making final arguments. We handle sessions trials, warrant cases, and summons cases across all criminal courts."
      },
      {
        title: "White-Collar Crime Defense",
        description: "Defense in cases involving financial fraud, embezzlement, cheating, forgery, corporate fraud, and offences under the Prevention of Corruption Act and PMLA. We work with forensic accountants and digital experts to build robust defenses."
      },
      {
        title: "Cyber-Crime Matters",
        description: "Representation in cases involving hacking, identity theft, online fraud, phishing, cyber stalking, and data theft under the Information Technology Act, 2000 and the new BNS provisions. We assist in both filing complaints and defending against cyber-crime allegations."
      },
      {
        title: "Domestic Violence & 498A Cases",
        description: "Defending persons accused under Section 85/86 BNS (formerly 498A IPC) for cruelty to married women, as well as representing victims under the Protection of Women from Domestic Violence Act, 2005. We approach these sensitive matters with discretion and legal precision."
      },
      {
        title: "Criminal Appeals & Revisions",
        description: "Filing criminal appeals before Sessions Courts, High Courts, and the Supreme Court challenging convictions, acquittals, or sentencing. We also pursue criminal revision petitions to correct jurisdictional errors or procedural irregularities by lower courts."
      }
    ],
    faqs: [
      {
        question: "What is the difference between a bailable and non-bailable offence in India?",
        answer: "Under the BNSS (and formerly the CrPC), bailable offences are generally less serious crimes where the accused has a right to be released on bail by the police or the court. Non-bailable offences are more serious crimes (such as murder, robbery, or offences punishable with imprisonment of 3 years or more) where bail is at the court's discretion. Even in non-bailable offences, bail can be granted based on factors like the nature of the accusation, severity of punishment, and likelihood of the accused fleeing."
      },
      {
        question: "How do I file an FIR if the police refuse to register it?",
        answer: "If the police refuse to register your FIR, you have several remedies under Indian law. You can approach the Superintendent of Police with a written complaint under Section 173(4) BNSS. Alternatively, you can file a private complaint directly before the Judicial Magistrate under Section 200 BNSS, who may direct the police to investigate. You can also file a writ petition before the High Court under Article 226 of the Constitution seeking a direction to register the FIR."
      },
      {
        question: "What is anticipatory bail and when should I apply for it?",
        answer: "Anticipatory bail under Section 482 BNSS (formerly Section 438 CrPC) is a pre-arrest bail that protects a person from being arrested in connection with a non-bailable offence. You should apply for anticipatory bail when you have reason to believe that you may be falsely implicated or arrested in a criminal case. The application is filed before the Sessions Court or the High Court, and the court considers factors like the nature of the accusation, the applicant's antecedents, and the possibility of the applicant fleeing from justice."
      },
      {
        question: "What are the new criminal laws in India that replaced the IPC and CrPC?",
        answer: "India enacted three new criminal statutes in 2023 that came into force on July 1, 2024: the Bharatiya Nyaya Sanhita (BNS) replacing the Indian Penal Code, 1860; the Bharatiya Nagarik Suraksha Sanhita (BNSS) replacing the Code of Criminal Procedure, 1973; and the Bharatiya Sakshya Adhiniyam (BSA) replacing the Indian Evidence Act, 1872. These new codes introduce provisions for electronic evidence, zero FIR, mandatory forensic investigation for offences carrying 7+ years imprisonment, and timelines for trials and judgments."
      },
      {
        question: "Can a criminal case be settled or compromised in India?",
        answer: "Yes, certain criminal cases can be compounded (settled) under Section 359 BNSS (formerly Section 320 CrPC). Offences listed in the compounding table can be settled with the permission of the court or even without it, depending on the offence. Additionally, the High Court can quash criminal proceedings under Section 528 BNSS if parties have settled the matter, particularly in matrimonial and commercial disputes. However, serious offences like murder, rape, and offences against the State cannot be compounded."
      }
    ],
    relevantCourts: [
      "Supreme Court of India",
      "High Courts (Criminal Jurisdiction)",
      "Sessions Courts",
      "Magistrate Courts (JMFC, CJM, CMM)",
      "Special Courts (NDPS, PMLA, POCSO, NIA)"
    ],
    highlights: [
      { stat: "24 Hours", label: "Maximum time to produce accused before Magistrate" },
      { stat: "3", label: "New criminal codes effective from July 2024" },
      { stat: "90 Days", label: "Default chargesheet filing deadline" },
      { stat: "1000+", label: "Criminal courts across India" }
    ],
    commonProblems: [
      "Anticipated arrest under a false complaint — need for anticipatory bail",
      "FIR registered against you and the police seeking custodial interrogation",
      "Regular bail rejected by Magistrate / Sessions and need for High Court bail",
      "FIR or charge-sheet that should be quashed — frivolous / vexatious / barred by law",
      "Defending economic offences — PMLA, ED, CBI, GST evasion, NDPS cases",
      "498A / dowry / domestic violence allegations against you or your family",
      "Cheque bounce prosecution under Section 138 NI Act",
      "POCSO, cyber, and offences against women requiring specialised defence",
      "Appeal or revision against a conviction by Magistrate, Sessions, or High Court"
    ],
    legalProcess: [
      { step: "FIR or complaint stage", description: "Either an FIR is registered under Section 173 BNSS / Section 154 CrPC at the police station, or a private complaint is filed before the Magistrate under Section 223 BNSS / Section 200 CrPC.", durationHint: "Same day" },
      { step: "Investigation and arrest", description: "Police investigate, record statements, gather evidence, and may arrest. Anticipatory bail under Section 482 BNSS / Section 438 CrPC can be sought before arrest.", durationHint: "24 hours – 60 days" },
      { step: "Production before Magistrate & remand", description: "Arrestee must be produced within 24 hours. Magistrate decides judicial / police custody. Regular bail under Section 480/483 BNSS / Section 437/439 CrPC can be moved.", durationHint: "Within 24 hours" },
      { step: "Chargesheet / final report", description: "Police file chargesheet within 60 or 90 days (depending on offence). If not filed in time, default bail under Section 187(3) BNSS / Section 167(2) CrPC is granted.", durationHint: "60–90 days" },
      { step: "Framing of charges", description: "Court considers material on record and frames charges; accused pleads guilty or not guilty.", durationHint: "1–3 months" },
      { step: "Prosecution evidence & cross-examination", description: "Prosecution witnesses examined and cross-examined; documents and seized articles exhibited.", durationHint: "6–24 months" },
      { step: "Defence statement and evidence", description: "Statement of accused recorded under Section 351 BNSS / Section 313 CrPC; defence witnesses examined.", durationHint: "1–3 months" },
      { step: "Arguments and judgment", description: "Counsel argue on merits; court pronounces judgment — acquittal, conviction, or discharge. Appeal lies to Sessions / High Court / Supreme Court.", durationHint: "1–6 months" }
    ],
    requiredDocuments: [
      "Copy of the FIR / complaint / NCR with FIR number and police station details",
      "Identity proof (Aadhaar, PAN, Passport) of accused and complainant",
      "Address proof for verification of bail surety",
      "Medical records — MLC, post-mortem report, injury certificates where relevant",
      "All statements recorded by police under Section 180 BNSS / Section 161 CrPC",
      "Chargesheet, list of witnesses, and seizure memos",
      "Bank statements, GST records, ITRs where economic offences are alleged",
      "Call detail records (CDRs), CCTV footage, digital evidence",
      "Bail bonds, surety affidavits, sureties' solvency proof",
      "Vakalatnama executed in favour of the criminal advocate",
      "Passport (for surrender / production direction during bail)",
      "Previous criminal antecedents / clearance certificate if any"
    ],
    timeline: [
      { stage: "Bail application & decision", duration: "1–4 weeks" },
      { stage: "Investigation & chargesheet", duration: "60–90 days" },
      { stage: "Trial — framing of charges to judgment", duration: "1–4 years" },
      { stage: "Appeal to High Court / Supreme Court", duration: "1–5 years" }
    ],
    outboundReferences: [
      { label: "Bharatiya Nyaya Sanhita, 2023 — full text", url: "https://www.indiacode.nic.in/handle/123456789/20062", source: "India Code" },
      { label: "Bharatiya Nagarik Suraksha Sanhita, 2023", url: "https://www.indiacode.nic.in/handle/123456789/20064", source: "India Code" },
      { label: "Bharatiya Sakshya Adhiniyam, 2023", url: "https://www.indiacode.nic.in/handle/123456789/20063", source: "India Code" },
      { label: "Supreme Court bail judgements collection", url: "https://main.sci.gov.in/judgments", source: "sci.gov.in" },
      { label: "Prevention of Money Laundering Act, 2002", url: "https://www.indiacode.nic.in/handle/123456789/2036", source: "India Code" }
    ]
  },

  "family-matrimonial": {
    detailedOverview: [
      "Looking for the best divorce lawyer or family lawyer in India? NyaySevak connects you with verified matrimonial advocates for mutual-consent and contested divorce, child custody, maintenance, alimony, domestic violence protection, and 498A / dowry harassment defence \u2014 across Family Courts in every major Indian city. Our family lawyers handle cases under the Hindu Marriage Act 1955, Special Marriage Act 1954, Muslim personal law, Indian Divorce Act 1869, and the Parsi Marriage and Divorce Act 1936, with sensitivity to the religious and cultural dimensions every matrimonial matter carries. Whether you need a divorce lawyer near you, a child custody specialist, or protection under the Protection of Women from Domestic Violence Act 2005, book a paid case assessment today.",
      "Matrimonial disputes are among the most emotionally charged legal matters, involving not just the dissolution of a marriage but also critical issues of child custody, maintenance, division of assets, and domestic violence protection. Our team understands that behind every case file is a family in crisis, and we approach each matter with the compassion it deserves while maintaining fierce advocacy for our clients' legal rights. We have extensive experience in both contested and mutual consent divorces, complex custody battles, and high-value maintenance and alimony proceedings.",
      "Beyond divorce and separation, our family law practice encompasses adoption proceedings under the Juvenile Justice Act and the Hindu Adoptions and Maintenance Act, guardianship petitions under the Guardians and Wards Act, 1890, marriage registration, second marriage validity issues, NRI matrimonial disputes, and inter-country child custody matters under the Hague Convention principles. We also handle protection orders under the Protection of Women from Domestic Violence Act, 2005, and defend against false matrimonial complaints."
    ],
    keyLegislation: [
      "Hindu Marriage Act, 1955",
      "Hindu Succession Act, 1956 (as amended in 2005)",
      "Special Marriage Act, 1954",
      "Protection of Women from Domestic Violence Act, 2005",
      "Guardians and Wards Act, 1890",
      "Hindu Adoptions and Maintenance Act, 1956",
      "Family Courts Act, 1984",
      "Muslim Women (Protection of Rights on Marriage) Act, 2019"
    ],
    serviceDetails: [
      {
        title: "Divorce (Mutual Consent & Contested)",
        description: "We guide clients through both mutual consent divorce under Section 13B of the Hindu Marriage Act (with its mandatory 6-month cooling-off period, which can be waived) and contested divorce proceedings based on grounds such as cruelty, adultery, desertion, mental disorder, or irretrievable breakdown of marriage."
      },
      {
        title: "Child Custody & Guardianship",
        description: "Representation in custody battles where the paramount consideration is the welfare of the child. We handle applications for sole custody, joint custody, visitation rights, and guardianship petitions under the Guardians and Wards Act, 1890, including cases involving NRI parents and inter-country custody disputes."
      },
      {
        title: "Maintenance & Alimony",
        description: "Securing interim and permanent maintenance for spouses and children under Section 125 BNSS (formerly CrPC), the Hindu Adoptions and Maintenance Act, and the Domestic Violence Act. We also defend against excessive maintenance claims and negotiate lump-sum alimony settlements."
      },
      {
        title: "Adoption Proceedings",
        description: "Facilitating legal adoptions under the Hindu Adoptions and Maintenance Act for Hindus and the Juvenile Justice (Care and Protection of Children) Act, 2015 for all communities. We handle CARA (Central Adoption Resource Authority) registrations, court applications, and inter-country adoption compliance."
      },
      {
        title: "Marriage Registration",
        description: "Assisting with marriage registration under the Hindu Marriage Act or Special Marriage Act, including the 30-day notice period for special marriages, documentation requirements, and representation before the Marriage Registrar in case of objections."
      },
      {
        title: "Domestic Violence Protection",
        description: "Filing and defending applications under the Protection of Women from Domestic Violence Act, 2005, seeking protection orders, residence orders, monetary relief, and custody orders from the Magistrate's court. We also represent respondents against false or exaggerated DV complaints."
      },
      {
        title: "Restitution of Conjugal Rights",
        description: "Filing petitions under Section 9 of the Hindu Marriage Act for restitution of conjugal rights when one spouse has withdrawn from the other without reasonable excuse. This remedy is often used as a precursor to establishing grounds for divorce by the aggrieved spouse."
      }
    ],
    faqs: [
      {
        question: "How long does a mutual consent divorce take in India?",
        answer: "A mutual consent divorce under Section 13B of the Hindu Marriage Act typically takes 6-18 months. After filing the first motion petition, the court grants a mandatory 6-month cooling-off period (which can be waived by the Supreme Court or High Court in appropriate cases following the Amardeep Singh v. Harveen Kaur ruling). After the cooling-off period, the second motion is filed, and the divorce decree is granted if both parties reaffirm their consent."
      },
      {
        question: "How is child custody decided in Indian courts?",
        answer: "Indian courts decide child custody based on the paramount consideration of the 'welfare of the child' as established in Section 13 of the Hindu Minority and Guardianship Act, 1956 and the Guardians and Wards Act, 1890. Factors considered include the child's age (children under 5 are generally placed with the mother), emotional and educational needs, financial stability of each parent, the child's own preference (if old enough), and any history of domestic violence or substance abuse."
      },
      {
        question: "What is the maintenance amount a wife can claim in India?",
        answer: "There is no fixed formula for maintenance in India, but courts generally consider factors including the husband's income and assets, the wife's independent income and earning capacity, the standard of living during marriage, the number of dependents, and the duration of the marriage. As a general practice, courts have awarded interim maintenance ranging from 20% to 30% of the husband's net monthly income, though this varies significantly based on the facts of each case."
      },
      {
        question: "Can a husband file for divorce on grounds of cruelty in India?",
        answer: "Yes, under Section 13(1)(ia) of the Hindu Marriage Act, both husband and wife can file for divorce on the ground of cruelty. Cruelty can be physical or mental, and courts have recognized various forms including false criminal complaints (especially under Section 498A IPC/Section 85 BNS), dowry harassment, persistent denial of conjugal rights, and public humiliation. The husband must prove that the cruelty was of such a nature that it would be impossible to live together."
      },
      {
        question: "Is dowry demand still a criminal offence in India?",
        answer: "Yes, dowry demand remains a serious criminal offence in India. Under the Dowry Prohibition Act, 1961, giving or taking dowry is punishable with imprisonment of up to 5 years and a fine. Additionally, cruelty for dowry is punishable under Section 85/86 BNS (formerly Section 498A IPC) with imprisonment up to 3 years. If a bride dies within 7 years of marriage under suspicious circumstances related to dowry, it may be treated as dowry death under Section 80 BNS (formerly Section 304B IPC) carrying a minimum sentence of 7 years."
      }
    ],
    relevantCourts: [
      "Family Courts (established under Family Courts Act, 1984)",
      "District Courts (where no Family Court exists)",
      "High Courts (matrimonial appeals and writ jurisdiction)",
      "Supreme Court of India",
      "Magistrate Courts (Section 125 BNSS maintenance)"
    ],
    highlights: [
      { stat: "500+", label: "Family Courts operating across India" },
      { stat: "6 Months", label: "Cooling-off period in mutual consent divorce" },
      { stat: "7", label: "Personal laws governing different communities" },
      { stat: "100%", label: "Confidential case handling guaranteed" }
    ],
    commonProblems: [
      "Wanting a fast, low-conflict mutual-consent divorce (Section 13B HMA)",
      "Contested divorce on grounds of cruelty, desertion, or adultery",
      "Child custody, visitation rights, and inter-country custody under Hague principles",
      "Maintenance / alimony for spouse and minor children under Section 125 BNSS / DV Act / HAMA",
      "498A IPC / Section 85 BNS and dowry harassment complaints filed by either side",
      "Domestic violence protection orders under the DV Act 2005",
      "Restitution of conjugal rights or judicial separation",
      "Nullity of marriage / void marriage declaration",
      "NRI matrimonial disputes — jurisdiction, service abroad, foreign decree recognition",
      "Settlement deed enforcement and contempt for breach"
    ],
    legalProcess: [
      { step: "Initial counsel session and option analysis", description: "Lawyer assesses whether mutual-consent, contested, judicial separation, or DV Act route best suits the facts.", durationHint: "1–2 sittings" },
      { step: "Pre-litigation settlement deed (for MCD)", description: "Comprehensive settlement deed covering alimony, custody, asset division, withdrawal of criminal complaints. Signed by both spouses.", durationHint: "1–4 weeks" },
      { step: "Filing of petition before Family Court", description: "Joint petition under Section 13B(1) HMA for MCD or contested petition under Section 13 HMA / Section 27 SMA / Section 10 IDA as applicable.", durationHint: "1 week" },
      { step: "First motion / first hearing", description: "Statements recorded on oath, court notes preconditions and adjourns for cooling-off period or for service of summons.", durationHint: "1–3 months from filing" },
      { step: "Cooling-off period (Section 13B(2) — MCD only)", description: "Mandatory 6 months unless waived under Amardeep Singh v. Harveen Kaur (2017). Waiver applications can shave this down materially.", durationHint: "6 months (or waiver granted)" },
      { step: "Second motion / contested evidence stage", description: "For MCD, second motion confirms continued consent; decree pronounced. For contested, evidence-in-chief, cross-examination, arguments.", durationHint: "1 day (MCD) / 1–4 years (contested)" },
      { step: "Decree of divorce", description: "Court passes the decree. Becomes final after 30-day appeal period under Section 28 HMA. Spouses can remarry thereafter.", durationHint: "30 days after decree" },
      { step: "Post-decree formalities", description: "Mutation in PAN, passport, bank, immigration records; enforcement of alimony / custody terms via Section 125 BNSS or DV Act.", durationHint: "1–3 months" }
    ],
    requiredDocuments: [
      "Marriage certificate or proof of solemnisation (priest's certificate, photos, witness affidavits)",
      "PAN and Aadhaar of both spouses",
      "Address proof — passport, voter ID, registered lease, or utility bill",
      "4 passport-size photographs of each spouse",
      "Income tax returns (last 3 years) and salary slips for maintenance assessment",
      "Bank statements (last 12 months) of both spouses",
      "Birth certificates of all children",
      "List of movable and immovable property (with valuations) for asset division",
      "Mutual-consent settlement deed (for MCD) duly signed and notarised",
      "Medical certificates / cruelty evidence / DV evidence (for contested matters)",
      "Copies of any pending FIRs, DV applications, or maintenance applications",
      "Vakalatnama in favour of the family lawyer"
    ],
    timeline: [
      { stage: "Mutual-consent divorce (without waiver)", duration: "6–12 months" },
      { stage: "Mutual-consent divorce (with waiver)", duration: "2–4 months" },
      { stage: "Contested divorce — trial court", duration: "2–5 years" },
      { stage: "Appeal to High Court / SLP", duration: "2–4 additional years" }
    ],
    outboundReferences: [
      { label: "Hindu Marriage Act, 1955 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1560", source: "India Code" },
      { label: "Special Marriage Act, 1954 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1605", source: "India Code" },
      { label: "Protection of Women from Domestic Violence Act, 2005", url: "https://www.indiacode.nic.in/handle/123456789/2031", source: "India Code" },
      { label: "Amardeep Singh v. Harveen Kaur, (2017) 8 SCC 746", url: "https://main.sci.gov.in/judgments", source: "Supreme Court of India" },
      { label: "Family Courts Act, 1984", url: "https://www.indiacode.nic.in/handle/123456789/1827", source: "India Code" }
    ]
  },

  "property-real-estate": {
    detailedOverview: [
      "Looking for the best property lawyer in India? NyaySevak connects you with verified property law advocates for title verification, sale deed drafting, RERA complaints, builder-buyer disputes, partition suits, tenant eviction, and land acquisition matters \u2014 across the Supreme Court, 25 High Courts, RERA Tribunals, and 700+ District Sub-Registrar offices. Whether you need a property lawyer in Delhi for a builder dispute, in Bangalore for an A-khata/B-khata title check, in Mumbai for a CHS conveyance, or anywhere in India for stamp-duty and registration guidance, our advocates handle every type of real-estate matter under the Transfer of Property Act 1882, Registration Act 1908, and the Real Estate (Regulation and Development) Act 2016 (RERA). Book a case assessment in 60 seconds.",
      "India's real estate sector is one of the largest contributors to the GDP, and with increasing urbanization, property transactions have grown in both volume and complexity. Issues like unclear titles, benami (fictitious) ownership, encroachments, unauthorized constructions, delayed possession by builders, unfair agreements, and fraudulent registrations are endemic. Our team has deep expertise in conducting multi-layered title verification spanning 30+ years of ownership history, identifying encumbrances, liens, and pending litigation, and ensuring that our clients make fully informed property decisions.",
      "For homebuyers affected by delayed or stalled projects, we provide aggressive representation before RERA authorities, Appellate Tribunals, and the National Consumer Disputes Redressal Commission (NCDRC). For landowners facing acquisition, we ensure fair compensation under the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013. Our documentation services cover the entire lifecycle of property ownership\u2014from agreement to sell and sale deed drafting to mutation, property tax management, and estate planning through wills and trusts."
    ],
    keyLegislation: [
      "Transfer of Property Act, 1882",
      "Registration Act, 1908",
      "Real Estate (Regulation and Development) Act, 2016 (RERA)",
      "Indian Stamp Act, 1899 (and state-specific Stamp Acts)",
      "Right to Fair Compensation and Transparency in Land Acquisition Act, 2013",
      "Benami Transactions (Prohibition) Amendment Act, 2016",
      "Indian Easements Act, 1882",
      "Specific Relief Act, 1963"
    ],
    serviceDetails: [
      {
        title: "Property Title Verification & Due Diligence",
        description: "Comprehensive title search and due diligence covering 30+ years of ownership chain, verification at the Sub-Registrar's office, revenue records (7/12 extracts, khatauni, patta), encumbrance certificates, litigation search, and RERA compliance verification for new projects."
      },
      {
        title: "Sale Deed, Gift Deed & Lease Deed Drafting",
        description: "Professional drafting of all property transfer documents including sale deeds, gift deeds, lease and leave-and-license agreements, collaboration agreements, and joint development agreements. Each document is tailored to protect our client's interests and ensure compliance with applicable stamp duty and registration requirements."
      },
      {
        title: "Property Registration Assistance",
        description: "End-to-end support for property registration including stamp duty calculation, e-stamping, document preparation, biometric verification, and representation at the Sub-Registrar's office. We also handle post-registration formalities like mutation of revenue records and updating property tax records."
      },
      {
        title: "RERA Matters & Builder Disputes",
        description: "Filing complaints before RERA authorities for delayed possession, defective construction, deviation from sanctioned plans, refund of deposits with interest, and non-compliance with builder-buyer agreements. We handle matters before RERA authorities across all states and RERA Appellate Tribunals."
      },
      {
        title: "Land Acquisition Cases",
        description: "Representing landowners in acquisition proceedings under the Right to Fair Compensation Act, 2013, challenging inadequate compensation, filing references for enhancement before the Reference Court, and pursuing appeals. We also handle rehabilitation and resettlement claims for displaced families."
      },
      {
        title: "Will Registration & Probate",
        description: "Drafting legally sound wills, registering them at the Sub-Registrar's office, and filing probate applications before the competent court. We also handle contested probate proceedings, challenges to the validity of wills, and succession certificate applications for intestate estates."
      },
      {
        title: "Mortgage Documentation & Disputes",
        description: "Drafting and reviewing mortgage deeds, equitable mortgage documentation, and security interest creation documents. We represent borrowers in disputes with banks and financial institutions regarding mortgage enforcement, SARFAESI proceedings, and property auction challenges."
      },
      {
        title: "Tenant-Landlord & Rent Control Matters",
        description: "Advisory and litigation under state-specific Rent Control Acts, eviction petitions, fair rent determination, protection against illegal eviction, and handling matters before Rent Controllers and Appellate Authorities."
      }
    ],
    faqs: [
      {
        question: "How do I verify the title of a property before buying it in India?",
        answer: "Title verification involves multiple steps: obtaining certified copies of all registered documents from the Sub-Registrar's office for at least 30 years, checking revenue records (7/12 extract in Maharashtra, khatauni in UP, patta in Tamil Nadu), obtaining an encumbrance certificate from the registration authority, verifying approved building plans with the local municipal authority, checking for pending litigation in court records, and confirming RERA registration for under-construction properties. We strongly recommend engaging a lawyer for this process."
      },
      {
        question: "What is RERA and how does it protect homebuyers?",
        answer: "The Real Estate (Regulation and Development) Act, 2016 (RERA) is a landmark legislation that protects homebuyers by mandating registration of all residential projects above 500 sq. meters or 8 apartments, requiring builders to deposit 70% of project funds in an escrow account, prohibiting sale before RERA registration, ensuring timely delivery with interest for delays, and establishing a fast-track adjudication mechanism. Each state has its own RERA authority\u2014MahaRERA, UP-RERA, HRERA, etc."
      },
      {
        question: "What is stamp duty and registration charges for property in India?",
        answer: "Stamp duty is a state-level tax on property transactions, typically ranging from 3% to 8% of the property's market value or transaction value (whichever is higher). Registration charges are usually 1% of the property value, capped at a maximum amount in most states. Some states offer concessions for women buyers (e.g., Delhi charges 4% for women vs 6% for men). E-stamping and franking are the common methods for stamp duty payment, and payment must be made before or at the time of registration."
      },
      {
        question: "Can NRI buy property in India and what are the rules?",
        answer: "Yes, NRIs and PIOs can purchase residential and commercial property in India under the FEMA (Foreign Exchange Management Act) regulations and RBI guidelines. They can buy any number of residential or commercial properties but cannot purchase agricultural land, plantation property, or farmhouse without RBI permission. Payment must be made through NRE/NRO accounts or by inward remittance. Power of Attorney can be used for executing the transaction in absentia."
      },
      {
        question: "What should I do if a builder delays possession of my flat?",
        answer: "If a builder delays possession beyond the promised date, you have multiple remedies: file a complaint with the state RERA authority seeking either refund with interest or possession with delay compensation (typically at SBI's highest lending rate plus 2%); file a consumer complaint before the Consumer Forum; or pursue a civil suit for specific performance or damages. Under RERA, the builder is liable to pay interest for every month of delay from the promised possession date."
      }
    ],
    relevantCourts: [
      "State RERA Authorities & RERA Appellate Tribunals",
      "Civil Courts & District Courts",
      "High Courts",
      "Revenue Courts (Tehsildar, Sub-Divisional Officer, Commissioner)",
      "Consumer Disputes Redressal Commissions"
    ],
    highlights: [
      { stat: "35+", label: "State/UT RERA authorities established" },
      { stat: "30 Years", label: "Minimum title search period we recommend" },
      { stat: "70%", label: "Funds builders must keep in RERA escrow" },
      { stat: "100K+", label: "RERA complaints resolved across India" }
    ],
    commonProblems: [
      "Builder delaying possession or refusing refund / interest under RERA",
      "Defective title — unclear chain of ownership, missing mother deed, or benami links",
      "Boundary disputes, encroachment by neighbours, or illegal constructions",
      "Tenant refusing to vacate or paying below market / agreed rent",
      "Partition of joint family / ancestral / co-owned property",
      "Unauthorised sale by joint owner / power-of-attorney holder",
      "Land acquisition with inadequate compensation under the 2013 Act",
      "Stamp-duty undervaluation notice and reassessment proceedings",
      "Mutation, khata transfer, or property-tax disputes with municipality",
      "Society / RWA disputes — share transfer, NOC refusal, parking allotment"
    ],
    legalProcess: [
      { step: "Title due diligence (pre-purchase)", description: "30-year title search at Sub-Registrar, encumbrance certificate, revenue records, search at Registrar of Companies if seller is a corporate, and search at the relevant municipal body.", durationHint: "1–3 weeks" },
      { step: "Drafting agreement to sell / sale deed", description: "Lawyer drafts an Agreement to Sell (registered or notarised) followed by the Sale Deed with full description of property, consideration, payment terms, possession date, and indemnity clauses.", durationHint: "1–2 weeks" },
      { step: "Stamp duty payment and registration", description: "Stamp duty computed under state-specific rates; payment via e-stamp / SHCIL. Document presented at Sub-Registrar within 4 months for registration under Section 17 Registration Act.", durationHint: "Same day to 4 months" },
      { step: "Mutation / khata transfer", description: "Update municipal records (khata, property tax, electricity / water connections) in the new owner's name post-registration.", durationHint: "1–3 months" },
      { step: "RERA / consumer / civil filing (for disputes)", description: "Builder dispute → RERA complaint at state authority; partition / title / specific performance → civil suit; tenant eviction → Rent Control Court.", durationHint: "1 month to file" },
      { step: "Hearings, evidence, and interim relief", description: "Notice to opposite party, pleadings, interim injunction or status-quo orders to prevent transfer / construction. Evidence leads to final order.", durationHint: "6 months – 3 years" },
      { step: "Final order / decree", description: "RERA orders are time-bound (60–120 days). Civil decrees take longer. Appeal lies to RERA Appellate Tribunal / NCDRC / HC.", durationHint: "Varies by forum" },
      { step: "Execution / enforcement", description: "Refund recovery, possession delivery, or partition through court commissioner.", durationHint: "6 months – several years" }
    ],
    requiredDocuments: [
      "Sale deed / title deed / gift deed of the property (and parent deeds for 30-year chain)",
      "Encumbrance certificate (EC) for the last 30 years from Sub-Registrar",
      "Property tax receipts and latest khata / patta / 7/12 extract",
      "Approved building plan and occupancy certificate (OC) from municipal body",
      "RERA registration certificate of the project (for under-construction property)",
      "NOC from society / RWA / housing co-operative (for transfer)",
      "Identity and address proof of buyer and seller (Aadhaar, PAN, passport)",
      "Builder-buyer agreement, payment receipts, demand letters",
      "Possession letter, allotment letter, and conveyance deed (where applicable)",
      "Power of attorney (if executed through a POA holder)",
      "Indemnity bond and affidavit confirming title is clear",
      "Photographs, site plan, and survey number details"
    ],
    timeline: [
      { stage: "Title due diligence", duration: "2–4 weeks" },
      { stage: "Registration & mutation", duration: "1–3 months" },
      { stage: "RERA complaint to order", duration: "60–180 days" },
      { stage: "Civil property suit (with appeal)", duration: "5–15 years" }
    ],
    outboundReferences: [
      { label: "Transfer of Property Act, 1882 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2338", source: "India Code" },
      { label: "Real Estate (Regulation and Development) Act, 2016", url: "https://www.indiacode.nic.in/handle/123456789/2158", source: "India Code" },
      { label: "Registration Act, 1908 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2168", source: "India Code" },
      { label: "MahaRERA online portal (Maharashtra)", url: "https://maharera.maharashtra.gov.in/", source: "maharera.maharashtra.gov.in" },
      { label: "Indian Stamp Act, 1899 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2304", source: "India Code" }
    ]
  },

  "corporate-business": {
    detailedOverview: [
      "Corporate and business law in India is governed primarily by the Companies Act, 2013, the Limited Liability Partnership Act, 2008, and a comprehensive framework of regulations enforced by the Ministry of Corporate Affairs (MCA), the Securities and Exchange Board of India (SEBI), the Reserve Bank of India (RBI), and the Competition Commission of India (CCI). At NyaySevak, our corporate law practice supports businesses at every stage\u2014from initial incorporation and structuring through growth-stage compliance, fundraising, and strategic transactions to restructuring and winding up.",
      "India's business environment has been transformed by regulatory reforms including the introduction of the Insolvency and Bankruptcy Code, 2016, the GST regime, the liberalization of FDI norms, and the push toward ease of doing business through initiatives like SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus). Our team stays current with every regulatory development to provide our clients with proactive, strategic counsel that minimizes risk and maximizes opportunity. We work with startups, SMEs, family-owned businesses, and large corporations across sectors.",
      "Our corporate advisory practice extends beyond routine compliance to include complex commercial contract negotiation, joint venture structuring, mergers and acquisitions, private equity and venture capital transactions, FEMA compliance for cross-border investments, related party transaction governance, and corporate governance advisory under the SEBI LODR Regulations. We also represent clients before the National Company Law Tribunal (NCLT) and the National Company Law Appellate Tribunal (NCLAT) in matters involving oppression and mismanagement, corporate insolvency, and company scheme approvals."
    ],
    keyLegislation: [
      "Companies Act, 2013",
      "Limited Liability Partnership Act, 2008",
      "Indian Partnership Act, 1932",
      "Foreign Exchange Management Act (FEMA), 1999",
      "Securities and Exchange Board of India Act, 1992",
      "Insolvency and Bankruptcy Code (IBC), 2016",
      "Competition Act, 2002",
      "SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015"
    ],
    serviceDetails: [
      {
        title: "Company Incorporation (Pvt Ltd, LLP, OPC, Partnership)",
        description: "End-to-end incorporation services including entity structure advisory, name reservation, DSC and DIN procurement, SPICe+ filing, MOA and AOA drafting, GSTIN and PAN registration, and opening of corporate bank accounts. We help entrepreneurs choose the right structure based on their business model, funding plans, and compliance appetite."
      },
      {
        title: "MCA Compliance & Annual Filings",
        description: "Ongoing statutory compliance management including preparation and filing of annual returns (MGT-7/MGT-7A), financial statements (AOC-4), board resolutions, appointment and resignation of directors (DIR-12), changes in registered office, increase in authorized capital, and all event-based filings with the Registrar of Companies."
      },
      {
        title: "Shareholder Agreements & Joint Ventures",
        description: "Drafting and negotiating comprehensive shareholder agreements covering equity split, voting rights, anti-dilution protections, drag-along and tag-along rights, board composition, ROFR clauses, exit mechanisms, and dispute resolution. We also structure joint ventures with clear governance frameworks and profit-sharing arrangements."
      },
      {
        title: "Commercial Contracts",
        description: "Drafting, reviewing, and negotiating a wide range of commercial contracts including service agreements, supply agreements, distribution agreements, franchise agreements, licensing agreements, NDAs, and SLAs. We ensure each contract is enforceable under the Indian Contract Act and protects our client's commercial interests."
      },
      {
        title: "Mergers & Acquisitions",
        description: "Full-service M&A support including target identification, due diligence, valuation, deal structuring, share purchase and asset purchase agreement drafting, NCLT scheme applications, regulatory approvals (CCI, RBI, SEBI), post-merger integration advisory, and stamp duty and tax optimization."
      },
      {
        title: "FEMA & FDI Compliance",
        description: "Advising on foreign direct investment regulations, sectoral caps, approval routes (automatic vs. government), downstream investment norms, external commercial borrowings, overseas direct investment, and reporting requirements under FEMA and RBI regulations. We assist with FC-GPR, FC-TRS, and other mandatory filings."
      },
      {
        title: "Startup Legal Support & Fundraising",
        description: "Specialized legal support for startups including DPIIT recognition, term sheet negotiation, convertible note and SAFE documentation, ESOP structuring under Companies Act, angel tax exemption applications, and compliance with the Companies (Acceptance of Deposits) Rules."
      },
      {
        title: "Company Winding Up & Striking Off",
        description: "Voluntary winding up under the Companies Act and IBC, striking off dormant companies through STK-2 applications, obtaining NOCs from regulatory authorities, managing creditor claims, and ensuring directors' compliance obligations are fully discharged before closure."
      }
    ],
    faqs: [
      {
        question: "What is the difference between a Private Limited Company and an LLP in India?",
        answer: "A Private Limited Company is governed by the Companies Act, 2013, has separate legal entity status, limited liability, and can raise equity funding from investors. An LLP (Limited Liability Partnership) under the LLP Act, 2008 combines the benefits of a partnership's operational flexibility with limited liability protection. Key differences include: companies face higher compliance burden (board meetings, AGMs, statutory audits for all), while LLPs require audit only if turnover exceeds Rs. 40 lakhs or contribution exceeds Rs. 25 lakhs. Companies can issue shares and attract VC/PE funding; LLPs cannot issue equity to investors."
      },
      {
        question: "How long does it take to incorporate a company in India?",
        answer: "With the SPICe+ (Simplified Proforma for Incorporating Company Electronically Plus) system introduced by MCA, company incorporation in India can be completed in 3-7 working days. The SPICe+ form integrates name reservation, incorporation, DIN allotment, PAN, TAN, GSTIN, EPFO, and ESIC registration into a single application. However, obtaining DSCs for directors, drafting the MOA and AOA, and preparing other incorporation documents typically requires 2-3 additional days of preparation."
      },
      {
        question: "What are the annual compliance requirements for a Private Limited Company?",
        answer: "A Private Limited Company must hold at least 4 board meetings per year (one in each quarter), conduct an AGM within 6 months of the financial year-end, file annual returns (MGT-7A) and financial statements (AOC-4) with the MCA, get accounts audited by a practicing Chartered Accountant, file income tax returns and GST returns, maintain statutory registers, and comply with various event-based filings. Non-compliance attracts penalties and can lead to director disqualification under Section 164(2) of the Companies Act."
      },
      {
        question: "Can a foreign company set up a business in India?",
        answer: "Yes, foreign companies can establish business in India through multiple routes: incorporating a wholly-owned subsidiary (most common), establishing a liaison/branch/project office with RBI approval, forming a joint venture with an Indian partner, or registering as a foreign company under Section 380 of the Companies Act. The choice depends on the business activity, FDI sectoral caps, regulatory requirements, and the level of control desired. Most sectors allow 100% FDI under the automatic route."
      },
      {
        question: "What is the Insolvency and Bankruptcy Code (IBC) and how does it affect companies?",
        answer: "The IBC, 2016 provides a time-bound process for resolving insolvency of companies and individuals. When a company defaults on a debt of Rs. 1 crore or more, creditors (financial or operational) or the company itself can file an application before the NCLT to initiate the Corporate Insolvency Resolution Process (CIRP). The CIRP must be completed within 330 days, during which a resolution plan is sought. If no viable plan emerges, the company goes into liquidation. The IBC has significantly improved India's insolvency resolution framework and creditor recovery rates."
      }
    ],
    relevantCourts: [
      "National Company Law Tribunal (NCLT) - 16 benches",
      "National Company Law Appellate Tribunal (NCLAT)",
      "Securities Appellate Tribunal (SAT)",
      "Competition Commission of India (CCI)",
      "High Courts (Company jurisdiction)"
    ],
    highlights: [
      { stat: "16", label: "NCLT benches across India" },
      { stat: "3-7 Days", label: "Company incorporation via SPICe+" },
      { stat: "100%", label: "FDI allowed in most sectors" },
      { stat: "330 Days", label: "Maximum IBC resolution timeline" }
    ],
    commonProblems: [
      "Need to incorporate a private limited / LLP / OPC / Section 8 company",
      "Shareholder dispute, oppression & mismanagement, or board deadlock",
      "Director resignation, removal, DIN deactivation, or disqualification",
      "MCA / ROC compliance backlog — annual returns, board reports, AOC-4 / MGT-7",
      "Cross-border investment — FDI route, RBI reporting, FC-GPR / FC-TRS filings",
      "M&A transaction — diligence, SPA / SHA / BTA drafting, CCI / SEBI / RBI approvals",
      "Insolvency / IBC proceedings — corporate debtor, financial / operational creditor",
      "SEBI investigation, listing-compliance notice, or insider-trading allegation",
      "Competition Commission complaint or cartel investigation",
      "Drafting and enforcing shareholder agreements, BTAs, and joint-venture agreements"
    ],
    legalProcess: [
      { step: "Structuring and entity choice", description: "Pvt Ltd vs LLP vs OPC vs Section 8 — choice depends on capital plans, liability appetite, investor expectations, and tax treatment.", durationHint: "1–2 sittings" },
      { step: "Name reservation (RUN / SPICe+ Part A)", description: "File RUN / SPICe+ Part A on MCA portal with up to two name choices; reservation valid for 20 days.", durationHint: "1–3 days" },
      { step: "Documentation and DSC / DIN", description: "Class-3 DSC for proposed directors; DIN allotted through SPICe+ Part B. KYC, address proof, MOA / AOA, declarations.", durationHint: "3–5 days" },
      { step: "Incorporation filing (SPICe+ Part B)", description: "Integrated form filed with MOA, AOA, INC-9, AGILE-PRO. PAN, TAN, EPFO, ESIC, GSTIN, and bank-account opening flow through the same submission.", durationHint: "3–7 days" },
      { step: "Post-incorporation compliance", description: "First board meeting, statutory registers, appointment of auditor (INC-22 + ADT-1), commencement of business (INC-20A within 180 days), shareholder agreement signing.", durationHint: "30–180 days" },
      { step: "Ongoing MCA compliance", description: "Annual ROC filings (AOC-4 financial statements, MGT-7 annual return), DIR-3 KYC, board meetings (4 per year), AGM (within 6 months of FY end).", durationHint: "Annual recurring" },
      { step: "Dispute / litigation route", description: "Oppression & mismanagement before NCLT under Sections 241–242 Companies Act; IBC under CIRP route; civil / commercial-court suit for contractual disputes; arbitration where the contract carries an arbitration clause.", durationHint: "Varies" },
      { step: "Closure / strike-off / winding-up", description: "Voluntary strike-off under Section 248 (Form STK-2) where conditions met; otherwise voluntary liquidation under IBC; compulsory winding-up by NCLT in fraud / public-interest cases.", durationHint: "3–18 months" }
    ],
    requiredDocuments: [
      "PAN, Aadhaar, and passport-size photographs of all directors / partners / members",
      "Address proof of directors (utility bill / bank statement, not older than 2 months)",
      "Registered-office address proof and NOC from owner",
      "MOA and AOA drafted to the company's object clause",
      "Class-3 Digital Signature Certificate (DSC) for each director",
      "DIN application for proposed directors (if not already allotted)",
      "Declaration in form INC-9 by each subscriber",
      "Shareholder agreement / joint-venture agreement (where applicable)",
      "Share certificate format, register of members, board minutes book",
      "Auditor consent letter and certificate of practice",
      "PAN / TAN / GST registration documents (post-incorporation)",
      "FEMA filings (FC-GPR, FC-TRS) for foreign investment"
    ],
    timeline: [
      { stage: "Incorporation (SPICe+)", duration: "3–10 days" },
      { stage: "Post-incorporation setup", duration: "30–60 days" },
      { stage: "Annual ROC compliance cycle", duration: "Recurring 12 months" },
      { stage: "M&A / IBC / NCLT litigation", duration: "330 days – 3 years" }
    ],
    outboundReferences: [
      { label: "Companies Act, 2013 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2114", source: "India Code" },
      { label: "MCA portal — SPICe+ incorporation", url: "https://www.mca.gov.in/", source: "mca.gov.in" },
      { label: "Insolvency and Bankruptcy Code, 2016", url: "https://www.indiacode.nic.in/handle/123456789/2154", source: "India Code" },
      { label: "SEBI regulations and circulars", url: "https://www.sebi.gov.in/legal/regulations", source: "sebi.gov.in" },
      { label: "Competition Act, 2002 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2025", source: "India Code" }
    ]
  },

  "labour-employment": {
    detailedOverview: [
      "Labour and employment law in India is undergoing a historic transformation with the consolidation of 29 central labour statutes into 4 comprehensive Labour Codes\u2014the Code on Wages, 2019; the Industrial Relations Code, 2020; the Code on Social Security, 2020; and the Occupational Safety, Health and Working Conditions Code, 2020. While the implementation of these codes is progressing state by state, the existing legislation continues to govern employer-employee relationships across organized and unorganized sectors. At NyaySevak, our labour and employment practice provides strategic counsel to both employers and employees navigating this evolving regulatory landscape.",
      "India's labour law framework is uniquely complex, with both central and state governments having concurrent jurisdiction over labour matters under the Constitution's Concurrent List. This results in a layered regulatory environment where employers must comply with central acts like the Factories Act, Industrial Disputes Act, and PF/ESI legislation, as well as state-specific Shops and Establishments Acts, rules under the Contract Labour Act, and local factory and building worker regulations. Our team has deep expertise in advising employers on compliance across multiple states and defending against regulatory enforcement actions.",
      "For employees, we provide robust representation in wrongful termination disputes, wage theft claims, workplace harassment cases under the POSH Act, discrimination matters, and industrial disputes. We handle proceedings before Labour Courts, Industrial Tribunals, PF Appellate Tribunals, ESI Courts, and the Central/State Labour Commissioners. Our practice also covers proactive advisory services including employment policy drafting, POSH compliance (including ICC constitution and annual reporting), HR audit support, and collective bargaining negotiation."
    ],
    keyLegislation: [
      "Industrial Disputes Act, 1947 / Industrial Relations Code, 2020",
      "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
      "Employees' State Insurance Act, 1948",
      "Payment of Gratuity Act, 1972",
      "Sexual Harassment of Women at Workplace (POSH) Act, 2013",
      "Minimum Wages Act, 1948 / Code on Wages, 2019",
      "Contract Labour (Regulation and Abolition) Act, 1970",
      "Factories Act, 1948 / OSH Code, 2020"
    ],
    serviceDetails: [
      {
        title: "Employment Contracts & HR Policy Drafting",
        description: "Drafting legally compliant employment contracts, offer letters, appointment letters, non-compete and non-solicitation agreements, confidentiality agreements, and comprehensive HR policies covering leave, discipline, grievance redressal, and termination procedures aligned with applicable labour laws."
      },
      {
        title: "Wrongful Termination & Retrenchment Cases",
        description: "Representing employees in claims of illegal termination, retrenchment without compliance with Section 25F of the Industrial Disputes Act, and constructive dismissal. For employers, we ensure that termination processes comply with principles of natural justice and statutory requirements to minimize litigation risk."
      },
      {
        title: "Industrial Disputes Resolution",
        description: "Handling disputes between employers and workmen/unions before Conciliation Officers, Labour Courts, and Industrial Tribunals. We manage issues including strikes and lockouts, unfair labour practices, standing orders certification, and reference of disputes to adjudicatory bodies."
      },
      {
        title: "PF, ESI & Gratuity Matters",
        description: "Advisory and litigation support covering EPF registration, compliance audits, assessment disputes, and appeals before the EPFAT (Employees' Provident Fund Appellate Tribunal). We also handle ESI contribution disputes, gratuity calculation challenges, and claims under the Payment of Gratuity Act."
      },
      {
        title: "POSH Act Compliance",
        description: "Comprehensive POSH Act compliance including constituting Internal Complaints Committees (ICC), drafting anti-sexual harassment policies, conducting awareness workshops, advising on complaint investigation procedures, preparing annual compliance reports (as mandated under Section 21), and representing parties in proceedings before the ICC or Local Complaints Committee."
      },
      {
        title: "Labour Law Advisory & Compliance Audits",
        description: "Conducting multi-state labour law compliance audits covering registration requirements, record-keeping obligations, wage and hour compliance, social security contributions, contract labour management, and factory/establishment licensing. We provide detailed compliance gap reports with remediation roadmaps."
      }
    ],
    faqs: [
      {
        question: "What are the new Labour Codes in India and when will they be implemented?",
        answer: "India has enacted four Labour Codes to consolidate 29 central labour laws: the Code on Wages, 2019; Industrial Relations Code, 2020; Code on Social Security, 2020; and Occupational Safety, Health and Working Conditions Code, 2020. The central government has published draft rules, and states are in the process of framing their own rules and notifying implementation dates. Key changes include a new definition of wages (affecting PF/ESI/gratuity calculations), a threshold of 300 workers for retrenchment without government permission, and fixed-term employment provisions."
      },
      {
        question: "What is the process for legal termination of an employee in India?",
        answer: "The process depends on whether the employee is classified as a 'workman' under the Industrial Disputes Act. For workmen, employers must follow Section 25F (one month's notice or pay, 15 days' wages per year of service as retrenchment compensation, and notice to the government). For managerial/supervisory employees, the employment contract terms govern. In both cases, principles of natural justice (show-cause notice, opportunity to be heard, reasoned order) must be followed to avoid claims of wrongful termination."
      },
      {
        question: "Is POSH compliance mandatory for all organizations in India?",
        answer: "Yes, the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 applies to every workplace with 10 or more employees. Every such organization must constitute an Internal Complaints Committee (ICC) with a presiding officer who is a senior woman employee, file an annual report with the District Officer, and display information about the Act at conspicuous places. Non-compliance can result in a penalty of up to Rs. 50,000 and cancellation of business license for repeated violations."
      },
      {
        question: "How is gratuity calculated in India?",
        answer: "Under the Payment of Gratuity Act, 1972, an employee who has completed 5 years of continuous service is entitled to gratuity upon resignation, retirement, death, or disability. The formula is: (Last drawn salary x 15 x number of years of service) / 26, where salary includes basic pay and dearness allowance. The maximum gratuity payable is Rs. 20 lakhs (as per the 2018 amendment). For piece-rated employees, the calculation is based on average wages for the last 3 months."
      },
      {
        question: "What are the EPF contribution rates and compliance requirements?",
        answer: "Under the EPF Act, establishments with 20 or more employees must register with the EPFO. Both employer and employee contribute 12% of basic wages plus dearness allowance. The employer's contribution is split: 8.33% to the Employee Pension Scheme (EPS) and 3.67% to the EPF. Employers must file monthly ECR (Electronic Challan cum Return), maintain prescribed registers, and ensure timely payment by the 15th of the following month. Delayed payment attracts interest at 12% per annum and damages up to 100% of arrears."
      }
    ],
    relevantCourts: [
      "Labour Courts & Industrial Tribunals",
      "Central/State Labour Commissioners",
      "Employees' Provident Fund Appellate Tribunal (EPFAT)",
      "ESI Courts",
      "High Courts (writ jurisdiction for labour matters)"
    ],
    highlights: [
      { stat: "4", label: "New Labour Codes consolidating 29 laws" },
      { stat: "12%", label: "EPF contribution rate (employer + employee)" },
      { stat: "Rs. 20L", label: "Maximum gratuity payable" },
      { stat: "10+", label: "Employees triggers POSH Act applicability" }
    ],
    commonProblems: [
      "Wrongful termination, forced resignation, or sudden dismissal without notice pay",
      "Unpaid salary, bonus, incentives, or notice-period buy-out",
      "Withheld gratuity (Payment of Gratuity Act 1972) or PF non-remittance",
      "POSH Act 2013 complaint — sexual harassment at workplace",
      "Industrial dispute — retrenchment, layoff, lockout, strike",
      "ESIC / PF inspection notice or recovery order",
      "Maternity-benefit denial, paternity-leave dispute, parental-leave issues",
      "Restrictive covenants — non-compete, non-solicit, garden-leave enforceability",
      "Equal-pay / gender-pay-gap claim under the Code on Wages 2019",
      "Contract-labour engagement issues under the Contract Labour Act 1970"
    ],
    legalProcess: [
      { step: "Pre-litigation conciliation", description: "Many disputes are resolved through internal grievance committees, mediation, or pre-conciliation with the employer. POSH cases follow a dedicated 90-day Internal Committee process under the 2013 Act.", durationHint: "30–90 days" },
      { step: "Filing before Labour Commissioner / Inspector", description: "Conciliation officer under the Industrial Disputes Act 1947 attempts settlement. Failure report (Section 12(4) ID Act) opens the route to Labour Court or Tribunal.", durationHint: "60–90 days" },
      { step: "Reference to Labour Court / Industrial Tribunal", description: "State Government refers the dispute to the appropriate court / tribunal for adjudication.", durationHint: "30–60 days from failure report" },
      { step: "Pleadings, evidence, and award", description: "Statements of claim, written statements, examination of witnesses, documentary evidence. Tribunal passes an award which is published in the Gazette.", durationHint: "1–3 years" },
      { step: "POSH Act parallel route", description: "Internal Committee inquiry must be completed within 90 days. Aggrieved party can appeal to court within 90 days. Employer non-compliance attracts ₹50,000 penalty + repeat-offence licence cancellation.", durationHint: "90 + 90 days" },
      { step: "Recovery of dues", description: "Salary arrears, gratuity, and bonus recovery under Payment of Wages Act 1936 / Code on Wages 2019 / Gratuity Act 1972 — applications to Controlling Authority.", durationHint: "60–180 days" },
      { step: "Writ remedy in High Court", description: "Where statutory remedy is inadequate or there is a violation of fundamental rights, writ under Article 226 lies — particularly for public-sector employment.", durationHint: "6 months – 3 years" },
      { step: "Settlement / award enforcement", description: "Award becomes enforceable 30 days after publication. Execution through Section 33C(2) ID Act or as a court decree.", durationHint: "30 days to enforce" }
    ],
    requiredDocuments: [
      "Appointment letter, offer letter, and signed employment contract",
      "Last 12 months of salary slips and bank-credit statement",
      "PF UAN, EPS records, and gratuity calculation",
      "Termination letter / acceptance of resignation / dismissal order",
      "E-mail correspondence with HR / management / reporting manager",
      "Performance appraisals and any warning / show-cause notices",
      "Company policies — leave, POSH, code of conduct, NDA, non-compete",
      "Identity proof of employee (Aadhaar, PAN)",
      "Form 16 / Form 26AS for the relevant financial year",
      "Industry classification (Schedule I of ID Act) — workman / non-workman",
      "Witness affidavits and supporting documents",
      "Vakalatnama for the labour advocate"
    ],
    timeline: [
      { stage: "Conciliation before Labour Commissioner", duration: "60–90 days" },
      { stage: "Labour Court / Tribunal award", duration: "1–3 years" },
      { stage: "POSH Act inquiry", duration: "90 days" },
      { stage: "Writ to High Court / Supreme Court", duration: "6 months – 5 years" }
    ],
    outboundReferences: [
      { label: "Code on Wages, 2019 — full text", url: "https://www.indiacode.nic.in/handle/123456789/15464", source: "India Code" },
      { label: "Industrial Disputes Act, 1947 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2244", source: "India Code" },
      { label: "Sexual Harassment of Women at Workplace Act, 2013 (POSH)", url: "https://www.indiacode.nic.in/handle/123456789/2104", source: "India Code" },
      { label: "Payment of Gratuity Act, 1972 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1546", source: "India Code" },
      { label: "EPFO portal (PF / EPS / ESIC)", url: "https://www.epfindia.gov.in/", source: "epfindia.gov.in" }
    ]
  },

  "intellectual-property": {
    detailedOverview: [
      "Intellectual property (IP) law in India has matured significantly to meet international standards, with India being a signatory to major IP treaties including the Paris Convention, the Berne Convention, the Patent Cooperation Treaty (PCT), the Madrid Protocol for trademarks, and the TRIPS Agreement under the WTO. The Indian IP framework provides robust protection for trademarks, patents, copyrights, designs, geographical indications, and trade secrets through dedicated legislation and specialized tribunals. At NyaySevak, our IP practice helps innovators, creators, and businesses protect, commercialize, and enforce their intellectual property rights across India and internationally.",
      "India's IP landscape is dynamic and expanding. The Controller General of Patents, Designs and Trade Marks (CGPDTM) has modernized significantly with fully electronic filing systems, expedited examination procedures for startups (under the Startup India scheme), and reduced timelines for trademark and patent processing. Despite these improvements, navigating the IP registration process requires specialized knowledge of classification systems (Nice Classification for trademarks, IPC for patents), drafting of claims and specifications, responding to examination reports, and handling opposition proceedings. Our team combines legal expertise with technical understanding across industries.",
      "Beyond registration, our IP practice encompasses comprehensive portfolio management, licensing and technology transfer agreements, IP valuation for M&A and fundraising, enforcement through civil and criminal remedies, customs recordal for border protection against counterfeits, and digital IP issues including domain name disputes, online brand protection, and content takedowns. We work closely with patent agents, technical experts, and international IP counsel to provide seamless cross-border IP protection for our clients."
    ],
    keyLegislation: [
      "Trade Marks Act, 1999",
      "Patents Act, 1970 (as amended in 2005)",
      "Copyright Act, 1957 (as amended in 2012)",
      "Designs Act, 2000",
      "Geographical Indications of Goods (Registration and Protection) Act, 1999",
      "Information Technology Act, 2000 (for digital IP)",
      "Semiconductor Integrated Circuits Layout-Design Act, 2000",
      "Biological Diversity Act, 2002"
    ],
    serviceDetails: [
      {
        title: "Trademark Registration & Opposition",
        description: "End-to-end trademark services including availability search, classification advisory (across 45 Nice classes), application filing (TM-A), responding to examination reports, handling opposition proceedings (TM-O), and securing registration certificates. We also handle trademark renewals, assignments, and recordal of registered user agreements."
      },
      {
        title: "Patent Filing & Prosecution",
        description: "Comprehensive patent services from prior art search and patentability analysis, drafting of complete and provisional specifications with claims, filing under the Indian Patent Act or via the PCT route, responding to examination reports and office actions, handling pre-grant and post-grant oppositions, and pursuing expedited examination for startups."
      },
      {
        title: "Copyright Registration",
        description: "Registration of literary works, artistic works, musical compositions, sound recordings, cinematograph films, and computer software with the Copyright Office. We also handle copyright assignment agreements, licensing arrangements, and statutory licenses for broadcasting and cover versions."
      },
      {
        title: "Design Registration",
        description: "Protection of novel and original visual designs applied to articles of manufacture under the Designs Act, 2000. We handle design searches, application filing, responding to objections, and enforcement of registered designs against unauthorized copying and infringement."
      },
      {
        title: "IP Licensing & Assignments",
        description: "Drafting and negotiating IP licensing agreements (exclusive, non-exclusive, sole licenses), technology transfer agreements, franchise agreements with IP components, copyright assignment deeds, and trademark coexistence agreements. We ensure all agreements comply with the Technology Transfer Guidelines and competition law requirements."
      },
      {
        title: "IP Litigation & Enforcement",
        description: "Aggressive enforcement of IP rights through civil suits for injunction and damages in High Courts (which have original jurisdiction in IP matters), criminal complaints for trademark counterfeiting and copyright piracy, customs recordal under the Intellectual Property Rights (Imported Goods) Enforcement Rules, and online takedown notices."
      }
    ],
    faqs: [
      {
        question: "How long does trademark registration take in India?",
        answer: "Under the current processing timelines, trademark registration in India typically takes 6-12 months if there are no objections or oppositions. The process involves filing (with immediate receipt of TM-A number), examination within 30 days, publication in the Trade Marks Journal for 4 months (opposition period), and registration upon no opposition. If objections are raised during examination or opposition is filed, the timeline can extend to 18-24 months. The trademark remains valid for 10 years from the filing date and can be renewed indefinitely."
      },
      {
        question: "What can be patented in India?",
        answer: "Under the Indian Patents Act, 1970, an invention is patentable if it is novel (new), involves an inventive step (non-obvious to a person skilled in the art), and is capable of industrial application. However, Section 3 of the Act lists several exclusions including mathematical methods, business methods, computer programs per se (though software with technical effect may be patentable), methods of agriculture or horticulture, plants and animals, and traditional knowledge. India follows a first-to-file system, and patent protection lasts for 20 years from the filing date."
      },
      {
        question: "How do I protect my brand name and logo in India?",
        answer: "The most effective protection is registering your brand name and logo as trademarks under the Trade Marks Act, 1999. You can register word marks (brand name), device marks (logo), and combination marks (name + logo) across relevant classes of goods and services. Registration gives you the exclusive right to use the mark, the right to initiate infringement proceedings, and the presumption of validity. Even without registration, you can claim common law rights based on prior use, but enforcement is more difficult."
      },
      {
        question: "What is the difference between a copyright and a trademark in India?",
        answer: "A copyright protects original creative works (literary, artistic, musical, dramatic, cinematographic, and sound recordings) and arises automatically upon creation, lasting for the author's lifetime plus 60 years. A trademark protects distinctive signs (words, logos, shapes, sounds, colors) that identify goods or services of a business and requires registration for full statutory protection, lasting indefinitely with renewals every 10 years. A logo can potentially be protected by both copyright (as an artistic work) and trademark (as a brand identifier)."
      },
      {
        question: "Can startups get expedited patent examination in India?",
        answer: "Yes, under the Scheme for Facilitating Startups Intellectual Property Protection (SIPP), DPIIT-recognized startups can file for expedited examination of patent applications by paying a reduced fee. The examination is conducted on a priority basis, significantly reducing the time from filing to first examination report. Startups also benefit from an 80% reduction in patent filing fees. Additionally, startups can use the Patent Prosecution Highway (PPH) agreements India has with various countries for faster international patent processing."
      }
    ],
    relevantCourts: [
      "High Courts (Original IP jurisdiction - Delhi, Bombay, Calcutta, Madras)",
      "Commercial Courts (IP disputes)",
      "Intellectual Property Appellate Board (functions transferred to High Courts)",
      "Controller General of Patents, Designs and Trade Marks",
      "Copyright Board"
    ],
    highlights: [
      { stat: "45", label: "Nice Classes for trademark classification" },
      { stat: "20 Years", label: "Patent protection duration in India" },
      { stat: "80%", label: "Fee reduction for startup patent filing" },
      { stat: "10 Years", label: "Trademark validity period (renewable)" }
    ],
    commonProblems: [
      "Trademark registration for a new brand / product name / logo / tagline",
      "Trademark opposition received against your application",
      "Patent filing — provisional, complete, PCT, national-phase entry",
      "Patent infringement notice received or infringer needs to be sued",
      "Copyright registration for software, music, film, book, choreography",
      "Industrial design registration under the Designs Act 2000",
      "Geographical Indication (GI) registration for traditional / regional products",
      "Domain-name dispute and cybersquatting (UDRP / INDRP)",
      "IP licensing, assignment, and franchising agreements",
      "Trade-secret theft, employee NDA breach, or reverse engineering"
    ],
    legalProcess: [
      { step: "IP audit and identification", description: "Inventory of registrable IP — marks, inventions, designs, software, content. Decision on which to register, which to keep as trade secret.", durationHint: "1–2 weeks" },
      { step: "Prior-art / similarity search", description: "Public TM register search at ipindiaonline.gov.in; patent prior-art search via Indian Patent Office, USPTO, EPO, and PCT databases.", durationHint: "1–2 weeks" },
      { step: "Filing the application", description: "TM application (Form TM-A) per Nice Class; provisional or complete patent specification (Form 1 + 2 + 3); copyright application (Form XIV); design application (Form 1).", durationHint: "1–2 weeks" },
      { step: "Examination and objection / opposition response", description: "Registrar examines application; examination report (TM) or first examination report (FER for patents) raises objections; response within 1–6 months.", durationHint: "6–18 months" },
      { step: "Publication and opposition window", description: "TM published in Trade Marks Journal, opposition window of 4 months; patent published 18 months from filing, pre-grant opposition under Section 25(1) Patents Act.", durationHint: "4 months (TM) / open (Patent)" },
      { step: "Registration and certificate", description: "Where no opposition or oppositions are resolved, registration certificate is issued. TM: ®. Patent: 20-year monopoly from filing date.", durationHint: "12–24 months (TM) / 3–6 years (Patent)" },
      { step: "Enforcement and infringement", description: "Cease-and-desist notice → civil suit for injunction + damages + delivery-up under Section 134 TM Act / Section 104 Patents Act / Section 55 Copyright Act. Criminal action under Section 103 TM Act / Section 63 Copyright Act.", durationHint: "1 day notice / 2–5 years suit" },
      { step: "Renewals and portfolio management", description: "TM renewable every 10 years; patent annuities annually from year 3; design renewable 5+5+5 years; copyright lasts lifetime + 60 years.", durationHint: "Recurring" }
    ],
    requiredDocuments: [
      "Identity and address proof of applicant (individual / company / partnership)",
      "Power of Attorney (Form TM-48 for trademarks / Form 26 for patents) in favour of agent",
      "Trademark / logo image (in JPEG / TIFF) and statement of use / proposed use",
      "Patent specification — provisional or complete — with claims, drawings, abstract",
      "Form 5 declaration of inventorship (for patents)",
      "Copyright work — manuscript / software code / music score / artwork copies",
      "Industrial-design drawings from all relevant views",
      "Class identification under Nice Classification (TM) or IPC (Patent)",
      "Prior-use evidence — invoices, advertisements, sales data (for prior-use claims)",
      "Assignment / licence / NDA agreements (if filing on behalf of assignee)",
      "Startup recognition certificate from DPIIT (for 80% fee reduction)",
      "Filing fee challan / online payment receipt"
    ],
    timeline: [
      { stage: "Trademark registration (uncontested)", duration: "12–18 months" },
      { stage: "Patent grant (regular)", duration: "3–6 years" },
      { stage: "Copyright registration", duration: "6–12 months" },
      { stage: "IP infringement suit + interim injunction", duration: "Interim: 1–6 months / Final: 2–5 years" }
    ],
    outboundReferences: [
      { label: "Trade Marks Act, 1999 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1993", source: "India Code" },
      { label: "Patents Act, 1970 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1393", source: "India Code" },
      { label: "Copyright Act, 1957 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1367", source: "India Code" },
      { label: "Indian Patent Office (IPO)", url: "https://ipindia.gov.in/", source: "ipindia.gov.in" },
      { label: "Trademark Public Search", url: "https://tmrsearch.ipindia.gov.in/", source: "ipindia.gov.in" }
    ]
  },

  "tax-law": {
    detailedOverview: [
      "Tax law in India encompasses a comprehensive framework of direct and indirect taxation governed by the Income Tax Act, 1961, the Goods and Services Tax (GST) Acts (CGST, SGST, IGST, and UTGST Acts, 2017), and various state-level levies. The Indian taxation system has undergone revolutionary changes in recent years, most notably the introduction of GST on July 1, 2017, which subsumed over a dozen indirect taxes into a unified regime. At NyaySevak, our tax law practice provides end-to-end advisory, compliance, and litigation support to individuals, businesses, HUFs, trusts, and NRIs navigating India's complex tax landscape.",
      "Direct taxation under the Income Tax Act, 1961 touches every earning individual and entity in India, with a progressive slab structure for individuals and a corporate tax regime that has been significantly reformed (22% for existing domestic companies and 15% for new manufacturing companies under Section 115BAA and 115BAB). Tax disputes frequently arise from assessment proceedings, search and seizure operations, transfer pricing adjustments for international transactions, and denial of exemptions and deductions. Our tax litigation team represents clients before Income Tax Officers, Commissioners of Income Tax (Appeals), the Income Tax Appellate Tribunal (ITAT), High Courts, and the Supreme Court.",
      "On the indirect tax front, GST compliance involves registration, monthly/quarterly return filing (GSTR-1, GSTR-3B), annual returns (GSTR-9), input tax credit management, e-way bill compliance, and navigating the anti-profiteering provisions. We also handle GST audit proceedings, departmental investigations, and appeals before the GST Appellate Authority and the yet-to-be-fully-constituted GST Appellate Tribunal. Our advisory practice covers tax-efficient structuring of transactions, advance ruling applications, and opinion on the applicability of tax provisions to complex business arrangements."
    ],
    keyLegislation: [
      "Income Tax Act, 1961",
      "Central Goods and Services Tax Act, 2017 (CGST Act)",
      "Integrated Goods and Services Tax Act, 2017 (IGST Act)",
      "State Goods and Services Tax Acts, 2017 (SGST Acts)",
      "Black Money (Undisclosed Foreign Income and Assets) Act, 2015",
      "Benami Transactions (Prohibition) Amendment Act, 2016",
      "Finance Act (annual, for budget amendments)",
      "Direct Tax Vivad Se Vishwas Act, 2020"
    ],
    serviceDetails: [
      {
        title: "Income Tax Filing & Assessment",
        description: "Preparation and filing of income tax returns for individuals (ITR-1 to ITR-4), HUFs, firms, LLPs, companies (ITR-5, ITR-6), trusts (ITR-7), and NRIs. We also represent clients during scrutiny assessments under Section 143(3), best judgment assessments, and income escaping assessment proceedings under Section 147/148."
      },
      {
        title: "GST Registration & Compliance",
        description: "GST registration for regular taxpayers, composition scheme dealers, casual taxable persons, and e-commerce operators. Ongoing compliance support includes GSTR-1 (outward supplies), GSTR-3B (summary return), GSTR-9 (annual return), GSTR-9C (reconciliation statement), input tax credit reconciliation, and e-way bill management."
      },
      {
        title: "Tax Notices & Demands Response",
        description: "Expert handling of tax notices including intimation under Section 143(1), scrutiny notices under Section 143(2), notices for income escaping assessment under Section 148/148A, demand notices under Section 156, and penalty proceedings under Sections 270A, 271, and 276. We draft detailed replies with supporting documentation to protect our clients' positions."
      },
      {
        title: "Tax Appeals (ITAT, GST Tribunal)",
        description: "Representation before the Commissioner of Income Tax (Appeals)/Joint Commissioner (Appeals), Income Tax Appellate Tribunal (ITAT) across all benches, GST Appellate Authority, High Courts on substantial questions of law, and the Supreme Court. We also handle revision petitions before the Commissioner and applications for rectification of orders."
      },
      {
        title: "TDS Matters",
        description: "Advisory on TDS obligations under various sections (192, 194, 195, etc.), TDS return preparation and filing, handling TDS default and short-deduction notices, Section 197 applications for lower/nil withholding certificates, and resolution of TDS credit mismatch issues through rectification and correction statements."
      },
      {
        title: "Tax Planning & Structuring",
        description: "Strategic tax planning for individuals and businesses including optimal use of deductions under Chapter VI-A (80C, 80D, 80G, etc.), capital gains tax planning through exemptions (54, 54EC, 54F), business restructuring for tax efficiency, ESOP taxation advisory, and transfer pricing documentation for international transactions."
      }
    ],
    faqs: [
      {
        question: "What are the income tax slabs in India for the current assessment year?",
        answer: "India offers two tax regimes. The New Tax Regime (default) offers lower rates: nil tax up to Rs. 3 lakhs, 5% for Rs. 3-7 lakhs, 10% for Rs. 7-10 lakhs, 15% for Rs. 10-12 lakhs, 20% for Rs. 12-15 lakhs, and 30% above Rs. 15 lakhs, with a standard deduction of Rs. 75,000 but limited exemptions. The Old Tax Regime allows deductions under Section 80C, 80D, HRA, etc., with slabs of nil up to Rs. 2.5 lakhs, 5% for Rs. 2.5-5 lakhs, 20% for Rs. 5-10 lakhs, and 30% above Rs. 10 lakhs. The choice depends on the taxpayer's deduction profile."
      },
      {
        question: "What happens if I receive an income tax notice in India?",
        answer: "Receiving a tax notice is not uncommon and does not necessarily indicate wrongdoing. Common notices include Section 143(1) intimations (processing adjustments), Section 143(2) scrutiny notices (detailed examination of returns), and Section 148/148A notices (income escaping assessment). You must respond within the stipulated timeline\u2014typically 15-30 days. Ignoring a notice can lead to best judgment assessment, penalty, and prosecution. It is advisable to consult a tax professional immediately to understand the notice and prepare an appropriate response."
      },
      {
        question: "How does GST input tax credit work?",
        answer: "GST input tax credit (ITC) allows a registered taxpayer to reduce the GST payable on output supplies by claiming credit for GST paid on input supplies (goods and services used for business purposes). ITC is available subject to conditions: the supplier must have filed their GSTR-1, the recipient must possess a valid tax invoice, the goods/services must be received, the tax must have been paid to the government, and the ITC claim must be reflected in GSTR-2B. Blocked credits under Section 17(5) include motor vehicles (with exceptions), food and beverages, health and fitness, and personal consumption."
      },
      {
        question: "What is the penalty for late filing of income tax returns in India?",
        answer: "Under Section 234F of the Income Tax Act, a late filing fee of Rs. 5,000 is levied if the return is filed after the due date (July 31 for individuals, October 31 for audit cases). If total income does not exceed Rs. 5 lakhs, the late fee is reduced to Rs. 1,000. Additionally, interest under Section 234A at 1% per month is charged on the outstanding tax liability from the due date until the date of filing. Delayed filing also means loss of the ability to carry forward certain losses (capital losses, business losses) to future years."
      },
      {
        question: "Do NRIs need to file income tax returns in India?",
        answer: "NRIs must file income tax returns in India if their total income earned or accrued in India (including income from property, capital gains on Indian assets, interest on Indian bank accounts, or business income with Indian connection) exceeds the basic exemption limit of Rs. 2.5 lakhs. NRIs are taxed only on Indian-source income and income received in India. They can claim benefits under Double Taxation Avoidance Agreements (DTAAs) to avoid being taxed twice. NRIs must use ITR-2 or ITR-3 for filing."
      }
    ],
    relevantCourts: [
      "Income Tax Appellate Tribunal (ITAT) - 30+ benches",
      "GST Appellate Authority (Commissioner Appeals)",
      "GST Appellate Tribunal (GSTAT)",
      "High Courts (tax appeals on substantial questions of law)",
      "Supreme Court of India"
    ],
    highlights: [
      { stat: "30+", label: "ITAT benches across India" },
      { stat: "Rs. 75K", label: "Standard deduction under new tax regime" },
      { stat: "18%", label: "Standard GST rate for most services" },
      { stat: "22%", label: "Corporate tax rate for domestic companies" }
    ]
  },

  "banking-finance": {
    detailedOverview: [
      "Banking and finance law in India is a highly specialized domain governed by a robust regulatory framework anchored by the Reserve Bank of India Act, 1934, the Banking Regulation Act, 1949, the Recovery of Debts and Bankruptcy Act, 1993 (establishing DRTs), the SARFAESI Act, 2002, the Insolvency and Bankruptcy Code, 2016, and the Negotiable Instruments Act, 1881. These statutes collectively govern lending practices, debt recovery mechanisms, insolvency resolution, and payment instrument disputes. At NyaySevak, our banking and finance practice serves banks, NBFCs, borrowers, guarantors, and corporate debtors across the full spectrum of financial law disputes.",
      "The Indian banking sector has undergone significant stress in recent years with rising non-performing assets (NPAs), leading to aggressive recovery action by banks and financial institutions through multiple legal channels. Secured creditors utilize the SARFAESI Act to enforce security interests without court intervention, while unsecured creditors pursue recovery through Debt Recovery Tribunals or civil courts. The introduction of the Insolvency and Bankruptcy Code (IBC) has transformed the debt resolution landscape by providing a creditor-friendly, time-bound process for resolving corporate insolvency. Our team has extensive experience on both sides\u2014representing lenders in enforcement proceedings and defending borrowers against disproportionate or procedurally irregular recovery actions.",
      "Cheque bouncing cases under Section 138 of the Negotiable Instruments Act constitute one of the highest-volume categories of criminal litigation in India, with lakhs of cases pending across courts. Our dedicated NI Act practice handles filing of complaints, defending against false complaints, negotiating settlements, and pursuing appeals. We also advise on banking regulatory compliance, RBI directions, NBFC registration and compliance, digital lending regulations, and disputes arising from guarantees, letters of credit, and bank guarantees."
    ],
    keyLegislation: [
      "Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act, 2002",
      "Insolvency and Bankruptcy Code (IBC), 2016",
      "Negotiable Instruments Act, 1881",
      "Recovery of Debts and Bankruptcy Act, 1993 (RDB Act)",
      "Banking Regulation Act, 1949",
      "Reserve Bank of India Act, 1934",
      "Foreign Exchange Management Act (FEMA), 1999",
      "Payment and Settlement Systems Act, 2007"
    ],
    serviceDetails: [
      {
        title: "Loan Recovery & SARFAESI Proceedings",
        description: "Representing banks and financial institutions in enforcing security interests under the SARFAESI Act through demand notices under Section 13(2), taking possession of secured assets under Section 13(4), and conducting asset auctions. For borrowers, we file appeals before the DRT challenging SARFAESI actions and seeking stay on possession."
      },
      {
        title: "IBC Proceedings (CIRP & Liquidation)",
        description: "Filing and defending insolvency applications under Sections 7, 9, and 10 of the IBC before the NCLT. We represent financial creditors, operational creditors, and corporate debtors through the Corporate Insolvency Resolution Process (CIRP), Committee of Creditors proceedings, resolution plan evaluation, and liquidation proceedings."
      },
      {
        title: "Cheque Bouncing Cases (Section 138 NI Act)",
        description: "Filing criminal complaints under Section 138 of the Negotiable Instruments Act for dishonour of cheques, including statutory demand notice issuance, complaint filing within the 30-day limitation, evidence presentation, and negotiating settlements. We also defend individuals falsely implicated in NI Act cases and pursue quashing where warranted."
      },
      {
        title: "DRT Matters",
        description: "Comprehensive representation before Debt Recovery Tribunals (DRTs) and the Debt Recovery Appellate Tribunal (DRAT) in recovery proceedings initiated by banks and financial institutions for debts exceeding Rs. 20 lakhs. We handle original applications, interim stay applications, counterclaims, and execution of recovery certificates."
      },
      {
        title: "Banking Disputes Resolution",
        description: "Handling disputes related to unauthorized transactions, KYC/AML compliance issues, credit card disputes, loan restructuring negotiations, OTS (One-Time Settlement) negotiations, Banking Ombudsman complaints, and disputes arising from digital banking, UPI, and payment gateway transactions."
      }
    ],
    faqs: [
      {
        question: "What can a bank do if I default on a loan in India?",
        answer: "If you default on a loan, the bank has several legal remedies depending on the type of loan. For secured loans, the bank can issue a notice under Section 13(2) of the SARFAESI Act demanding repayment within 60 days, failing which it can take possession of the secured asset, auction it, and recover the dues. For unsecured loans above Rs. 20 lakhs, the bank can file an application before the Debt Recovery Tribunal. For loan amounts below Rs. 20 lakhs, the bank can file a civil suit. Additionally, for debts above Rs. 1 crore, the bank can initiate insolvency proceedings under the IBC."
      },
      {
        question: "What is the procedure for a cheque bounce case in India?",
        answer: "When a cheque bounces, the payee must send a written demand notice to the drawer within 30 days of receiving the dishonour memo from the bank. The drawer then has 15 days to make the payment. If payment is not made, the payee must file a criminal complaint under Section 138 NI Act before the Magistrate within 30 days of the expiry of the 15-day notice period. The maximum punishment is imprisonment up to 2 years, a fine up to twice the cheque amount, or both. Strict adherence to these timelines is crucial."
      },
      {
        question: "What is SARFAESI Act and how does it help banks recover loans?",
        answer: "The SARFAESI Act, 2002 empowers banks and financial institutions to recover NPAs by enforcing security interests without court intervention. The process begins with a 60-day demand notice to the borrower. If the borrower fails to pay, the bank can take possession of the secured asset, sell or lease it, appoint a manager to manage it, or require any debtor of the borrower to pay directly to the bank. The Act applies to secured debts of Rs. 20 lakhs or more. Borrowers can appeal SARFAESI actions before the DRT within 45 days."
      },
      {
        question: "How does the IBC insolvency process work for corporate debtors?",
        answer: "Under the IBC, when a company defaults on a debt of Rs. 1 crore or more, a creditor or the company itself can file an application before the NCLT to initiate CIRP. Upon admission, a moratorium is declared (halting all proceedings against the debtor), an Interim Resolution Professional is appointed, and a Committee of Creditors (CoC) is formed. The CoC invites and evaluates resolution plans within 180 days (extendable to 330 days). If a viable plan is approved by 66% of the CoC, the NCLT sanctions it. Otherwise, the company goes into liquidation."
      },
      {
        question: "What should I do if I receive a SARFAESI notice from a bank?",
        answer: "If you receive a Section 13(2) SARFAESI notice, do not ignore it. You have 60 days to either repay the outstanding amount or file a representation/objection with the bank. If the bank rejects your representation, you can file an appeal (Securitisation Application) before the Debt Recovery Tribunal within 45 days under Section 17 of the SARFAESI Act. The DRT can grant a stay on possession if the borrower deposits 50% of the claimed amount (which can be reduced by the DRAT). Meanwhile, explore settlement options like OTS (One-Time Settlement) negotiations with the bank."
      }
    ],
    relevantCourts: [
      "Debt Recovery Tribunals (DRTs) - 39 across India",
      "Debt Recovery Appellate Tribunals (DRATs) - 5 across India",
      "National Company Law Tribunal (NCLT) - for IBC matters",
      "Magistrate Courts (Section 138 NI Act cases)",
      "Banking Ombudsman (RBI)"
    ],
    highlights: [
      { stat: "39", label: "Debt Recovery Tribunals across India" },
      { stat: "Rs. 1 Cr", label: "Minimum default threshold for IBC" },
      { stat: "60 Days", label: "SARFAESI notice response period" },
      { stat: "2 Years", label: "Maximum imprisonment for cheque bounce" }
    ],
    commonProblems: [
      "Cheque bounce — issuer or recipient under Section 138 NI Act",
      "Loan default / NPA — bank serving SARFAESI Section 13(2) notice",
      "Possession of mortgaged property under Section 13(4) SARFAESI Act",
      "Debt Recovery Tribunal proceedings under the RDB Act 1993",
      "Insolvency under IBC — corporate, personal, or partnership",
      "Bank fraud — unauthorised UPI / card / wire transactions",
      "Wrongful loan deduction, hidden charges, or pre-payment penalty disputes",
      "Credit-card dispute, EMI dispute, or CIBIL score correction",
      "Locker contents lost, KYC freeze, or unwarranted account closure",
      "Banking Ombudsman complaint under the RBI Integrated Ombudsman Scheme 2021"
    ],
    legalProcess: [
      { step: "Cheque-bounce — issuance of notice", description: "Within 30 days of bank dishonour memo, send statutory notice under Section 138(b) NI Act demanding payment within 15 days.", durationHint: "Within 30 days" },
      { step: "Cheque-bounce — filing complaint", description: "If amount not paid within 15 days, file complaint within next 30 days before Magistrate where the cheque was presented / dishonour bank is located.", durationHint: "30 days from notice expiry" },
      { step: "SARFAESI Section 13(2) demand notice", description: "Bank issues 60-day notice to borrower / guarantor to repay the NPA. Borrower can submit representation under Section 13(3-A).", durationHint: "60 days" },
      { step: "SARFAESI Section 13(4) possession", description: "After expiry of 60 days without repayment, bank takes symbolic / physical possession through Authorised Officer; sale notice issued.", durationHint: "After 60-day notice" },
      { step: "Borrower's SARFAESI appeal", description: "Borrower can challenge before Debt Recovery Tribunal (DRT) under Section 17 within 45 days; further appeal to DRAT under Section 18 with 50% pre-deposit.", durationHint: "45 days to DRT" },
      { step: "Bank's recovery — DRT route", description: "Where debt is above ₹20 lakh, bank can directly approach DRT under RDB Act 1993 for recovery and decree; auction of attached assets follows.", durationHint: "6 months – 2 years" },
      { step: "IBC route for default above ₹1 crore", description: "Operational / financial creditor files Section 9 / Section 7 IBC application at NCLT; corporate insolvency resolution process (CIRP) of 330-day maximum.", durationHint: "Up to 330 days" },
      { step: "Execution and recovery", description: "Decree / award executed via attachment, sale, garnishment, and arrest where the judgement-debtor is wilfully refusing to pay.", durationHint: "6 months – 5 years" }
    ],
    requiredDocuments: [
      "Original cheque, dishonour memo, and bank statement (for Section 138 cases)",
      "Statutory legal notice and proof of dispatch (RPAD AD + speed post)",
      "Loan agreement, sanction letter, mortgage deed, hypothecation deed",
      "Demand notice under SARFAESI Section 13(2) (where applicable)",
      "Account statement showing default and NPA classification",
      "Title deed of mortgaged property and EC / khata",
      "Guarantor's documents and personal guarantee deed",
      "CIBIL report and credit-history statement",
      "RBI Ombudsman complaint and bank's response (for grievance cases)",
      "Transaction screenshots, SMS alerts, and IP / login logs for fraud cases",
      "FIR copy (for fraud / unauthorised-transaction cases)",
      "Vakalatnama and authority letter (where corporate party)"
    ],
    timeline: [
      { stage: "Section 138 NI Act case — Magistrate Court", duration: "1–3 years" },
      { stage: "SARFAESI Section 13(2) to possession", duration: "60 days" },
      { stage: "DRT recovery proceedings", duration: "6 months – 2 years" },
      { stage: "IBC CIRP", duration: "Up to 330 days" }
    ],
    outboundReferences: [
      { label: "Negotiable Instruments Act, 1881 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2189", source: "India Code" },
      { label: "SARFAESI Act, 2002 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2027", source: "India Code" },
      { label: "Recovery of Debts and Bankruptcy Act, 1993", url: "https://www.indiacode.nic.in/handle/123456789/1934", source: "India Code" },
      { label: "RBI Integrated Ombudsman Scheme, 2021", url: "https://cms.rbi.org.in/", source: "rbi.org.in" },
      { label: "Insolvency and Bankruptcy Code, 2016", url: "https://www.indiacode.nic.in/handle/123456789/2154", source: "India Code" }
    ]
  },

  "consumer-protection": {
    detailedOverview: [
      "Need to file a consumer complaint in India? NyaySevak connects you with verified consumer court lawyers who specialise in defective product claims, deficient service complaints, e-commerce refund disputes, medical negligence, insurance claim rejections, real-estate deficiencies, and banking service failures. Our consumer protection advocates represent buyers and businesses at all three tiers of the Consumer Disputes Redressal Commission — District (claims up to ₹1 crore), State (₹1–10 crore), and National (above ₹10 crore) — under the Consumer Protection Act 2019. From filing the complaint and serving the statutory notice through to enforcement of orders and appeals, our team handles the entire process end-to-end. Book a case assessment in 60 seconds.",
      "The three-tier Consumer Disputes Redressal Commission structure\u2014District Commissions (for claims up to Rs. 1 crore), State Commissions (for claims between Rs. 1 crore and Rs. 10 crores), and the National Commission (for claims exceeding Rs. 10 crores)\u2014provides accessible justice with simplified procedures, no requirement for a lawyer (though legal representation is advisable), and relatively faster resolution compared to civil courts. The 2019 Act has broadened the definition of 'consumer' to include online buyers, introduced the concept of product liability (making manufacturers, sellers, and service providers strictly liable), and established the Central Consumer Protection Authority (CCPA) to investigate and address unfair trade practices proactively.",
      "Our consumer protection practice covers the full spectrum of disputes\u2014from everyday complaints about defective electronics and automobiles to high-value claims involving medical negligence, insurance claim rejections, real estate deficiencies, banking service failures, and e-commerce disputes. We also represent businesses defending against consumer complaints, ensuring that frivolous or exaggerated claims are effectively contested. Our team is experienced in pursuing enforcement of orders, interim relief (ad-interim injunctions), and appeals through all three tiers of the consumer forum hierarchy."
    ],
    keyLegislation: [
      "Consumer Protection Act, 2019",
      "Consumer Protection (E-Commerce) Rules, 2020",
      "Bureau of Indian Standards Act, 2016",
      "Food Safety and Standards Act, 2006",
      "Legal Metrology Act, 2009",
      "Real Estate (Regulation and Development) Act, 2016 (RERA)",
      "Motor Vehicles Act, 1988 (for accident insurance claims)",
      "Clinical Establishments (Registration and Regulation) Act, 2010"
    ],
    serviceDetails: [
      {
        title: "Consumer Complaints (District, State, National)",
        description: "Filing and arguing consumer complaints across all three tiers of the Consumer Disputes Redressal Commission. We handle the complete process including complaint drafting with annexures, filing (physical and e-filing through the edaakhil portal), evidence presentation, written and oral arguments, and execution of orders."
      },
      {
        title: "Product Defect Cases",
        description: "Pursuing claims under the new product liability provisions of the Consumer Protection Act, 2019, holding manufacturers, product sellers, and product service providers liable for defective products that cause harm. We handle cases involving defective automobiles, electronics, appliances, pharmaceutical products, and food items."
      },
      {
        title: "Service Deficiency Cases",
        description: "Filing complaints against service providers for deficiency in services including banking services, insurance services, telecom services, educational institutions, hospitals, airlines, and professional services (lawyers, architects, engineers). We establish service deficiency through expert evidence and consumer testimony."
      },
      {
        title: "E-Commerce Disputes",
        description: "Handling disputes arising from online purchases including non-delivery, counterfeit products, unauthorized charges, failure to process refunds, misleading product descriptions, and violations of the Consumer Protection (E-Commerce) Rules, 2020 by marketplace platforms and sellers."
      },
      {
        title: "Medical Negligence Claims",
        description: "Pursuing medical negligence claims against hospitals, doctors, and healthcare providers for misdiagnosis, surgical errors, wrong medication, delayed treatment, and lack of informed consent. We work with medical experts to establish the standard of care and prove breach through detailed medical record analysis."
      },
      {
        title: "Insurance Claim Disputes",
        description: "Challenging wrongful rejection or under-settlement of insurance claims (health, life, motor, property, travel) before Consumer Forums and the Insurance Ombudsman. We handle disputes involving claim repudiation, policy interpretation, exclusion clause challenges, and unfair settlement practices."
      }
    ],
    faqs: [
      {
        question: "How do I file a consumer complaint in India?",
        answer: "You can file a consumer complaint either physically at the appropriate Consumer Commission or electronically through the edaakhil.nic.in portal. The complaint should include your details, the opposite party's details, a description of the defective goods or deficient service, the relief sought, and supporting documents (bills, receipts, correspondence). The complaint must be filed within 2 years of the cause of action. No lawyer is mandatory, but legal representation is recommended for effective presentation. The filing fee varies based on the claim value."
      },
      {
        question: "Which consumer forum should I approach based on the claim amount?",
        answer: "Under the Consumer Protection Act, 2019, the jurisdiction depends on the value of goods/services and the compensation claimed: District Consumer Disputes Redressal Commission for claims up to Rs. 1 crore; State Consumer Disputes Redressal Commission for claims between Rs. 1 crore and Rs. 10 crores; and the National Consumer Disputes Redressal Commission (NCDRC) for claims exceeding Rs. 10 crores. The complaint can be filed at the place where the opposite party resides, carries on business, or where the cause of action arose."
      },
      {
        question: "What is product liability under the new Consumer Protection Act?",
        answer: "Product liability under the Consumer Protection Act, 2019 (Chapter VI) allows a consumer to file a complaint against a product manufacturer, product seller, or product service provider for any harm caused by a defective product, without needing to prove negligence. This is based on the principle of strict liability. The manufacturer is liable for defective design, manufacturing, or inadequate warnings. The seller is liable if they exercised substantial control over the product or altered/modified it. This provision significantly strengthens consumer rights in India."
      },
      {
        question: "Can I file a consumer complaint against an e-commerce company?",
        answer: "Yes, the Consumer Protection Act, 2019 and the E-Commerce Rules, 2020 specifically cover online transactions. E-commerce entities (marketplace and inventory models) are required to provide complete seller information, accept returns and refunds, not manipulate prices, and resolve grievances within 30 days. You can file a complaint against both the e-commerce platform and the individual seller for issues like non-delivery, fake products, refund denial, or misleading advertisements. The complaint can be filed where you reside, not necessarily where the company is based."
      },
      {
        question: "What compensation can I get in a consumer complaint?",
        answer: "Consumer Commissions can award various forms of relief including replacement of defective goods, refund of the price paid with interest, compensation for mental agony and harassment, medical expenses (in medical negligence cases), cost of litigation, and punitive damages for willful negligence. In addition, they can direct the opposite party to discontinue unfair trade practices and issue corrective advertisements. The actual compensation depends on the facts of each case, the severity of the deficiency, and the financial loss suffered by the consumer."
      }
    ],
    relevantCourts: [
      "District Consumer Disputes Redressal Commissions (600+)",
      "State Consumer Disputes Redressal Commissions (35)",
      "National Consumer Disputes Redressal Commission (NCDRC)",
      "Central Consumer Protection Authority (CCPA)",
      "Insurance Ombudsman (17 centres)"
    ],
    highlights: [
      { stat: "600+", label: "District Consumer Commissions" },
      { stat: "Rs. 1 Cr", label: "District Commission jurisdiction limit" },
      { stat: "2 Years", label: "Limitation period for consumer complaints" },
      { stat: "E-Filing", label: "Available via edaakhil portal" }
    ],
    commonProblems: [
      "Defective product — phone, appliance, vehicle — and seller refuses replacement or refund",
      "E-commerce order not delivered, wrong item delivered, or refund denied by Flipkart / Amazon / Myntra",
      "Builder delivering possession late or charging beyond agreed price (also a RERA matter)",
      "Insurance claim wrongfully rejected — health, motor, or life policy",
      "Banking deficiency — wrong charges, unauthorised debit, locker contents lost",
      "Medical negligence — wrong diagnosis, surgical error, hospital overcharging",
      "Misleading advertisement or unfair trade practice",
      "Service deficiency by airline, telecom, courier, or cab aggregator",
      "Defect in real-estate flat / villa — leakage, structural issues, missing amenities"
    ],
    legalProcess: [
      { step: "Statutory notice to the opposite party", description: "Formal demand notice giving 15–30 days to refund / replace / repair. Most matters settle here without filing.", durationHint: "15–30 days" },
      { step: "Determining the correct forum", description: "District Commission (claims up to ₹1 crore), State Commission (₹1–10 crore), National Commission (above ₹10 crore). Filed where consumer resides, works, or where the cause arose.", durationHint: "Same day" },
      { step: "Filing the consumer complaint", description: "Complaint drafted under Section 35 / 47 / 58 of the CPA 2019, with supporting documents and prescribed fee. E-filing available via edaakhil.nic.in.", durationHint: "1 week" },
      { step: "Notice and admission", description: "Forum issues notice to the opposite party who must file written reply within 30 days (extendable to 45).", durationHint: "30–45 days" },
      { step: "Evidence by affidavit", description: "Both sides file evidence affidavits and documents; oral evidence is rare unless directed.", durationHint: "2–4 months" },
      { step: "Arguments and order", description: "Counsel argue on merits; Commission may direct refund, replacement, compensation, punitive damages, and litigation costs.", durationHint: "1–3 months" },
      { step: "Appeal / revision", description: "Appeal to State (from District), to National (from State), and to Supreme Court (from National). Mandatory pre-deposit applies on the opposite party for delay of refund.", durationHint: "30 days to file" },
      { step: "Execution of order", description: "If order not complied with, execution petition leads to attachment / sale of opposite party's assets and possible imprisonment for wilful disobedience.", durationHint: "3–12 months" }
    ],
    requiredDocuments: [
      "Original invoice, bill, or tax invoice with date and serial number",
      "Order confirmation / booking confirmation / e-mail correspondence",
      "Product warranty card and proof of purchase",
      "Photographs and videos of the defective product / deficient service",
      "Bank statement showing the disputed payment",
      "Service / repair history with dates and amounts",
      "Statutory legal notice and proof of service (RPAD / courier POD)",
      "Identity proof and address proof of complainant",
      "Insurance policy document and claim rejection letter (for insurance cases)",
      "Medical records, prescriptions, hospital bills (for medical negligence)",
      "Affidavit of complainant verifying contents of complaint",
      "Demand draft / online payment receipt for filing fee"
    ],
    timeline: [
      { stage: "Notice to filing", duration: "2–6 weeks" },
      { stage: "Filing to first hearing", duration: "1–2 months" },
      { stage: "District Commission — final order", duration: "6 months – 2 years" },
      { stage: "Appeal to State / National / SC", duration: "1–4 additional years" }
    ],
    outboundReferences: [
      { label: "Consumer Protection Act, 2019 — full text", url: "https://www.indiacode.nic.in/handle/123456789/15256", source: "India Code" },
      { label: "edaakhil — National e-filing portal", url: "https://edaakhil.nic.in/", source: "edaakhil.nic.in" },
      { label: "National Consumer Disputes Redressal Commission", url: "https://ncdrc.nic.in/", source: "ncdrc.nic.in" },
      { label: "Central Consumer Protection Authority (CCPA)", url: "https://consumeraffairs.nic.in/", source: "consumeraffairs.nic.in" },
      { label: "National Consumer Helpline", url: "https://consumerhelpline.gov.in/", source: "consumerhelpline.gov.in" }
    ]
  },

  "cyber-law": {
    detailedOverview: [
      "Looking for a cyber crime lawyer in India? NyaySevak connects you with verified cyber-law advocates for online fraud, UPI scam recovery, phishing, ransomware, identity theft, online defamation, data privacy, and IT Act compliance \u2014 across the Supreme Court, High Courts, Cyber Crime Police Stations, and the National Cyber Crime Reporting Portal (cybercrime.gov.in). Our cyber crime lawyers handle complaints under the Information Technology Act 2000 (as amended in 2008), the Digital Personal Data Protection Act 2023 (DPDPA), and the relevant provisions of the Bharatiya Nyaya Sanhita 2023. From the moment a fraud is reported to chargeback recovery, bank ombudsman complaints, and trial defence, we cover the full digital legal lifecycle. Book a case assessment in 60 seconds.",
      "The Digital Personal Data Protection Act, 2023 (DPDPA) has added a transformative layer to India's cyber law framework, establishing a comprehensive data protection regime that governs how personal data is collected, processed, stored, and transferred. The DPDPA introduces concepts of data fiduciaries, data processors, consent management, data principal rights, and the Data Protection Board of India as the adjudicatory authority. Businesses across sectors\u2014from IT companies and startups to banks, hospitals, and e-commerce platforms\u2014must now comply with these provisions or face penalties of up to Rs. 250 crores.",
      "Our cyber law practice covers the full spectrum of digital legal issues: filing and defending cyber-crime complaints before Cyber Crime Police Stations and the National Cyber Crime Reporting Portal (cybercrime.gov.in), pursuing civil remedies for online defamation and harassment, advising on IT Act compliance including intermediary guidelines (IT Rules, 2021), social media regulation, data localization requirements, and handling domain name disputes through the .IN Registry Dispute Resolution Policy. We also assist businesses with digital contract enforcement, electronic evidence admissibility under the Bharatiya Sakshya Adhiniyam, 2023, and cyber insurance claims."
    ],
    keyLegislation: [
      "Information Technology Act, 2000 (as amended in 2008)",
      "Digital Personal Data Protection Act, 2023 (DPDPA)",
      "Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021",
      "Information Technology (Reasonable Security Practices and Procedures) Rules, 2011",
      "Bharatiya Nyaya Sanhita, 2023 (Sections relating to cyber offences)",
      "Bharatiya Sakshya Adhiniyam, 2023 (electronic evidence provisions)"
    ],
    serviceDetails: [
      {
        title: "Cyber-Crime Complaints & Defense",
        description: "Filing cyber-crime complaints through the National Cyber Crime Reporting Portal (cybercrime.gov.in) and state Cyber Crime Police Stations for offences including hacking (Section 66 IT Act), identity theft (Section 66C), cyber stalking, phishing, ransomware attacks, and online financial fraud. We also defend individuals falsely accused of cyber-crimes."
      },
      {
        title: "Online Defamation Cases",
        description: "Pursuing civil and criminal remedies for defamatory content published on social media platforms, websites, blogs, and online review portals. We handle content takedown notices to intermediaries under the IT Act, seek injunctions from courts, and pursue damages for reputational harm caused by online defamation."
      },
      {
        title: "Data Privacy Compliance (DPDPA)",
        description: "Advising businesses on compliance with the Digital Personal Data Protection Act, 2023, including consent management frameworks, privacy policy drafting, data processing agreements, data breach notification procedures, Data Protection Impact Assessments, cross-border data transfer mechanisms, and preparation for Data Protection Board proceedings."
      },
      {
        title: "E-Commerce Legal Compliance",
        description: "Ensuring compliance with the IT Act, Consumer Protection (E-Commerce) Rules, 2020, FEMA regulations for cross-border e-commerce, FDI policy for e-commerce, intermediary guidelines, and payment aggregator regulations. We draft terms of service, privacy policies, refund policies, and seller agreements for online platforms."
      },
      {
        title: "Social Media Legal Issues",
        description: "Handling legal disputes arising from social media including cyberbullying, impersonation, unauthorized use of photographs and videos, privacy violations, trolling and harassment campaigns, and disputes with social media platforms regarding content moderation, account suspension, and data access requests."
      }
    ],
    faqs: [
      {
        question: "How do I report a cyber-crime in India?",
        answer: "Cyber-crimes can be reported through the National Cyber Crime Reporting Portal at cybercrime.gov.in (helpline: 1930), at dedicated Cyber Crime Police Stations in your city, or at any local police station (as cyber-crime is a cognizable offence). For financial fraud, immediately call the 1930 helpline to freeze the fraudulent transaction. You should preserve all digital evidence including screenshots, chat records, transaction details, and email headers. You can also file an FIR online through the portal for crimes involving women and children."
      },
      {
        question: "What is the punishment for hacking in India?",
        answer: "Under Section 66 of the IT Act, whoever dishonestly or fraudulently accesses a computer resource without permission (hacking) is punishable with imprisonment up to 3 years and/or fine up to Rs. 5 lakhs. If hacking results in damage to computer systems (Section 43 read with 66), compensation can be awarded by the Adjudicating Officer with no upper limit. Under the BNS, if hacking is committed for the purpose of committing another offence (like fraud, theft, or terrorism), enhanced penalties apply. Cyber terrorism under Section 66F carries life imprisonment."
      },
      {
        question: "What is the Digital Personal Data Protection Act (DPDPA) and who does it affect?",
        answer: "The DPDPA, 2023 is India's comprehensive data protection law that regulates the processing of digital personal data. It applies to all data fiduciaries (entities that determine the purpose and means of processing personal data) processing data of individuals (data principals) within India, as well as processing outside India if it relates to offering goods/services to individuals in India. The Act mandates lawful consent, purpose limitation, data minimization, accuracy, and security. Penalties for non-compliance range from Rs. 50 crores to Rs. 250 crores."
      },
      {
        question: "Can I get defamatory content removed from social media in India?",
        answer: "Yes, you have several legal remedies. First, you can report the content to the social media platform under their community guidelines and the IT (Intermediary Guidelines) Rules, 2021, which require intermediaries to remove content within 36 hours of a government/court order. Second, you can file a civil suit seeking an injunction and damages. Third, you can file a criminal complaint for defamation under Section 356 BNS (formerly 499/500 IPC). Courts have routinely granted interim injunctions directing platforms to remove defamatory content pending trial."
      },
      {
        question: "What precautions should businesses take for cyber security compliance in India?",
        answer: "Businesses should implement reasonable security practices as mandated by the IT Act and DPDPA, including: adopting IS/ISO/IEC 27001 or equivalent security standards, conducting regular security audits, appointing a Data Protection Officer (mandatory for significant data fiduciaries), implementing data breach notification procedures (reporting to the Data Protection Board without delay), maintaining access controls and encryption, training employees on cyber security, and having an incident response plan. CERT-In has mandated that cyber security incidents must be reported within 6 hours of detection."
      }
    ],
    relevantCourts: [
      "Cyber Crime Police Stations (state-level)",
      "Adjudicating Officers under IT Act",
      "Cyber Appellate Tribunal (functions transferred to TDSAT)",
      "Data Protection Board of India (under DPDPA)",
      "High Courts (writ jurisdiction and original civil jurisdiction)"
    ],
    highlights: [
      { stat: "800M+", label: "Internet users in India" },
      { stat: "Rs. 250 Cr", label: "Maximum penalty under DPDPA" },
      { stat: "1930", label: "National Cyber Crime Helpline number" },
      { stat: "6 Hours", label: "CERT-In incident reporting deadline" }
    ],
    commonProblems: [
      "UPI / debit-card / net-banking fraud — money debited without authorisation",
      "Online investment / crypto / share-trading scam (WhatsApp groups, fake apps)",
      "Phishing, OTP fraud, or SIM-swap leading to account compromise",
      "Ransomware, hacking of e-mail / social-media accounts, or business data exfiltration",
      "Online defamation, cyber-stalking, or non-consensual image sharing",
      "Identity theft using stolen Aadhaar / PAN / KYC documents",
      "Job-offer, romance, or matrimonial fraud through online channels",
      "E-commerce / marketplace fraud — fake seller, counterfeit goods, refund denial",
      "Defending a client wrongly named as an accused in a cyber-crime FIR",
      "Data-protection compliance under the DPDPA 2023 for businesses"
    ],
    legalProcess: [
      { step: "Immediate reporting (within 24 hours)", description: "Call 1930 (National Cyber Crime Helpline) or file complaint at cybercrime.gov.in. For banking fraud, also report to bank in writing within 3 working days to limit customer liability under the RBI 2017 circular.", durationHint: "Within 24 hours" },
      { step: "FIR registration", description: "Local Cyber Crime Police Station registers FIR under IT Act 2000 sections (Section 66, 66C, 66D, etc.) and corresponding BNS provisions. Insist on registration even if police suggest waiting.", durationHint: "1–3 days" },
      { step: "Bank / payment-platform engagement", description: "Bank locks the fraudster's account on receipt of complaint; chargeback initiated for card transactions. Banking Ombudsman complaint if bank delays.", durationHint: "Parallel — within 7 days" },
      { step: "Investigation and digital forensics", description: "Police obtain CDRs, IP logs, transaction trails, and may request CERT-In or NCIIPC assistance. KYC of fraudster's account is pulled via court order if required.", durationHint: "30–90 days" },
      { step: "Chargesheet filing", description: "Police file chargesheet under IT Act + IPC/BNS provisions. Special Court for cyber offences takes cognisance.", durationHint: "60–90 days from FIR" },
      { step: "Trial before special / Magistrate court", description: "Charges framed; prosecution and defence evidence; cross-examination of digital evidence including hash verification under Section 65B BSA / IEA.", durationHint: "1–4 years" },
      { step: "Civil remedies in parallel", description: "Civil suit for damages, injunction to remove defamatory content, suit before Adjudicating Officer under Section 46 IT Act for compensation up to ₹5 crores.", durationHint: "Filed in parallel" },
      { step: "Chargeback / refund recovery", description: "If money is traced and recovered, court orders return; otherwise compensation may be ordered as part of conviction.", durationHint: "Varies" }
    ],
    requiredDocuments: [
      "Screenshots of fraudulent transactions, WhatsApp / e-mail / app conversations",
      "Bank statement showing the disputed debits and dispute lodgement entry",
      "SMS, OTP, and call-history extracts with timestamps",
      "Copy of FIR / NCR receipt from the Cyber Crime Police Station",
      "Acknowledgement number from cybercrime.gov.in or call to 1930",
      "Identity proof (Aadhaar, PAN, passport) of the victim",
      "KYC documents for the bank account / wallet used by the fraudster (if known)",
      "Section 65B Bharatiya Sakshya Adhiniyam certificate for electronic evidence",
      "Digital-forensic image / hash of any seized device",
      "Copy of the bank's response and Banking Ombudsman complaint (if filed)",
      "URL / domain registration details (WHOIS) for defamatory / fake-website cases",
      "Vakalatnama in favour of the cyber-crime advocate"
    ],
    timeline: [
      { stage: "Reporting & FIR", duration: "1–3 days" },
      { stage: "Bank refund (where eligible)", duration: "10–90 days" },
      { stage: "Police investigation & chargesheet", duration: "60–90 days" },
      { stage: "Trial — special court", duration: "1–4 years" }
    ],
    outboundReferences: [
      { label: "Information Technology Act, 2000 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1999", source: "India Code" },
      { label: "Digital Personal Data Protection Act, 2023", url: "https://www.indiacode.nic.in/handle/123456789/20065", source: "India Code" },
      { label: "National Cyber Crime Reporting Portal", url: "https://cybercrime.gov.in/", source: "cybercrime.gov.in" },
      { label: "CERT-In (Indian Computer Emergency Response Team)", url: "https://www.cert-in.org.in/", source: "cert-in.org.in" },
      { label: "RBI Integrated Ombudsman (UPI / banking fraud)", url: "https://cms.rbi.org.in/", source: "rbi.org.in" }
    ]
  },

  "arbitration-adr": {
    detailedOverview: [
      "Arbitration and Alternative Dispute Resolution (ADR) have emerged as the preferred methods for resolving commercial and civil disputes in India, offering faster, confidential, and cost-effective alternatives to the overburdened court system. India's arbitration framework, governed by the Arbitration and Conciliation Act, 1996 (as substantially amended in 2015, 2019, and 2021), is modeled on the UNCITRAL Model Law and provides a robust statutory basis for both domestic and international commercial arbitration. At NyaySevak, our ADR practice encompasses arbitration, mediation, conciliation, and Lok Adalat proceedings, helping clients resolve disputes efficiently without the delays inherent in traditional litigation.",
      "The Government of India has taken significant steps to promote India as a global arbitration hub, including the establishment of the India International Arbitration Centre (IIAC) in New Delhi, amendments encouraging institutional arbitration over ad hoc proceedings, the introduction of the Mediation Act, 2023 for a comprehensive mediation framework, and judicial decisions that have increasingly adopted a pro-arbitration stance (limiting court interference with arbitral awards). Indian courts now generally respect party autonomy, enforce arbitration agreements, and adopt a minimal-intervention approach, making arbitration an increasingly attractive option for dispute resolution.",
      "Our ADR practice covers the entire lifecycle of alternative dispute resolution\u2014from drafting effective arbitration and mediation clauses in commercial contracts, to representing clients in arbitral proceedings before sole arbitrators and three-member tribunals, to enforcing or challenging arbitral awards before competent courts. We handle disputes across sectors including construction, infrastructure, joint ventures, shareholder disagreements, insurance, real estate, and international trade. We also represent parties in mediation and conciliation proceedings before accredited mediators and in Lok Adalats organized by the National Legal Services Authority. Additionally, our practice extends to internal and corporate arbitration, resolving intra-corporate disputes such as shareholder conflicts, partnership disagreements, employment arbitration, and joint venture disputes through efficient arbitral mechanisms."
    ],
    keyLegislation: [
      "Arbitration and Conciliation Act, 1996 (as amended in 2015, 2019, 2021)",
      "Mediation Act, 2023",
      "Legal Services Authorities Act, 1987 (Lok Adalats)",
      "Indian Council of Arbitration Rules",
      "SIAC, ICC, LCIA Rules (for international arbitrations seated in India)",
      "New York Convention on Recognition and Enforcement of Foreign Arbitral Awards, 1958"
    ],
    serviceDetails: [
      {
        title: "Domestic & International Arbitration",
        description: "Full-service representation in both domestic arbitration (Part I of the Act) and international commercial arbitration (Part II), including ad hoc arbitrations and institutional arbitrations under MCIA, DIAC, ICA, SIAC, ICC, and LCIA rules. We handle all stages from notice of arbitration through final award and enforcement."
      },
      {
        title: "Arbitration Agreement Drafting",
        description: "Drafting effective arbitration clauses for commercial contracts that clearly specify the scope of arbitration, the seat and venue, the governing law, the number of arbitrators and appointment mechanism, the institutional rules (if any), language of proceedings, and confidentiality provisions. A well-drafted clause prevents threshold jurisdictional challenges."
      },
      {
        title: "Arbitrator Appointment",
        description: "Assisting in the appointment of qualified, independent, and impartial arbitrators through mutual agreement, institutional nomination, or court application under Section 11 of the Act. We maintain a network of experienced arbitrators across practice areas and help clients select arbitrators with relevant subject-matter expertise."
      },
      {
        title: "Award Enforcement & Challenge",
        description: "Filing execution petitions for enforcement of domestic awards under Section 36 and foreign awards under Part II (New York Convention) of the Act. We also handle setting-aside applications under Section 34 on grounds of incapacity, invalid agreement, lack of notice, excess jurisdiction, procedural irregularity, or conflict with Indian public policy."
      },
      {
        title: "Mediation & Conciliation",
        description: "Representing parties in mediation proceedings under the new Mediation Act, 2023, court-annexed mediation programs, and conciliation under Part III of the Arbitration Act. Mediation offers a collaborative, non-adversarial process where a neutral mediator facilitates negotiation between disputing parties to reach a mutually acceptable settlement."
      },
      {
        title: "Lok Adalat Representation",
        description: "Representing parties in Lok Adalats organized under the Legal Services Authorities Act, 1987. Awards passed in Lok Adalats are deemed decrees of civil courts, are final and binding, and are non-appealable. We help clients prepare their cases effectively for these settlement-focused forums, which handle motor accident claims, matrimonial disputes, labour disputes, and pre-litigation matters."
      },
      {
        title: "Internal & Corporate Arbitration",
        description: "Resolution of intra-corporate and internal disputes through arbitration, including shareholder disagreements, partnership dissolution conflicts, employment arbitration clauses, joint venture disputes, promoter-investor conflicts, and disagreements arising under articles of association or shareholder agreements. We draft arbitration-friendly corporate governance documents and represent parties in institutional and ad hoc proceedings for internal business disputes."
      }
    ],
    faqs: [
      {
        question: "What is the difference between arbitration and mediation in India?",
        answer: "Arbitration is a quasi-judicial process where parties submit their dispute to one or more arbitrators who render a binding award after hearing both sides. The process is adversarial, similar to court proceedings, and the award is enforceable like a court decree. Mediation, under the new Mediation Act, 2023, is a facilitative process where a neutral mediator helps parties negotiate and reach a voluntary settlement. The mediator does not impose a decision\u2014the outcome depends on mutual agreement. Mediated settlements, once signed, are enforceable as court judgments."
      },
      {
        question: "How long does arbitration take in India?",
        answer: "Under Section 29A of the Arbitration Act (as amended), domestic arbitration awards must be made within 12 months from the date the arbitral tribunal enters reference, extendable by 6 months with parties' consent. Beyond 18 months, the mandate of the arbitrator terminates unless the court extends it. In practice, complex commercial arbitrations may take 12-24 months. International commercial arbitrations are not subject to the statutory timeline. Institutional arbitrations under MCIA or DIAC rules also have their own expedited timelines."
      },
      {
        question: "Can an arbitral award be challenged in Indian courts?",
        answer: "Yes, a domestic arbitral award can be challenged (set aside) under Section 34 of the Arbitration Act within 3 months (extendable by 30 days) of receiving the award. Grounds for challenge are limited to: incapacity of a party, invalidity of the arbitration agreement, lack of proper notice, the award dealing with disputes beyond the scope of arbitration, improper composition of the tribunal, or the award being in conflict with Indian public policy. Courts adopt a narrow interpretation of 'public policy' and do not sit in appeal over the merits of the award."
      },
      {
        question: "What is a Lok Adalat and how does it help resolve disputes?",
        answer: "A Lok Adalat (People's Court) is an ADR forum organized under the Legal Services Authorities Act, 1987, where pending or pre-litigation disputes are settled through compromise and negotiation. Key advantages include: no court fees (any fees paid are refunded), no strict procedural rules, awards are final and non-appealable, and the process is usually completed in a single sitting. Lok Adalats commonly handle motor accident compensation claims, matrimonial disputes (except divorce), labour disputes, utility bill disputes, and cases involving public utility services."
      },
      {
        question: "How is a foreign arbitral award enforced in India?",
        answer: "Foreign arbitral awards are enforced in India under Part II of the Arbitration Act, which implements the New York Convention, 1958 and the Geneva Convention, 1927. To enforce a foreign award, the party must file an application before the competent High Court with the original award or certified copy, the original arbitration agreement, and evidence that the award is from a notified country. The court can refuse enforcement on limited grounds including invalidity of agreement, violation of natural justice, the award being beyond the scope of arbitration, or enforcement being contrary to Indian public policy."
      },
      {
        question: "Can internal corporate disputes be resolved through arbitration?",
        answer: "Yes, internal corporate disputes — including shareholder disagreements, partnership dissolution conflicts, promoter-investor disputes, and disagreements under joint venture agreements — are increasingly being resolved through arbitration. Arbitration clauses in shareholder agreements, articles of association, and partnership deeds are enforceable. The Supreme Court in Booz Allen & Hamilton Inc. v. SBI Home Finance (2011) clarified which disputes are arbitrable, and most commercial corporate disputes fall within this scope. However, matters involving winding up, oppression and mismanagement under Sections 241-242 of the Companies Act are generally non-arbitrable and must be adjudicated by the NCLT."
      }
    ],
    relevantCourts: [
      "High Courts (Section 11 appointment & Section 34 challenges)",
      "District Courts (execution of domestic awards)",
      "India International Arbitration Centre (IIAC)",
      "Mumbai Centre for International Arbitration (MCIA)",
      "Lok Adalats (National & State Legal Services Authorities)"
    ],
    highlights: [
      { stat: "12 Months", label: "Statutory deadline for domestic arbitration" },
      { stat: "160+", label: "Countries party to the New York Convention" },
      { stat: "Zero", label: "Court fees in Lok Adalat proceedings" },
      { stat: "Non-Appealable", label: "Lok Adalat awards are final" }
    ],
    commonProblems: [
      "Commercial contract dispute with an arbitration clause — invoking arbitration",
      "Need to draft an arbitration clause in a new commercial agreement",
      "Court application under Section 11 for arbitrator appointment when other side stonewalls",
      "Section 9 application — urgent interim relief before / during arbitration",
      "Section 34 application — challenging or defending a domestic arbitral award",
      "Section 36 — enforcement of an arbitral award as a decree",
      "Section 48 — enforcement of a foreign award under the New York Convention",
      "Institutional arbitration under MCIA / DIAC / ICA / SIAC / ICC / LCIA rules",
      "Mediation under the Mediation Act 2023 / court-annexed mediation",
      "Lok Adalat settlement and award (cheque-bounce, MV claims, family matters)"
    ],
    legalProcess: [
      { step: "Section 21 — notice invoking arbitration", description: "Claimant serves written notice on respondent invoking arbitration clause; arbitration is commenced on date of receipt of notice. Limitation under Article 137 Limitation Act starts running.", durationHint: "Same day" },
      { step: "Appointment of arbitrator(s)", description: "By mutual agreement, by institutional nomination (MCIA / DIAC), or by Section 11 application to High Court / Supreme Court Chief Justice's designate.", durationHint: "30 days mutual / 3–6 months Section 11" },
      { step: "Preliminary hearing", description: "Arbitrator(s) fix the seat, venue, language, procedural timeline, and confidentiality protocols. Statement of claim filed within 30 days.", durationHint: "1–2 months" },
      { step: "Pleadings — claim, defence, counter-claim", description: "Statement of claim, statement of defence and counter-claim, reply, and rejoinder. Documents disclosed and inspected.", durationHint: "3–6 months" },
      { step: "Evidence — affidavit and cross-examination", description: "Witness affidavits filed; oral cross-examination; expert evidence where required. Documents exhibited.", durationHint: "3–9 months" },
      { step: "Final arguments and award", description: "Statutory time limit — 12 months from completion of pleadings (extendable by 6 months by parties' consent; further extension only by court).", durationHint: "Within 12 months of pleadings" },
      { step: "Section 34 challenge to award", description: "Aggrieved party can apply under Section 34 within 3 months (extendable by 30 days) — grounds limited to incapacity, invalid agreement, lack of notice, beyond jurisdiction, procedural irregularity, conflict with Indian public policy.", durationHint: "3 months + 30 days" },
      { step: "Section 36 / 48 enforcement", description: "Award enforceable as a decree once the Section 34 challenge fails or limitation expires. Foreign awards enforced under Part II after satisfying Section 48 grounds.", durationHint: "6 months – 2 years" }
    ],
    requiredDocuments: [
      "The underlying contract / agreement containing the arbitration clause",
      "Section 21 notice invoking arbitration and proof of dispatch (RPAD AD)",
      "All correspondence, e-mails, invoices, and dispute-related documents",
      "Statement of claim with computation of damages and interest",
      "Witness affidavits, expert reports, and supporting documentation",
      "Arbitration agreement (if separate) or supplementary agreement",
      "Institutional rules (where institutional arbitration — MCIA / DIAC / ICC)",
      "Power of attorney and vakalatnama for counsel",
      "List of authorities and case-law compilation",
      "Award copy (for Section 34 / Section 36 / Section 48 proceedings)",
      "Foreign award and certified translation (for Section 48)",
      "Pre-deposit / security details (for award challenge)"
    ],
    timeline: [
      { stage: "Section 21 notice to first hearing", duration: "1–6 months" },
      { stage: "Pleadings & evidence", duration: "6–12 months" },
      { stage: "Award (statutory cap)", duration: "12 months (+ 6 month extension)" },
      { stage: "Section 34 challenge and enforcement", duration: "1–3 years" }
    ],
    outboundReferences: [
      { label: "Arbitration and Conciliation Act, 1996 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1978", source: "India Code" },
      { label: "Mediation Act, 2023 — full text", url: "https://www.indiacode.nic.in/handle/123456789/20066", source: "India Code" },
      { label: "Mumbai Centre for International Arbitration (MCIA)", url: "https://mcia.org.in/", source: "mcia.org.in" },
      { label: "India International Arbitration Centre (IIAC)", url: "https://iiac.gov.in/", source: "iiac.gov.in" },
      { label: "National Legal Services Authority (NALSA) — Lok Adalats", url: "https://nalsa.gov.in/", source: "nalsa.gov.in" }
    ]
  },

  "documentation": {
    detailedOverview: [
      "Need a legal document drafted, notarised, or attested in India? NyaySevak's verified documentation lawyers prepare affidavits, sale deeds, gift deeds, lease deeds, power of attorney (general and special), wills, partnership deeds, MOUs, NDAs, employment contracts, and legal notices — with proper stamp duty, registration, and notarisation across every Indian state. From simple affidavits and POA drafting to Ministry of External Affairs (MEA) apostille and embassy attestation for international use, gazette notifications for name changes, e-stamp procurement, and certified legal translation, our team delivers same-day turnaround for urgent requirements and supports individuals, families, businesses, NRIs, and foreign nationals. Paid case assessment available.",
      "India's documentation framework is governed by multiple statutes including the Registration Act, 1908 (mandating registration of certain documents), the Indian Stamp Act, 1899 (requiring stamp duty on instruments), the Notaries Act, 1952, the Indian Evidence Act/Bharatiya Sakshya Adhiniyam (governing the admissibility of documents as evidence), and the Apostille Convention for international document authentication. Each state has its own stamp duty rates, registration procedures, and documentation requirements, making it essential to work with legal professionals who understand the local regulatory landscape.",
      "Our documentation services extend beyond mere drafting to include document verification, notarization, attestation by the Ministry of External Affairs (MEA) for apostille, gazette notifications for name changes, e-stamp procurement, legal translation (for documents in regional languages), and guidance on stamp duty optimization. We serve individuals, families, businesses, NRIs, and foreign nationals requiring legal documents for use in India or abroad. Our digital-first approach allows clients across India to access our documentation services remotely, with physical document delivery through secure courier."
    ],
    keyLegislation: [
      "Registration Act, 1908",
      "Indian Stamp Act, 1899 (and state-specific Stamp Acts)",
      "Notaries Act, 1952",
      "Bharatiya Sakshya Adhiniyam, 2023 (admissibility of documents)",
      "Powers of Attorney Act, 1882",
      "Indian Succession Act, 1925 (wills and probate)",
      "Hague Apostille Convention, 1961 (ratified by India in 2023)",
      "Gazette of India (for name change and other notifications)"
    ],
    serviceDetails: [
      {
        title: "Notary Services",
        description: "Comprehensive notarial services by empaneled Notaries Public including authentication of documents, notarization of affidavits and declarations, verification of copies (true copies), attestation of signatures, administration of oaths, and notarial certificates for documents intended for use in India and abroad."
      },
      {
        title: "Affidavit Drafting & Attestation",
        description: "Professional drafting and attestation of affidavits for various purposes including court proceedings, property transactions, name changes, date of birth corrections, income declarations, address proof, heirship declarations, and compliance affidavits. All affidavits are drafted on appropriate stamp paper and attested before a Notary Public or Magistrate."
      },
      {
        title: "Apostille Services (MEA)",
        description: "End-to-end apostille services for documents requiring international authentication under the Hague Apostille Convention. We handle apostille of educational certificates, commercial documents, personal documents (birth/marriage/death certificates), and powers of attorney through the Ministry of External Affairs (MEA) and authorized state agencies."
      },
      {
        title: "Power of Attorney (General & Special)",
        description: "Drafting of General Power of Attorney (GPA) granting broad authority to act on behalf of the principal, and Special Power of Attorney (SPA) for specific transactions such as property sale, bank operations, or legal representation. For NRIs, we arrange execution before the Indian Embassy/Consulate and subsequent adjudication and registration in India."
      },
      {
        title: "Name Change (Gazette & Newspaper)",
        description: "Complete name change process including drafting and filing of name change affidavit, publication in the Official Gazette of India (central or state), publication in two newspapers (one local, one national), and guidance on updating name across government records (Aadhaar, PAN, passport, voter ID, and educational certificates)."
      },
      {
        title: "E-Stamp Paper Procurement",
        description: "Procurement of e-stamp papers of required denominations through the SHCIL (Stock Holding Corporation of India Limited) authorized centres for all types of legal documents including agreements, deeds, affidavits, and bonds. We advise on the correct stamp duty applicable based on the nature of the document and the state of execution."
      },
      {
        title: "Legal Translation",
        description: "Certified legal translation of documents between English, Hindi, and major regional languages for court submissions, property transactions, immigration purposes, and international document authentication. Our translations are done by qualified legal translators who understand both legal terminology and cultural context."
      },
      {
        title: "Document Attestation (Educational, Commercial, Personal)",
        description: "Multi-level document attestation services for use abroad including notary attestation, state Home Department/HRD authentication, MEA attestation/apostille, and Embassy attestation (for non-Hague countries). We handle educational certificates (degrees, transcripts, mark sheets), commercial documents (MOA, AOA, invoices), and personal documents."
      }
    ],
    faqs: [
      {
        question: "What is the difference between notarization and apostille in India?",
        answer: "Notarization is the process of having a document authenticated by a Notary Public under the Notaries Act, 1952, certifying the identity of the signatory and the authenticity of the signature. It is sufficient for domestic use. Apostille is an international certification under the Hague Convention that authenticates documents for use in member countries without further legalization. Since India ratified the Hague Apostille Convention in 2023, Indian documents can be apostilled by the MEA for use in 120+ member countries."
      },
      {
        question: "How do I change my name legally in India?",
        answer: "Legal name change in India involves three steps: (1) Execute a name change affidavit on stamp paper, sworn before a Notary Public or Magistrate; (2) Publish a name change advertisement in the Official Gazette of India (through the Department of Publication) and in at least two newspapers (one local, one national); (3) Update your name across all government documents including Aadhaar, PAN card, passport, voter ID, driving license, and bank accounts by submitting the affidavit and gazette notification as proof."
      },
      {
        question: "What is the stamp duty for different types of documents in India?",
        answer: "Stamp duty varies by state and document type. Common examples: Sale deeds attract 3-8% of property value (varies by state, with concessions for women in some states); Gift deeds range from 2-7%; Lease agreements require stamp duty based on annual rent and lease period; Power of Attorney may require fixed or ad valorem duty; Affidavits typically require Rs. 10-100 stamp paper. Non-payment or underpayment of stamp duty renders the document inadmissible as evidence and attracts penalties up to 10 times the deficiency."
      },
      {
        question: "Can an NRI execute a Power of Attorney for property transactions in India?",
        answer: "Yes, NRIs can execute a Power of Attorney (POA) at the Indian Embassy or Consulate in their country of residence. The POA must be attested by the Indian diplomatic officer and subsequently adjudicated (stamp duty paid) and registered at the Sub-Registrar's office in India within 3 months of receipt. For property sale transactions, a Special Power of Attorney specifying the exact property and transaction details is recommended over a General Power of Attorney to reduce the risk of misuse."
      },
      {
        question: "Which documents need to be compulsorily registered in India?",
        answer: "Under Section 17 of the Registration Act, 1908, the following documents must be compulsorily registered: documents transferring immovable property valued above Rs. 100 (sale deeds, gift deeds, exchange deeds), leases of immovable property for more than 1 year, and documents acknowledging receipt of consideration for property transfers. Non-registration of compulsorily registrable documents renders them inadmissible as evidence and unenforceable. Additionally, certain documents like wills, adoptions, and powers of attorney are optionally registrable but registration is strongly recommended."
      }
    ],
    relevantCourts: [
      "Sub-Registrar's Office (document registration)",
      "Notaries Public (document authentication)",
      "Ministry of External Affairs (apostille and attestation)",
      "Department of Publication (Gazette notifications)",
      "District Courts (probate and succession certificates)"
    ],
    highlights: [
      { stat: "120+", label: "Countries accepting apostilled documents" },
      { stat: "24-48 Hrs", label: "Typical affidavit turnaround time" },
      { stat: "15+", label: "Languages supported for legal translation" },
      { stat: "100%", label: "Digital-ready documentation process" }
    ],
    commonProblems: [
      "Need a property sale deed, gift deed, or lease deed drafted with correct stamp duty",
      "General or Special Power of Attorney for property / banking / litigation matters",
      "Drafting a will, codicil, or trust deed with proper succession planning",
      "Affidavit for name change, address change, lost document, or income declaration",
      "Partnership deed, LLP agreement, MOU, NDA, or service agreement for business",
      "Apostille / MEA attestation of educational certificates for use abroad",
      "Gazette notification for legal name change",
      "Certified translation of documents into / from regional languages",
      "Notarisation, e-stamping, and stamp-duty payment guidance for any state",
      "Probate of will or letters of administration for intestate succession"
    ],
    legalProcess: [
      { step: "Requirement intake and scope clarification", description: "Lawyer captures parties, purpose, jurisdiction, and consideration to decide the correct document type and applicable stamp / registration treatment.", durationHint: "Same day" },
      { step: "Stamp-duty and registration mapping", description: "Computation of state-specific stamp duty under the Indian Stamp Act 1899 + state amendments; decide whether registration is mandatory under Section 17 Registration Act 1908 or optional under Section 18.", durationHint: "Same day" },
      { step: "Drafting", description: "Document drafted with all standard clauses (recitals, consideration, indemnity, jurisdiction, dispute resolution) and party-specific terms. Reviewed for ambiguity and enforceability.", durationHint: "24–48 hours" },
      { step: "Client review and revisions", description: "Draft circulated for review; two rounds of revisions included. Parallel KYC and identity-proof verification of executants.", durationHint: "1–3 days" },
      { step: "Stamping / e-stamp procurement", description: "Stamp paper purchased (or e-stamp from SHCIL) of correct denomination; document typed / printed on or affixed to the stamp.", durationHint: "Same day" },
      { step: "Execution and notarisation", description: "Document signed by all parties before two witnesses; notarised by an advocate-notary under the Notaries Act 1952 where required.", durationHint: "Same day" },
      { step: "Registration (where mandatory)", description: "Presentation before Sub-Registrar within 4 months of execution; biometric capture; registration fee paid; registered document issued.", durationHint: "Same day to 1 week" },
      { step: "Apostille / attestation (for international use)", description: "Notary → State Home Department / HRD → MEA apostille (for Hague Convention countries) or embassy attestation (for non-Hague countries).", durationHint: "7–21 days" }
    ],
    requiredDocuments: [
      "Identity proof of all parties (Aadhaar + PAN + passport-size photographs)",
      "Address proof of all parties (utility bill, registered lease, voter ID)",
      "Title deed / parent document (for property-related drafting)",
      "Encumbrance certificate (for property sale / mortgage drafting)",
      "Bank account details (for consideration / payment-clause documents)",
      "Marriage / birth / death certificates (for succession-related documents)",
      "Educational certificates / transcripts (for apostille and attestation)",
      "Original document to be notarised / attested (with self-attested copy)",
      "Affidavit of identity / no-objection from related parties (where applicable)",
      "Stamp-duty payment proof (e-stamp / franking / treasury challan)",
      "Two passport-size photographs of each executant (for registration)",
      "Authorisation letter (if executed through a representative)"
    ],
    timeline: [
      { stage: "Affidavits & simple POA", duration: "24–48 hours" },
      { stage: "Drafting sale / lease / gift deed", duration: "2–5 days" },
      { stage: "Stamping, registration & mutation", duration: "1–3 weeks" },
      { stage: "MEA apostille / embassy attestation", duration: "1–3 weeks" }
    ],
    outboundReferences: [
      { label: "Registration Act, 1908 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2168", source: "India Code" },
      { label: "Indian Stamp Act, 1899 — full text", url: "https://www.indiacode.nic.in/handle/123456789/2304", source: "India Code" },
      { label: "Notaries Act, 1952 — full text", url: "https://www.indiacode.nic.in/handle/123456789/1564", source: "India Code" },
      { label: "Ministry of External Affairs — Apostille service", url: "https://www.mea.gov.in/apostille.htm", source: "mea.gov.in" },
      { label: "SHCIL e-Stamping portal", url: "https://www.shcilestamp.com/", source: "shcilestamp.com" }
    ]
  },

  "legal-notices": {
    detailedOverview: [
      "Need to send or reply to a legal notice in India? NyaySevak's verified legal-notice lawyers draft and dispatch cheque-bounce notices under Section 138 NI Act, eviction notices, defamation notices, recovery notices, consumer notices, Section 80 CPC notices against the Government, and matrimonial / employment notices — with proper statutory wording, correct limitation periods, and registered-post / e-mail / courier dispatch tracking. A well-drafted notice resolves the majority of disputes pre-litigation, saves court fees, and creates the documentary record courts treat as serious intent. Book a case assessment in 60 seconds.",
      "A legal notice is the formal written demand sent by one party to another setting out a grievance, the legal basis for the claim, the relief sought, and a deadline — usually 15 to 30 days — within which compliance is expected. Under several Indian statutes the notice is a statutory pre-condition to filing suit (e.g., Section 138 NI Act for cheque-bounce, Section 80 CPC for suits against the Government, Section 12-A Commercial Courts Act for mandatory pre-institution mediation in commercial disputes, and Section 8 Consumer Protection Act 2019 for consumer complaints). A defective notice can lead to dismissal of the subsequent suit on a pure technicality.",
      "Our notice practice covers both sides — sending notices to make a demand and replying to notices received (where the reply protects you from adverse inferences in subsequent litigation). We draft in plain language with the legal citations a court expects, dispatch by Registered Post with Acknowledgement Due (RPAD) and / or speed post and / or e-mail, retain the postal receipt and AD card as proof of service, and follow up if the notice is wilfully refused or undelivered — refusal is judicial deemed service under Section 27 General Clauses Act 1897."
    ],
    keyLegislation: [
      "Negotiable Instruments Act, 1881 (Section 138 — cheque bounce)",
      "Code of Civil Procedure, 1908 (Section 80 — notice to Government)",
      "Commercial Courts Act, 2015 (Section 12-A — mandatory pre-institution mediation)",
      "Consumer Protection Act, 2019 (Section 8 — pre-complaint notice)",
      "Indian Contract Act, 1872 (notice of breach, repudiation)",
      "Bharatiya Nyaya Sanhita, 2023 (defamation — Section 356)",
      "Hindu Marriage Act, 1955 (divorce-ground intimation)",
      "General Clauses Act, 1897 (Section 27 — service by post)",
      "Information Technology Act, 2000 (notice via electronic record)",
      "Industrial Disputes Act, 1947 (Section 9-A change-of-service notice)"
    ],
    serviceDetails: [
      { title: "Cheque-Bounce Notice (Section 138 NI Act)", description: "Drafted within 30 days of bank dishonour memo, giving the drawer 15 days to make good. Failure starts the 30-day window to file a complaint under Section 138. We draft, dispatch by RPAD + speed post, and follow up." },
      { title: "Eviction Notice to Tenant", description: "Drafted under the applicable state Rent-Control Act (Delhi Rent Control Act, Maharashtra Rent Control Act, Karnataka Rent Act, etc.) or the Model Tenancy Act 2021 where adopted. Specifies grounds — non-payment, breach, bona-fide need — and notice period (typically 1–3 months)." },
      { title: "Defamation Notice", description: "Civil defamation notice claiming damages and injunction; criminal defamation notice under Section 356 BNS / Section 499 IPC where the imputation is per-se defamatory. Pre-publication injunction notices for social-media / press defamation." },
      { title: "Recovery / Demand Notice", description: "For unpaid invoices, loans, salary, deposits, or contractual dues. Specifies amount, basis, limitation period (3 years for contract / 6 years for negotiable instrument), and demand for payment with interest." },
      { title: "Consumer Protection Notice", description: "Statutory pre-complaint notice under Section 8 CPA 2019 for defective product / deficient service / unfair-trade-practice claims before filing at District / State / National Commission." },
      { title: "Section 80 CPC Notice (Government & Public Officers)", description: "Mandatory 2-month notice before suing the Government or a public officer acting in official capacity. Failure renders the subsequent suit liable to be dismissed under Section 80(1)." },
      { title: "Divorce / Matrimonial Notice", description: "Pre-petition notice to spouse setting out grounds under Section 13 HMA / SMA / IDA. Often the trigger that brings the other side to the settlement table for mutual-consent divorce." },
      { title: "Employment / Wrongful-Termination Notice", description: "For sudden dismissal without notice pay, unpaid salary, withheld gratuity, denied PF/ESI, hostile work environment, or POSH-Act-related grievances. Often resolves without industrial tribunal proceedings." },
      { title: "Reply to a Legal Notice", description: "Drafting a calibrated reply that admits what is true, denies what is false, raises lawful defences, asserts counter-claims if any, and avoids self-incrimination. Wrong silences become adverse inferences in court." },
      { title: "RTI Notice & Second Appeal", description: "First appeal under Section 19(1) RTI Act and second appeal before the Central / State Information Commission for non-disclosure, evasive response, or excessive fee demand." }
    ],
    faqs: [
      { question: "Is sending a legal notice mandatory before filing a case in India?", answer: "It depends on the statute. For Section 138 NI Act cheque-bounce cases, Section 80 CPC suits against the Government, Section 12-A Commercial Courts Act commercial disputes, and Section 8 Consumer Protection Act complaints, notice is a statutory pre-condition. For most other civil suits notice is not mandatory but is strategically advisable because (i) it can resolve the matter without litigation, (ii) it creates a documentary record of the demand, and (iii) it may save costs of mandatory mediation later." },
      { question: "What is the standard notice period — 15 days or 30 days?", answer: "For Section 138 NI Act cheque-bounce: 15 days. For Section 80 CPC against Government: 2 months. For Section 12-A Commercial Courts Act mediation: the mediation period itself is 3 months. For most contractual notices, the standard is 15–30 days. The notice should explicitly state the period. Anything shorter than statutory minima is invalid." },
      { question: "Can I send a legal notice by e-mail?", answer: "Yes — Section 4 IT Act 2000 recognises e-records, and courts have repeatedly accepted e-mail service where the recipient's e-mail is known and previously used. However, for statutory notices (Section 138 NI Act, Section 80 CPC) best practice is to send by Registered Post with Acknowledgement Due (RPAD) plus speed post plus e-mail to be unimpeachable. Retain all dispatch receipts and AD cards as evidence." },
      { question: "What happens if the other party refuses to accept the notice?", answer: "Refusal is treated as deemed service under Section 27 General Clauses Act 1897 read with the postal endorsement \"refused\". Similarly an \"unclaimed\" notice properly addressed and dispatched is also deemed served. Courts have held in repeated rulings (most recently in cheque-bounce jurisprudence) that the addressee cannot defeat statutory notice by deliberately avoiding postal delivery." },
      { question: "Should I reply to a legal notice I received?", answer: "Almost always yes — a calibrated reply admits what is true, denies what is false, raises your lawful defences, and avoids the adverse inference that silence often invites. Failure to reply is not itself a cause of action, but courts can and do treat unrebutted allegations as accepted. The exception is where the notice itself is illegal (e.g., demanding something a court has already adjudicated), in which case a one-paragraph dignified refusal is enough." },
      { question: "How much does it cost to send a legal notice in India?", answer: "Lawyer drafting fees typically range from ₹500 (simple cheque-bounce / recovery notice) to ₹5,000–₹15,000 (complex commercial / defamation / Section 80 CPC notices). Dispatch costs add ₹50–₹200 per recipient (RPAD + speed post). NyaySevak's transparent fee structure shows the price up front before you book." }
    ],
    relevantCourts: [
      "No court at this stage — pre-litigation route",
      "Magistrate Court (post-Section 138 NI Act complaint)",
      "District / High Court (suit after Section 80 CPC notice)",
      "Consumer Disputes Redressal Commissions",
      "Industrial / Labour Tribunal (post-employment notice)"
    ],
    highlights: [
      { stat: "15 Days", label: "Statutory notice period for cheque bounce" },
      { stat: "2 Months", label: "Mandatory notice period under Section 80 CPC" },
      { stat: "24–48 Hrs", label: "Standard turnaround for notice drafting" },
      { stat: "Pan-India", label: "Dispatch via RPAD + speed post + e-mail" }
    ],
    commonProblems: [
      "Cheque issued in your favour has bounced and you need to act within 30 days",
      "Tenant is in arrears or refuses to vacate after lease expiry",
      "Online or press defamation that needs immediate take-down and apology",
      "Unpaid invoice / loan / salary / deposit needs formal demand before suit",
      "Defective product or deficient service that pre-complaint notice must precede",
      "Government department's wrongful order — Section 80 CPC notice before writ / suit",
      "Spouse is unreachable for mutual-consent talks — matrimonial notice opens dialogue",
      "Sudden dismissal without notice pay / unpaid gratuity / PF dues",
      "Notice has been served on you and you need a calibrated reply to protect your position",
      "Public Information Officer is stonewalling an RTI — second appeal needed"
    ],
    legalProcess: [
      { step: "Capture the facts and the relief sought", description: "Lawyer captures the dispute chronology, supporting documents, the legal claim, and the precise relief (refund / compliance / vacating / apology / damages).", durationHint: "Same day" },
      { step: "Identify the statutory framework", description: "Decide whether the notice is statutory (Section 138 NI Act / Section 80 CPC / Section 12-A Commercial Courts Act / Section 8 CPA 2019) or contractual; this dictates the mandatory wording, period, and addressee.", durationHint: "Same day" },
      { step: "Draft the notice", description: "Plain-language facts, statutory citations, computation of damages, the precise demand, and the deadline. Reviewed for ambiguity, limitation period, and missing parties.", durationHint: "24–48 hours" },
      { step: "Client review and sign-off", description: "Draft circulated, two rounds of revisions, then signed by the advocate and counter-signed by the client (where appropriate).", durationHint: "1–2 days" },
      { step: "Dispatch by multiple modes", description: "Registered Post with AD (RPAD) for statutory unimpeachability, speed post for tracking, courier for redundancy, and e-mail to all known IDs. Each mode generates an independent proof of dispatch.", durationHint: "Same day" },
      { step: "Track service and acknowledgement", description: "Postal AD card is filed; speed-post tracking is monitored; e-mail read-receipts are saved. Refused / unclaimed endorsements treated as deemed service under Section 27 General Clauses Act.", durationHint: "7–14 days" },
      { step: "Follow-up and reply analysis", description: "If the recipient replies, the reply is analysed and a rejoinder is drafted if needed. If no reply comes within the deadline, evidence of service is preserved for the subsequent suit.", durationHint: "Within the deadline" },
      { step: "Escalation to suit / complaint", description: "If the demand is not met, suit / complaint is filed within the limitation period (30 days from cheque-bounce notice expiry; 2 years for CPA; 3 years for contract; etc.).", durationHint: "After the notice deadline lapses" }
    ],
    requiredDocuments: [
      "Identity proof of sender (Aadhaar / PAN / Passport) and recipient details",
      "All correspondence, e-mails, WhatsApp chats relating to the dispute",
      "Invoices, contracts, agreements, or undertakings forming the basis of the demand",
      "Bank statement / cheque image / dishonour memo (for Section 138 NI Act notices)",
      "Lease deed, rent receipts, and arrears statement (for eviction notices)",
      "Defamatory publication / screenshots / URL (for defamation notices)",
      "Termination letter, last salary slip, PF / gratuity statements (for employment notices)",
      "Order, application, RTI response, and PIO designation (for RTI second appeals)",
      "Marriage certificate and grounds-evidence (for matrimonial notices)",
      "Photographs and site plans for property / tenancy notices",
      "Limitation calculation showing the demand is within time",
      "Postal address proof of the recipient (for RPAD acceptance)"
    ],
    timeline: [
      { stage: "Drafting and dispatch", duration: "24–72 hours" },
      { stage: "Statutory notice period", duration: "15–60 days" },
      { stage: "Reply analysis & follow-up", duration: "7–14 days" },
      { stage: "Filing of suit / complaint (if needed)", duration: "Within statutory limitation" }
    ],
    outboundReferences: [
      { label: "Negotiable Instruments Act, 1881 (Section 138)", url: "https://www.indiacode.nic.in/handle/123456789/2189", source: "India Code" },
      { label: "Code of Civil Procedure, 1908 (Section 80 notice)", url: "https://www.indiacode.nic.in/handle/123456789/2191", source: "India Code" },
      { label: "Commercial Courts Act, 2015 (Section 12-A)", url: "https://www.indiacode.nic.in/handle/123456789/2143", source: "India Code" },
      { label: "Consumer Protection Act, 2019 (Section 8)", url: "https://www.indiacode.nic.in/handle/123456789/15256", source: "India Code" },
      { label: "General Clauses Act, 1897 (Section 27 — deemed service)", url: "https://www.indiacode.nic.in/handle/123456789/2308", source: "India Code" }
    ]
  },

  "additional-services": {
    detailedOverview: [
      "Beyond our core practice areas, NyaySevak offers a range of specialized additional legal services designed to address the diverse and evolving needs of individuals, businesses, and institutions across India. These services encompass legal opinions and advisory for complex legal questions, in-depth legal research and analysis for litigation strategy, comprehensive due diligence for transactions and investments, drafting and responding to legal notices, filing Right to Information (RTI) applications, and competition law advisory before the Competition Commission of India (CCI). Each of these services leverages our multidisciplinary legal expertise to deliver precise, actionable, and timely counsel.",
      "Legal opinions and advisory services are critical when clients face complex legal questions that require authoritative analysis before making significant decisions\u2014whether it's a business evaluating the legal viability of a proposed transaction, an individual seeking clarity on their rights under a disputed contract, or an NRI requiring guidance on Indian property or succession laws. Our legal opinions are meticulously researched, cite relevant statutory provisions and judicial precedents, and provide clear, actionable conclusions. We take professional responsibility for the opinions we render and maintain the highest standards of legal scholarship.",
      "Our legal research and due diligence capabilities are powered by access to comprehensive legal databases, court records across all Indian jurisdictions, corporate and regulatory filings, and property records. Whether you need a litigation risk assessment before acquiring a company, a regulatory compliance review before entering a new market, or a legal notice that clearly establishes your position and sets the stage for potential litigation, our team delivers thorough, reliable, and strategically aligned work product. We also specialize in RTI applications\u2014a powerful tool for citizens to obtain information from public authorities under the Right to Information Act, 2005."
    ],
    keyLegislation: [
      "Right to Information Act, 2005",
      "Competition Act, 2002",
      "Indian Contract Act, 1872",
      "General Clauses Act, 1897",
      "Bharatiya Nyaya Sanhita, 2023 (for legal notices in criminal context)",
      "Bharatiya Nagarik Suraksha Sanhita, 2023 (procedural aspects)",
      "Companies Act, 2013 (for corporate due diligence)",
      "Foreign Exchange Management Act, 1999 (for cross-border due diligence)"
    ],
    serviceDetails: [
      {
        title: "Legal Opinion & Advisory",
        description: "Providing well-researched, authoritative legal opinions on complex questions of law covering all practice areas. Our opinions analyze applicable statutory provisions, relevant judicial precedents from the Supreme Court and High Courts, and regulatory guidelines to provide clients with clear, actionable conclusions for decision-making on transactions, disputes, and compliance matters."
      },
      {
        title: "Legal Research & Analysis",
        description: "In-depth legal research on specific questions of law, emerging legal issues, or comparative analysis of legal positions across jurisdictions. Our research covers Indian statute law, case law analysis (including unreported judgments), legislative history, Law Commission reports, and international best practices. We deliver structured research memos with citations and strategic analysis."
      },
      {
        title: "Due Diligence Services",
        description: "Comprehensive legal due diligence for mergers and acquisitions, real estate transactions, startup investments, and joint ventures. Our due diligence covers corporate records (MCA filings, board resolutions), litigation search (across all courts and tribunals), regulatory compliance review, IP portfolio assessment, material contract review, and real estate title examination with encumbrance analysis."
      },
      {
        title: "Legal Notices & Replies",
        description: "Drafting and sending legal notices under various statutes including notices for breach of contract, property disputes, cheque dishonour (Section 138 NI Act), employment termination, defamation, recovery of dues, and consumer complaints. We also draft strategic replies to legal notices received, protecting our clients' legal positions while keeping avenues for resolution open."
      },
      {
        title: "RTI Applications",
        description: "Drafting and filing Right to Information (RTI) applications under the RTI Act, 2005 with central and state public authorities. We help citizens obtain information regarding government decisions, public expenditure, policy documents, and individual grievances. We also handle first appeals before the designated First Appellate Authority and second appeals before the Central/State Information Commissions."
      },
      {
        title: "Competition Law (CCI)",
        description: "Advisory and representation on competition law matters including analysis of anti-competitive agreements (Section 3), abuse of dominant position (Section 4), and combination/merger notifications (Section 5) before the Competition Commission of India. We assist businesses with CCI compliance programs, leniency applications, and defense against CCI investigations and penalty proceedings."
      }
    ],
    faqs: [
      {
        question: "What is the value of a legal opinion and when should I get one?",
        answer: "A legal opinion is a formal document prepared by a qualified lawyer that analyzes a specific legal question and provides a reasoned conclusion based on applicable law and precedent. You should obtain a legal opinion before entering into significant transactions (property purchases, investments, M&A), when facing complex legal disputes, when regulatory compliance is uncertain, or when you need to assess litigation risk. Legal opinions from reputed lawyers carry persuasive value in court proceedings, regulatory inquiries, and business negotiations."
      },
      {
        question: "How do I file an RTI application in India?",
        answer: "An RTI application can be filed with any public authority (central or state government body, PSU, or institution substantially financed by the government) by writing a simple application addressed to the Public Information Officer (PIO), clearly describing the information sought, and paying a fee of Rs. 10 (for central authorities; varies for state authorities). Applications can be filed online through rtionline.gov.in for central government departments. BPL applicants are exempt from fees. The PIO must respond within 30 days (48 hours for matters involving life or liberty)."
      },
      {
        question: "What does legal due diligence cover for a business acquisition?",
        answer: "Legal due diligence for a business acquisition typically covers: corporate structure and governance (MOA, AOA, shareholder agreements, board minutes), regulatory compliance and licenses, material contracts and commitments, litigation and dispute history (pending and potential), real estate and asset ownership, intellectual property portfolio, employment and labour law compliance, tax compliance (income tax, GST, TDS), environmental compliance, and insurance coverage. The due diligence report identifies legal risks, contingent liabilities, and conditions precedent for the transaction."
      },
      {
        question: "What should a legal notice contain to be effective?",
        answer: "An effective legal notice should contain: the sender's full name and address, the recipient's full name and address, a clear statement of facts giving rise to the dispute, the specific legal provisions and rights being invoked, the relief or action demanded, a reasonable deadline for compliance (typically 15-30 days), and a clear statement of the consequence of non-compliance (e.g., initiation of legal proceedings). The notice should be sent via registered post with acknowledgment due (RPAD) and/or speed post, with the sender retaining a copy and postal receipt as proof of dispatch."
      },
      {
        question: "What is the role of the Competition Commission of India (CCI)?",
        answer: "The Competition Commission of India (CCI) is the statutory body established under the Competition Act, 2002 to prevent anti-competitive practices, promote fair competition, and protect consumer interests. The CCI investigates and adjudicates cases involving anti-competitive agreements (cartels, price-fixing, bid-rigging), abuse of dominant market position, and reviews proposed combinations (mergers and acquisitions) above prescribed thresholds. The CCI can impose penalties of up to 10% of a company's average turnover for the preceding three years, and its orders can be appealed before the NCLAT."
      }
    ],
    relevantCourts: [
      "Competition Commission of India (CCI)",
      "Competition Appellate Tribunal / NCLAT",
      "Central Information Commission (RTI appeals)",
      "State Information Commissions",
      "All courts and tribunals (depending on the service context)"
    ],
    highlights: [
      { stat: "30 Days", label: "Maximum RTI response time" },
      { stat: "10%", label: "Maximum CCI penalty (of turnover)" },
      { stat: "48 Hours", label: "RTI response for life/liberty matters" },
      { stat: "Pan-India", label: "Due diligence coverage across all states" }
    ]
  }
};

export const practiceAreaContent: Record<string, PracticeAreaContent> = {
  ...part1Content,
  ...part2Content,
};
