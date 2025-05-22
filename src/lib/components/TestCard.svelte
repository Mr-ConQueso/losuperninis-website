<script lang="ts">
    import {_} from "$lib/lang/i18n.ts";

    export let titleKey = '';
    export let genreKey = '';
    export let imageSrc = '';
    export let cardSvg = '';
    export let labelSvg = '';
    export let imageAlt = '';
    export let link = '';
</script>

<style>
    .card {
        position: relative;
        width: 320px;
        height: 520px;
        overflow: hidden;
        background-image: var(--image-url);
        background-size: cover;
        background-position: center;
        border-radius: var(--border-radius-small);
    }

    .card::before {
        content: "";
        position: absolute;
        inset: 0;
    }
    
    .card-inside {
        position: absolute;
        height: 100%;
        width: 100%;
    }
    
    .card-inside img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border: 2px solid var(--color-dark);
    }
    
    .card img {
        position: absolute;
        top: 17%;
        left: 10%;
        width: 80%;
        height: 77%;
        object-fit: cover;
    }
    
    .genre-label {
        position: absolute;
        bottom: 1%;
        right: 2%;
        width: 75%;
        height: 34.5%;
        z-index: 1;
        background-image: var(--image-url);
        background-size: contain;
        background-position: center;
    }

    .card h2 {
        position: absolute;
        color: #ffffff;
        left: 20%;
        top: 6.5%;
        z-index: 1;
        font-size: 1.5rem;
    }
    
    .genre-label h3 {
        text-align: center;
        margin: 0;
        text-overflow: ellipsis;
        font-weight: bold;
    }
    
    .genre-label svg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 8px;
        left: 10px;
    }

    .genre-text {
        font-size: 0.4rem;
        font-family: var(--font-subheading);
        margin-bottom: 1rem;
        letter-spacing: 0.1rem;
    }
</style>

<main class="card" style="--image-url: url({cardSvg})">
    <div class="genre-label" style="--image-url: url({labelSvg})">
        <svg
                width="65.06546mm"
                height="49.210369mm"
                viewBox="0 0 65.065461 49.210368"><g
                transform="translate(-35.130641,-106.66948)">
            <path
                    style="fill:none;stroke:none;"
                    d="m -92.815133,18.533239 c 0,0 9.269308,-19.6275785 32.817913,-31.698715 C -36.448614,-25.236609 -12.504235,-23.65351 7.6802821,-37.307743 27.864805,-50.961976 29.447901,-60.658461 29.447901,-60.658461"
                    id="path1"
                    transform="matrix(0.45986065,0,0,0.45986065,81.558137,140.38796)" />
            <text class="genre-text" style="fill:white;">
                <textPath startOffset="5" href="#path1">{$_(genreKey)}</textPath>
            </text></g>
        </svg>
    </div>
    <a href={link} aria-label="Card">
        <div class="card-inside">
            <h2>{$_(titleKey)}</h2>
            <img src={imageSrc} alt={imageAlt}>
        </div>
    </a>
</main>
