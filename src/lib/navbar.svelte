<div class="navbar">
    <button class="button">
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
        <img src="/heart-eyes.svg" alt="Link to Pillow's Site" width="24" height="24">
      </span> Pookie
    </a>
</div>


<style>
    .navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #333;
    padding: 10px 20px;
  }

  .button {
    background-color: #555;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-left: 10px;
    border-radius: 80px;
    display: flex;
    align-items: flex-end;
  }

  .button-icon {
    margin-right: 5px;
  }
</style>