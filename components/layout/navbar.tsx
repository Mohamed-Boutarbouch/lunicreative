"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconChevronDown, IconMenu2 } from "@tabler/icons-react";

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

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceProps {
  href: string;
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    href: "/a-propos",
    label: "À propos",
  },
  {
    href: "/service",
    label: "Nos Services",
  },
  {
    href: "/realisations",
    label: "Réalisations",
  },
  {
    href: "/carriere",
    label: "Carrière",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const serviceList: ServiceProps[] = [
  {
    href: "/services/conception-creation-graphique",
    title: "Conception & création graphique",
    description:
      "Identité de marque, logos, cartes de visite, flyers et supports promotionnels.",
  },
  {
    href: "/services/impression-numerique-offset",
    title: "Impression numérique & offset",
    description:
      "Impression numérique et offset : affiches, flyers et supports de communication.",
  },
  {
    href: "/services/creation-site-web",
    title: "Création de site web",
    description:
      "Sites vitrines, CMS dynamiques, e-commerce et applications web et desktop.",
  },
  {
    href: "/services/design-creation-3d",
    title: "Design & création 3D",
    description: "Modélisation, rendu et design 3D pour vos projets.",
  },
  {
    href: "/services/conception-evenementielle",
    title: "Conception événementielle",
    description:
      "Stands modulables, séminaires, colloques, inaugurations et production technique.",
  },
];

const mainRoutes = routeList.filter(({ href }) => href !== "/service");

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className="sticky top-5 z-40 mx-auto flex w-[90%] items-center justify-between rounded-2xl border border-secondary bg-card/95 p-2 shadow-inner backdrop-blur-sm md:w-[70%] lg:w-[75%] lg:max-w-7xl">
      {/* Logo */}
      <Link href="/" aria-label="Lunicreative - Accueil">
        <Image
          src="/logo.png"
          alt="Lunicreative"
          className="h-auto w-40"
          width={1525}
          height={688}
          priority
        />
      </Link>

      {/* Mobile navigation */}
      <div className="flex items-center lg:hidden">
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
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    aria-label="Lunicreative - Accueil"
                  >
                    <Image
                      src="/logo.png"
                      alt="Lunicreative"
                      className="h-auto w-40"
                      width={1525}
                      height={688}
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-2">
                {mainRoutes
                  .filter(
                    ({ href }) =>
                      href !== "/realisations" &&
                      href !== "/carriere" &&
                      href !== "/contact",
                  )
                  .map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMobileMenu}
                      className={buttonVariants({
                        variant: "ghost",
                        className: "justify-start text-base",
                      })}
                    >
                      {label}
                    </Link>
                  ))}

                {/* Services */}
                <button
                  type="button"
                  onClick={() => setIsServicesOpen((open) => !open)}
                  aria-expanded={isServicesOpen}
                  className="flex h-9 w-full items-center justify-between rounded-md px-3 text-base font-normal outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <span>Nos Services</span>

                  <IconChevronDown
                    className={`size-4 shrink-0 transition-transform duration-200 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="ml-3 flex flex-col border-l pl-3">
                    {serviceList.map(({ href, title }) => (
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

                {mainRoutes
                  .filter(
                    ({ href }) =>
                      href === "/realisations" ||
                      href === "/carriere" ||
                      href === "/contact",
                  )
                  .map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={closeMobileMenu}
                      className={buttonVariants({
                        variant: "ghost",
                        className: "justify-start text-base",
                      })}
                    >
                      {label}
                    </Link>
                  ))}
              </nav>
            </div>

            <SheetFooter className="flex-col items-start justify-start sm:flex-col">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop navigation */}
      <NavigationMenu className="mx-auto hidden lg:block">
        <NavigationMenuList>
          {mainRoutes
            .filter(({ href }) => href === "/" || href === "/a-propos")
            .map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  render={<Link href={href} />}
                  className={navigationMenuTriggerStyle({
                    className: "px-2 text-base",
                  })}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

          {/* Services */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent px-2 text-base">
              Nos Services
            </NavigationMenuTrigger>

            <NavigationMenuContent>
              <ul className="grid w-150 grid-cols-2 gap-1 p-2">
                {serviceList.map(({ href, title, description }, index) => (
                  <li
                    key={href}
                    className={
                      index === serviceList.length - 1 ? "col-span-2" : ""
                    }
                  >
                    <NavigationMenuLink
                      render={<Link href={href} />}
                      className="block rounded-md p-3 transition-colors hover:bg-muted"
                    >
                      <p className="mb-1 font-semibold leading-none text-foreground">
                        {title}
                      </p>

                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {description}
                      </p>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {mainRoutes
            .filter(({ href }) => href !== "/" && href !== "/a-propos")
            .map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  render={<Link href={href} />}
                  className={navigationMenuTriggerStyle({
                    className: "px-2 text-base",
                  })}
                >
                  {label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Theme */}
      <div className="hidden items-center lg:flex">
        <ToggleTheme />
      </div>
    </header>
  );
}
