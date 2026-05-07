// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-05-07",
  devtools: { enabled: true },

  // Globale CSS-Dateien — werden in jede Seite eingebunden.
  // Reihenfolge wichtig: tokens → base → components.
  css: [
    "~/assets/css/tokens.css",
    "~/assets/css/base.css",
    "~/assets/css/components.css",
  ],

  // SEO-Standardwerte für alle Seiten — pro Seite mit useSeoMeta() überschreibbar.
  app: {
    head: {
      htmlAttrs: { lang: "de" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT@9..144,400;9..144,500;9..144,700;9..144,900&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
        },
      ],
      meta: [
        { name: "theme-color", content: "#1a237e" },
        { name: "msapplication-TileColor", content: "#1a237e" },
      ],
    },
  },

  // Runtime-Config — Werte aus .env zur Laufzeit verfügbar.
  // - private (nicht in 'public'): nur serverseitig
  // - public: client + server, sicherer Default für Site-URL
  runtimeConfig: {
    // Server-only (Resend)
    resendApiKey: "",
    mailFrom: "",
    mailTo: "",

    public: {
      siteUrl: "https://www.hausmeisterservice-knecht.de",
      siteName: "Hausmeisterservice K. Knecht",
    },
  },

  // SSG: nuxt generate → vollständig statisches HTML pro Route.
  // SEO bleibt erhalten, weil jede Seite als fertige HTML-Datei ausgeliefert wird.
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "/impressum", "/datenschutz"],
    },
  },
});
