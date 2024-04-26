<script>
    const ProjectList = [
        {
            title: "Marktris",
            description: "A Tetris clone made in godot. It includes many in-game features to make the game as faithful to modern tetris as possible. This includes 7-bag, wall-kicks, the Super Rotation System, and will soon include more. Web Deployment coming soon...",
            alt: "Tetris Clone Project",
            images: [
                {
                src: "/TitleScreen.png",
                alt: "Tetris Title Screen Screenshot",
                },
                {
                src: "/marktrisscreenshot2.png",
                alt: "Tetris Project Screenshot"
                }
            ]
        },
    ];
</script>


<div>
    <h1 class="text-5xl font-bold text-red-600">
        Projects
    </h1>
</div>
<div class="projectcontainer">
    {#each ProjectList.entries() as [index, item]}
        <div class="project">
            <h3 class="text-4xl font-bold text-gray-950">
                {item.title}
            </h3>
            <p class="text-black text-center">
                {item.description}
            </p>
            {#if item.images.length !== 0}
                {#each item.images as image}
                <img src={image.src} alt={image.alt} title={image.alt} width="400">
                {/each}
            {/if}
        </div>
    {/each}
</div>

<style>
    .projectcontainer {
        /* border-color: red; */
        /* border-width: 2px; */
        display: flex;
        width: 100%;
        justify-content: space-around;
    }
    .project {
        /* border-color: blue; */
        /* border-width: 2px; */
        display: flex;
        width: 600px;
        height: 800px;
        background-color: rgba(40,115,190,.6);
        justify-content: flex-start;
        border-radius: 1rem;
        align-items: center;
        flex-direction: column;
    }
</style>