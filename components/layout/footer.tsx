"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";

import { Separator } from "@/components/ui/separator";
import { CtaButton } from "@/components/cta-button";
import { navigation, services } from "@/data/footer";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function FooterLinkGroup({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </p>

      <ul className="mt-3 flex flex-col gap-2 sm:mt-4 sm:gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <div
      className="relative h-(--footer-h) [--footer-h:max(85dvh,44rem)] lg:[--footer-h:max(70dvh,36rem)]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative top-[-100dvh] h-[calc(var(--footer-h)+100dvh)]">
        <div className="sticky top-[calc(100dvh-var(--footer-h))] h-(--footer-h)">
          <motion.footer
            variants={container}
            initial="hidden"
            animate="show"
            className="dark relative h-full w-full overflow-hidden bg-background text-foreground"
          >
            <div className="mx-auto h-full w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
              <div className="flex h-full flex-col justify-between gap-6 p-6 sm:gap-8 sm:p-10 lg:p-14">
                <motion.div
                  variants={container}
                  className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12 lg:gap-10"
                >
                  <motion.div
                    variants={item}
                    className="col-span-2 lg:col-span-6"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                      Un projet en tête ?
                    </p>

                    <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                      Parlons de votre
                      <br />
                      prochain projet.
                    </h2>

                    <CtaButton href="#contact" className="mt-6">
                      Demander un devis
                    </CtaButton>
                  </motion.div>

                  <motion.nav
                    variants={item}
                    aria-label="Navigation du pied de page"
                    className="lg:col-span-2"
                  >
                    <FooterLinkGroup title="Navigation" links={navigation} />
                  </motion.nav>

                  <motion.div variants={item} className="lg:col-span-4">
                    <FooterLinkGroup title="Nos services" links={services} />
                  </motion.div>
                </motion.div>

                {/* Bottom */}
                <div className="flex flex-col gap-5 sm:gap-6">
                  <Separator />

                  <motion.div
                    variants={item}
                    className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                  >
                    <div>
                      <Link
                        href="/"
                        aria-label="L'unicreative, accueil"
                        className="font-heading text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                      >
                        L<span className="text-primary">’</span>uni
                        <span className="text-primary">creative</span>
                      </Link>

                      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Digital Printing Solutions
                      </p>
                    </div>

                    <address className="text-sm not-italic text-foreground/70 md:text-right">
                      Avenue Lalla Hasnae, près de l’Institut Français
                      <br />
                      Fès, Maroc
                    </address>
                  </motion.div>

                  <motion.div
                    variants={item}
                    className="flex flex-col gap-1 text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-sm"
                  >
                    <p>
                      &copy; {new Date().getFullYear()} L’unicreative. Tous
                      droits réservés.
                    </p>
                    <p>Anciennement Imagin Creative</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}
