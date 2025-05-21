<script lang="ts">
    import { onMount } from 'svelte';
    import { posthog } from '$lib/utils/posthog.js';
    import {_} from "$lib/lang/i18n.js";

    let consentGiven: string = $state('undecided');
    let isMinimized = $state(false);
    let bannerVisible = $state(true);

    function cookieConsentGiven(): string {
        if (!localStorage.getItem('cookie_consent')) {
            return 'undecided';
        }
        return localStorage.getItem('cookie_consent') || '';
    }

    function handleCookieConsent(consent: 'yes' | 'no') {
        localStorage.setItem('cookie_consent', consent);
        consentGiven = consent;
        
        // Update PostHog configuration based on consent
        if (consent === 'yes') {
            posthog.set_config({ persistence: 'localStorage+cookie' });
        } else {
            // Keep using memory persistence for 'no' consent
            posthog.set_config({ persistence: 'memory' });
        }
        
        // Change to minimized state after selection
        isMinimized = true;
    }

    onMount(() => {
        // Check if consent is already given
        consentGiven = cookieConsentGiven();
        
        // Only show expanded banner if consent is undecided
        if (consentGiven !== 'undecided') {
            isMinimized = true;
        }
    });

    function handleAcceptCookies() {
        handleCookieConsent('yes');
    }

    function handleDeclineCookies() {
        handleCookieConsent('no');
    }
    
    function toggleMinimized() {
        isMinimized = !isMinimized;
    }
</script>

<style>
    .cookie-banner-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
    }
    
    .cookie-banner {
        background: var(--color-green, #F7F9FC);
        color: var(--color-dark, #2E3440);
        border-radius: var(--border-radius-medium, 1rem);
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        width: 300px;
        padding: 1.5rem;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    }
    
    .banner-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    .message {
        margin: 0;
        font-size: 0.95rem;
        line-height: 1.5;
    }
    
    .buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }
    
    .button {
        padding: 0.75rem 1rem;
        border: none;
        border-radius: var(--border-radius-pill, 9999px);
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        width: 100%;
        font-family: var(--font-body, 'Comic Neue', cursive);
    }
    
    .button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .button:active {
        transform: translateY(0);
    }
    
    .accept {
        background-color: var(--color-pink, #FF6B6B);
        color: white;
    }
    
    .decline {
        background-color: #EEEEEE;
        color: var(--color-dark, #2E3440);
    }
    
    /* Minimized cookie icon */
    .cookie-icon {
        background-color: var(--color-green, #FF6B6B);
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        position: relative;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .cookie-icon:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
    }
    
    /* Status indicator dot */
    .status-dot {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        top: 5px;
        right: 5px;
    }
    
    .status-accepted {
        background-color: #4CAF50;
    }
    
    .status-declined {
        background-color: #F44336;
    }

    .privacy-link {
        font-size: 0.8rem;
        text-align: center;
        margin: 0;
    }

    .privacy-link a {
        color: var(--color-dark, #FF6B6B);
        text-decoration: underline;
        transition: color 0.2s;
    }

    .privacy-link a:hover {
        color: var(--color-purple, #4ECDC4);
    }
</style>

<aside class="cookie-banner-container">
    <!-- Cookie Icon (minimized state) -->
    {#if isMinimized}
        <button 
            class="cookie-icon"
            onclick={toggleMinimized}
            aria-label="Cookie preferences"
            tabindex="0"
        >
            🍪
            {#if consentGiven === 'yes'}
                <span class="status-dot status-accepted" aria-hidden="true"></span>
            {:else if consentGiven === 'no'}
                <span class="status-dot status-declined" aria-hidden="true"></span>
            {/if}
        </button>
    {:else}
        <!-- Cookie Banner (expanded state) -->
        <div class="cookie-banner">
            <div class="banner-content">
                <p class="message">
                    {$_("cookie-banner.message")}
                </p>
                <p class="privacy-link">
                    <a href="/privacy-policy">{$_("cookie-banner.privacy-policy")}</a>
                </p>
                <div class="buttons">
                    <button
                        type="button"
                        class="button accept"
                        onclick={handleAcceptCookies}
                    >
                        {$_("cookie-banner.accept")}
                    </button>
                    <button
                        type="button"
                        class="button decline"
                        onclick={handleDeclineCookies}
                    >
                        {$_("cookie-banner.decline")}
                    </button>
                </div>
            </div>
        </div>
    {/if}
</aside>