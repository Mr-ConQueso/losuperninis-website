import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const lang = params.lang || 'en';
	const slug = params.slug;

	try {
		// Dynamically import the specific language version:
		// e.g. ../../../../posts/physics-meltdown.es.md
		const post = await import(`../../../../posts/${slug}.${lang}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		// If the Spanish version doesn't exist, this triggers a 404.
		// You could try/catch a fallback to .en.md here if you wanted!
		throw error(404, `Could not find post: ${slug} in ${lang}`);
	}
}