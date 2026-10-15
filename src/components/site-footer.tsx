import { A } from "@solidjs/router";
import { For } from "solid-js";
import { LocaleSwitcher } from "~/components/locale-switcher";
import { LogoMark } from "~/components/logo-mark";
import { useI18n } from "~/lib/i18n";
import { DOCS_URL, GITHUB_ORG, ORG_HOME, PRODUCT_NAME, SUPPORT_EMAIL } from "~/lib/utils";

const footLink = "text-[hsl(var(--stage-ink)/0.72)] no-underline hover:text-[hsl(var(--gilt))]";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { t } = useI18n();
  const related = [
    { href: "https://devcentr.org", label: "DevCentr" },
    { href: "https://openshellorg.github.io/", label: "OpenShellOrg" },
    { href: "https://hci-nerdz.github.io/", label: "HCI Nerdz" },
    { href: "https://linx.photos/", label: "linx.photos" },
  ];
  return (
    <footer class="bg-[hsl(var(--stage))] text-[hsl(var(--stage-ink))]">
      <div class="mx-auto grid max-w-7xl gap-12 px-5 pt-16 pb-10 sm:px-8 md:grid-cols-[minmax(0,1.3fr)_repeat(3,minmax(0,1fr))]">
        <div class="max-w-sm">
          <div class="flex items-center gap-3">
            <LogoMark class="size-12 [&_path]:fill-[hsl(var(--gilt))]" />
            <span class="font-display text-3xl">{PRODUCT_NAME}</span>
          </div>
          <p class="mt-4 text-[hsl(var(--stage-ink)/0.72)]">{t("footer_blurb")}</p>
          <p class="mt-3">
            <a class="text-[hsl(var(--gilt))] underline decoration-1 underline-offset-4" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
        <nav class="flex flex-col gap-2.5" aria-labelledby="foot-product">
          <h2 id="foot-product" class="mb-1 font-display text-xl text-[hsl(var(--gilt))]">
            {t("footer_product")}
          </h2>
          <A href="/providers" class={footLink}>
            {t("nav_providers")}
          </A>
          <A href="/news" class={footLink}>
            {t("nav_news")}
          </A>
          <a href={DOCS_URL} class={footLink}>
            {t("nav_docs")}
          </a>
          <a href={GITHUB_ORG} class={footLink}>
            GitHub
          </a>
        </nav>
        <nav class="flex flex-col gap-2.5" aria-labelledby="foot-legal">
          <h2 id="foot-legal" class="mb-1 font-display text-xl text-[hsl(var(--gilt))]">
            {t("footer_legal")}
          </h2>
          <A href="/privacy" class={footLink}>
            {t("footer_privacy")}
          </A>
          <A href="/terms" class={footLink}>
            {t("footer_terms")}
          </A>
          <A href="/support" class={footLink}>
            {t("footer_support")}
          </A>
        </nav>
        <nav class="flex flex-col gap-2.5" aria-labelledby="foot-related">
          <h2 id="foot-related" class="mb-1 font-display text-xl text-[hsl(var(--gilt))]">
            {t("footer_related")}
          </h2>
          <a href={ORG_HOME} class={footLink}>
            RepoLabs
          </a>
          <For each={related}>
            {(r) => (
              <a href={r.href} class={footLink} target="_blank" rel="noreferrer">
                {r.label}
              </a>
            )}
          </For>
        </nav>
      </div>
      <div class="mx-auto max-w-7xl border-t border-[hsl(var(--stage-ink)/0.12)] px-5 py-6 text-sm text-[hsl(var(--stage-ink)/0.55)] sm:px-8">
        <div class="mb-4 sm:hidden">
          <LocaleSwitcher always />
        </div>
        © {year} RepoLabs. {t("mask_credit")}
      </div>
    </footer>
  );
}
