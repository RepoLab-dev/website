import { Moon, Sun } from "lucide-solid";
import { useI18n } from "~/lib/i18n";
import { useTheme } from "~/lib/theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useI18n();
  return (
    <button
      type="button"
      class="inline-flex size-10 items-center justify-center rounded-full text-[hsl(var(--stage-ink)/0.75)] transition-colors hover:text-[hsl(var(--gilt))] [&_svg]:size-[1.15rem]"
      aria-label={theme() === "dark" ? t("theme_light") : t("theme_dark")}
      onClick={toggle}
    >
      {theme() === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}
