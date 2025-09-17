<script>
    export let data;
    import BlogCard from '$lib/components/blog/BlogCard.svelte';
		import {_} from "$lib/lang/i18n.ts";
</script>

<style>
    .blog-container h1 {
        text-align: center;
        font-size: 3rem;
        color: var(--color-font-complement);
        text-shadow: 2px 2px var(--color-font);
        margin-bottom: 2rem;
    }
</style>

<main class="blog-container container mx-auto py-10 px-4">
    <h1>
			{$_("blog.title")}
    </h1>

		<p>
			{$_("blog.description")}
		</p>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each data.posts as post}
            <BlogCard {...post} />
        {/each}
    </div>
</main>
