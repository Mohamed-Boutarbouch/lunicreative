import Link from "next/link";
import { cn } from "cn";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function CtaButton({ href, children, className }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          size: "lg",
        }),
        "group relative h-12 w-fit overflow-hidden rounded-full bg-primary p-1 ps-6 pe-14 text-sm font-medium",
        "transition-all duration-500 hover:bg-primary/80 hover:ps-14 hover:pe-6",
        className,
      )}
    >
      <span className="relative z-10 font-bold! transition-all duration-400">
        {children}
      </span>

      <span
        className={cn(
          "absolute right-1 flex size-10 items-center justify-center",
          "rounded-full bg-background text-foreground",
          "transition-all duration-400",
          "group-hover:right-[calc(100%-44px)] group-hover:rotate-45",
        )}
      >
        <IconArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}
