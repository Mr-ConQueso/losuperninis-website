<script lang="ts">
    // Define the props structure matching our game data
    interface GameProps {
        id: string;
        icon: string;
        titleKey: string;
        color: string;
        descriptionKey: string;
        features: string[];
        buttonText: string;
    }

    // Receive the game data as props
    const { game } = $props<{ game: GameProps }>();
</script>

<style>
    .game-card {
        background: rgba(255, 255, 255, 0.95);
        border-radius: var(--border-radius-large);
        overflow: hidden;
        transition: transform 0.3s, box-shadow 0.3s;
        box-shadow: var(--box-shadow-medium);
        position: relative;
        z-index: 1;
    }

    .game-card:hover {
        transform: translateY(-10px);
        box-shadow: var(--box-shadow-large);
    }

    .game-header {
        padding: 2rem;
        text-align: center;
        color: var(--color-font);
        position: relative;
    }
    
    .game-icon {
        font-size: 4rem;
        margin-bottom: 1rem;
        display: inline-block;
        animation: bounce 1s infinite alternate;
    }

    .game-title {
        font-family: var(--font-heading);
        font-size: 1.8rem;
        margin: 0 0 0.5rem 0;
    }

    .game-body {
        padding: 2rem;
    }

    .game-description {
        margin-bottom: 1.5rem;
        color: var(--color-font);
    }

    .game-features {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
    }

    .game-feature {
        background: rgba(0,0,0,0.05);
        padding: 0.5rem 1rem;
        border-radius: var(--border-radius-pill);
        font-size: 0.9rem;
    }
</style>

<div class="game-card">
    <div class="game-header" style="background-color: {game.color};">
        <div class="game-icon">{game.icon}</div>
        <h3 class="game-title">{game.titleKey}</h3>
    </div>
    <div class="game-body">
        <p class="game-description">{game.descriptionKey}</p>
        <div class="game-features">
            {#each game.features as feature}
                <span class="game-feature">{feature}</span>
            {/each}
        </div>
        <a href="/games/{game.id}" class="btn-primary" style="width: 100%;">{game.buttonText}</a>
    </div>
</div>