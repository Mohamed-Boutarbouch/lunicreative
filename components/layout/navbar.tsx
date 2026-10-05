"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import { cn } from "cn";

import { CtaButton } from "@/components/cta-button";
import { buttonVariants } from "@/components/ui/button";
import { ToggleTheme } from "@/components/layout/toogle-theme";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { assetPath } from "@/lib/asset";

const navLinkClass = navigationMenuTriggerStyle({
  className: "px-2 text-base text-muted-foreground hover:text-foreground",
});

const mobileLinkClass = buttonVariants({
  variant: "ghost",
  className:
    "justify-start text-base text-muted-foreground hover:text-foreground",
});

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/#realisations", label: "Réalisations" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/carriere", label: "Carrière" },
];

function useScrolled() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("scroll-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return isScrolled;
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScrolled();

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "navbar-enter sticky top-5 z-40 mx-auto grid w-[92%] grid-cols-[auto_1fr_auto] items-center rounded-2xl border p-2 transition-all duration-300 ease-out sm:w-[90%] xl:max-w-7xl",
        isScrolled
          ? [
              "border-border/70 bg-card/90 shadow-xl shadow-black/8 backdrop-blur-xl",
              "ring-1 ring-black/5 dark:ring-white/5",
            ]
          : "border-transparent bg-transparent shadow-none backdrop-blur-none",
      )}
    >
      {/* Logo */}
      <Link
        href="/"
        aria-label="Lunicreative - Accueil"
        className="flex shrink-0 items-center justify-center gap-1.5 sm:gap-2"
      >
        <Image
          src={assetPath("/logo/logo.webp")}
          alt="L’unicreative Logo"
          width={500}
          height={500}
          priority
          className="size-7 object-contain sm:size-8"
        />

        <span className="font-heading text-lg font-bold tracking-tight sm:text-2xl">
          L<span className="text-primary">’</span>uni
          <span className="text-primary">creative</span>
        </span>
      </Link>

      {/* Mobile / tablet navigation */}
      <div className="col-start-3 flex items-center xl:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger
            render={
              <button
                type="button"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
                aria-label="Ouvrir le menu"
              />
            }
          >
            <IconMenu2 />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-br-2xl rounded-tr-2xl border-secondary bg-card"
          >
            <div>
              <SheetHeader className="mb-6 px-2">
                <SheetTitle>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    aria-label="Lunicreative - Accueil"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={assetPath("/logo/logo.webp")}
                      alt=""
                      width={500}
                      height={500}
                      priority
                      className="size-8 object-contain"
                    />

                    <span className="font-heading text-xl font-bold tracking-tight">
                      L<span className="text-primary">’</span>uni
                      <span className="text-primary">creative</span>
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-1 px-2">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMobileMenu}
                    className={mobileLinkClass}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile actions */}
            <SheetFooter className="flex-col items-start gap-3 px-2 sm:flex-col">
              <CtaButton
                href="/#contact"
                className="mx-auto"
                onClick={closeMobileMenu}
              >
                Nous contacter
              </CtaButton>

              <Separator className="mb-1" />

              <div className="shrink-0">
                <ToggleTheme />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop navigation */}
      <NavigationMenu className="hidden justify-self-center xl:block">
        <NavigationMenuList>
          {navLinks.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                render={<Link href={href} />}
                className={navLinkClass}
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Desktop actions */}
      <div className="hidden shrink-0 items-center justify-self-end gap-2 xl:flex">
        <div className="shrink-0">
          <ToggleTheme />
        </div>

        <CtaButton href="/#contact" className="shrink-0">
          Nous contacter
        </CtaButton>
      </div>
    </header>
  );
}
