import { Title } from "@solidjs/meta";
import { EmailSentence } from "~/components/email-sentence";
import { PageFrame } from "~/components/page-frame";
import { useI18n } from "~/lib/i18n";
import { SITE_NAME, SUPPORT_EMAIL } from "~/lib/utils";

export default function TermsPage() {
  const { t } = useI18n();
  return (
    <PageFrame>
      <article class="mx-auto max-w-3xl space-y-4">
        <Title>{t("title_page", { page: t("terms_title"), site: SITE_NAME })}</Title>
        <h1 class="font-display text-3xl font-semibold">{t("terms_title")}</h1>
        <p>{t("terms_p1")}</p>
        <p>
          <EmailSentence text={t("terms_p2", { email: SUPPORT_EMAIL })} email={SUPPORT_EMAIL} />
        </p>
      </article>
    </PageFrame>
  );
}
