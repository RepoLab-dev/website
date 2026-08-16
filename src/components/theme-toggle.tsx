import { Moon, Sun } from "lucide-solid";
import { Button } from "~/components/ui/button";
import { useTheme } from "~/lib/theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <Button
      variant="ghost"
      size="icon"
      type="button"
      aria-label={theme() === "dark" ? "Use light theme" : "Use dark theme"}
      onClick={toggle}
    >
      {theme() === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
