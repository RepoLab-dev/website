import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { BrandIcon } from "~/components/brand-icon";
import { PageFrame } from "~/components/page-frame";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { brands, type BrandStatus, type VcsType } from "~/lib/brands";
import { useI18n } from "~/lib/i18n";
import { SITE_NAME } from "~/lib/utils";

const vcsLabelKey: Record<
  VcsType,
  "vcs_git" | "vcs_mercurial" | "vcs_jujutsu" | "vcs_pijul" | "vcs_subversion" | "vcs_perforce" | "vcs_fossil"
> = {
  git: "vcs_git",
  mercurial: "vcs_mercurial",
  jujutsu: "vcs_jujutsu",
  pijul: "vcs_pijul",
  subversion: "vcs_subversion",
  perforce: "vcs_perforce",
  fossil: "vcs_fossil",
};

const statusKey: Record<BrandStatus, "status_planned" | "status_placeholder"> = {
  planned: "status_planned",
  placeholder: "status_placeholder",
};

export default function ProvidersPage() {
  const { t } = useI18n();
  const gitHosts = brands.filter((b) => b.kind === "git_host");
  const vcsEngines = brands.filter((b) => b.kind !== "git_host");
  const vcsList = (vcs: VcsType[]) => vcs.map((type) => t(vcsLabelKey[type])).join(", ");

  return (
    <PageFrame>
      <div class="space-y-6">
        <Title>{t("title_page", { page: t("providers_title"), site: SITE_NAME })}</Title>
        <h1 class="text-3xl font-semibold">{t("providers_title")}</h1>
        <p class="max-w-2xl text-muted-foreground">{t("providers_lede")}</p>
        <section class="space-y-3">
          <h2 class="text-xl font-semibold">{t("providers_git_hosts_title")}</h2>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <For each={gitHosts}>
              {(p) => (
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-3">
                      <BrandIcon id={p.id} color={p.color} title={p.name} class="size-8" />
                      {p.name}
                    </CardTitle>
                    <CardDescription>
                      {t("supported_vcs", { list: vcsList(p.vcs) })} · {t(statusKey[p.status])}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
            </For>
          </div>
        </section>
        <section class="space-y-3">
          <h2 class="text-xl font-semibold">{t("providers_engines_title")}</h2>
          <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <For each={vcsEngines}>
              {(p) => (
                <Card>
                  <CardHeader>
                    <CardTitle class="flex items-center gap-3">
                      <BrandIcon id={p.id} color={p.color} title={p.name} class="size-8" />
                      {p.name}
                    </CardTitle>
                    <CardDescription>
                      {t("supported_vcs", { list: vcsList(p.vcs) })} · {t(statusKey[p.status])}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )}
            </For>
          </div>
        </section>
        <section class="space-y-3">
          <h2 class="text-xl font-semibold">{t("providers_non_git_title")}</h2>
          <p class="max-w-2xl text-sm text-muted-foreground">{t("providers_non_git_lede")}</p>
          <ul class="space-y-1.5 text-sm text-muted-foreground">
            <li>{t("providers_non_git_fossil")}</li>
            <li>{t("providers_non_git_heptapod")}</li>
            <li>{t("providers_non_git_rhodecode")}</li>
          </ul>
        </section>
      </div>
    </PageFrame>
  );
}
