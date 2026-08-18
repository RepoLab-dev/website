# AGENTS.md — RepoLab-dev/website

## Facts
- Org: `RepoLab-dev` (display **RepoLabs**) · product: **RepoLab** · product domain `repolab.dev` · org homepage `repolabs.dev`
- Site: SolidStart + solid-ui (Kobalte) · hosting: Netlify (personal team, CLI/Actions only — do **not** link the GitHub org repo in the Netlify UI)
- Related OSS in footer: DevCentr, OpenShellOrg, HCI Nerdz, linx.photos, InstaLay — not FoodTruckNerdz
- Email placeholder: `hello@repolab.dev` (until Phase 8 mail is configured)
- Locales: `en` | `es` | `fr` (`src/lib/i18n.tsx`). News article bodies stay English (outward record).
- Hero background: replace `public/hero-blurism.svg` (or change `HERO_BLURISM_SRC` in `src/lib/utils.ts`). CSS `.hero-scrim` keeps type readable over the wash.
- Palette: linen / moss / terracotta / ochre chrome (Fraunces + Source Sans 3). Blurism lives in the hero, not the UI chrome.
- Hero title (`h1` on the homepage only): Nabla COLRv1, SIL OFL 1.1, self-hosted `public/fonts/nabla/Nabla.woff2`. Earth palettes `--nabla-linen` / `--nabla-soil` in `src/app.css` (`@font-palette-values`). Do not put Nabla on nav/body.
- Mark: Venetian carnival mask (Delapouite / game-icons.net, CC BY 3.0). RepoLab is a mask over other repo services. Source: `public/brand/mask.svg`.
- Brand icons live in `public/brand/` (Simple Icons CC0, plus small original marks for Azure Repos / Jujutsu / Pijul). `BrandIcon` is a CSS mask: light fill is brand `color`, `.dark` / `data-kb-theme="dark"` uses `colorDark` (GitHub and SourceHut invert to white). Do not bake GitHub-black into UI chrome.

## Commands
- `pnpm dev` / `pnpm build` / `pnpm logo:export` (needs sibling `../.github/assets/logo.svg`)

## Deploy
- GitHub Actions workflow `Deploy Netlify` pushes builds; secrets: `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`.
- Netlify site `repolab` (personal team). Production URL `https://repolab.dev`.
