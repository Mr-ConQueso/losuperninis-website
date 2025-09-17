<script lang="ts">
    import '../../../app.css';
    import {_, setupI18n, locale} from "$lib/lang/i18n.js";
    import LocaleSelector from "$lib/components/LocaleSelector.svelte";
    import {isMobile} from "$lib/utils/device.js";
    import MobileHeroSection from "$lib/components/landing-page/MobileHeroSection.svelte";

    let navItems = [
        { icon: '🏠', key: 'navigation.home', href: '/' },
        { icon: '🎮', key: 'navigation.games', href: '/#games' },
        { icon: '👥', key: 'navigation.about', href: '/about-us' },
        { icon: '📰', key: 'navigation.news', href: '/blog' }
    ];

    let mobileMenuOpen = $state(false);

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
</script>

<style>
    .navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        padding: 1rem;
        position: relative;
        z-index: 10;
    }

    ul.nav-list {
        list-style: none;
        display: flex;
        gap: 1.5rem;
        margin: 0;
        padding: 0;
    }

    ul.nav-list li a {
        font-size: 1.25rem;
        font-family: var(--font-subheading);
        text-decoration: none;
        color: var(--color-font);
        padding: 0.5rem 1rem;
        border-radius: var(--border-radius-pill);
        transition: all 0.3s;
        height: 100%;
        display: inline-block;
    }

    ul.nav-list li a:hover {
        background: rgba(255,255,255,0.2);
        transform: translateY(-3px);
    }

    .hamburger {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 30px;
        height: 21px;
        cursor: pointer;
        z-index: 1000;
        display: none; /* Hidden by default */
        flex-direction: column;
        justify-content: space-between;
        background: transparent;
        border: none;
        padding: 0;
    }

    .hamburger span {
        display: block;
        width: 100%;
        height: 3px;
        background: var(--color-font-complement);
        transition: all 0.3s ease;
        transform-origin: center;
    }

    /* Mobile menu */
    .mobile-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 70%;
        height: 100vh;
        background: linear-gradient(45deg, var(--color-terciary), var(--color-background));
        z-index: 15;
        padding-top: 5rem;
        transform: translateX(100%);
        transition: transform 0.3s ease-in-out;
        box-shadow: -5px 0 15px rgba(0,0,0,0.1);
    }

    .mobile-menu.open {
        transform: translateX(0);
    }

    .mobile-menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .mobile-menu li {
        margin: 1rem 0;
        
    }

    .mobile-menu a {
        display: inline-block;
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        font-family: var(--font-subheading);
        color: var(--color-light);
        border-radius: var(--border-radius-pill);
        text-decoration: none;
        transition: background 0.3s;
        height: 100%;
    }

    .mobile-menu a:hover {
        background: rgba(255,255,255,0.1);
    }

    @media (max-width: 768px) {
        .hamburger {
            display: flex;
        }

        /* Animation for hamburger to X */
        .hamburger.open span:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
            opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }
    }
</style>

<header>
    {#if isMobile}
        <button class="hamburger" aria-label="button" class:open={mobileMenuOpen} onclick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    {:else}
        <nav class="desktop-nav navigation">
            <ul class="nav-list">
                <li>
                    <LocaleSelector
                            value={$locale}
                            on:locale-changed={e =>
            setupI18n({ withLocale: e.detail }) }
                    />
                </li>
                {#each navItems as item}
                    <li><a href="{item.href}">{item.icon} {$_(item.key)}</a></li>
                {/each}
            </ul>
        </nav>
    {/if}
</header>

<!-- Mobile Navigation -->
<nav class="mobile-menu" class:open={mobileMenuOpen}>
    <ul>
        <LocaleSelector
                value={$locale}
                on:locale-changed={e =>
            setupI18n({ withLocale: e.detail }) }
        />
        {#each navItems as item}
            <li>
                <a href="{item.href}" onclick={toggleMobileMenu}>
                    {item.icon} {$_(item.key)}
                </a>
            </li>
        {/each}
    </ul>
</nav>