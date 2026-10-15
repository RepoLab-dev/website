import { Title } from "@solidjs/meta";
import { EmailSentence } from "~/components/email-sentence";
import { PageFrame } from "~/components/page-frame";
import { useI18n } from "~/lib/i18n";
import { GITHUB_ORG, SITE_NAME, SUPPORT_EMAIL } from "~/lib/utils";

export default function SupportPage() {
  const { t } = useI18n();
  return (
    <PageFrame title={t("support_title")}>
      <article class="prose-page">
        <Title>{t("title_page", { page: t("support_title"), site: SITE_NAME })}</Title>
        <p>
          <EmailSentence
            text={t("support_p1", { email: SUPPORT_EMAIL, github: "GitHub" })}
            email={SUPPORT_EMAIL}
          />
        </p>
        <p>
          <a href={GITHUB_ORG}>
            {GITHUB_ORG}
          </a>
        </p>
        <p class="text-muted-foreground">{t("support_p2")}</p>
      </article>
    </PageFrame>
  );
}
