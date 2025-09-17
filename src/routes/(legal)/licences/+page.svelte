<script lang="ts">
    import { WEBSITE_URL, COMPANY_NAME, INFO_EMAIL } from '$lib/utils/constants.js';
</script>

<style>
    .licences-container {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.8); /* Light background for readability */
        border-radius: 1rem;
        color: #333; /* Darker text for readability */
        line-height: 1.6;
    }
    .licences-container h1 {
        text-align: center;
        font-size: 2.5rem;
        color: #fff;
        text-shadow: 2px 2px var(--color-font);
        margin-bottom: 2rem;
    }
    .licences-container p,
    .licences-container ul {
        margin-bottom: 1rem;
    }
    .licences-container ul {
        padding-left: 20px;
    }
    .licences-container a {
        color: var(--color-background);
    }
    .licences-container strong {
        color: var(--color-primary);
    }
</style>

<div class="licences-container">
    <p><strong>
        Last Updated: <time datetime="12-05-25">12/05/25</time>
    </strong></p>
    
    <h1>Copyright</h1>
    <p>All original content, code, and chaotic creativity on this site © {COMPANY_NAME} – which basically means our pixelated creations are ours. While we embrace the indie spirit of sharing, please don’t reproduce/distribute our games, art, or website content without permission. (But hey – fan art? Memes? Speedruns? Those get our official <span style="color: var(--color-background);">✨nini-approved✨</span> stamp.)</p>

    <h1>Credits</h1>
    <p>We’re obsessively grateful to these resources that helped build our digital clubhouse (even when not legally required to mention them):</p>

    <div class="credit-links">
        <a href="https://commons.wikimedia.org/wiki/File:YouTube_full-color_icon_(2017).svg" target="_blank" rel="noopener">
            YouTube Icon (Original: YouTube Vector: Jarould)
        </a><br>
        <a href="https://commons.wikimedia.org/wiki/File:Instagram_logo_2022.svg" target="_blank" rel="noopener">
            Instagram Logo
        </a><br>
        <a href="https://commons.wikimedia.org/wiki/File:Bluesky_Logo.svg" target="_blank" rel="noopener">
            Bluesky Logo by Eric Bailey
        </a><br>
        <a href="https://my.corebook.io/1zObrQ89Q4wHhgFCfYIUhMUvmNf4XjxO/02-logo/" target="_blank" rel="noopener">
            Discord Logo via Brand Kit
        </a><br>
        <a href="https://commons.wikimedia.org/wiki/File:Steam_icon_logo.svg" target="_blank" rel="noopener">
            Steam Icon
        </a>
    </div>

    <p><em>Legal footnote: These are public domain assets, but we’re mentioning them because good karma > legal minimums.</em></p>

    <h1>Licences</h1>
    <p>While we mostly brew our own code chaos, we occasionally use:</p>
    <ul>
        <li><strong>PostHog Analytics</strong> (Self-hosted under AGPLv3)</li>
        <li><strong>SvelteKit Framework</strong> (MIT License)</li>
    </ul>
    <p>Full license details available upon request. Yes, even the ones our legal team insisted we include “just in case someone asks about that one npm package from 2018”.</p>

    <div class="closing-note">
        <p><small>Made with 73% caffeine and 100% nini spirit.<br>
            (The other 27% is pure panic about server conflicts.)</small></p>
    </div>
</div>