<svelte:head>
    <title>Loading...</title>
</svelte:head>

<style>
    .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background: var(--color-purple);
    }

    .loading-content {
        text-align: center;
        max-width: 400px;
        padding: 2rem;
    }

    .spinner {
        width: 50px;
        height: 50px;
        margin: 0 auto 1.5rem;
        border: 10px solid #e0e0e0;
        border-top: 10px solid var(--color-pink);
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    .progress-bar {
        width: 200px;
        height: 8px;
        background: #e0e0e0;
        border-radius: 4px;
        margin: 1rem auto;
        overflow: hidden;
    }

    .progress-fill {
        height: 100%;
        background: var(--color-pink);
        transition: width 0.3s ease;
    }

    .status-text {
        color: #fff;
        text-shadow: 2px 2px var(--color-dark);
        margin: 0.9rem 0;
        font-size: 2rem;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>

<div class="loading-container">
    <div class="loading-content">
        <div class="spinner"></div>
        <div class="progress-bar">
            <div class="progress-fill" style={`width: ${1}%`}></div>
        </div>
        <h1 class="status-text">Loading language resources ...</h1>
    </div>
</div>