import type { Metadata } from "next";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import {
  ArrowRight, CheckCircle2, Shield, Clock, Users, Star,
  Scale, Search, FileText, HeartHandshake, BookOpen, Upload,
  Building2, ClipboardCheck, PenTool, Lightbulb, BarChart3, ArrowLeftRight,
} from "lucide-react";
import { allServices } from "@/data/services";
import { notFound } from "next/navigation";

const lucideIconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Scale, Search, FileText, HeartHandshake, BookOpen, Upload,
  Building2, ClipboardCheck, PenTool, Lightbulb, BarChart3, ArrowLeftRight,
};

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

const serviceContent: Record<string, { overview: string; benefits: string[]; process: string[]; whyChoose: string[]; faqs: { q: string; a: string }[] }> = {
  "lawyer-consultation": {
    overview: "NyaySevak's Lawyer Consultation service connects you with verified, experienced lawyers across India for instant or scheduled consultations. Whether you need quick legal advice on a property matter, guidance on a criminal case, or consultation for a business dispute — our platform ensures you get expert help via secure video, audio, or chat channels with complete transparency in pricing.",
    benefits: ["Access to Bar Council-verified lawyers across all practice areas", "Choose between instant and scheduled consultations", "Secure video, audio, and chat communication channels", "Transparent pricing displayed before booking — no hidden fees", "Consultations available in multiple Indian languages", "Follow-up support and documentation after consultation"],
    process: ["Browse lawyers by specialization, court, or location", "Review profiles, ratings, fees, and availability", "Book an instant or scheduled consultation slot", "Connect via secure video, audio, or chat", "Receive expert legal advice and documented summary", "Get follow-up support or hire for full representation"],
    whyChoose: ["1,000+ verified advocates across all 29 practice areas", "Average response time under 2 hours for urgent matters", "Consultations in 15+ Indian languages including Hindi, Tamil, Bengali", "4.8/5 average client satisfaction rating", "Confidential and encrypted communication", "Free first consultation for new clients"],
    faqs: [
      { q: "How do I choose the right lawyer?", a: "Use our advanced filters to search by practice area, court, location, language, and fee range. Each lawyer profile shows Bar Council verification, client ratings, success metrics, and experience details." },
      { q: "What are the consultation modes available?", a: "We offer video calls, audio calls, and text chat consultations. You can choose the mode that works best for you during the booking process." },
      { q: "Is the pricing transparent?", a: "Yes. Every lawyer's consultation fee is displayed upfront before booking. There are no hidden charges or surprise fees." },
      { q: "Can I get a consultation in my regional language?", a: "Yes. Many of our lawyers offer consultations in Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, and other regional languages." },
      { q: "What happens after my consultation?", a: "You receive a documented summary of the advice given. If you need further assistance, you can hire the same lawyer for full representation or get a second opinion from another expert." },
      { q: "Is my information kept confidential?", a: "Absolutely. All consultations are encrypted end-to-end. We follow strict data protection protocols and attorney-client privilege standards." },
    ],
  },
  "find-hire-lawyers": {
    overview: "Finding the right lawyer can be overwhelming. NyaySevak's directory makes it simple — search by specialization, location, and court to find Bar Council-verified lawyers with transparent profiles showing ratings, reviews, success metrics, and fee structures. Our AI-powered matching algorithm ensures you find the most suitable advocate for your specific legal matter.",
    benefits: ["Comprehensive directory of verified lawyers across India", "Advanced search by specialization, court, location, and language", "Transparent profiles with Bar Council registration verification", "Client ratings, reviews, and case success metrics", "Side-by-side fee comparison before hiring", "Direct booking and secure payment through the platform"],
    process: ["Enter your legal need, preferred location, or court", "Browse filtered results with verified lawyer profiles", "Compare ratings, fees, experience, and reviews", "Select a lawyer and view their detailed profile", "Book a consultation or hire for full representation", "Track your engagement through your dashboard"],
    whyChoose: ["Every lawyer verified with Bar Council registration number", "Compare multiple lawyers before making a decision", "No middlemen — direct booking with transparent pricing", "Lawyers available for all courts from Supreme Court to District Courts", "Specialized experts for niche areas like maritime, sports, or IP law", "24/7 platform access with dedicated customer support"],
    faqs: [
      { q: "Are all lawyers on NyaySevak verified?", a: "Yes. Every lawyer on our platform undergoes Bar Council registration verification. We also validate their practice experience and specialization claims." },
      { q: "Can I hire a lawyer for a specific court?", a: "Absolutely. You can filter lawyers by the specific court where your matter is pending — from the Supreme Court to any District Court across India." },
      { q: "How does the fee comparison work?", a: "Each lawyer's fee structure is displayed transparently on their profile. You can compare consultation fees, retainer charges, and per-appearance costs side by side before making a decision." },
      { q: "What if I'm not satisfied with my lawyer?", a: "If you're not satisfied, you can switch to another lawyer at any time. We also have a feedback system to ensure quality and accountability." },
    ],
  },
  "document-services": {
    overview: "Legal documents form the foundation of every legal right and transaction. NyaySevak provides comprehensive document services — from ready-to-use templates and custom drafting by qualified professionals to thorough document review, validation, and secure digital storage. Whether it's a simple affidavit, a complex shareholder agreement, or a property sale deed, our legal professionals ensure accuracy and legal compliance.",
    benefits: ["Library of 500+ ready-to-use legal document templates", "Custom document drafting by qualified legal professionals", "Expert review and validation of existing documents", "Secure encrypted digital storage and management", "Quick turnaround times for urgent document needs", "Multi-language document preparation available"],
    process: ["Select the type of document you need", "Choose between template, custom drafting, or review", "Provide required details and supporting information", "Receive draft for your review and approval", "Get revisions until the document is perfect", "Download the final document or get it delivered"],
    whyChoose: ["500+ professionally drafted legal templates", "Drafting by lawyers with 5+ years of experience", "Same-day delivery for urgent requirements", "Notarization and attestation support available", "Documents valid across all Indian jurisdictions", "Secure cloud storage with AES-256 encryption"],
    faqs: [
      { q: "What types of documents can you prepare?", a: "We handle all legal documents — agreements, affidavits, power of attorney, sale deeds, lease deeds, legal notices, wills, partnership deeds, MOUs, employment contracts, NDAs, and more." },
      { q: "How long does custom document drafting take?", a: "Standard documents are typically ready within 24-48 hours. Urgent requirements can be processed on the same day with our express service." },
      { q: "Can I get documents in my regional language?", a: "Yes. We prepare documents in English, Hindi, and several regional languages as required by the relevant jurisdiction." },
      { q: "Are the templates legally valid?", a: "Yes. All templates are drafted by qualified lawyers and comply with Indian legal requirements. They're suitable for use across all states and UTs." },
    ],
  },
  "legal-aid": {
    overview: "Access to justice is a fundamental right guaranteed under the Indian Constitution. NyaySevak's Legal Aid service ensures that eligible citizens can access free or subsidized legal services through our pro bono lawyer network and government scheme navigation assistance. We connect you with experienced advocates who volunteer their time to help those who cannot afford legal representation.",
    benefits: ["Free legal aid for eligible citizens under Legal Services Authority", "Pro bono lawyer network for those who cannot afford legal fees", "Special support for women, SC/ST, EWS, and senior citizens", "Government legal aid scheme navigation and application support", "Access to legal awareness and rights education programs", "Connecting eligible citizens with District Legal Services Authority"],
    process: ["Check your eligibility for legal aid", "Submit your legal aid application through our platform", "Get connected with a pro bono lawyer or legal aid provider", "Receive free or subsidized legal consultation", "Get representation in court if required", "Follow-up support until case resolution"],
    whyChoose: ["Partnered with legal aid organizations across India", "Dedicated helpline for legal aid queries", "Support in filing NALSA applications", "Special focus on women, children, and marginalized communities", "Awareness programs on fundamental legal rights", "No paperwork burden — we handle the application process"],
    faqs: [
      { q: "Who is eligible for free legal aid?", a: "Under the Legal Services Authorities Act, eligible persons include women, children, SC/ST members, persons with disabilities, industrial workmen, persons in custody, disaster victims, and those with annual income below the prescribed limit." },
      { q: "How do I apply for legal aid through NyaySevak?", a: "Simply fill out our legal aid assessment form. We'll check your eligibility and connect you with the appropriate legal aid service or pro bono lawyer." },
      { q: "Is legal aid available for criminal cases?", a: "Yes. Legal aid is available for all types of cases — criminal, civil, family matters, and more — as long as the applicant meets the eligibility criteria." },
    ],
  },
  "legal-knowledge": {
    overview: "Legal literacy empowers citizens to understand their rights and make informed decisions. NyaySevak's Legal Knowledge hub provides a comprehensive case law database, expert-written legal articles and guides, a full repository of acts and statutes, and know-your-rights educational resources covering all 29 practice areas of Indian law.",
    benefits: ["Comprehensive searchable case law database with 50,000+ judgments", "Expert-written articles covering all 29 practice areas", "Complete repository of Indian acts, statutes, and bare acts", "Know-your-rights guides in simple, plain language", "Regular updates on new laws and legal developments", "Legal process guides with step-by-step instructions"],
    process: ["Browse articles by practice area or topic", "Search the case law database for relevant precedents", "Access acts and statutes from the repository", "Read know-your-rights guides relevant to your situation", "Use process guides to understand legal procedures", "Connect with a lawyer if you need professional help"],
    whyChoose: ["50,000+ case law summaries and full judgments", "Articles reviewed by practicing lawyers", "Updated within 24 hours of major legal developments", "Available in English and Hindi", "Free access with no registration required", "Downloadable resources for offline reading"],
    faqs: [
      { q: "Is the legal knowledge section free?", a: "Yes. All articles, guides, and basic case law access is completely free for all users. Premium features like advanced case law search are available with a subscription." },
      { q: "How often is the content updated?", a: "Our editorial team updates content regularly. Major legal developments and new judgments are added within 24 hours." },
    ],
  },
  "e-filing-assistance": {
    overview: "E-filing has become mandatory in many Indian courts, including the Supreme Court, High Courts, and select District Courts. NyaySevak's E-filing Assistance service provides complete support — from document preparation and format conversion to portal navigation, submission, and filing status tracking. Our experts are familiar with all major e-filing portals including ICMS, eCourts, and individual High Court systems.",
    benefits: ["Complete court e-filing support across all portals", "Document preparation and format conversion for e-filing", "Expert navigation of ICMS, eCourts, and other portals", "Filing status tracking with real-time updates", "Assistance with defect rectification if filings are returned", "Support for both advocates and litigants-in-person"],
    process: ["Share your case details and documents", "We prepare and format documents for e-filing", "Navigate the appropriate court e-filing portal", "Submit the filing on your behalf or with your assistance", "Receive filing confirmation and acknowledgment", "Track filing status and receive hearing date updates"],
    whyChoose: ["Expertise across all major e-filing platforms", "99.5% first-attempt acceptance rate", "Same-day filing for urgent matters", "Defect rectification support within 24 hours", "Filing status updates via SMS and email", "Competitive pricing with no hidden charges"],
    faqs: [
      { q: "Which courts' e-filing do you support?", a: "We support e-filing at the Supreme Court, all 25 High Courts, NCLT, NCLAT, and all District Courts that have adopted e-filing systems." },
      { q: "Can you handle urgent filings?", a: "Yes. We offer same-day filing service for urgent matters including bail applications, stay petitions, and other time-sensitive filings." },
    ],
  },
  "corporate-legal-advisory": {
    overview: "NyaySevak provides dedicated corporate legal advisory services for enterprises of all sizes — from startups to listed companies. Our team of corporate lawyers offers strategic legal planning, risk assessment, board meeting support, governance advisory, and industry-specific regulatory guidance tailored to your business objectives.",
    benefits: ["Dedicated legal teams tailored to your enterprise size", "Strategic legal planning aligned with business objectives", "Board meeting preparation and corporate governance support", "Industry-specific regulatory guidance and compliance", "Risk assessment and mitigation strategies", "Ongoing retainer-based advisory for continuous support"],
    process: ["Initial consultation to understand your business needs", "Assessment of current legal structure and compliance status", "Proposal for dedicated legal advisory engagement", "Assignment of specialized corporate legal team", "Regular advisory sessions and board support", "Periodic legal health checks and risk assessments"],
    whyChoose: ["Lawyers with Big 4 and top law firm experience", "Industry-specific teams for IT, pharma, manufacturing, fintech", "Flexible engagement models — retainer, project, or hourly", "Direct access to senior partners for critical matters", "Pan-India presence across all regulatory jurisdictions", "Confidentiality assured with robust NDAs"],
    faqs: [
      { q: "What size companies do you serve?", a: "We serve companies of all sizes — from early-stage startups to large listed corporations. Our engagement models scale to match your needs and budget." },
      { q: "Can I get industry-specific legal advice?", a: "Yes. We have specialized teams for IT/tech, pharmaceutical, manufacturing, fintech, real estate, e-commerce, and other industry verticals." },
    ],
  },
  "compliance-management": {
    overview: "Regulatory compliance in India spans GST, MCA, Income Tax, labor laws, FEMA, and industry-specific regulations. Missing a deadline can result in heavy penalties and legal consequences. NyaySevak's Compliance Management service provides automated compliance calendars, real-time alerts, filing assistance, and a comprehensive dashboard to track your compliance status across all applicable regulations.",
    benefits: ["Automated compliance calendar with deadline alerts", "GST return filing and reconciliation support", "MCA annual filings and ROC compliance", "Income Tax compliance and TDS management", "Labor law compliance (PF, ESI, Minimum Wages, POSH)", "Real-time compliance status dashboard"],
    process: ["Onboard your company details and compliance profile", "Receive your customized compliance calendar", "Get automated alerts before every deadline", "Our team handles filings or reviews your submissions", "Track all compliance status on your dashboard", "Quarterly compliance reviews and risk reports"],
    whyChoose: ["Zero penalty guarantee with our managed compliance plans", "Single dashboard for all regulatory requirements", "Dedicated compliance manager for your account", "Pre-emptive alerts 30, 15, and 7 days before deadlines", "Quarterly compliance health reports with risk scoring", "Support for 50+ types of regulatory filings"],
    faqs: [
      { q: "Which compliance areas do you cover?", a: "We cover GST, Income Tax, TDS, MCA/ROC filings, labor laws (PF, ESI, POSH, Minimum Wages), FEMA, industry-specific regulations, and environmental compliance." },
      { q: "What happens if a deadline is missed?", a: "With our managed plans, we guarantee zero missed deadlines. In the rare event of a miss, we handle all rectification filings and penalty mitigation at no additional cost." },
    ],
  },
  "contract-management": {
    overview: "Contracts are the backbone of business relationships. NyaySevak's Contract Management service covers the entire contract lifecycle — from drafting and negotiation to execution, storage, renewal tracking, and risk analysis. Our platform provides centralized storage, automated reminders, and expert review to ensure your contracts protect your business interests.",
    benefits: ["End-to-end contract drafting and review by legal experts", "Centralized cloud-based contract repository", "Automated renewal and expiry date reminders", "Clause library with standard and custom templates", "Risk analysis and compliance checks for every contract", "Multi-party negotiation and redlining support"],
    process: ["Submit your contract requirement or existing contract", "Our legal team drafts or reviews the document", "Collaborative review with tracked changes and comments", "Final execution with e-signature support", "Contract stored in your centralized repository", "Automated tracking of renewal dates and obligations"],
    whyChoose: ["1,000+ contract templates across industries", "Average turnaround of 48 hours for standard contracts", "Multi-language contract support", "Integration with popular e-signature platforms", "Obligation tracking with automated reminders", "Bank-grade security for document storage"],
    faqs: [
      { q: "What types of contracts do you handle?", a: "We handle all business contracts — employment agreements, vendor contracts, NDAs, SLAs, licensing agreements, franchise agreements, joint venture agreements, shareholder agreements, and more." },
      { q: "Do you support contract negotiation?", a: "Yes. Our lawyers can handle multi-party negotiations, draft counterproposals, and manage redlining processes on your behalf." },
    ],
  },
  "ip-management": {
    overview: "Intellectual property is among the most valuable assets for any business. NyaySevak provides comprehensive IP management — from trademark, patent, and copyright registration to ongoing protection, infringement monitoring, licensing, and portfolio strategy. Our IP specialists have experience with the Indian Patent Office, Trademark Registry, and Copyright Office.",
    benefits: ["Complete trademark registration and opposition handling", "Patent filing, prosecution, and grant support", "Copyright and design registration services", "IP infringement monitoring and enforcement", "Licensing agreements and technology transfer support", "IP portfolio strategy, valuation, and audit"],
    process: ["IP audit to identify protectable assets", "Filing strategy based on business objectives", "Application preparation and filing with IPO/TMR", "Prosecution and examination response handling", "Registration certificate procurement", "Ongoing monitoring, renewal, and enforcement"],
    whyChoose: ["95%+ success rate in trademark registrations", "Experience with PCT and international filings", "Dedicated IP watch service for infringement detection", "Portfolio management for 500+ active clients", "Expert representation at IP Appellate Board", "Competitive flat-fee pricing for standard filings"],
    faqs: [
      { q: "How long does trademark registration take?", a: "The complete trademark registration process in India typically takes 12-18 months. However, you get TM protection from the date of filing itself." },
      { q: "Do you handle international IP filings?", a: "Yes. We handle PCT patent applications, Madrid Protocol trademark filings, and coordinate with foreign associates for national phase entries worldwide." },
    ],
  },
  "litigation-management": {
    overview: "Managing litigation across multiple courts and jurisdictions is complex and resource-intensive. NyaySevak's Litigation Management service provides centralized case tracking dashboards, multi-jurisdiction management, expense tracking, hearing calendars, outcome analytics, and coordination with local counsel across India.",
    benefits: ["Centralized dashboard for all pending cases", "Multi-jurisdiction case tracking across India", "Hearing calendar with automated reminders", "Litigation expense tracking and budget management", "Outcome analytics and success rate reporting", "Coordination with local counsel across all courts"],
    process: ["Onboard your existing case portfolio", "Set up centralized tracking dashboard", "Assign dedicated case managers per jurisdiction", "Receive automated hearing reminders and updates", "Track expenses and review budget utilization", "Quarterly analytics reports with risk assessment"],
    whyChoose: ["Single dashboard for cases across all Indian courts", "Network of local counsel in every state and UT", "Real-time case status updates via API integration", "Predictive analytics for case outcome assessment", "Monthly litigation MIS reports for management", "Cost optimization through strategic case management"],
    faqs: [
      { q: "Can you manage cases across multiple states?", a: "Yes. We have a pan-India network of qualified local counsel and can manage your litigation portfolio across all states, UTs, and court levels." },
      { q: "What kind of reports do you provide?", a: "We provide monthly MIS reports covering case status, hearing outcomes, next dates, expense tracking, and risk assessment. Quarterly strategic reviews are also included." },
    ],
  },
  "mergers-acquisitions-support": {
    overview: "Mergers and acquisitions demand meticulous legal due diligence, precise documentation, and navigating complex regulatory approvals. NyaySevak's M&A Support service covers the entire transaction lifecycle — from initial due diligence and deal structuring to regulatory approvals, documentation, closing, and post-merger integration. Our M&A team has experience across sectors and deal sizes.",
    benefits: ["Comprehensive legal due diligence across all domains", "Deal structuring and tax optimization advisory", "Transaction document drafting (SPA, SHA, BTA)", "Regulatory approvals — CCI, SEBI, RBI, NCLT", "Closing support and post-merger integration", "Cross-border M&A expertise with FEMA compliance"],
    process: ["Preliminary assessment and deal structure review", "Comprehensive legal due diligence", "Drafting and negotiation of transaction documents", "Regulatory filings and approval procurement", "Transaction closing and documentation", "Post-merger integration legal support"],
    whyChoose: ["Team with experience in deals ranging from INR 10 Cr to INR 5,000 Cr", "Expertise across technology, pharma, manufacturing, BFSI sectors", "In-house FEMA and RBI regulatory compliance team", "Efficient data room management and due diligence reporting", "Post-closing support including entity restructuring", "Competitive success-fee based pricing models available"],
    faqs: [
      { q: "What deal sizes do you handle?", a: "We handle M&A transactions across the spectrum — from small SME acquisitions to large corporate mergers. Our team has experience with deals ranging from INR 10 crore to INR 5,000 crore." },
      { q: "Do you handle cross-border M&A?", a: "Yes. We have expertise in cross-border transactions including FEMA compliance, RBI approvals, transfer pricing, and coordination with foreign legal counsel." },
    ],
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
    whyChoose: ["Pan-India coverage across all courts", "Verified and experienced professionals", "Transparent, upfront pricing", "Dedicated support throughout the process"],
    faqs: [],
  };

  const catLabel = service.category === "b2c" ? "For Individuals" : "For Businesses";
  const otherServices = allServices.filter((s) => s.slug !== slug && s.category === service.category).slice(0, 3);
  const ServiceIcon = lucideIconMap[service.lucideIcon];

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

      {/* ===== Hero — Premium Dark ===== */}
      <section className="relative bg-dark-deep pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute top-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.07)_0%,transparent_55%)]" />
        <div className="absolute bottom-0 left-0 right-0 section-separator" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 sm:mb-10 flex items-center gap-2 text-xs sm:text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <span className="text-gray-700">/</span>
            <Link href="/services" className="transition-colors hover:text-gold">Services</Link>
            <span className="text-gray-700">/</span>
            <span className="text-gold">{service.title}</span>
          </nav>

          <div className="flex items-start gap-6">
            {ServiceIcon && (
              <div className="hidden sm:flex h-16 w-16 lg:h-20 lg:w-20 rounded-2xl icon-gold items-center justify-center shrink-0">
                <ServiceIcon className="h-8 w-8 lg:h-10 lg:w-10 text-black" strokeWidth={1.5} />
              </div>
            )}
            <div>
              <span className="inline-block rounded-full bg-gold/10 border border-gold/15 px-4 py-1.5 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gold font-semibold mb-4">
                {catLabel}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white heading-glow tracking-tight">
                {service.title}
              </h1>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl leading-relaxed">
                {service.description}
              </p>

              {/* Quick stats */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3">
                {[
                  { icon: Shield, label: "Verified Experts" },
                  { icon: Clock, label: "Fast Turnaround" },
                  { icon: Users, label: "Pan-India Coverage" },
                  { icon: Star, label: "4.8/5 Rating" },
                ].map((stat) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={stat.label} className="flex items-center gap-2 rounded-full bg-white/[0.04] border border-white/[0.06] px-4 py-2">
                      <StatIcon className="h-3.5 w-3.5 text-gold/60" strokeWidth={1.5} />
                      <span className="text-[11px] sm:text-xs text-gray-400 font-medium">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overview — Cream ===== */}
      <section className="bg-cream cream-pattern py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <div className="h-8 w-1 rounded-full bg-gold" />
            <h2 className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gold-dark font-semibold">Overview</h2>
          </div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-600">{content.overview}</p>

          {/* Bullet highlights */}
          <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 gap-3 sm:gap-4">
            {service.bullets.map((b) => (
              <div key={b} className="flex items-start gap-3 glass-cream p-4">
                <CheckCircle2 className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm text-gray-700">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Benefits — Dark ===== */}
      <section className="bg-dark-deep py-16 sm:py-20 lg:py-24 relative overflow-hidden dark-section-depth">
        <div className="glow-pulse pointer-events-none absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-2">Advantages</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">Key Benefits</h2>
          </div>
          <div className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.benefits.map((b, i) => (
              <div key={i} className="glass-card p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 h-9 w-9 rounded-lg bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-xs font-heading font-bold text-gold/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm text-gray-300 leading-relaxed pt-1">{b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Process — Cream ===== */}
      <section className="bg-cream cream-pattern py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold-dark/60 font-semibold mb-2">Step by Step</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 heading-glow-cream">How It Works</h2>
          </div>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.process.map((step, i) => (
              <div key={i} className="glass-cream p-5 sm:p-6 relative">
                <span className="absolute top-3 right-4 text-[60px] font-heading font-bold text-gold/[0.05] leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-4 relative z-10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl icon-box-cream text-sm font-bold text-gold-dark">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-600 pt-2 leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why Choose — Dark ===== */}
      <section className="bg-dark-deep py-16 sm:py-20 lg:py-24 relative overflow-hidden dark-section-depth">
        <div className="absolute top-0 left-0 right-0 section-separator" />
        <div className="glow-pulse pointer-events-none absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_55%)]" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-2">The NyaySevak Advantage</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">
              Why Choose NyaySevak for {service.title}
            </h2>
          </div>
          <div className="gradient-border-card">
            <div className="bg-dark-deep rounded-[calc(1.25rem-1.5px)] p-6 sm:p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                {content.whyChoose.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-gold shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQs — Dark Glassmorphism Cards ===== */}
      {content.faqs.length > 0 && (
        <section className="bg-dark py-16 sm:py-20 lg:py-24 relative overflow-hidden">
          <div className="glow-pulse pointer-events-none absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/50 font-semibold mb-2">Common Questions</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow">Frequently Asked Questions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {content.faqs.map((faq, i) => (
                <div key={i} className="faq-card-dark group">
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 h-8 w-8 rounded-lg bg-gold/[0.08] border border-gold/10 flex items-center justify-center text-xs font-heading font-bold text-gold/60 group-hover:text-gold transition-all duration-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-white group-hover:text-gold transition-colors duration-300 mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA — Cream ===== */}
      <section className="bg-cream cream-pattern py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 heading-glow-cream">
            Get {service.title} Today
          </h2>
          <p className="mx-auto mt-4 mb-8 sm:mb-10 max-w-lg text-sm sm:text-base text-gray-500 leading-relaxed">
            Connect with verified legal professionals for expert {service.title.toLowerCase()} services across India. Your first consultation is free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ContactButton
              className="btn-gold-shine inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-8 sm:px-10 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer"
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </ContactButton>
            <a
              href="https://wa.me/+91 98686 66715"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-6 sm:px-8 py-4 sm:py-5 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 hover:scale-[1.02] transition-all duration-300"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ===== Related — Dark ===== */}
      <section className="bg-dark-deep py-16 sm:py-20 lg:py-24 dark-section-depth">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/60 font-semibold mb-2">Explore More</p>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">Related Services</h3>
          </div>
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-3">
            {otherServices.map((s) => {
              const OtherIcon = lucideIconMap[s.lucideIcon];
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group glass-card p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {OtherIcon && (
                      <div className="h-10 w-10 rounded-xl icon-box-dark flex items-center justify-center shrink-0">
                        <OtherIcon className="h-5 w-5 text-gold/70" strokeWidth={1.5} />
                      </div>
                    )}
                    <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-gold transition-colors">{s.title}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.bullets[0]}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold/50 group-hover:text-gold transition-colors">
                    Learn More
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 sm:mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gold transition-colors duration-200"
            >
              <ArrowRight className="h-4 w-4 rotate-180" strokeWidth={1.5} />
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
