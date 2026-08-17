<div align="center">

<img src="../.github/assets/logo.svg" alt="RepoLabs mark" width="128" height="128" />

# RepoLab

**One UI for Git hosts, git repos, and the rest of version control.**

[![Explore the docs »](https://img.shields.io/badge/Explore_the_docs-→-0E1A24?style=for-the-badge)](https://docs.repolab.dev)

</div>

RepoLab is the browser frontend. RepoLabs (`RepoLab-dev` on GitHub, homepage [repolabs.dev](https://repolabs.dev)) is the lab around it.

See [CHANGELOG](CHANGELOG.adoc) for what shipped.

## Stack

- SolidStart + Tailwind + Kobalte (solid-ui)
- Netlify (blank personal-team site; GitHub Actions `netlify deploy`)

## Develop

```bash
pnpm install
pnpm logo:export
pnpm dev
```

## Deploy

Do not connect the GitHub org repo in the Netlify UI (team pricing). CI uses `NETLIFY_AUTH_TOKEN` + `NETLIFY_SITE_ID`.

Production hostname: [repolab.dev](https://repolab.dev).

<p align="right"><a href="#repolab">Back to top</a></p>
