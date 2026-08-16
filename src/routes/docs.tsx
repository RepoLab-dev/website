import { Title } from "@solidjs/meta";
import { DOCS_URL, SITE_NAME } from "~/lib/utils";

export default function DocsStub() {
  return (
    <div class="space-y-4">
      <Title>Docs · {SITE_NAME}</Title>
      <h1 class="font-display text-3xl font-semibold">Docs</h1>
      <p class="text-muted-foreground">
        Teaching and reference live on the org docs hub so this product site is not a second docs
        site.
      </p>
      <p>
        <a class="text-primary underline" href={DOCS_URL}>
          Explore the docs »
        </a>
      </p>
    </div>
  );
}
