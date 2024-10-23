<script>
    // import { onMount } from 'svelte';

    // onMount(() => {
    //     alert("hi")
    //     document.addEventListener('scroll', () => {
    //     const nav = document.querySelector('.navbar');
    //     if (nav === null) return;
    //     const scrollamnt = document.documentElement.scrollTop || document.body.scrollTop;
    //     if (scrollamnt > 64 * 10.8) {
    //         nav.style.color = "black";
    //     } else {
    //         nav.style.color = "white";
    //     }
    //     })
    // });

    const Navbuttons = [
        // NOTE:
        // EACH BUTTON MUST EITHER HAVE AN href OR AN onclick PROPERTY
        {
            text: 'Home',
            src: '/favicon.png',
            alt: 'Home Button',
            onclick: scrollToTop,
        },
        {
            text: 'My Github',
            src: '/github.svg',
            alt: 'Github Profile',
            href: 'https://github.com/MarkRyanGarcia',

        },
        {
            text: 'Linkedin',
            src: '/linkedin.svg',
            alt: 'Linkedin Profile',
            href: 'https://www.linkedin.com/in/mark-garcia-aa9b2b306/',
        },
    ];

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'  
      });
    }
  </script>

<div class="navbar">
    {#each Navbuttons.entries() as [index, item]}
        {#if item.href}
        <a class="button" href={item.href} target="_blank">
            <span class="button-icon">
                <img src={item.src} alt={item.alt}>
            </span> {item.text}
        </a>
        {:else}
        <button class="button" on:click={item.onclick}>
            <span class="button-icon">
                <img src={item.src} alt={item.alt}>
            </span> {item.text}
        </button>
        {/if}
    {/each}
</div>

<style>
.navbar {
    position: fixed;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: transparent;
    padding: 10px 20px;
  }

  .button {
    background: transparent;
    font-size: 1vw;
    color: white;
    border: none;
    font-weight: 700;
    padding: 10px 20px;
    margin-left: 10px;
    border-radius: 80px;
    display: flex;
    align-items: flex-end;
    transition: all 0.2s ease-in-out;
  }

  .button:hover {
    color: var(--color1);
    background: white;
  }

  .button-icon {
    margin-right: 5px;
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 768px) {
    .button {
    font-size: 3vw;
    padding: 8px 15px;
    margin-left: 8px;
    border-radius: 50px;
    color: var(--color1);
    background: white;
  }

  .button-icon img {
    width: 3vw;
    height: 3vw;
  }
}

</style>