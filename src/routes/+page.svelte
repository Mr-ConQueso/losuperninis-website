<script lang="ts">
import ComicButton from '$lib/components/generic/ComicButton.svelte';
import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
import LandingBlogCard from '$lib/components/blog/LandingBlogCard.svelte';
import { projects } from '$lib/components/projects/project-info.ts';

let { data } = $props();

let featuredPosts = $derived(
	data.posts
		.filter((p: any) => p.featured)
		.slice(0, 3)
);
</script>

<!-- Hero Section -->
<header class="hero-section">
	<!-- Background Effects -->
	<div class="bg-layer solid-blue"></div>
	<div class="action-lines"></div>
	<div class="bg-layer halftone-red"></div>

	<div class="container hero-grid">
		<!-- Hero Content -->
		<div class="hero-text">
			<div class="est-badge">
				EST. 2025
			</div>
			<h1 class="main-title">
				QUIRKY<br>
				<span class="highlight-red">INDIE</span> GAMES
			</h1>
			<p class="subtitle">
				We make playful games with comic visuals and chaotic creativity. Welcome to the headquarters of Los Super Ninis!
			</p>

			<div class="hero-buttons">
				<ComicButton text="Play Our Games" variant="primary" href="/projects" />
				<ComicButton text="Read Devlog" variant="secondary" href="/devlog" />
			</div>
		</div>

		<!-- Hero Visual -->
		<div class="hero-visual">
			<ComicPanel variant={1} className="rotate-panel">
				<div class="hero-image-container">
					<div class="hero-img" style="background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');"></div>
					<div class="overlay-gradient"></div>

					<div class="hero-panel-text">
						<span class="boom-text">BANG!</span>
						<p class="release-tag">New Release Incoming!</p>
					</div>
				</div>
				<!-- Speech Bubble -->
				{#snippet bubble()}
					<div class="speech-bubble">
						<p>IT'S<br>FUN!</p>
						<div class="bubble-tail"></div>
					</div>
				{/snippet}
			</ComicPanel>
		</div>
	</div>
</header>

<!-- Features Section -->
<section class="section features-section">
	<div class="bg-layer halftone-red-overlay"></div>
	<div class="container">

		<div class="section-header">
			<h2 class="section-title text-stroke">WHY US?</h2>
			<div class="underline-deco"></div>
		</div>

		<div class="features-grid">
			<ComicPanel variant={2} bgColor="var(--nini-red)">
				<div class="feature-card">
					<div class="icon-circle pulse">
						<i class="fas fa-gamepad"></i>
					</div>
					<h3 class="feature-title text-white">Playful Games</h3>
					<p class="feature-desc text-beige">Mechanics that put a smile on your face. We prioritize fun over physics!</p>
				</div>
			</ComicPanel>

			<div class="offset-card">
				<ComicPanel variant={1}>
					<div class="feature-card">
						<div class="icon-circle red-icon">
							<i class="fas fa-bolt"></i>
						</div>
						<h3 class="feature-title text-black">Comic Visuals</h3>
						<p class="feature-desc text-black">A unique aesthetic inspired by the golden age of comics and pop culture.</p>
					</div>
				</ComicPanel>
			</div>

			<ComicPanel variant={3} bgColor="var(--nini-blue)">
				<div class="feature-card">
					<div class="icon-circle">
						<i class="fas fa-paint-brush"></i>
					</div>
					<h3 class="feature-title text-white">Pure Creativity</h3>
					<p class="feature-desc text-beige">Hand-crafted assets, original stories, and zero corporate boredom.</p>
				</div>
			</ComicPanel>
		</div>
	</div>
</section>

<!-- Portfolio Section -->
<section class="section portfolio-section">
	<div class="pow-bg">POW!</div>

	<div class="container">
		<div class="portfolio-header">
			<div>
				<h2 class="section-title text-stroke-red">LATEST HITS</h2>
				<p class="header-subtitle">Check out our latest releases</p>
			</div>
			<a href="/projects" class="view-all-link">View All Projects -></a>
		</div>

		<div class="portfolio-grid">
			<!-- Project 1 -->
			<a href={projects[0].link} target="_blank" rel="noreferrer" >
				<div class="project-item">
					<ComicPanel variant={2} className="project-panel">
						<img src={projects[0].img} alt="Game 1" class="project-img">
						<div class="project-info info-red">
							<h3>{projects[0].title}</h3>
							<p>{projects[0].genre}</p>
						</div>
						<div class="badge-new">NEW!</div>
					</ComicPanel>
				</div>
			</a>

			<!-- Project 2 -->
			<a href={projects[1].link} target="_blank" rel="noreferrer" >
				<div class="project-item">
					<ComicPanel variant={3} className="project-panel">
						<img src={projects[1].img} alt="Game 2" class="project-img">
						<div class="project-info info-blue">
							<h3>{projects[1].title}</h3>
							<p>{projects[1].genre}</p>
						</div>
					</ComicPanel>
				</div>
			</a>
		</div>

		<div class="mobile-cta">
			<ComicButton text="View All" href="/projects" />
		</div>
	</div>
</section>

<!-- About & Team Section -->
<section class="section about-section">
	<div class="container about-grid">
		<div class="about-text">
			<h2 class="section-title text-black">WHO ARE WE?</h2>
			<p class="body-text">
				Los Super Ninis started as a late-night joke and turned into a dedicated indie studio. We believe in games that don't take themselves too seriously but are seriously fun to play.
			</p>
			<p class="body-text">
				Our mission? To save the world from boredom, one pixel at a time.
			</p>
			<div class="team-btn-wrapper">
				<ComicButton text="Meet the Full Team" variant="dark" href="/about" />
			</div>
		</div>

		<div class="team-visuals">
			<div class="team-card card-coder">
				<div class="member-img">
					<img src="https://randomuser.me/api/portraits/lego/2.jpg" alt="Coder">
				</div>
				<h3>THE CODER</h3>
				<p>"I fix bugs with coffee."</p>
			</div>

			<div class="team-card card-artist">
				<div class="member-img">
					<img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="Artist">
				</div>
				<h3>THE ARTIST</h3>
				<p>"It needs more explosions."</p>
			</div>
		</div>
	</div>
</section>

<!-- Latest Devlog (Blog List) -->
<section class="section devlog-section">
	<div class="container">
		<h2 class="section-title center-text text-white"><span class="highlight-red">DEV</span>LOGS</h2>

		<div class="blog-list">
			{#each featuredPosts as post, i}
				<LandingBlogCard
					title={post.title}
					date={post.date}
					excerpt={post.excerpt}
					image={post.image}
					slug={post.slug}
					index={i}
				/>
			{/each}

			<!-- Fallback if no posts exist -->
			{#if featuredPosts.length === 0}
				<div class="text-center text-white font-fredoka">
					<p>No featured posts yet! Check back soon.</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Newsletter Section -->
<section class="section newsletter-section" id="contact">
	<div class="bg-layer halftone-beige-overlay"></div>
	<div class="container">
		<div class="newsletter-box">
			<h2 class="section-title text-black">JOIN THE SQUAD!</h2>
			<p class="text-black">Get exclusive updates, beta keys, and comic strips directly in your inbox.</p>

			<form class="newsletter-form">
				<input type="email" placeholder="Enter your email..." class="email-input">
				<ComicButton text="SUBSCRIBE!" variant="dark" />
			</form>
		</div>
	</div>
</section>

<style>
    /* --- HERO SECTION --- */
    .hero-section {
        min-height: 100vh;
        position: relative;
        display: flex;
        align-items: center;
        padding-top: var(--header-height);
        overflow: hidden;
    }

    .bg-layer {
        position: absolute;
        inset: 0;
        z-index: 0;
    }

    .solid-blue { background-color: var(--nini-blue); }
    .halftone-red {
        background-image: radial-gradient(circle, var(--nini-red) 1px, transparent 1px);
        background-size: 10px 10px;
        opacity: 0.1;
        width: 50%;
        left: auto;
        right: 0;
    }

    .hero-grid {
        position: relative;
        z-index: 10;
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        align-items: center;
    }

    .est-badge {
        display: inline-block;
        background-color: var(--nini-red);
        color: white;
        font-weight: bold;
        padding: 4px 12px;
        margin-bottom: 1rem;
        transform: rotate(-2deg);
        border: 2px solid black;
        box-shadow: 4px 4px 0 rgba(0,0,0,1);
    }

    .main-title {
        font-size: 3.5rem;
        color: white;
        text-shadow: 5px 5px 0 #000;
        margin-bottom: 1.5rem;
    }

    .highlight-red { color: var(--nini-red); }

    .subtitle {
        font-size: 1.25rem;
        color: var(--nini-beige);
        margin-bottom: 2rem;
        max-width: 500px;
    }

    .hero-buttons {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    /* Hero Visuals */
    .hero-visual {
        position: relative;
        margin: 0 auto;
        width: 100%;
        max-width: 500px;
    }

    .rotate-panel {
        transform: rotate(2deg);
        background-color: white;
    }

    .hero-image-container {
        position: relative;
        height: 400px;
        background-color: var(--nini-bg);
        border: 2px solid black;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero-img {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        opacity: 0.6;
    }

    .overlay-gradient {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, var(--nini-bg), transparent);
    }

    .hero-panel-text {
        position: relative;
        z-index: 2;
        text-align: center;
    }

    .boom-text {
        font-family: "Luckiest Guy", cursive;
        font-size: 4rem;
        color: white;
        text-shadow: 4px 4px 0 var(--nini-red);
        display: block;
    }

    .release-tag {
        background-color: black;
        color: white;
        font-weight: bold;
        padding: 4px 8px;
        display: inline-block;
        margin-top: 0.5rem;
    }

    .speech-bubble {
        position: absolute;
        top: -40px;
        right: -20px;
        background: white;
        color: black;
        padding: 20px;
        border-radius: 50%;
        border: 4px solid black;
        font-family: "Luckiest Guy", cursive;
        font-size: 1.25rem;
        transform: rotate(12deg);
        z-index: 20;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.2);
        line-height: 1;
        text-align: center;
    }

    .bubble-tail {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 15px;
        height: 15px;
        background: white;
        border-bottom: 4px solid black;
        border-left: 4px solid black;
        transform: rotate(45deg) translate(8px, 4px);
    }

    /* --- FEATURES SECTION --- */
    .features-section {
        background-color: var(--nini-beige);
        border-top: 4px solid black;
    }

    .halftone-red-overlay {
        background-image: radial-gradient(circle, var(--nini-red) 1px, transparent 1px);
        background-size: 10px 10px;
        opacity: 0.1;
        pointer-events: none;
    }

    .section-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    .section-title {
        font-size: 3rem;
        color: var(--nini-bg);
    }

    .section-title.text-white { color: white; }
    .section-title.text-black { color: black; }
    .section-title.center-text { text-align: center; }

    .underline-deco {
        height: 8px;
        width: 120px;
        background-color: var(--nini-red);
        margin: 1rem auto 0;
        border: 2px solid black;
        transform: skewX(-12deg);
    }

    .features-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .feature-card {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 100%;
    }

    .icon-circle {
        width: 80px;
        height: 80px;
        background: white;
        border-radius: 50%;
        border: 4px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        color: black;
        margin-bottom: 1rem;
    }
    .icon-circle.red-icon { background: var(--nini-red); color: white; }

    .feature-title { font-size: 1.5rem; margin-bottom: 0.5rem; }
    .feature-title.text-white { color: white; }
    .feature-title.text-black { color: black; }
    .text-beige { color: var(--nini-beige); }
    .text-black { color: black; }

    /* --- PORTFOLIO SECTION --- */
    .portfolio-section {
        background-color: var(--nini-bg);
        position: relative;
        overflow: hidden;
    }

    .pow-bg {
        position: absolute;
        left: -50px;
        top: 20px;
        font-family: var(--font-h1);
        font-size: 15rem;
        color: white;
        opacity: 0.05;
        transform: rotate(90deg);
        user-select: none;
        pointer-events: none;
    }

    .portfolio-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 3rem;
    }

    .header-subtitle { color: var(--nini-beige); margin-top: 0.5rem; }

    .view-all-link {
        display: none;
        color: var(--nini-red);
        font-family: var(--font-h1);
        font-size: 1.25rem;
    }
    .view-all-link:hover { text-decoration: underline; }

    .portfolio-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .project-item { position: relative; }

    .project-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: grayscale(100%);
        transition: filter 0.3s;
    }

    .project-item:hover .project-img { filter: grayscale(0%); }

    .project-info {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 1rem;
        border-top: 4px solid black;
        transform: translateY(100%);
        transition: transform 0.3s;
    }

    .project-item:hover .project-info { transform: translateY(0); }

    .info-red { background-color: var(--nini-red); color: white; }
    .info-blue { background-color: var(--nini-blue); color: white; }
    .project-info h3 { font-size: 1.5rem; margin-bottom: 0.2rem; }

    .badge-new {
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: #FFD700;
        color: black;
        font-family: var(--font-h1);
        padding: 0.25rem 0.75rem;
        border: 2px solid black;
        transform: rotate(12deg);
    }

    .mobile-cta { margin-top: 2rem; text-align: center; }

    .halftone-beige-overlay {
        background-image: radial-gradient(circle, var(--nini-beige) 4px, transparent 1px);
        background-size: 20px 20px;
        opacity: 0.4;
        pointer-events: none;
    }
    .avatar img { width: 100%; height: 100%; object-fit: cover; }

    .speech-box p { font-size: 1.1rem; color: black; font-style: italic; }

    /* --- ABOUT & TEAM --- */
    .about-section { background-color: white; }

    .about-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 4rem;
        align-items: center;
    }

    .body-text { color: #333; font-size: 1.1rem; margin-bottom: 1.5rem; }
    .team-btn-wrapper { display: inline-block; transform: rotate(1deg); }

    .team-visuals {
        position: relative;
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .team-card {
        position: absolute;
        width: 250px;
        padding: 0.5rem;
        border: 4px solid black;
        box-shadow: 0 10px 15px rgba(0,0,0,0.1);
        text-align: center;
        background: white;
        transition: transform 0.3s;
    }

    .card-coder {
        background: var(--nini-beige);
        transform: rotate(-6deg);
        z-index: 1;
    }

    .card-artist {
        background: var(--nini-red);
        transform: translate(40px, 40px) rotate(6deg);
        z-index: 2;
        color: white;
    }

    .team-card:hover { transform: rotate(0deg) scale(1.05); z-index: 10; }

    .member-img {
        height: 200px;
        width: 100%;
        border: 2px solid black;
        margin-bottom: 0.5rem;
        overflow: hidden;
        background: var(--nini-bg);
    }
    .member-img img { width: 100%; height: 100%; object-fit: cover; }
    .team-card h3 { font-size: 1.25rem; margin-bottom: 0.2rem; }

    /* --- DEVLOG --- */
    .devlog-section {
        background-color: var(--nini-bg);
        border-top: 4px dashed white;
        padding: 5rem 0;
    }

    .blog-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .section-title {
        font-size: 3rem;
        color: var(--nini-white);
        margin-bottom: 3rem;
    }

    .section-title.center-text { text-align: center; }
    .highlight-red { color: var(--nini-red); }

    /* --- NEWSLETTER --- */
    .newsletter-section {
        background-color: var(--nini-red);
        border-top: 4px solid black;
        border-bottom: 4px solid black;
    }

    .newsletter-box {
        background: white;
        max-width: 700px;
        margin: 0 auto;
        padding: 2rem;
        border: 4px solid black;
        box-shadow: 10px 10px 0 var(--nini-blue);
        transform: rotate(1deg);
        text-align: center;
    }

    .newsletter-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .email-input {
        padding: 1rem;
        border: 2px solid black;
        font-family: var(--font-h1);
        font-size: 1rem;
    }

    /* --- RESPONSIVE QUERIES --- */
    @media (min-width: 768px) {
        .hero-grid { grid-template-columns: 1fr 1fr; }
        .hero-buttons { flex-direction: row; }
        .main-title { font-size: 5rem; }

        .features-grid { grid-template-columns: repeat(3, 1fr); }
        .offset-card { transform: translateY(-20px); }

        .portfolio-header { align-items: flex-end; }
        .portfolio-grid { grid-template-columns: 1fr 1fr; }
        .view-all-link { display: block; }
        .mobile-cta { display: none; }

        .newsletter-form { flex-direction: row; }
        .email-input { flex: 1; }
    }
</style>