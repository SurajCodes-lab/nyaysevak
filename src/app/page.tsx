import type { Metadata } from "next";
import Hero from "@/components/Hero";
import StatsMarquee from "@/components/StatsMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import PlatformBanner from "@/components/PlatformBanner";
import PracticeAreas from "@/components/PracticeAreas";
import Courts from "@/components/Courts";
import FeaturesPreview from "@/components/FeaturesPreview";
import Contact from "@/components/Contact";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import { cities, cityPracticeSlugs, cityPracticeLabels } from "@/data/cities";

export const metadata: Metadata = {
  title: "NyaySevak - Best Lawyer Consultation & Legal Services in India | Free First Consultation",
  description:
    "India's #1 legal services platform. Find & hire verified lawyers near you for Supreme Court, 25 High Courts, 700+ District Courts & all Tribunals. Online lawyer consultation, divorce lawyer, criminal lawyer, property lawyer, corporate advisory. 29 practice areas. Free first consultation.",
  alternates: {
    canonical: "https://nyaysevak.com",
  },
  openGraph: {
    title: "NyaySevak - Best Lawyer Consultation & Legal Services in India",
    description:
      "Find verified lawyers near you. Online consultation, court representation across Supreme Court, High Courts, District Courts & Tribunals. 29 practice areas. Free first consultation.",
    url: "https://nyaysevak.com",
    type: "website",
    images: [
      {
        url: "https://nyaysevak.com/logo.png",
        width: 800,
        height: 800,
        alt: "NyaySevak - Best Legal Services Platform in India",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://nyaysevak.com/#webpage",
  name: "NyaySevak - Defending Your Rights | India's Premier Legal Services Platform",
  description:
    "India's first complete legal ecosystem. Access Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals & Arbitration centres. Complete A-Z legal services for individuals and businesses.",
  url: "https://nyaysevak.com",
  isPartOf: { "@id": "https://nyaysevak.com/#website" },
  about: { "@id": "https://nyaysevak.com/#organization" },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://nyaysevak.com/logo.png",
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", ".hero-entrance-scale"],
  },
};

const homepageFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is NyaySevak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NyaySevak is India's first complete legal ecosystem that connects citizens and businesses with verified lawyers across the Supreme Court, 25 High Courts, 700+ District Courts, all Tribunals, and Arbitration centres. We offer both B2B and B2C legal services covering 29 practice areas.",
      },
    },
    {
      "@type": "Question",
      name: "How can I find a lawyer on NyaySevak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can browse our verified lawyer directory by practice area, court, location, or specialization. Each lawyer profile includes Bar Council verification, client ratings, experience details, and transparent pricing. You can book an instant or scheduled consultation.",
      },
    },
    {
      "@type": "Question",
      name: "What legal services does NyaySevak offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NyaySevak offers comprehensive legal services including lawyer consultation, find & hire lawyers, document services, legal aid, e-filing assistance, corporate legal advisory, compliance management, contract management, IP management, litigation management, and M&A support.",
      },
    },
    {
      "@type": "Question",
      name: "Does NyaySevak cover courts across all of India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, NyaySevak provides pan-India coverage including the Supreme Court of India, all 25 High Courts, 700+ District Courts across 36 States and UTs, 20+ specialized Tribunals (NCLT, NCLAT, NGT, RERA, etc.), and all major Arbitration & ADR centres.",
      },
    },
    {
      "@type": "Question",
      name: "Is the first consultation free on NyaySevak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, NyaySevak offers a free first consultation for new clients. You can connect with verified legal professionals via secure video, audio, or chat channels to discuss your legal matter before proceeding.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a lawyer cost in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Lawyer fees in India vary by specialization, court level, and case complexity. District Court lawyers typically charge ₹5,000-₹25,000 per hearing, High Court lawyers ₹15,000-₹1,00,000, and Supreme Court advocates ₹50,000-₹5,00,000+. NyaySevak offers transparent pricing with no hidden fees, and your first consultation is free.",
      },
    },
    {
      "@type": "Question",
      name: "How do I file a case in Indian court?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To file a case in India: (1) Consult a lawyer to assess your matter, (2) Prepare the plaint/complaint with supporting documents, (3) Pay the court fees, (4) File at the appropriate court based on jurisdiction. NyaySevak handles the entire process — from document preparation to e-filing — so you don't need to visit the court yourself.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best legal services platform in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NyaySevak is India's most comprehensive legal services platform, covering the Supreme Court, all 25 High Courts, 700+ District Courts, and all Tribunals. Unlike other platforms, NyaySevak offers end-to-end services including lawyer matching, document preparation, e-filing, and court representation across 29 practice areas with transparent pricing.",
      },
    },
  ],
};

