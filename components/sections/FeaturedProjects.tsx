import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { featuredProjects, getCategory } from "@/content/projects";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Chip } from "@/components/shared/Chip";
import { MotionReveal } from "@/components/shared/MotionReveal";

/** Editor-note convention: strings starting with "[" are fill-in prompts. */
const isEditorNote = (s: string) => s.trim().startsWith("[");

function ProjectCard({ project }: { project: Project }) {
  const categoryLabel = getCategory(project.category)?.label ?? project.category;

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group panel panel-hover flex h-full flex-col gap-3 p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Chip>{categoryLabel}</Chip>
        <StatusBadge status={project.status} />
      </div>
      <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
      {isEditorNote(project.oneLiner) ? (
        <p className="text-sm italic leading-relaxed text-faint">
          <span className="mr-2 inline-flex items-center rounded border border-line px-1.5 py-0.5 font-mono text-[10px] not-italic uppercase tracking-wide text-faint">
            to fill
          </span>
          {project.oneLiner}
        </p>
      ) : (
        <p className="text-sm leading-relaxed text-muted">{project.oneLiner}</p>
      )}
      <div className="mt-auto flex items-center justify-between gap-3 pt-1">
        <span className="font-mono text-[11px] text-faint">
          {project.tags.slice(0, 3).join(" · ")}
        </span>
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="shrink-0 text-faint transition-colors group-hover:text-accent"
        />
      </div>
    </Link>
  );
}

/** Homepage case-study grid, sourced from featuredProjects. */
export function FeaturedProjects() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured projects"
        lede="Case studies over screenshots — each entry is structured around evidence."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <MotionReveal key={project.slug} delay={(i % 2) * 0.05}>
            <ProjectCard project={project} />
          </MotionReveal>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/projects/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          All projects
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </SectionShell>
  );
}
