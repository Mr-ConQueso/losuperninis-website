<script lang="ts">
	import ComicButton from '$lib/components/generic/ComicButton.svelte';

	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="navbar">
	<div class="container navbar-content">
		<!-- Logo -->
		<a href="/" class="logo-area">
			<div class="logo-svg">
				<svg viewBox="0 0 100 100">
					<path d="M20,80 L20,30 C20,20 40,20 40,30 L40,40 L60,20 L80,20 L80,80 L60,80 L60,70 L40,90 L20,90 Z" fill="var(--nini-red)" stroke="black" stroke-width="3"/>
					<text x="50" y="70" font-family="Luckiest Guy" font-size="50" fill="white" text-anchor="middle">SN</text>
				</svg>
			</div>
			<span class="logo-text">LOS SUPER NINIS</span>
		</a>

		<!-- Desktop Menu -->
		<div class="desktop-menu">
			<a href="/" class="nav-link">Home</a>
			<a href="/projects" class="nav-link">Projects</a>
			<a href="/devlog" class="nav-link">Devlog</a>
			<a href="/about" class="nav-link">About</a>
			<div class="nav-cta">
				<ComicButton text="Contact" href="/#contact" />
			</div>
		</div>

		<!-- Mobile Toggle -->
		<button class="mobile-toggle" onclick={toggleMenu} aria-label="Toggle Menu">
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="mobile-menu">
			<a href="/" class="mobile-link">Home</a>
			<a href="/projects" class="mobile-link">Projects</a>
			<a href="/devlog" class="mobile-link">Devlog</a>
			<a href="/about" class="mobile-link">About</a>
		</div>
	{/if}
</nav>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: var(--header-height);
        background-color: rgba(26, 26, 26, 0.95); /* --nini-bg with opacity */
        border-bottom: 4px solid var(--nini-black);
        z-index: 100;
        backdrop-filter: blur(5px);
    }

    .navbar-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    /* Logo Styles */
    .logo-area {
        display: flex;
        align-items: center;
        gap: 10px;
        transition: transform 0.2s;
    }
    .logo-area:hover {
        transform: scale(1.05);
    }

    .logo-svg {
        width: 48px;
        height: 48px;
    }

    .logo-text {
        font-family: "Luckiest Guy", cursive;
        font-size: 1.5rem;
        color: var(--nini-white);
        text-shadow: 2px 2px 0 var(--nini-black);
        letter-spacing: 1px;
    }

    /* Desktop Menu */
    .desktop-menu {
        display: none; /* Hidden on mobile */
        align-items: center;
        gap: 30px;
    }

    .nav-link {
        color: var(--nini-beige);
        font-weight: bold;
        text-transform: uppercase;
        font-size: 1.1rem;
        transition: color 0.2s;
    }

    .nav-link:hover {
        color: var(--nini-red);
    }

    /* Mobile Toggle */
    .mobile-toggle {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
        background: none;
        border: none;
        cursor: pointer;
    }

    .bar {
        height: 3px;
        width: 100%;
        background-color: var(--nini-beige);
        border-radius: 2px;
    }

    /* Mobile Dropdown */
    .mobile-menu {
        background-color: var(--nini-bg);
        border-top: 2px solid var(--nini-black);
        border-bottom: 4px solid var(--nini-black);
        padding: 10px 0;
    }

    .mobile-link {
        display: block;
        padding: 15px 20px;
        color: var(--nini-beige);
        font-weight: bold;
        text-transform: uppercase;
        border-bottom: 1px solid #333;
    }

    .mobile-link:hover {
        background-color: var(--nini-red);
        color: var(--nini-white);
    }

    /* Media Queries */
    @media (min-width: 768px) {
        .desktop-menu {
            display: flex;
        }
        .mobile-toggle {
            display: none;
        }
    }
</style>