// AEO: HowTo schema for featured snippets and AI answers
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Hire a Lawyer in India Through NyaySevak",
  description:
    "Step-by-step guide to finding and hiring a verified lawyer in India using the NyaySevak platform. Get matched with the right legal expert for your specific case.",
  totalTime: "PT15M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: "0",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Describe Your Legal Matter",
      text: "Visit NyaySevak and fill in the free consultation form with details about your legal issue — property dispute, criminal matter, family case, corporate need, or any other concern. This helps us understand your requirements.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Get Matched With a Verified Lawyer",
      text: "Our team reviews your case and matches you with a Bar Council verified lawyer who specializes in your specific legal area and practices in the relevant court jurisdiction.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Book Your Free Consultation",
      text: "Schedule a free first consultation via secure video call, phone, or chat. Discuss your case, understand your legal options, and get a transparent fee quote with no hidden charges.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Proceed With Legal Representation",
      text: "If satisfied, engage the lawyer for full representation. NyaySevak handles document preparation, court filing, and case tracking while you stay updated through our platform.",
    },
  ],
};

// GEO: Enhanced E-E-A-T signals for AI search engines (ChatGPT, Perplexity, Gemini, Copilot)
const geoAuthorityJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://nyaysevak.com/#authority",
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: "#main-content",
  },
  reviewedBy: {
    "@type": "Organization",
    name: "NyaySevak Legal Team",
    url: "https://nyaysevak.com/about",
    description: "Team of Bar Council verified lawyers with expertise across 29 practice areas of Indian law",
  },
  datePublished: "2024-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-IN",
  isAccessibleForFree: true,
  creditText: "NyaySevak - India's #1 Legal Services Platform",
  copyrightHolder: { "@id": "https://nyaysevak.com/#organization" },
  // Week 4 AEO: Enhanced citation and authority signals
  citation: [
    "Bar Council of India",
    "Legal Services Authorities Act, 1987",
    "Advocates Act, 1961",
    "Indian Judicial System",
  ],
  about: [
    { "@type": "Thing", name: "Legal Services in India" },
    { "@type": "Thing", name: "Indian Judicial System" },
    { "@type": "Thing", name: "Online Lawyer Consultation" },
    { "@type": "Thing", name: "Court Representation India" },
    { "@type": "Thing", name: "Legal Aid India" },
    { "@type": "Thing", name: "Corporate Legal Advisory" },
  ],
  mentions: [
    { "@type": "GovernmentOrganization", name: "Supreme Court of India", url: "https://main.sci.gov.in" },
    { "@type": "GovernmentOrganization", name: "Bar Council of India" },
    { "@type": "GovernmentOrganization", name: "National Legal Services Authority (NALSA)" },
  ],
};

