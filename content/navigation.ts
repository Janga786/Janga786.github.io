import type { NavItem } from "@/lib/types";
import { siteConfig } from "./site-config";

export const primaryNav: NavItem[] = [
  { label: "Research", href: "/#research" },
  { label: "Systems", href: "/#systems" },
  ...(siteConfig.enableWritingPage
    ? [{ label: "Outputs", href: "/writing/" }]
    : []),
  { label: "About", href: "/about" },
];

export const headerCta: NavItem = { label: "CV", href: "/resume.pdf" };
