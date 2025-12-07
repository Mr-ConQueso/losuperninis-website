---
title: "Unity vs Unreal: Why We Chose Chaos"
date: Sep 20, 2025
excerpt: "A technical deep dive into our engine choice. Spoiler: It involved a coin flip."
image: https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80
featured: false
tags: ["Tech", "Code"]
---
<script>
import ComicPanel from '$lib/components/generic/ComicPanel.svelte';
import ComicButton from '$lib/components/generic/ComicButton.svelte';
</script>

How it started

It was a tuesday night. The pizza was cold. The code was messy.

We decided to change the gravity constant from 9.8 to -9.8 just to see what would happen.

<ComicPanel variant={2} bgColor="var(--nini-red)">
<h3 class="text-white">WARNING: DO NOT TRY THIS AT HOME</h3>
<p class="text-white">Our main character flew into the sun. It was majestic, but game-breaking.</p>
</ComicPanel>

The Fix

Eventually, we realized that gravity should probably pull things down.

Check your constants

Don't code after 3 AM

Eat fresh pizza

<ComicButton text="Download the Patch" />