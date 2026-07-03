import {
  Bot,
  CircuitBoard,
  Gauge,
  Network,
  Rocket,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { profile } from "@/content/profile";
import { MotionReveal } from "@/components/shared/MotionReveal";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Network,
  Gauge,
  Workflow,
  CircuitBoard,
  Rocket,
};

/** Compact evidence band directly under the hero — signals, not trophies. */
export function CredibilityStrip() {
  return (
    <section aria-label="Credibility signals" className="border-y border-line bg-surface">
      <ul className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:grid-cols-6 lg:px-8">
        {profile.credibilitySignals.map((signal, i) => {
          const Icon = iconMap[signal.icon] ?? Bot;
          return (
            <li key={signal.label} data-glow className="-m-2 rounded-lg p-2">
              <MotionReveal delay={i * 0.05}>
                <Icon size={18} aria-hidden="true" className="text-accent" />
                <p className="mt-3 text-sm font-medium text-foreground">
                  {signal.label}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted">
                  {signal.detail}
                </p>
              </MotionReveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
