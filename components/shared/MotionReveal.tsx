"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site-config";
import { cn } from "@/lib/utils";

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in seconds. */
  delay?: number;
  /** Vertical travel in px (kept small — instrumentation, not theatrics). */
  y?: number;
}

/**
 * Subtle fade/rise on scroll into view. Renders children statically when
 * the user prefers reduced motion or motion is disabled in site config.
 */
export function MotionReveal({
  children,
  className,
  delay = 0,
  y = 12,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion || !siteConfig.enableMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
