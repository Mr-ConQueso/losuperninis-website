<script lang="ts">

	import { page } from '$app/state';

	interface Props {
		[key: string]: any;
	}

	let {
		...rest
	}: Props = $props();

	// Get current language from the page data
	let currentLang = $derived(page.data.lang as 'en' | 'es');

	// Determine target language (The one we want to switch TO)
	let targetLang = $derived(currentLang === 'en' ? 'es' : 'en');
	let label = $derived(targetLang.toUpperCase()); // "ES" or "EN"

	// Construct new URL for standard navigation (No-JS support)
	let targetUrl = $derived(page.url.pathname.replace(/^\/(en|es)/, `/${targetLang}`));

	function switchLanguage(e: MouseEvent) {
		// 1. Save preference to cookie (valid for 1 year)
		document.cookie = `lang=${targetLang}; path=/; max-age=31536000`;

		// 2. We let the default link behavior happen, or we can force a reload if needed.
		// Since we're changing the URL prefix handled by SvelteKit's params, a standard link click
		// should work fine. However, forcing a reload ensures server-side hooks re-run perfectly.
		// If you prefer SPA navigation, you can remove the next line and just let the <a> work.
		// But for language switches, a full reload is often safer to clear state.

		// e.preventDefault();
		// window.location.href = targetUrl;
	}
</script>

<a
	href={targetUrl}
	onclick={switchLanguage}
	class="lang-toggle"
	aria-label="Switch to {targetLang === 'en' ? 'English' : 'Spanish'}"
	{...rest}
>
	<span class="lang-text">{label}</span>
	<div class="lang-icon">
		<i class="fas fa-globe"></i>
	</div>
</a>

<style>
	.lang-toggle {
		background: transparent;
		border: 2px solid var(--nini-black); /* Default to black, overriden in navbar */
		border-radius: 30px;
		padding: 6px 16px;
		cursor: pointer;
		font-family: "Fredoka", sans-serif;
		font-weight: bold;
		display: flex;
		align-items: center;
		gap: 8px;
		transition: all 0.2s;
		color: var(--nini-beige);
		text-decoration: none; /* Ensure it looks like a button, not a link */
	}

	/* Navbar context override (since navbar uses white text mostly) */
	:global(nav) .lang-toggle {
        border-color: rgba(255,255,255,0.3);
        color: white;
    }

    :global(nav) .lang-toggle:hover {
        background: white;
        color: var(--nini-red);
        border-color: white;
        transform: translateY(-2px);
    }

    .lang-text {
        font-size: 1rem;
    }

    .lang-icon {
        font-size: 0.9rem;
    }
</style>