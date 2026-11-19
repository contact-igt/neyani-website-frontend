import type { MetadataRoute } from "next";
import { hospital } from "@/content/hospital";
import { absoluteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Core static pages
  const corePages: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/services"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/doctors"),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: absoluteUrl("/about"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/contact"),
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
    url: absoluteUrl(`/services/${slug}`),
    changeFrequency: "weekly",
    priority: slug === "cataract" || slug === "glaucoma" || slug === "retina" ? 0.9 : 0.8,
  }));

  // Doctor profile pages
  const doctorPages: MetadataRoute.Sitemap = hospital.doctors.map((doctor) => ({
    url: absoluteUrl(`/doctors/${doctor.id}`),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...corePages, ...servicePages, ...doctorPages];
}

