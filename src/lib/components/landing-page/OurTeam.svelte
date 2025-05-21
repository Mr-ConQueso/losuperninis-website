<script>

    import Floor from "../our-team-page/Floor.svelte";
    import TeamMember from "../our-team-page/TeamMember.svelte";

    let heroes = [
        {
            silhouetteImage: '/src/assets/images/our-team/Hero_1.png',
            coloredImage: '/src/assets/images/our-team/Hero_1_Selected.png',
            chatText: 'I handle the code!',
            left: -220,
            top: 8
        },
        {
            silhouetteImage: '/src/assets/images/our-team/Hero_3.png',
            coloredImage: '/src/assets/images/our-team/Hero_3_Selected.png',
            chatText: 'I design the art!',
            left: -120,
            top: -5
        },
        {
            silhouetteImage: '/src/assets/images/our-team/Hero_3.png',
            coloredImage: '/src/assets/images/our-team/Hero_3_Selected.png',
            chatText: 'I create the music!',
            left: -20,
            top: -10
        },
        {
            silhouetteImage: '/src/assets/images/our-team/Hero_1.png',
            coloredImage: '/src/assets/images/our-team/Hero_1_Selected.png',
            chatText: 'I manage the team!',
            left: 80,
            top: -6
        },
        {
            silhouetteImage: '/src/assets/images/our-team/Hero_1.png',
            coloredImage: '/src/assets/images/our-team/Hero_1_Selected.png',
            chatText: 'I manage the team!',
            left: 180,
            top: -10
        },
        {
            silhouetteImage: '/src/assets/images/our-team/Hero_1.png',
            coloredImage: '/src/assets/images/our-team/Hero_1_Selected.png',
            chatText: 'I manage the team!',
            left: 220,
            top: -10
        }
    ];
</script>

<style>
    .team-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        left: 0;
    }

    .heroes {
        display: flex;
        justify-content: center;
        position: relative;
        width: 100%;
        height: 50%;
    }

    .title {
        font-size: 3.5rem;
        text-align: center;
        margin-bottom: 30vh;
    }
</style>

<div class="team-section">

    <h1 class="bowlby-one-regular title">MEET THE TEAM</h1>

    <div class="heroes">
        {#each heroes as hero}
            <TeamMember
                    silhouetteImage={hero.silhouetteImage}
                    chatText={hero.chatText}
                    left={hero.left}
                    top={hero.top} />
        {/each}
    </div>
    <Floor svgPath="/src/assets/images/our-team/floor.svg" />
</div>