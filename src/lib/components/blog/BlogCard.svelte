<script>
    export let uid;
    export let coverImage;
    export let languages;
</script>

<article
        class="bg-white rounded-[var(--border-radius-medium)] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 animate-slideUp"
>
    <img src={coverImage} alt="Cover for {languages.en?.title}" class="w-full h-48 object-cover" />

    <div class="p-5">
        <h2
                class="text-2xl font-subheading text-[var(--color-purple)] mb-2 leading-snug"
                style="font-family: var(--font-subheading)"
        >
            {languages.en?.title || 'Untitled'}
        </h2>

        <p class="text-base text-[var(--color-dark)] mb-4">
            {languages.en?.excerpt || 'This blog has no summary but promises shenanigans!'}
        </p>

        <div class="flex flex-wrap gap-2">
            {#each Object.entries(languages) as [langCode]}
                <a
                        href={`/blog/${uid}/${langCode}`}
                        class="btn-secondary text-sm px-3 py-1"
                        style="font-size: 0.85rem"
                >
                    {langCode.toUpperCase()}
                </a>
            {/each}
        </div>
    </div>
</article>
