<script>
    export let data;
    import BlogPost from '$lib/components/blog/BlogPost.svelte';
</script>

<BlogPost title={data.post.title} content={data.post.content} />
