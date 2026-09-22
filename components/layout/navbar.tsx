"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
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
      "Identité visuelle, supports de communication et création graphique.",
  },
  {
    href: "/services/impression-numerique-offset",
    title: "Impression numérique & offset",
    description:
      "Solutions d'impression numérique et offset pour vos supports.",
  },
  {
    href: "/services/creation-site-web",
    title: "Création de site web",
    description:
      "Conception et développement de sites web adaptés à votre activité.",
  },
  {
    href: "/services/design-creation-3d",
    title: "Design & création 3D",
    description: "Design, modélisation et création 3D pour vos projets.",
  },
  {
    href: "/services/conception-evenementielle",
    title: "Conception événementielle",
    description:
      "Conception et accompagnement de vos événements et expériences.",
  },
];

const mainRoutes = routeList.filter(({ href }) => href !== "/service");

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
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
              <Button variant="ghost" size="icon" aria-label="Ouvrir le menu" />
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
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    variant="ghost"
                    className="justify-start text-base"
                    onClick={closeMobileMenu}
                    render={<Link href={href} />}
                  >
                    {label}
                  </Button>
                ))}

                <div className="my-2 px-3">
                  <Separator />
                </div>

                <p className="px-3 py-1 text-sm font-semibold text-muted-foreground">
                  Services
                </p>

                {serviceList.map(({ href, title }) => (
                  <Button
                    key={href}
                    variant="ghost"
                    className="h-auto justify-start whitespace-normal py-2 pl-6 text-left text-sm"
                    onClick={closeMobileMenu}
                    render={<Link href={href} />}
                  >
                    {title}
                  </Button>
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
              Services
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
