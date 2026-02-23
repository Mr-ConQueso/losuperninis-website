<script lang="ts">
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
	import ComicButton from '$lib/components/generic/ComicButton.svelte';
	import TeamCard from '$lib/components/team/TeamCard.svelte';
	import { teamData } from '$lib/components/team/team-info.ts';
	import { page } from '$app/state';

	import type { Dictionary } from '$lib/types/i18n';
	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
	const link = (path: string) => `/${lang}${path}`;

	let team = $derived(teamData.map(member => {
		// Find the specific text for this member ID
		// We cast to 'any' briefly to avoid TS shouting if keys are missing during dev
		const translatedFields = (t.members as any)[member.id];

		return {
			...member, // Keep name, color, img, variant
			bio: translatedFields.bio,
			role: translatedFields.role,
			kryptonite: translatedFields.kryptonite,
			favoriteGame: translatedFields.favoriteGame
		};
	}));
</script>

<div class="page-wrapper">

	<!-- Header Section -->
	<header class="about-header">
		<div class="bg-layer halftone-beige"></div>
		<div class="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<div class="header-text">
				<div class="comic-badge">{t.about.date}</div>
				<h1 class="page-title text-stroke-thick">{t.about.title_1} <span class="highlight-red">{t.about.title_2}</span> {t.about.title_3}</h1>
				<p class="header-subtitle">
					{t.about.desc}
				</p>
			</div>
			<!-- Visual Element -->
			<div class="header-visual">
				<ComicPanel variant={2} className="hero-panel">
					<img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Studio Life" class="hero-img">
					{#snippet bubble()}
						<div class="speech-bubble">
							<p>{t.about.bubble_1}<br>{t.about.bubble_2}</p>
							<div class="bubble-tail"></div>
						</div>
					{/snippet}
				</ComicPanel>
			</div>
		</div>
	</header>

	<!-- Team Section -->
	<section class="section team-section">
		<div class="bg-layer halftone-red-overlay"></div>
		<div class="container relative z-10">
			<div class="section-header center-text">
				<h2 class="section-title text-stroke">{t.about.team.title}</h2>
				<p class="text-black">{t.about.team.desc}</p>
			</div>

			<div class="team-grid">
				{#each team as member}
					<TeamCard
						name={member.name}
						role={member.role}
						img={member.img}
						skills={member.skills}
						bio={member.bio}
						link={member.link}
						linkText={member.linkText}
						color={member.color}
						variant={member.variant as 1|2|3}
						kryptonite={member.kryptonite}
						favoriteGame={member.favoriteGame}
						id={member.id}
					/>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="section cta-section">
		<div class="container">
			<ComicPanel variant={2} bgColor="black" className="join-panel">
				<div class="cta-content">
					<h2 class="text-white">{t.about.cta.title}</h2>
					<p class="text-beige">{t.about.cta.desc}</p>
					<ComicButton text={t.about.cta.link} variant="primary" href={link('/#contact')} />
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
        overflow-x: hidden;
    }

    /* --- Header --- */
    .about-header {
        padding: 4rem 0;
        background-color: var(--nini-bg);
        position: relative;
        border-bottom: 4px solid var(--nini-black);
    }

    .halftone-beige {
        position: absolute;
        inset: 0;
        opacity: 0.1;
        background-image: radial-gradient(circle, var(--nini-beige) 1px, transparent 1px);
        background-size: 10px 10px;
    }

    .grid { display: grid; }
    .grid-cols-1 { grid-template-columns: 1fr; }
    .gap-8 { gap: 2rem; }
    .items-center { align-items: center; }

    .header-text { text-align: center; }

    .comic-badge {
        display: inline-block;
        background: var(--nini-red);
        color: white;
        font-family: "Luckiest Guy";
        padding: 4px 12px;
        border: 2px solid black;
        margin-bottom: 1rem;
        transform: rotate(-3deg);
    }

    .page-title {
        font-size: 3.5rem;
        color: white;
        margin-bottom: 1rem;
        line-height: 1;
    }

    .highlight-red { color: var(--nini-red); }
    .header-subtitle { color: var(--nini-beige); font-size: 1.2rem; }

    .hero-img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        filter: grayscale(100%);
    }

    .speech-bubble {
        position: absolute;
        top: -20px;
        right: -20px;
        background: white;
        color: black;
        padding: 1rem;
        border: 3px solid black;
        font-family: "Luckiest Guy";
        border-radius: 50%;
        transform: rotate(10deg);
        z-index: 20;
    }

    .bubble-tail {
        position: absolute;
        bottom: 0;
        left: 10px;
        width: 15px;
        height: 15px;
        background: white;
        border-bottom: 3px solid black;
        border-right: 3px solid black;
        transform: rotate(45deg) translate(5px, 5px);
    }

    .text-beige { color: var(--nini-beige); margin-bottom: 0.5rem; font-size: 1.5rem; }
    .text-white { color: white; }

    /* --- Team Section --- */
    .team-section {
        background-color: white;
        padding: 4rem 0;
        border-top: 4px solid black;
    }

    .halftone-red-overlay {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(circle, var(--nini-red) 1px, transparent 1px);
        background-size: 10px 10px;
        opacity: 0.1;
        pointer-events: none;
    }

    .team-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .team-card-wrapper {
        transition: transform 0.2s;
    }
    .team-card-wrapper:hover { transform: scale(1.02); }

    .team-card-inner {
        background: var(--nini-bg);
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .member-photo {
        height: 250px;
        border-bottom: 4px solid black;
        overflow: hidden;
    }
    .member-photo img { width: 100%; height: 100%; object-fit: cover; }

    .member-info { padding: 1.5rem; color: white; flex: 1; display: flex; flex-direction: column; }

    .member-name { font-size: 2rem; line-height: 1; color: white; margin-bottom: 0.2rem; }
    .member-role { color: var(--nini-beige); font-weight: bold; text-transform: uppercase; font-size: 0.9rem; margin-bottom: 1rem; display: block; }

    .skills-box {
        background: black;
        border: 2px solid var(--nini-beige);
        padding: 0.8rem;
        margin-bottom: 1rem;
        font-family: "Fredoka";
        font-size: 0.9rem;
    }

    .stat-row { display: flex; justify-content: space-between; border-bottom: 1px dashed #555; padding: 2px 0; }
    .stat-row:last-child { border-bottom: none; }
    .stat-label { color: #888; text-transform: capitalize; }
    .stat-val { color: var(--nini-red); font-weight: bold; }

    .member-quote { font-style: italic; color: #ccc; text-align: center; margin-top: auto; }

    /* --- CTA Section --- */
    .cta-section { padding: 4rem 0; background-color: var(--nini-bg); border-top: 4px dashed white; }

    .join-panel { max-width: 600px; margin: 0 auto; text-align: center; }
    .cta-content { padding: 3rem 1.5rem; }
    .cta-content h2 { font-size: 2.5rem; margin-bottom: 0.5rem; }

    /* --- Responsive --- */
    @media (min-width: 768px) {
        .grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
        .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }

        .header-text { text-align: left; }
        .page-title { font-size: 5rem; }

        .values-grid { grid-template-columns: repeat(3, 1fr); }
        .team-grid { grid-template-columns: repeat(3, 1fr); }
    }

    /* Mobile Timeline Adjustments */
    @media (max-width: 767px) {
        .timeline::after { left: 31px; }
        .timeline-item { width: 100%; padding-left: 70px; padding-right: 25px; }
        .timeline-item.right { left: 0; }
        .left::before, .right::before { left: 60px; border: medium solid white; border-width: 10px 10px 10px 0; border-color: transparent white transparent transparent; }
    }
</style>