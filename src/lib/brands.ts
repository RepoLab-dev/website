export type BrandKind = "git_host" | "working_tree" | "vcs";
export type BrandStatus = "planned" | "placeholder";
export type VcsType = "git" | "mercurial" | "jujutsu" | "pijul" | "subversion" | "perforce" | "fossil";

export type Brand = {
  id: string;
  name: string;
  /** Light-theme CSS-mask fill (Simple Icons hex unless noted). */
  color: string;
  /** Dark-theme fill when `color` fails contrast. Official invert where it exists. */
  colorDark?: string;
  kind: BrandKind;
  status: BrandStatus;
  vcs: VcsType[];
};

/** Hosts and engines RepoLab is a mask over. Icons from Simple Icons (CC0) unless noted. */
export const brands: Brand[] = [
  { id: "github", name: "GitHub", color: "#181717", colorDark: "#FFFFFF", kind: "git_host", status: "planned", vcs: ["git"] },
  { id: "gitlab", name: "GitLab", color: "#FC6D26", kind: "git_host", status: "placeholder", vcs: ["git"] },
  { id: "bitbucket", name: "Bitbucket", color: "#0052CC", colorDark: "#2684FF", kind: "git_host", status: "placeholder", vcs: ["git"] },
  { id: "codeberg", name: "Codeberg", color: "#2185D0", kind: "git_host", status: "placeholder", vcs: ["git"] },
  { id: "forgejo", name: "Forgejo", color: "#BA4A00", colorDark: "#FB923C", kind: "git_host", status: "placeholder", vcs: ["git"] },
  { id: "gitea", name: "Gitea", color: "#609926", kind: "git_host", status: "placeholder", vcs: ["git"] },
  { id: "gitee", name: "Gitee", color: "#C71D23", colorDark: "#E33C42", kind: "git_host", status: "placeholder", vcs: ["git"] },
  { id: "sourcehut", name: "SourceHut", color: "#333333", colorDark: "#FFFFFF", kind: "git_host", status: "placeholder", vcs: ["git"] },
  { id: "azuredevops", name: "Azure Repos", color: "#0078D4", colorDark: "#007EDE", kind: "git_host", status: "placeholder", vcs: ["git"] },
  { id: "git", name: "Git", color: "#F05032", kind: "working_tree", status: "placeholder", vcs: ["git"] },
  { id: "mercurial", name: "Mercurial", color: "#8C8C8C", kind: "vcs", status: "placeholder", vcs: ["mercurial"] },
  { id: "jujutsu", name: "Jujutsu", color: "#5B4B8A", colorDark: "#8272B2", kind: "vcs", status: "placeholder", vcs: ["jujutsu"] },
  { id: "pijul", name: "Pijul", color: "#3D7A5C", colorDark: "#458968", kind: "vcs", status: "placeholder", vcs: ["pijul"] },
  { id: "subversion", name: "Subversion", color: "#809CC9", kind: "vcs", status: "placeholder", vcs: ["subversion"] },
  { id: "perforce", name: "Perforce", color: "#394D6B", colorDark: "#607EAA", kind: "vcs", status: "placeholder", vcs: ["perforce"] },
];

export const gitHosts = brands.filter((b) => b.kind === "git_host");
export const vcsEngines = brands.filter((b) => b.kind === "working_tree" || b.kind === "vcs");
