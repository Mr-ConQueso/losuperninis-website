<script lang="ts">
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';
	import { onMount } from 'svelte';
	import { initMobile } from '$lib/utils/device.svelte.ts';
	import { page } from '$app/state';

	let { children, data } = $props();

	onMount(() => {
		const cleanup = initMobile();
		return cleanup;
	});
</script>

<svelte:head>
	<html lang={data.lang} />

	<!-- Canonical URL (Self) -->
	<link rel="canonical" href="https://superninis.com{page.url.pathname}" />

	<!-- Alternates: The regex replace(/^\/(en|es)/, '') handles both /about and /en/about correctly -->
	<link
		rel="alternate"
		hreflang="en"
		href="https://superninis.com/en{page.url.pathname.replace(/^\/(en|es)/, '')}"
	/>
	<link
		rel="alternate"
		hreflang="es"
		href="https://superninis.com/es{page.url.pathname.replace(/^\/(en|es)/, '')}"
	/>
</svelte:head>

<Navbar />

<div class="noise-overlay"></div>

{@render children()}

<Footer />