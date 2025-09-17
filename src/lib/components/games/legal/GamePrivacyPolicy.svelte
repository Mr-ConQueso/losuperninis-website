<script lang="ts">
    import { WEBSITE_URL, COMPANY_NAME, INFO_EMAIL } from '$lib/utils/constants.js';
    export let gameTitlte = '';
    
    export let lastUpdated = '';
    
    export let isOnSteam = false;
    export let isOnPlayStore = false;
    export let isOnAppStore = false;
    export let isUsingUnityCloud = true;
</script>

<style>
    .privacy-policy-container {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.8); /* Light background for readability */
        border-radius: 1rem;
        color: var(--color-font);
        line-height: 1.6;
    }
    .privacy-policy-container h1 {
        text-align: center;
        font-size: 2.5rem;
        color: var(--color-font-complement);
        text-shadow: 2px 2px var(--color-font);
        margin-bottom: 2rem;
    }
    .privacy-policy-container p,
    .privacy-policy-container ul {
        margin-bottom: 1rem;
    }
    .privacy-policy-container ul {
        padding-left: 20px;
    }
    .privacy-policy-container strong {
        color: var(--color-primary);
    }
    .privacy-policy-container a {
        color: var(--color-background);
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 2rem 0;
        background: var(--color-terciary);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    }

    thead {
        background-color: var(--nini-yellow); /* Using brand yellow */
    }

    th {
        padding: 1.2rem;
        text-align: left;
        color: var(--color-font);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    th:first-child {
        border-radius: 12px 0 0 0;
    }

    th:last-child {
        border-radius: 0 12px 0 0;
    }

    tbody tr {
        transition: all 0.2s ease;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    tbody tr:hover {
        transform: translateX(4px);
        background: rgba(168, 85, 247, 0.05); /* brand purple tint */
    }

    td {
        padding: 1rem;
        color: var(--color-font); /* Assuming existing dark variable */
    }

    /* Zebra striping for better readability */
    tbody tr:nth-child(even) {
        background: rgba(255, 255, 255, 0.5);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        th, td {
            padding: 0.8rem;
            font-size: 0.9rem;
        }

        table {
            box-shadow: none;
            border-radius: 8px;
        }
    }
</style>

<div class="privacy-policy-container container">
    <h1>Privacy Policy</h1>
    <p><strong>
        Last Updated: <time datetime={lastUpdated}>{lastUpdated}</time>
    </strong></p>

    <p>Thank you for playing <span class="highlight">{gameTitlte}</span>! This privacy policy explains what data we collect, why we collect it, and how we handle it to protect your privacy.</p>

    <h2>1. Who We Are</h2>
    <p><span class="highlight">{gameTitlte}</span> is developed and published by <strong>{COMPANY_NAME}</strong>. We're a small Madrid-based team passionate about creating fun experiences without compromising your privacy.</p>

    <h2>2. What Data We Collect and Why</h2>
    <p>We collect minimal, non-identifying information to help us improve gameplay and squash bugs:</p>

    <table>
        <thead>
        <tr>
            <th>Data</th>
            <th>Purpose</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Usage statistics</td>
            <td>Improve game design and features</td>
        </tr>
        <tr>
            <td>Crash reports</td>
            <td>Detect and fix pesky bugs</td>
        </tr>
        <tr>
            <td>Country (from IP)</td>
            <td>Identify regional issues</td>
        </tr>
        <tr>
            <td>Device specs</td>
            <td>Optimize performance</td>
        </tr>
        </tbody>
    </table>

    <p>We <strong>don't collect</strong> your name, email, full IP address, or any personally identifiable information.</p>

    <h2>3. Cloud Saves & Accounts</h2>
    {#if isUsingUnityCloud || isOnSteam || isOnAppStore || isOnPlayStore}
    <p>We let the pros handle this:</p>
    <ul>
        {#if isUsingUnityCloud}
            <li>Unity Cloud</li>
        {/if}
        {#if isOnSteam}
            <li>Steam (Valve Corporation)</li>
        {/if}
        {#if isOnPlayStore}
            <li>Google Play Games</li>
        {/if}
        {#if isOnAppStore}
            <li>Apple Game Center</li>
        {/if}
    </ul>
    <p>These platforms have their own privacy policies - we don't access or control your data through them.</p>
    {:else}
    <p>We do not handle or store any cloud information, such as saves or accounts, nor do we use any third party providers for this task.</p>
    {/if}

    <h2>4. Data Storage & Retention</h2>
    <p>We handle your data like we handle our code:</p>
    <ul>
        <li>Stored securely</li>
        <li>Anonymized ASAP</li>
        <li>Only kept as long as needed</li>
    </ul>

    <h2>5. Your Rights (GDPR)</h2>
    <p>EEA players can request to:</p>
    <ul>
        <li>Access your data</li>
        <li>Request deletion</li>
        <li>Restrict processing</li>
    </ul>
    <p>Contact us at: <a href="mailto:{INFO_EMAIL}">{INFO_EMAIL}</a></p>

    <h2>6. Contact Us</h2>
    <p>Questions? We're all ears:</p>
    <p><strong>{COMPANY_NAME}</strong><br>
        Email: <a href="mailto:{INFO_EMAIL}">{INFO_EMAIL}</a><br>
        Website: <a href={WEBSITE_URL}>{WEBSITE_URL}</a></p>

    <p style="color: var(--nini-purple); margin-top: 2rem;">Making procrastination productive since 2025 ✨</p>
</div>