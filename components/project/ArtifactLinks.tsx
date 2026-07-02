import {
  FileText,
  GitBranch,
  Play,
  Presentation,
  ScrollText,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { ArtifactKind, ArtifactLink } from "@/lib/types";

const icons: Record<ArtifactKind, LucideIcon> = {
  report: FileText,
  demo: Play,
  video: Video,
  repo: GitBranch,
  slides: Presentation,
  diagram: Workflow,
  logs: ScrollText,
};

/**
 * Artifact list. Items without an href render as unpublished slots —
 * the same shape, clearly marked, never a dead link.
 */
export function ArtifactLinks({ artifacts }: { artifacts: ArtifactLink[] }) {
  if (artifacts.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-3">
      {artifacts.map((artifact) => {
        const Icon = icons[artifact.kind];
        return (
          <li key={`${artifact.kind}-${artifact.label}`}>
            {artifact.href ? (
              <a
                href={artifact.href}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-line-strong"
                {...(artifact.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Icon size={16} aria-hidden="true" className="text-muted" />
                {artifact.label}
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-lg border border-dashed border-line px-4 py-2 text-sm text-faint">
                <Icon size={16} aria-hidden="true" />
                {artifact.label}
                <span className="rounded-full border border-line px-2 py-px font-mono text-[10px] tracking-wide">
                  not yet published
                </span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
