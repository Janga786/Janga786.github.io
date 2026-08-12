import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject } from "@/content/projects";
import { Chip } from "@/components/shared/Chip";
import { MotionReveal } from "@/components/shared/MotionReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SectionShell } from "@/components/shared/SectionShell";

const systemSlugs = [
  "hexapod-nasa-challenge",
  "kuka-kr6-kinematics",
  "legacy-robot-restoration-inspection",
  "embedded-hardware-systems",
];

const systems = systemSlugs.flatMap((slug) => {
  const project = getProject(slug);
  return project ? [project] : [];
});

export function SelectedSystems() {
  return (
    <SectionShell id="systems">
      <SectionHeading
        eyebrow="Selected Systems & Engineering"
        title="Robots have to work below the model layer"
        lede="These projects show field integration, mathematical modeling, robot recovery, embedded timing, and hardware interfaces without presenting engineering breadth as a skill meter."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {systems.map((project, index) => {
          const media =
            project.media.find((item) => item.kind === "image" && item.src) ??
            project.media.find((item) => item.src);
          const imageSrc = media?.kind === "video" ? media.poster : media?.src;

          return (
            <MotionReveal key={project.slug} delay={(index % 2) * 0.05}>
              <Link
                href={`/projects/${project.slug}/`}
                className="group panel panel-hover grid h-full overflow-hidden sm:grid-cols-[150px_1fr]"
              >
                {imageSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={imageSrc}
                    alt={media?.alt ?? ""}
                    loading="lazy"
                    className="aspect-[16/8] h-full min-h-36 w-full object-cover sm:aspect-auto"
                  />
                ) : null}
                <div className="flex min-w-0 flex-col p-5">
                  <h3 className="text-base font-medium text-foreground">
                    {project.shortTitle ?? project.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
                    {project.oneLiner}
                  </p>
                  <div className="mt-auto flex items-end justify-between gap-3 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Chip key={tag}>{tag}</Chip>
                      ))}
                    </div>
                    <ArrowUpRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-faint transition-colors group-hover:text-accent"
                    />
                  </div>
                </div>
              </Link>
            </MotionReveal>
          );
        })}
      </div>
      <Link
        href="/projects/"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-foreground"
      >
        Research and systems archive
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </SectionShell>
  );
}
