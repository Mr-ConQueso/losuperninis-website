import { getPosts } from '$lib/utils/posts';

export async function load({ params }) {
	// Default to 'en' if we are at the root /devlog
	const lang = params.lang || 'en';

	// Fetch only the posts for this language
	const posts = await getPosts(lang);

	return { posts };
}