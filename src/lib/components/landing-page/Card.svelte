<script>
    import {_} from "$lib/lang/i18n.js";

    export let titleKey = '';
    export let genreKey = '';
    export let descriptionKey = '';
    export let imageSrc = '';
    export let imageAlt = '';
    export let link = '';
</script>

<style>
    .card {
        width: 500px;
        height: 700px;
        background-color: #c1713f;
        border-radius: 30px;
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        transition: transform 0.3s ease, z-index 0.3s ease;
        position: absolute;
        border: 15px solid #000000;
    }

    .description {
        padding: 1rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    h2 {
        font-size: 300%;
        font-weight: bold;
    }

    h3 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.2rem;
        margin: 0;
    }

    img {
        width: 100%;
        height: auto;
        display: block;
        border-radius: 0 0 20px 20px;
        overflow: hidden;
    }

    @media (max-width: 768px) {
        .card {
            width: 22rem;
            height: 35rem;
        }

        .description {
            padding: 0.5rem;
        }

        img {
            width: 100%;
            height: auto;
            display: block;
            border-radius: 0 0 20px 20px;
            overflow: hidden;
        }
    }
    
</style>

<div class="card">
    <a href="{link}"><h2 class="bowlby-one-regular">{@html $_(titleKey)}</h2></a>

    <main class="description">
        <h3 class="bowlby-one-regular">{$_(genreKey)}</h3>
        <p>{$_(descriptionKey)}</p>
    </main>
    <img src={imageSrc} alt={imageAlt} />
</div>
