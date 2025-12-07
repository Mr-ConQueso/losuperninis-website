import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const _locales = ['en', 'es'];

// 1. Generate entries for 'en', 'es', AND the undefined (root) case
export function _entries() {
	return [
		{ lang: 'en' },
		{ lang: 'es' },
		{ } // <--- This empty object generates the base paths (e.g., /about, /projects)
	];
}

// Map languages to their JSON files
const dictionaries = {
	en: () => import('$lib/i18n/en.json'),
	es: () => import('$lib/i18n/es.json')
};

export const load: LayoutLoad = async ({ params, url }) => {
	// 2. REDIRECT LOGIC: If no language is present, redirect to 'en'
	if (!params.lang) {
		// This throws a 307 Temporary Redirect (standard for language switching)
		// For SSG, this generates an HTML file with a meta refresh.
		throw redirect(307, `/en${url.pathname}`);
	}

	const lang = params.lang as 'en' | 'es';

	// Safety check: If someone manually types /fr/about, default to english
	if (!_locales.includes(lang)) {
		throw redirect(307, `/en${url.pathname.replace(`/${lang}`, '')}`);
	}

	// 3. Load Dictionary (Only runs if we didn't redirect)
	const loadDictionary = dictionaries[lang];
	const module = await loadDictionary();

	return {
		lang,
		t: module.default
	};
};