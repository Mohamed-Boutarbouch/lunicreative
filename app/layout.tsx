import { Space_Grotesk, Instrument_Serif, Inter } from "next/font/google";
import { cn } from "cn";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AuroraGlow } from "@/components/ui/aurora-glow";
import { RevealObserver } from "@/components/animations/reveal-observer";
import { SpotlightTracker } from "@/components/spotlight-tracker";

import "./globals.css";

const spaceGroteskHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "L'unicreative",
  description: "L'unicreative à Fès - Agence web, communication et publicité",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr-MA"
      translate="no"
      data-scroll-behavior="smooth"
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
      <body
        suppressHydrationWarning
        className="relative min-h-screen bg-background selection:bg-primary selection:text-primary-foreground"
      >
        <RevealObserver />
        <SpotlightTracker />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div id="scroll-sentinel" className="absolute top-0 h-px w-full" />

          <div className="relative overflow-x-clip">
            <AuroraGlow
              intensity="subtle"
              grid
              className="inset-x-0 top-0 -z-10 h-svh min-h-160"
            />

            <Navbar />

            <div className="relative mx-auto w-full max-w-400 px-4 sm:px-6 lg:px-10 xl:px-16">
              {children}
            </div>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
