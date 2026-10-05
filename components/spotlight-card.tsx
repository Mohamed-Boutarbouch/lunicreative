import { cn } from "cn";

import { Card } from "@/components/ui/card";

export function SpotlightCard({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Card>) {
  return (
    <Card data-spotlight className={cn("group relative", className)} {...props}>
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
