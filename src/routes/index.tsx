import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { BrandCarousel } from "~/components/brand-carousel";
import { HeroBlurism } from "~/components/hero-blurism";
import { MaskWindow } from "~/components/mask-window";
import { PageFrame } from "~/components/page-frame";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { gitHosts, vcsEngines } from "~/lib/brands";
import { useI18n } from "~/lib/i18n";
import { DOCS_URL, SITE_NAME } from "~/lib/utils";

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
      <section class="relative isolate mx-6 mt-3 mb-3 min-h-[min(88vh,52rem)] overflow-hidden rounded-3xl sm:mx-8 lg:mx-[50px]">
        <HeroBlurism />
        <div class="relative z-10 mx-auto grid min-h-[min(88vh,52rem)] max-w-6xl items-end gap-10 px-4 pb-14 pt-28 sm:px-6 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)]">
          <div>
            <p class="font-mono text-xs tracking-[0.18em] text-ochre uppercase">{t("hero_kicker")}</p>
            <h1 class="hero-title font-hero mt-3 max-w-3xl text-5xl leading-[1.15] sm:text-7xl lg:text-8xl">
              {t("hero_title")}
            </h1>
            <p class="mt-4 max-w-2xl text-lg font-medium text-foreground/90 sm:text-xl">{t("hero_lead")}</p>
            <p class="mt-2 max-w-xl text-sm text-muted-foreground sm:text-base">{t("hero_sub")}</p>
            <div class="mt-8 flex flex-wrap gap-2.5">
              <A href="/providers">
                <Button size="lg">{t("cta_providers")}</Button>
              </A>
              <a href={DOCS_URL}>
                <Button size="lg" variant="outline">
                  {t("cta_docs")}
                </Button>
              </a>
            </div>
          </div>
          <MaskWindow />
        </div>
      </section>

      <div class="space-y-8 py-8">
        <BrandCarousel items={gitHosts} label={t("carousel_hosts_title")} lede={t("carousel_hosts_lede")} />
        <BrandCarousel
          items={vcsEngines}
          label={t("carousel_vcs_title")}
          lede={t("carousel_vcs_lede")}
          reverse
        />
      </div>

      <PageFrame>
        <section class="grid gap-4 md:grid-cols-3">
          <For each={layers()}>
            {(layer) => (
              <Card>
                <CardHeader>
                  <CardTitle>{layer.title}</CardTitle>
                  <CardDescription>{layer.body}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p class="font-mono text-xs text-muted-foreground">{t("adapter_placeholder")}</p>
                </CardContent>
              </Card>
            )}
          </For>
        </section>
      </PageFrame>
    </div>
  );
}
