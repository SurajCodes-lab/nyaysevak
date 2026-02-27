export interface Feature {
  slug: string;
  title: string;
  description: string;
  iconPath: string;
  bullets: string[];
}

export const platformFeatures: Feature[] = [
  {
    slug: "lawyer-directory",
    title: "Lawyer Directory",
    description: "Find the right lawyer for your specific legal needs from our comprehensive, verified directory.",
    iconPath: "M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z",
    bullets: [
      "Search by specialization, court, and location",
      "Verified Bar Council registration for every lawyer",
      "Client ratings, reviews & success rate metrics",
      "Compare fees and experience before booking",
      "Filter by language, availability & practice area",
    ],
  },
  {
    slug: "service-booking",
    title: "Service Booking",
    description: "Book legal services instantly with transparent pricing and flexible scheduling.",
    iconPath: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5",
    bullets: [
      "Instant or scheduled appointment booking",
      "Transparent, upfront pricing with no hidden fees",
      "Secure online payment integration",
      "Automated reminders and follow-ups",
      "Rescheduling and cancellation flexibility",
    ],
  },
  {
    slug: "legal-guides-resources",
    title: "Legal Guides & Resources",
    description: "Access a comprehensive library of legal guides, articles, and know-your-rights resources.",
    iconPath: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
    bullets: [
      "Expert-written articles on all practice areas",
      "Step-by-step legal process guides",
      "Acts, statutes & bare acts repository",
      "Case law summaries and legal updates",
      "Know-your-rights educational content",
    ],
  },
  {
    slug: "court-tribunal-information",
    title: "Court & Tribunal Information",
    description: "Navigate India's judicial system with detailed information on every court and tribunal.",
    iconPath: "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z",
    bullets: [
      "Supreme Court, High Courts & District Courts info",
      "Tribunal details with bench locations",
      "Jurisdiction and bench-wise coverage maps",
      "Arbitration institution directories",
      "Court filing procedures and fee structures",
    ],
  },
  {
    slug: "faq-sections",
    title: "FAQ Sections",
    description: "Get quick answers to common legal questions across every practice area.",
    iconPath: "M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z",
    bullets: [
      "Category-wise frequently asked questions",
      "Plain-language answers to legal queries",
      "Updated with latest legal developments",
      "Covers all 26 practice area categories",
      "Links to detailed resources for further reading",
    ],
  },
  {
    slug: "whatsapp-integration",
    title: "WhatsApp Integration",
    description: "Get instant legal assistance through WhatsApp for quick queries and document sharing.",
    iconPath: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
    bullets: [
      "Instant query resolution via WhatsApp",
      "Document sharing and verification support",
      "Appointment booking through chat",
      "Case status updates and notifications",
      "Available in multiple languages",
    ],
  },
];
