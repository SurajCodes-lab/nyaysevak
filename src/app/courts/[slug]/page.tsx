import type { Metadata } from "next";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import {
  ArrowRight, Landmark, MapPin, Building2, Scale, Shield,
  Users, Clock, Star, CheckCircle2, Phone, Gavel, BookOpen,
  FileText, CircleCheck, ChevronRight, BadgeCheck, HelpCircle,
} from "lucide-react";
import { highCourts, tribunalGroups, districtCourts } from "@/data/courts";
import { notFound } from "next/navigation";

type CourtType = "hc" | "dc" | "tribunal";
type CourtEntry = { type: CourtType; slug: string };

function getAllSlugs(): CourtEntry[] {
  const hc = highCourts.map((c) => ({ type: "hc" as const, slug: c.slug }));
  const dc = districtCourts.map((d) => ({ type: "dc" as const, slug: d.slug }));
  const tr = tribunalGroups.map((t) => ({ type: "tribunal" as const, slug: t.slug }));
  return [...hc, ...dc, ...tr];
}

export function generateStaticParams() {
  return getAllSlugs().map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;

  const hc = highCourts.find((c) => c.slug === slug);
  if (hc) return {
    title: `${hc.name} - Lawyers & Legal Services | NyaySevak`,
    description: `Find verified lawyers for ${hc.name} matters. Jurisdiction: ${hc.jurisdiction}. ${hc.benches.length > 0 ? `Bench locations: ${hc.benches.join(", ")}.` : ""} Book expert advocates on NyaySevak.`,
    keywords: `${hc.name} lawyer, ${hc.jurisdiction} advocate, high court lawyer India, NyaySevak`,
  };

  const dc = districtCourts.find((d) => d.slug === slug);
  if (dc) return {
    title: `District Courts in ${dc.state} - Lawyers & Legal Services | NyaySevak`,
    description: `Find verified lawyers for all ${dc.districts.length} district courts in ${dc.state}. Book expert advocates on NyaySevak.`,
    keywords: `${dc.state} district court lawyer, NyaySevak`,
  };

  const tr = tribunalGroups.find((t) => t.slug === slug);
  if (tr) return {
    title: `${tr.title} Tribunals - Lawyers & Legal Services | NyaySevak`,
    description: `Find verified lawyers for ${tr.title} tribunals in India. Expert tribunal advocates on NyaySevak.`,
    keywords: `${tr.title} tribunal lawyer, NyaySevak`,
  };

  return { title: "Not Found | NyaySevak" };
}

const hcServices = [
  { title: "Writ Petitions (Article 226 & 227)", desc: "Challenge government actions, enforce fundamental rights, and seek judicial review of administrative decisions." },
  { title: "Civil Appeals & Revisions", desc: "Appeal district court civil judgments including property, contract, and recovery matters." },
  { title: "Criminal Appeals & Bail Applications", desc: "Challenge convictions, seek regular and anticipatory bail, and file quashing petitions." },
  { title: "Company Matters & NCLT Appeals", desc: "Corporate disputes, winding up petitions, and appeals from tribunal orders." },
  { title: "Service & Employment Matters", desc: "Government employee disputes, pension matters, and service law challenges." },
  { title: "Tax Appeals & Revenue Matters", desc: "Income tax references, GST appeals, and customs and excise matters." },
  { title: "Matrimonial & Family Appeals", desc: "Appeals in divorce, custody, maintenance, and domestic violence cases." },
  { title: "Land & Property Disputes", desc: "Land acquisition challenges, title disputes, and property partition matters." },
];

const dcCaseTypes = [
  { title: "Civil Suits & Property Disputes", desc: "Title disputes, partition suits, injunctions, specific performance, and recovery suits." },
  { title: "Criminal Trials & Bail", desc: "Sessions trials, IPC offenses, bail applications, and criminal revision petitions." },
  { title: "Family & Matrimonial Matters", desc: "Divorce, child custody, alimony, maintenance under Section 125 CrPC, and DV Act cases." },
  { title: "Consumer Complaints", desc: "Product liability, service deficiency, unfair trade practices, and consumer protection matters." },
  { title: "Motor Accident Claims", desc: "Compensation claims before MACT, insurance disputes, and hit-and-run claims." },
  { title: "Cheque Bouncing (Section 138 NI Act)", desc: "Prosecution under Negotiable Instruments Act with expert guidance on procedure." },
  { title: "Labour & Employment Disputes", desc: "Wrongful termination, wage disputes, PF claims, and industrial dispute matters." },
  { title: "Land Revenue Matters", desc: "Revenue court matters, mutation entries, land records, and agricultural tenancy." },
  { title: "Succession & Probate", desc: "Succession certificates, probate of wills, letters of administration, and inheritance disputes." },
];

