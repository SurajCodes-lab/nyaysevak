import type { Metadata } from "next";
import Link from "next/link";
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

  return (
    <main className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero — Dark */}
      <div className="bg-black pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <nav className="mb-10 flex items-center gap-2 text-sm text-gray-500" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-gold">Home</Link>
            <span>/</span>
            <Link href="/courts" className="transition-colors hover:text-gold">Courts</Link>
            <span>/</span>
            <span className="text-gold">{hc?.name || (dc ? `District Courts in ${dc.state}` : tr?.title)}</span>
          </nav>

          {hc && (
            <>
              <h1 className="text-4xl font-heading font-bold text-white lg:text-5xl">{hc.name}</h1>
              <p className="mt-4 text-lg text-gray-400">High Court of India</p>
            </>
          )}
          {dc && (
            <>
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold/70">{dc.type === "ut" ? "Union Territory" : "State"}</p>
              <h1 className="text-4xl font-heading font-bold text-white lg:text-5xl">District Courts in {dc.state}</h1>
              <p className="mt-4 text-lg text-gray-400">{dc.districts.length} District Courts Covered</p>
            </>
          )}
          {tr && (
            <>
              <h1 className="text-4xl font-heading font-bold text-white lg:text-5xl">{tr.title} Tribunals</h1>
              <p className="mt-4 text-lg text-gray-400">{tr.items.length} Tribunals & Courts Covered</p>
            </>
          )}
        </div>
      </div>

      {/* High Court Content */}
      {hc && (
        <>
          <div className="bg-cream py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <div className="border-l-2 border-gold pl-8">
                <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-dark/70">Jurisdiction</h2>
                <p className="text-base text-gray-600">{hc.jurisdiction}</p>
              </div>
            </div>
          </div>

          {hc.benches.length > 0 && (
            <div className="bg-dark py-20">
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <h2 className="mb-8 text-2xl font-heading font-bold text-white">Bench Locations</h2>
                <div className="flex flex-wrap gap-4">
                  {hc.benches.map((bench) => (
                    <span key={bench} className="border border-gold/20 px-5 py-2.5 text-sm text-gray-300">
                      {bench} Bench
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="bg-cream py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-heading font-bold text-gray-900">Our Services at {hc.name}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Writ Petitions (Article 226 & 227)", "Civil Appeals & Revisions", "Criminal Appeals & Bail Applications", "Company Matters & NCLT Appeals", "Service & Employment Matters", "Tax Appeals & Revenue Matters", "Matrimonial & Family Appeals", "Land & Property Disputes"].map((s, i) => (
                  <div key={i} className="flex items-start gap-3 py-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span className="text-sm text-gray-600">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* District Court Content */}
      {dc && (
        <>
          <div className="bg-cream py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <div className="border-l-2 border-gold pl-8">
                <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-dark/70">Overview</h2>
                <p className="text-base leading-relaxed text-gray-600">
                  NyaySevak provides comprehensive legal representation across all {dc.districts.length} district courts in {dc.state}.
                  Our verified lawyers cover civil suits, criminal trials, family matters, property disputes, consumer cases, motor accident claims,
                  and all other matters handled at the district judiciary level.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <h2 className="mb-10 text-2xl font-heading font-bold text-white">All District Courts in {dc.state}</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {dc.districts.map((d, i) => (
                  <div key={d} className="flex items-center gap-3 py-2">
                    <span className="text-xs font-heading font-bold text-gold/40">{String(i + 1).padStart(2, "0")}.</span>
                    <span className="text-sm text-gray-300">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-cream py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <h2 className="mb-8 text-2xl font-heading font-bold text-gray-900">Types of Cases We Handle</h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {["Civil Suits & Property Disputes", "Criminal Trials & Bail", "Family & Matrimonial Matters", "Consumer Complaints", "Motor Accident Claims", "Cheque Bouncing (Section 138)", "Labour & Employment Disputes", "Land Revenue Matters", "Succession & Probate"].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span className="text-sm text-gray-600">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Tribunal Content */}
      {tr && (
        <>
          <div className="bg-cream py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <div className="border-l-2 border-gold pl-8">
                <h2 className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-dark/70">Overview</h2>
                <p className="text-base leading-relaxed text-gray-600">
                  NyaySevak provides expert legal representation across all {tr.title.toLowerCase()} tribunals in India.
                  Our verified tribunal lawyers have specialized experience in matters handled by these quasi-judicial bodies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-dark py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <h2 className="mb-10 text-2xl font-heading font-bold text-white">Tribunals We Cover</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {tr.items.map((item, i) => (
                  <div key={item} className="flex items-start gap-3 py-2">
                    <span className="text-sm font-heading font-bold text-gold/40">{String(i + 1).padStart(2, "0")}.</span>
                    <span className="text-sm text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-cream py-20">
            <div className="mx-auto max-w-5xl px-6 lg:px-8">
              <h2 className="mb-6 text-2xl font-heading font-bold text-gray-900">Our Tribunal Services</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Filing of applications and petitions", "Representation in hearings", "Drafting of written submissions", "Evidence compilation and management", "Appeal against tribunal orders", "Execution and enforcement of orders"].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                    <span className="text-sm text-gray-600">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* CTA — Black */}
      <div className="bg-black py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white">Need Representation?</h2>
          <p className="mx-auto mt-4 mb-8 max-w-lg text-gray-400">
            Connect with verified lawyers {hc ? `at the ${hc.name}` : dc ? `in ${dc.state} district courts` : `for ${tr?.title} tribunal matters`}.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:bg-gold-light">
            Find a Lawyer
          </Link>
        </div>
      </div>

      {/* Related — Dark */}
      <div className="bg-dark py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h3 className="mb-10 text-center text-xl font-heading font-bold text-white">Explore More Courts</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {highCourts.filter((c) => c.slug !== slug).slice(0, 3).map((c) => (
              <Link key={c.slug} href={`/courts/${c.slug}`} className="group border border-white/5 p-5 transition-colors hover:border-gold/30">
                <h4 className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{c.name}</h4>
                <p className="mt-1 text-xs text-gray-500">{c.jurisdiction}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
