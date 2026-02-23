<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/icons/favicon.svg" />
	<title>Los Super Ninis</title>
</svelte:head>

{@render children()}