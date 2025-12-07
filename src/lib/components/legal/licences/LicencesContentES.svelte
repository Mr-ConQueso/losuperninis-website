<script lang="ts">
	import { page } from '$app/state';

	import type { Dictionary } from '$lib/types/i18n.ts';

	let t = $derived(page.data.t as Dictionary);
</script>


<div class="licences-content">

	<h2>Copyright</h2>
	<p>
		All original content, code, and chaotic creativity on this site © <strong>{t.main.title}</strong> – which basically means our pixelated creations are ours. While we embrace the indie spirit of sharing, please don’t reproduce/distribute our games, art, or website content without permission.
	</p>
	<p class="fun-note">
		(But hey – fan art? Memes? Speedruns? Those get our official <span class="highlight-inline">✨nini-approved✨</span> stamp.)
	</p>

	<h2>Credits</h2>
	<p>We’re obsessively grateful to these resources that helped build our digital clubhouse (even when not legally required to mention them):</p>

	<div class="credit-links">
		<a href="https://commons.wikimedia.org/wiki/File:YouTube_full-color_icon_(2017).svg" target="_blank" rel="noopener noreferrer" class="credit-item">
			<i class="fab fa-youtube"></i> YouTube Icon (Original: YouTube Vector: Jarould)
		</a>
		<a href="https://commons.wikimedia.org/wiki/File:Instagram_logo_2022.svg" target="_blank" rel="noopener noreferrer" class="credit-item">
			<i class="fab fa-instagram"></i> Instagram Logo
		</a>
		<a href="https://commons.wikimedia.org/wiki/File:Bluesky_Logo.svg" target="_blank" rel="noopener noreferrer" class="credit-item">
			<i class="fas fa-cloud"></i> Bluesky Logo by Eric Bailey
		</a>
		<a href="https://my.corebook.io/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/02-logo/" target="_blank" rel="noopener noreferrer" class="credit-item">
			<i class="fab fa-discord"></i> Discord Logo via Brand Kit
		</a>
		<a href="https://commons.wikimedia.org/wiki/File:Steam_icon_logo.svg" target="_blank" rel="noopener noreferrer" class="credit-item">
			<i class="fab fa-steam"></i> Steam Icon
		</a>
	</div>

	<p class="legal-footnote">
		<em>Legal footnote: These are public domain assets, but we’re mentioning them because good karma > legal minimums.</em>
	</p>

	<h2>Licences</h2>
	<p>While we mostly brew our own code chaos, we occasionally use:</p>
	<ul>
		<li><strong>PostHog Analytics</strong> (Self-hosted under AGPLv3)</li>
		<li><strong>SvelteKit Framework</strong> (MIT License)</li>
	</ul>
	<p>Full license details available upon request. Yes, even the ones our legal team insisted we include “just in case someone asks about that one npm package from 2018”.</p>

	<div class="closing-note">
		<p>
			<small>Made with 73% caffeine and 100% nini spirit.<br>
				(The other 27% is pure panic about server conflicts.)</small>
		</p>
	</div>

</div>

<style>
    /* Content Styling */
    .licences-content {
        padding: 2rem;
        font-family: "Fredoka", sans-serif;
        color: var(--nini-black);
        line-height: 1.6;
        font-size: 1.1rem;
    }

    .licences-content h2 {
        font-family: "Luckiest Guy", cursive;
        font-size: 2rem;
        color: var(--nini-blue);
        margin-top: 2.5rem;
        margin-bottom: 1rem;
        border-bottom: 2px dashed #ddd;
        padding-bottom: 0.5rem;
    }

    .licences-content h2:first-child { margin-top: 0; }

    .licences-content p {
        margin-bottom: 1rem;
    }

    .fun-note {
        background-color: #fff9e6;
        border-left: 4px solid var(--nini-blue);
        padding: 1rem;
        font-style: italic;
    }

    .highlight-inline {
        background-color: var(--nini-bg);
        color: white;
        padding: 0 4px;
        font-weight: bold;
    }

    /* Credits List */
    .credit-links {
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-bottom: 1.5rem;
        background: #f9f9f9;
        padding: 1.5rem;
        border-radius: 8px;
        border: 2px solid var(--nini-beige);
    }

    .credit-item {
        color: var(--nini-black);
        text-decoration: none;
        font-weight: bold;
        transition: color 0.2s;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .credit-item:hover {
        color: var(--nini-red);
    }

    .credit-item i {
        width: 20px;
        text-align: center;
    }

    .legal-footnote {
        font-size: 0.9rem;
        color: #666;
    }

    /* List Styling */
    .licences-content ul {
        list-style-type: disc;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .licences-content li {
        margin-bottom: 0.5rem;
    }

    .licences-content strong {
        color: var(--nini-red);
    }

    /* Closing Note */
    .closing-note {
        margin-top: 3rem;
        text-align: center;
        color: #666;
        border-top: 2px solid #eee;
        padding-top: 1.5rem;
    }

    @media (min-width: 768px) {
        .page-title { font-size: 4rem; }
        .licences-content { padding: 4rem; }
    }
</style>