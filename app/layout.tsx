import type { Metadata } from "next";
import { cn } from "cn";
import { Space_Grotesk, Instrument_Serif, Inter } from "next/font/google";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";

import "./globals.css";

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "L'unicreative",
  description: "L'unicreative à Fès - Agence web, communication et publicité",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr-MA"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        instrumentSerif.variable,
        spaceGroteskHeading.variable,
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="scroll-sentinel" className="absolute top-0 h-px w-full" />

          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-125 bg-[radial-gradient(ellipse_90%_55%_at_50%_35%,color-mix(in_oklch,var(--primary)_25%,transparent),transparent_72%)] sm:h-140 md:h-175"
            />

            <Navbar />

            <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-16">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
