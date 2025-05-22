<script>
    import {spring} from 'svelte/motion';
    import {onMount} from 'svelte';
    import Card from './Card.svelte';
    import TestCard from "$lib/components/TestCard.svelte";

    export let cards = [];

    let activeIndex = 0;
    let containerWidth = 0;
    let cardWidth = 0;
    const threshold = 0.25; // fraction of width to consider a swipe

    // spring store for the x offset of the active card
    const xOffset = spring(0, {
        stiffness: 0.2,
        damping: 0.4
    });

    // track raw drag start
    let startX = 0;
    let dragging = false;

    let container;
    onMount(() => {
        containerWidth = container.clientWidth;
        // assume our card is 80% width of container
        cardWidth = containerWidth * 0.8;
    });

    function handlePointerDown(event) {
        dragging = true;
        startX = event.clientX;
        xOffset.set(0);             // reset any ongoing motion
        event.target.setPointerCapture(event.pointerId);
    }

    function handlePointerMove(event) {
        if (!dragging) return;
        const dx = event.clientX - startX;
        xOffset.set(dx);            // update spring’s target to dx
    }

    function handlePointerUp(event) {
        dragging = false;
        const dx = event.clientX - startX;
        const swipeFraction = dx / cardWidth;

        if (Math.abs(swipeFraction) > threshold) {
            // fling off
            const direction = swipeFraction > 0 ? 1 : -1;
            xOffset.set(direction * containerWidth, { stiffness: 0.05, damping: 0.2 });
            // once it’s off screen, advance index
            setTimeout(() => {
                activeIndex = Math.min(
                    Math.max(activeIndex - direction, 0),
                    cards.length - 1
                );
                xOffset.set(0, { stiffness: 0.2, damping: 0.4 });
            }, 50);
        } else {
            // snap back
            xOffset.set(0, { stiffness: 0.2, damping: 0.4 });
        }
    }
</script>

<style>
    .container {
        position: relative;
        width: 100%;
        min-height: 700px;
        overflow: hidden;
        touch-action: pan-y;
    }

    .card {
        position: absolute;
        width: 80%;
        top: 20px;
        will-change: transform, opacity;
    }
    .prev, .next {
        transform: scale(0.9);
        opacity: 0.5;
        z-index: 1;
    }
    .prev {
        transform: translateX(-75%) scale(0.9);
    }
    .next {
        transform: translateX(75%) scale(0.9);
    }
</style>

<div
        bind:this={container}
        class="container" id="games"
>
    {#each cards as card, idx}
        {#if idx === activeIndex}
            <!-- Active card: draggable -->
            <div
                    class="card"
                    on:pointerdown={handlePointerDown}
                    on:pointermove={handlePointerMove}
                    on:pointerup={handlePointerUp}
                    style="transform:
          translateX({$xOffset}px)
          rotate({$xOffset / cardWidth * 15}deg)
          scale(1);
          z-index: 2;"
            >
                <TestCard {...card} swipeable={false} />
            </div>
        {:else if idx === activeIndex - 1}
            <div class="card prev">
                <TestCard {...card} swipeable={false} />
            </div>
        {:else if idx === activeIndex + 1}
            <div class="card next">
                <TestCard {...card} swipeable={false} />
            </div>
        {/if}
    {/each}
</div>
