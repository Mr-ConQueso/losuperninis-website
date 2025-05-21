<script lang="ts">
    import { BROWSER } from 'esm-env';

    let retryCount = 0;

    function handleRetry() {
        retryCount++;
        if (BROWSER) {
            window.location.reload();
        }
    }
</script>

<style>
    .error-code {
        font-size: 1.5rem;
        color: var(--color-pink);
        font-family: var(--font-subheading);
    }
</style>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-2xl px-8 py-16 text-center">
        <div class="mb-8">
            <h1 class="text-9xl font-bold text-gray-200">500</h1>

            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Server Error</h2>
                <p class="error-code">
                    Our servers are taking a coffee break ☕️
                    <br>
                    Please try again in a moment.
                </p>
            </div>
        </div>

        <div class="mt-32 space-y-4">
            {#if retryCount > 0}
                <p class="text-gray-500">
                    Retry attempt {retryCount}...
                </p>
            {/if}

            <div class="space-x-4">
                <button
                        on:click={handleRetry}
                        class="btn-primary"
                >
                    Try Again
                </button>
                <a
                        href="/"
                        class="btn-secondary"
                >
                    Go Home
                </a>
            </div>

            {#if retryCount >= 3}
                <p class="text-sm text-gray-500 mt-4">
                    Still having issues?
                    <a href="/support" class="text-blue-600 hover:underline">Contact Support</a>
                </p>
            {/if}
        </div>
    </div>
</div>