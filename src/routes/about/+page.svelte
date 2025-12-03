<script lang="ts">
	import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
	import ComicButton from '$lib/components/generic/ComicButton.svelte';

	const team = [
		{
			name: "Alex 'The Glitch'",
			role: "Lead Developer",
			img: "https://randomuser.me/api/portraits/lego/2.jpg",
			stats: {
				coffee: "110%",
				bugs_fixed: "404",
				sanity: "12%"
			},
			quote: "It's not a bug, it's a surprise mechanic.",
			color: "var(--nini-blue)",
			variant: 1
		},
		{
			name: "Sam 'Pixel'",
			role: "Art Director",
			img: "https://randomuser.me/api/portraits/lego/6.jpg",
			stats: {
				layers: "999+",
				ctrl_z: "Infinite",
				sleep: "Unknown"
			},
			quote: "Can we make it pop more? Like, literally explode?",
			color: "var(--nini-red)",
			variant: 2
		},
		{
			name: "Charlie 'The Bard'",
			role: "Sound & Narrative",
			img: "https://randomuser.me/api/portraits/lego/1.jpg",
			stats: {
				decibels: "High",
				puns: "Critical",
				cats: "5"
			},
			quote: "I recorded my cat sneezing and it's now the laser sound.",
			color: "var(--nini-green)",
			variant: 3
		}
	];

	// Values Data
	const values = [
		{ title: "Chaos", desc: "We embrace the mess. Perfect code is boring.", icon: "fas fa-bomb" },
		{ title: "Fun First", desc: "If we don't laugh making it, you won't laugh playing it.", icon: "fas fa-laugh-squint" },
		{ title: "Indie Spirit", desc: "No corporate suits. Just hoodies and pizza.", icon: "fas fa-hand-rock" }
	];
</script>

