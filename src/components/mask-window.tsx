import { createSignal, For, onCleanup, onMount } from "solid-js";
import { BrandIcon } from "~/components/brand-icon";
import { brands } from "~/lib/brands";
import { useI18n } from "~/lib/i18n";

/** Forges the hero lets you put behind the mask. A short, legible cast; the full list lives below. */
const castIds = ["github", "gitlab", "codeberg", "forgejo", "mercurial", "jujutsu", "pijul", "perforce"];
const cast = castIds.map((id) => brands.find((b) => b.id === id)!).filter(Boolean);

/**
 * The gilt carnival mask with a forge showing through the eye holes.
 * One orchestrated moment on load (the mask rises); everything after answers a click.
 */
export function MaskWindow() {
  const { t } = useI18n();
  const [active, setActive] = createSignal(cast[0].id);
  const face = () => cast.find((b) => b.id === active()) ?? cast[0];
  const tint = () => face().colorDark ?? face().color;

  // Before the visitor chooses, swap faces a few times so the metaphor reads, then stop.
  let chosen = false;
  onMount(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    const id = window.setInterval(() => {
      if (chosen || ++i >= cast.length) return window.clearInterval(id);
      setActive(cast[i].id);
    }, 1800);
    onCleanup(() => window.clearInterval(id));
  });

  return (
    <figure class="w-full">
      <div class="mask-stage mask-reveal" style={{ "--face": tint() }} aria-hidden="true">
        <div class="mask-behind" />
        <span class="mask-eye mask-eye-l">
          <BrandIcon id={face().id} />
        </span>
        <span class="mask-eye mask-eye-r">
          <BrandIcon id={face().id} />
        </span>
        <div class="mask-face" />
      </div>
      <figcaption class="mt-4 text-center text-base text-[hsl(var(--stage-ink)/0.75)]">
        {t("mask_caption")}
      </figcaption>
      <div class="cast-picker" role="group" aria-label={t("mask_pick")}>
        <For each={cast}>
          {(b) => (
            <button
              type="button"
              class="cast-chip"
              aria-pressed={active() === b.id}
              onClick={() => {
                chosen = true;
                setActive(b.id);
              }}
            >
              <BrandIcon id={b.id} />
              {b.name}
            </button>
          )}
        </For>
      </div>
    </figure>
  );
}
