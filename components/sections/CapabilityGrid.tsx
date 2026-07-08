import {
  Bot,
  CircuitBoard,
  Database,
  Gauge,
  Layers,
  Network,
  Rocket,
  ScanEye,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { profile } from "@/content/profile";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MotionReveal } from "@/components/shared/MotionReveal";

const iconMap: Record<string, LucideIcon> = {
  Bot,
  Network,
  Gauge,
  Workflow,
  CircuitBoard,
  Rocket,
  Layers,
  ScanEye,
  Database,
};

/** The technical lanes from profile.capabilities. */
export function CapabilityGrid() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Technical Focus"
        title="Lanes of work"
        lede="Eight lanes, one through-line: models that have to survive real hardware."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {profile.capabilities.map((capability, i) => {
          const Icon = iconMap[capability.icon] ?? Bot;
          return (
            <MotionReveal key={capability.title} delay={(i % 3) * 0.05}>
              <div data-glow className="panel panel-hover h-full p-5">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-medium text-foreground">
                  {capability.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {capability.description}
                </p>
              </div>
            </MotionReveal>
          );
        })}
      </div>
    </SectionShell>
  );
}
