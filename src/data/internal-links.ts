// Internal-linking data layer — Spec 05 (crawl-equity mesh).
//
// Turns the site's star topology (everything hangs off the sitemap) into a
// topical-cluster MESH so PageRank flows from strong hubs to deep leaves and
// every page is reachable from several relevant pages. This pulls leaf pages out
// of Google's "Discovered – currently not indexed" bucket.
//
// Design: 100% DERIVED from existing data files — no hand-maintained mapping to
// drift out of sync. Each builder returns RelatedLinksGroup[] for the reusable
// <RelatedLinks/> component. All targets are guaranteed to be real (200) pages:
// city×practice links are gated on cityPracticeContent presence (the route
// notFound()s combos without content — see Spec 04).

import type { RelatedLinksGroup, RelatedLinkItem } from "@/components/RelatedLinks";
import { practiceAreas } from "./practice-areas";
import { allServices } from "./services";
import { articles } from "./insights";
import { glossaryTerms } from "./legal-glossary";
import { cities, cityPracticeSlugs, cityPracticeLabels, cityMatterParentPractice, type CityPracticeSlug } from "./cities";
import { cityPracticeContent } from "./city-practice-content";
import { practiceAreaToServices, practiceAreaToCityPracticeSlug } from "./practice-area-cross-links";
import { highCourts, tribunalGroups, districtCourts } from "./courts";

// ── O(1) lookup maps (built once at module load) ──
const practiceBySlug = new Map(practiceAreas.map((p) => [p.slug, p]));
const serviceBySlug = new Map(allServices.map((s) => [s.slug, s]));
const articleBySlug = new Map(articles.map((a) => [a.slug, a]));
const termBySlug = new Map(glossaryTerms.map((t) => [t.slug, t]));
const cityBySlug = new Map(cities.map((c) => [c.slug, c]));

// ── label/href builders (one source of truth for every link's text + URL) ──
const practiceItem = (slug: string): RelatedLinkItem | null => {
  const p = practiceBySlug.get(slug);
  return p ? { label: p.title, href: `/practice-areas/${p.slug}` } : null;
};
const serviceItem = (slug: string, note?: string): RelatedLinkItem | null => {
  const s = serviceBySlug.get(slug);
  return s ? { label: s.title, href: `/services/${s.slug}`, note } : null;
};
const articleItem = (slug: string): RelatedLinkItem | null => {
  const a = articleBySlug.get(slug);
  return a ? { label: a.title, href: `/insights/${a.slug}` } : null;
};
const termItem = (slug: string): RelatedLinkItem | null => {
  const t = termBySlug.get(slug);
  return t ? { label: t.term, href: `/legal-glossary/${t.slug}` } : null;
};
const cityItem = (slug: string): RelatedLinkItem | null => {
  const c = cityBySlug.get(slug);
  return c ? { label: `Lawyers in ${c.name}`, href: `/lawyers/${c.slug}` } : null;
};
const cityPracticeItem = (citySlug: string, cps: CityPracticeSlug): RelatedLinkItem | null => {
  const c = cityBySlug.get(citySlug);
  if (!c || !cityPracticeContent[`${citySlug}__${cps}`]) return null; // 200-only gate
  return { label: `${cityPracticeLabels[cps].title} in ${c.name}`, href: `/lawyers/${citySlug}/${cps}` };
};

const clean = (items: (RelatedLinkItem | null)[], max = 6): RelatedLinkItem[] =>
  items.filter((x): x is RelatedLinkItem => Boolean(x)).slice(0, max);

const group = (title: string, items: (RelatedLinkItem | null)[], max = 6): RelatedLinksGroup | null => {
  const list = clean(items, max);
  return list.length ? { title, items: list } : null;
};
const groups = (...gs: (RelatedLinksGroup | null)[]): RelatedLinksGroup[] =>
  gs.filter((g): g is RelatedLinksGroup => Boolean(g));

// Which cities have a hand-written page for a given city-practice vertical.
function citiesForCityPractice(cps: CityPracticeSlug): string[] {
  return cities.filter((c) => cityPracticeContent[`${c.slug}__${cps}`]).map((c) => c.slug);
}

// Week 21 (ranking push): inverse of cityMatterParentPractice — parent
// practice-area slug → its matter slugs. Fully derived, so a new matter slug
// wired in cities.ts automatically starts receiving links from its pillar,
// its guides, and its glossary terms with zero extra mapping.
const mattersForPractice = new Map<string, CityPracticeSlug[]>();
for (const [matter, parent] of Object.entries(cityMatterParentPractice)) {
  if (!parent) continue;
  const list = mattersForPractice.get(parent) ?? [];
  list.push(matter as CityPracticeSlug);
  mattersForPractice.set(parent, list);
}

