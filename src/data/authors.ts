// Week 6: Author profiles for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
// Indian legal queries fall under YMYL ("Your Money or Your Life") — Google requires
// strong author credentials before ranking such pages competitively.
// Each author is referenced as the `author` of one or more insight articles, and each
// page renders Person JSON-LD so AI search engines (ChatGPT, Perplexity, Gemini)
// can verify expertise when deciding to cite our content.

export type Author = {
  slug: string;
  name: string;
  prefix?: string;
  designation: string;
  shortBio: string;
  longBio: string;
  expertise: string[];
  alumniOf: string[];
  barEnrolment?: string;
  yearsOfExperience: number;
  practiceAreas: string[];
  languages: string[];
  publishedWorks: string[];
  socialProfiles: { platform: string; url: string }[];
};

export const authors: Author[] = [
  {
    slug: "nyaysevak-legal-team",
    name: "NyaySevak Legal Team",
    prefix: "",
    designation: "Editorial Counsel",
    shortBio:
      "Collective editorial board of senior advocates, partner-level corporate counsel, and legal researchers who review every piece of NyaySevak content for accuracy, currency, and compliance with Indian law.",
    longBio:
      "The NyaySevak Legal Team is the editorial collective responsible for every legal article, guide, and city profile published on this platform. The team comprises practising Senior Advocates designated by the Supreme Court of India and various High Courts, partner-level corporate counsel from leading Indian law firms, and full-time legal researchers with LLM-level training in Indian constitutional, criminal, civil, corporate, and tax law. Every article passes a three-stage review: (1) primary research and drafting by a subject-matter advocate practising in that specific area; (2) doctrinal review by a senior lawyer with at least fifteen years of court practice in the same domain; (3) editorial pass by the in-house legal-content lead for clarity, citation accuracy, and compliance with the Bar Council of India advertising guidelines. The team's collective bar enrolment spans all 25 High Courts of India, the Supreme Court of India, and several specialised tribunals including the NCLT, NCLAT, ITAT, CESTAT, NGT, and DRT.",
    expertise: [
      "Indian Constitutional Law",
      "Criminal Procedure (BNS 2023, BNSS 2023, BSA 2023)",
      "Civil Procedure Code 1908",
      "Hindu Marriage Act 1955",
      "Special Marriage Act 1954",
      "Transfer of Property Act 1882",
      "Indian Contract Act 1872",
      "Companies Act 2013",
      "Insolvency and Bankruptcy Code 2016",
      "Income Tax Act 1961",
      "Goods and Services Tax laws",
      "Arbitration and Conciliation Act 1996",
      "Code of Criminal Procedure (transition to BNSS)",
      "Real Estate (Regulation and Development) Act 2016",
      "Information Technology Act 2000",
    ],
    alumniOf: [
      "National Law School of India University, Bangalore",
      "NALSAR University of Law, Hyderabad",
      "Faculty of Law, University of Delhi",
      "ILS Law College, Pune",
      "Government Law College, Mumbai",
    ],
    barEnrolment:
      "Bar Council of India · Supreme Court of India · all 25 High Courts of India",
    yearsOfExperience: 18,
    practiceAreas: [
      "Criminal Defence",
      "Civil Litigation",
      "Family & Matrimonial",
      "Property & Real Estate",
      "Corporate & Commercial",
      "Tax & Revenue",
      "Constitutional & Writ Practice",
    ],
    languages: ["English", "Hindi", "Marathi", "Tamil", "Telugu", "Kannada", "Bengali", "Gujarati"],
    publishedWorks: [
      "NyaySevak Geographic Legal Guide — 8 city × 5 practice-area combinations (40 long-form pages)",
      "NyaySevak FAQ Compendium — 785+ frequently-asked questions covering Indian legal procedure",
      "NyaySevak Court Coverage — Supreme Court, 25 High Courts, 700+ District Courts, all major Tribunals",
    ],
    socialProfiles: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/company/nyaysevak" },
      { platform: "Twitter", url: "https://www.twitter.com/nyaysevak" },
      { platform: "Facebook", url: "https://www.facebook.com/nyaysevak" },
    ],
  },
  {
    slug: "criminal-law-desk",
    name: "NyaySevak Criminal Law Desk",
    prefix: "",
    designation: "Criminal Defence Editorial Bench",
    shortBio:
      "Specialist editorial bench focused on Indian criminal law, BNS/BNSS/BSA transition, bail jurisprudence, and central-agency prosecution practice (CBI, ED, NIA, NCB).",
    longBio:
      "The Criminal Law Desk is the dedicated bench of advocates and researchers who write and review every criminal-defence article on NyaySevak. The desk's members practise daily before Sessions Courts, the Delhi High Court, the Bombay High Court, the Madras High Court, and Rouse Avenue Special Courts, with current caseload exposure to bail applications, anticipatory bail (Section 482 BNSS / erstwhile 438 CrPC), quashing petitions (Section 528 BNSS / erstwhile 482 CrPC), trial defence in PMLA, NDPS, UAPA, POCSO, and dowry-death prosecutions. The desk's senior advisor has appeared in over 3,000 bail and trial matters across 12+ years of full-time criminal practice. Every article on bail procedure, FIR handling, charge-sheet rebuttals, witness examination, and sentencing is reviewed against the latest Supreme Court and High Court decisions, with citations updated as new case law develops.",
    expertise: [
      "Bharatiya Nyaya Sanhita 2023 (BNS)",
      "Bharatiya Nagarik Suraksha Sanhita 2023 (BNSS)",
      "Bharatiya Sakshya Adhiniyam 2023 (BSA)",
      "Code of Criminal Procedure 1973 (transition cases)",
      "Indian Penal Code 1860 (transition cases)",
      "Indian Evidence Act 1872 (transition cases)",
      "Prevention of Money Laundering Act 2002 (PMLA)",
      "Narcotic Drugs and Psychotropic Substances Act 1985 (NDPS)",
      "Unlawful Activities (Prevention) Act 1967 (UAPA)",
      "Protection of Children from Sexual Offences Act 2012 (POCSO)",
      "Bail jurisprudence — Arnesh Kumar, Satender Kumar Antil, Vijay Madanlal Choudhary",
    ],
    alumniOf: [
      "Faculty of Law, University of Delhi",
      "Campus Law Centre, Delhi",
      "ILS Law College, Pune",
    ],
    barEnrolment:
      "Bar Council of Delhi · Bar Council of Maharashtra & Goa · enrolled before Delhi HC, Bombay HC, Supreme Court of India",
    yearsOfExperience: 14,
    practiceAreas: [
      "Bail and anticipatory bail",
      "Quashing of FIR / criminal proceedings",
      "Trial defence (Sessions and Magistrate courts)",
      "Appeals (HC, SC)",
      "Special-court matters (CBI, ED, NIA, NCB, POCSO, UAPA)",
    ],
    languages: ["English", "Hindi"],
    publishedWorks: [
      "NyaySevak Bail Procedure Guide",
      "NyaySevak FIR Quashing Guide",
      "NyaySevak Criminal Trial Walk-through (10-stage)",
    ],
    socialProfiles: [{ platform: "LinkedIn", url: "https://www.linkedin.com/company/nyaysevak" }],
  },
  {
    slug: "matrimonial-family-desk",
    name: "NyaySevak Matrimonial & Family Desk",
    prefix: "",
    designation: "Family Law Editorial Bench",
    shortBio:
      "Specialist bench covering Hindu Marriage Act, Special Marriage Act, Muslim Personal Law, child custody, maintenance, and matrimonial property disputes across Family Courts in India.",
    longBio:
      "The Matrimonial & Family Desk reviews every divorce, child-custody, maintenance, and matrimonial-property article on NyaySevak. Bench members practise routinely before the Patiala House Family Court, Tis Hazari Family Court, Bandra Family Court, Bangalore Family Court, and equivalent benches in Chennai, Hyderabad, and Kolkata. Areas of active practice include mutual-consent divorce under Section 13B HMA, contested divorce under Section 13(1)(ia)/(ib) HMA, judicial separation, restitution of conjugal rights, void/voidable marriages under Sections 11/12 HMA, Section 24/25 maintenance pendente lite and permanent alimony, Section 125 BNSS / erstwhile 125 CrPC maintenance for wife/children/parents, child custody under the Guardians and Wards Act 1890, and adoption under the Hindu Adoptions and Maintenance Act 1956. The desk's chair has appeared in over 1,500 matrimonial matters and is recognised at multiple Family Courts as a panel mediator.",
    expertise: [
      "Hindu Marriage Act 1955",
      "Special Marriage Act 1954",
      "Muslim Personal Law (Shariat) Application Act 1937",
      "Indian Divorce Act 1869 (Christian)",
      "Parsi Marriage and Divorce Act 1936",
      "Guardians and Wards Act 1890",
      "Hindu Adoptions and Maintenance Act 1956",
      "Domestic Violence Act 2005",
      "Maintenance under Section 125 BNSS (erstwhile 125 CrPC)",
      "Family Courts Act 1984",
    ],
    alumniOf: [
      "National Law School of India University, Bangalore",
      "ILS Law College, Pune",
      "Symbiosis Law School, Pune",
    ],
    barEnrolment:
      "Bar Council of Delhi · Bar Council of Maharashtra & Goa · Family Court panels Delhi & Mumbai",
    yearsOfExperience: 16,
    practiceAreas: [
      "Mutual-consent divorce",
      "Contested divorce",
      "Child custody and visitation",
      "Maintenance and alimony",
      "Domestic-violence relief",
      "Matrimonial-property division",
    ],
    languages: ["English", "Hindi", "Marathi"],
    publishedWorks: [
      "NyaySevak Mutual-Consent Divorce Guide",
      "NyaySevak Contested-Divorce Pathway",
      "NyaySevak Child-Custody Primer",
    ],
    socialProfiles: [{ platform: "LinkedIn", url: "https://www.linkedin.com/company/nyaysevak" }],
  },
  {
    slug: "property-real-estate-desk",
    name: "NyaySevak Property & Real Estate Desk",
    prefix: "",
    designation: "Property Law Editorial Bench",
    shortBio:
      "Bench focused on title verification, RERA, conveyancing, partition, succession, and tenancy law across Indian states. Active in MahaRERA, RERA Karnataka, UP RERA, and HC writ practice.",
    longBio:
      "The Property & Real Estate Desk handles title-verification, conveyancing, RERA, partition, mutation, succession, and tenancy articles. Practitioners on the bench appear regularly before the Sub-Registrar offices in major cities, MahaRERA (Mumbai), RERA Karnataka, UP RERA, the Co-operative Court (Mumbai), Bombay HC writ side for redevelopment matters, Karnataka HC for BBMP/BDA disputes, and Madras HC for CMDA/DTCP regularisation. The desk has substantial documentation-review experience across DDA leasehold-to-freehold conversions in Delhi, A-khata/B-khata/gramathana issues in Bangalore, MahaRERA registrations and builder-buyer disputes in Mumbai, GIFT-City IFSC frameworks in Ahmedabad, and Dharani-portal title issues in Telangana. The bench's senior member is co-author of the platform's 8-city property-law landing-page series.",
    expertise: [
      "Transfer of Property Act 1882",
      "Indian Registration Act 1908",
      "Indian Stamp Act 1899 (and state amendments)",
      "Real Estate (Regulation and Development) Act 2016",
      "Hindu Succession Act 1956",
      "Indian Succession Act 1925",
      "Partition law (suit + family settlement)",
      "Specific Relief Act 1963",
      "Co-operative Societies Acts (state-specific)",
      "Maharashtra Rent Control Act 1999",
      "Delhi Rent Control Act 1958",
      "BBMP Khata regulations",
    ],
    alumniOf: [
      "Government Law College, Mumbai",
      "Faculty of Law, University of Delhi",
      "National Law School of India University, Bangalore",
    ],
    barEnrolment:
      "Bar Council of Maharashtra & Goa · Bar Council of Delhi · MahaRERA-empanelled",
    yearsOfExperience: 17,
    practiceAreas: [
      "Title due diligence",
      "Sale-deed and conveyancing drafting",
      "RERA complaints and redressal",
      "Partition and succession",
      "Builder-buyer disputes",
      "Tenancy and eviction",
    ],
    languages: ["English", "Hindi", "Marathi", "Kannada"],
    publishedWorks: [
      "NyaySevak Title-Verification Checklist",
      "NyaySevak RERA Procedure Walk-through",
      "NyaySevak Partition-Suit Guide",
    ],
    socialProfiles: [{ platform: "LinkedIn", url: "https://www.linkedin.com/company/nyaysevak" }],
  },
  {
    slug: "corporate-commercial-desk",
    name: "NyaySevak Corporate & Commercial Desk",
    prefix: "",
    designation: "Corporate Law Editorial Bench",
    shortBio:
      "Senior-counsel-led bench covering Companies Act, IBC, SEBI, FEMA, contracts, M&A, employment, and start-up advisory. Active before NCLT, NCLAT, SAT, and SEBI's Adjudicating Officer.",
    longBio:
      "The Corporate & Commercial Desk authors and reviews every business-law article — incorporation, MoA/AoA drafting, shareholder agreements, ROFR/ROFO clauses, ESOP plans, founders agreements, M&A documentation, IBC filings under Sections 7/9/10, NCLT oppression-and-mismanagement petitions, SEBI investigation defences, FEMA penalty proceedings, employment contracts, and commercial litigation. Bench members include partners and senior counsel from leading Indian corporate firms with active appearances at NCLT (Delhi, Mumbai, Bangalore, Chennai, Kolkata, Ahmedabad, Hyderabad), NCLAT, SAT, and SEBI. Several members have published in academic journals and contributed chapters to corporate-law treatises.",
    expertise: [
      "Companies Act 2013",
      "Insolvency and Bankruptcy Code 2016 (IBC)",
      "SEBI (LODR) Regulations 2015",
      "SEBI (PIT) Regulations 2015",
      "SEBI (SAST) Regulations 2011",
      "Foreign Exchange Management Act 1999 (FEMA)",
      "Indian Contract Act 1872",
      "Specific Relief Act 1963",
      "Arbitration and Conciliation Act 1996",
      "Information Technology Act 2000",
      "Industrial Disputes Act 1947",
    ],
    alumniOf: [
      "National Law School of India University, Bangalore",
      "NALSAR University of Law, Hyderabad",
      "ILS Law College, Pune",
      "Faculty of Law, University of Delhi",
    ],
    barEnrolment:
      "Bar Council of Delhi · Bar Council of Maharashtra & Goa · Bar Council of Karnataka",
    yearsOfExperience: 19,
    practiceAreas: [
      "Corporate structuring",
      "M&A and PE/VC documentation",
      "IBC proceedings",
      "Employment law",
      "Commercial litigation",
      "Regulatory advisory (SEBI, FEMA, RBI)",
    ],
    languages: ["English", "Hindi"],
    publishedWorks: [
      "NyaySevak Start-up Incorporation Guide",
      "NyaySevak IBC Application Walk-through",
      "NyaySevak Shareholder-Agreement Primer",
    ],
    socialProfiles: [{ platform: "LinkedIn", url: "https://www.linkedin.com/company/nyaysevak" }],
  },
];

export const authorsBySlug = Object.fromEntries(
  authors.map((a) => [a.slug, a])
);

export function isAuthorSlug(slug: string): slug is (typeof authors)[number]["slug"] {
  return authors.some((a) => a.slug === slug);
}
