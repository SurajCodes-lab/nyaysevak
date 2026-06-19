import type { MetadataRoute } from "next";
import { allServices } from "@/data/services";
import { practiceAreas } from "@/data/practice-areas";
import { highCourts, tribunalGroups, districtCourts } from "@/data/courts";
import { platformFeatures } from "@/data/features";
import { cities, cityPracticeSlugs } from "@/data/cities";
import { articles } from "@/data/insights";
import { authors } from "@/data/authors";
import { glossaryTerms } from "@/data/legal-glossary";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  // Use stable dates — NOT new Date(). Changing lastModified on every deploy
  // wastes crawl budget and reduces Google's trust in your sitemap signals.
  // Update these dates only when you actually change the page content.
  const corePageDate = "2026-04-05";       // Last major content update
  const detailPageDate = "2026-04-01";     // Last detail page update
  const legalPageDate = "2025-12-01";      // Legal pages rarely change
  const toolsPageDate = "2026-06-09";      // Legal-tools cluster (calculators) launch
  const glossaryPageDate = "2026-06-09";   // Glossary split into individual pages

  // Static pages — boosted priorities for key conversion pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: corePageDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: corePageDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/practice-areas`, lastModified: corePageDate, changeFrequency: "daily", priority: 1.0 },
    { url: `${BASE_URL}/courts`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/contact`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/features`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/platform`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: legalPageDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: legalPageDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: legalPageDate, changeFrequency: "yearly", priority: 0.3 },
    // Week 5: Lawyers-by-city hub
    { url: `${BASE_URL}/lawyers`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.9 },
    // Week 6: Insights, Glossary, Authors hubs
    { url: `${BASE_URL}/insights`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/legal-glossary`, lastModified: corePageDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/authors`, lastModified: corePageDate, changeFrequency: "monthly", priority: 0.7 },
    // Week 8: intent-rendered landing pages targeting head queries
    { url: `${BASE_URL}/best-property-lawyers-in-india`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/best-divorce-lawyers-in-india`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/best-criminal-lawyers-in-india`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/free-legal-consultation`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.9 },
    // 2026 — Legal Tools hub (individual calculators generated below from the registry)
    { url: `${BASE_URL}/legal-tools`, lastModified: toolsPageDate, changeFrequency: "monthly", priority: 0.9 },
    // Legal industry statistics — AEO cite-magnet
    { url: `${BASE_URL}/legal-industry-statistics-india`, lastModified: corePageDate, changeFrequency: "monthly", priority: 0.7 },
    // HTML site index — internal-link hub that funnels crawl equity to every leaf
    { url: `${BASE_URL}/site-index`, lastModified: corePageDate, changeFrequency: "weekly", priority: 0.5 },
  ];

  // Individual glossary term pages — definitional long-tail + AEO ("what is X")
  const glossaryPages: MetadataRoute.Sitemap = glossaryTerms.map((term) => ({
    url: `${BASE_URL}/legal-glossary/${term.slug}`,
    lastModified: glossaryPageDate,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  // Service pages — boosted priority, these are high-conversion pages
  const servicePages: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Practice area pages — highest priority detail pages (target high-volume keywords)
  const practiceAreaPages: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${BASE_URL}/practice-areas/${area.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // High Court pages — strong regional intent. Re-tiered to 0.6: real but
  // secondary to money/hub pages, so crawl budget triages toward those first.
  const highCourtPages: MetadataRoute.Sitemap = highCourts.map((court) => ({
    url: `${BASE_URL}/courts/${court.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // Tribunal pages
  const tribunalPages: MetadataRoute.Sitemap = tribunalGroups.map((group) => ({
    url: `${BASE_URL}/courts/${group.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  // District Court pages — re-tiered to 0.5 (thinnest programmatic pages; we
  // don't want them competing for crawl budget with money pages).
  const districtCourtPages: MetadataRoute.Sitemap = districtCourts.map((dc) => ({
    url: `${BASE_URL}/courts/${dc.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // Feature pages — supporting, low priority
  const featurePages: MetadataRoute.Sitemap = platformFeatures.map((feature) => ({
    url: `${BASE_URL}/features/${feature.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  // Week 5: City hubs — local intent
  const cityHubPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/lawyers/${city.slug}`,
    lastModified: corePageDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // City × practice-area landing pages — high local-intent long-tail
  const cityPracticePages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    cityPracticeSlugs.map((practice) => ({
      url: `${BASE_URL}/lawyers/${city.slug}/${practice}`,
      lastModified: corePageDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  // Week 6: Insight articles (long-form pillar content)
  const insightPages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/insights/${a.slug}`,
    lastModified: a.dateModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Week 6: Author profile pages — E-E-A-T signal, supporting priority
  const authorPages: MetadataRoute.Sitemap = authors.map((a) => ({
    url: `${BASE_URL}/authors/${a.slug}`,
    lastModified: corePageDate,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [
    ...staticPages,
    ...glossaryPages,
    ...servicePages,
    ...practiceAreaPages,
    ...highCourtPages,
    ...tribunalPages,
    ...districtCourtPages,
    ...featurePages,
    ...cityHubPages,
    ...cityPracticePages,
    ...insightPages,
    ...authorPages,
  ];
}