// Content-gated city×matter links for a set of practice-area slugs.
// Anchors use the proven head-query pattern ("Cheque Bounce Lawyer in Noida").
function matterItemsForPractices(practiceSlugs: string[]): (RelatedLinkItem | null)[] {
  const seen = new Set<string>();
  const items: (RelatedLinkItem | null)[] = [];
  for (const ps of practiceSlugs) {
    for (const matter of mattersForPractice.get(ps) ?? []) {
      for (const citySlug of citiesForCityPractice(matter)) {
        const key = `${citySlug}__${matter}`;
        if (seen.has(key)) continue;
        seen.add(key);
        items.push(cityPracticeItem(citySlug, matter));
      }
    }
  }
  return items;
}

// ──────────────────────────────────────────────────────────────────────────
// Builders — one per leaf template
// ──────────────────────────────────────────────────────────────────────────

/** /practice-areas/[slug] */
export function relatedGroupsForPractice(practiceSlug: string): RelatedLinksGroup[] {
  const services = (practiceAreaToServices[practiceSlug] ?? []).map((s) => serviceItem(s.slug, s.desc));
  const gloss = glossaryTerms
    .filter((t) => t.relatedPracticeAreaSlugs.includes(practiceSlug))
    .map((t) => termItem(t.slug));
  const guides = articles
    .filter((a) => a.relatedPracticeAreaSlugs.includes(practiceSlug))
    .map((a) => articleItem(a.slug));
  const cps = practiceAreaToCityPracticeSlug[practiceSlug];
  const byCity = cps ? citiesForCityPractice(cps).map((cs) => cityPracticeItem(cs, cps)) : [];
  // Week 21: pillar → matter-page links (equity from pos-1–2 pillars into the
  // new transactional pages; content-gated, derived via cityMatterParentPractice).
  // Exclude the slug already covered by the byCity group (banking-finance's
  // vertical mapping IS a matter slug) so the same URL never appears twice.
  const matterLinks = matterItemsForPractices([practiceSlug]).filter(
    (i) => !cps || !i?.href.endsWith(`/${cps}`)
  );

  return groups(
    group("Recommended services", services, 3),
    group("Key legal terms", gloss, 6),
    group("In-depth guides", guides, 4),
    group("Find lawyers by city", byCity, 6),
    group("Matter-specific lawyers", matterLinks, 8)
  );
}

/** /services/[slug] */
export function relatedGroupsForService(serviceSlug: string): RelatedLinksGroup[] {
  const inPractices = practiceAreas
    .filter((p) => (practiceAreaToServices[p.slug] ?? []).some((s) => s.slug === serviceSlug))
    .map((p) => practiceItem(p.slug));
  const guides = articles
    .filter((a) => a.relatedServiceSlugs.includes(serviceSlug))
    .map((a) => articleItem(a.slug));
  const svc = serviceBySlug.get(serviceSlug);
  const siblings = allServices
    .filter((s) => s.slug !== serviceSlug && s.category === svc?.category)
    .map((s) => serviceItem(s.slug));

  return groups(
    group("Related practice areas", inPractices, 6),
    group("Helpful guides", guides, 4),
    group("Other services", siblings, 5)
  );
}

/** /insights/[slug] */
export function relatedGroupsForInsight(articleSlug: string): RelatedLinksGroup[] {
  const a = articleBySlug.get(articleSlug);
  if (!a) return [];
  const practices = a.relatedPracticeAreaSlugs.map((s) => practiceItem(s));
  const services = a.relatedServiceSlugs.map((s) => serviceItem(s));
  const related = articles
    .filter((o) => o.slug !== articleSlug && o.category === a.category)
    .map((o) => articleItem(o.slug));
  const cityLinks = (a.relatedCitySlugs ?? []).map((cs) => cityItem(cs));
  // Week 21: guide → matter-page links (an S.138 guide links every live
  // "Cheque Bounce Lawyer in <city>" page; derived, content-gated).
  const matterLinks = matterItemsForPractices(a.relatedPracticeAreaSlugs);

  return groups(
    group("Related guides", related, 4),
    group("Related practice areas", practices, 4),
    group("Talk to a lawyer", services, 3),
    group("Hire a lawyer for this matter", matterLinks, 6),
    group("Lawyers near you", cityLinks, 6)
  );
}

/** /legal-glossary/[slug] */
export function relatedGroupsForGlossary(termSlug: string): RelatedLinksGroup[] {
  const t = termBySlug.get(termSlug);
  if (!t) return [];
  const practices = t.relatedPracticeAreaSlugs.map((s) => practiceItem(s));
  const sameCat = glossaryTerms
    .filter((o) => o.slug !== termSlug && o.category === t.category)
    .map((o) => termItem(o.slug));
  const guides = articles
    .filter((a) => a.relatedPracticeAreaSlugs.some((s) => t.relatedPracticeAreaSlugs.includes(s)))
    .map((a) => articleItem(a.slug));
  // Week 21: glossary → matter-page links (the ranking "anticipatory bail"
  // definition links every live "Anticipatory Bail Lawyer in <city>" page).
  const matterLinks = matterItemsForPractices(t.relatedPracticeAreaSlugs);

  return groups(
    group("Related terms", sameCat, 6),
    group("Practice areas", practices, 4),
    group("Guides that use this term", guides, 4),
    group("Hire a lawyer for this matter", matterLinks, 5)
  );
}

