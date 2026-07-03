import { timeline } from "@/content/timeline";
import { cn } from "@/lib/utils";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { MotionReveal } from "@/components/shared/MotionReveal";

/** Vertical builder-arc timeline from content/timeline. */
export function TrajectorySection() {
  return (
    <SectionShell>
      <SectionHeading eyebrow="Trajectory" title="Builder arc" />
      <ol className="relative max-w-2xl">
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[4.5px] top-2 border-l border-line"
        />
        {timeline.map((item, i) => (
          <li key={item.title} className="relative pb-10 pl-8 last:pb-0">
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-0 top-1.5 size-2.5 rounded-full",
                item.isPlaceholder
                  ? "bg-faint"
                  : "bg-accent ring-4 ring-accent-soft",
                item.dateLabel.toLowerCase().includes("present") &&
                  "ping-ring",
              )}
            />
            <MotionReveal delay={Math.min(i * 0.04, 0.2)}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                {item.dateLabel}
              </p>
              <h3 className="mt-1.5 font-medium text-foreground">
                {item.title}
              </h3>
              <p
                className={cn(
                  "mt-0.5 text-sm",
                  item.isPlaceholder ? "text-muted" : "text-accent-2",
                )}
              >
                {item.subtitle}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </MotionReveal>
          </li>
        ))}
      </ol>
    </SectionShell>
  );
}
