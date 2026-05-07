<script setup lang="ts">
/**
 * Top-Meta-Bar mit Verfügbarkeits-Indikator und Standort.
 * Auf Legal-Seiten: schmale Zurück-Variante.
 */
defineProps<{
    variant?: "default" | "legal";
}>();
</script>

<template>
    <nav
        v-if="variant === 'legal'"
        class="meta-bar"
        aria-label="Hauptnavigation"
    >
        <NuxtLink to="/" aria-label="Zurück zur Startseite">
            <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <path d="M13 5L7 10L13 15" />
            </svg>
            <span>Zurück</span>
        </NuxtLink>
        <div class="right">
            <span>Rechtliches</span>
        </div>
    </nav>

    <div
        v-else
        class="meta-bar"
        role="complementary"
        aria-label="Verfügbarkeit und Standort"
    >
        <div class="left">
            <span>
                <span class="meta-dot" aria-hidden="true" />
                Termine verfügbar
            </span>
            <span class="hide-mobile">Mo&ndash;Sa · 07:00&ndash;19:00</span>
        </div>
        <div class="right">
            <span class="hide-mobile">59969 Hallenberg</span>
            <span>Sauerland · NRW</span>
        </div>
    </div>
</template>
