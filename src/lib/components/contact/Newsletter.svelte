<script lang="ts">
    import {_} from "$lib/lang/i18n.js";
    import posthog from "posthog-js";

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
    
</script>

<style>
    .newsletter-section {
        background: rgba(255, 255, 255, 0.1);
        border-radius: var(--border-radius-large);
        padding: 3rem 2rem;
        margin: 4rem auto;
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
        border: 3px solid var(--color-pink);
        font-family: var(--font-body);
    }

    /* Responsive adaptations */
    @media (max-width: 768px) {
        .newsletter-form {
            flex-direction: column;
        }
    }
    
</style>

<section class="newsletter-section container">
    <div class="container">
        <h2 class="triheader">{$_("newsletter_title")}</h2>
        <p>{$_("newsletter_desc")}</p>
        <form class="newsletter-form" on:submit|preventDefault={handleSubmit}>
            <input type="email" placeholder={$_("newsletter_placeholder")} class="newsletter-input" required>
            <button type="submit" class="btn-primary">{$_("newsletter_button")} 🎉</button>
        </form>
    </div>
</section>