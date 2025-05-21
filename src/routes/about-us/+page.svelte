<script lang="ts">
    import {_} from "$lib/lang/i18n.js";
</script>

<style>
    .about-us-container {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 1rem;
        color: #fff;
    }
    .about-us-container h1 {
        text-align: center;
        font-size: 3rem;
        color: #fff;
        text-shadow: 2px 2px var(--color-dark);
        margin-bottom: 2rem;
    }
    .team-section { /* Styles from original App.svelte for team section */
        text-align: center;
        margin: 4rem 0;
    }
    .team-section h3 {
        font-size: 2.5rem;
        color: #fff;
        margin-bottom: 1rem;
    }
    .team-section p {
        font-size: 1.1rem;
        color: #eee;
        max-width: 700px;
        margin: 0 auto 2rem auto;
    }
    .features { /* Styles from original App.svelte, used for team member cards */
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 1rem; /* Adjusted from 4rem */
    }
</style>

<div class="about-us-container">
    <section class="team-section">
        <h1>{$_("about-us.title")}</h1>
        <p>{$_("about-us.description")}</p>
        <div class="features">
            <div class="feature-card">
                <div class="feature-icon">👩‍💻</div>
                <h3>{$_("about-us.developers.title")}</h3>
                <p>{$_("about-us.developers.description")}</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎨</div>
                <h3>{$_("about-us.artists.title")}</h3>
                <p>{$_("about-us.artists.description")}</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎵</div>
                <h3>{$_("about-us.sound.title")}</h3>
                <p>{$_("about-us.sound.description")}</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">💡</div>
                <h3>{$_("about-us.designers.title")}</h3>
                <p>{$_("about-us.designers.description")}</p>
            </div>
        </div>
    </section>

    <section style="text-align: center; margin-top: 3rem;">
        <h2>{$_("about-us.our-philosophy.title")}</h2>
        <p style="max-width: 700px; margin: 1rem auto; color: #eee;">
            {$_("about-us.our-philosophy.description")}
        </p>
    </section>
</div>