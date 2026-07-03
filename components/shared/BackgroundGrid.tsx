import { cn } from "@/lib/utils";

/**
 * Decorative engineering-grid backdrop with a soft top glow.
 * Purely presentational — hidden from assistive tech.
 */
export function BackgroundGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="bg-grid-faint absolute inset-0 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
      <div className="glow-top absolute inset-0" />
      <div className="scanline" />
    </div>
  );
}
