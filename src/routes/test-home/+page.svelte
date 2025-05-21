<script>
    let email = "";
    const submitEmail = () => {
        alert(`Thanks for joining, ${email}!`);
        email = "";
    };
</script>

<style>
    :global(body) {
        margin: 0;
        font-family: 'Comic Neue', sans-serif;
        background: #FDFDFD;
    }
    header {
        background: #7F57B2;
        color: white;
        padding: 2rem;
        text-align: center;
    }
    .logo {
        font-size: 2.5rem;
        font-weight: bold;
        color: #FFDA66;
    }
    .slogan {
        font-style: italic;
        color: #9EF0C3;
        margin-top: 0.5rem;
    }
    .btn-primary {
        background-color: #E64980;
        color: #FFDA66;
        border: none;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        border-radius: 8px;
        cursor: pointer;
    }
    .about, .games, .newsletter {
        padding: 2rem;
        text-align: center;
    }
    .about h2, .games h2, .newsletter h2 {
        color: #E64980;
    }
    .footer {
        background: #1E1E1E;
        color: #9EF0C3;
        text-align: center;
        padding: 1rem;
    }
</style>

<header>
    <div class="logo">Los Super Ninis</div>
    <div class="slogan">Making procrastination productive since forever.</div>
    <button class="btn-primary" on:click={() => alert('Redirecting to game...')}>Play Our Latest Game</button>
</header>

<section class="about">
    <h2>About Us</h2>
    <p>We’re a trio of creative slackers making serious fun. Games full of jokes, pixels, and love.</p>
</section>

<section class="games" style="background: linear-gradient(to right, #FFDA66, #9EF0C3);">
    <h2>Our Games</h2>
    <div>
        <strong>✨ Nini's Big Break</strong>
        <p>A chaotic couch-venture where naps power up your skills.</p>
        <button class="btn-primary">Play Now</button>
    </div>
</section>

<section class="newsletter">
    <h2>Join the Super Ninis!</h2>
    <p>Get updates, devlogs, and exclusive content in your inbox.</p>
    <input type="email" bind:value={email} placeholder="you@example.com" />
    <button class="btn-primary" on:click={submitEmail}>Subscribe</button>
</section>

<footer class="footer">
    <p>Follow us: Twitter | Discord | GitHub</p>
    <p>&copy; 2025 Los Super Ninis. Powered by caffeine & chaos.</p>
</footer>
