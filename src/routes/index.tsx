import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { BrandIcon } from "~/components/brand-icon";
import { MaskWindow } from "~/components/mask-window";
import { gitHosts, vcsEngines, type Brand, type VcsType } from "~/lib/brands";
import { useI18n, type DictKey } from "~/lib/i18n";
import { DOCS_URL, SITE_NAME } from "~/lib/utils";

const vcsLabelKey: Record<VcsType, DictKey> = {
  git: "vcs_git",
  mercurial: "vcs_mercurial",
  jujutsu: "vcs_jujutsu",
  pijul: "vcs_pijul",
  subversion: "vcs_subversion",
  perforce: "vcs_perforce",
  fossil: "vcs_fossil",
};

function CastList(props: { title: string; lede: string; items: Brand[] }) {
  const { t } = useI18n();
  const vcsList = (vcs: VcsType[]) => vcs.map((type) => t(vcsLabelKey[type])).join(", ");
  return (
    <section class="mt-16 first:mt-0" aria-labelledby={`cast-${props.items[0].kind}`}>
      <div class="mb-6 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <h3 id={`cast-${props.items[0].kind}`} class="t-h2">
          {props.title}
        </h3>
        <p class="max-w-md text-muted-foreground">{props.lede}</p>
      </div>
      <ul class="playbill">
        <For each={props.items}>
          {(b) => (
            <li class="playbill-row">
              <span class="playbill-name">
                <BrandIcon id={b.id} color={b.color} colorDark={b.colorDark} />
                {b.name}
              </span>
              <span class="playbill-leader" aria-hidden="true" />
              <span class="playbill-role">{t("supported_vcs", { list: vcsList(b.vcs) })}</span>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}

export default function Home() {
  const { t } = useI18n();
  const layers = () => [
    { title: t("layer_hosts_title"), body: t("layer_hosts_body") },
    { title: t("layer_repos_title"), body: t("layer_repos_body") },
    { title: t("layer_vcs_title"), body: t("layer_vcs_body") },
  ];
  return (
    <div>
      <Title>{t("title_home", { site: SITE_NAME })}</Title>

      <section class="stage">
        <div class="stage-grid mx-auto max-w-7xl px-5 sm:px-8">
          <div>
            <h1 class="t-display stage-title">{t("hero_title")}</h1>
            <p class="t-lead mt-6 font-medium">{t("hero_lead")}</p>
            <p class="mt-4 max-w-[46ch] text-[hsl(var(--stage-ink)/0.72)]">{t("hero_sub")}</p>
            <div class="mt-9 flex flex-wrap gap-3">
              <A href="/providers" class="btn btn-rose">
                {t("cta_providers")}
              </A>
              <a href={DOCS_URL} class="btn btn-line">
                {t("cta_docs")}
              </a>
            </div>
          </div>
          <MaskWindow />
        </div>
      </section>

      <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <CastList items={gitHosts} title={t("carousel_hosts_title")} lede={t("carousel_hosts_lede")} />
        <CastList items={vcsEngines} title={t("carousel_vcs_title")} lede={t("carousel_vcs_lede")} />
      </div>

      <section class="border-t border-border bg-muted/50">
        <div class="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <h2 class="t-h2 mb-10 max-w-xl">{t("layers_title")}</h2>
          <div class="plates">
            <For each={layers()}>
              {(layer) => (
                <article class="plate">
                  <h3 class="t-h3">{layer.title}</h3>
                  <p class="max-w-[52ch] text-muted-foreground">{layer.body}</p>
                  <p class="plate-status">{t("adapter_placeholder")}</p>
                </article>
              )}
            </For>
          </div>
        </div>
      </section>
    </div>
  );
}
