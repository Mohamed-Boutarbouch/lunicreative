import Link from "next/link";
import { IconClock } from "@tabler/icons-react";

import { contactItems } from "@/data/contact";

export function ContactInfo() {
  return (
    <div className="flex h-full flex-col">
      <div className="space-y-5">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="group flex items-start gap-4 rounded-lg p-2 -mx-2 transition-colors hover:bg-muted/60"
              target="_blank"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-background shadow-sm">
                <Icon className="size-5 text-foreground" stroke={1.8} />
              </div>

              <div className="min-w-0 space-y-1">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {item.content}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-auto pt-8">
        <div className="rounded-xl border bg-muted/40 p-4">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-background shadow-sm">
              <IconClock className="size-4" />
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Nos horaires</p>

              <div className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm text-muted-foreground">
                <span>Lundi — Vendredi</span>
                <span>09:00 — 19:00</span>

                <span>Samedi</span>
                <span>09:00 — 13:30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
