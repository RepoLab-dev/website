import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { Card, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { SITE_NAME } from "~/lib/utils";

const providers = [
  { name: "GitHub", kind: "Git host", status: "First adapter (planned)" },
  { name: "GitLab", kind: "Git host", status: "Placeholder" },
  { name: "Codeberg / Forgejo", kind: "Git host", status: "Placeholder" },
  { name: "Bitbucket", kind: "Git host", status: "Placeholder" },
  { name: "Azure Repos", kind: "Git host", status: "Placeholder" },
  { name: "Local git", kind: "Working tree", status: "Placeholder" },
  { name: "Mercurial", kind: "Non-git VCS", status: "Placeholder" },
  { name: "Jujutsu", kind: "Non-git VCS", status: "Placeholder" },
  { name: "Pijul", kind: "Non-git VCS", status: "Placeholder" },
  { name: "Subversion", kind: "Non-git VCS", status: "Placeholder" },
  { name: "Perforce", kind: "Non-git VCS", status: "Placeholder" },
];

export default function ProvidersPage() {
  return (
    <div class="space-y-6">
      <Title>Providers · {SITE_NAME}</Title>
      <h1 class="font-display text-3xl font-semibold">Providers</h1>
      <p class="max-w-2xl text-muted-foreground">
        RepoLab talks to hosts and engines through adapters. Rows here are named placeholders, not live
        integrations.
      </p>
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <For each={providers}>
          {(p) => (
            <Card>
              <CardHeader>
                <CardTitle>{p.name}</CardTitle>
                <CardDescription>
                  {p.kind} · {p.status}
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </For>
      </div>
    </div>
  );
}
