<script lang="ts">
	import LandingTeamCard from './LandingTeamCard.svelte';

	interface Props {
		team: any[];
	}

	let { team }: Props = $props();
</script>

<div class="desktop-team-container">
	{#each team as member, i}
		<div class="card-wrapper" style="margin-top: {i % 2 !== 0 ? '3rem' : '0'};">
			<LandingTeamCard
				name={member.name}
				role={member.role}
				img={member.img}
				quote={member.quote}
				color={member.color}
				rotation={i % 2 === 0 ? '-3deg' : '3deg'}
			/>
		</div>
	{/each}
</div>

<style>
    .desktop-team-container {
        display: flex;
        justify-content: center;
        gap: 2rem;
        padding: 2rem 0;
        flex-wrap: wrap;
    }

    .card-wrapper {
        position: relative;
        z-index: 1;
    }
</style>