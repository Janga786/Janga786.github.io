import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";
import { HeroPanel } from "@/components/sections/HeroPanel";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { ResearchInterests } from "@/components/sections/ResearchInterests";
import { SelectedSystems } from "@/components/sections/SelectedSystems";
import { WritingPreview } from "@/components/sections/WritingPreview";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactPanel } from "@/components/sections/ContactPanel";

/* No title — the default title from the root layout applies on the homepage. */
export const metadata: Metadata = pageMetadata({
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroPanel />
      <FeaturedProjects />
      <ResearchInterests />
      <SelectedSystems />
      <WritingPreview />
      <ExperienceSection />
      <AboutPreview />
      <ContactPanel />
    </>
  );
}
