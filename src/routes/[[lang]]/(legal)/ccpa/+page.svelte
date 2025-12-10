<script lang="ts">
	import { page } from '$app/state';
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';

	import type { Dictionary } from '$lib/types/i18n';
	import CcpaContentES from '$lib/components/legal/ccpa/CcpaContentES.svelte';

	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
</script>

<div class="page-wrapper">
	<div class="container relative z-10">
		<header class="policy-header text-center mb-12">
			<h1 class="page-title text-stroke-thick">
				{t.legal.ccpa.title_1}<span class="highlight-red">{t.legal.ccpa.title_2}</span>
			</h1>
			<div class="last-modified">
				<strong>{t.legal.date} <time datetime="2025-10-05">05/10/25</time></strong>
			</div>
		</header>

		<!-- Shared Panel Wrapper -->
		<ComicPanel variant={1} bgColor="white">

			<!-- DYNAMIC CONTENT SWITCHING -->
			{#if lang === 'es'}
				<CcpaContentES />
			{:else}
				<CcpaContentES />
			{/if}

		</ComicPanel>
	</div>
</div>

<style>
    .page-wrapper {
        padding-top: calc(var(--header-height) + 4rem);
        min-height: 100vh;
        background-color: var(--nini-bg);
        padding-bottom: 4rem;
        background-image: radial-gradient(var(--nini-white) 1px, transparent 1px);
        background-size: 20px 20px;
        background-position: 0 0;
        background-attachment: fixed;
    }

    .page-title {
        font-size: 3.5rem;
        color: white;
        margin-bottom: 0.5rem;
    }

    .highlight-red { color: var(--nini-red); }

    .last-modified {
        font-family: "Fredoka", sans-serif;
        color: var(--nini-beige);
        font-size: 1.1rem;
    }
</style>