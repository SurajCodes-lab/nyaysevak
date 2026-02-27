import type { Metadata } from "next";
import Link from "next/link";
import { practiceAreas } from "@/data/practice-areas";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return { title: "Not Found | NyaySevak" };

  return {
    title: `${area.title} Lawyers & Legal Services in India | NyaySevak`,
    description: `Expert ${area.title.toLowerCase()} lawyers and legal services across India. ${area.description}. Services include ${area.services.slice(0, 4).join(", ")} and more. Book a verified lawyer on NyaySevak.`,
    keywords: [
      `${area.title.toLowerCase()} lawyer India`,
      `${area.title.toLowerCase()} legal services`,
      `best ${area.title.toLowerCase()} advocate`,
      ...area.services.slice(0, 5).map((s) => s.toLowerCase()),
      "NyaySevak",
      "legal services India",
    ].join(", "),
    openGraph: {
      title: `${area.title} Lawyers & Legal Services | NyaySevak`,
      description: `${area.description}. Find verified ${area.title.toLowerCase()} lawyers across India on NyaySevak.`,
      type: "website",
    },
  };
}

const areaContent: Record<string, { overview: string; whyChoose: string[]; process: string[] }> = {
  "civil-law": {
    overview: "Civil law matters form the backbone of India's legal system, covering property disputes, contract breaches, money recovery, injunctions, and succession cases. NyaySevak connects you with experienced civil litigation lawyers who can represent you in District Courts, High Courts, and the Supreme Court across all jurisdictions.",
    whyChoose: ["Experienced civil litigators with proven track records", "Pan-India representation in all District and High Courts", "Specialization in property, contract, and money recovery matters", "Transparent fee structure with no hidden charges"],
    process: ["Initial consultation to understand your civil matter", "Legal analysis and case strength assessment", "Documentation and evidence compilation", "Filing of suit and court representation", "Regular updates on case progress and hearings", "Final resolution and execution of court orders"],
  },
  "criminal-law": {
    overview: "Criminal law requires swift and decisive legal action. Whether you need bail applications, FIR quashing, criminal defense, or appeal representation, NyaySevak provides access to top criminal defense lawyers across India who specialize in every type of criminal matter from white-collar crime to cyber-crime.",
    whyChoose: ["Immediate availability for urgent bail applications", "Senior criminal advocates with Supreme Court experience", "Expertise in cyber-crime, white-collar crime, and domestic violence", "Strong network across all criminal courts in India"],
    process: ["Emergency consultation and case assessment", "Immediate bail application filing if required", "FIR analysis and strategy formulation", "Evidence collection and witness management", "Trial defense and cross-examination", "Appeal preparation if needed"],
  },
  "family-matrimonial": {
    overview: "Family matters demand sensitivity, empathy, and expert legal guidance. NyaySevak's family law specialists handle divorce (mutual consent and contested), child custody, maintenance, adoption, marriage registration, and domestic violence cases with the utmost confidentiality and care across all family courts in India.",
    whyChoose: ["Sensitive and empathetic approach to family matters", "Expertise in both mutual consent and contested divorce", "Strong mediation and negotiation skills", "Experienced in child custody and guardianship battles"],
    process: ["Confidential initial consultation", "Assessment of legal options and strategy", "Mediation attempt for amicable resolution", "Filing of petition and court appearances", "Negotiation of settlement terms", "Final decree and compliance assistance"],
  },
  "property-real-estate": {
    overview: "Property and real estate matters in India involve complex legal frameworks across state and central laws. NyaySevak provides end-to-end property legal solutions including title verification, deed drafting, RERA disputes, land acquisition, property registration, will & probate, and mortgage documentation across all states.",
    whyChoose: ["Thorough title verification and due diligence expertise", "RERA specialist lawyers in all states", "End-to-end property transaction support", "Expert handling of land acquisition cases"],
    process: ["Property title search and due diligence", "Document drafting (sale deed, lease, gift deed)", "Registration and stamp duty assistance", "RERA filing for builder disputes if needed", "Dispute resolution through litigation or mediation", "Final property transfer and documentation"],
  },
  "corporate-business": {
    overview: "Corporate legal matters require strategic counsel that aligns with business objectives. NyaySevak serves startups, SMEs, and large corporates with company incorporation, MCA compliance, shareholder agreements, M&A, FEMA/FDI compliance, board resolutions, and corporate governance across all jurisdictions.",
    whyChoose: ["Dedicated corporate legal teams for enterprises", "Expertise in all company structures — Pvt Ltd, LLP, OPC, Partnership", "FEMA/FDI compliance specialists for international transactions", "M&A advisory with due diligence support"],
    process: ["Business structure consultation and incorporation", "Drafting of shareholder and partnership agreements", "MCA compliance and annual filing management", "Commercial contract drafting and review", "Regulatory approvals and compliance monitoring", "Ongoing corporate governance advisory"],
  },
  "labour-employment": {
    overview: "Labour and employment law in India spans multiple central and state legislations. NyaySevak helps both employers and employees navigate employment contracts, wrongful termination, industrial disputes, PF/ESI/Gratuity matters, POSH compliance, and general labour law advisory across all labour courts and industrial tribunals.",
    whyChoose: ["Expertise in both employer and employee side matters", "Labour court representation across all states", "POSH Act compliance and training services", "Industrial dispute resolution specialists"],
    process: ["Assessment of employment or labour issue", "Review of employment contracts and policies", "Negotiation and mediation attempt", "Filing before labour courts or industrial tribunals", "Representation in hearings and conciliation", "Final settlement and compliance"],
  },
  "intellectual-property": {
    overview: "Protecting intellectual property is crucial for innovation and brand value. NyaySevak provides comprehensive IP services including trademark registration, patent filing, copyright registration, design protection, IP licensing, and enforcement against infringement across India and internationally.",
    whyChoose: ["Complete IP lifecycle management", "Patent attorneys with technical expertise", "Trademark opposition and infringement specialists", "International IP filing and protection"],
    process: ["IP audit and protection strategy", "Filing of trademark, patent, or copyright application", "Prosecution and examination response", "Registration certificate procurement", "Monitoring for potential infringements", "Enforcement action and litigation if needed"],
  },
  "tax-law": {
    overview: "Tax law in India is complex and ever-changing. NyaySevak connects you with tax experts who handle income tax filing, GST compliance, tax notices and demands, appeals before ITAT and GST Tribunals, TDS matters, and strategic tax planning for individuals and businesses.",
    whyChoose: ["Chartered Accountants and Tax Lawyers working together", "ITAT representation across all benches", "GST compliance and dispute resolution experts", "Strategic tax planning and structuring advice"],
    process: ["Tax assessment and compliance review", "Response to tax notices and demands", "Preparation of appeal documentation", "Representation before ITAT or GST Tribunal", "Tax planning and structuring advisory", "Final resolution and compliance"],
  },
  "banking-finance": {
    overview: "Banking and finance law requires specialized knowledge of SARFAESI, IBC, DRT proceedings, and banking regulations. NyaySevak provides expert legal support for loan recovery, insolvency proceedings, cheque bouncing cases, and banking dispute resolution across all DRTs and NCLT benches in India.",
    whyChoose: ["SARFAESI and DRT specialists across India", "IBC experts for CIRP and liquidation proceedings", "Cheque bounce case handling under Section 138 NI Act", "Banking regulatory compliance advisory"],
    process: ["Assessment of banking or finance dispute", "Demand notice and negotiation", "Filing before DRT, NCLT, or Magistrate Court", "Representation in hearings", "Recovery or resolution execution", "Compliance and documentation closure"],
  },
  "consumer-protection": {
    overview: "Every consumer has the right to fair treatment. NyaySevak fights for your consumer rights by handling complaints at District, State, and National Consumer Forums for product defects, service deficiencies, e-commerce disputes, medical negligence, and insurance claim issues.",
    whyChoose: ["Consumer forum representation at all three levels", "Expertise in e-commerce and digital service disputes", "Medical negligence case specialists", "Insurance claim dispute resolution"],
    process: ["Consumer complaint assessment", "Legal notice to the opposite party", "Filing complaint before appropriate Consumer Forum", "Evidence presentation and hearing representation", "Execution of Consumer Forum orders", "Appeal support if needed"],
  },
  "cyber-law": {
    overview: "In an increasingly digital world, cyber law expertise is essential. NyaySevak provides legal support for cyber-crime complaints, online defamation, data privacy compliance, e-commerce regulations, and social media legal issues with lawyers who understand both technology and law.",
    whyChoose: ["Technology-savvy lawyers who understand digital evidence", "Cyber-crime complaint filing and investigation support", "Data privacy and DPDP Act compliance experts", "E-commerce regulatory compliance specialists"],
    process: ["Cyber incident assessment and evidence preservation", "Filing of cyber-crime complaint with cyber cell", "Legal notice and takedown requests", "Court proceedings and digital evidence management", "Data privacy audit and compliance", "Ongoing advisory and monitoring"],
  },
  "arbitration-adr": {
    overview: "Alternative Dispute Resolution offers faster, cost-effective resolution outside traditional courts. NyaySevak covers all major arbitration institutions — MCIA, DIAC, ICC, SIAC, LCIA — and provides mediation, conciliation, and Lok Adalat representation across India and internationally.",
    whyChoose: ["Coverage of all major domestic and international arbitration institutions", "Experienced arbitrators and mediators in our network", "Faster resolution compared to traditional litigation", "Expertise in commercial, family, and construction arbitration"],
    process: ["Dispute assessment and ADR suitability analysis", "Arbitration agreement drafting or review", "Arbitrator selection and appointment", "Statement of claim and defense preparation", "Hearing representation and evidence management", "Award enforcement or challenge proceedings"],
  },
  "documentation": {
    overview: "Legal documentation forms the foundation of every legal right and transaction. NyaySevak offers comprehensive documentation services including notary, affidavits, apostille, power of attorney, name change, e-stamp procurement, legal translation, document attestation, legal heir certificates, and stamp duty guidance.",
    whyChoose: ["Quick turnaround on all documentation services", "Apostille and MEA attestation specialists", "Multi-language legal translation services", "Stamp duty guidance across all states"],
    process: ["Document requirement assessment", "Drafting by qualified legal professionals", "Review and verification", "Notarization or attestation as required", "Apostille processing through MEA if needed", "Delivery of final authenticated documents"],
  },
  "additional-services": {
    overview: "Beyond mainstream legal services, NyaySevak provides specialized niche services including legal opinions, research and analysis, due diligence, legal notices, RTI applications, and competition law (CCI) for unique and complex legal requirements.",
    whyChoose: ["Expert legal opinion from senior advocates", "Comprehensive due diligence for transactions", "RTI application specialists with high success rate", "CCI matter expertise with competition law specialists"],
    process: ["Requirement discussion and scope definition", "Research and preliminary analysis", "Draft preparation and expert review", "Final delivery and client walkthrough", "Follow-up support and query resolution", "Ongoing advisory if required"],
  },
  "environmental-law": {
    overview: "Environmental law in India is governed by a robust framework including the Environment Protection Act, Air & Water Pollution Acts, Forest Conservation Act, and Wildlife Protection Act. NyaySevak connects you with lawyers specializing in NGT matters, pollution control compliance, EIA clearances, and sustainability advisory across all green tribunals and regulatory bodies.",
    whyChoose: ["NGT representation across all five zonal benches", "Pollution control board compliance expertise", "EIA and forest clearance specialists", "Sustainability and carbon credit advisory"],
    process: ["Environmental compliance audit and assessment", "Regulatory filing and clearance applications", "NGT petition or response preparation", "Representation in hearings and inspections", "Compliance monitoring and reporting", "Ongoing environmental advisory"],
  },
  "constitutional-law": {
    overview: "Constitutional law is the foundation of all rights in India. NyaySevak provides access to senior advocates who handle Public Interest Litigation, writ petitions under Articles 32 and 226, fundamental rights enforcement, RTI appeals, and administrative law matters before the Supreme Court and all High Courts.",
    whyChoose: ["Senior advocates with Supreme Court PIL experience", "Fundamental rights enforcement specialists", "RTI appeal experts with strong track records", "Administrative and judicial review expertise"],
    process: ["Rights assessment and constitutional analysis", "Research of precedents and legal framework", "Drafting of PIL or writ petition", "Filing before appropriate court", "Hearing representation and arguments", "Enforcement of court orders"],
  },
  "immigration-visa": {
    overview: "Immigration and visa matters require precise knowledge of ever-changing regulations. NyaySevak assists with work visas, student visas, OCI/PIO applications, passport issues, deportation defense, and FRRO compliance for both Indian nationals traveling abroad and foreign nationals in India.",
    whyChoose: ["Updated knowledge of latest immigration regulations", "Embassy and consulate liaison experience", "Deportation defense and appeal specialists", "FRRO and Bureau of Immigration compliance experts"],
    process: ["Immigration requirement assessment", "Document compilation and verification", "Application preparation and filing", "Embassy or FRRO representation if needed", "Appeal preparation for rejections", "Ongoing visa compliance advisory"],
  },
  "insurance-law": {
    overview: "Insurance disputes in India involve complex policy interpretations and regulatory frameworks under IRDAI. NyaySevak provides legal support for claim rejections, policy disputes, insurance ombudsman representation, and regulatory compliance for life, health, motor, fire, and property insurance matters.",
    whyChoose: ["Insurance claim dispute specialists", "Ombudsman and consumer forum representation", "IRDAI regulatory compliance advisory", "Expertise across all insurance categories"],
    process: ["Policy review and claim assessment", "Demand notice to insurance company", "Insurance ombudsman complaint filing", "Consumer forum petition if needed", "Hearing representation and evidence presentation", "Claim settlement and recovery"],
  },
  "media-entertainment": {
    overview: "The media and entertainment industry involves unique legal challenges around content licensing, intellectual property, talent contracts, and regulatory compliance. NyaySevak serves production houses, studios, OTT platforms, musicians, authors, and digital content creators with specialized legal counsel.",
    whyChoose: ["Entertainment industry contract specialists", "Content licensing and distribution experts", "Defamation and content takedown experience", "OTT and broadcasting regulatory knowledge"],
    process: ["Industry-specific legal consultation", "Contract drafting and negotiation", "Rights clearance and licensing", "Dispute resolution and litigation if needed", "Regulatory compliance and advisory", "Ongoing legal support for productions"],
  },
  "education-law": {
    overview: "Education law in India is governed by UGC, AICTE, NCTE, and various state regulations. NyaySevak assists educational institutions with regulatory compliance, accreditation, trust formation, and dispute resolution, while also supporting students and faculty with admission disputes, disciplinary matters, and employment issues.",
    whyChoose: ["UGC, AICTE, and regulatory body compliance experts", "Educational trust and society formation specialists", "Student rights and admission dispute experience", "Faculty employment and tenure matter expertise"],
    process: ["Educational regulatory assessment", "Compliance documentation and filing", "Trust or society registration", "Dispute resolution and tribunal representation", "Regulatory body correspondence and appeals", "Ongoing compliance monitoring"],
  },
  "maritime-admiralty": {
    overview: "Maritime and admiralty law is a highly specialized field covering international shipping, cargo claims, ship arrests, and seafarer rights. NyaySevak provides access to maritime lawyers with expertise in Admiralty Courts in Mumbai, Kolkata, Chennai, and other port cities across India.",
    whyChoose: ["Admiralty Court practitioners in all major port cities", "International maritime convention expertise", "Ship arrest and release emergency services", "Cargo damage claim specialists"],
    process: ["Maritime dispute assessment", "Emergency ship arrest or release if needed", "Claim documentation and evidence compilation", "Admiralty Court filing and representation", "International arbitration if applicable", "Settlement negotiation and enforcement"],
  },
  "election-law": {
    overview: "Election law in India covers the entire electoral process from candidate nominations to election petitions. NyaySevak provides legal support for election disputes, campaign compliance, political party registration, and representation before the Election Commission and courts.",
    whyChoose: ["Election petition specialists in High Courts", "Election Commission representation experience", "Campaign finance and compliance advisory", "Anti-defection law expertise"],
    process: ["Electoral dispute assessment", "Nomination or petition filing", "Election Commission representation", "High Court election petition proceedings", "Evidence compilation and witness management", "Final order and compliance"],
  },
  "military-defense": {
    overview: "Military and defense law involves specialized tribunals and unique legal frameworks governing the armed forces. NyaySevak connects service members and veterans with lawyers experienced in Armed Forces Tribunal matters, court martial defense, service disputes, disability pensions, and ex-servicemen benefits.",
    whyChoose: ["Armed Forces Tribunal practitioners across all benches", "Court martial defense specialists", "Pension and disability claim experts", "Understanding of military service rules and regulations"],
    process: ["Service matter assessment", "Statutory complaint or representation filing", "AFT petition preparation and filing", "Hearing representation before tribunal", "Appeal to High Court or Supreme Court if needed", "Pension and benefit claim follow-up"],
  },
  "health-medical-law": {
    overview: "Health and medical law intersects patient rights, healthcare regulations, and professional liability. NyaySevak provides legal support for medical negligence claims, hospital regulatory compliance, pharmaceutical regulations, clinical trial oversight, and healthcare dispute resolution across all forums.",
    whyChoose: ["Medical negligence claim specialists with expert panel", "Healthcare regulatory compliance advisory", "Pharmaceutical and clinical trial regulation expertise", "Patient rights advocacy and consumer forum experience"],
    process: ["Medical case assessment with expert opinion", "Medical records and evidence compilation", "Legal notice to healthcare provider", "Consumer forum or civil court filing", "Expert testimony and hearing representation", "Compensation recovery and compliance"],
  },
  "sports-gaming-law": {
    overview: "Sports and gaming law is an emerging and rapidly growing field in India. NyaySevak provides legal services for sports arbitration, player contracts, anti-doping matters, federation governance, and the rapidly evolving online gaming and esports regulatory landscape.",
    whyChoose: ["Sports arbitration and CAS proceeding experience", "Player contract and endorsement deal specialists", "Online gaming regulatory compliance experts", "Anti-doping defense and appeal specialists"],
    process: ["Sports or gaming legal consultation", "Contract drafting and negotiation", "Dispute assessment and arbitration filing", "Regulatory compliance review", "Hearing representation before sports bodies", "Appeal proceedings if applicable"],
  },
  "international-law": {
    overview: "International law and trade matters require cross-border legal expertise. NyaySevak assists businesses and individuals with international commercial arbitration, EXIM compliance, foreign investment advisory, international sanctions, bilateral treaty matters, and cross-border dispute resolution.",
    whyChoose: ["International arbitration under ICC, SIAC, and LCIA rules", "EXIM and customs law compliance specialists", "Foreign investment and FEMA advisory experts", "Cross-border dispute resolution experience"],
    process: ["Cross-border legal assessment", "Jurisdictional analysis and strategy", "International arbitration or litigation filing", "Evidence compilation across jurisdictions", "Hearing representation and cross-border coordination", "Award or judgment enforcement internationally"],
  },
};

