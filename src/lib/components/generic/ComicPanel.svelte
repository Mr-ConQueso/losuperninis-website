<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		variant?: 1 | 2 | 3;
		bgColor?: string; /* e.g., 'var(--nini-red)' */
		className?: string;
		[key: string]: any;
	}

	let {
		children,
		variant = 1,
		bgColor = 'white',
		className = '',
		...rest
	}: Props = $props();

	// Map variant numbers to CSS classes
	const shapeClass = `shape-${variant}`;
</script>

<div
	class="comic-panel {shapeClass} {className}"
	style="background-color: {bgColor};"
	{...rest}
>
	<div class="panel-content">
		{@render children()}
	</div>
</div>

<style>
    .comic-panel {
        position: relative;
        border: 2px solid var(--nini-black);
        box-shadow: 6px 6px 0 var(--nini-black);
        padding: 4px; /* Small padding for the border effect */
        height: 100%;
        transition: transform 0.2s ease;
    }

    .panel-content {
        height: 100%;
        width: 100%;
    }

    /* Clip Path Variants for the "Jagged" Comic Look */
    .shape-1 {
        clip-path: polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%);
    }

    .shape-2 {
        clip-path: polygon(2% 0%, 98% 2%, 100% 100%, 0% 98%);
    }

    .shape-3 {
        clip-path: polygon(0% 2%, 100% 0%, 98% 98%, 2% 100%);
    }

    .comic-panel:hover {
        transform: translateY(-5px);
    }
</style>