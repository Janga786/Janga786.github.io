import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import { Chip } from "@/components/shared/Chip";
import { StatusBadge } from "@/components/shared/StatusBadge";

const isEditorNote = (s: string) => s.trim().startsWith("[");

/** Renders content strings; editor-note strings ("[...]") get a muted hint treatment. */
function NoteAware({ text }: { text: string }) {
  if (!isEditorNote(text)) return <>{text}</>;
  return (
    <span className="italic text-faint">
      {text}
      <span className="ml-2 inline-flex items-center rounded-full border border-dashed border-line-strong px-1.5 py-px align-middle font-mono text-[10px] not-italic tracking-wide text-faint">
        to fill
      </span>
    </span>
  );
}

interface ProjectHeroProps {
  project: Project;
  categoryLabel: string;
}

export function ProjectHero({ project, categoryLabel }: ProjectHeroProps) {
  const ctaArtifacts = project.artifacts
    .filter((artifact) => artifact.href)
    .slice(0, 2);

  return (
    <header className="space-y-6">
      <Link
        href="/projects/"
        className="inline-flex items-center gap-2 py-1 font-mono text-xs text-muted transition-colors hover:text-foreground"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        All projects
      </Link>

      <div className="flex flex-wrap items-center gap-2">
        <Chip>{categoryLabel}</Chip>
        <StatusBadge status={project.status} />
        {project.dateLabel ? (
          <span className="font-mono text-[11px] text-faint">
            {project.dateLabel}
          </span>
        ) : null}
      </div>

      <div className="space-y-4">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-muted">
          {project.oneLiner}
        </p>
      </div>

      <p className="font-mono text-xs leading-relaxed text-muted">
        <span className="text-faint">Role — </span>
        <NoteAware text={project.role} />
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Chip key={item}>
            {isEditorNote(item) ? <span className="italic">{item}</span> : item}
          </Chip>
        ))}
      </div>

      {ctaArtifacts.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {ctaArtifacts.map((artifact) => (
            <a
              key={artifact.label}
              href={artifact.href}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/85"
              {...(artifact.href?.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {artifact.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}
