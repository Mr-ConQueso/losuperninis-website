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
</script>

<div class="faq-wrapper">
	<!-- Question Header -->
	<button onclick={toggle} class="question-btn" aria-expanded={isOpen}>
		<ComicPanel variant={variant} bgColor={isOpen ? 'var(--nini-red)' : 'white'} className="question-panel">
			<div class="question-content">
				<span class="q-mark">Q.</span>
				<h3 class={isOpen ? 'text-white' : 'text-black'}>{question}</h3>
				<i class="fas fa-chevron-down arrow {isOpen ? 'rotated' : ''}"></i>
			</div>
		</ComicPanel>
	</button>

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
    }

    .question-btn {
        width: 100%;
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;
        text-align: left;
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

    .question-panel h3 {
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
        z-index: -1;
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