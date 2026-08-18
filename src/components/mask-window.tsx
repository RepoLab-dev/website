import { For } from "solid-js";
import { BrandIcon } from "~/components/brand-icon";
import { brands } from "~/lib/brands";
import { useI18n } from "~/lib/i18n";

/** Large carnival mask; brand marks show through. Swap is the product metaphor. */
export function MaskWindow() {
  const { t } = useI18n();
  return (
    <figure class="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
      <div class="mask-window" aria-hidden="true">
        <div class="mask-window-drift">
          <For each={[...brands, ...brands]}>
            {(item) => <BrandIcon id={item.id} color={item.color} class="size-12 sm:size-14" />}
          </For>
        </div>
      </div>
      <figcaption class="mt-3 text-center text-sm text-muted-foreground lg:text-left">
        {t("mask_caption")}
      </figcaption>
    </figure>
  );
}
