<script>
    export let data;
    import BlogPost from '$lib/components/blog/BlogPost.svelte';

    const blog = {
        title: data.post.title,
        desc: data.post.description,
        lastUpdated: data.post.lastUpdated,
        datePublished: data.post.datePublished,
        slug: data.post.slug,
        timeToRead: data.post.timeToRead,
        imageUrl: data.post.imageUrl,
        imageAlt: data.post.imageAlt,
        content: data.post.content,
    }
</script>

<BlogPost {...blog}/>
