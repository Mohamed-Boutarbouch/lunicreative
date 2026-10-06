"use client";

import { cn } from "cn";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconShare,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ShareButtonProps = {
  /** Absolute URL of the page to share */
  url: string;
  /** Used as the share text (X, WhatsApp) */
  title: string;
  className?: string;
};

export function ShareButton({ url, title, className }: ShareButtonProps) {
  const encodedUrl = encodeURIComponent(url);
  const text = `${title} | L'unicreative`;

  const targets = [
    {
      name: "Facebook",
      Icon: IconBrandFacebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "X",
      Icon: IconBrandX,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(text)}`,
    },
    {
      name: "WhatsApp",
      Icon: IconBrandWhatsapp,
      href: `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
    },
    {
      name: "LinkedIn",
      Icon: IconBrandLinkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="lg"
            className={cn(
              "w-full justify-center border-border/60 bg-card text-muted-foreground shadow-none transition-colors duration-300 hover:border-primary/30 hover:bg-card hover:text-primary",
              className,
            )}
          >
            <IconShare aria-hidden="true" />
            Partager ce service
          </Button>
        }
      />

      <DropdownMenuContent align="start" className="w-52">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Partager sur</DropdownMenuLabel>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          {targets.map(({ name, Icon, href }) => (
            <DropdownMenuItem
              key={name}
              render={
                <a href={href} target="_blank" rel="noopener noreferrer" />
              }
            >
              <Icon aria-hidden="true" />
              {name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
