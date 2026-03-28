import type { MetadataRoute } from "next";
import { allServices } from "@/data/services";
import { practiceAreas } from "@/data/practice-areas";
import { highCourts, tribunalGroups, districtCourts } from "@/data/courts";
import { platformFeatures } from "@/data/features";

const BASE_URL = "https://nyaysevak.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/practice-areas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/courts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/platform`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Practice area pages
  const practiceAreaPages: MetadataRoute.Sitemap = practiceAreas.map((area) => ({
    url: `${BASE_URL}/practice-areas/${area.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // High Court pages
  const highCourtPages: MetadataRoute.Sitemap = highCourts.map((court) => ({
    url: `${BASE_URL}/courts/${court.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // Tribunal pages
  const tribunalPages: MetadataRoute.Sitemap = tribunalGroups.map((group) => ({
    url: `${BASE_URL}/courts/${group.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  // District Court pages
  const districtCourtPages: MetadataRoute.Sitemap = districtCourts.map((dc) => ({
    url: `${BASE_URL}/courts/${dc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  // Feature pages
  const featurePages: MetadataRoute.Sitemap = platformFeatures.map((feature) => ({
    url: `${BASE_URL}/features/${feature.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...practiceAreaPages,
    ...highCourtPages,
    ...tribunalPages,
    ...districtCourtPages,
    ...featurePages,
  ];
}
