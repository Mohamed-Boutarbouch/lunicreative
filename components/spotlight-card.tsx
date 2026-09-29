"use client";

import { cn } from "cn";

import { Card } from "@/components/ui/card";

export function SpotlightCard({
  className,
  children,
  onMouseMove,
  ...props
}: React.ComponentProps<typeof Card>) {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
    onMouseMove?.(e);
  }

  return (
    <Card
      onMouseMove={handleMouseMove}
      className={cn("relative", className)}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), color-mix(in oklab, var(--primary) 16%, transparent), transparent 70%)",
        }}
      />
      {children}
    </Card>
  );
}
