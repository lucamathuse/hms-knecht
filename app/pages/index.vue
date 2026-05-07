<script setup lang="ts">
const config = useSiteConfig();
const runtime = useRuntimeConfig();
const siteUrl = runtime.public.siteUrl;

// SEO Meta-Tags — typisiert, automatisches OG/Twitter-Mapping
useSeoMeta({
    title: `${config.siteName} – ${config.city} im Sauerland | Garten · Renovierung · Winterdienst`,
    description: `Hausmeisterservice ${config.owner} in ${config.city} im Sauerland. Gartenarbeiten, Brennholz, Renovierung, Entrümpelung & Winterdienst für Privat- und Gewerbekunden in ${config.areasServed.slice(0, 3).join(", ")}. Jetzt anfragen: ${config.phoneMobile}`,
    keywords: `Hausmeisterservice ${config.city}, Hausmeister Sauerland, Gartenarbeiten ${config.city}, Brennholz ${config.city}, Winterdienst ${config.city}, Renovierung Sauerland, Hausmeister Medebach, Hausmeister Winterberg, Entrümpelung Sauerland, ${config.owner}`,
    author: config.owner,
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

    // Open Graph
    ogType: "website",
    ogLocale: "de_DE",
    ogSiteName: config.siteName,
    ogTitle: `${config.siteName} – ${config.city} im Sauerland`,
    ogDescription: `Ihr zuverlässiger Hausmeisterservice in ${config.areasServed.slice(0, 3).join(", ")}. Gartenarbeiten, Brennholz, Renovierung, Entrümpelung und Winterdienst aus einer Hand.`,
    ogUrl: siteUrl,
    ogImage: `${siteUrl}/og-image.jpg`,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: `${config.siteName} – ${config.city} im Sauerland`,

    // Twitter
    twitterCard: "summary_large_image",
    twitterTitle: `${config.siteName} – ${config.city} im Sauerland`,
    twitterDescription: "Gartenarbeiten, Brennholz, Renovierung, Entrümpelung & Winterdienst.",
    twitterImage: `${siteUrl}/og-image.jpg`,
});

// Geo-Tags und Canonical via useHead (useSeoMeta deckt das nicht direkt)
useHead({
    link: [{ rel: "canonical", href: `${siteUrl}/` }],
    meta: [
        { name: "geo.region", content: "DE-NW" },
        { name: "geo.placename", content: `${config.city}, Sauerland` },
        {
            name: "geo.position",
            content: `${config.latitude};${config.longitude}`,
        },
        { name: "ICBM", content: `${config.latitude}, ${config.longitude}` },
    ],
});

// JSON-LD Structured Data — wichtigster SEO-Hebel für lokale Suche.
// Wird im <head> als <script type="application/ld+json"> gerendert.
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#business`,
    name: config.siteName,
    alternateName: `Hausmeisterservice ${config.owner}`,
    description: `Hausmeisterservice für Privat- und Gewerbekunden in ${config.city} und Umgebung. Gartenarbeiten, Brennholz, Renovierung, Entrümpelung und Winterdienst aus einer Hand.`,
    url: `${siteUrl}/`,
    telephone: config.phoneMobileE164,
    email: config.email,
    founder: { "@type": "Person", name: config.owner },
    address: {
        "@type": "PostalAddress",
        streetAddress: config.street,
        postalCode: config.zip,
        addressLocality: config.city,
        addressRegion: config.region,
        addressCountry: config.country,
    },
    geo: {
        "@type": "GeoCoordinates",
        latitude: config.latitude,
        longitude: config.longitude,
    },
    areaServed: config.areasServed.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:00",
            closes: "19:00",
        },
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: config.phoneMobileE164,
        contactType: "customer service",
        areaServed: "DE",
        availableLanguage: "German",
    },
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Bank Transfer",
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Leistungen Hausmeisterservice",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Gartenarbeiten & Außenanlagen",
                    description:
                        "Rasen mähen, Bruchsteinmauern setzen, Bepflanzung und laufende Pflege für Privatgärten und gewerbliche Außenanlagen.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Brennholzverkauf",
                    description:
                        "Ofenfertiges Brennholz aus regionaler Forstwirtschaft. Lieferung auf Anfrage möglich.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Holz schneiden & spalten",
                    description: "Aufbereitung Ihres Holzes vor Ort mit eigenem Gerät.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Renovierung",
                    description:
                        "Malerarbeiten, Bodenverlegung sowie kleinere Ausbesserungsarbeiten in Wohn- und Geschäftsräumen.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Entrümpelungen",
                    description:
                        "Wohnungsauflösungen sowie Räumung von Keller und Dachboden inklusive fachgerechter Entsorgung.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Wartung & Reparatur",
                    description:
                        "Kleinreparaturen und laufende Instandhaltung rund um Gebäude und Grundstück.",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Winterdienst",
                    description:
                        "Schneeräumung und Streudienst für Geh- und Verkehrsflächen während der Wintermonate.",
                },
            },
        ],
    },
};

useHead({
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify(jsonLd),
        },
    ],
});
</script>

