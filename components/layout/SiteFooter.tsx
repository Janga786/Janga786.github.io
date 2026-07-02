import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { primaryNav } from "@/content/navigation";
import { profile } from "@/content/profile";
import { socials } from "@/content/socials";
import { Chip } from "@/components/shared/Chip";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Identity */}
          <div>
            <p className="text-sm font-semibold tracking-tight text-foreground">
              {profile.name}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {profile.shortBio}
            </p>
            <p className="mt-3 font-mono text-xs text-faint">
              {profile.location}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="meta-label">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="meta-label">Connect</p>
            <ul className="mt-4 space-y-2.5">
              {socials.map((social) => {
                if (social.href) {
                  const isExternal =
                    social.kind === "github" || social.kind === "linkedin";
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        {...(isExternal
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {social.kind === "email" ? (
                          <Mail size={16} aria-hidden="true" />
                        ) : (
                          <ArrowUpRight size={16} aria-hidden="true" />
                        )}
                        {social.label}
                      </a>
                    </li>
                  );
                }
                if (social.isPlaceholder) {
                  return (
                    <li
                      key={social.label}
                      className="inline-flex items-center gap-2 text-sm text-faint"
                    >
                      {social.label}
                      <Chip>soon</Chip>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-faint">
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-[11px] text-faint">
            Built with Next.js — content is evidence-first: claims link to
            artifacts or are labeled pending.
          </p>
        </div>
      </div>
    </footer>
  );
}
