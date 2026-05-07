<script setup lang="ts">
/**
 * Kontaktformular — sendet an /api/contact.
 * Validierung clientseitig (Browser native + zusätzlich) und
 * serverseitig (im API-Endpoint).
 */
import { reactive, ref } from "vue";

const form = reactive({
    name: "",
    email: "",
    telefon: "",
    betreff: "",
    nachricht: "",
    consent: false,
    website: "", // Honeypot — bleibt leer für Menschen
});

const status = ref<"idle" | "loading" | "success" | "error">("idle");
const statusMessage = ref("");

const formEl = ref<HTMLFormElement | null>(null);

async function submit() {
    // Native Browser-Validation triggern
    if (formEl.value && !formEl.value.checkValidity()) {
        formEl.value.reportValidity();
        return;
    }

    // Honeypot — Bot erkannt? Stille Erfolgsmeldung, aber kein Versand.
    if (form.website.trim() !== "") {
        status.value = "success";
        statusMessage.value = "Vielen Dank, Ihre Nachricht wurde übermittelt.";
        Object.assign(form, {
            name: "",
            email: "",
            telefon: "",
            betreff: "",
            nachricht: "",
            consent: false,
            website: "",
        });
        return;
    }

    status.value = "loading";
    statusMessage.value = "Nachricht wird gesendet …";

    try {
        await $fetch("/api/contact", {
            method: "POST",
            body: {
                name: form.name,
                email: form.email,
                telefon: form.telefon,
                betreff: form.betreff,
                nachricht: form.nachricht,
                consent: form.consent,
                website: form.website,
            },
        });

        status.value = "success";
        statusMessage.value =
            "Vielen Dank! Ihre Anfrage ist bei uns eingegangen. Wir melden uns kurzfristig zurück.";

        Object.assign(form, {
            name: "",
            email: "",
            telefon: "",
            betreff: "",
            nachricht: "",
            consent: false,
            website: "",
        });
    } catch (err: any) {
        status.value = "error";
        // $fetch wirft FetchError mit data — versuchen, error-Feld auszulesen
        const apiError = err?.data?.statusMessage || err?.data?.error;
        statusMessage.value =
            apiError ??
            "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie uns an.";
    }
}
</script>

<template>
    <section
        class="formular"
        id="anfrage"
        aria-labelledby="formular-titel"
    >
        <div class="section-head">
            <div class="label">
                <span class="label-num">§ 04</span>
                <span>Anfrage senden</span>
            </div>
            <h2 id="formular-titel">
                Schreiben Sie<br /><em>uns direkt.</em>
            </h2>
        </div>

        <form
            ref="formEl"
            class="formular-grid"
            novalidate
            @submit.prevent="submit"
        >
            <div class="field">
                <label for="form-name">
                    Name <span class="req" aria-hidden="true">*</span>
                </label>
                <input
                    id="form-name"
                    v-model="form.name"
                    type="text"
                    name="name"
                    required
                    autocomplete="name"
                    placeholder="Vor- und Nachname"
                    minlength="2"
                    maxlength="120"
                />
            </div>

            <div class="field">
                <label for="form-email">
                    E-Mail <span class="req" aria-hidden="true">*</span>
                </label>
                <input
                    id="form-email"
                    v-model="form.email"
                    type="email"
                    name="email"
                    required
                    autocomplete="email"
                    placeholder="ihre@email.de"
                    maxlength="200"
                />
            </div>

            <div class="field">
                <label for="form-tel">Telefon (optional)</label>
                <input
                    id="form-tel"
                    v-model="form.telefon"
                    type="tel"
                    name="telefon"
                    autocomplete="tel"
                    placeholder="für Rückruf"
                    maxlength="40"
                />
            </div>

            <div class="field">
                <label for="form-betreff">Thema</label>
                <input
                    id="form-betreff"
                    v-model="form.betreff"
                    type="text"
                    name="betreff"
                    placeholder="z. B. Brennholz, Winterdienst"
                    maxlength="160"
                />
            </div>

            <div class="field full">
                <label for="form-nachricht">
                    Nachricht <span class="req" aria-hidden="true">*</span>
                </label>
                <textarea
                    id="form-nachricht"
                    v-model="form.nachricht"
                    name="nachricht"
                    required
                    placeholder="Worum geht es? Schildern Sie uns kurz Ihr Anliegen."
                    minlength="10"
                    maxlength="3000"
                />
            </div>

            <!-- Honeypot — für Menschen unsichtbar -->
            <div class="hp-field" aria-hidden="true">
                <label for="form-website">Website (bitte freilassen)</label>
                <input
                    id="form-website"
                    v-model="form.website"
                    type="text"
                    name="website"
                    tabindex="-1"
                    autocomplete="off"
                />
            </div>

            <div class="full">
                <label class="consent">
                    <input
                        v-model="form.consent"
                        type="checkbox"
                        name="consent"
                        required
                    />
                    <span>
                        Ich habe die
                        <NuxtLink to="/datenschutz" target="_blank">
                            Datenschutzerklärung
                        </NuxtLink>
                        gelesen und willige in die Verarbeitung meiner
                        Angaben zur Bearbeitung meiner Anfrage ein. Die Daten
                        werden nicht an Dritte weitergegeben. Ich kann meine
                        Einwilligung jederzeit widerrufen.
                    </span>
                </label>
            </div>

            <div class="full formular-submit">
                <button
                    type="submit"
                    class="btn-submit"
                    :disabled="status === 'loading'"
                >
                    <span>Anfrage absenden</span>
                    <span class="arrow" aria-hidden="true">→</span>
                </button>
                <span class="cta-aside-mono">
                    Antwort meist innerhalb 24 Std.
                </span>
            </div>

            <div
                class="form-status full"
                :class="{
                    'is-visible': status !== 'idle',
                    'is-loading': status === 'loading',
                    'is-success': status === 'success',
                    'is-error': status === 'error',
                }"
                role="status"
                aria-live="polite"
            >
                {{ statusMessage }}
            </div>
        </form>
    </section>
</template>
