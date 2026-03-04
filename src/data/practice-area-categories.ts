export interface PracticeAreaCategory {
  id: string;
  title: string;
  description: string;
  lucideIcon: string;
  slugs: string[];
}

export const practiceAreaCategories: PracticeAreaCategory[] = [
  {
    id: "family-personal",
    title: "Family & Personal",
    description: "Divorce, custody, immigration, documentation and personal legal matters handled with care and sensitivity.",
    lucideIcon: "Heart",
    slugs: ["family-matrimonial", "immigration-visa", "documentation"],
  },
  {
    id: "property-real-estate",
    title: "Property & Real Estate",
    description: "Property disputes, real estate transactions, civil litigation and environmental compliance.",
    lucideIcon: "Home",
    slugs: ["property-real-estate", "civil-law", "environmental-law"],
  },
  {
    id: "business-corporate",
    title: "Business & Corporate",
    description: "Corporate governance, employment law, IP protection, tax planning, banking and international trade.",
    lucideIcon: "Briefcase",
    slugs: [
      "corporate-business", "labour-employment", "intellectual-property",
      "tax-law", "banking-finance", "international-law",
    ],
  },
  {
    id: "criminal-defense",
    title: "Criminal Defense",
    description: "Expert criminal defense, cyber crime, military law and bail applications across all courts.",
    lucideIcon: "ShieldAlert",
    slugs: ["criminal-law", "cyber-law", "military-defense"],
  },
  {
    id: "consumer-rights",
    title: "Consumer & Rights",
    description: "Consumer protection, insurance claims, constitutional rights, health law and education law.",
    lucideIcon: "UserCheck",
    slugs: [
      "consumer-protection", "insurance-law", "constitutional-law",
      "health-medical-law", "education-law",
    ],
  },
  {
    id: "specialized-dispute",
    title: "Specialized & Dispute Resolution",
    description: "Arbitration, ADR, media & entertainment, sports law, maritime, election law and more.",
    lucideIcon: "Sparkles",
    slugs: [
      "arbitration-adr", "media-entertainment", "sports-gaming-law",
      "maritime-admiralty", "election-law", "additional-services",
    ],
  },
];
