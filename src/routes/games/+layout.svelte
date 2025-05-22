<script lang="ts">
    import {_} from "$lib/lang/i18n.js";

    const { children } = $props<{
        children: any;
    }>();
    
</script>

<svelte:head>
    <title>{$_("app_title")} | Games</title>
    <meta name="description" content="Our games are very cool!">
    <meta name="twitter:description" content="Our games are very cool!">
    <meta property="og:description" content="Our games are very cool!">
</svelte:head>

{@render children()}