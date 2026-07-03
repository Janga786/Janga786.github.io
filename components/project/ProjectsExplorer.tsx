"use client";

import { useState } from "react";
import type { CategoryMeta, Project, ProjectCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/project/ProjectCard";

interface ProjectsExplorerProps {
  projects: Project[];
  categories: CategoryMeta[];
}

/** Category-filterable project grid with an evidence note per category. */
export function ProjectsExplorer({ projects, categories }: ProjectsExplorerProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all",
  );

  const categoryLabel = (id: ProjectCategory) =>
    categories.find((c) => c.id === id)?.label ?? id;

  const activeMeta =
    activeCategory === "all"
      ? undefined
      : categories.find((c) => c.id === activeCategory);

  const visible = projects
    .filter((p) => activeCategory === "all" || p.category === activeCategory)
    .sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) || a.sortOrder - b.sortOrder,
    );

  const filterButtonClass = (active: boolean) =>
    cn(
      "inline-flex min-h-9 items-center rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-wide transition-colors",
      active
        ? "border-accent/40 bg-accent-soft text-accent"
        : "border-line bg-card text-muted hover:border-line-strong hover:text-foreground",
    );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
        <button
          type="button"
          aria-pressed={activeCategory === "all"}
          onClick={() => setActiveCategory("all")}
          className={filterButtonClass(activeCategory === "all")}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
            className={filterButtonClass(activeCategory === category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        {activeMeta ? (
          <p className="max-w-2xl text-sm italic leading-relaxed text-muted">
            {activeMeta.evidenceNote}
          </p>
        ) : (
          <span aria-hidden="true" />
        )}
        <p className="meta-label whitespace-nowrap">featured first</p>
      </div>

      <p aria-live="polite" className="sr-only">
        {visible.length} project{visible.length === 1 ? "" : "s"} shown
        {activeMeta ? ` for ${activeMeta.label}` : ""}
      </p>

      {visible.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              categoryLabel={categoryLabel(project.category)}
            />
          ))}
        </div>
      ) : (
        <div role="status" className="panel p-6">
          <p className="text-sm text-muted">
            No projects in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
