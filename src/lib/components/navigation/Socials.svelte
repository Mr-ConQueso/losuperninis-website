<script lang="ts">
    import '../../../app.css';
		import { INSTAGRAM_URL, BLUESKY_URL, YOUTUBE_URL, DISCORD_INVITE, STEAM_URL } from '$lib/utils/constants.js';
</script>

<style>
    .social-icons {
        display: flex;
        gap: 1rem;
    }

    .social-icons a {
        color: var(--color-font-light);
        font-size: 1.5rem;
        transition: opacity 0.3s;
    }

    .social-icons img {
        height: 40px;
        width: auto;
    }

    .social-icons a:hover {
        opacity: 0.7;
    }
</style>

<div class="social-icons">
    <a href={BLUESKY_URL} aria-label="Bluesky">
        <img src="/icons/socials/bluesky-logo.webp" alt="Bluesky Logo" class="icon" />
    </a>
    <a href={YOUTUBE_URL} aria-label="YouTube">
        <img src="/icons/socials/youtube-logo.webp" alt="YouTube Logo" class="icon" />
    </a>
    <a href={DISCORD_INVITE} aria-label="Discord">
        <img src="/icons/socials/discord-logo.webp" alt="Discord Logo" class="icon" />
    </a>
    <a href={STEAM_URL} aria-label="Steam">
        <img src="/icons/socials/steam-logo.webp" alt="Steam Logo" class="icon" />
    </a>
</div>