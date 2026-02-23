<script lang="ts">
	import { CONTACT_EMAIL, STEAM_URL } from '$lib/utils/constants.js';
	import { page } from '$app/state';

	import type { Dictionary } from '$lib/types/i18n.ts';

	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
	const link = (path: string) => `/${lang}${path}`;
</script>

<div class="policy-content">
	<h2>Introduction</h2>
	<p>
		This Privacy Policy explains how <a href="https://store.steampowered.com/privacy_agreement/" target="_blank" rel="noopener noreferrer">Steam</a> and
		<strong>Los Super Ninis</strong> (together, <strong>“we”</strong>) handle certain data when you play
		<strong>Symbiosis</strong> (the <strong>“Game”</strong>) on PC via Steam.
	</p>
	<p>
		The goal of this policy is to describe what data is collected, why it is collected, which third parties are involved, and
		what rights you may have regarding your data.
	</p>

	<h2>Scope</h2>
	<p>This policy applies to:</p>
	<ol>
		<li>Playing <strong>Symbiosis</strong> on PC via Steam.</li>
		<li>In-game usage analytics collected via <strong>Aptabase</strong>.</li>
		<li>Cloud save synchronization via <strong>Steam Cloud</strong> (Valve).</li>
	</ol>

	<p>This policy does not apply to:</p>
	<ol>
		<li>
			Your Steam account, payments, friends, achievements, or other Valve/Steam services (please refer to Valve/Steam’s own
			privacy policy).
		</li>
		<li>Third-party websites or services linked from the Game.</li>
	</ol>

	<h2>What data we collect in Symbiosis</h2>

	<h3>Usage data (Aptabase)</h3>
	<p>
		When you play Symbiosis, we collect <strong>usage data</strong> to understand how the Game performs, diagnose issues, and
		improve the experience. This data is collected using <strong>Aptabase</strong>.
	</p>
	<p>In general, this may include:</p>
	<ol>
		<li>Gameplay/usage events (for example: game launch, screens visited, actions performed in-game).</li>
		<li>Approximate event timestamp.</li>
		<li>
			Technical device/app metadata (for example: game version, operating system, architecture, language, resolution, or
			technical identifiers that are not directly identifying).
		</li>
		<li>Error/crash information (for example: error codes and technical context).</li>
	</ol>
	<p>
		<strong>We do not aim to collect direct personal data</strong> such as your real name, email address, postal address, or the
		contents of your files. If any data could be considered personal depending on context, we treat it with the same care
		described in this policy.
	</p>

	<h3>Save data (Steam Cloud / Valve)</h3>
	<p>
		Symbiosis uses <strong>Steam Cloud</strong> to sync your save files across devices. This means your save data is stored and
		managed within <strong>Valve</strong>’s infrastructure associated with your Steam account.
	</p>
	<p>
		We do not need to know your real identity for this feature to work. The handling of Steam Cloud data (including retention
		and security) depends on Steam/Valve and your Steam Cloud settings.
	</p>

	<h2>How we use the data</h2>
	<p>We use collected data to:</p>
	<ol>
		<li>Analyze aggregate gameplay/usage trends and prioritize improvements.</li>
		<li>Detect bugs, performance issues, and stability problems.</li>
		<li>Improve Symbiosis balance, usability, and content.</li>
	</ol>

	<h2>Legal basis</h2>
	<p>
		We process usage analytics primarily under our <strong>legitimate interest</strong> in maintaining and improving Symbiosis
		and keeping it stable and secure. If we introduce consent mechanisms or opt-out options in the future, we will reflect that
		in this policy and/or within the Game.
	</p>

	<h2>Data retention</h2>
	<p>
		We retain analytics data (Aptabase) for as long as necessary for statistical purposes and to improve the Game, and we review
		retention periodically.
	</p>
	<p>
		Steam Cloud save data is retained according to Steam/Valve’s policies and your account settings.
	</p>

	<h2>Third-party services</h2>
	<p>Symbiosis uses the following third-party services:</p>
	<ol>
		<li>
			<strong>Steam / Valve</strong> (distribution and Steam Cloud):
			<a href="https://store.steampowered.com/privacy_agreement/" target="_blank" rel="noopener noreferrer"
				>Steam Privacy Policy</a
			>
		</li>
		<li>
			<strong>Aptabase</strong> (usage analytics):
			<a href="https://aptabase.com/legal/privacy" target="_blank" rel="noopener noreferrer"
				>Aptabase Privacy Policy</a
			>
		</li>
	</ol>
	<p>
		We do not sell your data. We do not share analytics data with third parties for targeted advertising on our behalf.
	</p>

	<h2>Your rights</h2>
	<p>Depending on your jurisdiction, you may have the right to:</p>
	<ol>
		<li>Access your data.</li>
		<li>Correct inaccurate data.</li>
		<li>Request deletion of data (where applicable).</li>
		<li>Restrict or object to certain processing.</li>
		<li>Data portability (where applicable).</li>
	</ol>
	<p>
		To exercise these rights, contact us at <a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>. Please note that analytics may
		be aggregated or pseudonymized and we may not always be able to link it to a specific individual without additional
		information. We will still review your request and do what’s reasonable to help.
	</p>

	<h2>Children’s privacy</h2>
	<p>
		We do not knowingly collect personal information from children. If you believe a child has provided personal data to us,
		please contact us at <a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a> and we will take steps to remove it where
		possible.
	</p>

	<h2>Changes to this policy</h2>
	<p>
		We may update this Privacy Policy from time to time. If we make changes, we will update this page to reflect the new
		version.
	</p>

	<h2>Contact</h2>
	<p>
		If you have any questions about this Privacy Policy or how we process data in Symbiosis, contact us at
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.
	</p>

	<h2>California privacy rights</h2>
	<p>
		If you are a California resident, California law may provide you with additional rights. Learn more on
		<a href={link('/ccpa')}>this page</a>.
	</p>
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

	.policy-content h2:first-child {
		margin-top: 0;
	}

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
	.policy-content li:last-child {
		margin-bottom: 0;
	}

	@media (min-width: 768px) {
		.page-title {
			font-size: 5rem;
		}
		.policy-content {
			padding: 4rem;
		}
	}
</style>