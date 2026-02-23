<script lang="ts">
	import ComicButton from '$lib/components/generic/ComicButton.svelte';
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';

	interface Props {
		title: string;
		description: string;
		placeholder?: string;
		buttonText?: string;
		variant?: 1 | 2 | 3;
		bgColor?: string;
		textColor?: 'white' | 'black';
		className?: string;
	}

	let {
		title,
		description,
		placeholder = "Enter your email...",
		buttonText = "Subscribe",
		variant = 1,
		bgColor = "black",
		textColor = "white",
		className = ""
	}: Props = $props();

	let textClass = $derived(textColor === 'white' ? 'text-white' : 'text-black');
	let descClass = $derived(textColor === 'white' ? 'text-beige' : 'text-black-muted');
	let buttonVariant = $derived(bgColor === 'black' || bgColor === 'var(--nini-black)' ? 'primary' : 'dark');

	// --- Form State ---
	let email = $state('');
	let status: 'idle' | 'loading' | 'success' | 'error' = $state('idle');
	let message = $state('');

	async function submit(e: Event) {
		e.preventDefault();
		if (!email || !email.includes('@')) {
			status = 'error';
			message = 'Please enter a valid email address.';
			return;
		}

		status = 'loading';
		message = '';

		try {
			// Call the Cloudflare Worker endpoint
			// Adjust the URL if your worker is hosted on a specific subdomain or route
			const response = await fetch('/api/subscribe', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ email })
			});

			if (!response.ok) {
				// Safely parse JSON response, fallback to text if it fails
				let errorData: any = {};
				const contentType = response.headers.get('content-type');

				if (contentType && contentType.includes('application/json')) {
					try {
						errorData = await response.json();
					} catch {
						// If JSON parsing fails, try to get text
						const text = await response.text();
						errorData = { error: text || 'Subscription failed' };
					}
				} else {
					// Response is not JSON (could be HTML error page)
					const text = await response.text();
					errorData = { error: text || 'Subscription failed' };
				}

				throw new Error(errorData.error || 'Subscription failed');
			}

			status = 'success';
			message = 'Welcome to the club! Check your inbox.';
			email = ''; // Clear input
		} catch (err: any) {
			console.error(err);
			status = 'error';
			message = err.message || 'Something went wrong. Please try again.';
		}
	}
</script>

<div class="newsletter-wrapper {className}">
	<ComicPanel variant={variant} bgColor={bgColor} className="newsletter-panel">
		<div class="newsletter-content">
			<div class="text-group">
				<h2 class="newsletter-title {textClass}">{title}</h2>
				<p class="newsletter-desc {descClass}">{description}</p>
			</div>

			<form class="newsletter-form" onsubmit={submit}>
				<input
					type="email"
					bind:value={email}
					placeholder={placeholder}
					class="comic-input {textColor === 'black' ? 'input-dark' : ''}"
					disabled={status === 'loading' || status === 'success'}
				>
				<div class="submit-wrapper">
					<ComicButton
						text={status === 'loading' ? 'Sending...' : buttonText}
						variant={buttonVariant}
						className="w-full md:w-auto"
					/>
				</div>
			</form>

			{#if message}
				<p class="status-message {status === 'error' ? 'text-red' : 'text-green'}">
					{message}
				</p>
			{/if}
		</div>
	</ComicPanel>
</div>

<style>
    .newsletter-wrapper {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
    }

    .newsletter-content {
        padding: 2rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .newsletter-title {
        font-family: "Luckiest Guy", cursive;
        font-size: 2.5rem;
        margin-bottom: 0.5rem;
        line-height: 1.1;
    }

    .newsletter-desc {
        font-family: "Fredoka", sans-serif;
        font-size: 1.1rem;
        max-width: 600px;
        margin: 0 auto;
    }

    .text-white { color: white; }
    .text-black { color: black; }
    .text-beige { color: var(--nini-beige); }
    .text-black-muted { color: #333; }

    .newsletter-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-width: 500px;
        margin: 0 auto;
        width: 100%;
    }

    .comic-input {
        padding: 1rem;
        border: 2px solid var(--nini-beige);
        background: transparent;
        color: white;
        font-family: "Fredoka", sans-serif;
        font-size: 1rem;
        width: 100%;
    }

    .comic-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
    }

    .comic-input:focus {
        outline: none;
        border-color: var(--nini-red);
        background: rgba(0,0,0,0.2);
    }

    /* Light Theme Input Styles */
    .input-dark {
        border-color: black;
        color: black;
    }

    .input-dark::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }

    .input-dark:focus {
        background: rgba(255,255,255,0.5);
    }

    .submit-wrapper {
        display: flex;
        justify-content: center;
    }

    /* Responsive */
    @media (min-width: 768px) {
        .newsletter-form {
            flex-direction: row;
            align-items: stretch;
        }

        .comic-input {
            flex: 1;
        }
    }
</style>