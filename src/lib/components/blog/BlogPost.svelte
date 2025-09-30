<script>
    import { marked } from 'marked';
    export let title;
    export let content;
</script>

<style>
    .markdown :global(h2) {
        font-family: var(--font-subheading);
        font-size: 2rem;
        color: var(--color-background);
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }

    .markdown :global(h3) {
        font-family: var(--font-subheading);
        font-size: 1.5rem;
        color: var(--color-secundary);
        margin-top: 1.5rem;
        margin-bottom: 0.5rem;
    }

    .markdown :global(p) {
        font-family: var(--font-body);
        font-size: 1.1rem;
        line-height: 1.8;
        margin-bottom: 1rem;
    }

    .markdown :global(a) {
        color: var(--color-primary);
        text-decoration: underline dotted;
        font-weight: bold;
        transition: color 0.2s ease;
    }

    .markdown :global(a:hover) {
        color: var(--color-background);
    }

    .markdown :global(img) {
        max-width: 100%;
        margin: 1.5rem 0;
        border-radius: var(--border-radius-medium);
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .markdown :global(ul),
    .markdown :global(ol) {
        margin-left: 1.5rem;
        margin-bottom: 1rem;
        list-style-position: inside;
    }

    .markdown :global(li) {
        margin-bottom: 0.5rem;
    }

    .markdown :global(pre) {
        background: var(--color-font);
        color: var(--color-font-light);
        padding: 1rem;
        border-radius: var(--border-radius-small);
        overflow-x: auto;
        margin: 1.5rem 0;
        font-family: monospace;
    }

    .markdown :global(code) {
        background: #f5f5f5;
        padding: 0.2rem 0.4rem;
        border-radius: 0.3rem;
        font-size: 0.95rem;
        font-family: monospace;
    }

    .markdown :global(blockquote) {
        border-left: 5px solid var(--color-terciary);
        padding-left: 1rem;
        color: #444;
        font-style: italic;
        margin: 1rem 0;
        background: #f9f9f9;
        border-radius: var(--border-radius-small);
    }
</style>

<article class="bg-white rounded-[var(--border-radius-large)] p-6 sm:p-10 shadow-lg animate-fadeIn text-[var(--color-dark)]">
    <h1
            class="text-4xl sm:text-5xl font-heading text-[var(--color-pink)] mb-8 leading-tight drop-shadow"
            style="font-family: var(--font-heading)"
    >
        {title}
    </h1>

    <div class="markdown" innerHTML={marked(content)}></div>
</article>