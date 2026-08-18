import { A, useParams } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { For, Show } from "solid-js";
import { PageFrame } from "~/components/page-frame";
import { useI18n } from "~/lib/i18n";
import { newsBySlug } from "~/lib/news";
import { SITE_NAME } from "~/lib/utils";

export default function NewsArticle() {
  const params = useParams();
  const { t } = useI18n();
  const post = () => newsBySlug(params.slug ?? "");
  return (
    <PageFrame>
      <Show
        when={post()}
        fallback={
          <p>
            {t("news_missing")}{" "}
            <A href="/news" class="text-primary underline">
              {t("news_back")}
            </A>
          </p>
        }
      >
        {(p) => (
          <article class="mx-auto max-w-3xl space-y-4">
            <Title>
              {p().title} · {SITE_NAME}
            </Title>
            <p class="font-mono text-xs text-muted-foreground">{p().date}</p>
            <h1 class="text-3xl font-semibold">{p().title}</h1>
            <p class="text-lg text-foreground/90">{p().dek}</p>
            <For each={p().body}>{(para) => <p class="text-muted-foreground">{para}</p>}</For>
            <p>
              <A href="/news" class="text-primary underline">
                {t("news_back")}
              </A>
            </p>
          </article>
        )}
      </Show>
    </PageFrame>
  );
}
