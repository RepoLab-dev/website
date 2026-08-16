# AGENTS.md — repolab-dev/website

## Facts
- Org: `repolab-dev` (display **RepoLabs**) · product: **RepoLab** · product domain `repolab.dev` · org homepage placeholder `repolabs.com`
- Site: SolidStart + solid-ui (Kobalte) · hosting: Netlify (personal team, CLI/Actions only — do **not** link the GitHub org repo in the Netlify UI)
- Slug `repolab-dev` is a placeholder because `repolabs` is a GitHub user and `RepoLab` is an existing org
- Related OSS in footer: DevCentr, OpenShellOrg, HCI Nerdz, linx.photos, InstaLay — not FoodTruckNerdz
- Email placeholder: `hello@repolab.dev` (until Phase 8 mail is configured)

## Commands
- `pnpm dev` / `pnpm build` / `pnpm logo:export` (needs sibling `../.github/assets/logo.svg`)

## Deploy
- GitHub Actions workflow `Deploy Netlify` pushes builds; secrets: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`.
- Site ID is a placeholder until a blank Netlify site is created on the personal team.
