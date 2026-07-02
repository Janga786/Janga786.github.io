import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  className?: string;
  /** Constrains and pads content; disable for full-bleed sections. */
  contained?: boolean;
  children: React.ReactNode;
}

/** Standard section wrapper: vertical rhythm + max-width container. */
export function SectionShell({
  id,
  className,
  contained = true,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      {contained ? (
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}
