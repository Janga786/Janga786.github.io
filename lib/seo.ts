import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteConfig.siteUrl).toString();
}

interface PageMeta {
  title?: string;
  description: string;
  path: string;
}

/** Builds consistent per-page metadata (title template applied in layout). */
export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: title ?? siteConfig.title,
      description,
      url,
      siteName: siteConfig.title,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.title,
      description,
    },
  };
}
