import { get, derived, writable } from "svelte/store";
import {
    addMessages,
    locale,
    init,
    dictionary,
    _,
    getLocaleFromNavigator
} from "svelte-i18n";

import { fallbackLocale, locales } from "./l10n.js";

let _activeLocale: string | number;

const isDownloading = writable(false);
const MESSAGE_FILE_URL_TEMPLATE = "/lang/{locale}.json";

const isLocaleLoaded = derived(

    [isDownloading, dictionary],

    ([$isDownloading, $dictionary]) =>

        !$isDownloading &&

        $dictionary[_activeLocale] &&

        Object.keys($dictionary[_activeLocale]).length > 0,

);

function setupI18n(options = {withLocale: null}) {
    const locale_ : string = supported(
        options.withLocale || language(getLocaleFromNavigator()),
        );

    // Initialize svelte-i18n
    init({fallbackLocale: fallbackLocale, initialLocale: locale_});

    // Don't re-download translation files
    if (!hasLoadedLocale(locale_)) {
        isDownloading.set(true);
        const messagesFileUrl = MESSAGE_FILE_URL_TEMPLATE.replace(
            "{locale}",
            locale_
        );

        return loadJson(messagesFileUrl).then((messages) => {
            _activeLocale = locale_;
            addMessages(locale_, messages);
            locale.set(locale_);
            isDownloading.set(false);
        });
    }
}

function language(locale: string | null) {
    if (locale === null) { return fallbackLocale; }
    return locale.replace("_", "-").split("-")[0];
}

function supported(locale: string) {
    if (Object.keys(locales).includes(locale)) {
        return locale;
    } else {
        return fallbackLocale;
    }
}

async function loadJson(url: RequestInfo | URL) {
    const response = await fetch(url);
    return await response.json();
}
function hasLoadedLocale(locale: string) {
    // If the svelte-i18n dictionary has an entry for the
    // locale, then the locale has already been added
    return get(dictionary)[locale];
}

export { _, setupI18n, isLocaleLoaded, locale, _activeLocale};