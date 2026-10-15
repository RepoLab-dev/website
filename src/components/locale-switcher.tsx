import { For } from "solid-js";
import { LOCALES, useI18n, type Locale } from "~/lib/i18n";
import { cn } from "~/lib/utils";

export function LocaleSwitcher(props: { always?: boolean }) {
  const { locale, setLocale } = useI18n();
  return (
    <div
      class={cn(
        "items-center gap-0.5 text-[0.8125rem]",
        props.always ? "inline-flex" : "hidden sm:inline-flex",
      )} role="group" aria-label="Language">
      <For each={LOCALES}>
        {(item) => (
          <button
            type="button"
            aria-pressed={locale() === item.id}
            class={cn(
              "rounded-full px-2 py-1 transition-colors",
              locale() === item.id
                ? "text-[hsl(var(--gilt))] underline decoration-2 underline-offset-4"
                : "text-[hsl(var(--stage-ink)/0.6)] hover:text-[hsl(var(--stage-ink))]",
            )}
            onClick={() => setLocale(item.id as Locale)}
          >
            {item.label}
          </button>
        )}
      </For>
    </div>
  );
}
