<script>
    import { page } from '$app/stores';

    // Get current path and ensure no trailing slash
    $: basePath = $page.url.pathname.endsWith('/')
        ? $page.url.pathname.slice(0, -1)
        : $page.url.pathname;

    $: privacyPolicyUrl = `${basePath}/privacy-policy`;
    $: licencesUrl = `${basePath}/licences`;
</script>

<style>
    .button-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        gap: 2rem;
        flex-wrap: wrap;
    }
    
    @media (max-width: 768px) {
        .button-container {
            flex-direction: column;
            gap: 1.5rem;
        }
    }
</style>

<div class="button-container">
    <a href={privacyPolicyUrl} class="btn-primary" aria-label="Privacy Policy">
        Privacy Policy
    </a>
    <a href={licencesUrl} class="btn-secondary" aria-label="Licences">
        Licences
    </a>
</div>