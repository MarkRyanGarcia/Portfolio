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
            href: "/projects",
            // src: "",
            alt: "Projects"
        },
    ];
</script>


<header class="container">
    <div></div>
    <div></div>
    <div class="rightdisplay">
        {#each nav.entries() as [index, item]}
            {#if item.routine !== undefined}
            <img src={item.src} alt={item.alt} class="item" on:click={item.routine}/>
            {:else}
            <a href={item.href}>
            <img src={item.src} alt={item.alt} class="item"/>
            </a>
            {/if}
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
        grid-template-columns: repeat(1, 3rem 1.5rem) 3rem;
    }
    /* The silly little images */
    .item {
        height: 3rem;
        width: 3rem;
        -webkit-filter: invert(1);
        filter: invert(1);
        margin-left: 0;
        margin-right: 0;
    }
    .item:hover {
        -webkit-filter: invert(0.75);
        filter: invert(0.75);
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