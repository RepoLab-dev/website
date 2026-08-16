import { A } from "@solidjs/router";
import { LogoMark } from "~/components/logo-mark";
import { DOCS_URL, GITHUB_ORG, ORG_HOME, PRODUCT_NAME, SUPPORT_EMAIL } from "~/lib/utils";

const footLink =
  "text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer class="mx-auto mt-12 max-w-6xl px-4 pb-12 sm:px-6">
      <div class="flex flex-col gap-7 border-t border-border/70 pt-7 sm:flex-row sm:items-start sm:justify-between">
        <div class="max-w-xs">
          <div class="flex items-center gap-2.5">
            <LogoMark class="size-7" />
            <span class="font-display text-sm font-semibold tracking-tight">{PRODUCT_NAME}</span>
          </div>
          <p class="mt-2.5 text-sm leading-relaxed text-muted-foreground">
            Unified frontend for GitHub, other git hosts, and non-git VCS backends. Built by RepoLabs.
          </p>
          <p class="mt-2 text-sm">
            <a class={footLink} href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
        <div class="flex flex-wrap gap-x-8 gap-y-5 text-[11px] font-medium uppercase tracking-[0.16em]">
          <nav class="flex flex-col gap-2" aria-label="Product">
            <span class="text-muted-foreground/70">Product</span>
            <A href="/providers" class={footLink}>
              Providers
            </A>
            <A href="/news" class={footLink}>
              News
            </A>
            <a href={DOCS_URL} class={footLink}>
              Docs
            </a>
            <a href={GITHUB_ORG} class={footLink}>
              GitHub
            </a>
          </nav>
          <nav class="flex flex-col gap-2" aria-label="Legal">
            <span class="text-muted-foreground/70">Legal</span>
            <A href="/privacy" class={footLink}>
              Privacy
            </A>
            <A href="/terms" class={footLink}>
              Terms
            </A>
            <A href="/support" class={footLink}>
              Support
            </A>
          </nav>
          <nav class="flex flex-col gap-2" aria-label="Related">
            <span class="text-muted-foreground/70">Related</span>
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
      <p class="mt-7 text-xs text-muted-foreground">© {year} RepoLabs</p>
    </footer>
  );
}
