// Week 5: Contextual cross-linking from each practice area to relevant services and
// (where applicable) the matching city × practice-area landing pages.

// Map each practice-area slug → 3 relevant service slugs (for mid-body "Recommended Services" block)
export const practiceAreaToServices: Record<string, { slug: string; desc: string }[]> = {
  // Criminal / specialist criminal
  "criminal-law": [
    { slug: "lawyer-consultation", desc: "Talk to a verified criminal lawyer for bail, quashing, and trial defence advice." },
    { slug: "find-hire-lawyers", desc: "Find specialist criminal advocates filtered by court and jurisdiction." },
    { slug: "e-filing-assistance", desc: "Urgent bail and quashing e-filings across Sessions Courts and High Courts." },
  ],
  "cbi-cases": [
    { slug: "lawyer-consultation", desc: "Connect with CBI-trial specialists for investigation and trial stages." },
    { slug: "litigation-management", desc: "Multi-hearing CBI case tracking across jurisdictions." },
    { slug: "find-hire-lawyers", desc: "Find senior counsel with Rouse Avenue and CBI Special Court practice." },
  ],
  "ed-cases": [
    { slug: "lawyer-consultation", desc: "Advice on ECIR, PMLA attachment, and summons response." },
    { slug: "litigation-management", desc: "Multi-forum PMLA case tracking — Adjudicating Authority, Tribunal, HC." },
    { slug: "find-hire-lawyers", desc: "PMLA specialists across Special PMLA Courts and appellate tribunals." },
  ],
  "ndps-cases": [
    { slug: "lawyer-consultation", desc: "Urgent bail and NDPS trial defence advice." },
    { slug: "find-hire-lawyers", desc: "NDPS Special Court specialists across India." },
    { slug: "e-filing-assistance", desc: "Urgent NDPS bail e-filings." },
  ],
  // Civil / property / family
  "civil-law": [
    { slug: "lawyer-consultation", desc: "Civil lawyer advice on disputes, recovery, and property matters." },
    { slug: "document-services", desc: "Drafting of plaints, written statements, agreements, and notices." },
    { slug: "find-hire-lawyers", desc: "Find civil-litigation specialists across all courts." },
  ],
  "family-matrimonial": [
    { slug: "lawyer-consultation", desc: "Divorce, custody, maintenance, and 498A advisory in confidence." },
    { slug: "document-services", desc: "MCD petitions, settlement deeds, and custody agreements." },
    { slug: "legal-aid", desc: "Free legal aid for eligible women in matrimonial matters." },
  ],
  "property-real-estate": [
    { slug: "document-services", desc: "Sale, lease, gift deed drafting with registration assistance." },
    { slug: "lawyer-consultation", desc: "Title verification and property-dispute strategy." },
    { slug: "find-hire-lawyers", desc: "RERA, civil property, and conveyancing specialists." },
  ],
  // Corporate
  "corporate-business": [
    { slug: "corporate-legal-advisory", desc: "Dedicated legal teams for your business — strategy, governance, risk." },
    { slug: "compliance-management", desc: "Automated GST, MCA, labour-law compliance calendars." },
    { slug: "contract-management", desc: "End-to-end contract drafting, review, and lifecycle tracking." },
  ],
  "banking-finance": [
    { slug: "litigation-management", desc: "SARFAESI, DRT, IBC case tracking across jurisdictions." },
    { slug: "corporate-legal-advisory", desc: "Banking regulatory and recovery strategy." },
    { slug: "find-hire-lawyers", desc: "IBC and banking-recovery specialists." },
  ],
  "tax-law": [
    { slug: "compliance-management", desc: "Automated GST, TDS, and Income Tax compliance tracking." },
    { slug: "lawyer-consultation", desc: "Tax notice response and appeal strategy." },
    { slug: "find-hire-lawyers", desc: "ITAT, GST Tribunal, and tax-appellate specialists." },
  ],
  "intellectual-property": [
    { slug: "ip-management", desc: "Trademark, patent, copyright registration and enforcement." },
    { slug: "document-services", desc: "Licensing, assignment, and NDA drafting." },
    { slug: "find-hire-lawyers", desc: "Patent and trademark prosecution specialists." },
  ],
  "arbitration-adr": [
    { slug: "litigation-management", desc: "Multi-jurisdiction arbitration case management." },
    { slug: "lawyer-consultation", desc: "Arbitration strategy and enforcement advice." },
    { slug: "find-hire-lawyers", desc: "Arbitrators and institutional-arbitration specialists." },
  ],
  "labour-employment": [
    { slug: "compliance-management", desc: "PF, ESI, POSH, Minimum Wages compliance." },
    { slug: "contract-management", desc: "Employment agreements, POSH policies, NDAs." },
    { slug: "lawyer-consultation", desc: "Wrongful termination and industrial dispute advice." },
  ],
  "consumer-protection": [
    { slug: "lawyer-consultation", desc: "Consumer Commission strategy and remedies." },
    { slug: "document-services", desc: "Complaint drafting, legal notices, and affidavits." },
    { slug: "e-filing-assistance", desc: "District Commission and NCDRC e-filings." },
  ],
  "cyber-law": [
    { slug: "lawyer-consultation", desc: "Cyber-crime complaint and defence advice." },
    { slug: "compliance-management", desc: "DPDP Act and IT Act compliance for businesses." },
    { slug: "find-hire-lawyers", desc: "Cyber-crime specialists across India's Cyber Police cells." },
  ],
  "documentation": [
    { slug: "document-services", desc: "Full-service legal drafting, attestation, and apostille." },
    { slug: "lawyer-consultation", desc: "Advice on the right legal instrument for your need." },
    { slug: "find-hire-lawyers", desc: "Notaries and drafting specialists." },
  ],
  "constitutional-law": [
    { slug: "lawyer-consultation", desc: "Writ petition, PIL, and fundamental-rights strategy." },
    { slug: "find-hire-lawyers", desc: "Constitutional bench and senior-counsel specialists." },
    { slug: "e-filing-assistance", desc: "Urgent writ petitions at High Court and Supreme Court." },
  ],
};

