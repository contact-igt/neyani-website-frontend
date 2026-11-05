import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      // Explicitly allow leading AI search engines
      {
        userAgent: [
          "Google-Extended",
          "GPTBot",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://neyanihospital.in/sitemap.xml",
    host: "https://neyanihospital.in",
  };
}

