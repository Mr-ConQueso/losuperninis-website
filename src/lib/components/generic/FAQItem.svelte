<script lang="ts">
	import ComicPanel from './ComicPanel.svelte';

	interface Props {
		question: string;
		answer: string;
		variant?: 1 | 2 | 3;
	}

	let { question, answer, variant = 1 }: Props = $props();
	let isOpen = $state(false);

	function toggle() {
		isOpen = !isOpen;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault();
			toggle();
		}
	}
</script>

<div class="faq-wrapper">
	<!--
			Question Header
			Changed from <button> to <div> to avoid invalid HTML (div inside button).
			Added role="button" and tabindex="0" to keep it accessible.
	-->
	<div
		role="button"
		tabindex="0"
		class="question-trigger"
		aria-expanded={isOpen}
		onclick={toggle}
		onkeydown={handleKeydown}
	>
		<ComicPanel variant={variant} bgColor={isOpen ? 'var(--nini-red)' : 'white'} className="question-panel">
			<div class="question-content">
				<span class="q-mark">Q.</span>
				<h3 class={isOpen ? 'text-white' : 'text-black'}>{question}</h3>
				<i class="fas fa-chevron-down arrow {isOpen ? 'rotated' : ''}"></i>
			</div>
		</ComicPanel>
	</div>

	<!-- Answer Body -->
	{#if isOpen}
		<div class="answer-body">
			<div class="answer-content">
				<p>{answer}</p>
			</div>
		</div>
	{/if}
</div>

<style>
    .faq-wrapper {
        margin-bottom: 1.5rem;
        position: relative;
        z-index: 1; /* Establish a localized stacking context */
    }

    .question-trigger {
        width: 100%;
        cursor: pointer;
        text-align: left;
        outline: none;
        position: relative;
        z-index: 10; /* Ensure header stays on top of the answer */
    }

    /* Focus styles for accessibility */
    .question-trigger:focus-visible :global(.comic-panel) {
        outline: 2px solid white;
        outline-offset: 2px;
    }

    .question-content {
        padding: 1.5rem;
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .q-mark {
        font-family: "Luckiest Guy", cursive;
        font-size: 2rem;
        color: var(--nini-black);
    }

    /* Target the h3 inside the panel */
    :global(.question-panel h3) {
        flex: 1;
        font-family: "Fredoka", sans-serif;
        font-weight: bold;
        font-size: 1.25rem;
        margin: 0;
    }

    .text-white { color: white; }
    .text-black { color: black; }

    .arrow {
        font-size: 1.5rem;
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        color: var(--nini-black);
    }

    .rotated {
        transform: rotate(180deg);
        color: white;
    }

    .answer-body {
        margin-top: -10px; /* Overlap slightly for visual connection */
        padding: 0 1rem;
        position: relative;
        /* Fixed Z-Index Logic:
           Instead of -1 (which might hide it behind the page background),
           we rely on the Header having z-index: 10 and this having z-index: 5.
           This keeps it under the header but above the page.
        */
        z-index: 5;
        animation: slideDown 0.3s ease-out forwards;
    }

    .answer-content {
        background-color: var(--nini-beige);
        border: 2px solid var(--nini-black);
        border-top: none;
        padding: 2rem 1.5rem 1.5rem;
        color: black;
        font-size: 1.1rem;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
    }

    @keyframes slideDown {
        from { opacity: 0; transform: translateY(-20px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>