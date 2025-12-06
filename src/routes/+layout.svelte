<script lang="ts">
	import favicon from '/icons/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Los Super Ninis</title>
</svelte:head>

{@render children()}