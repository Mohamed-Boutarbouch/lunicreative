"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { cn } from "cn";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export type HeroCarouselItem = {
  src: string;
  alt: string;
};

type HeroCarouselProps = {
  items: HeroCarouselItem[];
  autoplayDelay?: number;
  aspectClassName?: string;
  className?: string;
};

export function HeroCarousel({
  items,
  autoplayDelay = 5000,
  aspectClassName = "aspect-4/3",
  className,
}: HeroCarouselProps) {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [thumbApi, setThumbApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
    },
    [mainApi],
  );

  useEffect(() => {
    if (!mainApi) return;

    const handleSelect = () => {
      const index = mainApi.selectedScrollSnap();

      setSelectedIndex(index);
      thumbApi?.scrollTo(index);
    };

    handleSelect();

    mainApi.on("select", handleSelect);
    mainApi.on("reInit", handleSelect);

    return () => {
      mainApi.off("select", handleSelect);
      mainApi.off("reInit", handleSelect);
    };
  }, [mainApi, thumbApi]);

  return (
    <div
      className={cn(
        "mx-auto flex w-full max-w-xl flex-col gap-3 sm:gap-4",
        className,
      )}
    >
      {/* Main carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: autoplayDelay,
          }),
        ]}
        setApi={setMainApi}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={item.src}>
              <div
                className={cn(
                  "relative overflow-hidden rounded-2xl bg-muted shadow-lg",
                  aspectClassName,
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 691px"
                  className="object-cover"
                  priority={index === 0}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Thumbnail carousel */}
      <Carousel
        setApi={setThumbApi}
        opts={{
          containScroll: "keepSnaps",
          dragFree: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 justify-center sm:-ml-3">
          {items.map((item, index) => (
            <CarouselItem
              key={item.src}
              className="basis-16 cursor-pointer pl-2 sm:basis-20 sm:pl-3 lg:basis-24"
              onClick={() => onThumbClick(index)}
            >
              <div
                className={cn(
                  "relative aspect-square overflow-hidden rounded-lg border-2 transition-all",
                  index === selectedIndex
                    ? "border-primary opacity-100"
                    : "border-transparent opacity-40 hover:opacity-70",
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="object-cover"
                  sizes="96px"
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
