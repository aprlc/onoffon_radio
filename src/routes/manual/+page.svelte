<script>
  export let data;
  const manual = data.posts;

  import BackToTop from "$lib/components/BackToTop.svelte";
</script>

<div class="manual-container">
	<div class="right-div">
		<svelte:component this={manual.default} />
	</div>
</div>

<BackToTop />

<style>
  .manual-container {
	display: grid;
	grid-template-columns: repeat(9, 1fr); /* Eight columns with equal width */
  }

  .right-div {
	grid-column: 5 / span 4;
}

  @media screen and (max-width: 768px) {
    .right-div {
		grid-column: first / end;
    }
  }
</style>
