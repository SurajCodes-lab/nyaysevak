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
import { cities, cityPracticeSlugs, cityPracticeLabels, type CityPracticeSlug } from "./cities";
import { cityPracticeContent } from "./city-practice-content";
import { practiceAreaToServices, practiceAreaToCityPracticeSlug } from "./practice-area-cross-links";

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

  return groups(
    group("Recommended services", services, 3),
    group("Key legal terms", gloss, 6),
    group("In-depth guides", guides, 4),
    group("Find lawyers by city", byCity, 6)
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

  return groups(
    group("Related guides", related, 4),
    group("Related practice areas", practices, 4),
    group("Talk to a lawyer", services, 3),
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

  return groups(
    group("Related terms", sameCat, 6),
    group("Practice areas", practices, 4),
    group("Guides that use this term", guides, 4)
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
    group(`Lawyers in ${c.name} by specialisation`, verticals, 5),
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
  const pillar = practiceItem(cps); // city-practice slugs ARE practice-area slugs
  const guides = articles
    .filter((a) => a.relatedPracticeAreaSlugs.includes(cps))
    .map((a) => articleItem(a.slug));
  const gloss = glossaryTerms
    .filter((t) => t.relatedPracticeAreaSlugs.includes(cps))
    .map((t) => termItem(t.slug));

  return groups(
    group(`Other lawyers in ${c.name}`, otherVerticals, 4),
    group(`${cityPracticeLabels[cps].title}s in other cities`, sameInOtherCities, 6),
    group("Understand this area", [pillar, ...guides], 4),
    group("Key terms", gloss, 5)
  );
}
