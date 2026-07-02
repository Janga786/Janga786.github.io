import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Mono uppercase kicker above the title, e.g. "Selected Work". */
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  className?: string;
  /** Heading level for document outline correctness. */
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="meta-label mb-3">{eyebrow}</p> : null}
      <Heading className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </Heading>
      {lede ? (
        <p className="mt-3 text-pretty text-base leading-relaxed text-muted">
          {lede}
        </p>
      ) : null}
    </div>
  );
}
