"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IconArrowDown, IconMapPin } from "@tabler/icons-react";
import { cn } from "cn";

import {
  Reveal,
  RevealGroup,
  RevealItem,
} from "@/components/animations/reveal";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CtaButton } from "@/components/cta-button";
import { FuseReveal } from "@/components/animations/fuse-reveal";
import { assetPath } from "@/lib/asset";

const SLIDES = [
  {
    src: assetPath("/slides/home-1.webp"),
    alt: "L'unicreative — création et communication",
  },
  {
    src: assetPath("/slides/home-2.webp"),
    alt: "L'unicreative — événementiel",
  },
  {
    src: assetPath("/slides/home-3.webp"),
    alt: "L'unicreative — impression",
  },
  {
    src: assetPath("/slides/home-4.webp"),
    alt: "L'unicreative — identité visuelle",
  },
];

const AUTOPLAY_DELAY = 5000;

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Stable plugin instance, created once (no ref access during render)
  const [autoplay] = useState(() =>
    Autoplay({ delay: AUTOPLAY_DELAY, stopOnInteraction: false }),
  );

  // watchDrag is off so touch swipes scroll the page instead of the slides.
  const [viewportRef, emblaApi] = useEmblaCarousel(
    { loop: true, watchDrag: false },
    [autoplay],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onDotClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      autoplay.reset();
    },
    [emblaApi, autoplay],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());

    handleSelect();
    emblaApi.on("select", handleSelect);
    emblaApi.on("reInit", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
      emblaApi.off("reInit", handleSelect);
    };
  }, [emblaApi]);

  // Parallax + reduced-motion handling.
  // Writes a --p CSS variable (0 → 1 across the hero height) without re-rendering.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      autoplay.stop();
      return;
    }

    let raf = 0;
    const update = () => {
      raf = 0;
      const progress = Math.min(
        Math.max(-el.getBoundingClientRect().top / el.offsetHeight, 0),
        1,
      );
      el.style.setProperty("--p", progress.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [autoplay]);

  // Pull the hero up under the in-flow sticky navbar so the image
  // starts at the very top of the page.
  useEffect(() => {
    const el = sectionRef.current;
    const header = document.querySelector<HTMLElement>("header.navbar-enter");
    if (!el || !header) return;

    const apply = () => {
      el.style.marginTop = `-${header.offsetHeight}px`;
    };

    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(header);

    return () => {
      ro.disconnect();
      el.style.marginTop = "";
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ "--p": 0 } as React.CSSProperties}
      // Full-bleed breakout from the max-w-400 container in layout.tsx
      className="relative isolate left-1/2 z-10 -mt-14 flex min-h-svh w-screen -translate-x-1/2 items-center overflow-hidden bg-neutral-950 text-white"
    >
      {/* Layer 1: carousel background, moves slower than the page */}
      <div
        aria-hidden={false}
        className="absolute inset-x-0 top-[-15%] -z-20 h-[130%] will-change-transform"
        style={{ transform: "translate3d(0, calc(var(--p) * 11%), 0)" }}
      >
        <div ref={viewportRef} className="h-full overflow-hidden">
          <div className="flex h-full">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.src}
                className="relative h-full min-w-0 shrink-0 grow-0 basis-full"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Layer 2: flat scrim for text legibility */}
      <div className="absolute inset-0 -z-10 bg-black/60" />

      {/* Layer 3: content, moves faster than the page and fades out */}
      <div
        className="container mx-auto px-4 pt-32 pb-28 will-change-transform sm:px-6 md:pb-32"
        style={{
          transform: "translate3d(0, calc(var(--p) * -60px), 0)",
          opacity: "calc(1 - var(--p) * 1.4)",
        }}
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 sm:gap-10">
          <Reveal variant="fadeUp" eager>
            <Badge
              variant="ghost"
              className="h-auto gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider whitespace-normal text-white sm:text-sm"
            >
              <IconMapPin aria-hidden="true" className="text-primary" />
              Agence de communication et de publicité · Fès, Maroc
            </Badge>
          </Reveal>

          <FuseReveal
            as="h1"
            className="max-w-4xl font-heading text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            delay={0}
            stagger={0.02}
            parts={[
              "Chaque projet, une ",
              {
                text: "création",
                className:
                  "font-serif font-semibold tracking-wider text-primary",
              },
              " qui a du sens",
            ]}
            eager
          />

          <Reveal
            as="p"
            variant="blurIn"
            delay={0.5}
            className="max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
            eager
          >
            Identité visuelle, impression, sites web, stands et événements : un
            seul interlocuteur, du concept à la réalisation.
          </Reveal>

          <RevealGroup
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            delay={0.7}
            stagger={0.1}
            eager
          >
            <RevealItem variant="pop">
              <CtaButton href="/#contact">Démarrer un projet</CtaButton>
            </RevealItem>
            <RevealItem variant="pop">
              <a
                href="#realisations"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "text-white hover:bg-white/10 hover:text-white",
                )}
              >
                Voir nos réalisations
                <IconArrowDown className="ml-2 size-4" aria-hidden="true" />
              </a>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>

      {/* Slide indicators (replace the thumbnail strip) */}
      <div className="absolute inset-x-0 bottom-0 px-4 pb-6 sm:px-6 md:pb-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div
            className="flex items-center"
            role="tablist"
            aria-label="Diapositives"
          >
            {SLIDES.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={index === selectedIndex}
                aria-label={`Afficher la diapositive ${index + 1}`}
                onClick={() => onDotClick(index)}
                className="group py-4 pr-2"
              >
                <span
                  className={cn(
                    "block h-1 rounded-full transition-all duration-300",
                    index === selectedIndex
                      ? "w-10 bg-primary"
                      : "w-6 bg-white/40 group-hover:bg-white/70",
                  )}
                />
              </button>
            ))}
          </div>
          <span className="text-xs font-semibold tracking-widest text-white/70 tabular-nums">
            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
            {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
