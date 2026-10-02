import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

import type { ServiceDetail } from "@/data/services";

export function ServiceRow({
  service,
}: {
  service: Pick<ServiceDetail, "slug" | "title" | "summary">;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex items-center justify-between gap-6 border-b border-border py-5 transition-colors hover:border-primary/40"
    >
      <span className="flex flex-col gap-1">
        <span className="font-heading text-lg font-semibold tracking-tight transition-colors group-hover:text-primary sm:text-xl">
          {service.title}
        </span>
        <span className="text-sm text-muted-foreground">{service.summary}</span>
      </span>
      <IconArrowUpRight
        aria-hidden="true"
        className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
      />
    </Link>
  );
}
