<script lang="ts">
	import {
		CONTACT_EMAIL,
		GITHUB_URL,
		GOOGLE_PLAY_URL,
		ITCHIO_URL,
		STEAM_URL,
		WEBSITE_URL
	} from '$lib/utils/constants.js';
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
	import { page } from '$app/state';

	import type { Dictionary } from '$lib/types/i18n.ts';

	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
	const link = (path: string) => `/${lang}${path}`;
</script>

<div class="policy-content">

	<h2>Introducción</h2>
	<p>
		<a href="{WEBSITE_URL}">Los Super Ninis</a> (<strong>"Company"</strong>, <strong>"us"</strong>, <strong>"we"</strong>, <strong>"our"</strong>). This privacy policy explains how we collect data, process it, and your rights relative to your data.
		<br><br>This policy describes the types of information we may collect from you or that you may provide when you use <a href="{WEBSITE_URL}">{WEBSITE_URL}</a>, or any of our games or mobile and desktop applications (<strong>"Service(s)"</strong>, <strong>"Website(s)"</strong>, <strong>“Application(s)”</strong>, <strong>“Game(s)”</strong>) collectively referred to as our “Products”, and our practices for collecting, using, maintaining, protecting, and disclosing that information.
		<br><br>This policy applies to information we collect:
	</p>
	<ol>
		<li>On this Website.</li>
		<li>Through Games you download from our distribution channels:
			<a href="{ITCHIO_URL}">itch.io</a>,
			<a href="{STEAM_URL}">Steam</a> and
			<a href="{GITHUB_URL}">GitHub</a></li>
		<li>In email, text, and other electronic messages between you and this Website.</li>
		<li>Through mobile and desktop applications you download from our distribution channels:
			<a href="{GOOGLE_PLAY_URL}">Google Play Store</a> and
			<a href="{GITHUB_URL}">GitHub</a>.</li>
	</ol>

	<p>It does not apply to information collected by:</p>
	<ol>
		<li>Us offline or through any other means, including on any other website operated by Company or any third party (including our affiliates and subsidiaries); or</li>
		<li>Any third party (including our affiliates and subsidiaries), including through any application or content (including advertising) that may link to or be accessible from or on the Website</li>
	</ol>

	<p>
		Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our Website. By accessing or using this Website, you agree to this privacy policy. This policy may change from time to time (see Changes to the Privacy Policy). Your continued use of this Website after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.
	</p>

	<h2>Foreword</h2>
	<p>The following document was created as required by several laws, including but not limited to:</p>
	<ol>
		<li>the California Consumer Privacy Act (CA CCPA), more information about which can be found on
			<a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer">oag.ca.gov</a></li>
		<li>the European Union General Data Protection Regulation (EU GDPR), more information about which can be found on
			<a href="https://gdpr.eu/" target="_blank" rel="noopener noreferrer">gdpr.eu</a></li>
	</ol>
	<p>Company is the data controller for data collected through our Applications.</p>

	<h2>What data do we collect?</h2>

	<h3>View data and download data</h3>
	<p>When you view a page or download a file from Website, we collect:</p>
	<ol>
		<li>Your IP address</li>
		<li>The project viewed and/or the file downloaded</li>
		<li>Your country</li>
		<li>Some additional metadata about your connection (HTTP headers)</li>
	</ol>
	<p>This data is used to monitor automated access to our service and deliver statistics.</p>

	<h3>Playtime data</h3>
	<p>When you use our Games or Applications, we collect:</p>
	<ol>
		<li>Your IP address</li>
		<li>The amount of time the product was played for</li>
		<li>The product played</li>
	</ol>
	<p>This data is used to deliver statistics.</p>

	<h3>Usage data</h3>
	<p>When you interact with our Games, Applications or the Website, we collect through PostHog and Aptabase:</p>
	<ol>
		<li>Your IP address</li>
		<li>The time the interaction happened</li>
		<li>Some additional metadata about the device you are on</li>
		<li>Some additional metadata about each interaction</li>
	</ol>
	<p>This data is used to deliver statistics.</p>

	<h2>Data retention</h2>
	<p>
		View data and download data are anonymized 24 months after being recorded. All personal information will be removed from those records during anonymization.
		Data is retained indefinitely. We do not delete any data unless you request it.
	</p>

	<h2>Third-party services</h2>
	<p>We use some third-party services to make the Website run. Please refer to each of their privacy policies for more information:</p>
	<ol>
		<li><a href="https://www.cloudflare.com/en-gb/gdpr/introduction/" target="_blank" rel="noopener noreferrer">Cloudflare</a></li>
		<li><a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">PostHog</a></li>
		<li><a href="https://aptabase.com/legal/privacy" target="_blank" rel="noopener noreferrer">Aptabase</a></li>
	</ol>
	<p>Data that we specifically collect isn't shared with any other third party. We do not sell any data.</p>

	<h2>Data Governance</h2>
	<p>
		Database access is limited to the minimum amount of Company employees required to run the service.
		Data is stored in a jurisdiction that is part of the European Economic Area (EEA), encrypted both in storage and in transit.
	</p>

	<h2>Cookies</h2>
	<p>
		We use cookies to help us understand how you use the Website and save your language and theme preferences.
	</p>
	<p>
		Cookies are text files placed on your computer to collect standard Internet information. For more information, please visit
		<a href="https://allaboutcookies.org/" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.
	</p>
	<p>
		You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.
	</p>

	<h2>Access, rectification, erasure, restriction, portability, and objection</h2>
	<p>Every user is entitled to the following:</p>
	<ol>
		<li><strong>The right to access</strong> – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
		<li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request us to complete the information you believe is incomplete.</li>
		<li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
		<li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
		<li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
		<li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
	</ol>
	<p>If you would like to exercise those rights, contact us at <a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>. We may ask you to verify your identity before proceeding and will respond to your request within 30 days as required by law, or notify you of an extended reply time.</p>

	<h2>Children's Information</h2>
	<p>Another part of our priority is adding protection for children while using the Internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
	<p>Company does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>

	<h2>California Privacy Rights</h2>
	<p>If you are a California resident, California law may provide you with additional rights regarding our use of your personal information. To learn more about your California privacy rights, visit
		<a href={link('/ccpa')}>this page</a>.</p>
	<p>California's "Shine the Light" law (Civil Code Section § 1798.83) permits users of our App that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. To make such a request, please send an email to
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.</p>

	<h2>Changes to the Privacy Policy</h2>
	<p>We keep this privacy policy under regular review and place any updates on this web page. If we do this, we will post the changes on this page and update the "Last edited" date at the top of this page, after which such changes will become effective immediately. We will make an effort to keep users updated on any such changes, but because most changes do not affect how we process existing data, a notice will not be sent for all changes.</p>

	<h2>Contact</h2>
	<p>If you have any questions about this privacy policy or how we process your data, contact us at
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.</p>

	<h3>How to contact the appropriate authority</h3>
	<p>
		Should you wish to fill a complaint or if you feel like we haven't addressed your concerns or request, you may contact the Information Commissioner's Office using their online form or by writing at:
		<br><br>
		Information Commissioner's Office<br>
		Wycliffe House<br>
		Water Lane<br>
		Wilmslow<br>
		Cheshire<br>
		SK9 5AF<br>
		United Kingdom
	</p>
	<p>You do not need to be a citizen of the United Kingdom to use this method of lodging complaints.</p>
