export type BrandKind = "git_host" | "working_tree" | "vcs";
export type BrandStatus = "planned" | "placeholder";

export type Brand = {
  id: string;
  name: string;
  color: string;
  kind: BrandKind;
  status: BrandStatus;
};

/** Hosts and engines RepoLab is a mask over. Icons from Simple Icons (CC0) unless noted. */
export const brands: Brand[] = [
  { id: "github", name: "GitHub", color: "#181717", kind: "git_host", status: "planned" },
  { id: "gitlab", name: "GitLab", color: "#FC6D26", kind: "git_host", status: "placeholder" },
  { id: "bitbucket", name: "Bitbucket", color: "#0052CC", kind: "git_host", status: "placeholder" },
  { id: "codeberg", name: "Codeberg", color: "#2185D0", kind: "git_host", status: "placeholder" },
  { id: "forgejo", name: "Forgejo", color: "#BA4A00", kind: "git_host", status: "placeholder" },
  { id: "gitea", name: "Gitea", color: "#609926", kind: "git_host", status: "placeholder" },
  { id: "gitee", name: "Gitee", color: "#C71D23", kind: "git_host", status: "placeholder" },
  { id: "sourcehut", name: "SourceHut", color: "#333333", kind: "git_host", status: "placeholder" },
  { id: "azuredevops", name: "Azure Repos", color: "#0078D4", kind: "git_host", status: "placeholder" },
  { id: "git", name: "Git", color: "#F05032", kind: "working_tree", status: "placeholder" },
  { id: "mercurial", name: "Mercurial", color: "#8C8C8C", kind: "vcs", status: "placeholder" },
  { id: "jujutsu", name: "Jujutsu", color: "#5B4B8A", kind: "vcs", status: "placeholder" },
  { id: "pijul", name: "Pijul", color: "#3D7A5C", kind: "vcs", status: "placeholder" },
  { id: "subversion", name: "Subversion", color: "#809CC9", kind: "vcs", status: "placeholder" },
  { id: "perforce", name: "Perforce", color: "#394D6B", kind: "vcs", status: "placeholder" },
];

export const gitHosts = brands.filter((b) => b.kind === "git_host");
export const vcsEngines = brands.filter((b) => b.kind === "working_tree" || b.kind === "vcs");
