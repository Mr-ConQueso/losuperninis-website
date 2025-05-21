<!-- Floor.svelte -->
<script>
    export let svgPath = '';
</script>

<div class="floor">
    <img src={svgPath} alt="Floor" />
</div>

<style>
    .floor {
        width: 100%;
        position: relative;
    }

    img {
        display: block;
        width: 100%;
    }
</style>
