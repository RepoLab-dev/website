import {
  createContext,
  createEffect,
  createSignal,
  onMount,
  useContext,
  type ParentProps,
} from "solid-js";

export type Locale = "en" | "es" | "fr";

const dict = {
  en: {
    nav_home: "Home",
    nav_providers: "Providers",
    nav_news: "News",
    nav_docs: "Docs",
    nav_aria: "Primary",
    loading: "Loading…",
    theme_light: "Use light theme",
    theme_dark: "Use dark theme",
    hero_kicker: "RepoLabs product",
    hero_title: "RepoLab",
    hero_lead: "One frontend for GitHub, other git providers, and other VCS systems.",
    hero_sub:
      "A wrapper and cockpit, not a new version-control engine. Adapters are placeholders until each provider ships.",
    cta_providers: "Browse providers",
    cta_docs: "Explore the docs »",
    layer_hosts_title: "Git hosts",
    layer_hosts_body:
      "GitHub first, then other git hosting APIs behind the same review and browse surfaces.",
    layer_repos_title: "Local and remote repos",
    layer_repos_body: "Open a working tree or a hosted repository without switching products for each vendor.",
    layer_vcs_title: "Other VCS backends",
    layer_vcs_body:
      "Adapters for Mercurial, Jujutsu, Pijul, Fossil, SVN, and Perforce — protocol stays underneath.",
    adapter_placeholder: "Adapter status: placeholder",
    mask_caption: "RepoLab is a mask over other code forges and their feature sets",
    carousel_hosts_title: "Git hosts",
    carousel_hosts_lede: "One review surface. Many hosting APIs.",
    carousel_vcs_title: "Version-control engines",
    carousel_vcs_lede: "Git and other engines stay underneath the same cockpit.",
    carousel_prev: "Previous",
    carousel_next: "Next",
    mask_credit: "Mask mark after Delapouite / game-icons.net (CC BY 3.0).",
    providers_title: "Providers",
    providers_lede:
      "RepoLab talks to hosts and engines through adapters. Entries here are named placeholders, not live integrations.",
    providers_git_hosts_title: "Git hosts",
    providers_engines_title: "VCS engines",
    providers_non_git_title: "Non-git providers",
    providers_non_git_lede: "Provider examples beyond git hosts and core engine names.",
    providers_non_git_fossil: "Fossil (distributed VCS with built-in web UI and tickets), often self-hosted.",
    providers_non_git_heptapod: "Heptapod: Mercurial forge built on GitLab.",
    providers_non_git_rhodecode: "RhodeCode: enterprise hosting for Git, Mercurial, and Subversion.",
    supported_vcs: "Supported VCS: {list}",
    vcs_git: "Git",
    vcs_mercurial: "Mercurial",
    vcs_jujutsu: "Jujutsu",
    vcs_pijul: "Pijul",
    vcs_subversion: "Subversion",
    vcs_perforce: "Perforce",
    vcs_fossil: "Fossil",
    kind_git_host: "Git host",
    kind_working_tree: "Working tree",
    kind_non_git: "Other VCS backend",
    status_planned: "First adapter (planned)",
    status_placeholder: "Placeholder",
    news_title: "News",
    news_lede: "Outward record of what RepoLabs shipped or announced.",
    news_missing: "Missing article.",
    news_back: "Back to news",
    docs_title: "Docs",
    docs_lede:
      "Teaching and reference live on the org docs hub so this product site is not a second docs site.",
    docs_cta: "Explore the docs »",
    privacy_title: "Privacy",
    privacy_p1:
      "This site is a product landing. Cookie use is limited to theme and language preference storage. No accounts or analytics are wired in this placeholder build.",
    privacy_p2: "To request deletion or help, email {email} with subject “Privacy”.",
    terms_title: "Terms",
    terms_p1:
      "RepoLab is provided as-is while adapters and a working workspace are still placeholders. Do not rely on this build for production source control.",
    terms_p2: "Questions: {email}.",
    support_title: "Support",
    support_p1: "Email {email} or open an issue on {github}.",
    support_p2: "Mail routing is a placeholder until org email is set up.",
    footer_blurb: "Unified frontend for GitHub, other git hosts, and other VCS backends. Built by RepoLabs.",
    footer_product: "Product",
    footer_legal: "Legal",
    footer_related: "Related",
    footer_privacy: "Privacy",
    footer_terms: "Terms",
    footer_support: "Support",
    title_home: "{site} · one UI for version control",
    title_page: "{page} · {site}",
  },
  es: {
    nav_home: "Inicio",
    nav_providers: "Proveedores",
    nav_news: "Noticias",
    nav_docs: "Docs",
    nav_aria: "Principal",
    loading: "Cargando…",
    theme_light: "Usar tema claro",
    theme_dark: "Usar tema oscuro",
    hero_kicker: "Producto de RepoLabs",
    hero_title: "RepoLab",
    hero_lead: "Un frontend para GitHub, otros anfitriones git y otros sistemas VCS.",
    hero_sub:
      "Una capa y un puesto de mando, no un motor nuevo de control de versiones. Los adaptadores son marcadores de posición hasta que cada proveedor esté listo.",
    cta_providers: "Ver proveedores",
    cta_docs: "Explorar la documentación »",
    layer_hosts_title: "Anfitriones git",
    layer_hosts_body:
      "GitHub primero, luego otras APIs de hospedaje git detrás de las mismas superficies de revisión y exploración.",
    layer_repos_title: "Repositorios locales y remotos",
    layer_repos_body:
      "Abre un árbol de trabajo o un repositorio hospedado sin cambiar de producto por cada proveedor.",
    layer_vcs_title: "Otros backends VCS",
    layer_vcs_body:
      "Adaptadores para Mercurial, Jujutsu, Pijul, Fossil, SVN y Perforce — el protocolo queda debajo.",
    adapter_placeholder: "Estado del adaptador: marcador de posición",
    mask_caption: "RepoLab es una máscara sobre otras forjas de código y sus conjuntos de funciones.",
    carousel_hosts_title: "Anfitriones git",
    carousel_hosts_lede: "Una misma superficie de revisión. Muchas APIs de hospedaje.",
    carousel_vcs_title: "Motores de control de versiones",
    carousel_vcs_lede: "Git y otros motores quedan debajo del mismo puesto de mando.",
    carousel_prev: "Anterior",
    carousel_next: "Siguiente",
    mask_credit: "Marca de máscara según Delapouite / game-icons.net (CC BY 3.0).",
    providers_title: "Proveedores",
    providers_lede:
      "RepoLab habla con anfitriones y motores a través de adaptadores. Estas entradas son nombres previstos, no integraciones en vivo.",
    providers_git_hosts_title: "Anfitriones git",
    providers_engines_title: "Motores VCS",
    providers_non_git_title: "Proveedores no git",
    providers_non_git_lede: "Ejemplos de proveedores más allá de los anfitriones git y de los nombres de motor.",
    providers_non_git_fossil: "Fossil (VCS distribuido con web y tickets integrados), usado a menudo en autoalojado.",
    providers_non_git_heptapod: "Heptapod: forja Mercurial construida sobre GitLab.",
    providers_non_git_rhodecode: "RhodeCode: alojamiento empresarial para Git, Mercurial y Subversion.",
    supported_vcs: "VCS compatible: {list}",
    vcs_git: "Git",
    vcs_mercurial: "Mercurial",
    vcs_jujutsu: "Jujutsu",
    vcs_pijul: "Pijul",
    vcs_subversion: "Subversion",
    vcs_perforce: "Perforce",
    vcs_fossil: "Fossil",
    kind_git_host: "Anfitrión git",
    kind_working_tree: "Árbol de trabajo",
    kind_non_git: "Backend VCS alternativo",
    status_planned: "Primer adaptador (previsto)",
    status_placeholder: "Marcador de posición",
    news_title: "Noticias",
    news_lede: "Registro público de lo que RepoLabs publicó o anunció.",
    news_missing: "Artículo no encontrado.",
    news_back: "Volver a noticias",
    docs_title: "Docs",
    docs_lede:
      "La enseñanza y la referencia viven en el hub de documentación de la organización para que este sitio de producto no sea un segundo sitio de docs.",
    docs_cta: "Explorar la documentación »",
    privacy_title: "Privacidad",
    privacy_p1:
      "Este sitio es una página de producto. Las cookies se limitan a preferencias de tema e idioma. Esta versión provisional no tiene cuentas ni analítica.",
    privacy_p2: "Para pedir borrado o ayuda, escribe a {email} con el asunto “Privacy”.",
    terms_title: "Términos",
    terms_p1:
      "RepoLab se ofrece tal cual mientras los adaptadores y el espacio de trabajo siguen en marcadores de posición. No dependas de esta versión para control de código en producción.",
    terms_p2: "Consultas: {email}.",
    support_title: "Soporte",
    support_p1: "Escribe a {email} o abre un issue en {github}.",
    support_p2: "El correo de la organización es un marcador de posición hasta que exista el ruteo.",
    footer_blurb:
      "Frontend unificado para GitHub, otros anfitriones git y otros backends VCS. Hecho por RepoLabs.",
    footer_product: "Producto",
    footer_legal: "Legal",
    footer_related: "Relacionados",
    footer_privacy: "Privacidad",
    footer_terms: "Términos",
    footer_support: "Soporte",
    title_home: "{site} · una UI para el control de versiones",
    title_page: "{page} · {site}",
  },
  fr: {
    nav_home: "Accueil",
    nav_providers: "Fournisseurs",
    nav_news: "Actualités",
    nav_docs: "Docs",
    nav_aria: "Principal",
    loading: "Chargement…",
    theme_light: "Passer au thème clair",
    theme_dark: "Passer au thème sombre",
    hero_kicker: "Produit RepoLabs",
    hero_title: "RepoLab",
    hero_lead: "Un frontend pour GitHub, d’autres hôtes git et d’autres VCS.",
    hero_sub:
      "Une couche et un poste de pilotage, pas un nouveau moteur de gestion de versions. Les adaptateurs restent des placeholders jusqu’à ce que chaque fournisseur soit branché.",
    cta_providers: "Parcourir les fournisseurs",
    cta_docs: "Explorer la doc »",
    layer_hosts_title: "Hôtes git",
    layer_hosts_body:
      "GitHub d’abord, puis d’autres API d’hébergement git derrière les mêmes surfaces de relecture et de parcours.",
    layer_repos_title: "Dépôts locaux et distants",
    layer_repos_body:
      "Ouvrir un arbre de travail ou un dépôt hébergé sans changer de produit pour chaque fournisseur.",
    layer_vcs_title: "Autres backends VCS",
    layer_vcs_body:
      "Adaptateurs pour Mercurial, Jujutsu, Pijul, Fossil, SVN et Perforce — le protocole reste en dessous.",
    adapter_placeholder: "Statut de l’adaptateur : placeholder",
    mask_caption: "RepoLab est un masque posé sur d’autres forges de code et leurs fonctionnalités.",
    carousel_hosts_title: "Hôtes git",
    carousel_hosts_lede: "Une même surface de relecture. Plusieurs API d’hébergement.",
    carousel_vcs_title: "Moteurs de gestion de versions",
    carousel_vcs_lede: "Git et les autres moteurs restent sous le même poste de pilotage.",
    carousel_prev: "Précédent",
    carousel_next: "Suivant",
    mask_credit: "Marque masque d’après Delapouite / game-icons.net (CC BY 3.0).",
    providers_title: "Fournisseurs",
    providers_lede:
      "RepoLab parle aux hôtes et aux moteurs via des adaptateurs. Ces entrées sont des noms prévus, pas des intégrations en production.",
    providers_git_hosts_title: "Hôtes git",
    providers_engines_title: "Moteurs VCS",
    providers_non_git_title: "Fournisseurs hors git",
    providers_non_git_lede: "Exemples de fournisseurs au-delà des hôtes git et des noms de moteurs.",
    providers_non_git_fossil: "Fossil (VCS distribué avec interface web et tickets intégrés), souvent auto-hébergé.",
    providers_non_git_heptapod: "Heptapod : forge Mercurial construite sur GitLab.",
    providers_non_git_rhodecode: "RhodeCode : hébergement entreprise pour Git, Mercurial et Subversion.",
    supported_vcs: "VCS pris en charge : {list}",
    vcs_git: "Git",
    vcs_mercurial: "Mercurial",
    vcs_jujutsu: "Jujutsu",
    vcs_pijul: "Pijul",
    vcs_subversion: "Subversion",
    vcs_perforce: "Perforce",
    vcs_fossil: "Fossil",
    kind_git_host: "Hôte git",
    kind_working_tree: "Arbre de travail",
    kind_non_git: "Backend VCS alternatif",
    status_planned: "Premier adaptateur (prévu)",
    status_placeholder: "Placeholder",
    news_title: "Actualités",
    news_lede: "Registre public de ce que RepoLabs a publié ou annoncé.",
    news_missing: "Article introuvable.",
    news_back: "Retour aux actualités",
    docs_title: "Docs",
    docs_lede:
      "L’enseignement et la référence vivent sur le hub de documentation de l’organisation, pour que ce site produit ne soit pas un second site de docs.",
    docs_cta: "Explorer la doc »",
    privacy_title: "Confidentialité",
    privacy_p1:
      "Ce site est une page produit. Les cookies se limitent au thème et à la langue. Cette version provisoire n’a ni comptes ni analytique.",
    privacy_p2: "Pour une suppression ou de l’aide, écrire à {email} avec l’objet « Privacy ».",
    terms_title: "Conditions",
    terms_p1:
      "RepoLab est fourni en l’état tant que les adaptateurs et l’espace de travail restent des placeholders. Ne pas s’appuyer sur cette version pour du contrôle de sources en production.",
    terms_p2: "Questions : {email}.",
    support_title: "Assistance",
    support_p1: "Écrire à {email} ou ouvrir une issue sur {github}.",
    support_p2: "Le routage mail de l’organisation est un placeholder jusqu’à sa mise en place.",
    footer_blurb:
      "Frontend unifié pour GitHub, d’autres hôtes git et d’autres backends VCS. Réalisé par RepoLabs.",
    footer_product: "Produit",
    footer_legal: "Mentions",
    footer_related: "Liens",
    footer_privacy: "Confidentialité",
    footer_terms: "Conditions",
    footer_support: "Assistance",
    title_home: "{site} · une UI pour le contrôle de versions",
    title_page: "{page} · {site}",
  },
} as const;

export type DictKey = keyof (typeof dict)["en"];

interface I18nValue {
  locale: () => Locale;
  setLocale: (l: Locale) => void;
  t: (key: DictKey, vars?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nValue>();
const STORAGE_KEY = "repolab-locale";

function interpolate(template: string, vars?: Record<string, string>) {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, name: string) => vars[name] ?? `{${name}}`);
}

export function I18nProvider(props: ParentProps) {
  const [locale, setLocaleSignal] = createSignal<Locale>("en");

  onMount(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in dict) setLocaleSignal(stored);
  });

  createEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale();
  });

  const setLocale = (l: Locale) => {
    setLocaleSignal(l);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, l);
  };

  const t = (key: DictKey, vars?: Record<string, string>) =>
    interpolate(dict[locale()][key] ?? dict.en[key], vars);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>{props.children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const LOCALES: { id: Locale; label: string }[] = [
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
  { id: "fr", label: "FR" },
];
