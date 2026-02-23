---
title: "Post-Jam Clarity"
date: Oct 05, 2025
excerpt: Reflecting on our 48-hour crunch. What we learned about sleep deprivation and pizza consumption.
image: https://images.unsplash.com/photo-1504384308090-c54be3855091?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80
featured: false
tags: ["Game Jam", "Reflection"]
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