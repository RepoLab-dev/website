import { SITE_URL } from "~/lib/utils";
import { newsPosts } from "~/lib/news";

/** Public content paths derived from route modules + news catalog (no auth/API). */
function getSitemapRoutes(): string[] {
  const staticRoutes = [
    "/",
    "/docs",
    "/news",
    "/providers",
    "/privacy",
    "/support",
    "/terms",
  ];
  const news = newsPosts.map((p) => `/news/${p.slug}`);
  return [...new Set([...staticRoutes, ...news])];
}

function escapeXml(s: string) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function toLoc(route: string) {
  if (route === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${route}`;
}

export async function GET() {
  const body = getSitemapRoutes()
    .map((r) => `  <url><loc>${escapeXml(toLoc(r))}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300",
    },
  });
}
