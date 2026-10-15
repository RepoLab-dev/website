import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { BrandIcon } from "~/components/brand-icon";
import { PageFrame } from "~/components/page-frame";
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

  const Row = (p: (typeof brands)[number]) => (
    <li class="playbill-row">
      <span class="playbill-name">
        <BrandIcon id={p.id} color={p.color} colorDark={p.colorDark} />
        {p.name}
      </span>
      <span class="playbill-leader" aria-hidden="true" />
      <span class="playbill-role">
        {t("supported_vcs", { list: vcsList(p.vcs) })}
        <span class={p.status === "planned" ? "ml-3 text-[hsl(var(--rose))]" : "ml-3 text-[hsl(var(--verdigris))]"}>
          {t(statusKey[p.status])}
        </span>
      </span>
    </li>
  );

  return (
    <PageFrame title={t("providers_title")} lede={t("providers_lede")}>
      <Title>{t("title_page", { page: t("providers_title"), site: SITE_NAME })}</Title>
      <section class="mb-16">
        <h2 class="t-h2 mb-5">{t("providers_git_hosts_title")}</h2>
        <ul class="playbill">
          <For each={gitHosts}>{Row}</For>
        </ul>
      </section>
      <section class="mb-16">
        <h2 class="t-h2 mb-5">{t("providers_engines_title")}</h2>
        <ul class="playbill">
          <For each={vcsEngines}>{Row}</For>
        </ul>
      </section>
      <section class="plate max-w-4xl">
        <h2 class="t-h3">{t("providers_non_git_title")}</h2>
        <div>
          <p class="text-muted-foreground">{t("providers_non_git_lede")}</p>
          <ul class="mt-3 list-disc space-y-1.5 pl-5">
            <li>{t("providers_non_git_fossil")}</li>
            <li>{t("providers_non_git_heptapod")}</li>
            <li>{t("providers_non_git_rhodecode")}</li>
          </ul>
        </div>
      </section>
    </PageFrame>
  );
}
