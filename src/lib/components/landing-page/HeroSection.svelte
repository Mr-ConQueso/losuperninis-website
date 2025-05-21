<script>
    import Card from './Card.svelte';
    import MobileHeroSection from "$lib/components/landing-page/MobileHeroSection.svelte";
    import { isMobile } from "$lib/utils/device.js";
    
    let cards = [
        {
            titleKey: 'crop-guardian.titleKey',
            genreKey: 'crop-guardian.genreKey',
            descriptionKey: 'crop-guardian.descriptionKey',
            imageSrc: 'images/projects/crop-guardian/cover.png',
            imageAlt: 'A space guard defending fighting from surrounding aliens',
            link: '/games/crop-guardian'
        },
        {
            titleKey: 'mouse-game.titleKey',
            genreKey: 'mouse-game.genreKey',
            descriptionKey: 'mouse-game.descriptionKey',
            imageSrc: 'images/projects/byte-sized-thief/cover.png',
            imageAlt: 'A stylized room full of gaming objects',
            link: '/games/byte-sized-thief'
        },
        {
            titleKey: 'friendly-fire.titleKey',
            genreKey: 'friendly-fire.genreKey',
            descriptionKey: 'friendly-fire.descriptionKey',
            imageSrc: 'images/projects/friendly-fire/cover.png',
            imageAlt: 'An old train in a dark night',
            link: '/games/friendly-fire'
        },
        {
            titleKey: 'symbiosis.titleKey',
            genreKey: 'symbiosis.genreKey',
            descriptionKey: 'symbiosis.descriptionKey',
            imageSrc: 'images/projects/symbiosis/cover.png',
            imageAlt: 'A cool bacteria idk',
            link: '/games/symbiosis'
        }
    ];
</script>

<style>
    .cards-container {
        position: relative;
        width: 100%;
        max-width: 1400px;
        height: 800px;
        margin: 0 auto;
    }

    .card-wrapper {
        position: absolute;
        transition: transform 0.3s ease;
    }

    .card-wrapper:nth-child(1) {
        transform: rotate(-2deg) translateY(5rem) translateX(55rem);
    }
    .card-wrapper:nth-child(2) {
        transform: rotate(1deg) translateY(5rem) translateX(35rem);
    }
    .card-wrapper:nth-child(3) {
        transform: rotate(-4deg) translateY(5rem) translateX(15rem);
    }
    .card-wrapper:nth-child(4) {
        transform: rotate(6deg) translateY(5rem) translateX(0);
    }

    .card-wrapper:nth-child(1):hover {
        transform: rotate(-2deg) translateY(-1rem) translateX(55rem);
        z-index: 100;
    }
    .card-wrapper:nth-child(2):hover {
        transform: rotate(1deg) translateY(-1rem) translateX(35rem);
        z-index: 100;
    }
    .card-wrapper:nth-child(3):hover {
        transform: rotate(-4deg) translateY(-1rem) translateX(15rem);
        z-index: 100;
    }
    .card-wrapper:nth-child(4):hover {
        transform: rotate(6deg) translateY(-1rem) translateX(0);
        z-index: 100;
    }
</style>


{#if isMobile}
    <MobileHeroSection cards={cards} />
{:else}
    <div class="cards-container" id="games">
        {#each cards as card, index}
            <div class="card-wrapper">
                <Card title={card.titleKey} genre={card.genreKey} description={card.descriptionKey} imageSrc={card.imageSrc} imageAlt={card.imageAlt} link={card.link}/>
            </div>
        {/each}
    </div>
{/if}