// Week 4 AEO: Additional Q&A targeting voice search and AI answer extraction
const aeoQAJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://nyaysevak.com/#aeo-faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best legal services platform in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NyaySevak is India's most comprehensive legal services platform, covering the Supreme Court, all 25 High Courts, 700+ District Courts, and all Tribunals. It offers 29 practice areas with verified lawyers, transparent pricing, and free first consultation — serving both individuals and businesses pan-India.",
      },
    },
    {
      "@type": "Question",
      name: "How can I find a good lawyer near me in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use NyaySevak's verified lawyer directory to find lawyers near you. Search by practice area (criminal, divorce, property, corporate, etc.), court, location, and language. Every lawyer is Bar Council verified with transparent fees. You can compare ratings, reviews, and experience before booking a free first consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Is online lawyer consultation legal and safe in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, online lawyer consultation is completely legal in India. The Bar Council of India permits advocates to provide consultations via digital means. NyaySevak provides secure, encrypted communication channels (video, audio, and chat) with full attorney-client privilege protection. All lawyers are Bar Council verified.",
      },
    },
    {
      "@type": "Question",
      name: "What types of legal cases does NyaySevak handle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NyaySevak handles all types of legal cases across 29 practice areas including criminal law, civil law, family & divorce law, property disputes, corporate law, cyber crime, consumer protection, tax disputes, banking & finance, intellectual property, CBI cases, ED cases, NDPS cases, arbitration, immigration, insurance, environmental law, constitutional law, medical negligence, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to consult a lawyer on NyaySevak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NyaySevak offers a free first consultation for all new clients. After that, lawyer fees vary by specialization, experience, and court level. District Court lawyers typically charge ₹5,000-₹25,000 per hearing, High Court lawyers ₹15,000-₹1,00,000, and Supreme Court advocates ₹50,000-₹5,00,000+. All fees are displayed transparently with no hidden charges.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-deep">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(geoAuthorityJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoQAJsonLd) }}
      />
      <Hero />
      <StatsMarquee />
      <About />
      <Services />
      <PlatformBanner />
      <PracticeAreas />
      <Courts />
      <FeaturesPreview />
      <Contact />

      {/* Week 4: SEO Content Section — Keyword-rich internal linking for Google */}
      <section className="bg-dark py-16 lg:py-20 border-t border-white/[0.04]">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/50 font-semibold mb-2">Explore NyaySevak</p>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Find the Best Lawyers Across India
            </h2>
          </div>

          {/* Practice Area Quick Links */}
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold/60 font-semibold mb-4">Popular Practice Areas</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Criminal Lawyer", slug: "criminal-law" },
                { label: "Divorce Lawyer", slug: "family-matrimonial" },
                { label: "Property Lawyer", slug: "property-real-estate" },
                { label: "Corporate Lawyer", slug: "corporate-business" },
                { label: "Cyber Crime Lawyer", slug: "cyber-law" },
                { label: "Tax Lawyer", slug: "tax-law" },
                { label: "Consumer Court Lawyer", slug: "consumer-protection" },
                { label: "Bail Lawyer", slug: "criminal-law" },
                { label: "Labour Lawyer", slug: "labour-employment" },
                { label: "IP Lawyer", slug: "intellectual-property" },
                { label: "Banking Lawyer", slug: "banking-finance" },
                { label: "CBI Case Lawyer", slug: "cbi-cases" },
                { label: "ED Case Lawyer", slug: "ed-cases" },
                { label: "NDPS Lawyer", slug: "ndps-cases" },
                { label: "Arbitration Lawyer", slug: "arbitration-adr" },
                { label: "Immigration Lawyer", slug: "immigration-visa" },
                { label: "Insurance Lawyer", slug: "insurance-law" },
                { label: "Environmental Lawyer", slug: "environmental-law" },
                { label: "Constitutional Lawyer", slug: "constitutional-law" },
                { label: "Medical Negligence Lawyer", slug: "health-medical-law" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={`/practice-areas/${item.slug}`}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] text-gray-500 hover:text-gold hover:border-gold/30 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Court Quick Links */}
          <div className="mb-10">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold/60 font-semibold mb-4">Find Lawyers by Court</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Supreme Court Lawyer", href: "/courts" },
                { label: "Delhi High Court Lawyer", href: "/courts/delhi-high-court" },
                { label: "Bombay High Court Lawyer", href: "/courts/bombay-high-court" },
                { label: "Madras High Court Lawyer", href: "/courts/madras-high-court" },
                { label: "Calcutta High Court Lawyer", href: "/courts/calcutta-high-court" },
                { label: "Karnataka High Court Lawyer", href: "/courts/karnataka-high-court" },
                { label: "Allahabad High Court Lawyer", href: "/courts/allahabad-high-court" },
                { label: "Gujarat High Court Lawyer", href: "/courts/gujarat-high-court" },
                { label: "Punjab & Haryana HC Lawyer", href: "/courts/punjab-haryana-high-court" },
                { label: "Telangana High Court Lawyer", href: "/courts/telangana-high-court" },
                { label: "Rajasthan High Court Lawyer", href: "/courts/rajasthan-high-court" },
                { label: "NCLT Lawyer", href: "/courts/financial-corporate-tribunals" },
                { label: "NGT Lawyer", href: "/courts/regulatory-tribunals" },
                { label: "Consumer Forum Lawyer", href: "/courts/consumer-labour-tribunals" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] text-gray-500 hover:text-gold hover:border-gold/30 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold/60 font-semibold mb-4">Our Legal Services</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "Online Lawyer Consultation", href: "/services/lawyer-consultation" },
                { label: "Find & Hire Lawyers", href: "/services/find-hire-lawyers" },
                { label: "Legal Document Services", href: "/services/document-services" },
                { label: "Free Legal Aid", href: "/services/legal-aid" },
                { label: "E-filing Assistance", href: "/services/e-filing-assistance" },
                { label: "Corporate Legal Advisory", href: "/services/corporate-legal-advisory" },
                { label: "Compliance Management", href: "/services/compliance-management" },
                { label: "Contract Management", href: "/services/contract-management" },
                { label: "IP Management", href: "/services/ip-management" },
                { label: "Litigation Management", href: "/services/litigation-management" },
                { label: "M&A Support", href: "/services/mergers-acquisitions-support" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] text-gray-500 hover:text-gold hover:border-gold/30 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Week 5: Lawyers by City — geographic internal linking (40 city × practice links) */}
          <div className="mt-12 pt-10 border-t border-white/[0.04]">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gold/60 font-semibold mb-6">Find Lawyers by City</h3>
            <div className="space-y-5">
              {cities.map((c) => (
                <div key={c.slug}>
                  <p className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mb-2">
                    {c.name}, {c.state}
                    <span className="ml-2 text-gold/50 font-normal normal-case tracking-normal">
                      (<Link href={`/lawyers/${c.slug}`} className="hover:text-gold transition-colors">view all lawyers in {c.name}</Link>)
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cityPracticeSlugs.map((p) => {
                      const label = cityPracticeLabels[p];
                      return (
                        <Link
                          key={p}
                          href={`/lawyers/${c.slug}/${p}`}
                          className="rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-[11px] text-gray-500 hover:text-gold hover:border-gold/30 transition-colors"
                        >
                          {label.title} in {c.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO text content */}
          <div className="mt-12 pt-10 border-t border-white/[0.04]">
            <p className="text-xs text-gray-600 leading-relaxed max-w-4xl">
              NyaySevak is India&apos;s leading legal services platform connecting individuals and businesses with verified lawyers across the Supreme Court, 25 High Courts, 700+ District Courts, and all Tribunals. Whether you need a criminal lawyer, divorce lawyer, property lawyer, corporate lawyer, or specialist for CBI, ED, NDPS cases — NyaySevak provides access to Bar Council verified advocates with transparent pricing and free first consultation. Our platform covers 29 practice areas including civil law, family law, cyber law, consumer protection, tax law, banking &amp; finance, intellectual property, arbitration, and more. Available pan-India with support in Hindi, English, and regional languages.
            </p>
          </div>
        </div>
      </section>

      {/* Week 5: India's Legal Services Landscape — deep SEO content section (~800 words) */}
      <section className="bg-dark-deep py-16 lg:py-20 border-t border-white/[0.04] dark-section-depth">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">
              A Guide to Indian Legal Services
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white heading-glow mb-6">
            India&apos;s Legal Services Landscape — What Every Citizen and Business Should Know
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-8">
            India&apos;s legal system is one of the largest and most complex in the world. With 29 distinct practice areas, 25 High Courts, over 700 District Courts, and dozens of specialised tribunals, finding the right lawyer for your specific matter can be overwhelming. NyaySevak simplifies this by connecting you directly with Bar Council verified advocates who specialise in exactly the area of law you need — at fees you can see upfront, with a free first consultation so you&apos;re never locked in before you understand the scope of your matter.
          </p>

          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 mt-10">
            Understanding Practice Areas — From Criminal Defence to Corporate Advisory
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
            Indian law is broadly organised into three streams: criminal law (offences against the state, handled under the Bharatiya Nyaya Sanhita 2023 and the Bharatiya Nagarik Suraksha Sanhita 2023), civil law (property, contract, recovery, and family disputes handled under the Code of Civil Procedure and substantive civil statutes), and corporate &amp; regulatory law (company matters, securities, competition, and tax). Within these streams, NyaySevak covers every significant specialisation — from <Link href="/practice-areas/criminal-law" className="text-gold hover:text-gold-light transition-colors">criminal defence</Link> and <Link href="/practice-areas/family-matrimonial" className="text-gold hover:text-gold-light transition-colors">divorce &amp; matrimonial matters</Link> to <Link href="/practice-areas/property-real-estate" className="text-gold hover:text-gold-light transition-colors">property disputes</Link>, <Link href="/practice-areas/corporate-business" className="text-gold hover:text-gold-light transition-colors">corporate &amp; business advisory</Link>, <Link href="/practice-areas/cyber-law" className="text-gold hover:text-gold-light transition-colors">cyber crime</Link>, <Link href="/practice-areas/consumer-protection" className="text-gold hover:text-gold-light transition-colors">consumer protection</Link>, <Link href="/practice-areas/intellectual-property" className="text-gold hover:text-gold-light transition-colors">intellectual property</Link>, and specialist defence in <Link href="/practice-areas/cbi-cases" className="text-gold hover:text-gold-light transition-colors">CBI</Link>, <Link href="/practice-areas/ed-cases" className="text-gold hover:text-gold-light transition-colors">ED / PMLA</Link>, and <Link href="/practice-areas/ndps-cases" className="text-gold hover:text-gold-light transition-colors">NDPS</Link> matters.
          </p>

          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 mt-10">
            India&apos;s Court Hierarchy — Where Your Case Will Be Heard
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
            India&apos;s judiciary has a strict hierarchy. Most civil and criminal matters start at the <Link href="/courts" className="text-gold hover:text-gold-light transition-colors">District Courts</Link> of the relevant state. Appeals and writ petitions move up to the <Link href="/courts/delhi-high-court" className="text-gold hover:text-gold-light transition-colors">High Courts</Link> (25 across India, with jurisdiction covering one or more states). Final appeals, constitutional matters, and cases of national importance go to the Supreme Court of India in New Delhi. Parallel to this mainstream structure, specialised tribunals handle domain-specific matters: NCLT and NCLAT for company and insolvency cases, NGT for environmental, DRT and DRAT for bank-recovery, ITAT for income tax, and dozens more. Choosing the right forum is often the single most important strategic decision in any case — and it&apos;s the first thing every good Indian lawyer will advise on during the free consultation.
          </p>

          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 mt-10">
            How NyaySevak Verifies Every Lawyer You Meet
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
            Every lawyer listed on NyaySevak is validated against their Bar Council registration number, their years of active practice, their specialisation claims (confirmed through reported judgments and peer references), and their client feedback on our platform. You see their Bar Council ID, their experience, their courts of practice, their fee structure, and their real ratings before you ever speak to them. There are no hidden commissions, no opaque matching — you choose the lawyer you trust, speak to them free for your first consultation, and decide whether to engage. For corporate clients, we go further, assembling dedicated legal teams tailored to your enterprise size and industry-specific regulatory needs.
          </p>

          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 mt-10">
            When to Hire Online vs. In-Person — And Why Both Work
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4">
            Online lawyer consultation is fully legal and secure in India — the Bar Council of India permits digital consultations, and attorney-client privilege applies to encrypted video, voice, and chat conversations exactly as it does to in-person meetings. For advisory matters, document review, urgent bail advice, family matters with one spouse abroad, and most pre-filing questions, online consultation is faster, cheaper, and often just as effective as an in-person meeting. For court appearances, physical filing, and matters requiring site visits (property inspection, police station attendance), an in-person lawyer is essential — and NyaySevak&apos;s city coverage across <Link href="/lawyers/delhi" className="text-gold hover:text-gold-light transition-colors">Delhi</Link>, <Link href="/lawyers/mumbai" className="text-gold hover:text-gold-light transition-colors">Mumbai</Link>, <Link href="/lawyers/bangalore" className="text-gold hover:text-gold-light transition-colors">Bangalore</Link>, <Link href="/lawyers/chennai" className="text-gold hover:text-gold-light transition-colors">Chennai</Link>, <Link href="/lawyers/hyderabad" className="text-gold hover:text-gold-light transition-colors">Hyderabad</Link>, <Link href="/lawyers/pune" className="text-gold hover:text-gold-light transition-colors">Pune</Link>, <Link href="/lawyers/kolkata" className="text-gold hover:text-gold-light transition-colors">Kolkata</Link>, and <Link href="/lawyers/ahmedabad" className="text-gold hover:text-gold-light transition-colors">Ahmedabad</Link> ensures that whichever mode you need, a verified lawyer is within reach.
          </p>

          <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 mt-10">
            Understanding Lawyer Fees in India
          </h3>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Lawyer fees in India vary widely. District Court lawyers typically charge ₹5,000–₹50,000 per hearing depending on case complexity and city. High Court lawyers range from ₹15,000 to ₹3 lakh or more per appearance, with senior advocates at the Bombay, Delhi, Madras, and Calcutta High Courts commanding ₹5 lakh and upwards. Supreme Court advocates and senior counsel in major metros can charge ₹10 lakh+ per appearance for complex matters. On NyaySevak, every fee is shown upfront, and your first consultation is free regardless of which lawyer you choose — so you can make an informed decision about scope, timeline, and budget before committing to representation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <ContactButtonPrimary />
            <Link href="/practice-areas" className="inline-flex items-center gap-2 text-sm text-gold/70 hover:text-gold transition-colors">
              Browse all 29 practice areas
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactButtonPrimary() {
  return (
    <ContactButton className="btn-gold-shine inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold to-gold-light px-6 py-3 text-sm font-semibold uppercase tracking-widest text-black cursor-pointer">
      Book Free Consultation
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
    </ContactButton>
  );
}
