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
	grid-template-columns: repeat(5, 1fr); 
  }

  .right-div {
	grid-column: 3 / span 2;
	}

	@media screen and (max-width: 780px) {
		.right-div {
			grid-column: 1 / span 5;
		}
	}
</style>
