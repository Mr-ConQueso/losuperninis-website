<script lang="ts">
	import { CONTACT_EMAIL } from '$lib/utils/constants.js';
	import { page } from '$app/state';

	import type { Dictionary } from '$lib/types/i18n.ts';

	let t = $derived(page.data.t as Dictionary);
	let lang = $derived(page.data.lang);
	const link = (path: string) => `/${lang}${path}`;

	// Standard CCPA Categories
	const ccpaCategories = [
		{
			cat: 'A. Identifiers',
			examples: 'A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver\'s license number, passport number, or other similar identifiers.',
			collected: 'YES'
		},
		{
			cat: 'B. Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e))',
			examples: 'A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver\'s license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories.',
			collected: 'YES'
		},
		{
			cat: 'C. Protected classification characteristics under California or federal law',
			examples: 'Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).',
			collected: 'NO'
		},
		{
			cat: 'D. Commercial information',
			examples: 'Records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies.',
			collected: 'YES'
		},
		{
			cat: 'E. Biometric information',
			examples: 'Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.',
			collected: 'NO'
		},
		{
			cat: 'F. Internet or other similar network activity',
			examples: 'Browsing history, search history, information on a consumer\'s interaction with a website, application, or advertisement.',
			collected: 'YES'
		},
		{
			cat: 'G. Geolocation data',
			examples: 'Physical location or movements.',
			collected: 'YES'
		},
		{
			cat: 'H. Sensory data',
			examples: 'Audio, electronic, visual, thermal, olfactory, or similar information.',
			collected: 'NO'
		},
		{
			cat: 'I. Professional or employment-related information',
			examples: 'Current or past job history or performance evaluations.',
			collected: 'NO'
		},
		{
			cat: 'J. Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99))',
			examples: 'Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.',
			collected: 'NO'
		},
		{
			cat: 'K. Inferences drawn from other personal information',
			examples: 'Profile reflecting a person\'s preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.',
			collected: 'NO'
		}
	];
