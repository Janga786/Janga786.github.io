import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Chip } from "@/components/shared/Chip";
import { StatusBadge } from "@/components/shared/StatusBadge";

interface ProjectCardProps {
  project: Project;
  categoryLabel: string;
}

/** Reusable project card linking to the case-study detail page. */
export function ProjectCard({ project, categoryLabel }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="panel panel-hover group flex h-full flex-col gap-4 p-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Chip>{categoryLabel}</Chip>
        <StatusBadge status={project.status} />
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.oneLiner}</p>
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 pt-2">
        <p className="font-mono text-[11px] text-faint">
          {project.tags.slice(0, 3).join(" · ")}
        </p>
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="shrink-0 text-faint transition-colors group-hover:text-accent"
        />
      </div>
    </Link>
  );
}
