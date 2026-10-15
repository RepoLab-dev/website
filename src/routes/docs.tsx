import { Title } from "@solidjs/meta";
import { PageFrame } from "~/components/page-frame";
import { useI18n } from "~/lib/i18n";
import { DOCS_URL, SITE_NAME } from "~/lib/utils";

export default function DocsStub() {
  const { t } = useI18n();
  return (
    <PageFrame title={t("docs_title")} lede={t("docs_lede")}>
      <div>
        <Title>{t("title_page", { page: t("docs_title"), site: SITE_NAME })}</Title>
        <p>
          <a class="btn bg-primary text-primary-foreground hover:opacity-90" href={DOCS_URL}>
            {t("docs_cta")}
          </a>
        </p>
      </div>
    </PageFrame>
  );
}
