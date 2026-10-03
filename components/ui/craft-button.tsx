import * as React from "react";
import { cn } from "cn";

import { Button } from "@/components/ui/button";

interface CraftButtonProps extends Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "render"
> {
  children?: React.ReactNode;
  render?: React.ReactElement;
}

interface CraftButtonLabelProps {
  children: React.ReactNode;
  className?: string;
}

interface CraftButtonIconProps {
  children: React.ReactNode;
  className?: string;
}

function CraftButtonLabel({ children, className }: CraftButtonLabelProps) {
  return (
    <span
      className={cn(
        "relative z-2 font-bold transition-colors duration-500",
        "group-hover/button:text-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}

function CraftButtonIcon({ children, className }: CraftButtonIconProps) {
  return (
    <span className={cn("relative z-1 size-10", className)}>
      <span
        className={cn(
          "absolute inset-0 -z-1 size-10 rounded-full bg-background",
          "transition-transform duration-500",
          "group-hover/button:scale-[15]",
        )}
      />

      <span
        className={cn(
          "relative z-2 flex size-10 items-center justify-center rounded-full",
          "bg-background text-primary",
          "transition-all duration-500",
          "group-hover/button:bg-primary group-hover/button:text-background",
        )}
      >
        {children}
      </span>
    </span>
  );
}

function CraftButton({
  children,
  render,
  className,
  ...rest
}: CraftButtonProps) {
  return (
    <Button
      render={render}
      nativeButton={!render}
      className={cn(
        "group/button",
        "h-12 w-fit cursor-pointer overflow-hidden rounded-full",
        "border-0 px-2! ps-6 pe-2",
        "gap-3",
        "duration-500",
        "hover:bg-background hover:shadow-md",
        "active:translate-y-0",
        "dark:border dark:border-transparent",
        "dark:hover:border-primary/30",
        className,
      )}
      {...rest}
    >
      {children}
    </Button>
  );
}

export {
  CraftButton,
  CraftButtonIcon,
  CraftButtonLabel,
  type CraftButtonIconProps,
  type CraftButtonLabelProps,
  type CraftButtonProps,
};
