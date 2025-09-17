<script lang="ts">
	import {_activeLocale, _} from "$lib/lang/i18n.ts";
	import { type } from 'node:os';

	type LanguageData = {
		date?: string | Date;
		title?: string;
		excerpt?: string;
		content?: string;
	};

	type YMD = { y: number; m: number; d: number };

	export let uid: string;
	export let coverImage: string;
	export let languages: {
		[langCode: string]: LanguageData;
	};
	export let currentLanguage: string;
	let dateOrder: 'DMY' | 'MDY' = 'DMY';

	function pad2(n: number) {
		return String(n).padStart(2, '0');
	}

	// Parse many common formats to a safe Y-M-D triple:
	// - YYYY-M-D or YYYY/MM/DD (single-digit M/D allowed)
	// - D-M-YYYY or D/M/YYYY (single-digit D/M allowed)
	// - D-M-YY or D/M/YY  (assumes 2000-2099)
	// Returns null if cannot parse/validate.
	function parseToYMD(input: unknown): YMD | null {
		if (!input) return null;

		if (input instanceof Date && !isNaN(input.getTime())) {
			return { y: input.getFullYear(), m: input.getMonth() + 1, d: input.getDate() };
		}

		if (typeof input !== 'string') return null;
		const s = input.trim();

		// YYYY-M-D (or with slashes)
		let m = s.match(/^(\d{4})[/-](\d{1,2})[/-](\d{1,2})(?:[T\s].*)?$/);
		if (m) {
			const y = Number(m[1]);
			const mo = Number(m[2]);
			const d = Number(m[3]);
			if (isValidYMD(y, mo, d)) return { y, m: mo, d };
		}

		// D-M-YYYY (or with slashes)
		m = s.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
		if (m) {
			const d = Number(m[1]);
			const mo = Number(m[2]);
			const y = Number(m[3]);
			if (isValidYMD(y, mo, d)) return { y, m: mo, d };
		}

		// D-M-YY (assume 2000-2099)
		m = s.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{2})$/);
		if (m) {
			const d = Number(m[1]);
			const mo = Number(m[2]);
			const y = 2000 + Number(m[3]);
			if (isValidYMD(y, mo, d)) return { y, m: mo, d };
		}

		// Last resort: Date.parse
		const ms = Date.parse(s);
		if (!isNaN(ms)) {
			const dt = new Date(ms);
			return { y: dt.getFullYear(), m: dt.getMonth() + 1, d: dt.getDate() };
		}

		return null;
	}

	function isValidYMD(y: number, m: number, d: number): boolean {
		if (y < 1900 || y > 9999) return false;
		if (m < 1 || m > 12) return false;
		if (d < 1 || d > 31) return false;
		const dt = new Date(y, m - 1, d);
		return dt.getFullYear() === y && dt.getMonth() === m - 1 && dt.getDate() === d;
	}

	let currentLang: LanguageData | undefined =
		languages?.[(_activeLocale as string)] ??
		languages?.en ??
		Object.values(languages ?? {})[0];

	// Derive date order from the active locale value
	dateOrder = ((_activeLocale as string) === 'en') ? 'MDY' : 'DMY';

	let rawDate: string | Date | undefined = currentLang?.date;
	let parsed: YMD | null = parseToYMD(rawDate);

	$: isoDate = parsed ? `${parsed.y}-${pad2(parsed.m)}-${pad2(parsed.d)}` : undefined;
	$: displayDate = parsed
		? (dateOrder === 'MDY'
			? `${pad2(parsed.m)}-${pad2(parsed.d)}-${parsed.y}`
			: `${pad2(parsed.d)}-${pad2(parsed.m)}-${parsed.y}`)
		: (rawDate ?? '00-00-0000');
</script>

<article
        class="bg-white rounded-[var(--border-radius-medium)] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-slideUp"
>
    <img src={coverImage} alt="Cover for {languages.currentLanguage?.title}" class="w-full h-48 object-cover" />

    <div class="p-5">
				<time datetime={isoDate}>{displayDate}</time>

        <h2
                class="text-2xl font-subheading text-[var(--color-purple)] mb-2 leading-snug"
                style="font-family: var(--font-subheading)"
        >
            {languages.currentLanguage?.title || 'Untitled'}
        </h2>

        <p class="text-base text-[var(--color-dark)] mb-4">
            {languages.currentLanguage?.excerpt || 'This blog has no summary but promises shenanigans!'}
        </p>

				<a
					href={`/blog/${uid}/${currentLanguage}`}
					class="btn-secondary text-sm px-3 py-1"
					style="font-size: 0.85rem"
					aria-label="Read more"
				>{$_("blog.read-more")}</a>
    </div>
</article>
