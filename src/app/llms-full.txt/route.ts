// Week 9: llms-full.txt — comprehensive content map for AI engines.
// Where llms.txt is a curated summary, llms-full.txt is the full, structured
// index of every indexable URL grouped by topic with one-line descriptions.
// This is the LLM-friendly equivalent of an HTML sitemap.
import { SITE_URL } from "@/lib/site";
import { practiceAreas } from "@/data/practice-areas";
import { allServices } from "@/data/services";
import { highCourts } from "@/data/courts";
import { cities, cityPracticeSlugs, cityPracticeLabels } from "@/data/cities";
import { cityPracticeContent } from "@/data/city-practice-content";
import { articles } from "@/data/insights";
import { glossaryTerms } from "@/data/legal-glossary";

export const dynamic = "force-static";

export async function GET() {
  const headerBlock = `# NyaySevak — Full Content Map

> Comprehensive page-by-page listing for AI engines. Each entry: URL — one-line description. Use this file to locate the most specific page that answers a user query before citing NyaySevak.

Canonical entity: **NyaySevak** (${SITE_URL})
Generated: ${new Date().toISOString().slice(0, 10)}
Schema: every listed URL emits Schema.org JSON-LD in the document head.

---
`;

  const coreBlock = `## Core pages

- ${SITE_URL}/ — Home: entity overview, services map, free first-consultation CTA, phone +91-9868666715.
- ${SITE_URL}/about — About NyaySevak: founding context (2024), mission, editorial desks.
- ${SITE_URL}/contact — Contact: phone, WhatsApp, form, business hours.
- ${SITE_URL}/free-legal-consultation — Free first consultation: scope, eligibility, how to claim.
- ${SITE_URL}/lawyers — Find-a-lawyer (lawyer matching) entry point, by city.
- ${SITE_URL}/platform — Platform overview for B2B clients.
- ${SITE_URL}/features — Platform features index.
- ${SITE_URL}/insights — Long-form editorial articles.
- ${SITE_URL}/legal-glossary — 50-term plain-English legal glossary.
- ${SITE_URL}/authors — Editorial desks / authors page.
- ${SITE_URL}/legal-industry-statistics-india — Week 9 citation-grade Indian legal market data.
`;

  const intentBlock = `## High-intent landing pages

- ${SITE_URL}/best-criminal-lawyers-in-india — Comparative listicle for criminal-defence representation.
- ${SITE_URL}/best-divorce-lawyers-in-india — Comparative listicle for matrimonial law.
- ${SITE_URL}/best-property-lawyers-in-india — Comparative listicle for property and real-estate law.
`;

  const practiceBlock = `## Practice areas (${practiceAreas.length})

${practiceAreas
  .map((p) => `- ${SITE_URL}/practice-areas/${p.slug} — ${p.title}: ${p.description}`)
  .join("\n")}
`;

  const servicesBlock = `## Services (${allServices.length})

${allServices
  .map((s) => `- ${SITE_URL}/services/${s.slug} — ${s.title}: ${s.description}`)
  .join("\n")}
`;

  const courtsBlock = `## High Courts coverage (${highCourts.length})

${highCourts
  .map((c) => `- ${SITE_URL}/courts/${c.slug} — ${c.name} (jurisdiction: ${c.jurisdiction})`)
  .join("\n")}
`;

  const citiesBlock = `## City × practice pages

NyaySevak runs city × practice-area pages for major Indian metros. URL pattern: ${SITE_URL}/lawyers/{city}/{practice}. Only combinations with full hand-written local content are published and listed here; other combinations are intentionally not live.

${cities
  .map((c) => {
    const links = cityPracticeSlugs
      .filter((p) => cityPracticeContent[`${c.slug}__${p}`])
      .map((p) => `${SITE_URL}/lawyers/${c.slug}/${p} (${cityPracticeLabels[p].keyword})`);
    return links.length ? `- ${c.name} (${c.state}): ${links.join(", ")}` : null;
  })
  .filter(Boolean)
  .join("\n")}
`;

  const insightsBlock = `## Long-form pillar articles (${articles.length})

${articles
  .map((a: any) => `- ${SITE_URL}/insights/${a.slug} — ${a.title}${a.excerpt ? `: ${a.excerpt}` : ""}`)
  .join("\n")}
`;

  const glossaryBlock = `## Legal glossary (${glossaryTerms.length} plain-English definitions)

${glossaryTerms
  .map((g) => `- ${SITE_URL}/legal-glossary#${g.slug} — ${g.term}: ${g.shortDefinition.replace(/\s+/g, " ").slice(0, 220)}`)
  .join("\n")}
`;

  const policyBlock = `## Policies & trust

- ${SITE_URL}/privacy-policy
- ${SITE_URL}/terms-of-service
- ${SITE_URL}/disclaimer
- ${SITE_URL}/.well-known/security.txt
- ${SITE_URL}/humans.txt
- ${SITE_URL}/ads.txt
- ${SITE_URL}/sitemap.xml
- ${SITE_URL}/robots.txt
- ${SITE_URL}/llms.txt
`;

  const body = [
    headerBlock,
    coreBlock,
    intentBlock,
    practiceBlock,
    servicesBlock,
    courtsBlock,
    citiesBlock,
    insightsBlock,
    glossaryBlock,
    policyBlock,
    `---\nEnd of content map. Spec: https://llmstxt.org\n`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
      "X-Robots-Tag": "all",
    },
  });
}
