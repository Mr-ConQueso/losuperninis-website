export interface Post {
	title: string;
	date: string;
	excerpt: string;
	image: string;
	tags: string[];
	slug: string;
	featured?: boolean;
}

export async function getPosts(lang: string = 'en') {
	// 1. Grab ALL markdown files regardless of language
	const modules = import.meta.glob('/src/posts/*.md', { eager: true });

	const posts: Post[] = [];

	for (const path in modules) {
		const file = modules[path] as any;
		const filename = path.split('/').pop() || '';

		// 2. Parse the filename: "my-post.en.md" -> ["my-post", "en", "md"]
		const parts = filename.split('.');

		// Safety check: ensure file has at least slug + lang + ext
		if (parts.length < 3) continue;

		const ext = parts.pop();      // "md"
		const fileLang = parts.pop(); // "en" or "es"
		const slug = parts.join('.'); // "my-post" (handles dots in slugs too)

		// 3. Filter: Only add the post if it matches the requested language
		if (file && file.metadata && fileLang === lang) {
			posts.push({
				...file.metadata,
				slug // We use the clean slug (without .en)
			});
		}
	}

	// 4. Sort by date
	return posts.sort((a, b) =>
		new Date(b.date).getTime() - new Date(a.date).getTime()
	);
}