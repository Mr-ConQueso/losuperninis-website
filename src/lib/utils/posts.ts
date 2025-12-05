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
	const modules = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts: Post[] = [];

	for (const path in modules) {
		const file = modules[path] as any;
		const metadata = file.metadata as Omit<Post, 'slug'>;

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