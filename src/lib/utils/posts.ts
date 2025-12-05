export interface Post {
	title: string;
	date: string;
	excerpt: string;
	image: string;
	tags: string[];
	slug: string;
	featured?: boolean;
}

export async function getPosts() {
	// This looks for all .md files in the src/posts folder
	const modules = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts: Post[] = [];

	for (const path in modules) {
		const file = modules[path] as any;
		const metadata = file.metadata as Omit<Post, 'slug'>;

		// Extract slug from filename (e.g., /src/posts/my-post.md -> my-post)
		const slug = path.split('/').pop()?.replace('.md', '') ?? '';

		if (metadata) {
			posts.push({
				...metadata,
				slug
			});
		}
	}

	// Sort by date (newest first)
	return posts.sort((a, b) =>
		new Date(b.date).getTime() - new Date(a.date).getTime()
	);
}