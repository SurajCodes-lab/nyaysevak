export interface CourtTier {
  id: string;
  title: string;
  subtitle: string;
  lucideIcon: string;
  count?: string;
  previewItems?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export const courtTiers: CourtTier[] = [
  {
    id: "supreme-court",
    title: "Supreme Court",
    subtitle: "Apex Court of India",
    lucideIcon: "Landmark",
    count: "1",
  },
  {
    id: "high-courts",
    title: "High Courts",
    subtitle: "State-level appellate jurisdiction",
    lucideIcon: "Building2",
    count: "25",
    previewItems: ["Delhi HC", "Bombay HC", "Madras HC"],
  },
  {
    id: "tribunals",
    title: "Tribunals",
    subtitle: "Specialized adjudicating bodies",
    lucideIcon: "Scale",
    count: "20+",
    previewItems: ["NCLT", "RERA", "Consumer Forums"],
  },
  {
    id: "district-courts",
    title: "District Courts",
    subtitle: "Trial courts across all states & UTs",
    lucideIcon: "MapPin",
    count: "700+",
    ctaLabel: "Find Your Court",
    ctaHref: "/courts",
  },
];
