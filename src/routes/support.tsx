import { Title } from "@solidjs/meta";
import { GITHUB_ORG, SITE_NAME, SUPPORT_EMAIL } from "~/lib/utils";

export default function SupportPage() {
  return (
    <article class="mx-auto max-w-3xl space-y-4">
      <Title>Support · {SITE_NAME}</Title>
      <h1 class="font-display text-3xl font-semibold">Support</h1>
      <p>
        Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or open an issue on{" "}
        <a href={GITHUB_ORG}>{GITHUB_ORG}</a>.
      </p>
      <p class="text-sm text-muted-foreground">Mail routing is a placeholder until org email is set up.</p>
    </article>
  );
}
