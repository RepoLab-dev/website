import { A, useParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { For, Show } from "solid-js";
import { newsBySlug } from "~/lib/news";
import { SITE_NAME } from "~/lib/utils";

export default function NewsArticle() {
  const params = useParams();
  const post = () => newsBySlug(params.slug);
  return (
    <Show
      when={post()}
      fallback={
        <p>
          Missing article. <A href="/news">Back to news</A>
        </p>
      }
    >
      {(p) => (
        <article class="mx-auto max-w-3xl space-y-4">
          <Title>
            {p().title} · {SITE_NAME}
          </Title>
          <p class="font-mono text-xs text-muted-foreground">{p().date}</p>
          <h1 class="font-display text-3xl font-semibold">{p().title}</h1>
          <p class="text-lg text-foreground/90">{p().dek}</p>
          <For each={p().body}>{(para) => <p class="text-muted-foreground">{para}</p>}</For>
        </article>
      )}
    </Show>
  );
}
