<script lang="ts">
    import '../../../app.css';
    import Socials from "$lib/components/navigation/Socials.svelte";
    import {_} from "$lib/lang/i18n.js";
</script>

<style>
    footer {
        background:  var(--color-dark, #000000);
        color: white;
        padding: 2rem 1rem;
    }

    .footer-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1.5rem;
    }

    .footer-top {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }

    .footer-nav {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 2rem;
        font-weight: 600;
        font-size: 1.8rem;
    }

    .footer-divider {
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, #ff4dd2, #7f00ff); /* pink to purple line */
        margin: 1.5rem 0;
    }

    .footer-bottom {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.5rem;
        font-size: 0.9rem;
        opacity: 0.8;
    }

    .footer-bottom a {
        color: white;
        text-decoration: underline;
    }

    .footer-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        font-weight: bold;
    }

    .footer-logo .logo {
        height: 150px;
        width: auto;
    }

    @media(min-width: 768px) {
        .footer-container {
            text-align: left;
        }

        .footer-top {
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        }
    }
</style>

<footer>
    <div class="footer-container container">
        <div class="footer-top">
            <div class="footer-logo">
                <img src="/icons/favicon.svg" alt="Los Super Ninis Logo" class="logo" />
                <h3>{$_("app_slogan")}</h3>
            </div>
            <Socials/>
            <nav class="footer-nav">
                <a href="/about-us">{$_("navigation.about")}</a>
                <a href="/#games">{$_("navigation.games")}</a>
                <a href="/blog">{$_("navigation.news")}</a>
            </nav>
        </div>

        <div class="footer-divider"></div>

        <div class="footer-bottom">
            <span>© {new Date().getFullYear()} {$_("app_title")}</span>
            <a href="/licences">{$_("navigation.licences")}</a>
            <a href="/privacy-policy">{$_("navigation.privacy")}</a>
            <a href="/terms-of-use">{$_("navigation.terms")}</a>
        </div>
    </div>
</footer>
