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
    { href: "/providers", label: t("nav_providers") },
    { href: "/news", label: t("nav_news") },
    { href: "/docs", label: t("nav_docs") },
  ];
  return (
    <header class="sticky top-0 z-40 border-b border-[hsl(var(--stage-ink)/0.1)] bg-[hsl(var(--stage)/0.92)] text-[hsl(var(--stage-ink))] backdrop-blur-md">
      <div class="mx-auto flex max-w-7xl items-center gap-2 px-5 py-2.5 sm:gap-4 sm:px-8">
        <A href="/" class="flex items-center gap-2.5 font-display text-2xl no-underline" aria-label={t("nav_home")}>
          <LogoMark class="size-9 [&_path]:fill-[hsl(var(--gilt))]" />
          <span class="hidden sm:inline">{PRODUCT_NAME}</span>
        </A>
        <nav class="ml-auto flex gap-1 overflow-x-auto sm:ml-6 sm:mr-auto" aria-label={t("nav_aria")}>
          <For each={items()}>
            {(item) => {
              const active = () => location.pathname.startsWith(item.href);
              return (
                <A
                  href={item.href}
                  aria-current={active() ? "page" : undefined}
                  class={cn(
                    "rounded-full px-3 py-1.5 text-[0.9375rem] whitespace-nowrap no-underline transition-colors",
                    active()
                      ? "bg-[hsl(var(--gilt))] text-[hsl(var(--stage))]"
                      : "text-[hsl(var(--stage-ink)/0.75)] hover:text-[hsl(var(--stage-ink))]",
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
