/**
 * Zentrale Site-Konfiguration — Single Source of Truth.
 * Alle Stamm-Daten (Adresse, Telefon, etc.) werden hier gepflegt.
 * Änderungen wirken sich sofort auf alle Seiten und das JSON-LD aus.
 */
export const useSiteConfig = () => {
    return {
        siteName: "Hausmeisterservice K. Knecht",
        owner: "Karsten Knecht",

        // Adresse
        street: "Höfestr. 22",
        zip: "59969",
        city: "Hallenberg",
        region: "NRW",
        country: "DE",

        // Geo
        latitude: 51.1133,
        longitude: 8.6111,

        // Kontakt
        phoneMobile: "01525 / 7463993",
        phoneMobileE164: "+4915257463993",
        phoneFix: "02984 / 4679988",
        phoneFixE164: "+4929844679988",
        email: "karsten@hms-knecht.de",

        // Öffnungszeiten
        openingHours: "Mo–Sa · 07:00–19:00",

        // Einzugsgebiet
        areasServed: ["Hallenberg", "Medebach", "Winterberg", "Sauerland"],
    };
};
