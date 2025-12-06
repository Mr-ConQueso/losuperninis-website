import type { LayoutLoad } from './$types';

export const _locales = ['en', 'es'];

export function _entries() {
	return _locales.map(l => ({ lang: l }));
}

// Map languages to their JSON files
const dictionaries = {
	en: () => import('$lib/i18n/en.json'),
	es: () => import('$lib/i18n/es.json')
};

export const load: LayoutLoad = async ({ params }) => {
	const lang = params.lang as 'en' | 'es';

	// 1. Select the correct loader based on the URL
	const loadDictionary = dictionaries[lang];

	// 2. Execute the import (Vite handles the bundling)
	const module = await loadDictionary();

	return {
		lang,
		t: module.default // JSON imports are default exports
	};
};