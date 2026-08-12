import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { featuredProjects, getCategory } from "@/content/projects";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { Chip } from "@/components/shared/Chip";
import { MotionReveal } from "@/components/shared/MotionReveal";

function ResearchCard({ project, dominant = false }: { project: Project; dominant?: boolean }) {
  const categoryLabel = getCategory(project.category)?.label ?? project.category;
  const media =
    project.media.find((item) => item.kind === "image" && item.src) ??
    project.media.find((item) => item.src);
  const imageSrc = media?.kind === "video" ? media.poster : media?.src;

  return (
    <Link
      href={`/projects/${project.slug}/`}
      data-glow
      className={`group panel panel-hover grid h-full overflow-hidden ${
        dominant ? "lg:grid-cols-[1.15fr_0.85fr]" : ""
      }`}
    >
      {imageSrc ? (
        <div className={dominant ? "min-h-64 lg:min-h-80" : "aspect-[16/9]"}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={media?.alt ?? ""}
            loading={dominant ? "eager" : "lazy"}
            className="h-full w-full object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Chip>{categoryLabel}</Chip>
          <StatusBadge status={project.status} />
        </div>
        <div>
          <h3 className={dominant ? "text-2xl font-medium text-foreground" : "text-lg font-medium text-foreground"}>
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            <span className="font-medium text-foreground">Question: </span>
            {project.problem}
          </p>
        </div>
        <ul className="flex flex-wrap gap-2" aria-label="Research themes">
          {project.tags.slice(0, 4).map((tag) => (
            <li key={tag}>
              <Chip>{tag}</Chip>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="text-sm font-medium text-accent">Read case study</span>
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="shrink-0 text-faint transition-colors group-hover:text-accent"
          />
        </div>
      </div>
    </Link>
  );
}

/** Homepage case-study grid, sourced from featuredProjects. */
export function FeaturedProjects() {
  return (
    <SectionShell id="research">
      <SectionHeading
        eyebrow="Selected Research"
        title="Questions, experiments, and evidence"
        lede="Three research efforts are foregrounded here. Each case study separates the research question, personal contribution, upstream systems, completed results, failures, and limitations."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <MotionReveal
            key={project.slug}
            delay={(i % 2) * 0.05}
            className={i === 0 ? "lg:col-span-2" : undefined}
          >
            <ResearchCard project={project} dominant={i === 0} />
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
