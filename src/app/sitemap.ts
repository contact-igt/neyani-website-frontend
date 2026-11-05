import type { MetadataRoute } from "next";
import { hospital } from "@/content/hospital";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://neyanihospital.in";
  const now = new Date();

  // Core static pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/doctors`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // All 9 individual service pages
  const serviceSlugs = [
    "cataract",
    "cornea",
    "general",
    "glaucoma",
    "oculoplasty",
    "pediatric",
    "pterygium",
    "retina",
    "squint",
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: slug === "cataract" || slug === "glaucoma" || slug === "retina" ? 0.9 : 0.8,
  }));

  // Doctor profile pages
  const doctorPages: MetadataRoute.Sitemap = hospital.doctors.map((doctor) => ({
    url: `${baseUrl}/doctors/${doctor.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...corePages, ...servicePages, ...doctorPages];
}

