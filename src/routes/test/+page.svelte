<script>
    import TestCard from "$lib/components/TestCard.svelte";
</script>

<style>
    .svg {
        left: 100px;
        z-index: 100;
    }
</style>

<svg width="200" height="100" class="svg">
    <path stroke="red" id="label" d="M 50 450 C 50 400 150 300 200 300 C 250 275 300 300 400 300 C 500 300 550 250 650 150 "/>
    
</svg>


<svg><g
        id="layer1"
        transform="translate(-35.130641,-106.66948)">
    <path
       style="display:inline;fill:none;stroke:#ffffff;stroke-width:2.17457;stroke-linecap:square;stroke-miterlimit:3.4;stroke-opacity:1;paint-order:stroke markers fill"
       d="m -92.815133,18.533239 c 0,0 9.269308,-19.6275785 32.817913,-31.698715 C -36.448614,-25.236609 -12.504235,-23.65351 7.6802821,-37.307743 27.864805,-50.961976 29.447901,-60.658461 29.447901,-60.658461"
       id="path1"
       transform="matrix(0.45986065,0,0,0.45986065,81.558137,140.38796)" /><g/>
    <text>
        <textPath href="#path1">Adventure.</textPath>
    </text>
</svg>

