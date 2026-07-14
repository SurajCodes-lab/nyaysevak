export interface ServiceStep {
  step: string;
  desc: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  category: "b2c" | "b2b";
  iconPath: string;
  lucideIcon: string;
  description: string;
  featured?: boolean;
  bullets: string[];
  /** Week 18: concrete scope-of-service inclusions rendered as "What's Included" */
  whatsIncluded?: string[];
  /** Week 18: detailed numbered steps — replaces the generic "How It Works" strings when present */
  process?: ServiceStep[];
  /** Week 18: audience bullets rendered as "Who This Service Is For" */
  whoItsFor?: string[];
  /** Week 18: appended to the on-page FAQs and the FAQPage JSON-LD */
  extraFaqs?: ServiceFaq[];
}

export const b2cServices: ServiceItem[] = [
  {
    slug: "lawyer-consultation",
    title: "Lawyer Consultation",
    category: "b2c",
    iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    lucideIcon: "Scale",
    description: "Connect with verified, experienced lawyers for expert legal advice.",
    featured: true,
    bullets: [
      "Connect with verified, experienced lawyers",
      "Instant or scheduled booking through website",
      "Transparent pricing with no hidden fees",
      "Secure video, audio & chat consultations",
    ],
    whatsIncluded: [
      "A structured free case assessment where our coordination team maps your matter to the correct practice area, forum, and urgency level before any advocate is engaged",
      "Matching with a Bar Council–verified advocate whose enrolment number and practice history are checked against State Bar Council records",
      "A secure video, audio, or chat consultation scheduled at a time that suits you — including evening and weekend slots",
      "A written summary of the guidance given, covering recommended next steps, applicable limitation deadlines, and the documents you will need",
      "A document checklist tailored to your matter — FIR and charge-sheet copies for criminal cases, sale deeds and mutation records for property disputes — so the consultation is productive",
      "The option to continue with the same advocate for drafting, filing, or full court representation",
      "Follow-up support from our coordination team if anything from the consultation needs clarification",
    ],
    process: [
      { step: "Share your matter", desc: "Fill the 60-second form or message us on WhatsApp. Tell us the practice area, your city, the court if a case is already filed, and your preferred language." },
      { step: "Free case assessment", desc: "Our legal coordination team reviews your facts, identifies the applicable law and limitation timelines, and confirms the kind of specialist your matter needs." },
      { step: "Advocate matching", desc: "We verify enrolment against State Bar Council records and match you with an advocate who actually practises in your court and specialisation — not a generic directory listing." },
      { step: "Consult securely", desc: "Connect over encrypted video, audio, or chat. Everything you share is protected by advocate–client privilege, so you can discuss the matter freely." },
      { step: "Documented next steps", desc: "You receive a written summary with recommended actions, required documents, and deadlines — plus the option to engage the same advocate for the next stage." },
    ],
    whoItsFor: [
      "Individuals facing a fresh legal issue — a police complaint, a property dispute, a matrimonial conflict — who need direction before acting",
      "Litigants with an ongoing case who want a second opinion on strategy or are considering a change of counsel",
      "Anyone served with a legal notice or court summons who must respond within a strict deadline",
      "NRIs who need Indian legal guidance across time zones without travelling to India",
      "Families handling succession, wills, or partition questions before disputes harden",
    ],
    extraFaqs: [
      { question: "How quickly can I speak to a lawyer after booking?", answer: "For urgent matters — an arrest in the family, an anticipatory bail window, a notice period about to expire — we prioritise same-day matching. Standard consultations are typically scheduled within 24–48 hours, subject to the advocate's court calendar." },
      { question: "Do I need my documents ready before the consultation?", answer: "It helps, but it is not mandatory. After your free case assessment we send a checklist specific to your matter — for example, the FIR copy and charge sheet in a criminal case, or the sale deed, chain of title, and mutation entries in a property dispute — so the advocate can give you concrete, fact-based guidance rather than generalities." },
    ],
  },
  {
    slug: "find-hire-lawyers",
    title: "Find & Hire Lawyers",
    category: "b2c",
    iconPath: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    lucideIcon: "Search",
    description: "Tell us your matter and we match you with the right verified lawyer.",
    featured: true,
    bullets: [
      "Matched to your specialization, location & court",
      "Every lawyer Bar Council–registered & verified",
      "Full representation — from filing to court resolution",
      "Transparent fees upfront, free case assessment",
    ],
    whatsIncluded: [
      "A free case assessment to establish the correct forum first — civil court, family court, consumer commission, High Court, or tribunal — so you are not matched to the wrong specialist",
      "Verification of every advocate's Bar Council enrolment number and standing before any introduction is made",
      "Matching filtered by specialisation, the specific court complex where your matter sits, and your preferred language",
      "An introduction call with the matched advocate before you commit to anything",
      "The advocate's complete fee structure — consultation, drafting, per-appearance, retainer — disclosed to you directly and in writing before engagement",
      "Vakalatnama execution support so your advocate is formally placed on record with the court",
      "Rematching with another verified advocate at no cost if the first match is not the right fit",
    ],
    process: [
      { step: "Describe your matter", desc: "Tell us the practice area, city, and opposite party — and if a case is already filed, share the CNR number so we can pull the live case status from the eCourts system." },
      { step: "Case assessment", desc: "Our team confirms the correct forum and stage — fresh filing, reply to summons, appeal, or execution — and the exact specialisation your matter requires." },
      { step: "Verified match", desc: "We shortlist an advocate who practises in that specific court complex, verify their Bar Council enrolment, and brief them on your matter before introducing you." },
      { step: "Meet before you commit", desc: "Speak with the matched advocate in a free assessment call, review their relevant experience, and receive their written fee structure. Engage only if satisfied." },
      { step: "Engage and track", desc: "Once you sign the vakalatnama, the advocate takes the matter forward — filing, hearings, arguments — and you receive updates after every listed date." },
    ],
    whoItsFor: [
      "Litigants who need representation in a specific district court, High Court bench, or tribunal",
      "People whose current advocate is unresponsive and who need a smooth, formal change of counsel",
      "Complainants preparing to file — cheque bounce under Section 138 NI Act, consumer complaints, money recovery suits",
      "Respondents served with a summons who need counsel on record before the next hearing date",
      "NRIs who need a local advocate coordinated with a power-of-attorney holder in India",
    ],
    extraFaqs: [
      { question: "Can you find a lawyer for a case that is already in court?", answer: "Yes. Share your CNR number or case details and we track the current stage on eCourts, then match you with an advocate who practises in that exact court. Changing counsel mid-case is routine — your new advocate files a fresh vakalatnama, with a no-objection from the previous counsel where the court requires it." },
      { question: "How fast can a lawyer appear if my hearing is only days away?", answer: "For hearings within the next few days we prioritise advocates who appear daily in that court complex. In genuine emergencies, the incoming advocate can seek a short adjournment or move an urgent mention while taking over the brief, so no date goes unattended." },
    ],
  },
  {
    slug: "document-services",
    title: "Document Services",
    category: "b2c",
    iconPath: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    lucideIcon: "FileText",
    description: "Professional legal document drafting, review & management.",
    bullets: [
      "Ready-to-use legal document templates",
      "Custom drafting by qualified professionals",
      "Thorough document review & validation",
      "Secure digital storage & management",
    ],
    whatsIncluded: [
      "Custom drafting of agreements, affidavits, wills, powers of attorney, legal notices, and deeds by qualified legal professionals",
      "Clause-by-clause review of documents you already hold, with risk flags and suggested amendments",
      "Stamp duty guidance for your state and instrument type — duty on the same document varies significantly from state to state under the Indian Stamp Act, 1899 and its state amendments",
      "Advice on which instruments are compulsorily registrable under Section 17 of the Registration Act, 1908 — sale deeds, gift deeds of immovable property, leases exceeding 11 months",
      "Notarisation and attestation coordination, including apostille guidance for documents to be used abroad",
      "Execution formality checks: correct parties, witnesses, signatures on every page, and date and place of execution",
      "Secure encrypted digital copies of every finalised document, retrievable whenever you need them",
    ],
    process: [
      { step: "Tell us what you need", desc: "Name the document — rent agreement, will, power of attorney, legal notice, partnership deed — or upload an existing draft for review." },
      { step: "Requirement assessment", desc: "A professional confirms the parties, purpose, and the state where the document will be executed, since stamp duty and registration requirements differ by state." },
      { step: "Drafting or review", desc: "Your document is drafted afresh or reviewed clause by clause, with unfair or missing terms — indemnity, termination, dispute resolution — flagged and corrected." },
      { step: "Your review round", desc: "You receive the draft, ask questions, and request changes until the document says exactly what you intend it to." },
      { step: "Execution guidance", desc: "We guide you through stamping, notarisation, and — where the law requires it — registration at the Sub-Registrar's office, so the document holds up when tested." },
    ],
    whoItsFor: [
      "Property buyers and sellers who need sale deeds, agreements to sell, or title-related documents done right",
      "Landlords and tenants formalising rent or leave-and-licence agreements",
      "Families preparing wills, powers of attorney, or family settlement deeds",
      "Founders and small businesses needing NDAs, founder agreements, and employment contracts",
      "Anyone who needs to send a legal notice — or has received one and must reply within the notice period",
    ],
    extraFaqs: [
      { question: "Is a notarised document the same as a registered document?", answer: "No. Notarisation authenticates signatures before a notary; registration is a separate process at the Sub-Registrar's office under the Registration Act, 1908, and is compulsory for instruments like sale deeds and leases exceeding 11 months. Under Section 49 of that Act, a compulsorily registrable document that is left unregistered cannot be used as evidence of the transaction — so getting this step right matters." },
      { question: "Does a will need to be registered to be valid?", answer: "No — registration of a will is optional in India. A will is valid if the testator signs it and two witnesses attest it, as required by Section 63 of the Indian Succession Act, 1925. Registration does, however, add evidentiary weight and makes the will harder to challenge, which is why we walk you through both options." },
    ],
  },
  {
    slug: "legal-aid",
    title: "Legal Aid",
    category: "b2c",
    iconPath: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    lucideIcon: "HeartHandshake",
    description: "Free legal aid and pro bono services for eligible citizens.",
    bullets: [
      "Free legal aid for eligible citizens",
      "Pro bono lawyer network access",
      "Support for women, SC/ST & EWS sections",
      "Government scheme navigation assistance",
    ],
    whatsIncluded: [
      "Eligibility screening against Section 12 of the Legal Services Authorities Act, 1987 — the provision that lists who is entitled to free legal services",
      "Help preparing and filing your application with the District Legal Services Authority (DLSA) or through the NALSA online portal",
      "Guidance on the supporting documents authorities ask for — income certificate, caste certificate, disability certificate, or custody details, depending on your category",
      "Connection to pro bono advocates from our network where statutory legal aid is not the right route",
      "Guidance on Lok Adalats for disputes that can be settled by compromise — cheque bounce, motor accident claims, maintenance, utility bills",
      "Assistance with victim compensation scheme applications where applicable",
      "Follow-up until a panel advocate is actually assigned to your matter, not just until the form is submitted",
    ],
    process: [
      { step: "Eligibility check", desc: "We assess your category and income against Section 12 of the Legal Services Authorities Act — women and children qualify regardless of income; other categories have state-specific income ceilings." },
      { step: "Document preparation", desc: "We tell you exactly which certificates and case papers your DLSA requires, and help you gather them so the application is not returned for defects." },
      { step: "Application filing", desc: "Your legal aid application is filed with the appropriate District or State Legal Services Authority, or online through the NALSA portal, with every field completed correctly." },
      { step: "Advocate assignment", desc: "The authority assigns a panel advocate to your matter. If statutory aid is unavailable or delayed, we route you to a pro bono advocate from our own network." },
      { step: "Support till resolution", desc: "We stay in the loop — helping you follow up with the DLSA, understand hearing dates, and escalate if the assigned advocate is unresponsive." },
    ],
    whoItsFor: [
      "Women and children, who are eligible for free legal aid regardless of income",
      "Members of Scheduled Castes and Scheduled Tribes",
      "Industrial workmen, persons in custody, and persons with disabilities",
      "Victims of trafficking, disasters, or ethnic violence",
      "Anyone whose annual income falls below the ceiling notified by their State Legal Services Authority",
    ],
    extraFaqs: [
      { question: "Does free legal aid cover court fees and other expenses?", answer: "Yes. Legal aid under the Legal Services Authorities Act, 1987 is not limited to a free advocate — it can cover court fees, process fees, expenses of preparing the paper book, and drafting charges. An eligible applicant is not expected to pay for these out of pocket; the Legal Services Authority bears them." },
      { question: "What is a Lok Adalat, and should I consider one?", answer: "A Lok Adalat is a statutory forum under the 1987 Act where disputes are settled by mutual compromise. Its award is deemed a decree of a civil court, is final and binding, and no court fee is payable — if a pending case settles there, the court fee already paid is refunded. It works well for cheque bounce matters, motor accident claims, maintenance, and bank recovery disputes." },
    ],
  },
  {
    slug: "legal-knowledge",
    title: "Legal Knowledge",
    category: "b2c",
    iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    lucideIcon: "BookOpen",
    description: "Comprehensive legal guides, articles & know-your-rights resources.",
    bullets: [
      "Comprehensive case law database",
      "Expert-written legal articles & guides",
      "Full acts & statutes repository",
      "Know-your-rights educational resources",
    ],
    whatsIncluded: [
      "Plain-language guides across every major practice area — criminal, civil, family, property, consumer, corporate, and more",
      "Step-by-step procedure explainers: how to file an FIR, reply to a legal notice, file a consumer complaint on the e-Daakhil portal, or apply for anticipatory bail",
      "A legal glossary that decodes courtroom vocabulary — vakalatnama, cognizable offence, decree, injunction, limitation — in everyday words",
      "Coverage of the new criminal codes: Bharatiya Nyaya Sanhita, Bharatiya Nagarik Suraksha Sanhita, and Bharatiya Sakshya Adhiniyam, which replaced the IPC, CrPC, and Evidence Act",
      "Free legal calculators — court-fee, maintenance, gratuity, and more — for quick, practical estimates",
      "Know-your-rights explainers for arrest, tenancy, workplace, and consumer situations",
      "Updates on landmark Supreme Court and High Court judgments that change how the law applies to you",
    ],
    process: [
      { step: "Find your topic", desc: "Browse guides by practice area, or search for the exact situation you are facing — a notice you received, a dispute you are considering, a right you want to understand." },
      { step: "Understand the law", desc: "Each guide explains the governing statute, the forum that hears such matters, realistic timelines, and the documents involved — in plain language, not legalese." },
      { step: "Use the tools", desc: "Run the relevant calculator or checklist — court fees, maintenance estimates, document requirements — so you walk into any consultation informed." },
      { step: "Escalate when it matters", desc: "When your situation needs professional judgment, book a free case assessment and we match you with a verified advocate for your specific matter." },
    ],
    whoItsFor: [
      "Litigants preparing for their first court hearing who want to understand the process",
      "Anyone who has received a legal notice and wants to understand it before responding",
      "Law students and researchers looking for reliable, India-specific explainers",
      "Small business owners checking their compliance and contract basics",
      "Consumers, tenants, and employees who want to know their rights before a dispute escalates",
    ],
    extraFaqs: [
      { question: "Are the guides updated for the new criminal laws (BNS, BNSS, BSA)?", answer: "Yes. Our content reflects the Bharatiya Nyaya Sanhita, 2023, the Bharatiya Nagarik Suraksha Sanhita, 2023, and the Bharatiya Sakshya Adhiniyam, 2023, which replaced the IPC, CrPC, and Indian Evidence Act for offences committed from 1 July 2024 — while also noting that the older provisions continue to govern cases registered before that date." },
      { question: "Can reading a guide replace consulting a lawyer?", answer: "No. Our guides are general legal information, not legal advice — limitation periods, local court rules, and the specific facts of your matter can change the outcome entirely. Use the guides to prepare and ask sharper questions, then book a free case assessment so a verified advocate can evaluate your actual situation." },
    ],
  },
  {
    slug: "e-filing-assistance",
    title: "E-filing Assistance",
    category: "b2c",
    iconPath: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
    lucideIcon: "Upload",
    description: "Court e-filing support, document preparation & portal assistance.",
    bullets: [
      "Court e-filing support & submission",
      "Document preparation for e-filing portals",
      "Portal navigation & technical assistance",
      "Filing status tracking & updates",
    ],
    whatsIncluded: [
      "Registration and profile setup on the eFiling 3.0 portal (efiling.ecourts.gov.in), including mobile and email OTP verification",
      "Document preparation to court specifications — OCR-searchable PDFs, bookmarking, indexed paper books, and prescribed margins and formats",
      "Scanning and conversion that meets registry standards, so filings are not returned on technical defects",
      "Online court-fee payment guidance through the ePay/eChallan facility linked to the filing",
      "Vakalatnama upload and e-signing or oath-affidavit guidance as your court's rules require",
      "Defect rectification support when the registry raises objections, with refiling handled end to end",
      "CNR-based tracking after filing — cause-list monitoring and hearing-date alerts through eCourts services",
    ],
    process: [
      { step: "Share your case papers", desc: "Send us the petition or application, annexures, and supporting documents, along with the court where the matter is to be filed." },
      { step: "Formatting and compliance", desc: "We convert everything into the format your court's registry demands — searchable PDFs, correct bookmarking and pagination, indexed annexures — and flag missing documents before submission." },
      { step: "Portal filing", desc: "The filing is submitted on the correct platform: the Supreme Court's e-filing system, the relevant High Court portal, or eFiling 3.0 for district courts." },
      { step: "Court fees and confirmation", desc: "Court fees are paid online through the integrated ePay facility, and you receive the filing acknowledgment and diary or registration number." },
      { step: "Defects and tracking", desc: "If the registry marks defects, we rectify and refile promptly. Once registered, we track your CNR on eCourts and alert you before every listed date." },
    ],
    whoItsFor: [
      "Litigants-in-person who find court portals confusing and cannot afford a returned filing",
      "Advocates and law firms with filing volumes too high to handle in-house",
      "Businesses filing recovery or consumer matters across multiple districts",
      "NRIs who need to file or defend matters in Indian courts remotely",
      "Anyone facing an urgent, deadline-bound filing — bail applications, stay petitions, appeals nearing limitation",
    ],
    extraFaqs: [
      { question: "Is e-filing mandatory for my case?", answer: "It depends on the court. The Supreme Court and several High Courts mandate e-filing for specific case categories, and district courts are progressively adopting it under Phase III of the eCourts project. Where it is optional, e-filing still saves registry visits and gives you a time-stamped digital acknowledgment. We confirm the exact rules applicable to your court before filing." },
      { question: "What is a CNR number and why does it matter?", answer: "The Case Number Record (CNR) is a unique 16-digit identifier assigned to every case on the eCourts system. With it, you can track your case status, orders, and next hearing dates on ecourts.gov.in or the eCourts mobile app. We share your CNR as soon as the filing is registered and use it to monitor your matter continuously." },
    ],
  },
];

