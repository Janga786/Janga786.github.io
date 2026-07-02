import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { pageMetadata } from "@/lib/seo";
import { HeroPanel } from "@/components/sections/HeroPanel";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { CapabilityGrid } from "@/components/sections/CapabilityGrid";
import { GradStudySection } from "@/components/sections/GradStudySection";
import { TrajectorySection } from "@/components/sections/TrajectorySection";
import { WritingPreview } from "@/components/sections/WritingPreview";
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
      <CredibilityStrip />
      <FeaturedProjects />
      <CapabilityGrid />
      <GradStudySection />
      <TrajectorySection />
      <WritingPreview />
      <ContactPanel />
    </>
  );
}
