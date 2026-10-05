"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";
import { cn } from "cn";

import { CtaButton } from "@/components/cta-button";
import { buttonVariants } from "@/components/ui/button";
import { ToggleTheme } from "@/components/layout/toogle-theme";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
import { primaryRoutes, secondaryRoutes, services } from "@/data/navbar";
import { assetPath } from "@/lib/asset";

const navLinkClass = navigationMenuTriggerStyle({
  className: "px-2 text-base text-muted-foreground hover:text-foreground",
});

const mobileLinkClass = buttonVariants({
  variant: "ghost",
  className:
    "justify-start text-base text-muted-foreground hover:text-foreground",
});

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isScrolled = useScrolled();

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header
      className={cn(
        "navbar-enter sticky top-5 z-40 mx-auto grid w-[90%] grid-cols-[auto_1fr_auto] items-center rounded-2xl border p-2 transition-all duration-300 ease-out md:w-[70%] lg:w-[75%] lg:max-w-7xl",
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
        className="flex shrink-0 items-center gap-1.5 sm:gap-2"
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

      {/* Mobile navigation */}
      <div className="col-start-3 flex items-center lg:hidden">
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
                {primaryRoutes.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={closeMobileMenu}
                    className={mobileLinkClass}
                  >
                    {label}
                  </Link>
                ))}

                {/* Services */}
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((open) => !open)}
                  aria-expanded={isServicesOpen}
                  className="flex h-9 w-full items-center justify-between rounded-md px-3 text-base font-normal text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>Nos Services</span>

                  <IconChevronDown
                    className={cn(
                      "size-4 shrink-0 transition-transform duration-200",
                      isServicesOpen && "rotate-180",
                    )}
                  />
                </button>

                {isServicesOpen && (
                  <div className="ml-3 flex flex-col border-l pl-3">
                    {services.map(({ href, title }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMobileMenu}
                        className="rounded-md px-3 py-2 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        {title}
                      </Link>
                    ))}
                  </div>
                )}

                {secondaryRoutes.map(({ href, label }) => (
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
      <NavigationMenu className="hidden justify-self-center lg:block">
        <NavigationMenuList>
          {primaryRoutes.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink
                render={<Link href={href} />}
                className={navLinkClass}
              >
                {label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent px-2 text-base text-muted-foreground hover:bg-transparent hover:text-foreground">
              Nos Services
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-150 grid-cols-2 gap-1 p-2">
                {services.map(({ href, title, description }, index) => {
                  const isFeatured = services.length % 2 !== 0 && index === 0;

                  return (
                    <li key={href} className={cn(isFeatured && "col-span-2")}>
                      <NavigationMenuLink
                        render={<Link href={href} />}
                        className="block rounded-md p-3 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {title}
                        </p>

                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {description}
                        </p>
                      </NavigationMenuLink>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {secondaryRoutes.map(({ href, label }) => (
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
      <div className="hidden shrink-0 items-center justify-self-end gap-2 lg:flex">
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
