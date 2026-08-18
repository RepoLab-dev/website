import { For, onCleanup, onMount } from "solid-js";
import { BrandIcon } from "~/components/brand-icon";
import { Button } from "~/components/ui/button";
import type { Brand } from "~/lib/brands";
import { useI18n } from "~/lib/i18n";

export function BrandCarousel(props: {
  items: Brand[];
  label: string;
  lede: string;
  reverse?: boolean;
}) {
  const { t } = useI18n();
  let scroller: HTMLDivElement | undefined;
  let hovering = false;

  const scrollByCards = (dir: number) => {
    const el = scroller;
    if (!el) return;
    const step = Math.min(280, Math.floor(el.clientWidth * 0.72));
    const max = el.scrollWidth - el.clientWidth;
    let next = el.scrollLeft + dir * step;
    if (next > max - 8) next = 0;
    if (next < 0) next = max;
    el.scrollTo({ left: next, behavior: "smooth" });
  };

  onMount(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = window.setInterval(() => {
      if (!hovering) scrollByCards(props.reverse ? -1 : 1);
    }, 4200);
    onCleanup(() => window.clearInterval(id));
  });

  return (
    <section class="mx-auto max-w-6xl space-y-4 px-4 sm:px-6" aria-label={props.label}>
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 class="font-display text-2xl font-semibold">{props.label}</h2>
          <p class="mt-1 max-w-xl text-sm text-muted-foreground">{props.lede}</p>
        </div>
        <div class="flex gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-label={t("carousel_prev")}
            onClick={() => scrollByCards(-1)}
          >
            ←
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            aria-label={t("carousel_next")}
            onClick={() => scrollByCards(1)}
          >
            →
          </Button>
        </div>
      </div>
      <div
        ref={scroller}
        class="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:thin]"
        onMouseEnter={() => {
          hovering = true;
        }}
        onMouseLeave={() => {
          hovering = false;
        }}
      >
        <For each={props.items}>
          {(item) => (
            <article class="w-[11.5rem] shrink-0 snap-start border border-border bg-card p-4 shadow-sm">
              <div class="flex size-12 items-center justify-center rounded-sm bg-muted/80">
                <BrandIcon id={item.id} color={item.color} title={item.name} class="size-8" />
              </div>
              <h3 class="font-display mt-3 text-base font-semibold">{item.name}</h3>
              <p class="mt-1 font-mono text-[11px] text-muted-foreground">
                {t(item.kind === "git_host" ? "kind_git_host" : item.kind === "working_tree" ? "kind_working_tree" : "kind_non_git")}
              </p>
            </article>
          )}
        </For>
      </div>
    </section>
  );
}
