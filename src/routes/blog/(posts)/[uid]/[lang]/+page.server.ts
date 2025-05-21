import type { PageServerLoad } from './$types.ts';
import matter from 'gray-matter';
import fs from 'node:fs';
import { error } from '@sveltejs/kit';
import {BLOGS_PATH} from "$lib/server/server-constants.ts";
import path from "path";

export const load: PageServerLoad = async ({ params }) => {
    const { uid, lang } = params;

    const filePath = path.join(BLOGS_PATH, uid, `${lang}.md`);

    if (!fs.existsSync(filePath)) {
        throw error(404, 'Post not found');
    }

    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    return {
        post: {
            title: data.title || 'Untitled Post',
            content
        }
    };
};
