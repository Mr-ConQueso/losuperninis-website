<script lang="ts">
	interface Props {
		name: string;
		role: string;
		img: string;
		quote: string;
		color: string;
		rotation?: string; // e.g. "3deg"
		className?: string;
		[key: string]: any;
	}

	let {
		name,
		role,
		img,
		quote,
		color,
		rotation = '0deg',
		className = '',
		...rest
	}: Props = $props();
</script>

<a href="/about/#{name}" aria-label="Team member button">
	<div
		class="team-card {className}"
		style="background-color: {color}; transform: rotate({rotation});"
		{...rest}
	>
		<div class="member-img">
			<img src={img} alt={name}>
		</div>
		<h3 class="member-role">{role}</h3>
		<p class="member-name">{name}</p>
		<p class="member-quote">"{quote}"</p>
	</div>
</a>

<style>
    .team-card {
        width: 280px; /* Slightly wider than original for better readability */
        padding: 0.8rem;
        border: 4px solid black;
        box-shadow: 6px 6px 0 rgba(0,0,0,0.2);
        text-align: center;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        display: flex;
        flex-direction: column;
        align-items: center;
        background: white; /* Default fallback */
        height: 100%; /* For carousel consistency */
    }

    .team-card:hover {
        transform: scale(1.05) rotate(0deg) !important;
        z-index: 20;
        box-shadow: 10px 10px 0 rgba(0,0,0,0.3);
    }

    .member-img {
        width: 100%;
        height: 200px;
        border: 2px solid black;
        margin-bottom: 1rem;
        overflow: hidden;
        background-color: var(--nini-bg);
    }

    .member-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: filter 0.3s;
    }

    .member-role {
        font-family: "Luckiest Guy", cursive;
        font-size: 1.5rem;
        margin-bottom: 0.2rem;
        color: black; /* Or white depending on BG, but black contrasts well with brand colors */
        line-height: 1;
        text-transform: uppercase;
        text-shadow: 2px 2px 0 rgba(255,255,255,0.5);
    }

    /* Adjust text color for darker backgrounds if needed */
    :global(.team-card[style*="var(--nini-blue)"] .member-role),
    :global(.team-card[style*="var(--nini-red)"] .member-role),
    :global(.team-card[style*="var(--nini-green)"] .member-role) {
        color: white;
        text-shadow: 2px 2px 0 black;
    }

    .member-name {
        font-family: "Fredoka", sans-serif;
        font-weight: bold;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
        color: rgba(0,0,0,0.7);
    }

    :global(.team-card[style*="var(--nini-blue)"] .member-name),
    :global(.team-card[style*="var(--nini-red)"] .member-name) {
        color: rgba(255,255,255,0.8);
    }

    .member-quote {
        font-family: "Fredoka", sans-serif;
        font-style: italic;
        font-size: 1rem;
        color: black;
    }

    :global(.team-card[style*="var(--nini-blue)"] .member-quote),
    :global(.team-card[style*="var(--nini-red)"] .member-quote) {
        color: white;
    }
</style>