<script setup lang="ts">
const config = useSiteConfig();
const runtime = useRuntimeConfig();
const siteUrl = runtime.public.siteUrl;

definePageMeta({
    layout: "legal",
});

useSeoMeta({
    title: `Impressum – ${config.siteName}, ${config.city}`,
    description: `Impressum und Anbieterkennzeichnung des Hausmeisterservice ${config.owner} aus ${config.city} im Sauerland.`,
    robots: "noindex, follow",
});

useHead({
    link: [{ rel: "canonical", href: `${siteUrl}/impressum` }],
});
</script>

<template>
    <div>
        <header class="page-header">
            <div class="eyebrow">
                <span class="eyebrow-num">§ 01</span>
                <span>Anbieterkennzeichnung nach § 5 DDG</span>
            </div>
            <h1 class="page-title">Im<em>pressum.</em></h1>
            <div class="page-sub">Stand: November 2026</div>
        </header>

        <div class="legal-content">
            <section aria-labelledby="anbieter">
                <h2 id="anbieter">
                    <span class="num">§ 02</span>
                    <span>Anbieter</span>
                </h2>
                <p>
                    Diensteanbieter im Sinne des § 5 Digitale-Dienste-Gesetz
                    (DDG):
                </p>
                <dl class="data-block">
                    <dt>Inhaber</dt>
                    <dd>{{ config.owner }}</dd>

                    <dt>Firma</dt>
                    <dd>{{ config.siteName }}</dd>

                    <dt>Anschrift</dt>
                    <dd>
                        {{ config.street }}<br />
                        {{ config.zip }} {{ config.city }}<br />
                        Deutschland
                    </dd>
                </dl>
            </section>

            <section aria-labelledby="kontakt">
                <h2 id="kontakt">
                    <span class="num">§ 03</span>
                    <span>Kontakt</span>
                </h2>
                <dl class="data-block">
                    <dt>Telefon</dt>
                    <dd>
                        <a :href="`tel:${config.phoneFixE164}`">
                            {{ config.phoneFix }}
                        </a>
                    </dd>

                    <dt>Mobil</dt>
                    <dd>
                        <a :href="`tel:${config.phoneMobileE164}`">
                            {{ config.phoneMobile }}
                        </a>
                    </dd>

                    <dt>E-Mail</dt>
                    <dd>
                        <a :href="`mailto:${config.email}`">
                            {{ config.email }}
                        </a>
                    </dd>
                </dl>
            </section>

            <section aria-labelledby="steuer">
                <h2 id="steuer">
                    <span class="num">§ 04</span>
                    <span>Umsatzsteuer</span>
                </h2>
                <p>
                    Als Kleinunternehmer im Sinne des § 19 UStG wird keine
                    Umsatzsteuer ausgewiesen.
                </p>
                <p style="font-size: 0.85rem; color: var(--gray); margin-top: 8px;">
                    <em>
                        Hinweis zum Anpassen: Falls Umsatzsteuer ausgewiesen
                        wird, ist hier stattdessen die USt-IdNr. nach § 27 a
                        UStG einzutragen.
                    </em>
                </p>
            </section>

            <section aria-labelledby="verantwortlich">
                <h2 id="verantwortlich">
                    <span class="num">§ 05</span>
                    <span>Inhaltlich Verantwortlicher</span>
                </h2>
                <p>
                    Verantwortlich für den Inhalt nach § 18 Abs. 2
                    Medienstaatsvertrag (MStV):
                </p>
                <p>
                    <strong>{{ config.owner }}</strong><br />
                    {{ config.street }}, {{ config.zip }} {{ config.city }}
                </p>
            </section>

            <section aria-labelledby="streitbeilegung">
                <h2 id="streitbeilegung">
                    <span class="num">§ 06</span>
                    <span>Streitbeilegung</span>
                </h2>

                <h3>EU-Online-Streitbeilegung</h3>
                <p>
                    Die Europäische Kommission stellt eine Plattform zur
                    Online-Streitbeilegung (OS) bereit:
                    <a
                        href="https://ec.europa.eu/consumers/odr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        https://ec.europa.eu/consumers/odr/
                    </a>. Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>

                <h3>Verbraucherstreitbeilegung</h3>
                <p>
                    Wir sind weder bereit noch verpflichtet, an
                    Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                </p>
            </section>

            <section aria-labelledby="haftung-inhalt">
                <h2 id="haftung-inhalt">
                    <span class="num">§ 07</span>
                    <span>Haftung für Inhalte</span>
                </h2>
                <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für
                    eigene Inhalte auf diesen Seiten nach den allgemeinen
                    Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir
                    als Diensteanbieter jedoch nicht verpflichtet,
                    übermittelte oder gespeicherte fremde Informationen zu
                    überwachen oder nach Umständen zu forschen, die auf eine
                    rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung
                    von Informationen nach den allgemeinen Gesetzen bleiben
                    hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                    erst ab dem Zeitpunkt der Kenntnis einer konkreten
                    Rechtsverletzung möglich. Bei Bekanntwerden von
                    entsprechenden Rechtsverletzungen werden wir diese
                    Inhalte umgehend entfernen.
                </p>
            </section>

            <section aria-labelledby="haftung-links">
                <h2 id="haftung-links">
                    <span class="num">§ 08</span>
                    <span>Haftung für Links</span>
                </h2>
                <p>
                    Unser Angebot enthält gegebenenfalls Links zu externen
                    Websites Dritter, auf deren Inhalte wir keinen Einfluss
                    haben. Deshalb können wir für diese fremden Inhalte auch
                    keine Gewähr übernehmen. Für die Inhalte der verlinkten
                    Seiten ist stets der jeweilige Anbieter oder Betreiber
                    der Seiten verantwortlich.
                </p>
                <p>
                    Die verlinkten Seiten wurden zum Zeitpunkt der
                    Verlinkung auf mögliche Rechtsverstöße überprüft.
                    Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung
                    nicht erkennbar. Eine permanente inhaltliche Kontrolle
                    der verlinkten Seiten ist jedoch ohne konkrete
                    Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                    Bekanntwerden von Rechtsverletzungen werden wir
                    derartige Links umgehend entfernen.
                </p>
            </section>

            <section aria-labelledby="urheberrecht">
                <h2 id="urheberrecht">
                    <span class="num">§ 09</span>
                    <span>Urheberrecht</span>
                </h2>
                <p>
                    Die durch den Seitenbetreiber erstellten Inhalte und
                    Werke auf diesen Seiten unterliegen dem deutschen
                    Urheberrecht. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der
                    Grenzen des Urheberrechtes bedürfen der schriftlichen
                    Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p>
                    Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                    erstellt wurden, werden die Urheberrechte Dritter
                    beachtet. Sollten Sie trotzdem auf eine
                    Urheberrechtsverletzung aufmerksam werden, bitten wir um
                    einen entsprechenden Hinweis. Bei Bekanntwerden von
                    Rechtsverletzungen werden wir derartige Inhalte umgehend
                    entfernen.
                </p>
            </section>
        </div>
    </div>
</template>
