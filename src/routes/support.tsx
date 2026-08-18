import { Title } from "@solidjs/meta";
import { EmailSentence } from "~/components/email-sentence";
import { PageFrame } from "~/components/page-frame";
import { useI18n } from "~/lib/i18n";
import { GITHUB_ORG, SITE_NAME, SUPPORT_EMAIL } from "~/lib/utils";

export default function SupportPage() {
  const { t } = useI18n();
  return (
    <PageFrame>
      <article class="mx-auto max-w-3xl space-y-4">
        <Title>{t("title_page", { page: t("support_title"), site: SITE_NAME })}</Title>
        <h1 class="text-3xl font-semibold">{t("support_title")}</h1>
        <p>
          <EmailSentence
            text={t("support_p1", { email: SUPPORT_EMAIL, github: "GitHub" })}
            email={SUPPORT_EMAIL}
          />
        </p>
        <p>
          <a class="text-primary underline" href={GITHUB_ORG}>
            {GITHUB_ORG}
          </a>
        </p>
        <p class="text-sm text-muted-foreground">{t("support_p2")}</p>
      </article>
    </PageFrame>
  );
}
