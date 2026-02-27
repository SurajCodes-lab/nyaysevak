export interface ServiceItem {
  slug: string;
  title: string;
  category: "b2c" | "b2b";
  iconPath: string;
  bullets: string[];
}

export const b2cServices: ServiceItem[] = [
  {
    slug: "lawyer-consultation",
    title: "Lawyer Consultation",
    category: "b2c",
    iconPath: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    bullets: [
      "Connect with verified, experienced lawyers",
      "Instant or scheduled booking through website",
      "Transparent pricing with no hidden fees",
      "Secure video, audio & chat consultations",
    ],
  },
  {
    slug: "find-hire-lawyers",
    title: "Find & Hire Lawyers",
    category: "b2c",
    iconPath: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z",
    bullets: [
      "Search by specialization, location & court",
      "Verified profiles with Bar Council registration",
      "Client ratings, reviews & success metrics",
      "Direct booking with fee comparison",
    ],
  },
  {
    slug: "document-services",
    title: "Document Services",
    category: "b2c",
    iconPath: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z",
    bullets: [
      "Ready-to-use legal document templates",
      "Custom drafting by qualified professionals",
      "Thorough document review & validation",
      "Secure digital storage & management",
    ],
  },
  {
    slug: "legal-aid",
    title: "Legal Aid",
    category: "b2c",
    iconPath: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z",
    bullets: [
      "Free legal aid for eligible citizens",
      "Pro bono lawyer network access",
      "Support for women, SC/ST & EWS sections",
      "Government scheme navigation assistance",
    ],
  },
  {
    slug: "legal-knowledge",
    title: "Legal Knowledge",
    category: "b2c",
    iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    bullets: [
      "Comprehensive case law database",
      "Expert-written legal articles & guides",
      "Full acts & statutes repository",
      "Know-your-rights educational resources",
    ],
  },
  {
    slug: "e-filing-assistance",
    title: "E-filing Assistance",
    category: "b2c",
    iconPath: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5",
    bullets: [
      "Court e-filing support & submission",
      "Document preparation for e-filing portals",
      "Portal navigation & technical assistance",
      "Filing status tracking & updates",
    ],
  },
];

export const b2bServices: ServiceItem[] = [
  {
    slug: "corporate-legal-advisory",
    title: "Corporate Legal Advisory",
    category: "b2b",
    iconPath: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21",
    bullets: [
      "Dedicated legal team for your enterprise",
      "Strategic legal planning & risk assessment",
      "Board meeting legal support & governance",
      "Industry-specific regulatory guidance",
    ],
  },
  {
    slug: "compliance-management",
    title: "Compliance Management",
    category: "b2b",
    iconPath: "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75",
    bullets: [
      "Automated compliance calendar & alerts",
      "GST, MCA & Income Tax compliance",
      "Labor law & industry-specific compliance",
      "Real-time compliance status dashboard",
    ],
  },
  {
    slug: "contract-management",
    title: "Contract Management",
    category: "b2b",
    iconPath: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",
    bullets: [
      "End-to-end contract drafting & review",
      "Centralized contract repository",
      "Automated renewal & expiry reminders",
      "Clause library with risk analysis",
    ],
  },
  {
    slug: "ip-management",
    title: "IP Management",
    category: "b2b",
    iconPath: "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
    bullets: [
      "Trademark, patent & copyright registration",
      "IP filings, prosecution & renewals",
      "Infringement monitoring & enforcement",
      "IP portfolio strategy & valuation",
    ],
  },
  {
    slug: "litigation-management",
    title: "Litigation Management",
    category: "b2b",
    iconPath: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
    bullets: [
      "Centralized case tracking dashboard",
      "Multi-jurisdiction case management",
      "Litigation expense tracking & budgeting",
      "Outcome analytics & reporting",
    ],
  },
  {
    slug: "mergers-acquisitions-support",
    title: "M&A Support",
    category: "b2b",
    iconPath: "M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5",
    bullets: [
      "Comprehensive legal due diligence",
      "Transaction document preparation",
      "Regulatory approvals & filings",
      "Post-merger integration legal support",
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
