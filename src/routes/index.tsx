import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { DOCS_URL, PRODUCT_NAME, SITE_NAME } from "~/lib/utils";

const layers = [
  {
    title: "Git hosts",
    body: "GitHub first, then other git hosting APIs behind the same review and browse surfaces.",
  },
  {
    title: "Local and remote repos",
    body: "Open a working tree or a hosted repository without switching products for each vendor.",
  },
  {
    title: "Non-git VCS",
    body: "Adapters for Mercurial, Jujutsu, Pijul, SVN, and Perforce — protocol stays underneath.",
  },
];

export default function Home() {
  return (
    <div class="space-y-10">
      <Title>
        {SITE_NAME} · one UI for version control
      </Title>
      <section class="relative overflow-hidden border border-border/60 bg-card/50 px-5 py-10 sm:px-9 sm:py-12">
        <div
          class="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(135deg, hsl(168 55% 28% / 0.18), transparent 45%), linear-gradient(225deg, hsl(195 70% 38% / 0.14), transparent 40%)",
          }}
        />
        <div class="relative max-w-2xl">
          <p class="font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">RepoLabs product</p>
          <h1 class="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {PRODUCT_NAME}
          </h1>
          <p class="mt-3 text-lg font-medium text-foreground/90">
            One frontend for GitHub, other git providers, and non-git VCS systems.
          </p>
          <p class="mt-2 text-sm text-muted-foreground sm:text-base">
            A wrapper and cockpit, not a new version-control engine. Adapters are placeholders until each
            provider ships.
          </p>
          <div class="mt-6 flex flex-wrap gap-2.5">
            <A href="/providers">
              <Button size="lg">Browse providers</Button>
            </A>
            <a href={DOCS_URL}>
              <Button size="lg" variant="outline">
                Explore the docs »
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section class="grid gap-4 md:grid-cols-3">
        <For each={layers}>
          {(layer) => (
            <Card>
              <CardHeader>
                <CardTitle>{layer.title}</CardTitle>
                <CardDescription>{layer.body}</CardDescription>
              </CardHeader>
              <CardContent>
                <p class="font-mono text-xs text-muted-foreground">Adapter status: placeholder</p>
              </CardContent>
            </Card>
          )}
        </For>
      </section>
    </div>
  );
}
