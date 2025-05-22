<script lang="ts">
    import HeroSection from "$lib/components/landing-page/HeroSection.svelte";
    import {_} from "$lib/lang/i18n.js";
    import Newsletter from "$lib/components/contact/Newsletter.svelte";
    import Contact from "$lib/components/contact/Contact.svelte";

    let features = [
        {
            image: "/images/test.png",
            heading: "Dive into Hilarious Stories That Will Keep You Laughing!",
            description: "Our games are packed with unexpected twists and delightful humor.",
            buttonText: "Explore"
        },
        {
            image: "/images/test.png",
            heading: "Meet Our Quirky Characters That Bring Every Adventure to Life!",
            description: "Each character is uniquely designed to add charm and personality.",
            buttonText: "Join"
        },
        {
            image: "/images/test.png",
            heading: "Innovative Mechanics That Challenge Your Skills and Ignite Your Imagination!",
            description: "Our gameplay mechanics are fresh, engaging, and full of surprises.",
            buttonText: "Play"
        }
    ];
    
    let testimonials = [
        {
            text: "Symbiosis is like SimCity but with bacteria... and somehow more addictive!",
            author: "GameReviewer.com",
            rating: "9/10"
        },
        {
            text: "For Pawn's Sake had me laughing and strategizing in equal measure.",
            author: "IndieGamesWeekly",
            rating: "4.5/5"
        }
    ];

    let processes = [
        {
            image: "/images/test.png",
            heading: "Step 1: Conceptualization and Brainstorming",
            description: "We kick off with creative sessions to explore ideas."
        },
        {
            image: "/images/test.png",
            heading: "Step 2: Design and Prototyping",
            description: "Our team crafts visuals and gameplay mechanics."
        },
        {
            image: "/images/test.png",
            heading: "Step 3: Development and Testing",
            description: "We build and refine the game based on feedback."
        }
    ];
</script>

