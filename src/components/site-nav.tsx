import { A, useLocation } from "@solidjs/router";
import { For } from "solid-js";
import { LocaleSwitcher } from "~/components/locale-switcher";
import { LogoMark } from "~/components/logo-mark";
import { ThemeToggle } from "~/components/theme-toggle";
import { useI18n } from "~/lib/i18n";
import { cn, PRODUCT_NAME } from "~/lib/utils";

export function StickyNav() {
  const location = useLocation();
  const { t } = useI18n();
  const items = () => [
    { href: "/", label: t("nav_home") },
    { href: "/providers", label: t("nav_providers") },
    { href: "/news", label: t("nav_news") },
    { href: "/docs", label: t("nav_docs") },
  ];
  return (
    <header class="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 sm:px-6">
        <A href="/" class="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <LogoMark class="size-10" />
          {PRODUCT_NAME}
        </A>
        <nav class="ml-2 flex flex-1 gap-1 overflow-x-auto" aria-label={t("nav_aria")}>
          <For each={items()}>
            {(item) => {
              const active =
                item.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.href);
              return (
                <A
                  href={item.href}
                  class={cn(
                    "rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
                    active
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </A>
              );
            }}
          </For>
        </nav>
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
