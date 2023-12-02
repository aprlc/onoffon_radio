<!-- <section>
	<div class="info">
		<h1>How to Build a Handmade Radio</h1>
		<p>This manual walks through how you can build an online radio like the one on this website.</p>
		<p>Last updated on 11.30.2023</p>
	</div>

	<div>
		<iframe src="/radio_manual.pdf" title="PDF"/>
	</div>
</section> -->

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
