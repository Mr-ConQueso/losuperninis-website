<script>
</script>

<section class="comic-section">
	<!-- HEADER -->
	<header class="comic-header">
		<img src="/logo.png" alt="Game Logo" class="logo" />
		<h1>이것이 남자의 샤투!</h1>
		<h2>강한 남자라면 어서 올라 타~!!!</h2>
	</header>

	<!-- CROOKED COMIC PANELS -->
	<div class="comic-panels">
		<div class="panel panel1">
			<img src="/images/panel1.jpg" alt="Panel 1" />
			<span class="speech">이것이 바로 완전아트다!</span>
		</div>
		<div class="panel panel2">
			<img src="/images/panel2.jpg" alt="Panel 2" />
			<span class="speech">신규서버 라면 이 정도는 기본이지!</span>
		</div>
		<div class="panel panel3">
			<img src="/images/panel3.jpg" alt="Panel 3" />
			<span class="speech">이것이 남자의 VIP!</span>
		</div>
		<div class="panel panel4">
			<img src="/images/panel4.jpg" alt="Panel 4" />
			<span class="speech">공략은 이렇게 쓰는거다!</span>
		</div>
	</div>

	<!-- CTA BUTTON -->
	<div class="cta">
		<button>GAME START</button>
	</div>
</section>

<style>
    .comic-section {
        background: #000;
        color: #fff;
        font-family: 'Luckiest Guy', sans-serif;
        text-align: center;
        overflow: hidden;
        position: relative;
        padding: 2rem 1rem;
    }

    /* Header */
    .comic-header h1 {
        font-size: 2rem;
        color: #ffda00;
        margin-bottom: 0.2em;
        text-shadow: 3px 3px 0 #d02329;
    }

    .comic-header h2 {
        font-size: 1.4rem;
        color: #ff3c00;
        text-shadow: 2px 2px 0 #000;
    }

    .logo {
        width: 150px;
        margin-bottom: 1rem;
    }

    /* Panel grid */
    .comic-panels {
        display: flex;
        justify-content: center;
        align-items: stretch;
        gap: 1rem;
        margin: 2rem auto;
        flex-wrap: wrap;
        position: relative;
    }

    /* Individual tilted panels */
    .panel {
        position: relative;
        width: 180px;
        overflow: hidden;
        border: 4px solid #000;
        box-shadow: 4px 4px 0 #000;
        transform: rotate(-4deg);
        transition: transform 0.2s ease;
    }

    .panel:nth-child(2) { transform: rotate(3deg); }
    .panel:nth-child(3) { transform: rotate(-5deg); }
    .panel:nth-child(4) { transform: rotate(4deg); }

    .panel img {
        width: 100%;
        display: block;
        filter: contrast(1.2) saturate(1.3);
    }

    .panel .speech {
        position: absolute;
        bottom: 10%;
        left: 10%;
        background: #fff;
        color: #000;
        font-size: 0.8rem;
        font-family: 'Fredoka Bold', sans-serif;
        padding: 0.3rem 0.5rem;
        clip-path: polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%);
    }

    /* CTA Button */
    .cta {
        margin-top: 2rem;
    }

    .cta button {
        background: #ffda00;
        color: #000;
        border: 3px solid #000;
        padding: 1rem 3rem;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: 4px 4px 0 #d02329;
        transition: transform 0.2s;
    }

    .cta button:hover {
        transform: translateY(-3px);
        box-shadow: 6px 6px 0 #d02329;
    }
</style>