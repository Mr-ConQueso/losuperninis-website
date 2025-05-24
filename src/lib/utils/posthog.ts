import { posthog } from 'posthog-js';

function cookieConsentGiven(): string {
    if (typeof window === 'undefined') return 'undecided';
    return localStorage.getItem('cookie_consent') || 'undecided';
}

export async function initPostHog(apiKey: string) {

    const existingConsent = cookieConsentGiven();
    if (existingConsent === 'yes') {
        posthog.init(apiKey, {
            api_host: 'https://lair.losuperninis.com/', // https://lair.losuperninis.workers.dev
            ui_host: 'https://eu.posthog.com',
            person_profiles: 'always',
            persistence: 'localStorage'
        });
    }
    else {
        posthog.init(apiKey, {
            api_host: 'https://lair.losuperninis.com/',
            ui_host: 'https://eu.posthog.com',
            person_profiles: "identified_only",
            persistence: 'memory',
        });
    }
}

export { posthog };