import Link from "next/link";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ProjectPagerProps {
  prev?: Project;
  next?: Project;
}

function PagerCell({
  project,
  direction,
}: {
  project?: Project;
  direction: "prev" | "next";
}) {
  if (!project) return <div aria-hidden="true" />;

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className={cn(
        "group flex min-h-11 flex-col justify-center gap-1 py-2",
        direction === "next" && "items-end text-right",
      )}
    >
      <span className="font-mono text-[11px] tracking-wide text-faint">
        {direction === "prev" ? "← Previous" : "Next →"}
      </span>
      <span className="text-sm font-medium text-foreground transition-colors group-hover:text-accent">
        {project.shortTitle ?? project.title}
      </span>
    </Link>
  );
}

/** Prev/next navigation between case studies. */
export function ProjectPager({ prev, next }: ProjectPagerProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Adjacent projects"
      className="grid grid-cols-2 gap-4 border-t border-line pt-6"
    >
      <PagerCell project={prev} direction="prev" />
      <PagerCell project={next} direction="next" />
    </nav>
  );
}
