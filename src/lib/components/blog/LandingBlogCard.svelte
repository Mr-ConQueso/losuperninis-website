<script lang="ts">
	interface Props {
		title: string;
		date: string;
		excerpt: string;
		image: string;
		slug: string;
		index: number; // Used to alternate colors
	}

	let { title, date, excerpt, image, slug, index }: Props = $props();

	// Determine variant based on index (Even = Blue style, Odd = Dark style)
	const isBlue = index % 2 === 0;
</script>

<a href="/devlog/{slug}" class="blog-card {isBlue ? 'blog-blue' : 'blog-dark'}">
	<div class="blog-thumb {isBlue ? '' : 'border-beige'}">
		<img src={image} alt={title}>
	</div>

	<div class="blog-info">
		<div class="blog-header">
			<h3 class="blog-title {isBlue ? 'text-beige' : 'text-white'}">
				{title}
			</h3>
			<span class="date-badge {isBlue ? 'dark' : 'light'}">
                {date}
            </span>
		</div>

		<p class="blog-excerpt">
			{excerpt}
		</p>

		<span class="read-more {isBlue ? 'red' : 'white'}">
            Read More >
        </span>
	</div>
</a>

<style>
    .blog-card {
        display: flex;
        flex-direction: column;
        border: 2px solid black;
        padding: 1rem;
        gap: 1.5rem;
        box-shadow: 4px 4px 0 white;
        transition: transform 0.2s;
        text-decoration: none;
        height: 100%;
    }

    .blog-blue { background-color: var(--nini-blue); box-shadow: 4px 4px 0 white; }
    .blog-dark { background-color: var(--nini-bg); border-color: var(--nini-beige); box-shadow: 4px 4px 0 var(--nini-beige); }

    .blog-card:hover { transform: translate(2px, 2px); box-shadow: 2px 2px 0; }

    .blog-thumb {
        height: 200px;
        background: black;
        border: 2px solid white;
        flex-shrink: 0;
        overflow: hidden;
    }
    .blog-thumb.border-beige { border-color: var(--nini-beige); }
    .blog-thumb img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; }

    .blog-info { flex: 1; display: flex; flex-direction: column; }
    .blog-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem; gap: 1rem; }
    .blog-title { font-family: "Luckiest Guy"; font-size: 1.5rem; margin: 0; line-height: 1.1; }
    .text-beige { color: var(--nini-beige); }
    .text-white { color: white; }

    .date-badge {
        font-family: "Fredoka";
        font-size: 0.75rem;
        padding: 2px 6px;
        border: 1px solid;
        white-space: nowrap;
    }
    .date-badge.dark { background: black; color: white; border-color: white; }
    .date-badge.light { background: var(--nini-beige); color: black; border-color: black; }

    .blog-excerpt { color: #ccc; margin-bottom: 1rem; font-family: "Fredoka"; flex: 1; }

    .read-more { font-weight: bold; font-size: 0.9rem; font-family: "Fredoka"; margin-top: auto; }
    .read-more.red { color: var(--nini-red); }
    .read-more.white { color: white; }

    @media (min-width: 768px) {
        .blog-card { flex-direction: row; }
        .blog-thumb { width: 200px; height: 130px; }
    }
</style>