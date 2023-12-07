<script>
    export let showOnPx = 150;
    let hidden = true;
  
    function goTop() {
      document.body.scrollIntoView();
    }
  
    function scrollContainer() {
      return document.documentElement || document.body;
    }
  
    function handleOnScroll() {
      if (!scrollContainer()) {
        return;
      }
  
      if (scrollContainer().scrollTop > showOnPx) {
        hidden = false;
      } else {
        hidden = true;
      }
    }
  </script>
  
  <style>
    .back-to-top {
      opacity: 1;
      transition: opacity 0.5s, visibility 0.5s;
      position: fixed;
      z-index: 99;
      right: 3rem;
      user-select: none;
      bottom: 1rem;
      color: #ff4e3c;
      background-color: #fff;
      font-family: "Toren", serif;
      max-width: 20%;
    }

    .back-to-top:hover {
      background-color: #fee7f0;
    }
  
    .back-to-top.hidden {
      opacity: 0;
      visibility: hidden;
    }

    @media screen and (max-width: 780px) {
        .back-to-top {
            right: 1rem;
        }
    }
  </style>
  
  <svelte:window on:scroll={handleOnScroll} />
  
  <div class="back-to-top" on:click={goTop} class:hidden>(↑)</div>
  