export const b2bServices: ServiceItem[] = [
  {
    slug: "corporate-legal-advisory",
    title: "Corporate Legal Advisory",
    category: "b2b",
    iconPath: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    lucideIcon: "Building2",
    description: "Dedicated legal teams for enterprise strategy & governance.",
    featured: true,
    bullets: [
      "Dedicated legal team for your enterprise",
      "Strategic legal planning & risk assessment",
      "Board meeting legal support & governance",
      "Industry-specific regulatory guidance",
    ],
    whatsIncluded: [
      "Entity structuring advice — private limited company, LLP, or OPC — and incorporation support through the MCA's SPICe+ process",
      "Founders' agreements, ESOP scheme structuring, and shareholder arrangements drafted for Indian enforceability",
      "Board and general-meeting support: notices, agendas, resolutions, and minutes compliant with the Companies Act, 2013 and Secretarial Standards",
      "Regulatory opinions on FEMA, SEBI regulations for listed entities, and data obligations under the Digital Personal Data Protection Act, 2023",
      "A maintained legal risk register with periodic legal health checks of contracts, licences, and statutory records",
      "Standard operating templates for employment, vendor, and customer relationships, tuned to your sector",
      "Access to specialist counsel for sector regulators — RBI, IRDAI, TRAI, FSSAI — when your business touches regulated territory",
    ],
    process: [
      { step: "Discovery session", desc: "We map your business model, entity structure, revenue streams, and the regulators that touch your operations — the inputs that determine your real legal exposure." },
      { step: "Legal health check", desc: "Charter documents, statutory registers, board-minute hygiene, key contracts, licences, and IP ownership are audited, producing a gap report with prioritised fixes." },
      { step: "Engagement design", desc: "A dedicated advisory team is assigned with an engagement model that fits how you work — ongoing retainer, project-based, or on-call for board and transaction support." },
      { step: "Ongoing advisory", desc: "Your team handles day-to-day queries, reviews documents before you sign, supports board meetings, and issues written opinions on regulatory questions as they arise." },
      { step: "Quarterly review", desc: "Every quarter the risk register is refreshed, upcoming regulatory changes are briefed to management, and the legal roadmap is adjusted to your business plans." },
    ],
    whoItsFor: [
      "Startups from incorporation through Series A and beyond, formalising what handshakes used to cover",
      "SMEs that have outgrown ad hoc legal help but cannot justify a full in-house team",
      "Foreign companies entering India and choosing between a subsidiary, branch office, or liaison office",
      "Family businesses professionalising governance and succession",
      "Listed and pre-IPO companies needing continuous Companies Act and SEBI compliance support",
    ],
    extraFaqs: [
      { question: "Can you help a foreign company set up operations in India?", answer: "Yes. We advise on the entry route — wholly-owned subsidiary, LLP, branch office, or liaison office — check your sector against the FDI policy's automatic and approval routes, handle incorporation through SPICe+, and manage the FEMA-side filings such as the FC-GPR reporting of share allotments to the RBI through the FIRMS portal." },
      { question: "What does a legal health check actually cover?", answer: "We review charter documents, statutory registers, board and general-meeting minutes, key customer and vendor contracts, employment documentation, licences and registrations, IP ownership (especially work created by founders before incorporation), and pending or threatened disputes. You receive a gap report with each issue ranked by risk and a concrete fix." },
    ],
  },
  {
    slug: "compliance-management",
    title: "Compliance Management",
    category: "b2b",
    iconPath: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
    lucideIcon: "ClipboardCheck",
    description: "Automated compliance tracking across GST, MCA & labour law.",
    featured: true,
    bullets: [
      "Automated compliance calendar & alerts",
      "GST, MCA & Income Tax compliance",
      "Labor law & industry-specific compliance",
      "Real-time compliance status dashboard",
    ],
    whatsIncluded: [
      "A customised compliance calendar mapped to your entity type — MCA annual filings (AOC-4, MGT-7/7A), DIR-3 KYC for directors, monthly GSTR-1 and GSTR-3B cycles, and quarterly TDS returns",
      "Automated alerts at 30, 15, and 7 days before every deadline, escalated until the filing is confirmed",
      "Filing execution by qualified professionals, or review of filings your own team prepares",
      "Labour-law compliance: monthly PF ECR uploads, ESI contributions, Shops & Establishments registrations, and CLRA registers where applicable",
      "POSH Act compliance — Internal Committee constitution, policy drafting, and the annual report to the District Officer",
      "FEMA annual filings, such as the FLA return due by 15 July, for companies with foreign investment",
      "A live dashboard showing filed, pending, and upcoming compliances, with a quarterly risk report for management",
    ],
    process: [
      { step: "Compliance onboarding", desc: "We profile your entity — company or LLP, states of operation, headcount, turnover, and foreign investment — because each variable adds its own set of statutory obligations." },
      { step: "Calendar generation", desc: "Your obligations are compiled into a single compliance calendar covering MCA, GST, income tax and TDS, labour laws, and any sector-specific regulator." },
      { step: "Alerts and filings", desc: "Automated reminders fire at 30, 15, and 7 days before each due date. Our professionals prepare and file, or review your team's filings before submission." },
      { step: "Dashboard tracking", desc: "Every obligation is tracked to completion on your dashboard, with filing acknowledgments stored against each entry for audit trails." },
      { step: "Quarterly risk review", desc: "Each quarter you receive a compliance health report — what was filed, what changed in the law, and where residual risk sits — in language a board can act on." },
    ],
    whoItsFor: [
      "Private limited companies and LLPs juggling MCA, GST, and TDS deadlines simultaneously",
      "Multi-state employers with layered labour-law registrations and returns",
      "Funded startups whose investors expect clean, documented compliance",
      "Indian subsidiaries of foreign companies with FEMA reporting obligations",
      "Growing businesses that have been penalised once and do not intend to repeat it",
    ],
    extraFaqs: [
      { question: "What must a private limited company file every year even with zero revenue?", answer: "Even a dormant company must file its financial statements (AOC-4) and annual return (MGT-7 or MGT-7A), ensure each director completes DIR-3 KYC, file an income-tax return, hold board meetings at the prescribed intervals, and get its accounts audited. Missing MCA filings attracts additional fees that accrue per day of delay, and prolonged default can lead to director disqualification under Section 164(2) of the Companies Act, 2013." },
      { question: "Do you handle POSH Act compliance?", answer: "Yes. Every workplace with 10 or more employees must constitute an Internal Committee under the POSH Act, 2013, including an external member. We handle committee constitution, policy drafting, employee awareness sessions, and the annual report that must be submitted to the District Officer — the piece most companies miss." },
    ],
  },
  {
    slug: "contract-management",
    title: "Contract Management",
    category: "b2b",
    iconPath: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    lucideIcon: "PenTool",
    description: "End-to-end contract drafting, review & lifecycle management.",
    bullets: [
      "End-to-end contract drafting & review",
      "Centralized contract repository",
      "Automated renewal & expiry reminders",
      "Clause library with risk analysis",
    ],
    whatsIncluded: [
      "Drafting grounded in the Indian Contract Act, 1872 and the sector rules that apply to your business",
      "Review with a written risk-flag report covering indemnity, limitation of liability, termination, lock-in, and jurisdiction clauses",
      "Stamp duty and execution guidance — which agreements need stamping in which state, and which can be validly e-signed",
      "Negotiation and redlining support, including counterproposal drafting across multiple rounds",
      "A centralised repository with metadata — parties, value, renewal date, notice period — searchable across your whole contract base",
      "Automated reminders for renewals, expiries, and in-contract obligations like delivery milestones and price-revision windows",
      "Dispute-resolution clause design: arbitration seat and venue under the Arbitration and Conciliation Act, 1996, escalation ladders, and governing law",
    ],
    process: [
      { step: "Intake", desc: "Send us the contract to be drafted or reviewed, with the commercial context — what you are buying or selling, the deal value, and what a failure would cost you." },
      { step: "Draft or review", desc: "Our lawyers draft from vetted precedents or review the counterparty's paper clause by clause, delivering a marked-up version with a plain-language risk summary." },
      { step: "Negotiate", desc: "We support redlining rounds — drafting counterproposals and telling you which clauses are worth fighting for and which are market-standard." },
      { step: "Execute correctly", desc: "Guidance on stamping in the correct state, signing formalities, and e-signature validity, so the executed contract is enforceable as intended." },
      { step: "Store and track", desc: "The signed contract enters your repository with key dates tagged, and reminders fire before renewals, expiries, and notice-period cutoffs." },
    ],
    whoItsFor: [
      "Startups signing vendor, customer, and SaaS agreements every week without in-house counsel",
      "SMEs that reuse the same templates and need them professionally hardened once",
      "Enterprises with contract sprawl across departments and no single source of truth",
      "Franchisors and distributors managing many near-identical agreements",
      "Businesses with cross-border contracts needing governing-law and arbitration clarity",
    ],
    extraFaqs: [
      { question: "Are electronically signed contracts valid in India?", answer: "For most commercial contracts, yes — the Information Technology Act, 2000 recognises electronic records and electronic signatures. The exceptions in its First Schedule still require physical execution: negotiable instruments (other than cheques), powers of attorney, trusts, wills, and documents of title to immovable property. Stamping requirements also continue to apply to e-signed contracts, which is where many businesses slip." },
      { question: "What should a good arbitration clause specify?", answer: "At minimum: the seat of arbitration (which decides the supervising courts), the venue, the number of arbitrators, the language, and whether the arbitration is institutional or ad hoc. A precisely drafted clause avoids the common trap of spending months in court under Section 11 of the Arbitration and Conciliation Act, 1996 just to get an arbitrator appointed." },
    ],
  },
  {
    slug: "ip-management",
    title: "IP Management",
    category: "b2b",
    iconPath: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    lucideIcon: "Lightbulb",
    description: "Trademark, patent & copyright registration and enforcement.",
    bullets: [
      "Trademark, patent & copyright registration",
      "IP filings, prosecution & renewals",
      "Infringement monitoring & enforcement",
      "IP portfolio strategy & valuation",
    ],
    whatsIncluded: [
      "Trademark availability searches on the IP India public registry and filing of the TM-A application in the correct class under the NICE classification",
      "Responses to examination reports raising objections under Sections 9 and 11 of the Trade Marks Act, 1999, plus opposition and hearing representation",
      "Patent drafting — provisional and complete specifications — with the accompanying statutory forms and request for examination",
      "Copyright registration for software, literary content, music, and artistic works with the Copyright Office",
      "Design registration under the Designs Act, 2000 for product shapes and configurations",
      "IP watch services: monitoring of the Trade Marks Journal for conflicting marks published against yours",
      "Assignment and licensing agreements, and recordal of those transactions with the relevant registry",
    ],
    process: [
      { step: "IP audit", desc: "We identify what your business actually owns — brand names, logos, inventions, software, designs, content — and what is protectable under which statute." },
      { step: "Search and strategy", desc: "Clearance searches establish what is available; we then sequence filings by business priority, covering the right classes and jurisdictions." },
      { step: "Filing", desc: "Applications are prepared and filed with the Trade Marks Registry, Patent Office, Copyright Office, or Designs Wing, with the correct forms and priority claims." },
      { step: "Prosecution", desc: "Examination objections are answered, oppositions defended, and show-cause hearings attended until the registration certificate issues." },
      { step: "Protect and renew", desc: "Registered rights are watched for infringement, renewals are calendared — trademarks every 10 years, patent annuities yearly — and enforcement steps are taken when needed." },
    ],
    whoItsFor: [
      "Startups securing their brand name and logo before a public launch",
      "D2C and consumer brands whose name is their most valuable asset",
      "Software companies protecting code, product names, and proprietary designs",
      "Manufacturers with product designs and inventions worth patenting",
      "Creators, publishers, and exporters needing copyright or international (Madrid/PCT) protection",
    ],
    extraFaqs: [
      { question: "Should I file a trademark before launching my brand?", answer: "Yes. Filing early establishes your priority date, and you can use the ™ symbol from the date of application — the ® symbol only after registration. A clearance search before filing also protects you from investing in a brand that infringes an existing mark. DPIIT-recognised startups can additionally seek expedited examination of their applications." },
      { question: "What is the difference between a provisional and a complete patent specification?", answer: "A provisional specification secures your priority date while the invention is still being refined; the complete specification must follow within 12 months, failing which the application is deemed abandoned. The application is published at 18 months, and after the Patents (Amendment) Rules, 2024, the request for examination must be filed within 31 months of the priority date — a deadline our team calendars for every client." },
    ],
  },
  {
    slug: "litigation-management",
    title: "Litigation Management",
    category: "b2b",
    iconPath: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    lucideIcon: "BarChart3",
    description: "Centralized case tracking and multi-jurisdiction management.",
    bullets: [
      "Centralized case tracking dashboard",
      "Multi-jurisdiction case management",
      "Litigation expense tracking & budgeting",
      "Outcome analytics & reporting",
    ],
    whatsIncluded: [
      "Portfolio onboarding with every matter mapped by its CNR number to live eCourts data",
      "A single dashboard covering district courts, High Courts, NCLT, DRT, and consumer commissions — stages, next dates, and orders in one view",
      "Local counsel coordination in every state, so an appearance is never missed for want of a lawyer on the ground",
      "Hearing preparation packs before each date and outcome notes the same day the matter is heard",
      "Matter-wise expense and budget tracking with variance flags",
      "Limitation and appeal-deadline monitoring — the 30, 60, and 90-day windows that quietly close cases when missed",
      "Monthly MIS reporting for management and auditors, including contingent-liability inputs for financial disclosures",
    ],
    process: [
      { step: "Portfolio audit", desc: "Your pending matters are collected, verified against court records via CNR lookups, and classified by forum, stage, exposure, and counsel currently on record." },
      { step: "Dashboard setup", desc: "Every case goes onto a single tracking dashboard with its documents, order history, next dates, and the responsible counsel attached." },
      { step: "Counsel alignment", desc: "Where a jurisdiction lacks reliable representation, we introduce verified local counsel from our pan-India network and manage the handover formally." },
      { step: "Hearing cycle management", desc: "Before each date, counsel receives a prepared brief; after each date, the outcome, the order, and the next step are logged and reported to you." },
      { step: "Quarterly strategy review", desc: "Portfolio analytics identify matters fit for settlement or Lok Adalat referral, chronic adjournment patterns, and where your exposure is actually concentrated." },
    ],
    whoItsFor: [
      "Banks and NBFCs running recovery portfolios — Section 138 complaints, SARFAESI actions, DRT proceedings",
      "Insurers managing motor accident claims and consumer commission matters at volume",
      "Corporates with disputes spread across multiple states and forums",
      "E-commerce and consumer-facing brands with a steady stream of consumer cases",
      "CFO and legal-ops teams that need audit-ready litigation reporting",
    ],
    extraFaqs: [
      { question: "How do you track hearings across hundreds of cases?", answer: "Every matter is mapped by its CNR number to the eCourts and National Judicial Data Grid systems, supplemented by tribunal cause lists that are checked daily. Automated alerts fire before each listed date, and local counsel confirm outcomes the same day, so the dashboard reflects reality — not last month's snapshot." },
      { question: "Can you help us reduce our pending case count?", answer: "Yes. Portfolio analysis identifies matters suitable for settlement, Lok Adalat referral, or court-annexed mediation under Section 89 of the CPC, and flags low-value cases where continued litigation costs more than the amount in dispute. Most portfolios we audit have a meaningful slice that should be closed, not fought." },
    ],
  },
  {
    slug: "mergers-acquisitions-support",
    title: "M&A Support",
    category: "b2b",
    iconPath: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
    lucideIcon: "ArrowLeftRight",
    description: "Due diligence, transaction documents & post-merger support.",
    bullets: [
      "Comprehensive legal due diligence",
      "Transaction document preparation",
      "Regulatory approvals & filings",
      "Post-merger integration legal support",
    ],
    whatsIncluded: [
      "Legal due diligence across corporate records, material contracts, litigation, employment, IP, licences, and real-estate title",
      "Deal-structure advice — share purchase, slump sale, or a scheme of merger under Sections 230–232 of the Companies Act, 2013 through the NCLT",
      "Transaction documents: term sheet, share purchase agreement, shareholders' agreement, business transfer agreement, disclosure letters, and escrow arrangements",
      "Competition-law analysis: whether the deal triggers CCI notification under the Competition Act's asset, turnover, or deal-value thresholds",
      "FEMA workstream for cross-border deals — pricing guidelines, sectoral caps, and FC-TRS reporting of share transfers",
      "Conditions-precedent tracking and a managed closing checklist so completion does not slip",
      "Post-closing support: stamp duty on transfers, board and ROC filings, and integration of employment contracts and vendor agreements",
    ],
    process: [
      { step: "NDA and structuring", desc: "Confidentiality is locked down first; we then compare deal structures — share deal, asset deal, or NCLT scheme — on tax, liability, and approval-timeline grounds." },
      { step: "Due diligence", desc: "Our team works the data room and public records — MCA filings, index of charges, court and tribunal searches — and delivers a red-flag report that shapes the deal terms." },
      { step: "Documentation", desc: "The SPA, SHA, or BTA is drafted and negotiated, with warranties, indemnities, and disclosure schedules calibrated to what diligence actually found." },
      { step: "Regulatory approvals", desc: "CCI notification, SEBI takeover-code compliance for listed targets, and RBI/FEMA filings are prepared and pursued in parallel so approvals do not stall closing." },
      { step: "Closing and integration", desc: "Closing actions are executed against the checklist — payments, share transfers, board changes — followed by post-merger filings and integration of contracts and employees." },
    ],
    whoItsFor: [
      "Promoters selling their business who want warranties and indemnities they can live with",
      "Strategic and private-equity acquirers needing diligence they can rely on",
      "Startups in acqui-hire or consolidation conversations",
      "Family businesses restructuring ownership between branches or generations",
      "Foreign buyers acquiring Indian companies under the FEMA regime",
    ],
    extraFaqs: [
      { question: "When does a deal need CCI approval?", answer: "When the parties cross the asset or turnover thresholds under Section 5 of the Competition Act, 2002, the combination must be notified to the Competition Commission of India and cannot close until approval. The 2023 amendment also added a deal-value threshold covering transactions above ₹2,000 crore where the target has substantial business operations in India — which now catches many digital-sector deals that the old tests missed." },
      { question: "What does legal due diligence actually examine?", answer: "The chain of title to the shares or assets being bought, charges registered against assets on the MCA index, change-of-control clauses in material contracts, pending litigation traced through court and tribunal searches, employment and provident-fund liabilities, IP ownership, and the licences the business needs to keep operating. The findings feed directly into the warranties, indemnities, and price adjustments in the transaction documents." },
    ],
  },
];

export const allServices: ServiceItem[] = [...b2cServices, ...b2bServices];

export interface AudienceItem {
  label: string;
  description: string;
}

export const b2cAudiences: AudienceItem[] = [
  { label: "Individual Citizens", description: "Personal legal needs & disputes" },
  { label: "Families", description: "Matrimonial, custody & inheritance" },
  { label: "Students & Researchers", description: "Legal education & resources" },
  { label: "Litigants", description: "Ongoing case support & representation" },
  { label: "NRIs", description: "Cross-border legal matters & property" },
  { label: "Senior Citizens", description: "Elder rights & estate planning" },
];

export const b2bAudiences: AudienceItem[] = [
  { label: "Startups & SMEs", description: "Incorporation, compliance & contracts" },
  { label: "Large Corporates", description: "Enterprise legal operations" },
  { label: "Law Firms", description: "Case management & collaboration" },
  { label: "Banks & FIs", description: "Regulatory compliance & recovery" },
  { label: "Real Estate Developers", description: "RERA, land & construction law" },
  { label: "Insurance Companies", description: "Claims, disputes & compliance" },
];
