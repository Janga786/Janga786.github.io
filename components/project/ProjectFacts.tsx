import type { Project } from "@/lib/types";

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

/** "Key facts" strip: problem, system type, stakes, and team context at a glance. */
export function ProjectFacts({ project }: { project: Project }) {
  const facts = [
    { label: "Problem", value: project.problem },
    { label: "System type", value: project.systemType },
    { label: "Why it matters", value: project.whyItMatters },
    { label: "Team context", value: project.teamContext },
  ];

  return (
    <dl className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((fact) => (
        <div key={fact.label} className="bg-card p-4">
          <dt className="meta-label">{fact.label}</dt>
          <dd className="mt-2 text-sm leading-relaxed text-muted">
            <NoteAware text={fact.value} />
          </dd>
        </div>
      ))}
    </dl>
  );
}
