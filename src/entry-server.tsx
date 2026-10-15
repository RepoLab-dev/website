// @refresh reload
import gloockLatin from "@fontsource/gloock/files/gloock-latin-400-normal.woff2?url";
import schibstedLatin from "@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2?url";
import { createHandler, StartServer } from "@solidjs/start/server";

const themeBoot = `(function(){try{var k='repolab-theme';var s=localStorage.getItem(k);var d=s==='dark'||(s!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var r=document.documentElement;if(d){r.classList.add('dark');r.dataset.kbTheme='dark';r.style.colorScheme='dark';}else{r.dataset.kbTheme='light';r.style.colorScheme='light';}var l=localStorage.getItem('repolab-locale');if(l==='es'||l==='fr'||l==='en')r.lang=l;}catch(e){}})();`;

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="color-scheme" content="light dark" />
          <script>{themeBoot}</script>
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/logo-256.png" />
          <link rel="preload" as="font" type="font/woff2" href={gloockLatin} crossorigin="anonymous" />
          <link rel="preload" as="font" type="font/woff2" href={schibstedLatin} crossorigin="anonymous" />
          <meta name="theme-color" content="#170f22" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
