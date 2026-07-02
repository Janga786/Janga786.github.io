import type { ProjectStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const styles: Record<ProjectStatus, string> = {
  featured: "border-accent/40 bg-accent-soft text-accent",
  selected: "border-line-strong bg-card-2 text-muted",
  placeholder: "border-dashed border-line-strong bg-transparent text-faint",
};

const labels: Record<ProjectStatus, string> = {
  featured: "Featured",
  selected: "Selected work",
  placeholder: "Project placeholder",
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
