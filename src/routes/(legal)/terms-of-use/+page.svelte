<script lang="ts">
    import { WEBSITE_URL, COMPANY_NAME, INFO_EMAIL } from '$lib/utils/constants.js';
</script>

<style>
    .terms-container {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.8); /* Light background for readability */
        border-radius: 1rem;
        color: #333; /* Darker text for readability */
        line-height: 1.6;
    }
    .terms-container h1 {
        text-align: center;
        font-size: 2.5rem;
        color: #fff;
        text-shadow: 2px 2px var(--color-dark);
        margin-bottom: 2rem;
    }
    .terms-container h3 {
        font-size: 1.8rem;
        color: var(--color-dark);
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    .terms-container p,
    .terms-container ul {
        margin-bottom: 1rem;
    }
    .terms-container ul {
        padding-left: 20px;
    }
    .terms-container strong {
        color: var(--color-pink);
    }
    .terms-container a {
        color: var(--color-purple);
    }
</style>

<div class="terms-container">
    <h1>Terms of Use</h1>
    <p><strong>
        Last Updated: <time datetime="12-05-25">12/05/25</time>
    </strong></p>

    <p>Welcome to the digital playground of <strong>{COMPANY_NAME}</strong>! By accessing this website, you agree to these terms. If you’re allergic to legal text (we get it), here’s the short version: let’s keep it fun, fair, and free of chaos – except the creative kind we put in our games.</p>

    <h3>1. Use of the Website</h3>
    <p>This website exists to celebrate our games and the art of productive procrastination. Feel free to browse, gawk at our art, and share content – just don’t use it for anything illegal or unethical.</p>

    <h3>2. No Services Provided</h3>
    <p>We’re game makers, not transaction wranglers! Any actual services tied to our games (like updates or cloud saves) are handled by these certified pros:</p>
    <ul>
        <li>Steam (Valve Corporation)</li>
        <li>Google Play (Google LLC)</li>
        <li>Apple App Store (Apple Inc.)</li>
        <li>itch.io (Leaf Corcoran)</li>
    </ul>
    <p>All purchases, accounts, and platform-specific drama fall under <em>their</em> rules. We’re just here to design alien ecosystems and questionable superhero lore.</p>

    <h3>3. Intellectual Property</h3>
    <p>Everything here – text, art, logos, and our patented brand of chaos – is ours unless stated otherwise. While we love fan creations, please don’t reproduce/distribute our content without written permission. (But seriously, ask us about collabs – we’re into that.)</p>

    <h3>4. Third-Party Links</h3>
    <p>We might link to platforms or cool creator stuff, but those are adventures beyond our control. Their terms, rules, and privacy policies apply. Proceed with the caution you’d use when clicking “New Game+” on a rogue-like.</p>

    <h3>5. Limitation of Liability</h3>
    <p>We serve this website “as is” – like a retro arcade cabinet that occasionally eats quarters. While we polish things regularly, we can’t guarantee perfection. (Fun fact: neither could 90% of our favorite PS1 games, and we still love them.)</p>

    <h3>6. Changes to These Terms</h3>
    <p>We reserve the right to level up these terms as needed. Updates will be posted here with a fresh “last updated” date. Continued use means you’re cool with the new rules – think of it as accepting an end-user license agreement, but with fewer ominous scrolls.</p>

    <h3>7. Contact Us</h3>
    <p>Questions? Complaints about our mascot’s hoodie design? Reach out:</p>
    <p><strong>{COMPANY_NAME}</strong><br>
        Email: <a href="mailto:{INFO_EMAIL}">{INFO_EMAIL}</a><br>
        Website: <a href="{WEBSITE_URL}">{WEBSITE_URL}</a>
    </p>
    <p>Now go play something fun. We’ll be here “working.”</p>
</div>