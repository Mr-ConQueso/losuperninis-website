<script lang="ts">
    import { page } from '$app/stores';
</script>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-xl p-8 text-center bg-white shadow-xl rounded-lg">
        <h1 class="text-4xl font-bold text-red-600 mb-4">
            Unexpected Error
        </h1>

        <p class="text-gray-600 text-lg mb-6">
            Something went wrong. Please try again or contact support.
        </p>

        {#if $page.error?.message}
            <div class="bg-gray-50 p-4 rounded-lg mb-6">
                <p class="text-gray-700">Error details:</p>
                <p class="text-sm text-gray-500">{$page.error.message}</p>
            </div>
        {/if}

        <div class="space-x-4">
            <a
                    href="/static"
                    class="inline-block px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
                Go Home
            </a>
            <button
                    on:click={() => history.back()}
                    class="inline-block px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
                Go Back
            </button>
        </div>
    </div>
</div>