<script lang="ts">
    import posthog from "posthog-js";
    import HeroSection from "$lib/components/landing-page/HeroSection.svelte";
    import type { Actions } from './$types';
    import {_} from "$lib/lang/i18n.ts";

    let email = '';
    let status: { success?: boolean; error?: string } = {};
    
    async function handleSubmit(e: SubmitEvent) {
        const form = e.currentTarget as HTMLFormElement;
        const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
        email = emailInput.value;

        const formData = new FormData();
        formData.append('email', email);

        posthog.capture('New Newsletter Subscription', {
            email_provided: Boolean(emailInput.value),
            email: email,
            source: 'newsletter_section'
        });

        // Simple email format check
        const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!email || !emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const response = await fetch('/', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            status = result;
            if (result.success) {
                email = '';
            }
        } else {
            status = { success: false, error: 'Submission failed.' };
        }

        alert("Thanks for subscribing!");
        form.reset();
    }
    
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
    
    .section-header h2 {
        font-size: clamp(2rem, 5vw, 3rem);
        color: var(--color-light);
        margin-bottom: 1rem;
    }
    
    .section-header p {
        max-width: 700px;
        margin: 0 auto;
        color: var(--color-font);
        font-size: 1.1rem;
    }
    
    /* Testimonials */
    .testimonials-section {
        padding: 1rem 1rem;
    }
    
    .testimonials-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
        color: var(--color-font);
    }
    
    .rating {
        color: var(--color-font);
        font-size: 1.2rem;
        font-weight: bold;
    }
    
    /* Newsletter */
    .newsletter-section {
        background: rgba(255, 255, 255, 0.1);
        border-radius: var(--border-radius-large);
        padding: 3rem 2rem;
        margin: 4rem auto;
        max-width: 800px;
        text-align: center;
        backdrop-filter: blur(10px);
    }
    
    .newsletter-form {
        display: flex;
        gap: 1rem;
        max-width: 500px;
        margin: 2rem auto;
    }
    
    .newsletter-input {
        flex: 1;
        padding: 1rem;
        border-radius: var(--border-radius-pill);
        border: 3px solid var(--color-primary);
        font-family: var(--font-body);
    }
    
    /* Responsive adaptations */
    @media (max-width: 768px) {
        .newsletter-form {
            flex-direction: column;
        }
        .games {
            padding-top: 40px;
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

<section class="testimonials-section">
    <div class="container">
        <div class="section-header">
            <h2>{$_("testimonials_title")}</h2>
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
    </div>
</section>

<section class="newsletter-section">
    <div class="container">
        <h2>{$_("newsletter_title")}</h2>
        <p>{$_("newsletter_desc")}</p>
        <form class="newsletter-form" on:submit|preventDefault={handleSubmit}>
            <input type="email" placeholder={$_("newsletter_placeholder")} class="newsletter-input" required>
            <button type="submit" class="btn-primary">{$_("newsletter_button")} 🎉</button>
        </form>
    </div>
</section>