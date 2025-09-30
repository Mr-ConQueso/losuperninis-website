<!-- Hero.svelte -->
<script>
    export let silhouetteImage = '';
    export let coloredImage = '';
    export let chatText = '';
    export let isActive = false;
    export let left = 0;
    export let top = 0;

    const toggleActive = () => {
        isActive = !isActive;
    };
</script>

<div class="games" on:mouseenter={toggleActive} on:mouseleave={toggleActive} style="transform: translate({left}%, {top}%);">
    <div class="background-ray" style="background-image: url('/src/assets/images/our-team/Light.png');"></div> <!-- Adjust the path -->
    <img src={silhouetteImage} alt="Hero" class="hero-image" />
    {#if isActive}
        <div class="chat-bubble">
            <span>{chatText}</span>
        </div>
    {/if}
</div>

<style>
    .games {
        position: absolute;
        transition: transform 0.3s ease, z-index 0.3s ease;
    }

    .background-ray {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        opacity: 0; /* Start invisible */
        transition: opacity 0.3s ease; /* Smooth fade */
        z-index: 1;
    }

    .games:hover .background-ray {
        opacity: 1; /* Fade in on hover */
    }

    .hero-image {
        position: relative;
        width: 17vw;
        height: auto;
        transition: transform 0.3s;
        z-index: 2; /* Ensure it's above the background */
    }

    .hero-image:hover {
        transform: scale(1.1);
    }

    .chat-bubble {
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--color-font);
        border-radius: 10px;
        padding: 5px 10px;
        font-size: 0.8rem;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 3; /* Above everything else */
    }

    .chat-bubble:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 10px 0 10px;
        border-color: #ddd transparent transparent transparent;
    }
</style>