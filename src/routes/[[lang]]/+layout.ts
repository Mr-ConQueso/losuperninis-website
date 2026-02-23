import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';

export const _locales = ['en', 'es'];

export function _entries() {
	return [
		{ lang: 'en' },
		{ lang: 'es' },
		{ }
	];
}

const dictionaries = {
	en: () => import('$lib/i18n/en.json'),
	es: () => import('$lib/i18n/es.json')
};

export const load: LayoutLoad = async ({ params, url }) => {
	// 1. AUTO-DETECT / REDIRECT LOGIC
	if (!params.lang) {
		let targetLang = 'en'; // Default fallback

		if (browser) {
			// A. Check for saved cookie
			const cookie = document.cookie.split('; ').find(row => row.startsWith('lang='));
			if (cookie) {
				const cookieLang = cookie.split('=')[1];
				if (_locales.includes(cookieLang)) {
					targetLang = cookieLang;
				}
			} else {
				// B. Check browser default
				const browserLang = navigator.language.split('-')[0]; // 'en-US' -> 'en'
				if (_locales.includes(browserLang)) {
					targetLang = browserLang;
				}
			}
		}

		// Redirect to the determined language
		throw redirect(307, `/${targetLang}${url.pathname}`);
	}

	const lang = params.lang as 'en' | 'es';

	// Safety: Redirect invalid languages to 'en'
	if (!_locales.includes(lang)) {
		throw redirect(307, `/en${url.pathname.replace(`/${lang}`, '')}`);
	}

	// 2. Load Dictionary
	const loadDictionary = dictionaries[lang];
	const module = await loadDictionary();

	return {
		lang,
		t: module.default
	};
};