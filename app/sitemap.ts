import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { siteConfig } from "@/content/site-config";
import { allProjects } from "@/content/projects";

// Required for `output: "export"` — generated at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/projects/"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/about/"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  if (siteConfig.enableWritingPage) {
    entries.push({
      url: absoluteUrl("/writing/"),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  if (siteConfig.showResumePage) {
    entries.push({
      url: absoluteUrl("/resume/"),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const project of allProjects) {
    entries.push({
      url: absoluteUrl(`/projects/${project.slug}/`),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
