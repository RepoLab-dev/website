import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { newsPosts } from "~/lib/news";
import { SITE_NAME } from "~/lib/utils";

export default function NewsIndex() {
  return (
    <div class="space-y-6">
      <Title>News · {SITE_NAME}</Title>
      <h1 class="font-display text-3xl font-semibold">News</h1>
      <p class="text-sm text-muted-foreground">Outward record of what RepoLabs shipped or announced.</p>
      <ul class="space-y-4">
        <For each={newsPosts}>
          {(post) => (
            <li class="border-b border-border/60 pb-4">
              <p class="font-mono text-xs text-muted-foreground">{post.date}</p>
              <A href={`/news/${post.slug}`} class="font-display text-xl font-semibold hover:underline">
                {post.title}
              </A>
              <p class="mt-1 text-sm text-muted-foreground">{post.dek}</p>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
