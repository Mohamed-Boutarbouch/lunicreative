import { cn } from "cn";

type Intensity = "subtle" | "medium" | "vivid";

const intensityClass: Record<Intensity, string> = {
  subtle: "opacity-25 dark:opacity-20",
  medium: "opacity-40 dark:opacity-30",
  vivid: "opacity-60 dark:opacity-45",
};

interface AuroraGlowProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: Intensity;
  /** Faint grid fading out from the top center */
  grid?: boolean;
}

export function AuroraGlow({
  className,
  intensity = "subtle",
  grid = false,
  ...props
}: AuroraGlowProps) {
  return (
    <div
      aria-hidden
      data-slot="aurora-glow"
      className={cn(
        "pointer-events-none absolute overflow-hidden",
        "mask-[linear-gradient(to_bottom,black_55%,transparent)]",
        className,
      )}
      {...props}
    >
      <div className={cn("absolute inset-0", intensityClass[intensity])}>
        <div className="absolute top-1/2 left-1/2 size-[max(75vw,75svh)] -translate-x-1/2 -translate-y-1/2">
          <div className="animate-aurora-spin size-full will-change-transform motion-reduce:animate-none">
            <div className="animate-aurora-1 absolute top-[8%] left-[8%] size-104 rounded-full bg-(--aurora-from) blur-[90px] will-change-transform motion-reduce:animate-none md:size-160 md:blur-[120px]" />
            <div className="animate-aurora-2 absolute top-[12%] right-[6%] size-96 rounded-full bg-(--aurora-via) blur-[100px] will-change-transform motion-reduce:animate-none md:size-144 md:blur-[130px]" />
            <div className="animate-aurora-3 absolute bottom-[6%] left-[30%] size-104 rounded-full bg-(--aurora-to) blur-[110px] will-change-transform motion-reduce:animate-none md:size-152 md:blur-[140px]" />
          </div>
        </div>
      </div>

      {grid && (
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[48px_48px] opacity-60 mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      )}
    </div>
  );
}