// Map each practice-area slug to its matching city-practice slug (where applicable)
// Only 5 of our practice-area slugs have direct city pages; others map to `null`.
export const practiceAreaToCityPracticeSlug: Record<string, "criminal-law" | "civil-law" | "family-matrimonial" | "property-real-estate" | "corporate-business" | null> = {
  "criminal-law": "criminal-law",
  "civil-law": "civil-law",
  "family-matrimonial": "family-matrimonial",
  "property-real-estate": "property-real-estate",
  "corporate-business": "corporate-business",
  // Closely related mappings for city cross-linking
  "cbi-cases": "criminal-law",
  "ed-cases": "criminal-law",
  "ndps-cases": "criminal-law",
  // Default: no direct city mapping
  "banking-finance": null,
  "tax-law": null,
  "intellectual-property": null,
  "arbitration-adr": null,
  "labour-employment": null,
  "consumer-protection": null,
  "cyber-law": null,
  "documentation": null,
  "additional-services": null,
  "environmental-law": null,
  "constitutional-law": null,
  "immigration-visa": null,
  "insurance-law": null,
  "media-entertainment": null,
  "education-law": null,
  "maritime-admiralty": null,
  "election-law": null,
  "military-defense": null,
  "health-medical-law": null,
  "sports-gaming-law": null,
  "international-law": null,
};

// Default service recommendations if a practice area isn't explicitly mapped
export const defaultServiceRecommendations = [
  { slug: "lawyer-consultation", desc: "Connect with a verified specialist in this practice area." },
  { slug: "find-hire-lawyers", desc: "Find Bar Council verified advocates for your matter." },
  { slug: "document-services", desc: "Professional legal drafting for this area of law." },
];
