const STROKE = "rgba(148, 163, 184, 0.4)";
const ACCENT = "#7aa5ff";

function Node({ name, sub }: { name: string; sub?: string }) {
  return (
    <div className="rounded-lg border border-line bg-card-2 px-3 py-2">
      <p className="text-sm text-foreground">{name}</p>
      {sub ? <p className="mt-0.5 font-mono text-[10px] text-faint">{sub}</p> : null}
    </div>
  );
}

function DownArrow({ delay = 0 }: { delay?: number }) {
  return (
    <svg aria-hidden className="mx-auto my-1 block" width="12" height="18" viewBox="0 0 12 18">
      <line x1="6" y1="0" x2="6" y2="12" stroke={STROKE} strokeWidth="1.5" />
      <polygon points="2,11 10,11 6,17" fill={STROKE} />
      <circle
        className="flow-dot"
        cx="6"
        cy="2"
        r="1.8"
        fill={ACCENT}
        style={{ animationDelay: `${delay}s` }}
      />
    </svg>
  );
}

/** The research loop shared by the flagship projects. */
export function SystemDiagram() {
  return (
    <div className="w-full max-w-full">
      <div data-glow className="panel p-5">
        <p className="meta-label mb-4">Research loop — model to evidence</p>

        <div className="flex flex-col">
          <Node name="Question + system boundary" sub="what changes · what stays fixed" />
          <DownArrow delay={0} />
          <Node name="Policy, controller, or algorithm" sub="NaVILA · BC / PPO · kinematics · ICP" />
          <DownArrow delay={0.8} />
          <Node name="Embodiment + environment" sub="K1 · Panda / G1 · hexapod · industrial arms" />
          <DownArrow delay={1.6} />
          <Node name="Evaluation + artifacts" sub="episodes · tests · logs · failure taxonomy" />
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-line px-3 py-2">
          <svg aria-hidden className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M11 2v5a3 3 0 0 1-3 3H4" stroke={STROKE} strokeWidth="1.5" />
            <polygon points="5.5,6.5 5.5,13.5 1,10" fill={STROKE} />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            failure analysis drives the next experiment
          </span>
          <span aria-hidden className="soft-pulse ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
        </div>
      </div>

      <p className="mt-2 font-mono text-[11px] leading-relaxed text-faint">
        Every case study separates simulation, hardware tests, and completed closed-loop evidence.
      </p>
    </div>
  );
}
