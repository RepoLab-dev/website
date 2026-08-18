import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { SiteFooter } from "~/components/site-footer";
import { StickyNav } from "~/components/site-nav";
import { I18nProvider, useI18n } from "~/lib/i18n";
import { ThemeProvider } from "~/lib/theme";
import { SITE_NAME } from "~/lib/utils";
import "./app.css";

function LoadingFallback() {
  const { t } = useI18n();
  return <div class="px-4 py-6 text-muted-foreground sm:px-6">{t("loading")}</div>;
}

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>{SITE_NAME}</Title>
          <ThemeProvider>
            <I18nProvider>
              <div class="flex min-h-screen flex-col">
                <StickyNav />
                <main class="flex-1">
                  <Suspense fallback={<LoadingFallback />}>
                    {props.children}
                  </Suspense>
                </main>
                <SiteFooter />
              </div>
            </I18nProvider>
          </ThemeProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
