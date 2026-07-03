import type { MediaItem } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Media figure for case studies. With a `src` it renders the real asset
 * (video with poster frame, image, or SVG diagram); without one it renders
 * a deliberate schematic placeholder so pending evidence still reads as
 * designed-for rather than missing.
 */
export function PlaceholderMedia({
  media,
  className,
}: {
  media: MediaItem;
  className?: string;
}) {
  return (
    <figure className={cn("space-y-2", className)}>
      {media.src ? (
        media.kind === "video" ? (
          <video
            src={media.src}
            poster={media.poster}
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-xl border border-line bg-surface"
            aria-label={media.alt}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={media.src}
            alt={media.alt}
            loading="lazy"
            className={cn(
              "w-full rounded-xl border border-line",
              media.kind === "diagram" && "bg-surface p-2",
            )}
          />
        )
      ) : (
        <div
          role="img"
          aria-label={media.alt}
          className="panel bg-grid-faint relative flex aspect-video w-full flex-col items-center justify-center gap-4 overflow-hidden"
        >
          <span className="sr-only">{media.alt}</span>
          <div aria-hidden="true" className="flex items-center">
            <div className="h-9 w-14 rounded-md border border-line-strong bg-card-2" />
            <div className="h-px w-8 bg-line-strong sm:w-12" />
            <div className="h-12 w-16 rounded-md border border-accent/40 bg-accent-soft" />
            <div className="h-px w-8 bg-line-strong sm:w-12" />
            <div className="h-9 w-14 rounded-md border border-line-strong bg-card-2" />
          </div>
          <p
            aria-hidden="true"
            className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint"
          >
            schematic placeholder
          </p>
        </div>
      )}
      {media.caption ? (
        <figcaption className="font-mono text-[11px] leading-relaxed text-faint">
          {media.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
