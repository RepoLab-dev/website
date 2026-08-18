import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { BrandIcon } from "~/components/brand-icon";
import { PageFrame } from "~/components/page-frame";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { brands, type BrandKind, type BrandStatus } from "~/lib/brands";
import { useI18n } from "~/lib/i18n";
import { SITE_NAME } from "~/lib/utils";

const kindKey: Record<BrandKind, "kind_git_host" | "kind_working_tree" | "kind_non_git"> = {
  git_host: "kind_git_host",
  working_tree: "kind_working_tree",
  vcs: "kind_non_git",
};

const statusKey: Record<BrandStatus, "status_planned" | "status_placeholder"> = {
  planned: "status_planned",
  placeholder: "status_placeholder",
};

export default function ProvidersPage() {
  const { t } = useI18n();
  return (
    <PageFrame>
      <div class="space-y-6">
        <Title>{t("title_page", { page: t("providers_title"), site: SITE_NAME })}</Title>
        <h1 class="font-display text-3xl font-semibold">{t("providers_title")}</h1>
        <p class="max-w-2xl text-muted-foreground">{t("providers_lede")}</p>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <For each={brands}>
            {(p) => (
              <Card>
                <CardHeader>
                  <CardTitle class="flex items-center gap-3">
                    <BrandIcon id={p.id} color={p.color} title={p.name} class="size-8" />
                    {p.name}
                  </CardTitle>
                  <CardDescription>
                    {t(kindKey[p.kind])} · {t(statusKey[p.status])}
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
          </For>
        </div>
      </div>
    </PageFrame>
  );
}
