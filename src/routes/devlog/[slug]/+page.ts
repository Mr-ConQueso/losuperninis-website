import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		// Dynamically import the markdown file based on the slug
		const post = await import(`../../../posts/${params.slug}.md`);

		return {
			content: post.default, // The Svelte component content
			meta: post.metadata    // The frontmatter
		};
	} catch (e) {
		throw error(404, `Could not find post: ${params.slug}`);
	}
}