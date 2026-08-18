import { A } from "@solidjs/router";
import { LogoMark } from "~/components/logo-mark";
import { useI18n } from "~/lib/i18n";
import { DOCS_URL, GITHUB_ORG, ORG_HOME, PRODUCT_NAME, SUPPORT_EMAIL } from "~/lib/utils";

const footLink =
  "text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { t } = useI18n();
  return (
    <footer class="mx-auto mt-12 max-w-6xl px-4 pb-12 sm:px-6">
      <div class="flex flex-col gap-7 border-t border-border/70 pt-7 sm:flex-row sm:items-start sm:justify-between">
        <div class="max-w-xs">
          <div class="flex items-center gap-2.5">
            <LogoMark class="size-9" />
            <span class="text-sm font-semibold tracking-tight">{PRODUCT_NAME}</span>
          </div>
          <p class="mt-2.5 text-sm leading-relaxed text-muted-foreground">{t("footer_blurb")}</p>
          <p class="mt-2 text-sm">
            <a class={footLink} href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
        <div class="flex flex-wrap gap-x-8 gap-y-5 text-[11px] font-medium uppercase tracking-[0.16em]">
          <nav class="flex flex-col gap-2" aria-label={t("footer_product")}>
            <span class="text-muted-foreground/70">{t("footer_product")}</span>
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
          <nav class="flex flex-col gap-2" aria-label={t("footer_legal")}>
            <span class="text-muted-foreground/70">{t("footer_legal")}</span>
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
          <nav class="flex flex-col gap-2" aria-label={t("footer_related")}>
            <span class="text-muted-foreground/70">{t("footer_related")}</span>
            <a href={ORG_HOME} class={footLink}>
              RepoLabs
            </a>
            <a href="https://devcentr.org" class={footLink} target="_blank" rel="noreferrer">
              DevCentr
            </a>
            <a href="https://openshellorg.github.io/" class={footLink} target="_blank" rel="noreferrer">
              OpenShellOrg
            </a>
            <a href="https://hci-nerdz.github.io/" class={footLink} target="_blank" rel="noreferrer">
              HCI Nerdz
            </a>
            <a href="https://linx.photos/" class={footLink} target="_blank" rel="noreferrer">
              linx.photos
            </a>
          </nav>
        </div>
      </div>
      <p class="mt-7 text-xs text-muted-foreground">
        © {year} RepoLabs · {t("mask_credit")}
      </p>
    </footer>
  );
}
