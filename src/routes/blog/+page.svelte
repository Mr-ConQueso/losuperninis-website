<script>
    export let data;
    import BlogCard from '$lib/components/blog/BlogCard.svelte';
</script>

<style>
    .blog-container h1 {
        text-align: center;
        font-size: 3rem;
        color: #fff;
        text-shadow: 2px 2px var(--color-dark);
        margin-bottom: 2rem;
    }
</style>

<main class="blog-container container mx-auto py-10 px-4">
    <h1>
        ¡Our Super Quirky Blog!
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each data.posts as post}
            <BlogCard {...post} />
        {/each}
    </div>
</main>
