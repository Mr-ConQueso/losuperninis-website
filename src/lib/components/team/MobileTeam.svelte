<script lang="ts">
	import LandingTeamCard from './LandingTeamCard.svelte';
	import { onMount } from 'svelte';

	interface Props {
		team: any[];
	}

	let { team }: Props = $props();

	// --- State ---
	let currentIndex = $state(0);
	let touchStartX = 0;
	let touchEndX = 0;
	let timer: ReturnType<typeof setInterval>;

	// --- Navigation Logic ---
	function nextCard() {
		currentIndex = (currentIndex + 1) % team.length;
		resetTimer();
	}

	function prevCard() {
		currentIndex = (currentIndex - 1 + team.length) % team.length;
		resetTimer();
	}

	function goToIndex(i: number) {
		currentIndex = i;
		resetTimer();
	}

	// --- Timer Logic (Auto-Cycle) ---
	function startTimer() {
		clearInterval(timer);
		timer = setInterval(() => {
			currentIndex = (currentIndex + 1) % team.length;
		}, 1500); // 1.5s auto-cycle
	}

	function stopTimer() {
		clearInterval(timer);
	}

	function resetTimer() {
		stopTimer();
		startTimer();
	}

	// Initialize Timer on mount
	onMount(() => {
		startTimer();
		return () => stopTimer();
	});

	// --- Interaction Handlers ---
	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.changedTouches[0].screenX;
		stopTimer();
	}

	function handleTouchEnd(e: TouchEvent) {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
		startTimer();
	}

	function handleSwipe() {
		if (touchEndX < touchStartX - 50) nextCard();
		if (touchEndX > touchStartX + 50) prevCard();
	}

	// --- CSS Classes ---
	function getCardClass(i: number, current: number, total: number) {
		if (i === current) return 'card-center';
		if (i === (current - 1 + total) % total) return 'card-left';
		if (i === (current + 1) % total) return 'card-right';
		return 'card-hidden';
	}
</script>

<!--
    Container
    Added mouse events (enter/leave) to pause auto-cycle on desktop hover
-->
<div class="team-carousel"
		 ontouchstart={handleTouchStart}
		 ontouchend={handleTouchEnd}
		 onmouseenter={stopTimer}
		 onmouseleave={startTimer}
		 role="region"
		 aria-label="Team Member Carousel">

	<div class="carousel-track">
		{#each team as member, i}
			<div class="card-wrapper {getCardClass(i, currentIndex, team.length)}">
				<LandingTeamCard
					id={member.id}
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
		<button class="nav-btn prev" onclick={prevCard} aria-label="Previous Member">
			<i class="fas fa-chevron-left"></i>
		</button>

		<div class="dots">
			{#each team as _, i}
				<button
					class="dot {i === currentIndex ? 'active' : ''}"
					onclick={() => goToIndex(i)}
					aria-label="Go to member {i + 1}"
				></button>
			{/each}
		</div>

		<button class="nav-btn next" onclick={nextCard} aria-label="Next Member">
			<i class="fas fa-chevron-right"></i>
		</button>
	</div>
</div>

<style>
    .team-carousel {
        position: relative;
        height: 500px;
        overflow: hidden;
        margin-top: 1rem;
        width: 100%;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        perspective: 1000px;
    }

    .carousel-track {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 20px;
    }

    .card-wrapper {
        position: absolute;
        width: 280px;
        transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        opacity: 0; /* Default invisible */
    }

    /* Active Card */
    .card-center {
        z-index: 10;
        transform: translateX(0) scale(1);
        opacity: 1;
    }

    /* Left Card - Fades out to the side */
    .card-left {
        z-index: 5;
        transform: translateX(-120%) scale(0.9) rotate(-10deg);
        opacity: 0; /* Fade out completely */
        pointer-events: none;
    }

    /* Right Card - Fades out to the side */
    .card-right {
        z-index: 5;
        transform: translateX(120%) scale(0.9) rotate(10deg);
        opacity: 0; /* Fade out completely */
        pointer-events: none;
    }

    /* Hidden cards */
    .card-hidden {
        z-index: 0;
        transform: scale(0.5);
        opacity: 0;
        pointer-events: none;
    }

    /* Controls */
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
        transition: transform 0.1s;
        /* Ensure clicks work on desktop */
        pointer-events: auto;
    }

    .nav-btn:active {
        transform: scale(0.9);
    }

    .nav-btn:hover {
        background: white;
        color: var(--nini-red);
    }

    .dots { display: flex; gap: 8px; }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ccc;
        border: 2px solid black;
        cursor: pointer;
        transition: all 0.2s;
        pointer-events: auto;
    }

    .dot.active {
        background: var(--nini-blue);
        transform: scale(1.4);
    }
</style>