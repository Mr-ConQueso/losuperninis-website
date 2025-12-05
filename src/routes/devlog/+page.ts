import { getPosts } from '$lib/utils/posts';

export async function load() {
	const posts = await getPosts();

	// DEBUG: Look at your terminal (VS Code) when you refresh the page
	console.log("Posts found:", posts);

	return { posts };
}