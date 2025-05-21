<script lang="ts">
    export let gameTitlte = '';

    export let lastUpdated = '';
</script>

<style>
    .licences-container {
        padding: 2rem;
        background: rgba(255, 255, 255, 0.8); /* Light background for readability */
        border-radius: 1rem;
        color: #333; /* Darker text for readability */
        line-height: 1.6;
    }
    .licences-container h1 {
        text-align: center;
        font-size: 2.5rem;
        color: #fff;
        text-shadow: 2px 2px var(--color-dark);
        margin-bottom: 2rem;
    }
    .licences-container p,
    .licences-container ul {
        margin-bottom: 1rem;
    }
    .licences-container ul {
        padding-left: 20px;
    }
    .licences-container a {
        color: var(--color-purple);
    }
    .licences-container strong {
        color: var(--color-pink);
    }
</style>

<div class="licences-container container">
    <p><strong>
        Last Updated: <time datetime={lastUpdated}>{lastUpdated}</time>
    </strong></p>

    <h1>Copyright</h1>
    <p>All original content, code, and chaotic creativity in {gameTitlte} – which basically means our pixelated creations are ours. While we embrace the indie spirit of sharing, please don’t reproduce/distribute our games, art, or website content without permission. (But hey – fan art? Memes? Speedruns? Those get our official <span style="color: var(--color-purple);">✨nini-approved✨</span> stamp.)</p>

    <h1>Credits</h1>
    <p>We’re obsessively grateful to these resources that helped build our digital clubhouse:</p>

    <p><em>Legal footnote: These are public domain assets, but we’re mentioning them because good karma > legal minimums.</em></p>

    <h1>Licences</h1>
    <p>While we mostly brew our own code chaos, for which we use:</p>
    <ul>
        <li><strong>Unity6</strong> (Personal Licence)</li>
        <li><strong>Jetbrains Rider</strong> (Student Licence)</li>
        <li><strong>Anchorpoint</strong> (Student Licence)</li>
        <li><strong>Autodesk Maya</strong> (Student Licence)</li>
        <li><strong>Blender</strong> (GPL v2)</li>
        <li><strong>Visual Studio Code</strong> (MIT Licence)</li>
    </ul>

    <div class="closing-note">
        <p><small>Made with 73% caffeine and 100% nini spirit.<br>
            (The other 27% is pure panic about server conflicts.)</small></p>
    </div>
</div>