</script>
<div class="ccpa-content">

	<h2>Privacy Notice for California Residents</h2>
	<p>This Privacy Notice for California Residents supplements the information contained in the Privacy Policy of {t.main.title} (the <strong>"Company"</strong>, <strong>"us"</strong>, <strong>"we"</strong>, <strong>"our"</strong>). and applies solely to all visitors, users, and others who reside in the State of California (<strong>"consumers"</strong> or <strong>"you"</strong>). We adopt this notice to comply with the California Consumer Privacy Act of 2018 (CCPA), as it may be amended, modified or supplemented from time to time, and any terms defined in the CCPA have the same meaning when used in this notice.</p>

	<h2>Information We Collect</h2>
	<p>Our Service collects information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device (<strong>"personal information"</strong>). In particular, our Service has collected the following categories of personal information from its consumers within the last twelve (12) months:</p>

	<!-- CCPA Table -->
	<div class="table-container">
		<table class="ccpa-table">
			<thead>
			<tr>
				<th class="col-category">Category</th>
				<th class="col-examples">Examples</th>
				<th class="col-collected">Collected</th>
			</tr>
			</thead>
			<tbody>
			{#each ccpaCategories as item}
				<tr>
					<td class="cell-category"><strong>{item.cat}</strong></td>
					<td class="cell-examples">{item.examples}</td>
					<td class="cell-collected">
						{#if item.collected === 'YES'}
							<span class="badge-yes">YES</span>
						{:else}
							<span class="badge-no">NO</span>
						{/if}
					</td>
				</tr>
			{/each}
			</tbody>
		</table>
	</div>

	<p>Personal information does not include:</p>
	<ol>
		<li>Publicly available information from government records.</li>
		<li>Deidentified or aggregated consumer information.</li>
		<li>Information excluded from the CCPA's scope, like:</li>
		<li>
			<ol class="sub-list">
				<li>health or medical information covered by the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and the California Confidentiality of Medical Information Act (CMIA) or clinical trial data;</li>
				<li>personal information covered by certain sector-specific privacy laws, including the Fair Credit Reporting Act (FRCA), the Gramm-Leach-Bliley Act (GLBA) or California Financial Information Privacy Act (FIPA), and the Driver's Privacy Protection Act of 1994.</li>
			</ol>
		</li>
	</ol>

	<p>We obtain the categories of personal information listed above from the following categories of sources:</p>
	<ol>
		<li>Directly from you. For example, from forms you complete or products and services you purchase.</li>
		<li>Indirectly from you. For example, from observing your actions on our Service.</li>
	</ol>

	<h2>Use of Personal Information</h2>
	<p>We may use or disclose the personal information we collect for one or more of the following business purposes:</p>
	<ol>
		<li>To fulfill or meet the reason you provided the information. For example, if you share your name and contact information to request a price quote or ask a question about our products or services, we will use that personal information to respond to your inquiry. If you provide your personal information to purchase a product or service, we will use that information to process your payment and facilitate delivery. We may also save your information to facilitate new product orders or process returns.</li>
		<li>To provide, support, personalize, and develop our Service, products, and services.</li>
		<li>To create, maintain, customize, and secure your account with us.</li>
		<li>To process your requests, purchases, transactions, and payments and prevent transactional fraud.</li>
		<li>To provide you with support and to respond to your inquiries, including to investigate and address your concerns and monitor and improve our responses.</li>
		<li>To personalize your Service experience and to deliver content and product and service offerings relevant to your interests, including targeted offers and ads through our Service, third-party sites, and via email or text message (with your consent, where required by law).</li>
		<li>To help maintain the safety, security, and integrity of our Service, products and services, databases and other technology assets, and business.</li>
		<li>For testing, research, analysis, and product development, including to develop and improve our Service, products, and services.</li>
		<li>To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.</li>
		<li>As described to you when collecting your personal information or as otherwise set forth in the CCPA.</li>
		<li>To evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of the Company's assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which personal information held by the Company about our Service users is among the assets transferred.</li>
	</ol>
	<p>We will not collect additional categories of personal information or use the personal information we collected for materially different, unrelated, or incompatible purposes without providing you notice.</p>

	<h2>Sharing Personal Information</h2>
	<p>We may disclose your personal information to a third party for a business purpose. When we disclose personal information for a business purpose, we enter a contract that describes the purpose and requires the recipient to both keep that personal information confidential and not use it for any purpose except performing the contract. The CCPA prohibits third parties who purchase the personal information we hold from reselling it unless you have received explicit notice and an opportunity to opt-out of further sales.</p>

	<h3>Disclosures of Personal Information for a Business Purpose</h3>
	<p>In the preceding twelve (12) months, Company has disclosed the following categories of personal information for a business purpose:</p>
	<ol>
		<li>Category A: Identifiers.</li>
		<li>Category F: Internet or other similar network activity.</li>
		<li>Category G: Geolocation data.</li>
	</ol>
	<p>We disclose your personal information for a business purpose to the following categories of third parties:</p>
	<ol>
		<li>Service providers.</li>
	</ol>

	<h3>Sales of Personal Information</h3>
	<p>In the preceding twelve (12) months, Company has not sold personal information.</p>

	<h2>Your Rights and Choices</h2>
	<p>The CCPA provides consumers (California residents) with specific rights regarding their personal information. This section describes your CCPA rights and explains how to exercise those rights.</p>

	<h3>Access to Specific Information and Data Portability Rights</h3>
	<p>You have the right to request that we disclose certain information to you about our collection and use of your personal information over the past 12 months. Once we receive and confirm your verifiable consumer request (see Exercising Access, Data Portability, and Deletion Rights), we will disclose to you:</p>
	<ol>
		<li>The categories of personal information we collected about you.</li>
		<li>The categories of sources for the personal information we collected about you.</li>
		<li>Our business or commercial purpose for collecting or selling that personal information.</li>
		<li>The categories of third parties with whom we share that personal information.</li>
		<li>The specific pieces of personal information we collected about you (also called a data portability request).</li>
		<li>If we sold or disclosed your personal information for a business purpose, two separate lists disclosing:</li>
		<li>
			<ol class="sub-list">
				<li>sales, identifying the personal information categories that each category of recipient purchased; and</li>
				<li>disclosures for a business purpose, identifying the personal information categories that each category of recipient obtained.</li>
			</ol>
		</li>
	</ol>

	<h3>Deletion Request Rights</h3>
	<p>You have the right to request that we delete any of your personal information that we collected from you and retained, subject to certain exceptions. Once we receive and confirm your verifiable consumer request (see Exercising Access, Data Portability, and Deletion Rights), we will delete (and direct our service providers to delete) your personal information from our records, unless an exception applies.</p>
	<p>We may deny your deletion request if retaining the information is necessary for us or our service provider(s) to:</p>
	<ol>
		<li>Complete the transaction for which we collected the personal information, provide a good or service that you requested, take actions reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform our contract with you.</li>
		<li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.</li>
		<li>Debug products to identify and repair errors that impair existing intended functionality.</li>
		<li>Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.</li>
		<li>Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).</li>
		<li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if you previously provided informed consent.</li>
		<li>Enable solely internal uses that are reasonably aligned with consumer expectations based on your relationship with us.</li>
		<li>Comply with a legal obligation.</li>
		<li>Make other internal and lawful uses of that information that are compatible with the context in which you provided it.</li>
	</ol>

	<h3>Exercising Access, Data Portability, and Deletion Rights</h3>
	<p>To exercise the access, data portability, and deletion rights described above, please submit a verifiable consumer request to us by emailing us at <a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.</p>
	<p>Only you, or a person registered with the California Secretary of State that you authorize to act on your behalf, may make a verifiable consumer request related to your personal information. You may also make a verifiable consumer request on behalf of your minor child.</p>
	<p>You may only make a verifiable consumer request for access or data portability twice within a 12-month period. The verifiable consumer request must:</p>
	<ol>
		<li>Provide sufficient information that allows us to reasonably verify you are the person about whom we collected personal information or an authorized representative.</li>
		<li>Describe your request with sufficient detail that allows us to properly understand, evaluate, and respond to it.</li>
	</ol>
	<p>We cannot respond to your request or provide you with personal information if we cannot verify your identity or authority to make the request and confirm the personal information relates to you.</p>
	<p>Making a verifiable consumer request does not require you to create an account with us. However, we do consider requests made through your password protected account sufficiently verified when the request relates to personal information associated with that specific account.</p>
	<p>We will only use personal information provided in a verifiable consumer request to verify the requestor's identity or authority to make the request.</p>
	<p>For instructions on exercising sale opt-out rights, see Personal Information Sales Opt-Out and Opt-In Rights.</p>

	<h3>Response Timing and Format</h3>
	<p>We endeavor to respond to a verifiable consumer request within forty-five (45) days of its receipt. If we require more time (up to 90 days), we will inform you of the reason and extension period in writing.</p>
	<p>If you have an account with us, we will deliver our written response to that account. If you do not have an account with us, we will deliver our written response by mail or electronically, at your option.</p>
	<p>Any disclosures we provide will only cover the 12-month period preceding the verifiable consumer request's receipt. The response we provide will also explain the reasons we cannot comply with a request, if applicable. For data portability requests, we will select a format to provide your personal information that is readily useable and should allow you to transmit the information from one entity to another entity without hindrance.</p>
	<p>We do not charge a fee to process or respond to your verifiable consumer request unless it is excessive, repetitive, or manifestly unfounded. If we determine that the request warrants a fee, we will tell you why we made that decision and provide you with a cost estimate before completing your request.</p>

	<h2>Non-Discrimination</h2>
	<p>We will not discriminate against you for exercising any of your CCPA rights. Unless permitted by the CCPA, we will not:</p>
	<ol>
		<li>Deny you goods or services.</li>
		<li>Charge you different prices or rates for goods or services, including through granting discounts or other benefits, or imposing penalties.</li>
		<li>Provide you a different level or quality of goods or services.</li>
		<li>Suggest that you may receive a different price or rate for goods or services or a different level or quality of goods or services.</li>
	</ol>
	<p>However, we may offer you certain financial incentives permitted by the CCPA that can result in different prices, rates, or quality levels. Any CCPA-permitted financial incentive we offer will reasonably relate to your personal information's value and contain written terms that describe the program's material aspects. Participation in a financial incentive program requires your prior opt in consent, which you may revoke at any time.</p>

	<h2>Changes to Our Privacy Notice</h2>
	<p>We reserve the right to amend this privacy notice at our discretion and at any time. When we make changes to this privacy notice, we will post the updated notice on the Service and update the notice's effective date.
		<strong>Your continued use of our Service following the posting of changes constitutes your acceptance of such changes</strong>.</p>

	<h2>Contact Information</h2>
	<p>If you have any questions or comments about this notice, the ways in which we collect and use your information described below and in the
		<a href={link('/privacy')}>Privacy Policy</a>, your choices and rights regarding such use, or wish to exercise your rights under California law, please do not hesitate to contact us at
		<a href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>.</p>

</div>

<style>
    /* Content Styling */
    .ccpa-content {
        padding: 2rem;
        font-family: "Fredoka", sans-serif;
        color: var(--nini-black);
        line-height: 1.6;
        font-size: 1.1rem;
    }

    .ccpa-content h2 {
        font-family: "Luckiest Guy", cursive;
        font-size: 2rem;
        color: var(--nini-red);
        margin-top: 3rem;
        margin-bottom: 1rem;
        border-bottom: 2px dashed #ddd;
        padding-bottom: 0.5rem;
    }

    .ccpa-content h2:first-child { margin-top: 0; }

    .ccpa-content h3 {
        font-family: "Luckiest Guy", cursive;
        font-size: 1.5rem;
        color: var(--nini-blue);
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }

    .ccpa-content p {
        margin-bottom: 1rem;
    }

    .ccpa-content strong {
        color: var(--nini-red);
    }

    .ccpa-content a {
        color: var(--nini-blue);
        text-decoration: underline;
        font-weight: bold;
    }
    .ccpa-content a:hover {
        color: var(--nini-red);
    }

    .ccpa-content ol {
        list-style-type: decimal;
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
        background: #f9f9f9;
        padding: 1rem 1rem 1rem 2.5rem;
        border-radius: 8px;
        border-left: 4px solid var(--nini-beige);
    }

    .sub-list {
        background: none !important;
        border-left: none !important;
        padding-left: 1rem !important;
        margin-bottom: 0 !important;
        margin-top: 0.5rem;
    }

    .ccpa-content li {
        margin-bottom: 0.5rem;
    }
    .ccpa-content li:last-child { margin-bottom: 0; }

    /* --- Table Styles --- */
    .table-container {
        overflow-x: auto;
        margin-bottom: 2rem;
        border: 4px solid var(--nini-black);
        border-radius: 8px;
        background: white;
    }

    .ccpa-table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;
    }

    .ccpa-table th {
        background-color: var(--nini-black);
        color: white;
        text-align: left;
        padding: 1rem;
        font-family: "Luckiest Guy", cursive;
        letter-spacing: 1px;
    }

    .ccpa-table td {
        padding: 1rem;
        border-bottom: 1px solid #ddd;
        vertical-align: top;
    }

    .ccpa-table tr:last-child td {
        border-bottom: none;
    }

    .ccpa-table tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    .col-category { width: 30%; }
    .col-examples { width: 55%; }
    .col-collected { width: 15%; text-align: center; }
    .cell-collected { text-align: center; vertical-align: middle !important; }

    .badge-yes {
        background-color: var(--nini-green);
        color: white;
        padding: 4px 12px;
        border-radius: 4px;
        font-weight: bold;
        font-family: "Luckiest Guy";
        border: 2px solid var(--nini-black);
        box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
    }

    .badge-no {
        background-color: #ccc;
        color: #666;
        padding: 4px 12px;
        border-radius: 4px;
        font-weight: bold;
        font-family: "Luckiest Guy";
        border: 2px solid #999;
    }

    @media (min-width: 768px) {
        .page-title { font-size: 5rem; }
        .ccpa-content { padding: 4rem; }
    }
</style>