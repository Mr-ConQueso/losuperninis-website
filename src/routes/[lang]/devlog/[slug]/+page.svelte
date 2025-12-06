<script lang="ts">
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';

	let { data } = $props();
</script>

<div class="post-wrapper">
	<!-- Post Header -->
	<header class="post-header">
		<div class="container">
			<div class="header-content">
				<div class="meta-tags">
					{#each data.meta.tags as tag}
						<span class="tag">#{tag}</span>
					{/each}
				</div>
				<h1 class="post-title text-stroke-thick">{data.meta.title}</h1>
				<p class="post-date">{data.meta.date}</p>
			</div>
		</div>
		<!-- Hero Image -->
		<div class="hero-image-wrapper">
			<img src={data.meta.image} alt={data.meta.title} class="hero-image">
		</div>
	</header>

	<!-- Post Content -->
	<article class="post-body container">
		<ComicPanel variant={1} className="content-panel">
			<div class="markdown-content">
				<!-- This component injects the compiled Markdown -->
				<data.content />
			</div>
		</ComicPanel>
	</article>
</div>

<style>
    .post-wrapper {
        padding-top: var(--header-height);
        min-height: 100vh;
        background-color: var(--nini-bg);
    }

    .post-header {
        background-color: var(--nini-bg);
        padding-top: 4rem;
        text-align: center;
        color: white;
    }

    .meta-tags {
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
    }

    .tag {
        color: var(--nini-red);
        font-weight: bold;
        text-transform: uppercase;
    }

    .post-title {
        font-size: 3.5rem;
        margin-bottom: 1rem;
        line-height: 1.1;
    }

    .post-date {
        color: var(--nini-beige);
        font-family: "Fredoka";
        font-size: 1.2rem;
        margin-bottom: 3rem;
    }

    .hero-image-wrapper {
        width: 100%;
        height: 400px;
        border-top: 4px solid var(--nini-black);
        border-bottom: 4px solid var(--nini-black);
        overflow: hidden;
    }

    .hero-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .post-body {
        margin-top: -50px; /* Overlap the image */
        position: relative;
        z-index: 10;
        padding-bottom: 6rem;
        max-width: 900px;
    }

    /* Typography for Markdown Content */
    .markdown-content {
        padding: 2rem;
        font-size: 1.1rem;
        line-height: 1.8;
        color: var(--nini-black);
    }

    /* You can use global styles or :global() here to style markdown elements */
    :global(.markdown-content h2) {
        font-family: "Luckiest Guy";
        font-size: 2rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: var(--nini-red);
    }

    :global(.markdown-content p) {
        margin-bottom: 1.5rem;
    }

    :global(.markdown-content ul) {
        list-style-type: disc;
        padding-left: 2rem;
        margin-bottom: 1.5rem;
    }
</style>