<script lang="ts">
    import '../../../app.css';
</script>

<style>
    .social-icons {
        display: flex;
        gap: 1rem;
    }

    .social-icons a {
        color: white;
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
        <img src="/icons/Bluesky_Logo.png" alt="Bluesky Logo" class="icon" />
    </a>
    <a href="https://www.youtube.com/@losuperninis" aria-label="YouTube">
        <img src="/icons/Youtube_Logo.png" alt="YouTube Logo" class="icon" />
    </a>
    <a href="https://discord.com" aria-label="Discord">
        <img src="/icons/Discord_Logo.png" alt="Discord Logo" class="icon" />
    </a>
    <a href="https://steamcommunity.com/id/losuperninis/" aria-label="Steam">
        <img src="/icons/Steam_Logo.png" alt="Steam Logo" class="icon" />
    </a>
</div>