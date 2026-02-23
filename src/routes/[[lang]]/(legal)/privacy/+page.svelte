<script lang="ts">
	import { page } from '$app/state';
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';

	import type { Dictionary } from '$lib/types/i18n';
	import PrivacyContentES from '$lib/components/legal/privacy/PrivacyContentES.svelte';
	import PrivacyContentEN from '$lib/components/legal/privacy/PrivacyContentEN.svelte';

	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);

	const link = (path: string) => `/${lang}${path}`;

	// Keep this simple to extend: add another entry when a new game's policy exists.
	const gamePrivacyPolicies = [
		{
			id: 'symbiosis',
			title: 'Symbiosis',
			href: () => link('/privacy/symbiosis')
		}
	] as const;
</script>

<div class="page-wrapper">
	<div class="container relative z-10">
		<header class="policy-header text-center mb-12">
			<h1 class="page-title text-stroke-thick">
				{t.legal.privacy.title_1} <span class="highlight-red">{t.legal.privacy.title_2}</span>
			</h1>
			<div class="last-modified">
				<strong>{t.legal.date} <time datetime="2025-10-05">05/10/25</time></strong>
			</div>
		</header>

		<!-- Shared Panel Wrapper -->
		<ComicPanel variant={1} bgColor="white" className="policy-panel">
			<!-- DYNAMIC CONTENT SWITCHING -->
			{#if lang === 'es'}
				<PrivacyContentES />
			{:else}
				<PrivacyContentEN />
			{/if}

			<!-- Game privacy policies (subtle) -->
			<div class="policies-divider" aria-hidden="true"></div>

			<section class="policies-section" aria-label="Game privacy policies">
				<h2 class="policies-title">Game Privacy Policies</h2>
				<p class="policies-subtitle">Looking for a specific game? Start here.</p>

				<div class="policies-grid">
					{#each gamePrivacyPolicies as policy (policy.id)}
						<a class="policy-card" href={policy.href()}>
							<div class="policy-card-top">
								<span class="policy-dot" aria-hidden="true"></span>
								<span class="policy-name">{policy.title}</span>
							</div>
							<span class="policy-link">View policy</span>
						</a>
					{/each}
				</div>
			</section>
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

	.highlight-red {
		color: var(--nini-red);
	}

	.last-modified {
		font-family: "Fredoka", sans-serif;
		color: var(--nini-beige);
		font-size: 1.1rem;
	}

	/* --- Subtle grid list (inside the white ComicPanel) --- */
	.policies-divider {
		margin: 2.25rem 0 1.5rem;
		height: 1px;
		background: rgba(0, 0, 0, 0.15);
	}

	.policies-section {
      padding: 4rem;
  }

	.policies-title {
		font-size: 1.6rem;
		color: black;
		margin-bottom: 0.25rem;
	}

	.policies-subtitle {
		font-family: "Fredoka", sans-serif;
		color: rgba(0, 0, 0, 0.7);
		margin-bottom: 1rem;
	}

	.policies-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.75rem;
	}

	.policy-card {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;

		padding: 0.9rem 1rem;
		border: 2px solid rgba(0, 0, 0, 0.18);
		background: rgba(0, 0, 0, 0.02);
		color: black;

		transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;
	}

	.policy-card:hover {
		transform: translateY(-1px);
		background: rgba(0, 0, 0, 0.04);
		border-color: rgba(0, 0, 0, 0.28);
	}

	.policy-card-top {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		min-width: 0;
	}

	.policy-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--nini-red);
		border: 2px solid black;
		box-shadow: 1px 1px 0 black;
		flex: 0 0 auto;
	}

	.policy-name {
		font-family: "Fredoka", sans-serif;
		font-weight: 700;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.policy-link {
		font-family: "Fredoka", sans-serif;
		font-weight: 700;
		color: rgba(0, 0, 0, 0.75);
		white-space: nowrap;
	}

	@media (min-width: 768px) {
		.policies-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>