<script>
    const ProjectList = [
        {
            title: "Marktris",
            description: "A Tetris clone made in godot. It includes many in-game features to make the game as faithful to modern tetris as possible. This includes 7-bag, wall-kicks, the Super Rotation System, and will soon include more. Web Deployment coming soon...",
            alt: "Tetris Clone Project",
            href: '',
            images: [
                {
                src: "/ProjectImages/TitleScreen.png",
                alt: "Tetris Title Screen Screenshot",
                width: "400px",
                },
                {
                src: "/ProjectImages/marktrisscreenshot2.png",
                alt: "Tetris Project Screenshot",
                width: "400px",
                }
            ]
        },
        {
            title: "NeonChat",
            description: "Submission for Fullyhacks 2024. Neonchat is a Bluetooth-based direct messaging chatbox that allows seamless communication between devices.",
            alt: 'Fullyhacks24 Submission',
            href: 'https://jowen-ster.github.io/FULLYHACKS_NEONCHAT/',
            images: [
                {
                src: "/ProjectImages/neonchat1.png",
                alt: "NeonChat Home Screen",
                width: "330px",
                },
                {
                src: "/ProjectImages/neonchat2.png",
                alt: "NeonChat Message Screen",
                width: "300px",
                }
            ]
        }
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
                <h3 class="text-4xl font-bold text-white custommargins">
                    {item.title}
                </h3>
                <p class="text-white text-center custommargins">
                    {item.description}
                </p>
                {#if item.images.length !== 0}
                    {#each item.images as image}
                    <a class="custommargins">
                    <img src={image.src} alt={image.alt} title={image.alt} width={image.width}>
                    </a>
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
        margin-bottom: 2rem;
    }

    .project {
        border: 10px solid transparent;
        border-image: linear-gradient(to bottom left, #E0F0F0, #C0C0E0) 1;
        border-width: 10px;
        display: flex;
        width: 600px;
        height: 800px;
        background-color: rgba(0,172,193,1);
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background-image: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%); 
    }

    .custommargins {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
</style>