<script>
    const ProjectList = [
        {
            title: "Portfolio Website",
            description: "A Portfolio website. Click HERE to view",
            href: 'https://markg.dev/',
            images: [
                {
                src: "/ProjectImages/porf.png",
                alt: "Portfolio Top Screenshot",
                width: "400px",
                },
                {
                src: "/ProjectImages/porf2.png",
                alt: "Portfolio About Me Screenshot",
                width: "400px",
                },
                {
                src: "/ProjectImages/porf3.png",
                alt: "Portfolio Projects Screenshot",
                width: "400px",
                }
            ]
        },
        {
            title: "Marktris",
            description: "A Tetris clone made in godot. It includes many in-game features to make the game as faithful to modern tetris as possible. This includes 7-bag, wall-kicks, the Super Rotation System, and will soon include more. Web Deployment! Click here ^",
            alt: "Tetris Clone Project",
            href: 'https://marktris.markg.dev/',
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
        },
        {
            title: "DoodleJump ACM Workshop",
            description: 'As part of a beginner-friendly Unity workshop I led, I developed a 2D platformer game inspired by Doodle Jump to teach the fundamentals of game development using Unity and C#. Participants learned hands-on by building the game from scratch, covering key concepts such as: Player movement and physics with Rigidbody2D, Collision handling using OnTriggerEnter2D, Procedural platform spawning and cleanup, Camera tracking and infinite background scrolling, Basic UI design and a real-time score system',
            alt: 'Doodle Jump Clone – Unity Workshop',
            href: 'https://github.com/MarkRyanGarcia/Doodle-Jump-Gamedev-SP25',
            images: [
                {
                src: "/ProjectImages/doodlejump1.png",
                alt: "Doodlejump Presentation Cover Slide Screenshot",
                width: "320px",
                },
                {
                src: "/ProjectImages/doodlejump2.png",
                alt: "DoodleJump Unity Screenshot",
                width: "320px",
                }
            ]
        },
        {
            title: "Marktris React",
            description: "Remake of Marktris Godot export in react because it is was very slow. Still heavily WIP",
            alt: 'Marktris in React',
            href: 'https://marktris-react.markg.dev/',
            images: [
                {
                src: "/ProjectImages/marktrisreact1.png",
                alt: "Marktris empty board screenshot",
                width: "420px",
                },
                {
                src: "/ProjectImages/marktrisreact2.png",
                alt: "Marktris Gameplay Screenshot",
                width: "420px",
                }
            ]
        },
    ];
</script>


<div>
    <h1 class="text-5xl font-bold text-red-600 text-center">
        Projects
    </h1>
</div>
<div class="projectcontainer" >
    {#each ProjectList.entries() as [index, item]}
        <div class="project"  onclick="window.location.href = '{item.href}';">
            <h3 class="text-4xl font-bold text-white custommargins text-center">
                {item.title}
            </h3>
            <a class="text-white text-center custommargins" >
                {item.description}
            </a>
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
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        justify-content: space-around;
        margin-bottom: 2rem;
        margin-top: 1rem;
        
    }

    .project {
        border: 10px solid transparent;
        border-color: #CFD6E7;
        border-radius: 2rem;
        border-width: 10px;
        display: flex;
        flex-wrap: wrap;
        width: 30%;
        height: 20%;
        background-color: rgba(0,172,193,1);
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        background-image: linear-gradient(60deg, rgba(84,58,183,1) 0%, rgba(0,172,193,1) 100%); 
        margin-bottom:1rem;
        cursor: pointer;
    }

    .custommargins {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }

    /*Shrinking for mobile*/
    @media (max-width: 768px) {
    .project {
        width: 90%;
    }
    }
</style>