import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
    >
      <div className="flex gap-2 dark:hidden">
        <IconMoon className="size-5" />
        <span className="block lg:hidden">Dark</span>
      </div>

      <div className="hidden gap-2 dark:flex">
        <IconSun className="size-5" />
        <span className="block lg:hidden">Light</span>
      </div>

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
