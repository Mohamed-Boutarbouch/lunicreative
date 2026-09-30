import Link from "next/link";
import type { Metadata } from "next";
import { IconHome } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export const metadata: Metadata = {
  title: "Page introuvable | L'unicreative",
};

export default function NotFound() {
  return (
    <main className="flex min-h-svh py-32">
      <Empty>
        <EmptyHeader>
          <p className="font-heading text-8xl font-bold text-primary lg:text-9xl">
            404
          </p>
          <EmptyTitle className="font-heading text-3xl font-semibold lg:text-4xl">
            Page introuvable
          </EmptyTitle>
          <EmptyDescription>
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="lg" nativeButton={false} render={<Link href="/" />}>
            <IconHome data-icon="inline-start" />
            Retour à l&apos;accueil
          </Button>
        </EmptyContent>
      </Empty>
    </main>
  );
}
