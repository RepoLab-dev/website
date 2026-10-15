import { Title } from "@solidjs/meta";
import { EmailSentence } from "~/components/email-sentence";
import { PageFrame } from "~/components/page-frame";
import { useI18n } from "~/lib/i18n";
import { SUPPORT_EMAIL, SITE_NAME } from "~/lib/utils";

export default function PrivacyPage() {
  const { t } = useI18n();
  return (
    <PageFrame title={t("privacy_title")}>
      <article class="prose-page">
        <Title>{t("title_page", { page: t("privacy_title"), site: SITE_NAME })}</Title>
        <p>{t("privacy_p1")}</p>
        <p>
          <EmailSentence text={t("privacy_p2", { email: SUPPORT_EMAIL })} email={SUPPORT_EMAIL} />
        </p>
      </article>
    </PageFrame>
  );
}
