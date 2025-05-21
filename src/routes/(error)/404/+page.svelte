<style>
    .error-code {
        font-size: 1.5rem;
        color: var(--color-pink);
        font-family: var(--font-subheading);
    }
</style>

<div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-2xl px-8 py-16 text-center">
        <h1 class="text-9xl font-bold text-gray-200">404</h1>

        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1 class="text-3xl mb-4">Page Not Found</h1>
            <p class="error-code mb-8">
                Oops! The page you're looking for<br>seems to have gone on vacation 🏖️
            </p>
        </div>

        <div class="mt-32 space-y-4">
            <div class="space-x-4">
                <a
                        href="/"
                        class="btn-primary"
                >
                    Go Home Now
                </a>
                <button
                        on:click={() => history.go(-2)}
                        class="btn-secondary"
                >
                    Go Back
                </button>
            </div>
        </div>
    </div>
</div>