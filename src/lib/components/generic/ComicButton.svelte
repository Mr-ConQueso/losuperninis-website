<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		text?: string;
		href?: string | null;
		variant?: 'primary' | 'secondary' | 'dark';
		className?: string;
		onclick?: (event: MouseEvent) => void;
		children?: Snippet;
		[key: string]: any;
	}

	let {
		text = '',
		href = null,
		variant = 'primary',
		className = '',
		onclick,
		children,
		...rest
	}: Props = $props();
</script>

{#if href}
	<a {href} class="comic-btn {variant} {className}" {...rest}>
		{#if children}
			{@render children()}
		{:else}
			{text}
		{/if}
	</a>
{:else}
	<button onclick={onclick} class="comic-btn {variant} {className}" {...rest}>
		{#if children}
			{@render children()}
		{:else}
			{text}
		{/if}
	</button>
{/if}

<style>
    .comic-btn {
        display: inline-block;
        position: relative;
        padding: 12px 32px;
        font-family: "Luckiest Guy", cursive;
        font-size: 1.25rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: 2px solid var(--nini-black);
        filter: drop-shadow(6px 6px 0px var(--nini-black));
        transition: transform 0.1s ease, filter 0.1s ease;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
    }

    /* Variants */
    .comic-btn.primary {
        background-color: var(--nini-red);
        color: var(--nini-white);
    }

    .comic-btn.secondary {
        background-color: var(--nini-beige);
        color: var(--nini-black);
    }

    .comic-btn.dark {
        background-color: var(--nini-black);
        color: var(--nini-white);
        border: 2px solid var(--nini-white);
    }

    /* Interactions */
    .comic-btn:hover {
        transform: translate(2px, 2px);
        filter: drop-shadow(0px 0px 0px var(--nini-black));
    }

    .comic-btn:active {
        transform: translate(4px, 4px);
    }
</style>