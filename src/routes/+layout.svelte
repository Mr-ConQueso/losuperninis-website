<script lang="ts">
	import favicon from '/icons/favicon.svg?url';
	import '../app.css';
	import Navbar from '$lib/components/navigation/Navbar.svelte';
	import Footer from '$lib/components/navigation/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Los Super Ninis</title>
</svelte:head>

<Navbar />

<!-- Noise Overlay -->
<!--<div class="noise-overlay"></div>-->

{@render children()}

<!--<Banner />-->

<Footer />