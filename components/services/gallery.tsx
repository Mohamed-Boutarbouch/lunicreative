import Image from "next/image";

import { cn } from "cn";
import type { ServiceDetail } from "@/data/services";

export function ServiceGallery({
  images,
}: {
  images: ServiceDetail["gallery"];
}) {
  if (images.length === 0) return null;

  return (
    <section
      aria-label="Aperçu de nos réalisations"
      className="grid gap-4 md:grid-cols-2"
    >
      {images.map((image, index) => (
        <figure
          key={image.src}
          className={cn(
            "relative aspect-16/10 overflow-hidden rounded-md border border-border bg-muted",
            index === 0 && images.length > 1 && "md:col-span-2",
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={
              index === 0
                ? "(min-width: 1280px) 1200px, 100vw"
                : "(min-width: 768px) 50vw, 100vw"
            }
            className="object-cover"
            priority={index === 0}
          />
        </figure>
      ))}
    </section>
  );
}