const tribunalServices = [
  { title: "Filing of Applications & Petitions", desc: "Expert drafting and filing of original applications, complaints, and appeals before tribunal benches." },
  { title: "Representation in Hearings", desc: "Skilled advocacy during oral hearings, cross-examination, and arguments before tribunal members." },
  { title: "Drafting of Written Submissions", desc: "Comprehensive written submissions, rejoinders, and counter-statements prepared by specialists." },
  { title: "Evidence Compilation & Management", desc: "Systematic collection, organization, and presentation of documentary and expert evidence." },
  { title: "Appeal Against Tribunal Orders", desc: "Challenge unfavorable tribunal orders before the appropriate appellate authority or High Court." },
  { title: "Execution & Enforcement", desc: "Enforce tribunal awards and orders, including contempt proceedings for non-compliance." },
];

const hcWhyChoose = [
  "Senior advocates with 10+ years of High Court practice experience",
  "Track record of successful writ petitions and appeals across India",
  "Regular appearances and established rapport with court registrars",
  "End-to-end case management from filing to final hearing",
  "Transparent fee structure — know the cost before you engage",
  "Post-judgment advisory on implementation and compliance",
];

const dcWhyChoose = [
  "Local advocates with deep knowledge of district-specific procedures",
  "Extensive network covering all district and sessions courts in the state",
  "Expertise across civil, criminal, family, and revenue jurisdictions",
  "Regular case status updates and hearing date notifications",
  "Affordable fee structures designed for individual and family clients",
  "Strong track record in trial advocacy and case preparation",
];

const trWhyChoose = [
  "Specialist tribunal lawyers with domain expertise in the relevant sector",
  "Experience before specific tribunal benches across multiple locations",
  "Understanding of specialized tribunal procedures and regulations",
  "Quick turnaround on urgent applications and interim relief matters",
  "Comprehensive case preparation including expert evidence management",
  "Appeals strategy for challenging adverse tribunal orders",
];

const hcFaqs = [
  { q: "How do I file a case in the High Court?", a: "High Court cases are filed through the filing counter after preparing the required pleadings, paying court fees, and obtaining an advocate-on-record. NyaySevak connects you with experienced High Court advocates who handle the entire filing process for you." },
  { q: "What is the difference between a writ petition and an appeal?", a: "A writ petition (Article 226) is filed to challenge government actions or enforce fundamental rights. An appeal challenges a lower court's judgment. Writs have broader scope and can be filed even without a prior court order." },
  { q: "How long does a typical High Court case take?", a: "Timelines vary significantly by case type and court. Writ petitions can get interim relief within weeks, while regular appeals may take 1-3 years. Urgent matters can be heard the same day through mentioning." },
  { q: "Can I get an urgent hearing at the High Court?", a: "Yes. Through a process called 'mentioning', your advocate can request the court to hear your matter on an urgent basis. This is available for matters involving immediate threat to liberty, property, or rights." },
];

const dcFaqs = [
  { q: "Which district court should I file my case in?", a: "Jurisdiction depends on where the cause of action arose, where the defendant resides, or where the property is located. Our lawyers will analyze your case and advise on the correct court with the appropriate jurisdiction." },
  { q: "What documents do I need to file a district court case?", a: "Generally you need a signed plaint/complaint, relevant supporting documents, identity proof, court fee stamps, and vakalatnama (power of attorney for your lawyer). Requirements vary by case type." },
  { q: "How much does it cost to hire a district court lawyer?", a: "Fees vary by case complexity, location, and lawyer experience. On NyaySevak, all fees are displayed upfront. District court matters typically range from ₹5,000 to ₹50,000 depending on the nature of the case." },
  { q: "Can I track my case status online?", a: "Yes. Most district courts are now part of the e-Courts system. Our platform provides case tracking assistance and regular status updates through your dashboard." },
];

const trFaqs = [
  { q: "What is the difference between a tribunal and a regular court?", a: "Tribunals are quasi-judicial bodies established by specific statutes to handle specialized matters. They follow their own procedural rules, are generally faster than regular courts, and have members with domain expertise in the relevant sector." },
  { q: "Can a tribunal order be challenged?", a: "Yes. Most tribunal orders can be challenged through statutory appeals (e.g., NCLAT for NCLT orders) or through writ petitions in the High Court. The appeal route depends on the specific tribunal and its governing statute." },
  { q: "Do I need a lawyer for tribunal proceedings?", a: "While some tribunals allow self-representation, having a specialized lawyer significantly improves your chances. Tribunal procedures, though less formal, still require expertise in drafting, evidence presentation, and legal arguments." },
  { q: "How long do tribunal proceedings typically take?", a: "Tribunals are generally faster than regular courts. Simple matters may be resolved in 3-6 months, while complex cases involving multiple hearings could take 1-2 years. Many tribunals have mandated timelines for disposal." },
];

