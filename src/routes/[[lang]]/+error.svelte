<script lang="ts">
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
	import ComicButton from '$lib/components/generic/ComicButton.svelte';
	import { page } from '$app/state';

	import type { Dictionary } from '$lib/types/i18n';
	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
	const link = (path: string) => `/${lang}${path}`;

	let status = $derived(page.status);
	let message = $derived(page.error?.message || 'Unknown Error');

	let title = $derived(status === 404 ? 'LOST IN SPACE?' : 'SYSTEM MELTDOWN!');
	let desc = $derived(
		status === 404
			? "The page you are looking for has been abducted by aliens (or we forgot to make it)."
			: "Our code monkeys are working hard to fix this. Please don't feed them."
	);
	let image = $derived(
		status === 404
			? "https://images.unsplash.com/photo-1541363111435-5c1b7d867904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" // Spaceman
			: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" // Laptop/Fire/Chaos
	);
</script>

<div class="error-page-wrapper">
	<div class="container">
		<div class="error-grid">

			<!-- Text Content -->
			<div class="text-column">
				<div class="status-badge rotate-neg-2">ERROR {status}</div>
				<h1 class="error-title text-stroke-thick">{title}</h1>
				<p class="error-desc">{desc}</p>

				{#if status !== 404}
					<div class="tech-details">
						<strong>Technical Details:</strong> {message}
					</div>
				{/if}

				<div class="action-buttons">
					<ComicButton text="Go Home" href={link('/')} variant="primary" />
					<ComicButton text="Report Bug" href={link('/#contact')} variant="dark" />
				</div>
			</div>

			<!-- Visual Content -->
			<div class="visual-column">
				<ComicPanel variant={2} bgColor="var(--nini-bg)">
					<div class="img-wrapper">
						<img src={image} alt="Error Illustration">

						<!-- Speech Bubble -->
						{#snippet bubble()}
							<div class="speech-bubble absolute -top-8 -right-8">
								<p class="bubble-text">
									{status === 404 ? 'WHERE AM I?' : 'BOOM!'}
								</p>
								<div class="bubble-tail"></div>
							</div>
						{/snippet}
					</div>
				</ComicPanel>
			</div>

		</div>
	</div>
</div>

<style>
    .error-page-wrapper {
        min-height: 80vh;
        background-color: var(--nini-bg);
        padding-top: calc(var(--header-height) + 4rem);
        padding-bottom: 4rem;
        display: flex;
        align-items: center;
        background-image:
                radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(to bottom, var(--nini-blue), var(--nini-bg));
        background-size: 20px 20px, 100% 100%;
    }

    .error-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 4rem;
        align-items: center;
    }

    /* Text Styles */
    .status-badge {
        display: inline-block;
        background: var(--nini-red);
        color: white;
        font-family: "Luckiest Guy";
        font-size: 2rem;
        padding: 0.5rem 1.5rem;
        border: 4px solid black;
        margin-bottom: 2rem;
        box-shadow: 6px 6px 0 black;
    }

    .rotate-neg-2 { transform: rotate(-2deg); }

    .error-title {
        font-size: 4rem;
        color: white;
        margin-bottom: 1.5rem;
        line-height: 1.1;
    }

    .error-desc {
        color: var(--nini-beige);
        font-size: 1.5rem;
        margin-bottom: 2rem;
        font-family: "Fredoka";
        max-width: 500px;
    }

    .tech-details {
        background: rgba(0,0,0,0.3);
        padding: 1rem;
        border-left: 4px solid var(--nini-red);
        color: #ccc;
        font-family: monospace;
        margin-bottom: 2rem;
    }

    .action-buttons {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }

    /* Visual Styles */
    .visual-column {
        max-width: 500px;
        margin: 0 auto;
        transform: rotate(2deg);
    }

    .img-wrapper {
        height: 400px;
        width: 100%;
        position: relative;
    }

    .img-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%) contrast(120%);
    }

    /* Bubble Styles */
    .speech-bubble {
        background: white;
        border: 4px solid black;
        border-radius: 50%;
        padding: 2rem;
        min-width: 150px;
        text-align: center;
        z-index: 20;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
    }

    .bubble-text {
        font-family: "Luckiest Guy";
        font-size: 2rem;
        color: black;
        line-height: 1;
        margin: 0;
    }

    .bubble-tail {
        position: absolute;
        bottom: 0;
        left: 20px;
        width: 20px;
        height: 20px;
        background: white;
        border-bottom: 4px solid black;
        border-right: 4px solid black;
        transform: rotate(45deg) translate(10px, 10px);
    }

    /* Responsive */
    @media (min-width: 900px) {
        .error-grid {
            grid-template-columns: 1fr 1fr;
        }

        .error-title { font-size: 6rem; }
    }
</style>