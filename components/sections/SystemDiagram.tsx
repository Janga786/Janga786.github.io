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

/**
 * Vertical arrow between nodes, with a packet dot traveling down it.
 * Dots are staggered per hop so the loop reads as sequential flow;
 * they vanish entirely under prefers-reduced-motion (globals.css).
 */
function DownArrow({ delay = 0 }: { delay?: number }) {
  return (
    <svg
      aria-hidden="true"
      className="mx-auto my-1 block"
      width="12"
      height="18"
      viewBox="0 0 12 18"
    >
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

/**
 * Pure CSS/SVG schematic of the real three-machine VLA deployment.
 * Decorative structure; the meaningful content is in the node labels.
 */
export function SystemDiagram() {
  return (
    <div className="w-full max-w-full">
      <div data-glow className="panel p-5">
        <p className="meta-label mb-4">Deployment topology — schematic</p>

        <div className="flex flex-col">
          <Node name="Robot camera stream" sub="Booster K1" />
          <DownArrow delay={0} />
          <Node name="Relay / control machine" />
          <DownArrow delay={0.8} />
          <Node name="Model inference" sub="RTX 5090 · 8B VLA" />
          <DownArrow delay={1.6} />
          <Node name="Velocity commands" sub="robot SDK" />
        </div>

        {/* Loop-back: telemetry path returning up the stack. */}
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-dashed border-line px-3 py-2">
          <svg
            aria-hidden="true"
            className="shrink-0"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M11 2v5a3 3 0 0 1-3 3H4"
              stroke={STROKE}
              strokeWidth="1.5"
            />
            <polygon points="5.5,6.5 5.5,13.5 1,10" fill={STROKE} />
          </svg>
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            telemetry &amp; evaluation
          </span>
          <span
            aria-hidden="true"
            className="soft-pulse ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
          />
        </div>

        {/* Simulation counterpart, joined by a dashed sim-to-real link. */}
        <div className="mt-3 flex items-center gap-3">
          <div className="shrink-0 rounded-lg border border-dashed border-line px-3 py-2">
            <p className="text-sm text-foreground">Simulation</p>
            <p className="mt-0.5 font-mono text-[10px] text-faint">
              Isaac Sim / Isaac Lab
            </p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col items-center gap-1">
            <span className="font-mono text-[10px] text-faint">sim-to-real</span>
            <svg
              aria-hidden="true"
              className="block w-full"
              height="8"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <line
                className="dash-march"
                x1="0"
                y1="4"
                x2="92"
                y2="4"
                stroke={STROKE}
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <polygon points="92,0 100,4 92,8" fill={STROKE} />
            </svg>
          </div>
        </div>
      </div>

      <p className="mt-2 font-mono text-[11px] leading-relaxed text-faint">
        Schematic of the real three-machine deployment — full diagram pending in
        the project writeup.
      </p>
    </div>
  );
}
