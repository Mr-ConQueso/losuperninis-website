<script lang="ts">
	import '../app.css';
	import posthog from 'posthog-js';
	import { browser } from '$app/environment';

	let { children } = $props();

	export const load = async () => {
		if (browser) {
			posthog.init(
				'phc_XqJ0pTIn748JptSdolmxKVQMj7bZdX5f6SMGe0mwlRJ',
				{
					api_host: 'https://eu.i.posthog.com',
					defaults: '2025-11-30',
					person_profiles: 'identified_only',
				}
			)
		}

		return
	};
</script>

<svelte:head>
	<link rel="icon" href="/icons/favicon.svg" />
	<title>Los Super Ninis</title>
</svelte:head>

{@render children()}