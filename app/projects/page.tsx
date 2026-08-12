import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { allProjects, categories } from "@/content/projects";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectsExplorer } from "@/components/project/ProjectsExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description:
    "Evidence-backed case studies in robot learning, autonomy, control, perception, systems integration, and embedded hardware.",
  path: "/projects/",
});

export default function ProjectsPage() {
  return (
    <SectionShell>
      <SectionHeading
        as="h1"
        eyebrow="Selected Work"
        title="Projects"
        lede="Each case study separates completed results, active work, personal contribution, upstream foundations, and limitations."
      />
      <h2 className="sr-only">All projects</h2>
      <ProjectsExplorer projects={allProjects} categories={categories} />
    </SectionShell>
  );
}
