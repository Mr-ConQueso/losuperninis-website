<script lang="ts">
	import LandingTeamCard from './LandingTeamCard.svelte';

	interface Props {
		team: any[];
	}

	let { team }: Props = $props();

	// Carousel Logic
	let currentIndex = $state(0);
	let touchStartX = 0;
	let touchEndX = 0;

	function nextCard() {
		currentIndex = (currentIndex + 1) % team.length;
	}

	function prevCard() {
		currentIndex = (currentIndex - 1 + team.length) % team.length;
	}

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.changedTouches[0].screenX;
	}

	function handleTouchEnd(e: TouchEvent) {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
	}

	function handleSwipe() {
		if (touchEndX < touchStartX - 50) nextCard();
		if (touchEndX > touchStartX + 50) prevCard();
	}

	function getCardClass(i: number, current: number, total: number) {
		if (i === current) return 'card-center';
		if (i === (current - 1 + total) % total) return 'card-left';
		if (i === (current + 1) % total) return 'card-right';
		return 'card-hidden';
	}
</script>

<div class="mobile-team-carousel" ontouchstart={handleTouchStart} ontouchend={handleTouchEnd}>
	<div class="carousel-track">
		{#each team as member, i}
			<div class="mobile-card-wrapper {getCardClass(i, currentIndex, team.length)}">
				<LandingTeamCard
					name={member.name}
					role={member.role}
					img={member.img}
					quote={member.quote}
					color={member.color}
					rotation="0deg"
				/>
			</div>
		{/each}
	</div>

	<!-- Controls -->
	<div class="carousel-controls">
		<button class="nav-btn" onclick={prevCard}>
			<i class="fas fa-chevron-left"></i>
		</button>
		<div class="dots">
			{#each team as _, i}
				<button class="dot {i === currentIndex ? 'active' : ''}" onclick={() => currentIndex = i}></button>
			{/each}
		</div>
		<button class="nav-btn" onclick={nextCard}>
			<i class="fas fa-chevron-right"></i>
		</button>
	</div>
</div>

<style>
    .mobile-team-carousel {
        position: relative;
        height: 500px;
        overflow: hidden;
        margin-top: 1rem;
        width: 100%;
        max-width: 400px; /* Limit width on mobile */
        margin-left: auto;
        margin-right: auto;
    }

    .carousel-track {
        position: relative;
        height: 100%;
        width: 100%;
        perspective: 1000px;
        display: flex;
        justify-content: center;
        padding-top: 20px;
    }

    .mobile-card-wrapper {
        position: absolute;
        width: 280px; /* Match card width */
        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    }

    .card-center {
        z-index: 10;
        transform: translateX(0) scale(1);
        opacity: 1;
    }

    .card-left {
        z-index: 5;
        transform: translateX(-110%) scale(0.85) rotate(-10deg);
        opacity: 0.5;
        pointer-events: none;
    }

    .card-right {
        z-index: 5;
        transform: translateX(110%) scale(0.85) rotate(10deg);
        opacity: 0.5;
        pointer-events: none;
    }

    .card-hidden {
        z-index: 0;
        opacity: 0;
        transform: scale(0.5);
        pointer-events: none;
    }

    .carousel-controls {
        position: absolute;
        bottom: 20px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        z-index: 20;
    }

    .nav-btn {
        background: var(--nini-red);
        color: white;
        border: 2px solid black;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 2px 2px 0 black;
    }

    .dots { display: flex; gap: 8px; }
    .dot { width: 10px; height: 10px; border-radius: 50%; background: #ccc; border: 2px solid black; cursor: pointer; }
    .dot.active { background: var(--nini-blue); transform: scale(1.2); }
</style>