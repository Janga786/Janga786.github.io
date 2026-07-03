import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { allProjects, categories } from "@/content/projects";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectsExplorer } from "@/components/project/ProjectsExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Case studies in embodied AI, RL and simulation, perception, systems integration, embedded hardware, and AI products — structured around evidence.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <SectionShell>
      <SectionHeading
        as="h1"
        eyebrow="Selected + Structured Work"
        title="Projects"
        lede="Each entry is a case study built around evidence — architecture, measurements, and honest limitations. Slots reserved for future work are labeled as placeholders rather than dressed up as finished projects."
      />
      <h2 className="sr-only">All projects</h2>
      <ProjectsExplorer projects={allProjects} categories={categories} />
    </SectionShell>
  );
}
