<script>

    import { createEventDispatcher } from "svelte";
    import {locales} from "$lib/lang/l10n.js";
    export let value;

    const dispatch = createEventDispatcher();

    function handleLocaleChange(event) {

        event.preventDefault();

        dispatch("locale-changed", event.target.value);

    }

</script>

<style>
    .locale-selector {
        all: revert;
        font-size: 1.25rem;
        font-family: var(--font-subheading);
        background: rgba(255,255,255,0);
        border-color: rgba(255,255,255,0);
        color: var(--color-dark);
        padding: 0.5rem 1rem;
        border-radius: var(--border-radius-pill);
        transition: all 0.3s;
    }
    
    .locale-selector:hover {
        background: rgba(255,255,255,0.2);
    }

</style>

<select class="locale-selector" on:change={handleLocaleChange}>

    <!--{#each Object.keys(locales) as locale}-->
    <!--    <option value={locale}>{locales[locale]}</option>-->
    <!--{/each}-->

    <option value={locales[1]}>🇺🇸 English</option>
    <option value={locales[0]}>🇪🇸 Español</option>
    
</select>