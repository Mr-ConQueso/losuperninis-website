<script lang="ts">
	import { page } from '$app/state';
	import {
		INSTAGRAM_URL,
		BLUESKY_URL,
		YOUTUBE_URL,
		DISCORD_INVITE,
	} from '$lib/utils/constants.ts';

	import type { Dictionary } from '$lib/types/i18n';
	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
	const link = (path: string) => `/${lang}${path}`;

	const year = new Date().getFullYear();

	const sitemap = [
		{ name: t.nav.sitemap.home, href: link('/') },
		{ name: t.nav.sitemap.projects, href: link('/projects') },
		{ name: t.nav.sitemap.devlog, href: link('/devlog') },
		{ name: t.nav.sitemap.about, href: link('/about') }
	];

	const legal = [
		{ name: t.nav.legal.cookies, href: link('/cookies') },
		{ name: t.nav.legal.licences, href: link('/licences') },
		{ name: t.nav.legal.privacy, href: link('/privacy') },
		{ name: t.nav.legal.terms, href: link('/terms') }
	];

	const socials = [
		{ name: "Instagram", href: INSTAGRAM_URL, icon: "/icons/socials/instagram.svg" },
		{ name: "Bluesky", href: BLUESKY_URL, icon: "/icons/socials/bluesky.svg" },
		{ name: "YouTube", href: YOUTUBE_URL, icon: "/icons/socials/youtube.svg" },
		{ name: "Discord", href: DISCORD_INVITE, icon: "/icons/socials/discord.svg" },
	];
</script>

<footer class="footer">
	<div class="container">

		<!-- BRAND COLUMN -->
		<div class="col col-brand">
			<div class="brand-flex">
				<div class="brand-logo">
					<!-- Ensure this path exists or use a fallback -->
					<img src="/icons/icon-white.svg" alt="Cheesy Labs Logo" />
				</div>

				<div class="brand-text">
					<h3 class="footer-title">{t.main.title}</h3>
					<p>{t.main.tagline}</p>
					<p>© {year} {t.footer.company}</p>
				</div>
			</div>

			<div class="socials-row">
				{#each socials as link}
					<a href={link.href} aria-label={link.name} target="_blank" rel="noreferrer">
						<img src={link.icon} alt={link.name}>
					</a>
				{/each}
			</div>
		</div>

		<!-- SITEMAP -->
		<div class="col col-sitemap">
			<h4 class="footer-head">{t.footer.explore}</h4>
			{#each sitemap as link}
				<a href={link.href}>{link.name}</a>
			{/each}
		</div>

		<!-- LEGAL -->
		<div class="col col-legal">
			<h4 class="footer-head">{t.footer.legal}</h4>
			{#each legal as link}
				<a href={link.href}>{link.name}</a>
			{/each}
		</div>

	</div>
</footer>

<style>
    .footer {
        margin-top: 4rem;
        border-top: var(--border-big);
        background: var(--dark);
        color: var(--light);
        padding: 4rem 1.5rem;
        font-family: var(--font-body);
    }

    /* ===== DESKTOP LAYOUT (DEFAULT) ===== */
    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
    }

    /* Brand Column (Left Side) */
    .col-brand {
        flex: 0 0 40%;
        text-align: left;
    }

    .brand-flex {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
    }

    .brand-logo img {
        width: 128px;
        height: auto;
    }

    .socials-row {
        flex: 1;
        display: flex;
        flex-direction: row; /* Horizontal icons on mobile */
        gap: 1.5rem;
        justify-content: center;
        padding-top: 2rem;
    }

    .socials-row img {
        width: 2rem;
        height: 2rem;
        transition: transform 0.2s;
    }

    .socials-row a:hover img {
        transform: scale(1.1);
    }

    /* Typography */
    .footer-title {
        font-family: var(--font-h1);
        color: var(--primary);
        font-size: 2rem;
        margin-bottom: 0.5rem;
        margin-top: 0;
    }

    .footer-head {
        font-family: var(--font-h1);
        color: var(--pink);
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        margin-top: 0;
        text-transform: uppercase;
    }

    a {
        color: var(--light);
        text-decoration: none;
        margin-bottom: 0.5rem;
        display: block;
        opacity: 0.8;
        transition: color 0.2s;
    }
    a:hover {
        color: var(--primary);
        opacity: 1;
    }

    /* ===== MOBILE LAYOUT (OVERRIDES) ===== */
    @media (max-width: 768px) {
        .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2.5rem 1.5rem;
            justify-items: center;
        }

        .container > .col {
            text-align: center;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        /* 1. Brand takes full top row */
        .col-brand {
            grid-column: span 2;
            grid-row: 1;
            flex: auto;
        }

        .brand-flex {
            justify-content: center;
            text-align: left; /* Keep text aligned left relative to logo, but block is centered */
        }

        .socials-row img {
            width: 3rem; /* Larger touch targets */
            height: 3rem;
        }

        /* 3. Sitemap & Legal sit side-by-side on bottom row */
        .col-sitemap {
            grid-row: 3;
        }

        .col-legal {
            grid-row: 3;
        }
    }
</style>