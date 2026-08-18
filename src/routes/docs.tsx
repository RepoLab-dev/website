import { Title } from "@solidjs/meta";
import { PageFrame } from "~/components/page-frame";
import { useI18n } from "~/lib/i18n";
import { DOCS_URL, SITE_NAME } from "~/lib/utils";

export default function DocsStub() {
  const { t } = useI18n();
  return (
    <PageFrame>
      <div class="space-y-4">
        <Title>{t("title_page", { page: t("docs_title"), site: SITE_NAME })}</Title>
        <h1 class="text-3xl font-semibold">{t("docs_title")}</h1>
        <p class="text-muted-foreground">{t("docs_lede")}</p>
        <p>
          <a class="text-primary underline" href={DOCS_URL}>
            {t("docs_cta")}
          </a>
        </p>
      </div>
    </PageFrame>
  );
}
