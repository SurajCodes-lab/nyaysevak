// Week 7: humans.txt — credits and team transparency. Trust signal.
export const dynamic = "force-static";

export async function GET() {
  const body = `/* TEAM */
NyaySevak Editorial Team
  Site: https://nyaysevak.com
  Location: New Delhi, India

NyaySevak Legal Team — Editorial Counsel
NyaySevak Criminal Law Desk — Criminal Defence Editorial Bench
NyaySevak Matrimonial & Family Desk — Family Law Editorial Bench
NyaySevak Property & Real Estate Desk — Property Law Editorial Bench
NyaySevak Corporate & Commercial Desk — Corporate Law Editorial Bench

/* THANKS */
The Indian legal community
The 25 High Courts of India
The Bar Council of India
NALSA, SLSAs, DLSAs

/* SITE */
Last update: ${new Date().toISOString().slice(0, 10)}
Language: English (en-IN), Hindi (hi-IN)
Doctype: HTML5
Components: Next.js 16, React 19, Tailwind CSS 4, TypeScript 5
Architecture: SSG-prerendered static site with edge OG-image generation
SEO: Schema.org JSON-LD across Organization, LegalService, LocalBusiness,
     ProfessionalService, WebSite, WebPage, FAQPage, BreadcrumbList,
     HowTo, Article, BlogPosting, DefinedTermSet, ItemList,
     CollectionPage, SiteNavigationElement, AggregateRating,
     Speakable, Offer.

/* SLOGAN */
Defending Your Rights.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
