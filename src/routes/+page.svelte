<script>
    import Navbar from '$lib/navbar.svelte';
</script>

<Navbar />


<h1 class="text-center text-4xl font-bold">Hello! I'm Mark (:</h1>
<h3 class="text-center text-2xl">I like to code :)</h3>

As you can see, this page is pretty empty at the moment

<header class="container">
    <h1 class="title">Sick Box</h1>
    <p class="font-bold">This is a pretty funky box don't ya think?</p>
        <p class="font-bold">
            I have no idea what im gonna put in here but oh boy its gonna be epic
        </p>
</header>

<style>
    .container {
        /* Center items within grid */
        display: grid;
        place-items: center;
        /* Center the grid itself */
        width: 40%;
        height: 80%;
        margin: auto;
        background-color: var(--color4);
        border-radius: 8px;
        /* border-color: var(--color3); */
    }
    .title {
        text-align: center;
        font-size: 3rem;
        color: var(--color2);
        height: 4.5rem;
        width: 18rem;
        border-bottom: 0.25rem solid var(--color3);
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
    }
</style>