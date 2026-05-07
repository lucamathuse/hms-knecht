# Hausmeisterservice K. Knecht — Nuxt 4 Projekt

Statisch generierte Website mit Vue 3, Nuxt 4 und Resend für das
Kontaktformular.

## Architektur

```
hausmeisterservice-knecht/
├── app/
│   ├── pages/                 ← File-based Routing
│   │   ├── index.vue          → /
│   │   ├── impressum.vue      → /impressum
│   │   └── datenschutz.vue    → /datenschutz
│   ├── layouts/
│   │   ├── default.vue        ← Standard (Startseite)
│   │   └── legal.vue          ← Schmaler (Rechtliches)
│   ├── components/
│   │   ├── ContactForm.vue    ← Kontaktformular mit Resend
│   │   ├── PageFooter.vue     ← Footer mit Legal-Links
│   │   └── MetaBar.vue        ← Top-Bar
│   ├── composables/
│   │   └── useSiteConfig.ts   ← Zentrale Site-Daten (DRY)
│   ├── assets/css/
│   │   ├── tokens.css         ← Design-Tokens (Farben, Schriften)
│   │   ├── base.css           ← Reset + Body
│   │   └── components.css     ← Komponenten-Styles
│   └── app.vue
├── server/api/
│   └── contact.post.ts        ← POST /api/contact (Resend)
├── public/
│   └── robots.txt
├── nuxt.config.ts
└── .env.example
```

## Setup

### 1. Dependencies installieren

```bash
npm install
```

### 2. Environment konfigurieren

```bash
cp .env.example .env
```

`.env` öffnen und ausfüllen:

```env
NUXT_RESEND_API_KEY=re_dein_echter_key
NUXT_MAIL_FROM=Hausmeisterservice K. Knecht <noreply@hausmeisterservice-knecht.de>
NUXT_MAIL_TO=kontakt@hausmeisterservice-knecht.de
NUXT_PUBLIC_SITE_URL=https://www.hausmeisterservice-knecht.de
```

### 3. Resend einrichten

1. Account auf [resend.com](https://resend.com) anlegen
2. Domain hinzufügen + DNS-Einträge (SPF, DKIM) beim Provider hinterlegen
3. API-Key generieren → in `.env` eintragen
4. **DPA abschließen** (Settings → Legal) — DSGVO-Pflicht

### 4. Entwicklung

```bash
npm run dev
```

→ http://localhost:3000

### 5. Build & Deploy — DREI Optionen

#### Option A: Statisches Hosting (empfohlen)

```bash
npm run generate
```

Erzeugt vollständig statisches HTML in `.output/public/`.
**Aber:** Statische Dateien können keine API-Routes ausführen — der
Kontaktformular-Endpunkt muss separat deployed werden (siehe unten).

#### Option B: Hybrid mit Node-Server

```bash
npm run build
node .output/server/index.mjs
```

HTML wird beim Build pre-rendert (statisch ausgeliefert), API läuft
serverseitig. Best of both worlds — SEO bleibt perfekt, Formular
funktioniert direkt.

#### Option C: Plattform-Deploy

Nuxt 4 hat Adapter für Vercel, Netlify, Cloudflare etc.
Funktioniert ohne extra Konfiguration — pushen, fertig.

### 6. Bei statischem Hosting (Option A): API extern

Wenn du nur die generierten HTML-Dateien hochlädst, brauchst du das
API-Backend separat. Zwei Wege:

**Variante 1:** Den `server.js` Backend-Code aus dem `backend/`-Ordner
des vorherigen Setups verwenden — der ist standalone und tut dasselbe.

**Variante 2:** Im Frontend (`ContactForm.vue`) den Endpunkt umschreiben:

```ts
await $fetch("https://api.deine-domain.de/contact", { ... });
```

→ und dort einen kleinen Express- oder ähnlichen Server betreiben.

## Was wo geändert wird

| Was?                       | Wo?                                      |
|----------------------------|------------------------------------------|
| Telefon, Adresse, Name     | `app/composables/useSiteConfig.ts`       |
| Farben, Schriften          | `app/assets/css/tokens.css`              |
| Layout-Stile               | `app/assets/css/components.css`          |
| Inhalte Startseite         | `app/pages/index.vue`                    |
| Inhalte Impressum          | `app/pages/impressum.vue`                |
| Inhalte Datenschutz        | `app/pages/datenschutz.vue`              |
| Resend-Konfiguration       | `.env`                                   |
| API-Logik / Validierung    | `server/api/contact.post.ts`             |

Da alle Stamm-Daten zentral im `useSiteConfig`-Composable liegen, muss
z. B. eine neue Telefonnummer nur dort geändert werden — sie wirkt sich
sofort auf alle drei Seiten und das JSON-LD-Schema aus.

## SEO

- Statisches Pre-Rendering (`nuxt generate`): HTML pro Route
- `useSeoMeta()` für Title, Description, OG, Twitter pro Seite
- JSON-LD `HomeAndConstructionBusiness`-Schema in der Startseite
- Geo-Tags, Canonical, hreflang
- Impressum & Datenschutz als `noindex`
- `robots.txt` und Sitemap-Hinweis im public-Ordner

## Was vor dem Live-Gang noch zu tun ist

- [ ] Resend-Account + Domain-Verifizierung + DPA
- [ ] `og-image.jpg` (1200×630 px) in `public/` ablegen
- [ ] Favicon-Set (`favicon.svg`, `favicon-32x32.png`, etc.) in `public/`
- [ ] Hosting-Anbieter-Daten in `app/pages/datenschutz.vue` § 04 ergänzen
- [ ] AVV mit Hoster und Resend abschließen
- [ ] Cookie-Banner einbauen (für GA4 später)
- [ ] `og-image.jpg` und Sitemap erzeugen lassen
