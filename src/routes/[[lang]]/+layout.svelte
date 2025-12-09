<script lang="ts">
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import { onMount } from 'svelte';
	import { initMobile } from '$lib/utils/device.svelte.ts';
	import { page } from '$app/state';
	import { WEBSITE_URL } from '$lib/utils/constants.js';

	let { children, data } = $props();

	onMount(() => {
		const cleanup = initMobile();
		return cleanup;
	});
</script>

<svelte:head>
	<html lang={data.lang}></html>
	<script src="https://kit.fontawesome.com/6f55fb0840.js" crossorigin="anonymous"></script>
	<script defer src="https://cloud.umami.is/script.js" data-website-id="35e43943-db37-40b5-849c-235ae99abc24"></script>

	<!-- Canonical URL (Self) -->
	<link rel="canonical" href="{WEBSITE_URL}{page.url.pathname}" />

	<!-- Alternates: The regex replace(/^\/(en|es)/, '') handles both /about and /en/about correctly -->
	<link
		rel="alternate"
		hreflang="en"
		href="{WEBSITE_URL}/en{page.url.pathname.replace(/^\/(en|es)/, '')}"
	/>
	<link
		rel="alternate"
		hreflang="es"
		href="{WEBSITE_URL}/es{page.url.pathname.replace(/^\/(en|es)/, '')}"
	/>
</svelte:head>

<Navbar />

<div class="noise-overlay"></div>

{@render children()}

<Footer />