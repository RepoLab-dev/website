import { A, useLocation } from "@solidjs/router";
import { For } from "solid-js";
import { LogoMark } from "~/components/logo-mark";
import { ThemeToggle } from "~/components/theme-toggle";
import { cn, PRODUCT_NAME } from "~/lib/utils";

const items = [
  { href: "/", label: "Home" },
  { href: "/providers", label: "Providers" },
  { href: "/news", label: "News" },
  { href: "/docs", label: "Docs" },
];

export function StickyNav() {
  const location = useLocation();
  return (
    <header class="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div class="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 sm:px-6">
        <A href="/" class="flex items-center gap-2 font-display text-sm font-semibold tracking-tight">
          <LogoMark class="size-8" />
          {PRODUCT_NAME}
        </A>
        <nav class="ml-2 flex flex-1 gap-1 overflow-x-auto" aria-label="Primary">
          <For each={items}>
            {(item) => {
              const active =
                item.href === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.href);
              return (
                <A
                  href={item.href}
                  class={cn(
                    "rounded-none px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
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
        <ThemeToggle />
      </div>
    </header>
  );
}
