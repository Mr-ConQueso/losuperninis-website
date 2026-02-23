<script lang="ts">
	import ComicPanel from './ComicPanel.svelte';

	interface Props {
		question: string;
		answer: string;
		variant?: 1 | 2 | 3;
	}

	let { question, answer, variant = 1 }: Props = $props();

	let details: HTMLDetailsElement;
	let content: HTMLDivElement;
	let isAnimating = false;

	function toggle(e: MouseEvent) {
		// Progressive enhancement: prevent default native toggle to handle animation manually
		e.preventDefault();

		if (isAnimating || !details || !content) return;

		if (details.open) {
			close();
		} else {
			open();
		}
	}

	function open() {
		isAnimating = true;
		details.open = true;

		// Use requestAnimationFrame to ensure the element is rendered and measurable
		requestAnimationFrame(() => {
			// Disable the CSS animation that is intended for the no-JS fallback
			content.style.animation = 'none';

			const targetHeight = content.offsetHeight;

			const animation = content.animate(
				[
					{ height: '0px', opacity: 0, transform: 'translateY(-20px)' },
					{ height: `${targetHeight}px`, opacity: 1, transform: 'translateY(0)' }
				],
				{
					duration: 300,
					easing: 'ease-out'
				}
			);

			animation.onfinish = () => {
				isAnimating = false;
				// Keep animation disabled
				content.style.animation = 'none';
			};
		});
	}

	function close() {
		isAnimating = true;
		const startHeight = content.offsetHeight;

		content.style.animation = 'none';

		const animation = content.animate(
			[
				{ height: `${startHeight}px`, opacity: 1, transform: 'translateY(0)' },
				{ height: '0px', opacity: 0, transform: 'translateY(-20px)' }
			],
			{
				duration: 300,
				easing: 'ease-out'
			}
		);

		animation.onfinish = () => {
			details.open = false;
			isAnimating = false;
			content.style.animation = ''; // Reset
		};
	}
</script>

<details class="faq-wrapper" bind:this={details}>
	<!--
			Question Header
			Using <details> and <summary> for native toggle behavior.
	-->
	<summary class="question-trigger" onclick={toggle}>
		<ComicPanel variant={variant} bgColor="white" className="question-panel">
			<div class="question-content">
				<span class="q-mark">Q.</span>
				<h3>{question}</h3>
				<i class="fas fa-chevron-down arrow"></i>
			</div>
		</ComicPanel>
	</summary>

	<!-- Answer Body -->
	<div class="answer-body" bind:this={content}>
		<div class="answer-content">
			<p>{answer}</p>
		</div>
	</div>
</details>

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
      list-style: none;
  }

  .question-trigger::-webkit-details-marker {
      display: none;
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
      color: black;
  }

  details[open] :global(.question-panel) {
      background-color: var(--nini-red) !important;
  }

  details[open] :global(.question-panel h3) {
      color: white;
  }

  .arrow {
      font-size: 1.5rem;
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      color: var(--nini-black);
  }

  details[open] .arrow {
      transform: rotate(180deg);
      color: white;
  }

	.answer-body {
		margin-top: -10px; /* Overlap slightly for visual connection */
		padding: 0 1rem;
		position: relative;
		overflow: hidden;
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
		box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>