<script lang="ts">
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
	import ComicButton from '$lib/components/generic/ComicButton.svelte';
	import FAQItem from '$lib/components/generic/FAQItem.svelte';
	import { INSTAGRAM_URL, BLUESKY_URL, YOUTUBE_URL, DISCORD_INVITE } from '$lib/utils/constants.ts';
	import { projects } from '$lib/components/projects/project-info.ts';
	import { page } from '$app/state';

	import type { Dictionary } from '$lib/types/i18n';
	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
	const link = (path: string) => `/${lang}${path}`;

	const faqs = [
		{ q: "Are your games free to play?", a: "Most of our web games are free! We also have premium versions on Steam with extra hats and zero ads." },
		{ q: "Can I stream your games?", a: "Absolutely! We love streamers. If you find a bug live on stream, just pretend it's a feature." },
		{ q: "Do you hire interns?", a: "Only if you can beat the dev team in Mario Kart. Send your lap times to our HR department." },
		{ q: "Where is your studio located?", a: "We are based in Madrid, Spain! We basically run on tapas and sunshine." }
	];
</script>

<div class="page-wrapper">
	<!-- Header Section -->
	<header class="project-header">
		<div class="bg-layer halftone-beige"></div>
		<div class="container text-center relative z-10">
			<h1 class="page-title text-stroke-thick">{t.projects.title_1} <span class="highlight-red">{t.projects.title_2}</span></h1>
			<p class="page-subtitle">
				{t.projects.desc}
			</p>
		</div>
	</header>

	<!-- Portfolio List Section -->
	<section class="section portfolio-list">
		<div class="container">
			<div class="projects-grid">
				{#each projects as project, i}
					<div class="project-card-wrapper">
						<ComicPanel variant={project.variant as 1|2|3} className="project-card">
							<div class="card-image">
								<img src={project.banner} alt={project.title}>
								<div class="status-badge">{project.status}</div>
							</div>
							<div class="card-content">
								<span class="genre-tag">{project.genre}</span>
								<h2 class="project-title">{project.title}</h2>
								<p class="project-desc">{project.desc}</p>
								<div class="card-actions">
									{#if project.link === ""}
										<ComicButton text="Coming Soon..." variant="disabled" className="btn-sm" />
									{:else}
										<ComicButton text="View Game" href={project.link} target="_blank" rel="noreferrer" variant="primary" className="btn-sm" />
									{/if}
								</div>
							</div>
						</ComicPanel>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="section faq-section">
		<div class="bg-layer solid-blue"></div>
		<div class="container relative z-10">
			<div class="faq-header">
				<h2 class="section-title text-white center-text">F.A.Q.</h2>
				<p class="text-beige center-text mb-8">Questions we get asked (mostly by our moms)</p>
			</div>

			<div class="faq-grid">
				{#each faqs as faq, i}
					<FAQItem
						question={faq.q}
						answer={faq.a}
						variant={(i % 3 + 1) as 1|2|3}
					/>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="section cta-section">
		<div class="container">
			<ComicPanel variant={2} bgColor="var(--nini-red)" className="cta-panel">
				<div class="cta-content">
					<div class="cta-text">
						<h2 class="text-white">{t.projects.cta.title}</h2>
						<p class="text-black font-bold">{t.projects.cta.desc}</p>
					</div>
					<div class="cta-buttons">
						<ComicButton text={t.projects.cta.contact} variant="dark" href={link('/#contact')} />
						<ComicButton text={t.projects.cta.bluesky} variant="secondary" href={BLUESKY_URL} />
					</div>
				</div>
			</ComicPanel>
		</div>
	</section>
</div>

<style>
    .page-wrapper {
        padding-top: var(--header-height);
        min-height: 100vh;
        background-color: var(--nini-bg);
    }

    /* --- Header --- */
    .project-header {
        padding: 4rem 0;
        background-color: var(--nini-bg);
        border-bottom: 4px solid var(--nini-black);
        position: relative;
        overflow: hidden;
    }

    .halftone-beige {
        position: absolute;
        inset: 0;
        opacity: 0.1;
        background-image: radial-gradient(circle, var(--nini-beige) 1px, transparent 1px);
        background-size: 10px 10px;
    }

    .page-title {
        font-size: 4rem;
        color: white;
        margin-bottom: 1rem;
    }

    .highlight-red { color: var(--nini-red); }

    .page-subtitle {
        color: var(--nini-beige);
        font-size: 1.2rem;
        max-width: 600px;
        margin: 0 auto;
    }

    /* --- Portfolio Grid --- */
    .portfolio-list {
        background-color: white;
        padding-bottom: 6rem;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .project-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        background: white;
        transition: transform 0.2s;
    }

    .project-card:hover {
        transform: translateY(-5px);
    }

    .card-image {
        height: 250px;
        position: relative;
        border-bottom: 4px solid var(--nini-black);
        overflow: hidden;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .status-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #FFD700;
        color: black;
        font-family: "Luckiest Guy";
        padding: 4px 10px;
        border: 2px solid black;
        transform: rotate(3deg);
        box-shadow: 2px 2px 0 black;
    }

    .card-content {
        padding: 1.5rem;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .genre-tag {
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: bold;
        color: var(--nini-blue);
        margin-bottom: 0.5rem;
    }

    .project-title {
        font-size: 2rem;
        color: black;
        line-height: 1;
        margin-bottom: 1rem;
    }

    .project-desc {
        color: #444;
        margin-bottom: 1.5rem;
        flex: 1;
    }

    .card-actions {
        margin-top: auto;
        text-align: right;
    }

    /* --- FAQ Section --- */
    .faq-section {
        position: relative;
        padding: 4rem 0;
    }

    .solid-blue {
        position: absolute;
        inset: 0;
        background-color: var(--nini-blue);
    }

    .faq-header {
        text-align: center;
    }

    .faq-grid {
        max-width: 800px;
        margin: 0 auto;
    }

    /* --- CTA Section --- */
    .cta-section {
        padding: 4rem 0;
        background-color: var(--nini-beige);
        border-top: 4px solid black;
    }

    .cta-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 2rem;
        gap: 2rem;
    }

    .cta-text h2 { font-size: 2.5rem; margin-bottom: 0.5rem; text-shadow: 2px 2px 0 black; }

    .cta-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    /* --- Responsive --- */
    @media (min-width: 768px) {
        .projects-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .cta-content {
            flex-direction: row;
            text-align: left;
            justify-content: space-between;
        }

        .cta-buttons {
            flex-direction: row;
        }
    }

    @media (min-width: 1024px) {
        .page-title { font-size: 5rem; }
    }
</style>