/** /lawyers/[city] (city hub) */
export function relatedGroupsForCity(citySlug: string): RelatedLinksGroup[] {
  const c = cityBySlug.get(citySlug);
  if (!c) return [];
  const verticals = cityPracticeSlugs.map((cps) => cityPracticeItem(citySlug, cps));
  const nearby = cities.filter((o) => o.slug !== citySlug).slice(0, 6).map((o) => cityItem(o.slug));
  const court: RelatedLinkItem | null = c.highCourt
    ? { label: c.highCourt.name, href: `/courts/${c.highCourt.slug}` }
    : null;

  return groups(
    // Week 18: raised 5 → 8 so gated matter pages receive a mesh inlink from
    // their city hub. Week 19: 8 → 11 — the NCR trio now carries 5 verticals
    // + 6 matter pages each; a cap of 8 would orphan three matter pages per hub.
    group(`Lawyers in ${c.name} by specialisation`, verticals, 11),
    group("Lawyers in other cities", nearby, 6),
    group("Local courts", [court], 3)
  );
}

/** /lawyers/[city]/[slug] (city × practice) */
export function relatedGroupsForCityPractice(citySlug: string, cps: CityPracticeSlug): RelatedLinksGroup[] {
  const c = cityBySlug.get(citySlug);
  if (!c) return [];
  const otherVerticals = cityPracticeSlugs
    .filter((s) => s !== cps)
    .map((s) => cityPracticeItem(citySlug, s));
  const sameInOtherCities = citiesForCityPractice(cps)
    .filter((cs) => cs !== citySlug)
    .map((cs) => cityPracticeItem(cs, cps));
  // Week 18: matter slugs (cheque-bounce, RERA, company-registration) are not
  // practice-area slugs — resolve to the parent pillar for practice/guide/term links.
  const pillarSlug = cityMatterParentPractice[cps] ?? cps;
  const pillar = practiceItem(pillarSlug);
  const guides = articles
    .filter((a) => a.relatedPracticeAreaSlugs.includes(pillarSlug))
    .map((a) => articleItem(a.slug));
  const gloss = glossaryTerms
    .filter((t) => t.relatedPracticeAreaSlugs.includes(pillarSlug))
    .map((t) => termItem(t.slug));

  return groups(
    group(`Other lawyers in ${c.name}`, otherVerticals, 4),
    group(`${cityPracticeLabels[cps].title}s in other cities`, sameInOtherCities, 6),
    group("Understand this area", [pillar, ...guides], 4),
    group("Key terms", gloss, 5)
  );
}

/** /courts/[slug] — High Courts, tribunal groups, and district-court pages.
 *  These were the largest orphan set (reachable only from the sitemap); this
 *  meshes them to city hubs, practice pillars, sibling courts, and guides. */
export function relatedGroupsForCourt(slug: string): RelatedLinksGroup[] {
  const hc = highCourts.find((c) => c.slug === slug);
  const tr = tribunalGroups.find((t) => t.slug === slug);
  const dc = districtCourts.find((d) => d.slug === slug);
  if (!hc && !tr && !dc) return [];

  // Cities whose High Court is this court → their city hubs (HC pages only).
  const cityLinks = hc
    ? cities.filter((c) => c.highCourt?.slug === slug).map((c) => cityItem(c.slug))
    : [];

  // The five highest-volume practice pillars.
  const practiceLinks = cityPracticeSlugs.map((p) => practiceItem(p));

  // Sibling courts of the same type.
  const otherCourts: (RelatedLinkItem | null)[] = hc
    ? highCourts.filter((c) => c.slug !== slug).slice(0, 8).map((c) => ({ label: c.name, href: `/courts/${c.slug}` }))
    : tr
      ? tribunalGroups.filter((t) => t.slug !== slug).map((t) => ({ label: t.title, href: `/courts/${t.slug}` }))
      : districtCourts.filter((d) => d.slug !== slug).slice(0, 8).map((d) => ({ label: `${d.state} District Courts`, href: `/courts/${d.slug}` }));

  // A few general procedure guides.
  const guides = articles
    .filter((a) => a.relatedPracticeAreaSlugs.some((s) => (cityPracticeSlugs as readonly string[]).includes(s)))
    .slice(0, 4)
    .map((a) => articleItem(a.slug));

  return groups(
    group("Lawyers in cities under this court", cityLinks, 6),
    group("Practice areas", practiceLinks, 5),
    group("Other courts", otherCourts, 8),
    group("Related guides", guides, 4)
  );
}
