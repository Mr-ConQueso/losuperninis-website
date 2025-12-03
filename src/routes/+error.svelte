<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		// Redirect to specific error pages for 404 and 500
		if ($page.status === 404) {
			goto('/404');
		} else if ($page.status === 500) {
			goto('/500');
		}
		else {
			goto('/error');
		}
	});
</script>

<div></div>