</div>

<style>
    /* Policy Content Styling */
    .policy-content {
        padding: 2rem;
        font-family: "Fredoka", sans-serif;
        color: var(--nini-black);
        line-height: 1.6;
        font-size: 1.1rem;
    }

    .policy-content h2 {
        font-family: "Luckiest Guy", cursive;
        font-size: 2rem;
        color: var(--nini-red);
        margin-top: 3rem;
        margin-bottom: 1rem;
        border-bottom: 2px dashed #ddd;
        padding-bottom: 0.5rem;
    }

    .policy-content h2:first-child { margin-top: 0; }

    .policy-content h3 {
        font-family: "Luckiest Guy", cursive;
        font-size: 1.5rem;
        color: var(--nini-blue);
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }

    .policy-content p {
        margin-bottom: 1rem;
    }

    .policy-content strong {
        color: var(--nini-red);
    }

    .policy-content a {
        color: var(--nini-blue);
        text-decoration: underline;
        font-weight: bold;
    }
    .policy-content a:hover {
        color: var(--nini-red);
    }

    .policy-content ol {
        list-style-type: decimal;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
        background: #f9f9f9;
        padding: 1rem 1rem 1rem 2.5rem;
        border-radius: 8px;
        border-left: 4px solid var(--nini-beige);
    }

    .policy-content li {
        margin-bottom: 0.5rem;
    }
    .policy-content li:last-child { margin-bottom: 0; }

    @media (min-width: 768px) {
        .page-title { font-size: 5rem; }
        .policy-content { padding: 4rem; }
    }
</style>