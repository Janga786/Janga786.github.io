import { cn } from "@/lib/utils";

/** Small mono capsule for tags, stack items, and category labels. */
export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "accent";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] tracking-wide",
        tone === "neutral" && "border-line bg-card-2 text-muted",
        tone === "accent" && "border-accent/30 bg-accent-soft text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
