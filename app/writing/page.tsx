import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { writing } from "@/content/writing";
import { siteConfig } from "@/content/site-config";
import type { WritingItem } from "@/lib/types";
import { pageMetadata } from "@/lib/seo";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Chip } from "@/components/shared/Chip";
import { MotionReveal } from "@/components/shared/MotionReveal";

export const metadata: Metadata = pageMetadata({
  title: "Writing",
  description:
    "Technical reports and writeups — deployment reports, evaluations, and postmortems.",
  path: "/writing/",
});

/** Editor-note convention: strings starting with "[" are fill-in prompts. */
const isEditorNote = (s: string) => s.trim().startsWith("[");

function EditorAwareText({ text }: { text: string }) {
  if (!isEditorNote(text)) return <>{text}</>;
  return (
    <span className="italic text-faint">
      {text}
      <span className="ml-2 inline-flex items-center rounded-full border border-line px-1.5 py-px font-mono text-[10px] uppercase not-italic tracking-[0.12em] text-faint">
        to fill
      </span>
    </span>
  );
}

function WritingCardBody({ item }: { item: WritingItem }) {
  return (
    <>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <Chip>{item.typeLabel}</Chip>
          {item.isPlaceholder ? (
            <Chip>Planned</Chip>
          ) : item.dateLabel ? (
            <span className="font-mono text-[11px] tracking-wide text-faint">
              {item.dateLabel}
            </span>
          ) : null}
        </div>
        <h2 className="mt-3 text-lg font-medium text-foreground">
          <EditorAwareText text={item.title} />
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          <EditorAwareText text={item.summary} />
        </p>
      </div>
      <div className="shrink-0 pt-1">
        {item.link ? (
          <ArrowUpRight
            size={18}
            aria-hidden
            className="text-muted transition-colors group-hover:text-accent"
          />
        ) : (
          <span className="font-mono text-[11px] tracking-wide text-faint">
            in progress
          </span>
        )}
      </div>
    </>
  );
}

function WritingCard({ item }: { item: WritingItem }) {
  const cardClass = "panel panel-hover flex items-start justify-between gap-6 p-6";

  if (item.link) {
    const isExternal = /^https?:\/\//.test(item.link);
    if (isExternal) {
      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${cardClass}`}
        >
          <WritingCardBody item={item} />
        </a>
      );
    }
    return (
      <Link href={item.link} className={`group ${cardClass}`}>
        <WritingCardBody item={item} />
      </Link>
    );
  }

  return (
    <div className={cardClass}>
      <WritingCardBody item={item} />
    </div>
  );
}

export default function WritingPage() {
  if (!siteConfig.enableWritingPage) {
    return (
      <SectionShell>
        <div className="mx-auto max-w-3xl">
          <SectionHeading as="h1" title="Writing" />
          <div className="panel p-6">
            <p className="text-sm text-muted">Writing is offline.</p>
          </div>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell className="glow-top">
      <div className="mx-auto max-w-3xl">
        <MotionReveal>
          <SectionHeading
            as="h1"
            eyebrow="Writing & Reports"
            title="Technical writing"
            lede="Reports are the interface between work and readers who weren't in the room. These slots are structured for that standard."
          />
        </MotionReveal>
        <div className="space-y-4">
          {writing.map((item, i) => (
            <MotionReveal key={item.slug} delay={Math.min(i * 0.05, 0.2)}>
              <WritingCard item={item} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
