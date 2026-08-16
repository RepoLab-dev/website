import { Title } from "@solidjs/meta";
import { PRODUCT_NAME, SITE_NAME, SUPPORT_EMAIL } from "~/lib/utils";

export default function TermsPage() {
  return (
    <article class="mx-auto max-w-3xl space-y-4">
      <Title>Terms · {SITE_NAME}</Title>
      <h1 class="font-display text-3xl font-semibold">Terms</h1>
      <p>
        {PRODUCT_NAME} is provided as-is while adapters and a working workspace are still
        placeholders. Do not rely on this build for production source control.
      </p>
      <p>
        Questions: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>
    </article>
  );
}
