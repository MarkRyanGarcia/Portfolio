<script>
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'  
      });
    }
  </script>

<div class="navbar">
    <button class="button" on:click={scrollToTop}>
      <span class="button-icon">
        <img src="/favicon.png" alt="Home" width="24" height="24">
      </span> Home
    </button>
    <a class="button" href="https://github.com/MarkRyanGarcia" target="_blank">
        <span class="button-icon" >
          <img src="/github.svg" alt="Github Profile" width="24" height="24">
        </span> My Github
      </a>
    <a class="button" href="https://pillo.dev/" target="_blank">
      <span class="button-icon" >
        <img src="/heart-eyes.svg" alt="Pillow" width="24" height="24">
      </span> Pookie
    </a>
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
</style>