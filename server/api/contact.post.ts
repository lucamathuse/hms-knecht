/**
 * POST /api/contact
 * Nimmt Formulardaten entgegen, validiert und versendet via Resend.
 *
 * Konfiguration via .env:
 *   NUXT_RESEND_API_KEY       — API-Key von resend.com
 *   NUXT_MAIL_FROM            — Absender, z.B. "Hausmeisterservice <noreply@deine-domain.de>"
 *   NUXT_MAIL_TO              — Zieladresse für Anfragen
 *   NUXT_PUBLIC_SITE_URL      — Site-URL (für Logging)
 */
import { Resend } from "resend";

// Helfer
const isString = (v: unknown): v is string => typeof v === "string";
const isEmail = (v: unknown): v is string =>
    isString(v) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const esc = (str: string): string =>
    String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

interface ContactBody {
    name?: string;
    email?: string;
    telefon?: string;
    betreff?: string;
    nachricht?: string;
    consent?: boolean;
    website?: string; // Honeypot
}

function buildMailHtml(d: {
    name: string;
    email: string;
    telefon: string;
    betreff: string;
    nachricht: string;
}): string {
    const telRow = d.telefon
        ? `<tr><td style="padding:8px 0;color:#82828f;vertical-align:top;">Telefon</td><td style="padding:8px 0;"><a href="tel:${esc(d.telefon)}" style="color:#1a237e;">${esc(d.telefon)}</a></td></tr>`
        : "";
    const subjRow = d.betreff
        ? `<tr><td style="padding:8px 0;color:#82828f;vertical-align:top;">Thema</td><td style="padding:8px 0;color:#15151f;">${esc(d.betreff)}</td></tr>`
        : "";

    return `<!doctype html>
<html lang="de">
<body style="font-family:-apple-system,system-ui,Segoe UI,Roboto,sans-serif;color:#15151f;line-height:1.55;margin:0;padding:24px;background:#fbfaf6;">
  <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #d8d8e0;border-top:4px solid #1a237e;padding:28px 32px;">
    <p style="margin:0 0 4px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#c89500;font-weight:700;">Neue Anfrage</p>
    <h1 style="margin:0 0 24px;font-size:22px;font-weight:600;color:#15151f;">Hausmeisterservice K. Knecht</h1>
    <table cellpadding="0" cellspacing="0" border="0" style="width:100%;font-size:14px;">
      <tr><td style="padding:8px 0;color:#82828f;width:90px;vertical-align:top;">Name</td><td style="padding:8px 0;color:#15151f;font-weight:500;">${esc(d.name)}</td></tr>
      <tr><td style="padding:8px 0;color:#82828f;vertical-align:top;">E-Mail</td><td style="padding:8px 0;"><a href="mailto:${esc(d.email)}" style="color:#1a237e;">${esc(d.email)}</a></td></tr>
      ${telRow}
      ${subjRow}
    </table>
    <hr style="border:none;border-top:1px solid #d8d8e0;margin:20px 0;" />
    <p style="margin:0 0 8px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#82828f;font-weight:700;">Nachricht</p>
    <p style="margin:0;white-space:pre-wrap;color:#15151f;font-size:14px;">${esc(d.nachricht)}</p>
  </div>
  <p style="max-width:600px;margin:16px auto 0;font-size:11px;color:#82828f;text-align:center;">Diese Nachricht wurde über das Kontaktformular auf hausmeisterservice-knecht.de gesendet.</p>
</body>
</html>`;
}

function buildMailText(d: {
    name: string;
    email: string;
    telefon: string;
    betreff: string;
    nachricht: string;
}): string {
    return [
        "NEUE ANFRAGE — Hausmeisterservice K. Knecht",
        "─────────────────────────────────────────",
        `Name:    ${d.name}`,
        `E-Mail:  ${d.email}`,
        d.telefon ? `Telefon: ${d.telefon}` : null,
        d.betreff ? `Thema:   ${d.betreff}` : null,
        "",
        "Nachricht:",
        d.nachricht,
        "",
        "─────────────────────────────────────────",
        "Gesendet über das Kontaktformular von hausmeisterservice-knecht.de",
    ]
        .filter(Boolean)
        .join("\n");
}

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();

    // Pflicht-Konfiguration prüfen
    if (!config.resendApiKey || !config.mailFrom || !config.mailTo) {
        throw createError({
            statusCode: 500,
            statusMessage:
                "Server-Konfiguration unvollständig. Bitte Administrator informieren.",
        });
    }

    const body = await readBody<ContactBody>(event);
    const {
        name = "",
        email = "",
        telefon = "",
        betreff = "",
        nachricht = "",
        consent = false,
        website = "",
    } = body ?? {};

    // 1) Honeypot — Bot stiller "Erfolg"
    if (typeof website === "string" && website.trim() !== "") {
        return { ok: true };
    }

    // 2) Validierung
    const errors: string[] = [];
    if (!isString(name) || name.trim().length < 2) {
        errors.push("Name fehlt oder ist zu kurz.");
    }
    if (!isEmail(email)) errors.push("Ungültige E-Mail-Adresse.");
    if (!isString(nachricht) || nachricht.trim().length < 10) {
        errors.push("Bitte geben Sie eine Nachricht (mind. 10 Zeichen) ein.");
    }
    if (consent !== true) {
        errors.push("Bitte bestätigen Sie die Datenschutzerklärung.");
    }

    // Längen-Limits
    if (isString(name) && name.length > 120) errors.push("Name zu lang.");
    if (isString(email) && email.length > 200) errors.push("E-Mail zu lang.");
    if (isString(telefon) && telefon.length > 40)
        errors.push("Telefonnummer zu lang.");
    if (isString(betreff) && betreff.length > 160)
        errors.push("Betreff zu lang.");
    if (isString(nachricht) && nachricht.length > 3000)
        errors.push("Nachricht zu lang.");

    if (errors.length > 0) {
        throw createError({
            statusCode: 400,
            statusMessage: errors.join(" "),
        });
    }

    // 3) Versand via Resend
    try {
        const resend = new Resend(config.resendApiKey);

        const cleaned = {
            name: name.trim(),
            email: email.trim(),
            telefon: (telefon || "").trim(),
            betreff: (betreff || "").trim(),
            nachricht: nachricht.trim(),
        };

        const { data, error } = await resend.emails.send({
            from: config.mailFrom,
            to: [config.mailTo],
            replyTo: cleaned.email,
            subject: cleaned.betreff
                ? `Anfrage: ${cleaned.betreff} — ${cleaned.name}`
                : `Neue Anfrage von ${cleaned.name}`,
            html: buildMailHtml(cleaned),
            text: buildMailText(cleaned),
        });

        if (error) {
            console.error("[Resend-Error]", error);
            throw createError({
                statusCode: 502,
                statusMessage:
                    "E-Mail konnte nicht versendet werden. Bitte später erneut versuchen.",
            });
        }

        console.log(`[OK] Mail gesendet: ${data?.id} an ${config.mailTo}`);
        return { ok: true };
    } catch (err: any) {
        // Wenn das schon ein createError war, durchreichen
        if (err.statusCode) throw err;

        console.error("[Server-Error]", err);
        throw createError({
            statusCode: 500,
            statusMessage:
                "Interner Fehler. Bitte versuchen Sie es später erneut.",
        });
    }
});
