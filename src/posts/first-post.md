---
title: The System Works!
date: Dec 05, 2025
excerpt: If you can read this, the markdown pipeline is successfully reading files from the src/posts folder.
image: https://www.google.com/search?q=https://images.unsplash.com/photo-1550745165-9bc0b252726f
featured: true
tags: ['System', 'Debug']
---
<script>
import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
</script>

Hello World

This content is coming from src/posts/first-post.md.

<ComicPanel variant={2} bgColor="var(--nini-blue)">
<h3 class="text-white">It is working!</h3>
<p class="text-white">You have successfully connected the static file loader.</p>
</ComicPanel>