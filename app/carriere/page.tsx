import { CareerHero } from "@/components/sections/career-hero";
import { CareerForm } from "@/components/career-form";
import { createMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Carrières : emploi et stages",
  description:
    "Envoyez votre candidature ou votre demande de stage à L'unicreative, agence de communication à Fès, avec votre CV et votre lettre de motivation.",
  path: "/carriere",
});

export default function CareerPage() {
  return (
    <main className="my-18">
      <CareerHero />
      <CareerForm />
    </main>
  );
}
