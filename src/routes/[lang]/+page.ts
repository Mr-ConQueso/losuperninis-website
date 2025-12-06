import { getPosts } from '$lib/utils/posts.ts';

export async function load() {
	const posts = await getPosts();
	return { posts };
}