export default async function PracticeAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const content = areaContent[slug] || {
    overview: `${area.description}. NyaySevak connects you with verified, experienced lawyers specializing in ${area.title.toLowerCase()} matters across all courts and jurisdictions in India.`,
    whyChoose: ["Verified lawyers with Bar Council registration", "Pan-India court coverage", "Transparent pricing with no hidden fees", "Dedicated case management support"],
    process: ["Initial consultation and case assessment", "Strategy formulation and documentation", "Filing and court representation", "Regular progress updates", "Resolution and compliance", "Post-resolution support"],
  };

  const currentIndex = practiceAreas.findIndex((a) => a.slug === slug);
  const related = [
    practiceAreas[(currentIndex + 1) % practiceAreas.length],
    practiceAreas[(currentIndex + 2) % practiceAreas.length],
    practiceAreas[(currentIndex + 3) % practiceAreas.length],
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com/" },
      { "@type": "ListItem", position: 2, name: "Practice Areas", item: "https://nyaysevak.com/practice-areas" },
      { "@type": "ListItem", position: 3, name: area.title, item: `https://nyaysevak.com/practice-areas/${slug}` },
    ],
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: `${area.title} - NyaySevak`,
    description: content.overview,
    areaServed: { "@type": "Country", name: "India" },
    provider: { "@type": "Organization", name: "NyaySevak", url: "https://nyaysevak.com" },
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />

      {/* Hero — Dark */}
      <div className="bg-black pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <nav className="mb-10 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/practice-areas" className="transition-colors hover:text-gold">Practice Areas</Link>
            <span>/</span>
            <span className="text-gold">{area.title}</span>
          </nav>

          <div className="flex items-start gap-6">
            <span className="text-8xl font-heading font-bold text-gold/15 leading-none hidden sm:block">
              {area.letter}
            </span>
            <div>
              <h1 className="text-4xl font-heading font-bold text-white lg:text-5xl">
                {area.title}
              </h1>
              <p className="mt-4 text-lg text-gray-400">{area.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview — Cream, narrow column with gold left border */}
      <div className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="border-l-2 border-gold pl-8">
            <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-dark/70">Overview</h2>
            <p className="text-base leading-relaxed text-gray-600">{content.overview}</p>
          </div>
        </div>
      </div>

      {/* Services — Dark, numbered list */}
      <div className="bg-dark py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-12 text-2xl font-heading font-bold text-white">
            Our {area.title} Services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {area.services.map((service, i) => (
              <div key={service} className="flex items-start gap-4 py-3">
                <span className="text-sm font-heading font-bold text-gold/40">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="text-sm text-gray-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose — Cream */}
      <div className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-heading font-bold text-gray-900">
            Why Choose NyaySevak for {area.title}?
          </h2>
          <div className="space-y-4">
            {content.whyChoose.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process — Dark, horizontal timeline */}
      <div className="bg-black py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-heading font-bold text-white">Our Process</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.process.map((step, i) => (
              <div key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-gold/10 text-xs font-bold text-gold">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-400 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA — Cream */}
      <div className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900">
            Need Help with {area.title}?
          </h2>
          <p className="mx-auto mt-4 mb-8 max-w-lg text-gray-500">
            Connect with our verified legal professionals specializing in {area.title.toLowerCase()} matters across all courts in India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light">
              Contact Us Today
            </Link>
            <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#25D366] px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/10">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Related — Dark */}
      <div className="bg-dark py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h3 className="mb-10 text-center text-xl font-heading font-bold text-white">Related Practice Areas</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/practice-areas/${r.slug}`} className="group flex items-center gap-4 border border-white/5 p-5 transition-colors hover:border-gold/30">
                <span className="text-2xl font-heading font-bold text-gold/30">{r.letter}</span>
                <div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{r.title}</h4>
                  <p className="mt-1 text-xs text-gray-500">{r.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
