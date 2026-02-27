import type { Metadata } from "next";
import Link from "next/link";
import { allServices } from "@/data/services";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found | NyaySevak" };

  const catLabel = service.category === "b2c" ? "for Individuals" : "for Businesses";
  return {
    title: `${service.title} - ${service.category === "b2c" ? "B2C" : "B2B"} Legal Services India | NyaySevak`,
    description: `${service.title} ${catLabel} on NyaySevak. ${service.bullets.join(". ")}. Book verified legal professionals across India.`,
    keywords: `${service.title.toLowerCase()}, ${service.category === "b2c" ? "individual" : "business"} legal services, ${service.bullets.map(b => b.toLowerCase()).slice(0, 3).join(", ")}, NyaySevak`,
    openGraph: {
      title: `${service.title} | NyaySevak Legal Services`,
      description: `${service.title} ${catLabel}. ${service.bullets[0]}.`,
      type: "website",
    },
  };
}

const serviceContent: Record<string, { overview: string; benefits: string[]; process: string[]; faqs: { q: string; a: string }[] }> = {
  "lawyer-consultation": {
    overview: "NyaySevak's Lawyer Consultation service connects you with verified, experienced lawyers across India for instant or scheduled consultations. Whether you need quick legal advice on a property matter, guidance on a criminal case, or consultation for a business dispute — our platform ensures you get expert help via secure video, audio, or chat channels with complete transparency in pricing.",
    benefits: ["Access to Bar Council-verified lawyers across all practice areas", "Choose between instant and scheduled consultations", "Secure video, audio, and chat communication channels", "Transparent pricing displayed before booking — no hidden fees", "Consultations available in multiple Indian languages", "Follow-up support and documentation after consultation"],
    process: ["Browse lawyers by specialization, court, or location", "Review profiles, ratings, fees, and availability", "Book an instant or scheduled consultation slot", "Connect via secure video, audio, or chat", "Receive expert legal advice and documented summary", "Get follow-up support or hire for full representation"],
    faqs: [
      { q: "How do I choose the right lawyer?", a: "Use our advanced filters to search by practice area, court, location, language, and fee range. Each lawyer profile shows Bar Council verification, client ratings, success metrics, and experience details." },
      { q: "What are the consultation modes available?", a: "We offer video calls, audio calls, and text chat consultations. You can choose the mode that works best for you during the booking process." },
      { q: "Is the pricing transparent?", a: "Yes. Every lawyer's consultation fee is displayed upfront before booking. There are no hidden charges or surprise fees." },
      { q: "Can I get a consultation in my regional language?", a: "Yes. Many of our lawyers offer consultations in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, and other regional languages." },
    ],
  },
  "find-hire-lawyers": {
    overview: "Finding the right lawyer can be overwhelming. NyaySevak's directory makes it simple — search by specialization, location, and court to find Bar Council-verified lawyers with transparent profiles showing ratings, reviews, success metrics, and fee structures.",
    benefits: ["Comprehensive directory of verified lawyers across India", "Advanced search by specialization, court, location, and language", "Transparent profiles with Bar Council registration verification", "Client ratings, reviews, and case success metrics", "Side-by-side fee comparison before hiring", "Direct booking and secure payment through the platform"],
    process: ["Enter your legal need, preferred location, or court", "Browse filtered results with verified lawyer profiles", "Compare ratings, fees, experience, and reviews", "Select a lawyer and view their detailed profile", "Book a consultation or hire for full representation", "Track your engagement through your dashboard"],
    faqs: [
      { q: "Are all lawyers on NyaySevak verified?", a: "Yes. Every lawyer on our platform undergoes Bar Council registration verification." },
      { q: "Can I hire a lawyer for a specific court?", a: "Absolutely. You can filter lawyers by the specific court where your matter is pending." },
    ],
  },
  "document-services": {
    overview: "Legal documents form the foundation of every legal right and transaction. NyaySevak provides comprehensive document services — from ready-to-use templates and custom drafting by qualified professionals to thorough document review, validation, and secure digital storage.",
    benefits: ["Library of ready-to-use legal document templates", "Custom document drafting by qualified legal professionals", "Expert review and validation of existing documents", "Secure encrypted digital storage and management", "Quick turnaround times for urgent document needs", "Multi-language document preparation available"],
    process: ["Select the type of document you need", "Choose between template, custom drafting, or review", "Provide required details and supporting information", "Receive draft for your review and approval", "Get revisions until the document is perfect", "Download the final document or get it delivered"],
    faqs: [
      { q: "What types of documents can you prepare?", a: "We handle all legal documents — agreements, affidavits, power of attorney, sale deeds, lease deeds, legal notices, wills, and more." },
      { q: "How long does custom document drafting take?", a: "Standard documents are typically ready within 24-48 hours. Urgent requirements can be processed on the same day." },
    ],
  },
  "legal-aid": {
    overview: "Access to justice is a fundamental right. NyaySevak's Legal Aid service ensures that eligible citizens can access free or subsidized legal services through our pro bono lawyer network and government scheme navigation assistance.",
    benefits: ["Free legal aid for eligible citizens under Legal Services Authority", "Pro bono lawyer network for those who cannot afford legal fees", "Special support for women, SC/ST, EWS, and senior citizens", "Government legal aid scheme navigation and application support", "Access to legal awareness and rights education programs", "Connecting eligible citizens with District Legal Services Authority"],
    process: ["Check your eligibility for legal aid", "Submit your legal aid application through our platform", "Get connected with a pro bono lawyer or legal aid provider", "Receive free or subsidized legal consultation", "Get representation in court if required", "Follow-up support until case resolution"],
    faqs: [
      { q: "Who is eligible for free legal aid?", a: "Under the Legal Services Authorities Act, eligible persons include women, children, SC/ST members, persons with disabilities, industrial workmen, persons in custody, disaster victims, and those with annual income below the prescribed limit." },
    ],
  },
  "legal-knowledge": {
    overview: "Legal literacy empowers citizens. NyaySevak's Legal Knowledge hub provides a comprehensive case law database, expert-written legal articles and guides, a full repository of acts and statutes, and know-your-rights educational resources.",
    benefits: ["Comprehensive searchable case law database", "Expert-written articles covering all 26 practice areas", "Complete repository of Indian acts, statutes, and bare acts", "Know-your-rights guides in simple, plain language", "Regular updates on new laws and legal developments", "Legal process guides with step-by-step instructions"],
    process: ["Browse articles by practice area or topic", "Search the case law database for relevant precedents", "Access acts and statutes from the repository", "Read know-your-rights guides relevant to your situation", "Use process guides to understand legal procedures", "Connect with a lawyer if you need professional help"],
    faqs: [],
  },
  "e-filing-assistance": {
    overview: "E-filing has become mandatory in many Indian courts. NyaySevak's E-filing Assistance service provides complete support for court e-filing — from document preparation and format conversion to portal navigation, submission, and filing status tracking.",
    benefits: ["Complete court e-filing support across all portals", "Document preparation and format conversion for e-filing", "Expert navigation of ICMS, eCourts, and other portals", "Filing status tracking with real-time updates", "Assistance with defect rectification if filings are returned", "Support for both advocates and litigants-in-person"],
    process: ["Share your case details and documents", "We prepare and format documents for e-filing", "Navigate the appropriate court e-filing portal", "Submit the filing on your behalf or with your assistance", "Receive filing confirmation and acknowledgment", "Track filing status and receive hearing date updates"],
    faqs: [],
  },
  "corporate-legal-advisory": {
    overview: "NyaySevak provides dedicated corporate legal advisory services for enterprises of all sizes. Our team of corporate lawyers offers strategic legal planning, risk assessment, board meeting support, governance advisory, and industry-specific regulatory guidance.",
    benefits: ["Dedicated legal teams tailored to your enterprise size", "Strategic legal planning aligned with business objectives", "Board meeting preparation and corporate governance support", "Industry-specific regulatory guidance and compliance", "Risk assessment and mitigation strategies", "Ongoing retainer-based advisory for continuous support"],
    process: ["Initial consultation to understand your business needs", "Assessment of current legal structure and compliance status", "Proposal for dedicated legal advisory engagement", "Assignment of specialized corporate legal team", "Regular advisory sessions and board support", "Periodic legal health checks and risk assessments"],
    faqs: [],
  },
  "compliance-management": {
    overview: "Regulatory compliance in India spans GST, MCA, Income Tax, labor laws, FEMA, and industry-specific regulations. NyaySevak's Compliance Management service provides automated compliance calendars, real-time alerts, filing assistance, and a dashboard to track your compliance status.",
    benefits: ["Automated compliance calendar with deadline alerts", "GST return filing and reconciliation support", "MCA annual filings and ROC compliance", "Income Tax compliance and TDS management", "Labor law compliance (PF, ESI, Minimum Wages, POSH)", "Real-time compliance status dashboard"],
    process: ["Onboard your company details and compliance profile", "Receive your customized compliance calendar", "Get automated alerts before every deadline", "Our team handles filings or reviews your submissions", "Track all compliance status on your dashboard", "Quarterly compliance reviews and risk reports"],
    faqs: [],
  },
  "contract-management": {
    overview: "Contracts are the backbone of business relationships. NyaySevak's Contract Management service covers the entire contract lifecycle — from drafting and negotiation to execution, storage, renewal tracking, and risk analysis.",
    benefits: ["End-to-end contract drafting and review by legal experts", "Centralized cloud-based contract repository", "Automated renewal and expiry date reminders", "Clause library with standard and custom templates", "Risk analysis and compliance checks for every contract", "Multi-party negotiation and redlining support"],
    process: ["Submit your contract requirement or existing contract", "Our legal team drafts or reviews the document", "Collaborative review with tracked changes and comments", "Final execution with e-signature support", "Contract stored in your centralized repository", "Automated tracking of renewal dates and obligations"],
    faqs: [],
  },
  "ip-management": {
    overview: "Intellectual property is among the most valuable assets for any business. NyaySevak provides comprehensive IP management — from trademark, patent, and copyright registration to ongoing protection, infringement monitoring, licensing, and portfolio strategy.",
    benefits: ["Complete trademark registration and opposition handling", "Patent filing, prosecution, and grant support", "Copyright and design registration services", "IP infringement monitoring and enforcement", "Licensing agreements and technology transfer support", "IP portfolio strategy, valuation, and audit"],
    process: ["IP audit to identify protectable assets", "Filing strategy based on business objectives", "Application preparation and filing with IPO", "Prosecution and examination response handling", "Registration certificate procurement", "Ongoing monitoring, renewal, and enforcement"],
    faqs: [],
  },
  "litigation-management": {
    overview: "Managing litigation across multiple courts and jurisdictions is complex. NyaySevak's Litigation Management service provides centralized case tracking dashboards, multi-jurisdiction management, expense tracking, hearing calendars, and outcome analytics.",
    benefits: ["Centralized dashboard for all pending cases", "Multi-jurisdiction case tracking across India", "Hearing calendar with automated reminders", "Litigation expense tracking and budget management", "Outcome analytics and success rate reporting", "Coordination with local counsel across all courts"],
    process: ["Onboard your existing case portfolio", "Set up centralized tracking dashboard", "Assign dedicated case managers per jurisdiction", "Receive automated hearing reminders and updates", "Track expenses and review budget utilization", "Quarterly analytics reports with risk assessment"],
    faqs: [],
  },
  "mergers-acquisitions-support": {
    overview: "Mergers and acquisitions demand meticulous legal due diligence and precise documentation. NyaySevak's M&A Support service covers the entire transaction lifecycle — from initial due diligence and deal structuring to regulatory approvals, documentation, closing, and post-merger integration.",
    benefits: ["Comprehensive legal due diligence across all domains", "Deal structuring and tax optimization advisory", "Transaction document drafting (SPA, SHA, BTA)", "Regulatory approvals — CCI, SEBI, RBI, NCLT", "Closing support and post-merger integration", "Cross-border M&A expertise with FEMA compliance"],
    process: ["Preliminary assessment and deal structure review", "Comprehensive legal due diligence", "Drafting and negotiation of transaction documents", "Regulatory filings and approval procurement", "Transaction closing and documentation", "Post-merger integration legal support"],
    faqs: [],
  },
};

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);
  if (!service) notFound();

  const content = serviceContent[slug] || {
    overview: `NyaySevak provides comprehensive ${service.title} services ${service.category === "b2c" ? "for individuals" : "for businesses"} across India. ${service.bullets.join(". ")}.`,
    benefits: service.bullets,
    process: ["Initial consultation", "Requirement assessment", "Service delivery", "Quality review", "Completion and follow-up"],
    faqs: [],
  };

  const catLabel = service.category === "b2c" ? "For Individuals (B2C)" : "For Businesses (B2B)";
  const otherServices = allServices.filter((s) => s.slug !== slug && s.category === service.category).slice(0, 3);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com/" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://nyaysevak.com/services" },
      { "@type": "ListItem", position: 3, name: service.title, item: `https://nyaysevak.com/services/${slug}` },
    ],
  };

  const faqJsonLd = content.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      {/* Hero — Dark */}
      <div className="bg-black pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <nav className="mb-10 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/services" className="transition-colors hover:text-gold">Services</Link>
            <span>/</span>
            <span className="text-gold">{service.title}</span>
          </nav>

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold/70">{catLabel}</p>
          <h1 className="text-4xl font-heading font-bold text-white lg:text-5xl">
            {service.title}
          </h1>
        </div>
      </div>

      {/* Overview — Cream */}
      <div className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="border-l-2 border-gold pl-8">
            <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-dark/70">Overview</h2>
            <p className="text-base leading-relaxed text-gray-600">{content.overview}</p>
          </div>
        </div>
      </div>

      {/* Benefits — Dark */}
      <div className="bg-dark py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-heading font-bold text-white">Key Benefits</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <span className="text-sm font-heading font-bold text-gold/40">{String(i + 1).padStart(2, "0")}.</span>
                <span className="text-sm text-gray-300">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process — Cream */}
      <div className="bg-cream py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-10 text-2xl font-heading font-bold text-gray-900">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.process.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-gold/10 text-xs font-bold text-gold-dark">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-600 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs — Dark */}
      {content.faqs.length > 0 && (
        <div className="bg-black py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="mb-10 text-2xl font-heading font-bold text-white">Frequently Asked Questions</h2>
            <div className="space-y-8">
              {content.faqs.map((faq, i) => (
                <div key={i} className="border-l border-gold/20 pl-6">
                  <h3 className="text-sm font-semibold text-white">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CTA — Cream */}
      <div className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900">
            Get {service.title} Today
          </h2>
          <p className="mx-auto mt-4 mb-8 max-w-lg text-gray-500">
            Connect with verified legal professionals for expert {service.title.toLowerCase()} services across India.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Related — Dark */}
      <div className="bg-dark py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h3 className="mb-10 text-center text-xl font-heading font-bold text-white">Related Services</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group border border-white/5 p-6 transition-colors hover:border-gold/30">
                <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{s.title}</h4>
                <p className="mt-2 text-xs text-gray-500">{s.bullets[0]}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