<template>
    <div>
        <header class="masthead" role="banner">
            <div class="eyebrow">
                <span class="eyebrow-num">Nº 01</span>
                <span>Hausmeisterservice · Hallenberg im Sauerland</span>
            </div>

            <div class="masthead-grid">
                <h1 class="title">
                    Karsten<br />
                    <span class="kn">Knecht.</span>
                </h1>
                <p class="lede">
                    Hausmeisterservice für Privat- und Gewerbekunden in
                    Hallenberg und Umgebung. Gartenarbeiten, Renovierung,
                    Brennholz und Winterdienst aus einer Hand.
                </p>
            </div>

            <div class="ornament">
                <span class="line" />
                <span>Haus &middot; Hof &middot; Garten</span>
                <span class="line" />
            </div>
        </header>

        <section
            class="leistungen"
            id="leistungen"
            aria-labelledby="leistungen-titel"
        >
            <div class="section-head">
                <div class="label">
                    <span class="label-num">§ 02</span>
                    <span>Leistungen</span>
                </div>
                <h2 id="leistungen-titel">
                    Unser <em>Angebot</em><br />im Überblick.
                </h2>
            </div>

            <div class="services-grid">
                <article class="service feature">
                    <div class="num">001 / Kerngeschäft</div>
                    <h3>
                        Garten&shy;arbeiten <em>&amp;</em> Außen&shy;anlagen
                    </h3>
                    <p>
                        Rasen mähen, Bruchstein&shy;mauern setzen, Bepflanzung
                        und laufende Pflege &ndash; für Privatgärten und
                        gewerbliche Außenanlagen.
                    </p>
                </article>

                <article class="service">
                    <div class="num">002</div>
                    <h3>Brennholz&shy;verkauf</h3>
                    <p>
                        Ofenfertiges Brennholz aus regionaler Forstwirtschaft.
                        Lieferung auf Anfrage möglich.
                    </p>
                </article>

                <article class="service">
                    <div class="num">003</div>
                    <h3>Schneiden &amp; Spalten</h3>
                    <p>
                        Aufbereitung Ihres Holzes vor Ort mit eigenem Gerät.
                    </p>
                </article>

                <article class="service">
                    <div class="num">004</div>
                    <h3>Renovierung</h3>
                    <p>
                        Maler&shy;arbeiten, Boden&shy;verlegung sowie kleinere
                        Aus&shy;besserungs&shy;arbeiten in Wohn- und
                        Geschäftsräumen.
                    </p>
                </article>

                <article class="service">
                    <div class="num">005</div>
                    <h3>Ent&shy;rümpelungen</h3>
                    <p>
                        Wohnungs&shy;auflösungen sowie Räumung von Keller und
                        Dachboden inklusive fachgerechter Entsorgung.
                    </p>
                </article>

                <article class="service">
                    <div class="num">006</div>
                    <h3>Wartung &amp; Reparatur</h3>
                    <p>
                        Klein&shy;reparaturen und laufende Instand&shy;haltung
                        rund um Gebäude und Grundstück.
                    </p>
                </article>

                <article class="service">
                    <div class="num">007</div>
                    <h3>Winter&shy;dienst</h3>
                    <p>
                        Schnee&shy;räumung und Streudienst für Geh- und
                        Verkehrs&shy;flächen während der Winter&shy;monate.
                    </p>
                </article>
            </div>
        </section>

        <section class="quote">
            <p class="quote-text">
                Tätig in Hallenberg, Medebach, <em>Winterberg</em> und Umgebung.
            </p>
            <div class="quote-attr">&mdash; Einzugsgebiet</div>
        </section>

        <section class="kontakt" id="kontakt" aria-labelledby="kontakt-titel">
            <div class="kontakt-left">
                <div class="label">
                    <span class="label-num">§ 03</span>
                    <span>Kontakt</span>
                </div>
                <h2 id="kontakt-titel">
                    Anfrage oder<br /><em>Terminvereinbarung.</em>
                </h2>
                <p>
                    Für ein unverbindliches Angebot erreichen Sie uns
                    telefonisch oder per Brief an die unten genannte
                    Anschrift.
                </p>
            </div>

            <div class="kontakt-right">
                <a
                    :href="`tel:${config.phoneMobileE164}`"
                    class="kontakt-row"
                    :aria-label="`${config.owner} mobil anrufen unter ${config.phoneMobile}`"
                >
                    <span class="index">→ Mobil</span>
                    <span class="info">
                        <small>Mobiltelefon</small>
                        <span>{{ config.phoneMobile }}</span>
                    </span>
                    <span class="arrow">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 15L15 5M15 5H7M15 5V13"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </a>

                <a
                    :href="`tel:${config.phoneFixE164}`"
                    class="kontakt-row"
                    :aria-label="`${config.owner} im Festnetz anrufen unter ${config.phoneFix}`"
                >
                    <span class="index">→ Festnetz</span>
                    <span class="info">
                        <small>Telefon</small>
                        <span>{{ config.phoneFix }}</span>
                    </span>
                    <span class="arrow">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            aria-hidden="true"
                        >
                            <path
                                d="M5 15L15 5M15 5H7M15 5V13"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </a>

                <div class="kontakt-row no-link">
                    <span class="index">→ Anschrift</span>
                    <span class="info">
                        <small>Postanschrift</small>
                        <span>
                            {{ config.street }}, {{ config.zip }}
                            {{ config.city }}
                        </span>
                    </span>
                    <span class="arrow">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                        >
                            <path d="M16 8a6 6 0 11-12 0 6 6 0 0112 0z" />
                            <circle cx="10" cy="8" r="2" />
                            <path d="M10 14v4" />
                        </svg>
                    </span>
                </div>

                <div class="cta-block">
                    <a :href="`tel:${config.phoneMobileE164}`" class="cta">
                        <span>Jetzt anrufen</span>
                        <span class="num">→ {{ config.phoneMobile }}</span>
                    </a>
                    <span class="cta-aside">
                        Erreichbarkeit Mo&ndash;Sa von 07:00 bis 19:00 Uhr.
                    </span>
                </div>
            </div>
        </section>

        <ContactForm />
    </div>
</template>
