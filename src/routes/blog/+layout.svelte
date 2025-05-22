<script lang="ts">
    import {_} from "$lib/lang/i18n.js";

    const { children } = $props<{
        children: any;
    }>();
    
</script>

<svelte:head>
    <title>{$_("app_title") + " | Blog"}</title>
</svelte:head>

{@render children()}