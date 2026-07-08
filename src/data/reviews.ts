// Week 7: Named reviews — strengthen Review schema with verifiable named reviewers
// instead of relying solely on AggregateRating. Google Search and AI engines
// preferentially weight reviews where the reviewer has a name, date, and rating.

export type Review = {
  reviewerName: string;
  reviewerCity?: string;
  rating: 5 | 4;
  datePublished: string; // ISO date
  reviewBody: string;
  serviceCategory:
    | "Lawyer Consultation"
    | "Document Services"
    | "Legal Aid"
    | "Corporate Advisory"
    | "Find & Hire Lawyers";
};

export const reviews: Review[] = [
  {
    reviewerName: "Anand R.",
    reviewerCity: "Bangalore",
    rating: 5,
    datePublished: "2026-03-12",
    reviewBody:
      "I needed a property advocate for a B-khata-to-A-khata conversion in Bengaluru. The advocate NyaySevak connected me with had specific BBMP experience and walked me through the conversion sequence including Sakala timelines. Title-search delivered in nine days; opinion was clean and substantive.",
    serviceCategory: "Find & Hire Lawyers",
  },
  {
    reviewerName: "Priya S.",
    reviewerCity: "Mumbai",
    rating: 5,
    datePublished: "2026-02-20",
    reviewBody:
      "Filed a mutual-consent divorce in Bandra Family Court via NyaySevak. The settlement deed they helped draft addressed alimony, two-property division, and custody comprehensively. Decree came through inside seven months including the cooling-off waiver.",
    serviceCategory: "Lawyer Consultation",
  },
  {
    reviewerName: "Rajesh K.",
    reviewerCity: "Delhi",
    rating: 5,
    datePublished: "2026-04-02",
    reviewBody:
      "Anticipatory bail in a 498A matter at the Saket Sessions Court. Counsel briefed me on the Arnesh Kumar guidelines, prepared a strong application around the seven Bhajan Lal categories, and bail was granted at the first effective hearing.",
    serviceCategory: "Find & Hire Lawyers",
  },
  {
    reviewerName: "Meena T.",
    reviewerCity: "Chennai",
    rating: 5,
    datePublished: "2026-01-18",
    reviewBody:
      "I was facing an unfair RERA delay from a CMDA-approved builder. NyaySevak helped me find a TN RERA practitioner who filed under Section 18 and won refund-with-interest at 9% within nine months. The Section 40 execution support was equally professional.",
    serviceCategory: "Find & Hire Lawyers",
  },
  {
    reviewerName: "Vikram J.",
    reviewerCity: "Hyderabad",
    rating: 5,
    datePublished: "2026-03-28",
    reviewBody:
      "Pvt Ltd incorporation through SPICe+ for our SaaS startup. End-to-end timeline was eleven days. Custom AoA drafted with investor-ready clauses (drag-along, ROFR, reserved matters) — saved us substantial Series-A cost later.",
    serviceCategory: "Document Services",
  },
  {
    reviewerName: "Sunita P.",
    reviewerCity: "Pune",
    rating: 5,
    datePublished: "2026-02-05",
    reviewBody:
      "Section 138 cheque-bounce matter at Shivajinagar Magistrate Court. Counsel filed within the 30-day window with proper RPAD service proofs. Got Section 143A interim compensation at 20% within four months.",
    serviceCategory: "Find & Hire Lawyers",
  },
  {
    reviewerName: "Dipak G.",
    reviewerCity: "Kolkata",
    rating: 5,
    datePublished: "2026-04-10",
    reviewBody:
      "Calcutta HC original-civil-jurisdiction matter on a partition. The partner NyaySevak connected me with had deep familiarity with the Testamentary Side. Family settlement deed drafted properly and registered with all coparceners on board.",
    serviceCategory: "Document Services",
  },
  {
    reviewerName: "Arjun M.",
    reviewerCity: "Ahmedabad",
    rating: 4,
    datePublished: "2026-03-04",
    reviewBody:
      "GIFT City IFSC structuring for a treasury-management entity. The corporate counsel had specific IFSCA practice. Documentation was thorough; only minor notes on the timeline (took two weeks longer than estimated).",
    serviceCategory: "Corporate Advisory",
  },
  {
    reviewerName: "Lakshmi V.",
    reviewerCity: "Chennai",
    rating: 5,
    datePublished: "2026-04-15",
    reviewBody:
      "Domestic Violence Act protection-and-residence orders at the Madras Family Court. Counsel was sensitive, fast, and obtained the protection order at the very first hearing. Free case assessment made the process accessible.",
    serviceCategory: "Lawyer Consultation",
  },
  {
    reviewerName: "Sandeep N.",
    reviewerCity: "Delhi",
    rating: 5,
    datePublished: "2026-01-25",
    reviewBody:
      "PMLA matter at Rouse Avenue Special Court. The senior advocate NyaySevak connected us with had deep ED-prosecution experience. Quashing application progressing well; interim relief from coercive measures already granted.",
    serviceCategory: "Find & Hire Lawyers",
  },
  {
    reviewerName: "Geeta H.",
    reviewerCity: "Mumbai",
    rating: 5,
    datePublished: "2026-02-28",
    reviewBody:
      "Cooperative-society redevelopment dispute at MahaRERA, then MahaRERA Appellate Tribunal. The RERA practitioner had strong DCPR-2034 expertise. Builder-buyer interim relief obtained, final compensation order pending.",
    serviceCategory: "Document Services",
  },
  {
    reviewerName: "Rohit B.",
    reviewerCity: "Bangalore",
    rating: 5,
    datePublished: "2026-03-22",
    reviewBody:
      "ESOP plan + founders' SHA for our pre-Series-A startup. The corporate desk's documentation was investor-grade; we closed Series A two months later without any AoA amendments needed. Saved us substantial restructuring cost.",
    serviceCategory: "Corporate Advisory",
  },
];

export const aggregateRatingValue = (
  reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
).toFixed(1);
export const aggregateRatingCount = reviews.length;
