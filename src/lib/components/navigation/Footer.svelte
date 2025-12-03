<script lang="ts">
	// No script needed for this static component
</script>

<footer class="footer">
	<div class="container footer-content">

		<!-- Main Column Left: Brand Info -->
		<div class="footer-brand">
			<div class="brand-header">
				<!-- Simple SVG Logo Placeholder -->
				<svg class="brand-logo" viewBox="0 0 100 100">
					<path d="M20,80 L20,30 C20,20 40,20 40,30 L40,40 L60,20 L80,20 L80,80 L60,80 L60,70 L40,90 L20,90 Z" fill="var(--nini-red)" stroke="black" stroke-width="3"/>
					<text x="50" y="70" font-family="Luckiest Guy" font-size="50" fill="white" text-anchor="middle">SN</text>
				</svg>
				<h3>LOS SUPER NINIS</h3>
			</div>
			<p class="tagline">Saving the world from boredom, one pixel at a time.</p>
			<div class="meta">
				<p class="copyright">© 2025 Indie Game Studio</p>
				<p class="subtext">Made with Svelte & Chaos</p>
			</div>
		</div>

		<!-- Main Column Right: Links Group -->
		<div class="footer-links-group">

			<!-- Sub-col 1: Explore -->
			<div class="footer-column">
				<h3>EXPLORE</h3>
				<div class="vertical-links">
					<a href="/">Home</a>
					<a href="/projects">Projects</a>
					<a href="/devlog">Devlog</a>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				</div>
			</div>

			<!-- Sub-col 2: Legal -->
			<div class="footer-column">
				<h3>LEGAL</h3>
				<div class="vertical-links">
					<a href="/cookies">Cookies</a>
					<a href="/licences">Licences</a>
					<a href="/privacy">Privacy Policy</a>
					<a href="/terms">Terms of Use</a>
				</div>
			</div>

			<!-- Sub-col 3: Socials (Vertical) -->
			<div class="footer-column socials-column">
				<h3>SOCIALS</h3>
				<div class="social-links-vertical">
					<a href="#" class="social-icon" aria-label="Twitter">
						<i class="fab fa-twitter"></i>
					</a>
					<a href="#" class="social-icon" aria-label="Discord">
						<i class="fab fa-discord"></i>
					</a>
					<a href="#" class="social-icon" aria-label="YouTube">
						<i class="fab fa-youtube"></i>
					</a>
				</div>
			</div>

		</div>
	</div>
</footer>

<style>
    .footer {
        background-color: var(--nini-black);
        border-top: 4px solid var(--nini-beige);
        padding: 60px 0;
        color: var(--nini-white);
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }

    /* --- Left Side: Brand --- */
    .footer-brand {
        display: flex;
        flex-direction: column;
        align-items: center; /* Center on mobile */
        text-align: center;
        max-width: 100%;
    }

    .brand-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
    }

    .brand-logo {
        width: 50px;
        height: 50px;
    }

    .footer-brand h3 {
        font-family: "Luckiest Guy", cursive;
        font-size: 2rem;
        margin: 0;
        line-height: 1;
    }

    .tagline {
        color: var(--nini-beige);
        font-size: 1.1rem;
        margin-bottom: 20px;
        font-style: italic;
    }

    .copyright {
        color: #888;
        font-weight: bold;
        font-size: 0.9rem;
    }

    .subtext {
        color: #666;
        font-size: 0.8rem;
    }

    /* --- Right Side: Links Wrapper --- */
    .footer-links-group {
        display: flex;
        flex-direction: column; /* Stack on mobile */
        align-items: center;
        gap: 40px;
    }

    /* --- Columns Shared Styles --- */
    .footer-column {
        display: flex;
        flex-direction: column;
        align-items: center; /* Center on mobile */
        text-align: center;
    }

    .footer-column h3 {
        font-family: "Luckiest Guy", cursive;
        color: var(--nini-beige);
        margin-bottom: 15px;
        font-size: 1.5rem;
        letter-spacing: 1px;
    }

    .vertical-links {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .vertical-links a {
        color: var(--nini-white);
        text-decoration: none;
        font-weight: bold;
        transition: color 0.2s;
        font-size: 1rem;
    }

    .vertical-links a:hover {
        color: var(--nini-red);
    }

    /* --- Socials Vertical --- */
    .social-links-vertical {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .social-icon {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        border: 2px solid var(--nini-white);
        transition: all 0.2s;
        color: var(--nini-white);
        text-decoration: none;
    }

    .social-icon:hover { background-color: var(--nini-red); border-color: var(--nini-red); }

    /* --- Responsive Layout (Desktop) --- */
    @media (min-width: 900px) {
        .footer-content {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
        }

        /* Left Side */
        .footer-brand {
            align-items: flex-start;
            text-align: left;
            max-width: 350px;
        }

        /* Right Side Wrapper */
        .footer-links-group {
            flex-direction: row;
            align-items: flex-start;
            gap: 60px; /* Space between the three columns */
        }

        /* Columns */
        .footer-column {
            align-items: flex-start; /* Left align text in columns */
            text-align: left;
        }

        /* Center the Social Icons column relative to its header if preferred,
           but 'flex-start' keeps it consistent with the text links */
        .socials-column {
            align-items: center; /* Keep icons centered in their column or left aligned? */
            /* Let's keep them centered relative to the column header for a cleaner look or left aligned */
            align-items: center;
        }

        /* Actually, usually vertical icons look better centered under their header */
    }
</style>