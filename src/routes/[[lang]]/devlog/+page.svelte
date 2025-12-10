<script lang="ts">
	import BlogCard from '$lib/components/blog/BlogCard.svelte';
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
	import { page } from '$app/state';

	// Receive data from +page.ts
	let { data } = $props();

	// Derived values update automatically when data changes
	let featuredPosts = $derived(data.posts.filter((p: any) => p.featured));
	let regularPosts = $derived(data.posts.filter((p: any) => !p.featured));

	import type { Dictionary } from '$lib/types/i18n';
	import Newsletter from '$lib/components/generic/Newsletter.svelte';
	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
	const link = (path: string) => `/${lang}${path}`;
</script>

<div class="page-wrapper">

	<!-- Hero Header -->
	<header class="devlog-header">
		<div class="header-pattern"></div>
		<div class="container relative z-10 text-center">
			<div class="comic-badge rotate-neg-2">{t.devlog.subtitle}</div>
			<h1 class="page-title text-stroke-thick">{t.devlog.title_1} <span class="highlight-red">{t.devlog.title_2} </span>{t.devlog.title_3}</h1>
			<p class="header-subtitle">
				{t.devlog.desc}
			</p>
		</div>
	</header>

	<!-- Featured Section -->
	{#if featuredPosts.length > 0}
		<section class="section featured-section">
			<div class="container">
				<h2 class="section-label">
					<i class="fas fa-star text-yellow-400">{t.devlog.posts.must_read}</i>
				</h2>
				<div class="featured-grid">
					{#each featuredPosts as post}
						<BlogCard
							{...post}
							variant={2}
							featured={true}
						/>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- Blog List Section -->
	<section class="section list-section">
		<div class="bg-layer halftone-beige"></div>
		<div class="container relative z-10">
			<div class="list-header">
				<h2 class="section-title text-stroke">{t.devlog.posts.latest}</h2>
				<div class="filter-placeholder">
					<!-- Simple visual placeholder for filters -->
					<span>{t.devlog.posts.filters.title}</span>
					<button class="filter-tag active">{t.devlog.posts.filters.all}</button>
					<button class="filter-tag">{t.devlog.posts.filters.tech}</button>
					<button class="filter-tag">{t.devlog.posts.filters.art}</button>
				</div>
			</div>

			<div class="posts-grid">
				{#each regularPosts as post, i}
					<BlogCard
						{...post}
						variant={((i % 3) + 1) as 1|2|3}
						featured={false}
					/>
				{/each}
			</div>

			<!-- Pagination (Visual Only for now) -->
			<div class="pagination">
				<button class="page-btn active">1</button>
				<button class="page-btn">2</button>
				<button class="page-btn">3</button>
				<button class="page-btn">{t.devlog.posts.pages.next}</button>
			</div>
		</div>
	</section>

	<!-- Newsletter CTA -->
	<section class="section cta-section">
		<div class="container">
			<Newsletter
				title={t.devlog.newsletter.title}
				description={t.devlog.newsletter.desc}
				placeholder={t.newsletter.email_input}
				buttonText={t.newsletter.subscribe}
				variant={1}
				bgColor="black"
				textColor="white"
			/>
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
    .devlog-header {
        padding: 4rem 0 2rem;
        background-color: var(--nini-bg);
        position: relative;
        overflow: hidden;
        border-bottom: 4px solid var(--nini-black);
    }

    .header-pattern {
        position: absolute;
        inset: 0;
        opacity: 0.05;
        background-image: radial-gradient(var(--nini-white) 1px, transparent 1px);
        background-size: 20px 20px;
    }

    .comic-badge {
        display: inline-block;
        background: var(--nini-blue);
        color: white;
        font-family: "Luckiest Guy";
        padding: 4px 12px;
        border: 2px solid white;
        margin-bottom: 1rem;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.5);
    }

    .rotate-neg-2 { transform: rotate(-2deg); }

    .page-title {
        font-size: 4rem;
        color: white;
        margin-bottom: 1rem;
    }

    .highlight-red { color: var(--nini-red); }

    .header-subtitle {
        color: var(--nini-beige);
        font-size: 1.25rem;
        max-width: 600px;
        margin: 0 auto;
    }

    /* --- Featured Section --- */
    .featured-section {
        padding: 3rem 0;
        background-color: var(--nini-white);
        border-bottom: 4px solid var(--nini-black);
    }

    .section-label {
        font-family: "Luckiest Guy";
        font-size: 1.5rem;
        color: var(--nini-black);
        margin-bottom: 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .text-yellow-400 { color: #FBBF24; }

    .featured-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    /* --- List Section --- */
    .list-section {
        position: relative;
        padding: 4rem 0;
    }

    .halftone-beige {
        position: absolute;
        inset: 0;
        opacity: 0.1;
        background-image: radial-gradient(circle, var(--nini-beige) 1px, transparent 1px);
        background-size: 10px 10px;
    }

    .list-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3rem;
        gap: 1rem;
    }

    .section-title {
        font-size: 3rem;
        color: var(--nini-white);
    }

    .filter-placeholder {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--nini-beige);
        font-family: "Fredoka";
    }

    .filter-tag {
        background: none;
        border: 2px solid var(--nini-beige);
        color: var(--nini-beige);
        padding: 4px 12px;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
    }

    .filter-tag.active, .filter-tag:hover {
        background: var(--nini-beige);
        color: var(--nini-black);
    }

    .posts-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-bottom: 4rem;
    }

    /* --- Pagination --- */
    .pagination {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
    }

    .page-btn {
        background: var(--nini-black);
        color: white;
        border: 2px solid var(--nini-beige);
        width: 40px;
        height: 40px;
        font-family: "Luckiest Guy";
        font-size: 1.2rem;
        cursor: pointer;
        transition: transform 0.1s;
    }
    .page-btn:last-child { width: auto; padding: 0 1rem; }

    .page-btn.active, .page-btn:hover {
        background: var(--nini-red);
        border-color: white;
        transform: translateY(-2px);
    }

    /* --- CTA Section --- */
    .cta-section {
        padding-bottom: 4rem;
    }

    .newsletter-panel {
        max-width: 800px;
        margin: 0 auto;
    }

    .cta-content {
        padding: 2rem;
        text-align: center;
    }

    .cta-content h2 { font-size: 2.5rem; margin-bottom: 0.5rem; }
    .text-beige { color: var(--nini-beige); margin-bottom: 1.5rem; }

    .input-group {
        display: flex;
        gap: 0.5rem;
        max-width: 500px;
        margin: 0 auto;
        flex-direction: column;
    }

    .comic-input {
        padding: 1rem;
        border: 2px solid var(--nini-beige);
        background: transparent;
        color: white;
        font-family: "Fredoka";
        flex: 1;
    }
    .comic-input:focus { outline: none; border-color: var(--nini-red); background: #222; }

    .comic-submit {
        background: var(--nini-red);
        color: white;
        border: 2px solid white;
        padding: 1rem 2rem;
        font-family: "Luckiest Guy";
        font-size: 1.2rem;
        cursor: pointer;
    }
    .comic-submit:hover { background: white; color: var(--nini-red); }

    /* --- Responsive --- */
    @media (min-width: 768px) {
        .list-header { flex-direction: row; justify-content: space-between; }
        .posts-grid { grid-template-columns: repeat(2, 1fr); } /* 2 columns on tablet */
        .input-group { flex-direction: row; }
    }

    @media (min-width: 1024px) {
        .posts-grid { grid-template-columns: repeat(3, 1fr); } /* 3 columns on desktop */
        .page-title { font-size: 5rem; }
    }
</style>