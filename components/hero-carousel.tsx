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

const ITEMS_COUNT = 4;

const images = Array.from(
  { length: ITEMS_COUNT },
  (_, index) => `/slides/slide-${index + 1}.jpeg`,
);

export function HeroCarousel() {
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

    mainApi.on("select", handleSelect);
    mainApi.on("reInit", handleSelect);

    return () => {
      mainApi.off("select", handleSelect);
      mainApi.off("reInit", handleSelect);
    };
  }, [mainApi, thumbApi]);

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:gap-4 lg:mx-0 lg:ml-auto lg:max-w-none">
      {/* Main carousel */}
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        setApi={setMainApi}
        className="w-full"
      >
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={src}>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-muted shadow-lg">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover"
                  loading="eager"
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
          {images.map((src, index) => (
            <CarouselItem
              key={src}
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
                  src={src}
                  alt={`Thumb ${index + 1}`}
                  fill
                  sizes="96px"
                  className="object-cover"
                  loading="eager"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
