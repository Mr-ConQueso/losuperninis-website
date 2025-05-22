<script>
    import Card from './Card.svelte';
    import MobileHeroSection from "$lib/components/landing-page/MobileHeroSection.svelte";
    import { isMobile } from "$lib/utils/device.js";
    import TestCard from "$lib/components/TestCard.svelte";
    
    let cards = [
        {
            titleKey: 'symbiosis.titleKey',
            genreKey: 'symbiosis.genreKey',
            descriptionKey: 'symbiosis.descriptionKey',
            imageSrc: 'images/projects/symbiosis/cover.png',
            imageAlt: 'A cool bacteria idk',
            link: '/games/symbiosis',
            cardSvg: '/cards/symbiosis.svg',
            labelSvg: '/cards/symbiosis-label.svg'
        },
        {
            titleKey: 'mouse-game.titleKey',
            genreKey: 'mouse-game.genreKey',
            descriptionKey: 'mouse-game.descriptionKey',
            imageSrc: 'images/projects/byte-sized-thief/cover.png',
            imageAlt: 'A stylized room full of gaming objects',
            link: '/games/byte-sized-thief',
            cardSvg: '/cards/byte-sized-thief.svg',
            labelSvg: '/cards/byte-sized-thief-label.svg'
        },
        {
            titleKey: 'crop-guardian.titleKey',
            genreKey: 'crop-guardian.genreKey',
            descriptionKey: 'crop-guardian.descriptionKey',
            imageSrc: 'images/projects/crop-guardian/cover.png',
            imageAlt: 'A space guard defending fighting from surrounding aliens',
            link: '/games/crop-guardian',
            cardSvg: '/cards/crop-guardian.svg',
            labelSvg: '/cards/crop-guardian-label.svg'
        },
        {
            titleKey: 'friendly-fire.titleKey',
            genreKey: 'friendly-fire.genreKey',
            descriptionKey: 'friendly-fire.descriptionKey',
            imageSrc: 'images/projects/friendly-fire/cover.png',
            imageAlt: 'An old train in a dark night',
            link: '/games/friendly-fire',
            cardSvg: '/cards/friendly-fire.svg',
            labelSvg: '/cards/friendly-fire-label.svg'
        },
        
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

    .card-wrapper:nth-child(4) {
        transform: rotate(-2deg) translateY(5rem) translateX(55rem);
        z-index: 7;
    }
    .card-wrapper:nth-child(3) {
        transform: rotate(1deg) translateY(5rem) translateX(35rem);
        z-index: 8;
    }
    .card-wrapper:nth-child(2) {
        transform: rotate(-4deg) translateY(5rem) translateX(15rem);
        z-index: 9;
    }
    .card-wrapper:nth-child(1) {
        transform: rotate(6deg) translateY(5rem) translateX(0);
        z-index: 10;
    }

    .card-wrapper:nth-child(4):hover {
        transform: rotate(0deg) translateY(2rem) translateX(55rem);
        z-index: 100;
    }
    .card-wrapper:nth-child(3):hover {
        transform: rotate(0deg) translateY(2rem) translateX(35rem);
        z-index: 100;
    }
    .card-wrapper:nth-child(2):hover {
        transform: rotate(0deg) translateY(2rem) translateX(15rem);
        z-index: 100;
    }
    .card-wrapper:nth-child(1):hover {
        transform: rotate(0deg) translateY(2rem) translateX(0);
        z-index: 100;
    }
</style>


{#if isMobile}
    <MobileHeroSection cards={cards} />
{:else}
    <div class="cards-container" id="games">
        {#each cards as card}
            <div class="card-wrapper">
                <TestCard {...card}/>
            </div>
        {/each}
    </div>
{/if}
