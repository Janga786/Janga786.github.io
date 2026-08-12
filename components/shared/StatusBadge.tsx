import type { ProjectStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  "active-research": "border-accent/40 bg-accent-soft text-accent",
  "completed-study": "border-accent-2/40 bg-accent-2/10 text-accent-2",
  "fielded-system": "border-amber-400/35 bg-amber-400/10 text-amber-200",
  "validated-library": "border-violet-400/35 bg-violet-400/10 text-violet-200",
  selected: "border-line-strong bg-card-2 text-muted",
};

const labels: Record<ProjectStatus, string> = {
  "active-research": "Active research",
  "completed-study": "Completed study",
  "fielded-system": "Fielded system",
  "validated-library": "Validated library",
  selected: "Selected work",
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em]",
        styles[status],
        className,
      )}
    >
      {labels[status]}
    </span>
  );
}
