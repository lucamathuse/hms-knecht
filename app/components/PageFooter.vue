<script setup lang="ts">
const config = useSiteConfig();
const year = new Date().getFullYear();
</script>

<template>
    <footer class="site-footer" role="contentinfo">
        <span>
            &copy; {{ year }} &nbsp;·&nbsp;
            <span class="mark">{{ config.siteName }}</span>
            &nbsp;·&nbsp; {{ config.city }}
        </span>
        <span class="footer-decor">
            <span class="dot" />
            <NuxtLink to="/impressum">Impressum</NuxtLink>
            <span class="dot" />
            <NuxtLink to="/datenschutz">Datenschutz</NuxtLink>
            <span class="dot" />
        </span>
    </footer>
</template>