<style>
    .title {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 300px;
    }

    .games {
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .games::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.1;
        z-index: -1;
    }
    
    .section-header {
        text-align: center;
        margin-bottom: 3rem;
    }
    
    .section-header p {
        max-width: 700px;
        margin: 0 auto;
        color: var(--color-dark);
        font-size: 1.1rem;
    }

    /* Latest Feature */
    .feature-section {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
    }

    .left-column,
    .right-column {
        flex: 1;
        min-width: 300px;
        box-sizing: border-box;
        padding: 1rem;
    }

    .left-column img {
        width: auto;
        height: 100px;
        margin-bottom: 1rem;
    }

    .left-column button {
        margin-top: 1.5rem;
    }

    .video-container {
        position: relative;
        margin-top: 5rem;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
        overflow: hidden;
    }

    .video-container iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: var(--border-radius-medium);
    }
    
    /* Features List */
    .features-section {
        text-align: center;
        padding: 2rem;
    }

    .features-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4rem;
    }

    .feature-item {
        max-width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .feature-item img {
        width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    .feature-item h3 {
        margin: 0.5rem 0;
    }

    .feature-item p {
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }

    .feature-item button {
        padding: 0.5rem 1rem;
        cursor: pointer;
    }

    /* How It Works List */
    .how-it-works-section {
        text-align: center;
        padding: 2rem;
    }

    .how-it-works-title {
        display: flex;
        gap: 1rem;
        text-align: left;
    }

    .how-it-works-title h2,
    .how-it-works-title p {
        flex: 1 1 50%;
        box-sizing: border-box;
    }

    .how-it-works-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4rem;
    }

    .process-item {
        max-width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .process-item img {
        width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    .process-item h3 {
        margin: 0.5rem 0;
    }

    .process-item p {
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }
    
    /* Testimonials */
    .testimonials-section {
        padding: 1rem 1rem;
    }
    
    .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        padding: 0 2rem;
        gap: 2rem;
    }
    
    .testimonial-card {
        background: rgba(255, 255, 255, 0.9);
        border-radius: var(--border-radius-medium);
        padding: 2rem;
        position: relative;
        box-shadow: 0 8px 0 rgba(0,0,0,0.1);
    }
    
    .testimonial-card::before {
        content: '"';
        position: absolute;
        top: -20px;
        left: 20px;
        font-size: 4rem;
        color: var(--color-dark);
    }
    
    .rating {
        color: var(--color-dark);
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    /* Gallery */
    .gallery-section {
        text-align: center;
        padding: 2rem;
    }

    .gallery-header {
        text-align: center;
        margin-bottom: 3rem;
    }
    
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4rem;
    }
    
    /* Responsive adaptations */
    @media (max-width: 768px) {
        .games {
            padding-top: 40px;
        }
        .features-grid {
            gap: 2rem;
        }
        .video-container {
            margin-top: 0;
        }
        .how-it-works-title {
            flex-wrap: wrap;
        }
        .how-it-works-grid {
            gap: 0.5rem;
        }
    }
</style>

<svelte:head>
    <title>{$_("app_title")}</title>
</svelte:head>

<section class="games">
    <img src="/icons/logotype.png" class="title" alt="A letter S with glasses and a cape"/>
    <h2>{@html $_("app_desc")}</h2>
    <HeroSection/>
</section>

<section class="feature-section container section">
    <!-- LEFT COLUMN -->
    <div class="left-column">
        <img src="/icons/logo.png" alt="Game Preview" />
        <h2 class="subheader">Discover Our Latest Indie Game Adventure!</h2>
        <p>
            Dive into a whimsical world filled with quirky characters and challenging puzzles. Our latest release promises hours of fun and laughter for players of all ages!
        </p>
        <button class="btn-primary">Play</button>
    </div>

    <!-- RIGHT COLUMN -->
    <div class="right-column">
        <div class="video-container">
            <iframe
                    title="Symbiosis Trailer"
                    src="https://www.youtube.com/embed/zi2GvqboQfY"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
            ></iframe>
        </div>
    </div>
</section>

<section class="features-section container section">
    <h2 class="subheader">Key Features</h2>
    <div class="features-grid">
        {#each features as feature}
            <div class="feature-item">
                <img src={feature.image} alt={feature.heading} />
                <h3>{feature.heading}</h3>
                <p>{feature.description}</p>
                <button class="btn-secondary">{feature.buttonText}</button>
            </div>
        {/each}
    </div>
</section>

<section class="testimonials-section container section">
    <div class="section-header">
        <h2 class="subheader">{$_("testimonials_title")}</h2>
        <p>{$_("testimonials_desc")}</p>
    </div>
    
    <div class="testimonials-grid">
        {#each testimonials as testimonial}
            <div class="testimonial-card">
                <p>{testimonial.text}</p>
                <p class="rating">{testimonial.rating}</p>
                <small>- {testimonial.author}</small>
            </div>
        {/each}
    </div>
</section>

<section class="how-it-works-section container section">
    <div class="how-it-works-title">
        <h2 class="subheader">Discover Our Game<br>Development Journey</h2>
        <p>
            At Los Super Ninis, we turn ideas into immersive gaming experiences. Our process is collaborative and fun, ensuring every detail is crafted with care. From brainstorming to launch, we make sure your vision comes to life!
        </p>
    </div>
    <div class="how-it-works-grid">
        {#each processes as process}
            <div class="process-item">
                <img src={process.image} alt={process.heading} />
                <h3>{process.heading}</h3>
                <p>{process.description}</p>
            </div>
        {/each}
    </div>
</section>

<section class="gallery-section container section">
    <div class="gallery-header">
        <h2 class="subheader">Game Showcase</h2>
        <p>Explore our vibrant worlds and unique character designs!</p>
    </div>
    <div class="gallery">
        <img src="/images/test.png" alt="Test" />
    </div>
</section>

<Contact />

<Newsletter />