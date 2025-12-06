<script lang="ts">
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
	import ComicButton from '$lib/components/generic/ComicButton.svelte';

	interface Props {
		name: string;
		role: string;
		img: string;
		skills: string[];
		bio: string;
		link: string;
		linkText?: string;
		color?: string;
		variant?: 1 | 2 | 3;
		kryptonite?: string;
		favoriteGame?: string;
		[key: string]: any;
	}

	let {
		name,
		role,
		img,
		skills,
		bio,
		link,
		linkText = "View Profile",
		color = "white",
		variant = 1,
		kryptonite,
		favoriteGame,
		...rest
	}: Props = $props();
</script>

<div class="team-card-wrapper">
	<ComicPanel variant={variant} bgColor={color} className="h-full" {...rest}>
		<div class="team-card-inner">
			<!-- Photo -->
			<div class="member-photo">
				<img src={img} alt={name}>
			</div>

			<!-- Info -->
			<div class="member-info">
				<div class="header-group">
					<h3 class="member-name">{name}</h3>
					<span class="member-role">{role}</span>
				</div>

				<!-- Skill Pills -->
				<div class="skills-row">
					{#each skills as skill}
						<span class="skill-pill">{skill}</span>
					{/each}
				</div>

				<!-- Bio -->
				<p class="member-bio">{bio}</p>

				<!-- Fun Specs Section -->
				{#if kryptonite || favoriteGame}
					<div class="fun-specs">
						{#if favoriteGame}
							<div class="spec-row">
								<div class="spec-icon"><i class="fas fa-gamepad"></i></div>
								<div class="spec-text">
									<span class="spec-label">Fave Game</span>
									<span class="spec-value">{favoriteGame}</span>
								</div>
							</div>
						{/if}

						{#if kryptonite}
							<div class="spec-row">
								<div class="spec-icon"><i class="fas fa-skull-crossbones"></i></div>
								<div class="spec-text">
									<span class="spec-label">Kryptonite</span>
									<span class="spec-value">{kryptonite}</span>
								</div>
							</div>
						{/if}
					</div>
				{/if}

				<!-- Action Button -->
				<div class="member-action">
					<ComicButton
						text={linkText}
						href={link}
						variant="dark"
						className="!text-sm !py-2 !px-6"
						target="_blank"
						rel="noreferrer"
					/>
				</div>
			</div>
		</div>
	</ComicPanel>
</div>

<style>
    .team-card-wrapper {
        height: 100%;
        transition: transform 0.2s;
    }

    .team-card-wrapper:hover {
        transform: translateY(-5px);
    }

    .team-card-inner {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .member-photo {
        height: 250px;
        border-bottom: 4px solid var(--nini-black);
        overflow: hidden;
        flex-shrink: 0;
    }

    .member-photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s;
    }

    .team-card-wrapper:hover .member-photo img {
        transform: scale(1.05);
    }

    .member-info {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex: 1;
        gap: 1rem;
    }

    .header-group {
        text-align: center;
        color: white;
    }

    .member-name {
        font-family: "Luckiest Guy";
        font-size: 2rem;
        line-height: 1;
        margin-bottom: 0.2rem;
        text-shadow: 2px 2px 0 var(--nini-black);
    }

    .member-role {
        font-family: "Fredoka";
        font-weight: bold;
        text-transform: uppercase;
        font-size: 0.9rem;
        color: var(--nini-beige);
        background: var(--nini-black);
        padding: 2px 8px;
        border-radius: 4px;
        display: inline-block;
    }

    /* --- Skill Pills --- */
    .skills-row {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        justify-content: center;
    }

    .skill-pill {
        font-family: "Fredoka";
        font-size: 0.75rem;
        font-weight: bold;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 2px solid white;
        padding: 4px 10px;
        border-radius: 20px;
        text-shadow: 1px 1px 0 var(--nini-black);
        box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
    }

    .member-bio {
        font-family: "Fredoka";
        font-size: 1rem;
        color: white;
        text-align: center;
        line-height: 1.4;
        text-shadow: 1px 1px 0 rgba(0,0,0,0.5);
    }

    /* --- Fun Specs --- */
    .fun-specs {
        background: rgba(0, 0, 0, 0.3);
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: 8px;
        padding: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 0.8rem;
        margin-bottom: 0.5rem;
    }

    .spec-row {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }

    .spec-icon {
        width: 32px;
        height: 32px;
        background: white;
        color: var(--nini-black);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1rem;
        flex-shrink: 0;
        border: 2px solid var(--nini-black);
    }

    .spec-text {
        display: flex;
        flex-direction: column;
        line-height: 1.1;
    }

    .spec-label {
        font-size: 0.7rem;
        text-transform: uppercase;
        color: var(--nini-beige);
        font-weight: bold;
    }

    .spec-value {
        font-size: 0.9rem;
        color: white;
        font-weight: bold;
    }

    .member-action {
        text-align: center;
        margin-top: auto;
    }
</style>