<script lang="ts">
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
	import ComicButton from '$lib/components/generic/ComicButton.svelte';

	interface Props {
		title: string;
		date: string;
		excerpt: string;
		image: string;
		slug: string;
		tags?: string[];
		variant?: 1 | 2 | 3;
		featured?: boolean;
	}

	let {
		title,
		date,
		excerpt,
		image,
		slug,
		tags = [],
		variant = 1,
		featured = false
	}: Props = $props();
</script>

<div class="blog-card-wrapper {featured ? 'featured' : ''}">
	<ComicPanel variant={variant} bgColor={featured ? 'var(--nini-blue)' : 'white'} className="h-full">
		<div class="blog-layout {featured ? 'layout-featured' : ''}">
			<!-- Image Section -->
			<div class="blog-image-container">
				<img src={image} alt={title} class="blog-image">
				<div class="{featured ? 'date-badge-featured' : 'date-badge'}">
					{date}
				</div>
			</div>

			<!-- Content Section -->
			<div class="blog-content">
				<div class="tags">
					{#each tags as tag}
						<span class="tag">#{tag}</span>
					{/each}
				</div>

				<h3 class="blog-title {featured ? 'text-white' : 'text-black'}">
					<a href="/[lang]/devlog/{slug}">{title}</a>
				</h3>

				<p class="blog-excerpt {featured ? 'text-beige' : 'text-gray'}">
					{excerpt}
				</p>

				<div class="blog-footer">
					<ComicButton
						text="Read More"
						href="/devlog/{slug}"
						variant={featured ? 'primary' : 'dark'}
						className="read-btn"
					/>
				</div>
			</div>
		</div>
	</ComicPanel>
</div>

<style>
    .blog-card-wrapper {
        height: 100%;
        transition: transform 0.2s ease;
    }

    .blog-card-wrapper:hover {
        transform: translateY(-5px);
    }

    /* Standard Layout (Vertical) */
    .blog-layout {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .blog-image-container {
        position: relative;
        height: 200px;
        border-bottom: 4px solid var(--nini-black);
        overflow: hidden;
        flex-shrink: 0;
    }

    .blog-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }

    .blog-card-wrapper:hover .blog-image {
        transform: scale(1.05);
    }

    .date-badge {
        position: absolute;
        top: 0;
        left: 0;
        background: var(--nini-black);
        color: white;
        font-family: "Fredoka", sans-serif;
        font-weight: bold;
        padding: 4px 12px;
        border-bottom-right-radius: 8px;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
    }

		.date-badge-featured {
        position: absolute;
        top: 0;
        left: 0;
        background: var(--nini-black);
        color: white;
        font-family: "Fredoka", sans-serif;
        font-weight: bold;
        padding: 4px 30px 4px 60px;
        border-bottom-right-radius: 8px;
        border-right: 2px solid white;
        border-bottom: 2px solid white;
		}

    .blog-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex: 1;
    }

    .tags {
        margin-bottom: 0.5rem;
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .tag {
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--nini-red);
    }

    .blog-title {
        font-size: 1.75rem;
        line-height: 1.1;
        margin-bottom: 1rem;
    }

    .blog-title a { text-decoration: none; }
    .blog-title a:hover { text-decoration: underline; }

    .text-white { color: white; }
    .text-black { color: black; }
    .text-beige { color: var(--nini-beige); }
    .text-gray { color: #444; }

    .blog-excerpt {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        flex: 1;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    .blog-footer {
        text-align: right;
    }

    /* Featured Layout (Horizontal on Desktop) */
    .featured .blog-image-container {
        border-bottom: 4px solid var(--nini-black);
    }

    .featured .tag { color: var(--nini-beige); }

    @media (min-width: 768px) {
        .layout-featured {
            flex-direction: row;
            align-items: stretch;
        }

        .layout-featured .blog-image-container {
            width: 50%;
            height: auto;
            border-bottom: none;
            border-right: 4px solid var(--nini-black);
        }

        .layout-featured .blog-content {
            width: 50%;
            justify-content: center;
        }
    }
</style>