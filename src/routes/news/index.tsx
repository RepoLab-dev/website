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
    <PageFrame title={t("news_title")} lede={t("news_lede")}>
      <div>
        <Title>{t("title_page", { page: t("news_title"), site: SITE_NAME })}</Title>
        <ul class="max-w-3xl">
          <For each={newsPosts}>
            {(post) => (
              <li class="grid gap-2 border-b border-border py-7 first:pt-0 sm:grid-cols-[9rem_1fr] sm:gap-8">
                <time datetime={post.date} class="pt-1.5 text-sm text-muted-foreground tabular-nums">{post.date}</time>
                <div>
                <A href={`/news/${post.slug}`} class="t-h3 decoration-[hsl(var(--rose))] decoration-2 hover:underline">
                  {post.title}
                </A>
                <p class="mt-2 text-muted-foreground">{post.dek}</p>
                </div>
              </li>
            )}
          </For>
        </ul>
      </div>
    </PageFrame>
  );
}
