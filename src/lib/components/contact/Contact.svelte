<script>
    const contacts = [
        {
            type: "Email",
            icon: "/icons/email.svg",
            description: "Reach out to us directly via email for inquiries, collaborations, or just to say hello!",
            address: "mailto:info@supersninis.com",
            buttonText: "info@supersninis.com"
        },
        {
            type: "Discord",
            icon: "/icons/Discord_Logo.png",
            description: "Join our Discord server to chat, give feedback, and hang out with the devs and community!",
            address: "https://discord.gg/YOUR_INVITE",
            buttonText: "Join Discord"
        },
        {
            type: "Bluesky",
            icon: "/icons/Bluesky_Logo.png",
            description: "Follow us on Bluesky for news, dev updates, and memes from the Super Ninis team.",
            address: "https://bsky.app/profile/losuperninis.bsky.social",
            buttonText: "@losuperninis.bsky.social"
        }
    ];
</script>

<style>
    .contact-section {
        text-align: center;
        padding: 2rem;
    }

    .contact-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }

    .contact-card {
        width: 280px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 1.5rem;
        border-radius: 1rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        background-color: var(--color-green);
    }

    .icon {
        width: auto;
        height: 48px;
        margin-bottom: 1rem;
    }

    .contact-card h3 {
        font-size: 1.25rem;
        margin: 0.5rem 0;
    }

    .contact-card p {
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }
</style>

<section class="contact-section container">
    <h2 class="subheader">Get in Touch</h2>
    <div class="contact-grid">
        {#each contacts as contact}
            <div class="contact-card">
                <img src={contact.icon} alt={contact.type + " icon"} class="icon" />
                <h3>{contact.type}</h3>
                <p>{contact.description}</p>
                <a class="btn-primary" href={contact.address} target="_blank" rel="noopener">
                    {contact.buttonText}
                </a>
            </div>
        {/each}
    </div>
</section>