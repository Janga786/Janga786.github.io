import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

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

interface ArchitectureCardProps {
  summary: string;
  nodes: string[];
}

/** System-architecture panel: summary plus an ordered node flow. */
export function ArchitectureCard({ summary, nodes }: ArchitectureCardProps) {
  const nodeClass =
    "rounded-lg border border-line bg-card-2 px-3 py-2 font-mono text-xs leading-relaxed text-muted";

  return (
    <div className="panel p-6">
      <p className="meta-label">System architecture</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        <NoteAware text={summary} />
      </p>

      {/* md+ : horizontal flow */}
      <ol className="mt-6 hidden flex-wrap items-center gap-2 md:flex">
        {nodes.map((node, i) => (
          <Fragment key={node}>
            <li className={nodeClass}>{node}</li>
            {i < nodes.length - 1 ? (
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="shrink-0 text-faint"
              />
            ) : null}
          </Fragment>
        ))}
      </ol>

      {/* mobile : vertical flow */}
      <ol className="mt-6 flex flex-col items-start gap-2 md:hidden">
        {nodes.map((node, i) => (
          <Fragment key={node}>
            <li className={nodeClass}>{node}</li>
            {i < nodes.length - 1 ? (
              <ArrowDown
                size={16}
                aria-hidden="true"
                className="ml-3 shrink-0 text-faint"
              />
            ) : null}
          </Fragment>
        ))}
      </ol>
    </div>
  );
}
