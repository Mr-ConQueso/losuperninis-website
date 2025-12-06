<script lang="ts">
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import { onMount } from 'svelte';
	import { initMobile } from '$lib/utils/device.svelte.ts';
	import { page } from '$app/state';

	// FIX 1: Destructure 'data' to access the result of +layout.ts
	let { children, data } = $props();

	onMount(() => {
		const cleanup = initMobile();
		return cleanup;
	});
</script>

<svelte:head>
	<!-- FIX 2: Use data.lang instead of children.lang -->
	<html lang={data.lang} ></html>

	<!-- Canonical URL -->
	<link rel="canonical" href="https://www.losuperninis.com{page.url.pathname}" />

	<!-- Alternates (Logic fixed to prevent double language prefixes) -->
	<link
		rel="alternate"
		hreflang="en"
		href="https://www.losuperninis.com/en{page.url.pathname.replace(/^\/(en|es)/, '')}"
	/>
	<link
		rel="alternate"
		hreflang="es"
		href="https://www.losuperninis.com/es{page.url.pathname.replace(/^\/(en|es)/, '')}"
	/>
</svelte:head>

<Navbar />

<div class="noise-overlay"></div>

{@render children()}

<Footer />