export default async function CourtDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const hc = highCourts.find((c) => c.slug === slug);
  const dc = districtCourts.find((d) => d.slug === slug);
  const tr = tribunalGroups.find((t) => t.slug === slug);

  if (!hc && !dc && !tr) notFound();

  const pageTitle = hc?.name || (dc ? `District Courts in ${dc.state}` : tr?.title || "");
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nyaysevak.com/" },
      { "@type": "ListItem", position: 2, name: "Courts", item: "https://nyaysevak.com/courts" },
      { "@type": "ListItem", position: 3, name: pageTitle, item: `https://nyaysevak.com/courts/${slug}` },
    ],
  };

  const courtFaqs = hc ? hcFaqs : dc ? dcFaqs : trFaqs;
  const courtWhyChoose = hc ? hcWhyChoose : dc ? dcWhyChoose : trWhyChoose;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: courtFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero — Dark Premium ── */}
      <section className="relative bg-dark-deep overflow-hidden dark-section-depth">
        {/* Glow orbs */}
        <div className="pointer-events-none absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.08)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.05)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-8 pt-32 sm:pt-36 pb-16 sm:pb-20">
          <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-600" />
            <Link href="/courts" className="transition-colors hover:text-gold">Courts</Link>
            <ChevronRight className="h-3.5 w-3.5 text-gray-600" />
            <span className="text-gold font-medium">{hc?.name || (dc ? `${dc.state}` : tr?.title)}</span>
          </nav>

          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            {/* Court icon */}
            <div className="icon-gold h-16 w-16 sm:h-20 sm:w-20 rounded-2xl flex items-center justify-center shrink-0">
              {hc ? <Landmark className="h-8 w-8 sm:h-10 sm:w-10 text-black" strokeWidth={1.5} /> :
               dc ? <MapPin className="h-8 w-8 sm:h-10 sm:w-10 text-black" strokeWidth={1.5} /> :
                    <Scale className="h-8 w-8 sm:h-10 sm:w-10 text-black" strokeWidth={1.5} />}
            </div>

            <div className="flex-1">
              {hc && (
                <>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">High Court of India</p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white heading-glow">{hc.name}</h1>
                  <p className="mt-3 text-base text-gray-400 max-w-2xl">Comprehensive legal representation at one of India&apos;s principal High Courts, covering writ petitions, civil and criminal appeals, and all original jurisdiction matters.</p>
                </>
              )}
              {dc && (
                <>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">{dc.type === "ut" ? "Union Territory" : "State"}</p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white heading-glow">District Courts in {dc.state}</h1>
                  <p className="mt-3 text-base text-gray-400 max-w-2xl">Find verified lawyers across all {dc.districts.length} district courts in {dc.state}. Expert representation for civil, criminal, family, and revenue matters at every district judiciary level.</p>
                </>
              )}
              {tr && (
                <>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold">Tribunals & Specialized Courts</p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white heading-glow">{tr.title} Tribunals</h1>
                  <p className="mt-3 text-base text-gray-400 max-w-2xl">Expert legal representation across all {tr.items.length} {tr.title.toLowerCase()} tribunals and specialized courts in India. Domain-specific lawyers for your tribunal matters.</p>
                </>
              )}

              {/* Stat pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                  <BadgeCheck className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                  Verified Lawyers
                </span>
                <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                  <Clock className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                  Quick Response
                </span>
                {hc && hc.benches.length > 0 && (
                  <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                    <MapPin className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                    {hc.benches.length + 1} Bench Locations
                  </span>
                )}
                {dc && (
                  <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                    <Building2 className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                    {dc.districts.length} District Courts
                  </span>
                )}
                {tr && (
                  <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                    <Scale className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                    {tr.items.length} Tribunals
                  </span>
                )}
                <span className="glass-card !rounded-full !px-4 !py-2 inline-flex items-center gap-2 text-xs text-gray-300">
                  <Star className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                  4.8/5 Rating
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-separator" />
      </section>

      {/* ── High Court Content ── */}
      {hc && (
        <>
          {/* Jurisdiction + Bench Info */}
          <section className="bg-cream py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <h2 className="text-xs uppercase tracking-[0.3em] text-gold-dark/70 font-bold shrink-0">Jurisdiction & Bench Details</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="glass-cream p-6 sm:p-8">
                  <div className="icon-box-cream h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gold-dark/70 mb-2">Jurisdiction</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{hc.jurisdiction}</p>
                  <p className="mt-3 text-sm text-gray-500">This High Court exercises jurisdiction over all district and subordinate courts within the territorial boundaries of its jurisdiction.</p>
                </div>

                <div className="glass-cream p-6 sm:p-8">
                  <div className="icon-box-cream h-12 w-12 rounded-xl flex items-center justify-center mb-4">
                    <Landmark className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-gold-dark/70 mb-2">Bench Locations</h3>
                  {hc.benches.length > 0 ? (
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="rounded-lg bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-medium text-gold-dark">
                        Principal Bench
                      </span>
                      {hc.benches.map((bench) => (
                        <span key={bench} className="rounded-lg bg-gold/10 border border-gold/20 px-4 py-2 text-sm font-medium text-gold-dark">
                          {bench} Bench
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base text-gray-700">Single bench at the principal seat</p>
                  )}
                  <p className="mt-3 text-sm text-gray-500">NyaySevak has verified lawyers available at every bench location.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services at this HC */}
          <section className="relative bg-dark-deep py-16 sm:py-20 overflow-hidden dark-section-depth">
            <div className="pointer-events-none absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
            <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">Legal Services</p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-4">
                Our Services at {hc.name}
              </h2>
              <p className="text-sm text-gray-400 mb-10 max-w-2xl">Our experienced High Court advocates provide expert representation across all the following areas of practice.</p>

              <div className="grid gap-4 sm:grid-cols-2">
                {hcServices.map((s, i) => (
                  <div key={i} className="glass-card !rounded-xl p-5 sm:p-6 group hover:border-gold/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="icon-box-dark h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-xs font-heading font-bold text-gold/80">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{s.title}</h3>
                        <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── District Court Content ── */}
      {dc && (
        <>
          {/* Overview */}
          <section className="bg-cream py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="glass-cream p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="icon-box-cream h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-heading font-bold text-gray-900">About District Courts in {dc.state}</h2>
                    <p className="mt-2 text-sm text-gray-500">Comprehensive legal services overview</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  NyaySevak provides comprehensive legal representation across all {dc.districts.length} district courts in {dc.state}.
                  Our verified lawyers cover civil suits, criminal trials, family matters, property disputes, consumer cases, motor accident claims,
                  and all other matters handled at the district judiciary level. Each district court handles both original jurisdiction cases and appeals
                  from subordinate courts within its territorial jurisdiction.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Whether you need representation for a property title dispute, a criminal trial, a family court matter, or any other district-level
                  proceeding, our platform connects you with local advocates who have deep experience practicing before these specific courts.
                </p>
              </div>
            </div>
          </section>

          {/* All Districts */}
          <section className="relative bg-dark-deep py-16 sm:py-20 overflow-hidden dark-section-depth">
            <div className="pointer-events-none absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
            <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">Complete Coverage</p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-4">
                All {dc.districts.length} District Courts in {dc.state}
              </h2>
              <p className="text-sm text-gray-400 mb-10 max-w-2xl">Our lawyer network covers every district court listed below. Click any district to find verified lawyers practicing there.</p>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {dc.districts.map((d, i) => (
                  <div key={d} className="glass-card !rounded-lg px-4 py-3 flex items-center gap-3 group hover:border-gold/30 transition-all duration-300">
                    <span className="text-xs font-heading font-bold text-gold/50 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Types */}
          <section className="bg-cream py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <h2 className="text-xs uppercase tracking-[0.3em] text-gold-dark/70 font-bold shrink-0">Types of Cases</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              </div>
              <p className="text-center text-sm text-gray-500 mb-10 max-w-2xl mx-auto">Our district court lawyers handle a wide range of matters across civil, criminal, and specialized jurisdictions.</p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {dcCaseTypes.map((c, i) => (
                  <div key={i} className="glass-cream p-5 sm:p-6 group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="icon-box-cream h-8 w-8 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-heading font-bold text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">{c.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── Tribunal Content ── */}
      {tr && (
        <>
          {/* Overview */}
          <section className="bg-cream py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="glass-cream p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="icon-box-cream h-12 w-12 rounded-xl flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5 text-gold-dark" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-heading font-bold text-gray-900">About {tr.title} Tribunals</h2>
                    <p className="mt-2 text-sm text-gray-500">Specialized tribunal representation</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  NyaySevak provides expert legal representation across all {tr.title.toLowerCase()} tribunals in India.
                  Our verified tribunal lawyers have specialized experience in matters handled by these quasi-judicial bodies,
                  ensuring you get domain-specific expertise for your tribunal proceedings.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  Tribunals offer a faster and more specialized alternative to regular courts for specific categories of disputes.
                  Our lawyers understand the unique procedures, rules, and precedents applicable to each tribunal, giving you
                  the best possible representation for your matter.
                </p>
              </div>
            </div>
          </section>

          {/* Tribunal Items */}
          <section className="relative bg-dark-deep py-16 sm:py-20 overflow-hidden dark-section-depth">
            <div className="pointer-events-none absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
            <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">Tribunals We Cover</p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-10">
                {tr.title} Tribunals & Courts
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                {tr.items.map((item, i) => (
                  <div key={item} className="glass-card !rounded-xl p-5 sm:p-6 group hover:border-gold/30 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="icon-box-dark h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                        <Scale className="h-4 w-4 text-gold/80" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{item}</h3>
                        <p className="mt-1 text-xs text-gray-500">Verified lawyers available for representation</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tribunal Services */}
          <section className="bg-cream py-16 sm:py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
                <h2 className="text-xs uppercase tracking-[0.3em] text-gold-dark/70 font-bold shrink-0">Our Tribunal Services</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {tribunalServices.map((s, i) => (
                  <div key={i} className="glass-cream p-5 sm:p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="icon-box-cream h-8 w-8 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-[10px] font-heading font-bold text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900">{s.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── Why Choose NyaySevak ── */}
      <section className="relative bg-dark py-16 sm:py-20 overflow-hidden">
        <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold/50" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-gold font-semibold">Why NyaySevak</p>
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow mb-10">
            Why Choose NyaySevak for {hc ? "High Court" : dc ? "District Court" : "Tribunal"} Matters
          </h2>

          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {courtWhyChoose.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <CircleCheck className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <h2 className="text-xs uppercase tracking-[0.3em] text-gold-dark/70 font-bold shrink-0">Common Questions</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          </div>
          <h3 className="text-center text-2xl sm:text-3xl font-heading font-bold text-gray-900 heading-glow-cream mb-10">
            Frequently Asked Questions
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            {courtFaqs.map((faq, i) => (
              <div key={i} className="faq-card p-5 sm:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="icon-box-cream h-8 w-8 rounded-lg flex items-center justify-center shrink-0">
                    <HelpCircle className="h-4 w-4 text-gold-dark" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-sm font-semibold text-gray-900 pt-1">{faq.q}</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed ml-11">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-dark-deep py-16 sm:py-20 overflow-hidden dark-section-depth">
        <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.06)_0%,transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="gradient-border-card rounded-2xl p-px">
            <div className="glass-card !rounded-2xl p-8 sm:p-12">
              <div className="icon-gold h-16 w-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="h-7 w-7 text-black" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white heading-glow">
                Need Legal Representation?
              </h2>
              <p className="mx-auto mt-4 mb-8 max-w-lg text-sm text-gray-400 leading-relaxed">
                Connect with verified lawyers {hc ? `at the ${hc.name}` : dc ? `across all ${dc.districts.length} district courts in ${dc.state}` : `for ${tr?.title} tribunal matters`}. Book a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ContactButton className="btn-gold-shine rounded-xl inline-flex items-center gap-2.5 bg-gradient-to-r from-gold to-gold-light px-8 py-4 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 cursor-pointer">
                  Find a Lawyer
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </ContactButton>
                <a
                  href="https://wa.me/919868666715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:text-gold"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Courts ── */}
      <section className="relative bg-dark py-16 sm:py-20 overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
          <h3 className="mb-10 text-center text-xl font-heading font-bold text-white heading-glow">Explore More Courts</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {highCourts.filter((c) => c.slug !== slug).slice(0, 3).map((c) => (
              <Link key={c.slug} href={`/courts/${c.slug}`} className="glass-card !rounded-xl p-5 sm:p-6 group hover:border-gold/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="icon-box-dark h-10 w-10 rounded-lg flex items-center justify-center shrink-0">
                    <Landmark className="h-4 w-4 text-gold/70" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{c.name}</h4>
                    <p className="text-xs text-gray-500">{c.jurisdiction}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gold/60 font-medium">
                  <span>View Details</span>
                  <ArrowRight className="h-3 w-3" strokeWidth={2} />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/courts" className="inline-flex items-center gap-2 text-sm text-gold font-semibold hover:text-gold-light transition-colors">
              View All Courts
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
