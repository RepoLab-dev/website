export type NewsPost = {
  slug: string;
  title: string;
  date: string;
  dek: string;
  body: string[];
};

export const newsPosts: NewsPost[] = [
  {
    slug: "2026-08-15-hello-world",
    title: "RepoLab opens as a unified VCS client",
    date: "2026-08-15",
    dek: "RepoLabs published a public product surface for a browser frontend that treats Git hosts and non-Git version-control systems as backends behind one UI.",
    body: [
      "RepoLab is a wrapper layer over repository hosts and version-control engines, not a replacement for Git, Mercurial, Jujutsu, Pijul, SVN, or Perforce.",
      "The first public site is a landing and news channel at repolab.dev. Provider adapters and a working workspace are still placeholders.",
      "RepoLabs is the organization. The GitHub slug is repolab-dev until a closer login becomes available. The intended org homepage is repolabs.com.",
    ],
  },
];

export function newsBySlug(slug: string) {
  return newsPosts.find((p) => p.slug === slug);
}
