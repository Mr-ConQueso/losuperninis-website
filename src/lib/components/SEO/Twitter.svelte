<script>
    let {
        article,
        author,
        twitterUsername,
        image,
        metadescription,
        pageTitle,
        timeToRead,
        url,
    } = $props();
</script>

<svelte:head>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={metadescription} />
    <meta name="twitter:url" content={url} />
    {#if image}
        <meta name="twitter:image" content={image} />
    {/if}
    {#if article}
        <meta property="article:publisher" content={author} />
        <meta property="article:author" content={twitterUsername} />
        <meta property="article:timeToRead" content={timeToRead} />
    {/if}
</svelte:head>
