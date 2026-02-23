<script lang="ts">
	import LandingTeamCard from './LandingTeamCard.svelte';
	import { onMount } from 'svelte';

	interface Props {
		team: any[];
	}

	let { team }: Props = $props();

	// --- State ---
	let jsEnabled = $state(false); // Progressive enhancement flag
	let currentIndex = $state(0);
	let touchStartX = 0;
	let touchEndX = 0;
	let timer: ReturnType<typeof setInterval>;

	// --- Navigation Logic ---
	function nextCard(e?: Event) {
		if (e) e.preventDefault();
		currentIndex = (currentIndex + 1) % team.length;
		resetTimer();
	}

	function prevCard(e?: Event) {
		if (e) e.preventDefault();
		currentIndex = (currentIndex - 1 + team.length) % team.length;
		resetTimer();
	}

	function goToIndex(i: number, e?: Event) {
		if (e) e.preventDefault();
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
		jsEnabled = true; // Activate JS enhancements
		startTimer();
		return () => stopTimer();
	});

	// --- Interaction Handlers ---
	function handleTouchStart(e: TouchEvent) {
		if (!jsEnabled) return;
		touchStartX = e.changedTouches[0].screenX;
		stopTimer();
	}

	function handleTouchEnd(e: TouchEvent) {
		if (!jsEnabled) return;
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
		if (!jsEnabled) return ''; // No extra classes if JS is off
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
<div class="team-carousel {jsEnabled ? 'js-active' : ''}"
		 ontouchstart={handleTouchStart}
		 ontouchend={handleTouchEnd}
		 onmouseenter={stopTimer}
		 onmouseleave={startTimer}
		 role="region"
		 aria-label="Team Member Carousel">

	<div class="carousel-track">
		{#each team as member, i}
			<!-- Added ID for anchor linking (no-JS nav) -->
			<div id="slide-{i}" class="card-wrapper {getCardClass(i, currentIndex, team.length)}">
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
		<!--
			Changed buttons to anchors for No-JS fallback.
			If JS is enabled, onclick prevents default and runs custom logic.
			If JS is disabled, href handles the jump.
		-->
		<a href="#slide-{(currentIndex - 1 + team.length) % team.length}"
			 class="nav-btn prev"
			 onclick={prevCard}
			 aria-label="Previous Member">
			<i class="fas fa-chevron-left"></i>
		</a>

		<div class="dots">
			{#each team as _, i}
				<a
					href="#slide-{i}"
					class="dot {i === currentIndex ? 'active' : ''}"
					onclick={(e) => goToIndex(i, e)}
					aria-label="Go to member {i + 1}"
				></a>
			{/each}
		</div>

		<a href="#slide-{(currentIndex + 1) % team.length}"
			 class="nav-btn next"
			 onclick={nextCard}
			 aria-label="Next Member">
			<i class="fas fa-chevron-right"></i>
		</a>
	</div>
</div>

<style>
    .team-carousel {
        position: relative;
        height: 550px; /* Increased height to accommodate No-JS scrolling layout */
        margin-top: 1rem;
        width: 100%;
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
        perspective: 1000px;
        /* Default: Allow scroll overflow for No-JS */
        overflow-x: auto;
        overflow-y: hidden;
        scroll-snap-type: x mandatory;
        scrollbar-width: none; /* Hide scrollbar Firefox */
        padding-bottom: 60px; /* Make room for controls in No-JS mode */
    }

    .team-carousel::-webkit-scrollbar {
        display: none; /* Hide scrollbar Chrome/Safari */
    }

    /* When JS is active, hide overflow to rely on custom transforms */
    .team-carousel.js-active {
        height: 500px; /* Reset height for JS mode */
        overflow: hidden;
        scroll-snap-type: none;
        padding-bottom: 0;
    }

    .carousel-track {
        position: relative;
        height: 100%;
        width: 100%;
        display: flex;
        /* Default: Flex for scrolling row */
        flex-direction: row;
        padding-top: 20px;
    }

    /* When JS is active, track doesn't need to scroll, items are absolute */
    .js-active .carousel-track {
        justify-content: center;
    }

    .card-wrapper {
        /* Default No-JS: Items in a row, snap to center */
        position: relative;
        min-width: 100%; /* Take full width of container */
        scroll-snap-align: center;
        display: flex;
        justify-content: center;
        transition: none;
        opacity: 1;
        pointer-events: auto; /* Ensure links inside work */
    }

    /* When JS is active, items become absolute for 3D effect */
    .js-active .card-wrapper {
        position: absolute;
        min-width: auto;
        width: 280px;
        transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        opacity: 0; /* Default invisible */
        scroll-snap-align: none;
    }

    /* Active Card */
    .js-active .card-center {
        z-index: 10;
        transform: translateX(0) scale(1);
        opacity: 1;
    }

    /* Left Card - Fades out to the side */
    .js-active .card-left {
        z-index: 5;
        transform: translateX(-120%) scale(0.9) rotate(-10deg);
        opacity: 0; /* Fade out completely */
        pointer-events: none;
    }

    /* Right Card - Fades out to the side */
    .js-active .card-right {
        z-index: 5;
        transform: translateX(120%) scale(0.9) rotate(10deg);
        opacity: 0; /* Fade out completely */
        pointer-events: none;
    }

    /* Hidden cards */
    .js-active .card-hidden {
        z-index: 0;
        transform: scale(0.5);
        opacity: 0;
        pointer-events: none;
    }

    /* Controls */
    .carousel-controls {
        position: absolute;
        bottom: 10px;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        z-index: 20;
        pointer-events: none; /* Let clicks pass through container area */
    }

    /* In No-JS mode, we use sticky positioning so controls follow scroll but stay visible */
    .team-carousel:not(.js-active) .carousel-controls {
        position: sticky;
        left: 0;
        bottom: 10px;
        width: 100%;
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
        /* Ensure clicks work */
        pointer-events: auto;
        text-decoration: none; /* For <a> tag */
    }

    .nav-btn:active {
        transform: scale(0.9);
    }

    .nav-btn:hover {
        background: white;
        color: var(--nini-red);
    }

    .dots { display: flex; gap: 8px; pointer-events: auto; }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #ccc;
        border: 2px solid black;
        cursor: pointer;
        transition: all 0.2s;
        pointer-events: auto;
        display: block; /* Ensure <a> renders as block */
    }

    .dot.active {
        background: var(--nini-blue);
        transform: scale(1.4);
    }
</style>