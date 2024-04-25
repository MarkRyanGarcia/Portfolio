<script>
    const nav = [
        {
            name: "Home",
            href: "/",
            src: "/favicon.png",
            alt: "Home"
        },
        {
            name: "Projects",
            href: "https://github.com/MarkRyanGarcia",
            src: "/github.svg",
            alt: "Projects"
        },
        // {
        //     name: "Contact",
        //     href: "/contact",
        //     // src: "",
        //     alt: "Contact",
        // },
        {
            name: "Dark Theme",
            href: "https://www.pillo.dev/",
            src: "/heart-eyes.svg",
            alt: "Dark Theme Button"
        }
    ];
</script>


<header class="container">
    <div></div>
    <div></div>
    <div class="rightdisplay">
        {#each nav.entries() as [index, item]}
            <a href={item.href}>
                <img src={item.src} alt={item.alt} class="item"/>
            </a>
            {#if index < nav.length - 1}
                <div class="divider"></div>
            {/if}
        {/each}
    </div>
</header>


<style>
    /* Navbar Holder */
    .container {
        /* Styling  */
        border-bottom: 0.25rem solid var(--color3);
        border-left: 0.25rem solid var(--color3);
        border-radius: 4px;
        /* Priority */
        z-index: 20;
        background-color: var(--color4);
        /* Sizing */
        height: 4.5rem;
        width: 30rem;
        margin-left: 0;
        margin-right: 0;
        /* Position */
        position: fixed;
        top: -.5rem;
        left: 500;
        right: 0;
        /* Position containers */
        display: grid;
        grid-template-rows: 1rem 3rem;
        grid-template-columns: 50% 50%;
    }
    /* Right Side display */
    .rightdisplay {
        /* Position items */
        margin-left: 0.5rem;
        display: grid;
        grid-template-rows: 3rem;
        grid-template-columns: repeat(2, 3rem 1.5rem) 3rem;
    }
    /* The silly little images */
    .item {
        color: var(--color1);
        height: 3rem;
        width: 3rem;
    }
    .item:hover {
        color: var(--color2);
        cursor: pointer;
    }
    /* The silly little dividers */
        .divider {
            margin-left: 0.675rem;
            margin-right: 0.675rem;
            margin-top: 0.25rem;
            height: 2.5rem;
            width: 0.15rem;
            background-color: var(--color3);
        }
</style>