import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import type { ReactNode } from "react";

import {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
} from "@/components/ui/craft-button";

type CtaButtonProps = {
  href?: string;
  type?: "button" | "submit" | "reset";
  form?: string;
  children: ReactNode;
  className?: string;
};

export function CtaButton({
  href,
  type = "button",
  form,
  children,
  className,
}: CtaButtonProps) {
  return (
    <CraftButton
      {...(href
        ? {
            render: <Link href={href} />,
          }
        : {
            type,
            form,
          })}
      className={className}
    >
      <CraftButtonLabel>&ensp;{children}</CraftButtonLabel>

      <CraftButtonIcon>
        <IconArrowUpRight className="size-4 stroke-2 transition-transform duration-500 group-hover/button:rotate-45" />
      </CraftButtonIcon>
    </CraftButton>
  );
}
