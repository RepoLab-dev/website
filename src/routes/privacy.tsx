import { Title } from "@solidjs/meta";
import { EmailSentence } from "~/components/email-sentence";
import { PageFrame } from "~/components/page-frame";
import { useI18n } from "~/lib/i18n";
import { SUPPORT_EMAIL, SITE_NAME } from "~/lib/utils";

export default function PrivacyPage() {
  const { t } = useI18n();
  return (
    <PageFrame>
      <article class="mx-auto max-w-3xl space-y-4">
        <Title>{t("title_page", { page: t("privacy_title"), site: SITE_NAME })}</Title>
        <h1 class="text-3xl font-semibold">{t("privacy_title")}</h1>
        <p>{t("privacy_p1")}</p>
        <p>
          <EmailSentence text={t("privacy_p2", { email: SUPPORT_EMAIL })} email={SUPPORT_EMAIL} />
        </p>
      </article>
    </PageFrame>
  );
}
