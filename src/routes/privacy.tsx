import { Title } from "@solidjs/meta";
import { SUPPORT_EMAIL, SITE_NAME } from "~/lib/utils";

export default function PrivacyPage() {
  return (
    <article class="mx-auto max-w-3xl space-y-4">
      <Title>Privacy · {SITE_NAME}</Title>
      <h1 class="font-display text-3xl font-semibold">Privacy</h1>
      <p>
        This site is a product landing. Cookie use is limited to theme preference storage. No
        accounts or analytics are wired in this placeholder build.
      </p>
      <p>
        To request deletion or help, email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>{" "}
        with subject “Privacy”.
      </p>
    </article>
  );
}
