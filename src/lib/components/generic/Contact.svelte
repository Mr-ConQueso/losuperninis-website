<script lang="ts">
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
	import ComicButton from '$lib/components/generic/ComicButton.svelte';
	import { socials } from '$lib/utils/contact.ts';
	import { CONTACT_EMAIL } from '$lib/utils/constants.ts';

	interface Props {
		title: string;
		description: string;
		variant?: 1 | 2 | 3;
		bgColor?: string;
		textColor?: 'white' | 'black';
		className?: string;
	}

	let {
		title,
		description,
		variant = 1,
		bgColor = "black",
		textColor = "white",
		className = ""
	}: Props = $props();

	let textClass = $derived(textColor === 'white' ? 'text-white' : 'text-black');
	let descClass = $derived(textColor === 'white' ? 'text-beige' : 'text-black-muted');
	let buttonVariant = $derived(bgColor === 'black' || bgColor === 'var(--nini-black)' ? 'primary' : 'dark');
</script>

<div class="contact-wrapper {className}">
	<ComicPanel variant={variant} bgColor={bgColor} className="contact-panel">
		<div class="contact-content">
			<div class="text-group">
				<h2 class="contact-title {textClass}">{title}</h2>
				<p class="contact-desc {descClass}">{description}</p>
			</div>

			<div class="actions-group">
				<div class="email-section">
					<ComicButton
						text={CONTACT_EMAIL}
						href="mailto:{CONTACT_EMAIL}"
						variant={buttonVariant}
						className="email-btn"
					>
						{#snippet children()}
							<i class="fas fa-envelope"></i>
							<span>{CONTACT_EMAIL}</span>
						{/snippet}
					</ComicButton>
				</div>

				<div class="divider {textColor === 'white' ? 'divider-white' : 'divider-black'}">
					<span>OR</span>
				</div>

				<div class="socials-row">
					{#each socials as link}
						<a href={link.href} aria-label={link.name} target="_blank" rel="noreferrer" class="social-link {textColor === 'white' ? 'white-hover' : 'black-hover'}">
							<img src={link.icon} alt={link.name}>
						</a>
					{/each}
				</div>
			</div>
		</div>
	</ComicPanel>
</div>

<style>
    .contact-wrapper {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
    }

    .contact-content {
        padding: 3rem 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 2.5rem;
    }

    .contact-title {
        font-family: "Luckiest Guy", cursive;
        font-size: 3rem;
        margin-bottom: 1rem;
        line-height: 1.1;
    }

    .contact-desc {
        font-family: "Fredoka", sans-serif;
        font-size: 1.25rem;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.6;
    }

    .text-white { color: white; }
    .text-black { color: black; }
    .text-beige { color: var(--nini-beige); }
    .text-black-muted { color: #333; }

    .actions-group {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    .email-section {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    /* Target the button content for icon alignment */
    :global(.email-btn) {
        display: inline-flex !important;
        align-items: center;
        gap: 0.75rem;
        font-size: 1.2rem !important;
    }

    .divider {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 400px;
        gap: 1rem;
        font-family: "Luckiest Guy", cursive;
        opacity: 0.5;
    }

    .divider::before,
    .divider::after {
        content: "";
        flex: 1;
        height: 2px;
    }

    .divider-white { color: white; }
    .divider-white::before, .divider-white::after { background: white; }

    .divider-black { color: black; }
    .divider-black::before, .divider-black::after { background: black; }

    .socials-row {
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
    }

    .social-link {
        display: block;
        transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        padding: 10px;
        border-radius: 50%;
        background: rgba(255,255,255,0.1);
        border: 2px solid transparent;
    }

    .social-link:hover {
        transform: scale(1.2) rotate(5deg);
        background: white;
        border-color: black;
    }

    .social-link img {
        width: 2.5rem;
        height: 2.5rem;
        display: block;
    }

    @media (min-width: 768px) {
        .contact-content {
            padding: 4rem;
        }
    }
</style>