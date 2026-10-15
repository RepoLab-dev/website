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
            <A href="/news" class="text-link">
              {t("news_back")}
            </A>
          </p>
        }
      >
        {(p) => (
          <article class="prose-page">
            <Title>
              {p().title} · {SITE_NAME}
            </Title>
            <time datetime={p().date} class="block text-sm text-muted-foreground tabular-nums">{p().date}</time>
            <h1 class="t-h1">{p().title}</h1>
            <p class="t-lead !max-w-none">{p().dek}</p>
            <For each={p().body}>{(para) => <p class="text-muted-foreground">{para}</p>}</For>
            <p>
              <A href="/news" class="text-link">
                {t("news_back")}
              </A>
            </p>
          </article>
        )}
      </Show>
    </PageFrame>
  );
}
