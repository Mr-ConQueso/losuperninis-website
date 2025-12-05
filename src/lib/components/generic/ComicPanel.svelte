<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;     // Main content (Will be CROPPED)
		bubble?: Snippet;      // Floating content (Will NOT be cropped)
		variant?: 1 | 2 | 3;
		bgColor?: string;
		className?: string;
		[key: string]: any;
	}

	let {
		children,
		bubble,
		variant = 1,
		bgColor = 'white',
		className = '',
		...rest
	}: Props = $props();

	const clipPaths = {
		1: 'polygon(0% 0%, 100% 2%, 98% 98%, 2% 100%)',
		2: 'polygon(2% 0%, 98% 2%, 100% 100%, 0% 98%)',
		3: 'polygon(0% 2%, 100% 0%, 98% 98%, 2% 100%)'
	};

	const currentPath = clipPaths[variant];
</script>

<div class="panel-wrapper {className}" {...rest}>

	<!--
		LAYER 1: BORDER & SHADOW
		Positioned absolutely at the back.
		It defines the black border and the drop shadow.
	-->
	<div class="layer-visuals">
		<div class="visual-shadow">
			<div class="visual-border" style="clip-path: {currentPath};"></div>
		</div>
	</div>

	<!--
		LAYER 2: MAIN CONTENT
		This is strictly clipped to the path.
		Images inside here will be cut off at the jagged edges.
		We use background color here to fill the shape.
	-->
	<div
		class="layer-content"
		style="background-color: {bgColor}; clip-path: {currentPath};"
	>
		{@render children()}
	</div>

	<!--
		LAYER 3: BUBBLES / OVERLAYS
		This sits on top and is NOT clipped.
		Use this slot for speech bubbles that need to float outside.
	-->
	{#if bubble}
		<div class="layer-overlay">
			{@render bubble()}
		</div>
	{/if}

</div>

<style>
    .panel-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        transition: transform 0.2s ease;
        /* CRITICAL: This padding creates the gap between the
           Outer Border (Layer 1) and the Inner Content (Layer 2).
           It effectively sets the "Border Thickness".
        */
        padding: 4px;
        isolation: isolate; /* Creates a new stacking context */
    }

    .panel-wrapper:hover {
        transform: translateY(-5px);
    }

    .panel-wrapper:hover .visual-shadow {
        filter: drop-shadow(8px 10px 0px var(--nini-black));
    }

    /* --- Layer 1: Visuals (Border & Shadow) --- */
    .layer-visuals {
        position: absolute;
        inset: 0; /* Stretches to full size of wrapper */
        z-index: 0;
        pointer-events: none;
    }

    .visual-shadow {
        width: 100%;
        height: 100%;
        filter: drop-shadow(6px 6px 0px var(--nini-black));
        transition: filter 0.2s ease;
    }

    .visual-border {
        width: 100%;
        height: 100%;
        background-color: var(--nini-black);
        /* Clip the black box to create the jagged border shape */
    }

    /* --- Layer 2: Content (Clipped) --- */
    .layer-content {
        position: relative;
        z-index: 10;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        /* Content is inset by the wrapper padding, ensuring the black border (Layer 1) shows behind it */
    }

    /* --- Layer 3: Overlay (Unclipped) --- */
    .layer-overlay {
        position: absolute;
        inset: 0;
        z-index: 20;
        pointer-events: none; /* Let clicks pass through empty areas */
        /* Note: No clip-path here! */
    }

    /* Ensure children of the overlay (the bubbles) are clickable */
    .layer-overlay :global(*) {
        pointer-events: auto;
    }
</style>