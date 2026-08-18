import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { PageFrame } from "~/components/page-frame";
import { useI18n } from "~/lib/i18n";
import { newsPosts } from "~/lib/news";
import { SITE_NAME } from "~/lib/utils";

export default function NewsIndex() {
  const { t } = useI18n();
  return (
    <PageFrame>
      <div class="space-y-6">
        <Title>{t("title_page", { page: t("news_title"), site: SITE_NAME })}</Title>
        <h1 class="text-3xl font-semibold">{t("news_title")}</h1>
        <p class="text-sm text-muted-foreground">{t("news_lede")}</p>
        <ul class="space-y-4">
          <For each={newsPosts}>
            {(post) => (
              <li class="border-b border-border/60 pb-4">
                <p class="font-mono text-xs text-muted-foreground">{post.date}</p>
                <A href={`/news/${post.slug}`} class="text-xl font-semibold hover:underline">
                  {post.title}
                </A>
                <p class="mt-1 text-sm text-muted-foreground">{post.dek}</p>
              </li>
            )}
          </For>
        </ul>
      </div>
    </PageFrame>
  );
}
