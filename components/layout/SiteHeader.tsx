"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { headerCta, primaryNav } from "@/content/navigation";
import { profile } from "@/content/profile";

const primaryButtonClasses =
  "inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent/85";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2"
          onClick={closeDrawer}
        >
          <span aria-hidden="true" className="font-mono text-sm text-accent">
            {"//"}
          </span>
          <span className="text-sm font-semibold tracking-tight text-foreground">
            {profile.name}
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 md:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link href={headerCta.href} className={primaryButtonClasses}>
            {headerCta.label}
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-card text-foreground transition-colors hover:border-line-strong md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          {...(open ? { "aria-controls": "mobile-nav" } : {})}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open ? (
        <div
          id="mobile-nav"
          className="border-b border-line bg-background/95 backdrop-blur md:hidden"
        >
          <nav
            aria-label="Primary mobile"
            className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-5 pt-2 sm:px-6"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeDrawer}
                className="border-b border-line py-3 text-base text-muted transition-colors last:border-b-0 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={headerCta.href}
              onClick={closeDrawer}
              className={`${primaryButtonClasses} mt-4 justify-center py-3`}
            >
              {headerCta.label}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
