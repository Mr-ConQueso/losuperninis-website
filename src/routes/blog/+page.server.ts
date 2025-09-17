import fs from 'node:fs';
import path from 'path';
import matter from 'gray-matter';
import {BLOGS_PATH} from "$lib/server/server-constants.ts";
import {_activeLocale} from "$lib/lang/i18n.ts";

type LanguageData = {
		date: string;
    title: string;
    excerpt: string;
    content: string;
};

type Post = {
    uid: string;
    coverImage: string;
		currentLanguage: string;
    languages: {
        [langCode: string]: LanguageData;
    };
};

// Helper: safely parse various date formats to a timestamp (ms). Returns NaN if invalid.
function parseDateToMs(d: unknown): number {
	if (!d) return NaN;
	if (d instanceof Date) return isNaN(d.getTime()) ? NaN : d.getTime();
	if (typeof d !== 'string') return NaN;

	const str = d.trim();

	// ISO-like formats (YYYY-M-D or YYYY-MM-DD, with optional time)
	if (/^\d{4}[-/]\d{1,2}[-/]\d{1,2}/.test(str)) {
		// Let Date.parse try first (it usually handles single-digit M/D in ISO-like strings)
		const ms = Date.parse(str);
		if (!isNaN(ms)) return ms;

		// If parsing failed, normalize just the date portion to YYYY-MM-DD
		const [datePart, timePart] = str.split(/[T\s]+/, 2);
		const [yyyy, mmRaw, ddRaw] = datePart.split(/[-/]/);
		if (yyyy && mmRaw && ddRaw) {
			const mm = mmRaw.padStart(2, '0');
			const dd = ddRaw.padStart(2, '0');
			const normalized = `${yyyy}-${mm}-${dd}${timePart ? 'T' + timePart : ''}`;
			const ms2 = Date.parse(normalized);
			return isNaN(ms2) ? NaN : ms2;
		}
	}

	// DD/MM/YYYY or DD-MM-YYYY (allow 1 or 2 digits for D and M)
	let m = str.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
	if (m) {
		const [, ddRaw, mmRaw, yyyy] = m;
		const dd = ddRaw.padStart(2, '0');
		const mm = mmRaw.padStart(2, '0');
		const ms = Date.parse(`${yyyy}-${mm}-${dd}`);
		return isNaN(ms) ? NaN : ms;
	}

	// DD/MM/YY or DD-MM-YY (assume 2000-2099; allow 1 or 2 digits for D and M)
	m = str.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2})$/);
	if (m) {
		const [, ddRaw, mmRaw, yy] = m;
		const yyyy = Number(yy) + 2000;
		const dd = ddRaw.padStart(2, '0');
		const mm = mmRaw.padStart(2, '0');
		const ms = Date.parse(`${yyyy}-${mm}-${dd}`);
		return isNaN(ms) ? NaN : ms;
	}

	// Fallback attempt
	const fallback = Date.parse(str);
	return isNaN(fallback) ? NaN : fallback;
}

// Helper: derive a canonical post date from all languages (most recent valid date)
function getPostDateMs(languages: Post['languages']): number {
	let best = Number.NEGATIVE_INFINITY;
	for (const lang of Object.values(languages)) {
		const ms = parseDateToMs(lang?.date);
		if (!isNaN(ms) && ms > best) best = ms;
	}
	return best;
}

export async function load() {
    const folders = fs.readdirSync(BLOGS_PATH).filter(f =>
        fs.lstatSync(path.join(BLOGS_PATH, f)).isDirectory()
    );

    const posts: Post[] = [];

	for (const folder of folders) {
        const dirPath = path.join(BLOGS_PATH, folder);
        const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

        const post: Post = {
            uid: folder,
            coverImage: `/posts/${folder}/cover.png`,
						currentLanguage: _activeLocale.toString(),
            languages: {},
        };

        for (const file of files) {
            const lang = path.basename(file, '.md');
            const filePath = path.join(dirPath, file);
            const fileContents = fs.readFileSync(filePath, 'utf-8');
            const { data, content } = matter(fileContents);

            post.languages[lang] = {
								date: data.date || '00-00-00',
                title: data.title || 'Untitled',
                excerpt: data.excerpt || content.substring(0, 160),
                content
            };
        }

        posts.push(post);
    }

		posts.sort((a, b) => {
			const aMs = getPostDateMs(a.languages);
			const bMs = getPostDateMs(b.languages);

			// Place posts with no valid date at the end
			const aValid = Number.isFinite(aMs);
			const bValid = Number.isFinite(bMs);
			if (aValid && bValid) {
				const diff = bMs - aMs; // newest first
				if (diff !== 0) return diff;
			} else if (aValid && !bValid) {
				return -1;
			} else if (!aValid && bValid) {
				return 1;
			}

			// Stable tie-breaker by uid to ensure deterministic order
			return a.uid.localeCompare(b.uid);
		});

	return {
        posts
    };
}