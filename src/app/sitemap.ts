import type { MetadataRoute } from "next";
import { allServices } from "@/data/services";
import { practiceAreas } from "@/data/practice-areas";
import { highCourts, tribunalGroups, districtCourts } from "@/data/courts";
import { platformFeatures } from "@/data/features";
import { cities, cityPracticeSlugs } from "@/data/cities";
import { SITE_URL } from "@/lib/site";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  // Use stable dates — NOT new Date(). Changing lastModified on every deploy
  // wastes crawl budget and reduces Google's trust in your sitemap signals.
  // Update these dates only when you actually change the page content.
  const corePageDate = "2026-04-05";       // Last major content update
  const detailPageDate = "2026-04-01";     // Last detail page update
  const legalPageDate = "2025-12-01";      // Legal pages rarely change

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
  ];

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

  // High Court pages — strong regional intent
  const highCourtPages: MetadataRoute.Sitemap = highCourts.map((court) => ({
    url: `${BASE_URL}/courts/${court.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Tribunal pages
  const tribunalPages: MetadataRoute.Sitemap = tribunalGroups.map((group) => ({
    url: `${BASE_URL}/courts/${group.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // District Court pages — massive long-tail keyword coverage
  const districtCourtPages: MetadataRoute.Sitemap = districtCourts.map((dc) => ({
    url: `${BASE_URL}/courts/${dc.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Feature pages
  const featurePages: MetadataRoute.Sitemap = platformFeatures.map((feature) => ({
    url: `${BASE_URL}/features/${feature.slug}`,
    lastModified: detailPageDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Week 5: City × practice-area landing pages — high local-intent traffic
  const cityHubPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/lawyers/${city.slug}`,
    lastModified: corePageDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const cityPracticePages: MetadataRoute.Sitemap = cities.flatMap((city) =>
    cityPracticeSlugs.map((practice) => ({
      url: `${BASE_URL}/lawyers/${city.slug}/${practice}`,
      lastModified: corePageDate,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  );

  return [
    ...staticPages,
    ...servicePages,
    ...practiceAreaPages,
    ...highCourtPages,
    ...tribunalPages,
    ...districtCourtPages,
    ...featurePages,
    ...cityHubPages,
    ...cityPracticePages,
  ];
}
