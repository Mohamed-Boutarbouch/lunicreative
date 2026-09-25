import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { ReactNode } from "react";
import { cn } from "cn";

import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from "@/components/ui/craft-button";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function CtaButton({ href, children, className }: CtaButtonProps) {
  return (
    <CraftButton
      render={<Link href={href} />}
      className={cn("px-4!", className)}
    >
      <CraftButtonLabel>{children}</CraftButtonLabel>

      <CraftButtonIcon>
        <IconArrowUpRight className="size-4 stroke-2 transition-transform duration-500 group-hover/button:rotate-45" />
      </CraftButtonIcon>
    </CraftButton>
  );
}
