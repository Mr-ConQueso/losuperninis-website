<script>
    import website from '$lib/config/website.ts';
    import OpenGraph from './OpenGraph.svelte';
    import Twitter from './Twitter.svelte';

    let ogImageSrc;
    let ogSquareImageSrc;
    let twitterImageSrc;

    const {
        author,
        facebookAuthorPage,
        facebookPage,
        ogLanguage,
        siteLanguage,
        siteTitle,
        siteUrl,
        twitterUsername,
    } = website;

    const defaultAlt =
        'picture of a person with long, curly hair, wearing a red had taking a picture with an analogue camera';

    let {
        article = false,
        lastUpdated,
        datePublished,
        metadescription,
        slug,
        timeToRead = 0,
        title,
        ogImage = {
            url: ogImageSrc,
            alt: defaultAlt,
        },
        ogSquareImage = {
            url: ogSquareImageSrc,
            alt: defaultAlt,
        },
        twitterImage = {
            url: twitterImageSrc,
            alt: defaultAlt,
        },
    } = $props();

    const pageTitle = `${siteTitle} | ${title}`;
    const openGraphProps = {
        article,
        image: ogImage,
        squareImage: ogSquareImage,
        metadescription,
        ogLanguage,
        pageTitle,
        siteTitle,
        siteUrl,
        ...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {}),
    };

    const twitterProps = {
        article,
        author,
        twitterUsername,
        image: twitterImage,
        metadescription,
        pageTitle,
        timeToRead,
        url: `${siteUrl}/${slug}`,
    };
</script>

<svelte:head>
    <title>{pageTitle}</title>
    <meta name="description" content={metadescription} />
    <meta
            name="robots"
            content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />
    <html lang={siteLanguage} />
</svelte:head>
<Twitter {...twitterProps} />
<OpenGraph {...openGraphProps} />