import type { EvidenceSlot, MetricPlaceholder } from "@/lib/types";
import { Chip } from "@/components/shared/Chip";

interface EvidenceGridProps {
  evidence: EvidenceSlot[];
  metrics: MetricPlaceholder[];
}

/**
 * Evidence slots + metric tiles. Pending states are rendered as deliberate
 * structure — labeled slots waiting for artifacts, never faked values.
 */
export function EvidenceGrid({ evidence, metrics }: EvidenceGridProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="meta-label">Evidence</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {evidence.map((slot) => (
            <div key={slot.label} className="panel p-4">
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-foreground">
                  {slot.label}
                </p>
                {slot.status === "available" ? (
                  <Chip tone="accent" className="shrink-0">
                    attached
                  </Chip>
                ) : (
                  <Chip className="shrink-0 border-dashed bg-transparent text-faint">
                    pending
                  </Chip>
                )}
              </div>
              {slot.status === "available" && slot.value ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {slot.value}
                </p>
              ) : (
                <p className="mt-2 text-xs italic leading-relaxed text-faint">
                  {slot.hint}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="meta-label">Metrics</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="panel p-4">
              <p className="meta-label">{metric.label}</p>
              {metric.value ? (
                <p className="mt-2 text-xl font-semibold text-foreground">
                  {metric.value}
                </p>
              ) : (
                <>
                  <p className="mt-2 text-xl text-faint">
                    <span aria-hidden="true">—</span>
                    <span className="sr-only">Not yet measured</span>
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-faint">
                    {metric.hint}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
