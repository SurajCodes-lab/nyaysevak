// Week 8: Maps each practice-area slug to the user-search wording variants.
// First entry is the *primary* — what users actually type. Subsequent entries
// are alternates/synonyms that should appear in keywords meta and as anchor-text.
//
// SEO problem this solves: GSC was showing impressions only for property
// queries because "Property & Real Estate Lawyer" happens to contain "property"
// — but the divorce/criminal/corporate pages were buried because users search
// "divorce lawyer" not "Family & Matrimonial Lawyer". Surfacing the user's
// actual wording in titles/H1/meta turns these pages on for those queries.

export type KeywordVariantSet = {
  primary: string;          // headline term — used in title, H1
  variants: string[];       // additional terms — used in meta keywords + body
  shortLabel: string;       // very short label for nav cards / footer / chips
};

export const practiceAreaKeywordVariants: Record<string, KeywordVariantSet> = {
  "criminal-law": {
    primary: "Criminal Lawyer",
    variants: [
      "Criminal Lawyer",
      "Criminal Defence Lawyer",
      "Criminal Advocate",
      "Bail Lawyer",
      "Sessions Court Lawyer",
      "Criminal Defense Attorney India",
    ],
    shortLabel: "Criminal Lawyer",
  },
  "civil-law": {
    primary: "Civil Lawyer",
    variants: [
      "Civil Lawyer",
      "Civil Litigation Lawyer",
      "Civil Advocate",
      "Civil Court Lawyer",
      "Suit Filing Lawyer",
    ],
    shortLabel: "Civil Lawyer",
  },
  "family-matrimonial": {
    primary: "Divorce Lawyer",
    variants: [
      "Divorce Lawyer",
      "Family Lawyer",
      "Matrimonial Lawyer",
      "Divorce Advocate",
      "Mutual Divorce Lawyer",
      "Custody Lawyer",
      "Maintenance Lawyer",
    ],
    shortLabel: "Divorce Lawyer",
  },
  "property-real-estate": {
    primary: "Property Lawyer",
    variants: [
      "Property Lawyer",
      "Real Estate Lawyer",
      "Property Advocate",
      "Conveyancing Lawyer",
      "Title Verification Lawyer",
      "RERA Lawyer",
    ],
    shortLabel: "Property Lawyer",
  },
  "corporate-business": {
    primary: "Corporate Lawyer",
    variants: [
      "Corporate Lawyer",
      "Business Lawyer",
      "Company Lawyer",
      "Commercial Lawyer",
      "Corporate Advocate",
      "Startup Lawyer",
    ],
    shortLabel: "Corporate Lawyer",
  },
  "cyber-law": {
    primary: "Cyber Crime Lawyer",
    variants: [
      "Cyber Crime Lawyer",
      "Cyber Lawyer",
      "Cyber Law Advocate",
      "Online Fraud Lawyer",
      "IT Act Lawyer",
    ],
    shortLabel: "Cyber Crime Lawyer",
  },
  "tax-law": {
    primary: "Tax Lawyer",
    variants: [
      "Tax Lawyer",
      "Income Tax Lawyer",
      "GST Lawyer",
      "Tax Advocate",
      "ITAT Lawyer",
      "Tax Litigation Lawyer",
    ],
    shortLabel: "Tax Lawyer",
  },
  "labour-employment": {
    primary: "Labour Lawyer",
    variants: [
      "Labour Lawyer",
      "Employment Lawyer",
      "Labour Court Advocate",
      "Industrial Disputes Lawyer",
      "Workplace Harassment Lawyer",
    ],
    shortLabel: "Labour Lawyer",
  },
  "consumer-protection": {
    primary: "Consumer Court Lawyer",
    variants: [
      "Consumer Court Lawyer",
      "Consumer Lawyer",
      "Consumer Forum Advocate",
      "Consumer Protection Lawyer",
    ],
    shortLabel: "Consumer Lawyer",
  },
  "intellectual-property": {
    primary: "IP Lawyer",
    variants: [
      "IP Lawyer",
      "Trademark Lawyer",
      "Patent Lawyer",
      "Copyright Lawyer",
      "Intellectual Property Advocate",
    ],
    shortLabel: "IP Lawyer",
  },
  "banking-finance": {
    primary: "Banking Lawyer",
    variants: [
      "Banking Lawyer",
      "Finance Lawyer",
      "DRT Lawyer",
      "SARFAESI Lawyer",
      "Cheque Bounce Lawyer",
    ],
    shortLabel: "Banking Lawyer",
  },
  "arbitration-adr": {
    primary: "Arbitration Lawyer",
    variants: [
      "Arbitration Lawyer",
      "ADR Lawyer",
      "Mediation Lawyer",
      "Commercial Arbitration Counsel",
    ],
    shortLabel: "Arbitration Lawyer",
  },
  "documentation": {
    primary: "Documentation Lawyer",
    variants: [
      "Documentation Lawyer",
      "Legal Drafting Lawyer",
      "Contract Drafting Lawyer",
      "Deed Drafting Advocate",
    ],
    shortLabel: "Documentation Lawyer",
  },
  "cbi-cases": {
    primary: "CBI Case Lawyer",
    variants: [
      "CBI Case Lawyer",
      "CBI Defence Lawyer",
      "CBI Court Advocate",
      "Anti-Corruption Lawyer",
    ],
    shortLabel: "CBI Lawyer",
  },
  "ed-cases": {
    primary: "ED Case Lawyer",
    variants: [
      "ED Case Lawyer",
      "PMLA Lawyer",
      "Money Laundering Defence Lawyer",
      "ED Defence Counsel",
      "FEMA Lawyer",
    ],
    shortLabel: "ED Lawyer",
  },
  "ndps-cases": {
    primary: "NDPS Lawyer",
    variants: [
      "NDPS Lawyer",
      "Drug Case Lawyer",
      "NDPS Bail Lawyer",
      "Narcotics Defence Lawyer",
    ],
    shortLabel: "NDPS Lawyer",
  },
  "constitutional-law": {
    primary: "Constitutional Lawyer",
    variants: [
      "Constitutional Lawyer",
      "Writ Petition Lawyer",
      "PIL Lawyer",
      "High Court Writ Lawyer",
    ],
    shortLabel: "Constitutional Lawyer",
  },
  "immigration-visa": {
    primary: "Immigration Lawyer",
    variants: [
      "Immigration Lawyer",
      "Visa Lawyer",
      "OCI Lawyer",
      "Citizenship Lawyer",
    ],
    shortLabel: "Immigration Lawyer",
  },
  "insurance-law": {
    primary: "Insurance Lawyer",
    variants: [
      "Insurance Lawyer",
      "Insurance Claim Lawyer",
      "Motor Accident Claim Lawyer",
      "MACT Lawyer",
    ],
    shortLabel: "Insurance Lawyer",
  },
  "media-entertainment": {
    primary: "Media Lawyer",
    variants: [
      "Media Lawyer",
      "Entertainment Lawyer",
      "Defamation Lawyer",
      "Film Industry Lawyer",
    ],
    shortLabel: "Media Lawyer",
  },
  "education-law": {
    primary: "Education Lawyer",
    variants: [
      "Education Lawyer",
      "School Admission Lawyer",
      "University Lawyer",
      "RTE Act Lawyer",
    ],
    shortLabel: "Education Lawyer",
  },
  "environmental-law": {
    primary: "Environmental Lawyer",
    variants: [
      "Environmental Lawyer",
      "NGT Lawyer",
      "Pollution Lawyer",
      "Green Tribunal Advocate",
    ],
    shortLabel: "Environmental Lawyer",
  },
  "election-law": {
    primary: "Election Lawyer",
    variants: [
      "Election Lawyer",
      "Election Petition Lawyer",
      "RP Act Lawyer",
    ],
    shortLabel: "Election Lawyer",
  },
  "military-defense": {
    primary: "Military Lawyer",
    variants: [
      "Military Lawyer",
      "Armed Forces Tribunal Lawyer",
      "AFT Lawyer",
      "Defence Service Lawyer",
    ],
    shortLabel: "Military Lawyer",
  },
  "health-medical-law": {
    primary: "Medical Negligence Lawyer",
    variants: [
      "Medical Negligence Lawyer",
      "Medical Malpractice Lawyer",
      "Hospital Negligence Lawyer",
      "Healthcare Lawyer",
    ],
    shortLabel: "Medical Negligence Lawyer",
  },
  "sports-gaming-law": {
    primary: "Sports Lawyer",
    variants: [
      "Sports Lawyer",
      "Gaming Lawyer",
      "Esports Lawyer",
      "Sports Contract Advocate",
    ],
    shortLabel: "Sports Lawyer",
  },
  "international-law": {
    primary: "International Lawyer",
    variants: [
      "International Lawyer",
      "Cross-Border Lawyer",
      "International Trade Lawyer",
      "Foreign Investment Lawyer",
    ],
    shortLabel: "International Lawyer",
  },
  "maritime-admiralty": {
    primary: "Maritime Lawyer",
    variants: [
      "Maritime Lawyer",
      "Admiralty Lawyer",
      "Shipping Lawyer",
      "Port Disputes Advocate",
    ],
    shortLabel: "Maritime Lawyer",
  },
  "additional-services": {
    primary: "Legal Services",
    variants: ["Legal Services", "Specialist Legal Counsel"],
    shortLabel: "Legal Services",
  },
};

// Default fallback for any practice slug not in the map.
const DEFAULT_VARIANT: KeywordVariantSet = {
  primary: "Lawyer",
  variants: ["Lawyer", "Advocate", "Legal Counsel"],
  shortLabel: "Lawyer",
};

export function getVariantsForPractice(slug: string): KeywordVariantSet {
  return practiceAreaKeywordVariants[slug] ?? DEFAULT_VARIANT;
}

// City × practice variant map — for the city × practice landing pages.
// We expose a smaller, refined set since the city × practice URL space is bounded.
export const cityPracticeVariants: Record<string, KeywordVariantSet> = {
  "criminal-law": practiceAreaKeywordVariants["criminal-law"],
  "civil-law": practiceAreaKeywordVariants["civil-law"],
  "family-matrimonial": practiceAreaKeywordVariants["family-matrimonial"],
  "property-real-estate": practiceAreaKeywordVariants["property-real-estate"],
  "corporate-business": practiceAreaKeywordVariants["corporate-business"],
};
