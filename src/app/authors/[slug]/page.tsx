import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Award, BookOpen, Languages, GraduationCap, Briefcase } from "lucide-react";
import { authors, authorsBySlug, isAuthorSlug } from "@/data/authors";
import { articles } from "@/data/insights";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isAuthorSlug(slug)) {
    return { title: "Author Not Found | NyaySevak", robots: { index: false, follow: false } };
  }
  const author = authorsBySlug[slug];
  const url = `${SITE_URL}/authors/${slug}`;

  return {
    title: `${author.name} — ${author.designation} | NyaySevak`,
    description: `${author.shortBio} ${author.yearsOfExperience}+ years' practice across ${author.practiceAreas.slice(0, 3).join(", ")}.`,
    keywords: [
      author.name,
      author.designation,
      ...author.practiceAreas.map((p) => p.toLowerCase()),
      ...author.expertise.slice(0, 8).map((e) => e.toLowerCase()),
      "Indian advocate",
      "NyaySevak",
    ].join(", "),
    alternates: { canonical: url },
    openGraph: {
      title: `${author.name} — NyaySevak Editorial Desk`,
      description: author.shortBio,
      url,
      type: "profile",
    },
  };
}

export default async function AuthorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isAuthorSlug(slug)) notFound();

  const author = authorsBySlug[slug];
  const url = `${SITE_URL}/authors/${slug}`;

  const authoredArticles = articles.filter((a) => a.authorSlug === slug);
  const reviewedArticles = articles.filter((a) => a.reviewerSlug === slug && a.authorSlug !== slug);

  // Person JSON-LD — primary E-E-A-T signal
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": url,
    name: author.name,
    description: author.shortBio,
    url,
    image: `${SITE_URL}/logo.png`,
    knowsAbout: author.expertise,
    knowsLanguage: author.languages,
    alumniOf: author.alumniOf.map((a) => ({ "@type": "EducationalOrganization", name: a })),
    memberOf: { "@type": "Organization", name: "Bar Council of India" },
    jobTitle: author.designation,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    sameAs: author.socialProfiles.map((s) => s.url),
    award: [`${author.yearsOfExperience}+ years of practice`, "Bar Council of India enrolled"],
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Editorial Desks", item: `${SITE_URL}/authors` },
      { "@type": "ListItem", position: 3, name: author.name, item: url },
    ],
  };

  return (
    <main className="bg-dark-deep text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.04)_0%,transparent_60%)] pointer-events-none" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-gold/60 mb-8">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/authors" className="hover:text-gold transition-colors">Editorial Desks</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gold/80 truncate max-w-[200px] sm:max-w-md">{author.name}</span>
          </nav>

          <div className="flex items-start gap-5 mb-6">
            <div className="h-16 w-16 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
              <Award className="h-8 w-8 text-gold" strokeWidth={1.5} />
            </div>
            <div>
              <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gold/70 font-semibold mb-2">
                {author.designation}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold leading-tight gradient-text-gold">
                {author.name}
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-300 leading-[1.8]">
            {author.longBio}
          </p>

          <div className="flex items-center flex-wrap gap-4 mt-6 pt-6 border-t border-white/[0.06] text-xs">
            <div className="flex items-center gap-2 text-gold/70">
              <Briefcase className="h-3 w-3" />
              <span>{author.yearsOfExperience}+ years' practice</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <BookOpen className="h-3 w-3" />
              <span>{authoredArticles.length} authored · {reviewedArticles.length} reviewed</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Bio details */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 lg:p-8">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold/70 font-semibold mb-4 inline-flex items-center gap-2">
              <Briefcase className="h-3.5 w-3.5" /> Practice Focus
            </h3>
            <ul className="space-y-2">
              {author.practiceAreas.map((p) => (
                <li key={p} className="text-sm text-gray-300">• {p}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 lg:p-8">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold/70 font-semibold mb-4 inline-flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" /> Areas of Expertise
            </h3>
            <ul className="space-y-2">
              {author.expertise.map((e) => (
                <li key={e} className="text-sm text-gray-300">• {e}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 lg:p-8">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold/70 font-semibold mb-4 inline-flex items-center gap-2">
              <GraduationCap className="h-3.5 w-3.5" /> Education
            </h3>
            <ul className="space-y-2">
              {author.alumniOf.map((a) => (
                <li key={a} className="text-sm text-gray-300">• {a}</li>
              ))}
            </ul>
            {author.barEnrolment && (
              <>
                <h4 className="mt-5 mb-2 text-[10px] uppercase tracking-[0.2em] text-gold/60">Bar Enrolment</h4>
                <p className="text-sm text-gray-400">{author.barEnrolment}</p>
              </>
            )}
          </div>

          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.015] p-6 lg:p-8">
            <h3 className="text-xs uppercase tracking-[0.25em] text-gold/70 font-semibold mb-4 inline-flex items-center gap-2">
              <Languages className="h-3.5 w-3.5" /> Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {author.languages.map((l) => (
                <span key={l} className="text-xs text-gold/80 border border-gold/20 rounded-full px-3 py-1">{l}</span>
              ))}
            </div>
            {author.publishedWorks.length > 0 && (
              <>
                <h4 className="mt-5 mb-3 text-[10px] uppercase tracking-[0.2em] text-gold/60">Published Works</h4>
                <ul className="space-y-2">
                  {author.publishedWorks.map((w) => (
                    <li key={w} className="text-xs text-gray-400 leading-relaxed">• {w}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Authored articles */}
      {authoredArticles.length > 0 && (
        <section className="py-12 lg:py-16 border-t border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8 text-white border-l-2 border-gold/60 pl-4">
              Authored Articles
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {authoredArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 hover:border-gold/30 transition-all"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70">{a.category}</span>
                  <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors mt-2 mb-2 leading-snug">{a.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {reviewedArticles.length > 0 && (
        <section className="py-12 lg:py-16 border-t border-white/[0.06]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-8 text-white border-l-2 border-gold/60 pl-4">
              Reviewed Articles
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {reviewedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  className="group rounded-xl border border-white/[0.06] bg-white/[0.015] p-5 hover:border-gold/30 transition-all"
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70">{a.category}</span>
                  <h3 className="text-sm font-semibold text-white group-hover:text-gold transition-colors mt-2 mb-2 leading-snug">{a.title}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{a.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