<div class="page-wrapper">

	<!-- Header Section -->
	<header class="about-header">
		<div class="bg-layer halftone-beige"></div>
		<div class="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<div class="header-text">
				<div class="comic-badge">EST. 2025</div>
				<h1 class="page-title text-stroke-thick">THE <span class="highlight-red">ORIGIN</span> STORY</h1>
				<p class="header-subtitle">
					How a late-night joke turned into a studio committed to saving the world from boredom.
				</p>
			</div>
			<!-- Visual Element -->
			<div class="header-visual">
				<ComicPanel variant={2} className="hero-panel">
					<img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Studio Life" class="hero-img">
					<div class="speech-bubble">
						<p>IT STARTED<br>WITH A PIZZA!</p>
						<div class="bubble-tail"></div>
					</div>
				</ComicPanel>
			</div>
		</div>
	</header>

	<!-- Story / Timeline Section -->
	<section class="section story-section">
		<div class="container">
			<div class="section-header center-text">
				<h2 class="section-title text-black">OUR JOURNEY</h2>
				<p class="text-gray">From "Los Super Ninis" (The Super Neets) to Indie Devs.</p>
			</div>

			<div class="timeline">
				<!-- Timeline Item 1 -->
				<div class="timeline-item left">
					<div class="timeline-content">
						<ComicPanel variant={1} bgColor="white">
							<div class="p-6">
								<span class="year-badge red">2023</span>
								<h3>The "Aha!" Moment</h3>
								<p>We were unemployed ("Ninis") and bored. We decided to make a game about doing nothing.</p>
							</div>
						</ComicPanel>
					</div>
				</div>

				<!-- Timeline Item 2 -->
				<div class="timeline-item right">
					<div class="timeline-content">
						<ComicPanel variant={3} bgColor="var(--nini-beige)">
							<div class="p-6">
								<span class="year-badge blue">2024</span>
								<h3>First Game Jam</h3>
								<p>We entered a jam, slept 4 hours in 2 days, and won "Most Chaotic Game". We were hooked.</p>
							</div>
						</ComicPanel>
					</div>
				</div>

				<!-- Timeline Item 3 -->
				<div class="timeline-item left">
					<div class="timeline-content">
						<ComicPanel variant={2} bgColor="white">
							<div class="p-6">
								<span class="year-badge green">2025</span>
								<h3>Studio Founded</h3>
								<p>We officially became "Los Super Ninis". We bought a coffee machine before we bought desks.</p>
							</div>
						</ComicPanel>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Values Section -->
	<section class="section values-section">
		<div class="bg-layer solid-blue"></div>
		<div class="container relative z-10">
			<h2 class="section-title text-white center-text mb-12">OUR CORE VALUES</h2>
			<div class="values-grid">
				{#each values as val, i}
					<div class="value-card">
						<div class="icon-box">
							<i class={val.icon}></i>
						</div>
						<h3 class="text-beige">{val.title}</h3>
						<p class="text-white">{val.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Team Section -->
	<section class="section team-section">
		<div class="bg-layer halftone-red-overlay"></div>
		<div class="container relative z-10">
			<div class="section-header center-text">
				<h2 class="section-title text-stroke">MEET THE SQUAD</h2>
				<p class="text-black">The chaotic evil geniuses behind the pixels.</p>
			</div>

			<div class="team-grid">
				{#each team as member}
					<div class="team-card-wrapper">
						<ComicPanel variant={member.variant as 1|2|3} bgColor={member.color} className="team-panel">
							<div class="team-card-inner">
								<!-- Photo -->
								<div class="member-photo">
									<img src={member.img} alt={member.name}>
								</div>

								<!-- Info -->
								<div class="member-info">
									<h3 class="member-name">{member.name}</h3>
									<span class="member-role">{member.role}</span>

									<!-- RPG Stats -->
									<div class="stats-box">
										{#each Object.entries(member.stats) as [key, value]}
											<div class="stat-row">
												<span class="stat-label">{key}:</span>
												<span class="stat-val">{value}</span>
											</div>
										{/each}
									</div>

									<p class="member-quote">"{member.quote}"</p>
								</div>
							</div>
						</ComicPanel>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="section cta-section">
		<div class="container">
			<ComicPanel variant={2} bgColor="black" className="join-panel">
				<div class="cta-content">
					<h2 class="text-white">ARE YOU ONE OF US?</h2>
					<p class="text-beige">We are always looking for freelancers and contributors. If you like chaos, drop us a line.</p>
					<ComicButton text="Join the Chaos" variant="primary" href="/#contact" />
				</div>
			</ComicPanel>
		</div>
	</section>

</div>

<style>
    .page-wrapper {
        padding-top: var(--header-height);
        min-height: 100vh;
        background-color: var(--nini-bg);
        overflow-x: hidden;
    }

    /* --- Header --- */
    .about-header {
        padding: 4rem 0;
        background-color: var(--nini-bg);
        position: relative;
        border-bottom: 4px solid var(--nini-black);
    }

    .halftone-beige {
        position: absolute;
        inset: 0;
        opacity: 0.1;
        background-image: radial-gradient(circle, var(--nini-beige) 1px, transparent 1px);
        background-size: 10px 10px;
    }

    .grid { display: grid; }
    .grid-cols-1 { grid-template-columns: 1fr; }
    .gap-8 { gap: 2rem; }
    .items-center { align-items: center; }

    .header-text { text-align: center; }

    .comic-badge {
        display: inline-block;
        background: var(--nini-red);
        color: white;
        font-family: "Luckiest Guy";
        padding: 4px 12px;
        border: 2px solid black;
        margin-bottom: 1rem;
        transform: rotate(-3deg);
    }

    .page-title {
        font-size: 3.5rem;
        color: white;
        margin-bottom: 1rem;
        line-height: 1;
    }

    .highlight-red { color: var(--nini-red); }
    .header-subtitle { color: var(--nini-beige); font-size: 1.2rem; }

    .hero-img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        filter: grayscale(100%);
    }

    .speech-bubble {
        position: absolute;
        top: -20px;
        right: -20px;
        background: white;
        color: black;
        padding: 1rem;
        border: 3px solid black;
        font-family: "Luckiest Guy";
        border-radius: 50%;
        transform: rotate(10deg);
        z-index: 20;
    }

    .bubble-tail {
        position: absolute;
        bottom: 0;
        left: 10px;
        width: 15px;
        height: 15px;
        background: white;
        border-bottom: 3px solid black;
        border-right: 3px solid black;
        transform: rotate(45deg) translate(5px, 5px);
    }

    /* --- Story Timeline --- */
    .story-section {
        background-color: var(--nini-beige);
        padding: 4rem 0;
    }

    .section-header { margin-bottom: 3rem; }
    .section-title.text-black { color: black; }
    .text-gray { color: #444; }

    .timeline {
        position: relative;
        max-width: 800px;
        margin: 0 auto;
    }

    /* Timeline Line */
    .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: black;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
    }

    .timeline-item {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
        box-sizing: border-box;
    }

    .left { left: 0; }
    .right { left: 50%; }

    .timeline-content {
        position: relative;
        z-index: 10;
    }

    .year-badge {
        display: inline-block;
        color: white;
        font-family: "Luckiest Guy";
        padding: 4px 8px;
        border: 2px solid black;
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
    }
    .year-badge.red { background: var(--nini-red); }
    .year-badge.blue { background: var(--nini-blue); }
    .year-badge.green { background: var(--nini-green); }

    .p-6 { padding: 1.5rem; }
    .timeline-content h3 { font-size: 1.5rem; margin-bottom: 0.5rem; }

    /* --- Values --- */
    .values-section {
        padding: 4rem 0;
        position: relative;
        border-top: 4px solid black;
    }

    .solid-blue {
        position: absolute;
        inset: 0;
        background-color: var(--nini-blue);
    }

    .values-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
    }

    .value-card {
        padding: 2rem;
        border: 4px solid black;
        background: var(--nini-bg);
        box-shadow: 6px 6px 0 white;
        transition: transform 0.2s;
    }
    .value-card:hover { transform: translateY(-5px); }

    .icon-box {
        font-size: 3rem;
        color: var(--nini-red);
        margin-bottom: 1rem;
    }

    .text-beige { color: var(--nini-beige); margin-bottom: 0.5rem; font-size: 1.5rem; }
    .text-white { color: white; }

    /* --- Team Section --- */
    .team-section {
        background-color: white;
        padding: 4rem 0;
        border-top: 4px solid black;
    }

    .halftone-red-overlay {
        position: absolute;
        inset: 0;
        background-image: radial-gradient(circle, var(--nini-red) 1px, transparent 1px);
        background-size: 10px 10px;
        opacity: 0.1;
        pointer-events: none;
    }

    .team-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .team-card-wrapper {
        transition: transform 0.2s;
    }
    .team-card-wrapper:hover { transform: scale(1.02); }

    .team-card-inner {
        background: var(--nini-bg);
        border: 2px solid black;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    .member-photo {
        height: 250px;
        border-bottom: 4px solid black;
        overflow: hidden;
    }
    .member-photo img { width: 100%; height: 100%; object-fit: cover; }

    .member-info { padding: 1.5rem; color: white; flex: 1; display: flex; flex-direction: column; }

    .member-name { font-size: 2rem; line-height: 1; color: white; margin-bottom: 0.2rem; }
    .member-role { color: var(--nini-beige); font-weight: bold; text-transform: uppercase; font-size: 0.9rem; margin-bottom: 1rem; display: block; }

    .stats-box {
        background: black;
        border: 2px solid var(--nini-beige);
        padding: 0.8rem;
        margin-bottom: 1rem;
        font-family: "Fredoka";
        font-size: 0.9rem;
    }

    .stat-row { display: flex; justify-content: space-between; border-bottom: 1px dashed #555; padding: 2px 0; }
    .stat-row:last-child { border-bottom: none; }
    .stat-label { color: #888; text-transform: capitalize; }
    .stat-val { color: var(--nini-red); font-weight: bold; }

    .member-quote { font-style: italic; color: #ccc; text-align: center; margin-top: auto; }

    /* --- CTA Section --- */
    .cta-section { padding: 4rem 0; background-color: var(--nini-bg); border-top: 4px dashed white; }

    .join-panel { max-width: 600px; margin: 0 auto; text-align: center; }
    .cta-content { padding: 3rem 1.5rem; }
    .cta-content h2 { font-size: 2.5rem; margin-bottom: 0.5rem; }

    /* --- Responsive --- */
    @media (min-width: 768px) {
        .grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
        .md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }

        .header-text { text-align: left; }
        .page-title { font-size: 5rem; }

        .values-grid { grid-template-columns: repeat(3, 1fr); }
        .team-grid { grid-template-columns: repeat(3, 1fr); }
    }

    /* Mobile Timeline Adjustments */
    @media (max-width: 767px) {
        .timeline::after { left: 31px; }
        .timeline-item { width: 100%; padding-left: 70px; padding-right: 25px; }
        .timeline-item.right { left: 0; }
        .left::before, .right::before { left: 60px; border: medium solid white; border-width: 10px 10px 10px 0; border-color: transparent white transparent transparent; }
    }
</style>