<script lang="ts">
    import '../app.css';
    import {initPostHog} from '$lib/utils/posthog.js';
    import {initMobile} from '$lib/utils/device.js';
    import {onMount} from 'svelte'
    import Banner from '$lib/components/Banner.svelte';
    import Header from "$lib/components/navigation/Header.svelte";
    import Footer from "$lib/components/navigation/Footer.svelte";
    import {initLocalization} from "$lib/utils/localization.js";
    import {POSTHOG_API_KEY} from "$lib/utils/constants.js";
    import {isLocaleLoaded} from "$lib/lang/i18n.js";
    import LoadingScreen from "$lib/components/LoadingScreen.svelte";

    const { children } = $props<{
        children: any;
    }>();

    onMount(() => {
        initPostHog(POSTHOG_API_KEY);
        initLocalization()
        initMobile()
    });
    
</script>

{#if $isLocaleLoaded}
    
    <Header />
    
    {@render children()}
    
    <Banner />
    
    <Footer />
    
{:else}
    
    <LoadingScreen />
    
{/if}