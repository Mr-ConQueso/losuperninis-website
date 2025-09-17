<script lang="ts">
    import '../../../app.css';
</script>

<style>
    .social-icons {
        display: flex;
        gap: 1rem;
    }

    .social-icons a {
        color: var(--color-font-complement);
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
    <a href="https://bsky.app/profile/losuperninis.bsky.social" aria-label="Bluesky">
        <img src="/icons/socials/bluesky-logo.png" alt="Bluesky Logo" class="icon" />
    </a>
    <a href="https://www.youtube.com/@losuperninis" aria-label="YouTube">
        <img src="/icons/socials/youtube-logo.png" alt="YouTube Logo" class="icon" />
    </a>
    <a href="https://discord.gg/kMnYg9FkYP" aria-label="Discord">
        <img src="/icons/socials/discord-logo.png" alt="Discord Logo" class="icon" />
    </a>
    <a href="https://steamcommunity.com/id/losuperninis/" aria-label="Steam">
        <img src="/icons/socials/steam-logo.png" alt="Steam Logo" class="icon" />
    </a>
</div>