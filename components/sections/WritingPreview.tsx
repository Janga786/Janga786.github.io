import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { WritingItem } from "@/lib/types";
import { siteConfig } from "@/content/site-config";
import { writing } from "@/content/writing";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Chip } from "@/components/shared/Chip";
import { MotionReveal } from "@/components/shared/MotionReveal";

function WritingCardBody({ item }: { item: WritingItem }) {
  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <Chip>{item.typeLabel}</Chip>
        {item.isPlaceholder ? (
          <Chip className="border-dashed bg-transparent text-faint">
            Planned
          </Chip>
        ) : null}
      </div>
      <h3 className="mt-3 text-base font-medium text-foreground">
        {item.title}
      </h3>
      <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-muted">
        {item.summary}
      </p>
    </>
  );
}

/**
 * Homepage preview of the writing/reports index. Placeholder entries render
 * as non-links — pieces only become clickable once `link` is set.
 */
export function WritingPreview() {
  if (!siteConfig.enableWritingPage) return null;

  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Writing"
        title="Technical reports"
        lede="Systems are only as credible as their writeups. These are the reports this site is structured to hold."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {writing.map((item, i) => (
          <MotionReveal key={item.slug} delay={(i % 2) * 0.05}>
            {item.link ? (
              <Link
                href={item.link}
                data-glow
                className="panel panel-hover block h-full p-5"
              >
                <WritingCardBody item={item} />
              </Link>
            ) : (
              <div className="panel h-full p-5">
                <WritingCardBody item={item} />
              </div>
            )}
          </MotionReveal>
        ))}
      </div>
      <div className="mt-8">
        <Link
          href="/writing/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
        >
          All writing
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </SectionShell>
  );
}
