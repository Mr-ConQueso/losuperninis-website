import fs from 'node:fs';
import path from 'path';
import matter from 'gray-matter';
import {BLOGS_PATH} from "$lib/server/server-constants.ts";

type LanguageData = {
    title: string;
    excerpt: string;
    content: string;
};

type Post = {
    uid: string;
    coverImage: string;
    languages: {
        [langCode: string]: LanguageData;
    };
};

export async function load() {
    const folders = fs.readdirSync(BLOGS_PATH).filter(f =>
        fs.lstatSync(path.join(BLOGS_PATH, f)).isDirectory()
    );

    const posts = [];

    for (const folder of folders) {
        const dirPath = path.join(BLOGS_PATH, folder);
        const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

        const post: Post = {
            uid: folder,
            coverImage: `/posts/${folder}/cover.jpg`,
            languages: {},
        };

        for (const file of files) {
            const lang = path.basename(file, '.md');
            const filePath = path.join(dirPath, file);
            const fileContents = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContents);

            post.languages[lang] = {
                title: data.title || 'Untitled',
                excerpt: data.excerpt || content.substring(0, 160),
                content
            };
        }

        posts.push(post);
    }

    return {
        posts
    };
}