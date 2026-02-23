export const onRequestPost = async (context: any) => {
	const { request, env } = context;

	try {
		const { email } = await request.json() as { email: string };

		// Validate email
		if (!email || !email.includes('@')) {
			return new Response(JSON.stringify({ error: 'Invalid email' }), {
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		// Forward to your newsletter server with retry logic
		let attempt = 0;
		let lastError;

		while (attempt < 2) {
			try {
				const response = await fetch(env.NEWSLETTER_API_URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						...(env.NEWSLETTER_API_KEY && { 'Authorization': `Bearer ${env.NEWSLETTER_API_KEY}` })
					},
					body: JSON.stringify({ email })
				});

				if (response.ok) {
					return new Response(JSON.stringify({ success: true }), {
						status: 200,
						headers: { 'Content-Type': 'application/json' }
					});
				}

				// If server returned an error, get the message
				const errorData = await response.json().catch(() => ({}));
				lastError = errorData.error || errorData.message || 'Subscription failed';

				// Don't retry on client errors (4xx)
				if (response.status >= 400 && response.status < 500) {
					break;
				}

			} catch (err: any) {
				lastError = err.message;
			}

			attempt++;
			if (attempt < 2) {
				// Wait 1 second before retry
				await new Promise(resolve => setTimeout(resolve, 1000));
			}
		}

		// All attempts failed
		return new Response(JSON.stringify({
			error: lastError || 'Failed to subscribe after retries'
		}), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});

	} catch (err: any) {
		console.error('Subscription error:', err);
		return new Response(JSON.stringify({
			error: err.message || 'Internal server error'
		}), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};