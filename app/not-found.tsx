import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-grid-faint">
      <div className="glow-top mx-auto flex min-h-[60vh] w-full max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="meta-label">404 — route not found</p>
        <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          That page doesn&apos;t exist — the projects do.
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/85"
          >
            View projects
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-line-strong"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
