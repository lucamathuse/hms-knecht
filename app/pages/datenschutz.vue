<script setup lang="ts">
const config = useSiteConfig();
const runtime = useRuntimeConfig();
const siteUrl = runtime.public.siteUrl;

definePageMeta({
    layout: "legal",
});

useSeoMeta({
    title: `Datenschutzerklärung – ${config.siteName}, ${config.city}`,
    description: `Datenschutzerklärung des Hausmeisterservice ${config.owner} aus ${config.city} im Sauerland.`,
    robots: "noindex, follow",
});

useHead({
    link: [{ rel: "canonical", href: `${siteUrl}/datenschutz` }],
});
</script>

<template>
    <div>
        <header class="page-header">
            <div class="eyebrow">
                <span class="eyebrow-num">DSGVO</span>
                <span>Informationen nach Art. 13 DSGVO</span>
            </div>
            <h1 class="page-title">Daten<em>schutz.</em></h1>
            <div class="page-sub">Stand: November 2026</div>
        </header>

        <nav class="toc" aria-label="Inhaltsverzeichnis">
            <div class="toc-title">Inhalt</div>
            <ol>
                <li><a href="#verantwortlich">Verantwortlicher</a></li>
                <li><a href="#allgemein">Allgemeine Hinweise</a></li>
                <li><a href="#rechte">Ihre Rechte</a></li>
                <li><a href="#hosting">Hosting &amp; Logfiles</a></li>
                <li><a href="#cookies">Cookies</a></li>
                <li><a href="#kontakt">Kontaktaufnahme</a></li>
                <li><a href="#resend">Kontaktformular &amp; Resend</a></li>
                <li><a href="#analytics">Google Analytics 4</a></li>
                <li><a href="#fonts">Google Fonts</a></li>
                <li><a href="#beschwerde">Beschwerderecht</a></li>
                <li><a href="#aktualisierung">Aktualität</a></li>
            </ol>
        </nav>

        <div class="legal-content">
            <section id="verantwortlich" aria-labelledby="h-verantwortlich">
                <h2 id="h-verantwortlich">
                    <span class="num">§ 01</span>
                    <span>Verantwortlicher</span>
                </h2>
                <p>
                    Verantwortlicher im Sinne der
                    Datenschutz-Grundverordnung (DSGVO) ist:
                </p>
                <dl class="data-block">
                    <dt>Inhaber</dt>
                    <dd>{{ config.owner }}</dd>

                    <dt>Firma</dt>
                    <dd>{{ config.siteName }}</dd>

                    <dt>Anschrift</dt>
                    <dd>
                        {{ config.street }}<br />
                        {{ config.zip }} {{ config.city }}, Deutschland
                    </dd>

                    <dt>Telefon</dt>
                    <dd>
                        <a :href="`tel:${config.phoneFixE164}`">
                            {{ config.phoneFix }}
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

            <section id="allgemein" aria-labelledby="h-allgemein">
                <h2 id="h-allgemein">
                    <span class="num">§ 02</span>
                    <span>Allgemeine Hinweise</span>
                </h2>
                <p>
                    Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges
                    Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf
                    Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG,
                    TDDDG). In dieser Erklärung informieren wir Sie über die
                    wichtigsten Aspekte der Datenverarbeitung im Rahmen
                    unserer Website.
                </p>
                <p>
                    Personenbezogene Daten sind alle Informationen, die sich
                    auf eine identifizierte oder identifizierbare natürliche
                    Person beziehen. Hierzu zählen z. B. Name, Anschrift,
                    E-Mail-Adresse, Telefonnummer und IP-Adresse.
                </p>
            </section>

            <section id="rechte" aria-labelledby="h-rechte">
                <h2 id="h-rechte">
                    <span class="num">§ 03</span>
                    <span>Ihre Rechte</span>
                </h2>
                <p>
                    Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten
                    folgende Rechte zu:
                </p>
                <ul>
                    <li>
                        <strong>Auskunft</strong> über die zu Ihrer Person
                        gespeicherten Daten (Art. 15 DSGVO)
                    </li>
                    <li>
                        <strong>Berichtigung</strong> unrichtiger oder
                        unvollständiger Daten (Art. 16 DSGVO)
                    </li>
                    <li>
                        <strong>Löschung</strong> Ihrer bei uns gespeicherten
                        Daten (Art. 17 DSGVO)
                    </li>
                    <li>
                        <strong>Einschränkung</strong> der
                        Datenverarbeitung (Art. 18 DSGVO)
                    </li>
                    <li>
                        <strong>Widerspruch</strong> gegen die Verarbeitung
                        Ihrer Daten (Art. 21 DSGVO)
                    </li>
                    <li>
                        <strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO)
                    </li>
                    <li>
                        <strong>Widerruf erteilter Einwilligungen</strong>
                        mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)
                    </li>
                </ul>
                <p>
                    Zur Ausübung Ihrer Rechte genügt eine formlose
                    Mitteilung an die im Abschnitt § 01 genannten
                    Kontaktdaten.
                </p>
            </section>

            <section id="hosting" aria-labelledby="h-hosting">
                <h2 id="h-hosting">
                    <span class="num">§ 04</span>
                    <span>Hosting &amp; Server-Logfiles</span>
                </h2>

                <h3>Hoster</h3>
                <p>
                    Diese Website wird bei einem externen Dienstleister
                    gehostet (Hoster). Die personenbezogenen Daten, die auf
                    dieser Website erfasst werden, werden auf den Servern des
                    Hosters gespeichert.
                </p>
                <div class="notice">
                    <strong>Anpassung erforderlich:</strong> Tragen Sie hier
                    Name, Anschrift und ggf. den Link zur
                    Datenschutzerklärung Ihres Webhosters ein. Beispiele:
                    IONOS SE (Elgendorfer Str. 57, 56410 Montabaur), STRATO
                    AG (Pascalstr. 10, 10587 Berlin), Hetzner Online GmbH
                    (Industriestr. 25, 91710 Gunzenhausen). Mit dem Hoster
                    ist ein Vertrag zur Auftragsverarbeitung (AVV) nach
                    Art. 28 DSGVO zu schließen.
                </div>
                <p>
                    Die Nutzung des Hosters erfolgt auf Grundlage unseres
                    berechtigten Interesses an einer zuverlässigen und
                    sicheren Bereitstellung unseres Onlineangebots durch
                    einen professionellen Anbieter (Art. 6 Abs. 1 lit. f
                    DSGVO).
                </p>

                <h3>Server-Logfiles</h3>
                <p>
                    Beim Aufruf dieser Website erfasst unser Hoster
                    automatisch Informationen, die Ihr Browser übermittelt
                    (sogenannte Server-Logfiles):
                </p>
                <ul>
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer-URL (zuvor besuchte Seite)</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                </ul>
                <p>
                    Eine Zusammenführung dieser Daten mit anderen
                    Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist
                    Art. 6 Abs. 1 lit. f DSGVO, der die Verarbeitung von
                    Daten zur Sicherstellung eines fehlerfreien Betriebs
                    sowie zur Optimierung der Website gestattet. Die
                    Logfiles werden in der Regel nach 7 Tagen automatisch
                    gelöscht.
                </p>
            </section>

            <section id="cookies" aria-labelledby="h-cookies">
                <h2 id="h-cookies">
                    <span class="num">§ 05</span>
                    <span>Cookies</span>
                </h2>
                <p>
                    Unsere Website verwendet Cookies. Cookies sind kleine
                    Textdateien, die auf Ihrem Endgerät gespeichert werden.
                    Sie richten keinen Schaden an und enthalten keine Viren.
                </p>
                <p>
                    Wir setzen Cookies ein, um unser Angebot
                    nutzerfreundlich zu gestalten. Einige Cookies bleiben
                    auf Ihrem Endgerät gespeichert, bis Sie diese löschen
                    oder bis ihre festgelegte Speicherdauer abläuft.
                </p>
                <p>Wir unterscheiden zwischen:</p>
                <ul>
                    <li>
                        <strong>Technisch notwendigen Cookies</strong>, ohne
                        die der Betrieb der Website nicht möglich wäre
                        (Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO bzw.
                        § 25 Abs. 2 Nr. 2 TDDDG)
                    </li>
                    <li>
                        <strong>Einwilligungsbasierten Cookies</strong>
                        (z. B. für Statistik / Google Analytics), die erst
                        nach Ihrer ausdrücklichen Zustimmung im
                        Cookie-Banner gesetzt werden (Rechtsgrundlage: Art. 6
                        Abs. 1 lit. a DSGVO i. V. m. § 25 Abs. 1 TDDDG)
                    </li>
                </ul>
                <p>
                    Sie können Ihre Cookie-Einstellungen jederzeit über den
                    Cookie-Banner anpassen oder Ihre Einwilligung mit
                    Wirkung für die Zukunft widerrufen. Die meisten Browser
                    erlauben es zudem, das Setzen von Cookies einzuschränken
                    oder ganz zu unterbinden.
                </p>
            </section>

            <section id="kontakt" aria-labelledby="h-kontakt">
                <h2 id="h-kontakt">
                    <span class="num">§ 06</span>
                    <span>Kontaktaufnahme per Telefon, E-Mail oder Post</span>
                </h2>
                <p>
                    Wenn Sie uns telefonisch, per E-Mail oder per Post
                    kontaktieren, werden Ihre Angaben (Name, Kontaktdaten,
                    Inhalt der Anfrage) zum Zweck der Bearbeitung Ihrer
                    Anfrage und für den Fall von Anschlussfragen bei uns
                    gespeichert.
                </p>
                <p>
                    Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
                    (vorvertragliche Maßnahmen / Vertragserfüllung) sowie
                    Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
                    der effektiven Bearbeitung der an uns gerichteten
                    Anfragen).
                </p>
                <p>
                    Ihre Anfrage und die damit verbundenen Daten werden
                    gelöscht, sobald Ihr Anliegen abschließend bearbeitet
                    wurde und keine gesetzlichen Aufbewahrungspflichten
                    (z. B. nach HGB oder AO) entgegenstehen.
                </p>
            </section>

            <section id="resend" aria-labelledby="h-resend">
                <h2 id="h-resend">
                    <span class="num">§ 07</span>
                    <span>Kontaktformular &amp; E-Mail-Versand über Resend</span>
                </h2>

                <h3>Erhobene Daten</h3>
                <p>
                    Wenn Sie unser Kontaktformular nutzen, erheben wir die
                    von Ihnen eingegebenen Daten (z. B. Name, E-Mail-Adresse,
                    Telefonnummer, Nachrichtentext). Diese Daten werden
                    ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage
                    verwendet.
                </p>

                <h3>Versand über Resend</h3>
                <p>
                    Für den technischen Versand der Formularnachricht an
                    unser Postfach nutzen wir den E-Mail-Infrastrukturdienst
                    <strong>Resend</strong>. Anbieter ist die
                    <strong>Plus Five Five, Inc.</strong> (2261 Market
                    Street #4667, San Francisco, CA 94114, USA).
                </p>
                <p>
                    Bei Absenden des Formulars werden die von Ihnen
                    eingegebenen Daten an die Server von Resend übermittelt,
                    um die Nachricht in unser Postfach zuzustellen.
                    Verarbeitete Daten umfassen insbesondere:
                </p>
                <ul>
                    <li>
                        Inhalt und Metadaten der versendeten E-Mail
                        (Absender, Empfänger, Betreff, Zeitstempel)
                    </li>
                    <li>
                        Zustellstatus (z. B. erfolgreich zugestellt,
                        abgelehnt)
                    </li>
                    <li>
                        Technische Verbindungsdaten zur Sicherstellung der
                        Zustellung
                    </li>
                </ul>

                <h3>Rechtsgrundlage und Datenübermittlung in die USA</h3>
                <p>
                    Rechtsgrundlage für die Verarbeitung ist Art. 6 Abs. 1
                    lit. b DSGVO (Bearbeitung Ihrer Anfrage bzw.
                    vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f
                    DSGVO (berechtigtes Interesse an einer zuverlässigen
                    E-Mail-Zustellung).
                </p>
                <p>
                    Resend speichert Daten auf Servern in den USA. Die
                    Übermittlung erfolgt auf Grundlage des
                    <strong>EU-US Data Privacy Framework (DPF)</strong>,
                    unter dem Resend zertifiziert ist
                    (Angemessenheits&shy;beschluss der EU-Kommission vom
                    10. Juli 2023). Ergänzend hat Resend
                    Standardvertragsklauseln (SCC) der EU-Kommission
                    abgeschlossen. Mit Resend besteht ein Vertrag zur
                    Auftragsverarbeitung (DPA) nach Art. 28 DSGVO.
                </p>
                <p>
                    Trotz dieser Schutzmaßnahmen weisen wir darauf hin,
                    dass bei einer Übermittlung in die USA grundsätzlich
                    nicht vollständig ausgeschlossen werden kann, dass
                    US-Behörden auf personenbezogene Daten zugreifen.
                </p>

                <h3>Speicherdauer</h3>
                <p>
                    Wir löschen die über das Kontaktformular erhaltenen
                    Daten, sobald Ihr Anliegen abschließend bearbeitet
                    wurde, sofern keine gesetzlichen
                    Aufbewahrungspflichten entgegenstehen. Resend selbst
                    speichert E-Mail-Logs gemäß den eigenen
                    Aufbewahrungsfristen, die in der Datenschutzerklärung
                    des Anbieters dargestellt sind.
                </p>

                <p>
                    Weitere Informationen finden Sie in den
                    Datenschutzbestimmungen von Resend:
                    <a
                        href="https://resend.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        resend.com/legal/privacy-policy
                    </a>
                    sowie im DPA:
                    <a
                        href="https://resend.com/legal/dpa"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        resend.com/legal/dpa
                    </a>.
                </p>
            </section>

            <section id="analytics" aria-labelledby="h-analytics">
                <h2 id="h-analytics">
                    <span class="num">§ 08</span>
                    <span>Webanalyse mit Google Analytics 4</span>
                </h2>

                <h3>Anbieter und Zweck</h3>
                <p>
                    Diese Website nutzt – sofern Sie eingewilligt haben –
                    den Webanalysedienst
                    <strong>Google Analytics 4 (GA4)</strong>. Anbieter ist
                    die <strong>Google Ireland Limited</strong> (Gordon
                    House, Barrow Street, Dublin 4, Irland). Mutterkonzern
                    und potenzieller weiterer Datenempfänger ist Google LLC,
                    USA.
                </p>
                <p>
                    Google Analytics ermöglicht es uns, das Verhalten der
                    Websitebesucher zu analysieren. Wir erhalten
                    verschiedene Nutzungsdaten, etwa Seitenaufrufe,
                    Verweildauer, verwendete Betriebssysteme und Herkunft
                    des Nutzers. Wir nutzen diese Informationen, um unsere
                    Website zu verbessern.
                </p>

                <h3>Erhobene Daten</h3>
                <p>Google Analytics 4 verarbeitet insbesondere:</p>
                <ul>
                    <li>
                        gekürzte IP-Adresse (IP-Anonymisierung in GA4
                        standardmäßig aktiv – die IP-Adresse wird nicht
                        gespeichert)
                    </li>
                    <li>
                        Geräte- und Browserdaten (Typ, Version,
                        Betriebssystem, Bildschirmauflösung)
                    </li>
                    <li>ungefähre geografische Herkunft</li>
                    <li>
                        Interaktionen mit der Seite (aufgerufene Seiten,
                        Klicks, Scroll-Tiefe, Verweildauer)
                    </li>
                    <li>Referrer (verweisende Seite)</li>
                    <li>
                        pseudonyme Kennung (Client-ID) zur Wiedererkennung
                        wiederkehrender Besucher
                    </li>
                </ul>

                <h3>Rechtsgrundlage und Einwilligung</h3>
                <p>
                    Die Nutzung von Google Analytics erfolgt ausschließlich
                    auf Grundlage Ihrer Einwilligung gemäß Art. 6 Abs. 1
                    lit. a DSGVO und § 25 Abs. 1 TDDDG. Die Einwilligung
                    erteilen Sie über unser Cookie-Banner. Ohne Ihre
                    Zustimmung werden keine Tracking-Daten an Google
                    übermittelt.
                </p>
                <p>
                    Wir setzen den
                    <strong>Google Consent Mode v2</strong> ein. Dieser
                    stellt sicher, dass Google-Tags standardmäßig im
                    „denied“-Status starten und erst nach Ihrer Zustimmung
                    im Cookie-Banner Daten übertragen.
                </p>

                <h3>Datenübermittlung in die USA</h3>
                <p>
                    Google verarbeitet Daten auch auf Servern in den USA.
                    Die Übermittlung erfolgt auf Grundlage des
                    <strong>EU-US Data Privacy Framework (DPF)</strong>,
                    unter dem Google LLC zertifiziert ist. Ergänzend sind
                    Standardvertragsklauseln nach Art. 46 Abs. 2 lit. c
                    DSGVO abgeschlossen.
                </p>

                <h3>Auftragsverarbeitungsvertrag</h3>
                <p>
                    Wir haben mit Google einen Vertrag zur
                    Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO
                    abgeschlossen.
                </p>

                <h3>Speicherdauer</h3>
                <p>
                    Bei Google gespeicherte Daten auf Nutzer- und
                    Ereignisebene werden nach <strong>2 Monaten</strong>
                    (kürzeste GA4-Einstellung, in unserem Property aktiviert)
                    automatisch gelöscht.
                </p>

                <h3>Widerruf</h3>
                <p>
                    Sie können Ihre Einwilligung jederzeit über unseren
                    Cookie-Banner widerrufen. Zusätzlich können Sie das
                    Browser-Add-on zur Deaktivierung von Google Analytics
                    installieren:
                    <a
                        href="https://tools.google.com/dlpage/gaoptout?hl=de"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        tools.google.com/dlpage/gaoptout
                    </a>.
                </p>
                <p>
                    Weitere Informationen zum Umgang mit Nutzerdaten bei
                    Google Analytics finden Sie in der
                    Datenschutzerklärung von Google:
                    <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        policies.google.com/privacy
                    </a>.
                </p>
            </section>

            <section id="fonts" aria-labelledby="h-fonts">
                <h2 id="h-fonts">
                    <span class="num">§ 09</span>
                    <span>Schriftarten (Google Fonts)</span>
                </h2>
                <p>
                    Diese Website nutzt zur einheitlichen Darstellung von
                    Schriftarten sogenannte Google Fonts, die von Google
                    Ireland Limited bereitgestellt werden. Beim Aufruf
                    einer Seite lädt Ihr Browser die benötigten Schriftarten
                    in den Browser-Cache, um Texte und Schriftarten
                    korrekt anzuzeigen.
                </p>
                <p>
                    Zu diesem Zweck muss der von Ihnen verwendete Browser
                    Verbindung zu den Servern von Google aufnehmen. Dabei
                    wird Ihre IP-Adresse an Google übermittelt. Die Nutzung
                    von Google Fonts erfolgt im Interesse einer
                    einheitlichen und ansprechenden Darstellung unseres
                    Onlineangebots (Rechtsgrundlage: Art. 6 Abs. 1 lit. f
                    DSGVO).
                </p>
                <div class="notice">
                    <strong>Hinweis:</strong> Eine datenschutzfreundlichere
                    Alternative ist das Selbst-Hosten der Fonts. Hierbei
                    werden die Schriftdateien direkt vom eigenen Webserver
                    geladen, sodass keine Verbindung zu Google-Servern
                    aufgebaut wird. Empfehlenswert für die langfristige
                    Compliance-Sicherheit.
                </div>
                <p>
                    Weitere Informationen:
                    <a
                        href="https://developers.google.com/fonts/faq/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        developers.google.com/fonts/faq/privacy
                    </a>.
                </p>
            </section>

            <section id="beschwerde" aria-labelledby="h-beschwerde">
                <h2 id="h-beschwerde">
                    <span class="num">§ 10</span>
                    <span>Beschwerderecht bei der Aufsichtsbehörde</span>
                </h2>
                <p>
                    Sie haben das Recht, sich bei einer
                    Datenschutz-Aufsichtsbehörde über die Verarbeitung
                    Ihrer personenbezogenen Daten durch uns zu beschweren
                    (Art. 77 DSGVO). Zuständig ist:
                </p>
                <dl class="data-block">
                    <dt>Behörde</dt>
                    <dd>
                        Landesbeauftragte für Datenschutz und
                        Informationsfreiheit Nordrhein-Westfalen (LDI NRW)
                    </dd>

                    <dt>Anschrift</dt>
                    <dd>Kavalleriestr. 2–4<br />40213 Düsseldorf</dd>

                    <dt>Telefon</dt>
                    <dd>0211 38424-0</dd>

                    <dt>Web</dt>
                    <dd>
                        <a
                            href="https://www.ldi.nrw.de"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.ldi.nrw.de
                        </a>
                    </dd>
                </dl>
            </section>

            <section id="aktualisierung" aria-labelledby="h-aktualisierung">
                <h2 id="h-aktualisierung">
                    <span class="num">§ 11</span>
                    <span>Aktualität dieser Datenschutzerklärung</span>
                </h2>
                <p>
                    Diese Datenschutzerklärung ist aktuell gültig und hat
                    den oben genannten Stand. Durch die Weiterentwicklung
                    unserer Website oder aufgrund geänderter gesetzlicher
                    bzw. behördlicher Vorgaben kann es notwendig werden,
                    diese Datenschutzerklärung zu ändern. Die jeweils
                    aktuelle Datenschutzerklärung kann jederzeit auf
                    dieser Seite abgerufen werden.
                </p>
            </section>
        </div>
    </div>
</template>
